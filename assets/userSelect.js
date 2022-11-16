// joke type: pun
var formatInputVal = document.querySelector('#format-input').value;
var jokeApi = "https://v2.jokeapi.dev/joke/"+ formatInputVal +"?format=JSON&type=twopart&safe-mode"
// console.log(jokeApi);


function userWantsPun () {
if (formatInputVal==="Pun") {
    fetch(punUrl)
    .then(function(response){
        return response.json();
    })
    .then(function (data) {
        $(".jokeSetUp").text(data.setup);
        $(".jokePunch").text(data.delivery);
    })
}
}


// joke type: spooky
var spookyUrl = "https://v2.jokeapi.dev/joke/spooky?format=JSON&type=twopart&safe-mode"
var formatInputVal = document.querySelector('#format-input').value;

function userWantsSpooky () {
if (formatInputVal==="Spooky") {
    fetch(spookyUrl)
    .then(function(response){
        return response.json();
    })
    .then(function (data) {
        $(".jokeSetUp").text(data.setup);
        $(".jokePunch").text(data.delivery);
    })
}
}


// joke type: Christmas
var christmasUrl = "https://v2.jokeapi.dev/joke/christmas?format=JSON&type=twopart&safe-mode"
var formatInputVal = document.querySelector('#format-input').value;

function userWantsChristmas () {
if (formatInputVal==="Christmas") {
    fetch(christmasUrl)
    .then(function(response){
        return response.json();
    })
    .then(function (data) {
        $(".jokeSetUp").text(data.setup);
        $(".jokePunch").text(data.delivery);
    })
}
}


// basic functions

var btn = $("#submitBtn")

function getJoke(event) {
    userWantsChristmas();
    // event.preventDefault
    // first check the search parameters from the user input box and stringify it for the search api
    // then run the search api
    // default error, give the user a result of any search so they at least get a joke (a lot of jokes aren't in the database)

    // Next, handle the joke type from the dropdown list of options: any, misc, programming, pun, spooky, or Christmas.

    // if a user does not enter a search, but does give a type of joke, run that TYPE api giving the user any joke from that list. 

    // these jokes will all be printed to the screen for the user to see
}











btn.click(function (){
getJoke();
});



