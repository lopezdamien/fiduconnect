'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export interface AccordionItem {
    question: string;
    answer: string;
}

interface AccordionProps {
    items: AccordionItem[];
    /** Index ouvert par défaut (aucun si non fourni). */
    defaultOpen?: number;
}

/**
 * FAQ accordéon animée, pilotée par un tableau d'items.
 * Remplace les blocs <details> dupliqués à la main.
 */
export function Accordion({ items, defaultOpen }: AccordionProps) {
    const [open, setOpen] = useState<number | null>(defaultOpen ?? null);
    const reduce = useReducedMotion();

    return (
        <div className="grid gap-4">
            {items.map((item, index) => {
                const isOpen = open === index;
                return (
                    <div
                        key={item.question}
                        className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-colors hover:border-slate-300"
                    >
                        <button
                            type="button"
                            onClick={() => setOpen(isOpen ? null : index)}
                            aria-expanded={isOpen}
                            className="flex w-full cursor-pointer items-center justify-between gap-4 p-6 text-left"
                        >
                            <span className="flex items-center gap-3 text-lg font-bold text-slate-900">
                                <HelpCircle className="h-5 w-5 shrink-0 text-green-600" />
                                {item.question}
                            </span>
                            <ChevronDown
                                className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? '-rotate-180 text-green-600' : ''}`}
                            />
                        </button>

                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    initial={reduce ? undefined : { height: 0, opacity: 0 }}
                                    animate={reduce ? undefined : { height: 'auto', opacity: 1 }}
                                    exit={reduce ? undefined : { height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                >
                                    <p className="px-6 pb-6 pl-14 leading-relaxed text-slate-600">
                                        {item.answer}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}
