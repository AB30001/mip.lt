---
title: "SSD diskas: kaip išsirinkti tinkamą ir nepermokėti"
description: "Kuo skiriasi SATA, NVMe ir M.2, ar verta mokėti už PCIe 5.0, ką reiškia TBW ir į ką žiūrėti renkantis išorinį SSD diską."
author: "Tommy P"
publishedAt: 2026-10-19T06:55:00.000Z
tags: ["SSD diskas", "kompiuterio komponentai", "duomenų saugojimas", "patarimai pirkėjams"]
localAngle: "Lietuvoje, kaip ir visoje ES, pardavėjas atsako už prekės neatitikimą, paaiškėjusį per dvejus metus nuo jos pristatymo. Sugedusį SSD diską pagal tai galima pakeisti, tačiau jame buvusių duomenų niekas negrąžins, todėl atsarginė kopija lieka pirkėjo rūpestis."
draft: false
---

Seną kompiuterį, kuris įsijungia kelias minutes, dažnai atgaivina vienas pakeitimas. Ne naujas procesorius ir ne daugiau atminties, o SSD diskas vietoje seno kietojo disko.

Bet atėjus į parduotuvę, paprastas sprendimas staiga apauga raidėmis: SATA, NVMe, M.2, PCIe 4.0, TBW, QLC. Kainų skirtumai tarp panašiai atrodančių diskų gali būti keleriopi.

Šiame tekste paaiškiname, ką tie terminai reiškia praktiškai, kada brangesnis diskas tikrai duoda naudos ir kur dažniausiai permokama.

## Kas yra SSD diskas ir kuo jis skiriasi nuo HDD

SSD (angl. *solid-state drive*) duomenis laiko NAND flash atminties lustuose. Jame nėra besisukančių plokštelių ir judančios galvutės, todėl jis tylus, atsparesnis smūgiams ir labai greitai randa reikiamus failus.

Tradicinis kietasis diskas (HDD) veikia mechaniškai. Net geri modeliai nuosekliai skaito maždaug iki 200–250 MB/s, o mažų failų paieška užtrunka dar ilgiau, nes galvutė turi fiziškai nukeliauti į reikiamą vietą.

Būtent ši mažų failų paieška lemia, kaip greitai įsijungia operacinė sistema ar atsidaro programa. Todėl net pigiausias SSD diskas kasdien jaučiasi kaip visai kitas kompiuteris.

HDD vis dar turi vieną pranašumą: vienas terabaitas jame kainuoja mažiau. Dideliems vaizdo archyvams ar namų serveriams jis tebėra prasmingas pasirinkimas.

## SATA, NVMe ir M.2: kas yra kas

Šie trys žodžiai painiojami dažniausiai, nes vienas reiškia formą, o kiti du – tai, kaip diskas kalbasi su kompiuteriu.

**SATA** yra senesnė jungtis, sukurta dar kietiesiems diskams. Jos riba yra apie 550–600 MB/s, todėl visi SATA SSD diskai veikia panašiu greičiu. Dažniausiai jie būna 2,5 colio dėžutės formos, tokio pat dydžio kaip nešiojamojo kompiuterio HDD.

**NVMe** yra protokolas, sukurtas specialiai flash atminčiai ir veikiantis per PCIe jungtį. PCIe 4.0 diskai nuosekliai skaito iki maždaug 7 000–7 400 MB/s, o PCIe 5.0 modeliai viršija 14 000 MB/s.

**M.2** yra tik fizinė forma: plona plokštelė, kuri jungiama tiesiai į pagrindinę plokštę. Dažniausias dydis žymimas 2280, tai yra 22 mm pločio ir 80 mm ilgio.

Svarbiausia vieta, kur suklystama: M.2 diskas gali būti ir NVMe, ir SATA. Jei jūsų kompiuterio M.2 lizdas palaiko tik vieną iš jų, kitas tiesiog neveiks, nors puikiai tilps į vietą.

## Ar verta mokėti už PCIe 5.0

Daugumai žmonių ne. Gamintojų skelbiami skaičiai yra nuoseklaus skaitymo greitis, pavyzdžiui, kopijuojant vieną didžiulį failą, o kasdienis darbas ir žaidimai daugiausia skaito daug mažų duomenų gabalų.

