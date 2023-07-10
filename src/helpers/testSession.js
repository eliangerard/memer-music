import { server } from "./getServer";

export const testSession = async (accessToken) => {
    const res = await fetch(server+'deezer/user/me?access_token='+accessToken).then(res => res.json());
    console.log("Testing:",res);
    return !(res.error && res.error.type == 'OAuthException');
}