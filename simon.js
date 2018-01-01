$(document).ready(function() {
  
  var count = 0;
  //buttons for machine to click
  var arrM =[];
  //buttons player clicked on
  var arrP=[];
  var allBtn = [1, 2, 3, 4];
  
  var btnID = 0;
  var checkResult;
  var btnM = 0;
  var strictMode = 0;
  var colorOrgnl1 = "#228B22";
  var colorOrgnl2 = "#B22222";
  var colorOrgnl3 = "#FFD700";
  var colorOrgnl4 = "#4169E1";
  var colorChgn1 = "#7CFC00";
  var colorChgn2 = "#FF0000";
  var colorChgn3 = "#FFFF00";
  var colorChgn4 = "#0000FF";
  var colorOrgnl="";
  var colorChgn="";
  var checkBtn = "True";
  
  function colorbyID(btnID){
    
     if(btnID==1){
        colorChgn = colorChgn1;
        colorOrgnl = colorOrgnl1;
      }
      
      else if(btnID== 2){
        colorChgn = colorChgn2;
        colorOrgnl = colorOrgnl2;
      }
      
      else if(btnID==3){
        colorChgn = colorChgn3;
        colorOrgnl = colorOrgnl3;
      }
      else {colorChgn = colorChgn4;
           colorOrgnl = colorOrgnl4;}
    
    
  }
  
  //function for increase the number of buttons played
  function increaseBtn(){
    
   var randomBtn = allBtn[Math.floor(Math.random() * allBtn.length)];
   arrM.push(randomBtn);
   //display the count of buttons with a delay
   // setTimeout(function(){
     // $('#countBtn').html("Count: " + arrM.length);
   // }, 500);
   
   console.log('increaseBtn');
  }
  
    //function for machine to activate the buttons
 function machinePlay(){
   console.log('machinePlay');
   console.log(arrM);
   $('#countValue').html(arrM.length);
for (var i = 0; i < arrM.length; i++)
{
  (function(index){
    
    setTimeout(function(){
     
      colorbyID(arrM[index]);
      $('#simonBtn'+ arrM[index]).css('background-color',colorChgn);
       document.getElementById('sound' + arrM[index]).play();
      setTimeout(function(){
        $('#simonBtn'+ arrM[index]).css('background-color',colorOrgnl);
      }, 300);
    }, 2000+1000*index);
  }) (i);
  
}
 }
  //function to check whether player buttons match machine buttons
   function checkPlayer (){
     
    if(arrP.length == arrM.length)
 { for(var i=0; i<arrP.length; i++){
    if(arrP[i]!=arrM[i]){
     checkBtn = "False";
    }
    else {checkBtn = "True";}
  }
     
     if(checkBtn == "False"&&strictMode == 0){
   $('#countValue').html("!!");
  
     setTimeout(function(){
    machinePlay();
    }, 1000);
         
       arrP=[];
     }
  
  else if(checkBtn == "False"&&strictMode == 1){
     $('#countValue').html("!!");
    arrM = [];
    arrP = [];
   increaseBtn();
    setTimeout(function(){
    machinePlay();
    }, 1000);
  }
  
  else if(checkBtn == "True" && arrP.length == 20){
     $('#countValue').html("You won");
    setTimeout(function(){
       arrM = [];
      arrP=[];
   increaseBtn();
    machinePlay();
    }, 2000)
    
  }
     else {
       increaseBtn();
       machinePlay();
       arrP=[];
     }}
     
     console.log(checkBtn);
   }

 
  
  //function to start the game
  $('#startBtn').click(function(){
   arrM = [];
   increaseBtn();
    machinePlay();
  });
  
   $('#strictBtn').click(function(){
     if(strictMode == 0){
       strictMode = 1;
     $('#strictCircle').css("background", "red");
     }
     
    else if(strictMode == 1){
        strictMode = 0;
     $('#strictCircle').css("background", "black");
     }
   
  });
  
   $('#restartBtn').click(function(){
     strictMode = 0;
    $('#strictCircle').css("background", "black");
   arrM = [];
   arrP =[];
   increaseBtn();
     setTimeout(function(){
    machinePlay();
    }, 1000);
  });
 
   function recordPlayer(btnID){
     arrP.push(btnID);
     colorbyID(btnID);
      $('#simonBtn' + btnID).css('background-color',colorChgn);
     document.getElementById('sound' + btnID).play();
      setTimeout(function(){
      $('#simonBtn' + btnID).css('background-color',colorOrgnl);
}, 300);
     checkPlayer();
     
   }
  
  $('#simonBtn1').click(function(){
      recordPlayer(1);
    });
  
  $('#simonBtn2').click(function(){
      recordPlayer(2);
    });
  
  $('#simonBtn3').click(function(){
      recordPlayer(3);
    });
  
  
  $('#simonBtn4').click(function(){
      recordPlayer(4);
    });
  
  
  
  //function to check whether player click correct or not
 
 });