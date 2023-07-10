import './Login.css';
import memelogo from '../assets/memericonflat.png'
export const Login = () => {

    const handleLogin = () => {
        window.location.assign('https://connect.deezer.com/oauth/auth.php?app_id=618944&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2F&perms=basic_access,email,listening_history');
    }

    return (
        <div className='loginPanel'>
            <img src={memelogo} alt="" />
            <p>Log in with Deezer to see and listen your music!</p>
            <button onClick={handleLogin}>Log in</button>
        </div>
    )
}
