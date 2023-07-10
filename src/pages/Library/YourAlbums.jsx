import { AlbumCard } from "../../components/AlbumCard"

export const YourAlbums = ({albums}) => {
    return (
        <>
            <h4>Albums</h4>
            <div className="topArtists" style={{ width: '100%', overflowX: 'scroll' }}>
                <div className="flex searchExpanded">
                    {
                        albums.data?.map(album => <AlbumCard key={album.id} {...album} />)
                    }
                </div>
            </div>
        </>
    )
}
