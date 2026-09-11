# TCB Auto — The Car Bro

A premium, responsive TCB Auto / The Car Bro website starter.

## Stack
- Static HTML/CSS/JS frontend
- Optional Supabase Auth + Postgres for the admin CMS
- Designed for free static hosting such as Vercel

## Brand direction
- TCB Auto / The Car Bro
- Black / graphite / red
- Premium, minimal automotive editorial style
- Personal-brand connection: "By Asif King Ahmed"

## Pages / sections
- Home
- About
- Cars / Verified Used Cars (Coming Soon)
- Gallery
- TCB Stories / Community (Coming Soon)
- Sell / Buy / Exchange (Coming Soon)
- Articles / Updates (Coming Soon)
- Contact & Collaborations

## Important
The included site works immediately as a polished static website using the content in `content.js`.

For a real private admin login and editable CMS:
1. Create a free Supabase project.
2. Create an Auth user for yourself.
3. Run `supabase-schema.sql` in the Supabase SQL editor.
4. Copy your Supabase URL and anon key into `config.js`.
5. Change the admin UUID in `supabase-schema.sql` before running it, or insert the admin ID into the `admin_users` table.
6. Deploy this folder to Vercel.

Do NOT put a Supabase service-role key in the frontend. Only use the public anon key.