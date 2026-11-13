---
layout: default
title: "Cookies | BS4Gardens"
description: "Lees welke cookies de website van BS4Gardens gebruikt en hoe je je keuze wijzigt."
permalink: /cookies/
juridisch: nagelezen-burchard-20261111
---
{% comment %}
INTERN, niet zichtbaar op de site: tekst van Burchard (2026-11-11), versie 3 (volgt het versienummer van de privacyverklaring, 2026-11-13), zelfde feiten als _data/privacy.yml, privacy.md en de
cookiebanner. De duur (182 dagen keuze, 395 dagen _ga) en de gemeten gebeurtenissen moeten gelijk blijven aan assets/cookies.js.
{% endcomment %}
{%- assign ga = site.ga4_id | default: "" -%}
{%- if ga == "" or ga contains "[?" -%}{%- assign ga_aan = false -%}{%- else -%}{%- assign ga_aan = true -%}{%- endif %}

# Cookies op de website van BS4Gardens

Versie 3 (13 november 2026)

Deze website is van {{ site.data.contact.bedrijf }}, ondernemingsnummer {{ site.data.contact.ondernemingsnummer }}. Lees ook onze [privacyverklaring]({{ '/privacy/' | relative_url }}).

## Wat zijn cookies

Cookies zijn kleine bestanden die een website op je toestel bewaart. Hier bedoelen we ook vergelijkbare technieken, zoals de opslag van je browser.

{% if ga_aan -%}
## Strikt noodzakelijk

We bewaren je cookiekeuze in de opslag van je browser, zodat we het niet bij elke pagina opnieuw vragen. Daarvoor is geen toestemming nodig.

| Naam | Doel | Duur | Van wie |
|---|---|---|---|
| bs4g-cookies (opslag in je browser, geen cookie) | je keuze over statistieken onthouden | 6 maanden, daarna vragen we het opnieuw | BS4Gardens |

## Statistieken (enkel met je toestemming)

Als je statistieken aanvaardt, gebruiken we Google Analytics 4. Je browser laadt dan een script van Google (www.googletagmanager.com). Zo zien we welke pagina's bekeken worden, welke dienst of welk project je bekijkt, waar bezoekers vandaan komen, en hoe vaak iemand klikt om te bellen, te mailen, een WhatsApp-bericht te sturen of naar Instagram te gaan. We gebruiken dat enkel om de website te verbeteren. Google-signalen en advertentiepersonalisatie staan uit. De gegevens zijn niet anoniem: Google ontvangt onder meer je IP-adres en een willekeurige code. Google kan gegevens in de Verenigde Staten verwerken; zie de privacyverklaring.

| Naam | Doel | Duur | Van wie |
|---|---|---|---|
| \_ga | bezoekers van elkaar onderscheiden | 13 maanden, niet verlengd bij een volgend bezoek | Google |
| \_ga\_ gevolgd door een code | de sessie bijhouden | 13 maanden, niet verlengd bij een volgend bezoek | Google |

Weiger je, dan plaatsen we deze cookies niet, laden we het script van Google niet en wordt er niets naar Google gestuurd. De website werkt dan gewoon.

## Je keuze wijzigen of intrekken

Klik op "Cookie-instellingen" onderaan elke pagina of op de knop hieronder. Met één klik op "Alles weigeren" trek je je toestemming in; we wissen dan ook de Google Analytics-cookies op je toestel. Je kan cookies ook in je browser verwijderen of blokkeren.

<p><button type="button" class="linkknop" data-cookie="instellingen-openen" hidden>Cookie-instellingen openen</button></p>
{%- else -%}
## Wat deze website bewaart

Deze website plaatst op dit moment geen cookies, bewaart niets in de opslag van je browser en meet niet hoe ze gebruikt wordt. Er gaan geen gegevens naar Google of andere meetdiensten. Daarom zie je ook geen cookiebanner.

Gaan we later statistieken gebruiken, dan doen we dat enkel met je toestemming, via een cookiebanner, en passen we deze verklaring aan.

Klik je op de knop voor WhatsApp of op de link naar Instagram, dan kom je op een dienst van Meta. Wat Meta daar met cookies doet, valt onder de regels van Meta.
{%- endif %}

## Contact

Vragen over cookies? Mail ons ({% include mail.html %}) of schrijf naar ons zeteladres in de [privacyverklaring]({{ '/privacy/' | relative_url }}).
