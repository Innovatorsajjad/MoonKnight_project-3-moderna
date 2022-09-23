import React from 'react';

const BannerCard = () => {
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl my-10 container mx-auto p-10">
                <figure><img className='w-6/12 ' src="https://bootstrapmade.com/demo/templates/Moderna/assets/img/why-us.jpg" alt="Album" /></figure>
                <div className="card-body ">
                    <h2 className="card-title">NEMO ENIM</h2>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerCard;