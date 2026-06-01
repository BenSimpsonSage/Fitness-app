import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

export async function POST(req: NextRequest) {
  try {
    const { mealName, ingredients } = await req.json();

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "API key not configured on server" }, { status: 500 });
    }

    const client = new Anthropic({ apiKey });

    const ingredientList = ingredients
      .map((i: { item: string; amount: string }) => `- ${i.item}: ${i.amount}`)
      .join("\n");

    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 600,
      messages: [
        {
          role: "user",
          content: `Give me clear, simple step-by-step cooking instructions for: ${mealName}

Ingredients:
${ingredientList}

Rules:
- Number each step
- Beginner-friendly — assume they have never cooked before
- Be concise, no intros or padding
- UK measurements and terminology (grill not broil, courgette not zucchini, etc.)
- Do not suggest any ingredient changes or alternatives`,
        },
      ],
    });

    const text = message.content[0].type === "text" ? message.content[0].text : "";
    return NextResponse.json({ instructions: text });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
