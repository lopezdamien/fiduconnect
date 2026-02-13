import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-bold text-white mb-4 block">
                            FIDU<span className="text-green-500">.</span>
                        </Link>
                        <p className="mt-4 text-sm leading-6 max-w-md">
                            Cabinet indépendant spécialisé dans l&apos;analyse administrative et fiscale des PME genevoises.
                            Nous facilitons la mise en relation avec des cabinets fiduciaires partenaires adaptés à vos besoins.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Navigation</h3>
                        <ul role="list" className="space-y-3">
                            <li><Link href="/services" className="text-sm hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="/ressources" className="text-sm hover:text-white transition-colors">Ressources & Blog</Link></li>
                            <li><Link href="/a-propos" className="text-sm hover:text-white transition-colors">À Propos</Link></li>
                            <li><Link href="/diagnostic" className="text-sm hover:text-white transition-colors">Faire un point gratuit</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Contact</h3>
                        <ul role="list" className="space-y-3">
                            <li className="flex items-center gap-2 text-sm">
                                <MapPin className="h-4 w-4 text-green-500" />
                                <span>Genève, Suisse</span>
                            </li>
                            <li className="flex items-center gap-2 text-sm">
                                <Mail className="h-4 w-4 text-green-500" />
                                <a href="mailto:contact@fidu.ch" className="hover:text-white">contact@fidu.ch</a>
                            </li>
                            <li className="flex items-center gap-2 text-sm">
                                <Phone className="h-4 w-4 text-green-500" />
                                <a href="tel:+41220000000" className="hover:text-white">+41 22 000 00 00</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-500">
                        &copy; {new Date().getFullYear()} FIDU. Tous droits réservés.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/mentions-legales" className="text-xs text-slate-500 hover:text-white">Mentions légales</Link>
                        <Link href="/confidentialite" className="text-xs text-slate-500 hover:text-white">Politique de confidentialité</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
