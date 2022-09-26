//function clipboard() {
// let input = document.getElementById("inputvalue").value;
// console.log(input);
// let ul = document.createElement("ul");
// ul.setAttribute("class", "unordered");
// let items = document.getElementById("renderedItems");
// items.setAttribute("style", "display:block");
// items.appendChild(ul);
// let li = document.createElement("li");
// li.setAttribute("class", "listitems");
// li.innerHTML = input;
// ul.appendChild(li);
// let input = document.getElementById("inputvalue").value;
// console.log(input);
// let items = document.getElementById("renderedItems");
// items.setAttribute("style", "display:block");
// console.log(items);
// let p = document.createElement("p");
// p.setAttribute("class", "p");
// items.appendChild(p);
// p.innerHTML = input;
//}

function copy() {
  let copyText = document.getElementById("inputvalue");
  console.log(copyText);
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
  //alert("Copied to the Clipboard");

  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
}

let btn = document.getElementById("btn");
btn.addEventListener("click", copy);
