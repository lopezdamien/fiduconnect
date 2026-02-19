'use client';

import { usePathname } from 'next/navigation';
import { Header } from './Header';
import { Footer } from './Footer';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isLandingPage = pathname?.startsWith('/lp');

    if (isLandingPage) {
        return <>{children}</>;
    }

    return (
        <>
            <Header />
            <main className="flex-grow pt-20">
                {children}
            </main>
            <Footer />
        </>
    );
}
