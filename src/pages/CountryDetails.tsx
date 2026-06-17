import React from 'react'
import CountryEach from '../components/CountryEach'
import { useLocation, useParams } from 'react-router-dom';
import type { Country } from '../App';

interface CountryDetailsProps {
  details: Country[];
}


const CountryDetails:React.FC<CountryDetailsProps> = ({details}) => {
  const {countryName} = useParams<{ countryName: string}>();
  const {state} = useLocation();

  const findCountry:Country =
  state?.country || 
  details.find((country) => {
    return country.name === decodeURIComponent(countryName ?? "");
  });
  return (
    <div>
      <CountryEach detail={findCountry}/>
    </div>
  )
}

export default CountryDetails
