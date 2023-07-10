import { useEffect, useState } from "react"
import { testSession } from "../helpers/testSession";
import { getUser } from "../helpers/getUser";

export const useLibrary = (user, accessToken) => {

    if (user.data = null) return;

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })

    const getFetch = async () => {
        const loged = await testSession(localStorage.getItem('access'));

        let data;
        const user = await getUser(localStorage.getItem('access'));
        console.log(user);

        if (user.error) {
            data = {
                albums: {
                    data: [
                        { title: '', cover_medium: 'https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg', artist: {name: ''} },
                        { title: '', cover_medium: 'https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg', artist: {name: ''} },
                        { title: '', cover_medium: 'https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg', artist: {name: ''} },
                        { title: '', cover_medium: 'https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg', artist: {name: ''} },
                        { title: '', cover_medium: 'https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg', artist: {name: ''} },
                    ]
                },
                artists: {
                    data: [
                        { name: '', picture_medium: 'https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg' },
                        { name: '', picture_medium: 'https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg' },
                        { name: '', picture_medium: 'https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg' },
                        { name: '', picture_medium: 'https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg' },
                        { name: '', picture_medium: 'https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg' },
                    ]
                },
                playlists: {
                    data: [
                        { title: '', picture_big: 'https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg' },
                        { title: '', picture_big: 'https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg' },
                        { title: '', picture_big: 'https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg' },
                        { title: '', picture_big: 'https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg' },
                        { title: '', picture_big: 'https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg' },
                    ]
                },
                releases: {
                    data: [
                        { title: '', cover_medium: 'https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg', artist: {name: ''} },
                        { title: '', cover_medium: 'https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg', artist: {name: ''} },
                        { title: '', cover_medium: 'https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg', artist: {name: ''} },
                        { title: '', cover_medium: 'https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg', artist: {name: ''} },
                        { title: '', cover_medium: 'https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg', artist: {name: ''} },
                    ]
                },
                songs: {
                    data: [
                        { title: '', artist: { name: '' }, duration: '', album: { cover_medium: '' } },
                        { title: '', artist: { name: '' }, duration: '', album: { cover_medium: '' } },
                        { title: '', artist: { name: '' }, duration: '', album: { cover_medium: '' } },
                        { title: '', artist: { name: '' }, duration: '', album: { cover_medium: '' } },
                        { title: '', artist: { name: '' }, duration: '', album: { cover_medium: '' } },
                    ]
                },
                yourSongs: {
                    data: [
                        { title: '', artist: { name: '' }, duration: '', album: { cover_medium: '' } },
                        { title: '', artist: { name: '' }, duration: '', album: { cover_medium: '' } },
                        { title: '', artist: { name: '' }, duration: '', album: { cover_medium: '' } },
                        { title: '', artist: { name: '' }, duration: '', album: { cover_medium: '' } },
                        { title: '', artist: { name: '' }, duration: '', album: { cover_medium: '' } },
                    ]
                }

            }

            return setState({
                data,
                isLoading: false,
                hasError: null
            })
        }

        setState({
            ...state,
            isLoading: true,
        })

        console.log(`http://localhost:3000/deezer/user/${user.id}/recommendations/releases?access_token=${localStorage.getItem("access")}&output=json`);

        const releases = await fetch(`http://localhost:3000/deezer/user/${user.id}/recommendations/releases?access_token=${localStorage.getItem("access")}&output=json`).then(res => res.json());
        const playlists = await fetch(`http://localhost:3000/deezer/user/${user.id}/recommendations/playlists?access_token=${localStorage.getItem("access")}&output=json`).then(res => res.json());
        const songs = await fetch(`http://localhost:3000/deezer/user/${user.id}/recommendations/tracks?access_token=${localStorage.getItem("access")}&output=json`).then(res => res.json());
        const albums = await fetch(`http://localhost:3000/deezer/user/${user.id}/recommendations/albums?access_token=${localStorage.getItem("access")}&output=json`).then(res => res.json());
        const artists = await fetch(`http://localhost:3000/deezer/user/${user.id}/recommendations/artists?access_token=${localStorage.getItem("access")}&output=json`).then(res => res.json());
        const yourSongs = await fetch(`http://localhost:3000/deezer/user/${user.id}/tracks?access_token=${localStorage.getItem("access")}&output=json`).then(res => res.json());

        data = {
            releases: releases,
            playlists: playlists,
            songs: songs,
            albums: albums,
            artists: artists,
            yourSongs: yourSongs,
        }

        console.log(data);
        setState({
            data,
            isLoading: false,
            hasError: null
        })
    }

    useEffect(() => {
        getFetch();
    }, [user]);

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };
}
