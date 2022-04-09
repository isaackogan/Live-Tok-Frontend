import {BrowserRouter} from "react-router-dom";
import App from "./components/app";

const {createRoot} = require("react-dom/client");

const container = document.getElementById("root");
const root = createRoot(container);


const Config = {
    tiktok_ws_url: "http://202.61.197.67:25562/",
    backend_api_url: "http://127.0.0.1:8001/"
}

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>

);


export default Config;
