//получить все эл. и сохранить их в переменные;
//1.Form,
//2. Fiarst name
//3.Last name
//4. Age
//5. Fhone
//6. E-mail
//7. radioBattoms groups 3x
//8. passwords select 2x
//9 . biarthday inputs
//10. checkboks 2x
//11. buttoms submit

//событие submit
//событие radioButtoms (mail)

//1.проверка радиокнопки (проверять активна ли кнопка => что скрывать или показывать)
//2. submit (собрать все данные с формы и обработать)
//2.1 будет запускать вспомог. функ. - валидации и результирующую функ.
// вспомогательные функции:
//2. Fiarst name (не пустое, value)
//3.Last name (не пустое, value)
//4. Age (не пустое, Integer >= 18)
//5. Fhone (integer)
//6. E-mail (@,. , 8 символов)
//7. radioBattoms groups 3x (должно выбрано, не пустое)
//8. passwords select 2x (мин. 8 символов, 1пароль === 2пароль)
//9 . biarthday inputs(обязательный для заполнения)
//10. checkboks 2x(согласие обязательно)

// доп функ.
// если submit & checkbox = checked => alert (уважаемый ..., ваш акаунт создан)
// результирующая функ.
// вывести информацию в блок, чтоб представить в формате презинтаций
let form = document.querySelector("#form");
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");

form.addEventListener("submit", submitHandler);

function submitHandler(event) {
  event.preventDefault();
  chekEmpty(firstName);
  chekEmpty(lastName);
}
// вспомогательные функции:
function chekEmpty(element) {
  if (!element.value) {
    element.classList.add("error");
  } else {
    element.classList.remove("error");
  }
}
