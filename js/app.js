'use strict';

// alert('Welcome To My Story');
// var userName = prompt('What is your lovely name? ');


// Declaring functions : 

 var result = 0;


function questions(x) {
     if (x.toLowerCase() === 'y' || x.toLowerCase() === 'yes') {
          // console.log('correct answer,Thank you') ; 
          alert('correct answer, Thank you');
          result++;
     } else if (x.toLowerCase() === 'n' || x.toLowerCase() === 'no') {
          // console.log('Wrong answer') ; 
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


// var cheeks = prompt('Do you think that i have a big cheeks?');
// if (cheeks.toLowerCase() === 'y' || cheeks.toLowerCase() === 'yes') {
//      // console.log('correct answer,Thank you') ; 
//      alert('correct answer, Thank you');
//      result++;
// } else if (cheeks.toLowerCase() === 'n' || cheeks.toLowerCase() === 'no') {
//      // console.log('Wrong answer') ; 
//      alert(' Wrong answer')
// } else {
//      alert('Not Valid Input');
// }



// var tie = prompt('Do you think that i love the color of my tie?');
// if (tie.toLowerCase() === 'y' || tie.toLowerCase() === 'yes') {
//      // console.log('correct answer, Thank you ') ; 
//      alert('correct answer, Thank you');
// } else if (tie.toLowerCase() === 'n' || tie.toLowerCase() === 'no') {
//      // console.log('Wrong answer') ; 
//      alert('Wrong answer')
//      result++;
// } else {
//      alert('Not Valid Input');
// }


// var workout = prompt('Do you think that i workout daily?');
// if (workout.toLowerCase() === 'y' || workout.toLowerCase() === 'yes') {
//      // console.log('correct answer, Thank you ') ; 
//      alert('correct answer, Thank you ');
// } else if (workout.toLowerCase() === 'n' || workout.toLowerCase() === 'no') {
//      // console.log('Wrong answer') ; 
//      alert('Wrong answer')
//      result++;
// } else {
//      alert('Not Valid Input');
// }



// var chocolate = prompt('Do you think that i can stop eating chocolate and shawerma?');
// if (chocolate.toLowerCase() === 'y' || chocolate.toLowerCase() === 'yes') {
//      // console.log('correct answer, Thank you') ; 
//      alert('correct answer, Thank you');
//      result++;
// } else if (chocolate.toLowerCase() === 'n' || chocolate.toLowerCase() === 'no') {
//      // console.log('Wrong answer ') ; 
//      alert('Wrong answer')
// } else {
//      alert('Not Valid Input');
// }


// var sport = prompt('DO you think that i play football and tennis? ');
// if (sport.toLowerCase() === 'y' || sport.toLowerCase() === 'yes') {
//      // console.log('correct answer, Thank you ') ; 
//      alert('correct answer, Thank you');
//      result++;
// } else if (sport.toLowerCase() === 'n' || sport.toLowerCase() === 'no') {
//      // console.log('Wrong answer ') ; 
//      alert('Wrong answer')
// } else {
//      alert('Not Valid Input');
// }

// ***********************************************************************************************************
// var attempt4 = 0;
// var guessNum;
// while (isNaN(guessNum) || guessNum !== 4) {
//      guessNum = parseInt(prompt('How many times did i traveled? you have only four attempts'))


//      if (parseInt(guessNum) > 4) {
//           alert('Too High');
//           attempt4++;
//      } else if (parseInt(guessNum) < 4) {
//           alert('Too Low');
//           attempt4++;

//      } else if (parseInt(guessNum) == 4) {
//           alert('Correct Answer');
//           result++;
//           break;
//      }

//      if (attempt4 == 4) {
//           alert('The correct answer is 4');
//           break;
//      }

// }


// var cities = ['prague', 'vienna', 'budapest'];
// var attempt6;
// var guessCity;
// for (attempt6 = 6; attempt6 >= 1; attempt6--) {
//      guessCity = prompt('I have traveled to 3 cities in the same vacation, Guess one of them ? ');
//      for (var i = 0; i < cities.length; i++) {
//           if (guessCity.toLowerCase() === cities[i]) {
//                // console.log(cities[i]);
//                alert('Your answer ' + guessCity + ' is correct');
//                result++;
//                i = cities.length;
//                attempt6 = 0;
//           }
//      }
// }


// alert('I have traveled to ' + cities + ' in the same vacation');
// alert('Congratulations my friend ' + userName + ' Your result is ' + result);
// alert(`Welcome again ${userName}, have a good day `);




