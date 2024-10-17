export const movieIndex = (req,res)=>{
    res.send("get all movie lists");
}

export const movieCreate = ('/',(req, res)=>{
    res.send("Create a movie");
})

export const movieUpdate = ('/:id', (req, res)=>{
    res.send("Update a movie");
})

export const movieDelete = ('/:id', (req, res)=>{
    res.send(" Delete a movie");
}) 