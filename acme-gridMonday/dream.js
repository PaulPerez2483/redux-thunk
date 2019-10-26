let rows = 5;
let cols = 5;
let grid = document.getElementById('grid');

function createGrid(y, x) {
    let row =  `<div class=row_parent></div>`
    let col = `<div class=col_child></div>`
    for(let i = 0; i < y; ++i) {
        grid.innerHTML += row
        for(let ii = 0; ii < x; ++ii) {
          document.getElementsByClassName('row_parent')[i].innerHTML += col;
        }
    }
}

createGrid(rows, cols)

function buttonsFunc() {
    let buttonArr = [...document.getElementsByTagName('button')] // return the html collection into a real array
    buttonArr.forEach(el => {
        el.addEventListener('click', (ev)=> {
            ev.preventDefault();
            // console.log(ev)
            if(returnTrue(ev)) {
                if(Number(ev.target.attributes[0].value) === 0) {
                    let row = document.querySelector('.row_parent').outerHTML;
                    console.dir(row)
                    grid.innerHTML += row;
                }
                if(Number(ev.target.attributes[0].value) === 1){
                    let grid = document.querySelectorAll('#grid > .row_parent')
                    grid.length <= 1 ? null : grid[grid.length -1].remove();
                }
                if(Number(ev.target.attributes[0].value) === 2) {
                    let row = document.querySelectorAll('.row_parent');
                    let col = `<div class=col_child></div>`
                    row.forEach(el => {
                        console.dir(el.innerHTML += col)
                    })
                }
                if(Number(ev.target.attributes[0].value) === 3) {
                    let row = document.querySelectorAll('.row_parent');
                    row.forEach(el => {
                        if(el.children.length !==1 ) {
                            el.children[el.children.length -1].remove()
                        }
                    })
                }
            }
        })
    })
}

buttonsFunc()

function returnTrue(e){
    let id = Number(e.target.attributes[0].value)
    let arr = ['add_row', 'remove_row', 'add_col', 'remove_col'];
    return e.target.classList.contains(arr[id]);
}

function getColor() {
    let colorButtons = document.querySelectorAll('#palette > .color'); 

    [...colorButtons].forEach(el => {
       el.addEventListener('click', colorGrid)
    })
}
getColor()


function colorGrid(ev) {
    let color = ev.target.attributes[1].value;
                ev.target.classList.toggle('doubleBorder')
    console.log(color)
    let grid = [...document.getElementsByClassName('col_child')];
    grid.forEach(e => {
        e.addEventListener('click', function(x) {
            x.target.style.backgroundColor = color
        })
    })
    

}
