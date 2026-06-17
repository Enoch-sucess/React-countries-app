import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import type { Country } from '../App';
import { useNavigate } from 'react-router-dom';

interface CountryEachProps {
  detail: Country;
}

const CountryEach:React.FC<CountryEachProps> = ({detail}) => {
  const navigate = useNavigate();

  const border = detail.borders
  ? detail.borders.map((b) => {
    return (
      <p key={b} className='bg-element px-6 py-2 shadow-md'>{b}</p>
    );
  })
  :"No Border Countries"

  const curriencies = detail?.currencies
  ? detail.currencies[0].name
  : "No Currency"

    return (
    <div className='px-5 md:px-20  pb-20 md:pb-50 text-color'>
      <div
      onClick={() => {
        navigate("/");
        window.location.reload();
      }}
       className='flex items-center w-30 justify-between shadow-md px-6 py-2 mt-10 rounded-md cursor-pointer bg-element'>
        <FaArrowLeftLong />
        <p className='text-[16px]'>Back</p>
      </div>

      <div className='flex flex-col md:flex-row items-start md:items-center w-full gap-10 md:gap-37.5 mt-16'>
        <img src={detail.flags.png} alt="" className='w-137.5 h-91.5'/>

        <div className='flex flex-col w-full items-start text-start'>
          <h2 className='text-[24px] font-extrabold'>{detail.name}</h2>

          <div className='flex flex-col md:flex-row items-start gap-8 md:gap-10 w-full md:justify-between'>
            <div className='flex flex-col items-start gap-2.5 text-[16px]'>
              <p>Native name: {detail.nativeName}</p>
              <p>Population: {detail.population.toLocaleString()}</p>
              <p>Region: {detail.region}</p>
              <p>Sub-region: {detail.subregion}</p>
              <p>Capital: {detail.capital}</p>
            </div>
            <div className='flex flex-col items-start gap-2.5 text-[16px]'>
              <p>Top Level Domain: {detail.topLevelDomain.join(", ")}</p>
              <p>Currencies: {curriencies}</p>
              <p>Languages: {detail.languages?.map((l) => l.name).join(", ")}</p>
            </div>
          </div>

          <div className='flex flex-wrap md:flex-start items-center gap-2 text-[14px] md:text-[16px] mt-5'>
            <p>Border Countries:</p>
            <div className='grid grid-cols-4 gap-4 items-center'>{border}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryEach;
