"use client"
import React, { useContext, createContext, useState, ReactNode, } from "react";

interface SearchContext {
  search: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const searchbarContext = createContext<SearchContext|undefined>(undefined);

const SearchProvider = ({ children }: { children:ReactNode }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <searchbarContext.Provider value={{ search, handleSearch, setSearch }}>
      {children}
    </searchbarContext.Provider>
  );
};

export default SearchProvider;

export const useSearch = ():SearchContext => {
  const context = useContext(searchbarContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
