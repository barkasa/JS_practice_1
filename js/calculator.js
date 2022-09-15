// переменные(2 импута на ввод, 1 на результат, 4 кнопки на мат. ап.,)
// 7 элементов;
// на 4 кнопки прослушиваем событие "click";
// каждому событию привязываем функцию, кот. в зависимости от кнопки будет вып. мат опер.;
// как принимает и использует input ввода данных и выводя результат;

// const EventHandlerOld = function (param) {
//   return function (event) {
//     // Есть доступ и к обьекту event и к param
//     // Do Smsng
//   };
// };
// btn.addEventListener("click", EventHandlerOld(true));
let inputNum1 = document.querySelector("#num1");
let inputNum2 = document.querySelector("#num2");

let plusButton = document.querySelector("#plusButton");
let minusButton = document.querySelector("#minusButton");
let devideButton = document.querySelector("#devideButton");
let multiplayButton = document.querySelector("#multiplayButton");
let clearButton = document.querySelector("#clearButton");
let calculate = document.querySelector("#result");

plusButton.addEventListener("click", () => calc("+"));
minusButton.addEventListener("click", () => calc("-"));
devideButton.addEventListener("click", () => calc("/"));
multiplayButton.addEventListener("click", () => calc("*"));

clearButton.addEventListener("click", clearInput);

function calc(operator) {
  let num1 = Number(inputNum1.value);
  let num2 = Number(inputNum2.value);

  calculate.value =
    operator === "+"
      ? num1 + num2
      : operator === "-"
      ? num1 - num2
      : operator === "/"
      ? num1 / num2
      : num1 * num2;
}

function clearInput() {
  inputNum1.value = " ";
  inputNum2.value = " ";
  calculate.value = " ";
}
