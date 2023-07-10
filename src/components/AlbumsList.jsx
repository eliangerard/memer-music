import { useEffect, useState } from "react"
import { searchAlbum } from "../helpers/search"
import { AlbumCard } from "./AlbumCard"

export const AlbumsList = ({query, expanded = false}) => {
    const [albums, setAlbums] = useState({ data: [] })    

    useEffect(() => {
        const fetchAlbums = async (query) => {
            const result = await searchAlbum(query)
            setAlbums(result);
        }
        if(query)
            fetchAlbums(query);
    }, [query]);

    return (
        <>
            <h3>Albums</h3>
            <div className="topArtists" style={{ width: '100%', overflowX: 'scroll' }}>
                <div className={'flex' + (expanded ? ' searchExpanded' : '')} style={{ width: 'fit-content' }}>
                    {
                        albums.data.map(album => <AlbumCard key={album.id} {...album} />)
                    }
                </div>
            </div>
        </>
    )
}
