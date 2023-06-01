let body = document.querySelector('body');

//adding a header
let header = document.createElement('h1');
header.setAttribute = ('class', 'header');
header.textContent = `Etch-A-Sketch`
body.appendChild(header);

//creating a container div for the board
let boardContainer = document.createElement('div');
boardContainer.setAttribute('class', 'board-container');
body.appendChild(boardContainer);

//creating container div for buttons and other utilities
let utilitiesContainer = document.createElement('div');
utilitiesContainer.setAttribute('class', 'utilities-container');
body.appendChild(utilitiesContainer);

//creating color input button
let chooseColor = document.createElement('input');
chooseColor.setAttribute('type', 'color');
chooseColor.setAttribute('class', 'color');
utilitiesContainer.appendChild(chooseColor);

//creating rainbow button
let rainbow = document.createElement('button');
rainbow.setAttribute('class', 'rainbow');
rainbow.textContent = "Random";
utilitiesContainer.appendChild(rainbow);

//creating eraser button
let eraser = document.createElement('button');
eraser.setAttribute('class', 'eraser');
eraser.textContent = "Eraser";
utilitiesContainer.appendChild(eraser);

//creating range for the # of grids
let range = document.createElement('input');
range.setAttribute('type', 'range');
range.setAttribute('min', '12');
range.setAttribute('max', '100');
range.setAttribute('value', '64');
range.setAttribute('class', 'range');
utilitiesContainer.appendChild(range);

//creating clear button
let clear = document.createElement('button');
clear.setAttribute('class', 'clear');
clear.textContent = "Clear";
utilitiesContainer.appendChild(clear);

//creating spaceholder
let spaceholder = document.createElement('button');
spaceholder.setAttribute('class', 'spaceholder');
spaceholder.textContent = `${range.value} by ${range.value} board`;
utilitiesContainer.appendChild(spaceholder);

let currentColor = chooseColor.value;


//creating n(rows*columns) grids
function grids(rows) {
    boardContainer.style.gridTemplateColumns = `repeat(${rows}, 1fr)`;
    boardContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    spaceholder.textContent = `${range.value} by ${range.value} board`;
    for (let i = 0; i < rows*rows; i++) {
        let grid = document.createElement('div');
        grid.setAttribute('class', 'grid');
        boardContainer.appendChild(grid);
        grid.addEventListener('click', () => {
            /* let currentColor = chooseColor.value; */
            range.addEventListener('change', () => {
                grid.style.cssText = `background: rgb(189, 180, 169);`;
            })
            clear.addEventListener('click', () => {
                grid.style.cssText = `background: rgb(189, 180, 169);`;
            })
            /* chooseColor.addEventListener('click', () => {
                currentColor = chooseColor.value;
            })
            eraser.addEventListener('click', () => {
                currentColor = "rgb(189, 180, 169)";
            })
            if (eraser.onclick) {
                grid.style.cssText = `background: rgb(189, 180, 169);`;
            } else if (chooseColor.onclick) {
                grid.style.cssText = `background: ${chooseColor.value};`;
            } */
            grid.style.cssText = `background: ${currentColor}`;
        })
        
    }   
}


//to choose board population option
rows = range.value;
grids(rows);
range.addEventListener('change', () => {
    rows = range.value;
    grids(rows);
})
eraser.addEventListener('click', () => {
    currentColor = "rgb(189, 180, 169)";
})
chooseColor.addEventListener('change', () => {
    currentColor = chooseColor.value;
})

rainbow.addEventListener('click', () => {
    let rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
function randomColor() {
    return (rainbowColors[Math.floor(Math.random()*rainbowColors.length)]);
}
    currentColor = randomColor();
})

let footer = document.createElement('footer');
body.appendChild(footer);

let sourceLink = document.createElement('a');
sourceLink.setAttribute('href', 'https://github.com/sobimohammet/Etch-A-Sketch');
sourceLink.textContent = 'Souce Code from Github';
footer.appendChild(sourceLink);

let footerFisrtChild = document.createElement('div');
footerFisrtChild.setAttribute('class', 'author');
footerFisrtChild.textContent = `This web version of sketchpad is developed by Sobi Mohammed`;
footer.appendChild(footerFisrtChild);

let footerLastChild = document.createElement('div');
footerLastChild.setAttribute('class', 'copyright');
footerLastChild.textContent = `Copyright © 2023 Sobi Mohammed`;
footer.appendChild(footerLastChild);

