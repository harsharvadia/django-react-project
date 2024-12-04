import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie"; // For retrieving logged-in user
import { useParams } from "react-router-dom";

const AirbudsDetail = () => {
  const [airbuds, setAirbuds] = useState(null);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Fetching airbuds details by id
    const fetchAirbudsDetails = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/products/airbuds/${id}/`);
        setAirbuds(response.data);
      } catch (error) {
        console.error("Error fetching airbuds details:", error);
        setError("Error fetching airbuds details");
      }
    };

    // Fetching images
    const fetchAirbudsImages = async () => {
      try {
        const imagesResponse = await axios.get(`http://127.0.0.1:8000/products/aimages`);
        setImages(imagesResponse.data);
      } catch (error) {
        console.error("Error fetching airbuds images:", error);
        setError("Error fetching airbuds images");
      }
    };

    fetchAirbudsDetails();
    fetchAirbudsImages();
  }, [id]);

  // Add to Cart function
  const addToCart = () => {
    const loggedInUser = Cookies.get("username");

    if (!loggedInUser) {
      alert("You need to log in first.");
      return;
    }

    // Ensure images are available
    if (!images.length) {
      alert("Images are still loading, please try again.");
      return;
    }

    // Find the image associated with the current airbuds product
    const filteredImages = images.filter(image => image.product_name === airbuds.id);
    const firstImage = filteredImages.length > 0 ? filteredImages[0].image : null;

    // If no image is found, alert the user
    if (!firstImage) {
      alert("No image found for this product.");
      return;
    }

    const cartItem = {
      id,
      image: firstImage, // Add the first image to the cart
      name: airbuds.name,
      price: airbuds.price,
      original_price: airbuds.original_price,
      discount: airbuds.discount,
      brand: airbuds.brand,
      model_name: airbuds.model_name,
      color: airbuds.color,
    };

    // Store user-specific cart in localStorage
    const userCartKey = `cart_${loggedInUser}`;
    const existingCart = JSON.parse(localStorage.getItem(userCartKey)) || [];
    
    // Check if the item is already in the cart
    const isItemInCart = existingCart.some(item => item.id === cartItem.id);
    
    if (isItemInCart) {
      alert("This item is already in your cart.");
      return;
    }

    // Add the new item to the cart
    const updatedCart = [...existingCart, cartItem];
    localStorage.setItem(userCartKey, JSON.stringify(updatedCart));

    alert("Item added to cart!");
  };

  if (!airbuds) {
    return <div>Loading...</div>;
  }

  const { name, price, original_price, discount, brand, model_name, color, Connectivity_Technology } = airbuds;
  const filteredImages = images.filter(image => image.product_name === airbuds.id);

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
          <br />
            <strong>Model Name: </strong> {model_name}<br />
            <strong>Colour: </strong> {color}<br />
            <strong>Connectivity Technology: </strong> {Connectivity_Technology}<br />
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

export default AirbudsDetail;
