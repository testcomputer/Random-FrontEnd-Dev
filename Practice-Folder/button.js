function changeColor() {
  var button = document.querySelector(".transparent-button");
  if (button.classList.contains("blue-button")) {
    button.classList.remove("blue-button");
  } else {
    button.classList.add("blue-button");
  }
}
