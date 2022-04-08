import {BrowserRouter} from "react-router-dom";
import App from "./components/app";

const {createRoot} = require("react-dom");

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>

)
