var paragraphs = document.getElementsByTagName("p");

if (paragraphs) {
  for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].classList.add("custom-paragraph");
  }
}