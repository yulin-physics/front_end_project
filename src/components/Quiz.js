import React from 'react'
import EachQuizAnswer from './EachQuizAnswer';
import './Quiz.css';

export default function Quiz(props) {
    let eachQuestionComponent = <div>
                                    <h4>{props.questions}</h4>       
                                </div>
    let quizComponents = [];
    let quizAnswerComponents = [];
    quizComponents.push(eachQuestionComponent);
    
    for(let i=0; i < props.setAnswers.length; i++){ 
        let eachAnswer = props.setAnswers[i];
        let quizAnswerComponent = <EachQuizAnswer answer={eachAnswer}/>
        quizAnswerComponents.push(quizAnswerComponent);
    }

    quizComponents.push(<div className='answers'>{quizAnswerComponents}</div>)

    return (
        <div className='quizCard'>
           {quizComponents}
        </div>
    )
}
