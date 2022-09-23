import React from 'react';
import CountDown from '../../Components/CountDown/CountDown';
import Aboutus from '../../Components/Aboutus/Aboutus';
import UserCarousel from '../../Components/UserCarousel/UserCarousel';

const About = () => {
    return (
        <div>
            <Aboutus/>
            <CountDown/>
            <UserCarousel/>
        </div>
    );
};

export default About;