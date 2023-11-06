import React, { useState } from 'react';
import './AgeCalculator.css'; // Import the CSS file

const AgeCalculator = () => {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (birthdate) {
      const birthDate = new Date(birthdate);
      const today = new Date();
      const ageInMilliseconds = today - birthDate;
      const ageInYears = Math.floor(ageInMilliseconds / (365 * 24 * 60 * 60 * 1000));
      setAge(ageInYears);
    } else {
      setAge(null);
    }
  };

  return (
    <div className="age-calculator-container"> {/* Add a container class */}
      <h1>Age Calculator</h1>
      <div className="input-section"> {/* Wrap input and button in a div */}
        <label>Enter your date of birth:</label>
        <br />
        <input className='value-section' type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
      </div>
      <button className="calculate-button" onClick={calculateAge}>Calculate Age</button>
      {age !== null && <p className='output'>You are {age} years old.</p>}
    </div>
  );
};

export default AgeCalculator;
