import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { grantLogin } from "../helpers/getAccessToken";
import { getCharts } from "../helpers/getCharts";
import { ArtistCard, SongCard, PlaylistCard, PodcastCard } from "../components";
import { UserContext } from "../context/UserProvider";
import { useFetch } from "../hooks/useFetch";
import { AlbumCard } from "../components/AlbumCard";
import { useLibrary } from "../hooks/useLibrary";
import { YourArtists } from "./Library/YourArtists";
import { YourAlbums } from "./Library/YourAlbums";
import { YourSongs } from "./Library/YourSongs";
import { YourPlaylists } from "./Library/YourPlaylists";
import { FavSongs } from "./Library/FavSongs";
import { YourReleases } from "./Library/YourReleases";
import { testSession } from "../helpers/testSession";
import { Login } from "./Login";

export const Library = () => {
	const [charts, setCharts] = useState({});
	const [loged, setLoged] = useState(false);
	const { user } = useContext(UserContext);

	const testLogin = async () => {
		const loged = await testSession(localStorage.getItem('access'));
		setLoged(loged);
	}

	useEffect(() => {
		testLogin();
	}, [])

	const { data, isLoading } = useLibrary(user, localStorage.getItem("access"));
	console.log("data", data);

	if (isLoading)
		return (<p>Loading...</p>)


	console.log("Data lib:", data);
	const { releases, yourSongs, albums, artists, songs, playlists } = data;

	return (
		<>
			{ !loged && <Login/>}
			{releases.data && releases.data.length > 0 && <YourReleases releases={releases} />}
			{yourSongs.data && yourSongs.data.length > 0 && <FavSongs yourSongs={yourSongs} />}
			<h3>Recomendations</h3>
			{playlists.data && playlists.data.length > 0 && <YourPlaylists playlists={playlists} />}
			{songs.data && songs.data.length > 0 && <YourSongs songs={songs} />}
			{albums.data && albums.data.length > 0 && <YourAlbums albums={albums} />}
			{artists.data && artists.data.length > 0 && <YourArtists artists={artists} />}
		</>
	)
}
