import Topbar from '../../components/Topbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata = { title: 'Politique de confidentialité — Patrimonium' };

export default function ConfidPage() {
  const s = {fontSize:'13.5px',fontWeight:300,color:'#6A6560',lineHeight:1.85,marginBottom:9};
  const h = {fontFamily:"'Cormorant Garamond',serif",fontSize:21,fontWeight:400,color:'#1C1C1C',margin:'32px 0 9px'};
  return (
    <>
      <Topbar/>
      <main>
        <div style={{maxWidth:760,margin:'0 auto',padding:'136px 52px 68px'}}>
          <Link href="/" style={{fontSize:9.5,letterSpacing:'.18em',textTransform:'uppercase',color:'#C4B49A',marginBottom:18,display:'block',textDecoration:'none'}}>← Accueil / Confidentialité</Link>
          <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(26px,3.5vw,44px)',fontWeight:300,color:'#1C1C1C',marginTop:24,marginBottom:32}}>Politique de confidentialité</h1>
          <h2 style={h}>Données collectées</h2>
          <p style={s}>Profil patrimonial, montant indicatif, prénom, email, téléphone (optionnel). Utilisées uniquement pour la prise de contact.</p>
          <h2 style={h}>Vos droits (RGPD)</h2>
          <p style={s}>Accès, rectification, effacement, limitation, opposition via le formulaire du site.</p>
          <h2 style={h}>Transmission</h2>
          <p style={s}>Données transmises via Formspree (RGPD-compliant). Jamais revendues ni cédées à des tiers.</p>
          <h2 style={h}>Cookies</h2>
          <p style={s}>Aucun cookie publicitaire ou de traçage tiers. Cookies techniques uniquement.</p>
        </div>
      </main>
      <Footer/>
    </>
  );
}
