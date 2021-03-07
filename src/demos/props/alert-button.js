import "./speak-button.css"

function AlertButton(props){
    const {buttonText = "Alert", alertMessage} = props;

    const alertPopUp = () =>
    {
        alert(alertMessage);
    }
    return(
        <button className = "speak-button" onClick ={alertPopUp}>
            {buttonText}
        </button>
    )
}

export default AlertButton;