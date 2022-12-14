import{C as j,B as k,k as g,E as y,H as N,I as q,N as D,O as G,r as i,o as B,l as b,w as r,h as m,i as f,t as C,u as e,f as n,m as L,j as T,P as E}from"./vendor.4cee486b.js";import{u as z}from"./category.7ae39f14.js";import{c as U}from"./main.3742ff98.js";const A={class:"flex justify-between w-full"},H=["onSubmit"],O={class:"p-8 sm:p-6"},P={class:"z-0 flex justify-end p-4 border-t border-gray-200 border-solid border-modal-bg"},Q={setup(X){const t=z(),u=U(),{t:p}=j();let c=k(!1);const h=g(()=>({currentCategory:{name:{required:y.withMessage(p("validation.required"),N),minLength:y.withMessage(p("validation.name_min_length",{count:3}),q(3))},description:{maxLength:y.withMessage(p("validation.description_maxlength",{count:255}),D(255))}}})),o=G(h,g(()=>t)),I=g(()=>u.active&&u.componentName==="CategoryModal");async function w(){if(o.value.currentCategory.$touch(),o.value.currentCategory.$invalid)return!0;const s=t.isEdit?t.updateCategory:t.addCategory;c.value=!0,await s(t.currentCategory),c.value=!1,u.refreshData&&u.refreshData(),d()}function d(){u.closeModal(),setTimeout(()=>{t.$reset(),o.value.$reset()},300)}return(s,a)=>{const v=i("BaseIcon"),x=i("BaseInput"),_=i("BaseInputGroup"),V=i("BaseTextarea"),M=i("BaseInputGrid"),$=i("BaseButton"),S=i("BaseModal");return B(),b(S,{show:e(I),onClose:d},{header:r(()=>[m("div",A,[f(C(e(u).title)+" ",1),n(v,{name:"XIcon",class:"w-6 h-6 text-gray-500 cursor-pointer",onClick:d})])]),default:r(()=>[m("form",{action:"",onSubmit:E(w,["prevent"])},[m("div",O,[n(M,{layout:"one-column"},{default:r(()=>[n(_,{label:s.$t("expenses.category"),error:e(o).currentCategory.name.$error&&e(o).currentCategory.name.$errors[0].$message,required:""},{default:r(()=>[n(x,{modelValue:e(t).currentCategory.name,"onUpdate:modelValue":a[0]||(a[0]=l=>e(t).currentCategory.name=l),invalid:e(o).currentCategory.name.$error,type:"text",onInput:a[1]||(a[1]=l=>e(o).currentCategory.name.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error"]),n(_,{label:s.$t("expenses.description"),error:e(o).currentCategory.description.$error&&e(o).currentCategory.description.$errors[0].$message},{default:r(()=>[n(V,{modelValue:e(t).currentCategory.description,"onUpdate:modelValue":a[2]||(a[2]=l=>e(t).currentCategory.description=l),rows:"4",cols:"50",onInput:a[3]||(a[3]=l=>e(o).currentCategory.description.$touch())},null,8,["modelValue"])]),_:1},8,["label","error"])]),_:1})]),m("div",P,[n($,{type:"button",variant:"primary-outline",class:"mr-3 text-sm",onClick:d},{default:r(()=>[f(C(s.$t("general.cancel")),1)]),_:1}),n($,{loading:e(c),disabled:e(c),variant:"primary",type:"submit"},{left:r(l=>[e(c)?T("",!0):(B(),b(v,{key:0,name:"SaveIcon",class:L(l.class)},null,8,["class"]))]),default:r(()=>[f(" "+C(e(t).isEdit?s.$t("general.update"):s.$t("general.save")),1)]),_:1},8,["loading","disabled"])])],40,H)]),_:1},8,["show"])}}};export{Q as _};
