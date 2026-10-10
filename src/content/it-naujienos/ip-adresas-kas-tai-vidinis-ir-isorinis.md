---
title: "IP adresas: kas tai ir kuo skiriasi vidinis nuo išorinio"
description: "Kas yra IP adresas, kuo skiriasi vidinis ir išorinis, kiek tiksliai pagal IP nustatoma vieta ir kaip jį greitai sužinoti kompiuteryje ar telefone."
author: "Tommy P"
publishedAt: 2026-10-11T07:00:00.000Z
tags: ["IP adresas", "tinklai", "internetas", "privatumas", "IPv6"]
localAngle: "Lietuvoje dauguma namų ūkių internetą gauna per operatoriaus maršrutizatorių, o mobilusis internetas dažnai veikia per bendrą operatoriaus adresą. Todėl vienas ir tas pats žmogus per dieną gali turėti kelis skirtingus IP adresus, o „vieta pagal IP“ kartais rodo kitą miestą. Supratus, kuris adresas vidinis, o kuris išorinis, lengviau susitvarkyti su vaizdo kameromis, nuotoliniu darbu, žaidimų serveriais ar pranešimais apie „neįprastą prisijungimą“."
draft: false
---

![Namų maršrutizatoriaus galinė pusė su mėlynu „Internet“ lizdu ir dviem prijungtais tinklo kabeliais](/images/it-naujienos/ip-adresas-kas-tai-vidinis-ir-isorinis.jpg)

*Nuotrauka: Raysonho / Wikimedia Commons, CC0.*

Kiekvieną kartą, kai atidarote svetainę, išsiunčiate žinutę ar įsijungiate filmą, jūsų įrenginys internete prisistato skaičiais. Tie skaičiai ir yra IP adresas.

Dažniausiai apie jį net nepagalvojame. Tačiau jis išnyra netikėtai: kai bankas praneša apie prisijungimą „iš kito miesto“, kai neveikia vaizdo kamera iš toli ar kai svetainė rodo ne tos šalies turinį.

Šiame tekste paprastai paaiškinsime, kas yra IP adresas, kodėl jų turite bent du ir ką iš tikrųjų apie jus galima sužinoti pagal šiuos skaičius.

## Kas yra IP adresas

IP reiškia *Internet Protocol* – interneto protokolą. IP adresas yra unikalus įrenginio ar tinklo numeris, pagal kurį duomenų paketai randa kelią nuo siuntėjo iki gavėjo.

Patogiausia jį lyginti su pašto adresu. Laiškas be adreso niekur nenukeliautų, o duomenys be IP adreso nežinotų, kuriam kompiuteriui pasaulyje jie skirti.

Svarbus skirtumas: IP adresas nėra prisegtas prie žmogaus. Jis priklauso tinklo prijungimui, todėl tas pats telefonas namuose, darbe ir kavinėje turės vis kitą adresą.

## IPv4 ir IPv6: dvi kartos

Dažniausiai matomas adresas atrodo maždaug taip: 192.168.1.10. Tai IPv4 – keturi skaičiai nuo 0 iki 255, atskirti taškais.

IPv4 adresas yra 32 bitų, todėl iš viso galimų kombinacijų yra apie 4,3 mlrd. Kai internetas buvo kuriamas, to atrodė per akis. Šiandien vien telefonų pasaulyje yra daugiau.

Europos, Artimųjų Rytų ir dalies Centrinės Azijos adresus skirstanti organizacija RIPE NCC laisvų IPv4 adresų blokų neturi nuo 2019 metų lapkričio. Nauji tiekėjai juos dabar dažniausiai perka ar nuomojasi iš kitų.

Sprendimas – IPv6. Šie adresai yra 128 bitų ir užrašomi šešioliktainiais skaičiais, pavyzdžiui, 2001:db8::1. Galimų adresų tiek daug, kad praktiškai jų užtenka kiekvienam įrenginiui atskirai.

Daugelis operatorių ir svetainių šiandien veikia abiem protokolais vienu metu. Todėl patikrinę savo adresą kartais pamatysite ir IPv4, ir IPv6 versiją.

## Vidinis IP adresas: jūsų namų tinkle

Namuose prie interneto paprastai jungiasi ne vienas įrenginys, o keli ar keliolika: kompiuteris, telefonai, televizorius, spausdintuvas. Visi jie gauna vidinius IP adresus.

