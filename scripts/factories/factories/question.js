function questionFactory(questionsData) {
    const {question} = questionsData;

    function getQuestionCardDOM() {
        const questionStates = document.createElement('p');
        questionStates.classList.add('question-states');
        questionStates.textContent = `${question}`;

        return (questionStates);
    }
    return {getQuestionCardDOM};
}

function displayAnswersList(answers) {
    const answersList = document.getElementById('answers');
    answers.forEach((answer) => {
        const listElement = document.createElement('li');
        listElement.classList.add('answers');
        listElement.textContent = `${answer}`;

        answersList.appendChild(listElement);
    })
}
   
