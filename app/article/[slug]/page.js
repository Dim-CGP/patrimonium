import { ARTICLES } from '../../../lib/data';
import Topbar from '../../../components/Topbar';
import Footer from '../../../components/Footer';
import Funnel from '../../../components/Funnel';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return ARTICLES.map(a => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = ARTICLES.find(a => a.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title} — Patrimonium`,
    description: article.excerpt,
    alternates: {
      canonical: `https://cabinet-patrimonium.fr/article/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://cabinet-patrimonium.fr/article/${article.slug}`,
      type: 'article',
      publishedTime: article.dateISO,
    },
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = ARTICLES.find(a => a.slug === slug);
  if (!article) notFound();

  const others = ARTICLES.filter(a => a.slug !== slug).slice(0, 3);

  return (
    <>
      <Topbar current="ressources"/>
      <main>
        <div style={{padding:'136px 52px 68px',background:'#F6F4EF',borderBottom:'1px solid #E6E1D8',position:'relative',overflow:'hidden'}}>
          <div style={{position:'absolute',top:0,right:0,width:'26%',height:'100%',background:'linear-gradient(to left,#E6E1D8,transparent)',pointerEvents:'none'}}/>
          <div style={{maxWidth:720,position:'relative',zIndex:1}}>
            <div style={{display:'flex',alignItems:'center',gap:6,fontSize:9.5,letterSpacing:'.18em',textTransform:'uppercase',color:'#C4B49A',marginBottom:18}}>
              <Link href="/ressources" style={{textDecoration:'none',color:'#C4B49A'}}>← Ressources</Link>
              <span>/</span>
              <span>{article.tag}</span>
            </div>
            <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(26px,3.5vw,44px)',fontWeight:300,color:'#1C1C1C',lineHeight:1.1,marginBottom:16}}>{article.title}</h1>
            <p style={{fontSize:14.5,fontWeight:300,color:'#6A6560',lineHeight:1.85,maxWidth:580}}>{article.excerpt}</p>
            <div style={{marginTop:18,fontSize:10.5,letterSpacing:'.12em',textTransform:'uppercase',color:'#C4B49A'}}>{article.date} · {article.readTime} de lecture</div>
          </div>
        </div>

        <div style={{maxWidth:720,margin:'0 auto',padding:'68px 52px'}} dangerouslySetInnerHTML={{__html:`
          <style>
            .art-body h2{font-family:'Cormorant Garamond',serif;font-size:25px;font-weight:300;color:#1C1C1C;margin:36px 0 12px;line-height:1.3}
            .art-body h3{font-size:15.5px;font-weight:500;color:#1C1C1C;margin:24px 0 9px}
            .art-body p{font-size:13.5px;font-weight:300;color:#6A6560;line-height:1.9;margin-bottom:14px}
            .art-body ul{list-style:none;display:flex;flex-direction:column;gap:9px;margin-bottom:18px}
            .art-body ul li{font-size:13px;font-weight:300;color:#6A6560;line-height:1.7;display:flex;gap:9px}
            .art-body ul li::before{content:'—';color:#C4B49A;flex-shrink:0}
            .art-box{background:#F6F4EF;border:1px solid #E6E1D8;border-left:3px solid #8E7355;padding:20px 24px;margin:22px 0}
            .art-box p{font-size:12.5px;margin:0;color:#6A6560;line-height:1.75}
            .art-box p strong{color:#1C1C1C;font-weight:500}
          </style>
          <div class="art-body">${article.content}</div>
        `}}/>

        <div style={{padding:'88px 52px',background:'#F6F4EF',borderTop:'1px solid #E6E1D8',borderBottom:'1px solid #E6E1D8'}}>
          <div style={{maxWidth:800,margin:'0 auto',textAlign:'center'}}>
            <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(28px,4vw,50px)',fontWeight:300,color:'#1C1C1C',lineHeight:1.2,marginBottom:14}}>
              Une question sur <em style={{fontStyle:'italic',color:'#8E7355'}}>votre situation</em> ?
            </h2>
            <p style={{fontSize:13.5,fontWeight:300,color:'#6A6560',lineHeight:1.8,maxWidth:400,margin:'0 auto 32px'}}>
              Complétez l'analyse patrimoniale gratuite. Nous vous répondons sous 24h.
            </p>
            <Link href="/#analyse" style={{display:'inline-flex',padding:'13px 28px',background:'#1C1C1C',color:'#F6F4EF',fontFamily:"'DM Sans',sans-serif",fontSize:10.5,letterSpacing:'.18em',textTransform:'uppercase',textDecoration:'none'}}>
              Analyse gratuite
            </Link>
          </div>
        </div>

        {others.length > 0 && (
          <section style={{padding:'72px 52px',background:'#FAFAF7'}}>
            <div style={{maxWidth:1240,margin:'0 auto'}}>
              <div style={{fontSize:9.5,letterSpacing:'.28em',textTransform:'uppercase',color:'#8E7355',marginBottom:32,display:'flex',alignItems:'center',gap:10}}>
                <span style={{width:22,height:1,background:'#C4B49A',display:'inline-block'}}/>Autres articles
              </div>
              <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:1,background:'#E6E1D8'}}>
                {others.map(a=>(
                  <Link key={a.id} href={`/article/${a.slug}`} style={{background:'#FAFAF7',padding:'28px 24px',textDecoration:'none',display:'block'}}>
                    <div style={{fontSize:8.5,letterSpacing:'.18em',textTransform:'uppercase',color:'#8E7355',marginBottom:10}}>{a.tag}</div>
                    <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:17,fontWeight:400,color:'#1C1C1C',lineHeight:1.35,marginBottom:8}}>{a.title}</h3>
                    <div style={{fontSize:9,letterSpacing:'.1em',color:'#C4B49A',textTransform:'uppercase'}}>{a.date}</div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer/>
    </>
  );
}
