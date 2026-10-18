---
title: "Debesų kompiuterija: kas tai ir kaip veikia debesų saugykla"
description: "Kas yra debesų kompiuterija, kuo skiriasi IaaS, PaaS ir SaaS, kaip veikia debesų saugykla ir ką verta žinoti prieš patikint jai savo failus."
author: "Tommy P"
publishedAt: 2026-10-18T08:30:00.000Z
tags: ["debesija", "debesų kompiuterija", "debesų saugykla", "duomenų saugumas"]
localAngle: "Pagal Eurostat duomenis, 2025 m. mokamomis debesijos paslaugomis naudojosi 58,06 proc. Lietuvos įmonių, turinčių bent 10 darbuotojų. Tai daugiau nei ES vidurkis (52,74 proc.), o per dvejus metus nuo 2023-ųjų Lietuva padarė didžiausią šuolį visoje Europos Sąjungoje: net 19,7 procentinio punkto."
draft: false
---

Nuotraukos, kurios pačios atsiranda naujame telefone. Dokumentas, kurį kolega redaguoja tuo pačiu metu kaip ir jūs. Paštas, pasiekiamas iš bet kurio kompiuterio. Visa tai veikia ta pačia logika.

Ta logika vadinama debesų kompiuterija. Žodis skamba abstrakčiai, bet už jo slypi labai konkretūs dalykai: serveriai, duomenų centrai ir sutartys, kas už ką atsako.

Šiame tekste paaiškiname, kas yra debesų technologijos, kuo skiriasi pagrindiniai paslaugų modeliai ir kaip veikia debesų saugykla, kurią kasdien naudoja beveik kiekvienas.

## Kas yra debesų kompiuterija paprastais žodžiais

Debesų kompiuterija yra būdas naudotis kompiuterių ištekliais per internetą, o ne savo įrenginyje. Skaičiavimo galia, atmintis, programos ar duomenų saugojimas nuomojami iš paslaugų teikėjo.

Lietuvių kalbos komisijos Terminologijos pakomisė rekomenduoja trumpesnį terminą: debesija. Jį rasite ir Visuotinėje lietuvių enciklopedijoje, nors kasdienėje kalboje dažniau vis dar girdėti „debesų kompiuterija“ arba tiesiog „debesis“.

Debesis, žinoma, nėra kažkas eterinio. Jūsų failai guli konkrečiuose serveriuose, konkrečiuose duomenų centruose, kurie gali būti Airijoje, Vokietijoje, Suomijoje ar JAV.

Skirtumas tas, kad jums nereikia tų serverių pirkti, prižiūrėti ar keisti sugedusių diskų. Tai daro teikėjas, o jūs mokate už tai, ką naudojate, arba gaunate nedidelę dalį nemokamai.

## Penki požymiai, pagal kuriuos atpažinsite debesį

Plačiausiai cituojamas apibrėžimas kilęs iš JAV standartų instituto NIST dokumento SP 800-145. Jame išvardyti penki esminiai debesijos bruožai.

Pirma, savitarna: išteklius galite užsisakyti patys, be skambučio teikėjui. Antra, plati prieiga per tinklą iš įvairių įrenginių, nuo telefono iki nešiojamojo kompiuterio.

Trečia, bendras išteklių telkinys. Tie patys fiziniai serveriai aptarnauja daugybę klientų, o paskirstymas vyksta automatiškai.

Ketvirta, greitas lankstumas. Prireikus daugiau vietos ar galios, jos gaunate per kelias minutes, o nebereikalingus išteklius atiduodate atgal.

Penkta, matuojama paslauga. Naudojimas skaičiuojamas, todėl mokama pagal faktą, panašiai kaip už elektrą ar vandenį.

## IaaS, PaaS ir SaaS: kuo skiriasi modeliai

Tas pats NIST dokumentas skiria tris paslaugų modelius. Juos lengviausia suprasti klausiant, kiek darbo lieka jums, o kiek perima teikėjas.

**IaaS** (infrastruktūra kaip paslauga) yra žemiausias lygis. Nuomojatės virtualius serverius, tinklus ir diskus, bet operacinę sistemą, programas ir jų atnaujinimus tvarkote patys. Tokios paslaugos pavyzdžiai yra Amazon EC2 ar Azure virtualios mašinos.

**PaaS** (platforma kaip paslauga) nuima dar vieną sluoksnį. Programuotojas įkelia savo kodą, o serveriais, operacine sistema ir mastelio keitimu rūpinasi platforma. Kraštutinė šio požiūrio forma yra [serverless architektūra](/it-naujienos/serverless-architektūra-kaip-veikia-ir-kada-verta-rinktis), kurioje mokama tik už kodo vykdymo laiką.

