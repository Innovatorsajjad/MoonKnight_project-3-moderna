import React from 'react';
import TeamCard from '../../Components/TeamCard/TeamCard';

const Team = () => {
    return (
        <div className='bg-cyan-50 py-10 '>
            <div className="texts mb-5">
                <h3 className='md:text-3xl sm:text-xl bg-accent p-5 text-center '>Here is my Full Team.</h3>
            </div>
            <TeamCard/>
        </div>
    );
};

export default Team;