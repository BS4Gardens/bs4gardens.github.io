---
layout: default
title: "Privacyverklaring | BS4Gardens"
description: "Lees hoe BS4Gardens omgaat met je persoonsgegevens."
permalink: /privacy/
juridisch: nagelezen-burchard-20261111
---
{% comment %}
INTERN, niet zichtbaar op de site: tekst van Burchard (2026-11-11), versie 2. Zelfde feiten als _data/privacy.yml, cookies.md,
de cookiebanner en artikel 20bis van de Algemene voorwaarden BS4Gardens (voorlopig v3). Verandert hier een feit, dan alle
lagen aanpassen en een nieuw versienummer geven.
{% endcomment %}
{%- assign ga = site.ga4_id | default: "" -%}
{%- if ga == "" or ga contains "[?" -%}{%- assign ga_aan = false -%}{%- else -%}{%- assign ga_aan = true -%}{%- endif %}

# Privacyverklaring van BS4Gardens

Versie 2 (11 november 2026)

Deze verklaring hoort bij artikel 20bis van onze algemene voorwaarden. Daar staat een korte versie; hier lees je alles.

## Wie is verantwoordelijk

{% include wettelijk.html %}

BS4Gardens is verantwoordelijk voor de verwerking van je persoonsgegevens zoals hieronder beschreven. Vragen over je gegevens stel je per e-mail ({% include mail.html %}) of per brief aan ons zeteladres hierboven.

## Welke gegevens we verwerken, waarvoor en op welke grond

**Je bezoekt de website.** Onze website staat bij GitHub (een bedrijf van de Microsoft-groep). GitHub registreert bij elk bezoek je IP-adres en bewaart het voor de beveiliging van zijn dienst. Wij gebruiken die gegevens zelf niet. Grond: ons gerechtvaardigd belang om een veilige website aan te bieden. Hoe lang GitHub die gegevens bewaart, bepaalt GitHub in zijn eigen privacybeleid.

{% if ga_aan -%}
**Je aanvaardt statistieken.** Alleen als je daar in de cookiebanner toestemming voor geeft, meten we met Google Analytics hoe de website gebruikt wordt. Je browser laadt dan een script van Google (www.googletagmanager.com) en Google ontvangt technische gegevens zoals je IP-adres, een willekeurige code die in een cookie op je toestel staat, de pagina's die je bekijkt, welke dienst of welk project je bekijkt, en of je klikt om te bellen, te mailen, een WhatsApp-bericht te sturen of naar Instagram te gaan. Die gegevens zijn niet anoniem, maar we gebruiken ze enkel samengevat om de website te verbeteren. Google-signalen en advertentiepersonalisatie staan uit. Grond: je toestemming. Bewaring in Google Analytics: 2 maanden; de cookies op je toestel 13 maanden. Je keuze bewaren we 6 maanden in de opslag van je browser. Meer uitleg vind je in de [cookieverklaring]({{ '/cookies/' | relative_url }}).
{%- else -%}
**Statistieken.** We meten op dit moment niet hoe de website gebruikt wordt. Er worden geen cookies geplaatst en er gaan geen gegevens naar Google. Gaan we dat later wel doen, dan vragen we eerst je toestemming en passen we deze verklaring aan. Meer uitleg vind je in de [cookieverklaring]({{ '/cookies/' | relative_url }}).
{%- endif %}

**Je contacteert ons** per telefoon, e-mail, WhatsApp of Instagram. We verwerken je naam, je contactgegevens, de gemeente of het adres van de werf, je vraag en de foto's die je meestuurt. We gebruiken die om je te antwoorden en een offerte te maken. Grond: maatregelen die je zelf vraagt vóór een overeenkomst. Bewaring: 2 jaar na ons laatste contact als er geen opdracht volgt.

**Je wordt klant.** We verwerken je naam, adres, contactgegevens, het adres van de werf, de afspraken, foto's van de werf voor de opvolging van het werk, de facturen en betalingen, en bij een onderneming het ondernemings- en btw-nummer. We gebruiken die om het werk uit te voeren en op te volgen, te factureren en onze boekhouding te voeren. Grond: de uitvoering van de overeenkomst en onze wettelijke verplichtingen (boekhouding en btw). Bewaring: facturen en boekhoudstukken zolang de fiscale en boekhoudwetgeving vraagt, in de regel 7 jaar vanaf 1 januari van het jaar na de factuurdatum; andere gegevens over de opdracht (afspraken, correspondentie, werffoto's) 5 jaar na het einde van de opdracht.

**Een factuur blijft onbetaald of er is een geschil.** We gebruiken de gegevens die nodig zijn om de factuur te innen of het geschil te regelen. Grond: ons gerechtvaardigd belang om onze rechten te verdedigen. Bewaring: tot het geschil of de invordering afgehandeld is.

