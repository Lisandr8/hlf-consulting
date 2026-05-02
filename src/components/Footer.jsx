import { StarIcon } from '@heroicons/react/24/solid';

export default function Footer() {
    return (
        <footer className="bg-[#0f1115] text-gray-300 pt-20 md:pt-24 pb-8 md:pb-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-5 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    
                    {/* Brand Section */}
                    <div className="lg:col-span-5 flex flex-col gap-6 pr-0 lg:pr-12">
                        <div className="flex flex-col">
                            <span className="text-3xl font-serif text-white tracking-wide">Peralta & Asociados</span>
                            <span className="text-sm uppercase tracking-widest text-gold font-semibold mt-1">Abogados & Consultores</span>
                        </div>
                        <p className="font-light text-gray-400 leading-relaxed text-sm md:text-base">
                            Firma jurídica de consultoría estratégica comprometida con la excelencia legal y la defensa de sus intereses en la República Dominicana y el ámbito internacional.
                        </p>
                        
                        {/* API Badge */}
                        <div className="inline-flex items-center gap-3 px-4 py-3 border border-white/10 bg-white/5 rounded-sm w-fit mt-2 cursor-default hover:border-gold/50 transition-colors duration-300">
                            <StarIcon className="w-4 h-4 text-gold shrink-0" />
                            <span className="text-xs font-light tracking-wide text-gray-400">Portal integrado con <span className="text-white font-medium">api.poderjudicial.gob.do</span></span>
                        </div>
                    </div>

                    {/* Columns */}
                    <div className="lg:col-span-2 flex flex-col gap-5 mt-2 lg:mt-0">
                        <h5 className="text-white font-serif text-xl mb-2">La Firma</h5>
                        <a href="#la-firma" className="text-sm font-light text-gray-400 hover:text-gold hover:translate-x-1 transition-all duration-300">Sobre Nosotros</a>
                        <a href="#equipo" className="text-sm font-light text-gray-400 hover:text-gold hover:translate-x-1 transition-all duration-300">Equipo de Abogados</a>
                        <a href="#publicaciones" className="text-sm font-light text-gray-400 hover:text-gold hover:translate-x-1 transition-all duration-300">Publicaciones</a>
                        <a href="#testimonios" className="text-sm font-light text-gray-400 hover:text-gold hover:translate-x-1 transition-all duration-300">Testimonios</a>
                    </div>

                    <div className="lg:col-span-3 flex flex-col gap-5 mt-2 lg:mt-0">
                        <h5 className="text-white font-serif text-xl mb-2">Áreas de Práctica</h5>
                        <a href="#areas" className="text-sm font-light text-gray-400 hover:text-gold hover:translate-x-1 transition-all duration-300">Derecho Corporativo & Mercantil</a>
                        <a href="#areas" className="text-sm font-light text-gray-400 hover:text-gold hover:translate-x-1 transition-all duration-300">Derecho Penal & Defensa</a>
                        <a href="#areas" className="text-sm font-light text-gray-400 hover:text-gold hover:translate-x-1 transition-all duration-300">Derecho Laboral</a>
                        <a href="#areas" className="text-sm font-light text-gray-400 hover:text-gold hover:translate-x-1 transition-all duration-300">Derecho Civil & Familia</a>
                        <a href="#areas" className="text-sm font-light text-gray-400 hover:text-gold hover:translate-x-1 transition-all duration-300">Derecho Administrativo</a>
                    </div>

                    <div className="lg:col-span-2 flex flex-col gap-5 mt-2 lg:mt-0">
                        <h5 className="text-white font-serif text-xl mb-2">Servicios</h5>
                        <a href="#consulta-judicial" className="text-sm font-light text-gray-400 hover:text-gold hover:translate-x-1 transition-all duration-300">Consulta Judicial</a>
                        <a href="#contacto" className="text-sm font-light text-gray-400 hover:text-gold hover:translate-x-1 transition-all duration-300">Consulta Virtual</a>
                        <a href="#contacto" className="text-sm font-light text-gray-400 hover:text-gold hover:translate-x-1 transition-all duration-300">Firma Digital</a>
                        <a href="#contacto" className="text-sm font-light text-gray-400 hover:text-gold hover:translate-x-1 transition-all duration-300">Expediente Web</a>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-light text-gray-500">
                    <div>© {new Date().getFullYear()} Peralta & Asociados. Todos los derechos reservados.</div>
                    <div className="flex flex-wrap justify-center gap-6">
                        <a href="#" className="hover:text-gold transition-colors duration-300">Política de Privacidad</a>
                        <a href="#" className="hover:text-gold transition-colors duration-300">Aviso Legal</a>
                        <a href="#" className="hover:text-gold transition-colors duration-300">Términos de Uso</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}