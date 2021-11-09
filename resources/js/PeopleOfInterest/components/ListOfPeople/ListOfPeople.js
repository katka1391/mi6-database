import { useEffect, useState } from "react"

export default function ListOfPeople() {

    const [searchTerm, setSearchTerm] = useState('');
    const [people, setPeople] = useState([]);

    const loadPeopleData = async () => {
        const url = '/api/person/search?search=' + encodeURIComponent(searchTerm);
        const response = await fetch(url);
        const data = await response.json();

        setPeople(data);
    }

    // run loadPeopleData on change of the searchTerm
    useEffect(() => {
        loadPeopleData();
    }, [searchTerm]);

    return (
        <div className="list-of-people">

            <h1 className="list-of-people__headline">People of interest</h1>

            <div className="list-of-people__search">
                <label>Search:</label><br />
                <input
                    type="text"
                    className="list-of-people__search-input"
                    onChange={ event => setSearchTerm(event.target.value) }
                />
            </div>

            <ul className="list-of-people__list">

                {
                    people.map(person => (
                        <li>
                            <div className="name">{ person.name }</div>
                            <div className="occupation">{ person.occupation }</div>
                            <div className="status-text">{ person.status_text }</div>
                        </li>
                    ))
                }

            </ul>

        </div>
    )

}