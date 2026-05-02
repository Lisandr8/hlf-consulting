import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function PublicacionesSection() {
    const publicaciones = [

        {
            id: 1,
            tag: "Derecho Corporativo",
            title: "Reformas a la Ley 479-08 de Sociedades: Impacto en las SRL y sus Socios",
            excerpt: "Un análisis detallado de las últimas modificaciones al régimen societario dominicano y sus implicaciones prácticas para empresarios y gerentes.",
            author: "Rafael Peralta, Esq.",
            date: "12 Mar 2025"
        },
        {
            id: 2,
            tag: "Derecho Laboral",
            title: "El Teletrabajo en la RD: Marco Legal, Derechos y Obligaciones",
            excerpt: "Con la consolidación del trabajo remoto, revisamos las disposiciones del Código Laboral dominicano aplicables al teletrabajo y los vacíos normativos pendientes.",
            author: "Carlos Guerrero, Esq.",
            date: "28 Ene 2025"
        },
        {
            id: 3,
            tag: "Constitucional",
            title: "Acción de Amparo: Mecanismo Clave para la Tutela de Derechos Fundamentales",
            excerpt: "Guía práctica sobre el uso estratégico de la acción de amparo en República Dominicana, sus plazos, presupuestos y alcance ante el Tribunal Constitucional.",
            author: "María Linares, Esq.",
            date: "05 Nov 2024"
        }
    ];

    return (
        <section id="publicaciones" className="py-24 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-5 md:px-10 flex flex-col gap-16">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div className="flex flex-col gap-6">
                        <p className="uppercase text-sm tracking-widest text-gold flex items-center gap-4 font-semibold">
                            <span className="w-12 h-px bg-gold"></span>
                            Publicaciones
                        </p>
                        <h2 className="text-4xl md:text-5xl leading-tight text-dark font-heading">
                            Análisis legal <span className="text-gold italic">de vanguardia</span>
                        </h2>
                    </div>
                    
                    <Link to="/publicaciones" className="uppercase text-xs tracking-widest font-semibold text-dark hover:text-gold flex items-center gap-3 transition-colors duration-300 pb-2">
                        Ver todas
                        <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {publicaciones.map((pub) => (
                        <div key={pub.id} className="group flex flex-col h-full border border-medium/20 hover:border-gold hover:shadow-2xl hover:shadow-gold/5 bg-white p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 cursor-pointer">
                            
                            <div className="flex flex-col gap-4 grow">
                                <span className="text-xs uppercase tracking-widest text-gold font-semibold">
                                    {pub.tag}
                                </span>
                                
                                <h3 className="text-2xl font-serif text-dark group-hover:text-gold transition-colors duration-300">
                                    {pub.title}
                                </h3>
                                
                                <p className="text-medium font-light leading-relaxed mt-2 line-clamp-4">
                                    {pub.excerpt}
                                </p>
                            </div>

                            <div className="flex justify-between items-end border-t border-medium/20 pt-6 mt-8">
                                <div className="flex flex-col gap-1">
                                    <span className="text-sm font-semibold text-dark">{pub.author}</span>
                                    <span className="text-xs font-light text-medium/70">{pub.date}</span>
                                </div>
                                <span className="uppercase text-xs tracking-widest text-dark group-hover:text-gold font-semibold transition-colors duration-300 flex items-center gap-2">
                                    Leer <ArrowRightIcon className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}