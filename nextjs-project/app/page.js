import { ARTICLES, SERVICES } from '../lib/data';
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import Funnel from '../components/Funnel';
import Link from 'next/link';

export const metadata = {
  title: 'Patrimonium — Cabinet de conseil en gestion de patrimoine · France entière',
  description: 'Cabinet de conseil en gestion de patrimoine indépendant. Spécialiste SCPI à crédit, optimisation fiscale, préparation retraite, transmission. Analyse patrimoniale gratuite. Réponse sous 24h.',
};

export default function HomePage() {
  const featuredArticle = ARTICLES[0];
  const recentArticles = ARTICLES.slice(1, 4);

  return (
    <>
      <Topbar current="home"/>
      <main>
        {/* HERO */}
        <section style={{minHeight:'100vh',display:'flex',alignItems:'center',padding:'130px 52px 80px',position:'relative',overflow:'hidden',background:'linear-gradient(110deg, #FAFAF7 0%, #FAFAF7 45%, #EAE4DA 100%)'}}>
          <div style={{position:'absolute',bottom:80,left:52,width:90,height:1,background:'#C4B49A',transformOrigin:'left',animation:'growX 1.4s 1.2s cubic-bezier(.22,1,.36,1) both'}}/>
          <div style={{maxWidth:1240,margin:'0 auto',width:'100%',display:'grid',gridTemplateColumns:'1fr 1fr',gap:72,alignItems:'center',position:'relative',zIndex:1}}>
            <div>
              <div style={{fontSize:9.5,fontWeight:400,letterSpacing:'.28em',textTransform:'uppercase',color:'#8E7355',marginBottom:20,display:'flex',alignItems:'center',gap:10}}>
                <span style={{width:28,height:1,background:'#C4B49A',display:'inline-block',flexShrink:0}}/>
                Cabinet de conseil en gestion de patrimoine · France entière
              </div>
              <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(40px,5vw,66px)',fontWeight:300,lineHeight:1.1,color:'#1C1C1C',marginBottom:24,letterSpacing:'-.01em'}}>
                Au service de<br/>votre patrimoine.
              </h1>
              <p style={{fontSize:14.5,fontWeight:300,color:'#6A6560',lineHeight:1.85,maxWidth:400,marginBottom:20}}>
                Un accompagnement indépendant, personnalisé et disponible partout en France.
              </p>
              <Link href="/a-propos" style={{display:'inline-flex',padding:'9px 20px',fontFamily:"'DM Sans',sans-serif",fontSize:10,fontWeight:400,letterSpacing:'.18em',textTransform:'uppercase',border:'1px solid #E6E1D8',color:'#1C1C1C',textDecoration:'none',marginBottom:28}}>
                Notre approche →
              </Link>
            </div>
            <div id="analyse" style={{background:'#1C1C1C',padding:'32px'}}>
              <div style={{marginBottom:20}}>
                <div style={{fontSize:9,letterSpacing:'.22em',textTransform:'uppercase',color:'#8E7355',marginBottom:8}}>Analyse patrimoniale gratuite</div>
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:20,fontWeight:300,color:'#F6F4EF',lineHeight:1.3}}>Votre dossier, <em style={{fontStyle:'italic',color:'#8E7355'}}>directement</em> entre les bonnes mains.</div>
              </div>
              <Funnel/>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section style={{padding:'96px 52px',background:'#F6F4EF'}}>
          <div style={{maxWidth:1240,margin:'0 auto'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:56,flexWrap:'wrap',gap:20}}>
              <div>
                <div style={{fontSize:9.5,letterSpacing:'.28em',textTransform:'uppercase',color:'#8E7355',marginBottom:14,display:'flex',alignItems:'center',gap:10}}>
                  <span style={{width:22,height:1,background:'#C4B49A',display:'inline-block'}}/>Nos expertises
                </div>
                <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(30px,3.5vw,50px)',fontWeight:300,color:'#1C1C1C',lineHeight:1.15}}>
                  Un accompagnement <em style={{fontStyle:'italic',color:'#8E7355'}}>complet</em>,<br/>à chaque étape de votre vie.
                </h2>
              </div>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:1,background:'#E6E1D8'}}>
              {SERVICES.map(s=>(
                <Link key={s.slug} href={`/services/${s.slug}`} style={{
                  background:s.star?'#1C1C1C':'#F6F4EF',
                  padding:'36px 32px',textDecoration:'none',display:'block',
                  borderBottom:s.star?'2px solid #8E7355':'none'
                }}>
                  {s.star && <div style={{display:'inline-flex',alignItems:'center',gap:5,padding:'3px 9px',background:'#8E7355',fontSize:8,fontWeight:400,letterSpacing:'.18em',textTransform:'uppercase',color:'#fff',marginBottom:14}}>⬡ Notre spécialité</div>}
                  <div style={{fontSize:10.5,letterSpacing:'.2em',color:s.star?'rgba(196,180,154,.4)':'#C4B49A',marginBottom:20,fontFamily:"'Cormorant Garamond',serif"}}>{s.num}</div>
                  <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:21,fontWeight:400,color:s.star?'#F6F4EF':'#1C1C1C',marginBottom:10,lineHeight:1.25}}>{s.title}</h3>
                  <p style={{fontSize:12.5,fontWeight:300,color:s.star?'rgba(246,244,239,.45)':'#6A6560',lineHeight:1.75}}>{s.subtitle}</p>
                  <span style={{display:'inline-flex',alignItems:'center',gap:6,marginTop:20,fontSize:9.5,letterSpacing:'.18em',textTransform:'uppercase',color:s.star?'#C4B49A':'#8E7355'}}>En savoir plus →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ANALYSE FULL */}
        <section style={{background:'#1C1C1C',padding:'80px 52px'}}>
          <div style={{maxWidth:1240,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:72,alignItems:'center'}}>
            <div>
              <div style={{fontSize:9.5,letterSpacing:'.28em',textTransform:'uppercase',color:'#8E7355',marginBottom:14,display:'flex',alignItems:'center',gap:10}}>
                <span style={{width:22,height:1,background:'#8E7355',display:'inline-block'}}/>Analyse patrimoniale gratuite
              </div>
              <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(30px,3.5vw,50px)',fontWeight:300,color:'#F6F4EF',lineHeight:1.15,marginBottom:16}}>
                Votre dossier, <em style={{fontStyle:'italic',color:'#8E7355'}}>directement</em> entre les bonnes mains.
              </h2>
              <p style={{fontSize:14,fontWeight:300,color:'rgba(246,244,239,.45)',lineHeight:1.8,maxWidth:380,marginBottom:32}}>
                3 questions, moins d'une minute. Nous analysons personnellement chaque dossier et vous répondons sous 24h ouvrées.
              </p>
              {[['◎','Analyse 100% gratuite','Sans engagement, sans frais'],['⊙','Confidentiel','Vos données restent privées'],['✓','Réponse sous 24h','Personnelle, par téléphone ou visio']].map(([ico,t,d])=>(
                <div key={t} style={{display:'flex',alignItems:'flex-start',gap:12,marginBottom:14}}>
                  <div style={{width:28,height:28,borderRadius:'50%',border:'1px solid rgba(196,180,154,.2)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:11,color:'#C4B49A',flexShrink:0}}>{ico}</div>
                  <div><div style={{fontSize:12,fontWeight:500,color:'#F6F4EF',marginBottom:2}}>{t}</div><div style={{fontSize:11,fontWeight:300,color:'rgba(246,244,239,.35)'}}>{d}</div></div>
                </div>
              ))}
            </div>
            <Funnel/>
          </div>
        </section>

        {/* BLOG */}
        <section style={{padding:'96px 52px',background:'#F6F4EF'}}>
          <div style={{maxWidth:1240,margin:'0 auto'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:44,flexWrap:'wrap',gap:20}}>
              <div>
                <div style={{fontSize:9.5,letterSpacing:'.28em',textTransform:'uppercase',color:'#8E7355',marginBottom:14,display:'flex',alignItems:'center',gap:10}}>
                  <span style={{width:22,height:1,background:'#C4B49A',display:'inline-block'}}/>Ressources
                </div>
                <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(30px,3.5vw,50px)',fontWeight:300,color:'#1C1C1C',lineHeight:1.15}}>
                  Articles & <em style={{fontStyle:'italic',color:'#8E7355'}}>guides</em> patrimoniaux
                </h2>
              </div>
              <Link href="/ressources" style={{display:'inline-flex',padding:'9px 20px',fontFamily:"'DM Sans',sans-serif",fontSize:9.5,letterSpacing:'.14em',textTransform:'uppercase',border:'1px solid #E6E1D8',color:'#1C1C1C',textDecoration:'none'}}>Tous les articles →</Link>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:1,background:'#E6E1D8'}}>
              {ARTICLES.slice(0,3).map(a=>(
                <Link key={a.id} href={`/article/${a.slug}`} style={{background:'#FAFAF7',padding:'30px 26px',textDecoration:'none',display:'flex',flexDirection:'column'}}>
                  <div style={{fontSize:8.5,letterSpacing:'.22em',textTransform:'uppercase',color:'#8E7355',marginBottom:12}}>{a.tag}</div>
                  <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:19,fontWeight:400,color:'#1C1C1C',lineHeight:1.35,marginBottom:10}}>{a.title}</h3>
                  <p style={{fontSize:12,fontWeight:300,color:'#6A6560',lineHeight:1.7,marginBottom:14,flex:1}}>{a.excerpt}</p>
                  <div style={{fontSize:9,letterSpacing:'.12em',color:'#C4B49A',textTransform:'uppercase'}}>{a.date} · {a.readTime} de lecture</div>
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