**SaaS** (programinė įranga kaip paslauga) yra tai, ką dauguma žmonių ir vadina debesimi. Gmail, Microsoft 365, Google Docs ar Dropbox yra paruoštos programos, kurias tiesiog naudojate per naršyklę ar programėlę.

NIST taip pat aprašo keturis diegimo modelius: viešąjį debesį, privatųjį, bendruomeninį ir hibridinį. Namų vartotojas beveik visada naudoja viešąjį, kur tie patys ištekliai dalijami daugybei klientų, o kiekvieno duomenys atskirti.

## Kaip veikia debesų saugykla

Debesų saugykla yra konkretus ir labiausiai paplitęs debesijos pavyzdys. Jūsų failai nusiunčiami į teikėjo serverius, ten saugomi ir pasiekiami iš bet kurio prisijungusio įrenginio.

Dideli teikėjai failų nelaiko vienoje vietoje. Duomenys paprastai dubliuojami keliuose diskuose ar net keliuose duomenų centruose, todėl vieno disko gedimas jūsų nuotraukų nesunaikins.

Dauguma paslaugų veikia sinchronizavimo principu. Kompiuteryje turite aplanką, o viskas, kas jame keičiasi, automatiškai atsiranda debesyje ir kituose įrenginiuose.

Tai patogu, bet čia slypi dažnas nesusipratimas. Sinchronizavimas nėra tas pats, kas atsarginė kopija: jei failą ištrinsite ar jį užšifruos išpirkos reikalaujanti programa, pakeitimas taip pat nukeliaus į debesį.

Todėl verta žinoti, ar jūsų paslauga turi šiukšlinę ir failų versijų istoriją, ir kiek laiko ji saugo ištrintus failus. Šios funkcijos dažnai išgelbsti daugiau nei pati saugojimo vieta.

Dar viena praktinė detalė: pirmasis didelio nuotraukų archyvo įkėlimas gali trukti valandas ar net dienas. Lemia ne atsisiuntimo, o išsiuntimo greitis, kurį galite [pasitikrinti interneto greičio teste](/it-naujienos/interneto-greitis-kaip-pasitikrinti-ir-ka-reiskia-skaiciai).

## Kiek vietos gaunate nemokamai

Nemokamos debesų saugyklos dydžiai 2026 m. rudenį didžiųjų teikėjų atveju atrodo taip. Google paskyra suteikia iki 15 GB, tačiau ši vieta bendra Gmail, Google Drive ir Google Photos.

Microsoft OneDrive ir Apple iCloud nemokamai siūlo po 5 GB. Dropbox Basic planas yra mažiausias iš didžiųjų, tik 2 GB, ir veikia ne daugiau kaip trijuose įrenginiuose.

Yra ir kitų teikėjų su didesne nemokama dalimi, pavyzdžiui, MEGA siūlo 20 GB. Vis dėlto skaičius nėra vienintelis kriterijus: svarbu, su kokiomis programomis ir įrenginiais paslauga geriausiai dera.

Praktiškai daug kas renkasi pagal savo telefoną. iPhone savininkui natūraliausia yra iCloud, Android naudotojui Google, o Windows kompiuteriuose jau įdiegtas OneDrive.

Nemokamos sąlygos keičiasi, todėl prieš persikeldami su dideliu archyvu pasitikrinkite aktualų planą teikėjo puslapyje. Pavyzdžiui, kai kurioms naujoms Google paskyroms pilni 15 GB atrakinami tik patvirtinus telefono numerį.

## Ar debesyje saugu laikyti duomenis

Trumpas atsakymas: dažniausiai saugiau nei vieninteliame nešiojamojo kompiuterio diske. Didieji teikėjai investuoja į fizinę apsaugą, šifravimą ir atsargines kopijas daugiau, nei galėtų bet kuris namų vartotojas.

Tačiau galioja vadinamasis bendros atsakomybės principas. Teikėjas saugo infrastruktūrą, o už tai, kas gauna prieigą prie jūsų paskyros ir kam pasidalijate failais, atsakote jūs.

Dauguma nutekėjimų įvyksta ne nulaužus duomenų centrą, o perėmus paskyrą. Todėl pirmas žingsnis yra unikalus ir [stiprus slaptažodis](/it-naujienos/slaptazodis-kaip-susikurti-stipru-ir-nepamirsti) bei įjungtas dviejų veiksnių patvirtinimas.

