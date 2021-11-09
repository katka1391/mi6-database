import { Link } from 'react-router-dom';

export default function LeftPanel() {

    return (
        <div className="left-panel left-panel--agent">

            <div className="left-panel__seal">
                <img src="/img/mi6-seal.png" alt="MI6 seal" />
            </div>

            <div className="left-panel__navigation">

                <a className="left-panel__link" href="/">Home</a>

                <Link to="/agent/people-of-interest" className="left-panel__link">People of interest</Link>

                <Link to="/agent/person" className="left-panel__link">One person</Link>

                <Link to="/agent" className="left-panel__link">Agent access</Link>


            </div>

        </div>
    )
}