let tabsWrapper = document.querySelector(".nav-tabs");
let tabs = tabsWrapper.querySelectorAll(".nav-item");

let sectionsWrapper = document.querySelector(".tabs_content");
let sections = sectionsWrapper.querySelectorAll(".tabs_section");

tabsWrapper.addEventListener("click", selectTab);

function selectTab(event) {
  if (this !== event.target) {
    tabsReset();

    event.target.classList.add("active");

    for (const tab of tabs) {
      if (tab.classList.contains("active")) {
        const tabId = tab.dataset.tabid;
        showSection(tabId);
      }
    }
  }
}

function tabsReset() {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
  sections.forEach((section) => {
    section.classList.remove("show");
  });
}

function showSection(tabId) {
  for (const section of sections) {
    if (section.dataset.sectionid === tabId) {
      section.classList.add("show");
    }
  }
}
