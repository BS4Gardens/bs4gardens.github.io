---
layout: default
title: "Over Bavo | BS4Gardens, tuinaanleg en terrassen"
description: "BS4Gardens is een jong bedrijf, maar Bavo heeft vele jaren ervaring in tuinen. Bachelor bouw, voor tuinaanleg, terrassen en opritten."
description_c: "Over Bavo van BS4Gardens: jong bedrijf met vele jaren ervaring in tuinen. Bachelor bouw, tuinaanleg, terrassen en opritten in en rond Deinze."
permalink: /over/
---
{% comment %}
Bio van Bavo, tekst van Bloem (versie 2, 2026-11-04). Keuze in _config.yml: over_variant: C (lyrisch, derde persoon, standaard in de testversie),
B (derde persoon) of A (ik-vorm). Bavo kiest. Bij C hoort description_c als meta-description (de layout kiest die).
Nog in te vullen door Bavo (onzichtbaar in de testversie): exacte benaming van de bachelor en of de school genoemd mag worden,
sinds wanneer hij het bedrijf heeft, vanaf wanneer hij in tuinen werkt (nu 'vele jaren'), wat hem drijft, een eigen foto met alt-tekst,
of 'in en rond Deinze' klopt. De zin over eerder werk wordt door Burchard nagekeken.
{% endcomment %}

# Over Bavo

{% include foto-plek.html tekst="Bavo aan het werk in een tuin" %}

{% if site.over_variant == "A" -%}
Ik ben Bavo en ik heb een bachelor in de bouw. BS4Gardens is een jong bedrijf, maar ik heb al vele jaren ervaring, opgebouwd via vakantiejobs in de tuinen en mijn opleiding. Mijn opleiding gaf me kennis van constructies, zodat ik ze goed kan uitvoeren. Daardoor heb ik een goede basis voor tuinaanleg, constructies, terrassen, opritten en dergelijk werk. Heb je een tuin in gedachten, dan denk ik graag met je mee.
{%- elsif site.over_variant == "B" -%}
Bavo heeft een bachelor in de bouw. BS4Gardens is een jong bedrijf, maar Bavo heeft al vele jaren ervaring, opgebouwd via vakantiejobs in de tuinen en zijn opleiding. Zijn opleiding gaf hem kennis van constructies, zodat hij ze goed kan uitvoeren. Daardoor heeft hij een goede basis voor tuinaanleg, constructies, terrassen, opritten en dergelijk werk. Heb je een tuin in gedachten, dan denkt Bavo graag met je mee.
{%- else -%}
<p class="intro">Waar steen en groen elkaar vinden, begint het werk van Bavo.</p>

Het begon met vakantiejobs, tussen gras, aarde en zomerlicht. Zo kwam Bavo in de tuinen terecht.

Zijn bachelor in de bouw gaf hem kennis van constructies, het stille werk onder het zichtbare. Zoals de fundering onder een terras: je ziet ze niet, maar alles rust erop.

BS4Gardens is een jong bedrijf, maar Bavo brengt al vele jaren ervaring mee. In en rond Deinze legt hij tuinen, terrassen en opritten aan. Misschien zie je jouw eerste lentemorgen op een nieuw terras al voor je, met de zon laag over de stenen, of een oprit waar je elke dag overheen rijdt zonder erbij stil te staan.
{%- endif %}

Voor de start van BS4Gardens deed Bavo al tuinwerk, onder meer via vakantiejobs. Enkele van die eerdere werken staan bij de [projecten]({{ '/projecten/' | relative_url }}), duidelijk aangeduid als eerder werk van Bavo.

Zin om je plannen te bespreken? Neem gerust contact op via de [contactpagina]({{ '/contact/' | relative_url }}).

{% unless site.test %}
<p class="open-regel"><span class="open">Over Bavo [?]</span> Bavo bevestigt de benaming van de bachelor, sinds wanneer hij het bedrijf heeft en kiest variant A, B of C.</p>

## Onze aanpak

- Kwaliteit
- Afspraken nakomen
- Advies dat op lange termijn denkt

<p class="open-regel"><span class="open">Aanpak [?]</span> Bavo bevestigt deze waarden.</p>
{% endunless %}

## Vraag een offerte

{% include contactknoppen.html %}
