import { ArrowLeftIcon, ArrowRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import officeBanner from '../assets/office-banner.jpg';

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
            <section className="bg-dark pt-40 pb-24 px-5 md:px-10 relative overflow-hidden">
                {/* Background Image */}
                <div 
                    className="absolute inset-0 z-0 bg-cover bg-center opacity-15 grayscale-[50%]" 
                    style={{ backgroundImage: `url(${officeBanner})` }}
                ></div>
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 z-1 bg-linear-to-b from-dark/95 via-dark/80 to-dark"></div>
                <div className="absolute top-0 left-0 w-full h-full z-1 bg-linear-to-l from-gold/5 to-transparent"></div>
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <Link to="/" className="inline-flex items-center gap-2 text-gold-light hover:text-light transition-all duration-300 text-xs uppercase tracking-widest font-semibold mb-12 group">
                        <ArrowLeftIcon className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Volver al inicio
                    </Link>
                    
                    <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
                        <div className="flex flex-col gap-6 max-w-3xl">
                            <span className="uppercase text-xs tracking-[0.3em] text-gold font-bold">Biblioteca Jurídica</span>
                            <h1 className="text-5xl md:text-7xl text-light font-medium leading-tight">
                                Análisis legal <span className="text-gold italic font-serif">de vanguardia</span>
                            </h1>
                            <p className="text-medium/80 font-light text-lg md:text-xl leading-relaxed max-w-2xl">
                                Explore nuestra colección de artículos y guías elaboradas por nuestros expertos sobre los temas más relevantes del ordenamiento jurídico actual.
                            </p>
                        </div>
                        
                        <div className="w-full lg:w-auto">
                            <div className="relative group">
                                <input 
                                    type="text" 
                                    placeholder="Buscar por tema o título..."
                                    className="bg-white/5 border border-white/10 py-4 pl-5 pr-12 text-light focus:border-gold focus:bg-white/10 outline-none transition-all duration-300 w-full lg:w-96 font-light rounded-sm backdrop-blur-sm"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <MagnifyingGlassIcon className="w-5 h-5 text-gold/50 group-focus-within:text-gold absolute right-4 top-4 transition-colors duration-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Grid Area */}
            <section className="py-24 px-5 md:px-10">
                <div className="max-w-7xl mx-auto">
                    {filteredPublicaciones.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {filteredPublicaciones.map((pub) => (
                                <div key={pub.id} className="group flex flex-col h-full bg-white border border-gray-100 hover:border-gold/30 hover:shadow-[0_20px_50px_rgba(184,146,64,0.1)] transition-all duration-500 overflow-hidden cursor-pointer">
                                    <div className="p-8 md:p-10 flex flex-col h-full">
                                        <div className="grow">
                                            <div className="flex items-center gap-3 mb-6">
                                                <span className="w-8 h-px bg-gold/30"></span>
                                                <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold">
                                                    {pub.tag}
                                                </span>
                                            </div>
                                            
                                            <h3 className="text-2xl font-serif text-dark mb-4 leading-snug group-hover:text-gold transition-colors duration-300">
                                                {pub.title}
                                            </h3>
                                            
                                            <p className="text-gray-500 font-light leading-relaxed line-clamp-4 text-sm md:text-base mb-8">
                                                {pub.excerpt}
                                            </p>
                                        </div>

                                        <div className="flex justify-between items-center pt-8 border-t border-gray-100">
                                            <div className="flex flex-col">
                                                <span className="text-xs font-bold text-dark uppercase tracking-wider">{pub.author}</span>
                                                <span className="text-[10px] text-gray-400 mt-1">{pub.date}</span>
                                            </div>
                                            <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-gold group-hover:border-gold group-hover:text-white transition-all duration-300">
                                                <ArrowRightIcon className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-32 bg-gray-50 border border-dashed border-gray-200">
                            <h3 className="text-2xl text-dark font-serif mb-4">No se encontraron resultados</h3>
                            <p className="text-gray-500 font-light mb-8">Intente ajustar su búsqueda para encontrar lo que necesita.</p>
                            <button 
                                onClick={() => setSearchTerm('')}
                                className="text-gold border-b border-gold pb-1 hover:text-dark hover:border-dark transition-all uppercase text-xs tracking-widest font-bold"
                            >
                                Mostrar todas las publicaciones
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
