import "./social-post.css";

function SocialPost(props){
    const {content, userName, numLikes = 0, numThumbsUp = 0, numSparkles = 0} = props;
    return(
        <div className ="social-post">
            <div>{content}</div>
            <div>-{userName}</div>
            <div>
                <span><button>{numLikes} 💜</button></span>
                <span><button>{numThumbsUp} 👍🏽</button></span>
                <span><button>{numSparkles} ✨</button></span>
            </div>
        </div>
    );
}


export default SocialPost;