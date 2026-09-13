'use client';

import {motion,useMotionValue,useReducedMotion,useSpring} from 'framer-motion';
import type {PointerEvent,ReactNode} from 'react';

function FloatCard({className,rotation,children}:{className:string;rotation:number;children:ReactNode}){
 const reduce=useReducedMotion();
 const rawX=useMotionValue(0),rawY=useMotionValue(0);
 const rotateX=useSpring(rawX,{stiffness:260,damping:24,mass:.5});
 const rotateY=useSpring(rawY,{stiffness:260,damping:24,mass:.5});
 function move(event:PointerEvent<HTMLDivElement>){if(reduce||event.pointerType==='touch')return;const r=event.currentTarget.getBoundingClientRect();rawY.set(((event.clientX-r.left)/r.width-.5)*6);rawX.set(-((event.clientY-r.top)/r.height-.5)*6);}
 function reset(){rawX.set(0);rawY.set(0);}
 return <motion.div className={'float '+className} style={{rotateX,rotateY,rotateZ:rotation,transformPerspective:900}} onPointerMove={move} onPointerLeave={reset} whileHover={reduce?undefined:{y:-7,scale:1.018,boxShadow:'0 24px 60px rgba(33,53,31,.13)'}} whileTap={reduce?undefined:{scale:.99}} transition={{type:'spring',stiffness:280,damping:22}}>{children}</motion.div>;
}

export default function HeroArt(){return <div className="hero-art" aria-label="An agent request passing through owner-defined spending rules"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orb"><svg viewBox="0 0 200 200" aria-hidden="true"><path d="M38 48h43l23 69 25-69h39l-48 111H83Z"/></svg></div><FloatCard className="intent" rotation={-5}><span className="tiny">YOU → AGENT</span><p>Find a ridiculous meme coin.<br/>Spend up to 100 USDC.</p><span className="pill">✦ Intent received</span></FloatCard><FloatCard className="verdict" rotation={-4}><span className="check">✓</span><div><strong>Within your limits.</strong><span>Permission before execution.</span></div><span className="tiny">ALLOW</span></FloatCard><FloatCard className="cap" rotation={6}><span className="tiny">YOUR SPENDING CAP</span><strong>100<span> USDC</span></strong><div className="meter"><i/></div><small>You decide how far it goes.</small></FloatCard></div>}
