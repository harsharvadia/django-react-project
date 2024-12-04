import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AirBudsPage() {
    const [airbuds, setairbuds] = useState([]);
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Fetch airbud data from the Django backend
        axios.get('http://127.0.0.1:8000/products/airbuds/')
            .then(response => {
                setairbuds(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the airbuds data!", error);
            });
    }, []);

    useEffect(() => {
        // Fetch images data from the Django backend
        axios.get('http://localhost:8000/products/aimages/')
            .then(response => {
                setImages(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the images data!", error);
            });
    }, []);

    const findairbudImage = (airbudId) => {
        const airbudImage = images.find(image => image.product_name === airbudId);
        return airbudImage ? airbudImage.image : null;
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center' }} className="cormorant-fon">AIRBUDS</h1>
            
            <div className="container" style={{ backgroundColor: 'black' }}>

                {airbuds.map(airbud => (
                    <div className="row" key={airbud.id} style={{
                        backgroundColor:'rgb(54, 53, 53)',
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
                            padding: '15px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative' 
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
                                {airbud.discount}% OFF
                            </span>
                            
                            {/* Display airbud image */}
                            {findairbudImage(airbud.id) ? (
                                <img src={findairbudImage(airbud.id)}  style={{
                                    width:'550px',
                                    height:'450px',
                                    borderRadius: '12px',
                                
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
                            <h2 style={{ marginTop: '35px', color: 'whitesmoke' }}>{airbud.sname}</h2>
                            <br/>
                            <p style={{ fontSize: '40px', color: 'green' }}>
                                <sup>₹</sup>{airbud.price} 
                                <sub style={{ color: 'gray' }}>M.R.P:</sub>
                                <sub style={{
                                    color: 'red',
                                    textDecoration: 'line-through'
                                }}>{airbud.original_price}</sub>
                            </p>
                            <div style={{marginTop:'80px'}}>
                            <Link to={`/airbuds-details/${airbud.id}`} style={{textDecoration: 'none'}}><span style={{fontSize:'35px',color:'whitesmoke',marginTop:'80px'}}>explore &gt;&gt;</span></Link>
                           </div>


    

                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default AirBudsPage;
