import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie"; // For retrieving logged-in user
import { useParams } from "react-router-dom";

const RefrigeratorDetails = () => {
  const [refrigerator, setRefrigerator] = useState(null);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Fetching refrigerator with id
    const fetchRefrigeratorDetails = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/products/refridgerators/${id}/`);
        setRefrigerator(response.data);
      } catch (error) {
        console.error("Error fetching refrigerator details:", error);
        setError("Error fetching refrigerator details");
      }
    };

    // Fetching images
    const fetchRefrigeratorImages = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/products/rimages`);
        setImages(response.data);
      } catch (error) {
        console.error("Error fetching refrigerator images:", error);
        setError("Error fetching refrigerator images");
      }
    };

    fetchRefrigeratorDetails();
    fetchRefrigeratorImages();
  }, [id]);

  // Add to Cart function
  const addToCart = () => {
    const loggedInUser = Cookies.get("username");
  
    if (!loggedInUser) {
      alert("You need to log in first.");
      return;
    }
  
    // Filter images that belong to the current refrigerator
    const filteredImages = images.filter((image) => image.product_name === refrigerator.id);
  
    // Get the first image from the filtered images
    const firstImage = filteredImages.length > 0 ? filteredImages[0].image : null;
  
    const cartItem = {
      id,
      image: firstImage, // Sending the filtered first image to the cart
      name: refrigerator.name,
      price: refrigerator.price,
      original_price: refrigerator.original_price,
      discount: refrigerator.discount,
      brand: refrigerator.brand,
      capacity: refrigerator.capacity,
      color: refrigerator.color,
    };
  
    // Store user-specific cart in localStorage
    const userCartKey = `cart_${loggedInUser}`;
    const existingCart = JSON.parse(localStorage.getItem(userCartKey)) || [];
    const updatedCart = [...existingCart, cartItem];
    localStorage.setItem(userCartKey, JSON.stringify(updatedCart));
  
    alert("Refrigerator added to cart!");
  };
  
  if (!refrigerator) {
    return <div>Loading...</div>;
  }

  const filteredImages = images.filter(image => image.product_name === refrigerator.id);

  const { name, price, original_price, discount, brand, model_name, capacity, color, energy_rating } = refrigerator;

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
                    <img src={image.image} className="d-block w-100 bor-radius" alt={`Slide ${index}`} style={{objectFit:'contain'}}/>
                  </div>
                ))
              ) : (
                <div className="carousel-item active">
                  <p>{error || "Loading..."}</p>
                </div>
              )}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="col-md-6">
          <p className="fonts" style={{ color: 'white' }}>{name}</p>
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
            <strong>Capacity: </strong> {capacity}L<br />
            <strong>Colour: </strong> {color}<br />
            <strong>Energy Rating: </strong> {energy_rating} Stars
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
              width: "100%", // Full width for each row
              borderRadius: "10px",
              height: "500px", // Adjust to your preferred height
              objectFit: "cover", // Ensures the image covers the entire width without stretching
              objectPosition: "center" // Centers the image within the container
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

export default RefrigeratorDetails;
