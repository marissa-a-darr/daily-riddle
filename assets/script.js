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


  /*

  Example URLs to work with:
  Base url:  https://v2.jokeapi.dev/joke/any?format=JSON&type=twopart&safe-mode 
  Any jokes, 10 responses: https://v2.jokeapi.dev/joke/any?format=JSON&type=twopart&safe-mode

  Programming: https://v2.jokeapi.dev/joke/programming?format=JSON&type=twopart&safe-mode 
  add "&amount=2" for more than one joke
  Misc: https://v2.jokeapi.dev/joke/misc?format=JSON&type=twopart&safe-mode
  Pun: https://v2.jokeapi.dev/joke/pun?format=JSON&type=twopart&safe-mode
  Spooky: https://v2.jokeapi.dev/joke/spooky?format=JSON&type=twopart&safe-mode
  Christmas: https://v2.jokeapi.dev/joke/christmas?format=JSON&type=twopart&safe-mode

  */
