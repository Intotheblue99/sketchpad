let grid = document.getElementById("canvas");
let penSwitch = document.querySelector('.pen');
let del = document.querySelector('.erase')
let make = document.querySelector('.enter')
let exist = false;

// let table = document.createElement('TABLE');
//     table.border = '1';
//     table.style.width ='700px';
//     table.style.height='700px';
//     table.style.borderSpacing= 'inherit';
//     table.style.textAlign= 'center';

//     let tableBody = document.createElement('TBODY');
//     table.appendChild(tableBody)

function makeGrid() {
    let exist = true;
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
    //  if (exist === true) {
    //     table.remove();
    //  }
     make.addEventListener('click', ()=>{
        table.remove();
     })
     
}

 function pen() {
         this.style.backgroundColor ='red';
 };

//function remove() {
   // makeGrid();
   // tableBody.remove()
    // let tableBody = document.createElement('TBODY');
    // tableBody.removeChild(tableBody.lastChild)
    
 //}

  //document.querySelector('.enter').addEventListener('submit', );

