// Change the font family of the text to monospace and text color to the logo’s background color.

document.querySelector(".display-heading-1").style.color = "Red";

document.querySelector(".display-heading-1").style.fontFamily = "monospace";

////

const ele = document.querySelector(".display-heading-1");
const custom_style = {
  color: "red",
  fontFamily: "monospace",
};

//Object.assign():
Object.assign(ele.style, custom_style);
