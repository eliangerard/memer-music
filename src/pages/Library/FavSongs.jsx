import { SongCard, SongCardExpanded } from "../../components"

export const FavSongs = ({yourSongs}) => {
    return (
        <>
            <h3>Your songs</h3>
            <div className="topArtists" style={{ width: '100%', overflowX: 'scroll' }}>
                <div className="topTracksContainer expanded">
                    {
                        yourSongs.data?.map(song => <SongCardExpanded key={song.id} {...song} />)
                    }
                </div>
            </div>
        </>
    )
}
