const { response } = require('express');
const express = require('express');
const {
	createWorkout,
	getWorkout,
	getWorkouts,
	deleteWorkout,
	updateWorkout,
} = require('../controllers/workoutController');

const router = express.Router();

// GET all workouts - this is to get all workouts
router.get('/', getWorkouts);

// GET a single workout
router.get('/:id', getWorkout);

// POST a new workout - to create a new workout
router.post('/', createWorkout);

// DELETE a workout
router.delete('/:id', deleteWorkout);

// UPDATE a workout
router.patch('/:id', updateWorkout);

module.exports = router;
