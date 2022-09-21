// пагинация
// let boxes = document.querySelectorAll(".box");
// let nextButton = document.querySelector(".next");

// nextButton.addEventListener("click", nextHandler);

// function nextHandler(event) {
//   let nextPage;
//   for (const box of boxes) {
//     // function incrementPage
//     if (box.classList.contains("show")) {
//       //   console.log(box.dataset.wrapper);
//       let currentPage = box.dataset.wrapper;
//       nextPage = Number(currentPage) + 1;
//       //   console.log(nextPage);
//       box.classList.remove("show");
//     }
//   }
//   for (const box2 of boxes) {
//     // function selectNextPage

//     if (boxes.length < nextPage) {
//       nextPage = 1;
//     }

//     if (box2.dataset.wrapper == String(nextPage)) {
//       box2.classList.add("show");
//       console.log(String(nextPage), box2.dataset.wrapper);
//     }
//   }
// }
let testRadioInputs = document.querySelectorAll('[name="question"]');
console.log(testRadioInputs);
let blockQuestion = document.querySelectorAll(".block_question");
let testContactGroup = document.querySelector("#test_group");
let backButton = document.querySelector("#back");
let nextButton = document.querySelector("#next");
let version = document.querySelector("#version");
let versionInput = document.querySelector(".versionInput");

testContactGroup.addEventListener("click", chooseContact);
nextButton.addEventListener("click", nextHandler);
backButton.addEventListener("click", backHandler);

// checkGroupIsCheked(testRadioInputs, testContactGroup);

checked(testRadioInputs);

function chooseContact(event) {
  if (event.target.name === "question_1" && "question_2" && "question_3") {
    // console.log(event.target);
  }
  if (event.target.value === "version_1" && "version_2" && "version_3") {
    versionInput.classList.remove("hidden");
  } else {
    versionInput.classList.add("hidden");
    return true;
  }
}

// function checkGroupIsCheked(elements, parentElements) {
//   for (const element of elements) {
//     if (element.checked) {
//       testContactGroup.classList.remove("error");

//       return element;
//     }
//   }
//   testContactGroup.classList.add("error");
//   console.log(`Error, child elements #${parentElements.id} is not checked`);
// }

function checked(checkBox) {
  for (const input of testRadioInputs) {
    if (input.checked) {
      console.log(input.value);
      checkBox.classList.remove("error");
      return true;
    }
    checkBox.classList.add("error");
    console.log(`Error, element #${checkBox.id} is not checked`);
  }
}

function nextHandler(event) {
  let nextPage;

  for (const block of blockQuestion) {
    // function incrementPage
    if (block.classList.contains("show")) {
      // console.log(block.dataset.wrapper);
      let currentPage = block.dataset.wrapper;
      nextPage = Number(currentPage) + 1;
      //   console.log(nextPage);
      block.classList.remove("show");
    }
  }
  for (const block2 of blockQuestion) {
    // function selectNextPage

    if (blockQuestion.length < nextPage) {
      nextPage = 3;
    }

    if (block2.dataset.wrapper == String(nextPage)) {
      block2.classList.add("show");
    }
  }
}

function backHandler(event) {
  let backPage;

  for (const block of blockQuestion) {
    // function incrementPage
    if (block.classList.contains("show")) {
      // console.log(block.dataset.wrapper);
      let currentPage = block.dataset.wrapper;
      backPage = Number(currentPage) - 1;
      //   console.log(nextPage);
      block.classList.remove("show");
    }
  }
  for (const block2 of blockQuestion) {
    // function selectNextPage

    if (blockQuestion.length > backPage) {
      backPage = 1;
    }

    if (block2.dataset.wrapper == String(backPage)) {
      block2.classList.add("show");
    }
  }
}

function summary() {
  let count = document.getElementsByClassName("block_question").length; //Количество вопросов
  let answers = document.querySelectorAll(".block_question"); //Все элементы div с вопросами (???)
  let score = 0; //Количество верных ответов
  let rightAnswers = ["a_1", "b_2", "c_3"]; //Список верных ответов

  for (let i = 0; i < count; i++) {
    let chosenAnswer = answers[i].querySelector("input[type='radio']:checked"); //Из массива вопросов выбираем элемент радио, который выбрал пользователь
    if (chosenAnswer && chosenAnswer.id == rightAnswers[i]) {
      //Думал что будет работать если будет свреять по html разметке, но зря
      score++;
    }
    console.log(
      "Выбранный ответ: " + chosenAnswer && chosenAnswer.parentNode.textContent
    );
    console.log("Правильный ответ: " + rightAnswers[i]);
    console.log("Очки: " + score);
  }
}
