---
layout: default
title: "BS4Gardens | Tuinonderhoud en tuinaanleg in Deinze"
description: "BS4Gardens in Deinze: tuinonderhoud, tuinaanleg, opritten en terrassen. Voor een buitentuin waar je jaren van geniet. Vraag vrijblijvend een offerte."
permalink: /
---

<div class="hero" markdown="1">
<div markdown="1">

# Een tuin om jaren van te genieten

BS4Gardens zorgt voor je buitentuin, van het eerste ontwerp tot het onderhoud nadien.

Wij leggen tuinen, opritten en terrassen aan en onderhouden ze, in Deinze en omgeving.

Onze aanpak is eenvoudig: goed werk dat blijft, zodat je op lange termijn kan genieten van je buitentuin.

<div class="knoppen"><a class="knop" href="{{ '/contact/' | relative_url }}">Vraag een offerte</a></div>

{% if site.data.contact.telefoon_c.size > 0 %}<p>Liever bellen? {% include telefoon.html %}</p>{% endif %}

</div>

{% include foto-plek.html tekst="Sfeerfoto van een afgewerkte tuin van BS4Gardens" %}

</div>

{% include fotoband.html %}

## Onze diensten

{% include dienstkaarten.html %}

{% unless site.test %}
## Waarom BS4Gardens

<ul class="punten">
<li><strong>Vier diensten, één aanspreekpunt</strong><br>Aanleg, oprit, terras en onderhoud bij elkaar.</li>
<li><strong>Werk dat blijft</strong><br>Goed werk dat blijft, zodat je jaren kan genieten.</li>
<li><strong>Eerst kijken, dan offreren</strong><br>Na een plaatsbezoek maken we je offerte.</li>
</ul>

<p class="open-regel"><span class="open">Punten [?]</span> Bavo bevestigt of past deze drie punten aan.</p>
{% endunless %}

## Laatste projecten

{% if site.projecten.size > 0 -%}
{% include projectkaarten.html %}

[Bekijk alle projecten]({{ '/projecten/' | relative_url }})
{%- else -%}
Hier tonen we binnenkort onze recentste projecten. [Bekijk de projectenpagina]({{ '/projecten/' | relative_url }}).
{%- endif %}

## Werkgebied

We werken in Deinze en omgeving{% if site.test %}.{% else %}, onder meer in:{% endif %}

{% include werkgebied.html %}

## Vraag een offerte

Vertel kort wat je wil laten doen en waar. We nemen zo snel mogelijk contact op.

{% include contactknoppen.html %}
