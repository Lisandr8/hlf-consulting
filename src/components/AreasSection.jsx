import { BuildingOfficeIcon, ShieldCheckIcon, UserGroupIcon, HomeModernIcon, DocumentCheckIcon, ScaleIcon } from '@heroicons/react/24/outline';

export default function AreasSection() {
    const areas = [
        {
            num: "01",
            icon: BuildingOfficeIcon,
            title: "Derecho Corporativo",
            desc: "Constitución de sociedades, fusiones, contratos mercantiles y gobierno corporativo. Asesoría completa a lo largo del ciclo de vida de su empresa."
        },
        {
            num: "02",
            icon: ShieldCheckIcon,
            title: "Defensa Penal",
            desc: "Defensa penal estratégica en todas las instancias del proceso judicial. Actuamos con rapidez y rigor para proteger sus derechos fundamentales."
        },
        {
            num: "03",
            icon: UserGroupIcon,
            title: "Derecho Laboral",
            desc: "Contratos colectivos, desahucios, conciliación laboral y representación ante la Corte de Trabajo. Protegemos empleadores y empleados."
        },
        {
            num: "04",
            icon: HomeModernIcon,
            title: "Civil & Familia",
            desc: "Divorcios, liquidación de bienes, sucesiones, adopción y partición de herencias. Soluciones humanizadas en procesos de alta sensibilidad."
        },
        {
            num: "05",
            icon: DocumentCheckIcon,
            title: "Administrativo",
            desc: "Recursos contencioso-administrativos, contratos con el Estado, licitaciones, permisos y responsabilidad patrimonial del Estado."
        },
        {
            num: "06",
            icon: ScaleIcon,
            title: "Constitucional",
            desc: "Acción de amparo, inconstitucionalidad, tutela de derechos fundamentales y litigio ante el Tribunal Constitucional de la República."
        }
    ];

    return (
        <section id="areas" className="px-5 md:px-10 py-24 md:py-32 bg-light">
            <div className="max-w-7xl mx-auto flex flex-col gap-20">
                
                {/* Header */}
                <div className="flex flex-col gap-8 text-center max-w-3xl mx-auto">
                    <p className="uppercase text-sm tracking-widest text-gold flex items-center justify-center gap-4 font-semibold">
                        <span className="w-12 h-px bg-gold"></span>
                        Nuestra Experiencia
                        <span className="w-12 h-px bg-gold"></span>
                    </p>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-dark font-heading">
                        Especialización en cada <span className="text-gold italic">frente legal</span>
                    </h2>
                    
                    <p className="text-medium leading-relaxed font-light text-lg">
                        Cobertura legal integral que abarca desde el asesoramiento corporativo hasta la defensa penal, siempre con la profundidad y el rigor que cada materia exige.
                    </p>
                </div>

                {/* Grid de Áreas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                    {areas.map((area) => {
                        const Icon = area.icon;
                        return (
                            <div key={area.num} className="group relative flex flex-col justify-between bg-white hover:bg-dark p-10 lg:p-12 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-2xl hover:shadow-gold/10 overflow-hidden z-10 cursor-pointer">
                                
                                {/* Watermark Number */}
                                <span className="absolute -top-6 -right-6 text-9xl font-serif text-gray-50 group-hover:text-white/5 transition-colors duration-500 -z-10 select-none">
                                    {area.num}
                                </span>

                                {/* Top Accent Line */}
                                <div className="absolute top-0 left-0 w-0 h-1 bg-gold transition-all duration-500 group-hover:w-full"></div>

                                <div className="flex flex-col gap-8">
                                    <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gold transition-colors duration-500">
                                        <Icon className="w-8 h-8 text-gold group-hover:text-white transition-colors duration-500" />
                                    </div>
                                    
                                    <div className="flex flex-col gap-4">
                                        <h3 className="text-2xl font-heading text-dark group-hover:text-gold transition-colors duration-300">{area.title}</h3>
                                        <p className="text-medium group-hover:text-gray-300 leading-relaxed font-light transition-colors duration-300">{area.desc}</p>
                                    </div>
                                </div>
                                
                                <div className="mt-12 flex items-center gap-4">
                                    <div className="w-8 h-px bg-medium group-hover:bg-gold transition-colors duration-300"></div>
                                    <span className="uppercase text-xs tracking-widest text-dark group-hover:text-gold font-semibold transition-colors duration-300">
                                        explorar área
                                    </span>
                                </div>

                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}