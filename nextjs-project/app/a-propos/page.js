import Topbar from '../../components/Topbar';
import Footer from '../../components/Footer';
import Funnel from '../../components/Funnel';
import Link from 'next/link';

export const metadata = {
  title: 'À propos — Patrimonium',
  description: 'Cabinet de conseil en gestion de patrimoine indépendant. Gerber Dimitri, ORIAS N° 23001099.',
};

export default function AProposPage() {
  return (
    <>
      <Topbar current="a-propos"/>
      <main>
        <div style={{padding:'136px 52px 72px',background:'#F6F4EF',borderBottom:'1px solid #E6E1D8'}}>
          <div style={{maxWidth:700}}>
            <Link href="/" style={{fontSize:9.5,letterSpacing:'.18em',textTransform:'uppercase',color:'#C4B49A',marginBottom:18,display:'block',textDecoration:'none'}}>← Accueil / À propos</Link>
            <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(32px,4.5vw,56px)',fontWeight:300,color:'#1C1C1C',lineHeight:1.1,marginBottom:16}}>Au service de <em style={{fontStyle:'italic',color:'#8E7355'}}>votre patrimoine.</em></h1>
            <p style={{fontSize:14.5,fontWeight:300,color:'#6A6560',lineHeight:1.85}}>Notre cabinet accompagne particuliers, chefs d'entreprise et familles dans la construction, la valorisation et la transmission de leur patrimoine, partout en France.</p>
          </div>
        </div>
        <section style={{padding:'72px 52px'}}>
          <div style={{maxWidth:1240,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:64,alignItems:'start'}}>
            <div>
              <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:29,fontWeight:300,color:'#1C1C1C',marginBottom:13}}>Notre <em style={{fontStyle:'italic',color:'#8E7355'}}>engagement</em></h2>
              <p style={{fontSize:13.5,fontWeight:300,color:'#6A6560',lineHeight:1.9,marginBottom:13}}>Nous avons fait le choix de l'indépendance totale. Un conseil patrimonial de qualité ne peut pas coexister avec des conflits d'intérêt liés à la distribution de produits financiers.</p>
              <p style={{fontSize:13.5,fontWeight:300,color:'#6A6560',lineHeight:1.9,marginBottom:13}}>Notre objectif est simple : vous apporter la stratégie la plus adaptée à votre situation, sans autre agenda que votre intérêt.</p>
              <div style={{background:'#F6F4EF',border:'1px solid #E6E1D8',borderLeft:'3px solid #8E7355',padding:'18px 22px',margin:'18px 0'}}>
                <p style={{fontSize:12.5,fontWeight:300,color:'#6A6560',lineHeight:1.75,margin:0}}><strong style={{color:'#1C1C1C',fontWeight:500}}>Statut réglementaire :</strong> Enregistrés à l'ORIAS sous le n° 23001099, agréés AMF. RCP AON, police n° RD00068076S.</p>
              </div>
            </div>
            <div style={{background:'#1C1C1C',padding:32}}>
              <Funnel/>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
