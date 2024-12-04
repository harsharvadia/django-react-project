import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Tvs() {
    const [tvs, settvs] = useState([]);
    const [images, setImages] = useState([]);

    useEffect(() => {
        
        axios.get('http://localhost:8000/products/tvs/')
            .then(response => {
                settvs(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the tvs data!", error);
            });
    }, []);

    useEffect(() => {
    
        axios.get('http://localhost:8000/products/timages/')
            .then(response => {
                setImages(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the images data!", error);
            });
    }, []);

    const findtvImage = (tvId) => {
        const tvImage = images.find(image => image.product_name === tvId);
        return tvImage ? tvImage.image : null;
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center' }} className="cormorant-fon">TELEVISION</h1>
            
            <div className="container" style={{ backgroundColor: 'black' }}>

                {tvs.map(tv => (
                    <div className="row" key={tv.id} style={{
                        backgroundColor: 'whitesmoke',
                        marginBottom: '52px',
                        height: '450px',
                        borderRadius: '12px',
                        overflow: 'hidden'
                    }}>
                        {/* Left Side (Image Section) */}
                        <div className="col-sm-6" style={{
                            backgroundColor:'rgb(54, 53, 53)',
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
                                {tv.discount}% OFF
                            </span>
                            {/* Display tv image */}
                            {findtvImage(tv.id) ? (
                                <img src={findtvImage(tv.id)} alt={tv.sname} style={{
                                    maxWidth: '100%',
                                    height:'450px',
                                    borderRadius: '12px',
                                }} />
                            ) : (
                                <p>No Image Available</p>  
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
                            <h2 style={{ marginTop: '35px', color: 'whitesmoke' }}>{tv.sname}</h2>
                            <p style={{ color: 'gray', fontSize: '20px' }}></p>
                            <p style={{ fontSize: '40px', color: 'green' }}>
                                <sup>₹</sup>{tv.price} 
                                <sub style={{ color: 'gray' }}>M.R.P:</sub>
                                <sub style={{
                                    color: 'red',
                                    textDecoration: 'line-through'
                                }}>{tv.original_price}</sub>
                            </p>
                            <div style={{marginTop:'80px'}}>
                            <Link to={`/tv-details/${tv.id}`} style={{textDecoration: 'none'}}><span style={{fontSize:'35px',color:'whitesmoke',marginTop:'80px'}}>explore &gt;&gt;</span></Link>
                           </div>
                        </div>
                    </div>
                ))}
            </div>

            
            
        </div>
    );
}

export default Tvs;
