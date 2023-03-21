import React, { useState, useEffect } from 'react';
import WorkoutList from './components/WorkoutList';
import CompletedWorkoutsList from './components/CompletedWorkoutsList';
import './styles.css';

function App() {
  const [completedWorkouts, setCompletedWorkouts] = useState([]);

  const handleWorkoutCompleted = (workout, exerciseData) => {
    setCompletedWorkouts(prevCompletedWorkouts => [
      ...prevCompletedWorkouts,
      { ...workout, exercises: exerciseData, timestamp: new Date() }
    ]);
  };
  

  return (
    <div className="App">
      <h1 className="superman-title">Crossfit Workout Tracker</h1>
      <CompletedWorkoutsList completedWorkouts={completedWorkouts} />
      <WorkoutList onWorkoutCompleted={handleWorkoutCompleted} />
    </div>
  );
}

export default App;