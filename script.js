const 

correct_que = document.querySelector('.correct_que'),

result_page = document.querySelector('.result-page').style








/* 
var correct_ans_arr = ["Bangkok", "France", "Buddhism", "Baht", "Siam", "Myanmar, Laos, Malaysia and Cambodia", "It doesn't matter", "The kingdom of Thailand", "Southeast Asia", "The Elephant"]

function wrong_pick() {
    
 alert('your answer is wrong,move to next question')

}

var correct_point = 0;

function right_pick() {
            correct_point = correct_point + 1;
            correct_que.innerHTML = correct_point;
}

*/

let correct_point = 0;

const questions = [
{
    question: 'Which is the capital of Thailand?',
    answers: [
      'Bangkok',
      'Pattaya',
      'Phuket',
      'chiang mai'
    ],
    correct: 1
},

{
    question: 'Thailand is roughly the same size as which country?',
    answers: [
      'Russia',
      'Belgium',
      'United Kingdom',
      'France'
    ],
    correct: 4
},

{
    question: 'Which is the most popular religion in Thailand?',
    answers: [
      'Hinduism',
      'Islam',
      'Christianity',
      'Buddhism'
    ],
    correct: 4
},

{
    question: 'Which is the currency of Thailand?',
    answers: [
      'Kip',
      'Baht',
      'Rupee',
      'Yen'
    ],
    correct: 2
},

{
    question: 'How was Thailand formerly known?',
    answers: [
      'Atlantis',
      'Formosa',
      'Utopia',
      'Siam'
    ],
    correct: 4
},


{
    question: 'Thailand is bordered by which countries?',
    answers: [
      'Myanmar, China, Malaysia and Cambodia',
      'Vietnam, Myanmar, Malaysia and China',
      'Myanmar, Laos, Malaysia and Cambodia',
      'Vietnam, Laos, Myanmar and Singapore'
    ],
    correct: 3
},

{
    question: 'You will hear the term “Mai Pen Rai” used a lot. What does it mean?',
    answers: [
      'I do not know',
      'I do not care',
      'Good morning',
      'It does not matter'
    ],
    correct: 4
},


{
question: 'What is the official English name for Thailand?',
answers: [
  'The kingdom of Thailand',
  'Thailand Republic',
  'The Country of Thailand',
  'Asian Nirvana'
],
correct: 1
},


{
question: 'Where is Thailand located in Asia?',
answers: [
  'North Asia',
  'South Asia',
  'East Asia',
  'Southeast Asia'
],
correct: 4
},


{
    question: 'What is the official national animal of Thailand?',
    answers: [
      'The Tiger',
      'The Monkey',
      'The Elephant',
      'The King Cobra'
    ],
    correct: 3
    }

  
]


function wrong_pick() {

    
    
    alert('your answer is wrong,move to next question')
   
   }
   





function right_pick() {
    correct_point = correct_point + 1;
    correct_que.innerHTML = correct_point;
}




