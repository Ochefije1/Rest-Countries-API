import React, { useState } from 'react';
import PropTypes from 'prop-types'; 

const Country = ({ country }) => {
    return (
        <div>
            {country ? <p>{country.name}</p> : <p>No country</p>}
        </div>
    );
};

Country.propTypes = { 
    country: PropTypes.object
};

const Search = ({ country }) => {
    return (
        <main>
            <input type='search' value={'Nigeria'} />
            <select>
                <option>Africa</option>
                <option>Asia</option>
                <option>America</option>
            </select>
        </main>
    );
};

Search.propTypes = { 
    country: PropTypes.object
};

const Card = ({ country }) => {
    return (
        <section>
            <div>
                <img src={country.flags.svg} alt={country.name.common} />
            </div>
            <div>
                <h1>Name: {country.name.common}</h1>
                <p>Population: {country.population}</p>
                <p>Region: {country.region}</p>
                <p>Capital: {country.capital}</p>
            </div>
        </section>
    );
};

Card.propTypes = { 
    country: PropTypes.object
};

const CountryDetail = ({ country}) =>
{
    return (
        <div>
            <h1> {country.name.common}</h1>
            <p>Population: {country.population}</p>
            <p>Region: {country.region}</p>
            <p> Capital: {country.capital}</p>
        </div>
    );
};

CountryDetail.propTypes = {
    country: PropTypes.object
};
export { Country, Search, Card, CountryDetail };