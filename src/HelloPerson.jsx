import { useState } from "react";
import Button from "./Button";
import './HelloPerson.css';

function HelloPerson({ nome, foto, idade, caracteristica }) {

   return (
      <div className="container">
         {nome &&
         <p className="desc">Hello{nome} - {idade} -<span className="info">{caracteristica}</span> 
        </p>
}
         <img className="img"
            src={foto}
            alt={nome}
            width="350px"
            height="350px"
      />

      </div>
   );
}

export default HelloPerson