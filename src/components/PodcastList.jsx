import { useEffect, useState } from "react";
import { searchPodcast } from "../helpers/search";
import { PodcastCard } from "./PodcastCard";

export const PodcastList = ({query, expanded=false}) => {
    const [podcasts, setPodcasts] = useState({ data: [] })    

    useEffect(() => {
        const fetchPodcasts = async (query) => {
            const result = await searchPodcast(query);
            setPodcasts(result);
        }
        if(query)
            fetchPodcasts(query);
    }, []);
    return (
        <>
            <h3>Podcasts</h3>
            <div className="topArtists" style={{ width: '100%', overflowX: 'scroll' }}>
                <div className={'flex' + (expanded ? ' searchExpanded' : '')}>
                    {
                        podcasts.data.map(podcast => <PodcastCard key={podcast.id} {...podcast} />)
                    }
                </div>
            </div>
        </>
    )
}
