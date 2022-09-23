import React from 'react';
import BannerCard from '../../Components/BannerCard/BannerCard';
import Cards from '../../Components/Cards/Cards';
import "../Home/Home.css"

const Home = () => {
    return (
        <div className='bg-cyan-50'>
            <div className="hero hero-section min-h-screen bg-base-200">
                <div className="hero-content text-center text-white">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl font-bold">Welcome to our service</h1>
                        <p className="py-6">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                        <button className="btn btn-primary text-white bg-transparent border-secondary border-2">Read More</button>
                    </div>
                </div>
            </div>
            <Cards/>
            <BannerCard/>
        </div>
    );
};

export default Home;