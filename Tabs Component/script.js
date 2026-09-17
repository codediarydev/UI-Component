const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tab-panel");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {

    // Remove active from all tabs
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    // Activate clicked tab
    tab.classList.add("active");

    // Remove active from all pannels
    panels.forEach((panel) => {
      panel.classList.remove("active");
    });

    // Find matching pannel
    const tabName = tab.dataset.tab;
    const targetPanel = document.querySelector(`[data-content="${tabName}"]`);

    // Show Matching Panel
    targetPanel.classList.add("active");
  });
});
