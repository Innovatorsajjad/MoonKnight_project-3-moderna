import React from 'react';

const Myself = () => {
    return (
        <div>
            <div className="avatar flex justify-center mt-10 mb-3">
                <div className="w-40 mask mask-hexagon">
                    <img src="https://scontent.fdac134-1.fna.fbcdn.net/v/t39.30808-6/271716734_1482800418784304_3754238695309101254_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=iAeEefeuyCUAX8TRo20&tn=GKaUo8Cb9l6VYEGM&_nc_ht=scontent.fdac134-1.fna&oh=00_AT9FpXMYU8XakuAKmrZOdq38nR70d9m3mB2EuapmtDDDkQ&oe=6331D8CB" alt="" />
                </div>
            </div>
            <div className="texts text-center mb-10">
            <h3 className='md:text-4xl sm:text-sm '>Khandaker Sajjad Hossen</h3>
            <small><code>Ceo & FontEnd Developer</code></small>
            </div>


            <div className="Contact text-center my-3">
                <h3>Contact With Us</h3>
                <code>sk.sajjad4207@gmail.com</code>
            </div>
        </div>

    );
};

export default Myself;