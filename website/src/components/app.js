import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./header";

const Main = () => {

    return (
        <Routes>
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
