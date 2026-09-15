# Asif King Ahmed Website — Final CMS Build

This build is intended to be the stable foundation rather than another small version.

## Included
- Premium responsive public website for desktop, Mac, iPad/tablet and mobile.
- Navigation: Home → Articles → About → My Cars → Gallery → TCB Auto → Stories → Contact.
- Proper article reader with cover image, rich text, slug and SEO fields.
- Secure Supabase Auth + admin allow-list + RLS.
- Full admin dashboard for homepage, articles, cars, gallery and site settings.
- Drag-and-drop image uploads to Supabase Storage. No image URLs required.
- Multiple photo upload for car galleries and site gallery.
- Publish/draft controls and delete/edit controls.
- Drag-and-drop public section ordering and visibility controls.
- Site title/meta description and social/contact link management.
- TCB transparent logo in header/footer and favicon; AK logo in hero.

## One-time Supabase setup
1. Keep your existing Supabase Auth admin user.
2. Confirm that user is present in `public.admin_users` (already done if you followed the earlier setup).
3. Run `supabase-schema.sql` once in Supabase SQL Editor. It upgrades the existing V3 schema and creates the `site-media` storage bucket and policies.
4. Do not use a service-role/secret key in the website.

## Deploy
Replace the files in the GitHub `website` repository with this package and keep the `assets/` folder. Commit to `main`; Vercel will redeploy.

## Admin use
Open the site's Admin section, sign in, then:
- Homepage: edit hero/about text and reorder/hide sections.
- Articles: create, rich-edit, drag/drop a cover image, publish/draft, edit/delete.
- My Cars: create/edit cars and upload cover + multiple photos.
- Gallery: drag/drop multiple photos, caption and publish.
- Site Settings: social links, email and SEO.

## Notes
The public publishable Supabase key is safe to use in browser code when Row Level Security is correctly configured. Never expose a Supabase secret/service-role key.
