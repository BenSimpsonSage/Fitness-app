export interface UserStats {
  heightCm: number;
  weightKg: number;
  age: number;
  gender: "male" | "female";
  activityLevel: "sedentary" | "light" | "moderate" | "active" | "very_active";
  goal: "lose" | "maintain" | "gain";
  allergies: string[];
}

const ACTIVITY_MULTIPLIERS = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  very_active: 1.9,
};

export function calculateBMR(stats: UserStats): number {
  // Mifflin-St Jeor
  if (stats.gender === "male") {
    return 10 * stats.weightKg + 6.25 * stats.heightCm - 5 * stats.age + 5;
  } else {
    return 10 * stats.weightKg + 6.25 * stats.heightCm - 5 * stats.age - 161;
  }
}

export function calculateTDEE(stats: UserStats): number {
  return Math.round(calculateBMR(stats) * ACTIVITY_MULTIPLIERS[stats.activityLevel]);
}

export function calculateTarget(stats: UserStats): number {
  const tdee = calculateTDEE(stats);
  if (stats.goal === "lose") return tdee - 500;
  if (stats.goal === "gain") return tdee + 300;
  return tdee;
}

export function calculateMacros(calories: number, weightKg: number) {
  const protein = Math.round(weightKg * 2); // 2g per kg
  const fat = Math.round((calories * 0.25) / 9);
  const carbs = Math.round((calories - protein * 4 - fat * 9) / 4);
  return { protein, fat, carbs };
}
