var spaceBackground = $("html");

var currentDate = moment().format("YYYY-MM-DD");

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

function getJoke(keyword) {
  var getJokeAPI =
    "https://v2.jokeapi.dev/joke/"


  if(document.getElementById("searchInput").value && document.getElementById("format-input").value != "default") {
    getJokeAPI += document.getElementById("format-input").value + "?format=JSON&type=twopart&safe-mode&contains=" + (document.getElementById("searchInput").value);
  } else if (document.getElementById("searchInput").value) {
    getJokeAPI += "Any?format=JSON&type=twopart&safe-mode&contains=" + (document.getElementById("searchInput").value);
  } else if (document.getElementById("format-input").value != "default") {
    getJokeAPI += document.getElementById("format-input").value + "?format=JSON&type=twopart&safe-mode";
  } else {
    getJokeAPI += "Any?format=JSON&type=twopart&safe-mode";
  }
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
        console.log(data);}}
    )};

var btn = $("#submitBtn");
btn.click(function (e) {
  e.preventDefault();
  var userKeyword = $(".userSearch").val().toString();
  getJoke(userKeyword);
  $(".jokeSetup").text("");
  $(".jokePunch").text("");
  $(".errorMess").text("");
});


