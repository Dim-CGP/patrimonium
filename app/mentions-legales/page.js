import Topbar from '../../components/Topbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata = { title: 'Mentions légales — Patrimonium' };

export default function MentionsPage() {
  const s = {fontSize:'13.5px',fontWeight:300,color:'#6A6560',lineHeight:1.85,marginBottom:9};
  const h = {fontFamily:"'Cormorant Garamond',serif",fontSize:21,fontWeight:400,color:'#1C1C1C',margin:'32px 0 9px'};
  return (
    <>
      <Topbar/>
      <main>
        <div style={{maxWidth:760,margin:'0 auto',padding:'136px 52px 68px'}}>
          <Link href="/" style={{fontSize:9.5,letterSpacing:'.18em',textTransform:'uppercase',color:'#C4B49A',marginBottom:18,display:'block',textDecoration:'none'}}>← Accueil / Mentions légales</Link>
          <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(26px,3.5vw,44px)',fontWeight:300,color:'#1C1C1C',marginTop:24,marginBottom:32}}>Mentions légales</h1>
          <h2 style={h}>Éditeur du site</h2>
          <p style={s}><strong style={{color:'#1C1C1C'}}>Gerber Dimitri</strong> — Auto-entrepreneur<br/>7 rue de la Forêt — 67190 Mutzig<br/>SIRET : 841 896 152 00011<br/>N° ORIAS : 23001099<br/>Activité : Conseil en gestion de patrimoine<br/>Contact : via le formulaire du site uniquement</p>
          <h2 style={h}>Statut professionnel</h2>
          <p style={s}>Enregistré à l'ORIAS sous le numéro 23001099 (www.orias.fr), agréé AMF. Soumis au devoir de conseil et à l'obligation de transparence.</p>
          <h2 style={h}>Assurance responsabilité civile professionnelle</h2>
          <p style={s}>AON — Police n° RD00068076S. Couverture : activité de conseil en gestion de patrimoine, France entière.</p>
          <h2 style={h}>Limitation de responsabilité</h2>
          <p style={s}>Les informations de ce site ont un caractère général et ne constituent pas des conseils personnalisés en investissement. Tout investissement comporte des risques de perte en capital.</p>
        </div>
      </main>
      <Footer/>
    </>
  );
}
