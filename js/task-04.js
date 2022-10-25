const buttonAdd = document.querySelector("[data-action='increment']");
const buttonSub = document.querySelector("[data-action='decrement']");
const buttonSpan = document.querySelector("#value");

let counterValue = 0;
const increment = () => {
  counterValue += 1;
  buttonSpan.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  buttonSpan.textContent = counterValue;
};

buttonAdd.addEventListener("click", increment);
buttonSub.addEventListener("click", decrement);