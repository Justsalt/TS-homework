"use strict";
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Monday"] = 1] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 2] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 3] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 4] = "Thursday";
    WeekDays[WeekDays["Friday"] = 5] = "Friday";
    WeekDays[WeekDays["Saturday"] = 6] = "Saturday";
    WeekDays[WeekDays["Sunday"] = 7] = "Sunday";
})(WeekDays || (WeekDays = {}));
var Answer;
(function (Answer) {
    Answer[Answer["No"] = 0] = "No";
    Answer[Answer["Yes"] = 1] = "Yes";
})(Answer || (Answer = {}));
var WeekDayNamesLT;
(function (WeekDayNamesLT) {
    WeekDayNamesLT["Monday"] = "pirmadienis";
    WeekDayNamesLT["Tuesday"] = "antradienis";
    WeekDayNamesLT["Wednesday"] = "tre\u010Diadienis";
    WeekDayNamesLT["Thursday"] = "ketvirtadienis";
    WeekDayNamesLT["Friday"] = "penktadienis";
    WeekDayNamesLT["Saturday"] = "\u0161e\u0161tadienis";
    WeekDayNamesLT["Sunday"] = "sekmadienis";
})(WeekDayNamesLT || (WeekDayNamesLT = {}));
console.group('Literal types - užduotys');
{
    let largeCities;
    (function (largeCities) {
        largeCities["Vinius"] = "Vilnius";
        largeCities["Kaunas"] = "Kaunas";
        largeCities["Klaipeda"] = "Klaipeda";
        largeCities["Siauliai"] = "Siauliai";
        largeCities["Panevezys"] = "Panevezys";
    })(largeCities || (largeCities = {}));
    let HumanPopuliation;
    (function (HumanPopuliation) {
        HumanPopuliation[HumanPopuliation["Honduras"] = 9904607] = "Honduras";
        HumanPopuliation[HumanPopuliation["United Arab Emirates"] = 9890402] = "United Arab Emirates";
        HumanPopuliation[HumanPopuliation["Djibouti"] = 988000] = "Djibouti";
        HumanPopuliation[HumanPopuliation["Saint Barthelemy"] = 9877] = "Saint Barthelemy";
        HumanPopuliation[HumanPopuliation["Seychelles"] = 98347] = "Seychelles";
    })(HumanPopuliation || (HumanPopuliation = {}));
    let Bvp;
    (function (Bvp) {
        Bvp[Bvp["Liuksemburgas"] = 10] = "Liuksemburgas";
        Bvp[Bvp["Sveicarija"] = 11] = "Sveicarija";
        Bvp[Bvp["Makao"] = 12] = "Makao";
        Bvp[Bvp["Norvegija"] = 13] = "Norvegija";
        Bvp[Bvp["Airija"] = 14] = "Airija";
    })(Bvp || (Bvp = {}));
    console.group('1. Sukurkite 5 didžiausių Lietuvos miestų išvardinimą.');
    {
        const cityOne = largeCities.Klaipeda;
        console.log(cityOne);
    }
    console.groupEnd();
    console.group('2. Sukurkite 5 šalių su didžiausiu gyventojų skaičiumi skaitinį išvardinimą.');
    {
        const cityTwo = [HumanPopuliation.Honduras, HumanPopuliation.Seychelles];
        console.log(cityTwo);
    }
    console.groupEnd();
    console.group('3. Sukurkite 5 šalių su didžiausiu BVP skaitinį išvardinimą pradedant "1".');
    {
        const cityThree = [
            Bvp.Airija,
            Bvp.Liuksemburgas,
            Bvp.Makao,
            Bvp.Norvegija,
            Bvp.Sveicarija
        ];
        console.log(cityThree);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=enums.js.map