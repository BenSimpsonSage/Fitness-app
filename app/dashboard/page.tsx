"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BottomNav from "@/components/BottomNav";
import { calculateTarget, calculateMacros, calculateTDEE, type UserStats } from "@/lib/calories";
import { getFilteredPlan, type DayPlan } from "@/lib/mealPlan";
import { EXERCISE_PLAN } from "@/lib/exercisePlan";

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return "morning";
  if (h < 18) return "afternoon";
  return "evening";
}

export default function Dashboard() {
  const router = useRouter();
  const [stats, setStats] = useState<UserStats | null>(null);
  const [dayIndex, setDayIndex] = useState(0);
  const [plan, setPlan] = useState<DayPlan[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("fitstart_stats");
    if (!saved) { router.replace("/"); return; }
    const parsed: UserStats = JSON.parse(saved);
    setStats(parsed);
    setDayIndex(new Date().getDay());
    setPlan(getFilteredPlan(parsed.allergies ?? []));
  }, [router]);

  if (!stats || plan.length === 0) return null;

  const target = calculateTarget(stats);
  const tdee = calculateTDEE(stats);
  const macros = calculateMacros(target, stats.weightKg);
  const todayName = DAYS[dayIndex];
  const dayPlan = plan.find((d) => d.day === todayName) ?? plan[0];
  const workout = EXERCISE_PLAN.find((d) => d.day === todayName) ?? EXERCISE_PLAN[0];
  const totalMealCals = dayPlan.breakfast.calories + dayPlan.lunch.calories + dayPlan.dinner.calories + dayPlan.snack.calories;
  const totalMealProtein = dayPlan.breakfast.protein + dayPlan.lunch.protein + dayPlan.dinner.protein + dayPlan.snack.protein;
  const deficit = tdee - target;

  function handleReset() {
    if (confirm("Reset all your data and start over?")) {
      localStorage.removeItem("fitstart_stats");
      router.replace("/");
    }
  }

  return (
    <>
      <div className="pb-24 px-4 pt-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Good {greeting()}</h1>
            <p className="text-gray-500 text-sm">{todayName} · Your plan is ready</p>
          </div>
          <button onClick={handleReset} className="text-xs text-gray-400 p-2 rounded-full active:bg-gray-100">Reset</button>
        </div>

        <div className="bg-green-600 rounded-2xl p-5 text-white mb-4">
          <p className="text-green-200 text-sm font-medium mb-1">Daily Calorie Target</p>
          <p className="text-4xl font-bold">{target.toLocaleString()} <span className="text-xl font-normal">kcal</span></p>
          <p className="text-green-300 text-sm mt-1">
            TDEE: {tdee.toLocaleString()} kcal · {deficit > 0 ? `−${deficit}` : `+${Math.abs(deficit)}`} {stats.goal === "lose" ? "deficit" : "surplus"}
          </p>
          <div className="grid grid-cols-3 gap-2 mt-4">
            {[
              { label: "Protein", value: `${macros.protein}g` },
              { label: "Carbs", value: `${macros.carbs}g` },
              { label: "Fat", value: `${macros.fat}g` },
            ].map((m) => (
              <div key={m.label} className="bg-green-700 rounded-xl p-3 text-center">
                <div className="font-bold text-lg">{m.value}</div>
                <div className="text-green-200 text-xs">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
          <h2 className="font-semibold text-gray-800 mb-3">Your Stats</h2>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <div className="text-xl font-bold text-gray-900">{stats.heightCm}cm</div>
              <div className="text-xs text-gray-400">Height</div>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">{stats.weightKg}kg</div>
              <div className="text-xs text-gray-400">Weight</div>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">{stats.age}</div>
              <div className="text-xs text-gray-400">Age</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-gray-800">Today&apos;s Meals</h2>
            <span className="text-sm text-green-600 font-medium">{totalMealCals} kcal · {totalMealProtein}g protein</span>
          </div>
          <div className="space-y-2">
            {[
              { label: "Breakfast", meal: dayPlan.breakfast },
              { label: "Lunch", meal: dayPlan.lunch },
              { label: "Dinner", meal: dayPlan.dinner },
              { label: "Snack", meal: dayPlan.snack },
            ].map((m) => (
              <div key={m.label} className="flex items-center justify-between py-1">
                <div>
                  <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">{m.label}</span>
                  <p className="text-sm text-gray-800 font-medium">{m.meal.name}</p>
                </div>
                <span className="text-sm text-gray-500">{m.meal.calories} kcal</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h2 className="font-semibold text-gray-800 mb-2">Today&apos;s Workout</h2>
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-3 ${
            workout.type === "weights" ? "bg-orange-100 text-orange-700" :
            workout.type === "cardio" ? "bg-blue-100 text-blue-700" :
            "bg-gray-100 text-gray-600"
          }`}>
            {workout.label}
          </div>
          {workout.type !== "rest" ? (
            <div className="space-y-1">
              {workout.exercises.slice(0, 4).map((ex) => (
                <div key={ex.name} className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">{ex.name}</span>
                  <span className="text-gray-400">{ex.sets > 0 ? `${ex.sets}×${ex.reps}` : ex.reps}</span>
                </div>
              ))}
              {workout.exercises.length > 4 && (
                <p className="text-xs text-green-600 mt-1">+{workout.exercises.length - 4} more in Exercise tab</p>
              )}
            </div>
          ) : (
            <p className="text-sm text-gray-500">{workout.exercises[0]?.notes}</p>
          )}
        </div>
      </div>
      <BottomNav />
    </>
  );
}
