import { PlaylistCard } from "../../components"

export const YourPlaylists = ({playlists}) => {
    return (
        <>
            <h4>Playlists</h4>
            <div className="topArtists" style={{ width: '100%', overflowX: 'scroll' }}>
                <div className="flex searchExpanded" style={{ width: 'fit-content' }}>
                    {
                        playlists?.data?.map(playlist => <PlaylistCard key={playlist.id} {...playlist} />)
                    }
                </div>
            </div>
        </>
    )
}
