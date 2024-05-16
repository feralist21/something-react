import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
    return (
        <>
            <div className='w-full h-screen flex flex-col'>
                <header className='bg-slate-300 p-4'>Header</header>
                <div className='flex flex-grow'>
                    <aside className='w-2/12 bg-orange-300 p-4'>
                        <ul className='flex flex-col gap-y-3'>
                            <li>
                                <Link className='border-b-2 border-black' to='/'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className='border-b-2 border-black' to='/profile'>
                                    Profile
                                </Link>
                            </li>
                        </ul>
                    </aside>
                    <main className='w-10/12 p-4'>
                        <Outlet />
                    </main>
                </div>
                <footer className='bg-slate-300 p-4'>footer</footer>
            </div>
        </>
    );
};

export default Layout;
