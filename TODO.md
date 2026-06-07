# Admin Panel + Blog with OTP Auth + Supabase

## Supabase Tables

Run these in Supabase SQL Editor before anything else:

```sql
CREATE TABLE blogs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT NOT NULL,
  author_name TEXT NOT NULL,
  author_email TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending','approved','rejected')),
  tag_label TEXT DEFAULT 'Blog',
  tags TEXT[] DEFAULT '{}'
);

CREATE TABLE events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  date TEXT NOT NULL,
  time TEXT NOT NULL,
  description TEXT NOT NULL,
  agenda TEXT[] DEFAULT '{}',
  details TEXT DEFAULT '',
  organiser TEXT DEFAULT '',
  tags TEXT[] DEFAULT '{}',
  picture TEXT DEFAULT '',
  registration_link TEXT DEFAULT '',
  tag TEXT DEFAULT 'standard',
  tag_label TEXT DEFAULT 'Event',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### blogs.content storage format

TipTap outputs **raw HTML** stored in the `content` TEXT column. Displayed on the frontend via `dangerouslySetInnerHTML` inside a Tailwind `prose` wrapper.

### Admin check

`ADMIN_EMAILS` env var — no separate admin table. After OTP, the server checks `user.email` against the comma-separated list.

---

## Phase 1: Setup

- [ ] Supabase Dashboard → Auth → Settings → SMTP → configure Resend credentials
- [ ] Supabase SQL Editor → run the two CREATE TABLE statements
- [ ] Create `public/blogs-and-events/` bucket in Supabase Storage (for event images)
- [ ] Create `.env.local`:
  ```
  NEXT_PUBLIC_SUPABASE_URL=
  NEXT_PUBLIC_SUPABASE_ANON_KEY=
  SUPABASE_SERVICE_KEY=
  ADMIN_EMAILS=ieeestcet@stcet.ac.in
  ```
- [ ] Install dependencies:
  ```
  npm install @supabase/supabase-js
  npm install @tiptap/react @tiptap/starter-kit @tiptap/extension-heading @tiptap/extension-bullet-list @tiptap/extension-ordered-list
  npm install @tailwindcss/typography
  ```
- [ ] Add `@plugin "@tailwindcss/typography";` to `app/globals.css`
- [ ] Create `lib/supabase.ts` — public client (anon key, browser-safe)
- [ ] Create `lib/supabase-admin.ts` — service-role client (server-only)
- [ ] Create `lib/email.ts` — `extractNameFromEmail()`, `isStcetEmail()`

## Phase 2: Auth (OTP via Supabase Auth + Resend)

- [ ] `app/api/auth/send-otp/route.ts` — POST: `supabase.auth.signInWithOtp({ email })`
- [ ] `app/api/auth/verify-otp/route.ts` — POST: verify OTP, check `ADMIN_EMAILS`, return role

## Phase 3: Blog Writing (Student Flow)

- [ ] `app/write/page.tsx` — Email input + "Send OTP" button
- [ ] `app/write/editor/page.tsx` — OTP-protected, TipTap editor, auto-fill name from email, submit stores to Supabase with `status: "pending"`
- [ ] `app/write/success/page.tsx` — "Blog submitted for approval"

## Phase 4: Blog & Event APIs

- [ ] `app/api/blogs/route.ts` — GET (approved blogs), POST (create blog)
- [ ] `app/api/blogs/[id]/status/route.ts` — PATCH: approve/reject (service-role only)
- [ ] `app/api/events/route.ts` — GET, POST
- [ ] `app/api/events/[id]/route.ts` — PATCH, DELETE

## Phase 5: Admin Panel (OTP + admin email check)

- [ ] `app/admin/page.tsx` — Login (same OTP flow, redirects to dashboard)
- [ ] `app/admin/dashboard/page.tsx` — Overview (pending blogs count, events count)
- [ ] `app/admin/blogs/page.tsx` — List all blogs, approve/reject buttons
- [ ] `app/admin/events/page.tsx` — List all events
- [ ] `app/admin/events/new/page.tsx` — Event creation form
- [ ] `app/admin/events/edit/[id]/page.tsx` — Event edit form

## Phase 6: Update Public Display Pages

- [ ] `app/blogs/page.tsx` — Fetch from Supabase (approved), fallback to constants
- [ ] `app/blogs/[slug]/page.tsx` — Fetch from Supabase, fallback to constants, render content with `prose`
- [ ] `app/events/page.tsx` — Fetch from Supabase, fallback to constants
- [ ] `app/events/[slug]/page.tsx` — Fetch from Supabase, fallback to constants

## Phase 7: Verify & Polish

- [ ] Test OTP: send → receive email → verify → redirect
- [ ] Test blog write: TipTap editor → submit → status = "pending"
- [ ] Test admin approve: login → approve → visible on `/blogs`
- [ ] Test event CRUD: create → edit → delete
- [ ] Test fallback: if Supabase is empty, constants show
- [ ] Build passes: `npm run build`
