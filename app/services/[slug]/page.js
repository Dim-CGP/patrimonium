import { SERVICES } from '../../../lib/data';
import Topbar from '../../../components/Topbar';
import Footer from '../../../components/Footer';
import Funnel from '../../../components/Funnel';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return SERVICES.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = SERVICES.find(s => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} — Patrimonium`,
    description: service.desc,
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = SERVICES.find(s => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <Topbar/>
      <main>
        <div style={{padding:'136px 52px 72px',background:'#F6F4EF',borderBottom:'1px solid #E6E1D8',position:'relative',overflow:'hidden'}}>
          <div style={{position:'absolute',top:0,right:0,width:'30%',height:'100%',background:'linear-gradient(to left,#E6E1D8,transparent)',pointerEvents:'none'}}/>
          <div style={{maxWidth:700,position:'relative',zIndex:1}}>
            <div style={{fontSize:9.5,letterSpacing:'.18em',textTransform:'uppercase',color:'#C4B49A',marginBottom:18}}>
              <Link href="/" style={{textDecoration:'none',color:'#C4B49A'}}>← Accueil</Link> / {service.title}
            </div>
            <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(32px,4.5vw,56px)',fontWeight:300,color:'#1C1C1C',lineHeight:1.1,marginBottom:16}}>{service.title}</h1>
            <p style={{fontSize:14.5,fontWeight:300,color:'#6A6560',lineHeight:1.85}}>{service.subtitle}</p>
          </div>
        </div>
        <section style={{padding:'72px 52px'}}>
          <div style={{maxWidth:1240,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:60,alignItems:'start'}}>
            <div>
              <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:29,fontWeight:300,color:'#1C1C1C',marginBottom:13,lineHeight:1.25}}>Notre approche</h2>
              <p style={{fontSize:13.5,fontWeight:300,color:'#6A6560',lineHeight:1.9,marginBottom:13}}>{service.desc}</p>
              <div style={{background:'#F6F4EF',border:'1px solid #E6E1D8',borderLeft:'3px solid #8E7355',padding:'18px 22px',margin:'18px 0'}}>
                <p style={{fontSize:12.5,fontWeight:300,color:'#6A6560',lineHeight:1.75,margin:0}}><strong style={{color:'#1C1C1C',fontWeight:500}}>Notre engagement :</strong> Nous commençons par comprendre votre situation avant toute recommandation. Réponse sous 24h.</p>
              </div>
            </div>
            <div>
              <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:22,fontWeight:300,color:'#1C1C1C',marginBottom:20}}>Votre analyse patrimoniale</h2>
              <div style={{background:'#1C1C1C',padding:32}}>
                <Funnel/>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
