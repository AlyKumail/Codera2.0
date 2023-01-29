const answersBox = document.querySelectorAll('.answer-box');
const answers = document.querySelectorAll('.answer');
const quiz = document.querySelector('.quiz');
const quizAnswers = document.querySelector('.quiz-answers');

// quiz.addEventListener('dragenter',e=>{
//     e.preventDefault();
   
// })
// quiz.addEventListener('dragover',e=>{
//     e.preventDefault();
    
// })
// quiz.addEventListener('drop',e=>{
//     // e.target.classList.remove('bgHover');
    

//     // get the draggable element
//     const id = e.dataTransfer.getData('text/plain');
//     const draggable = document.getElementById(id);

//     quizAnswers.appendChild(draggable);

//     // display the draggable element
//     draggable.classList.remove('hide');
// })

answers.forEach(answer=>{
    answer.addEventListener('dragstart',e=>{
        console.log(e.target);
        e.dataTransfer.setData('text/plain', e.target.id);
        setTimeout(() => {
            e.target.classList.add('blueBorder');
            e.target.classList.add('hide');
        }, 0);
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

        e.target.appendChild(draggable);

        // display the draggable element
        draggable.classList.remove('hide');
    })
})


