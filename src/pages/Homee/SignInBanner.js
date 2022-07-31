import React from 'react';
import './SignInBanner.css'

const SignInBanner = () => {
    return (
        <div className='bg-error text-white p-6  my-5  text-center rounded'>
            <h2 className='text-3xl my-2 font-bold '>This charming private 19th century mansion, which originally</h2>
            <a href='#' className='btn mt-2'>Sign In</a>
            <a href='#' className='btn ml-3 mt-2'>Join Us</a>
        </div>
    );
};

export default SignInBanner;