import { useParams } from "react-router-dom";
import { PodcastList } from "../../../components/PodcastList";

export const Podcasts = () => {
    const { q } = useParams();

    return (
      <PodcastList  query={q} expanded={true}/>
    )
}
