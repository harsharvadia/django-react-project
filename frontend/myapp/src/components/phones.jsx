import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Phones() {
    const [phones, setphones] = useState([]);
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Fetch phone data from the Django backend
        axios.get('http://localhost:8000/products/phones/')
            .then(response => {
                setphones(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the phones data!", error);
            });
    }, []);

    useEffect(() => {
        // Fetch images data from the Django backend
        axios.get('http://localhost:8000/products/pimages/')
            .then(response => {
                setImages(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the images data!", error);
            });
    }, []);

    const findphoneImage = (phoneId) => {
        const phoneImage = images.find(image => image.product_name === phoneId);
        return phoneImage ? phoneImage.image : null;
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center' }} className="cormorant-fon">PHONES</h1>
            
            <div className="container" style={{ backgroundColor: 'black' }}>

                {phones.map(phone => (
                    <div className="row" key={phone.id} style={{
                        backgroundColor: 'rgb(54, 53, 53)',
                        marginBottom: '52px',
                        height: '450px',
                        borderRadius: '12px',
                        overflow: 'hidden'
                    }}>
                        {/* Left Side (Image Section) */}
                        <div className="col-sm-6" style={{
                            backgroundColor: '#333',
                            borderTopLeftRadius: '12px',
                            borderBottomLeftRadius: '12px',
                            // padding: '15px',
                            display: 'flex',
                            alignItems: 'center',
                            objectFit:'cover',

                            justifyContent: 'center',
                            position:'relative'
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
                                {phone.discount}% OFF
                            </span>
                            {/* Display phone image */}
                            {findphoneImage(phone.id) ? (
                                <img src={findphoneImage(phone.id)} alt={phone.sname} style={{
                                    maxWidth: '100%',
                                    height:'450px',
                                    borderRadius: '12px',
                                    backgroundColor: '#333',
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
                            <h2 style={{ marginTop: '35px', color: 'whitesmoke' }}>{phone.sname}</h2>
                            <p style={{ color: 'gray', fontSize: '20px' }}></p>
                            <p style={{ fontSize: '40px', color: 'green' }}>
                                <sup>₹</sup>{phone.price} 
                                <sub style={{ color: 'gray' }}>M.R.P:</sub>
                                <sub style={{
                                    color: 'red',
                                    textDecoration: 'line-through'
                                }}>{phone.original_price}</sub>
                            </p>
                            <div style={{marginTop:'80px'}}>
                            <Link to={`/phone-details/${phone.id}`} style={{textDecoration: 'none'}}><span style={{fontSize:'35px',color:'whitesmoke',marginTop:'80px'}}>explore &gt;&gt;</span></Link>
                           </div>
                        </div>
                    </div>
                ))}
            </div>

            
        </div>
    );
}

export default Phones;
