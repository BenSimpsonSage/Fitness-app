# FitStart

A mobile-first fitness and nutrition app built with Next.js, deployable to Vercel.

## Features

- Calorie calculator (Mifflin-St Jeor formula) — works out your TDEE and daily target from your height, weight, age, and activity level
- 7-day simple, repeatable meal plan (UK measurements — grams/kg)
- AI-powered cooking instructions on demand (Claude via Anthropic API)
- Weekly shopping list with tick-off functionality
- Beginner gym programme — 3x weights + 2x cardio per week with progressive overload guidance

## Deploy to Vercel (5 minutes)

### Prerequisites
- A [Vercel account](https://vercel.com) (free)
- A [GitHub account](https://github.com) (free)
- Your [Anthropic API key](https://console.anthropic.com)

### Steps

1. **Push to GitHub**
   ```bash
   cd fitness-app
   git init
   git add .
   git commit -m "Initial commit"
   # Create a new repo on github.com, then:
   git remote add origin https://github.com/YOUR_USERNAME/fitness-app.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import" next to your `fitness-app` repository
   - Leave all settings as default
   - Click **Deploy**

3. **Done!**
   - Vercel will give you a URL like `https://fitness-app-xyz.vercel.app`
   - Open it on your phone, tap "Add to Home Screen" for a native app feel

### API Key
Your Anthropic API key is entered during app setup and stored only in your browser's local storage — it never touches any server other than Anthropic's own API.

## Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Anthropic SDK (claude-haiku for cooking instructions)
