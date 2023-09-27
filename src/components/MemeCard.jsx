export default function MemeCard(props) {
    return (
        <div id={props.meme} className="img-container">
            <img src={props.meme.url} alt="meme"></img>
            <p className="top-overlay">{props.topText}</p>
            <p className="bottom-overlay">{props.bottomText}</p>
        </div>
    )
}