import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Workout from './components/Workout';

function App() {

  const [workoutList, setWorkoutList] = useState([]);
  const [workoutDay, setWorkoutDay] = useState('');

  const addWorkoutDay = () => {
    const day = {
      name: workoutDay,
      id: workoutList.length === 0 ? 1 : workoutList[workoutList.length - 1].id + 1
    }
    setWorkoutList([...workoutList, day]);
  }

  const deleteWorkoutDay = (id) => {
    setWorkoutList(workoutList.filter((day) => {
      if(day.id === id) {
        return false 
      } else {
        return true
      }
    }))
  }


  return (
    <div className="App">
      <Header/>
        <div className='add-day'>
          <input type='text' placeholder='Enter Workout Day e.g. Legs, Chest & Triceps, etc.' onChange={(event) => {setWorkoutDay(event.target.value)}}/>
          <button type='submit' onClick={addWorkoutDay}>Submit</button>
      </div>
      {workoutList.map((day) => {
        return(
          <Workout
          day={day}
          deleteWorkoutDay={deleteWorkoutDay}/>
        )
      })}
    </div>
  );
}

export default App;
