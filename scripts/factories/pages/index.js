//step 1 : create an empty model
function displayData(questionsListData) {
    const quizContainer = document.getElementById("quiz-container");

    questionsListData.forEach((questionsData) => {
        const questionModel = questionFactory(questionsData); 
        const questionCardDOM = questionModel.getQuestionCardDOM();
        quizContainer.appendChild(questionCardDOM);
    });
}

//step 2 : retrieve the data x insert it into the empty slots
function init() {
    displayData(quizQuestions);/*de questions.js*/
    displayAnswersList(getAllAnswers());

}

//step 3 : start it all
window.onload = init;