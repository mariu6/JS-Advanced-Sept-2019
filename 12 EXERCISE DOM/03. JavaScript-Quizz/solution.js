function solve() {
  let correctAnswers = 0;
  let tempIndex = 0;

  Array.from(document.querySelectorAll('.answer-text'))                // селектираме всички бутони по '.quiz-answer' и ни връща колекция, която спредваме с Array.from, защото judge не разбира от [... ]
    .map(x => x.addEventListener('click', function nextQuestion(e) {  // мапваме колекцията и слушаме при всяко избиране (натискане на бутон с този клас) проверяваме 

      if (e.target.innerText === "onclick" || e.target.innerText === "JSON.stringify()" || e.target.innerText === "A programming API for HTML and XML documents") { // дали е кликнато на правилния отговор 
        correctAnswers++;
        // console.log(e.target.innerText);
      }

      let currentSelection = document.querySelectorAll('section')[tempIndex];     // избирам текущата секция 
      currentSelection.style.display = 'none';        // и я скривам
      currentSelection.classList.add('hidden');       // 

      let nextSelection = document.querySelectorAll('section')[tempIndex + 1];   // избирам следващата секция (мап луупваме все пак)

      if (nextSelection) {                   //  ако съществува следваща секция (проверка за след последната секция)
        nextSelection.classList.remove('hidden');       // и я показвам
        nextSelection.style.display = 'block';          //    
      } else {                    // ако са свършили въпросите, е ред на резултатите:
        showResult(correctAnswers);
      }

      tempIndex++;                                   //увеличавам си брояча
    }));

  function showResult(correctAnswers) {
    document.querySelector("#results").style.display = 'block';                   // защото по подразбиране е hidden
    if (correctAnswers === 3) {
      document.querySelector("#results > li > h1").innerText = "You are recognized as top JavaScript fan!";
    } else {
      document.querySelector("#results > li > h1").innerText = `You have ${correctAnswers} right answers`;
    }
  }
}



// document.body.innerHTML = `
//  <div id="quizzie">
//         <h1>JavaScript Quiz</h1>

//         <section>
//             <ul class="quiz-step step1 current">
//                 <li class="question">
//                     <div class="question-wrap">
//                         <h2>Question #1: Which event occurs when the user clicks on an HTML element?</h2>
//                     </div>
//                 </li>
//                 <li class="quiz-answer low-value" data-quizIndex="2">
//                     <div class="answer-wrap">
//                         <p class="answer-text">onclick</p>
//                     </div>
//                 </li>
//                 <li class="quiz-answer high-value" data-quizIndex="4">
//                     <div class="answer-wrap">
//                         <p class="answer-text">onmouseclick</p>
//                     </div>
//                 </li>
//             </ul>
//         </section>
//         <section class="hidden">
//             <ul class="quiz-step step1 current">
//                 <li class="question">
//                     <div class="question-wrap">
//                         <h2>Question #2: Which function converting JSON to string?</h2>
//                     </div>
//                 </li>
//                 <li class="quiz-answer low-value" data-quizIndex="2">
//                     <div class="answer-wrap">
//                         <p class="answer-text">JSON.toString()</p>
//                     </div>
//                 </li>
//                 <li class="quiz-answer high-value" data-quizIndex="4">
//                     <div class="answer-wrap">
//                         <p class="answer-text">JSON.stringify()</p>
//                     </div>
//                 </li>
//             </ul>
//         </section>
//         <section class="hidden">
//             <ul class="quiz-step step1 current">
//                 <li class="question">
//                     <div class="question-wrap">
//                         <h2>Question #3: What is DOM?</h2>
//                     </div>
//                 </li>
//                 <li class="quiz-answer low-value" data-quizIndex="2">
//                     <div class="answer-wrap">
//                         <p class="answer-text">A programming API for HTML and XML documents</p>
//                     </div>
//                 </li>
//                 <li class="quiz-answer high-value" data-quizIndex="4">
//                     <div class="answer-wrap">
//                         <p class="answer-text">The DOM is your source HTML</p>
//                     </div>
//                 </li>
//             </ul>
//         </section>
//         <ul id="results">
//             <li class="results-inner">
//                 <h1></h1>
//             </li>
//         </ul>
//     </div>
//     </main>
//     </div>
// `;

// result();

// let sections = document.getElementsByTagName('section');

// assert.equal(sections[0].style.display, '', 'First section has invalid display');
// assert.equal(sections[1].style.display, '', 'Second section has invalid display');
// assert.equal(sections[2].style.display, '', 'Third section has invalid display');

// sections[0].querySelectorAll('.answer-text')[0].click();

// assert.equal(sections[0].style.display, 'none', 'First section has invalid display');
// assert.equal(sections[1].style.display, 'block', 'Second section has invalid display');
// assert.equal(sections[2].style.display, '', 'Third section has invalid display');
