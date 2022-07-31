import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../images/clock.svg'
import phone from '../../images/phone.svg'
import marker from '../../images/marker.svg'

const Info = () => {
    return (
        <div className='mb-5'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 '>
                <InfoCard cardTitle='Opening Hours' bgclass='bg-gradient-to-r from-cyan-500 to-blue-500' title='We serve 24/7 hours' img={clock} ></InfoCard>
                <InfoCard cardTitle='Our Locations' bgclass='bg-accent' title="Kolatoli,Cox's Bazar" img={marker}></InfoCard>
                <InfoCard cardTitle='Contact Us' bgclass='bg-gradient-to-r from-cyan-500 to-blue-500' title="+88 01972527129" img={phone}></InfoCard>
            </div>
        </div>
    );
};

export default Info;