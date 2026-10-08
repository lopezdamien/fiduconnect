'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

type PremiumRevealProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
    id?: string;
};

export function PremiumReveal({ children, className, delay = 0, id }: PremiumRevealProps) {
    const reduceMotion = useReducedMotion();

    return (
        <motion.div
            className={className}
            id={id}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
}
