import { useEffect, useState } from "react";
import { searchTrack } from "../helpers/search";
import { SongCard } from "./SongCard";
import { SongCardExpanded } from "./SongCardExpanded";

export const TracksList = ({ query, expanded = false }) => {
    const [tracks, setTracks] = useState({ data: [] })

    useEffect(() => {
        const fetchTracks = async (query) => {
            const result = await searchTrack(query);
            setTracks(result);
        }
        if (query)
            fetchTracks(query);
    }, [query]);
    return (
        <>
            <h3>Songs</h3>
            <div className="topArtists" style={{ width: '100%', overflowX: 'scroll' }}>
                <div className={'topTracksContainer' + (expanded ? ' expanded' : '')}>
                    {
                        expanded ?
                            tracks.data.map(song => <SongCardExpanded key={song.id} {...song} />)
                            :
                            tracks.data.map(song => <SongCard key={song.id} {...song} />)
                    }
                </div>
            </div>
        </>
    )
}
