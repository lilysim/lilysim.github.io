
let boxes = document.querySelectorAll('.box')
let board = document.getElementById("board")
let clickCount = 0
let player = "X"

//Setting the winning combos
let winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]

//Function - Change Player
function changePlayer (){
    if(player=="X"){
        player = "0";
    } else {
        player = "X"}
    }

//Function - Determine Winner 
    function checkWin() {
        let winner = false
        winningCombos.forEach(function(element){
          if (boxes[element[0]].innerHTML == player && 
            boxes[element[1]].innerHTML == player && 
            boxes[element[2]].innerHTML == player) {
            winner = true} 
        });
      
        return winner;
      }
      
//Game Sequence
boxes.forEach(function(box) {
    box.onclick = function(event) {
    if (event.target.innerHTML == ''){
        event.target.innerHTML = player}

        if (checkWin ()) {
            alert('You Won!!!')
        }
        else {
            changePlayer(clickCount++)
            if (clickCount == 9)
            alert('It is a Draw')
        }}})