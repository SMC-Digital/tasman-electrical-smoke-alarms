/* =====================================================================
   TASMAN ELECTRICAL — SETUP  (edit these two IDs, nothing else)
   Loaded by index.html AND thank-you.html, so tracking + the form
   endpoint are configured in ONE place.

   1) GTM_ID       your Google Tag Manager container, e.g. "GTM-ABC1234".
                   Leave "" to keep tracking dormant. GA4, Google Ads and
                   the Meta Pixel are then managed inside GTM off the
                   dataLayer events (form_start, form_submit, generate_lead...).
   2) FORMSPREE_ID the id from your Formspree endpoint. If your form URL is
                   https://formspree.io/f/xdorwkpl  then FORMSPREE_ID="xdorwkpl".
                   Leave "" and the form emails the enquiry instead.
   ===================================================================== */
window.TE_CONFIG = {
  GTM_ID: "",          /* e.g. "GTM-ABC1234" */
  FORMSPREE_ID: ""     /* e.g. "xdorwkpl"     */
};

/* --- do not edit below --- */
window.dataLayer = window.dataLayer || [];
(function (w, d, s, l, i) {
  if (!i || i.indexOf("GTM-") !== 0) return;         /* only load with a real id */
  w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != 'dataLayer' ? '&l=' + l : '';
  j.async = true;
  j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', window.TE_CONFIG.GTM_ID);
