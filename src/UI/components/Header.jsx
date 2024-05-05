import memerLogo from '../../assets/memericonflat.png'
import { SearchInput } from './SearchInput'
import './Header.css'
import { useContext, useState } from 'react'
import { UserContext } from '../../context/UserProvider'

export const Header = () => {
    const [lightMode, setLightMode] = useState(false)
    const { user } = useContext(UserContext);

    const handleLogin = () => {
        window.location.assign('https://connect.deezer.com/oauth/auth.php?app_id=618944&redirect_uri=https%3A%2F%2Feliangerard.me%2Fmemer-music%2F&perms=basic_access,email,listening_history');
    }
    const handleClick = () => {
        setLightMode(!lightMode);
        if (lightMode) {
            document.documentElement.style.setProperty('--background', '#c8f1db');
            document.documentElement.style.setProperty('--text', '#131715');
            document.documentElement.style.setProperty('--selected', '#131715');
            document.documentElement.style.setProperty('--gray-light', '#00000073');
            document.documentElement.style.setProperty('--gray', '#0000001e');
        }
        else {
            document.documentElement.style.setProperty('--background', '#131715');
            document.documentElement.style.setProperty('--gray', '#ffffff1e');
            document.documentElement.style.setProperty('--gray-light', '#ffffff4f');
            document.documentElement.style.setProperty('--selected', 'white');
            document.documentElement.style.setProperty('--active-song-color', '#3E2034');
            document.documentElement.style.setProperty('--text', 'white');
        }
    }
    return (
        <header>
            <div className='flex center-y leftHeader'>
                <img className="logo" src={memerLogo} alt="Memer logo, represents a letter M" />
                <SearchInput />
            </div>
            <div className="btnProfile">
                {/* <svg onClick={handleClick} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20Z" /></svg> */}
                <img onClick={handleLogin} src={user.picture} alt="" />
            </div>
        </header>
    )
}
