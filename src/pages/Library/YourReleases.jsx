import { AlbumCard } from "../../components/AlbumCard"

export const YourReleases = ({releases}) => {
    return (
        <>
            <h3>Releases</h3>
            <div className="topArtists" style={{ width: '100%', overflowX: 'scroll' }}>
                <div className="flex searchExpanded">
                    {
                        releases.data?.map(album => <AlbumCard key={album.id} {...album} />)
                    }
                </div>
            </div>
        </>
    )
}
