/* Contactknoppen: telefoon, WhatsApp en e-mail komen pas na een klik of tik van de bezoeker te voorschijn.
   - De gegevens staan in de pagina enkel gecodeerd (omgekeerd + base64, in stukjes) in <div id="contactdata">.
   - Zonder JavaScript blijven de knoppen verborgen en staat er een tekst met de Instagram-link.
   - Dit stopt eenvoudige scrapers die enkel HTML lezen, geen bezoeker of bot die JavaScript uitvoert en klikt.
   Knoppen: data-contact="tel" (toont het nummer als link), "mail" (toont het adres als link),
   "wa" (opent WhatsApp in een nieuw tabblad), "bel" (belt meteen, voor de vaste knop op gsm). */
(function () {
  var bron = document.getElementById("contactdata");
  if (!bron) { return; }

  function ontcijfer(attribuut) {
    var s = bron.getAttribute(attribuut);
    if (!s) { return ""; }
    try { return window.atob(s.split(".").join("")).split("").reverse().join(""); } catch (e) { return ""; }
  }
  function nummer() {
    var ruw = ontcijfer("data-t");
    var cijfers = ruw.replace(/\D/g, "");
    if (!/^0\d{8,9}$/.test(cijfers)) { return null; }
    return { getoond: ruw, intl: "+32" + cijfers.slice(1), wa: "32" + cijfers.slice(1) };
  }
  function adres() {
    var m = ontcijfer("data-m");
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(m) ? m : null;
  }
  function vervang(knop, href, tekst, label) {
    var a = document.createElement("a");
    a.className = knop.className;
    a.href = href;
    a.textContent = tekst;
    a.setAttribute("aria-label", label);
    a.setAttribute("data-event", knop.getAttribute("data-event") || "");
    knop.parentNode.replaceChild(a, knop);
    a.focus();
  }

  var TEL = "te" + "l:";
  var MAIL = "mail" + "to:";
  var WA = "https://wa.me/";

  function actie(knop) {
    var soort = knop.getAttribute("data-contact");
    var n, m;
    if (soort === "tel") {
      n = nummer();
      if (n) { vervang(knop, TEL + n.intl, n.getoond, "Bel BS4Gardens op " + n.getoond); }
    } else if (soort === "bel") {
      n = nummer();
      if (n) { window.location.href = TEL + n.intl; }
    } else if (soort === "mail") {
      m = adres();
      if (m) { vervang(knop, MAIL + m, m, "Stuur een e-mail naar " + m); }
    } else if (soort === "wa") {
      n = nummer();
      if (n) {
        var tekst = bron.getAttribute("data-w") || "";
        window.open(WA + n.wa + "?text=" + encodeURIComponent(tekst), "_blank", "noopener,noreferrer");
      }
    }
  }

  var knoppen = document.querySelectorAll("[data-contact]");
  for (var i = 0; i < knoppen.length; i++) {
    knoppen[i].hidden = false;
    knoppen[i].addEventListener("click", function (e) { actie(e.currentTarget); });
  }
  var nojs = document.querySelectorAll(".contact-nojs");
  for (var j = 0; j < nojs.length; j++) { nojs[j].hidden = true; }
})();
