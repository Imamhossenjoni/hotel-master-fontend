import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../images/banner.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={banner} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-3xl font-bold text-accent">Comfort are Perfectly Combined Here</h1>
                    <p className="py-6">This charming private 19th-century mansion, which originally belonged to the family, has been completely renovated with care &amp; passion while respecting the spirit of place. Divo Hotel surrounded herself by a team of French artisans to create a sophisticated place in a refined.</p>
                    <button  className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500 uppercase text-white"><Link to='/services'>Book Now</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;