
const endDate="20 March 2024 10:00 PM";

document.getElementById("end-date").innerText =endDate;

function clock () {
const end = new Date(endDate);
const now = new Date()
console.log(end);
console.log(now);
}

clock();