"use client";

import { useState } from "react";
import BottomNav from "@/components/BottomNav";
import { EXERCISE_PLAN, PROGRESSIVE_TIPS, type WorkoutDay } from "@/lib/exercisePlan";

function WorkoutCard({ workout }: { workout: WorkoutDay }) {
  const [expanded, setExpanded] = useState<number | null>(null);

  const typeStyle =
    workout.type === "weights"
      ? "bg-orange-100 text-orange-700"
      : workout.type === "cardio"
      ? "bg-blue-100 text-blue-700"
      : "bg-gray-100 text-gray-500";

  const typeIcon =
    workout.type === "weights" ? "🏋️" : workout.type === "cardio" ? "🏃" : "😴";

  return (
    <div className="bg-white rounded-2xl shadow-sm mb-4 overflow-hidden">
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <h2 className="font-bold text-gray-900 text-lg">{workout.day}</h2>
          <span className={`text-xs px-3 py-1 rounded-full font-medium ${typeStyle}`}>
            {typeIcon} {workout.type}
          </span>
        </div>
        <p className="text-gray-600 text-sm font-medium mb-3">{workout.label}</p>
        {workout.duration && (
          <div className="bg-blue-50 rounded-xl px-3 py-2 mb-3 text-sm text-blue-700 font-medium">
            Duration: {workout.duration}
          </div>
        )}
        <div className="space-y-2">
          {workout.exercises.map((ex, i) => (
            <div key={ex.name} className="border border-gray-100 rounded-xl overflow-hidden">
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="w-full flex items-center justify-between p-3 text-left active:bg-gray-50"
              >
                <div className="flex-1">
                  <p className="font-medium text-gray-900 text-sm">{ex.name}</p>
                  {ex.sets > 0 && (
                    <p className="text-xs text-gray-400">{ex.sets} sets x {ex.reps} · Rest: {ex.rest}</p>
                  )}
                  {ex.sets === 0 && (
                    <p className="text-xs text-gray-400">{ex.reps}</p>
                  )}
                </div>
                <span className="text-gray-400 ml-2">{expanded === i ? "▲" : "▼"}</span>
              </button>
              {expanded === i && (
                <div className="px-3 pb-3 bg-green-50 border-t border-gray-100">
                  <p className="text-sm text-gray-700 leading-relaxed pt-2">{ex.notes}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ExercisePage() {
  const [showTips, setShowTips] = useState(false);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const displayed = selectedDay
    ? EXERCISE_PLAN.filter((w) => w.day === selectedDay)
    : EXERCISE_PLAN;

  return (
    <>
      <div className="pb-24">
        <div className="bg-white border-b border-gray-100 px-4 py-4 sticky top-0 z-10">
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-xl font-bold text-gray-900">Exercise Plan</h1>
            <button
              onClick={() => setShowTips(!showTips)}
              className="text-sm text-green-600 font-medium"
            >
              {showTips ? "Hide Tips" : "Show Tips"}
            </button>
          </div>
          <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-hide">
            <button
              onClick={() => setSelectedDay(null)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                !selectedDay ? "bg-green-600 text-white" : "bg-gray-100 text-gray-500"
              }`}
            >
              All
            </button>
            {EXERCISE_PLAN.map((w) => (
              <button
                key={w.day}
                onClick={() => setSelectedDay(selectedDay === w.day ? null : w.day)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedDay === w.day ? "bg-green-600 text-white" : "bg-gray-100 text-gray-500"
                }`}
              >
                {w.day.slice(0, 3)}
              </button>
            ))}
          </div>
        </div>

        <div className="px-4 pt-4">
          {showTips && (
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-4">
              <h3 className="font-bold text-amber-800 mb-2">Progressive Overload Tips</h3>
              <div className="space-y-2">
                {PROGRESSIVE_TIPS.map((tip, i) => (
                  <div key={i} className="flex gap-2 text-sm text-amber-700">
                    <span className="font-bold flex-shrink-0">{i + 1}.</span>
                    <p>{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Weekly overview */}
          {!selectedDay && (
            <div className="bg-white rounded-2xl shadow-sm p-4 mb-4">
              <h2 className="font-semibold text-gray-800 mb-3">Weekly Schedule</h2>
              <div className="grid grid-cols-7 gap-1">
                {EXERCISE_PLAN.map((w) => (
                  <div key={w.day} className="text-center">
                    <div className={`w-full aspect-square rounded-lg flex items-center justify-center text-lg mb-1 ${
                      w.type === "weights" ? "bg-orange-100" :
                      w.type === "cardio" ? "bg-blue-100" : "bg-gray-100"
                    }`}>
                      {w.type === "weights" ? "🏋️" : w.type === "cardio" ? "🏃" : "😴"}
                    </div>
                    <p className="text-xs text-gray-500">{w.day.slice(0, 2)}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 mt-3 text-xs text-gray-400">
                <span>🏋️ Weights (x3)</span>
                <span>🏃 Cardio (x2)</span>
                <span>😴 Rest (x2)</span>
              </div>
            </div>
          )}

          {displayed.map((w) => (
            <WorkoutCard key={w.day} workout={w} />
          ))}
        </div>
      </div>
      <BottomNav />
    </>
  );
}
