import React from 'react';

const UserCarousel = () => {
    return (
        <div>
            <div className="carousel w-2/3 mx-auto">
                <div id="item1" className="carousel-item w-full rounded">
                    <img src="https://i.ibb.co/PZw7njt/Pic3.jpg" alt=""className="w-full rounded" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://i.ibb.co/PZw7njt/Pic3.jpg" alt=""  className="w-full rounded"/>
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://i.ibb.co/vsqF8Cx/Pic2.jpg" alt=""  className="w-full rounded"/>
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://i.ibb.co/gZKVLLb/Pic1.jpg" alt=""  className="w-full rounded"/>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default UserCarousel;