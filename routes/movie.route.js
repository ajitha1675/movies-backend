//CRUD o/p
import express from "express";
import {movieIndex,  
    movieCreate, 
    movieUpdate,
    movieDelete} from 
    "../controllers/movie.controller.js";


const router = express.Router();

//r- reading
router.get("/",movieIndex)

//c-create
router.post('/',movieCreate)

//u-update
router.put('/:id',movieUpdate)

//d-delete 

router.delete('/:id', movieDelete
    
) 

export default router;