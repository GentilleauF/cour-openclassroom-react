import { useState } from "react";
import "../styles/Footer.css";

function Footer() {
  const [inputValue, setInputValue] = useState("");

  function checkFormatMail() {
    if(!inputValue.includes('@')){
        alert('Veuillez entrer une adresse mail valide')
    }
  }

  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>

      <div className="lmj-footer-elem">
        Laissez-nous votre mail :
        <input
          type="text"
          value={inputValue}
          onBlur={checkFormatMail}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </footer>
  );
}

export default Footer;
