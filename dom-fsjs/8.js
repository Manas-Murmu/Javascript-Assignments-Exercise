//  Remove alternate languages from the home page languages listed

let lang = document.querySelectorAll("#SIvCob a");
for (i = 0; i < lang.length; i++) {
  if (i % 2 == 0) {
    lang[i].remove();
  }
}
console.log(lang);
