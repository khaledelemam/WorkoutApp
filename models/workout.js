/*Mongoose model for workouts*/
const mongoose = require('mongoose')

const WorkoutSchema = new mongoose.Schema({
    name: String,
    exercises: [ExerciseSchema]
});

const Workout = mongoose.model('Workout', WorkoutSchema);