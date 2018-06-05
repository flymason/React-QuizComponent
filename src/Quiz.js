import * as React from "react";

let quizData = require('./quiz_data.json');

class Quiz extends React.Component
{
    Quiz(props)
    {
        this.super(props);
        this.state = { quiz_position: 1 };
    }

    render()
    {
        return (<div><div className="QuizQuestion">{quizData.quiz_questions[0].instruction_text}</div> </div>);
    }
}


export default Quiz;
