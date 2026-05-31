'use client';
import { useState } from 'react';

const FORM_ID = 'mgodpbnq';
const PROJETS = ['SCPI / Immobilier','Investissement financier','Préparer ma retraite','Optimisation fiscale','Transmission / succession','Bilan patrimonial global'];

function fmtAmt(v){
  if(v>=500000) return '500 000 € et plus';
  return `${Math.round(v/1000)} 000 €`;
}

export default function Funnel({variant='full'}) {
  const [step,setStep] = useState(0);
  const [data,setData] = useState({profil:'',montant:100000,projets:[],prenom:'',email:'',telephone:''});
  const [state,setState] = useState({submitting:false,succeeded:false,errors:[]});

  const profileOpts = [
    {t:'Particulier salarié', d:'Revenus salariaux, patrimoine personnel'},
    {t:'Chef d\'entreprise', d:'Dirigeant, TNS, profession libérale'},
    {t:'Famille / couple', d:'Projet patrimonial commun'},
  ];

  const toggle = p => setData(d=>({...d,projets:d.projets.includes(p)?d.projets.filter(x=>x!==p):[...d.projets,p]}));

  const canNext = () => {
    if(step===0) return !!data.profil;
    if(step===1) return data.montant>=10000;
    if(step===2) return data.projets.length>0;
    if(step===3) return !!(data.prenom&&data.email);
    return false;
  };

  const submit = async () => {
    setState(s=>({...s,submitting:true}));
    try {
      const r = await fetch(`https://formspree.io/f/${FORM_ID}`,{
        method:'POST',
        headers:{'Content-Type':'application/json','Accept':'application/json'},
        body:JSON.stringify({
          _subject:`📋 Analyse — ${data.prenom} — ${fmtAmt(data.montant)}`,
          profil:data.profil, montant:fmtAmt(data.montant),
          projets:data.projets.join(', '),
          prenom:data.prenom, email:data.email,
          telephone:data.telephone||'—',
          soumis_le:new Date().toLocaleDateString('fr-FR',{day:'numeric',month:'long',year:'numeric'})
        })
      });
      if(r.ok) setState({submitting:false,succeeded:true,errors:[]});
      else setState({submitting:false,succeeded:false,errors:['Erreur']});
    } catch { setState({submitting:false,succeeded:false,errors:['Connexion']}); }
  };

  const STEPS = ['Profil','Montant','Projets','Contact'];
  const gold = '#8E7355';
  const cream = '#F6F4EF';
  const warm = '#C4B49A';

  return (
    <div style={{background:'rgba(255,255,255,.04)',border:'1px solid rgba(196,180,154,.12)',padding:40,position:'relative',overflow:'hidden'}}>
      {/* Shimmer borders */}
      {['top','bottom'].map(p=>(
        <div key={p} style={{position:'absolute',[p]:0,left:0,right:0,height:4,background:'linear-gradient(90deg,transparent,#8E7355,transparent)',animation:'shimmer 2.5s infinite',backgroundSize:'200% 100%'}}/>
      ))}
      {['left','right'].map(p=>(
        <div key={p} style={{position:'absolute',top:0,[p]:0,bottom:0,width:4,background:'linear-gradient(180deg,transparent,#8E7355,transparent)',animation:'shimmerV 2.5s infinite',backgroundSize:'100% 200%'}}/>
      ))}

      {/* Progress */}
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:28}}>
        <div style={{fontSize:9,letterSpacing:'.18em',textTransform:'uppercase',color:'rgba(196,180,154,.4)'}}>
          {state.succeeded ? 'Terminé' : `Étape ${step+1} sur 4`}
        </div>
        <div style={{display:'flex',gap:6}}>
          {STEPS.map((_,i)=>(
            <div key={i} style={{width:i===step?20:6,height:6,borderRadius:3,
              background:i<step||state.succeeded?'#3E6B37':i===step?gold:'rgba(196,180,154,.15)',
              transition:'all .3s'}}/>
          ))}
        </div>
      </div>

      {state.succeeded ? (
        <div style={{textAlign:'center',padding:'20px 0'}}>
          <div style={{width:52,height:52,borderRadius:'50%',background:'#3E6B37',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 16px',fontSize:22,color:'#fff'}}>✓</div>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:26,fontWeight:300,color:cream,marginBottom:10}}>Dossier reçu, merci !</div>
          <p style={{fontSize:13,fontWeight:300,color:'rgba(246,244,239,.45)',lineHeight:1.7}}>Nous l'examinons personnellement et vous contactons dans les 24h ouvrées.</p>
        </div>
      ) : step===0 ? (
        <>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:22,fontWeight:300,color:cream,marginBottom:6}}>Votre <em style={{fontStyle:'italic',color:gold}}>profil</em> ?</div>
          <div style={{fontSize:11,fontWeight:300,color:'rgba(246,244,239,.3)',marginBottom:20}}>Sélectionnez pour continuer</div>
          <div style={{display:'flex',flexDirection:'column',gap:8}}>
            {profileOpts.map(o=>(
              <div key={o.t} onClick={()=>{setData(d=>({...d,profil:o.t}));setStep(1);}}
                style={{display:'flex',alignItems:'center',gap:14,padding:'14px 16px',
                  border:`1px solid ${data.profil===o.t?gold:'rgba(196,180,154,.12)'}`,
                  background:data.profil===o.t?'rgba(142,115,85,.15)':'rgba(255,255,255,.03)',
                  cursor:'pointer',transition:'all .2s'}}>
                <div style={{width:32,height:32,borderRadius:'50%',border:`1px solid ${data.profil===o.t?gold:'rgba(196,180,154,.25)'}`,
                  display:'flex',alignItems:'center',justifyContent:'center',
                  fontFamily:"'Cormorant Garamond',serif",fontSize:14,fontStyle:'italic',
                  color:data.profil===o.t?gold:'rgba(196,180,154,.6)',flexShrink:0}}>
                  {o.t[0]}
                </div>
                <div>
                  <div style={{fontSize:13,fontWeight:400,color:cream}}>{o.t}</div>
                  <div style={{fontSize:10.5,fontWeight:300,color:'rgba(246,244,239,.35)'}}>{o.d}</div>
                </div>
                <span style={{marginLeft:'auto',color:gold,fontSize:14}}>→</span>
              </div>
            ))}
          </div>
        </>
      ) : step===1 ? (
        <>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:22,fontWeight:300,color:cream,marginBottom:6}}>Montant <em style={{fontStyle:'italic',color:gold}}>envisagé</em> ?</div>
          <div style={{fontSize:11,fontWeight:300,color:'rgba(246,244,239,.3)',marginBottom:20}}>Indicatif · sans engagement · min. 10 000 €</div>
          <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:44,fontWeight:300,color:cream,lineHeight:1,marginBottom:4}}>{fmtAmt(data.montant)}</div>
          <input type="range" min={10000} max={500000} step={5000} value={data.montant}
            onChange={e=>setData(d=>({...d,montant:+e.target.value}))}
            style={{width:'100%',height:2,accentColor:gold,margin:'16px 0 4px'}}/>
          <div style={{position:'relative',height:16,padding:'0 8px'}}>
            {[{v:10000,l:'10k'},{v:100000,l:'100k'},{v:250000,l:'250k'},{v:500000,l:'500k+'}].map(({v,l})=>{
              const pct=(v-10000)/(500000-10000);
              return <span key={v} style={{position:'absolute',left:`calc(${pct*100}% + ${8-pct*16}px)`,transform:'translateX(-50%)',fontSize:9,color:'rgba(196,180,154,.25)'}}>{l}</span>;
            })}
          </div>
        </>
      ) : step===2 ? (
        <>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:22,fontWeight:300,color:cream,marginBottom:6}}>Vos <em style={{fontStyle:'italic',color:gold}}>projets</em> ?</div>
          <div style={{fontSize:11,fontWeight:300,color:'rgba(246,244,239,.3)',marginBottom:20}}>Plusieurs choix possibles</div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
            {PROJETS.map(p=>(
              <div key={p} onClick={()=>toggle(p)} style={{display:'flex',alignItems:'center',gap:10,padding:'12px 14px',
                border:`1px solid ${data.projets.includes(p)?gold:'rgba(196,180,154,.1)'}`,
                background:data.projets.includes(p)?'rgba(142,115,85,.15)':'rgba(255,255,255,.02)',
                cursor:'pointer',transition:'all .2s'}}>
                <span style={{fontSize:12,fontWeight:300,color:data.projets.includes(p)?cream:'rgba(246,244,239,.6)'}}>{p}</span>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:22,fontWeight:300,color:cream,marginBottom:6}}>Vos <em style={{fontStyle:'italic',color:gold}}>coordonnées</em></div>
          <div style={{fontSize:11,fontWeight:300,color:'rgba(246,244,239,.3)',marginBottom:16}}>Réponse personnalisée sous 24h ouvrées</div>
          <div style={{background:'rgba(196,180,154,.06)',padding:'10px 14px',marginBottom:16,display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:8,fontSize:11,color:'rgba(246,244,239,.4)'}}>
            <span>{data.profil}</span>
            <span style={{color:warm}}>{fmtAmt(data.montant)}</span>
            {data.projets.length>0&&<span style={{width:'100%',fontSize:10}}>{data.projets.join(' · ')}</span>}
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginBottom:8}}>
            {[['Prénom *','prenom','Jean'],['Téléphone','telephone','06 XX XX XX XX']].map(([l,k,ph])=>(
              <div key={k}>
                <label style={{fontSize:9,fontWeight:400,letterSpacing:'.18em',textTransform:'uppercase',color:'rgba(196,180,154,.55)',display:'block',marginBottom:5}}>{l}</label>
                <input value={data[k]} onChange={e=>setData(d=>({...d,[k]:e.target.value}))} placeholder={ph}
                  style={{width:'100%',padding:'11px 13px',background:'rgba(255,255,255,.04)',border:'1px solid rgba(196,180,154,.13)',color:cream,fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:300,outline:'none'}}/>
              </div>
            ))}
          </div>
          <div>
            <label style={{fontSize:9,fontWeight:400,letterSpacing:'.18em',textTransform:'uppercase',color:'rgba(196,180,154,.55)',display:'block',marginBottom:5}}>Email *</label>
            <input type="email" value={data.email} onChange={e=>setData(d=>({...d,email:e.target.value}))} placeholder="jean@exemple.fr"
              style={{width:'100%',padding:'11px 13px',background:'rgba(255,255,255,.04)',border:'1px solid rgba(196,180,154,.13)',color:cream,fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:300,outline:'none'}}/>
          </div>
          <p style={{fontSize:10,fontWeight:300,color:'rgba(246,244,239,.2)',lineHeight:1.55,marginTop:10}}>Données sécurisées · RGPD · Jamais revendues</p>
        </>
      )}

      {!state.succeeded && (
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:24}}>
          {step>0
            ? <button onClick={()=>setStep(s=>s-1)} style={{fontSize:10,letterSpacing:'.14em',textTransform:'uppercase',color:'rgba(196,180,154,.35)',background:'none',border:'none',cursor:'pointer',fontFamily:"'DM Sans',sans-serif"}}>← Retour</button>
            : <span/>
          }
          {step<3
            ? <button onClick={()=>canNext()&&setStep(s=>s+1)} disabled={!canNext()}
                style={{padding:'10px 24px',background:gold,color:'#fff',fontFamily:"'DM Sans',sans-serif",fontSize:10,letterSpacing:'.18em',textTransform:'uppercase',border:'none',cursor:'pointer',opacity:canNext()?1:.35}}>
                Continuer →
              </button>
            : <button onClick={submit} disabled={!canNext()||state.submitting}
                style={{padding:'10px 24px',background:gold,color:'#fff',fontFamily:"'DM Sans',sans-serif",fontSize:10,letterSpacing:'.18em',textTransform:'uppercase',border:'none',cursor:'pointer',opacity:canNext()&&!state.submitting?1:.35}}>
                {state.submitting?'Envoi...':'Envoyer mon dossier →'}
              </button>
          }
        </div>
      )}
    </div>
  );
}
