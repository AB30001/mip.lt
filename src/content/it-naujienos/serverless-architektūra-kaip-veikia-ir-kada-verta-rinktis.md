---
title: "Serverless architektūra: kaip veikia ir kada verta rinktis"
description: "Išsamus serverless architektūros gidas: kaip veikia, kokie privalumai, trūkumai ir kada verta rinktis jūsų projektui."
author: "Tommy P"
publishedAt: 2026-10-03T12:00:00.000Z
tags: ["cloud", "serverless", "architektūra", "AWS", "Cloudflare", "programavimas"]
localAngle: "Lietuvos startuoliai, SaaS įmonės ir agentūros vis dažniau renkasi serverless sprendimus, nes tai leidžia išvengti DevOps komandos išlaidų ir sumažinti infrastruktūros kaštus eurais. Mažoms ir vidutinėms įmonėms serverless gali sumažinti mėnesines išlaidas nuo kelių šimtų eurų iki kelių dešimčių, nes mokama tik už faktinį naudojimą, o ne už tuščiai veikiančius serverius. Ypač aktualu Lietuvos rinkoje, kur IT specialistų trūkumas ir jų atlyginimai didėja – serverless leidžia mažesnei komandai pasiekti tą patį rezultatą."
draft: false
---

Serverless architektūra per pastaruosius metus tapo viena iš populiariausių diskusijų temų programuotojų bendruomenėse. Tačiau kas tai iš tikrųjų yra, kaip veikia ir ar verta rinktis savo projektui?

Trumpai: serverless nereiškia, kad nėra serverių. Serveriai egzistuoja, tik jūs jų nebematote, nevaldote ir nemokate už jų nuolatinį veikimą. Už viską rūpinasi debesų kompiuterijos paslaugų tiekėjas – AWS, Google Cloud, Microsoft Azure, Cloudflare ar kitas.

Jūs tiesiog parašote kodą ir įkėliate jį į platformą, kuri automatiškai jį paleidžia, kai reikia.

## Kaip veikia serverless

Tradicinė architektūra veikia taip: jūs išsinuomojate virtualų serverį (VPS), įdiegiate operacinę sistemą, įdiegiate Node.js ar Python, įkėliate savo kodą, sukonfiguruojate HTTPS, monitoringą, automatinį perkrovimą, saugumo atnaujinimus ir visa kita.

Serveris veikia 24/7, nesvarbu, ar kas nors naudojasi jūsų programa, ar ne. Jūs mokate už jo veikimo laiką – dažniausiai fiksuotą mėnesinę sumą.

Serverless veikia kitaip. Jūsų kodas saugomas kaip funkcija – JavaScript, Python, Go ar kitoje kalboje parašyta funkcija, kuri gauna užklausą ir grąžina atsakymą. Kai vartotojas apsilanko jūsų svetainėje ar API, tiekėjas akimirksniu paleidžia jūsų funkciją tuščiame konteineryje, vykdo ją ir grąžina rezultatą.

Funkcija veikia kelias milisekundes ar sekundes – tik tiek, kiek reikia apdoroti užklausą. Kai ji baigia darbą, konteineris išsijungia, ir jūs nebesumokate už jį nieko.

Mokėjimo modelis paprastas: mokate už faktinį naudojimą. Jei per mėnesį svetainę aplankė 10 000 vartotojų, mokėsite už 10 000 funkcijos paleidimų. Jei aplankė 100 – mokėsite už 100. Daugelis tiekėjų suteikia dideles nemokamas kvotas, todėl pradedantys projektai dažnai moka nulis eurų.

## Kas tai naudoja

Serverless nėra naujovė. Juo naudojasi ir startuoliai, ir didelės korporacijos. Pavyzdžiui, Coca-Cola perkėlė dalį savo skaitmeninių platformų į AWS Lambda. Netflix naudoja serverless API ir duomenų apdorojimui.

iRobot (Roomba gamintoja) valdo milijonus įrenginių IoT duomenų per serverless funkcijas.

Lietuvoje serverless taip pat populiarėja. Mažos SaaS įmonės, kurios kuria CRM, buhalterijos ar projektų valdymo sistemas, renkasi serverless, nes tai leidžia greitai išleisti produktą ir nekurti DevOps komandos.

Agentūros, kuriančios e. parduotuves ar klientų svetaines, naudoja serverless API logistikai, mokėjimams ar SMS siunčiamajam. IT specialistai, dirbantys individualiai, serverless renkasi prototipams ir MVP projektams, nes infrastruktūrą galima paleisti per valandą.

