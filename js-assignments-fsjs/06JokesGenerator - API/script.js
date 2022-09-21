// let btn = document.getElementById("jokeBtn");

// btn.addEventListener("click", () => {
//   let joke = fetch("https://api.chucknorris.io/jokes/random")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       let jokee = data.value;
//       let val = (document.getElementById("joke").innerText = jokee);
//       console.log(val);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
// console.log(btn);

let btn = document.getElementById("jokeBtn");
let joke = () => {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let jokee = data.value;
      let val = (document.getElementById("joke").innerText = jokee);
      console.log(val);
    })
    .catch((err) => {
      console.log(err);
    });
};
joke();
btn.addEventListener("click", joke);
console.log(btn);
