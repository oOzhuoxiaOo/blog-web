import{f as P,s as z,W as H,i as A,o,b as n,w as y,e,P as S,t as _,u as l,aa as j,m as q,r,g as b,M as f,a4 as M,ab as $,j as U,ac as V,ad as E}from"./index-171b0543.js";import{u as F}from"./useTitle-f20ddbc2.js";import{u as G}from"./useScrollAnimate-d439a911.js";import{h as L}from"./moment-fbc5633a.js";/* empty css                                                                */import{a as u}from"./notes-5c4af883.js";const k=function(d="auto"){window.scrollTo({top:0})},J={class:"cart-note-item"},K=["data_src"],O={class:"note-introduce"},Q={class:"introduce-tips"},X={class:"publish-date"},Y={class:"note-title"},Z={class:"note-description"},tt={__name:"NoteItem",props:["note","order"],setup(d){const m=d;let v="/src/assets/images/animations/rows/Pz-0050.jpg";const a=m.note,s=z(()=>L(a.createTime).format("yyyy-MM-DD  HH:mm:ss")),p=H({backgroundImage:v});return a.img.isHasImg&&(p.backgroundImage=a.img.imgUrl),(I,N)=>{const g=A("lazy");return o(),n("div",J,[y(e("div",{class:S(["note-item-pic",d.order?"after":""]),data_src:p.backgroundImage},null,10,K),[[g]]),e("div",O,[e("div",Q,[e("div",X,_(s.value),1)]),e("h2",Y,_(l(a).title),1),e("div",Z,_(l(a).description),1)])])}}},et=P(tt,[["__scopeId","data-v-f141ada6"]]),at={class:"cart-note-list"},st=["onClick"],ot={class:"noteItemHover xn-hover-inup"},nt={class:"page-nav"},ct={class:"page-list"},it=["onClick"],rt={__name:"NoteNav",setup(d){F();const m=G(),v=j(),a=q(),s=r(1);(async()=>{const t=await u();a.notesData=t.data})();function I(t){v.push({path:"/note/content",query:{noteId:t}})}async function N(t){s.value=t;const D=await u({pageWhich:s.value,pageNum:10});a.notesData=D.data,await V(),k()}async function g(){s.value++;const t=await u({pageWhich:s.value,pageNum:10});a.notesData=t.data,k()}async function x(){s--;const t=await u({pageWhich:s.value,pageNum:10});a.notesData=t.data,k()}let h=r(1),w=r({}),B=r(!1);const R=async()=>{const t=await E();w.value=t.data},T=async()=>{await R(),B.value=!0};b(async()=>{await T();const t=w.value.noteInfo.notesCount;h.value=Math.ceil(t/10)});let C=r([]);return b(()=>{m.start(C,{activeClass:["animate__animated","animate__fadeInUp"]})}),(t,D)=>(o(),n(f,null,[e("div",at,[(o(!0),n(f,null,M(l(a).notesData,(c,i)=>(o(),n("div",{class:"note-item",onClick:W=>I(c._id),ref_for:!0,ref_key:"noteItems",ref:C,key:c._id},[e("div",ot,[U(et,{note:c,order:i%2==0?0:1},null,8,["note","order"])])],8,st))),128))]),e("div",nt,[y(e("div",{class:"back-page",onClick:x},"上一页",512),[[$,s.value!==1]]),e("div",ct,[(o(!0),n(f,null,M(l(h),(c,i)=>(o(),n("div",{class:S(["page-item",i+1==s.value?"active":""]),onClick:W=>N(i+1),key:i},_(c),11,it))),128))]),y(e("div",{class:"next-page",onClick:g},"下一页",512),[[$,s.value!==l(h)]])])],64))}},pt=P(rt,[["__scopeId","data-v-d75804f2"]]);export{pt as default};