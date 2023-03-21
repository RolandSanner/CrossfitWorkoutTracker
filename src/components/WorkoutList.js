import React, { useState, useEffect } from 'react';
import WorkoutItem from './WorkoutItem';
import workouts from '../data/workouts.json';

const WorkoutList = ({ onWorkoutCompleted }) => {
  const [workout, setWorkout] = useState(null);

  useEffect(() => {
    // Select a random workout from the list
    const randomWorkout = workouts[Math.floor(Math.random() * workouts.length)];
    setWorkout(randomWorkout);
  }, []);

  const handleWorkoutCompleted = (workout, exerciseData) => {
    onWorkoutCompleted(workout, exerciseData);
  };

  return (
    <div>
      {workout && <WorkoutItem workout={workout} onWorkoutCompleted={handleWorkoutCompleted} />}
    </div>
  );
};

export default WorkoutList;