export const getUser = async (accessToken) => {
    const user = await fetch('http://localhost:3000/deezer/user/me?output=json&access_token='+accessToken).then(res => res.json());
    return user;
}