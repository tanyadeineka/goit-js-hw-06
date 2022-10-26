let textInput = document.querySelector("#name-input");
let output = document.querySelector("#name-output");

textInput.oninput = function () {
  if (textInput.value === "") {
    output.innerHTML = "Anonymous";
  } else {
    output.innerHTML = textInput.value;
  }
};
