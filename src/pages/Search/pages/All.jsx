import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
import { SongCardExpanded, ArtistCard, SongCard, PodcastCard, PlaylistCard } from "../../../components";
import { searchAll, searchHistory } from "../../../helpers/search";
import { ArtistsList } from "../../../components/ArtistsList";
import { PlaylistList } from "../../../components/PlaylistList";
import { TracksList } from "../../../components/TracksList";
import { PodcastList } from "../../../components/PodcastList";

export const All = () => {
	const [query, setQuery] = useState("")

	const {q} = useParams();

	if(!q)
		searchHistory().p
	console.log(q);
	
	useEffect(() => {
		setQuery(q)
	}, [q])

	const fetchAll = (query) => {
		setQuery(query);
	}

	return (
		<>
			{query && <ArtistsList query={query}/>}
			{query && <TracksList query={query}/>}
			{query && <PlaylistList query={query}/>}
			{query && <PodcastList query={query}/> }
		</>

	)
}
