// 17. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

const date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDay();
let hour = date.getHours();
let minutes = date.getMinutes();

//YYYY-MM-DD HH:mm
console.log(`${year}-${month}-${day} ${hour}:${minutes}`);

//DD-MM-YYYY HH:mm
console.log(`${day}-${month}-${year} ${hour}:${minutes}`);

//DD/MM/YYYY HH:mm
console.log(`${day}/${month}/${year} ${hour}:${minutes}`);
