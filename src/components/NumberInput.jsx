import { useState } from 'react'

const NumberInput = () => {
  const [inputValue, setInputValue] = useState('');

  // Regular expression to match valid numbers (integer or decimal)
  const numberRegex = /^(\d+(\.\d*)?)?$/;

  const handleChange = (e) => {
    const { value } = e.target;

    // If the value matches the regex or is empty, update the state
    if (numberRegex.test(value)) {
      setInputValue(value);
    }
  };

  return (
    <div>
      <label>
        Enter a number:
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="e.g., 9, 9.25, 7.5"
        />
      </label>
    </div>
  );
};

export default NumberInput;
