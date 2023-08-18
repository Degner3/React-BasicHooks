import { useState } from "react";
import style from "./Intro.module.scss";

// useState()

// useState accepterer en starttilstand og returnerer to værdier:
// Den nuværende tilstand.
// En funktion, der opdaterer tilstanden.

export const Intro = () => {
  // I dette hook destrukturerer vi de returnerede værdier fra useState.

  // Den første værdi, color, er vores nuværende tilstand.
  // Den anden værdi, setColor, er den funktion, som vi bruger til at opdatere vores tilstand.
  // Til sidst sætter vi starttilstanden til en tom streng: useState("").
  const [color, setColor] = useState("?");

    // Vi kunne oprette flere state Hooks for at tracke individuelle værdier:
    const [brand, setBrand] = useState("Ford");
    const [model, setModel] = useState("Mustang");
    const [year, setYear] = useState("1964");
    const [carColor, setCarColor] = useState("red");
    
    // Eller vi kan bare bruge én tilstand og inkludere et objekt i stedet for:
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });

    // Fordi vi har brug for den aktuelle værdi af tilstand, overfører vi en funktion til vores setCar-funktion. Denne funktion modtager den tidligere værdi.
    // Vi returnerer derefter et objekt, spreder den forrige tilstand og overskriver kun farven.
    const updateColor = () => {
        setCar(previousState => {
          return { ...previousState, color: "blue" }
        });
    }

  return (
    <section className={style.color}>
      <div>
        <h1>Min ynglingsfarve er {color}!</h1>
        <button
          className={style.blue}
          type="button"
          onClick={() => setColor("Blå")}
        >
          Blue
        </button>
        <button
          className={style.red}
          type="button"
          onClick={() => setColor("Rød")}
        >
          Red
        </button>
      </div>
      <div>
        <h2>My {brand}</h2>
        <p>it is a {color} {model} from {year}.</p>
      </div>
      <div>
      <h2>My {car.brand}</h2>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
      </div>
    </section>
  );
};
