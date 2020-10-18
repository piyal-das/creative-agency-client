import React from 'react';

const ServiceCard = ({service}) => {
    const cardStyle = {
        border: 'none',
        padding: '15px', 
        background : '#ffffff',
        borderRadius: '15px'
    }
    return (
        <div className='col-md-6'>
            <div style={cardStyle} >
                <div className="cardImg d-flex justify-content-between">
                    <div>
                        <img style={{width:'80px'}} src={service.img} alt="icon"/>
                    </div>
                    <div>
                        <button className="btn btn-primary mt-4">{service.button}</button>
                    </div>
                </div>
                <div className='mt-3 pb-3'>
                    <h5>{service.title}</h5>
                    <small>{service.description}</small>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;