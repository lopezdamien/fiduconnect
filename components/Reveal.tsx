'use client';

import { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface RevealProps {
    children: ReactNode;
    /** Décalage d'apparition en secondes (pour cascader plusieurs éléments). */
    delay?: number;
    /** Amplitude du glissement vertical initial, en px. */
    y?: number;
    className?: string;
}

/**
 * Enveloppe un bloc pour le faire apparaître (fondu + léger glissement)
 * quand il entre dans le viewport. Ne s'anime qu'une fois.
 * Respecte la préférence système « réduire les animations ».
 */
export function Reveal({ children, delay = 0, y = 24, className }: RevealProps) {
    const reduce = useReducedMotion();

    if (reduce) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
}
