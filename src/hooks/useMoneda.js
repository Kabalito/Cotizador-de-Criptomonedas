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


`



const useMoneda = (label, stateInicial, opciones) => {

   // State de nuestro custom hook

   const [state, setState] = useState(stateInicial);


    const Seleccionar = () => (
  <Fragment>
    <Label>{label}</Label>
    <Select
        onChange= {e => setState(e.target.value)}
        value={state}
    
    >
      <option value="">- Selecione -</option>
      {opciones.map(opcion =>(
          <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>

      ))}
    </Select>
  </Fragment>
  );

  // retornar state, interfaz y fn que modifica el state
  return [state, Seleccionar, setState];


}

export default useMoneda;