export interface Exercise {
  name: string;
  sets: number;
  reps: string;
  rest: string;
  notes: string;
}

export interface WorkoutDay {
  day: string;
  type: "weights" | "cardio" | "rest";
  label: string;
  duration?: string;
  exercises: Exercise[];
}

export const EXERCISE_PLAN: WorkoutDay[] = [
  {
    day: "Monday",
    type: "weights",
    label: "Full Body — Push Focus",
    exercises: [
      { name: "Barbell Squat", sets: 3, reps: "8–10", rest: "90 sec", notes: "Keep chest up, go to parallel. Start light — perfect form first." },
      { name: "Dumbbell Bench Press", sets: 3, reps: "10–12", rest: "75 sec", notes: "Control the weight down slowly (2–3 seconds). Feet flat on floor." },
      { name: "Seated Dumbbell Shoulder Press", sets: 3, reps: "10–12", rest: "75 sec", notes: "Don't lock elbows at the top. Keep core tight." },
      { name: "Lat Pulldown", sets: 3, reps: "10–12", rest: "75 sec", notes: "Pull to upper chest. Lean back slightly. Great for building a wider back." },
      { name: "Dumbbell Tricep Overhead Extension", sets: 3, reps: "12–15", rest: "60 sec", notes: "Keep upper arms stationary. Full stretch at the top." },
      { name: "Plank", sets: 3, reps: "30–45 sec hold", rest: "45 sec", notes: "Body straight as a board. Breathe steadily." },
    ],
  },
  {
    day: "Tuesday",
    type: "cardio",
    label: "Steady-State Cardio",
    duration: "30–40 min",
    exercises: [
      { name: "Treadmill Walk / Light Jog", sets: 1, reps: "30–40 min", rest: "—", notes: "Aim for a pace where you can still hold a conversation (Zone 2). Start at a brisk walk — jog when comfortable. No pressure to run." },
      { name: "Bike or Cross-Trainer (optional alternative)", sets: 1, reps: "30–40 min", rest: "—", notes: "Low impact — great if knees feel uncomfortable on the treadmill." },
    ],
  },
  {
    day: "Wednesday",
    type: "weights",
    label: "Full Body — Pull Focus",
    exercises: [
      { name: "Romanian Deadlift (Dumbbell)", sets: 3, reps: "10–12", rest: "90 sec", notes: "Hinge at the hips, soft bend in knees. Feel the hamstring stretch. Don't round your back." },
      { name: "Seated Cable Row", sets: 3, reps: "10–12", rest: "75 sec", notes: "Squeeze shoulder blades together at the end of each rep." },
      { name: "Incline Dumbbell Press", sets: 3, reps: "10–12", rest: "75 sec", notes: "Sets the bench to about 30–45°. Great for upper chest." },
      { name: "Dumbbell Bicep Curl", sets: 3, reps: "12–15", rest: "60 sec", notes: "No swinging! Slow and controlled. Alternate arms or do both together." },
      { name: "Cable Face Pull", sets: 3, reps: "15", rest: "60 sec", notes: "Great for rear delts and shoulder health. Pull to your face, elbows flare out." },
      { name: "Leg Press Machine", sets: 3, reps: "10–12", rest: "90 sec", notes: "Keep feet shoulder-width. Don't lock knees at the top. Start very light." },
    ],
  },
  {
    day: "Thursday",
    type: "rest",
    label: "Active Rest",
    exercises: [
      { name: "Gentle Walk", sets: 1, reps: "20–30 min", rest: "—", notes: "Just keep moving. A walk outside counts — helps with recovery and keeps calories burning." },
      { name: "Stretching / Foam Rolling", sets: 1, reps: "10–15 min", rest: "—", notes: "Focus on legs and back. YouTube 'beginner full body stretch routine' for a simple guide." },
    ],
  },
  {
    day: "Friday",
    type: "weights",
    label: "Full Body — Compound Focus",
    exercises: [
      { name: "Goblet Squat (Dumbbell)", sets: 3, reps: "12", rest: "75 sec", notes: "Hold a dumbbell at chest height. Great beginner squat pattern. Go deep if comfortable." },
      { name: "Dumbbell Lunges", sets: 3, reps: "10 each leg", rest: "75 sec", notes: "Step forward, knee just above the floor. Keep torso upright. Use bodyweight first if needed." },
      { name: "Dumbbell Bent-Over Row", sets: 3, reps: "10–12", rest: "75 sec", notes: "One hand on bench for support. Pull elbow straight back. Big back movement." },
      { name: "Cable Chest Fly", sets: 3, reps: "12–15", rest: "60 sec", notes: "Use low weight to start. Focus on the stretch and squeeze of the chest." },
      { name: "Dumbbell Lateral Raise", sets: 3, reps: "12–15", rest: "60 sec", notes: "Slight bend in elbow. Raise to shoulder height only. Very light weight to start." },
      { name: "Calf Raise (Machine or Bodyweight)", sets: 3, reps: "15–20", rest: "45 sec", notes: "Slow and full range. Feel the stretch at the bottom each rep." },
    ],
  },
  {
    day: "Saturday",
    type: "cardio",
    label: "Cardio + Core",
    duration: "35–45 min",
    exercises: [
      { name: "Treadmill / Bike / Cross-Trainer", sets: 1, reps: "25–30 min", rest: "—", notes: "Same Zone 2 pace as Tuesday. You should be getting easier each week — that's progress!" },
      { name: "Crunches", sets: 3, reps: "15–20", rest: "45 sec", notes: "Controlled — hands behind head, don't pull on your neck." },
      { name: "Dead Bug", sets: 3, reps: "10 each side", rest: "45 sec", notes: "Lie on back, arms up. Lower opposite arm and leg while keeping lower back pressed down. Great for core stability." },
      { name: "Glute Bridge", sets: 3, reps: "15", rest: "45 sec", notes: "Lie on back, feet flat. Drive hips up and squeeze glutes at the top. Hold 1 second." },
    ],
  },
  {
    day: "Sunday",
    type: "rest",
    label: "Full Rest Day",
    exercises: [
      { name: "Complete rest", sets: 0, reps: "—", rest: "—", notes: "Your muscles grow when you rest. Eat your meals, sleep well, and come back Monday ready to push harder." },
    ],
  },
];

export const PROGRESSIVE_TIPS = [
  "Week 1–2: Learn the movements. Use lighter weight than you think you need. Focus on form above everything.",
  "Week 3–4: Add small weight (1–2kg) to exercises where the last set felt easy.",
  "Week 5–8: Aim to either add 1 rep or a tiny bit more weight each week — this is called progressive overload.",
  "Every 4–6 weeks: Take a 'deload week' — same exercises but drop to 50% of the weight. Lets your body recover fully.",
  "Track your weights! Note what you lifted each session so you know what to beat next time.",
];
