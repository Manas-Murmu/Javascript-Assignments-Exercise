function count() {
  let data = document.getElementById("textarea").value;
  let word = document.getElementById("word");
  let char = document.getElementById("char");

  let wordcount = data.trim().split(/\s+/).length;
  word.innerText = wordcount;

  let charCount = data.trim().length;
  char.innerText = charCount;

  console.log("WordCount - ", wordcount);
  console.log("CharacterCount - ", charCount);
}

let btn = document.getElementById("btn");
btn.addEventListener("click", count);
