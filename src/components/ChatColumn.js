// src/components/ChatColumn.js
import React, { useState } from 'react';
import './ChatColumn.css';

const ChatColumn = ({ title, description, inputPlaceholder, buttonText, onButtonClick }) => {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('The result will appear here...');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async () => {
    if (!inputValue) return;
    setIsLoading(true);
    setOutputValue('🧠 Thinking...');
    
    // This is where the magic happens. We call the function passed in from App.js
    const result = await onButtonClick(inputValue);
    
    setOutputValue(result);
    setIsLoading(false);
  };

  return (
    <div className="column">
      <h2>{title}</h2>
      <p>{description}</p>
      <textarea
        rows="4"
        placeholder={inputPlaceholder}
        value={inputValue}
        onChange={handleInputChange}
        disabled={isLoading}
      />
      <button onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? 'Processing...' : buttonText}
      </button>
      {isLoading && <div className="spinner"></div>}
      <h3>Output:</h3>
      <pre className="output-box">{outputValue}</pre>
    </div>
  );
};

export default ChatColumn;