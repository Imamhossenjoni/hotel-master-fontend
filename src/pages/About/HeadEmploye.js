import React from 'react';

const HeadEmploye = () => {
    const img = "https://i.ibb.co/9rrg5sB/IMG-20220623-114522-removebg.png";
    return (
        <div>
            <h2 className='text-center font-bold  text-4xl my-3 text-secondary'> Our Employes</h2>
            <div className=' flex items-center justify-center my-5'>
                <div className="card card-compact lg:max-w-lg bg-accent text-white shadow-xl px-8 py-2">
                    <div class="avatar margin-auto items-center justify-center mt-5">
                        <div class="w-36 rounded-full ring ring-primary ring-offset-base-200 ring-offset-2">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Asibul Haque Belal</h2>
                        <p className='text-xl text-white'>Email: <span className='text-purple-500'>asibulhaque420@gmail.com</span></p>
                        <p className='text-xl text-white'>Phone: <span className='text-purple-500'>+88 01807302420</span></p>
                        <p className='text-xl text-white'>Designation: <span className='text-purple-500'>Head of Employes</span></p>
                        <p className='text-xl text-white'>Available Services : <span className='text-purple-500'>24/7</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeadEmploye;