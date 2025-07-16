import type { JSX } from 'react';
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { links } from '../../data/Links';
import './Navbar.style.css';

interface LinkItem {
    name: string;
    icon: JSX.Element;
    path: string;
}

export function Navbar() {
    return (
        <nav className="nav">
            <div className="nav-menu">
                <ul className="nav-list grid">
                    {links.map((link: LinkItem, index) => {
                        const { name, icon, path } = link;
                        return (
                            <li className="nav-item" key={index}>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        isActive ? 'nav-link active-nav' : 'nav-link'
                                    }
                                >
                                    {icon}
                                    <h3 className="nav-name">{name}</h3>
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
                <RiCloseLine className="nav-close" />
            </div>
            <div className="nav-toggle">
                <RiMenuLine />
            </div>
        </nav>
    );
}
