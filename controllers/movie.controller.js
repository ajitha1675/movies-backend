export const movieIndex = (req,res)=>{
    res.send("get all movie lists");
}

export const movieCreate = ('/',(req, res)=>{
    //id, title, desc

    console.log(req.body);
    
    return res.json(req.body);
})

export const movieUpdate = ('/:id', (req, res)=>{
    res.send("Update a movie");
})

export const movieDelete = ('/:id', (req, res)=>{
    res.send(" Delete a movie");
}) 