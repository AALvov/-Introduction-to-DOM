let input = document.createElement("input");
input.type = "text";
input.id = "field";
document.body.append(input);

let h2 = document.createElement("h2");
h2.textContent = "";
h2.id = "text";
document.body.append(h2);

let timer;

function addText() {
  h2.textContent = input.value;
}

function inputText() {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(addText, 300);
}


input.addEventListener('input', inputText);
