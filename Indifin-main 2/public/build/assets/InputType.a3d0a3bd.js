import{k as p,r,o as d,l as m,u as c,x as V}from"./vendor.4cee486b.js";const i={props:{modelValue:{type:String,default:null}},emits:["update:modelValue"],setup(o,{emit:u}){const a=o,e=p({get:()=>a.modelValue,set:t=>{u("update:modelValue",t)}});return(t,l)=>{const n=r("BaseInput");return d(),m(n,{modelValue:c(e),"onUpdate:modelValue":l[0]||(l[0]=s=>V(e)?e.value=s:null),type:"text"},null,8,["modelValue"])}}};export{i as default};
