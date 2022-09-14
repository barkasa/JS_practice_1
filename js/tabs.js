let tabsWrapper = document.querySelector(".nav-tabs");
let tabs = tabsWrapper.querySelectorAll(".nav-item");

let sectionsWrapper = document.querySelector(".tabs_content");
let sections = sectionsWrapper.querySelectorAll(".tabs_section");

tabsWrapper.addEventListener("click", selectTab);

function selectTab(event) {
  if (this !== event.target) {
    tabsReset(tabs, sections);

    event.target.classList.add("active");
    checkTabActive(tabs, showSection);
  }
}

function checkTabActive(checkTabs, showSectionCB) {
  for (const tab of checkTabs) {
    if (tab.classList.contains("active")) {
      const tabId = tab.dataset.tabid;
      showSectionCB(tabId);
    }
  }
}

function tabsReset(tabsForReset, sectionsForReset) {
  tabsForReset.forEach((tab) => {
    tab.classList.remove("active");
  });
  sectionsForReset.forEach((section) => {
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
