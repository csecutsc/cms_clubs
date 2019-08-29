import React, { useEffect, useState } from 'react';
import { Container } from '@components';
import * as icons from '@images/landing';
import '@styles/components/pages/Home/Landing.scss';

const SIZE = 40;
const MAX_WIDTH = 120;
const MAX_LEFT = 2000;
const MAX_TOP = 700;
const KEYS = Object.keys(icons);

const createIcons = () => {
    const res = [];
    for (let i = 0; i < SIZE; i++) {
        const i = Math.random();
        const invert = i > 0.5 ? ' landing__icon-wrapper--invert' : '';
        const key = KEYS[Math.floor(i * KEYS.length)];
        const style = {
            width: `${ Math.max(Math.random() * MAX_WIDTH, 40) }px`,
            left: `${ (Math.random() * MAX_LEFT) - 40 }px`,
            top: `${ (Math.random() * MAX_TOP) + 40 }px`,
            animationDelay: `${ Math.random() * 1000 }ms`,
            opacity: Math.random()
        };
        const Icon = icons[key];

        res.push(
            <span key={ i } style={ style } className={`landing__icon-wrapper${ invert }`}>
                <Icon fill='#321656' className='landing__icon'/>
            </span>
        );
    }
    return res;
};

export const Landing = () => {
    const [ icons, setIcons ] = useState(null);
    useEffect(() => { setIcons(createIcons()) }, []);

    return (
        <Container tag='section' block='landing' className='home__section'>
            <div className='landing__content'>
                <h1 className='landing__title'>CMSClubs</h1>
                <p className='landing__text'>
                    Your gateway to all things Computer Science, Statistics, and Mathematics at UTSC student clubs.
                </p>
            </div>
            { icons }
        </Container>
    );
}
