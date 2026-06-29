'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Topbar({ current }) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const navigate = (href) => {
    setMenuOpen(false);
    router.push(href);
  };

  const tabs = [
    {label:'Analyse gratuite', href:'/#analyse', hi:true},
    {label:'Ressources', href:'/ressources'},
    {label:'À propos', href:'/a-propos'},
  ];

  return (
    <>
      <div style={{
        position:'fixed',top:0,left:0,right:0,zIndex:201,height:'62px',
        background:'#1C1C1C',display:'flex',alignItems:'center',
        justifyContent:'space-between',padding:'0 20px',
        borderBottom:'1px solid rgba(196,180,154,.12)'
      }}>
        {/* Logo */}
        <div onClick={()=>navigate('/')} style={{
          fontFamily:"'Cormorant Garamond',serif",fontSize:16,
          fontWeight:400,color:'rgba(246,244,239,.8)',letterSpacing:'.08em',
          cursor:'pointer',flexShrink:0
        }}>
          Patrimonium
        </div>

        {/* Desktop nav */}
        {!isMobile && (
          <div style={{display:'flex',alignItems:'center',gap:0,height:'62px'}}>
            {tabs.map(tab=>(
              <div key={tab.href} onClick={()=>navigate(tab.href)} style={{
                display:'flex',alignItems:'center',gap:8,
                padding:'0 20px',height:'100%',
                fontSize:10,fontWeight:400,letterSpacing:'.14em',
                textTransform:'uppercase',cursor:'pointer',
                borderLeft:'1px solid rgba(196,180,154,.08)',
                color: tab.hi ? '#F6F4EF' : 'rgba(246,244,239,.6)',
                background: tab.hi ? 'rgba(142,115,85,.15)' : 'transparent',
                borderBottom: tab.hi ? '2px solid #8E7355' : 'none',
                whiteSpace:'nowrap',
              }}>
                {tab.hi && <div style={{width:6,height:6,borderRadius:'50%',background:'#3E6B37',flexShrink:0}}/>}
                {tab.label}
              </div>
            ))}
            <div style={{fontSize:9,color:'rgba(246,244,239,.5)',display:'flex',alignItems:'center',gap:6,padding:'0 0 0 20px',borderLeft:'1px solid rgba(196,180,154,.08)',whiteSpace:'nowrap'}}>
              <div style={{width:5,height:5,borderRadius:'50%',background:'#3E6B37'}}/>
              Réponse sous 24h
            </div>
          </div>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <button onClick={()=>setMenuOpen(o=>!o)} aria-label="Menu de navigation" style={{
            background:'none',border:'none',cursor:'pointer',
            display:'flex',flexDirection:'column',gap:5,padding:10,
          }}>
            <span style={{display:'block',width:24,height:2,background:'rgba(246,244,239,.8)',borderRadius:1}}/>
            <span style={{display:'block',width:24,height:2,background:'rgba(246,244,239,.8)',borderRadius:1,opacity:menuOpen?0:1,transition:'opacity .2s'}}/>
            <span style={{display:'block',width:24,height:2,background:'rgba(246,244,239,.8)',borderRadius:1}}/>
          </button>
        )}
      </div>

      {/* Mobile dropdown menu */}
      {isMobile && menuOpen && (
        <div style={{
          position:'fixed',top:'62px',left:0,right:0,zIndex:200,
          background:'#1C1C1C',borderBottom:'2px solid #8E7355',
        }}>
          {tabs.map(tab=>(
            <div key={tab.href} onClick={()=>navigate(tab.href)} style={{
              padding:'18px 24px',
              fontSize:11,fontWeight:400,letterSpacing:'.14em',
              textTransform:'uppercase',cursor:'pointer',
              color: tab.hi ? '#F6F4EF' : 'rgba(246,244,239,.6)',
              borderBottom:'1px solid rgba(196,180,154,.06)',
              display:'flex',alignItems:'center',gap:10,
              background: tab.hi ? 'rgba(142,115,85,.1)' : 'transparent',
            }}>
              {tab.hi && <div style={{width:6,height:6,borderRadius:'50%',background:'#3E6B37',flexShrink:0}}/>}
              {tab.label}
            </div>
          ))}
          <div style={{padding:'12px 24px',fontSize:9,color:'rgba(246,244,239,.35)',letterSpacing:'.1em',display:'flex',alignItems:'center',gap:6}}>
            <div style={{width:5,height:5,borderRadius:'50%',background:'#3E6B37'}}/>
            Réponse sous 24h · France entière
          </div>
        </div>
      )}
    </>
  );
}
