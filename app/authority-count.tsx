'use client';

import {useEffect,useRef,useState} from 'react';

export function AuthorityCount({to,suffix=''}:{to:number;suffix?:string}){
  const ref=useRef<HTMLSpanElement>(null);
  const [value,setValue]=useState(0);
  useEffect(()=>{
    const node=ref.current;
    if(!node)return;
    let frame=0;
    const observer=new IntersectionObserver(([entry])=>{
      if(!entry.isIntersecting)return;
      const start=performance.now();
      const duration=1100;
      const tick=(now:number)=>{
        const progress=Math.min(1,(now-start)/duration);
        const eased=1-Math.pow(1-progress,3);
        setValue(Math.round(to*eased));
        if(progress<1)frame=requestAnimationFrame(tick);
      };
      frame=requestAnimationFrame(tick);
      observer.disconnect();
    },{threshold:.35});
    observer.observe(node);
    return()=>{observer.disconnect();cancelAnimationFrame(frame)};
  },[to]);
  return <span ref={ref}>{value}{suffix}</span>;
}
