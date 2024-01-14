let penOn = true;
let isRainbow = false;

const pageContainer = document.querySelector('#container');
const penToggler = document.querySelector('#pen-toggle');
const rainbowToggler = document.querySelector('#rainbow-toggle');
const inputButton = document.querySelector('#pixel');
const eraseButton = document.getElementById('erase');

drawGrid(16);

penToggler.addEventListener('click', ()=>{
    togglePen();
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
            gridDiv.addEventListener('mouseover', ()=>{
                if (penOn) {
                    if (isRainbow) {
                        gridDiv.style.backgroundColor = generateRandomColor();
                    }
                    else {
                        gridDiv.style.backgroundColor = "black";
                    }
                }
            });
        }
        pageContainer.appendChild(flexContainer);
    }    
}

function removeGrid() {
    pageContainer.replaceChildren();
}

function generateRandomColor() {
    const arr = [];
    for (let i=0; i<3; i++) {
        arr.push(Math.floor(Math.random()*256));
    }
    return `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;
}

pageContainer.addEventListener('click', ()=>{
    togglePen();
});

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

eraseButton.addEventListener('click', ()=>{
    const boxes = document.querySelectorAll('.flex-item');
    boxes.forEach(box=>{
        box.style.backgroundColor = 'white';
    });
});

function togglePen() {
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
}
