import { useState } from "react";
import Confetti from "react-confetti";

function ConfettiDemo(){

const [isRunning, setIsRunning] = useState(false);
const [numParticles, setNumParticles] = useState(200);
const [wind, setWind] = useState(0);
const [gravity, setGravity] = useState(0.2);

const toggleConfetti = () => setIsRunning(!isRunning);
const onParticleChange = (e) =>{
    const newNumParticles = parseInt(e.target.value, 10);
    setNumParticles(newNumParticles);
}
const onWindChange = (e) => setWind(parseFloat(e.target.value));
const onGravityChange = (e) => setGravity(parseFloat(e.target.value));

const buttonText = isRunning ? "Turn Confetti Off" : "Turn Confetti On";

    return( 
    <div>
        <div>
            <label htmlFor="num-particles">Num Particles:</label>
            <input id = "num-particles" type="range" min = "1" max = "3000" step="1" value={numParticles} onChange={onParticleChange}/>
        </div>
        <div>
            <label htmlFor="wind">Wind:</label>
            <input id = "wind" type="range" min = "-1" max = "1" step="0.1" value={wind} onChange={onWindChange}/>
        </div>
        <div>
            <label htmlFor="gravity">Gravity:</label>
            <input id = "gravity" type="range" min = "0" max = "1" step="0.1" value={gravity} onChange={onGravityChange}/>
        </div>
        <div>
            <button onClick = {toggleConfetti}>{buttonText}</button>
        </div>
        <Confetti colors ={["#3c1361","#52307c","#663a82"]} confettiSource={{x: window.innerWidth / 2, y: window.innerHeight / 2, w: 0, h: 0}}numberOfPieces={numParticles} gravity={gravity} wind={wind} run={isRunning}/>
    </div>
    );
}

export default ConfettiDemo;