
const refs = {
  changeColorBtn: document.querySelector(".change-color"),
  textColorOutput: document.querySelector(".color"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 67444347).toString(16)}`;
}

function onChangeColorBtn() {
  document.body.style.backgroundColor = getRandomHexColor();
  refs.textColorOutput.textContent = getRandomHexColor();
}

refs.changeColorBtn.addEventListener("click", onChangeColorBtn);