import React from 'react';


const Link = ({route}) => {
    return (
        <div>
            <li className='p-6 hover:bg-amber-300'>
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

export default Link;