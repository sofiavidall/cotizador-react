import React, { useContext, useState } from 'react';
import { userContext } from '../../context/UserContext';

const Casa = () => {
    const [result, setResult] = useState('0.00');
    const [propertytype, setPropertytype] = useState('');
    const [location, setLocation] = useState('');
    const [meters, setMeters] = useState('');
    const { addItem } = useContext(userContext)

    const handleProperty = (event) => {
        const newValue = event.target.value;
        setPropertytype(newValue);
        
    };

    const handleLocation = (event) => {
        const newValue = event.target.value;
        setLocation(newValue);
        
    };

    const handleMeters = (event) => {
        const newValue = event.target.value;
        setMeters(newValue);
        
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const costoM2 = 351.86
        let resultado = (costoM2 * Number( propertytype )* Number(location)  * Number(meters)) 
        console.log(resultado)
        setResult(resultado.toFixed(2))
 };

 const handleSave = () => {
    const newItem = {
        date: new Date(),
        propertytype,
        location,
        meters,
       total: result
    }
    addItem(newItem)
    
 }

    return (
        <section className='casa-container'>
            <h1>Cotizador Del Hogar🏠</h1>
            <form className='form-container' onSubmit={handleSubmit}>
                <label className='tipo' htmlFor="propertytype">Tipo De Propiedad</label>
                <select name="propertytype" id="propertytype" onChange={handleProperty}>
                    <option value="" disabled>...</option>
                    <option value="1.05">Casa</option>
                    <option value="1.20">Oficina</option>
                    <option value="1.30">PH</option>
                </select>
                <label className='tipo'  htmlFor="location">Ubicacion de la propiedad</label>
                <select name="location" id="location" onChange={handleLocation}>
                    <option value="" disabled>...</option>
                    <option value="1.5">Buenos Aires</option>
                    <option value="1.08">CABA</option>
                    <option value="1.00">9 de julio</option>
                </select>
                <label className='tipo' htmlFor="meters">Ingresa los metros cuadrados:</label>
                <input type="number" id='meters' onChange={handleMeters} />
                <button type="submit">Cotizar</button>
            </form>
            <p className='precio'>Precio Estimado: $ {result}</p>
            <button onClick={handleSave}>Guardar cotizacion </button>
        </section>
    );
};

export default Casa;
