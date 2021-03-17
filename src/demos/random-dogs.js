import {useState, useEffect} from "react";
import LoadingSpinner from "../common/loading-spinner";
import ErrorMessage from "../common/error-message";

async function getDog(numDogs){
    try{
        const url = `https://dog.ceo/api/breeds/image/random/${numDogs}`;
        const response = await fetch(url)

        if (!response.ok){
            throw new Error(`Something went wrong, server responded with ${response.status}.`);
        }

        const json = await response.json();
        const {message, status} = json;

        if (status !== "success")
        {
            throw new Error(`Something went wrong, response status was ${status}.`);
        }
        return message;
    }catch (err){
        console.error(err);
        throw err;
    }

}

function RandomDogs(){
const [numDogs, setNumDogs] = useState(5);
const[dogFetch, setDogFetch] = useState({
    isLoading: true,
    errorMessage: "",
    data: null,
});
useEffect(() => {
    async function fetchDog(){
        setDogFetch({
            isLoading: true,
            errorMessage: "",
            data: null,
        });

        try{
            const images = await getDog(numDogs);
            setDogFetch({
                isLoading: false,
                errorMessage: "",
                data: images,
            });
        } catch (err){
            setDogFetch({
                isLoading: false,
                errorMessage: "Something went wrong. Please try again later.",
                data: null,
            });
        }
    }
    fetchDog();
}, [numDogs]);

function DogListing({dogImages}){
    return(
        <div>
            {dogImages.map((img) =>(
                <img key ={img} src = {img} width={300} />
            ))}
        </div>
    );
}
const { isLoading, errorMessage, data} = dogFetch;
    let contents;
    if (isLoading){
        contents = <LoadingSpinner />;
    } else if (errorMessage !== ""){
        contents = <ErrorMessage>{errorMessage}</ErrorMessage>;
    }else {
        contents = <DogListing dogImages = {data} />;
    }
    return(
    <main>
        {contents}
    </main>
    )
    

}

export default RandomDogs;