import React from 'react';
import './Countrise.css';

const Countrise = (props) => {
    const {name, region, population, area, flags} = props.country;
    console.log(props.country)
    return (
        <div className='countrise bg-info'>
            <h2>countrise Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <h4>Region: {region}</h4>
            <h5>Population: {population}</h5>
            <h5><small>Area: {area}</small></h5>
        </div>
    );
};

export default Countrise;