let textInput = document.getElementById("name-input");
let output = document.getElementById("name-output");

textInput.oninput = function () {
  if (textInput.value === "") {
    output.innerHTML = "Anonymous";
  } else {
    output.innerHTML = textInput.value;
  }
};
