import{k as T,c as B,r as R,m as S,o as r,g as l,q as N,j as s,H as x,D as _,u as d,$ as W,z as H,b as f,l as D,w as A,t as $,I as U,T as j,J as b,F as I,G as P,n as q}from"./index-0449f5a3.js";import{a as F}from"./index-1298a90b.js";import{u as G}from"./useTitle-5ef0e96e.js";import{u as V}from"./useScrollAnimate-c1e6165c.js";import{h as E}from"./moment-fbc5633a.js";/* empty css                                                                */const k=function(n="auto"){window.scrollTo({top:0})},J={class:"cart-note-item"},L=["data-src"],K={class:"note-introduce"},O={class:"introduce-tips"},Q={class:"publish-date"},X={class:"note-title"},Y={class:"note-description"},Z={__name:"NoteItem",props:["note","order"],setup(n){const m=n;let p="/src/assets/images/animations/rows/Pz-0050.jpg";const t=m.note,a=B(()=>E(t.createTime).format("yyyy-MM-DD  HH:mm:ss")),g=R({backgroundImage:p});return t.img.isHasImg&&(g.backgroundImage=t.img.imgUrl),(y,w)=>{const v=S("lazy");return r(),l("div",J,[N(s("div",{class:x(["note-item-pic",n.order?"after":""]),"data-src":g.backgroundImage},null,10,L),[[v]]),s("div",K,[s("div",O,[s("div",Q,_(a.value),1)]),s("h2",X,_(d(t).title),1),s("div",Y,_(d(t).description),1)])])}}},tt=T(Z,[["__scopeId","data-v-a9eb4d40"]]),u=(n={pageWhich:1,pageNum:10})=>W({method:"get",url:"/api/web/notes",params:n}),et={class:"cart-note-list"},at=["onClick"],st={class:"page-nav"},ot={class:"page-list"},nt=["onClick"],ct={__name:"NoteNav",setup(n){G();const m=V(),p=F(),t=H(),a=f(1);(async()=>{const e=await u();t.notesData=e.data})();function y(e,c){p.push({path:"/note/content",query:{noteIndex:c}}),t.title=e.title}async function w(e){a.value=e;const c=await u({pageWhich:a.value,pageNum:10});t.notesData=c.data,await q(),k()}async function v(){a.value++;const e=await u({pageWhich:a.value,pageNum:10});t.notesData=e.data,k()}async function M(){a--;const e=await u({pageWhich:a.value,pageNum:10});t.notesData=e.data,k()}let h=f(1);D(()=>{A(()=>t.hasMeInfo,(e,c)=>{console.log("new:",e,"old:",c);const o=t.meInfo.noteInfo.notesCount;h.value=Math.ceil(o/10)})});let C=f([]);return D(()=>{m.start(C,{activeClass:["animate__animated","animate__fadeInUp"]})}),(e,c)=>(r(),l(I,null,[s("div",et,[$(j,{"enter-active-class":"animate__animated animate__fadeInUp"},{default:U(()=>[(r(!0),l(I,null,P(d(t).notesData,(o,i)=>(r(),l("div",{class:"note-item",onClick:z=>y(o,i),ref_for:!0,ref_key:"noteItems",ref:C,key:o._id},[$(tt,{note:o,order:i%2==0?0:1},null,8,["note","order"])],8,at))),128))]),_:1})]),s("div",st,[N(s("div",{class:"back-page",onClick:M},"上一页",512),[[b,a.value!==1]]),s("div",ot,[(r(!0),l(I,null,P(d(h),(o,i)=>(r(),l("div",{class:x(["page-item",i+1==a.value?"active":""]),onClick:z=>w(i+1),key:i},_(o),11,nt))),128))]),N(s("div",{class:"next-page",onClick:v},"下一页",512),[[b,a.value!==d(h)]])])],64))}},mt=T(ct,[["__scopeId","data-v-8a385a39"]]);export{mt as default};
