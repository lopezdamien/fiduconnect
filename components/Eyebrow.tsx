import { ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

type EyebrowColor = 'green' | 'blue' | 'purple' | 'orange' | 'slate';

const COLORS: Record<EyebrowColor, string> = {
    green: 'bg-green-50 text-green-700 ring-green-600/20',
    blue: 'bg-blue-50 text-blue-700 ring-blue-600/20',
    purple: 'bg-purple-50 text-purple-700 ring-purple-600/20',
    orange: 'bg-orange-50 text-orange-700 ring-orange-600/20',
    slate: 'bg-slate-100 text-slate-600 ring-slate-500/20',
};

const DOT: Record<EyebrowColor, string> = {
    green: 'bg-green-500',
    blue: 'bg-blue-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500',
    slate: 'bg-slate-400',
};

interface EyebrowProps {
    children: ReactNode;
    color?: EyebrowColor;
    /** Style translucide pour les sections à fond sombre. */
    onDark?: boolean;
    className?: string;
}

/**
 * Étiquette d'accroche ("eyebrow") posée en tête de section.
 * Composant unique pour uniformiser les badges sur tout le site.
 */
export function Eyebrow({ children, color = 'green', onDark = false, className }: EyebrowProps) {
    return (
        <span
            className={cn(
                'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ring-1 ring-inset',
                onDark ? 'bg-white/10 text-green-300 ring-white/15 backdrop-blur-sm' : COLORS[color],
                className,
            )}
        >
            <span className={cn('h-1.5 w-1.5 rounded-full', onDark ? 'bg-green-400' : DOT[color])} aria-hidden="true" />
            {children}
        </span>
    );
}
