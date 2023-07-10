const searchTrack = async (q) => {
    const results = await fetch('http://localhost:3000/deezer/search?q=' + q).then(res => res.json());
    return results;
}
const searchArtist = async (q) => {
    const results = await fetch('http://localhost:3000/deezer/search/artist?q=' + q).then(res => res.json());
    return results;
}
const searchAlbum = async (q) => {
    const results = await fetch('http://localhost:3000/deezer/search/album?q=' + q).then(res => res.json());
    return results;
}
const searchHistory = async (q) => {
    const results = await fetch('http://localhost:3000/deezer/search/history').then(res => res.json());
    return results;
}
const searchPlaylist = async (q) => {
    const results = await fetch('http://localhost:3000/deezer/search/playlist?q=' + q).then(res => res.json());
    return results;
}
const searchPodcast = async (q) => {
    const results = await fetch('http://localhost:3000/deezer/search/podcast?q=' + q).then(res => res.json());
    return results;
}
const searchRadio = async (q) => {
    const results = await fetch('http://localhost:3000/deezer/search/radio?q=' + q).then(res => res.json());
    return results;
}
const searchUser = async (q) => {
    const results = await fetch('http://localhost:3000/deezer/search/user?q=' + q).then(res => res.json());
    return results;
}
const searchAll = async (q) => {
    const tracks = await searchTrack(q);
    const albums = await searchAlbum(q);
    const artists = await searchArtist(q);
    const playlists = await searchPlaylist(q);
    const podcasts = await searchPodcast(q);
    const radios = await searchRadio(q);
    const users = await searchUser(q);
    return {
        tracks,
        albums,
        artists,
        playlists,
        podcasts,
        radios,
        users
    };
}

export {
    searchTrack,
    searchAlbum,
    searchArtist,
    searchAll,
    searchHistory,
    searchPlaylist,
    searchPodcast,
    searchRadio,
    searchUser,
}