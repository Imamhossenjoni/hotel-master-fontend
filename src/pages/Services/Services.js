import React, { useState } from 'react';
import AvailableBooking from './AvailableBooking';
import ServicesBanner from './ServicesBanner';

const Services = () => {
    const [date,setDate]=useState(new Date())
    return (
        <div className='bg-base-200 px-5'>
            <ServicesBanner date={date} setDate={setDate}></ServicesBanner>
            <AvailableBooking date={date}></AvailableBooking>
        </div>
    );
};

export default Services;