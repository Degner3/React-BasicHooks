import { useState } from "react";
import style from "./Content.module.scss";



export const Content = () => {

    const [darkMode, setDarkMode] = useState(false);
  
    // console.log("darkMode:", setDarkMode);
    console.log("darkmode", darkMode);
  
    function switchDakeMode() {
      if (darkMode) {
        setDarkMode(false);
      } else {
        setDarkMode(true);
      }
    }
  
    return (
      <section className={darkMode ? style.contentDark : style.contentWhite}>
        <h3>Lorem ipsum dolor sit amet.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aut
          dolore natus optio voluptate iste reiciendis magni! Ullam laboriosam
          consectetur nulla libero molestiae ex recusandae, enim cumque beatae?
          Minus fuga temporibus doloremque saepe veritatis ea quia dolorum
          dignissimos vel esse.
        </p>
        <button onClick={() => setDarkMode(darkMode == true ? false : true)}>
          {darkMode ? "false" : "true"}
        </button>
      </section>
    );
  };