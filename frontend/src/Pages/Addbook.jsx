import React from 'react';
import axios from "axios";
import { useState } from 'react';
import useNavigate from "react-router-dom";
const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishyear, setPublishyear] = useState('');
  const handlebook = () => {
      const data = {
      title,
      author,
      publishyear,
    }
    axios.post('https://bookstore2-d9fv.onrender.com/books',data)
    .catch((error)=>{
      console.log(error);
    })
  };
    return (
    <div className='container  justify-content-center p-4 col-md-4 mb-4 text-center'>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" placeholder="Enter the book title" />
      </div>
      <div className="mb-3">
        <label htmlFor="author" className="form-label">
          Author
        </label>
        <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)} className="form-control" id="author" placeholder="Enter the author's name" />
      </div>
      <div className="mb-3">
        <label htmlFor="author" className="form-label">
          publishyear
        </label>
        <input type="text" value={publishyear} onChange={(e)=>setPublishyear(e.target.value)} className="form-control" id="author" placeholder="Enter the author's name" />
      </div>
      <div className='btn btn-primary' onClick={handlebook}> SUBMIT </div>
    </div>
  );
};

export default AddBook;
