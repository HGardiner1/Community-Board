import React from 'react';

const Card = ({ city, country, imageUrl }) => {

    return (
        <div style={{
            textAlign: 'center',
            border: '2px solid black',
            borderRadius: '8px',        
            padding: '10px',            
            width: '320px',        
            boxSizing: 'border-box' 
        }}>
            <img src={imageUrl} alt={`${city}, ${country}`} width={300} height={300} style={{ objectFit: 'cover' }} />
            <h2>{city}</h2>
            <h4>{country}</h4>
            <button style={{ backgroundColor: 'white', borderRadius: '20px',}}>Learn More!</button>
        </div>
    );
}

export default Card;