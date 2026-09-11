# Free deployment plan

## 1. Vercel
Create a free account and import this project/repository. Vercel can host the static frontend with HTTPS.

## 2. Supabase
Create a free project and an Auth user for yourself.

## 3. Database
Open Supabase SQL Editor and run `supabase-schema.sql`.
Add your Auth user's UUID to `admin_users`.

## 4. Frontend config
Put the Supabase project URL and public anon key in `config.js`.
Do not use the service-role key.

## 5. Deploy
Deploy the project to Vercel. Your public URL can then be used in Instagram.

## Future build phases
Phase 1: public TCB Auto brand site + private admin CMS.
Phase 2: articles/updates editor.
Phase 3: gallery manager.
Phase 4: member login and profiles.
Phase 5: TCB Stories / build threads.
Phase 6: verified used cars + buy/sell/exchange listings.
Phase 7: moderation, reporting, search, notifications and stronger marketplace workflows.