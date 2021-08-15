const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now,
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Please enter the type of exercise!"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Please enter the name of the exercise!"
                },
                duration: {
                    type: Number,
                    trim: true,
                    required: "Please enter the duration of your exercise!"
                },
                weight: {
                    type: Number,
                    trim: true,
                    required: "Please enter the weight of your exercise!"
                },
                reps: {
                    type: Number,
                    trim: true,
                    required: "Please enter the reps of your exercise!"
                },
                sets: {
                    type: Number,
                    trim: true,
                    required: "Please enter the sets of your exercise!"
                },
                distance: {
                    type: Number,
                    trim: true,
                    required: "Please enter the distance of your exercise!"
                }
            }
        ],
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

WorkoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

WorkoutSchema.virtual("totalDistance").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.distance;
    }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;