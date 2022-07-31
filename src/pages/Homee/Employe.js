import React from 'react';

const Employe = ({img,name,title,bg,hover}) => {
    return (
        <div>
            <div className={`card  ${bg} hover:${hover} shadow-xl`}>
                <figure className='p-3'><img src={img} style={{height:'110px'}} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-center font-bold text-3xl text-secondary">{name}</h2>
                    <h6 className='text-center text-2xl text-white'>{title}</h6>
                </div>
            </div>
        </div>
    );
};

export default Employe;