import React from "react";

const Search = ({ searchTerm, onChange, onSubmit, children }) => (
  <form onSubmit={onSubmit}>
    {`${children}: `}
    <input type="text" value={searchTerm} onChange={onChange} />
    <button type="submit">{children}</button>
  </form>
);

export default Search;