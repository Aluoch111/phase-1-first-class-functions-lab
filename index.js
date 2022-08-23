// Code your solution in this file!
// const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0,2);
}
const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(2,4);
}
const selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers];

const createFareMultiplier = multiplier => {
    return (n) => multiplier * n ;
}
function fareDoubler(n){
    return n * 2 ;
}
function fareTripler(n){
    return n * 3 ;
}
const selectDifferentDrivers = (drivers, func) => func(drivers);