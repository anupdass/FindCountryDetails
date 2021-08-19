import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const CountryDetails = () => {
    const {name} = useParams();

    const [country,setCountry] = useState([])

    useEffect(()=>{
        fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(res => res.json())
        .then(details => setCountry(details))
    },[])

    return (
        <div className="container mx-auto ">
            <div>
                <Link to='/'><h3 className='p-3 bg-green-300 text-black text-center'>Home</h3></Link>
            </div>

            <div className="mt-5 content-center">
                <img width='50%' src={country[0]?.flag} alt="" />
                <h1>Name: {country[0]?.name}</h1>
                <h1>Details: {country[0]?.altSpellings}</h1>
                <h1>Native: {country[0]?.nativeName}</h1>
                <h1>population: {country[0]?.population}</h1>
            </div>
        </div>
    );
};

export default CountryDetails;