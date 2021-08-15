const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

    day: {type: Date, default: Date.now },
    exercises: [
        {
            type: {
                    type: String,
                    trim: true,
                    required: "Enter workout exercise"
                },
            name: {
                    type: String,
                    trim: true,
                    required: "Enter a name for workout"
                },
            duration: Number,
            distance: Number,
            weight: Number,
            reps: Number,
            sets: Number,
        },
    ]
},
    {
        toJSON: {
            virtuals: true
        },
    }
);

workoutSchema.virtual("totalDuration").get(function () {
    const duration = this.exercises.reduce((acc, curr) => {
        return acc + curr.duration;
    }, 0);
    return duration
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = {Workout};