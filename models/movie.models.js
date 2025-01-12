import mongoose, { model, Schema } from "mongoose";

const movieschema = new Schema({
    title: String,
    desc: string
})

//create your model
const movie = model("Movie", movieschema)

export default movie;
