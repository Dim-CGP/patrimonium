import { ARTICLES } from '../../lib/data';
import Topbar from '../../components/Topbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Blog & Ressources — Patrimonium',
  description: 'Articles et guides sur la gestion de patrimoine, SCPI, fiscalité, retraite et transmission.',
};

export default function RessourcesPage() {
  return (
    <>
      <Topbar current="ressources"/>
      <style>{`
        @media(max-width:768px){
          .res-hero{padding:100px 20px 48px !important}
          .res-grid{grid-template-columns:1fr !important}
          .res-feat{grid-template-columns:1fr !important;gap:20px !important}
          .res-feat-wrap{grid-column:auto !important;padding:28px 20px !important}
          .res-section{padding:48px 20px !important}
        }
      `}</style>
      <main>
        <div className="res-hero" style={{padding:'136px 52px 68px',background:'#F6F4EF',borderBottom:'1px solid #E6E1D8'}}>
          <div style={{maxWidth:700}}>
            <Link href="/" style={{fontSize:9.5,letterSpacing:'.18em',textTransform:'uppercase',color:'#C4B49A',marginBottom:18,display:'block',textDecoration:'none'}}>← Accueil / Ressources</Link>
            <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(32px,4.5vw,56px)',fontWeight:300,color:'#1C1C1C',lineHeight:1.1,marginBottom:16}}>
              Ressources & <em style={{fontStyle:'italic',color:'#8E7355'}}>guides</em> patrimoniaux
            </h1>
            <p style={{fontSize:14.5,fontWeight:300,color:'#6A6560',lineHeight:1.85}}>Des articles pour vous aider à mieux comprendre les enjeux patrimoniaux et prendre des décisions éclairées.</p>
          </div>
        </div>
        <section className="res-section" style={{padding:'72px 52px'}}>
          <div style={{maxWidth:1240,margin:'0 auto'}}>
            <div className="res-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:1,background:'#E6E1D8'}}>
              {ARTICLES.map((a,i)=>(
                <Link key={a.id} href={`/article/${a.slug}`}
                  className={i===0?'res-feat-wrap':''}
                  style={{
                    background:'#FAFAF7',
                    padding: i===0 ? '44px 36px' : '30px 26px',
                    textDecoration:'none',
                    display: i===0 ? 'grid' : 'flex',
                    flexDirection: i===0 ? undefined : 'column',
                    gridTemplateColumns: i===0 ? '1fr 1fr' : undefined,
                    gap: i===0 ? 44 : undefined,
                    alignItems: i===0 ? 'center' : undefined,
                    gridColumn: i===0 ? 'span 3' : 'auto',
                  }}>
                  <div>
                    <div style={{fontSize:8.5,letterSpacing:'.22em',textTransform:'uppercase',color:'#8E7355',marginBottom:12}}>{a.tag}</div>
                    <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize: i===0 ? 28 : 19,fontWeight:400,color:'#1C1C1C',lineHeight:1.35,marginBottom:10}}>{a.title}</h2>
                    <p style={{fontSize:12,fontWeight:300,color:'#6A6560',lineHeight:1.7,marginBottom:14}}>{a.excerpt}</p>
                    <div style={{fontSize:9,letterSpacing:'.12em',color:'#7A6040',textTransform:'uppercase'}}>{a.date} · {a.readTime} de lecture</div>
                    <span style={{fontSize:9.5,letterSpacing:'.14em',textTransform:'uppercase',color:'#8E7355',marginTop:11,display:'inline-block'}}>Lire l'article →</span>
                  </div>
                  {i===0 && (
                    <div style={{background:'#F6F4EF',border:'1px solid #E6E1D8',padding:'26px 22px'}}>
                      <div style={{fontSize:9.5,letterSpacing:'.18em',textTransform:'uppercase',color:'#8E7355',marginBottom:10}}>À retenir</div>
                      <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:9}}>
                        {['Frais cachés, allocations obsolètes, clauses bénéficiaires jamais mises à jour','Ce que la loi de finances 2026 change pour votre contrat','La vraie question : performance nette, pas les frais seuls','Assurance-vie comme outil de transmission — souvent sous-utilisé'].map(p=>(
                          <li key={p} style={{fontSize:12,fontWeight:300,color:'#6A6560',display:'flex',gap:9}}>
                            <span style={{color:'#C4B49A',flexShrink:0}}>—</span>{p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
