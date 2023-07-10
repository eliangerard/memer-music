import { useEffect, useState } from 'react';
import { getColorsFromImage } from '../helpers/getColorsFromImage'
import './AlbumCard.css'

export const AlbumCard = ({ cover_medium, artist, title }) => {
    const [backgroundColor, setBackgroundColor] = useState([[0, 0, 0]]);

    const [r, g, b] = backgroundColor[0];
    useEffect(() => {
        getColorsFromImage(cover_medium)
            .then(colors => {
                setBackgroundColor(colors);
            });
    }, [cover_medium]);
    return (
        <div
            className="albumCard"
            style={
                {
                    backgroundColor: `rgba(${r}, ${g}, ${b}, 0.5)`,
                    outlineColor: `rgba(${r}, ${g}, ${b}, 1)`
                }
            }
        >
            <img src={cover_medium} alt="" />
            <div>
                <p>{title}</p>
                <p className='secondary'>{artist.name}</p>
            </div>
        </div>
    )
}
