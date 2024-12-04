
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Laptops() {
    const [laptops, setLaptops] = useState([]);
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Fetch laptop data from the Django backend
        axios.get('http://localhost:8000/products/laptops/')
            .then(response => {
                setLaptops(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the laptops data!", error);
            });
    }, []);

    useEffect(() => {
        // Fetch images data from the Django backend
        axios.get('http://localhost:8000/products/limages/')
            .then(response => {
                setImages(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the images data!", error);
            });
    }, []);

    const findLaptopImage = (laptopId) => {
        const laptopImage = images.find(image => image.product_name === laptopId);
        return laptopImage ? laptopImage.image : null;
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center' }} className="cormorant-fon">LAPTOPS</h1>
            
            <div className="container" style={{ backgroundColor: 'black' }}>

                {laptops.map(laptop => (
                    <div className="row" key={laptop.id} style={{
                        backgroundColor: 'whitesmoke',
                        marginBottom: '52px',
                        height: '450px',
                        borderRadius: '12px',
                        overflow: 'hidden'
                    }}>
                        {/* Left Side (Image Section) */}
                        <div className="col-sm-6" style={{
                            backgroundColor: 'lightgray',
                            borderTopLeftRadius: '12px',
                            borderBottomLeftRadius: '12px',
                            padding: '15px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor:'rgb(54, 53, 53)',
                            position:'relative',
                        }}>
                            <span style={{
                                position: 'absolute',
                                top: '10px',
                                left: '10px',
                                backgroundColor: 'green',
                                color: 'white',
                                padding: '5px 10px',
                                borderRadius: '5px',
                                fontSize: '18px',
                                fontWeight: 'bold'
                            }}>
                                {laptop.discount}% OFF
                            </span>
                            {/* Display laptop image */}
                            {findLaptopImage(laptop.id) ? (
                                <img src={findLaptopImage(laptop.id)} alt={laptop.sname} style={{
                                    width:'550px',
                                    height:'450px',
                                    borderRadius: '12px'
                                }} />
                            ) : (
                                <p>No Image Available</p>  // Fallback if no image is available
                            )}
                        </div>

                        {/* Right Side (Details Section) */}
                        <div className="col-sm-6" style={{
                            borderLeft: '2px solid black',
                            borderTopRightRadius: '12px',
                            borderBottomRightRadius: '12px',
                            padding: '25px',
                            backgroundColor:'rgb(54, 53, 53)',
                        }}>
                            <h2 style={{ marginTop: '35px', color: 'whitesmoke' }}>{laptop.sname}</h2>
                            <p style={{ color: 'gray', fontSize: '20px' }}></p>
                            <p style={{ fontSize: '40px', color: 'green' }}>
                                <sup>₹</sup>{laptop.price} 
                                <sub style={{ color: 'gray' }}>M.R.P:</sub>
                                <sub style={{
                                    color: 'red',
                                    textDecoration: 'line-through'
                                }}>{laptop.original_price}</sub>   
                            </p>
                            <div style={{marginTop:'80px'}}>
                            <Link to={`/laptop-details/${laptop.id}`} style={{textDecoration: 'none'}}><span style={{fontSize:'35px',color:'whitesmoke',marginTop:'80px'}}>explore &gt;&gt;</span></Link>
                           </div>
                        
                        </div>
                    </div>
                ))}
            </div>

            

            {/* Contact Us */}
            
        </div>
    );
}

export default Laptops;
