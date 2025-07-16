import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen } from 'react-icons/fa';

export const links = [
    {
        name: 'Home',
        icon: <FaHome className="nav-icon" />,
        path: '/',
    },
    {
        name: 'About',
        icon: <FaUser className="nav-icon" />,
        path: '/about',
    },
    {
        name: 'Portfolio',
        icon: <FaFolderOpen className="nav-icon" />,
        path: '/portfolio',
    },
    {
        name: 'Contacts',
        icon: <FaEnvelopeOpen className="nav-icon" />,
        path: '/contact',
    },
];
