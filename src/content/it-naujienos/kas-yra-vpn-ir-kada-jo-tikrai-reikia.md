---
title: "Kas yra VPN ir kada jo tikrai reikia"
description: "Kaip veikia VPN, kuo skiriasi WireGuard, OpenVPN ir IPsec, kas yra DNS nutekėjimas ir kada VPN naudingas, o kada tik be reikalo lėtina ryšį."
author: "Tommy P"
publishedAt: 2026-10-12T07:20:00.000Z
tags: ["VPN", "kibernetinis saugumas", "privatumas", "tinklai", "WireGuard"]
localAngle: "Lietuvoje VPN naudoti legalu, o daugelis įmonių jį taiko nuotoliniam darbui, kad darbuotojai saugiai pasiektų vidines sistemas. Kasdieniam vartotojui VPN dažniausiai praverčia kavinėse, oro uostuose ar viešbučiuose, kur Wi-Fi tinklas bendras su nepažįstamais žmonėmis. Tačiau mokama VPN paslauga kainuoja kelis eurus per mėnesį, todėl verta suprasti, nuo ko ji iš tikrųjų apsaugo ir nuo ko ne."
draft: false
---

VPN reklamų internete netrūksta. Jos žada nematomumą, saugumą ir laisvę nuo bet kokio sekimo.

Tikrovė kuklesnė, bet vis tiek naudinga. VPN yra įrankis, kuris tam tikrose situacijose labai padeda, o kitose beveik nieko nekeičia.

Šiame straipsnyje paaiškiname, kaip VPN veikia, kuo skiriasi populiariausi protokolai ir kaip patiems patikrinti, ar ryšys tikrai apsaugotas.

## Kas tai yra VPN

VPN (angl. *virtual private network*) lietuviškai vadinamas virtualiuoju privačiuoju tinklu. Tai užšifruotas „tunelis“ tarp jūsų įrenginio ir nutolusio serverio.

Kai VPN įjungtas, visas jūsų interneto srautas pirmiausia keliauja į VPN serverį. Tik iš ten jis siunčiamas į svetaines ir programėles, kurias atidarote.

Pakeliui duomenys užšifruoti. Interneto tiekėjas ar kavinės Wi-Fi tinklo valdytojas mato tik tiek, kad jungiatės prie tam tikro serverio, bet nemato, ką per jį darote.

## Kaip VPN keičia jūsų IP adresą

Kiekviena svetainė mato jūsų išorinį IP adresą. Tai adresas, kurį jūsų namų tinklui ar telefonui suteikė interneto tiekėjas.

Plačiau apie tai, kuo skiriasi vidinis ir išorinis adresas, rašėme straipsnyje [„IP adresas: kas tai ir kuo skiriasi vidinis nuo išorinio“](/it-naujienos/ip-adresas-kas-tai-vidinis-ir-isorinis).

Įjungus VPN, svetainės nebemato jūsų tikrojo adreso. Joms atrodo, kad lankytojas ateina iš VPN serverio, kuris gali būti Vilniuje, Frankfurte ar Niujorke.

Tai lengva patikrinti patiems. Atidarykite [mip.lt pagrindinį puslapį](/) be VPN, užsirašykite rodomą IP adresą ir vietą, tada įjunkite VPN ir atnaujinkite puslapį. Jei adresas ir šalis pasikeitė, tunelis veikia.

## Kada VPN tikrai praverčia

**Viešas Wi-Fi.** Kavinėje, viešbutyje ar oro uoste tinklu dalijatės su nepažįstamais žmonėmis. VPN užšifruoja srautą dar iki tinklo, todėl tinklo valdytojas ar kaimynas prie gretimo stalo jo neperskaitys.

Verta pridurti, kad dauguma svetainių šiandien ir taip naudoja HTTPS šifravimą. Vis dėlto VPN uždengia ir tai, kokias svetaines lankote, ir senesnes programėles, kurios šifruoja prasčiau.

**Nuotolinis darbas.** Tai seniausia ir dažniausia VPN paskirtis. Įmonės vidinės sistemos, failų serveriai ar buhalterinės programos dažnai pasiekiamos tik per įmonės VPN.

Tam naudojami verslo sprendimai, pavyzdžiui, Cisco AnyConnect ar FortiClient. Jie neslepia jūsų nuo interneto, o saugiai įleidžia į biuro tinklą iš namų.

**Kelionės.** Būnant užsienyje, kai kurios Lietuvos paslaugos gali veikti kitaip arba prašyti papildomo patvirtinimo. VPN serveris Lietuvoje leidžia atrodyti taip, lyg naršytumėte iš namų.

