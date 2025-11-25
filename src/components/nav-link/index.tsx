import { cn } from '@/lib/utils';
import { NavLinkProps, NavLink as RouterNavLink } from 'react-router-dom';

interface NavLinkCompatProps extends Omit<NavLinkProps, 'className'> {
    className?: string;
    activeClassName?: string;
    pendingClassName?: string;
}

export function NavLink({
    className,
    activeClassName,
    pendingClassName,
    to,
    ...props
}: NavLinkCompatProps) {
    return (
        <RouterNavLink
            to={to}
            className={({ isActive, isPending }) =>
                cn(className, isActive && activeClassName, isPending && pendingClassName)
            }
            {...props}
        />
    );
}