Tom's Hardware 2026 m. išbandė 11 žaidimų su SATA, PCIe 3.0, 4.0 ir 5.0 diskais. Tarp PCIe kartų skirtumas buvo beveik nepastebimas, o SATA aiškiau atsiliko tik keliuose žaidimuose, pavyzdžiui, Forspoken ir Ratchet & Clank: Rift Apart.

PCIe 5.0 diskas prasmingas tada, kai nuolat perkeliate didelius vaizdo failus, dirbate su didelėmis duomenų bazėmis ar montuojate vaizdo medžiagą tiesiai iš disko. Be to, tokie diskai labiau kaista ir dažnai reikalauja aušintuvo.

Geriausias kainos ir naudos santykis daugeliui šiandien yra PCIe 4.0 NVMe diskas. Jei kompiuteris senesnis ir turi tik SATA jungtį, SATA SSD vis tiek bus didžiulis šuolis, palyginti su HDD.

## Kiek vietos iš tikrųjų reikia

Biuro darbui ir naršymui dažniausiai pakanka 500 GB. Pati operacinė sistema su atnaujinimais užima nemažai vietos, o visiškai prisipildęs SSD diskas paprastai sulėtėja.

Žaidėjams verta žiūrėti nuo 1 TB, nes šiuolaikiniai žaidimai lengvai užima po 100 GB ir daugiau. Vaizdo montavimui ar dideliam nuotraukų archyvui 2 TB dažnai yra protingesnis pirkinys nei du mažesni diskai.

Gera taisyklė: palikite bent dešimtadalį disko laisvo. Tai padeda ir greičiui, ir disko ilgaamžiškumui.

## TBW, TLC ir QLC: ilgaamžiškumas paprastai

Flash atmintis dėvisi kiekvieną kartą, kai į ją rašoma. Todėl gamintojai nurodo **TBW** (angl. *terabytes written*) – kiek terabaitų duomenų galima įrašyti per garantinį laikotarpį.

Pavyzdžiui, Samsung 990 Pro 1 TB modeliui nurodyta 600 TBW. Penkerius metus tai būtų beveik 330 GB įrašų kasdien, o dauguma namų naudotojų įrašo gerokai mažiau.

Ilgaamžiškumą lemia ir atminties tipas. TLC lustai vienoje ląstelėje laiko tris bitus, QLC – keturis. QLC diskai pigesni ir talpesni, bet paprastai turi mažesnį TBW ir gerokai sulėtėja, kai baigiasi greitoji rašymo talpykla.

Dar vienas dalykas, į kurį verta pažiūrėti, yra DRAM talpykla. Diskai be jos dažnai naudoja dalį kompiuterio operatyviosios atminties (HMB technologija) ir kasdieniam darbui veikia gerai, tačiau ilgesnio įrašymo metu pasirodo silpniau.

## Išorinis SSD diskas: į ką žiūrėti

Išorinis SSD diskas yra patogus atsarginėms kopijoms, nuotraukoms iš kelionių ar darbo failams nešiotis. Tačiau jo greitį dažnai riboja ne pats diskas, o USB jungtis.

USB 3.2 Gen 2 (10 Gbit/s) praktiškai duoda apie 1 000 MB/s. USB 3.2 Gen 2x2 (20 Gbit/s) leidžia iki maždaug 2 000 MB/s, bet šį standartą palaiko ne visi kompiuteriai, pavyzdžiui, Apple Mac jo nepalaiko ir tokį diską jungia lėtesniu režimu.

USB4 ar Thunderbolt jungtis leidžia greitį, artimą vidiniam NVMe diskui, tačiau tokie išoriniai diskai ar korpusai kainuoja brangiau. Patikrinkite ir laidą: lėtas USB laidas gali sumažinti greitį keleriopai.

Jei diską jungsite ir prie Windows, ir prie macOS, formatuokite jį exFAT sistema. Ją abi operacinės sistemos skaito ir rašo be papildomų programų.

## Kodėl SSD diskai šiemet brangesni

Jei pastebėjote, kad diskas kainuoja daugiau nei prieš metus, jums nepasirodė. NAND atmintį perka didieji [dirbtinio intelekto](/it-naujienos/dirbtinis-intelektas-kas-tai-ir-kaip-veikia) duomenų centrai, o gamintojai pirmenybę teikia pelningesniems serverių diskams.

