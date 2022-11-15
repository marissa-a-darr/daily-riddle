var spaceBackground = $("html");

var currentDate = moment().format("YYYY-MM-DD");
// console.log(currentDate);

fetch(
  "https://api.nasa.gov/planetary/apod?api_key=MMwg7IaYRbJGBkex5zb11KD8duZsipA3IO0JU1Gm&"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.url);
    apiBackground = data.url;
    // console.log(apiBackground);
    document.body.style.backgroundImage =
      "url(" + apiBackground + ") ";
  });

function getJoke(keyword) {
  var getJokeAPI =
    "https://v2.jokeapi.dev/joke/Any?format=JSON&type=twopart&safe-mode&contains=" +
    keyword;
  console.log(getJokeAPI);
  fetch(getJokeAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.error) {
        $(".errorMess").text(data.message);
      } else {
        $(".jokeSetup").text(data.setup);
        $(".jokePunch").text(data.delivery);
        console.log(data);

        var programmingUrl =
          "https://v2.jokeapi.dev/joke/programming?format=JSON&type=twopart&safe-mode";
        var formatInputVal = document.querySelector("#format-input").value;

        function userWantsProgramming() {
          if (formatInputVal === "Programming") {
            fetch(programmingUrl)
              .then(function (response) {
                return response.json();
              })
              .then(function (data) {
                $(".jokeSetup").text(data.setup);
                $(".jokePunch").text(data.delivery);
              });
          }
        }
      }
    });
}
//possible function to pass if no joke is found
function getAnyJoke() {
  fetch(
    "https://v2.jokeapi.dev/joke/any?format=JSON&type=twopart&safe-mode"
  ).then(function (data) {
    $(".jokeSetup").text(data.setup);
    $(".jokePunch").text(data.delivery);
  });
}

var btn = $("#submitBtn");
btn.click(function (e) {
  e.preventDefault();
  var userKeyword = $(".userSearch").val().toString();
  getJoke(userKeyword);
});

// // else if statements that can be consolidated

//1//
// var programmingUrl =
//   "https://v2.jokeapi.dev/joke/programming?format=JSON&type=twopart&safe-mode";
// var formatInputVal = document.querySelector("#format-input").value;

// function userWantsProgramming() {
//   if (formatInputVal === "Programming") {
//     fetch(programmingUrl)
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         $(".jokeSetup").text(data.setup);
//         $(".jokePunch").text(data.delivery);
//       });
//   }
// }
//2//
// var anyjokesUrl = "https://v2.jokeapi.dev/joke/any?format=JSON&type=twopart&safe-mode"
// var formatInputVal = document.querySelector('#format-input').value;

// function userWantsAnyjokes () {
//   if (formatInputVal==="Anyjokes") {
//       fetch(anyjokesUrl)
//       .then(function(response){
//           return response.json();
//       })
//       .then(function (data) {
//           $(".jokeSetup").text(data.setup);
//           $(".jokePunch").text(data.delivery);
//       })
// }
//3//
// var MiscUrl = "https://v2.jokeapi.dev/joke/misc?format=JSON&type=twopart&safe-mode"
// var formatInputVal = document.querySelector('#format-input').value;

// function userWantsMisc () {
//   if (formatInputVal==="Misc") {
//       fetch(miscUrl)
//       .then(function(response){
//           return response.json();
//       })
//       .then(function (data) {
//           $(".jokeSetup").text(data.setup);
//           $(".jokePunch").text(data.delivery);
//       })
// }

// }
//4//
// var punUrl = "https://v2.jokeapi.dev/joke/pun?format=JSON&type=twopart&safe-mode"
// var formatInputVal = document.querySelector('#format-input').value;

// function userWantsPun () {
// if (formatInputVal==="Pun") {
//     fetch(punUrl)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function (data) {
//         $(".jokeSetUp").text(data.setup);
//         $(".jokePunch").text(data.delivery);
//     })
// }
// }

// // joke type: spooky
// var spookyUrl = "https://v2.jokeapi.dev/joke/spooky?format=JSON&type=twopart&safe-mode"
// var formatInputVal = document.querySelector('#format-input').value;

// function userWantsSpooky () {
// if (formatInputVal==="Spooky") {
//     fetch(spookyUrl)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function (data) {
//         $(".jokeSetUp").text(data.setup);
//         $(".jokePunch").text(data.delivery);
//     })
// }
// }

// // joke type: Christmas
// var christmasUrl = "https://v2.jokeapi.dev/joke/christmas?format=JSON&type=twopart&safe-mode"
// var formatInputVal = document.querySelector('#format-input').value;

// function userWantsChristmas () {
// if (formatInputVal==="Christmas") {
//     fetch(christmasUrl)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function (data) {
//         $(".jokeSetUp").text(data.setup);
//         $(".jokePunch").text(data.delivery);
//     })
// }
// }

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
