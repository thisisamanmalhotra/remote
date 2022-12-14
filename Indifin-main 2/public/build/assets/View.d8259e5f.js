var ne=Object.defineProperty,oe=Object.defineProperties;var le=Object.getOwnPropertyDescriptors;var X=Object.getOwnPropertySymbols;var re=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var G=(k,u,t)=>u in k?ne(k,u,{enumerable:!0,configurable:!0,writable:!0,value:t}):k[u]=t,q=(k,u)=>{for(var t in u||(u={}))re.call(u,t)&&G(k,t,u[t]);if(X)for(var t of X(u))ce.call(u,t)&&G(k,t,u[t]);return k},J=(k,u)=>oe(k,le(u));import{z as O,C as K,B as F,a0 as R,X as ie,k as I,r as d,o as n,e as B,h as l,f as s,w as o,u as e,t as v,l as _,F as Q,y as W,j as h,m as Z,i as A,ah as ee,Y as de,x as ue,aN as me}from"./vendor.4cee486b.js";import{l as M,_ as _e,b as pe,j as fe,e as he,g as S}from"./main.3742ff98.js";import{L as ye}from"./LoadingIcon.4543ad65.js";import{_ as ge}from"./LineChart.a2ca0963.js";import{_ as xe}from"./CustomerIndexDropdown.f01f9f67.js";const be={class:"fixed top-0 left-0 hidden h-full pt-16 pb-[6.6rem] ml-56 bg-white xl:ml-64 w-88 xl:block"},ve={class:"flex items-center justify-between px-4 pt-8 pb-2 border border-gray-200 border-solid height-full"},Be={class:"flex mb-6 ml-3",role:"group","aria-label":"First group"},$e={class:"px-4 py-3 pb-2 mb-2 text-sm border-b border-gray-200 border-solid"},we={class:"px-2"},Ce={class:"px-2"},Te={class:"flex-1 font-bold text-right whitespace-nowrap"},ke={key:0,class:"flex justify-center p-4 items-center"},Ee={key:1,class:"flex justify-center px-4 mt-5 text-sm text-gray-600"},Ie={setup(k){const u=M(),t=O(),{t:m}=K();let r=F(!1),a=R({orderBy:null,orderByField:null,searchText:null});const p=F(null),g=F(1),x=F(1),D=F(null);i=ie.exports.debounce(i,500);const y=I(()=>a.orderBy==="asc"||a.orderBy==null);I(()=>y.value?m("general.ascending"):m("general.descending"));function $(c){return t.params.id==c}async function b(c,C=!1){if(r.value)return;let T={};a.searchText!==""&&a.searchText!==null&&a.searchText!==void 0&&(T.display_name=a.searchText),a.orderBy!==null&&a.orderBy!==void 0&&(T.orderBy=a.orderBy),a.orderByField!==null&&a.orderByField!==void 0&&(T.orderByField=a.orderByField),r.value=!0;let P=await u.fetchCustomers(J(q({page:c},T),{limit:15}));r.value=!1,p.value=p.value?p.value:[],p.value=[...p.value,...P.data.data],g.value=c||1,x.value=P.data.meta.last_page;let V=p.value.find(L=>L.id==t.params.id);C==!1&&!V&&g.value<x.value&&Object.keys(T).length===0&&b(++g.value),V&&setTimeout(()=>{C==!1&&w()},500)}function w(){const c=document.getElementById(`customer-${t.params.id}`);c&&(c.scrollIntoView({behavior:"smooth"}),c.classList.add("shake"),j())}function j(){D.value.addEventListener("scroll",c=>{c.target.scrollTop>0&&c.target.scrollTop+c.target.clientHeight>c.target.scrollHeight-200&&g.value<x.value&&b(++g.value,!0)})}async function i(){p.value=[],b()}function E(){return a.orderBy==="asc"?(a.orderBy="desc",i(),!0):(a.orderBy="asc",i(),!0)}return b(),(c,C)=>{var Y;const T=d("BaseIcon"),P=d("BaseInput"),V=d("BaseButton"),L=d("BaseRadio"),U=d("BaseInputGroup"),z=d("BaseDropdownItem"),te=d("BaseDropdown"),H=d("BaseText"),se=d("BaseFormatMoney"),ae=d("router-link");return n(),B("div",be,[l("div",ve,[s(P,{modelValue:e(a).searchText,"onUpdate:modelValue":C[0]||(C[0]=f=>e(a).searchText=f),placeholder:c.$t("general.search"),"container-class":"mb-6",type:"text",variant:"gray",onInput:C[1]||(C[1]=f=>i())},{default:o(()=>[s(T,{name:"SearchIcon",class:"text-gray-500"})]),_:1},8,["modelValue","placeholder"]),l("div",Be,[s(te,{"close-on-select":!1,position:"bottom-start","width-class":"w-40","position-class":"left-0"},{activator:o(()=>[s(V,{variant:"gray"},{default:o(()=>[s(T,{name:"FilterIcon"})]),_:1})]),default:o(()=>[l("div",$e,v(c.$t("general.sort_by")),1),l("div",we,[s(z,{class:"flex px-1 py-2 mt-1 cursor-pointer hover:rounded-md"},{default:o(()=>[s(U,{class:"pt-2 -mt-4"},{default:o(()=>[s(L,{id:"filter_create_date",modelValue:e(a).orderByField,"onUpdate:modelValue":[C[2]||(C[2]=f=>e(a).orderByField=f),i],label:c.$t("customers.create_date"),size:"sm",name:"filter",value:"invoices.created_at"},null,8,["modelValue","label"])]),_:1})]),_:1})]),l("div",Ce,[s(z,{class:"flex px-1 cursor-pointer hover:rounded-md"},{default:o(()=>[s(U,{class:"pt-2 -mt-4"},{default:o(()=>[s(L,{id:"filter_display_name",modelValue:e(a).orderByField,"onUpdate:modelValue":[C[3]||(C[3]=f=>e(a).orderByField=f),i],label:c.$t("customers.display_name"),size:"sm",name:"filter",value:"name"},null,8,["modelValue","label"])]),_:1})]),_:1})])]),_:1}),s(V,{class:"ml-1",size:"md",variant:"gray",onClick:E},{default:o(()=>[e(y)?(n(),_(T,{key:0,name:"SortAscendingIcon"})):(n(),_(T,{key:1,name:"SortDescendingIcon"}))]),_:1})])]),l("div",{ref:(f,N)=>{N.customerListSection=f,D.value=f},class:"h-full overflow-y-scroll border-l border-gray-200 border-solid sidebar base-scroll"},[(n(!0),B(Q,null,W(p.value,(f,N)=>(n(),B("div",{key:N},[f?(n(),_(ae,{key:0,id:"customer-"+f.id,to:`/admin/customers/${f.id}/view`,class:Z(["flex justify-between p-4 items-center cursor-pointer hover:bg-gray-100 border-l-4 border-transparent",{"bg-gray-100 border-l-4 border-primary-500 border-solid":$(f.id)}]),style:{"border-top":"1px solid rgba(185, 193, 209, 0.41)"}},{default:o(()=>[l("div",null,[s(H,{text:f.name,length:30,class:"pr-2 text-sm not-italic font-normal leading-5 text-black capitalize truncate"},null,8,["text"]),f.contact_name?(n(),_(H,{key:0,text:f.contact_name,length:30,class:"mt-1 text-xs not-italic font-medium leading-5 text-gray-600"},null,8,["text"])):h("",!0)]),l("div",Te,[s(se,{amount:f.due_amount!==null?f.due_amount:0,currency:f.currency},null,8,["amount","currency"])])]),_:2},1032,["id","to","class"])):h("",!0)]))),128)),e(r)?(n(),B("div",ke,[s(ye,{class:"h-6 m-1 animate-spin text-primary-400"})])):h("",!0),!((Y=p.value)==null?void 0:Y.length)&&!e(r)?(n(),B("p",Ee,v(c.$t("customers.no_matching_customers")),1)):h("",!0)],512)])}}},De={class:"pt-6 mt-5 border-t border-solid lg:pt-8 md:pt-4 border-gray-200"},je={key:0,class:"text-sm font-bold leading-5 text-black non-italic"},Se={key:0},Ae={key:1},Ve={key:1,class:"text-sm font-bold leading-5 text-black non-italic"},Fe={setup(k){const u=M(),t=I(()=>u.selectedViewCustomer),m=I(()=>u.isFetchingViewData),r=I(()=>{var a,p;return((a=t==null?void 0:t.value)==null?void 0:a.fields)?(p=t==null?void 0:t.value)==null?void 0:p.fields:[]});return(a,p)=>{const g=d("BaseHeading"),x=d("BaseDescriptionListItem"),D=d("BaseDescriptionList"),y=d("BaseCustomerAddressDisplay");return n(),B("div",De,[s(g,null,{default:o(()=>[A(v(a.$t("customers.basic_info")),1)]),_:1}),s(D,null,{default:o(()=>{var $,b,w;return[s(x,{"content-loading":e(m),label:a.$t("customers.display_name"),value:($=e(t))==null?void 0:$.name},null,8,["content-loading","label","value"]),s(x,{"content-loading":e(m),label:a.$t("customers.primary_contact_name"),value:(b=e(t))==null?void 0:b.contact_name},null,8,["content-loading","label","value"]),s(x,{"content-loading":e(m),label:a.$t("customers.email"),value:(w=e(t))==null?void 0:w.email},null,8,["content-loading","label","value"])]}),_:1}),s(D,{class:"mt-5"},{default:o(()=>{var $,b,w,j,i,E,c;return[s(x,{"content-loading":e(m),label:a.$t("wizard.currency"),value:(($=e(t))==null?void 0:$.currency)?`${(w=(b=e(t))==null?void 0:b.currency)==null?void 0:w.code} (${(i=(j=e(t))==null?void 0:j.currency)==null?void 0:i.symbol})`:""},null,8,["content-loading","label","value"]),s(x,{"content-loading":e(m),label:a.$t("customers.phone_number"),value:(E=e(t))==null?void 0:E.phone},null,8,["content-loading","label","value"]),s(x,{"content-loading":e(m),label:a.$t("customers.website"),value:(c=e(t))==null?void 0:c.website},null,8,["content-loading","label","value"])]}),_:1}),e(t).billing||e(t).shipping?(n(),_(g,{key:0,class:"mt-8"},{default:o(()=>[A(v(a.$t("customers.address")),1)]),_:1})):h("",!0),s(D,{class:"mt-5"},{default:o(()=>[e(t).billing?(n(),_(x,{key:0,"content-loading":e(m),label:a.$t("customers.billing_address")},{default:o(()=>[s(y,{address:e(t).billing},null,8,["address"])]),_:1},8,["content-loading","label"])):h("",!0),e(t).shipping?(n(),_(x,{key:1,"content-loading":e(m),label:a.$t("customers.shipping_address")},{default:o(()=>[s(y,{address:e(t).shipping},null,8,["address"])]),_:1},8,["content-loading","label"])):h("",!0)]),_:1}),e(r).length>0?(n(),_(g,{key:1,class:"mt-8"},{default:o(()=>[A(v(a.$t("settings.custom_fields.title")),1)]),_:1})):h("",!0),s(D,{class:"mt-5"},{default:o(()=>[(n(!0),B(Q,null,W(e(r),($,b)=>(n(),_(x,{key:b,"content-loading":e(m),label:$.custom_field.label},{default:o(()=>[$.type==="Switch"?(n(),B("p",je,[$.default_answer===1?(n(),B("span",Se," Yes ")):(n(),B("span",Ae," No "))])):(n(),B("p",Ve,v($.default_answer),1))]),_:2},1032,["content-loading","label"]))),128))]),_:1})])}}},Pe={},Le={class:"col-span-12 xl:col-span-9 xxl:col-span-10"},Re={class:"flex justify-between mt-1 mb-6"},Me={class:"grid col-span-12 mt-6 text-center xl:mt-0 sm:grid-cols-4 xl:text-right xl:col-span-3 xl:grid-cols-1 xxl:col-span-2"},Ne={class:"flex flex-col items-center justify-center px-6 py-2 lg:justify-end lg:items-end"},Oe={class:"flex flex-col items-center justify-center px-6 py-2 lg:justify-end lg:items-end"},Ue={class:"flex flex-col items-center justify-center px-6 py-2 lg:justify-end lg:items-end"},ze={class:"flex flex-col items-center justify-center px-6 py-2 lg:justify-end lg:items-end"};function He(k,u){const t=d("BaseContentPlaceholdersText"),m=d("BaseContentPlaceholdersBox"),r=d("BaseContentPlaceholders");return n(),_(r,{class:"grid grid-cols-12"},{default:o(()=>[l("div",Le,[l("div",Re,[s(t,{class:"h-10 w-36",lines:1}),s(t,{class:"h-10 w-40 !mt-0",lines:1})]),s(m,{class:"h-80 xl:h-72 sm:w-full"})]),l("div",Me,[l("div",Ne,[s(t,{class:"h-3 w-14 xl:h-4",lines:1}),s(t,{class:"w-20 h-5 xl:h-6",lines:1})]),l("div",Oe,[s(t,{class:"h-3 w-14 xl:h-4",lines:1}),s(t,{class:"w-20 h-5 xl:h-6",lines:1})]),l("div",Ue,[s(t,{class:"h-3 w-14 xl:h-4",lines:1}),s(t,{class:"w-20 h-5 xl:h-6",lines:1})]),l("div",ze,[s(t,{class:"h-3 w-14 xl:h-4",lines:1}),s(t,{class:"w-20 h-5 xl:h-6",lines:1})])])]),_:1})}var Ye=_e(Pe,[["render",He]]);const Xe={key:1,class:"grid grid-cols-12"},Ge={class:"col-span-12 xl:col-span-9 xxl:col-span-10"},qe={class:"flex justify-between mt-1 mb-6"},Je={class:"flex items-center"},Ke={class:"w-40 h-10"},Qe={class:"grid col-span-12 mt-6 text-center xl:mt-0 sm:grid-cols-4 xl:text-right xl:col-span-3 xl:grid-cols-1 xxl:col-span-2"},We={class:"px-6 py-2"},Ze={class:"text-xs leading-5 lg:text-sm"},et=l("br",null,null,-1),tt={key:0,class:"block mt-1 text-xl font-semibold leading-8"},st={class:"px-6 py-2"},at={class:"text-xs leading-5 lg:text-sm"},nt=l("br",null,null,-1),ot={key:0,class:"block mt-1 text-xl font-semibold leading-8",style:{color:"#00c99c"}},lt={class:"px-6 py-2"},rt={class:"text-xs leading-5 lg:text-sm"},ct=l("br",null,null,-1),it={key:0,class:"block mt-1 text-xl font-semibold leading-8",style:{color:"#fb7178"}},dt={class:"px-6 py-2"},ut={class:"text-xs leading-5 lg:text-sm"},mt=l("br",null,null,-1),_t={key:0,class:"block mt-1 text-xl font-semibold leading-8",style:{color:"#5851d8"}},pt={setup(k){pe();const u=M();ee("utils");const t=O();let m=F(!1),r=R({}),a=R({}),p=R(["This year","Previous year"]),g=F("This year");const x=I(()=>r.expenseTotals?r.expenseTotals:[]),D=I(()=>r.netProfits?r.netProfits:[]),y=I(()=>r&&r.months?r.months:[]),$=I(()=>r.receiptTotals?r.receiptTotals:[]),b=I(()=>r.invoiceTotals?r.invoiceTotals:[]);de(t,()=>{t.params.id&&w(),g.value="This year"},{immediate:!0});async function w(){m.value=!1;let i=await u.fetchViewCustomer({id:t.params.id});i.data&&(Object.assign(r,i.data.meta.chartData),Object.assign(a,i.data.data)),m.value=!0}async function j(i){let E={id:t.params.id};i==="Previous year"?E.previous_year=!0:E.this_year=!0;let c=await u.fetchViewCustomer(E);return c.data.meta.chartData&&Object.assign(r,c.data.meta.chartData),!0}return(i,E)=>{const c=d("BaseIcon"),C=d("BaseMultiselect"),T=d("BaseFormatMoney"),P=d("BaseCard");return n(),_(P,{class:"flex flex-col mt-6"},{default:o(()=>[e(u).isFetchingViewData?(n(),_(Ye,{key:0})):(n(),B("div",Xe,[l("div",Ge,[l("div",qe,[l("h6",Je,[s(c,{name:"ChartSquareBarIcon",class:"h-5 text-primary-400"}),A(" "+v(i.$t("dashboard.monthly_chart.title")),1)]),l("div",Ke,[s(C,{modelValue:e(g),"onUpdate:modelValue":E[0]||(E[0]=V=>ue(g)?g.value=V:g=V),options:e(p),"allow-empty":!1,"show-labels":!1,placeholder:i.$t("dashboard.select_year"),"can-deselect":!1,onSelect:j},null,8,["modelValue","options","placeholder"])])]),e(m)?(n(),_(ge,{key:0,invoices:e(b),expenses:e(x),receipts:e($),income:e(D),labels:e(y),class:"sm:w-full"},null,8,["invoices","expenses","receipts","income","labels"])):h("",!0)]),l("div",Qe,[l("div",We,[l("span",Ze,v(i.$t("dashboard.chart_info.total_sales")),1),et,e(m)?(n(),B("span",tt,[s(T,{amount:e(r).salesTotal,currency:e(a).currency},null,8,["amount","currency"])])):h("",!0)]),l("div",st,[l("span",at,v(i.$t("dashboard.chart_info.total_receipts")),1),nt,e(m)?(n(),B("span",ot,[s(T,{amount:e(r).totalExpenses,currency:e(a).currency},null,8,["amount","currency"])])):h("",!0)]),l("div",lt,[l("span",rt,v(i.$t("dashboard.chart_info.total_expense")),1),ct,e(m)?(n(),B("span",it,[s(T,{amount:e(r).totalExpenses,currency:e(a).currency},null,8,["amount","currency"])])):h("",!0)]),l("div",dt,[l("span",ut,v(i.$t("dashboard.chart_info.net_income")),1),mt,e(m)?(n(),B("span",_t,[s(T,{amount:e(r).netProfit,currency:e(a).currency},null,8,["amount","currency"])])):h("",!0)])])])),s(Fe)]),_:1})}}},vt={setup(k){ee("utils"),fe();const u=M(),t=he();K();const m=me(),r=O();F(null);const a=I(()=>u.selectedViewCustomer.customer?u.selectedViewCustomer.customer.name:"");let p=I(()=>u.isFetchingViewData);function g(){return t.hasAbilities([S.CREATE_ESTIMATE,S.CREATE_INVOICE,S.CREATE_PAYMENT,S.CREATE_EXPENSE])}function x(){return t.hasAbilities([S.DELETE_CUSTOMER,S.EDIT_CUSTOMER])}function D(){m.push("/admin/customers")}return(y,$)=>{const b=d("BaseButton"),w=d("router-link"),j=d("BaseIcon"),i=d("BaseDropdownItem"),E=d("BaseDropdown"),c=d("BasePageHeader"),C=d("BasePage");return n(),_(C,{class:"xl:pl-96"},{default:o(()=>[s(c,{title:e(a)},{actions:o(()=>[e(t).hasAbilities(e(S).EDIT_CUSTOMER)?(n(),_(w,{key:0,to:`/admin/customers/${e(r).params.id}/edit`},{default:o(()=>[s(b,{class:"mr-3",variant:"primary-outline","content-loading":e(p)},{default:o(()=>[A(v(y.$t("general.edit")),1)]),_:1},8,["content-loading"])]),_:1},8,["to"])):h("",!0),g()?(n(),_(E,{key:1,position:"bottom-end","content-loading":e(p)},{activator:o(()=>[s(b,{class:"mr-3",variant:"primary","content-loading":e(p)},{default:o(()=>[A(v(y.$t("customers.new_transaction")),1)]),_:1},8,["content-loading"])]),default:o(()=>[e(t).hasAbilities(e(S).CREATE_ESTIMATE)?(n(),_(w,{key:0,to:`/admin/estimates/create?customer=${y.$route.params.id}`},{default:o(()=>[s(i,{class:""},{default:o(()=>[s(j,{name:"DocumentIcon",class:"mr-3 text-gray-600"}),A(" "+v(y.$t("estimates.new_estimate")),1)]),_:1})]),_:1},8,["to"])):h("",!0),e(t).hasAbilities(e(S).CREATE_INVOICE)?(n(),_(w,{key:1,to:`/admin/invoices/create?customer=${y.$route.params.id}`},{default:o(()=>[s(i,null,{default:o(()=>[s(j,{name:"DocumentTextIcon",class:"mr-3 text-gray-600"}),A(" "+v(y.$t("invoices.new_invoice")),1)]),_:1})]),_:1},8,["to"])):h("",!0),e(t).hasAbilities(e(S).CREATE_PAYMENT)?(n(),_(w,{key:2,to:`/admin/payments/create?customer=${y.$route.params.id}`},{default:o(()=>[s(i,null,{default:o(()=>[s(j,{name:"CreditCardIcon",class:"mr-3 text-gray-600"}),A(" "+v(y.$t("payments.new_payment")),1)]),_:1})]),_:1},8,["to"])):h("",!0),e(t).hasAbilities(e(S).CREATE_EXPENSE)?(n(),_(w,{key:3,to:`/admin/expenses/create?customer=${y.$route.params.id}`},{default:o(()=>[s(i,null,{default:o(()=>[s(j,{name:"CalculatorIcon",class:"mr-3 text-gray-600"}),A(" "+v(y.$t("expenses.new_expense")),1)]),_:1})]),_:1},8,["to"])):h("",!0)]),_:1},8,["content-loading"])):h("",!0),x()?(n(),_(xe,{key:2,class:Z({"ml-3":e(p)}),row:e(u).selectedViewCustomer,"load-data":D},null,8,["class","row"])):h("",!0)]),_:1},8,["title"]),s(Ie),s(pt)]),_:1})}}};export{vt as default};
