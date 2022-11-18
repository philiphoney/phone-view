
var monthN;

switch(new Date().getMonth()) {
    case 0:
        monthN = 1;
       break;
       case 1:
        monthN = 2;
       break;
    case 2:
        monthN = 3;
       break;
    case 3:
        monthN = 4;
       break;
    case 4:
        monthN = 5;
       break;
    case 5:
        monthN = 6;
       break;
    case 6:
        monthN = 7;
       break;
    case 7:
        monthN = 8;
       break;
    case 8:
        monthN = 9;
       break;
    case 9:
        monthN = 10;
       break;
    case 10:
        monthN = 11;
       break;
    case 11:
        monthN = 12;
       break;
}



var liveyear = (new Date().getFullYear());
var live_day = (new Date().getDate());
var year = 2004
var monthe = 12
var day = 3
var message = ""

console.log("-----------------------------------------")
thsisyourage()
function thsisyourage() {

var output =  (liveyear - year);

if (output >= 18 && monthN >= monthe) {
if (monthN == monthe) {
if (live_day >= day) {
message = "Herzlichen glückwunsch nachträglich"
if (live_day == day) {
message = "Herzlichen glückwunsch";
}
    console.log(message)
} else {
    console.log("Sie haben bald geburtstag")
}} else {
    console.log("Sie sind über das alter")
}} else {
if (output >= 18 && monthN >= monthe) {
    console.log("Sie sind über das alter")
} else {
    console.log("Es dauert noch")
}}}
console.log("-----------------------------------------")
