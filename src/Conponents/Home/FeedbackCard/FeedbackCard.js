import React from 'react';
import { Card } from 'react-bootstrap';

const FeedbackCard = ({feed}) => {
    return (
        <div className='col-md-4'>
            <div className=''>
                <Card className='' style={{padding:'10px'}}>
                    <div className='d-flex'>
                        <div style={{width:'90px'}}>
                        <Card.Img style={{width:'74px', height : '74px', margin: 'auto' }}
                         variant="top" src={feed.img} />
                        </div>
                        <div>
                            <Card.Title> <h3>{feed.name}</h3> </Card.Title>
                            <Card.Title> <small>{feed.position}</small> </Card.Title>
                        </div>
                    </div>
                    <Card.Body>
                        <Card.Text>
                        {feed.description}.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default FeedbackCard;