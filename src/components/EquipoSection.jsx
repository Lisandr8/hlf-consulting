export default function EquipoSection() {
    const team = [
        {
            id: 1,
            name: "Rafael Peralta, Esq.",
            role: "Socio Fundador",
            bio: "Corporativo · Constitucional",
            image: ""
        },
        {
            id: 2,
            name: "María Linares, Esq.",
            role: "Socia Principal",
            bio: "Penal · Administrativo",
            image: ""
        },
        {
            id: 3,
            name: "Carlos Guerrero, Esq.",
            role: "Socio",
            bio: "Laboral · Civil",
            image: ""
        },
        {
            id: 4,
            name: "Sofía Arias, Esq.",
            role: "Asociada Senior",
            bio: "Familia · Civil",
            image: ""
        }
    ];

    return (
        <section id="equipo" className="py-24 md:py-32 bg-dark text-light">
            <div className="max-w-7xl mx-auto px-5 md:px-10 flex flex-col gap-20">
                
                {/* Header */}
                <div className="flex flex-col gap-8 items-center text-center max-w-3xl mx-auto">
                    <p className="uppercase text-sm tracking-widest text-gold flex items-center justify-center gap-4 font-semibold">
                        <span className="w-12 h-px bg-gold"></span>
                        Nuestro Equipo
                        <span className="w-12 h-px bg-gold"></span>
                    </p>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-heading">
                        Trayectoria y <span className="text-gold italic">prestigio</span>
                    </h2>
                    
                    <p className="text-medium leading-relaxed font-light text-lg">
                        Un grupo selecto de profesionales comprometidos con la excelencia y la defensa incansable de sus intereses.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {team.map((member) => (
                        <div key={member.id} className="group relative flex flex-col gap-4 cursor-pointer">
                            
                            {/* Image Container with Hover Effects */}
                            <div className="relative aspect-3/4 overflow-hidden bg-medium/10 rounded-sm">
                                <img 
                                    src={member.image} 
                                    alt={member.name}
                                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                />
                                
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-dark/90 via-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                                
                                {/* Hover content inside image */}
                                <div className="absolute bottom-0 left-0 w-full p-6 text-center translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <h3 className="text-xl font-serif text-light mb-1">{member.name}</h3>
                                    <p className="text-xs tracking-widest uppercase text-gold font-semibold">{member.role}</p>
                                </div>
                            </div>
                            
                            {/* Text Content (Bio outside) */}
                            <div className="flex flex-col text-center px-2">
                                <p className="text-xs text-medium group-hover:text-light transition-colors duration-300 tracking-wider uppercase">{member.bio}</p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}