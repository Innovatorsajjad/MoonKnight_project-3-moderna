import React from 'react';
import "../Cards/Card.css"

const Cards = () => {
    return (
        <div>
            <div className="mainDiv mt-20 container mx-auto">
                <div className="allCards  grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 sm:gap-y-3 gap-4 container">
                    <div className="card w-72 mx-auto bg-base-100 shadow-lg">
                        <div className="card-body">
                            <img src="https://cdn-icons-png.flaticon.com/512/270/270006.png" alt="" />
                            <h2 className="card-title my-2">Our Quality</h2>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            <div className="card-actions justify-end">
                               
                            </div>
                        </div>
                    </div>

                    <div className="card w-72 mx-auto bg-base-100 shadow-lg">
                        <div className="card-body">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgp2XU6zdw0wR_4kaTJMvHWks-4chOWaHCdQ&usqp=CAU" alt="" />
                            <h2 className="card-title my-2">Our Wark Speed</h2>
                            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                            <div className="card-actions justify-end">
                               
                            </div>
                        </div>
                    </div>

                    <div className="card w-72 mx-auto bg-base-100 shadow-lg">
                        <div className="card-body">
                            <img src="https://cdn2.iconfinder.com/data/icons/solar_system_png/512/Earth.png" alt="" />
                            <h2 className="card-title my-2">Our Nerwork</h2>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                            <div className="card-actions justify-end">
                               
                            </div>
                        </div>
                    </div>

                    <div className="card w-72 mx-auto bg-base-100 shadow-lg">
                        <div className="card-body">
                            <img src="https://w7.pngwing.com/pngs/440/241/png-transparent-basketball-sport-basketball-icon-sport-logo-basketball-court.png" alt="" />
                            <h2 className="card-title my-2">Sapport system</h2>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            <div className="card-actions justify-end">
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;