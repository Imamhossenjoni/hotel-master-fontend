import React from 'react';
import { Link } from 'react-router-dom';

const GallaryCard = ({ image }) => {
    const { img, title } = image;
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-2xl text-bold text-center">{title}</h2>
                <div className="card-actions justify-center mt-4">
                    <Link to={`/services`}><button className="btn btn-secondary">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default GallaryCard;