import Link from "next/link";
import { Button } from "@/components/Button";
import { CheckCircle2 } from "lucide-react";

export default function Merci() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
            <div className="text-center bg-white p-12 rounded-2xl shadow-lg border border-slate-100 max-w-md w-full">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
                    <CheckCircle2 className="h-10 w-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">
                    Merci !
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                    Votre demande est bien reçue. Nous vous recontactons rapidement.
                </p>
                <div className="flex flex-col gap-3 text-sm text-slate-500 mb-8 bg-slate-50 p-4 rounded-lg">
                    <span>🔒 Confidentiel</span>
                    <span>✅ Sans engagement</span>
                </div>
                <Link href="/">
                    <Button fullWidth>
                        Retour à l&apos;accueil
                    </Button>
                </Link>
            </div>
        </div>
    );
}
