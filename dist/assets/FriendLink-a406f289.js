import{$ as _,k as l,b as p,l as u,o as n,g as i,j as s,F as h,G as g,u as m,D as c,x as v,y as f}from"./index-b3ed6b24.js";const b=function(e={pageWhich:1,pageNum:8}){return _({method:"get",url:"/api/web/friends",params:e})};const k=e=>(v("data-v-0993abb2"),e=e(),f(),e),x={class:"friend"},F=k(()=>s("h2",{class:"main-title"},"小伙伴们",-1)),y={class:"friend-list"},L={class:"avatar"},B=["src"],D={class:"content"},I={class:"title"},S={class:"text"},w={__name:"FriendLink",setup(e){let o=p([{name:"xiana",imgUrl:"aa",description:"dd"}]);const d=async()=>{const t=await b();console.log("resData为:",t),o.value=t.data};return u(()=>{d()}),(t,N)=>(n(),i("div",x,[F,s("div",y,[(n(!0),i(h,null,g(m(o),(a,r)=>(n(),i("div",{class:"friend-item",key:r},[s("div",L,[s("img",{src:a.imgUrl,alt:""},null,8,B)]),s("div",D,[s("div",I,c(a.name),1),s("div",S,c(a.description),1)])]))),128))])]))}},$=l(w,[["__scopeId","data-v-0993abb2"]]);export{$ as default};
