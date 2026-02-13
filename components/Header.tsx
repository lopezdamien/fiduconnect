'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const navigation = [
        { name: 'Accueil', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Ressources', href: '/ressources' },
        { name: 'À Propos', href: '/a-propos' },
        { name: 'Contact', href: '/contact' },
    ];

    const isActive = (path: string) => pathname === path;

    return (
        <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Global">
                <div className="flex items-center justify-between h-20">
                    <div className="flex lg:flex-1">
                        <Link href="/" className="-m-1.5 p-1.5 font-bold text-2xl tracking-tight text-slate-900">
                            FIDUCONNECT<span className="text-green-800">.</span>
                        </Link>
                    </div>

                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700 hover:bg-slate-50"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <X className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>

                    <div className="hidden lg:flex lg:gap-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-sm font-semibold leading-6 transition-colors ${isActive(item.href) ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <Link href="/diagnostic">
                            <Button variant="secondary" size="sm">
                                Faire un point gratuit
                            </Button>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-b border-slate-100">
                    <div className="space-y-1 px-4 pb-3 pt-2">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`block rounded-md px-3 py-2 text-base font-medium ${isActive(item.href)
                                    ? 'bg-slate-50 text-slate-900'
                                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="mt-4 pt-4 border-t border-slate-100">
                            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                                <Button fullWidth variant="secondary">
                                    Faire le point gratuit
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
