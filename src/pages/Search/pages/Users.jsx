import { useParams } from "react-router-dom";
import { UsersList } from "../../../components/UsersList";

export const Users = () => {
	const { q } = useParams();
	return (
		<UsersList query={q} expanded={true} />
	)
}
