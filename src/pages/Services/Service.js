import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Service = ({ service, setService }) => {
    const { img, title, time, _id } = service;

    const navigate = useNavigate();
    return (
        <div>
            <div className="card card-compact lg:max-w-lg bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body ">
                    <h2 className="font-bold text-xl text-center text-black">{title.slice(0, 30)}</h2>
                    <p className='text-center'>
                        {
                            time.length>0
                                ? <span className='text-success'>Available Time:{time[0]}</span> :
                                <span className='text-red-500'>Sorry Mr/Ms.This room already booked!</span>
                        }
                    </p>
                    <div className="card-actions justify-center ">
                        <label for="booking-modal"
                            className="btn btn-primary btn-sm"
                            disabled={time.length === 0} onClick={() => setService(service)}>Book Now</label>
                        <button onClick={() => navigate(`/services/${_id}`)} className="btn btn-info btn-sm">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;