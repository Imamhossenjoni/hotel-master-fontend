import React from 'react';
import useRooms from '../../hooks/useRooms';
import SingleRoom from './SingleRoom';

const AllRooms = () => {
    const[rooms]=useRooms();
    return (
        <div>
            <h2 className='text-purple-500 text-2xl text-center font-bold py-5'>WelCome to You <span className='text-info text-3xl'>Hotel Master</span> PhotoGallery</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                {
                    rooms.map(r=><SingleRoom key={r._id} r={r}></SingleRoom>)
                }
            </div>
            
        </div>
    );
};

export default AllRooms;