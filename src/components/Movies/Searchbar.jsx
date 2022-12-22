import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Searchbar = () => {
  const [input, setInput] = useState('')
  const [, setSearchParams] = useSearchParams();
  const handleNameChange = e => {
    const value = e.currentTarget.value.toLowerCase();
    setInput(value)
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (input === '') {
      setSearchParams({})
      return;
    }
    const value = e.target.input.value
    setSearchParams(value !== '' ? { filter: value } : {})
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <button type="submit" className="button">
        <span className="button-label">Search</span>
      </button>

      <input
        name="input"
        value={input}
        onChange={handleNameChange}
        className="input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
    </form>
  );
};
