export default function Hero() {
    return (
        <main className="relative w-full bg-dark bg-linear-to-b from-dark to-black flex flex-col items-center justify-between min-h-dvh pt-16">
            {/* ------------------ Hero Content ------------------ */}
            <div className="relative flex-1 flex flex-col gap-8 justify-center items-center text-center max-w-4xl w-full px-5 md:px-10 py-16">
                <p className="uppercase text-gold-light text-xs tracking-widest flex flex-col sm:flex-row justify-center items-center gap-4 font-semibold">
                    <span className="hidden sm:block w-12 h-px bg-gold-light"></span>
                    <span>república dominicana</span>
                    <span className="hidden sm:block w-4 h-px bg-gold-light"></span>
                    <span className="text-medium font-light">fundada en 2004</span>
                    <span className="hidden sm:block w-12 h-px bg-gold-light"></span>
                </p>

                <h2 className="text-light text-5xl md:text-7xl font-medium leading-tight md:leading-tight">
                    Excelencia legal.
                    <span className="text-gold block mt-2 font-serif italic">Resultados reales.</span>
                </h2>

                <p className="text-medium font-light max-w-2xl leading-relaxed text-lg md:text-xl">
                    Firma de abogados de élite comprometida con proteger sus intereses con precisión, integridad y conocimiento profundo del ordenamiento jurídico dominicano.
                </p>

                {/* <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto mt-8">
                    <button className="uppercase tracking-widest text-xs px-10 py-4 rounded-sm transition-all duration-300 bg-gold text-light hover:bg-gold-light w-full sm:w-auto shadow-lg hover:shadow-gold/20 hover:-translate-y-1">
                        agendar consulta
                    </button>
                    <button className="uppercase tracking-widest text-xs px-10 py-4 rounded-sm transition-all duration-300 bg-transparent border border-medium/50 text-light hover:bg-light hover:text-dark hover:border-light w-full sm:w-auto hover:-translate-y-1">
                        áreas de práctica
                    </button>
                </div> */}
            </div>

            {/* ------------------ Stats Section ------------------ */}
            <div id="stats" className="w-full border-t border-white/5 bg-black/40 py-12 px-5 md:py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-0 text-gold max-w-7xl mx-auto divide-y md:divide-y-0 md:divide-x divide-white/20">
                    
                    <div className="flex flex-col gap-3 text-center group cursor-default pt-6 md:pt-0">
                        <h1 className="text-5xl md:text-6xl font-serif transition-transform duration-500 group-hover:scale-110 group-hover:text-gold-light">20+</h1>
                        <span className="block text-medium uppercase text-[10px] md:text-xs tracking-widest">años de experiencia</span>
                    </div>
                    
                    <div className="flex flex-col gap-3 text-center group cursor-default pt-6 md:pt-0">
                        <h1 className="text-5xl md:text-6xl font-serif transition-transform duration-500 group-hover:scale-110 group-hover:text-gold-light">1,400+</h1>
                        <span className="block text-medium uppercase text-[10px] md:text-xs tracking-widest">casos resueltos</span>
                    </div>
                    
                    <div className="flex flex-col gap-3 text-center group cursor-default pt-6 md:pt-0">
                        <h1 className="text-5xl md:text-6xl font-serif transition-transform duration-500 group-hover:scale-110 group-hover:text-gold-light">6</h1>
                        <span className="block text-medium uppercase text-[10px] md:text-xs tracking-widest">áreas de práctica</span>
                    </div>
                    
                    <div className="flex flex-col gap-3 text-center group cursor-default pt-6 md:pt-0">
                        <h1 className="text-5xl md:text-6xl font-serif transition-transform duration-500 group-hover:scale-110 group-hover:text-gold-light">98%</h1>
                        <span className="block text-medium uppercase text-[10px] md:text-xs tracking-widest">de éxito</span>
                    </div>

                </div>
            </div>
        </main>
    );
}
