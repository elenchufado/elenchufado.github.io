import{W as C,A as P,P as b,s as H,S as R,a as k,R as V,b as h,c as y,B as Z,M as _,d as ee,D as A,G as $,e as te,C as T,f as oe,g as ne}from"./vendor.279b9cf2.js";const ie=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))E(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&E(p)}).observe(document,{childList:!0,subtree:!0});function f(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function E(o){if(o.ep)return;o.ep=!0;const r=f(o);fetch(o.href,r)}};ie();let L,c;const se=new T,g=document.getElementById("cat3d");let Y=g.clientHeight,q=g.clientWidth,B=0,D=0,re=window.innerWidth/2,ae=window.innerHeight/2;document.addEventListener("mousemove",le,!1);const a=new C({antialias:!0});a.setPixelRatio(window.devicePixelRatio);a.setSize(q,Y);a.toneMapping=P;a.toneMappingExposure=1;a.shadowMap.enabled=!0;a.shadowMap.type=b;a.outputEncoding=H;g.appendChild(a.domElement);const d=new R,n=new k(45,window.innerWidth/window.innerHeight,1,1e3);n.position.set(10,15,-30);n.aspect=q/Y;n.updateProjectionMatrix();d.add(n);V.init();const M=new h(65535,5,4,15);M.position.set(-5,0,5);d.add(M);const S=new h(16412312,5,4,15);S.position.set(0,0,5);d.add(S);const v=new h(13750737,5,4,15);v.position.set(5,0,5);d.add(v);d.add(new y(M));d.add(new y(S));d.add(new y(v));const de=new Z(16,.1,10),ce=new _({color:8421504,roughness:.1,metalness:0}),O=new ee(de,ce);O.position.set(0,-3,0);d.add(O);const W=new A;W.setDecoderPath("js/libs/draco/gltf/");const F=new $;F.setDRACOLoader(W);F.load("/luckyCat/cat10.gltf",function(e){c=e.scene,c.position.set(0,0,0),c.scale.set(.02,.02,.02),c.rotation.set(0,185.7,0),d.add(c),L=new te(c),L.clipAction(e.animations[0]).play(),N()},void 0,function(e){console.error(e)});function le(e){B=(e.clientX-re)/100,D=(e.clientY-ae)/80}function N(e){requestAnimationFrame(N);const t=se.getDelta();L.update(t),ue()}window.addEventListener("resize",()=>{let e=g.clientWidth,t=g.clientHeight;n.aspect=e/t,n.updateProjectionMatrix(),a.setSize(e,t),a.setPixelRatio(Math.min(window.devicePixelRatio,2))});function ue(){n.position.x+=(B-n.position.x)*1,n.position.y+=(-D-n.position.y)*1+13,n.lookAt(d.position),a.render(d,n)}let l;new T;const w=document.getElementById("totem");let j=w.clientHeight,z=w.clientWidth,G=0,X=0,ge=window.innerWidth/2,we=window.innerHeight/2;document.addEventListener("mousemove",fe,!1);const i=new C({antialias:!0});i.setPixelRatio(window.devicePixelRatio);i.setSize(z,j);i.toneMapping=P;i.toneMappingExposure=1;i.shadowMap.enabled=!0;i.shadowMap.type=b;i.outputEncoding=H;w.appendChild(i.domElement);i.domElement.id="totemCanvas";const u=new R,s=new k(45,window.innerWidth/window.innerHeight,1,1e3);s.position.set(0,0,-30);s.aspect=z/j;s.updateProjectionMatrix();u.add(s);const me=new oe(13819359,1.5);u.add(me);const I=new ne(16711680,10);I.position.set(0,0,0);u.add(I);const K=new A;K.setDecoderPath("js/libs/draco/gltf/");const U=new $;U.setDRACOLoader(K);U.load("/lantern2/scene.gltf",function(e){l=e.scene,l.position.set(0,7,0),l.scale.set(15,15,15),l.rotation.set(0,185.7,0),u.add(l),J()},void 0,function(e){console.error(e)});function fe(e){G=(e.clientX-ge)/100,X=(e.clientY-we)/80}function J(e){requestAnimationFrame(J),l.rotation.y=e/1e3,pe()}window.addEventListener("resize",()=>{let e=w.clientWidth,t=w.clientHeight;s.aspect=e/t,s.updateProjectionMatrix(),i.setSize(e,t),i.setPixelRatio(Math.min(window.devicePixelRatio,2))});function pe(){s.position.x+=G-s.position.x,s.position.y+=-X-s.position.y+13,s.lookAt(u.position),i.render(u,s)}const m=new ScrollMagic.Controller,he=document.getElementsByClassName("about-me")[0].offsetHeight;new ScrollMagic.Scene({triggerElement:"#totem",triggerHook:-1,duration:he}).setPin("#totemCanvas").addTo(m);new ScrollMagic.Scene({triggerElement:"#works"}).setClassToggle(".nav","display-nav").addTo(m);new ScrollMagic.Scene({triggerElement:"#works",triggerHook:-1,reverse:!1}).setClassToggle("#accordion","slideInLeft").addTo(m);new ScrollMagic.Scene({triggerElement:"#contact-me",reverse:!1}).setClassToggle(".content-left","slideInLeft").addTo(m);const ye=document.getElementsByClassName("cat-image")[0].style,Le=document.getElementsByClassName("works-text")[0];window.addEventListener("scroll",function(){let e=window.scrollY;ye.bottom="-"+e/80+"%",Le.style.top=e/40+"%"});const Me=document.querySelector("#accordion"),Se=Me.getBoundingClientRect().top+window.pageYOffset;window.addEventListener("resize",x);window.addEventListener("scroll",x);function x(){let e=document.body.offsetHeight,t=document.querySelector(".cards"),f=window.pageYOffset/e*-150;window.pageYOffset>Se&&t.style.setProperty("--scroll",f+"%")}x();const Q=document.querySelector(".hamburger"),ve=document.querySelector(".nav-links"),xe=document.querySelectorAll(".nav-links li");Q.addEventListener("click",()=>{ve.classList.toggle("open"),xe.forEach(e=>{e.classList.toggle("fade")}),Q.classList.toggle("toggle")});window.addEventListener("load",function(){const e=document.querySelector(".loader-container");e.className+=" hidden";const t=document.querySelector(".loading-scroll");t.className-="loading-scroll"});
