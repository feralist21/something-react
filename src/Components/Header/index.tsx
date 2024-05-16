import React from 'react';
import Container from '@/Components/Container';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <>
            <header className='bg-slate-300 py-4'>
                <Container className='flex justify-between'>
                    <Link to='/'>Pokedex</Link>
                    <Link to='/profile'>Профиль</Link>
                </Container>
            </header>
        </>
    );
};

export default Header;
