'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Button } from './Button';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const navigation = [
        { name: 'Accueil', href: '/' },
        { name: 'Services comptables', href: '/services' },
        { name: 'TVA Suisse', href: '/tva-suisse' },
        { name: 'Changer de fiduciaire', href: '/changer-fiduciaire' },
        { name: 'Contact', href: '/contact' },
    ];

    const isActive = (path: string) => pathname === path;

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <header className="fixed w-full bg-white/95 backdrop-blur-md z-50 border-b border-slate-100 transition-all duration-300">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Global">
                <div className="flex items-center justify-between h-20">
                    <div className="flex lg:flex-1">
                        <Link href="/" className="-m-1.5 p-1.5 font-bold text-2xl tracking-tight text-slate-900 z-50 relative" onClick={() => setIsMenuOpen(false)}>
                            FIDUCONNECT<span className="text-green-800">.</span>
                        </Link>
                    </div>

                    {/* Animated Hamburger Menu */}
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="relative z-50 w-10 h-10 flex flex-col justify-center items-center focus:outline-none"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span
                                className={`block w-6 h-0.5 bg-slate-900 rounded-full transition-all duration-300 ease-out transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
                                    }`}
                            />
                            <span
                                className={`block w-6 h-0.5 bg-slate-900 rounded-full transition-all duration-300 ease-out ${isMenuOpen ? 'opacity-0 translate-x-3' : 'opacity-100'
                                    }`}
                            />
                            <span
                                className={`block w-6 h-0.5 bg-slate-900 rounded-full transition-all duration-300 ease-out transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
                                    }`}
                            />
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex lg:gap-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-sm font-semibold leading-6 transition-colors duration-200 ${isActive(item.href) ? 'text-green-700' : 'text-slate-600 hover:text-green-700'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <Link href="/diagnostic">
                            <Button variant="secondary" size="sm" className="bg-green-700 text-white hover:bg-green-800 border-transparent transition-transform hover:scale-105">
                                Consultation gratuite (30 min)
                            </Button>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`lg:hidden fixed left-0 right-0 top-[80px] h-[calc(100vh-80px)] bg-white z-40 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col items-center justify-center h-full space-y-8 pb-10 px-6 overflow-y-auto">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`text-2xl font-bold transition-colors ${isActive(item.href) ? 'text-green-700' : 'text-slate-900 hover:text-green-700'
                                }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="pt-4 w-full max-w-xs">
                        <Link href="/diagnostic" onClick={() => setIsMenuOpen(false)}>
                            <Button fullWidth className="bg-green-700 text-white hover:bg-green-800 py-4 text-lg shadow-lg shadow-green-900/20">
                                Consultation gratuite (30 min)
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
