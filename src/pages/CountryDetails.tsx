import React from 'react'
import CountryEach from '../components/CountryEach'
import { useLocation, useParams } from 'react-router-dom';
import type { Country } from '../App';

interface CountryDetailsProps {
  details: Country[];
}

interface CountryParams {
  countryName: string;
}

const CountryDetails:React.FC<CountryDetailsProps> = ({details}) => {
  const {countryName} = useParams<CountryParams>();
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
