var spaceBackground = $("html");
//grabs current date to be used in daily photo
var currentDate = moment().format("YYYY-MM-DD");
//daily nasa photo api fetch and setting it as background image
fetch(
  "https://api.nasa.gov/planetary/apod?api_key=MMwg7IaYRbJGBkex5zb11KD8duZsipA3IO0JU1Gm&"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    apiBackground = data.url;
    document.body.style.backgroundImage =
      "url(" + apiBackground + ") ";
  });
//gets joke from api
function getJoke() {
  //core of api link to be built off of
  var getJokeAPI =
    "https://v2.jokeapi.dev/joke/"

//user searches with keyword and format. edit api link to fit parameter guide line
  if(document.getElementById("searchInput").value && document.getElementById("format-input").value != "default") {
    getJokeAPI += document.getElementById("format-input").value + "?format=JSON&type=twopart&safe-mode&contains=" + (document.getElementById("searchInput").value);
  //user searches for keyword only. edits api link to fit guide line
  } else if (document.getElementById("searchInput").value) {
    getJokeAPI += "Any?format=JSON&type=twopart&safe-mode&contains=" + (document.getElementById("searchInput").value);
  //user searches for joke by format type only. edits api link to fit guide line
  } else if (document.getElementById("format-input").value != "default") {
    getJokeAPI += document.getElementById("format-input").value + "?format=JSON&type=twopart&safe-mode";
  //user searches with no parameters at all. edits api link to fit
  } else {
    getJokeAPI += "Any?format=JSON&type=twopart&safe-mode";
  }
  console.log(getJokeAPI);
//once the link is built based off of user parameters returns it to us json format to be used
  fetch(getJokeAPI)
    .then(function (response) {
      return response.json();
    })
    //displays error message if no joke it found
    .then(function (data) {
      if (data.error) {
        $(".errorMess").text(data.message);
        //applies the api's joke set up and delivery to our html elements
      } else {
        $(".jokeSetup").text(data.setup);
        $(".jokePunch").text(data.delivery);
        console.log(data);}}
    )};
//user clicks button, prevents from page reloading
var btn = $("#submitBtn");
btn.click(function (e) {
  e.preventDefault();
  //calls getJoke function, clears out old joke/punchline/error message upon searching to display only new search
  getJoke();
  $(".jokeSetup").text("");
  $(".jokePunch").text("");
  $(".errorMess").text("");
});


