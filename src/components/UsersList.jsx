import { useEffect, useState } from "react"
import { searchArtist, searchUser } from "../helpers/search"
import { ArtistCard } from "./ArtistCard"

export const UsersList = ({query, expanded = false}) => {
    const [users, setUsers] = useState({ data: [] })    

    useEffect(() => {
        const fetchUsers = async (query) => {
            const result = await searchUser(query)
            setUsers(result);
        }
        if(query)
            fetchUsers(query);
    }, [query]);

    return (
        <>
            <h3>Users</h3>
            <div className="topArtists" style={{ width: '100%', overflowX: 'scroll' }}>
                <div className={'flex' + (expanded ? ' searchExpanded' : '')} style={{ width: 'fit-content' }}>
                    {
                        users.data.map(user => <ArtistCard key={user.id} {...user} />)
                    }
                </div>
            </div>
        </>
    )
}
