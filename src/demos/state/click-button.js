import { useState } from "react";

function ClickButton(){
// Destructuring arrays
// const animals = ["cat", "dog", "dragon"];
// const [animal1, animal2, animal3] = animals;
// console.log(animal1);
// console.log(animal3);

// useState returns back an array that is: [currentValue, setterFunction]
let showButton = false;

const [numClicks, setNumClicks] = useState(0);

const onButtonClick = () => {
    setNumClicks(numClicks + 1);
};

const clicksEmoji = "👆🏽".repeat(numClicks);
// let text = '';
// if (numClicks === 0) text = "You have not clicked yet. Click me!";
// else text = `You've clicked: ${clicksEmoji} ${numClicks}x times`;

const text = 
numClicks === 0 ? "You haven't clicked yet. Click me!" : `You've clicked: ${clicksEmoji}`;

//Setting style from JS is useful for dynamic properties
const buttonStyle = {
width: "5rem", 
minHeight: "10rem",
transform: `rotate(${numClicks * 25}deg`,
transition: "all 0.2s",
};

return <button style={buttonStyle} onClick ={onButtonClick}>{text}</button>;
}

export default ClickButton;