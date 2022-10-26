const controlFont = document.querySelector("#font-size-control");

const text = document.querySelector("#text");

function changeFontSize() {
    text.setAttribute("style", `font-size: ${controlFont.value}px`);
}
controlFont.addEventListener("input", changeFontSize);
