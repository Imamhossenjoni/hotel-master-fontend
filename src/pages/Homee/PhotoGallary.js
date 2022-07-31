import React from 'react';
import useImages from '../../hooks/useImages';
import GallaryCard from './GallaryCard';

const PhotoGallary = () => {
    const [images] = useImages();
    console.log(images);
    return (
        <div>
            <h2 className='text-info font-bold text-4xl text-center my-5 charset underline underline-offset-4 hover:text-secondary mt-5 mb-5'>View of Our Resorts</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-5 py-5 '>
                {
                    images.slice(0,6).map(image => <GallaryCard key={image.id} image={image}></GallaryCard>)
                }
            </div>
        </div>
    );
};

export default PhotoGallary;