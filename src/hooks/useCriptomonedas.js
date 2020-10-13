import React, { Fragment, useState } from "react";
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-transform: uppercase;
    font-size: 34px;
    margin-top: 2rem;
    display: block;
`;

const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1rem;
`;


const useCriptomoneda = (label, stateInicial, opciones) => {

    //console.log(opciones);

   // State de nuestro custom hook
   const [state, setState] = useState(stateInicial);


    const SelecCripto = () => (
  <Fragment>
    <Label>{label}</Label>
    <Select
        onChange= {e => setState(e.target.value)}
        value={state}
    
    >
      <option value="">- Selecione -</option>
      {opciones.map(opcion =>(
          <option key={opcion.CoinInfo.id} value={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName}</option>

      ))}
    </Select>
  </Fragment>
  );

  // retornar state, interfaz y fn que modifica el state
  return [state, SelecCripto, setState];


}

export default useCriptomoneda;
