// 25. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of you shopping cart if it has not been already added
//     - remove 'Honey' if you are allergic to honey
//     - modify Tea to 'Green Tea'

let shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

shoppingCart.unshift("Meat"); //Adds Meat to the beginning of the array

if (!shoppingCart.includes("Sugar")) {
  shoppingCart.push("Sugar"); //Adds sugar to the end of the array
} else {
  console.log("Sugar already Availailbe");
}

console.log(shoppingCart);

var isAllergic = true;
if (isAllergic) {
  var honeyIndex = shoppingCart.indexOf("Honey");
  shoppingCart.splice(honeyIndex, 1); //Remove Sugagr from the Arrray
}

shoppingCart[3] = "Green Tea"; //Replaces Tea with Green Tea

console.log(shoppingCart);
