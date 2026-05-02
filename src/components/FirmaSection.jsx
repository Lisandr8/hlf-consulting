import portada from "../assets/portada-law.jpg"
import { ShieldCheckIcon, LightBulbIcon, DocumentCheckIcon, ScaleIcon } from '@heroicons/react/24/outline';

export default function FirmaSection() {
    return (
        <section id="la-firma" className="bg-white py-24 md:py-32">
            <div className="flex flex-col lg:flex-row items-center gap-16 px-5 md:px-10 max-w-7xl mx-auto">
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative group">
                    <div className="absolute inset-0 bg-gold opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-l-[15px] rounded-r-lg z-10 pointer-events-none"></div>
                    <img 
                        src={portada} 
                        className="w-full h-[450px] md:h-[630px] object-cover rounded-l-[15px] rounded-r-lg shadow-2xl shadow-dark/5 border-l-[5px] border-gold transition-transform duration-700 hover:scale-[1.01]" 
                        alt="Oficina Peralta & Asociados" 
                    />
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-1/2 flex flex-col gap-10">
                    <div className="flex flex-col gap-6">
                        <p className="uppercase text-sm tracking-widest text-gold flex items-center gap-4 font-semibold">
                            <span className="w-12 h-px bg-gold"></span> 
                            La Firma
                        </p>
                        <h2 className="text-4xl md:text-5xl leading-tight text-dark font-heading">
                            Una firma construida sobre <span className="text-gold italic">principios sólidos</span>
                        </h2>

                        <div className="flex flex-col gap-4 text-medium font-light leading-relaxed text-lg">
                            <p>
                                Nimbra Law es una firma jurídica de consultoría estratégica fundada en 2022, con más de una década de experiencia consolidada brindando asesoría legal de alto nivel a empresas, instituciones y personas naturales en la República Dominicana. Operamos desde la nube, eliminando fronteras geográficas para servir donde usted nos necesite.
                            </p>
                            <p>
                                Nuestro equipo combina el rigor académico con la experiencia práctica, ofreciendo soluciones jurídicas innovadoras adaptadas al ordenamiento legal dominicano e internacional.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 mt-4 pt-8 border-t border-medium/20">
                        <div className="flex flex-col gap-3 group">
                            <div className="flex items-center gap-3 text-gold">
                                <ShieldCheckIcon className="w-7 h-7" />
                                <h4 className="text-xl text-dark font-heading group-hover:text-gold transition-colors duration-300">Confidencialidad</h4>
                            </div>
                            <p className="text-md text-medium leading-relaxed font-light">Sus asuntos se manejan con discreción absoluta y máxima reserva profesional.</p>
                        </div>
                        
                        <div className="flex flex-col gap-3 group">
                            <div className="flex items-center gap-3 text-gold">
                                <ScaleIcon className="w-7 h-7" />
                                <h4 className="text-xl text-dark font-heading group-hover:text-gold transition-colors duration-300">Estrategia</h4>
                            </div>
                            <p className="text-md text-medium leading-relaxed font-light">Cada caso recibe un enfoque estratégico personalizado orientado a resultados.</p>
                        </div>

                        <div className="flex flex-col gap-3 group">
                            <div className="flex items-center gap-3 text-gold">
                                <LightBulbIcon className="w-7 h-7" />
                                <h4 className="text-xl text-dark font-heading group-hover:text-gold transition-colors duration-300">Innovación</h4>
                            </div>
                            <p className="text-md text-medium leading-relaxed font-light">Firmas digitales, expedientes en la nube y portal judicial en tiempo real.</p>
                        </div>

                        <div className="flex flex-col gap-3 group">
                            <div className="flex items-center gap-3 text-gold">
                                <DocumentCheckIcon className="w-7 h-7" />
                                <h4 className="text-xl text-dark font-heading group-hover:text-gold transition-colors duration-300">Excelencia</h4>
                            </div>
                            <p className="text-md text-medium leading-relaxed font-light">Estándares internacionales aplicados al marco jurídico dominicano.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}