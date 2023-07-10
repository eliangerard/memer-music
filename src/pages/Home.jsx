import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { grantLogin } from "../helpers/getAccessToken";
import { getCharts } from "../helpers/getCharts";
import { ArtistCard, SongCard, PlaylistCard, PodcastCard } from "../components";
import { UserContext } from "../context/UserProvider";
import { testSession } from "../helpers/testSession";
import { getUser } from "../helpers/getUser";

export const Home = () => {
	const [charts, setCharts] = useState({})
	const { code } = useParams();
	const { setUser } = useContext(UserContext);

	console.log(code);

	const auth = async () => {
		const loged = await testSession(localStorage.getItem('access'));
		if(loged) {
			const user = await getUser(localStorage.getItem('access'));
			console.log("Fetching user:", user);
			setUser(user);
		}
		if (!loged && code) {
			const res = await grantLogin(code);
			console.log("Login");

			if (!res.error)
				localStorage.setItem('access', res.access_token);
		}
	}

	useEffect(() => {
		auth();
	}, [code]);

	useEffect(() => {
		const fetchCharts = async () => {
			const charts = await getCharts();
			console.log(charts);
			setCharts(charts);
		}
		fetchCharts();
	}, []);

	return (
		<>
			<h3>Top Artists</h3>
			<div className="topArtists" style={{ width: '100%', overflowX: 'scroll' }}>
				<div className="flex" style={{ width: 'fit-content' }}>
					{
						charts.artists?.data?.map(artist => <ArtistCard key={artist.id} {...artist} />)
					}
				</div>
			</div>
			<h3>Top Songs</h3>
			<div className="topArtists" style={{ width: '100%', overflowX: 'scroll' }}>
				<div className="topTracksContainer">
					{
						charts.tracks?.data?.map(song => <SongCard key={song.id} {...song} />)
					}
				</div>
			</div>
			<h3>Top Playlists</h3>
			<div className="topArtists" style={{ width: '100%', overflowX: 'scroll' }}>
				<div className="flex" style={{ width: 'fit-content' }}>
					{
						charts.playlists?.data?.map(playlist => <PlaylistCard key={playlist.id} {...playlist} />)
					}
				</div>
			</div>
			<h3>Top Prodcasts</h3>
			<div className="topArtists" style={{ width: '100%', overflowX: 'scroll' }}>
				<div className="topTracksContainer">
					{
						charts.podcasts?.data?.map(podcast => <PodcastCard key={podcast.id} {...podcast} />)
					}
				</div>
			</div>
		</>
	)
}
