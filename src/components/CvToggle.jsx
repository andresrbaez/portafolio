import React, { useState } from "react";
import espCV from '../docs/andresRodriguezHV.pdf'
import engCV from '../docs/andresRodriguezCV.pdf'

const CvToggle = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="center">
        {/* <span>
            <b>
                CV File
            </b>
        </span> */}
        <input
          type="checkbox"
          checked={toggle}
          onChange={(e) => setToggle(e.target.checked)}
          title='Escoge el idioma del archivo de descarga'
        />
      </div>
      <div className="pdfFile">
        {toggle ? (
            <>
            <a href={engCV} download={"Andres Rodriguez - Front End Dev - enCV"} className="aButton">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                CV Eng
            </a>
            </>
        ) : (
            <>
            <a href={espCV} download={"Andres Rodriguez - Front End Dev - esCV"} className="aButton">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                HV Esp
            </a>
            </>
        )}
      </div>

    </>
  );
};

export default CvToggle;
