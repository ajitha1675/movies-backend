import express from "express";

const app =  express();
const port = 2000;

app.get('/', (req,res ) => {
    res.json({msg:"Hello viewers"})
})

//CRUD o/p

//r- reading
app.get('/movies',()=>{

})

//c-create
app.post('/movies',()=>{

})

//u-update
app.put('/movies/:id', ()=>{

})

//d-delete

app.delete('/movies/id', ()=>{
    
})
app.listen(2000, ()=>{
    console.log(`The server is running at http://localhost:${port}`);
    
})

