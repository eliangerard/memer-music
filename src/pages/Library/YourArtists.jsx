import { ArtistCard } from "../../components"

export const YourArtists = ({artists}) => {
    return (
        <>
            <h4>Artists</h4>
            <div className="topArtists" style={{ width: '100%', overflowX: 'scroll' }}>
                <div className="flex searchExpanded">
                    {
                        artists.data?.map(artist => <ArtistCard key={artist.id} {...artist} />)
                    }
                </div>
            </div>
        </>
    )
}
