import { server } from "./getServer";

export const grantLogin = async (code) => {
    const res = await fetch(server+'oauth?code='+code).then(res => res.json());
    return res;
}