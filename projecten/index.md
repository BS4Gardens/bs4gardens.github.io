---
layout: default
title: "Projecten | Realisaties van BS4Gardens"
description: "Bekijk recente projecten van BS4Gardens: tuinen, opritten en terrassen in Deinze en omgeving."
permalink: /projecten/
---

# Onze projecten

{% if site.projecten.size > 0 -%}
{% include projectkaarten.html %}
{%- else -%}
Hier tonen we binnenkort onze recentste projecten.{% unless site.test and site.data.contact.instagram contains "[?" %} Volg ons ondertussen op {% include instagram.html %}.{% endunless %}

{% include foto-plek.html tekst="Voor en na van een afgewerkt project" %}
{%- endif %}

## Vraag een offerte

Heb je zelf een project in gedachten? Vertel ons wat je wil laten doen.

{% include contactknoppen.html %}
