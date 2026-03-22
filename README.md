# Rock Paper Scissors

A digital implementation of the classic rock-paper-scissors game where players can compete against a computer opponent. Built with Next.js 15, Supabase, and Tailwind CSS.

## Features

- **Player vs Computer Gameplay**: Play against an intelligent computer opponent
- **Score Tracking**: Keep track of wins, losses, and ties
- **Instant Results**: Get immediate feedback after each game
- **Clean UI**: Intuitive interface with easy rock/paper/scissors selection
- **Reset Functionality**: Start new games instantly

## Tech Stack

- **Frontend**: Next.js 15 with App Router, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Supabase (PostgreSQL database, Authentication)
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- A Supabase account and project

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd rock-paper-scissors
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Fill in your Supabase credentials in `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

5. Run the database migrations in your Supabase project using the SQL in `supabase/migrations/001_initial.sql`

6. Start the development server:
```bash
npm run dev
```

7. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── signup/
│   ├── dashboard/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── lib/
│   └── supabase/
│       ├── client.ts
│       └── server.ts
├── supabase/
│   └── migrations/
└── middleware.ts
```

## Game Rules

- Rock beats Scissors
- Scissors beats Paper  
- Paper beats Rock
- Same choice results in a tie

## Target Users

- Casual gamers looking for quick entertainment
- Children learning basic games
- Anyone wanting a simple, accessible digital game

## License

MIT License