'use strict';

alert('Welcome To My Story');
var userName = prompt('What is your lovely name? ');

var result = 0;

var cheeks = prompt('Do you think that i have a big cheeks?');
if (cheeks.toLowerCase() === 'y' || cheeks.toLowerCase() === 'yes') {
     // console.log('correct answer,Thank you for your honesty') ; 
     alert('correct answer, Thank you for your honesty');
     result++;
} else if (cheeks.toLowerCase() === 'n' || cheeks.toLowerCase() === 'no') {
     // console.log('Wrong answer') ; 
     alert(' Wrong answer, I think you have to wear glasses LOL')
} else {
     alert('Not Valid Input');
}



var tie = prompt('Do you think that i love the color of my tie?');
if (tie.toLowerCase() === 'y' || tie.toLowerCase() === 'yes') {
     // console.log('Wrong answer, it's not that beautiful, it was the only one i have LOL ') ; 
     alert('Wrong answer, it is not that beautiful, it was the only one i have LOL');
} else if (tie.toLowerCase() === 'n' || tie.toLowerCase() === 'no') {
     // console.log('Correct answer, Yes i do not love it that much') ; 
     alert('Correct answer, Yes i dont love it that much')
     result++;
} else {
     alert('Not Valid Input');
}


var workout = prompt('Do you think that i workout daily?');
if (workout.toLowerCase() === 'y' || workout.toLowerCase() === 'yes') {
     // console.log('Wrong answer, I am so busy ') ; 
     alert('Wrong answer, I am so busy ');
} else if (workout.toLowerCase() === 'n' || workout.toLowerCase() === 'no') {
     // console.log('Correct answer, you got me') ; 
     alert('Correct answer, you got me')
     result++;
} else {
     alert('Not Valid Input');
}



var chocolate = prompt('Do you think that i can stop eating chocolate and shawerma?');
if (chocolate.toLowerCase() === 'y' || chocolate.toLowerCase() === 'yes') {
     // console.log('Correct answer, yes i can but i do not want to ') ; 
     alert('Correct answer, yes i can but i do not want to');
     result++;
} else if (chocolate.toLowerCase() === 'n' || chocolate.toLowerCase() === 'no') {
     // console.log('Wrong answer, You do not have faith in my will ') ; 
     alert('Wrong answer, You do not have faith in my will')
} else {
     alert('Not Valid Input');
}


var sport = prompt('DO you think that i play football and tennis? ');
if (sport.toLowerCase() === 'y' || sport.toLowerCase() === 'yes') {
     // console.log('Correct answer, yes i play football and tennis once a week ') ; 
     alert('Correct answer, yes i play football and tennis once a week');
     result++;
} else if (sport.toLowerCase() === 'n' || sport.toLowerCase() === 'no') {
     // console.log('Wrong answer, i am so disappointed , you do not have faith in my skills ') ; 
     alert('Wrong answer, i am so disappointed , you do not have faith in my skills')
} else {
     alert('Not Valid Input');
}


var attempt4 = 0;
var guessNum;
while (isNaN(guessNum) || guessNum !== 4) {
     guessNum = parseInt(prompt('How many times did i traveled? you have only four attempts'))


     if (parseInt(guessNum) > 4) {
          alert('Too High');
          attempt4++;
     } else if (parseInt(guessNum) < 4) {
          alert('Too Low');
          attempt4++;

     } else if (parseInt(guessNum) == 4) {
          alert('Correct Answer');
          result++;
          break;
     }

     if (attempt4 == 4) {
          alert('The correct answer is 4');
          break;
     }

}


var cities = ['prague', 'vienna', 'budapest'];
var attempt6;
var guessCity;
for (attempt6 = 6; attempt6 >= 1; attempt6--) {
     guessCity = prompt('I have traveled to 3 cities in the same vacation, Guess one of them ? ');
     for (var i = 0; i < cities.length; i++) {
          if (guessCity.toLowerCase() === cities[i]) {
               // console.log(cities[i]);
               alert('Your answer ' + guessCity + ' is correct');
               result++;
               i = cities.length;
               attempt6 = 0;
          }
     }
}


alert('I have traveled to ' + cities + ' in the same vacation');
alert('Congratulations my friend ' + userName + ' Your result is ' + result);
alert(`Welcome again ${userName}, have a good day `);




