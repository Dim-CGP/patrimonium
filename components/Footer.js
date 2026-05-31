'use client';
import { useRouter } from 'next/navigation';

export default function Footer() {
  const router = useRouter();
  return (
    <footer style={{background:'#1C1C1C',padding:'58px 52px 34px'}}>
      <div style={{maxWidth:1240,margin:'0 auto',display:'grid',gridTemplateColumns:'1.6fr 1fr 1fr 1fr',gap:44,paddingBottom:40,borderBottom:'1px solid rgba(255,255,255,.07)'}}>
        <div>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:17,fontWeight:400,color:'#F6F4EF',letterSpacing:'.06em',marginBottom:2}}>Patrimonium</div>
          <div style={{fontSize:8.5,letterSpacing:'.22em',textTransform:'uppercase',color:'#8E7355',marginBottom:16}}>Conseil en gestion de patrimoine</div>
          <p style={{fontSize:11.5,fontWeight:300,color:'rgba(246,244,239,.6)',lineHeight:1.7,maxWidth:220}}>Cabinet indépendant en gestion de patrimoine et investissement, disponible partout en France.</p>
          <p style={{fontSize:10,fontWeight:300,color:'rgba(246,244,239,.4)',letterSpacing:'.03em',lineHeight:1.6,marginTop:16}}>
            Gerber Dimitri — Auto-entrepreneur<br/>
            7 rue de la Forêt, 67190 Mutzig<br/>
            SIRET : 841 896 152 00011<br/>
            ORIAS N° 23001099 · Agréé AMF<br/>
            RCP AON n° RD00068076S
          </p>
        </div>
        <div>
          <div style={{fontSize:9.5,fontWeight:400,letterSpacing:'.22em',textTransform:'uppercase',color:'#C4B49A',marginBottom:16}}>Services</div>
          <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:9}}>
            {[
              ['Gestion de patrimoine','/services/gestion-de-patrimoine'],
              ['SCPI en financement','/services/scpi-financement'],
              ['Optimisation fiscale','/services/optimisation-fiscale'],
              ['Préparation retraite','/services/preparation-retraite'],
              ['Transmission','/services/transmission-succession'],
              ['Conseil investissement','/services/conseil-investissement'],
            ].map(([label,href])=>(
              <li key={href}><a onClick={()=>router.push(href)} style={{fontSize:11.5,fontWeight:300,color:'rgba(246,244,239,.6)',textDecoration:'none',cursor:'pointer'}}>{label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div style={{fontSize:9.5,fontWeight:400,letterSpacing:'.22em',textTransform:'uppercase',color:'#C4B49A',marginBottom:16}}>Cabinet</div>
          <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:9}}>
            {[['À propos','/a-propos'],['Blog & ressources','/ressources'],['Analyse gratuite','/#analyse']].map(([label,href])=>(
              <li key={href}><a onClick={()=>router.push(href)} style={{fontSize:11.5,fontWeight:300,color:'rgba(246,244,239,.6)',textDecoration:'none',cursor:'pointer'}}>{label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div style={{fontSize:9.5,fontWeight:400,letterSpacing:'.22em',textTransform:'uppercase',color:'#C4B49A',marginBottom:16}}>Intervention</div>
          <div style={{fontSize:11.5,fontWeight:300,color:'rgba(246,244,239,.55)',lineHeight:1.9}}>
            <div>France entière</div>
            <div>Visioconférence</div>
          </div>
        </div>
      </div>
      <div style={{maxWidth:1240,margin:'0 auto',display:'flex',justifyContent:'space-between',alignItems:'center',paddingTop:20,flexWrap:'wrap',gap:10}}>
        <div>
          <div style={{fontSize:10,fontWeight:300,color:'rgba(246,244,239,.45)',letterSpacing:'.04em'}}>© 2026 Patrimonium — Tous droits réservés</div>
          <div style={{fontSize:9.5,fontWeight:300,color:'rgba(246,244,239,.15)',marginTop:3}}>Les informations de ce site ont un caractère général et ne constituent pas des conseils personnalisés. Tout investissement comporte des risques.</div>
        </div>
        <div style={{display:'flex',gap:18}}>
          <a onClick={()=>router.push('/mentions-legales')} style={{fontSize:10,fontWeight:300,color:'rgba(246,244,239,.45)',textDecoration:'none',cursor:'pointer'}}>Mentions légales</a>
          <a onClick={()=>router.push('/politique-confidentialite')} style={{fontSize:10,fontWeight:300,color:'rgba(246,244,239,.45)',textDecoration:'none',cursor:'pointer'}}>Confidentialité</a>
        </div>
      </div>
    </footer>
  );
}
