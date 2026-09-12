# Asif King Ahmed Website V3

V3 includes:
- Responsive premium automotive UI for desktop, Mac, iOS/mobile and tablets.
- Home -> Articles -> About -> My Cars -> Gallery -> TCB Auto -> Stories -> Contact.
- Private Supabase admin dashboard.
- Admin CRUD for Articles, Cars and Gallery plus homepage text and links.
- RLS policies so only users listed in `admin_users` can write.
- TCB logo in header/footer and AK logo in hero.
- `assets/favicon.png` used for browser favicon.

## Supabase setup
1. Create your Auth user.
2. Run `supabase-schema.sql` in Supabase SQL Editor.
3. Add your Auth user's UUID to `public.admin_users`.
4. Keep the publishable key in `config.js`; never put a service-role/secret key there.

## GitHub/Vercel
Replace the existing V2 files with these V3 files and upload the `assets` folder. Commit to `main`; Vercel will redeploy automatically.
