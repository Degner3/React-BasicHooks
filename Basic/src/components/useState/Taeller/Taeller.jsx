import { useState } from "react";
import style from "./Taeller.module.scss"



export function Taeller() {
    
    const [count, setCount] = useState(0);


    return (
        <section className={style.Taeller}>
            <div>
                <h1>Du har klikket på knappen {count} antal gange</h1>
            
                <button type="button" onClick={() => {setCount(count + 1)}}>ADD</button>

                <button type="button" onClick={() => {setCount(count - 1)}}>DELETE</button>
            </div>
        </section>
    )

}