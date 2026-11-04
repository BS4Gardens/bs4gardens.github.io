---
layout: default
title: "BS4Gardens | Tuinonderhoud en tuinaanleg in Deinze"
description: "BS4Gardens in Deinze: tuinonderhoud, tuinaanleg, opritten en terrassen. Voor een buitentuin waar je jaren van geniet. Vraag vrijblijvend een offerte."
permalink: /
hero: true
---

{% include fotoband.html %}

## Een tuin voor de lange termijn

Wij leggen tuinen, opritten en terrassen aan en onderhouden ze, in Deinze en omgeving.

Onze aanpak is eenvoudig: goed werk dat blijft, zodat je op lange termijn kan genieten van je buitentuin.

{% if site.data.contact.telefoon_c.size > 0 %}<p>Liever bellen? {% include telefoon.html %}</p>{% endif %}

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

## Projecten

{% if site.projecten.size > 0 -%}
{% include projectkaarten.html kort=true %}

[Bekijk alle projecten]({{ '/projecten/' | relative_url }})
{%- else -%}
Hier tonen we binnenkort onze recentste projecten. [Bekijk de projectenpagina]({{ '/projecten/' | relative_url }}).
{%- endif %}

## Werkgebied

We werken in Deinze en omgeving{% if site.test %}.{% else %}, onder meer in:{% endif %}

{% include werkgebied.html %}

<div class="cta-foto on-dark">
<img class="strook-foto" src="{{ '/assets/foto/strook-siertuin.jpg' | relative_url }}?v={{ site.asset_versie }}" alt="" aria-hidden="true" width="1200" height="375" loading="lazy">
<div class="strook-overlay" aria-hidden="true"></div>
<div class="cta-binnen">
<h2>Vraag een offerte</h2>
<p>Vertel kort wat je wil laten doen en waar. We nemen zo snel mogelijk contact op.</p>
{% include contactknoppen.html %}
</div>
</div>
