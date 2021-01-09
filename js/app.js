'use strict';

alert('Welcome To My Story');
var userName = prompt('What is your lovely name? ');




var result = 0;


function questions(x) {
     if (x.toLowerCase() === 'y' || x.toLowerCase() === 'yes') {
         
          alert('correct answer, Thank you');
          result++;
     } else if (x.toLowerCase() === 'n' || x.toLowerCase() === 'no') {
           
          alert(' Wrong answer')
     } else {
          alert('Not Valid Input');
     }
}


var cheeks = prompt('Do you think that i have a big cheeks?');
questions(cheeks);

var tie = prompt('Do you think that i love the color of my tie?');
questions(tie);

var workout = prompt('Do you think that i workout daily?');
questions(workout);

var chocolate = prompt('Do you think that i can stop eating chocolate and shawerma?');
questions(chocolate);

var sport = prompt('DO you think that i play football and tennis? ');
questions(sport);


var attempt4 = 0;
var guessNum;

function que6(number) {
     while (isNaN(guessNum) || guessNum !== 4) {
          guessNum = parseInt(prompt(number))


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

}

que6('How many times did i traveled? you have only four attempts')


var cities = ['prague', 'vienna', 'budapest'];
var attempt6;
var guessCity;

function que7(city) {
     
for (attempt6 = 6; attempt6 >= 1; attempt6--) {
     guessCity = prompt(city);
     for (var i = 0; i < cities.length; i++) {
          if (guessCity.toLowerCase() === cities[i]) {
               
               alert('Your answer ' + guessCity + ' is correct');
               result++;
               i = cities.length;
               attempt6 = 0;
          }
     }
}


}

que7('I have traveled to 3 cities in the same vacation, Guess one of them ? ');




alert('I have traveled to ' + cities + ' in the same vacation');
alert('Congratulations my friend ' + userName + ' Your result is ' + result);
alert(`Welcome again ${userName}, have a good day `);




