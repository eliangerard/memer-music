import { server } from "./getServer";

export const getSong = async (id) => {
    const song = await fetch(server+'deezer/track/'+id).then(res => res.json());
    return song;
}