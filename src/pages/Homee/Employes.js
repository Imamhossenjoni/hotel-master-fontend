import React from 'react';
import people1 from '../../images/people/people1.png'
import people2 from '../../images/people/people2.png'
import people3 from '../../images/people/people3.png'
import Employe from './Employe';

const Employes = () => {
    return (
        <div>
            <h2 className='text-purple-500  text-center py-2 text-3xl font-bold mb-5'>Team of <span className='text-4xl text-info underline'>Hotel Master</span></h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-5'>
                <Employe img={people2} bg='bg-info' hover='bg-accent' name='Anayna Goash' title='Receptionist of Hotel Master'></Employe>
                <Employe img={people1} bg='bg-accent'hover='bg-info' name='Nick Walker' title='CEO & Founder of Hotel Master'></Employe>
                <Employe img={people3} bg='bg-info'hover='bg-accent' name='Ariyana Husuy' title='A. Manager of Hotel Master'></Employe>
            </div>
        </div>
    );
};

export default Employes;