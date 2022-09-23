let btn = document.getElementById("btn");
let joke = () => {
  fetch("https://api.quotable.io/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let quote = data;
      let val = (document.getElementById("random_quote").innerText =
        quote.content);
      let author = (document.getElementById(
        "author"
      ).innerText = `__ ${quote.author} __`);

      console.log(val);
    })
    .catch((err) => {
      console.log(err);
    });
};
joke();
btn.addEventListener("click", joke);
console.log(btn);
