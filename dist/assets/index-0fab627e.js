import{d as i,r as u,h as n,c,a as _,_ as t}from"./index-171b0543.js";const l=i("userinfo-store",()=>{const o={userInfo:u({})},r=e=>{n.defaults.headers.common.Authorization=e,localStorage.setItem("token",e)};return{...o,setAuth:r,removeAuth:()=>{delete n.defaults.headers.common.Authorization,localStorage.removeItem("token"),s.push("/login")},authFromLocal:()=>{const e=localStorage.getItem("token");return e?(r(e),!0):!1}}}),m=()=>t(()=>import("./Home-3d318e72.js"),["./Home-3d318e72.js","./index-171b0543.js","./index-13875a2c.css","./useScrollAnimate-d439a911.js","./Pz-0052-893f1e76.js","./Home-91df913b.css"],import.meta.url),p=()=>t(()=>import("./BlogNote-2dcc36d2.js"),["./BlogNote-2dcc36d2.js","./index-171b0543.js","./index-13875a2c.css","./moment-fbc5633a.js","./Pz-0052-893f1e76.js","./BlogNote-3df21a6f.css","./NoteNav-e8e265bc.css"],import.meta.url),h=()=>t(()=>import("./NoteContent-c2ac280c.js"),["./NoteContent-c2ac280c.js","./index-171b0543.js","./index-13875a2c.css","./moment-fbc5633a.js","./IconTag-e7a50c55.js","./notes-5c4af883.js","./NoteContent-ea0cb114.css"],import.meta.url),d=()=>t(()=>import("./NoteNav-60ff1409.js"),["./NoteNav-60ff1409.js","./index-171b0543.js","./index-13875a2c.css","./useTitle-f20ddbc2.js","./useScrollAnimate-d439a911.js","./moment-fbc5633a.js","./notes-5c4af883.js","./NoteNav-e8e265bc.css"],import.meta.url),f=()=>t(()=>import("./NoteCate-3151dac3.js"),["./NoteCate-3151dac3.js","./IconTag-e7a50c55.js","./index-171b0543.js","./index-13875a2c.css","./moment-fbc5633a.js","./useTitle-f20ddbc2.js","./NoteCate-5c9e4227.css"],import.meta.url),v=()=>t(()=>import("./NoteChapter-049f3dcf.js"),["./NoteChapter-049f3dcf.js","./index-171b0543.js","./index-13875a2c.css","./NoteChapter-2c4688fd.css"],import.meta.url),A=()=>t(()=>import("./FriendLink-784fcaee.js"),["./FriendLink-784fcaee.js","./index-171b0543.js","./index-13875a2c.css","./useTitle-f20ddbc2.js","./FriendLink-c1a9f6be.css"],import.meta.url),s=c({history:_(),scrollBehavior(o,r){return console.log("=>to",o),{top:0}},routes:[{path:"/",meta:{title:"Home",requiresAuth:!1},component:m},{path:"/about",meta:{title:"关于我",requiresAuth:!1},component:m},{path:"/note",meta:{requiresAuth:!1},component:p,redirect:"/note/nav",children:[{name:"NoteNav",meta:{title:"笔记首页"},path:"nav",component:d},{path:"cate",meta:{title:"归档"},component:f},{path:"friend",meta:{title:"友情链接"},component:A},{path:"content",meta:{title:"笔记详情"},components:{default:h,NoteChapter:v}}]}]});l();s.beforeEach(async(o,r,a)=>{a()});export{s as router};
