import React from 'react';
import { FaFacebook, FaPaperPlane, FaDiscord } from 'react-icons/fa';
import '@styles/components/Group.scss';

const renderIcons = ({ facebook, email, discord }) => {
    const icons = [];
    if (facebook) {
        icons.push(<a 
            className='group__icon'
            rel='noopener noreferrer'
            target='_blank'
            key={icons.length}
            href={facebook}>
            <FaFacebook/>
        </a>);
    }

    if (email) {
        icons.push(<a 
            className='group__icon'
            key={icons.length}
            href={`mailto:${email}`}>
            <FaPaperPlane/>
        </a>);
    }

    if (discord) {
        icons.push(<a 
            className='group__icon'
            rel='noopener noreferrer'
            target='_blank'
            key={icons.length}
            href={discord}>
            <FaDiscord/>
        </a>);
    }

    return icons;
};

export const Group = ({ item }) => {
    return (
        <li className='group'>
            <div className='group__content'>
                <div className='group__header'>
                    <h3 className='group__title'>{ item.name }</h3>
                    <a href={ item.href } className='group__link'>Visit Website</a>
                </div>
                <p>{ item.content }</p>
            </div>
            <div className='group__media-box'>
                <img
                    className='group__image'
                    src={ item.image }
                />
                <ul className='group__media'>
                    { renderIcons(item) }
                </ul>
            </div>
        </li>
    );
};