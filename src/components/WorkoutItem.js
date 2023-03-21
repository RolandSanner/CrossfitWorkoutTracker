import React, { useState, useEffect } from 'react';
import RepWeightTracker from './RepWeightTracker';
import workouts from '../data/workouts.json';

const WorkoutItem = ({ workout, onWorkoutCompleted }) => {
  const [completedWorkout, setCompletedWorkout] = useState(false);
  const [currentWorkout, setCurrentWorkout] = useState(workout);
  const [exerciseData, setExerciseData] = useState(workout.exercises.map(exercise => ({ ...exercise, reps: '', weight: '' })));

  useEffect(() => {
    if (completedWorkout) {
      const randomWorkout = workouts[Math.floor(Math.random() * workouts.length)];
      setCurrentWorkout(randomWorkout);
      setCompletedWorkout(false); // Reset completedWorkout state
    }
  }, [completedWorkout]);

  useEffect(() => {
    setExerciseData(currentWorkout.exercises.map(exercise => ({ ...exercise, reps: '', weight: '' }))); // Reset exerciseData state
  }, [currentWorkout]);

  const handleWorkoutCompleted = () => {
    setCompletedWorkout(true);
    onWorkoutCompleted(currentWorkout, exerciseData);
  };
  
  return (
    <div className="WorkoutItem">
      <h2>{currentWorkout.name}</h2>
      <p>{currentWorkout.description}</p>
      {!completedWorkout && (
        <div>
          <RepWeightTracker exercises={currentWorkout.exercises} exerciseData={exerciseData} setExerciseData={setExerciseData} />
          <button className="btn btn-primary" onClick={handleWorkoutCompleted}>
            Completed
          </button>
        </div>
      )}
      {completedWorkout && (
        <p className="text-success">Workout completed! See your completed workouts in the menu.</p>
      )}
    </div>
  );
};

export default WorkoutItem;