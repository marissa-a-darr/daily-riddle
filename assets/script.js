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

