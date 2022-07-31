import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Order = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?email=${user?.email}`)
                .then(res => res.json())
                .then(data => setBookings(data));
        }
    }, [user])
    return (
        <div>
            {
                bookings.length ? <h2 className='text-info text-2xl '>Your Total Booked room:{bookings.length}</h2> :
                    <h2>Mr/Ms <span className='text-primary text-2xl'>{user.displayName}</span>.You have no room booked in <span className='text-info text-2xl'>Hotel Master</span> to yet.</h2>
            }
            <div className='py-5'>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                      
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Name</th>
                                <th>Room</th>
                                <th>Time</th>
                                <th>Date</th>
                                <th>Address</th>
                                <th>Email</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                          
                           {
                            bookings.map((booking,index)=>
                                <tr>
                                <th>{index+1}</th>
                                <td>{booking.name}</td>
                                <td>{booking.room}</td>
                                <td>{booking.time}</td>
                                <td>{booking.date}</td>
                                <td>{booking?.address}</td>
                                <td>{booking?.email}</td>
                                <td>{booking?.phone}</td>
                                
                            </tr>)
                           }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Order;