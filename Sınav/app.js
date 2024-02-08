
const quizData = [
  {


    question: '"Gözden Geçirmek" deyiminin anlamı aşağıdakilerden hangisidir? ',
    a: 'Dikkatlice İncelemek',
    b: 'Önemsememek',
    c: 'Farkına Varmamak',
    d: 'Şöyle Bir Bakmak',
    e: 'Bakar Gibi Yapmak',
    correct:'a',
},
{
    question: 'Aşağıdaki cümlelerden hangisinde hece düşmesi olmamıştır?',
    a: 'Hiçbiri.',
    b: 'Açlıktan karnım zil çalıyor',
    c: 'Sevinçten ağzı kullaklarına vardı',
    d: 'Düşünce burnu kanamış',
    e: 'Akıl yaşta değil baştadır.',
    correct:'e',
},
{
    question: 'Aşağıdaki kelimeler sözlükteki gibi soralandığında hangisi en sonda yer alır?',
    a: 'Bamya',
    b: 'Banka',
    c: 'Banker',
    d: 'Balta',
    e: 'Batak',
    correct:'c',
},
{
    question: 'Aşağıdaki aletlerden hangisi kalp atışlarının dinlenmesinde kullanılır?',
    a: 'Teleskop',
    b: 'Stetoskop',
    c: 'Projeksiyon',
    d: 'Mikroskop',
    e: 'Dürbün',
    correct:'b',
},
{
    question: 'Aşağıdakilerden hangisini yaparken soluk alırız?',
    a: 'Mumu söndürürken',
    b: 'Flüt çalarken',
    c: 'Balonu şişirirken',
    d: 'Çiçeği koklarken',
    e: 'İp Atlarken',
    correct:'d',
},
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz]

  deselectedAnswers()

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
  e_text.innerText = currentQuizData.e
}

function deselectedAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false))
}

function getSelected() {
  let answer

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })
  return answer
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected()

  //console.log(answer)

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++
    }
    currentQuiz++

    if (currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      quiz.innerHTML = `
      <h2> Test tamamlandı, ${score * 20} puan aldınız🥳 </h2>
      <button class="submit" onClick="location.reload()"> Tekrar Dene 🌀  </button>

    `
    }
  }
})