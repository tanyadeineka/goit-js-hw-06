const controlFont = document.getElementById("font-size-control");

const text = document.getElementById("text");

function changeFontSize() {
    text.setAttribute("style", `font-size: ${controlFont.value}px`);
}
controlFont.addEventListener("input", changeFontSize);
