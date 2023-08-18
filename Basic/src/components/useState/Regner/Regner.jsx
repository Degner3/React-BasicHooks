import { useState } from "react"
import style from "./Regner.module.scss"


export function Regner() {

    const [result, setResult] = useState(0)
    // const [valueOne, setValueOne] = useState()
    // const [valueTwo, setValueTwo] = useState()
    const [inputValue, setInputValue] = useState()

    // console.log(valueOne + valueTwo);


    const add = () => {
        // result(valueOne + valueTwo)
        const res = parseInt(valueOne) + parseInt(valueTwo)
        setResult(res)
    }

    const del = () => {
        // result(valueOne - valueTwo)
        const res = parseInt(valueOne) + parseInt(valueTwo)
        setResult(res)
    }

    const divid = () =>  {
        const res = parseInt(valueOne) / parseInt(valueTwo)
        setResult(res)
    }

    const multi = () => {
        const res = parseInt(valueOne) * parseInt(valueTwo)
        setResult(res)
    }
    
    console.log(result);


    return (
        <section className={style.regner}>
            <div>
                <div>
                    {/* <input onChange={(event) => setInputValue(event.target.value)} type="text" placeholder="Value" /> */}
                    <input onChange={(event) => setValueOne(event.target.value)} value={valueOne} type="number" placeholder="value1" />
                    <input onChange={(event) => setValueTwo(event.target.value)} value={valueTwo} type="number" placeholder="value2" />
                    <button onClick={add}>+++</button>
                    <button onClick={del}>---</button>
                    <button onClick={divid}>///</button>
                    <button onClick={multi}>***</button>
                </div>
            </div>
        </section>
    )

}