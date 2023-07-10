import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { TracksList } from "../../../components/TracksList";

export const Tracks = () => {
	const { q } = useParams();

	console.log(q);

	return (
      <>
	  	<TracksList query={q} expanded={true}/>
	  </>
  )
}
