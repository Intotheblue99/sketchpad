let grid = document.getElementById("canvas");
let make = document.querySelector('.enter')

function makeGrid() {
    let rowValue = document.querySelector('.rowValue').value;
    let colValue = document.querySelector('.colValue').value;
    let table = document.createElement('TABLE');
    table.border = '1';
    table.style.width ='700px';
    table.style.height='700px';
    table.style.borderSpacing= 'inherit';
    table.style.textAlign= 'center';
    
    let tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);

    for (i = 0; i < rowValue; i++) {
        let row = document.createElement('TR');
        tableBody.appendChild(row);
        for (j = 0; j < colValue; j++) {
            let col = document.createElement('TD');
            col.width = '75';
            col.appendChild(document.createTextNode(''));
            row.appendChild(col);
            col.addEventListener('mouseover', pen);
        };  
    };
     grid.appendChild(table);
     make.addEventListener('click', ()=>{
        table.remove();
     })
}

 function pen() {
    let penColor = document.getElementById('pickColor').value
    this.style.backgroundColor = penColor;         
 };
