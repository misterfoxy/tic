$(document).ready(function() {
  //default players turn to X
  var turn = "X";
  //Array that stores values that will be checked for a winner
  var turns = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
  //default computer turn = O
  var computersTurn = "O";
  //keeps track if it's computers turn
  var gameOn = false;
  //limits computer turns
  var count = 0;

  //change computer turn to O
  $('#turnO').click(function(){
    turn = "O";
    computersTurn = "X";
    $('#turnX').removeClass('btn-info');
    $('#turnO').addClass('btn-info');
    reset();
  });

  $('#turnX').click(function(){
    turn = "X";
    computersTurn = "O";
    $('#turnO').removeClass('btn-info');
    $('#turnX').addClass('btn-info');
    reset();
  });

  function computerTurn(){

    var taken = false;
    while(taken === false && count !== 5){
      //generate computers random turn
      var computersMove = (Math.random()*10).toFixed();
      var move = $('#'+computersMove).text();

      if (move === '#'){
        $('#'+computersMove).text(computersTurn);
        taken = true;
        turns[computersMove] = computersTurn;
      }
    }

    winCondition();

  };

  function playerTurn(turn, id){

    var spotTaken = $('#'+id).text();

    if (spotTaken === '#'){
      count++;
      turns[id] = turn;
      $('#'+id).text(turn);
      winCondition(turns, turn); // checking board and determining victory

      if(gameOn === false){
        computerTurn();
        winCondition(turns, computersTurn);
      }
    }

  };

  function winCondition(turnArray, currentTurn){
    if (turnArray[0] === currentTurn && turnArray[1] === currentTurn && turnArray[2]=== currentTurn){
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins!");
    }
    else if (turnArray[2] === currentTurn && turnArray[4] === currentTurn && turnArray[6]=== currentTurn){
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins!");
    }
    else if (turnArray[0] === currentTurn && turnArray[3] === currentTurn && turnArray[6]=== currentTurn){
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins!");
    }
    else if (turnArray[0] === currentTurn && turnArray[4] === currentTurn && turnArray[8]=== currentTurn){
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins!");
    }
    else if (turnArray[1] === currentTurn && turnArray[4] === currentTurn && turnArray[7]=== currentTurn){
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins!");
    }
    else if (turnArray[2] === currentTurn && turnArray[5] === currentTurn && turnArray[8]=== currentTurn){
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins!");
    }
    else if (turnArray[3] === currentTurn && turnArray[4] === currentTurn && turnArray[5]=== currentTurn){
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins!");
    }
    else if (turnArray[6] === currentTurn && turnArray[7] === currentTurn && turnArray[8]=== currentTurn){
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins!");
    }

    else {
      gameOn = false;
    }
  };

  $('.tic').click(function(){

    var slot = $(this).attr('id');
    console.log(slot);
    playerTurn(turn,slot);

  });

  function reset(){
    turns = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
    count = 0;
    $('.tic').text('#');
    gameOn = false;
  }

});
