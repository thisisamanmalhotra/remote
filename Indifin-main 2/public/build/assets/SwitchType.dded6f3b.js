import{k as p,r,o as m,l as d,u as c,x as i}from"./vendor.4cee486b.js";const f={props:{modelValue:{type:[String,Number,Boolean],default:null}},emits:["update:modelValue"],setup(t,{emit:a}){const n=t,e=p({get:()=>n.modelValue===1,set:o=>{a("update:modelValue",o?1:0)}});return(o,l)=>{const u=r("BaseSwitch");return m(),d(u,{modelValue:c(e),"onUpdate:modelValue":l[0]||(l[0]=s=>i(e)?e.value=s:null)},null,8,["modelValue"])}}};export{f as default};
