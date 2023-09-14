const bingoCells = function () {
  const cellsDiv = document.getElementById("cells");

  for (let i = 0; i < 27; i++) {
    const cellDiv = document.createElement("div");
    cellDiv.classList.add("cellNumbers");
    const random = Math.floor(Math.random() * 76);
    console.log(random);
    const repeatArray = [];

    if (repeatArray.indexOf(random) === -1) {
      console.log(repeatArray);
      cellDiv.innerHTML = `
    <p>${random}</p>
    `;
      cellsDiv.appendChild(cellDiv);
      repeatArray.push(random);
    } else if (repeatArray.indexOf(random) !== -1) {
      i--;
    }
  }
};
bingoCells();
document
  .getElementById("pickNumber")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const random = Math.floor(Math.random() * 76);
    console.log(random);
    const flamingo = document.getElementById("extractedNumber");
    flamingo.innerHTML = `
    <p>${random}</p>
    `;
  });