Šis pats mip.lt veikia ant [Cloudflare Workers](https://www.cloudflare.com/developer-platform/workers/) – serverless platformos, kuri leidžia serverio kodą vykdyti šimtuose duomenų centrų visame pasaulyje.

IP adreso patikrinimas, oro duomenų gavimas, straipsnių atvaizdavimas – visa tai vyksta per serverless funkcijas, kurios aktyvuojamos tik tada, kai kažkas apsilanko svetainėje.

## Pagrindiniai privalumai

**Automatinis mastelio keitimas**. Jei jūsų produktas staiga išgarsėja ir per dieną svetainę aplanko ne 100, o 100 000 vartotojų, serverless automatiškai sukuria daugiau funkcijos kopijų ir aptarnauja visus.

Jums nereikia nieko daryti. Nereikia perkonfigūruoti load balancer'io, nereikia pridėti serverių, nereikia budėti naktį ir tikrinti, ar viskas veikia. Platforma tai atlieka už jus.

**Mokėjimas už faktinį naudojimą**. Jei kuriate MVP, kuriuo naudojasi 20 beta testerių, jūs mokate ne 15–50 eurų per mėnesį už serverį, o kelias centus arba nieko – nes daugelio tiekėjų nemokamos kvotos būna labai didelės.

Tai leidžia išbandyti idėją be didelių pradinių investicijų.

**Mažiau administracinių darbų**. Nereikia atnaujinti operacinės sistemos, tvarkyti SSH raktų, konfiguruoti nginx, konfigūruoti backup'ų, stebėti CPU ir RAM naudojimo. Visa tai tampa tiekėjo problema.

Jūs tiesiog rašote kodą ir diegiate.

**Spartesnis diegimas**. Paprasčiausias serverless projektas gali būti paleistas per kelias minutes. Nereikia laukti, kol serveris bus parengtas, nereikia kurti Docker konteinerių (nors galite, jei norite), nereikia konfiguruoti CI/CD dėl infrastruktūros – tiesiog įkeliama funkcija, ir ji veikia.

## Kokie trūkumai

Serverless nėra idealus sprendimas visada ir visiems. Yra scenarijai, kuriuose tradicinis serveris ar konteineris yra geresnis pasirinkimas.

**Šaltasis startas**. Kai funkcija nebuvo naudojama kurį laiką (pvz., kelias minutes ar valandas), ji „užmiega". Kitas vartotojas, kuris ją iškviečia, sulauks vėlavimo – funkcija turi būti iš naujo paleista, o tai gali užtrukti kelias sekundes.

Tai vadinama „šaltuoju startu" (cold start). Dažnai naudojamoms funkcijoms šaltieji startai nėra problema, nes platforma palaiko funkciją „šiltą", tačiau mažo srauto projektams tai gali reikšti, kad retai apsilankantys vartotojai patirs šiek tiek lėtesnį atsakymą.

**Sunku debuginti**. Serverless funkcijos vykdomos tiekėjo infrastruktūroje, todėl negalite tiesiog prijungti debuggerio ar SSH prisijungti ir pasitikriti, kas vyksta. Turite pasikliauti logais ir monitoring'u.

Tai reikalauja kitokio darbo stiliaus – daugiau struktūrinio loginimo, daugiau metrikų stebėjimo.

**Vendor lock-in rizika**. AWS Lambda, Azure Functions, Cloudflare Workers, Google Cloud Functions – visi jie veikia panašiai, bet ne vienodai. Jei parašėte kodą AWS Lambda, perkelti jį į kitą platformą gali reikalauti nemažų pakeitimų.

Nors ir yra standartų (pvz., CloudEvents), praktikoje funkcijos dažnai būna surištos su konkrečia platforma.

**Kaina gali tapti nenuspėjama**. Jei jūsų produktas labai išpopuliarėja, mokėjimas už kiekvieną užklausą gali tapti brangesnis nei mokėjimas už fiksuotą serverį. Pavyzdžiui, jei turite 10 milijonų užklausų per mėnesį, AWS Lambda gali kainuoti daugiau nei keli VPS serveriai su load balancing.

Tačiau pradedantiems projektams tai retai tampa problema.

**Ribojimas vykdymo laikui**. Dauguma serverless platformų turi maksimalų funkcijos vykdymo laiką – AWS Lambda leidžia funkcijai veikti iki 15 minučių, Cloudflare Workers – iki 30 sekundžių nemokamame plane.

Tai reiškia, kad serverless netinka ilgiems procesams – vaizdo įrašų apdorojimui, didelių failų konvertavimui ar kitiems ilgiems darbams. Tokiais atvejais geriau naudoti tradicinį serverį arba hibridinį sprendimą.

## Kada rinktis serverless

Serverless yra puikus pasirinkimas šiais atvejais:

**Prototipai ir MVP**. Jei norite greitai išbandyti idėją be didelių investicijų, serverless leidžia paleisti projektą per kelias valandas ir mokėti tik už faktinį naudojimą.

**Nedidelio srauto API**. Jei kuriate vidinį įmonės API, kuriuo naudojasi tik jūsų komanda ar keletas klientų, serverless sumažins išlaidas ir administracinius darbus.

**Webhook'ai ir integracijos**. Jei reikia priimti duomenis iš Stripe, Shopify, Slack ar kitų paslaugų, serverless funkcija yra idealus sprendimas – veikia tik tada, kai ateina naujas įvykis, ir mokate tik už tai.

**Nepastovaus apkrovimo projektai**. Jei jūsų sistematuri aiškius srauto pikelius – pvz., kas rytą 9 val. ar per akcijas – serverless automatiškai susidoros su apkrova, o ramiu metu nemokėsite už tuščiai veikiančius serverius.

**Microservices ir event-driven architektūra**. Jei kuriate sistemą iš mažų, nepriklausomų komponentų, serverless labai gerai dera su tokiu požiūriu – kiekviena funkcija gali būti atskiras servisas.

## Kada geriau rinktis tradicinį serverį

Serverless netinka, jei:

**Turite labai didelį srautą ir galite tiksliai prognozuoti apkrovą**. Jei per mėnesį apdorojate šimtus milijonų užklausų, tradicinis serveris su gerai optimizuota konfiguracija gali būti pigesnis.

**Jums reikia ilgai veikiančių procesų**. Vaizdo įrašų konvertavimas, didelių failų analizė, ilgai veikiantys batch darbai – visa tai geriau veikia tradicinėje infrastruktūroje.

**Turite labai mažus latency reikalavimus**. Jei kiekvieną milisekundę skaičiuoja verslas (pvz., finansinės operacijos, real-time trading), šaltojo starto rizika gali būti nepriimtina.

**Naudojate specifinius įrankius ar bibliotekas, kurie nesuderinami su serverless limitais**. Pvz., jei jūsų kodas naudoja native binaries, didelius ML modelius ar kitas specifinius įrankius, serverless gali būti per ribotas.

## Populiariausios serverless platformos

**AWS Lambda** – seniausias ir populiariausias serverless sprendimas. Palaiko Node.js, Python, Java, Go, C#, Ruby ir kitas kalbas. Turi milžinišką ekosistemą ir integracijų su kitomis AWS paslaugomis.

**Cloudflare Workers** – greitai veikiantis serverless, veikiantis šimtuose duomenų centrų. Labai žemas latency, nes kodas vykdomas arti vartotojo. Palaiko JavaScript, TypeScript, WebAssembly. Turi nemokamą planą su 100 000 užklausų per dieną.

**Vercel Functions** – skirtas frontend kūrėjams. Puikiai dera su Next.js, React, Vue. Labai paprastas deployment – tiesiog įkeliate kodą į GitHub, ir Vercel automatiškai viską paruošia.

**Google Cloud Functions** – Google serverless sprendimas. Gerai integruojasi su Firebase, BigQuery ir kitomis Google paslaugomis. Palyginti nebrangi, ypač mažo srauto projektams.

**Azure Functions** – Microsoft serverless platforma. Puikiai tinka įmonėms, kurios jau naudoja Microsoft ekosistemą – Office 365, Azure AD, .NET.

## Praktiniai patarimai pradedantiesiems

Jei niekada nenaudojote serverless, rekomenduoju pradėti nuo Cloudflare Workers ar Vercel Functions – abiejų platformų nemokamos kvota yra labai dosnūs, dokumentacija aiški, o deployment paprastas. Galite sukurti paprastą API, kuris grąžina JSON su kažkokiais duomenimis, ir per 15 minučių turėsite veikiančią produkcinę

funkciją su HTTPS.

Neišsigąskite šaltųjų startų – daugelis projektų su jais puikiai gyvena. Jei tai tampa problema, galite naudoti ping servisus, kurie kas kelias minutes iškviečia jūsų funkciją ir palaiko ją „šiltą", arba pereiti prie mokamo plano, kuris garantuoja greitesnį paleidimą.

Naudokite monitoring ir logging įrankius nuo pat pradžių. Serverless platformos paprastai turi integruotus logging sprendimus, bet jūs taip pat galite prijungti Sentry, Datadog ar kitus įrankius, kad geriau matytumėte, kas vyksta produkcinėje aplinkoje.

Visuomet testuokite vietos aplinkoje. Daugelis serverless platformų turi CLI įrankius, kurie leidžia paleisti funkcijas savo kompiuteryje prieš deploy'inant į produkciją. Tai sutaupo laiko ir padeda išvengti nesuprantamų klaidų.

## Apibendrinimas

Serverless – tai ne magija ir ne sprendimas visiems, bet tai yra galingas įrankis, kuris daugeliui projektų leidžia sumažinti išlaidas, paspartinti kūrimą ir išvengti infrastruktūros valdymo naštos. Ypač tai aktualu Lietuvos startuoliams, mažoms įmonėms ir individualiai dirbantiems specialistams, kuriems svarbu greitai

paleisti produktą be didelių pradinių investicijų.

Jei dar nenaudojote serverless, rekomenduoju išbandyti bent vieną mažą projektą – webhook'ą, paprastą API ar nedidelę integracijos funkciją. Tai pakeis jūsų supratimą apie tai, kaip lengva gali būti infrastruktūra, kai už ją rūpinasi kas kitas.

Daugiau apie šiuolaikinės interneto infrastruktūros principus galite sužinoti [grįžę į pagrindinį puslapį](/), kur veikia praktinis IP ir interneto greičio tikrinimo įrankis. Taip pat verta sekti [naujausias IT naujienas](/it-naujienos), kur aptariamos aktualios technologijų tendencijos Lietuvoje ir pasaulyje.