Juos išdalija maršrutizatorius (routeris), dažniausiai automatiškai per DHCP paslaugą. Vidiniai adresai matomi tik jūsų tinkle – iš interneto jų tiesiogiai pasiekti negalima.

Privatiems tinklams rezervuoti trys adresų intervalai: 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255 ir 192.168.0.0–192.168.255.255. Jei jūsų adresas prasideda 192.168, beveik neabejotinai žiūrite į vidinį adresą.

Būtent todėl tūkstančiai namų Lietuvoje gali turėti kompiuterį su tuo pačiu adresu 192.168.1.2 – ir tai niekam netrukdo. Kiekvienas tinklas yra atskiras.

Vidinio IP adreso prireikia, kai jungiate tinklo spausdintuvą, konfigūruojate vaizdo kamerą, nustatote žaidimų konsolės prievadus ar jungiatės prie maršrutizatoriaus nustatymų.

## Išorinis IP adresas: kaip jus mato internetas

Išorinis (viešasis) IP adresas priklauso visam jūsų tinklui. Jį jūsų maršrutizatoriui suteikia interneto paslaugų teikėjas.

Kai telefonas namuose atidaro svetainę, maršrutizatorius užklausą perduoda į internetą savo vardu. Ši technologija vadinama NAT: daug vidinių adresų „slepiasi“ už vieno išorinio.

Todėl svetainė mato ne jūsų telefono vidinį adresą, o bendrą namų tinklo adresą. Jei tuo metu naršo visa šeima, svetainėms visi atrodo kaip vienas lankytojas.

Mobiliuoju internetu situacija dar įdomesnė. Operatoriai dažnai naudoja vadinamąjį CGNAT – vienu viešuoju adresu dalijasi daug klientų vienu metu.

Praktinė pasekmė: jei naudojatės mobiliuoju internetu, dažnai negalėsite iš išorės prisijungti prie savo įrenginio, pavyzdžiui, namų serverio. Tam paprastai reikia užsakyti atskirą viešą ar fiksuotą IP adresą.

Dar viena sąvoka – dinaminis ir statinis adresas. Dinaminis gali keistis po maršrutizatoriaus perkrovimo ar tam tikro laiko, statinis lieka tas pats. Namų klientai dažniausiai gauna dinaminius.

## Kaip sužinoti savo IP adresą

Išorinį adresą lengviausia pamatyti atsidarius [mip.lt pagrindinį puslapį](/) – jis iškart parodo jūsų viešąjį IP adresą ir apytikslę vietą.

Vidinį adresą reikia ieškoti pačiame įrenginyje:

- **Windows:** atidarykite komandinę eilutę ir įveskite `ipconfig`. Ieškokite eilutės „IPv4 Address“.
- **macOS:** Sistemos nustatymai → Tinklas → pasirinkite aktyvų ryšį, adresas bus parodytas detalėse.
- **Linux:** terminale įveskite `ip addr` arba `hostname -I`.
- **Android:** Nustatymai → Wi-Fi → paspauskite ant prijungto tinklo. Meniu pavadinimai skiriasi pagal gamintoją.
- **iPhone:** Nustatymai → Wi-Fi → paspauskite „i“ šalia tinklo pavadinimo.

Jei pagrindiniame puslapyje matote vieną adresą, o kompiuteryje – visai kitą, viskas tvarkoje. Tai ir yra išorinio bei vidinio adreso skirtumas.

## Kiek tiksliai IP adresas rodo vietą

Paieška „adresas pagal IP“ dažnai sukelia nerimą. Realybė kur kas mažiau dramatiška, nei rodo filmai.

Vieta pagal IP nustatoma iš duomenų bazių, kuriose saugoma, kuriam tiekėjui ir kuriam regionui priskirti adresų blokai. Šalis dažniausiai nustatoma teisingai.

Miestas – jau ne visada. Lietuvoje neretai nutinka, kad Kaune esantis vartotojas „atsiduria“ Vilniuje, nes būtent ten yra operatoriaus tinklo mazgas. Mobiliajame internete paklaida dar didesnė.

Gatvės, namo ar buto pagal IP adresą viešai prieinamos priemonės nustatyti negali. Tokią informaciją turi tik interneto tiekėjas, o ją atskleisti gali tik teisės aktų nustatytais atvejais, pavyzdžiui, teisėsaugos prašymu.

Būtent dėl to, kad tiekėjas gali susieti adresą su klientu, ES Teisingumo Teismas 2016 m. byloje *Breyer* (C-582/14) pripažino, kad net dinaminis IP adresas tam tikromis sąlygomis yra asmens duomenys.

