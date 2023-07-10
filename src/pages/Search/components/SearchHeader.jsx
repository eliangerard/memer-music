import { matchRoutes, useLocation, NavLink } from 'react-router-dom';
import './SearchHeader.css';
import { useContext } from 'react';
import { SearchContext } from '../context/SearchProvider';

export const SearchHeader = () => {

    const { search, setSearchMode } = useContext(SearchContext);

    console.log("Search", search);
    const location = useLocation();

    const handleSearchMode = () => {
        const { pathname } = location;
        const searchPath = pathname.substring(8);
        setSearchMode(searchPath.substring(0, searchPath.indexOf('/') + 1));
    }

    const isActive = (path) => {
        const { pathname } = location;
        const searchPath = pathname.substring(8);
        setSearchMode(searchPath.substring(0, searchPath.indexOf('/') + 1));
        return !!matchRoutes([{ path }], pathname.substring(0, pathname.lastIndexOf('/')));
    }
    return (
        <div className="searchHeader">
            <div className="flex">
                <NavLink className={isActive('/search/') ? 'selectedSearch' : ''} to={`/search/${search}`} onClick={handleSearchMode}>All</NavLink>
                <NavLink className={isActive('/search/songs/') ? 'selectedSearch' : ''} to={`/search/songs/${search}`} onClick={handleSearchMode}>Songs</NavLink>
                <NavLink className={isActive('/search/albums/') ? 'selectedSearch' : ''} to={`/search/albums/${search}`} onClick={handleSearchMode}>Albums</NavLink>
                <NavLink className={isActive('/search/artists/') ? 'selectedSearch' : ''} to={`/search/artists/${search}`} onClick={handleSearchMode}>Artists</NavLink>
                <NavLink className={isActive('/search/playlists/') ? 'selectedSearch' : ''} to={`/search/playlists/${search}`} onClick={handleSearchMode}>Playlists</NavLink>
                <NavLink className={isActive('/search/radios/') ? 'selectedSearch' : ''} to={`/search/radios/${search}`} onClick={handleSearchMode}>Radios</NavLink>
                <NavLink className={isActive('/search/users/') ? 'selectedSearch' : ''} to={`/search/users/${search}`} onClick={handleSearchMode}>Users</NavLink>
                <NavLink className={isActive('/search/podcasts/') ? 'selectedSearch' : ''} to={`/search/podcasts/${search}`} onClick={handleSearchMode}>Podcasts</NavLink>
            </div>
        </div>
    )
}
