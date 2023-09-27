import trollFace from '../images/TrollFace.png'

export default function Navbar() {
    return (
        <div className="header-container">
            <div className="title-container">
            <img src={trollFace} alt="meme"className='header-image'></img>
            <p> Meme Generator </p>
            </div>
            <div className="course-container">
                <p> React Course - Project 3 </p>
            </div>
        </div>
    )
}