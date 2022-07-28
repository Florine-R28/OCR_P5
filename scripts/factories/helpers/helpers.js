// three steps: show question, answers and correct answerfunction getAllQuestions() {
//questions 
function getAllQuestions() {
    const questionsList = [];
    quizQuestions.forEach((question) => {
        if (!questionsList.includes(question.question.toLowerCase())){
            questionsList.push(question.question.toLowerCase())
        } 
    })
    return questionsList;
}

// answers
function getAllAnswers() {
    const answersList = [];
    quizQuestions.forEach((answer) => {
        if (!answersList.includes(answer.answer)){
        answersList.push(answer.answer)
        console.log(answer.answer)
        }
    })
    return answersList;
};

//good answers
