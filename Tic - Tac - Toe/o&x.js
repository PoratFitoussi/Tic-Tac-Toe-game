let theTurn = true; //when the variable is true than it's the X player, and O when false

//matrix that represents the borad, when the value is 0 it's X and 1 for O, and -1 for nothing
let board = [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
let counter = 0; //count how many move the game have left
//represent the button
let b1 = document.getElementById("c1");
let b2 = document.getElementById("c2");
let b3 = document.getElementById("c3");
let b4 = document.getElementById("c4");
let b5 = document.getElementById("c5");
let b6 = document.getElementById("c6");
let b7 = document.getElementById("c7");
let b8 = document.getElementById("c8");
let b9 = document.getElementById("c9");
//if the player click on the button
b1.onclick = function() {setButton(b1,0);}
b2.onclick = function() {setButton(b2,1);}
b3.onclick = function() {setButton(b3,2);}
b4.onclick = function() {setButton(b4,3);} 
b5.onclick = function() {setButton(b5,4);}
b6.onclick = function() {setButton(b6,5);}
b7.onclick = function() {setButton(b7,6);}
b8.onclick = function() {setButton(b8,7);}
b9.onclick = function() {setButton(b9,8);}


function setButton(button, index)
{
    counter+=1; //increasing the counter
    var flagNum = theTurn? 1:0; //we going to use this variable to tell what color the user is
    var tempFlag = theTurn?"X":"O"; //select the player

    button.value = tempFlag; //change the value of the clicked button
    button.disabled = true; //make the button an avelibe to be pressed
    switch(index){
        case 0: board[0][0] = flagNum;
        break;
        case 1: board[0][1] = flagNum;
        break;
        case 2: board[0][2] = flagNum;
        break;
        case 3: board[1][0] = flagNum;
        break;
        case 4: board[1][1] = flagNum;
        break;
        case 5: board[1][2] = flagNum;
        break;
        case 6: board[2][0] = flagNum;
        break;
        case 7: board[2][1] = flagNum;
        break;
        case 8: board[2][2] = flagNum;
        break; 
    }
    theTurn = !theTurn;
    gameOver = checkWin(index);

    if(gameOver){
        document.getElementById("score").innerHTML = `Player ${tempFlag} has won`;
        endGame(gameOver);
    }
    if(counter == 9)
        document.getElementById("score").innerHTML = "Match Tie";
}

function checkWin(index){
    if(board[0][0] == board[0][1] && board[0][0] == board[0][2] && board[0][0] != -1)
        return true;
    if(board[1][0] == board[1][1] && board[1][0] == board[1][2] && board[1][0] != -1)
        return true;
    if(board[2][0] == board[2][1] && board[2][0] == board[2][2] && board[2][0] != -1)
        return true;
    if(board[0][0] == board[1][0] && board[0][0] == board[2][0] && board[0][0] != -1)
        return true;
    if(board[0][1] == board[1][1] && board[0][1] == board[2][1] && board[0][1] != -1)
        return true;
    if(board[0][2] == board[1][2] && board[0][2] == board[2][2] && board[0][2] != -1)
        return true;
    if(board[0][0] == board[1][1] && board[0][0] == board[2][2] && board[0][0] != -1)
        return true;
    if(board[2][0] == board[1][1] && board[2][0] == board[0][2] && board[2][0] != -1)
        return true;
}

//in case the game went into a tie than all the button un disabeld
function endGame(flag){
    b1.disabled = flag;
    b2.disabled = flag;
    b3.disabled = flag;
    b4.disabled = flag;
    b5.disabled = flag;
    b6.disabled = flag;
    b7.disabled = flag;
    b8.disabled = flag;
    b9.disabled = flag;

}