The Verge, remdamasis PCPartPicker duomenimis, balandį rašė, kad NVMe diskų kainos per kelis mėnesius išaugo dvigubai ar net trigubai. Analitikų bendrovė TrendForce rugsėjo pabaigoje prognozavo, kad NAND sutartinės kainos 2026 m. ketvirtąjį ketvirtį dar pakils 15–20 proc., nors augimas lėtėja.

Praktinė išvada paprasta: šiuo metu ypač verta neperkti greičio, kurio neišnaudosite. Kokybiškas PCIe 4.0 diskas su TLC atmintimi dažnai yra protingesnis pasirinkimas nei pigiausias PCIe 5.0 modelis.

## Prieš perkant patikrinkite kompiuterį

Pirmiausia sužinokite, kokias jungtis turi jūsų kompiuteris. Tai nurodoma pagrindinės plokštės ar nešiojamojo kompiuterio specifikacijose gamintojo svetainėje.

Nešiojamuosiuose kompiuteriuose dažnai būna tik vienas M.2 lizdas, todėl teks perkelti sistemą iš seno disko. Daugelis gamintojų tam siūlo nemokamas klonavimo programas.

Įdiegę diską, jo nedefragmentuokite. Windows SSD diskus atpažįsta pati ir vietoje defragmentavimo atlieka TRIM komandą, kuri padeda diskui išlaikyti greitį.

Disko būklę ir likusį resursą galima pasitikrinti nemokamomis programomis, pavyzdžiui, CrystalDiskInfo, arba gamintojo įrankiu, tokiu kaip Samsung Magician.

## Ar verta pirkti naudotą SSD diską

Skelbimų portaluose naudotų SSD diskų netrūksta, o dabartinės kainos daro juos dar patrauklesnius. Vis dėlto čia rizika didesnė nei perkant naudotą HDD, nes iš išvaizdos nesimato, kiek diskas jau nudėvėtas.

Paprašykite pardavėjo CrystalDiskInfo ar panašios programos ekrano nuotraukos. Joje matyti, kiek duomenų jau įrašyta, kiek procentų resurso liko ir ar nėra klaidų.

Jei įrašyta jau artėja prie gamintojo nurodyto TBW, o kaina tik šiek tiek mažesnė nei naujo, geriau rinktis naują. Naujas diskas turi ir garantiją, kurios naudotas dažnai jau nebeturi.

Taip pat atkreipkite dėmesį į garantijos trukmę naujiems diskams. Daugelis žinomų gamintojų geresniems modeliams suteikia penkerių metų garantiją, o pigesniems kartais tik trejų, ir tai neblogai parodo, kiek gamintojas pats pasitiki savo produktu.

## Diskas nėra atsarginė kopija

SSD diskai genda rečiau nei mechaniniai, bet kai sugenda, dažnai tai įvyksta be įspėjimo. Garantija pakeis diską, tačiau ne jame buvusias nuotraukas ar dokumentus.

Todėl svarbius failus laikykite bent dviejose vietose. Paprasta 3-2-1 taisyklė ir [debesų saugykla](/it-naujienos/debesu-kompiuterija-kas-tai-ir-kaip-veikia-debesu-saugykla) kartu su išoriniu disku apsaugo nuo daugumos nelaimių.

Išorinį atsarginių kopijų diską laikykite atjungtą nuo kompiuterio, kai jo nenaudojate. Tada jo nepasieks ir išpirkos reikalaujanti programa, nuo kurios ne visada apsaugo net [antivirusinės programos](/it-naujienos/antivirusines-programos-ar-uztenka-nemokamos).

Tik nepamirškite jo kartais prijungti. SSD diskas nėra skirtas metų metus gulėti stalčiuje be elektros, ypač šiltoje vietoje.

## Trumpai

Daugumai žmonių geriausias pasirinkimas yra 1 TB PCIe 4.0 NVMe diskas su TLC atmintimi, o senesniems kompiuteriams – SATA SSD. PCIe 5.0 verta tik tada, kai tikrai dirbate su dideliais failais.

Prieš perkant patikrinkite, kokią jungtį turi kompiuteris, pažiūrėkite TBW ir garantijos trukmę, o išoriniam diskui įvertinkite USB jungtį. Ir kad ir koks greitas būtų diskas, svarbiems failams vis tiek reikia atsarginės kopijos.
