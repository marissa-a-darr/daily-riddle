var apiKey = "zD9N5mFUi2w04iTPmyfGTA==pEywnq16I5S1oOLc";

var riddleQuestion = document.getElementById("riddleBox");
//  var userAnswer = document.getElementById('')
var todayDate= moment().format("MM/D/YY")

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
      var todaysRiddle = data[i].question;
      riddleQuestion.textContent = todaysRiddle
    }
    
   localStorage.setItem("todaysRiddle", todayDate);
  });
