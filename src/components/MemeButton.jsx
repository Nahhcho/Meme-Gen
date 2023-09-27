export default function MemeButton(props) {
    return (
        <>
        <br />
        <div className="button-container">
        <button className="meme-button" onClick={props.onClick}> <p>Get a new meme image</p> </button>
        </div>
        </>
    )
}