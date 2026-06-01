export interface Meal {
  name: string;
  ingredients: { item: string; amount: string }[];
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface DayPlan {
  day: string;
  breakfast: Meal;
  lunch: Meal;
  dinner: Meal;
  snack: Meal;
}

export const MEAL_PLAN: DayPlan[] = [
  {
    day: "Monday",
    breakfast: {
      name: "Oats with Banana & Peanut Butter",
      ingredients: [
        { item: "Rolled oats", amount: "80g" },
        { item: "Semi-skimmed milk", amount: "250ml" },
        { item: "Banana", amount: "1 medium (120g)" },
        { item: "Peanut butter (smooth)", amount: "1 tbsp (15g)" },
      ],
      calories: 480, protein: 18, carbs: 68, fat: 14,
    },
    lunch: {
      name: "Chicken & Rice Bowl",
      ingredients: [
        { item: "Chicken breast", amount: "180g" },
        { item: "White rice (dry)", amount: "80g" },
        { item: "Frozen peas", amount: "80g" },
        { item: "Soy sauce", amount: "1 tbsp" },
        { item: "Olive oil", amount: "1 tsp (5g)" },
      ],
      calories: 520, protein: 48, carbs: 60, fat: 8,
    },
    dinner: {
      name: "Lean Beef Mince with Sweet Potato Mash",
      ingredients: [
        { item: "Lean beef mince (5% fat)", amount: "200g" },
        { item: "Sweet potato", amount: "250g" },
        { item: "Tinned chopped tomatoes", amount: "200g" },
        { item: "Onion", amount: "1 medium (150g)" },
        { item: "Garlic (cloves)", amount: "2 cloves" },
        { item: "Mixed herbs", amount: "1 tsp" },
        { item: "Olive oil", amount: "1 tsp" },
      ],
      calories: 560, protein: 44, carbs: 52, fat: 16,
    },
    snack: {
      name: "Greek Yoghurt with Berries",
      ingredients: [
        { item: "Greek yoghurt (0% fat)", amount: "200g" },
        { item: "Frozen mixed berries", amount: "100g" },
        { item: "Honey", amount: "1 tsp (7g)" },
      ],
      calories: 170, protein: 20, carbs: 22, fat: 1,
    },
  },
  {
    day: "Tuesday",
    breakfast: {
      name: "Scrambled Eggs on Wholemeal Toast",
      ingredients: [
        { item: "Eggs", amount: "3 large" },
        { item: "Wholemeal bread", amount: "2 slices (80g)" },
        { item: "Semi-skimmed milk", amount: "2 tbsp (30ml)" },
        { item: "Butter", amount: "5g" },
        { item: "Salt & pepper", amount: "to taste" },
      ],
      calories: 430, protein: 28, carbs: 38, fat: 16,
    },
    lunch: {
      name: "Tuna & Sweetcorn Jacket Potato",
      ingredients: [
        { item: "Baking potato", amount: "250g" },
        { item: "Tinned tuna (in spring water)", amount: "160g (drained)" },
        { item: "Tinned sweetcorn", amount: "80g (drained)" },
        { item: "Low-fat mayonnaise", amount: "1 tbsp (15g)" },
        { item: "Black pepper", amount: "to taste" },
      ],
      calories: 490, protein: 42, carbs: 62, fat: 6,
    },
    dinner: {
      name: "Baked Salmon with Basmati Rice & Broccoli",
      ingredients: [
        { item: "Salmon fillet", amount: "200g" },
        { item: "Basmati rice (dry)", amount: "80g" },
        { item: "Broccoli", amount: "200g" },
        { item: "Lemon", amount: "½" },
        { item: "Olive oil", amount: "1 tsp" },
        { item: "Garlic powder", amount: "½ tsp" },
      ],
      calories: 580, protein: 46, carbs: 58, fat: 16,
    },
    snack: {
      name: "Cottage Cheese with Rice Cakes",
      ingredients: [
        { item: "Cottage cheese (low fat)", amount: "150g" },
        { item: "Rice cakes", amount: "3 (30g)" },
        { item: "Black pepper", amount: "to taste" },
      ],
      calories: 180, protein: 22, carbs: 20, fat: 2,
    },
  },
  {
    day: "Wednesday",
    breakfast: {
      name: "Oats with Banana & Peanut Butter",
      ingredients: [
        { item: "Rolled oats", amount: "80g" },
        { item: "Semi-skimmed milk", amount: "250ml" },
        { item: "Banana", amount: "1 medium (120g)" },
        { item: "Peanut butter (smooth)", amount: "1 tbsp (15g)" },
      ],
      calories: 480, protein: 18, carbs: 68, fat: 14,
    },
    lunch: {
      name: "Turkey & Salad Wrap",
      ingredients: [
        { item: "Wholemeal tortilla wrap", amount: "1 large (60g)" },
        { item: "Turkey breast slices", amount: "120g" },
        { item: "Mixed salad leaves", amount: "50g" },
        { item: "Tomato", amount: "1 medium (120g)" },
        { item: "Cucumber", amount: "50g" },
        { item: "Low-fat hummus", amount: "2 tbsp (40g)" },
      ],
      calories: 420, protein: 38, carbs: 44, fat: 9,
    },
    dinner: {
      name: "Chicken Stir-Fry with Noodles",
      ingredients: [
        { item: "Chicken breast", amount: "200g" },
        { item: "Egg noodles (dry)", amount: "80g" },
        { item: "Mixed stir-fry vegetables (frozen)", amount: "250g" },
        { item: "Soy sauce", amount: "2 tbsp" },
        { item: "Sesame oil", amount: "1 tsp" },
        { item: "Garlic (cloves)", amount: "2 cloves" },
        { item: "Ginger (ground)", amount: "½ tsp" },
      ],
      calories: 550, protein: 50, carbs: 64, fat: 10,
    },
    snack: {
      name: "Greek Yoghurt with Berries",
      ingredients: [
        { item: "Greek yoghurt (0% fat)", amount: "200g" },
        { item: "Frozen mixed berries", amount: "100g" },
        { item: "Honey", amount: "1 tsp (7g)" },
      ],
      calories: 170, protein: 20, carbs: 22, fat: 1,
    },
  },
  {
    day: "Thursday",
    breakfast: {
      name: "Scrambled Eggs on Wholemeal Toast",
      ingredients: [
        { item: "Eggs", amount: "3 large" },
        { item: "Wholemeal bread", amount: "2 slices (80g)" },
        { item: "Semi-skimmed milk", amount: "2 tbsp (30ml)" },
        { item: "Butter", amount: "5g" },
        { item: "Salt & pepper", amount: "to taste" },
      ],
      calories: 430, protein: 28, carbs: 38, fat: 16,
    },
    lunch: {
      name: "Chicken & Rice Bowl",
      ingredients: [
        { item: "Chicken breast", amount: "180g" },
        { item: "White rice (dry)", amount: "80g" },
        { item: "Frozen peas", amount: "80g" },
        { item: "Soy sauce", amount: "1 tbsp" },
        { item: "Olive oil", amount: "1 tsp (5g)" },
      ],
      calories: 520, protein: 48, carbs: 60, fat: 8,
    },
    dinner: {
      name: "Lean Beef Mince with Sweet Potato Mash",
      ingredients: [
        { item: "Lean beef mince (5% fat)", amount: "200g" },
        { item: "Sweet potato", amount: "250g" },
        { item: "Tinned chopped tomatoes", amount: "200g" },
        { item: "Onion", amount: "1 medium (150g)" },
        { item: "Garlic (cloves)", amount: "2 cloves" },
        { item: "Mixed herbs", amount: "1 tsp" },
        { item: "Olive oil", amount: "1 tsp" },
      ],
      calories: 560, protein: 44, carbs: 52, fat: 16,
    },
    snack: {
      name: "Cottage Cheese with Rice Cakes",
      ingredients: [
        { item: "Cottage cheese (low fat)", amount: "150g" },
        { item: "Rice cakes", amount: "3 (30g)" },
        { item: "Black pepper", amount: "to taste" },
      ],
      calories: 180, protein: 22, carbs: 20, fat: 2,
    },
  },
  {
    day: "Friday",
    breakfast: {
      name: "Oats with Banana & Peanut Butter",
      ingredients: [
        { item: "Rolled oats", amount: "80g" },
        { item: "Semi-skimmed milk", amount: "250ml" },
        { item: "Banana", amount: "1 medium (120g)" },
        { item: "Peanut butter (smooth)", amount: "1 tbsp (15g)" },
      ],
      calories: 480, protein: 18, carbs: 68, fat: 14,
    },
    lunch: {
      name: "Tuna & Sweetcorn Jacket Potato",
      ingredients: [
        { item: "Baking potato", amount: "250g" },
        { item: "Tinned tuna (in spring water)", amount: "160g (drained)" },
        { item: "Tinned sweetcorn", amount: "80g (drained)" },
        { item: "Low-fat mayonnaise", amount: "1 tbsp (15g)" },
        { item: "Black pepper", amount: "to taste" },
      ],
      calories: 490, protein: 42, carbs: 62, fat: 6,
    },
    dinner: {
      name: "Baked Salmon with Basmati Rice & Broccoli",
      ingredients: [
        { item: "Salmon fillet", amount: "200g" },
        { item: "Basmati rice (dry)", amount: "80g" },
        { item: "Broccoli", amount: "200g" },
        { item: "Lemon", amount: "½" },
        { item: "Olive oil", amount: "1 tsp" },
        { item: "Garlic powder", amount: "½ tsp" },
      ],
      calories: 580, protein: 46, carbs: 58, fat: 16,
    },
    snack: {
      name: "Greek Yoghurt with Berries",
      ingredients: [
        { item: "Greek yoghurt (0% fat)", amount: "200g" },
        { item: "Frozen mixed berries", amount: "100g" },
        { item: "Honey", amount: "1 tsp (7g)" },
      ],
      calories: 170, protein: 20, carbs: 22, fat: 1,
    },
  },
  {
    day: "Saturday",
    breakfast: {
      name: "Protein Pancakes",
      ingredients: [
        { item: "Rolled oats (blended to flour)", amount: "60g" },
        { item: "Eggs", amount: "2 large" },
        { item: "Banana (mashed)", amount: "1 medium (120g)" },
        { item: "Baking powder", amount: "½ tsp" },
        { item: "Butter (for cooking)", amount: "5g" },
        { item: "Greek yoghurt", amount: "100g (to serve)" },
      ],
      calories: 460, protein: 26, carbs: 60, fat: 12,
    },
    lunch: {
      name: "Turkey & Salad Wrap",
      ingredients: [
        { item: "Wholemeal tortilla wrap", amount: "1 large (60g)" },
        { item: "Turkey breast slices", amount: "120g" },
        { item: "Mixed salad leaves", amount: "50g" },
        { item: "Tomato", amount: "1 medium (120g)" },
        { item: "Cucumber", amount: "50g" },
        { item: "Low-fat hummus", amount: "2 tbsp (40g)" },
      ],
      calories: 420, protein: 38, carbs: 44, fat: 9,
    },
    dinner: {
      name: "Chicken Stir-Fry with Noodles",
      ingredients: [
        { item: "Chicken breast", amount: "200g" },
        { item: "Egg noodles (dry)", amount: "80g" },
        { item: "Mixed stir-fry vegetables (frozen)", amount: "250g" },
        { item: "Soy sauce", amount: "2 tbsp" },
        { item: "Sesame oil", amount: "1 tsp" },
        { item: "Garlic (cloves)", amount: "2 cloves" },
        { item: "Ginger (ground)", amount: "½ tsp" },
      ],
      calories: 550, protein: 50, carbs: 64, fat: 10,
    },
    snack: {
      name: "Cottage Cheese with Rice Cakes",
      ingredients: [
        { item: "Cottage cheese (low fat)", amount: "150g" },
        { item: "Rice cakes", amount: "3 (30g)" },
        { item: "Black pepper", amount: "to taste" },
      ],
      calories: 180, protein: 22, carbs: 20, fat: 2,
    },
  },
  {
    day: "Sunday",
    breakfast: {
      name: "Protein Pancakes",
      ingredients: [
        { item: "Rolled oats (blended to flour)", amount: "60g" },
        { item: "Eggs", amount: "2 large" },
        { item: "Banana (mashed)", amount: "1 medium (120g)" },
        { item: "Baking powder", amount: "½ tsp" },
        { item: "Butter (for cooking)", amount: "5g" },
        { item: "Greek yoghurt", amount: "100g (to serve)" },
      ],
      calories: 460, protein: 26, carbs: 60, fat: 12,
    },
    lunch: {
      name: "Chicken & Rice Bowl",
      ingredients: [
        { item: "Chicken breast", amount: "180g" },
        { item: "White rice (dry)", amount: "80g" },
        { item: "Frozen peas", amount: "80g" },
        { item: "Soy sauce", amount: "1 tbsp" },
        { item: "Olive oil", amount: "1 tsp (5g)" },
      ],
      calories: 520, protein: 48, carbs: 60, fat: 8,
    },
    dinner: {
      name: "Lean Beef Mince with Sweet Potato Mash",
      ingredients: [
        { item: "Lean beef mince (5% fat)", amount: "200g" },
        { item: "Sweet potato", amount: "250g" },
        { item: "Tinned chopped tomatoes", amount: "200g" },
        { item: "Onion", amount: "1 medium (150g)" },
        { item: "Garlic (cloves)", amount: "2 cloves" },
        { item: "Mixed herbs", amount: "1 tsp" },
        { item: "Olive oil", amount: "1 tsp" },
      ],
      calories: 560, protein: 44, carbs: 52, fat: 16,
    },
    snack: {
      name: "Greek Yoghurt with Berries",
      ingredients: [
        { item: "Greek yoghurt (0% fat)", amount: "200g" },
        { item: "Frozen mixed berries", amount: "100g" },
        { item: "Honey", amount: "1 tsp (7g)" },
      ],
      calories: 170, protein: 20, carbs: 22, fat: 1,
    },
  },
];

// ─── Allergen detection ───────────────────────────────────────────────────────

export const ALLERGEN_KEYWORDS: Record<string, string[]> = {
  "Peanuts": ["peanut"],
  "Tree Nuts": ["almond", "cashew", "walnut", "pecan", "hazelnut", "pistachio", "macadamia", "brazil nut", "pine nut"],
  "Dairy / Milk": ["milk", "butter", "cheese", "yoghurt", "yogurt", "cream", "dairy", "whey", "lactose"],
  "Eggs": ["egg"],
  "Gluten / Wheat": ["wheat", "gluten", "flour", "bread", "pasta", "noodle", "oat", "wrap", "tortilla"],
  "Fish": ["fish", "salmon", "tuna", "cod", "haddock", "mackerel", "sardine", "anchovy"],
  "Shellfish": ["prawn", "shrimp", "crab", "lobster", "mussel", "oyster", "scallop", "shellfish"],
  "Soya": ["soy", "soya", "tofu", "edamame"],
};

function ingredientHasAllergen(item: string, allergies: string[]): boolean {
  const lower = item.toLowerCase();
  return allergies.some((a) => {
    const kws = ALLERGEN_KEYWORDS[a] ?? [a.toLowerCase()];
    return kws.some((kw) => lower.includes(kw));
  });
}

export function mealContainsAllergen(meal: Meal, allergies: string[]): boolean {
  if (!allergies.length) return false;
  return meal.ingredients.some((ing) => ingredientHasAllergen(ing.item, allergies));
}

// ─── Safe alternative meal pools ─────────────────────────────────────────────

const ALT_BREAKFASTS: Meal[] = [
  {
    name: "Oats with Banana & Honey",
    ingredients: [
      { item: "Rolled oats", amount: "80g" },
      { item: "Semi-skimmed milk", amount: "250ml" },
      { item: "Banana", amount: "1 medium (120g)" },
      { item: "Honey", amount: "1 tbsp (20g)" },
    ],
    calories: 430, protein: 14, carbs: 72, fat: 6,
  },
  {
    name: "Rice Cakes with Banana & Honey",
    ingredients: [
      { item: "Rice cakes", amount: "4 (40g)" },
      { item: "Banana", amount: "1 medium (120g)" },
      { item: "Honey", amount: "1 tbsp (20g)" },
    ],
    calories: 300, protein: 4, carbs: 66, fat: 2,
  },
  {
    name: "Chicken & Rice Breakfast Bowl",
    ingredients: [
      { item: "White rice (dry)", amount: "80g" },
      { item: "Chicken breast (cooked, sliced)", amount: "120g" },
      { item: "Olive oil", amount: "1 tsp" },
      { item: "Soy sauce", amount: "1 tsp" },
    ],
    calories: 420, protein: 36, carbs: 52, fat: 6,
  },
];

const ALT_LUNCHES: Meal[] = [
  {
    name: "Chicken & Rice Bowl",
    ingredients: [
      { item: "Chicken breast", amount: "180g" },
      { item: "White rice (dry)", amount: "80g" },
      { item: "Frozen peas", amount: "80g" },
      { item: "Olive oil", amount: "1 tsp" },
    ],
    calories: 510, protein: 48, carbs: 58, fat: 7,
  },
  {
    name: "Lean Beef & Vegetable Rice",
    ingredients: [
      { item: "Lean beef mince (5% fat)", amount: "150g" },
      { item: "White rice (dry)", amount: "60g" },
      { item: "Tinned chopped tomatoes", amount: "200g" },
      { item: "Frozen peas", amount: "100g" },
      { item: "Onion", amount: "1 medium (150g)" },
      { item: "Garlic (cloves)", amount: "2 cloves" },
      { item: "Olive oil", amount: "1 tsp" },
    ],
    calories: 490, protein: 40, carbs: 50, fat: 12,
  },
  {
    name: "Turkey & Sweet Potato Bowl",
    ingredients: [
      { item: "Turkey breast slices", amount: "150g" },
      { item: "Sweet potato", amount: "200g" },
      { item: "Broccoli", amount: "100g" },
      { item: "Olive oil", amount: "1 tsp" },
      { item: "Mixed herbs", amount: "1 tsp" },
    ],
    calories: 420, protein: 42, carbs: 44, fat: 8,
  },
];

const ALT_DINNERS: Meal[] = [
  {
    name: "Chicken & Sweet Potato Tray Bake",
    ingredients: [
      { item: "Chicken breast", amount: "200g" },
      { item: "Sweet potato", amount: "250g" },
      { item: "Broccoli", amount: "150g" },
      { item: "Olive oil", amount: "1 tbsp" },
      { item: "Garlic powder", amount: "1 tsp" },
      { item: "Mixed herbs", amount: "1 tsp" },
    ],
    calories: 520, protein: 46, carbs: 48, fat: 12,
  },
  {
    name: "Lean Beef Mince with Sweet Potato Mash",
    ingredients: [
      { item: "Lean beef mince (5% fat)", amount: "200g" },
      { item: "Sweet potato", amount: "250g" },
      { item: "Tinned chopped tomatoes", amount: "200g" },
      { item: "Onion", amount: "1 medium (150g)" },
      { item: "Garlic (cloves)", amount: "2 cloves" },
      { item: "Mixed herbs", amount: "1 tsp" },
      { item: "Olive oil", amount: "1 tsp" },
    ],
    calories: 560, protein: 44, carbs: 52, fat: 16,
  },
  {
    name: "Turkey Mince & Rice",
    ingredients: [
      { item: "Turkey mince", amount: "200g" },
      { item: "White rice (dry)", amount: "80g" },
      { item: "Tinned chopped tomatoes", amount: "200g" },
      { item: "Onion", amount: "1 medium (150g)" },
      { item: "Garlic (cloves)", amount: "2 cloves" },
      { item: "Olive oil", amount: "1 tsp" },
      { item: "Mixed herbs", amount: "1 tsp" },
    ],
    calories: 540, protein: 48, carbs: 58, fat: 10,
  },
];

const ALT_SNACKS: Meal[] = [
  {
    name: "Banana with Honey",
    ingredients: [
      { item: "Banana", amount: "2 medium (240g)" },
      { item: "Honey", amount: "1 tsp (7g)" },
    ],
    calories: 210, protein: 2, carbs: 50, fat: 0,
  },
  {
    name: "Chicken & Cucumber Snack Box",
    ingredients: [
      { item: "Chicken breast (cooked, sliced)", amount: "100g" },
      { item: "Cucumber", amount: "100g" },
      { item: "Tomato", amount: "1 medium" },
    ],
    calories: 140, protein: 24, carbs: 6, fat: 2,
  },
  {
    name: "Rice Cakes with Honey",
    ingredients: [
      { item: "Rice cakes", amount: "4 (40g)" },
      { item: "Honey", amount: "1 tbsp (20g)" },
    ],
    calories: 190, protein: 2, carbs: 42, fat: 1,
  },
];

function pickSafeMeal(original: Meal, pool: Meal[], allergies: string[]): Meal {
  if (!mealContainsAllergen(original, allergies)) return original;
  return pool.find((m) => !mealContainsAllergen(m, allergies)) ?? original;
}

export function getFilteredPlan(allergies: string[]): DayPlan[] {
  if (!allergies.length) return MEAL_PLAN;
  return MEAL_PLAN.map((day) => ({
    day: day.day,
    breakfast: pickSafeMeal(day.breakfast, ALT_BREAKFASTS, allergies),
    lunch: pickSafeMeal(day.lunch, ALT_LUNCHES, allergies),
    dinner: pickSafeMeal(day.dinner, ALT_DINNERS, allergies),
    snack: pickSafeMeal(day.snack, ALT_SNACKS, allergies),
  }));
}

export interface ShoppingItem {
  item: string;
  amount: string;
  category: string;
}

export const SHOPPING_LIST: { category: string; items: { item: string; amount: string }[] }[] = [
  {
    category: "🥩 Meat & Fish",
    items: [
      { item: "Chicken breast", amount: "1.7 kg" },
      { item: "Lean beef mince (5% fat)", amount: "600g" },
      { item: "Salmon fillets", amount: "400g" },
      { item: "Turkey breast slices", amount: "240g" },
      { item: "Tinned tuna (in spring water)", amount: "4 × 160g tins" },
    ],
  },
  {
    category: "🥛 Dairy & Eggs",
    items: [
      { item: "Eggs (large)", amount: "18" },
      { item: "Semi-skimmed milk", amount: "1.5 litres" },
      { item: "Greek yoghurt (0% fat)", amount: "1 kg" },
      { item: "Cottage cheese (low fat)", amount: "450g" },
      { item: "Butter", amount: "15g" },
    ],
  },
  {
    category: "🌾 Carbs & Grains",
    items: [
      { item: "Rolled oats", amount: "560g" },
      { item: "White rice (dry)", amount: "480g" },
      { item: "Basmati rice (dry)", amount: "160g" },
      { item: "Egg noodles (dry)", amount: "160g" },
      { item: "Wholemeal bread", amount: "1 loaf (sliced)" },
      { item: "Wholemeal tortilla wraps", amount: "2 large" },
      { item: "Baking potatoes", amount: "500g (2 medium)" },
      { item: "Rice cakes", amount: "1 pack (200g)" },
    ],
  },
  {
    category: "🥦 Vegetables",
    items: [
      { item: "Sweet potato", amount: "750g" },
      { item: "Broccoli", amount: "400g" },
      { item: "Onions", amount: "3 medium" },
      { item: "Tomatoes (medium)", amount: "2" },
      { item: "Cucumber", amount: "100g" },
      { item: "Mixed salad leaves", amount: "100g bag" },
      { item: "Frozen peas", amount: "500g bag" },
      { item: "Frozen mixed stir-fry vegetables", amount: "500g bag" },
    ],
  },
  {
    category: "🍌 Fruit",
    items: [
      { item: "Bananas", amount: "5 medium" },
      { item: "Lemons", amount: "1" },
      { item: "Frozen mixed berries", amount: "600g bag" },
    ],
  },
  {
    category: "🥫 Tinned & Jarred",
    items: [
      { item: "Tinned chopped tomatoes", amount: "3 × 400g tins" },
      { item: "Tinned sweetcorn", amount: "2 × 198g tins" },
    ],
  },
  {
    category: "🧴 Condiments & Oils",
    items: [
      { item: "Olive oil", amount: "1 bottle" },
      { item: "Sesame oil", amount: "small bottle" },
      { item: "Soy sauce", amount: "1 bottle" },
      { item: "Peanut butter (smooth)", amount: "1 jar" },
      { item: "Low-fat mayonnaise", amount: "1 small jar" },
      { item: "Low-fat hummus", amount: "200g tub" },
      { item: "Honey", amount: "small jar" },
    ],
  },
  {
    category: "🌿 Herbs & Spices",
    items: [
      { item: "Garlic (fresh)", amount: "1 bulb" },
      { item: "Garlic powder", amount: "small jar" },
      { item: "Ground ginger", amount: "small jar" },
      { item: "Mixed herbs (dried)", amount: "small jar" },
      { item: "Baking powder", amount: "small tub" },
    ],
  },
];
