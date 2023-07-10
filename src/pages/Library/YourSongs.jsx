import { SongCard } from "../../components"

export const YourSongs = ({songs}) => {
    return (
        <>
            <h4>Songs</h4>
            <div className="topArtists" style={{ width: '100%', overflowX: 'scroll' }}>
                <div className="flex searchExpanded" style={{ width: 'fit-content' }}>
                    {
                        songs.data?.map(song => <SongCard key={song.id} {...song} />)
                    }
                </div>
            </div>
        </>
    )
}