**Foto's van projecten.** We maken foto's van onze werken voor de opvolging van de opdracht. Foto's van jouw werken gebruiken we voor onze website, Instagram, offertes voor andere klanten en folders enkel als je daar vooraf toestemming voor gaf, met een apart vakje in de offerte of via een bericht. Weigeren heeft geen gevolgen voor je offerte of het werk. We gebruiken de foto's anoniem: zonder personen, naam, straat, huisnummer of gemeente, nummerplaten of herkenbare gevel. De gemeente of je voornaam vermelden we enkel als je daar apart mee instemt. Foto's die je zelf maakt en ons stuurt, gebruiken we nooit voor promotie zonder je toestemming. Grond: je toestemming, die je altijd kan intrekken via {% include mail.html %} of een bericht; dan halen we de foto's van de website en Instagram en gebruiken we ze niet meer in nieuwe offertes of folders. Drukwerk dat al verspreid is, kunnen we niet terughalen. Bewaring: zolang we de foto's gebruiken; je toestemming bewaren we daarna nog 5 jaar, zodat we kunnen aantonen dat je ze gaf.

Je bent niet verplicht om ons gegevens te geven. Zonder naam, contactgegevens en werfadres kunnen we je wel niet antwoorden, geen offerte maken en het werk niet uitvoeren of factureren. We nemen geen beslissingen over jou die alleen op geautomatiseerde verwerking steunen.

## Met wie we gegevens delen

We verkopen je gegevens niet. We geven ze enkel door aan wie we daarvoor nodig hebben:

- GitHub, voor de hosting van de website
{%- if ga_aan %}
- Google (Google Analytics), enkel als je statistieken aanvaardt
{%- endif %}
- Microsoft (Microsoft 365), voor onze e-mail
- ons boekhoudkantoor Fiscorum, voor de boekhouding
- Yuki, ons boekhoudpakket, voor boekhouding en facturatie, ook voor het versturen van elektronische facturen via het Peppol-netwerk
- onze bank, voor betalingen
- onderaannemers, enkel voor het deel van het werk dat zij uitvoeren
- het kabel- en leidingeninformatieportaal (KLIP) van de Vlaamse overheid, enkel de ligging van de werf, vóór grondwerken
- onze verzekeraar Baloise, via makelaarskantoor Remue, bij schade of een schadegeval
- een advocaat of gerechtsdeurwaarder, enkel bij een geschil of invordering
- de hulpmiddelen voor tekst- en mailverwerking die ons team gebruikt, waaronder AI-diensten van Anthropic (Verenigde Staten), om mails en documenten voor te bereiden
- overheden, als de wet ons daartoe verplicht

Met dienstverleners die gegevens voor ons verwerken, sluiten we afspraken die je gegevens beschermen.

**WhatsApp en Instagram.** Op de website staan een WhatsApp-knop en een link naar Instagram. Er gaat niets naar Meta (het bedrijf achter WhatsApp en Instagram) zolang je er niet op klikt. Klik je wel, dan gelden ook de privacyregels van Meta. Wat je ons via WhatsApp of Instagram stuurt, gebruiken we zoals beschreven bij "Je contacteert ons".

## Gegevens buiten Europa

Sommige van onze dienstverleners zijn Amerikaanse bedrijven of hun moederbedrijf is Amerikaans: Microsoft (e-mail), Meta (WhatsApp en Instagram), GitHub (onze website){% if ga_aan %}, Google (statistieken){% endif %} en Anthropic (AI-hulpmiddelen). Daardoor kunnen gegevens naar de Verenigde Staten gaan. {% if ga_aan %}Google steunt daarvoor op het EU-VS Data Privacy Framework, waarvoor de Europese Commissie besliste dat het een passend beschermingsniveau biedt, en op standaardcontractbepalingen van de Europese Commissie. {% endif %}Een beschrijving of kopie van de waarborgen die per dienstverlener voor die doorgifte gelden, kan je bij ons opvragen.

## Je rechten

Je hebt het recht om:

- je gegevens in te zien en een kopie te krijgen
- foute gegevens te laten verbeteren
- je gegevens te laten wissen, behalve wat we wettelijk moeten bewaren (zoals facturen)
- de verwerking te laten beperken
- bezwaar te maken tegen een verwerking op grond van ons gerechtvaardigd belang
- gegevens die je ons gaf in een gangbaar formaat te krijgen of te laten doorsturen
- je toestemming op elk moment in te trekken; wat we vóór de intrekking deden, blijft geldig

Stuur je vraag per e-mail ({% include mail.html %}) of per brief aan ons zeteladres. We antwoorden binnen een maand. Soms vragen we je om te bevestigen wie je bent.

## Klacht

Ben je niet tevreden, laat het ons eerst weten. Je kan ook altijd een klacht indienen bij de Gegevensbeschermingsautoriteit:

Gegevensbeschermingsautoriteit<br>
Drukpersstraat 35, 1000 Brussel<br>
[www.gegevensbeschermingsautoriteit.be](https://www.gegevensbeschermingsautoriteit.be)

## Beveiliging

We beveiligen je gegevens met passende technische en organisatorische maatregelen en geven alleen toegang aan wie ze nodig heeft.

## Wijzigingen

We kunnen deze verklaring aanpassen. Het versienummer en de datum bovenaan tonen welke versie geldt. Artikel 20bis van onze algemene voorwaarden en onze cookieverklaring verwijzen naar hetzelfde versienummer. Wezenlijke wijzigingen melden we aan lopende klanten per e-mail.
