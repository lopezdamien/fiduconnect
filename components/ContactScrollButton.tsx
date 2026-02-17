'use client';

import { Button } from "@/components/Button";
import { ArrowRight } from "lucide-react";

export function ContactScrollButton() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Button
            onClick={scrollToTop}
            className="bg-slate-900 hover:bg-slate-800 text-white"
        >
            Planifier ma consultation gratuite <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
    );
}
