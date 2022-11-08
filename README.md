# daily-riddle
Title: Tricky Riddle
CSS Framework: Skeleton
API: 1: (NASA) https://api.nasa.gov/planetary/apod?api_key=MMwg7IaYRbJGBkex5zb11KD8duZsipA3IO0JU1Gm&date=2022-11-06
2: (Riddles) https://api-ninjas.com/api/riddles

AS A user
I WANT to play a daily riddle game with a daily photo of NASA's space criteria

GIVEN the user wants to play a daily riddle game
WHEN I visit the webpage
THEN I am presented with daily riddle with a text input box to guess with a background photo of the NASA space photo
WHEN I click into the user input box to enter my answer attempt
THEN I am able to use the submit button for my attempt
WHEN I guess incorrect
THEN the page notifies me how many more attempts I have (with a total of 3 attempts)
WHEN I answer correctly, the webpage notifies me that I am correct

Division of Work:
Grabbing NASA photos and setting as background [Chang]
Grabbing riddle with answer [Nicole]
Building out HTML [Eliot/Nicole]
Skeleton CSS [Eliot/Chang]
JS: - creating modal/functionality of button [Marissa]
functionality of localstorage/attempts [Marissa]
