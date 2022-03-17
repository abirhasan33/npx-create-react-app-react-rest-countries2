import React, { useEffect, useState } from 'react';
import Countrise from './Countries/Countrise';
import './Country.css';

const County = () => {
    const [countrise, setCountrise] = useState([]);

    useEffect( () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountrise(data));
    },[])

    return (
        <div>
            <h1>Hello form Countise: {countrise.length}</h1>
            <div className='countrise-comtainer'>
            {
                countrise.map(country => <Countrise country={country} key={country.cca3}></Countrise>)
            }
            </div>
        </div>
    );
};

export default County;