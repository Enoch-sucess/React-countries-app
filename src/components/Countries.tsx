import React from 'react'
import type { Country } from '../App';
import { Link } from 'react-router-dom';

interface CountriesProps {
  theWorld: Country[];
}

const Countries: React.FC<CountriesProps> = ({ theWorld }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-15 px-5 md:px-20 py-8 md:py-12.5 bg-body'>
      {theWorld.map((country) => {
        return (
          <Link
            to={`/details/${encodeURIComponent(country.name)}`} 
            key={country.name}
            className='bg-element'
          >
            <img src={country.flags.png}
              alt=""
              className='w-full sm:w-68 h-45 sm:h-45.75 object-cover rounded-t-md'
            />
            <div className="text-color px-4.25 pt-6.25 pb-8.25 flex flex-col gap-3.25 items-start">
              <h3 className="text-[18px] font-semibold">{country.name}</h3>
              <div className='text-[14px]'>
                <p>Population: {country.population.toLocaleString()}</p>
                <p>Region: {country.region}</p>
                <p>Capital: {country.capital}</p>
              </div>
            </div>
          </Link>
        );
      })};
    </div>
  );
};

export default Countries;
