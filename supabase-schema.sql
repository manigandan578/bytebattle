-- Run this script in Supabase Dashboard > SQL Editor.
create table if not exists public.quizzes (
  id text primary key,
  code text not null unique,
  title text not null,
  description text,
  category text,
  timer_per_question integer not null default 20,
  points_per_question integer not null default 100,
  speed_bonus_enabled boolean not null default true,
  status text not null default 'lobby',
  current_question_index integer not null default 0,
  created_at bigint not null,
  questions jsonb not null default '[]'::jsonb
);


create table if not exists public.participants (
  id text primary key,
  quiz_code text not null references public.quizzes(code) on update cascade on delete cascade,
  name text not null,
  college_name text,
  department text,
  joined_at bigint not null,
  status text not null default 'waiting',
  score integer not null default 0,
  correct_count integer not null default 0,
  total_time_taken_seconds integer not null default 0,
  answers jsonb not null default '[]'::jsonb,
  disqualification_reason text,
  disqualified_at bigint
);

alter table public.quizzes enable row level security;
alter table public.participants enable row level security;

create policy "Public can read quizzes" on public.quizzes for select to anon using (true);
create policy "Public can create quizzes" on public.quizzes for insert to anon with check (true);
create policy "Public can update quizzes" on public.quizzes for update to anon using (true) with check (true);
create policy "Public can delete quizzes" on public.quizzes for delete to anon using (true);

create policy "Public can read participants" on public.participants for select to anon using (true);
create policy "Public can create participants" on public.participants for insert to anon with check (true);
create policy "Public can update participants" on public.participants for update to anon using (true) with check (true);
create policy "Public can delete participants" on public.participants for delete to anon using (true);

-- Enable Realtime for cross-device updates.
alter publication supabase_realtime add table public.quizzes;
alter publication supabase_realtime add table public.participants;
