/* Cookiebanner en Google Analytics 4, zonder bibliotheek.
   - Geen script van derden en geen verzoek naar Google voor de bezoeker toestemming gaf.
   - GA4 blijft volledig uit zolang <body data-ga4="G-..."> ontbreekt (meet-ID nog [?]).
   - De keuze staat in localStorage (sleutel bs4g-cookies), geen cookie, 6 maanden geldig.
   - Zodra GA4 aan staat: _ga-cookies maximaal 13 maanden en niet verlengd bij elk bezoek (cookie_expires, cookie_update).
   - Zonder JavaScript gebeurt er niets: geen banner, geen meting. */
(function () {
  var SLEUTEL = "bs4g-cookies";
  var GELDIG_MS = 182 * 24 * 60 * 60 * 1000;      // 6 maanden
  var GA_COOKIE_SECONDEN = 395 * 24 * 60 * 60;    // 13 maanden
  var body = document.body;
  var ga = body.getAttribute("data-ga4") || "";
  var gaGeldig = /^G-[A-Z0-9]{4,}$/.test(ga);
  var banner = document.getElementById("cookiebanner");
  if (!banner) { return; }
  var instellingen = document.getElementById("cookie-instellingen");
  var vink = document.getElementById("cookie-stat");
  var laatsteFocus = null;

  function lees() {
    try {
      var v = JSON.parse(window.localStorage.getItem(SLEUTEL));
      if (v && v.v === 1 && typeof v.t === "number" && Date.now() - v.t < GELDIG_MS) { return v; }
    } catch (e) { /* opslag niet beschikbaar of kapot: geen keuze */ }
    return null;
  }
  function bewaar(stat) {
    try { window.localStorage.setItem(SLEUTEL, JSON.stringify({ v: 1, stat: !!stat, t: Date.now() })); } catch (e) { /* niets */ }
  }

  function wisGaCookies() {
    var namen = document.cookie.split(";");
    var delen = location.hostname.split(".");
    var domeinen = ["", location.hostname];
    if (delen.length > 2) { domeinen.push("." + delen.slice(-2).join(".")); } else { domeinen.push("." + location.hostname); }
    for (var i = 0; i < namen.length; i++) {
      var naam = namen[i].split("=")[0].trim();
      if (naam === "_ga" || naam.indexOf("_ga_") === 0) {
        for (var j = 0; j < domeinen.length; j++) {
          document.cookie = naam + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/" + (domeinen[j] ? "; domain=" + domeinen[j] : "");
        }
      }
    }
  }

  function gebeurtenis(naam, params) {
    if (window.__ga4Geladen && typeof window.gtag === "function") { window.gtag("event", naam, params || {}); }
  }

  function laadGa() {
    if (!gaGeldig || window.__ga4Geladen) { return; }
    window.__ga4Geladen = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", ga, { cookie_expires: GA_COOKIE_SECONDEN, cookie_update: false, allow_google_signals: false, allow_ad_personalization_signals: false });
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(ga);
    document.head.appendChild(s);
    var type = body.getAttribute("data-type");
    var naam = body.getAttribute("data-naam");
    if (type === "dienst") { gebeurtenis("dienst_bekeken", { dienst: naam }); }
    if (type === "project") { gebeurtenis("project_bekeken", { project: naam }); }
  }

  function toon(metInstellingen, metFocus) {
    laatsteFocus = document.activeElement;
    var keuze = lees();
    if (vink) { vink.checked = !!(keuze && keuze.stat); }
    banner.hidden = false;
    var knop = banner.querySelector('[data-cookie="instellingen"]');
    if (metInstellingen && instellingen) {
      instellingen.hidden = false;
      if (knop) { knop.setAttribute("aria-expanded", "true"); }
    }
    var eerste = banner.querySelector("button");
    if (metFocus && eerste) { eerste.focus(); }
  }
  function sluit(stat) {
    bewaar(stat);
    banner.hidden = true;
    if (instellingen) { instellingen.hidden = true; }
    if (stat) { laadGa(); } else { wisGaCookies(); }
    if (laatsteFocus && laatsteFocus.focus) { laatsteFocus.focus(); }
  }

  banner.addEventListener("click", function (e) {
    var el = e.target.closest ? e.target.closest("[data-cookie]") : null;
    if (!el) { return; }
    var wat = el.getAttribute("data-cookie");
    if (wat === "alles") { sluit(true); }
    else if (wat === "nodig") { sluit(false); }
    else if (wat === "opslaan") { sluit(!!(vink && vink.checked)); }
    else if (wat === "instellingen" && instellingen) {
      var open = instellingen.hidden;
      instellingen.hidden = !open;
      el.setAttribute("aria-expanded", open ? "true" : "false");
    }
  });

  // Links "Cookie-instellingen" (voet, cookiepagina): enkel zichtbaar als JavaScript werkt
  var openers = document.querySelectorAll('[data-cookie="instellingen-openen"]');
  for (var i = 0; i < openers.length; i++) {
    openers[i].hidden = false;
    openers[i].addEventListener("click", function () { toon(true, true); });
  }

  // Metingen van klikken: enkel na toestemming (gebeurtenis() doet niets zonder geladen GA4)
  document.addEventListener("click", function (e) {
    var el = e.target.closest ? e.target.closest("[data-event]") : null;
    if (el) { gebeurtenis(el.getAttribute("data-event")); }
  });

  var keuze = lees();
  if (!keuze) { toon(false, false); }
  else if (keuze.stat) { laadGa(); }
})();
