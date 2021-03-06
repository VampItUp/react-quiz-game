import { useState, useEffect } from "react";
import LoadingSpinner from "../common/loading-spinner";
import ErrorMessage from "../common/error-message";

async function fetchJson(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Something went wrong, server responded with ${response.status}.`
    );
  }
  const json = await response.json();
  return json;
}

function DogListing({ dogImages }) {
  return (
    <div>
      {dogImages.map((img) => (
        <img key={img} src={img} width={300} />
      ))}
    </div>
  );
}

async function getDog(numDogs) {
  try {
    const params = new URLSearchParams({ message });
    const url = `https://dog.ceo/api/breeds/image/random/${params.toString()}`;

    const json = await fetchJson(url);
    const { message, status } = json;

    if (status !== "success") {
      throw new Error(`Something went wrong, response status was ${status}.`);
    }

    return message;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

function RandomDogs(message = "7") {
  const [dogFetch, setDogFetch] = useState({
    isLoading: true,
    errorMessage: "",
    data: null,
  });
  const [numDogs, setNumDogs] = getDog(7);

  useEffect(() => {
    async function fetchDog() {
      setDogFetch({
        isLoading: true,
        errorMessage: "",
        data: null,
      });

      try {
        const images = await getDog(numDogs);
        setDogFetch({
          isLoading: false,
          errorMessage: "",
          data: images,
        });
      } catch (err) {
        setDogFetch({
          isLoading: false,
          errorMessage: "Something went wrong. Please try again later.",
          data: null,
        });
      }
    }
    fetchDog();
  }, [numDogs]);

  const { isLoading, errorMessage, data } = dogFetch;
  return [isLoading, errorMessage, data, numDogs];
  let contents;
  if (isLoading) {
    contents = <LoadingSpinner />;
  } else if (errorMessage !== "") {
    contents = <ErrorMessage>{errorMessage}</ErrorMessage>;
  } else {
    contents = <DogListing dogImages={data} />;
  }
  return <main>{contents}</main>;
}

export default RandomDogs;
