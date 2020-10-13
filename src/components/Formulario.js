import React, { useEffect, useState }from 'react';
import styled from '@emotion/styled';

import Error from './Error'

import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomonedas';
import axios from 'axios';


const Boton = styled.input `
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #fff;
    transition: background-color .3s ease;

    &:hover {
        background-color: #326ac0;
        cursor: pointer;
    }
`;

const Formulario = ( {setMoneda, setCriptomoneda }) => {

    // state del listado de criptomonedas:

    const [listacrpto, setListacrpto] = useState([]);

    // State para la validacion:

    const [error, setError] = useState(false);


    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar de Estados Unidos'},
        { codigo: 'MXN', nombre: 'Peso Mexicano'},
        { codigo: 'EUR', nombre: 'Euro'},
        { codigo: 'GBP', nombre: 'Libra Esterlina'},


    ]

    // Utilizar useMoneda
    const [moneda, SelecMonedas] = useMoneda('Elije tu moneda', '', MONEDAS);

    // utilizar useCriptomoneda

    const [criptomoneda, SelecCripto] = useCriptomoneda('Elije tu Criptomoneda', '', listacrpto)

    // Ejecutar llamado a la API

    useEffect(() =>{
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const resultado = await axios.get(url);
            setListacrpto(resultado.data.Data);
        }
        consultarAPI();

    }, []);

    //cuando el usuario hace submit

    const cotizarMoneda = e => {
        e.preventDefault();

        // validar si ambos campos estan llenos
        if (moneda === '' || criptomoneda === ''){
            setError(true);
            return;
        }
        // Pasar los datos al componente principal
        setError(false);
        setMoneda(moneda);
        setCriptomoneda(criptomoneda);


    }


    return ( 
        <form
            onSubmit={cotizarMoneda}        
        >
            {error ? <Error mensaje="Todos los campos son obligatorios"/> : null }

            <SelecMonedas/>

            <SelecCripto/>


            <Boton
                type="submit"
                value="Calcular"

            
            />
        </form>
     );
}
 
export default Formulario;