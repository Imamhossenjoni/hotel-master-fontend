import React, { useState } from 'react';
import bannerImg from '../../images/banner.jpg'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const ServicesBanner = ({date,setDate}) => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={bannerImg} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    
                    <div>
                        <DayPicker
                        mode='single'
                        selected={date}
                        onSelect={setDate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesBanner;