import { useState, useEffect } from "react";
import { searchPlaylist } from "../helpers/search";
import { PlaylistCard } from "./PlaylistCard";

export const PlaylistList = ({query, expanded = false}) => {
    const [playlists, setPlaylists] = useState({ data: [] })

    useEffect(() => {
        const fetchArtists = async (query) => {
            const result = await searchPlaylist(query)
            setPlaylists(result);
            console.log(result);
        }
        if (query)
            fetchArtists(query);
    }, [query]);

    return (
        <>
            <h3>Playlists</h3>
            <div className="topArtists" style={{ width: '100%', overflowX: 'scroll' }}>
                <div className={'flex' + (expanded ? ' searchExpanded' : '')} style={{ width: 'fit-content' }}>
                    {
                        playlists.data.map(playlist => <PlaylistCard key={playlist.id} {...playlist} />)
                    }
                </div>
            </div>
        </>
    )
}
