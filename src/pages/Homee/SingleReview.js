import React from 'react';

const SingleReview = ({ r }) => {
    console.log(r);
    const { name, photo, email, review } = r;
    return (
        // <div class="card w-96 bg-base-200 shadow-xl">
        //     <div class="avatar margin-auto items-center justify-center mt-5">
        //         <div class="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        //             <img src={photo} alt='' />
        //         </div>
        //     </div>
        //     <div class="card-body items-center text-center">
        //         <h2 class="card-title">{name}</h2>
        //         <p className='text-purple-500'>{email}</p>
        //         <p className='text-sm'>"{review}"</p>
        //     </div>
        // </div>


        <div className="card card-compact lg:max-w-lg bg-accent text-white shadow-xl">
            <div class="avatar margin-auto items-center justify-center mt-5">
                <div class="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                   <img src={photo} alt='' />
              </div>
           </div>
           <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p className='text-purple-500'>{email}</p>
                <p className='text-sm'>"{review}"</p>
            </div>
        </div>
    );
};

export default SingleReview;