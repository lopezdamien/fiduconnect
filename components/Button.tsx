import { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'cta';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    fullWidth?: boolean;
    children: ReactNode;
    className?: string; // Allow custom className overrides
}

export function Button({
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    children,
    className,
    ...props
}: ButtonProps) {
    const baseStyles = 'group inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

    const variants = {
        primary: 'bg-slate-900 text-white hover:bg-slate-800',
        secondary: 'bg-green-800 text-white hover:bg-green-900',
        outline: 'border border-slate-200 bg-white hover:bg-slate-100 text-slate-900',
        ghost: 'hover:bg-slate-100 text-slate-900',
        // CTA marketing : vert dégradé, relief et légère élévation au survol
        cta: 'bg-gradient-to-b from-green-600 to-green-700 text-white shadow-lg shadow-green-900/20 hover:from-green-500 hover:to-green-600 hover:shadow-xl hover:shadow-green-900/30 hover:-translate-y-0.5',
    };

    const sizes = {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-8 text-base',
        lg: 'h-14 px-8 text-lg',
        xl: 'h-16 px-10 text-lg',
    };

    return (
        <button
            className={cn(
                baseStyles,
                variants[variant],
                sizes[size],
                fullWidth && 'w-full',
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
