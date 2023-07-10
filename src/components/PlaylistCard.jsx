import { useEffect, useState } from 'react';
import { getColorsFromImage } from '../helpers/getColorsFromImage';
import './PlaylistCard.css'

export const PlaylistCard = ({ id, picture_big, title }) => {

    const [backgroundColor, setBackgroundColor] = useState([[0, 0, 0]]);

    const [r, g, b] = backgroundColor[0];
    useEffect(() => {
        getColorsFromImage(picture_big)
            .then(colors => {
                setBackgroundColor(colors);
            });
    }, [picture_big]);

    return (
        <>
            <div
                className="topPlaylist"
                style={
                    {
                        backgroundColor: `rgba(${r}, ${g}, ${b}, 0.2)`,
                        outlineColor: `rgba(${r}, ${g}, ${b}, 1)`
                    }
                }
            >
                <img src={picture_big} alt="" />
                <p>{title}</p>
            </div>
        </>
    )
}
