let tabsWrapper = document.querySelector(".nav-tabs"); // создали переменную со сылкой на класс родительского объекта UL;
let tabs = tabsWrapper.querySelectorAll(".nav-item"); // создали переменную со сылкой на группу дочерних объектов (UL) li;

let sectionsWrapper = document.querySelector(".tabs_content"); // создали переменную со сылкой на класс родительского объекта div;
let sections = sectionsWrapper.querySelectorAll(".tabs_section"); // создали переменную со сылкой на группу дочерних объектов (div) section;

tabsWrapper.addEventListener("click", selectTab); //повесили событие на переменную со сылкой на класс родительского объекта UL;

function selectTab(event) {
  // создали функцию selectTab выделить вкладку, сделать активной;
  // создали функцию  selectTab
  if (this !== event.target) {
    // this ссылается на глобальный объект;
    // с условием что если;
    //Свойство target интерфейса Event является ссылкой на объект, который был инициатором события.
    tabsReset(); //ссылка на фунцию

    event.target.classList.add("active");

    for (let i = 0; i < tabs.length; i++) {
      // перебрали массив со всего списка li
      const tab = tabs[i]; // создали константу  и присвоили к нему все значение из массива li
      if (tab.classList.contains("active")) {
        // пишим условие, что группа li возвратит эллемент, проверит его, если у него данный класс и вернет true или  false
        //Свойство classList возвращает псевдомассив DOMTokenList, содержащий все классы элемента;
        //ClassList является геттером. Возвращаемый им объект;
        // contains - Проверяет, есть ли данный класс у элемента (вернёт true или false);
        const tabId = tab.dataset.tabid; // присвоили id номер data-tabId="..." (= dataset.tabid), через tab  к константе const tabId;
        // console.log(tab.dataset);
        showSection(tabId); // присвоили функцию показывающую надпись со именем вкладки для функции selectTab (надпись при нажатии на вкладку);
      }
    }
  }
}

function tabsReset() {
  // создали функцию tabsReset  убрать выделение вкладки;
  for (let i = 0; i < tabs.length; i++) {
    // перебрали массив со всего списка (ul и div)  li и section;
    const tab = tabs[i]; // создали константу  и присвоили к нему все значение из массива li;
    const section = sections[i]; // создали константу  и присвоили к нему все значение из массива section;
    tab.classList.remove("active"); // remove( String [,String] ) Удаляет у элемента указанные классы у группы дочерних объектов (UL) li;

    section.classList.remove("show"); // remove( String [,String] ) Удаляет у элемента указанные классы "show" у группы дочерних объектов (div) section;
  }
}

function showSection(tabId) {
  // создали функцию showSection  показывающую надпись со именем вкладки для функции selectTab
  for (let i = 0; i < sections.length; i++) {
    // перебрали массив со всего списка (div)  section;
    const section = sections[i]; // создали константу  и присвоили к нему все значение из массива section;
    if (section.dataset.sectionid === tabId) {
      // пишим условие, через dataset.sectionid = data-sectionId="..." конкретно равно tabid (через ID)
      section.classList.add("show"); // add( String [,String] ) Возвращаемый объект и добавляет элементу указанные классы "show"
    }
  }
}
