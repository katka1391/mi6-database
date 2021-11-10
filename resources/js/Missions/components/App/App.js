import Menu from '../Menu/Menu';
import MissionList from '../MissionList/MissionList';
import MissionEditForm from '../MissionEditForm/MissionEditForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
    return (
        <BrowserRouter>

            <div className="missions">

                <Menu />

                <div className="missions__content">

                    <Routes>

                        <Route path="/missions" element={ <MissionList /> } />

                        <Route path="/missions/create" element={ <MissionEditForm /> } />

                    </Routes>

                </div>

            </div>

        </BrowserRouter>
    )
}