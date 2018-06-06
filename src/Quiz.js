import React, { Component } from "react";

import QuizEnd from "./QuizEnd";
import QuizQuestion from "./QuizQuestion.js";

let quizData = require('./quiz_data.json');

class Quiz extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { quiz_position: 1 };
    }
   

    render()
    {
        const isQuizEnd = this.state.quiz_position - 1 == quizData.quiz_questions.length;
        //const isQuizEnd = false;
        return (<div>
                { isQuizEnd ?
                    <QuizEnd resetClickHandler={this.handleResetClick.bind()}/> : 
                <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}
                    showNextQuestionHandler={this.showNextQuestion.bind(this)}
                    resetClickHandler={this.handleResetClick.bind(this)}/>}
                </div>
                
            );
    }

    showNextQuestion() {
        this.setState({quiz_position: this.state.quiz_position + 1});
    }

    handleResetClick() {
        this.setState({quiz_position:1});
    }
}

export default Quiz;
