import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import officeBanner from '../assets/office-banner.jpg';

export const LegalLayout = ({ title, children }) => (
    <div className="bg-light min-h-screen">
        <section className="bg-dark pt-40 pb-24 px-5 md:px-10 relative overflow-hidden">
            <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-10 grayscale"
                style={{ backgroundImage: `url(${officeBanner})` }}
            ></div>
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

export const LegalSection = ({ section }) => (
    <div className="bg-white p-8 md:p-12 border-l-4 border-gold shadow-sm">
        <h3 className="text-dark font-serif text-2xl mb-6">{section.title}</h3>
        {section.text && <p dangerouslySetInnerHTML={{ __html: section.text }} />}
        {section.items && (
            <ul className="list-disc pl-6 mt-4 space-y-3">
                {section.items.map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
            </ul>
        )}
        {section.extraText && (
            <>
                <br />
                <p dangerouslySetInnerHTML={{ __html: section.extraText }} />
            </>
        )}
        {section.footer && (
            <p className="mt-6" dangerouslySetInnerHTML={{ __html: section.footer }} />
        )}
    </div>
);

export const LegalPageBase = ({ data }) => {
    if (!data) return null;

    return (
        <LegalLayout title={data.title}>
            <div className="space-y-10">
                <p className="text-lg text-dark font-normal italic font-serif">
                    {data.intro}
                </p>
                {data.sections.map((section) => (
                    <LegalSection key={section.id} section={section} />
                ))}
            </div>
        </LegalLayout>
    );
};
