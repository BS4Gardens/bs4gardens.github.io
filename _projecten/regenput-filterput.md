---
# TESTPROJECT (testversie 2026-11-03). De tekst en alt-teksten komen van Bloem (projecttekst eerste project, versie 2),
# de foto's zijn uitsneden uit schermafbeeldingen (maak_fotos.py) en worden vervangen door de originelen van Bavo.
# De klant blijft 'een klant': de voornaam komt er pas op na zijn ok. Daarom toestemming_klant: false en test_project: true.
# controle.py laat dit enkel toe met --test; --publicatie weigert het.
layout: default
title: "Regenput van 5000 liter met filterput | Project van BS4Gardens"
description: "Een regenput van 5000 liter met filterput met lavastenen, geplaatst en aangesloten op de bestaande installatie. Een project van BS4Gardens."
titel: "Regenput van 5000 liter met filterput"
kort: "Regenput met filterput"                 # bijschrift in de fotoband op de home
# gemeente ontbreekt bewust (nog niet bevestigd): de pagina toont dan geen plaats
dienst: "Tuinaanleg"
toestemming_klant: false
test_project: true
fotos:
  - bestand: regenput-1-put-minigraafmachine.jpg
    alt: "Uitgegraven put in een weide met een minigraafmachine op de achtergrond"
    breedte: 660
    hoogte: 690
    band: true
  - bestand: regenput-2-diepe-put-wiellader.jpg
    alt: "Diepe put met vlakke zandbodem klaar voor de regenput"
    breedte: 635
    hoogte: 750
  - bestand: regenput-3-tank-geplaatst.jpg
    alt: "Zwarte regenput van 5000 liter geplaatst in de put"
    breedte: 620
    hoogte: 745
    band: true
  - bestand: regenput-4-sleuf-leiding.jpg
    alt: "Sleuf met leiding naar de regenput"
    breedte: 568
    hoogte: 748
  - bestand: regenput-5-filterput-lavastenen.jpg
    alt: "Betonnen filterput gevuld met lavastenen en aangesloten leidingen"
    breedte: 598
    hoogte: 745
    band: true
    kaart: true
  - bestand: regenput-6-afgewerkt-putdeksel.jpg
    alt: "Afgewerkte plaats met putdeksel van de regenput"
    breedte: 703
    hoogte: 643
    band: true
---

# {{ page.titel }}

{% include project-gegevens.html %}

Voor een klant plaatsten we in september een regenput van 5000 liter en sloten we die aan op de bestaande installatie. Daarbij voegden we ook een filterput met lavastenen toe, zodat het water gefilterd en zuiver is. Zo kan de klant er de komende jaren van genieten.

## Wat we deden

- Uitgraven van de put met een minigraafmachine
- Plaatsen van de regenput van 5000 liter
- Aansluiten op de bestaande installatie
- Filterput met lavastenen toevoegen

{% include project-fotos.html %}

[Vraag een offerte]({{ '/contact/' | relative_url }})
