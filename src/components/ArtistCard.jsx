import { useEffect, useState } from 'react';
import { getColorsFromImage } from '../helpers/getColorsFromImage'
import './ArtistCard.css'

export const ArtistCard = ({ picture_medium, name }) => {
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
            className="artistCard"
            style={
                {
                    backgroundColor: `rgba(${r}, ${g}, ${b}, 0.5)`,
                    outlineColor: `rgba(${r}, ${g}, ${b}, 1)`
                }}
        >
            <img src={picture_medium} alt="" />
            <div>
                <p>{name}</p>
            </div>
        </div>
    )
}
