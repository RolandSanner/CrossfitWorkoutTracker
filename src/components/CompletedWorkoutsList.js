import React, { useState } from 'react';

const CompletedWorkoutsList = ({ completedWorkouts }) => {
  const [selectedWorkoutIndex, setSelectedWorkoutIndex] = useState(-1);

  const handleWorkoutSelect = (index) => {
    setSelectedWorkoutIndex(index);
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Completed Workouts</h2>
      {completedWorkouts.length > 0 ? (
        <>
          <select onChange={(e) => handleWorkoutSelect(e.target.value)}>
            <option value="-1">Select a completed workout</option>
            {completedWorkouts.map((workout, index) => (
              <option key={index} value={index}>
                {workout.name} - {new Date(workout.timestamp).toLocaleString()}
              </option>
            ))}
          </select>
          {selectedWorkoutIndex >= 0 && (
            <div>
              <h3>{completedWorkouts[selectedWorkoutIndex].name}</h3>
              <ul>
                {completedWorkouts[selectedWorkoutIndex].exercises.map((exercise, index) => (
                  <li key={index}>
                    <span className="font-bold">{exercise.name}:</span> {exercise.reps} reps, {exercise.weight} lbs
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      ) : (
        <p>No completed workouts yet.</p>
      )}
    </div>
  );
};

export default CompletedWorkoutsList;
