import { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [search, setSearch] = useState("");
    const [searchMode, setSearchMode] = useState("");

    return (
        <SearchContext.Provider value={{ search, setSearch, searchMode, setSearchMode}}>
            {children}
        </SearchContext.Provider>
    );
}