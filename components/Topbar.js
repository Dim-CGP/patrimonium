'use client';
import { useRouter } from 'next/navigation';

export default function Topbar({ current }) {
  const router = useRouter();
  return (
    <div style={{
      position:'fixed',top:0,left:0,right:0,zIndex:201,height:'62px',
      background:'#1C1C1C',display:'flex',alignItems:'center',
      justifyContent:'space-between',padding:'0 52px',
      borderBottom:'1px solid rgba(196,180,154,.12)'
    }}>
      <div style={{display:'flex',alignItems:'center',gap:0,height:'100%'}}>
        <div
          onClick={()=>router.push('/')}
          style={{
            display:'flex',alignItems:'center',height:'100%',
            padding:'0 24px 0 0',cursor:'pointer',
            borderRight:'1px solid rgba(196,180,154,.08)',
            fontFamily:"'Cormorant Garamond',serif",fontSize:14,
            fontWeight:400,color:'rgba(246,244,239,.65)',letterSpacing:'.08em'
          }}>
          Patrimonium
        </div>
        {[
          {label:'Analyse gratuite',href:'/#analyse',hi:true},
          {label:'Blog',href:'/ressources'},
          {label:'À propos',href:'/a-propos'},
        ].map(tab=>(
          <div
            key={tab.href}
            onClick={()=>router.push(tab.href)}
            style={{
              display:'flex',alignItems:'center',gap:8,
              padding:'0 24px',height:'100%',
              fontSize:11,fontWeight:400,letterSpacing:'.14em',
              textTransform:'uppercase',cursor:'pointer',
              borderRight:'1px solid rgba(196,180,154,.08)',
              color: tab.hi ? '#F6F4EF' : 'rgba(246,244,239,.6)',
              background: tab.hi ? 'rgba(142,115,85,.15)' : 'transparent',
              borderBottom: tab.hi ? '2px solid #8E7355' : 'none',
              transition:'all .25s',
            }}
          >
            {tab.hi && <div style={{width:6,height:6,borderRadius:'50%',background:'#3E6B37',animation:'pulse 2s infinite',flexShrink:0}}/>}
            {tab.label}
          </div>
        ))}
      </div>
      <div style={{fontSize:10,fontWeight:400,letterSpacing:'.12em',color:'rgba(246,244,239,.6)',display:'flex',alignItems:'center',gap:8}}>
        <div style={{width:5,height:5,borderRadius:'50%',background:'#3E6B37',animation:'pulse 2s infinite'}}/>
        Réponse sous 24h · France entière
      </div>
    </div>
  );
}
