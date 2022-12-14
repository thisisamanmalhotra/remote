import{C as Q,ah as Y,z as Z,B as y,a0 as ee,k as I,aR as te,r as l,o as c,l as d,w as a,f as t,u as o,m as C,i as _,t as p,j as w,q as S,ag as F,h as P}from"./vendor.4cee486b.js";import ae from"./BaseTable.8712c8ef.js";import{u as se}from"./global.0e5ae7ae.js";import{u as le}from"./estimate.301d6706.js";import{_ as oe}from"./ObservatoryIcon.1afdb2d0.js";import"./main.3742ff98.js";import"./auth.2475e761.js";const ne=P("div",{class:"hidden w-8 h-0 mx-4 border border-gray-400 border-solid xl:block",style:{"margin-top":"1.5rem"}},null,-1),re={class:"relative table-container"},be={setup(me){const{t:f}=Q();Y("utils"),Z();const E=y(null);let u=y(!1),h=y(!0);const j=y(["DRAFT","SENT","VIEWED","EXPIRED","ACCEPTED","REJECTED"]),s=ee({status:"",from_date:"",to_date:"",estimate_number:""}),v=se(),b=le(),x=I(()=>[{key:"estimate_date",label:f("estimates.date"),thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"estimate_number",label:f("estimates.number",2)},{key:"status",label:f("estimates.status")},{key:"total",label:f("estimates.total")},{key:"actions",thClass:"text-right",tdClass:"text-right text-sm font-medium",sortable:!1}]),k=I(()=>!b.totalEstimates&&!h.value);I(()=>v.currency),te(s,()=>{N()},{debounce:500});function T(){E.value.refresh()}function N(){T()}function D(){s.status="",s.from_date="",s.to_date="",s.estimate_number=""}function H(){u.value&&D(),u.value=!u.value}async function R({page:n,sort:r}){let B={status:s.status,estimate_number:s.estimate_number,from_date:s.from_date,to_date:s.to_date,orderByField:r.fieldName||"created_at",orderBy:r.order||"desc",page:n};h.value=!0;let i=await b.fetchEstimate(B,v.companySlug);return h.value=!1,{data:i.data.data,pagination:{totalPages:i.data.meta.last_page,currentPage:n,totalCount:i.data.meta.total,limit:10}}}return(n,r)=>{const B=l("BaseBreadcrumbItem"),i=l("BaseBreadcrumb"),m=l("BaseIcon"),z=l("BaseButton"),U=l("BasePageHeader"),W=l("BaseSelectInput"),g=l("BaseInputGroup"),G=l("BaseInput"),V=l("BaseDatePicker"),A=l("BaseFilterWrapper"),M=l("BaseEmptyPlaceholder"),$=l("router-link"),X=l("BaseEstimateStatusBadge"),q=l("BaseFormatMoney"),J=l("BaseDropdownItem"),O=l("BaseDropdown"),K=l("BasePage");return c(),d(K,null,{default:a(()=>[t(U,{title:n.$t("estimates.title")},{actions:a(()=>[o(b).totalEstimates?(c(),d(z,{key:0,variant:"primary-outline",onClick:H},{right:a(e=>[o(u)?(c(),d(m,{key:1,name:"XIcon",class:C(e.class)},null,8,["class"])):(c(),d(m,{key:0,name:"FilterIcon",class:C(e.class)},null,8,["class"]))]),default:a(()=>[_(p(n.$t("general.filter"))+" ",1)]),_:1})):w("",!0)]),default:a(()=>[t(i,null,{default:a(()=>[t(B,{title:n.$t("general.home"),to:`/${o(v).companySlug}/customer/dashboard`},null,8,["title","to"]),t(B,{title:n.$tc("estimates.estimate",2),to:"#",active:""},null,8,["title"])]),_:1})]),_:1},8,["title"]),S(t(A,{onClear:D},{default:a(()=>[t(g,{label:n.$t("estimates.status"),class:"px-3"},{default:a(()=>[t(W,{modelValue:o(s).status,"onUpdate:modelValue":r[0]||(r[0]=e=>o(s).status=e),options:j.value,searchable:"","show-labels":!1,"allow-empty":!1,placeholder:n.$t("general.select_a_status")},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"]),t(g,{label:n.$t("estimates.estimate_number"),color:"black-light",class:"px-3 mt-2"},{default:a(()=>[t(G,{modelValue:o(s).estimate_number,"onUpdate:modelValue":r[1]||(r[1]=e=>o(s).estimate_number=e)},{default:a(()=>[t(m,{name:"DotsHorizontalIcon",class:"h-5 text-gray-500"}),t(m,{name:"HashtagIcon",class:"h-5 mr-3 text-gray-600"})]),_:1},8,["modelValue"])]),_:1},8,["label"]),t(g,{label:n.$t("general.from"),class:"px-3"},{default:a(()=>[t(V,{modelValue:o(s).from_date,"onUpdate:modelValue":r[2]||(r[2]=e=>o(s).from_date=e),"calendar-button":!0,"calendar-button-icon":"calendar"},null,8,["modelValue"])]),_:1},8,["label"]),ne,t(g,{label:n.$t("general.to"),class:"px-3"},{default:a(()=>[t(V,{modelValue:o(s).to_date,"onUpdate:modelValue":r[3]||(r[3]=e=>o(s).to_date=e),"calendar-button":!0,"calendar-button-icon":"calendar"},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},512),[[F,o(u)]]),o(k)?(c(),d(M,{key:0,title:n.$t("estimates.no_estimates"),description:n.$t("estimates.list_of_estimates")},{default:a(()=>[t(oe,{class:"mt-5 mb-4"})]),_:1},8,["title","description"])):w("",!0),S(P("div",re,[t(ae,{ref:(e,L)=>{L.table=e,E.value=e},data:R,columns:o(x),"placeholder-count":o(b).totalEstimates>=20?10:5,class:"mt-10"},{"cell-estimate_date":a(({row:e})=>[_(p(e.data.formatted_estimate_date),1)]),"cell-estimate_number":a(({row:e})=>[t($,{to:{path:`estimates/${e.data.id}/view`},class:"font-medium text-primary-500"},{default:a(()=>[_(p(e.data.estimate_number),1)]),_:2},1032,["to"])]),"cell-status":a(({row:e})=>[t(X,{status:e.data.status,class:"px-3 py-1"},{default:a(()=>[_(p(e.data.status),1)]),_:2},1032,["status"])]),"cell-total":a(({row:e})=>[t(q,{amount:e.data.total},null,8,["amount"])]),"cell-actions":a(({row:e})=>[t(O,null,{activator:a(()=>[t(m,{name:"DotsHorizontalIcon",class:"h-5 text-gray-500"})]),default:a(()=>[t($,{to:`estimates/${e.data.id}/view`},{default:a(()=>[t(J,null,{default:a(()=>[t(m,{name:"EyeIcon",class:"h-5 mr-3 text-gray-600"}),_(" "+p(n.$t("general.view")),1)]),_:1})]),_:2},1032,["to"])]),_:2},1024)]),_:1},8,["columns","placeholder-count"])],512),[[F,!o(k)]])]),_:1})}}};export{be as default};
