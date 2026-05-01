import { useState } from 'react';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon, PaperAirplaneIcon, CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';

export default function ContactoSection() {
    // Estado para manejar el flujo: "" (inactivo), "loading", "success", "error"
    const [status, setStatus] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus("loading");

        const formData = new FormData(event.target);
        formData.append("access_key", "ce5a5998-1cb6-40f5-a399-42fe8336adbb");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus("success");
                event.target.reset(); // Limpia el formulario
                // Ocultar mensaje de éxito después de 8 segundos
                setTimeout(() => setStatus(""), 8000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            setStatus("error");
        }
    };

    return (
        <section id="contacto" className="py-24 md:py-32 relative overflow-hidden bg-light">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-medium/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gold/5 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">

                {/* Header text before the box */}
                <div className="text-center mb-16 flex flex-col items-center">
                    <p className="uppercase text-sm tracking-widest text-gold flex items-center gap-4 font-semibold mb-4">
                        <span className="w-12 h-px bg-gold"></span>
                        Contacto
                        <span className="w-12 h-px bg-gold"></span>
                    </p>
                    <h2 className="text-4xl md:text-5xl leading-tight text-dark font-heading">
                        Hablemos de su <span className="text-gold italic">caso</span>
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row shadow-2xl shadow-black/50 rounded-2xl overflow-hidden ring-1 ring-white/10">

                    {/* Contact Info (Left) */}
                    <div className="w-full lg:w-2/5 bg-[#0a0a0a] text-light p-10 lg:p-16 flex flex-col gap-12 relative overflow-hidden">
                        {/* Decorative Background Elements */}
                        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-gold/20 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="absolute top-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

                        <div className="flex flex-col gap-4 relative z-10">
                            <h3 className="text-3xl leading-tight font-heading">
                                Información de <span className="text-gold italic">Contacto</span>
                            </h3>
                            <p className="text-medium font-light text-base leading-relaxed">
                                La primera consulta es gratuita. Cuéntenos su situación y nuestros abogados le orientarán sobre el mejor camino a seguir.
                            </p>
                        </div>

                        <div className="flex flex-col gap-8 relative z-10 mt-auto">
                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:border-gold transition-all duration-500 shadow-lg">
                                    <MapPinIcon className="w-6 h-6 text-gold group-hover:text-white transition-colors duration-500" />
                                </div>
                                <div className="flex flex-col gap-1 pt-1.5">
                                    <span className="font-semibold text-white tracking-wide text-sm uppercase">Oficina Principal</span>
                                    <span className="text-medium font-light leading-relaxed">Av. Abraham Lincoln 1099,<br />Torre Alianzas Piso 14,<br />Santo Domingo, D.N.</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:border-gold transition-all duration-500 shadow-lg">
                                    <PhoneIcon className="w-6 h-6 text-gold group-hover:text-white transition-colors duration-500" />
                                </div>
                                <div className="flex flex-col gap-1 pt-1.5">
                                    <span className="font-semibold text-white tracking-wide text-sm uppercase">Teléfono</span>
                                    <span className="text-medium font-light leading-relaxed">+1 (809) 555-0100<br />+1 (809) 555-0101</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:border-gold transition-all duration-500 shadow-lg">
                                    <EnvelopeIcon className="w-6 h-6 text-gold group-hover:text-white transition-colors duration-500" />
                                </div>
                                <div className="flex flex-col gap-1 pt-1.5">
                                    <span className="font-semibold text-white tracking-wide text-sm uppercase">Correo Electrónico</span>
                                    <span className="text-medium font-light leading-relaxed">info@peraltaasociados.do<br />consultas@peraltaasociados.do</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:border-gold transition-all duration-500 shadow-lg">
                                    <ClockIcon className="w-6 h-6 text-gold group-hover:text-white transition-colors duration-500" />
                                </div>
                                <div className="flex flex-col gap-1 pt-1.5">
                                    <span className="font-semibold text-white tracking-wide text-sm uppercase">Horario</span>
                                    <span className="text-medium font-light leading-relaxed">Lun–Vie: 8:00 AM – 6:00 PM<br />Sábados: 9:00 AM – 1:00 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form (Right) */}
                    <div className="w-full lg:w-3/5 p-10 lg:p-16 flex flex-col gap-10 bg-[#111111]">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-2xl font-heading text-white">Envíenos un mensaje</h3>
                            <p className="text-medium text-sm">Complete el formulario a continuación y nos pondremos en contacto con usted a la brevedad posible.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="flex flex-col gap-2 w-full md:w-1/2 relative group">
                                    <label className="text-[10px] uppercase tracking-widest font-semibold text-medium group-focus-within:text-gold transition-colors">Nombre Completo</label>
                                    <input name="name" className="w-full bg-transparent border-b border-medium/30 pb-2 text-white placeholder-medium/30 outline-none focus:border-gold transition-all" type="text" placeholder="Ej. Juan Pérez" required />
                                </div>
                                <div className="flex flex-col gap-2 w-full md:w-1/2 relative group">
                                    <label className="text-[10px] uppercase tracking-widest font-semibold text-medium group-focus-within:text-gold transition-colors">Teléfono</label>
                                    <input name="phone" className="w-full bg-transparent border-b border-medium/30 pb-2 text-white placeholder-medium/30 outline-none focus:border-gold transition-all" type="tel" placeholder="+1 (809) 000-0000" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 w-full relative group">
                                <label className="text-[10px] uppercase tracking-widest font-semibold text-medium group-focus-within:text-gold transition-colors">Correo Electrónico</label>
                                <input name="email" className="w-full bg-transparent border-b border-medium/30 pb-2 text-white placeholder-medium/30 outline-none focus:border-gold transition-all" type="email" placeholder="correo@ejemplo.com" required />
                            </div>

                            <div className="flex flex-col gap-2 w-full relative group">
                                <label className="text-[10px] uppercase tracking-widest font-semibold text-medium group-focus-within:text-gold transition-colors">Área Legal de Interés</label>
                                <select name="area" className="w-full bg-transparent border-b border-medium/30 pb-2 text-white outline-none focus:border-gold transition-all cursor-pointer [&>option]:text-dark">
                                    <option value="" className="text-medium">Seleccione un área...</option>
                                    <option value="Derecho Corporativo">Derecho Corporativo & Mercantil</option>
                                    <option value="Derecho Penal">Derecho Penal & Defensa Criminal</option>
                                    <option value="Derecho Laboral">Derecho Laboral</option>
                                    <option value="Derecho Civil">Derecho Civil & Familia</option>
                                    <option value="Derecho Administrativo">Derecho Administrativo</option>
                                    <option value="Derecho Constitucional">Derecho Constitucional</option>
                                    <option value="Otro">Otro</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-2 w-full relative group">
                                <label className="text-[10px] uppercase tracking-widest font-semibold text-medium group-focus-within:text-gold transition-colors">Describa su Situación</label>
                                <textarea name="message" className="w-full bg-transparent border-b border-medium/30 pb-2 text-white placeholder-medium/30 outline-none focus:border-gold transition-all resize-none" rows="3" placeholder="Describa brevemente su caso o consulta..." required></textarea>
                            </div>

                            <div className="pt-6 flex flex-col gap-4">
                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="bg-gold text-white uppercase tracking-widest text-xs font-semibold py-4 px-10 hover:bg-gold-light transition-all duration-300 flex items-center justify-center gap-3 w-full md:w-auto self-start rounded-none group disabled:opacity-70 disabled:hover:bg-gold"
                                >
                                    {status === "loading" ? (
                                        <>
                                            Enviando...
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        </>
                                    ) : (
                                        <>
                                            Enviar Solicitud
                                            <PaperAirplaneIcon className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                                        </>
                                    )}
                                </button>

                                {status === "success" && (
                                    <div className="text-sm font-medium text-green-700 bg-green-50/50 px-5 py-4 border-l-4 border-green-500 flex items-start gap-3 mt-4">
                                        <CheckCircleIcon className="w-6 h-6 text-green-600 shrink-0" />
                                        <p>¡Gracias! Hemos recibido su mensaje. Nuestro equipo legal se pondrá en contacto con usted en breve.</p>
                                    </div>
                                )}

                                {status === "error" && (
                                    <div className="text-sm font-medium text-red-700 bg-red-50/50 px-5 py-4 border-l-4 border-red-500 flex items-start gap-3 mt-4">
                                        <ExclamationCircleIcon className="w-6 h-6 text-red-600 shrink-0" />
                                        <p>Lo sentimos, hubo un problema al enviar su mensaje. Por favor, intente nuevamente o llámenos directamente.</p>
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}