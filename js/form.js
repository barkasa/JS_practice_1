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
let age = document.querySelector("#age");
let phoneNumber = document.querySelector("#fhone");
let radioInputs = document.querySelectorAll('[name="connectType"]');
let contactGroup = document.querySelector("#contact_group");
let mailBox = document.querySelector(".mailBox");
let mail = document.querySelector("#mail");

console.log(radioInputs);
form.addEventListener("submit", submitHandler);
contactGroup.addEventListener("click", chooseContact);

function submitHandler(event) {
  event.preventDefault();
  checkEmpty(firstName);
  checkEmpty(lastName);
  checkEmpty(age);
  checkDigit(age);
  checkLarge(age, 18);
  checkEmpty(phoneNumber);
  checkDigit(phoneNumber);
  let radioActive = checkGroupIsCheked(radioInputs);
  console.log(radioActive);
  if (radioActive.value === "mail") {
    checkEmpty(mail);
  }
}
// вспомогательные функции:
function checkEmpty(element) {
  if (!element.value) {
    element.classList.add("error");
    console.log(`Error, element #${element.id} is empty`);
  } else {
    element.classList.remove("error");
  }
}
function checkDigit(element) {
  if (isNaN(Number(element.value))) {
    element.classList.add("error");
    console.log(`Error, element #${element.id} is digit`);
  } else {
    element.classList.remove("error");
  }
}
function checkDigit(element) {
  if (isNaN(Number(element.value))) {
    element.classList.add("error");
    console.log(`Error, element #${element.id} is digit`);
  } else {
    element.classList.remove("error");
  }
}

function checkLarge(element, checkNum) {
  console.log(Number(element.value));

  if (Number(element.value) < checkNum) {
    element.classList.add("error");
    console.log(`Error, element #${element.id} < ${checkNum}`);
  } else {
    element.classList.remove("error");
  }
}

function chooseContact(event) {
  if (event.target.name === "connectType") {
    console.log(event.target);
  }
  if (event.target.value === "mail") {
    mailBox.classList.remove("hidden");
  } else {
    mailBox.classList.add("hidden");
  }
}

function checkGroupIsCheked(elements) {
  for (const element of elements) {
    if (element.checked) {
      contactGroup.classList.remove("error");
      return element;
    }
  }
  contactGroup.classList.add("error");
}
