// import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { format } from 'date-fns';
import { he } from 'date-fns/locale';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query'
import Loading from '../shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableBooking = ({ date }) => {
    // const [services,setServices]=useState([])
    // const [services] = useData();
    const [service, setService] = useState(null);
    const formattedDate = format(date, 'PP');
    // console.log(formattedDate);

    //react query use for dependancy and date properly loaded.
    const { isLoading,refetch, error, data: services } = useQuery(['available',formattedDate], () =>
        fetch(`https://fathomless-peak-01351.herokuapp.com/available?date=${formattedDate}`)
        .then(res =>res.json()
        )
    )
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <p className='text-success text-2xl text-center font-bold mt-5 mb-5  '>You selected date is:{format(date, 'PP')}</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                {
                    services?.map(service => <Service key={service._id} service={service} setService={setService}></Service>)
                }
            </div>
            {service && <BookingModal refetch={refetch} date={date} setService={setService} service={service}></BookingModal>}
        </div>
    );
};

export default AvailableBooking;