# Tasman Electrical — Smoke Alarm Landing Page

**Register:** brand / marketing landing page (conversion-focused lead-gen).
**Goal:** qualified enquiries from Brisbane homeowners for interconnected photoelectric smoke alarms ahead of the QLD 1 Jan 2027 deadline. Primary actions: quote form + click-to-call 0424 134 830.

**Audience:** ordinary SEQ homeowners, landlords and sellers. Tone: local, licensed, safety-focused, straightforward, reliable. Not playful, not corporate-SaaS.

**Brand (committed, identity-preserved):**
- Green `#22B14C` = the single CTA colour (dark text on green, on-brand).
- Yellow `#FFD400` = urgency accent only (deadline).
- Dark base `#0E1A14`; light surfaces white / `#F4F8F5`.
- Type: Poppins (display) + Inter (body). Logo = yellow TASMAN / green ELECTRICAL (needs dark backing).

**Constraints:** static self-contained HTML (GitHub Pages, no build step). Mobile-first (most traffic is paid mobile). Australian English, no em dashes, no invented pricing/reviews/claims, no "guaranteed compliance", not legal advice.

**Form:** Formspree (AJAX JSON) with mailto fallback. Tracking: single GTM container drives GA4 / Google Ads / Meta Pixel via dataLayer events. IDs pasted into the CONFIG block in index.html.
