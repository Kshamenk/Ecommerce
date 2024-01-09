import React from "react";
import style from "./Carrusel.module.css";
import mobil from "../../assets/mobil.jpg";
import compu from "../../assets/compu.jpg";
import tablet from "../../assets/tablet.jpg";

function Carrusel() {
  return (
    <div className={style.slider}>
      <ul>
        <li>
          <img src={mobil} alt="slide-" />
        </li>
        <li>
          <img src={compu} alt="slide-" />
        </li>
        <li>
          <img src={tablet} alt="slide-" />
        </li>
        <li>
          <img src={compu} alt="slide-" />
        </li>
      </ul>
    </div>
  );
}

export default Carrusel;
