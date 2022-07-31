import React from 'react';
import Contact from '../shared/Contact';
import Footer from '../shared/Footer';
import Banner from './Banner';
import CustomerReviews from './CustomerReviews';
import Employes from './Employes';
import Facilities from './Facilities';
import Info from './Info';
import PhotoGallary from './PhotoGallary';
import SignInBanner from './SignInBanner';

const Home = () => {
    return (
        <div className='bg-base-200 px-8 '>
            {/* Not a member yet? Hurry Up! */}
            <Banner></Banner>
            <Info className='mt-3'></Info>
            <PhotoGallary className='mt-3'></PhotoGallary>
            <Facilities className='mb-3'></Facilities>
            <Employes className='mt-3'></Employes>
            <Contact className='mt-5'></Contact>
            <CustomerReviews></CustomerReviews>
            <SignInBanner></SignInBanner>
        </div>
    );
};

export default Home;