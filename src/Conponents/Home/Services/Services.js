import React from 'react';
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';
import service3 from '../../../images/icons/service3.png';
import ServiceCard from '../ServiceCard/ServiceCard';


const ourService = [
    {
        title: 'Web & Mobile design',
        description : 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
        img : service1,
    },
    {
        title: 'Graphic design',
        description : 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
        img : service2,
    },
    {
        title: 'Web development',
        description : 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
        img : service3,
    },
    
]


const Services = () => {
    
    return (
        <section style={{padding : '70px 0'}}>
            <div className="container">
                <div>
                    <h2 className='text-center my-5'>Provide awesome 
                        <span style={{color:'#7AB259'}}> services </span>
                     </h2>
                     <div className='row'>
                        {
                            ourService.map(service => <ServiceCard key={Math.random()} 
                            service={service}></ServiceCard>)
                        }
                     </div>
                </div>
            </div>
        </section>
    );
};

export default Services;