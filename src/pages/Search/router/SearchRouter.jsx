import { Route, Routes } from "react-router-dom";
import { All, Albums, Playlists, Tracks, Users } from "../pages";
import { SearchHeader } from "../components/SearchHeader";
import { Artists } from "../pages/Artists";
import { Podcasts } from "../pages/Podcasts";
import { Explore } from "../../Explore";

export const SearchRouter = () => {
    return (
        <>
            <SearchHeader/>
            <Routes>
                <Route path="/albums/:q?" element={<Albums/>}/>
                <Route path="/playlists/:q?" element={<Playlists/>}/>
                <Route path="/songs/:q?" element={<Tracks/>}/>
                <Route path="/users/:q?" element={<Users/>}/>
                <Route path="/artists/:q?" element={<Artists/>}/>
                <Route path="/podcasts/:q?" element={<Podcasts/>}/>
                <Route path="/:q" element={<All/>}/>
                <Route path="/" element={<Explore/>}/>
            </Routes>
        </>
    )
}
