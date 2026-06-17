import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import CountryDetails from './pages/CountryDetails';
import NavBar from './components/NavBar';
import AllCountries from "./data.json";
import { useState } from 'react';
import { useEffect } from 'react';


export interface Currency {
  code:string;
  name: string;
  symbol: string;
}

export interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface flags {
  svg: string;
  png: string;
}

export interface Country {
  name: string;
  population: number;
  region: string;
  capital: string;
  subregion: string;
  nativeName: string;
  topLevelDomain:string[];
  borders?:string[];  //means optional 
  currencies: Currency[];
  languages: Language[];
  // flag:string;
  flags: Flag;
}

function App() {
  //useState is a generic function that takes a type parameter, in this case Country[], which is an array of Country objects. This allows us to specify the type of data that the state variable allCountries will hold.
  //allCountries is the state variable that holds the array of Country objects, and setAllCountries is the function that we can use to update the value of allCountries. We initialize allCountries with the data from AllCountries, which is imported from a JSON file and cast to the type Country[].
  const [allCountries] = useState<Country[]>(AllCountries as Country[]);
  const [filterCountries, setFilterCountries] = useState<Country[]>([]);

  // The filterBySearch function takes a search string as an argument and filters the allCountries array to find countries whose names include the search string (case-insensitive). The filtered results are then stored in the filterCountries state variable using the setFilterCountries function.
  const filterBySearch = (search:string):void => {
    const searchedCountry = allCountries.filter((country) => {
       return country.name.toLowerCase().includes(search);
    });
    setFilterCountries(searchedCountry);
  };

// The filterByRegion function takes a region string as an argument and filters the allCountries array to find countries that belong to the specified region. The filtered results are then stored in the filterCountries state variable using the setFilterCountries function.
  const filterByRegion = (region:string):void => {
    const selectedRegion = allCountries.filter((countries) => {
      return countries.region === region;
    });
    setFilterCountries(selectedRegion);
  };

  // Light Moode State: This line initializes a state variable isLightMode with a default value of false, indicating that the application starts in dark mode. The setIsLightMode function can be used to toggle between light and dark modes based on user preferences or interactions.
  // Update your useState initialization in App.tsx
const [isLightMode, setIsLightMode] = useState<boolean>(() => {
  return localStorage.getItem("theme") === "light";
});

const toggleMode = (): void => {
  const newMode = !isLightMode;
  setIsLightMode(newMode);

  if (newMode) {
    document.body.classList.add("light-mode");
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.remove("light-mode");
    localStorage.setItem("theme", "dark");
  }
};

// useEffect runs side effects
useEffect(() => {
  if (isLightMode) {
    document.body.classList.add("light-mode");
  }
}, []); // empty array = runs once on mount


  return (
    <>
      <BrowserRouter>
       <NavBar isLightMode={isLightMode} toggleMode={toggleMode} />
        <Routes>
          <Route path="/" element={<HomePage theWorld={
            filterCountries.length > 0 ? filterCountries : allCountries
          }
            searchFn={filterBySearch}
            dropDownFn={filterByRegion}
          />
          }
          />
          <Route path="/details/:countryName" 
          element={<CountryDetails details={allCountries} />} 
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
