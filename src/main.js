import _ from 'lodash';
import Splide from '@splidejs/splide';
import '@shoelace-style/shoelace/dist/shoelace';
import '@shoelace-style/shoelace/dist/components/drawer/drawer.js';


/*------Sticky Navigation------*/
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}



/*--------Creating Modal images for How Water sustains nature Collage-------*/

  //Get Overlay
    var overlay = document.querySelectorAll(".collageOverlay");

  //Get image. 
    var collageImg = document.querySelectorAll(".ws-collagePic");

  //Get overlay to be active on clicking on image
    Array.from(collageImg).forEach(function(collageImgArray, i) {
      collageImgArray.addEventListener('click',  function() {
        overlay[i].style.display = "block";
      });
    });
  //Get icon button (x) that closes Overlay
    var overlayClose = document.querySelectorAll(".overlay-CloseBtn");

  // When the user clicks on icon button (x), close the overlay
    Array.from(overlayClose).forEach(function(overlayCloseArray, i) {
      overlayCloseArray.addEventListener('click', function() {
        overlay[i].style.display = "none";
      });
    });



/*--------Setting up Slider for Uses of Water --------*/
var slideWaterUses = new Splide('#slide_waterUses', {
  type   : 'fade',
  perPage: 1,
  padding: 0,
  rewind: true,
  heightRatio: 0.4,
  drag: true,
  cover: true,
} )

document.addEventListener( 'DOMContentLoaded', function () {
  slideWaterUses.mount();
} );

/*--------Setting up Slider for Water Available --------*/
var slidesWaterAvail = new Splide('#slider-waterAvail', {
  type   : 'fade',
  perPage: 1,
  padding: 0,
  rewind: true,
  heightRatio: 0.4,
  drag: true,  
  cover: true,
} ).mount();

document.addEventListener( 'DOMContentLoaded', function () {
  slidesWaterAvail.mount();
} );


/*Getting Quiz Sheet------*/
var quizForm = document.getElementById('qnForm');

/*Getting the Quiz Questions------*/

  var question = document.getElementById('qn');
  var quizSet = document.querySelectorAll('.qnOptions');
  var choiceA = document.getElementById('choiceA');
  var choiceB = document.getElementById('choiceB');
  var choiceC = document.getElementById('choiceC');
  var choiceD = document.getElementById('choiceD');
/*Getting the Submit Answer Btn------*/
  var ansBtn = document.getElementById('ansSub');
/*Getting the Quiz Question Sets------*/
  

  /* Putting Quiz Questions in------*/
  var defQuestions = [
    {
            question : "How many National Water Taps do we have?",
            choiceA : "4",
            choiceB : "7",
            choiceC : "6",
            choiceD : "9",
            answer : "4",
    },
    {
            question : "NEWater is one of our National water taps. At maximum operating capacity, How much of our water supply can it provide now?",
            choiceA : "39%",
            choiceB : "40%",
            choiceC : "55%",
            choiceD : "77%",
            answer : "40%",

    },
    {
            question : "To help us remember its saving water tips, PUB uses the mnemonic W-A-T-E-R. Which one of these is wrongly labelled?",
            choiceA : "WASH clothes on full load.",
            choiceB : "ALWAYS use half-flush when possible.",
            choiceC : "TURN off shower when soaping.",
            choiceD : "ENSURE that you use a cup for rinsing after brushing your teeth.",
            answer : "ENSURE that you use a cup for rinsing after brushing your teeth.",

    },
    {
            question : "By doing our part, how much can we reduce our water consumption per person to by 2030?",
            choiceA : "135 litres",
            choiceB : "130 litres",
            choiceC : "140 litres",
            choiceD : "121 litres",
            answer : "130 litres",

    }
  ];

  
  let quesIndex;

  function renderQuestion() {
    let q = defQuestions[quesIndex];
    question.innerHTML = q.question;
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    
  }

  function populateQuestion() {
        renderQuestion();
        quesIndex += 1;
        
      }

/*Progress Bar----------*/
const progressBar = document.getElementById('waterSupply-quizProgress');
let progress = progressBar.percentage;
      /*Setting Progress Bar for Quiz------*/
      function progressInitial(){
        quesIndex = 0;
        progressStart = 0; 
        progress = progressStart;
        progressBar.textContent = `${progressStart}%`;
      }

/*Accessing Quiz-----*/
/*------Getting switch-----*/
var quizSwitch = document.getElementById('quizShow');
    /* Create Activator to show Quiz question sheet-------*/
      quizSwitch.addEventListener("sl-change", function() {
        if (quizSwitch.checked === true) {
          progressInitial();
          quizForm.style.display = "block";
          populateQuestion();
        }
        
      });

    /* Create Activator to let Answer Button be clickable on Answer selected.----*/
      Array.from(quizSet).forEach(function (quizSetArray) {
        quizSetArray.addEventListener("click", function() {
          if (quizSet.checked = true) {
            ansBtn.disabled = false;
          }
          
        });
      });
      /* End Quiz Tasks--------*/
      /*Render Dialogue box------*/
      var dialog = document.getElementById('dialog-overview');
      var endQuiz = document.getElementById('getResults');
      var restart = document.getElementById('returnSender');

      restart.addEventListener('click', function() {
        progressInitial();
        populateQuestion();
        dialog.hide();
      });

      endQuiz.addEventListener('click', () => dialog.hide());
      /*-------END Render Dialogue box-------*/

      /*Create Activator to shift to next Question on click of button.-----*/
      const maxPercent = 100;
      const qnNum = defQuestions.length;
      const qnPercentage = maxPercent/qnNum;
      
  
  

      ansBtn.addEventListener("click", function() {
        if (progress < ((maxPercent/qnNum)*(qnNum - 1)) ){
          progress = Math.min(100, progress + qnPercentage);
          progressBar.percentage = progress;
          progressBar.textContent = `${progress}%`;
          populateQuestion(); 
          ansBtn.disabled = true;
          quizSet.checked = false;
          quizSet.innerHTML += "<sl-radio name='option' class=" + qnOptions +"></sl-radio>"
          
        } else {
          progressNew = maxPercent;
          progressBar.percentage = progressNew;
          progressBar.textContent = `${progressNew}%`;
          dialog.show();
        }
          
          
           
      });
