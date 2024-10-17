import express from "express";
import movieroute from './routes/movie.route.js';

const app =  express();
const port = 2000;

app.get('/', (req,res ) => {
    res.json({msg:"Hello viewers"})
})

app.use('/movies', movieroute);


app.listen(2000, ()=>{
    console.log(`The server is running at http://localhost:${port}`);
    
})

