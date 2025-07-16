import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Themes } from './Themes';

export function AppLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Themes />
        </>
    );
}
