import { useState } from 'react';
import { MagnifyingGlassIcon, InformationCircleIcon, DocumentTextIcon, ExclamationTriangleIcon, ScaleIcon, CalendarDaysIcon, BuildingLibraryIcon } from '@heroicons/react/24/outline';

const API_BASE = import.meta.env.DEV 
    ? '/api/poderjudicial/Casos/Tramite' 
    : 'https://api.poderjudicial.gob.do/Casos/Tramite';

export default function ConsultaSection() {
    const [activeTab, setActiveTab] = useState('nuc');

    // Input states
    const [nuc, setNuc] = useState('');
    const [solicitud, setSolicitud] = useState('');

    // API response states
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [results, setResults] = useState(null);
    const [searchMessage, setSearchMessage] = useState('');

    const resetResults = () => {
        setError(null);
        setResults(null);
        setSearchMessage('');
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        resetResults();

        try {
            let url = '';

            if (activeTab === 'nuc') {
                if (!nuc.trim()) throw new Error("Por favor, ingrese el Número Único de Caso (NUC).");
                url = `${API_BASE}/ObtenerDatosPorNuc?Nuc=${encodeURIComponent(nuc.trim())}`;
            } else {
                if (!solicitud.trim()) throw new Error("Por favor, ingrese el Número de Solicitud.");
                url = `${API_BASE}/ObtenerDatosPorSolicitud?NroSolicitud=${encodeURIComponent(solicitud.trim())}`;
            }

            const response = await fetch(url);

            if (response.status === 429) {
                throw new Error("Ha excedido el límite de consultas. Por favor espere un minuto e intente nuevamente.");
            }

            if (response.status === 400) {
                const errorData = await response.json().catch(() => null);
                throw new Error(errorData?.message || "El formato del dato suministrado no es válido. Verifique e intente nuevamente.");
            }

            if (response.status === 404) {
                const errorData = await response.json().catch(() => null);
                setSearchMessage(errorData?.message || "No se encontraron resultados.");
                setResults([]);
                return;
            }

            if (!response.ok) {
                throw new Error("No se pudo establecer conexión con el sistema judicial. Intente más tarde.");
            }

            const data = await response.json();
            setSearchMessage(data.message || '');

            // La API retorna { message, data } donde data es un array (NUC) o un objeto (Solicitud)
            if (Array.isArray(data.data)) {
                setResults(data.data);
            } else if (data.data && typeof data.data === 'object' && Object.keys(data.data).length > 0) {
                setResults([data.data]);
            } else {
                setResults([]);
            }

        } catch (err) {
            setError(err.message || "Ocurrió un error inesperado al realizar la consulta.");
        } finally {
            setIsLoading(false);
        }
    };

    // Badge de estado con color según el valor
    const EstadoBadge = ({ estado }) => {
        const lower = (estado || '').toLowerCase();
        let colorClasses = 'bg-medium/10 text-medium';

        if (lower.includes('finalizado')) {
            colorClasses = 'bg-green-900/30 text-green-400 border border-green-800/30';
        } else if (lower.includes('proceso') || lower.includes('audiencia')) {
            colorClasses = 'bg-gold/10 text-gold border border-gold/20';
        }

        return (
            <span className={`inline-block px-3 py-1 text-[10px] uppercase tracking-widest font-semibold rounded-sm ${colorClasses}`}>
                {estado || "No establecido"}
            </span>
        );
    };

    return (
        <section id="consulta-judicial" className="py-24 md:py-32 bg-light">
            <div className="max-w-7xl mx-auto px-5 md:px-10 flex flex-col gap-16">
                
                {/* Header Section */}
                <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
                    <div className="w-full md:w-1/2 flex flex-col gap-6">
                        <p className="uppercase text-sm tracking-widest text-gold flex items-center gap-4 font-semibold">
                            <span className="w-12 h-px bg-gold"></span>
                            Conectado al Poder Judicial
                        </p>
                        <h2 className="text-4xl md:text-5xl leading-tight text-dark font-heading">
                            Consulta tu caso judicial en <span className="text-gold italic">tiempo real</span>
                        </h2>
                    </div>

                    <div className="w-full md:w-1/2">
                        <p className="text-medium leading-relaxed font-light text-lg">
                            Nuestro portal está integrado directamente con la API oficial del <span className="font-medium text-dark">Poder Judicial de la República Dominicana</span>. Consulte el estado de su expediente, movimientos procesales y actuaciones judiciales sin necesidad de desplazarse a ningún tribunal.
                            <br /><br />
                            Disponible las 24 horas del día, los 7 días de la semana. La información es provista directamente por los sistemas oficiales.
                        </p>
                    </div>           
                </div>

                {/* Search Container */}
                <div className="w-full bg-white shadow-xl shadow-medium/5 border border-medium/20 rounded-sm overflow-hidden flex flex-col">
                    
                    {/* Tabs */}
                    <div className="flex flex-col sm:flex-row border-b border-medium/20 bg-gray-50">
                        <button 
                            onClick={() => { setActiveTab('nuc'); resetResults(); }}
                            className={`flex-1 py-5 px-6 text-sm font-semibold tracking-wider uppercase transition-colors duration-300 border-b-2 ${activeTab === 'nuc' ? 'border-gold text-gold bg-white' : 'border-transparent text-medium hover:text-dark hover:bg-white/50'}`}
                        >
                            Por Número de Caso (NUC)
                        </button>
                        <button 
                            onClick={() => { setActiveTab('solicitud'); resetResults(); }}
                            className={`flex-1 py-5 px-6 text-sm font-semibold tracking-wider uppercase transition-colors duration-300 border-b-2 ${activeTab === 'solicitud' ? 'border-gold text-gold bg-white' : 'border-transparent text-medium hover:text-dark hover:bg-white/50'}`}
                        >
                            Por Número de Solicitud
                        </button>
                    </div>

                    {/* Form Area */}
                    <form onSubmit={handleSearch} className="p-8 md:p-12">
                        
                        {/* Panel 1: NUC */}
                        {activeTab === 'nuc' && (
                            <div className="flex flex-col md:flex-row gap-8 items-end">
                                <div className="flex flex-col gap-2 w-full md:flex-1 relative group">
                                    <label className="text-[10px] uppercase tracking-widest font-semibold text-medium group-focus-within:text-gold transition-colors">Número Único de Caso (NUC)</label>
                                    <input 
                                        className="w-full bg-transparent border-b border-medium/30 pb-2 text-dark placeholder-medium/50 outline-none focus:border-gold transition-all" 
                                        type="text"
                                        placeholder="Ej: 2024-0144027" 
                                        value={nuc}
                                        onChange={(e) => setNuc(e.target.value)}
                                    />
                                </div>
                                <button type="submit" disabled={isLoading} className="w-full md:w-auto bg-gold text-white uppercase tracking-widest text-xs font-semibold py-3.5 px-10 hover:bg-gold-light transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 shrink-0">
                                    <MagnifyingGlassIcon className="w-4 h-4" />
                                    {isLoading ? 'Consultando...' : 'Consultar'}
                                </button>
                            </div>
                        )}

                        {/* Panel 2: Solicitud */}
                        {activeTab === 'solicitud' && (
                            <div className="flex flex-col md:flex-row gap-8 items-end">
                                <div className="flex flex-col gap-2 w-full md:flex-1 relative group">
                                    <label className="text-[10px] uppercase tracking-widest font-semibold text-medium group-focus-within:text-gold transition-colors">Número de Solicitud</label>
                                    <input 
                                        className="w-full bg-transparent border-b border-medium/30 pb-2 text-dark placeholder-medium/50 outline-none focus:border-gold transition-all" 
                                        type="text" 
                                        placeholder="Ej: 2024-R0434917" 
                                        value={solicitud}
                                        onChange={(e) => setSolicitud(e.target.value)}
                                    />
                                </div>
                                <button type="submit" disabled={isLoading} className="w-full md:w-auto bg-gold text-white uppercase tracking-widest text-xs font-semibold py-3.5 px-10 hover:bg-gold-light transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 shrink-0">
                                    <MagnifyingGlassIcon className="w-4 h-4" />
                                    {isLoading ? 'Consultando...' : 'Consultar'}
                                </button>
                            </div>
                        )}
                        
                        {/* Results Area */}
                        <div className="mt-10">
                            {/* Loading */}
                            {isLoading && (
                                <div className="flex items-center justify-center py-10 text-gold animate-pulse">
                                    <div className="w-6 h-6 border-2 border-gold border-t-transparent rounded-full animate-spin"></div>
                                    <span className="ml-3 font-medium uppercase tracking-widest text-sm">Consultando Poder Judicial...</span>
                                </div>
                            )}

                            {/* Error */}
                            {error && (
                                <div className="flex items-start gap-4 p-5 bg-red-50 border border-red-200 text-red-800 rounded-sm">
                                    <ExclamationTriangleIcon className="w-6 h-6 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Error de Consulta</h4>
                                        <p className="text-sm font-light leading-relaxed">{error}</p>
                                    </div>
                                </div>
                            )}

                            {/* No results */}
                            {results && results.length === 0 && !isLoading && !error && (
                                <div className="flex flex-col items-center justify-center py-12 text-medium text-center border border-dashed border-medium/30 rounded-sm">
                                    <DocumentTextIcon className="w-12 h-12 mb-4 text-medium/50" />
                                    <h4 className="text-lg font-medium text-dark mb-2">No se encontraron expedientes</h4>
                                    <p className="text-sm font-light max-w-md">{searchMessage || "No hemos encontrado ningún caso asociado a la información proporcionada. Verifique los datos e intente nuevamente."}</p>
                                </div>
                            )}

                            {/* Results found */}
                            {results && results.length > 0 && !isLoading && !error && (
                                <div className="flex flex-col gap-6">
                                    {/* Results header */}
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-medium/20 pb-4 gap-2">
                                        <h3 className="text-xl font-medium text-dark">{searchMessage}</h3>
                                        <span className="text-sm text-medium font-light">{results.length} trámite{results.length !== 1 ? 's' : ''} encontrado{results.length !== 1 ? 's' : ''}</span>
                                    </div>

                                    {/* Result cards */}
                                    <div className="flex flex-col gap-4">
                                        {results.map((tramite, index) => (
                                            <div key={index} className="group flex flex-col gap-4 p-6 md:p-8 border border-medium/20 rounded-sm hover:border-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5">
                                                {/* Top row: NUC + Estado */}
                                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                                    <div className="flex items-center gap-3">
                                                        <ScaleIcon className="w-5 h-5 text-gold shrink-0" />
                                                        <span className="font-semibold text-dark text-lg">{tramite.nuc}</span>
                                                        <span className="text-xs text-medium font-light">/ {tramite.numeroTramite}</span>
                                                    </div>
                                                    <EstadoBadge estado={tramite.estado} />
                                                </div>

                                                {/* Asunto */}
                                                <h4 className="text-dark font-medium text-base">{tramite.asunto}</h4>

                                                {/* Details grid */}
                                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-medium/10">
                                                    <div className="flex flex-col gap-1">
                                                        <span className="text-[10px] uppercase tracking-widest text-medium font-semibold">Materia</span>
                                                        <span className="text-sm text-dark">{tramite.materia}</span>
                                                    </div>
                                                    <div className="flex flex-col gap-1">
                                                        <span className="text-[10px] uppercase tracking-widest text-medium font-semibold">Tribunal</span>
                                                        <span className="text-sm text-dark">{tramite.tribunal}</span>
                                                    </div>
                                                    <div className="flex flex-col gap-1">
                                                        <span className="text-[10px] uppercase tracking-widest text-medium font-semibold">Sala</span>
                                                        <span className="text-sm text-dark">{tramite.sala}</span>
                                                    </div>
                                                    <div className="flex flex-col gap-1">
                                                        <span className="text-[10px] uppercase tracking-widest text-medium font-semibold">Fecha</span>
                                                        <div className="flex items-center gap-1.5">
                                                            <CalendarDaysIcon className="w-3.5 h-3.5 text-gold" />
                                                            <span className="text-sm text-dark">{tramite.fecha}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Bottom row: Solicitud + Referencia + Resultado Audiencia */}
                                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-medium/10 text-sm">
                                                    <div className="flex items-center gap-2 text-medium font-light">
                                                        <BuildingLibraryIcon className="w-4 h-4 text-gold shrink-0" />
                                                        <span>Solicitud: <span className="text-dark font-medium">{tramite.numeroSolicitud}</span></span>
                                                    </div>
                                                    {tramite.resultadoAudiencia && tramite.resultadoAudiencia !== "No disponible" && (
                                                        <span className="text-gold font-semibold uppercase tracking-widest text-xs">
                                                            {tramite.resultadoAudiencia}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        
                        {/* Disclaimer */}
                        <div className="mt-8 flex items-start gap-3 bg-gray-50 p-4 border border-medium/20 text-xs text-medium leading-relaxed rounded-sm">
                            <InformationCircleIcon className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                            <p>
                                La información mostrada proviene directamente de los sistemas del Poder Judicial de la República Dominicana (api.poderjudicial.gob.do). Esta firma no es responsable por inexactitudes en los datos provistos. Para asistencia legal detallada sobre su caso, contáctenos directamente.
                            </p>
                        </div>
                    </form>
                    
                </div>
            </div>
        </section>
    );
}