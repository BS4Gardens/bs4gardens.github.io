/* Fotoband op de home: vorige/volgende, automatisch langzaam doorschuiven met pauzeknop.
   - Zonder JavaScript is de band een gewone scrollbare rij (scroll-snap), de knoppen blijven verborgen.
   - Pauze bij hover, toetsenbordfocus en aanraken; volledig uit bij prefers-reduced-motion; stopt ook als het tabblad verborgen is.
   - Geen bibliotheek, geen cookies, geen verzoeken naar derden. */
(function () {
  // Hero: pauzeknop voor de wisselende achtergrondfoto's (de animatie zelf is pure CSS en staat uit bij verminderde beweging)
  var heroKnop = document.querySelector('[data-hero="pauze"]');
  var hero = document.querySelector(".hero-band");
  if (heroKnop && hero) {
    heroKnop.hidden = false;
    heroKnop.addEventListener("click", function () {
      var pauze = hero.classList.toggle("gepauzeerd");
      heroKnop.textContent = pauze ? "Speel af" : "Pauzeer";
      heroKnop.setAttribute("aria-pressed", pauze ? "true" : "false");
      heroKnop.setAttribute("aria-label", pauze ? "Laat de achtergrondfoto's weer wisselen" : "Pauzeer de wisselende achtergrondfoto's");
    });
  }

  var band = document.querySelector(".fotoband");
  if (!band) { return; }
  var rij = band.querySelector(".band-rij");
  var items = band.querySelectorAll(".band-item");
  if (!rij || items.length < 2) { return; }

  var INTERVAL_MS = 5500;
  var minder = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var knopVorige = band.querySelector('[data-band="vorige"]');
  var knopVolgende = band.querySelector('[data-band="volgende"]');
  var knopPauze = band.querySelector('[data-band="pauze"]');
  var gebruikerPauze = minder;   // bij verminderde beweging nooit automatisch
  var tijdelijk = false;
  var timer = null;

  if (knopVorige) { knopVorige.hidden = false; }
  if (knopVolgende) { knopVolgende.hidden = false; }
  if (knopPauze) { knopPauze.hidden = minder; }

  function huidig() {
    var best = 0, afstand = Infinity;
    for (var i = 0; i < items.length; i++) {
      var d = Math.abs(items[i].offsetLeft - rij.offsetLeft - rij.scrollLeft);
      if (d < afstand) { afstand = d; best = i; }
    }
    return best;
  }
  function naar(i) {
    if (i < 0) { i = items.length - 1; }
    if (i >= items.length) { i = 0; }
    var x = items[i].offsetLeft - rij.offsetLeft;
    if (rij.scrollTo) { rij.scrollTo({ left: x, behavior: minder ? "auto" : "smooth" }); } else { rij.scrollLeft = x; }
  }
  function volgende() {
    // aan het einde van de rij: terug naar het begin
    var einde = rij.scrollLeft + rij.clientWidth >= rij.scrollWidth - 2;
    naar(einde ? 0 : huidig() + 1);
  }
  function plan() {
    window.clearInterval(timer);
    timer = null;
    if (!gebruikerPauze && !tijdelijk && !document.hidden) { timer = window.setInterval(volgende, INTERVAL_MS); }
  }

  if (knopVorige) { knopVorige.addEventListener("click", function () { naar(huidig() - 1); plan(); }); }
  if (knopVolgende) { knopVolgende.addEventListener("click", function () { naar(huidig() + 1); plan(); }); }
  if (knopPauze) {
    knopPauze.addEventListener("click", function () {
      gebruikerPauze = !gebruikerPauze;
      knopPauze.textContent = gebruikerPauze ? "Speel af" : "Pauzeer";
      knopPauze.setAttribute("aria-pressed", gebruikerPauze ? "true" : "false");
      knopPauze.setAttribute("aria-label", gebruikerPauze ? "Laat de foto's automatisch doorschuiven" : "Pauzeer het automatisch doorschuiven");
      plan();
    });
  }

  band.addEventListener("mouseenter", function () { tijdelijk = true; plan(); });
  band.addEventListener("mouseleave", function () { tijdelijk = false; plan(); });
  band.addEventListener("focusin", function () { tijdelijk = true; plan(); });
  band.addEventListener("focusout", function () { tijdelijk = false; plan(); });
  band.addEventListener("touchstart", function () { tijdelijk = true; plan(); }, { passive: true });
  band.addEventListener("touchend", function () {
    window.setTimeout(function () { tijdelijk = false; plan(); }, 8000);
  }, { passive: true });
  document.addEventListener("visibilitychange", plan);

  plan();
})();
