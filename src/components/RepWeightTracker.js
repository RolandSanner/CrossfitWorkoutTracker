import React from 'react';

const RepWeightTracker = ({ exercises, exerciseData, setExerciseData }) => {
  const handleInputChange = (index, field, value) => {
    const newExerciseData = [...exerciseData];
    newExerciseData[index][field] = value;
    setExerciseData(newExerciseData);
  };

  return (
    <div>
      {exerciseData.map((exercise, index) => (
        <div key={exercise.id}>
          <h4>{exercise.name}</h4>
          <label>
            Reps:
            <input
              type="number"
              value={exercise.reps}
              onChange={event => handleInputChange(index, 'reps', event.target.value)}
            />
          </label>
          <label>
            Weight:
            <input
              type="number"
              value={exercise.weight}
              onChange={event => handleInputChange(index, 'weight', event.target.value)}
            />
          </label>
        </div>
      ))}
    </div>
  );
};

export default RepWeightTracker;
