import { useParams } from "react-router-dom";
import { PlaylistList } from "../../../components/PlaylistList";

export const Playlists = () => {
  const { q } = useParams();

  return (
    <PlaylistList  query={q} expanded={true}/>
  )
}
