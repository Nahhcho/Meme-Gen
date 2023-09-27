import BottomText from "./components/BottomText"
import TopText from "./components/TopText"
import MemeButton from "./components/MemeButton"
import MemeCard from "./components/MemeCard"
import Navbar from "./components/Navbar"
import './styles.css'
import { useEffect } from "react"
import { useState } from "react"


const API_URL = 'https://api.imgflip.com/get_memes'

export default function App() {

    const [meme, setMeme] = useState(null)

    const [text, setText] = useState({
        topText: "Top Text",
        bottomText: "Bottom Text"
    })

    useEffect(() => {
        updateMeme();
    }, [])

    const updateMeme = async () => {
        fetch(API_URL)
        .then(resonse => resonse.json())
        .then(memeData => {
            const num = Math.ceil(Math.random() * 100)
            console.log(memeData.data.memes[num])
            setMeme(memeData.data.memes[num])
        })
    }

    const updateTop = (e) => {
        setText({
            ...text,
            topText: e.target.value
        })
    }

    const updateBottom = (e) => {
        setText({
            ...text,
            bottomText: e.target.value
        })
    }

    return(
        <>
        <Navbar />
        <div className="input-container">
        <TopText onChange={updateTop}/>
        <BottomText onChange={updateBottom}/>
        </div>
        <MemeButton onClick={updateMeme}/>
        {
            meme != null ? <MemeCard meme={meme} topText={text.topText} bottomText={text.bottomText}/> : null
        }
        </>
    )
}
