import { BrowserRouter } from "react-router-dom";

import LeftPanel from "../LeftPanel/LeftPanel";
import MainContent from "../MainContent/MainContent";

export default function App() {
    return (
        <BrowserRouter>

            <LeftPanel />

            <MainContent />

        </BrowserRouter>
    )
}