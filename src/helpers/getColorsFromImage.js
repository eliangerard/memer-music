import ColorThief from 'colorthief';

const colorThief = new ColorThief();

export const getColorsFromImage = async (imageUrl) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = imageUrl;
    await new Promise(resolve => img.addEventListener('load', resolve));
    const colors = colorThief.getPalette(img);
    return colors;
}