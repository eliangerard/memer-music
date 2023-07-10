import { useParams } from "react-router-dom";
import { ArtistsList } from "../../../components/ArtistsList";

export const Artists = () => {
    const { q } = useParams();
    return (
        <ArtistsList query={q} expanded={true} />
    )
}
