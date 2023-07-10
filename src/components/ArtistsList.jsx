import { useEffect, useState } from "react"
import { searchArtist } from "../helpers/search"
import { ArtistCard } from "./ArtistCard"

export const ArtistsList = ({query, expanded = false}) => {
    const [artists, setArtists] = useState({ data: [] })    

    useEffect(() => {
        const fetchArtists = async (query) => {
            const result = await searchArtist(query)
            setArtists(result);
        }
        if(query)
            fetchArtists(query);
    }, [query]);

    return (
        <>
            <h3>Artists</h3>
            <div className="topArtists" style={{ width: '100%', overflowX: 'scroll' }}>
                <div className={'flex' + (expanded ? ' searchExpanded' : '')} style={{ width: 'fit-content' }}>
                    {
                        artists.data.map(artist => <ArtistCard key={artist.id} {...artist} />)
                    }
                </div>
            </div>
        </>
    )
}
