let qrCode = () => {
  let text = document.getElementById("input").value;
  console.log(text);
  fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`)
    .then((response) => {
      let val = response.url;
      let qrImage = document.getElementById("img");
      qrImage.src = val;
      qrImage.setAttribute("style", "display:block");
      console.log(val);
    })
    .catch((err) => {
      console.log(err);
    });
};

let btn = document.getElementById("submit");
btn.addEventListener("click", qrCode);
