
//const canvas = document.querySelector('#canvas');

// let column = document.getElementsByClassName('columns');
// let row = document.getElementsByClassName('rows');
//console.log(column,row)

// function getCol(colNum) {
//         for (j=0; j < colNum; j++) {
//         let addCols = document.createElement('div');
//         addCols.textContent = 'col';
//         canvas.appendChild(addCols).className= 'columns';
//     }
// }


// function getRow(rowNum) {
//     for (i=0; i < rowNum; i++) {
//         let addRows = document.createElement('div');
//         addRows.textContent = 'row';
//         canvas.appendChild(addRows).className= 'rows';
       
//     }
// }

// let column = document.getElementsByClassName('columns');
// let row = document.getElementsByClassName('rows');
let grid = document.getElementById("canvas");

console.log(grid)

function makeGrid() {
    
    let table = document.createElement('TABLE');
    table.border = '1';
    table.style.width ='500px';
    table.style.height='500px';
    table.style.borderSpacing= 'inherit';
    table.style.textAlign= 'center';

    let tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);

    for (i = 0; i < 10; i++) {
        let rows = document.createElement('TR');
        tableBody.appendChild(rows);

        for (j = 0; j < 10; j++) {
            let columns = document.createElement('TD');
            columns.width = '75';
            columns.appendChild(document.createTextNode(''));
            rows.appendChild(columns);
        }  
    }
    grid.appendChild(table);

}
makeGrid();

function changeColor() {

}





