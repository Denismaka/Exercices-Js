// #############################################
// Object Date
// #############################################

function addDays(date, days) {
    const newDate = new Date(date.getTime());
    newDate.setDate(newDate.getDate() + days);
    return newDate;
}

const today = new Date();
const tomorrow = addDays(today, 1);
console.log(today);
console.log(tomorrow);
