import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import officeBanner from '../assets/office-banner.jpg';

const LegalLayout = ({ title, children }) => (
    <div className="bg-light min-h-screen">
        <section className="bg-dark pt-40 pb-24 px-5 md:px-10 relative overflow-hidden">
            {/* Background Image */}
            <div 
                className="absolute inset-0 z-0 bg-cover bg-center opacity-10 grayscale" 
                style={{ backgroundImage: `url(${officeBanner})` }}
            ></div>
            
            {/* Gradient Overlays */}
            <div className="absolute inset-0 z-1 bg-linear-to-b from-dark/95 via-dark/80 to-dark"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                <Link to="/" className="inline-flex items-center gap-2 text-gold-light hover:text-light transition-all duration-300 text-xs uppercase tracking-widest font-semibold mb-12 group">
                    <ArrowLeftIcon className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Volver al inicio
                </Link>
                <h1 className="text-4xl md:text-6xl text-light font-medium leading-tight">
                    {title}
                </h1>
            </div>
        </section>
        
        <section className="py-24 px-5 md:px-10">
            <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <span className="w-12 h-px bg-gold/30"></span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">Documento Oficial</span>
                </div>
                
                <div className="prose prose-gray lg:prose-xl font-light text-gray-600 leading-relaxed space-y-12">
                    {children}
                </div>
                
                <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col items-center">
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-8 text-center">Última actualización: Mayo 2026</p>
                    <Link to="/" className="text-gold hover:text-dark transition-colors uppercase text-xs tracking-[0.2em] font-bold border-b border-gold hover:border-dark pb-1">
                        Regresar a la página principal
                    </Link>
                </div>
            </div>
        </section>
    </div>
);

export const PoliticaPrivacidad = () => (
    <LegalLayout title="Política de Privacidad">
        <div className="space-y-10">
            <p className="text-lg text-dark font-normal italic font-serif">En Nimbra Law, valoramos su privacidad y estamos comprometidos con la protección de sus datos personales conforme a las leyes de la República Dominicana.</p>
            
            <div className="bg-white p-8 md:p-12 border-l-4 border-gold shadow-sm">
                <h3 className="text-dark font-serif text-2xl mb-6">1. Recopilación de Información</h3>
                <p>Recopilamos información que usted nos proporciona directamente al completar formularios en nuestro sitio web, suscribirse a nuestras publicaciones o utilizar nuestro portal de consulta judicial. Esto incluye nombres, correos electrónicos y detalles de contacto.</p>
            </div>
            
            <div className="bg-white p-8 md:p-12 border-l-4 border-gold shadow-sm">
                <h3 className="text-dark font-serif text-2xl mb-6">2. Uso de los Datos</h3>
                <p>Sus datos se utilizan exclusivamente para:</p>
                <ul className="list-disc pl-6 mt-4 space-y-3">
                    <li>Proporcionar y gestionar nuestros servicios legales.</li>
                    <li>Responder a sus consultas y solicitudes de contacto.</li>
                    <li>Mejorar la experiencia de usuario y seguridad en nuestra plataforma digital.</li>
                    <li>Cumplir con obligaciones legales aplicables.</li>
                </ul>
            </div>
            
            <div className="bg-white p-8 md:p-12 border-l-4 border-gold shadow-sm">
                <h3 className="text-dark font-serif text-2xl mb-6">3. Seguridad de la Información</h3>
                <p>Implementamos medidas de seguridad técnicas y organizativas avanzadas, incluyendo cifrado SSL y firewalls de última generación, para proteger su información contra accesos no autorizados, pérdida o alteración.</p>
            </div>
        </div>
    </LegalLayout>
);

export const AvisoLegal = () => (
    <LegalLayout title="Aviso Legal">
        <div className="space-y-10">
            <p className="text-lg text-dark font-normal italic font-serif">Este sitio web es propiedad de Nimbra Law, firma con domicilio social en Santo Domingo, República Dominicana. El acceso a este portal implica la aceptación de las siguientes condiciones.</p>
            
            <div className="bg-white p-8 md:p-12 border-l-4 border-gold shadow-sm">
                <h3 className="text-dark font-serif text-2xl mb-6">Propiedad Intelectual</h3>
                <p>Todos los contenidos, diseños, logotipos, códigos fuente y análisis publicados en este sitio son propiedad exclusiva de Nimbra Law o cuentan con la licencia correspondiente. Queda estrictamente prohibida su reproducción, distribución o transformación sin autorización expresa y por escrito.</p>
            </div>
            
            <div className="bg-white p-8 md:p-12 border-l-4 border-gold shadow-sm">
                <h3 className="text-dark font-serif text-2xl mb-6">Exención de Responsabilidad</h3>
                <p>La información contenida en este sitio web tiene fines informativos generales y educativos. No constituye, bajo ninguna circunstancia, asesoría legal profesional ni establece una relación abogado-cliente. Nimbra Law no se hace responsable de las decisiones tomadas basadas en el contenido de este portal sin previa consulta personalizada.</p>
            </div>
        </div>
    </LegalLayout>
);

export const TerminosUso = () => (
    <LegalLayout title="Términos de Uso">
        <div className="space-y-10">
            <p className="text-lg text-dark font-normal italic font-serif">Al acceder y utilizar este portal, usted acepta cumplir con los siguientes términos y condiciones de uso.</p>
            
            <div className="bg-white p-8 md:p-12 border-l-4 border-gold shadow-sm">
                <h3 className="text-dark font-serif text-2xl mb-6">Uso del Portal y Servicios</h3>
                <p>El usuario se compromete a hacer un uso lícito y profesional de las herramientas de consulta judicial y servicios de contacto. Queda prohibido el uso de técnicas de automatización (scraping, bots) para la extracción de datos sin consentimiento previo.</p>
            </div>
            
            <div className="bg-white p-8 md:p-12 border-l-4 border-gold shadow-sm">
                <h3 className="text-dark font-serif text-2xl mb-6">Limitación de Garantías</h3>
                <p>Si bien nos esforzamos por mantener la información actualizada, Nimbra Law no garantiza la infalibilidad o disponibilidad técnica ininterrumpida de los servicios de consulta externos sincronizados en nuestro sitio.</p>
            </div>
        </div>
    </LegalLayout>
);
