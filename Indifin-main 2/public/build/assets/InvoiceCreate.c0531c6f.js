var K=Object.defineProperty,Q=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var q=(t,e,i)=>e in t?K(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,L=(t,e)=>{for(var i in e||(e={}))X.call(e,i)&&q(t,i,e[i]);if(j)for(var i of j(e))Z.call(e,i)&&q(t,i,e[i]);return t},P=(t,e)=>Q(t,W(e));import{r as l,o as d,e as x,f as o,u as n,w as c,C as ee,z as ne,aN as te,B as C,k as I,E as p,H as y,N as oe,J as ie,aP as ae,O as se,Y as le,l as b,j as k,h as $,t as T,m as ce,i as re,P as ue,F as de}from"./vendor.4cee486b.js";import{i as M,b as me,m as ve,r as ge}from"./main.3742ff98.js";import{_ as pe,a as fe,b as _e,c as Ie,d as be,e as we,f as ye}from"./SalesTax.86713c98.js";import{_ as $e}from"./ExchangeRateConverter.28c3f96d.js";import{_ as Be}from"./CreateCustomFields.1a79feee.js";import{_ as he}from"./TaxTypeModal.1488dff2.js";import"./DragIcon.1afbe320.js";import"./SelectNotePopup.63e388c1.js";import"./NoteModal.e11b2222.js";import"./payment.64e394c0.js";import"./exchange-rate.ec168c0b.js";const Se={class:"grid grid-cols-12 gap-8 mt-6 mb-8"},Ce={props:{v:{type:Object,default:null},isLoading:{type:Boolean,default:!1},isEdit:{type:Boolean,default:!1}},setup(t){const e=M();return(i,r)=>{const B=l("BaseCustomerSelectPopup"),u=l("BaseDatePicker"),m=l("BaseInputGroup"),h=l("BaseInput"),f=l("BaseInputGrid");return d(),x("div",Se,[o(B,{modelValue:n(e).newInvoice.customer,"onUpdate:modelValue":r[0]||(r[0]=a=>n(e).newInvoice.customer=a),valid:t.v.customer_id,"content-loading":t.isLoading,type:"invoice",class:"col-span-12 lg:col-span-5 pr-0"},null,8,["modelValue","valid","content-loading"]),o(f,{class:"col-span-12 lg:col-span-7"},{default:c(()=>[o(m,{label:i.$t("invoices.invoice_date"),"content-loading":t.isLoading,required:"",error:t.v.invoice_date.$error&&t.v.invoice_date.$errors[0].$message},{default:c(()=>[o(u,{modelValue:n(e).newInvoice.invoice_date,"onUpdate:modelValue":r[1]||(r[1]=a=>n(e).newInvoice.invoice_date=a),"content-loading":t.isLoading,"calendar-button":!0,"calendar-button-icon":"calendar"},null,8,["modelValue","content-loading"])]),_:1},8,["label","content-loading","error"]),o(m,{label:i.$t("invoices.due_date"),"content-loading":t.isLoading},{default:c(()=>[o(u,{modelValue:n(e).newInvoice.due_date,"onUpdate:modelValue":r[2]||(r[2]=a=>n(e).newInvoice.due_date=a),"content-loading":t.isLoading,"calendar-button":!0,"calendar-button-icon":"calendar"},null,8,["modelValue","content-loading"])]),_:1},8,["label","content-loading"]),o(m,{label:i.$t("invoices.invoice_number"),"content-loading":t.isLoading,error:t.v.invoice_number.$error&&t.v.invoice_number.$errors[0].$message,required:""},{default:c(()=>[o(h,{modelValue:n(e).newInvoice.invoice_number,"onUpdate:modelValue":r[3]||(r[3]=a=>n(e).newInvoice.invoice_number=a),"content-loading":t.isLoading,onInput:r[4]||(r[4]=a=>t.v.invoice_number.$touch())},null,8,["modelValue","content-loading"])]),_:1},8,["label","content-loading","error"]),o($e,{store:n(e),"store-prop":"newInvoice",v:t.v,"is-loading":t.isLoading,"is-edit":t.isEdit,"customer-currency":n(e).newInvoice.currency_id},null,8,["store","v","is-loading","is-edit","customer-currency"])]),_:1})])}}},ke=["onSubmit"],Ve={class:"flex"},je={class:"block mt-10 invoice-foot lg:flex lg:justify-between lg:items-start"},qe={class:"relative w-full lg:w-1/2 lg:mr-4"},He={setup(t){const e=M(),i=me(),r=ve(),B=ge(),{t:u}=ee();let m=ne(),h=te();const f="newInvoice";let a=C(!1);const E=C(!1),F=C(["customer","company","customerCustom","invoice","invoiceCustom"]);let _=I(()=>e.isFetchingInvoice||e.isFetchingInitialSettings),N=I(()=>v.value?u("invoices.edit_invoice"):u("invoices.new_invoice"));const D=I(()=>i.selectedCompanySettings.sales_tax_us_enabled==="YES"&&B.salesTaxUSEnabled);let v=I(()=>m.name==="invoices.edit");const U={invoice_date:{required:p.withMessage(u("validation.required"),y)},reference_number:{maxLength:p.withMessage(u("validation.price_maxlength"),oe(255))},customer_id:{required:p.withMessage(u("validation.required"),y)},invoice_number:{required:p.withMessage(u("validation.required"),y)},exchange_rate:{required:ie(function(){return p.withMessage(u("validation.required"),y),e.showExchangeRate}),decimal:p.withMessage(u("validation.valid_exchange_rate"),ae)}},w=se(U,I(()=>e.newInvoice),{$scope:f});r.resetCustomFields(),w.value.$reset,e.resetCurrentInvoice(),e.fetchInvoiceInitialSettings(v.value),le(()=>e.newInvoice.customer,s=>{s&&s.currency?e.newInvoice.selectedCurrency=s.currency:e.newInvoice.selectedCurrency=i.selectedCompanyCurrency});async function G(){if(w.value.$touch(),w.value.$invalid)return!1;a.value=!0;let s=P(L({},e.newInvoice),{sub_total:e.getSubTotal,total:e.getTotal,tax:e.getTotalTax});try{const g=await(v.value?e.updateInvoice:e.addInvoice)(s);h.push(`/admin/invoices/${g.data.data.id}/view`)}catch(S){console.error(S)}a.value=!1}return(s,S)=>{const g=l("BaseBreadcrumbItem"),R=l("BaseBreadcrumb"),V=l("BaseButton"),H=l("router-link"),z=l("BaseIcon"),O=l("BasePageHeader"),Y=l("BaseScrollPane"),A=l("BasePage");return d(),x(de,null,[o(pe),o(fe),o(he),n(D)&&(!n(_)||n(m).query.customer)?(d(),b(_e,{key:0,store:n(e),"is-edit":n(v),"store-prop":"newInvoice",customer:n(e).newInvoice.customer},null,8,["store","is-edit","customer"])):k("",!0),o(A,{class:"relative invoice-create-page"},{default:c(()=>[$("form",{onSubmit:ue(G,["prevent"])},[o(O,{title:n(N)},{actions:c(()=>[s.$route.name==="invoices.edit"?(d(),b(H,{key:0,to:`/invoices/pdf/${n(e).newInvoice.unique_hash}`,target:"_blank"},{default:c(()=>[o(V,{class:"mr-3",variant:"primary-outline",type:"button"},{default:c(()=>[$("span",Ve,T(s.$t("general.view_pdf")),1)]),_:1})]),_:1},8,["to"])):k("",!0),o(V,{loading:n(a),disabled:n(a),variant:"primary",type:"submit"},{left:c(J=>[n(a)?k("",!0):(d(),b(z,{key:0,name:"SaveIcon",class:ce(J.class)},null,8,["class"]))]),default:c(()=>[re(" "+T(s.$t("invoices.save_invoice")),1)]),_:1},8,["loading","disabled"])]),default:c(()=>[o(R,null,{default:c(()=>[o(g,{title:s.$t("general.home"),to:"/admin/dashboard"},null,8,["title"]),o(g,{title:s.$tc("invoices.invoice",2),to:"/admin/invoices"},null,8,["title"]),s.$route.name==="invoices.edit"?(d(),b(g,{key:0,title:s.$t("invoices.edit_invoice"),to:"#",active:""},null,8,["title"])):(d(),b(g,{key:1,title:s.$t("invoices.new_invoice"),to:"#",active:""},null,8,["title"]))]),_:1})]),_:1},8,["title"]),o(Ce,{v:n(w),"is-loading":n(_),"is-edit":n(v)},null,8,["v","is-loading","is-edit"]),o(Y,null,{default:c(()=>[o(Ie,{currency:n(e).newInvoice.selectedCurrency,"is-loading":n(_),"item-validation-scope":f,store:n(e),"store-prop":"newInvoice"},null,8,["currency","is-loading","store"]),$("div",je,[$("div",qe,[o(be,{store:n(e),"store-prop":"newInvoice",fields:F.value,type:"Invoice"},null,8,["store","fields"]),o(Be,{type:"Invoice","is-edit":n(v),"is-loading":n(_),store:n(e),"store-prop":"newInvoice","custom-field-scope":f,class:"mb-6"},null,8,["is-edit","is-loading","store"]),o(we,{store:n(e),"store-prop":"newInvoice","component-name":"InvoiceTemplate","is-mark-as-default":E.value},null,8,["store","is-mark-as-default"])]),o(ye,{currency:n(e).newInvoice.selectedCurrency,"is-loading":n(_),store:n(e),"store-prop":"newInvoice","tax-popup-type":"invoice"},null,8,["currency","is-loading","store"])])]),_:1})],40,ke)]),_:1})],64)}}};export{He as default};
