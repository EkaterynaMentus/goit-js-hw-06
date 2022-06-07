const refs = {
  decrement: document.querySelector('[data-action="decrement"]'),
  increment: document.querySelector('[data-action="increment"]'),
  value: document.querySelector("#value"),
};

let counterValue = 0;

function onDecrementBtn() {
  counterValue -= 1;
  renderValue();
}

function onIncrementBtn() {
  counterValue += 1;
  renderValue();
}

function renderValue() {
  refs.value.textContent = counterValue;
}

refs.decrement.addEventListener("mousedown", onDecrementBtn);
refs.increment.addEventListener("mousedown", onIncrementBtn);