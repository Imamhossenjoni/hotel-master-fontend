import React from 'react';

const Facility = ({ icon }) => {
    const { img, title, descript } = icon;
    return (
        <div>
            <div > 
                <div className="card  bg-base-200 my-5">
                    <figure className="px-10 pt-10">
                        <img src={img} alt="icons-pic" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-black text-center">
                        <h2 className="card-title">{title}</h2>
                        <p className=''>{descript}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facility;