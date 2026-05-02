import { ArrowLeftIcon, ArrowRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function PublicacionesPage() {
    const allPublicaciones = [
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
        },
        {
            id: 4,
            tag: "Propiedad Intelectual",
            title: "Protección de Marcas en la Era Digital: Retos y Estrategias",
            excerpt: "Cómo proteger sus activos intangibles frente a las nuevas modalidades de infracción en internet y redes sociales según la Ley 20-00.",
            author: "Laura Mendez, Esq.",
            date: "15 Oct 2024"
        },
        {
            id: 5,
            tag: "Inmobiliario",
            title: "Debida Diligencia en Adquisiciones Inmobiliarias en zonas turísticas",
            excerpt: "Los pasos críticos para asegurar una inversión inmobiliaria segura en la República Dominicana, desde la verificación de títulos hasta regímenes de incentivo.",
            author: "Rafael Peralta, Esq.",
            date: "02 Sep 2024"
        },
        {
            id: 6,
            tag: "Derecho Civil",
            title: "Novedades en el Régimen de Responsabilidad Civil Contractual",
            excerpt: "Análisis de las tendencias jurisprudenciales recientes sobre el incumplimiento de contratos y la cuantificación de daños y perjuicios.",
            author: "Carlos Guerrero, Esq.",
            date: "14 Ago 2024"
        }
    ];

    const [searchTerm, setSearchTerm] = useState('');
    
    const filteredPublicaciones = allPublicaciones.filter(pub => 
        pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.tag.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-light min-h-screen">
            {/* Hero Section Page */}
            <section className="bg-dark pt-32 pb-20 px-5 md:px-10 border-b border-gold-light/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-gold/5 to-transparent"></div>
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <Link to="/" className="inline-flex items-center gap-2 text-gold-light hover:text-light transition-colors duration-300 text-xs uppercase tracking-widest font-semibold mb-8">
                        <ArrowLeftIcon className="w-4 h-4" />
                        Volver al inicio
                    </Link>
                    
                    <div className="flex flex-col md:flex-row justify-between items-end gap-10">
                        <div className="flex flex-col gap-6 max-w-2xl">
                            <p className="uppercase text-sm tracking-widest text-gold font-semibold">Biblioteca Jurídica</p>
                            <h1 className="text-5xl md:text-6xl text-light font-heading leading-tight">
                                Análisis legal <span className="text-gold italic">de vanguardia</span>
                            </h1>
                            <p className="text-medium font-light text-lg leading-relaxed">
                                Explore nuestra colección de artículos, análisis y guías legales elaboradas por nuestros expertos sobre los temas más relevantes del ordenamiento jurídico actual.
                            </p>
                        </div>
                        
                        <div className="w-full md:w-auto">
                            <div className="relative group">
                                <input 
                                    type="text" 
                                    placeholder="Buscar publicaciones..."
                                    className="bg-transparent border-b border-medium/50 py-3 pl-2 pr-10 text-light focus:border-gold outline-none transition-all duration-300 w-full md:w-80 font-light"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <MagnifyingGlassIcon className="w-5 h-5 text-medium group-focus-within:text-gold absolute right-2 top-3 transition-colors duration-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Grid Area */}
            <section className="py-20 px-5 md:px-10">
                <div className="max-w-7xl mx-auto">
                    {filteredPublicaciones.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPublicaciones.map((pub) => (
                                <div key={pub.id} className="group flex flex-col h-full border border-medium/20 hover:border-gold hover:shadow-2xl hover:shadow-gold/5 bg-white p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 cursor-pointer">
                                    <div className="flex flex-col gap-4 grow">
                                        <span className="text-xs uppercase tracking-widest text-gold font-semibold">
                                            {pub.tag}
                                        </span>
                                        <h3 className="text-2xl font-serif text-dark group-hover:text-gold transition-colors duration-300 leading-snug">
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
                    ) : (
                        <div className="text-center py-20">
                            <h3 className="text-2xl text-medium font-light">No se encontraron publicaciones que coincidan con su búsqueda.</h3>
                            <button 
                                onClick={() => setSearchTerm('')}
                                className="mt-6 text-gold hover:underline underline-offset-4 uppercase tracking-widest text-xs font-semibold"
                            >
                                Ver todas las publicaciones
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