Tik atminkite, kad srautinių transliacijų platformos dažnai blokuoja žinomus VPN serverius, o jų taisyklės gali tokį naudojimą riboti.

**Privatumas nuo interneto tiekėjo.** Be VPN tiekėjas gali matyti, į kokius domenus kreipiatės. Su VPN šią informaciją mato VPN paslaugos teikėjas, todėl pasitikėjimas tiesiog persikelia kitam.

## Ko VPN nepadaro

VPN nepadaro jūsų anonimišku. Jei prisijungiate prie Google, Facebook ar el. parduotuvės paskyros, ta paslauga vis tiek žino, kas jūs esate.

Slapukai, naršyklės „pirštų atspaudai“ ir prisijungimo duomenys veikia nepriklausomai nuo IP adreso.

VPN neapsaugo nuo sukčiavimo laiškų, kenkėjiškų programų ar silpnų slaptažodžių. Jei paspaudėte netikrą banko nuorodą ir įvedėte duomenis, tunelis jų neišgelbės.

Taip pat VPN beveik visada šiek tiek sulėtina ryšį. Srautas keliauja ilgesniu keliu, o šifravimas reikalauja papildomų skaičiavimų.

Kiek tiksliai lėtėja, priklauso nuo serverio atstumo ir protokolo. Tai galima pamatuoti [interneto greičio testu](/interneto-greicio-testas): atlikite jį su VPN ir be jo, tada palyginkite spartą ir delsą.

## Ar naudotis VPN Lietuvoje legalu

Taip. Lietuvoje, kaip ir visoje Europos Sąjungoje, VPN naudojimas yra visiškai teisėtas. Juo kasdien naudojasi bankai, valstybės įstaigos ir tūkstančiai įmonių.

Svarbu suprasti, kad VPN nekeičia to, kas leidžiama, o kas ne. Jei veiksmas neteisėtas be VPN, jis lieka neteisėtas ir su juo.

Kai kurios paslaugos savo taisyklėse riboja VPN naudojimą. Tai ne įstatymo, o sutarties klausimas, tačiau jį pažeidus paskyra gali būti apribota.

## Kaip pasirinkti VPN serverį

Dauguma programėlių siūlo dešimtis šalių. Pasirinkimas turi didesnę įtaką greičiui, nei atrodo.

Kuo serveris arčiau, tuo mažesnė delsa. Kasdieniam naršymui Lietuvoje dažniausiai geriausia rinktis serverį Lietuvoje, Latvijoje, Lenkijoje ar Vokietijoje.

Jei norite pasiekti konkrečios šalies paslaugą, rinkitės serverį toje šalyje. Tik atminkite, kad tolimas serveris, pavyzdžiui, JAV ar Azijoje, pastebimai padidins delsą.

Kai kurios programėlės rodo serverių apkrovą procentais. Perpildytas serveris gali būti lėtas net ir esantis visai šalia, todėl verta išbandyti kelis.

## WireGuard, OpenVPN ir IPsec: kuo skiriasi protokolai

VPN programėlės nustatymuose dažnai galima pasirinkti protokolą. Tai taisyklės, pagal kurias kuriamas ir šifruojamas tunelis.

**WireGuard** yra naujausias iš populiariųjų. Jo kodas labai kompaktiškas, todėl jį lengviau patikrinti saugumo specialistams. Nuo 2020 metų WireGuard įtrauktas tiesiai į Linux branduolį.

Praktikoje WireGuard dažniausiai būna greitesnis ir greičiau persijungia, kai telefonas pereina iš Wi-Fi į mobilųjį ryšį. Daugelis komercinių paslaugų jį siūlo kaip numatytąjį arba naudoja savo jo atmainas.

**OpenVPN** naudojamas jau daugiau nei du dešimtmečius. Tai atvirojo kodo projektas, paremtas TLS šifravimu, tuo pačiu, kuris saugo HTTPS svetaines.

Jis kiek lėtesnis už WireGuard, bet labai lankstus. Jį galima paleisti beveik bet kur, įskaitant maršrutizatorius ir senesnes sistemas.

**IPsec** yra standartizuotas protokolų rinkinys, dažnai naudojamas su IKEv2. Jį palaiko daugelis operacinių sistemų be papildomų programų, o įmonės jį mėgsta jungdamos biurus tarpusavyje.

