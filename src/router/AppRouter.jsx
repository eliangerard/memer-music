import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Header, Navbar, Player } from "../UI/components"
import { Explore } from "../pages/Explore";
import { Library } from "../pages/Library";
import { PlayerProvider } from "../context/PlayerProvider";
import { SearchRouter } from "../pages/Search/router/SearchRouter";
import { RedirectCode } from "./RedirectCode";
import { SearchProvider } from "../pages/Search/context/SearchProvider";
import { UserProvider } from "../context/UserProvider";

export const AppRouter = () => {
    return (
        <>
            <SearchProvider>
                <UserProvider>
                    <Header />
                    <Navbar />
                    <PlayerProvider>
                        <Player />
                        <div className="content">
                            <Routes>
                                <Route path="home/:code?" element={<Home />} />
                                <Route path="explore" element={<Explore />} />
                                <Route path="library" element={<Library />} />
                                <Route path="search/*" element={<SearchRouter />} />

                                <Route path="/:code?" element={<RedirectCode />} />
                            </Routes>
                        </div>
                    </PlayerProvider>
                </UserProvider>
            </SearchProvider>
        </>
    )
}
