import { LegalPageBase } from '../components/LegalLayout';
import privacidadData from '../data/privacidad.json';
import avisoLegalData from '../data/avisoLegal.json';
import terminosUsoData from '../data/terminosUso.json';

export const PoliticaPrivacidad = () => <LegalPageBase data={privacidadData} />;
export const AvisoLegal = () => <LegalPageBase data={avisoLegalData} />;
export const TerminosUso = () => <LegalPageBase data={terminosUsoData} />;
