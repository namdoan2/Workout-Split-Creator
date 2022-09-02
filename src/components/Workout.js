import React, {useState} from "react";
import './Workout.css';
import {DeleteForever} from '@material-ui/icons';
import IndividualWorkout from "./IndividualWorkout";

const Workout = ({day, deleteWorkoutDay}) => {

    const [singleWorkout,setSingleWorkout] = useState([]);
    const [workoutName, setWorkoutName] = useState('');

    const addSingleWorkout = () => {
        const exercise = {
            name: workoutName,
            id: singleWorkout.length === 0 ? 1 : singleWorkout[singleWorkout.length - 1].id + 1
        }
        setSingleWorkout([...singleWorkout, exercise])
    }

    const deleteSingleWorkout = (id) => {
        setSingleWorkout(singleWorkout.filter((exercise) => {
            if (exercise.id === id) {
                return false
            } else {
                return true
            }
        }))
    }

    return(
        <div className="workout-container">
        <div className="workout-select">
            <h2>{day.name}</h2>
            <select>
                <option value=''>Select Day</option>
                <option value='Monday'>Monday</option>
                <option value='Tuesday'>Tuesday</option>
                <option value='Wednesday'>Wednesday</option>
                <option value='Thursday'>Thursday</option>
                <option value='Friday'>Friday</option>
                <option value='Saturday'>Saturday</option>
                <option value='Sunday'>Sunday</option>
            </select>
            <DeleteForever onClick={() => deleteWorkoutDay(day.id)}/>
        </div>
        <div className="workouts">
            <div className="input-h3">
            <div className="input-button">
            <input type='text' placeholder='Enter Workout' onChange={(event) => setWorkoutName(event.target.value)}/>
            <button type='submit' onClick={addSingleWorkout}>Submit</button>
            </div>
            <h3>Workouts:</h3>
            {singleWorkout.map((exercise) => {
                return(
                    <IndividualWorkout 
                    exercise={exercise}
                    deleteSingleWorkout={deleteSingleWorkout}
                    />
                )
            })}
        </div>
        <div className="notes">
            <textarea>Notes:</textarea>
        </div>
        </div>
        </div>
    )
}

export default Workout;