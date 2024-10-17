import express from "express";

const app =  express();
const port = 2000;

app.get('/', (req,res ) => {
    res.json({msg:"hello the viewers"})
})

app.listen(2000, ()=>{
    console.log(`The server is running at http://localhost:${port}`);
    
})

