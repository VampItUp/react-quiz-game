import castleImage from "../images/castle.jpg";
import "./about-page.css"

function AboutPage(){
    return (
    <main>
        <img src= {castleImage} width = "500" />
       <h1>About Me</h1>

       <h2>Ray Martin</h2>
       <p><em>Currently learning: </em>HTML.</p>

       <p>Hobbies</p>
        <ul class="emoji-list">
            <li>Drawing</li>
            <li>Playing Video Games</li>
        </ul>
        <p>Programming Languages I will be learning:</p>
        <ul class = "emoji-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>TS</li>
            <li>React</li>
        </ul>
        <p>An app I use daily is <a href="https://twitter.com" target ="_blank" title="Social Media App">Twitter </a>
        and also <a href="https://store.steampowered.com/" target ="_self" title ="For playing games">Steam</a></p>
    </main>
        

);
    }

export default AboutPage;