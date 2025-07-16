import { createBrowserRouter } from 'react-router';
import { AppLayout } from '../components/AppLayout';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Portfolio } from '../pages/Portfolio';
import { Contact } from '../pages/Contact';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/portfolio',
                element: <Portfolio />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
        ],
    },
]);
