import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const { name, capital, region, population } = props.country;
    return (
        <div>
            <Link to={`/country/${name}`}>
                <div className='p-10 border border-3 m-5 text-center hover:bg-green-100 hover:rounded-2'>
                    <h1>{name}</h1>
                    <h4><small>Capital:</small> {capital}</h4>
                    <h4><small>Region:</small> {region}</h4>
                    <h4><small>population:</small> {population}</h4>
                </div>
            </Link>
        </div>
    );
};

export default Country;