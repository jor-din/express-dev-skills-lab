import mongoose from "mongoose";

const Schema = mongoose.Schema

const skillSchema = new Schema({
    name: String,
    position: String,
    jersey: Number,
    start: Boolean,
})

const Skill = mongoose.model('Skill', skillSchema)

export {
    Skill
}