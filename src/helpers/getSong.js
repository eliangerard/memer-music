export const getSong = async (id) => {
    const song = await fetch('http://localhost:3000/deezer/track/'+id).then(res => res.json());
    return song;
}