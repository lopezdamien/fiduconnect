import type { ReactNode } from 'react';

type PremiumRevealProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
    id?: string;
};

export function PremiumReveal({ children, className, id }: PremiumRevealProps) {
    // Keep the initial HTML visible, including without JavaScript or on slow phones.
    return (
        <div className={className} id={id}>
            {children}
        </div>
    );
}
