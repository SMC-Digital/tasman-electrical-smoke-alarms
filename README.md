# Tasman Electrical — Smoke Alarm Landing Page

Standalone, conversion-focused campaign landing page for **Tasman Electrical**
(Brisbane), targeting the Queensland 1 January 2027 interconnected photoelectric
smoke alarm deadline. Static self-contained HTML, hosted on GitHub Pages, no
build step.

## Go live in 2 minutes — edit two IDs

Open `index.html` and find the **SETUP** block near the top of `<head>`:

```js
window.TE_CONFIG = {
  GTM_ID: "",          // e.g. "GTM-ABC1234"  (Google Tag Manager container)
  FORMSPREE_ID: ""     // e.g. "xdorwkpl"      (from your Formspree form URL)
};
```

- **FORMSPREE_ID** — create a free form at [formspree.io](https://formspree.io) for
  `tasmanelectrical@outlook.com`. Your endpoint looks like
  `https://formspree.io/f/xdorwkpl`; paste just the `xdorwkpl` part.
  Free plan = 50 submissions/month (upgrade for more). The form submits via AJAX
  and, on success, redirects to `thank-you.html`.
  **If left blank**, the form falls back to opening the visitor's email client
  with a pre-filled enquiry — so it still captures leads out of the box.
- **GTM_ID** — paste your Google Tag Manager container id. GA4, Google Ads
  conversions and the Meta Pixel are then configured **inside GTM** listening for
  the dataLayer events below. Leave blank to keep tracking dormant (no code edits
  needed later).

## Files
- `index.html` — the landing page (all sections, inline CSS/JS)
- `thank-you.html` — post-submission page (fires the `generate_lead` conversion)
- `privacy-policy.html` — linked in footer
- `robots.txt`, `sitemap.xml`
- `assets/images/` — logo, favicon, authentic photos

## Local preview
```
python3 -m http.server 8080     # then open http://localhost:8080/
```

## Tracking events (pushed to `window.dataLayer`)
`quote_cta_click`, `phone_click`, `email_click`, `form_start`, `form_submit`,
`generate_lead` — each with `cta_location` / `form_location`. Build your GA4 /
Ads / Meta triggers in GTM off these. `generate_lead` fires exactly once per
submission (on `thank-you.html` for the Formspree path, inline for the email
fallback).

## Spam protection
A hidden `_gotcha` honeypot field is included on both forms (Formspree discards
filled honeypots; the page also silently drops them). Formspree's built-in spam
filtering applies on top.

## Deploy (GitHub Pages)
Repo is served from `main` (root). To connect a custom subdomain, add a `CNAME`
file (e.g. `smokealarms.tasmanelectrical.com.au`) and point DNS at GitHub Pages.
Update the canonical + Open Graph URLs in `index.html` to the final live URL.
