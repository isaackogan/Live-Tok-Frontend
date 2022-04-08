import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./header";
import {useParams, useSearchParams} from "react-router-dom";
import CreatorPage from "./pages/creator/creator";
import Dashboard from "./pages/dashboard/Dashboard";

const SearchPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    window.location.replace(`/@${searchParams.get("creator_id")}`);
    return <div/>
}

const Main = () => {

    return (
        <Routes>
            <Route path="/@:creator_id" element={<CreatorPage />} />
            <Route path="/manage" element={<Dashboard />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/" element={<Home />} />
        </Routes>
    )

}

const App = () => {
    return (
        <div className="App">
            <Header />
            <Main />
        </div>
    )
}

export default App;
