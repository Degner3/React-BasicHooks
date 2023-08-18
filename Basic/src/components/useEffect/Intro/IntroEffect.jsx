import { useState, useEffect } from "react";
import style from "./IntroEffect.module.scss";

// UseEffect hook giver dig mulighed for at udføre sideeffekter i dine komponenter.

// eksempler på sideeffekter er:

// hentning af data
// direkte opdatering af DOM
// timere

// useEffect accepterer to argumenter. Det første er en function og det andet er et dependency array og valgfrit.

// useEffect(<function>, <dependency-array>)

export const IntroEffect = () => {
  // Eksemel med useEffect og en timer:
  const [count, setCount] = useState(0);

  // useEffect bliver kørt hver gang siden renderer. Det betyder, at når antallet ændres vil der blive kørt endnu et render, som så udløser endnu en effekt.

  // useEffect(() => {
  //     setTimeout(() => {
  //       setCount(count => (count + 1));
  //     }, 1000);
  //   });

  //   Så for at løse problemet med timeren fra før, skal vi kun køre effekten på det første render:

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setCount((count) => count + 1);
  //     }, 1000);
  //   }, []); // <- send et tomt array med som dependency array

  // 1. Uden dependencies:
  // useEffect(() => {
  // Kører for hvert rendering
  // });

  // 2. Et tomt array:
  // useEffect(() => {
  // Kører kun ved det første rendering
  // }, []);

  // 3. Props eller state dependency:
  // useEffect(() => {
  // Kører ved første rendering
  // og hver gang en af værdierne i dependency arrayet bliver ændret
  // }, [prop, state]);

  //   Her er endnu et eksempel på et useEffect Hook, der er afhængig af en variabel. Hvis tællevariablen opdateres, skal effekten køre igen:

  const [counter, setCounter] = useState(0);
  const [calculation, setCalculation] = useState(0);

  //   useEffect(() => {
  //     setCalculation(() => counter * 2);
  //   }, [counter]); // <- tilføj count variabel i dependency array

  useEffect(() => {
    setCalculation(() => counter * 2);
  }, [counter]); // <- tilføj count variabel i dependency array

  return (
    <section className={style.introeffeckt}>
      {/* <h1>Antal renders: {count}</h1> */}
      <h1>Antal renders: {count}</h1>
      <div>
        <p>Counter: {counter}</p>
        <button onClick={() => setCounter((c) => c + 1)}>+</button>
        <p>Udregning: {calculation}</p>
      </div>
    </section>
  );
};
