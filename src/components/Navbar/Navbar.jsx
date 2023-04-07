import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'About',
            path: '/about'
        },
        {
            id: 3,
            name: 'Contact',
            path: '/contact'
        },
        {
            id: 4,
            name: 'Products',
            path: '/products'
        },
        {
            id: 5,
            name: 'Services',
            path: '/services'
        }
    ];
    return (
        <nav className='bg-lime-700'>
            <div onClick={()=>setOpen(!open)} className='md:hidden pb-4'>
                {/* <span>{open===true ? 'open' : 'close' }</span> */}
                <span>{open===true ? <XMarkIcon className="h-6 w-6 text-blue-500"></XMarkIcon> : <Bars3Icon className="h-12 w-12 text-blue-500" /> }</span>
                
            </div>

            <ul className={`md:flex justify-around mx-0 absolute md:static duration-500 bg-lime-700 ${open ? 'top-6': '-top-96'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>

        </nav>
    );
};

export default Navbar;