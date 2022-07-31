import React from 'react';

const SingleRoom = ({ r }) => {
    const { title, img } = r;
    return (
        <div>
            <div className="card w-96 bg-base-200 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} style={{height:'300px'}} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                </div>
            </div>
        </div>
    );
};

export default SingleRoom;