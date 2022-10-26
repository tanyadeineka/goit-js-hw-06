const inputEl = document.querySelector("#validation-input");
const lengthEl = inputEl.getAttribute("data-length");

function inputElBlur() {
  if (inputEl.value.length === Number(lengthEl)) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
};

inputEl.addEventListener("blur", inputElBlur);
