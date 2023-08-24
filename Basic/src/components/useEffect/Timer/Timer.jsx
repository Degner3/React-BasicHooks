import { useEffect, useState } from "react"
import style from "./Timer.module.scss"


// I denne opgave skal du lave en stop urs app med følgende krav. 

// Den skal kunne tælle tiden når man trykker på en Start knap.
// Det skal være muligt at stoppe tiden med en Stop knap.
// Det skal være muligt at nulstille timeren så man kan starte den forfra igen. 


export const Timer = () => {
    
    const [time, setTime] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        if (isRunning === true){
            let timer = setInterval(() => {
                setTime((prevTime) => prevTime + 1)
            }, 1000);
            return (() => clearInterval(timer))
        }
    },[isRunning])

    const toggleRunning = () => {
        if (isRunning === true){
            setIsRunning(false)
        }
        else {
            setIsRunning(true)
        }
    }

    const resetTimer = () => {
        setIsRunning(false)
        setTime(0)
    }

    return (
        <section className={style.timer}>
            <h2>Timer:</h2>
            <h3>{time}</h3>
            <button onClick={() => {toggleRunning()}}>{isRunning ? 'Stop' : 'Start'}</button>
            <button onClick={() => {resetTimer()}}>nulstil</button>
        </section>
    )
}