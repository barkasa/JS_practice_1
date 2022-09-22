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

// let submit = document.getElementById("#submit");

// submit.addEventListener("submit", handleFormSubmit);

let lastName = document.querySelector("#lastName");
let age = document.querySelector("#age");
let phoneNumber = document.querySelector("#fhone");
let radioInputs = document.querySelectorAll('[name="connectType"]');
let contactGroup = document.querySelector("#contact_group");
let mailBox = document.querySelector(".mailBox");
let mail = document.querySelector("#mail");
let email = document.querySelector("#eMail");
let mounth = document.querySelector("#mounth");
let day = document.querySelector("#day");
let inLineCheckboxAgree = document.querySelector("#inLineCheckboxAgree");
let inLineCheckboxShow = document.querySelector("#inLineCheckboxShow");

let pass = document.querySelector("#inputPassword");
let repeatPass = document.querySelector("#inputPassword2");

console.log(radioInputs);
form.addEventListener("submit", submitHandler);
contactGroup.addEventListener("click", chooseContact);

// firstName.addEventListener("change", changeName);
// lastName.addEventListener("change", changeName);
age.addEventListener("change", changeAge);
firstName.addEventListener("change", changeFirstName);
lastName.addEventListener("change", changelastName);
phoneNumber.addEventListener("change", changePhone);
email.addEventListener("change", changeEmail);

// handleFormSubmit(submit);

function submitHandler(event) {
  event.preventDefault(); // отключаем дефолтные сценарии(submit)
  if (formValidate()) {
    // showModal(true);
    showMessage(inLineCheckboxShow, "Account created");
  }
}

// семанимческие блоки кода:

function changeAge(event) {
  checkAge(this);
}
function changeFirstName(event) {
  checkName(firstName, lastName);
}
function changelastName(event) {
  checkName(firstName, lastName);
}
function changePhone(event) {
  checkPhone(this);
}
function changeEmail(event) {
  checkEmail(this);
}

function checkAge(element) {
  if (checkEmpty(element)) {
    if (checkDigit(element)) {
      return checkLarge(element, 18);
    }
  }
}

function checkDate(element1, element2) {
  let flag = true; // способ решения через "flag";
  if (checkEmpty(element1)) {
    flag = false;
  }
  if (checkEmpty(element2)) {
    flag = false;
  }
  return flag;
}

function checkName(element1, element2) {
  let flag = true; // способ решения через "flag";
  if (checkEmpty(element1)) {
    flag = false;
  }
  if (checkEmpty(element2)) {
    flag = false;
  }
  return flag;
}

function checkPhone(element) {
  if (checkEmpty(element)) {
    return checkDigit(element);
  }
}

function checkEmail(element) {
  if (checkEmpty(element)) {
    return checkIncludes(element, "@");
  }
}

function checkPassword(password, duoblepassword) {
  let flag = true; // способ решения через "flag";
  if (!checkEmpty(password)) {
    flag = false;
  }
  if (!checkEmpty(duoblepassword)) {
    flag = false;
  }

  if (flag) {
    if (!checkClone(password, duoblepassword)) {
      flag = false;
    }
  }

  return flag;
}

function formValidate() {
  let nameValid = checkName(firstName, lastName);

  let ageValid = checkAge(age);
  let phoneValid = checkPhone(phoneNumber);
  let emailValid = checkEmail(email);
  let passwordValid = checkPassword(pass, repeatPass);
  let dateValid = checkDate(mounth, day);
  let checkBoxValid = checkChecked(inLineCheckboxAgree, inLineCheckboxShow);
  let radioValid = true;
  let radioActive = checkGroupIsCheked(radioInputs, contactGroup);
  if (radioActive && radioActive.value === "mail") {
    radioValid = checkEmpty(mail);
  }
  if (
    nameValid &&
    ageValid &&
    phoneValid &&
    emailValid &&
    passwordValid &&
    dateValid &&
    checkBoxValid &&
    radioValid
  ) {
    return true;
  }
}

// вспомогательные функции:
function checkEmpty(element) {
  if (!element.value) {
    element.classList.add("error");
    console.log(`Error, element #${element.id} is empty`);
  } else {
    element.classList.remove("error");
    return true;
  }
}
function checkDigit(element) {
  if (isNaN(Number(element.value))) {
    element.classList.add("error");
    console.log(`Error, element #${element.id} is digit`);
  } else {
    element.classList.remove("error");
    return true;
  }
}
function checkDigit(element) {
  if (isNaN(Number(element.value))) {
    element.classList.add("error");
    console.log(`Error, element #${element.id} is digit`);
  } else {
    element.classList.remove("error");
    return true;
  }
}

function checkLarge(element, checkNum) {
  // console.log(Number(element.value));

  if (Number(element.value) < checkNum) {
    element.classList.add("error");
    console.log(`Error, element #${element.id} < ${checkNum}`);
  } else {
    element.classList.remove("error");
    return true;
  }
}

function chooseContact(event) {
  if (event.target.name === "connectType") {
    // console.log(event.target);
  }
  if (event.target.value === "mail") {
    mailBox.classList.remove("hidden");
  } else {
    mailBox.classList.add("hidden");
    return true;
  }
}

function checkGroupIsCheked(elements, parentElements) {
  for (const element of elements) {
    if (element.checked) {
      contactGroup.classList.remove("error");

      return element;
    }
  }
  contactGroup.classList.add("error");
  console.log(`Error, child elements #${parentElements.id} is not checked`);
}

function checkIncludes(element, simbol) {
  if (element.value.includes(simbol)) {
    element.classList.remove("error");
    // console.log(element.value);
    return true;
  }
  element.classList.add("error");
  // console.log(element.value);
  console.log(`Error, element #${element.id} is not includes ${simbol}`);
}

function checkClone(password, duoblepassword) {
  if (password.value === duoblepassword.value) {
    password.classList.remove("error");
    duoblepassword.classList.remove("error");
    return true;
  }
  password.classList.add("error");

  duoblepassword.classList.add("error");
  console.log(
    `Error, element #${password.id} is not === #${duoblepassword.id}`
  );
}

function checkChecked(checkBox) {
  if (checkBox.checked) {
    checkBox.classList.remove("error");

    return true;
  }
  checkBox.classList.add("error");

  console.log(`Error, element #${checkBox.id} is not checked`);
}

function showMessage(checkBox, message) {
  if (checkBox.checked) {
    console.log(checkBox, message);
    alert(message);
  }
}

// function handleFormSubmit(event) {
//   // Просим форму не отправлять данные самостоятельно
//   event.preventDefault();
//   console.log("Отправка!");
// }
