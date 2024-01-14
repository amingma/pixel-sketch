let penOn = true;
let isRainbow = false;

const pageContainer = document.querySelector('#container');
const penToggler = document.querySelector('#pen-toggle');
const rainbowToggler = document.querySelector('#rainbow-toggle');
const inputButton = document.querySelector('#pixel');

drawGrid(16);

penToggler.addEventListener('click', ()=>{
    penOn = !penOn;
    penToggler.replaceChildren();
    const one = document.createElement('span');
    one.textContent = "Pen: ";
    const two = document.createElement('span');
    two.textContent = "ON";
    const three = document.createElement('span');
    three.textContent = '/';
    const four = document.createElement('span');
    four.textContent = "OFF";
    if (penOn) {
        two.className = "strong";
    }
    else {
        four.className = "strong";
    }
    penToggler.appendChild(one); penToggler.appendChild(two);
    penToggler.appendChild(three); penToggler.appendChild(four);
});

rainbowToggler.addEventListener('click', ()=>{
    isRainbow = !isRainbow;
    rainbowToggler.replaceChildren();
    const one = document.createElement('span');
    one.textContent = "Rainbow Colors: ";
    const two = document.createElement('span');
    two.textContent = "ON";
    const three = document.createElement('span');
    three.textContent = '/';
    const four = document.createElement('span');
    four.textContent = "OFF";
    if (isRainbow) {
        two.className = "strong";
    }
    else {
        four.className = "strong";
    }
    rainbowToggler.appendChild(one); rainbowToggler.appendChild(two);
    rainbowToggler.appendChild(three); rainbowToggler.appendChild(four);
});

function drawGrid(sideLength) {
    for (let i=0; i<sideLength; i++) {
        const flexContainer = document.createElement('div');
        flexContainer.className = "flex-container"
        for (let j=0; j<sideLength; j++) {
            const gridDiv = document.createElement('div');
            gridDiv.className = "flex-item"
            flexContainer.appendChild(gridDiv);
        }
        pageContainer.appendChild(flexContainer);
    }    
}

function removeGrid() {
    pageContainer.replaceChildren();
}

inputButton.addEventListener('change', ()=>{
    let sideLength = inputButton.value;
    if (sideLength>=1 && sideLength<=100) {
        removeGrid();
        drawGrid(sideLength);
    }
    else {
        alert("Invalid input");
    }
});