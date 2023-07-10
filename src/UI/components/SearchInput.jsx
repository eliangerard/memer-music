import { useContext, useState } from 'react';
import './Search.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchContext } from '../../pages/Search/context/SearchProvider';

export const SearchInput = () => {
    const [searchValue, setSearchValue] = useState('');

    const { setSearch, searchMode } = useContext(SearchContext);

    const location = useLocation();
    const navigate = useNavigate();
    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    }

    const handleInputKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }

    const handleButtonClick = () => {
        handleSearch();
    }

    const handleSearch = () => {
        if (searchValue.trim().length == 0) return;

        setSearch(searchValue);
        navigate(`/search/${location.pathname.includes('search') ? searchMode : ''}${searchValue}`, { replace: true })
    }

    return (
        <>
            <div className="search">
                <svg onClick={handleButtonClick} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10 2.5C14.1421 2.5 17.5 5.85786 17.5 10C17.5 11.7101 16.9276 13.2866 15.964 14.5483L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3466 21.0676 19.7794 21.0953 19.3871 20.7903L19.2929 20.7071L14.5483 15.964C13.2866 16.9276 11.7101 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5ZM10 4.5C6.96243 4.5 4.5 6.96243 4.5 10C4.5 13.0376 6.96243 15.5 10 15.5C13.0376 15.5 15.5 13.0376 15.5 10C15.5 6.96243 13.0376 4.5 10 4.5Z" /></svg>
                <input type="text" placeholder="search" value={searchValue} onChange={handleInputChange} onKeyPress={handleInputKeyPress} />
            </div>

        </>
    )
}
