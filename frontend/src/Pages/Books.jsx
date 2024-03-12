import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('https://bookstore2-d9fv.onrender.com/books')
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <div className='text-dark' style={{ paddingLeft: '0%' }}>
        BOOKS SECTION
        <hr></hr>
      </div>
      <table className='border-separate border-spacing-2'>
        <thead>
          <tr>
            <th className='border border-slate-600 rounded-md'>No</th>
            <th className='border border-slate-600 rounded-md'>Title</th>
            <th className='border border-slate-600 rounded-md'>Author</th>
            <th className='border border-slate-600 rounded-md'>Publish Year</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id} className='h-8'>
              <td className='border border-slate-600 rounded-md text-center'>
                {index + 1}
              </td>
              <td className='border border-slate-600 rounded-md text-center'>
                {book.title}
              </td>
              <td className='border border-slate-600 rounded-md text-center'>
                {book.author}
              </td>
              <td className='border border-slate-600 rounded-md text-center'>
                {book.publishyear}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
