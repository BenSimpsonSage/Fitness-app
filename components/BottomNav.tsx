"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/dashboard", label: "Home", icon: "🏠" },
  { href: "/meals", label: "Meals", icon: "🥗" },
  { href: "/shopping", label: "Shop", icon: "🛒" },
  { href: "/exercise", label: "Exercise", icon: "🏋️" },
];

export default function BottomNav() {
  const path = usePathname();
  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 safe-bottom z-50">
      <div className="flex">
        {NAV.map((n) => {
          const active = path === n.href;
          return (
            <Link
              key={n.href}
              href={n.href}
              className={`flex-1 flex flex-col items-center py-2 pt-3 text-xs font-medium transition-colors ${
                active ? "text-green-600" : "text-gray-400"
              }`}
            >
              <span className="text-xl mb-0.5">{n.icon}</span>
              {n.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