Paprastam vartotojui dažniausiai pakanka palikti numatytąjį programėlės pasirinkimą. Jei ryšys nestabilus, verta išbandyti kitą protokolą.

## DNS nutekėjimas: kaip patikrinti, ar VPN nieko neišduoda

Kai įvedate svetainės adresą, įrenginys pirmiausia klausia DNS serverio, kokiu IP adresu ta svetainė pasiekiama. Paprastai šias užklausas aptarnauja jūsų interneto tiekėjas.

Gerai sukonfigūruotas VPN DNS užklausas siunčia per tunelį. Tačiau kartais dėl sistemos nustatymų jos vis tiek keliauja tiesiai tiekėjui.

Tai vadinama DNS nutekėjimu (angl. *DNS leak*). IP adresas atrodo pakeistas, bet tiekėjas vis dar mato, kokias svetaines lankote.

Patikrinti nesunku. Įjunkite VPN ir atidarykite vieną iš nemokamų DNS nutekėjimo testų, pavyzdžiui, dnsleaktest.com.

Jei rezultatuose matote savo interneto tiekėjo pavadinimą, o ne VPN paslaugos ar jos partnerio serverius, DNS nuteka. Tokiu atveju programėlės nustatymuose ieškokite DNS apsaugos parinkties.

Kartu verta įjungti ir vadinamąjį *kill switch*. Ši funkcija nutraukia interneto ryšį, jei VPN netikėtai atsijungia, kad srautas neištekėtų be apsaugos.

## Nemokamas ar mokamas VPN

Nemokamų VPN programėlių daug, ypač naršyklių plėtinių ir telefonų programėlių parduotuvėse. Bet tunelio serveriai kainuoja, todėl verta paklausti, kas už juos moka.

Kai kurios nemokamos paslaugos riboja duomenų kiekį ar spartą ir taip skatina pirkti mokamą planą. Tai sąžiningas modelis.

Kitos užsidirba rodydamos reklamas arba rinkdamos duomenis apie naršymą. Tada VPN veikia priešingai, nei turėtų.

Prieš diegdami nemokamą naršyklės plėtinį, pažiūrėkite, kokių leidimų jis prašo. Jei plėtinys nori skaityti ir keisti duomenis visose svetainėse, jis techniškai mato viską, ką darote naršyklėje.

Taip pat atkreipkite dėmesį, kad naršyklės VPN plėtinys dažniausiai apsaugo tik tos naršyklės srautą. Kitos kompiuterio programos toliau jungiasi tiesiogiai.

Rinkdamiesi paslaugą, žiūrėkite kelis dalykus. Ar teikėjas aiškiai skelbia, kad nesaugo naršymo žurnalų? Ar ši politika patikrinta nepriklausomo audito?

Taip pat svarbu, ar palaikomas WireGuard ar OpenVPN, ar yra DNS apsauga ir *kill switch*. Įmonės registracijos šalis irgi turi reikšmės, nes nuo jos priklauso, kokie įstatymai jai taikomi.

## VPN telefone ir kompiuteryje

Telefone VPN dažniausiai įjungiamas per paslaugos teikėjo programėlę. Ją įdiegus, iPhone nustatymuose atsiranda VPN jungiklis, o Android telefone VPN rasite tinklo ir interneto nustatymuose.

Daug kas klausia, kas yra tas VPN iPhone ekrano viršuje. Tai tiesiog ženklas, kad šiuo metu aktyvus VPN ryšys. Jį gali įjungti ne tik VPN programėlė, bet ir darbo profilis ar kai kurios saugumo programos.

Kompiuteryje veikia taip pat: įdiegiate programą, prisijungiate ir pasirenkate serverį. Windows ir macOS turi ir integruotus VPN nustatymus, kurie dažniausiai naudojami jungiantis prie įmonės tinklo.

Pažengusieji VPN konfigūruoja ir maršrutizatoriuje. Tada apsaugoti būna visi namų įrenginiai, įskaitant televizorių ar žaidimų konsolę, kuriuose atskiros programėlės įdiegti nepavyktų.

## Trumpai

VPN užšifruoja jūsų srautą ir pakeičia svetainėms matomą IP adresą. Labiausiai jis praverčia viešuose Wi-Fi tinkluose, dirbant nuotoliu ir keliaujant.

Anonimiškumo, apsaugos nuo sukčių ar virusų jis neužtikrina. Rinkitės patikimą teikėją, naudokite modernų protokolą, tokį kaip WireGuard ar OpenVPN, ir bent kartą patikrinkite, ar nenuteka DNS.
