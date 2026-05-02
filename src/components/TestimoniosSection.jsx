export default function TestimoniosSection() {
    const testimonios = [
        {
            id: 1,
            body: "Nimbra Law manejó nuestra reestructuración corporativa con precisión y discreción que superó todas nuestras expectativas. Son definitivamente nuestros asesores de cabecera.",
            author: "Jorge Martínez",
            company: "CEO — Grupo Empresarial Caribe"
        },
        {
            id: 2,
            body: "En un proceso penal complejo, el equipo demostró un manejo impecable de la defensa. Su estrategia clara y comunicación transparente marcaron la diferencia en el resultado.",
            company: "Cliente — Defensa Penal"
        },
        {
            id: 3,
            body: "El portal de consulta judicial es una herramienta increíble. Puedo ver el estado de mi caso desde mi oficina en cualquier momento. Tecnología al servicio del derecho.",
            author: "Ana Rodríguez",
            company: "Directora Legal — Inversiones del Norte"
        }
    ];

    return (
        <section id="testimonios" className="py-24 md:py-32 bg-[#111111] text-light">
            <div className="max-w-7xl mx-auto px-5 md:px-10 flex flex-col gap-16 md:gap-20">
                
                {/* Header */}
                <div className="flex flex-col gap-6 text-center items-center">
                    <p className="uppercase text-sm tracking-widest text-gold flex items-center justify-center gap-4 font-semibold">
                        <span className="w-12 h-px bg-gold"></span>
                        Testimonios
                        <span className="w-12 h-px bg-gold"></span>
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-heading">
                        Lo que dicen <span className="text-gold italic">nuestros clientes</span>
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonios.map((testi) => (
                        <div key={testi.id} className="group relative flex flex-col justify-between bg-white/5 border border-white/10 p-10 hover:border-gold hover:bg-white/10 hover:-translate-y-1 transition-all duration-500 rounded-sm">
                            
                            <div className="flex flex-col gap-4">
                                <span className="text-6xl font-serif text-gold leading-none opacity-50 group-hover:opacity-100 transition-opacity duration-300">"</span>
                                <p className="text-medium font-light italic leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
                                    {testi.body}
                                </p>
                            </div>

                            <div className="flex flex-col gap-1 mt-10 pt-6 border-t border-white/10 group-hover:border-gold/50 transition-colors duration-300">
                                <span className="text-white font-semibold text-lg">{testi.author}</span>
                                <span className="text-gold text-xs uppercase tracking-widest font-semibold">{testi.company}</span>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
