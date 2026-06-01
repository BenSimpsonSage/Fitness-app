"use client";

import { useState } from "react";
import BottomNav from "@/components/BottomNav";
import { SHOPPING_LIST } from "@/lib/mealPlan";

export default function ShoppingPage() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  function toggle(key: string) {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  function resetAll() { setChecked(new Set()); }

  const total = SHOPPING_LIST.reduce((acc, cat) => acc + cat.items.length, 0);
  const done = checked.size;

  return (
    <>
      <div className="pb-24">
        <div className="bg-white border-b border-gray-100 px-4 py-4 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900">Weekly Shopping List</h1>
              <p className="text-sm text-gray-400">{done} of {total} items ticked</p>
            </div>
            {done > 0 && (
              <button onClick={resetAll} className="text-sm text-green-600 font-medium active:opacity-70">
                Reset
              </button>
            )}
          </div>
          {/* Progress bar */}
          <div className="mt-3 bg-gray-100 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full transition-all"
              style={{ width: `${total > 0 ? (done / total) * 100 : 0}%` }}
            />
          </div>
        </div>

        <div className="px-4 pt-4 space-y-4">
          {SHOPPING_LIST.map((cat) => (
            <div key={cat.category} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-50">
                <h2 className="font-semibold text-gray-800">{cat.category}</h2>
              </div>
              <div className="divide-y divide-gray-50">
                {cat.items.map((item) => {
                  const key = `${cat.category}:${item.item}`;
                  const isChecked = checked.has(key);
                  return (
                    <button
                      key={key}
                      onClick={() => toggle(key)}
                      className="w-full flex items-center gap-3 px-4 py-3 active:bg-gray-50 text-left"
                    >
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                        isChecked ? "bg-green-500 border-green-500" : "border-gray-300"
                      }`}>
                        {isChecked && <span className="text-white text-xs font-bold">✓</span>}
                      </div>
                      <div className="flex-1">
                        <span className={`font-medium text-sm ${isChecked ? "line-through text-gray-300" : "text-gray-800"}`}>
                          {item.item}
                        </span>
                      </div>
                      <span className={`text-sm ${isChecked ? "text-gray-300" : "text-gray-400"}`}>{item.amount}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </>
  );
}
