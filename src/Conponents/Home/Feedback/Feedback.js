import React from 'react';
import feedbackImg1 from '../../../images/customer-1.png';
import feedbackImg2 from '../../../images/customer-2.png';
import feedbackImg3 from '../../../images/customer-3.png';
import FeedbackCard from '../FeedbackCard/FeedbackCard';

const details = [
    {
        name : 'Nash Patrik',
        position : 'CEO, Manpol',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
        img : feedbackImg1,
        id : 1 ,
    },
    {
        name : 'Miriam Barron',
        position : 'CEO, Manpol',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
        img : feedbackImg2,
        id : 2,
    },
    {
        name : 'Bria Malone',
        position : 'CEO, Manpol',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
        img : feedbackImg3,
        id : 3,
    }
]

const Feedback = () => {
    return (
        <section style={{padding:'100px'}}>
            <div className='container'>
                <h1 className='my-5 text-center'>Clients <span style={{color: '#7AB259'}}> Feedback</span></h1>
            
                <div className="row">
                    {
                      details.map(feed => <FeedbackCard key={details.id} feed={feed} ></FeedbackCard>)  
                    }
                </div>
            </div>
        </section>
    );
};

export default Feedback;