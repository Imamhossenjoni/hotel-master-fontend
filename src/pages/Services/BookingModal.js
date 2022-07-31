import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify'
import auth from '../../firebase.init';

const BookingModal = ({ service, setService, date, refetch }) => {
    const { _id, title, view, time, price } = service;
    const [user, loading, error] = useAuthState(auth);
    const formattedDate = format(date, 'PP');
    const handleSubmit = e => {
        e.preventDefault();
        const title = e.target.title.value;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const view = e.target.view.value;
        const price = e.target.price.value;
        const time = e.target.time.value;
        const formattedDate = format(date, 'PP');
        const phone = e.target.phone.value;
        const address = e.target.address.value;
        const booking = {
            roomId: _id,
            room: title,
            time: time,
            date: formattedDate,
            name: name,
            email: email,
            view: view,
            price: price,
            phone: phone,
            address: address,
        }
        fetch('https://fathomless-peak-01351.herokuapp.com/booking', {
            method: 'Post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    toast(`Booking done for ${formattedDate}`);
                }
                else {
                    toast.error(`You already booked for ${formattedDate} at ${time}`)
                }
                refetch();
                //close the modal
                setService(null);
            })
        console.log(booking);
        // console.log(title);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className=" text-accent">Dear <span className='text-info'>{`${user?.displayName},`}</span></h3>
                    <p className="py-4"> Welcome to <span className='text-info text-xl'>Hotel Master</span>.Your selected villa <span className='text-primary'>{title}</span>.Thanks for your booking.</p>

                    <form onSubmit={handleSubmit} className='text-center'>
                        <span className="label-text  text-base-200 text-xl">Booking for :</span><br />
                        <input type="text" name='title' value={title} className="input input-bordered w-full max-w-xs" /><br />
                        <span className="label-text text-base-200 text-xl">View of :</span><br />
                        <input type="text" name='view' value={view} className="input input-bordered w-full max-w-xs" /><br />
                        <span className="label-text text-base-200 text-xl">Price :</span><br />
                        <input type="text" name='price' value={price} className="input input-bordered w-full max-w-xs mt-2" /><br />
                        <span className="label-text text-base-200 text-xl">Selected booking date :</span><br />
                        <input type="text" name='date' value={formattedDate} className="input input-bordered w-full max-w-xs mt-2" /><br />
                        <span className="label-text  text-base-200 text-xl">Booking time :</span><br />
                        <input type="text" name='time' value={time} className="input input-bordered w-full max-w-xs mt-2" /><br />
                        <span className="label-text  text-base-200 text-xl">Your Name :</span><br />
                        <input type="text" name='name' value={user?.displayName || ''} className="input input-bordered w-full max-w-xs mt-2" /><br />
                        <span className="label-text  text-base-200 text-xl">Email :</span><br />
                        <input type="email" name='email' value={user?.email} className="input input-bordered w-full max-w-xs mt-2" /><br />
                        <input type="number" name='phone' placeholder="Enter Your Mobile Number" className="input input-bordered w-full max-w-xs mt-2" required /><br />
                        <input type="text" name='address' placeholder="Enter Your Address" className="input input-bordered w-full max-w-xs mt-2" required /><br />
                        <input type="submit" value='BOOK' className="input input-bordered w-full bg-primary max-w-xs font-bold  mt-2" /><br />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;