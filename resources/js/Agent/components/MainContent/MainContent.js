import { Route, Routes } from 'react-router';
import Homepage from '../Homepage/Homepage';
import ListOfPeople from '../ListOfPeople/ListOfPeople';
import PersonDetail from '../PersonDetail/PersonDetail';

export default function MainContent() {
    return (
        <div className="main__content">

            <Routes>

                <Route exact path="/agent" element={ <Homepage /> } />

                <Route exact path="/agent/people-of-interest" element={ <ListOfPeople /> } />

                <Route path="/agent/person" element={ <PersonDetail /> } />

            </Routes>

        </div>
    )
}