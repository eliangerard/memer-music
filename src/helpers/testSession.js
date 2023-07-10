export const testSession = async (accessToken) => {
    const res = await fetch('http://localhost:3000/deezer/user/me?access_token='+accessToken).then(res => res.json());
    console.log("Testing:",res);
    return !(res.error && res.error.type == 'OAuthException');
}