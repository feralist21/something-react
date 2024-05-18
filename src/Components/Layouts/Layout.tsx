import { FC } from 'react';
import Header from '@/Components/Header';
import Container from '@/Components/Container';
import { Outlet } from 'react-router-dom';

const Layout: FC = () => {
    return (
        <>
            <div className='w-full h-screen flex flex-col'>
                <Header />
                <main className='py-10 flex-grow'>
                    <Container>
                        <Outlet />
                    </Container>
                </main>
            </div>
        </>
    );
};

export default Layout;
