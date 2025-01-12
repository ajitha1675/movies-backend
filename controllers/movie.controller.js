import movie from "../models/movie.models.js";

export const movieIndex = (req,res)=>{
    res.send("get all movie lists");
}

export const movieCreate = ('/',(req, res)=>{
    //id, title, desc

    
     const movieCreate = async(req,res)=>{
        console.log(req.body);
    }
    
    return res.json(req.body);
})

//validate your data
 const newMovie = new movie({
    title: req.body.title,
    desc: req.body.desc
 });

 await newMovie.save();

export const movieUpdate = ('/:id', (req, res)=>{
    res.send("Update a movie");
})

export const movieDelete = ('/:id', (req, res)=>{
    res.send(" Delete a movie");
}) 