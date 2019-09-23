import React from 'react';
import Img from 'gatsby-image';
import { FaFacebook, FaPaperPlane, FaDiscord, FaInstagram } from 'react-icons/fa';
import '@styles/components/Group.scss';

const renderIcons = ({ facebook, email, discord, instagram }) => {
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

    if (instagram) {
        icons.push(<a 
            className='group__icon'
            rel='noopener noreferrer'
            target='_blank'
            key={icons.length}
            href={instagram}>
            <FaInstagram/>
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

    return icons;
};

export const Group = ({ item }) => {
    return (
        <li className='group'>
            <div className='group__content'>
                <div className='group__header'>
                    <h3 className='group__title'>{ item.name }</h3>
                    <h5 className='group__title'>{ item.secondary }</h5>
                    <a href={ item.href } className='group__link'>Visit Website</a>
                </div>
                <p>{ item.content }</p>
            </div>
            <div className='group__media-box'>
            <Img className='group__image' fluid={ item.image.childImageSharp.fluid }/>
                <ul className='group__media'>
                    { renderIcons(item) }
                </ul>
            </div>
        </li>
    );
};