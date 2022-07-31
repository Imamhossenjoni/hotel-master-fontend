import React from 'react';
import useIcons from '../../hooks/useIcons';
import Facility from './Facility';

const Facilities = () => {
    const [icons]=useIcons();
    
    return (
        <div className='mt-5 mb-5'>
            <h2 className='text-center text-secondary font-bold text-4xl hover:text-info underline mt-5'>Our Free Facilities</h2>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3 my-6 p-2 bg-accent rounded-xl mt-5 '>
            {
                icons.map(icon=><Facility key={icon.id} icon={icon}></Facility>)
            }
            </div>
        </div>
    );
};

export default Facilities;