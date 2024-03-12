//routes get all books fromd data base;
import express from "express";
const router = express.Router();
import { Book } from "../models/bookmodels.js";
router.get('/', async (req, res) => {
    try {
        const books = await Book.find({});
        return res.status(200).json({
            count : books.length,
            data : books
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: error.message });
    }
});

//--- route to delete the book--- 
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Book.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).send({ message: "Book not found" });
        }
        return res.status(200).send({ message: "Book deleted successfully" });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
});

// routes for geting single books from the database
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params; 
        const book = await Book.findById(id);
        
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        return res.status(200).json(book);
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: error.message });
    }
});

// routes to update the books
router.put('/:id', async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishyear) {
            return res.status(501).send({ message: "A field is missing" });
        }

        const { id } = req.params;
        const result = await Book.findByIdAndUpdate(id, req.body);
        if (!result) {
            console.log(error.message);
            return res.status(404).send({ message: "Book not found" });
        }
        return res.status(200).send({ message: 'Book updated successfully' });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
});

// -- post

router.post('/' , async(req ,res)=>{
    try{
        if(!req.body.title ||!req.body.author || !req.body.publishyear ){
            return res.status(501).send({message :"a field is missing"})
        }
    const newBook = {
        title: req.body.title,
        author: req.body.author,
        publishyear: req.body.publishyear,
        
    };
    const book = await Book.create(newBook);
    res.status(201).send(book);

    }
    catch(error){
        console.log(error);
        res.status(500).send({message :error.message})
    }
})
export default router;


