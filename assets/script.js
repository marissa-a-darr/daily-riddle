
// Code to get a new background image every day from NASA API
var spaceBackground = $('body');

var currentDate = moment().format('YYYY-MM-DD')
// console.log(currentDate);

fetch('https://api.nasa.gov/planetary/apod?api_key=MMwg7IaYRbJGBkex5zb11KD8duZsipA3IO0JU1Gm&')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.url);
    apiBackground = data.url;
    // console.log(apiBackground);
    document.body.style.background = "url(" + apiBackground + ") no-repeat center";


  });


// Code to fetch riddle from a riddle API we found
var apiKey = "zD9N5mFUi2w04iTPmyfGTA==pEywnq16I5S1oOLc";

var riddleQuestion = document.getElementById("riddleBox");
//  var userAnswer = document.getElementById('')

fetch("https://api.api-ninjas.com/v1/riddles", {
  mode: "cors",
  headers: {
    "x-api-key": "zD9N5mFUi2w04iTPmyfGTA==pEywnq16I5S1oOLc",
    "User-Agent": "My-App",
    Accept: "*/*",
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    return data;
  })
  .then(function (data) {
    for (var i = 0; i < data.length; i++) {
      riddleQuestion.textContent = data[i].question;
    }
  });


  // Submit button handler code
  var submitBtn = $("#submitBtn");
    
    function getUserAnswer() {
    var userInputVal = document.querySelector("#userAnswer").value;

    if(!userInputVal) {
      console.error("please enter an answer");
      return;
    }

    console.log(userInputVal);
  }

submitBtn.click(function(event){
  event.preventDefault();
  getUserAnswer();
});