Todėl svetainės, kurios kaupia lankytojų IP adresus, turi tai paaiškinti privatumo politikoje ir laikytis BDAR reikalavimų.

## Ką IP adresas atskleidžia, o ko ne

IP adresas atskleidžia jūsų interneto tiekėją, apytikslį regioną ir tai, kad tuo metu buvote prisijungę iš konkretaus tinklo. Svetainės pagal jį parenka kalbą, valiutą ar rodo vietos orus.

Bankai ir el. paštas jį naudoja saugumui. Jei į jūsų paskyrą jungiamasi iš visiškai kitos šalies, sistema gali paprašyti papildomo patvirtinimo.

IP adresas neatskleidžia jūsų vardo, slaptažodžių ar naršymo turinio. Šifruotame HTTPS ryšyje net jūsų tiekėjas mato tik, į kurią svetainę jungiatės, bet ne ką joje darote.

VPN paslauga pakeičia jūsų matomą išorinį adresą į VPN serverio adresą. Tai naudinga viešame Wi-Fi tinkle, tačiau neapsaugo nuo nutekintų slaptažodžių ar pavogtų prisijungimo raktų.

Paskyrų saugumui daug daugiau lemia dviejų veiksnių autentifikacija ir atsargus elgesys su prieigos raktais – apie tai rašėme tekste apie [vagiamus Claude AI paskyrų raktus](/it-naujienos/vagiami-claude-ai-paskyru-raktai-kaip-apsisaugoti).

## Ar galima pakeisti savo IP adresą

Taip, ir dažnai tai padaryti paprasčiau, nei atrodo. Tik pirmiausia reikia nuspręsti, kurį adresą norite keisti – vidinį ar išorinį.

Dinaminį išorinį adresą kartais pakeičia paprastas maršrutizatoriaus perkrovimas. Vis dėlto daug tiekėjų adresą „prisimena“ kelias valandas ar net dienas, tad garantijos nėra.

Telefone dažniausiai padeda trumpam įjungtas lėktuvo režimas: atsijungus nuo mobiliojo tinklo ir vėl prisijungus, operatorius gali priskirti kitą adresą.

Vidinį adresą galima nustatyti rankiniu būdu įrenginio tinklo nustatymuose arba maršrutizatoriuje „rezervuoti“ jį konkrečiam įrenginiui. Tai patogu spausdintuvui ar kamerai, kurių adresas neturėtų keistis.

Jei reikia, kad išorinis adresas visada būtų tas pats, pavyzdžiui, darbo serveriui ar prieigai prie įmonės sistemų, tiekėjai paprastai siūlo fiksuotą IP adresą kaip papildomą paslaugą.

## Kada verta pasidomėti savo IP

Kartais IP adresas tampa praktiniu įrankiu, o ne abstrakcija. Štai kelios dažnos situacijos:

- **Lėtas internetas.** Jei ryšys strigęs, pirmiausia verta pasitikrinti, ar esate prisijungę prie to tinklo, prie kurio manote. Po to pravartu atlikti [interneto greičio testą](/interneto-greicio-testas) ir palyginti rezultatą su planu.
- **Neveikia nuotolinė prieiga.** Jei iš darbo negalite pasiekti namų kameros ar NAS, patikrinkite, ar jūsų išorinis adresas nėra bendras (CGNAT) ir ar jis nepasikeitė.
- **Įtartinas prisijungimas.** Pranešimas apie prisijungimą „iš Vilniaus“, kai esate Klaipėdoje, dažnai tėra tiekėjo tinklo mazgo vieta. Tačiau prisijungimas iš kitos šalies – rimtas signalas pasikeisti slaptažodį.
- **Įrenginių konfliktas.** Jei du įrenginiai namų tinkle gavo tą patį vidinį adresą, vienas jų praras ryšį. Dažniausiai padeda maršrutizatoriaus perkrovimas.

## Trumpai

IP adresas – tai įrenginio ar tinklo numeris internete. Vidinis adresas galioja tik jūsų namų ar biuro tinkle, o išorinis yra tas, kurį mato svetainės ir paslaugos.

Pagal IP galima gana patikimai nustatyti šalį ir tiekėją, rečiau – miestą, bet ne konkretų namą. Žinant šiuos skirtumus, lengviau suprasti saugumo pranešimus, tvarkyti namų tinklą ir nesijaudinti be reikalo.
