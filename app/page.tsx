"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import type { UserStats } from "@/lib/calories";

const ACTIVITY_OPTIONS = [
  { value: "sedentary", label: "Sedentary", desc: "Desk job, little exercise" },
  { value: "light", label: "Lightly Active", desc: "1–3 days exercise/week" },
  { value: "moderate", label: "Moderately Active", desc: "3–5 days exercise/week" },
  { value: "active", label: "Very Active", desc: "Hard exercise 6–7 days/week" },
];

const COMMON_ALLERGENS = [
  "Peanuts",
  "Tree Nuts",
  "Dairy / Milk",
  "Eggs",
  "Gluten / Wheat",
  "Fish",
  "Shellfish",
  "Soya",
];

export default function SetupPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<Partial<UserStats>>({
    gender: "male",
    activityLevel: "light",
    goal: "lose",
    allergies: [],
  });
  const [customAllergen, setCustomAllergen] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("fitstart_stats");
    if (saved) router.replace("/dashboard");
  }, [router]);

  function update(field: keyof UserStats, value: unknown) {
    setForm((f) => ({ ...f, [field]: value }));
    setError("");
  }

  function toggleAllergen(allergen: string) {
    const current = form.allergies ?? [];
    if (current.includes(allergen)) {
      update("allergies", current.filter((a) => a !== allergen));
    } else {
      update("allergies", [...current, allergen]);
    }
  }

  function addCustomAllergen() {
    const trimmed = customAllergen.trim();
    if (!trimmed) return;
    const current = form.allergies ?? [];
    if (!current.includes(trimmed)) {
      update("allergies", [...current, trimmed]);
    }
    setCustomAllergen("");
  }

  function removeAllergen(allergen: string) {
    update("allergies", (form.allergies ?? []).filter((a) => a !== allergen));
  }

  function validate(): boolean {
    if (!form.heightCm || form.heightCm < 100 || form.heightCm > 250) {
      setError("Please enter a valid height (100–250 cm)");
      return false;
    }
    if (!form.weightKg || form.weightKg < 30 || form.weightKg > 300) {
      setError("Please enter a valid weight (30–300 kg)");
      return false;
    }
    if (!form.age || form.age < 16 || form.age > 99) {
      setError("Please enter a valid age (16–99)");
      return false;
    }
    return true;
  }

  function handleSubmit() {
    const stats: UserStats = {
      heightCm: form.heightCm!,
      weightKg: form.weightKg!,
      age: form.age!,
      gender: form.gender!,
      activityLevel: form.activityLevel!,
      goal: form.goal!,
      allergies: form.allergies ?? [],
    };
    localStorage.setItem("fitstart_stats", JSON.stringify(stats));
    router.push("/dashboard");
  }

  const steps = [
    // Step 0: Body stats
    <div key="stats" className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Height (cm)</label>
        <input
          type="number"
          inputMode="decimal"
          placeholder="e.g. 178"
          value={form.heightCm || ""}
          onChange={(e) => update("heightCm", parseFloat(e.target.value))}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Weight (kg)</label>
        <input
          type="number"
          inputMode="decimal"
          placeholder="e.g. 85"
          value={form.weightKg || ""}
          onChange={(e) => update("weightKg", parseFloat(e.target.value))}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
        <input
          type="number"
          inputMode="numeric"
          placeholder="e.g. 30"
          value={form.age || ""}
          onChange={(e) => update("age", parseInt(e.target.value))}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Sex</label>
        <div className="grid grid-cols-2 gap-3">
          {(["male", "female"] as const).map((g) => (
            <button
              key={g}
              onClick={() => update("gender", g)}
              className={`py-3 rounded-xl font-medium capitalize border-2 transition-all ${
                form.gender === g
                  ? "border-green-500 bg-green-50 text-green-700"
                  : "border-gray-200 bg-white text-gray-600"
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>
    </div>,

    // Step 1: Activity & goal
    <div key="activity" className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Activity Level</label>
        <div className="space-y-2">
          {ACTIVITY_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => update("activityLevel", opt.value)}
              className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all ${
                form.activityLevel === opt.value
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="font-medium text-gray-900">{opt.label}</div>
              <div className="text-sm text-gray-500">{opt.desc}</div>
            </button>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Goal</label>
        <div className="space-y-2">
          {[
            { value: "lose", label: "Lose Weight", desc: "500 kcal daily deficit" },
            { value: "maintain", label: "Maintain Weight", desc: "Eat at maintenance" },
            { value: "gain", label: "Build Muscle", desc: "300 kcal surplus" },
          ].map((g) => (
            <button
              key={g.value}
              onClick={() => update("goal", g.value)}
              className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all ${
                form.goal === g.value
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="font-medium text-gray-900">{g.label}</div>
              <div className="text-sm text-gray-500">{g.desc}</div>
            </button>
          ))}
        </div>
      </div>
    </div>,

    // Step 2: Allergies
    <div key="allergies" className="space-y-4">
      <p className="text-sm text-gray-500">
        Tap anything that applies. Meals with these ingredients will be flagged, and cooking
        instructions will suggest swaps.
      </p>
      <div className="flex flex-wrap gap-2">
        {COMMON_ALLERGENS.map((a) => {
          const selected = (form.allergies ?? []).includes(a);
          return (
            <button
              key={a}
              onClick={() => toggleAllergen(a)}
              className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all ${
                selected
                  ? "border-red-400 bg-red-50 text-red-700"
                  : "border-gray-200 bg-white text-gray-600"
              }`}
            >
              {selected ? "✕ " : ""}{a}
            </button>
          );
        })}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Other (e.g. Sesame)"
          value={customAllergen}
          onChange={(e) => setCustomAllergen(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addCustomAllergen()}
          className="flex-1 border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={addCustomAllergen}
          className="px-4 py-2.5 bg-gray-100 rounded-xl text-sm font-medium text-gray-700 active:bg-gray-200"
        >
          Add
        </button>
      </div>
      {(form.allergies ?? []).filter((a) => !COMMON_ALLERGENS.includes(a)).length > 0 && (
        <div className="flex flex-wrap gap-2">
          {(form.allergies ?? [])
            .filter((a) => !COMMON_ALLERGENS.includes(a))
            .map((a) => (
              <span
                key={a}
                className="flex items-center gap-1 px-3 py-1.5 bg-red-50 border-2 border-red-400 text-red-700 rounded-full text-sm font-medium"
              >
                {a}
                <button onClick={() => removeAllergen(a)} className="ml-1 text-red-400 font-bold">✕</button>
              </span>
            ))}
        </div>
      )}
      {(form.allergies ?? []).length === 0 && (
        <p className="text-xs text-gray-400">No allergies selected — tap any that apply, or skip.</p>
      )}
    </div>,
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-600 to-green-800 px-5 pt-16 pb-10">
      <div className="text-center mb-8">
        <div className="text-5xl mb-3">💪</div>
        <h1 className="text-3xl font-bold text-white">FitStart</h1>
        <p className="text-green-200 mt-1">Let&apos;s set up your plan</p>
      </div>

      <div className="flex justify-center gap-2 mb-6">
        {steps.map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all ${
              i === step ? "w-6 bg-white" : i < step ? "w-2 bg-green-300" : "w-2 bg-green-700"
            }`}
          />
        ))}
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-xl flex-1">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          {step === 0 && "Your Details"}
          {step === 1 && "Activity & Goal"}
          {step === 2 && "Allergies & Intolerances"}
        </h2>

        {steps[step]}

        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
            {error}
          </div>
        )}

        <div className="flex gap-3 mt-6">
          {step > 0 && (
            <button
              onClick={() => setStep((s) => s - 1)}
              className="flex-1 py-3 rounded-xl border-2 border-gray-200 font-medium text-gray-600 active:bg-gray-50"
            >
              Back
            </button>
          )}
          <button
            onClick={() => {
              if (step === 0 && !validate()) return;
              if (step < steps.length - 1) { setStep((s) => s + 1); }
              else handleSubmit();
            }}
            className="flex-1 py-3 rounded-xl bg-green-600 font-semibold text-white active:bg-green-700"
          >
            {step < steps.length - 1 ? "Next" : "Get Started →"}
          </button>
        </div>
      </div>
    </div>
  );
}
