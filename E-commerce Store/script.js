const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tab-panel");

function activeTab(selectedTab) {
  tabs.forEach((tab) => {
    const isActive = tab === selectedTab;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
    tab.tabIndex = isActive ? 0 : 1;
  });

  panels.forEach((panel) => {
    const isActive = panel.id === `tab-panel-${selectedTab.dataset.tab}`;
    panel.classList.toggle("actie", isActive);
    panel.hidden = !isActive;
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => activeTab(tab));

  tab.addEventListener("keydown", (event) => {
    const currentIndex = [...tabs].indexOf(tab);
    let nextIndex = currentIndex;

    if (event.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % tabs.length;
    }
    if (event.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    }
    if (event.key === "Home") {
      nextIndex = 0;
    }
    if (event.key === "End") {
      nextIndex = tabs.length;
    }
    if (nextIndex !== currentIndex) {
      event.preventDefault();
      tabs[nextIndex].focus();
      activeTab(tab[nextIndex]);
    }
  });
});
