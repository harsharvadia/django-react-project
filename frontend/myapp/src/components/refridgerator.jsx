import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Refridgerator() {
    const [refridgerator, setrefridgerator] = useState([]);
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Fetch refridgerator data from the Django backend
        axios.get('http://localhost:8000/products/refridgerators/')
            .then(response => {
                setrefridgerator(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the refridgerator data!", error);
            });
    }, []);

    useEffect(() => {
        // Fetch images data from the Django backend
        axios.get('http://localhost:8000/products/rimages/')
            .then(response => {
                setImages(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the images data!", error);
            });
    }, []);

    const findrefridgeratorImage = (refridgeratorId) => {
        const refridgeratorImage = images.find(image => image.product_name === refridgeratorId);
        return refridgeratorImage ? refridgeratorImage.image : null;
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center' }} className="cormorant-fon">REFRIDGERATORS</h1>
            
            <div className="container" style={{ backgroundColor: 'black' }}>

                {refridgerator.map(refridgerator => (
                    <div className="row" key={refridgerator.id} style={{
                        backgroundColor: 'whitesmoke',
                        marginBottom: '52px',
                        height: '450px',
                        borderRadius: '12px',
                        overflow: 'hidden'
                    }}>
                        {/* Left Side (Image Section) */}
                        <div className="col-sm-6" style={{
                            backgroundColor: 'rgb(54, 53, 53)',
                            borderTopLeftRadius: '12px',
                            borderBottomLeftRadius: '12px',
                            // padding: '15px',
                            display: 'flex',
                            alignItems: 'center',
                            objectFit:'cover',
                            position:'relative',
                            justifyContent: 'center'
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
                                {refridgerator.discount}% OFF
                            </span>
                            {/* Display refridgerator image */}
                            {findrefridgeratorImage(refridgerator.id) ? (
                                <img src={findrefridgeratorImage(refridgerator.id)} alt={refridgerator.sname} style={{
                                    maxWidth: '100%',
                                    height:'450px',
                                    borderRadius: '12px',
                                    width:'660px',
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
                            backgroundColor:'rgb(54, 53, 53)'
                        }}>
                            <h2 style={{ marginTop: '35px', color: 'whitesmoke' }}>{refridgerator.sname}</h2>
                            <p style={{ color: 'gray', fontSize: '20px' }}></p>
                            <p style={{ fontSize: '40px', color: 'green' }}>
                                <sup>₹</sup>{refridgerator.price} 
                                <sub style={{ color: 'gray' }}>M.R.P:</sub>
                                <sub style={{
                                    color: 'red',
                                    textDecoration: 'line-through'
                                }}>{refridgerator.original_price}</sub>
                            </p>
                            <div style={{marginTop:'80px'}}>
                            <Link to={`/refridgerator-details/${refridgerator.id}`} style={{textDecoration: 'none'}}><span style={{fontSize:'35px',color:'whitesmoke',marginTop:'80px'}}>explore &gt;&gt;</span></Link>
                           </div>
                        </div>
                    </div>
                ))}
            </div>

        

            
        </div>
    );
}

export default Refridgerator;
