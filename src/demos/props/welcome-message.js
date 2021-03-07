import "./welcome-message.css";

function WelcomeMessage(props){
    // const name = props.name
    // const greeting = props.greeting;
    const{name, greeting} = props;
    return <p className = "welcome-message">
        {greeting}, {name}!</p>;
  }

  export default WelcomeMessage;