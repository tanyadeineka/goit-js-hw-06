function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".change-color");
const body = document.querySelector("body");
const colorValue = document.querySelector(".color");

button.addEventListener("click", handleClick);

function handleClick() {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorValue.textContent = color;
}