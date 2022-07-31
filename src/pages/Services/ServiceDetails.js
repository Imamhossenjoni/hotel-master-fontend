import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Icons } from 'react-toastify';

const ServiceDetails = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then(res => res.json())
      .then(data => setDetail(data));
  }, [id])
  //

  return (
    <div className='text-center margin-auto'>
      <div className="card  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10 margin-auto text-center">
          <img src={detail.img} alt="Shoes" className="rounded-xl" />
        </figure>
      </div>
      <div className="overflow-x-auto  px-8 py-5 ">
        <table className="table  flex items-center justify-center ">
          <thead>
          </thead>
          <tbody>
            <tr>
              <td>Title</td>
              <td>{detail.title}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>{detail.description}</td>
            </tr>
            <tr>
              <td>Amenities</td>
              <td>{detail.amenities}</td>
            </tr>
            <tr>
              <td>Bed-Type</td>
              <td>{detail.bed_type}</td>
            </tr>
            <tr>
              <td>View</td>
              <td>{detail.view}</td>
            </tr>
            <tr>
              <td>Size</td>
              <td>{detail.size}</td>
            </tr>
            <tr>
              <td>Adult</td>
              <td>{detail.adult}</td>
            </tr>
            <tr>
              <td>Children</td>
              <td>{detail.children}</td>
            </tr>
            <tr>
              <td>Prices</td>
              <td>{detail.price}</td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-accent btn-sm mt-2"><Link to='/services'>GO BACK </Link></button>
      </div>

    </div>
  );
};

export default ServiceDetails;