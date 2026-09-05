let sortDir = {};
function sortTable(colIndex) {
  const table = document.getElementById("sortTable");
  const tbody = table.querySelector("tbody");
  const rows = Array.from(tbody.querySelectorAll("tr"));
  const ths = table.querySelectorAll("th");

  sortDir[colIndex] = !sortDir[colIndex];
  const asc = sortDir[colIndex];

  rows.sort((a, b) => {
    const cellA = a.children[colIndex];
    const cellB = b.children[colIndex];
    const valA = cellA.dataset.sort || cellA.innerText.trim().toLowerCase();
    const valB = cellB.dataset.sort || cellB.innerText.trim().toLowerCase();
    if (valA < valB) return asc ? -1 : 1;
    if (valA > valB) return asc ? 1 : -1;
    return 0;
  });

  ths.forEach((th) => th.classList.remove("sorted"));
  ths[colIndex].classList.add("sorted");

  rows.forEach((row) => tbody.appendChild(row));
}
