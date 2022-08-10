import React from 'react';
import Link from 'next/link';
const Navbar = () => {
    return (
        <>
         <nav className=" bg-blue-400 w-full px-10 py-4">
            <ul className='flex justify-center gap-5'>
                <li>
                    <Link href="/">
                        <a className='text-md pb-1 hover:text-slate-50 hover:border-b-2  '>Accueil</a>
                    </Link>
                </li>

                <li>
                    <Link href="/blog">
                        <a className='text-md pb-1 hover:text-slate-50 hover:border-b-2  '>blog</a>
                    </Link>
                </li>

                <li>
                    <Link href="/user">
                        <a className='text-md pb-1 hover:text-slate-50 hover:border-b-2  '>user</a>
                    </Link>
                </li>
            </ul>
            
            </nav>  
        </>
    );
}

export default Navbar;
