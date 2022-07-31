import React from 'react';

const InfoCard = ({ img,cardTitle,bgclass,title}) => {
    return (
        <div className={`card lg:card-side shadow-xl  ${bgclass}`}>
            <figure className='pl-5 mt-2'>
                <img style={{height:'60px'}} src={img} alt="Album" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{title}</p>
            </div>
        </div>
    );
};

export default InfoCard;