import React from 'react';
import Link from 'next/link';
const Navbar = () => {
    return (
        <>
         <nav className=" bg-blue-400 w-full px-10 py-4">
            <ul className='flex justify-center gap-5'>
                <li>
                    <Link href="/">
                        <a className='text-md pb-1 hover:text-slate-50 hover:border-b-2  '>Home</a>
                    </Link>
                </li>

                <li>
                    <Link href="/blog">
                        <a className='text-md pb-1 hover:text-slate-50 hover:border-b-2   '>Blog</a>
                    </Link>
                </li>

                <li>
                    <Link href="/utilisateur">
                        <a className='text-md pb-1 hover:text-slate-50 hover:border-b-2  '>Users</a>
                    </Link>
                </li>
            </ul>
            
            </nav>  
        </>
    );
}

export default Navbar;
