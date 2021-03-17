import { useState } from "react";
import EndScreen from "./end-screen";
import Stats from "./stats";
import TriviaItem from "./trivia-item";
import triviaData from "./trivia-data";

function Game({ triviaData}) {
const [gameState, setGameState] = useState({
    score: 0,
    triviaIndex: 0,
    isGameOver: false,
});

const { score, triviaIndex, isGameOver, difficulty} = gameState;
const questionNumber = triviaIndex + 1;
const numQuestions = triviaData.length;



const restartGame = () => {
    setGameState({
        score: 0,
        triviaIndex: 0,
        isGameOver: false
    });
};

const loadNextQuestion = () =>{
    if (triviaIndex >= triviaData.length-1){
        setGameState({...gameState, isGameOver: true});
    } else {
        setGameState({
            ...gameState,
            triviaIndex: triviaIndex + 1
        });
    }
    
};

const onAnswerSelected = (wasPlayerCorrect) =>{
    if (wasPlayerCorrect && triviaData.difficulty === "hard"){
        setGameState({
            ...gameState,
            score: score + 3,
        });
    } else if (wasPlayerCorrect && triviaData.difficulty === "medium"){
        setGameState({
            ...gameState,
            score: score + 2,
        });
    } else {
        setGameState({
            ...gameState,
            score: score + 1,
        });
    }
};

let pageContent;

if (isGameOver){
    pageContent = <EndScreen score={score} bestScore ={0} onRetryClick={restartGame}/>;
} else{
const triviaQuestion = triviaData[triviaIndex];
const {correct_answer, incorrect_answers, question, difficulty} = triviaQuestion;
pageContent = <TriviaItem 
key={triviaIndex} 
question = {question} 
difficulty = {difficulty}
correctAnswer={correct_answer} 
incorrectAnswer={incorrect_answers} 
onNextClick={loadNextQuestion} 
onAnswerSelected = {onAnswerSelected}/>;
}

    return (
        <>
            <Stats score = {score}  questionNumber = {questionNumber} totalQuestions = {numQuestions}/>
            {pageContent}
            
        </>
    );
}

export default Game;