import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie"; // For retrieving logged-in user
import { useParams } from "react-router-dom";

const Laptop_details = () => {
  const [laptop, setLaptop] = useState(null);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Fetching laptop with id
    const fetchLaptopDetails = async () => {
      try {
        const laptopResponse = await axios.get(`http://127.0.0.1:8000/products/laptops/${id}/`);
        setLaptop(laptopResponse.data);
      } catch (error) {
        console.error("Error fetching laptop details:", error);
        setError("Error fetching laptop details");
      }
    };

    // Fetching images
    const fetchLaptopImages = async () => {
      try {
        const imagesResponse = await axios.get(`http://127.0.0.1:8000/products/limages`);
        setImages(imagesResponse.data);
      } catch (error) {
        console.error("Error fetching laptop images:", error);
        setError("Error fetching laptop images");
      }
    };

    fetchLaptopDetails();
    fetchLaptopImages();
  }, [id]);

  // Add to Cart function
  const addToCart = () => {
    const loggedInUser = Cookies.get("username");
  
    if (!loggedInUser) {
      alert("You need to log in first.");
      return;
    }
  
    // Filter images that belong to the current laptop
    const filteredImages = images.filter((image) => image.product_name === laptop.id);
  
    // Get the first image from the filtered images
    const firstImage = filteredImages.length > 0 ? filteredImages[0].image : null;
  
    const cartItem = {
      id,
      image: firstImage, // Sending the filtered first image to the cart
      name: laptop.name,
      price: laptop.price,
      original_price: laptop.original_price,
      discount: laptop.discount,
      brand: laptop.brand,
      model_name: laptop.model_name,
      screen_size: laptop.screen_size,
      color: laptop.color,
      RAM: laptop.RAM,
    };
  
    // Store user-specific cart in localStorage
    const userCartKey = `cart_${loggedInUser}`;
    const existingCart = JSON.parse(localStorage.getItem(userCartKey)) || [];
  
    // Add the new item to the cart array
    const updatedCart = [...existingCart, cartItem];
    localStorage.setItem(userCartKey, JSON.stringify(updatedCart));
  
    alert("Item added to cart!");
  };
  
  if (!laptop) {
    return <div>Loading...</div>;
  }

  const filteredImages = images.filter(image => image.product_name === laptop.id);

  const { name, price, original_price, discount, brand, model_name, screen_size, color, RAM } = laptop;

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
            <strong>RAM: </strong> {RAM}GB
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

export default Laptop_details;
