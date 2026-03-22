-- Create game_sessions table to track rock paper scissors games
CREATE TABLE game_sessions (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
    player_choice text NOT NULL CHECK (player_choice IN ('rock', 'paper', 'scissors')),
    computer_choice text NOT NULL CHECK (computer_choice IN ('rock', 'paper', 'scissors')),
    result text NOT NULL CHECK (result IN ('win', 'lose', 'tie')),
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create an index on user_id for better query performance
CREATE INDEX idx_game_sessions_user_id ON game_sessions(user_id);

-- Create an index on created_at for sorting games by date
CREATE INDEX idx_game_sessions_created_at ON game_sessions(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE game_sessions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow users to see only their own games
CREATE POLICY "Users can view own game sessions" ON game_sessions
    FOR SELECT USING (auth.uid() = user_id);

-- Create policy to allow users to insert their own games
CREATE POLICY "Users can insert own game sessions" ON game_sessions
    FOR INSERT WITH CHECK (auth.uid() = user_id);