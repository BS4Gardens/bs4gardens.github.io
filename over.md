---
layout: default
title: "Over Bavo | BS4Gardens, tuinaanleg en terrassen"
description: "Maak kennis met Bavo van BS4Gardens: bachelor in de bouw met kennis van constructies, een goede basis voor tuinaanleg, terrassen en opritten."
permalink: /over/
---
{% comment %}
Bio van Bavo, tekst van Bloem (2026-11-03). Keuze variant in _config.yml: over_variant: B (derde persoon) of A (ik-vorm). Bavo kiest.
Nog in te vullen door Bavo (onzichtbaar in de testversie): exacte benaming van de bachelor en of de school genoemd mag worden,
sinds wanneer hij het bedrijf heeft, wat hem drijft in het werk, een eigen foto met alt-tekst.
{% endcomment %}

# Over Bavo

{% include foto-plek.html tekst="Bavo aan het werk in een tuin" %}

{% if site.over_variant == "A" -%}
Ik ben Bavo en ik heb een bachelor in de bouw. Via vakantiejobs ben ik zo in de tuinen terechtgekomen. Mijn opleiding gaf me kennis van constructies, zodat ik ze goed kan uitvoeren. Daardoor heb ik een goede basis voor tuinaanleg, constructies, terrassen, opritten en dergelijk werk. Heb je een tuin in gedachten, dan denk ik graag met je mee.
{%- else -%}
Bavo heeft een bachelor in de bouw. Via vakantiejobs kwam hij zo in de tuinen terecht. Zijn opleiding gaf hem kennis van constructies, zodat hij ze goed kan uitvoeren. Daardoor heeft hij een goede basis voor tuinaanleg, constructies, terrassen, opritten en dergelijk werk. Heb je een tuin in gedachten, dan denkt Bavo graag met je mee.
{%- endif %}

Zin om je plannen te bespreken? Neem gerust contact op via de [contactpagina]({{ '/contact/' | relative_url }}).

{% unless site.test %}
<p class="open-regel"><span class="open">Over Bavo [?]</span> Bavo bevestigt de benaming van de bachelor, sinds wanneer hij het bedrijf heeft en kiest variant A of B.</p>

## Onze aanpak

- Kwaliteit
- Afspraken nakomen
- Advies dat op lange termijn denkt

<p class="open-regel"><span class="open">Aanpak [?]</span> Bavo bevestigt deze waarden.</p>
{% endunless %}

## Vraag een offerte

{% include contactknoppen.html %}