Antra, peržiūrėkite bendrinimo nuorodas. Nuoroda „bet kas, turintis nuorodą“ yra patogi, bet ją persiuntus toliau failą gali atidaryti bet kas.

Trečia, labai jautriems dokumentams verta rinktis paslaugas su vadinamuoju galutiniu (end-to-end) šifravimu arba failus užšifruoti prieš įkeliant. Tada net teikėjas negali perskaityti turinio.

Galiausiai klausimas, kur fiziškai yra duomenys. Įmonėms, tvarkančioms klientų asmens duomenis, galioja BDAR reikalavimai, todėl joms svarbu žinoti duomenų centrų vietą ir teikėjo sutarties sąlygas.

## Debesija Lietuvos įmonėse

Lietuvos verslas debesijos ilgai nevengė, bet pastaraisiais metais jos naudojimas ypač išaugo. Eurostat duomenimis, 2025 m. mokamomis debesijos paslaugomis naudojosi 58,06 proc. Lietuvos įmonių, turinčių bent 10 darbuotojų.

ES vidurkis tais pačiais metais buvo 52,74 proc. Lyginant su 2023 m., Lietuvos rodiklis paaugo 19,7 procentinio punkto, ir tai buvo didžiausias augimas visoje Europos Sąjungoje.

Europos mastu įmonės debesyje dažniausiai laiko el. paštą, biuro programas ir failus. Toliau eina saugumo programinė įranga, buhalterinės apskaitos sistemos ir duomenų bazių talpinimas.

Mažai įmonei logika paprasta. Vietoj savo serverio spintoje, kurį reikia prižiūrėti ir kurio diskai kada nors suges, mėnesinis mokestis už paslaugą, kurią galima išplėsti ar sumažinti per kelias minutes.

## Kada debesis nėra geriausias sprendimas

Debesija ne visada pigesnė. Jei serveris dirba visu pajėgumu ištisus metus, ilgainiui nuosava įranga gali kainuoti mažiau nei nuolatinė nuoma.

Taip pat visada priklausote nuo interneto ryšio ir nuo teikėjo. Sutrikus tinklui ar pasikeitus kainodarai, alternatyvų reikia ieškoti greitai, o didelių duomenų kiekių perkėlimas užtrunka.

Todėl išmintingiausia laikyti bent vieną kopiją ne vien debesyje. Plačiai žinoma 3-2-1 taisyklė pataria turėti tris duomenų kopijas, dviejose skirtingose laikmenose, iš kurių viena laikoma kitoje vietoje.

Namuose tai gali būti kompiuteris, išorinis diskas ir debesų saugykla. Toks derinys apsaugo ir nuo sugedusio disko, ir nuo netyčia ištrinto aplanko, ir nuo užrakintos paskyros.

## Kaip išsirinkti debesų saugyklą sau

Pradėkite nuo klausimo, ką ketinate laikyti. Dokumentams ir darbo failams pakanka kelių gigabaitų, o telefono nuotraukų ir vaizdo įrašų archyvas per kelerius metus lengvai išauga iki šimtų.

Antras klausimas yra įrenginiai. Jei namuose maišosi iPhone, Android ir Windows, rinkitės paslaugą, kuri turi patogias programėles visoms šioms platformoms, o ne tik vienai.

Trečia, pažiūrėkite, kiek laiko saugomos ištrintų failų ir ankstesnių versijų kopijos. Būtent ši funkcija padeda atkurti duomenis po klaidos ar kenkėjiškos programos.

Ketvirta, įvertinkite, kaip lengvai duomenis galima išsikelti. Pavyzdžiui, Google Takeout leidžia atsisiųsti visus savo Google paskyros duomenis, o Apple duomenų kopiją galima užsisakyti per privacy.apple.com. Tokie įrankiai reiškia, kad prie vieno teikėjo nesate pririšti amžinai.

## Trumpai

Debesų kompiuterija, arba debesija, yra kompiuterių išteklių nuoma per internetą. Nuo virtualių serverių programuotojams iki nuotraukų saugyklos telefone principas tas pats: kažkas kitas prižiūri įrangą, o jūs ja naudojatės.

Kasdieniam vartotojui svarbiausi trys dalykai: suprasti, kad sinchronizavimas nėra atsarginė kopija, gerai apsaugoti paskyrą ir žinoti, kiek vietos bei kokių funkcijų iš tikrųjų gaunate.
