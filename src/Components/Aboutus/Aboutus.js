import React from 'react';

const Aboutus = () => {
    return (
        <div className='bg-cyan-50'>
        <h2 className='text-center text-5xl uppercase py-10'>About us</h2>
        <div className="fullBanner flex container mx-auto bg-white p-10 rounded flex-col md:flex-row">
            <div className="half-1">
                <img  className='w-fit p-10' src="https://bootstrapmade.com/demo/templates/Moderna/assets/img/about.jpg" alt="" />
            </div>
            <div className="half-2 mx-auto my-auto p-10">
                <div className="texts ">
                    <h3 className='text-3xl'>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3><br />
                    <h5 className='italic text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5><br />
                    <p> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><br />
                    <p> Duis aute irure dolor in reprehenderit in voluptate velit.</p><br /> 
                    <p> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Aboutus;