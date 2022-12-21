import { useState } from "react";



export const Searchbar = ({onSubmit}) => {
    const [input,setInput] = useState('')
    const handleNameChange = (e) => {
        setInput(e.currentTarget.value.toLowerCase())
    }
    const handleSubmit =(e) => {
        e.preventDefault()

        if (input === '') {
            return
        }
        onSubmit(input)
        setInput('')
    }
  return (
    <form onSubmit={handleSubmit} className="form">
      <button type="submit" className="button">
        <span className="button-label">Search</span>
      </button>

      <input
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
