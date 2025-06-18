import React, { useEffect, useState } from "react";

function CountryCapitals() {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [capital, setCapital] = useState('');

    const Map = {
    France: 'Paris',
    Germany: 'Berlin',
    Italy: 'Rome',
    Spain: 'Madrid',
    Greece: 'Athens',
    Portugal:'Lisbon'
  };

  useEffect(() => {
    if (selectedCountry === '') {
      setCapital('');
      return;
    }

    // simulate async logic (e.g., fetching from an API)
    const timer = setTimeout(() => {
      setCapital(Map[selectedCountry]);
    }, 500); // fake loading delay

    return () => clearTimeout(timer);
  }, [selectedCountry]);

    return(
        <div className="container">
            <h1>Country Capital Finder</h1>

            <select
            value={selectedCountry}
            onChange={e => setSelectedCountry(e.target.value)}
            >
            <option value =""></option>
            {Object.keys(Map).map(country => (
                <option key={country} value={country}>
                    {country}
                </option>
            ))}
            </select>

            {capital && (
                <p className="capital">
                🗺️ Capital of {selectedCountry} is <strong>{capital}</strong> 
                </p> 
            )}

        </div>
    );

}

export default CountryCapitals;