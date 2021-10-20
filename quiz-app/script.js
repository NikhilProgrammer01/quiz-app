const quizData = [
    {
        question: 'how old is Nikhil ?',
        a: '12',
        b: '19',
        c: '28',
        d: '30',
        correct: 'b'
    }, {
        question: 'which is thr best programming language ?',
        a: 'java',
        b: 'javascript',
        c: 'python',
        d: 'c++',
        correct: 'b'
    }, {
        question: 'how old is Nikhil ?',
        a: '12',
        b: '19',
        c: '28',
        d: '30',
        correct: 'b'
    }, {
        question: 'who is the best brother in vampire diaries',
        a: 'stefan',
        b: 'damon',
        c: 'klaus',
        d: 'kol',
        correct: 'a'
    }, {
        question: 'best phone 2021 ?',
        a: 'i phone',
        b: 'nokia',
        c: 'samsung',
        d: 'motorola',
        correct: 'a'
    }

];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');


let currentQuiz = 0;
let score = 0;

loadQuiz();



function loadQuiz() {
    deselectAnswer();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {

    let answer = undefined;

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswer() {
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    });
}


submitBtn.addEventListener("click", () => {
    //check to see the ans
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;



        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at <h2>${score}/${quizData.length} questions.</h2>`
        }

    }


});


