import { useState, useEffect } from 'react';
import './SongCard.css';
import { getColorsFromImage } from '../helpers/getColorsFromImage';

export const PodcastCard = ({ title, fans, picture_medium }) => {
    const [backgroundColor, setBackgroundColor] = useState([[0, 0, 0]]);

    const [r, g, b] = backgroundColor[0];
    useEffect(() => {
        getColorsFromImage(picture_medium)
            .then(colors => {
                setBackgroundColor(colors);
            });
    }, [picture_medium]);

    return (
        <div
            className="track"
            style={
                {
                    backgroundColor: `rgba(${r}, ${g}, ${b}, 0.5)`,
                    outlineColor: `rgba(${r}, ${g}, ${b}, 1)`
                }}
        >
            <img src={picture_medium} alt="" />
            <div className="trackData">
                <p className="trackName">{title}</p>
                <p >{`${fans.toLocaleString('en-US')} fans`}</p>
            </div>
        </div>
    )
}
