// 21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer

let userInput = "February";

if (
  userInput == "September" ||
  userInput == "October" ||
  userInput == "November"
) {
  console.log("Season is Autum");
} else if (
  userInput == "December" ||
  userInput == "January" ||
  userInput == "February"
) {
  console.log("Season is Winter");
} else if (userInput == "March" || userInput == "April" || userInput == "May") {
  console.log("Season is Spring");
} else if (
  userInput == "June" ||
  userInput == "July" ||
  userInput == "August"
) {
  console.log("Season is Summer");
}
