
import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'; // External CSS file for custom styles
import data from './5c77c6124683693.61095f8d1eba9.jpg';
import image2 from './iphone.jpeg';
import image1 from './lgc.jpg';
import image3 from './hhiph.png';
import image4 from './hhlen.jpg';
import image5 from './hhmac.png';
import image6 from './hhsam24.png';
import image7 from './Rog1.png';
import image8 from './hme2.jpg';
import image9 from './Noise.png';
import image10 from './Ptron.png' ;
import mage11 from './hhref.jpg'


function Home() {
  return (
    <div className="home-container">
      {/* Carousel Section */}
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image2} className="d-block w-100" alt="iPhone" />
          </div>
          <div className="carousel-item">
            <img src={data} className="d-block w-100" alt="Laptop" />
          </div>
          <div className="carousel-item">
            <img src={image1} className="d-block w-100" alt="TV" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>

      {/* Row 2: Two-column layout */}
      <div className="row row-2">
        <div className="col-md-6">
          <div className="product-card medium-card">
            <img src={image3} alt="Apple iPhone 15 Pro" />
            <h3>Apple iPhone 15 Pro</h3>
            <p>Price: ₹127,990</p>
            <Link to="http://localhost:3000/phone-details/1"><button>Explore &gt;&gt;</button></Link>
          </div>
        </div>
        <div className="col-md-6">
          <div className="product-card medium-card">
            <img src={image4} alt="Lenovo IdeaPad 1 AMD Ryzen 5" />
            <h3>Lenovo IdeaPad 1 AMD Ryzen 5</h3>
            <p>Price: ₹40,400</p>
            <Link to="http://localhost:3000/laptop-details/5"><button>Explore &gt;&gt;</button></Link>
          </div>
        </div>
      </div>

      {/* Row 3: Three-column layout */}
      <div className="row row-3">
        <div className="col-md-4">
          <div className="product-card small-card">
            <img src={image6} alt="Samsung Galaxy S24 Ultra" />
            <h3>Samsung Galaxy S24 Ultra</h3>
            <p>Price: ₹139,999</p>
            <Link to="http://localhost:3000/phone-details/2"><button>Explore &gt;&gt;</button></Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="product-card small-card">
            <img src={image7} alt="Asus ROG Phone 8 Pro" />
            <h3>Asus ROG Phone 8 Pro</h3>
            <p>Price: ₹34,999</p>
            <Link to="http://localhost:3000/phone-details/3"><button>Explore &gt;&gt;</button></Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="product-card small-card">
            <img src={image5} alt="Apple 2023 MacBook Air" />
            <h3>Apple 2023 MacBook Air</h3>
            <p>Price: ₹115,900</p>
            <Link to="http://localhost:3000/laptop-details/6"><button>Explore &gt;&gt;</button></Link>
          </div>
        </div>
      </div>
      <div style={{maxWidth:'95%', marginLeft:'28px'}}>
        <img src={image8} style={{maxHeight:'500px',width:'100%',objectFit:'cover'}}/>
      </div>
      <div className="row row-3">
        <div className="col-md-4">
          <div className="product-card small-card">
            <img src={image9} alt="Noise Buds VS401" />
            <h3>Noise Buds VS401</h3>
            <p>Price: ₹1,999</p>
            <Link to="http://localhost:3000/airbuds-details/2"><button>Explore &gt;&gt;</button></Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="product-card small-card">
            <img src={mage11} alt="Panasonic NR-BK418BQKN" />
            <h3>Panasonic NR-BK418BQKN</h3>
            <p>Price: ₹56,699</p>
            <Link to="http://localhost:3000/phone-details/3"><button>Explore &gt;&gt;</button></Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="product-card small-card">
            <img src={image10} alt="pTron Bassbuds Duo In-Ear" />
            <h3>pTron Bassbuds Duo In-Ear</h3>
            <p>Price: ₹699</p>
            <Link to="http://localhost:3000/airbuds-details/4"><button>Explore &gt;&gt;</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
