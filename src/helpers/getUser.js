import { server } from "./getServer";

export const getUser = async (accessToken) => {
    const user = await fetch(server+'deezer/user/me?output=json&access_token='+accessToken).then(res => res.json());
    return user;
}