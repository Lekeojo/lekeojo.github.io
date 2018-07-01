const inputWidth = document.getElementById('input_width');
const inputHeight = document.getElementById('input_height');
// var theColor = $('#colorPicker').val();
var col = 0;
var mouseIsDown = false;
var isColoured = false;
const colorPicker = document.getElementById('colorPicker');
$('#sizePicker').submit(function(ev) {
    ev.preventDefault();
    gWidth = $('#input_width').val();
    gHeight = $('#input_height').val();
    makeGrid();
});
function makeGrid() {
    //initialize grid, remove all rows
    let gWidth = inputWidth.value;
    let gHeight = inputHeight.value;
    $('#pixel_canvas tr').remove();
    const table = document.getElementById('pixel_canvas');
    for(let i = 0; i<gHeight; i++){
        const row = table.insertRow(i);
        for(let j=0; j<gWidth; j++){
            const cell = row.insertCell(j);
            cell.addEventListener('click',function (){
                if($(this).css('background-color') === 'rgba(0, 0, 0, 0)'){
                        console.log('was empty');
                        $(this).css('background-color',colorPicker.value);
                } else{
                        $(this).css('background-color','rgba(0, 0, 0, 0)');
                        console.log('was coloured');
                }
                //change the background-color of the cell
            });
            cell.addEventListener('mousedown',function(){
                if($(this).css('background-color') === 'rgba(0, 0, 0, 0)'){
                    isColoured = true;
                    console.log("isColoured: " + isColoured);
                }else {
                    isColoured = false;
                    console.log("isColoured: "+isColoured);
                }
                 //check if the background of the cell is coloured or not, and set the isColoured var accordingly, when the mouse is down
            });
            cell.addEventListener('mouseover',function(){
                     if(isColoured && mouseIsDown){
                            console.log('was empty');
                            $(this).css('background-color',colorPicker.value);
                    }else if(!isColoured && mouseIsDown) {
                            $(this).css('background-color','rgba(0, 0, 0, 0)');
                            console.log('was coloured');
                    }
                    // brush funcitonality;
            });
        }
    };
    //disable html drag (that was occuring while brushing);
    $('#pixel_canvas').mousedown(function(e){
        e.preventDefault();
    });
} //makeGrid()

//call makeGrid() function on load
$(document).ready(makeGrid());

//switch mouseIsDown var for brush functionality;
$(document).mousedown(function(){
    mouseIsDown = true;
    console.log(mouseIsDown);
});
$(document).mouseup(function(){
    mouseIsDown = false;
    console.log(mouseIsDown);
});
$('#printButton').click(function(){
    window.print()
})