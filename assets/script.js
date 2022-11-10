var apiKey = "zD9N5mFUi2w04iTPmyfGTA==pEywnq16I5S1oOLc";

var riddleQuestion = document.getElementById("riddle-question");
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
