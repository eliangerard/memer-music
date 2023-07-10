import { useEffect, useState } from "react";
import { getCharts } from "../helpers/getCharts"
import { ArtistCard } from "../components/ArtistCard";
import './Explore.css'
import { SongCard } from "../components/SongCard";
import { PlaylistCard } from "../components/PlaylistCard";
import { PodcastCard } from "../components/PodcastCard";
import { useFetch } from "../hooks/useFetch";
import { GenreCard } from "../components/GenreCard";

export const Explore = () => {
    const [charts, setCharts] = useState({})
    useEffect(() => {
        const fetchCharts = async () => {
            const charts = await getCharts();
            console.log(charts);
            setCharts(charts);
        }
        fetchCharts();
    }, []);

    const { data, isLoading, hasError } = useFetch('http://localhost:3000/deezer/genre');
    console.log(data);

    const genres = data?.data;
    return (
        <>
            <div className="genres">
                {isLoading && <p>Loading...</p>}
                {!isLoading && genres.map(genre => <GenreCard key={genre.id} {...genre} />)}
            </div>
        </>
    )
}