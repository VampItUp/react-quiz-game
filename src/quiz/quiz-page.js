import he from "he";
import {useState, useEffect} from "react";
import Game from "./game";
import LoadingSpinner from "../common/loading-spinner";
import ErrorMessage from "../common/error-message";

function QuizPage(){
    const [quizFetch, setQuizFetch] = useState({
        isLoading: true,
        errorMessage: "Something went wrong, try again later.",
        data: null,
    });
const {isLoading, errorMessage, data} = quizFetch;

useEffect(() => {
    async function getQuiz() {
        
        try {
            console.log("Fetching");
            const url = "https://opentdb.com/api.php?amount=5&type=multiple";
            const response = await fetch(url);

            if (!response.ok){
                throw new Error(`Something went wrong, server responded with ${response.status}.`);
            }
            const json = await response.json();
            const {response_code, results} = json;


            if (response_code === 1){
                throw new Error("Bad API request - no results.");
            } else if (response_code === 2){
                throw new Error("Bad API request - invalid parameter.");
            }

           const decodedResults = results.map((item) => {
                return{
                  ...item,
                  question: he.decode(item.question),
                  difficulty: he.decode(item.difficulty),
                  correct_answer: he.decode(item.correct_answer),
                  incorrect_answers: item.incorrect_answers.map(incorrect => he.decode(incorrect))
                }
              });

            setQuizFetch({
                isLoading:false,
                errorMessage: "",
                data: decodedResults,
            });
        } catch (err){
            setQuizFetch({
                isLoading: false,
                errorMessage: "Something went wrong, try again later.",
                data: null,
            });
            console.error(err);
        }
        
    }
    getQuiz();
}, []);

let contents;
    if (isLoading) contents = <LoadingSpinner />;
    else if (errorMessage !== "") contents = <ErrorMessage>{errorMessage}</ErrorMessage>
    else contents = <Game triviaData = {data}/>;

    return <main>
        {contents}
    </main>

}


export default QuizPage;