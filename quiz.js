const answersBox = document.querySelectorAll('.answer-box');
const answers = document.querySelectorAll('.answer');
const quizAnswersWrap = document.querySelectorAll('.quiz-answers-wrap');
const quiz = document.querySelector('.quiz');
const quizAnswers = document.querySelector('.quiz-answers');

answers.forEach(answer=>{
    answer.addEventListener('dragstart',e=>{
        console.log(e.target);
        e.dataTransfer.setData('text/plain', e.target.id);
    })
})

answersBox.forEach(answerBox=>{
    answerBox.addEventListener('dragenter',e=>{
        e.preventDefault();
        e.target.classList.add('bgHover');
    })
    answerBox.addEventListener('dragover',e=>{
        e.preventDefault();
        e.target.classList.add('bgHover');
    })
    answerBox.addEventListener('dragleave',e=>{
        e.target.classList.remove('bgHover');
    })
    answerBox.addEventListener('drop',e=>{
        e.target.classList.remove('bgHover');
        

        // get the draggable element
        const id = e.dataTransfer.getData('text/plain');
        const draggable = document.getElementById(id);
        draggable.classList.add('blueBorder');
        draggable.classList.add('boxDropped');

        e.target.appendChild(draggable);
        // display the draggable element
        draggable.classList.remove('hide');
    })
})

quizAnswers.addEventListener('dragenter',e=>{
    e.preventDefault();
    console.log('quizAnswers dragenter')
    e.target.classList.add('bgHover');
})
quizAnswers.addEventListener('dragover',e=>{
    e.preventDefault();
    e.target.classList.add('bgHover');
})
quizAnswers.addEventListener('dragleave',e=>{
    e.target.classList.remove('bgHover');
})
quizAnswers.addEventListener('drop',e=>{
    e.target.classList.remove('bgHover');
    

    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);
    draggable.classList.remove('blueBorder');
    draggable.classList.remove('boxDropped');

    e.target.appendChild(draggable);

    // display the draggable element
    draggable.classList.remove('hide');
})



