import ChatMessage from "./props/chat-message";
import SocialPost from "./props/social-post";
import SpeakButton from "./props/speak-button";
import AlertButton from "./props/alert-button";
import WelcomeMessage from "./props/welcome-message";
import ClickButton from "./state/click-button";
import SpeakForm from "./state/speak-form";
import CustomIncrement from "./state/custom-increment";
import MusicalButton from "./dependencies/musical-button";
import ConfettiDemo from "./dependencies/confetti-demo";
import Todos from "./arrays/todos";
import RandomDogs from "./random-dogs";


function DemosPage(){
    return <main>
    
      <h1>My First React App!</h1>

      <h2>Random Dogs</h2>
      <RandomDogs />
      <h2>Rendering Arrays</h2>
        <Todos />

      <h2>Confetti Demo</h2>
      <ConfettiDemo></ConfettiDemo>

      <h2>Tone.js Music</h2>
      <MusicalButton>Play some Beats!</MusicalButton> 

      <h2>Stateful Buttons</h2>
      <ClickButton/>

      <h2>Speak Form</h2>
      <SpeakForm/>

      <h2>Custom Increment</h2>
      <CustomIncrement/>

      <h2>Welcome</h2>
      <WelcomeMessage name="Mike"greeting = "Hello"/>
      <WelcomeMessage name="Bob" greeting = "Howdy"/>
      <WelcomeMessage name="friend" greeting = "Welcome"/>
  
      <h2>Buttons</h2>
        <SpeakButton message="Hello there!" />
        <SpeakButton message="Speedy speed!" rate={3} pitch={2} />
      
        <AlertButton buttonText = "Greeting" alertMessage = "Hello!" />
        <AlertButton alertMessage = "Good evening!" />

      <h2>Chat</h2>
      <ChatMessage message="Yo! How's it going?" userName="Funny Guy" date = "01/01/21"/>
      <ChatMessage message="Could be worse" userName="HorseHouse" date = "01/02/21"/>

      <h2>Social Media</h2>
      <SocialPost content = "Anyone like bread?" userName="BreadLiker666"/>
      <SocialPost content = "Bread's the worst..." userName="BreadHater73"/>
    );
    </main>
}

export default DemosPage;