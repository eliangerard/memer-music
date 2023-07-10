import { createContext, useState } from 'react';

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
    const [track, setTrack] = useState({
        title: 'Nothing is playing',
        artist: {
            name: ''
        },
        album: {
            cover_big: 'https://cdn.saleminteractivemedia.com/shared/images/default-cover-art.png'
        },
        duration: 0,
        colors: [0,0,0]
    });

    return (
        <PlayerContext.Provider value={{ track, setTrack }}>
            {children}
        </PlayerContext.Provider>
    );
}