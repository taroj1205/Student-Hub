'use client'
import Image from 'next/image';
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
        const links = document.querySelectorAll('nav a');
        links.forEach((link) => {
            if (link.getAttribute('href') === pathname) {
                if (activeRef.current) {
                    setActiveLinkStyle('block');
                    const width = link.getBoundingClientRect().width;
                    activeRef.current.style.width = `${width}px`;
                    const linkPosition = link.getBoundingClientRect();
                    activeRef.current.style.transform = `translate(${linkPosition.left}px, ${linkPosition.top}px)`;
                    console.log(link.classList);
                    link.classList.add('text-gray-900');
                    link.classList.add('dark:text-white');
                }
                setActive(true);
            } else if (!active) {
                setActiveLinkStyle('hidden');
                link.classList.remove('text-gray-900');
                link.classList.remove('dark:text-white');
            }
        });

        const handleResize = () => {
            links.forEach((link) => {
                if (link.getAttribute('href') === pathname) {
                    if (activeRef.current) {
                        const marginLeft = parseInt(getComputedStyle(link).marginLeft);
                        const marginRight = parseInt(getComputedStyle(link).marginRight);
                        const width = link.getBoundingClientRect().width + marginLeft + marginRight;
                        activeRef.current.style.width = `${width}px`;
                        const linkPosition = link.getBoundingClientRect();
                        activeRef.current.style.transform = `translate(${linkPosition.left - marginLeft}px, ${linkPosition.top}px)`;
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

    return (
        <header className="fixed flex items-center justify-between w-full px-4 py-3 bg-white shadow-md dark:bg-gray-800">
            <div className="flex items-center">
                <div className='text-2xl'><FaGraduationCap /></div>
                <h1 className="ml-2 text-lg font-bold text-gray-900 dark:text-white">
                    Student Hub
                </h1>
            </div>
            <nav className="flex items-center justify-center relative">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`flex items-center ${pathname === link.href ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'} px-4 hover:text-gray-900 dark:hover:text-white transition-colors duration-200`}
                    >
                        <span className="mr-2">{link.icon}</span>
                        {link.text}
                    </Link>
                ))}
                <ThemeSwitcher />
                <div
                    className={`fixed left-0 h-[2px] bg-blue-500 dark:bg-indigo-500 ${activeLinkStyle}`}
                    ref={activeRef}
                    style={{ transition: 'transform 0.3s ease-in-out, width 0.3s ease-in-out' }}
                />
            </nav>
        </header>
    );
}
