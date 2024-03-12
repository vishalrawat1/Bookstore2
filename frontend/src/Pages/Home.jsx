import React from 'react'
import { Link } from 'react-router-dom';
const Home = () => {
    const image = require("../Images/download.jpeg")
    return (
        <div>
          <div className="container-fluid bg-light p-5 text-center">
            <h1>Welcome to our Bookstore</h1>
            <p>Discover a wide range of books for every taste</p>
            <a className="nav-item">
                <Link to="/books"><button type="button" class="btn btn-primary">Explore Books</button></Link>
              </a>
          </div>
          <div className="container mt-5">
            <h2 className="mb-4">Featured Books</h2>
            <div className="row">
              {/* Example Book Card (Repeat for each featured book) */}
              <div className="col-md-4 mb-4">
                <div className="card">
                  <img src={image} className="card-img-top" alt="Book Cover" />
                  <div className="card-body">
                    <h5 className="card-title">Book Title</h5>
                    <p className="card-text">Author: Author Name</p>
                    <a href="#" className="btn btn-primary">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Home