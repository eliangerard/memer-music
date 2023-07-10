import { useEffect, useState } from 'react';
import './GenreCard.css'
import { getColorsFromImage } from '../helpers/getColorsFromImage';

export const GenreCard = ({ picture_big, name }) => {

    const [backgroundColor, setBackgroundColor] = useState([[0, 0, 0]]);
    const [r, g, b] = backgroundColor[0];

    useEffect(() => {
        getColorsFromImage(picture_big)
            .then(colors => {
                setBackgroundColor(colors);
            });
    }, [picture_big]);

    return (
        <div className='genreCard' style={{outlineColor : `rgba(${r}, ${g}, ${b}, 1 )`}}>
            <img src={picture_big} alt="" />
            <p>{name}</p>
        </div>
    )
}
