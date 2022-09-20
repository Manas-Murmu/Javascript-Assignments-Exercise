// ### Tasks

//      To Search a topic in the MDN Search bar.
//      First add a text to search in the search bar and then hit the submit search button to search the docs using DOM

let test = document.querySelector(
  ".homepage-hero-search .search-form .search-input-field"
);
let btn = document.querySelector("#hp-search-form");
test.value = "CSS Selectos";
btn.submit();
