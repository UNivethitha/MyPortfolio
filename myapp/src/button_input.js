import React, { useState, useEffect } from 'react';

function Input() {
  const [inputValue, setInputValue] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {

    if (inputValue.length >= 2) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="input-field">Input Field:</label>
      <input
        type="text"
        id="input-field"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="submit" disabled={isButtonDisabled}>
        Submit
      </button>
    </form>
  );
}

export default Input;

