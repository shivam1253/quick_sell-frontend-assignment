import React, { useEffect, useState } from 'react';
import './Card.css';
import logo from './logo.svg';

import priority from './priority.svg';
import tag from './tag.png';
import img0 from './nopriority.png';
import img4 from './urgent.png';
import img3 from './high.png';
import img2 from './medium.png';
import img1 from './low.png';
import done from './Done.png';
import Cancelled from './canceled.png';
import backlogimg from './backlog.png';
import inprogressimg from './in progress.png';
import todo from './to do.png';
import usr1 from './usr-1.png';
import usr2 from './usr-2.png';
import usr3 from './usr-3.png';
import usr4 from './usr-4.png';
import usr5 from './usr-5.png';
import usr6 from './usr-6.png';
import usr7 from './usr-7.png';

const priorityImageMap = {
    0: img0,
    1: img1,
    2: img2,
    3: img3,
    4: img4,
};

const statusImageMap = {
    "Todo": todo,
    "In progress": inprogressimg,
    "Backlog": backlogimg,
    "Done": done,
    "Cancelled": Cancelled,
};

const usrImageMap = {
    "usr-1": usr1,
    "usr-2": usr2,
    "usr-3": usr3,
    "usr-4": usr4,
    "usr-5": usr5,
    "usr-6": usr6,
    "usr-7": usr7,
};

const Card = (props) => {
    const [available, setAvailable] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
                const result = await response.json();
                
                const user = result.users.find(user => user.id === props.ticket.userId);
                setAvailable(user ? user.available : false);
            } catch (error) {
                console.error("Error:", error);
            }
        };
        
        fetchData();
    }, [props.ticket.userId]);

    const usrImage = usrImageMap[props.ticket.userId] || usr1;
    const imgSrc = priorityImageMap[props.ticket.priority] || img0;
    const statusImgSrc = statusImageMap[props.ticket.status] || todo;

    return (
        <div className='cardBox'>
            <div className='cardBoxrow'>
                <div className='cardBoxin'>
                    <span className='cardId'>{props.ticket.id}</span>
                    <span className='cardTitle'><img src={statusImgSrc} alt='' />{props.ticket.title}</span>
                </div>
                <div style={{ height: "38px" }}>
                    <img className='userImg' src={usrImage} alt='' />
                    <div className={available ? 'availableUser' : 'notavailableUser'} />
                </div>
            </div>

            <div className='lowerBox'>
                <div className='priorityBox'>
                    <img className='priorityImg' src={imgSrc} alt='logo' />
                </div>

                <div className='tagBox'>
                    <img className='tagImg' src={tag} alt='logo' />
                    <span className='tagText'>{props.ticket.tag}</span>
                </div>
            </div>
        </div>
    );
};

export default Card;
