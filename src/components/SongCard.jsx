import { useState, useEffect, useContext } from 'react';
import './SongCard.css';
import { getColorsFromImage } from '../helpers/getColorsFromImage';
import { PlayerContext } from '../context/PlayerProvider';

export const SongCard = (track) => {
    const { title } = track;
    const { title_short = title, artist, album } = track;
    const { setTrack } = useContext(PlayerContext);
    const [backgroundColor, setBackgroundColor] = useState([[0, 0, 0]]);
    const [r, g, b] = backgroundColor[0];

    const completeTrack = { ...track, colors: [0, 0, 0] }

    useEffect(() => {
        getColorsFromImage(album.cover_medium)
            .then(colors => {
                setBackgroundColor(colors);
                completeTrack.colors = colors;
            });
    }, [album.cover_medium]);

    const onClick = () => {
        completeTrack.colors = backgroundColor[0];
        setTrack(completeTrack);
        console.log("AAA");
    }

    return (
        <div
            className="track"
            style={
                {
                    backgroundColor: `rgba(${r}, ${g}, ${b}, 0.5)`,
                    outlineColor: `rgba(${r}, ${g}, ${b}, 1)`
                }
            }
            onClick={onClick}
        >
            <div className='trackBackground'>
                <img src={album.cover_medium} alt="" />
            </div>
            <img src={album.cover_medium} alt="" />
            <div className="trackData">
                <p className="trackName">{title_short}</p>
                <p className="trackAuthor">{artist.name}</p>
            </div>
        </div>
    )
}
