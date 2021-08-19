import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {

    const [country, setCountry] = useState([]);
    // const [search,setSearch] = useState('');

    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])

    /* const handleSearch = (e) =>{
        let value = e.target.value;
        setSearch(value)
    
    } */

    return (
        <div className='mb-3 container mx-auto'>
            <div className="text-center mt-10 ">
                <h4>Search Your Country By Name</h4>
                <input className='border-2 border-green-600 rounded-md mt-5 p-2' name='search' placeholder="enter a country name" /* onBlur={handleSearch} */ />
                <button className='btn ml-3 bg-green-500 text-white p-3 rounded rounded-5' >Search</button>
                <h2 className='mt-5'>Total Country : {country.length}</h2>
            </div>
           <div className=" flex flex-wrap">
           {
                country.map(country => <Country country={country} key={country.alpha2Code}></Country>)
            }
           </div>
        </div>
    );
};

export default Home;