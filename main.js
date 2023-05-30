// global
const question  = document.querySelectorAll(".question");
const bold = document.querySelector(".main__questions");


// apply click to each question
question.forEach(e => e.addEventListener("click", e =>{
    // select question
    let clickedQuestion = e.target.parentNode.childNodes[1];
    // select arrow
    let arrow = e.target.parentElement.childNodes[3];
    // select answer
    let answer = e.target.parentElement.parentElement.childNodes[3];

    // make question bold
    clickedQuestion.classList.toggle("bold");
    // rotate arrow
    arrow.classList.toggle("rotated");
    
    // show answer
    answer.classList.toggle("show");

}),false);

