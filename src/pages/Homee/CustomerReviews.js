import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';

const CustomerReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews])
    return (
        <div className='py-5'>
            <h2 className='text-center py-5 font-bold text-4xl text-info underline'>Our Customer {reviews.length>1 ?'Reviews':'Review'}</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 '>
                {
                    reviews.slice(0,12).map(review => <SingleReview r={review} key={review._id}></SingleReview>)
                }
            </div>
        </div>
    );
};

export default CustomerReviews;