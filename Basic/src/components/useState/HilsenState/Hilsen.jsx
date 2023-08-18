import { useState } from "react";
import style from "./Hilsen.module.scss"


export function HilsenState() {

    const [name, setName] = useState("");


    return (
        <section className={style.hilsen}>
            <div>
                <h1>Send en hilsen til {name}!</h1>
                <label htmlFor="">Name</label>
                <input type="text" onInput={e => setName(e.target.value)} />
            </div>
        </section>
    )

}