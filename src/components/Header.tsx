'use client'
import Link from 'next/link';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { RiHome2Line, RiUserLine, RiContactsLine } from 'react-icons/ri';
import { FaGraduationCap } from 'react-icons/fa';

export default function Header() {
    const pathname = usePathname();
    const [activeLinkStyle, setActiveLinkStyle] = useState('hidden');
    const [active, setActive] = useState(false);
    const activeRef = useRef<HTMLDivElement>(null);

    const links = [
        { href: '/', text: 'Home', icon: <RiHome2Line /> },
        { href: '/about', text: 'About', icon: <RiUserLine /> },
        { href: '/contact', text: 'Contact', icon: <RiContactsLine /> }
    ];

    useEffect(() => {
        setActive(false);
        const links = document.querySelectorAll('nav a');
        links.forEach((link) => {
            console.log(link.getAttribute('href'), pathname);
            if (link.getAttribute('href') === pathname) {
                if (activeRef.current) {
                    const width = link.getBoundingClientRect().width;
                    activeRef.current.style.width = `${width}px`;
                    const linkPosition = link.getBoundingClientRect();
                    activeRef.current.style.transform = `translate(${linkPosition.left}px, ${linkPosition.top}px)`;
                    console.log(link.classList);
                    link.classList.add('text-gray-900');
                    link.classList.add('dark:text-white');
                    setActiveLinkStyle('fixed');
                }
                setActive(true);
            } else if (!active) {
                setActiveLinkStyle('hidden');
                link.classList.remove('text-gray-900');
                link.classList.remove('dark:text-white');
            }
        });

        const handleResize = () => {
            const links = document.querySelectorAll('nav a');
            links.forEach((link) => {
                if (link.getAttribute('href') === pathname) {
                    if (activeRef.current) {
                        const width = link.getBoundingClientRect().width;
                        activeRef.current.style.width = `${width}px`;
                        const linkPosition = link.getBoundingClientRect();
                        activeRef.current.style.transform = `translate(${linkPosition.left}px, ${linkPosition.top}px)`;
                        console.log(link.classList);
                        link.classList.add('text-gray-900');
                        link.classList.add('dark:text-white');
                        setActiveLinkStyle('fixed');
                    }
                    setActive(true);
                } else if (!active) {
                    setActiveLinkStyle('hidden');
                }
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [active, pathname]);

    const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const target = e.currentTarget;
        console.log(pathname, target.href, pathname === target.href);
        if (pathname === `/${target.href.split('/').pop()}`) {
            if (activeRef.current) {
                const width = target.getBoundingClientRect().width;
                activeRef.current.style.width = `${width + 20}px`;
                const linkPosition = target.getBoundingClientRect();
                activeRef.current.style.transform = `translate(${linkPosition.left - 10}px, ${linkPosition.top}px)`;
                console.log(activeRef.current?.style.transform);
            }
        }
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const target = e.currentTarget;
        console.log(pathname, target.href, pathname === target.href);
        if (pathname === `/${target.href.split('/').pop()}`) {
            if (activeRef.current) {
                const width = target.getBoundingClientRect().width;

                const linkPosition = target.getBoundingClientRect();
                activeRef.current.style.width = `${width}px`;
                activeRef.current.style.transform = `translate(${linkPosition.left}px, ${linkPosition.top}px)`;
                console.log(activeRef.current?.style.transform);
            }
        }
    };

    return (
        <header className="sticky top-0 flex flex-col md:flex-row items-center justify-between w-full px-4 py-3 bg-white shadow-md dark:bg-gray-800">
            <div className="flex items-center">
                <Link href="/" className='flex items-center'>
                    <div className='text-lg lg:text-2xl'><FaGraduationCap /></div>
                    <h1 className="ml-2 text-md md:text-lg font-bold text-gray-900 dark:text-white">
                        Student Hub
                    </h1>
                </Link>
                <div className='ml-2 sm:hidden'>
                    <ThemeSwitcher />
                </div>
            </div>
            <nav className='flex items-center justify-center relative'>
                <div className='flex flex-row'>
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`flex items-center ${pathname === link.href ? 'text-gray-700 dark:text-gray-300' : 'text-gray-600 dark:text-gray-400'} px-1 sm:px-4 hover:text-black dark:hover:text-white transition-colors duration-200`}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <span className="mr-2">{link.icon}</span>
                            {link.text}
                        </Link>
                    ))}
                    <div className='md:ml-2 hidden sm:flex'>
                        <ThemeSwitcher />
                    </div>
                </div>
            </nav>
            <div
                className={`fixed opacity-0 lg:opacity-100 left-0 h-[2px] bg-blue-500 dark:bg-indigo-500 ${activeLinkStyle}`}
                ref={activeRef}
                style={{ transition: 'transform 0.3s ease-in-out, width 0.3s ease-in-out' }}
            />
        </header>
    );
}
