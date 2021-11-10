import { useState } from "react"

export default function MissionEditForm() {

    const [values, setValues] = useState(

        {
            name: '',
            year: '2021',
            outcome: ''
        }

    )

    const handleChange = (event) => {
        setValues(previous_values => {
            return ({...previous_values,
                [event.target.name]: event.target.value
            });
        });
    }

    return (

        <form className="mission-edit-form" action="" method="post">

            <div className="mission-edit-form__form-group">

                <label className="mission-edit-form__label">
                    Name:
                </label>

                <input type="text" name="name" value={ values.name } onChange={ handleChange } />

            </div>

            <div className="mission-edit-form__form-group">

                <label className="mission-edit-form__label">
                    Year:
                </label>

                <input type="text" name="year" value={ values.year } onChange={ handleChange } />

            </div>

            <div className="mission-edit-form__form-group">

                <label className="mission-edit-form__label">
                    Outcome:
                </label>

                <select name="outcome" value={ values.outcome } onChange={ handleChange }>
                    <option value="">--- choose one ---</option>
                    <option value="in-progress">In progress</option>
                    <option value="success">Success</option>
                    <option value="failure">Failure</option>
                </select>

            </div>

            <div className="mission-edit-form__form-group">

                <button>Save the mission</button>

            </div>

        </form>

    )
}