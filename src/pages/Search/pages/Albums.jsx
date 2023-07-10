import { useParams } from "react-router-dom"
import { AlbumsList } from "../../../components/AlbumsList";

export const Albums = () => {

  const { q } = useParams();

  return (
    <AlbumsList query={q} expanded={true} />
  )
}
