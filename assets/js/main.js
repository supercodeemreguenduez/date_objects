// Lev1_1_js-vertiefung_date_new-date()

let date1 = new Date("September 2, 2019 09:00:00");
let date2 = new Date(0);
let date3 = new Date(31556908800);
let date4 = new Date(86400000);

result.innerHTML = date1 + '<br>' + date2 + '<br>' + date3 + '<br>' + date4 + ' <br>';

// Lev1_2_js-vertiefung_date_get-date-methods

let monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
];

let date5 = new Date();
console.log(date5);
console.log(date5.getFullYear());
console.log(date5.getMonth() + ' Monat');
console.log(date5.getDate() + ' Tag');
console.log(date5.getHours() + ' Stunde');
console.log(date5.getMinutes() + ' Minute');
console.log(wochenTag[date5.getDay()]);
console.log(monate[date5.getMonth()]);

//uhr
let day = (new Date()).toLocaleString("default", { weekday: 'short' });
let time = (new Date()).toLocaleTimeString('en-US');
document.getElementById('time').innerHTML = day + ' ' + time;

// Lev1_3_js-vertiefung_date_set-date-methods

date5 = new Date(2222, 9, 23, 13, 25, 11);
console.log(date5)

date5.setYear(2123);
date5.setMonth(1);
date5.setDate(24);
console.log(date5)

date5.setDate(3);
console.log(date5);

date5 = new Date();
date5.setDate(date5.getDate() + 30);
console.log(date5);

// Lev1_5_js-vertiefung_date_month-name

let list = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
];

let monatsName = (monat) => {
    let date6 = new Date(monat);
    return list[date6.getMonth()];
};
console.log(monatsName("2001,3,4")); //März
console.log(monatsName("2019,12,24")); //Dezember
console.log(monatsName("1410,07,15")); //Juli