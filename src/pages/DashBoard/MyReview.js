import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyReview = () => {
    //auth
    const [user]=useAuthState(auth);

    //handle Review
    const handleReview=e=>{
        e.preventDefault();
        const name=e.target.name?.value;
        console.log(name);
        const email=e.target.email?.value;
        const photo=e.target.photo?.value;
        const review=e.target.review?.value;
        const reviews={
             name:name,
             email:email,
             photo:photo,
             review:review
        }
        fetch('https://fathomless-peak-01351.herokuapp.com/reviews',{
            method:'Post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(reviews)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            toast.success('Thanks For Your Review')
        })
    }

    return (
        <div>
            <h2 className='text-accent text-2xl'>Please Give Your Review about of <span className='text-2xl text-info'>Hotel Master</span> Services.</h2>

            <form onSubmit={handleReview} className='mt-5'>
                <input type="text" name='name' value={user.displayName} placeholder="Enter Your Name..." className="input input-bordered input-lg w-full max-w-xs" required /><br />
                <input type="text" name='email' value={user.email} placeholder="abc @ gmail.com" className="input input-bordered input-lg w-full max-w-xs mt-2" required /><br />
                <input type="text" name='photo' placeholder="Give Your Photo URL" className="input input-bordered input-lg w-full max-w-xs mt-2" required /><br />
                <textarea type='text' name='review' placeholder='Please Your Feedback...' cols='42' rows='5' className='rounded border w-full max-w-xs mt-2 text-center' required></textarea><br />
                <input type="submit" value='Submit' className="input input-bordered input-lg w-full bg-accent text-white hover:bg-info hover:text-accent max-w-xs font-bold uppercase mt-2" /><br />
            </form>
        </div>
    );
};

export default MyReview;