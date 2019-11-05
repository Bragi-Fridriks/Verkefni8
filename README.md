# Verkefni 8

Forrita skal viðmót sem leyfir að bæta við, breyta, eyða og klára verkefni af lista.

Gefið er HTML skjal með þrem atriðum sem skulu virka eftir að forrit keyrir. Allir stílar sem þarf fyrir verkefni eru gefnir.

Færslur hafa eftirfarandi virkni:

* Þegar smellt (`click`) er á texta færslu er texta breytt í `<input>` sem leyfir að breyta texta. Þegar smellt er á `<enter>` er input breytt aftur í texta
  - Setja skal `focus` í input
* Þegar ýtt er á `Eyða` er færslu eytt úr lista
* Þegar smellt er á `checkbox` er færsla merkt sem „búin“
* Þegar fyllt er inn í form fyrir neðan lista og smellt á „Bæta við“ er færslu bætt við sem virkar eins og þær færslur sem fyrir voru
  - Ekki skal leyfa að bæta við tóma strengnum eða streng sem er aðeins bil
  - Eftir að búið er að bæta við skal tæma input

Útfæra skal JavaScript virkni innan þess módúl sem gefinn er.

Sjá virkni í `demo.mp4`.

`browser-sync` er uppsett í verkefninu:

```bash
npm install
npm run dev
```

## Mat

* 10% – Snyrtilegt JavaScript án villna
* 20% – Gefnar færslur virka
* 20% – Hægt að bæta við færslu
* 20% – Hægt að breyta færslu
* 20% – Hægt að eyða færslu
* 10% – Hægt að klára færslu

## Sett fyrir

Verkefni sett fyrir í fyrirlestri mánudaginn 28. október 2019.

## Skil

Skila skal undir „Verkefni og hlutaprófa“ á Uglu í seinasta lagi fyrir lok dags fimmtudaginn 7. nóvember 2019.

Skilaboð skulu innihalda:

* Slóð á verkefni á heimasvæði
* Slóð á GitHub repo fyrir verkefni, og  öllum dæmatímakennurum skal hafa verið boðið í repo ([sjá leiðbeiningar](https://help.github.com/articles/inviting-collaborators-to-a-personal-repository/)). Notendanöfn þeirra eru `anz1e`, `gunnnnii`, `magdadianaa`, `OlafurjonHI` og `Wolfcoder13` .

## Einkunn

Sett verða fyrir tíu minni verkefni þar sem átta bestu gilda 3,5% hvert, samtals 28% af lokaeinkunn.

Sett verða fyrir tvö hópverkefni þar sem hvort um sig gildir 11%, samtals 22% af lokaeinkunn.

---

> Útgáfa 0.1
