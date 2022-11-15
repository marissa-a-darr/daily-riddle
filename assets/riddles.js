// else if statements 
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  var ProgrammingUrl =  https://v2.jokeapi.dev/joke/programming?format=JSON&type=twopart&safe-mode
  var formatInputVal = document.querySelector('#format-input').value;

  function userWantsProgramming () {
    if (formatInputVal==="Programming") {
        fetch(programmingUrl)
        .then(function(response){
            return response.json();
        })
        .then(function (data) {
            $(".jokeSetUp").text
            $(".jokePunch").text
        })        
  }



  var AnyjokesUrl = https://v2.jokeapi.dev/joke/any?format=JSON&type=twopart&safe-mode
  var formatInputVal = document.querySelector('#format-input').value;

  function userWantsAnyjokes () {
    if (formatInputVal==="Anyjokes") {
        fetch(anyjokesUrl)
        .then(function(response){
            return response.json();
        })
        .then(function (data) {
            $(".jokeSetUp").text
            $(".jokePunch").text
        })        
  }

  var MiscUrl = https://v2.jokeapi.dev/joke/misc?format=JSON&type=twopart&safe-mode
  var formatInputVal = document.querySelector('#format-input').value;

  function userWantsMisc () {
    if (formatInputVal==="Misc") {
        fetch(miscUrl)
        .then(function(response){
            return response.json();
        })
        .then(function (data) {
            $(".jokeSetUp").text
            $(".jokePunch").text
        })        
  }
    
  }
