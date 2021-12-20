let container = document.querySelector('.container');
let eraser = document.getElementById('eraser');

function generateRandomColor()
{
  const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  return `rgb(${r},${g},${b})`;
}

function clearGrid()
{
    while(container.firstChild)
    {
        container.removeChild(container.firstChild);
    }
    let NUM_OF_SQUARE = prompt("Number of squares per side? (<=100)");
    
    while(NUM_OF_SQUARE > 100)
    {
        NUM_OF_SQUARE = prompt("Number of squares per side? (<=100)");
    }

    generateGridLayout(NUM_OF_SQUARE);
}


function generateGridLayout(num)
{
  for (let i = 0; i < num; ++i) {
    for (let j = 0; j < num; ++j) {
      let gridUnit = document.createElement("div");
      gridUnit.className = "gridUnit";
      gridUnit.style.width = `calc(100%/${num})`;
      gridUnit.style.height = `calc(100%/${num})`;
      gridUnit.addEventListener("mouseenter", () => {
        gridUnit.style.backgroundColor = "black";
      });
      container.appendChild(gridUnit);
    }
  }
}

function eraserHandler()
{
  if (eraser.dataset.active == "off")
  {
    eraser.style.backgroundColor = "green";
    eraser.dataset.active = "on";

    for (let i = 0; i < container.children.length; ++i)
    {
      container.children[i].removeEventListener("mouseenter", () => {
        gridUnit.style.backgroundColor = "black";
      });
      container.children[i].addEventListener("mouseenter", () => {
        container.children[i].style.backgroundColor = "white";
      });
    }

  }
  else
  {
    eraser.style.backgroundColor = "transparent";
    eraser.dataset.active = "off";

    for (let i = 0; i < container.children.length; ++i)
    {
      container.children[i].removeEventListener("mouseenter", () => {
        gridUnit.style.backgroundColor = "white";
      });
      container.children[i].addEventListener("mouseenter", () => {
        container.children[i].style.backgroundColor = "black";
      });
    }
  }
}

generateGridLayout(16);