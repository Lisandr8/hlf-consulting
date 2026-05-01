import { useState } from 'react';
import { MagnifyingGlassIcon, InformationCircleIcon, DocumentTextIcon, ExclamationTriangleIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

export default function ConsultaSection() {
    const [activeTab, setActiveTab] = useState('expediente');

    // States for inputs
    const [expediente, setExpediente] = useState('');
    const [tribunal, setTribunal] = useState('');
    
    const [parte, setParte] = useState('');
    const [tipoParte, setTipoParte] = useState('');
    
    const [cedula, setCedula] = useState('');
    const [rol, setRol] = useState('');

    // State for API response
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [results, setResults] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setResults(null);
        
        try {
            // Construir los parámetros de búsqueda según la pestaña activa
            const queryParams = new URLSearchParams();
            if (activeTab === 'expediente') {
                if (!expediente) throw new Error("Por favor, ingrese el número de expediente.");
                queryParams.append('expediente', expediente);
                if (tribunal) queryParams.append('tribunal', tribunal);
            } else if (activeTab === 'parte') {
                if (!parte) throw new Error("Por favor, ingrese el nombre de la parte.");
                queryParams.append('parte', parte);
                if (tipoParte) queryParams.append('tipo', tipoParte);
            } else if (activeTab === 'cedula') {
                if (!cedula) throw new Error("Por favor, ingrese la cédula o RNC.");
                queryParams.append('cedula', cedula);
                if (rol) queryParams.append('rol', rol);
            }
            
            // Llamada a la API real
            const response = await fetch(`https://api.poderjudicial.gob.do/Casos?${queryParams.toString()}`);
            
            if (!response.ok) {
                // Si la API falla (CORS, 404, etc.), lanzamos error.
                throw new Error("No se pudo establecer conexión con el sistema judicial o la solicitud fue denegada.");
            }
            
            const data = await response.json();
            
            // Asumiendo que la API retorna un array o un objeto con los casos
            if (Array.isArray(data)) {
                setResults(data);
            } else if (data && data.casos && Array.isArray(data.casos)) {
                setResults(data.casos);
            } else if (data && typeof data === 'object') {
                setResults([data]); // Envolver en array si es un solo objeto
            } else {
                setResults([]);
            }

        } catch (err) {
            setError(err.message || "Ocurrió un error inesperado al realizar la consulta.");
            // Opcional: Proveer datos simulados si la API falla por CORS durante el desarrollo local
            // setResults([{ id: "023-2024-SSEN-00123", tribunal: "Cámara Civil", estado: "En Proceso", fecha: "2024-03-15", descripcion: "Datos simulados debido a error de CORS en desarrollo local." }]);
        } finally {
            setIsLoading(false);
        }
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
                        <p className="text-gray-500 leading-relaxed font-light text-lg">
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
                            onClick={() => { setActiveTab('expediente'); setError(null); setResults(null); }}
                            className={`flex-1 py-5 px-6 text-sm font-semibold tracking-wider uppercase transition-colors duration-300 border-b-2 ${activeTab === 'expediente' ? 'border-gold text-gold bg-white' : 'border-transparent text-gray-500 hover:text-dark hover:bg-white/50'}`}
                        >
                            Número de Expediente
                        </button>
                        <button 
                            onClick={() => { setActiveTab('parte'); setError(null); setResults(null); }}
                            className={`flex-1 py-5 px-6 text-sm font-semibold tracking-wider uppercase transition-colors duration-300 border-b-2 ${activeTab === 'parte' ? 'border-gold text-gold bg-white' : 'border-transparent text-gray-500 hover:text-dark hover:bg-white/50'}`}
                        >
                            Por Nombre de Parte
                        </button>
                        <button 
                            onClick={() => { setActiveTab('cedula'); setError(null); setResults(null); }}
                            className={`flex-1 py-5 px-6 text-sm font-semibold tracking-wider uppercase transition-colors duration-300 border-b-2 ${activeTab === 'cedula' ? 'border-gold text-gold bg-white' : 'border-transparent text-gray-500 hover:text-dark hover:bg-white/50'}`}
                        >
                            Por Cédula / RNC
                        </button>
                    </div>

                    {/* Form Area */}
                    <form onSubmit={handleSearch} className="p-8 md:p-12">
                        
                        {/* Panel 1: Expediente */}
                        {activeTab === 'expediente' && (
                            <div className="flex flex-col md:flex-row gap-8 items-end">
                                <div className="flex flex-col gap-2 w-full md:w-2/5 relative group">
                                    <label className="text-[10px] uppercase tracking-widest font-semibold text-medium group-focus-within:text-gold transition-colors">Número de Expediente</label>
                                    <input 
                                        className="w-full bg-transparent border-b border-medium/30 pb-2 text-dark placeholder-medium/50 outline-none focus:border-gold transition-all" 
                                        type="text"
                                        placeholder="Ej: 023-2024-SSEN-00123" 
                                        value={expediente}
                                        onChange={(e) => setExpediente(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col gap-2 w-full md:w-2/5 relative group">
                                    <label className="text-[10px] uppercase tracking-widest font-semibold text-medium group-focus-within:text-gold transition-colors">Tribunal / Jurisdicción</label>
                                    <select 
                                        className="w-full bg-transparent border-b border-medium/30 pb-2 text-dark outline-none focus:border-gold transition-all cursor-pointer"
                                        value={tribunal}
                                        onChange={(e) => setTribunal(e.target.value)}
                                    >
                                        <option value="">Todos los Tribunales</option>
                                        <option value="civil">Civil</option>
                                        <option value="penal">Penal</option>
                                        <option value="laboral">Laboral</option>
                                        <option value="contencioso">Contencioso Administrativo</option>
                                        <option value="familia">Familia / Niñez</option>
                                        <option value="comercial">Comercial</option>
                                    </select>
                                </div>
                                <button type="submit" disabled={isLoading} className="w-full md:w-1/5 bg-gold text-white uppercase tracking-widest text-xs font-semibold py-3.5 px-6 hover:bg-gold-light transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50">
                                    <MagnifyingGlassIcon className="w-4 h-4" />
                                    {isLoading ? 'Buscando...' : 'Consultar'}
                                </button>
                            </div>
                        )}

                        {/* Panel 2: Parte */}
                        {activeTab === 'parte' && (
                            <div className="flex flex-col md:flex-row gap-8 items-end">
                                <div className="flex flex-col gap-2 w-full md:w-2/5 relative group">
                                    <label className="text-[10px] uppercase tracking-widest font-semibold text-medium group-focus-within:text-gold transition-colors">Nombre de la Parte</label>
                                    <input 
                                        className="w-full bg-transparent border-b border-medium/30 pb-2 text-dark placeholder-medium/50 outline-none focus:border-gold transition-all" 
                                        type="text" 
                                        placeholder="Nombre completo o empresa" 
                                        value={parte}
                                        onChange={(e) => setParte(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col gap-2 w-full md:w-2/5 relative group">
                                    <label className="text-[10px] uppercase tracking-widest font-semibold text-medium group-focus-within:text-gold transition-colors">Tipo de Parte</label>
                                    <select 
                                        className="w-full bg-transparent border-b border-medium/30 pb-2 text-dark outline-none focus:border-gold transition-all cursor-pointer"
                                        value={tipoParte}
                                        onChange={(e) => setTipoParte(e.target.value)}
                                    >
                                        <option value="">Cualquiera</option>
                                        <option value="demandante">Demandante / Querellante</option>
                                        <option value="demandado">Demandado / Imputado</option>
                                    </select>
                                </div>
                                <button type="submit" disabled={isLoading} className="w-full md:w-1/5 bg-gold text-white uppercase tracking-widest text-xs font-semibold py-3.5 px-6 hover:bg-gold-light transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50">
                                    <MagnifyingGlassIcon className="w-4 h-4" />
                                    {isLoading ? 'Buscando...' : 'Buscar'}
                                </button>
                            </div>
                        )}

                        {/* Panel 3: Cédula */}
                        {activeTab === 'cedula' && (
                            <div className="flex flex-col md:flex-row gap-8 items-end">
                                <div className="flex flex-col gap-2 w-full md:w-2/5 relative group">
                                    <label className="text-[10px] uppercase tracking-widest font-semibold text-medium group-focus-within:text-gold transition-colors">Cédula de Identidad o RNC</label>
                                    <input 
                                        className="w-full bg-transparent border-b border-medium/30 pb-2 text-dark placeholder-medium/50 outline-none focus:border-gold transition-all" 
                                        type="text" 
                                        placeholder="Ej: 001-1234567-8 o RNC" 
                                        value={cedula}
                                        onChange={(e) => setCedula(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col gap-2 w-full md:w-2/5 relative group">
                                    <label className="text-[10px] uppercase tracking-widest font-semibold text-medium group-focus-within:text-gold transition-colors">Rol en el Proceso</label>
                                    <select 
                                        className="w-full bg-transparent border-b border-medium/30 pb-2 text-dark outline-none focus:border-gold transition-all cursor-pointer"
                                        value={rol}
                                        onChange={(e) => setRol(e.target.value)}
                                    >
                                        <option value="">Cualquier Rol</option>
                                        <option value="demandante">Demandante</option>
                                        <option value="demandado">Demandado</option>
                                        <option value="tercero">Tercero / Interesado</option>
                                    </select>
                                </div>
                                <button type="submit" disabled={isLoading} className="w-full md:w-1/5 bg-gold text-white uppercase tracking-widest text-xs font-semibold py-3.5 px-6 hover:bg-gold-light transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50">
                                    <MagnifyingGlassIcon className="w-4 h-4" />
                                    {isLoading ? 'Buscando...' : 'Consultar'}
                                </button>
                            </div>
                        )}
                        
                        {/* Area de Resultados y Mensajes */}
                        <div className="mt-10">
                            {isLoading && (
                                <div className="flex items-center justify-center py-10 text-gold animate-pulse">
                                    <div className="w-6 h-6 border-2 border-gold border-t-transparent rounded-full animate-spin"></div>
                                    <span className="ml-3 font-medium uppercase tracking-widest text-sm">Consultando Poder Judicial...</span>
                                </div>
                            )}

                            {error && (
                                <div className="flex items-start gap-4 p-5 bg-red-50 border border-red-200 text-red-800 rounded-sm">
                                    <ExclamationTriangleIcon className="w-6 h-6 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Error de Consulta</h4>
                                        <p className="text-sm font-light leading-relaxed">{error}</p>
                                    </div>
                                </div>
                            )}

                            {results && results.length === 0 && !isLoading && !error && (
                                <div className="flex flex-col items-center justify-center py-12 text-gray-500 text-center border border-dashed border-medium/30 rounded-sm">
                                    <DocumentTextIcon className="w-12 h-12 mb-4 text-medium/50" />
                                    <h4 className="text-lg font-medium text-dark mb-2">No se encontraron expedientes</h4>
                                    <p className="text-sm font-light max-w-md">No hemos encontrado ningún caso asociado a la información proporcionada. Verifique los datos e intente nuevamente.</p>
                                </div>
                            )}

                            {results && results.length > 0 && !isLoading && !error && (
                                <div className="flex flex-col gap-6">
                                    <div className="flex items-center justify-between border-b border-medium/20 pb-4">
                                        <h3 className="text-xl font-medium text-dark">Resultados Encontrados ({results.length})</h3>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        {results.map((caso, index) => (
                                            <div key={index} className="flex flex-col sm:flex-row justify-between gap-4 p-6 border border-medium/20 rounded-sm hover:border-gold transition-colors duration-300">
                                                <div className="flex flex-col gap-2">
                                                    <div className="flex items-center gap-3">
                                                        <AcademicCapIcon className="w-5 h-5 text-gold" />
                                                        <span className="font-semibold text-dark">{caso.expediente || caso.id || "Expediente Desconocido"}</span>
                                                        <span className="px-2 py-1 bg-gray-100 text-[10px] uppercase tracking-widest font-semibold text-gray-600 rounded-sm">
                                                            {caso.estado || "Activo"}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm text-gray-500 mt-2 font-light">
                                                        {caso.descripcion || caso.tribunal || "Detalles procesales del expediente judicial."}
                                                    </p>
                                                </div>
                                                <div className="flex items-center sm:items-start sm:justify-end">
                                                    <button className="text-gold text-sm font-semibold uppercase tracking-widest hover:text-dark transition-colors duration-300">
                                                        Ver Detalle
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        
                        {/* Disclaimer */}
                        <div className="mt-8 flex items-start gap-3 bg-gray-50 p-4 border border-medium/20 text-xs text-gray-500 leading-relaxed rounded-sm">
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