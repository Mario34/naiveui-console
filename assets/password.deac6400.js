import{d as h,Q as k,ag as p,o as x,q as y,r as t,a as s,w as r,u as a,ah as c,ai as _,aj as N,ak as b,x as m,I,J as C,l as v,al as q}from"./vendor.33471326.js";import{_ as B,a as S}from"./index.e743df85.js";const f=l=>(I("data-v-6919c042"),l=l(),C(),l),j={class:"login"},F={class:"login-container"},K=f(()=>t("div",{class:"logo"},[t("img",{class:"logo-img",src:S,alt:"logo"})],-1)),R=f(()=>t("div",{class:"title"}," Sign in to Naive Console ",-1)),U={class:"form"},V=v(" Login "),Q=v(" Quick login use Github "),$=h({setup(l){const g=k(),i=p(null),o=p({username:"",password:""}),w={username:[{required:!0,min:4,max:24}],password:[{required:!0,min:4,max:50}]},u=()=>{var n;(n=i.value)==null||n.validate(e=>{e||g.replace("/")})};return(n,e)=>(x(),y("div",j,[t("div",F,[K,R,t("div",U,[s(a(b),{ref_key:"formRef",ref:i,model:o.value,rules:w},{default:r(()=>[s(a(c),{path:"username",label:"Username or email address"},{default:r(()=>[s(a(_),{value:o.value.username,"onUpdate:value":e[0]||(e[0]=d=>o.value.username=d),clearable:""},null,8,["value"])]),_:1}),s(a(c),{path:"password",label:"Password"},{default:r(()=>[s(a(_),{value:o.value.password,"onUpdate:value":e[1]||(e[1]=d=>o.value.password=d),type:"password",clearable:"",onKeyup:N(q(u,["prevent"]),["enter"])},null,8,["value","onKeyup"])]),_:1})]),_:1},8,["model"]),s(a(m),{block:"",type:"primary",onClick:u},{default:r(()=>[V]),_:1})]),s(a(m),{type_:"text",class:"quick-login",block:"",size:"large",onClick:e[2]||(e[2]=d=>n.$router.push({name:"login"}))},{default:r(()=>[Q]),_:1})])]))}});var G=B($,[["__scopeId","data-v-6919c042"]]);export{G as default};
