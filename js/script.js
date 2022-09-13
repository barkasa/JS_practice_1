let tabsWrapper = document.querySelector(".nav-tabs");
let tabs = tabsWrapper.querySelectorAll(".nav-item");

let sectionsWrapper = document.querySelector(".tabs_content");
let sections = sectionsWrapper.querySelectorAll(".tabs_section");

tabsWrapper.addEventListener("click", selectTab);

function selectTab(event) {
  if (this !== event.target) {
    tabsReset();

    event.target.classList.add("active");

    for (let i = 0; i < tabs.length; i++) {
      const tab = tabs[i];
      if (tab.classList.contains("active")) {
        const tabId = tab.dataset.tabid;
        console.log(tab.dataset);
        showSection(tabId);
      }
    }
  }
}

function tabsReset() {
  for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i];
    const section = sections[i];
    tab.classList.remove("active");
    section.classList.remove("show");
  }
}

function showSection(tabId) {
  for (let j = 0; j < sections.length; j++) {
    const section = sections[j];
    if (section.dataset.sectionid === tabId) {
      section.classList.add("show");
    }
  }
}
