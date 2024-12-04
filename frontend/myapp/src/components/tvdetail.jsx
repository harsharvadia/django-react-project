import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";

function TVDetail() {
  const [tv, setTv] = useState(null);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Fetching TV details by id
    const fetchTVDetails = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/products/tvs/${id}/`);
        setTv(response.data);
      } catch (error) {
        console.error("Error fetching TV details:", error);
        setError("Error fetching TV details");
      }
    };


    const fetchTVImages = async () => {
      try {
        const imagesResponse = await axios.get(`http://127.0.0.1:8000/products/timages`);
        setImages(imagesResponse.data);
      } catch (error) {
        console.error("Error fetching TV images:", error);
        setError("Error fetching TV images");
      }
    };

    fetchTVDetails();
    fetchTVImages();
  }, [id]);

  
  const addToCart = () => {
    const loggedInUser = Cookies.get("username");
  
    if (!loggedInUser) {
      alert("You need to log in first.");
      return;
    }
  
    
    const filteredImages = images.filter((image) => image.product_name === tv.id);
  
  
    const firstImage = filteredImages.length > 0 ? filteredImages[0].image : null;
  
    const cartItem = {
      id,
      image: firstImage, 
      name: tv.name,
      price: tv.price,
      original_price: tv.original_price,
      discount: tv.discount,
      brand: tv.brand,
      screen_size: tv.screen_size,
      resolution: tv.resolution,
      color: tv.color,
    };
  
    
    const userCartKey = `cart_${loggedInUser}`;
    const existingCart = JSON.parse(localStorage.getItem(userCartKey)) || [];
    const updatedCart = [...existingCart, cartItem];
    localStorage.setItem(userCartKey, JSON.stringify(updatedCart));
  
    alert("TV added to cart!");
  };
  
  if (!tv) {
    return <div>Loading...</div>;
  }

  const filteredImages = images.filter(image => image.product_name ===tv.id);

  const { name, price, original_price, discount, brand, model_name, screen_size, color } = tv;

  return (
    <div className="container-fluid" style={{ backgroundColor: "black" }}>
      <div className="row">
        {/* Carousel Section */}
        <div className="col-md-6">
          <div id="demo" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {filteredImages.length > 0 ? (
                filteredImages.map((image, index) => (
                  <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                    <img src={image.image} className="d-block w-100 bor-radius" alt={`Slide ${index}`} style={{objectFit:'contain'}} />
                  </div>
                ))
              ) : (
                <div className="carousel-item active">
                  <p>{error || "Loading..."}</p>
                </div>
              )}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#demo"
              data-bs-slide="prev"
              style={{ width: "70px !important" }}
            >
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#demo"
              data-bs-slide="next"
              style={{ width: "70px !important" }}
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="col-md-6">
          <p className="fonts" style={{ color: 'white' }}>{name}</p>
          <p style={{ fontSize: "20px", color: "rgb(107, 172, 221)" }}>170 ratings</p>
          <p style={{ fontSize: "20px", color: "rgb(4, 139, 88)" }}>240+ bought in past month</p>
          <hr style={{ backgroundColor: "black" }} />
          <p style={{ fontSize: "40px", color: "rgb(4, 139, 88)" }}>
            <sup>₹</sup>{price}
            <sub style={{ color: "gray" }}>M.R.P:</sub>
            <sub style={{ color: "gray", textDecoration: "line-through" }}>{original_price}</sub>
          </p>
          <p style={{ color: "red", fontSize: "30px" }}>({discount}% off)</p>

          <button className="btn btn-primary" onClick={addToCart}>Add to Cart</button>

          <hr style={{ backgroundColor: "white" }} />

          <p style={{ fontSize: "20px", color: "white" }}>
            <strong>Brand: </strong> {brand}<br />
            <strong>Model Name: </strong> {model_name}<br />
            <strong>Screen Size: </strong> {screen_size}<br />
            <strong>Colour: </strong> {color}<br />
          </p>
        </div>
      </div>
      <div className="image-gallery">
  {filteredImages.length > 0 ? (
    filteredImages.map((image, index) => (
      <div key={index} className="col-12 my-2">
        <div className="gallery-item">
          <img
            src={image.image}
            alt={`Image ${index}`}
            className="img-fluid"
            style={{
              width: "100%", 
              borderRadius: "10px",
              height: "1300px", 
              objectFit: "contain", 
              objectPosition: "center" 
            }}
          />
        </div>
      </div>
    ))
  ) : (
    <p style={{ color: "white" }}>No images available</p>
  )}
</div>
      
    </div>
  );
};

export default TVDetail;
