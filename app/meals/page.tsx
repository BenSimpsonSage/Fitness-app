"use client";

import { useState, useEffect, useRef } from "react";
import BottomNav from "@/components/BottomNav";
import { getFilteredPlan, type Meal } from "@/lib/mealPlan";

const MEAL_TYPES = ["breakfast", "lunch", "dinner", "snack"] as const;
const MEAL_LABELS = { breakfast: "Breakfast", lunch: "Lunch", dinner: "Dinner", snack: "Snack" };
const MEAL_ICONS = { breakfast: "☀️", lunch: "🌤️", dinner: "🌙", snack: "🍎" };

function MealCard({ meal }: { meal: Meal }) {
  const [open, setOpen] = useState(false);
  const [instructions, setInstructions] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchInstructions() {
    if (instructions) { setOpen(!open); return; }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/cooking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mealName: meal.name, ingredients: meal.ingredients }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setInstructions(data.instructions);
      setOpen(true);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Failed to load instructions");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-3">
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1">{meal.name}</h3>
        <div className="flex gap-3 text-xs text-gray-500 mb-3">
          <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">{meal.calories} kcal</span>
          <span>P: {meal.protein}g</span>
          <span>C: {meal.carbs}g</span>
          <span>F: {meal.fat}g</span>
        </div>
        <div className="space-y-1 mb-3">
          {meal.ingredients.map((ing) => (
            <div key={ing.item} className="flex justify-between text-sm">
              <span className="text-gray-700">{ing.item}</span>
              <span className="text-gray-400 font-medium">{ing.amount}</span>
            </div>
          ))}
        </div>
        <button
          onClick={fetchInstructions}
          disabled={loading}
          className="w-full py-2.5 rounded-xl bg-green-600 text-white text-sm font-semibold active:bg-green-700 disabled:opacity-60 flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Getting instructions...
            </>
          ) : instructions && open ? "Hide Instructions" : "How to Cook This"}
        </button>
        {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
      </div>
      {open && instructions && (
        <div className="px-4 pb-4 border-t border-gray-100 pt-3">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Cooking Instructions</h4>
          <div className="text-sm text-gray-600 whitespace-pre-line leading-relaxed">{instructions}</div>
        </div>
      )}
    </div>
  );
}

export default function MealsPage() {
  const [dayIdx, setDayIdx] = useState(0);
  const [plan, setPlan] = useState(() => getFilteredPlan([]));
  const startX = useRef(0);

  useEffect(() => {
    setDayIdx(new Date().getDay() === 0 ? 6 : new Date().getDay() - 1);
    const s = localStorage.getItem("fitstart_stats");
    const allergies: string[] = s ? (JSON.parse(s).allergies ?? []) : [];
    setPlan(getFilteredPlan(allergies));
  }, []);

  function prevDay() { setDayIdx((i) => (i - 1 + 7) % 7); }
  function nextDay() { setDayIdx((i) => (i + 1) % 7); }

  function handleTouchStart(e: React.TouchEvent) { startX.current = e.touches[0].clientX; }
  function handleTouchEnd(e: React.TouchEvent) {
    const diff = startX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? nextDay() : prevDay();
  }

  const day = plan[dayIdx];
  const totalCals = day.breakfast.calories + day.lunch.calories + day.dinner.calories + day.snack.calories;
  const totalProtein = day.breakfast.protein + day.lunch.protein + day.dinner.protein + day.snack.protein;

  return (
    <>
      <div className="pb-24">
        <div className="bg-white border-b border-gray-100 px-4 py-3 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <button onClick={prevDay} className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 active:bg-gray-200 text-lg">
              &lt;
            </button>
            <div className="text-center">
              <div className="font-bold text-gray-900">{day.day}</div>
              <div className="text-xs text-gray-400">{totalCals} kcal · {totalProtein}g protein</div>
            </div>
            <button onClick={nextDay} className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 active:bg-gray-200 text-lg">
              &gt;
            </button>
          </div>
          <div className="flex justify-center gap-1.5 mt-2">
            {plan.map((d, i) => (
              <button
                key={d.day}
                onClick={() => setDayIdx(i)}
                className={`text-xs px-2 py-0.5 rounded-full transition-all ${
                  i === dayIdx ? "bg-green-600 text-white font-medium" : "text-gray-400"
                }`}
              >
                {d.day.slice(0, 3)}
              </button>
            ))}
          </div>
        </div>

        <div
          className="px-4 pt-4"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {MEAL_TYPES.map((type) => (
            <div key={type}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{MEAL_ICONS[type]}</span>
                <h2 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">{MEAL_LABELS[type]}</h2>
              </div>
              <MealCard meal={day[type]} />
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </>
  );
}
