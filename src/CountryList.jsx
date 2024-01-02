import React, { useState } from 'react';
import { useCollapse } from 'react-collapsed';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';

const CountryList = ({ countries }) => {
  const [isExpanded, setExpanded] = useState(false);
  const {
    getCollapseProps: getCountryCollapseProps,
    getToggleProps: getCountryToggleProps,
  } = useCollapse({ isExpanded });

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <button
        {...getCountryToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
        className="flex flex-row justify-center items-center text-3xl font-extrabold text-slate-900 ml-4">
        🌏 Countries {isExpanded ? <IoIosArrowDown /> : <IoIosArrowForward />}
      </button>
      <section {...getCountryCollapseProps()}>
        {countries.map((country) => (
          <Country key={country.name} country={country} />
        ))}
      </section>
    </div>
  );
};

const Country = ({ country }) => {
  const [isExpanded, setExpanded] = useState(false);
  const {
    getCollapseProps: getCityCollapseProps,
    getToggleProps: getCityToggleProps,
  } = useCollapse({ isExpanded });

  return (
    <div>
      <button
        {...getCityToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
        className="flex flex-row justify-center items-center text-2xl font-bold text-slate-800 ml-6">
        {country.name} {isExpanded ? <IoIosArrowDown /> : <IoIosArrowForward />}
      </button>
      <section {...getCityCollapseProps()}>
        <ul>
          {country.cities.map((city) => (
            <City key={city.name} city={city} />
          ))}
        </ul>
      </section>
    </div>
  );
};

const City = ({ city }) => {
  const [isExpanded, setExpanded] = useState(false);
  const {
    getCollapseProps: getPlaceCollapseProps,
    getToggleProps: getPlaceToggleProps,
  } = useCollapse({ isExpanded });

  return (
    <li>
      <button
        {...getPlaceToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
        className="flex flex-row justify-center items-center text-xl font-semibold ml-8">
        {city.name} {isExpanded ? <IoIosArrowDown /> : <IoIosArrowForward />}
      </button>
      <section {...getPlaceCollapseProps()}>
        <ul>
          {city.places.map((place) => (
            <li key={place} className="ml-20">
              {place}
            </li>
          ))}
        </ul>
      </section>
    </li>
  );
};

export default CountryList;
