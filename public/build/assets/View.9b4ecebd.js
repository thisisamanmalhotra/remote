var ce=Object.defineProperty;var O=Object.getOwnPropertySymbols;var me=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable;var q=(_,c,i)=>c in _?ce(_,c,{enumerable:!0,configurable:!0,writable:!0,value:i}):_[c]=i,z=(_,c)=>{for(var i in c||(c={}))me.call(c,i)&&q(_,i,c[i]);if(O)for(var i of O(c))fe.call(c,i)&&q(_,i,c[i]);return _};import{C as pe,B as y,z as _e,aN as ve,a0 as ye,k as w,Y as ge,X as be,r as d,o as f,e as T,f as s,l as x,w as l,h as u,u as n,i as C,t as h,j as B,F as X,y as he,m as xe}from"./vendor.4cee486b.js";import{c as Be,k as ke,j as Se,e as Ee,g as Y}from"./main.3742ff98.js";import{_ as we}from"./EstimateIndexDropdown.6314b3a6.js";import{_ as Te}from"./SendEstimateModal.1926ea37.js";import{L as Ie}from"./LoadingIcon.4543ad65.js";import"./mail-driver.8c4f24bc.js";const Fe={class:"mr-3 text-sm"},Ve={class:"fixed top-0 left-0 hidden h-full pt-16 pb-[6.4rem] ml-56 bg-white xl:ml-64 w-88 xl:block"},De={class:"flex items-center justify-between px-4 pt-8 pb-2 border border-gray-200 border-solid height-full"},$e={class:"mb-6"},Le={class:"flex mb-6 ml-3",role:"group","aria-label":"First group"},je={class:"px-4 py-1 pb-2 mb-1 mb-2 text-sm border-b border-gray-200 border-solid"},Ne={class:"flex-2"},Ae={class:"mt-1 mb-2 text-xs not-italic font-medium leading-5 text-gray-600"},Me={class:"flex-1 whitespace-nowrap right"},ze={class:"text-sm not-italic font-normal leading-5 text-right text-gray-600 est-date"},Ce={key:0,class:"flex justify-center p-4 items-center"},Ue={key:1,class:"flex justify-center px-4 mt-5 text-sm text-gray-600"},Pe={class:"flex flex-col min-h-0 mt-8 overflow-hidden",style:{height:"75vh"}},Re=["src"],Ke={setup(_){const c=Be(),i=ke(),J=Se(),U=Ee(),{t:g}=pe(),r=y(null),k=_e();ve();const I=y(!1),S=y(!1),F=y(!1),m=y(null),E=y(1),$=y(1),P=y(null),t=ye({orderBy:null,orderByField:null,searchText:null}),K=w(()=>r.value.estimate_number),R=w(()=>t.orderBy==="asc"||t.orderBy==null);w(()=>R.value?g("general.ascending"):g("general.descending"));const Q=w(()=>`/estimates/pdf/${r.value.unique_hash}`);w(()=>r.value&&r.value.id?estimate.value.id:null),ge(k,(e,o)=>{e.name==="estimates.view"&&H()}),V(),H(),v=be.exports.debounce(v,500);function W(e){return k.params.id==e}async function V(e,o=!1){if(S.value)return;let p={};t.searchText!==""&&t.searchText!==null&&t.searchText!==void 0&&(p.search=t.searchText),t.orderBy!==null&&t.orderBy!==void 0&&(p.orderBy=t.orderBy),t.orderByField!==null&&t.orderByField!==void 0&&(p.orderByField=t.orderByField),S.value=!0;let D=await i.fetchEstimates(z({page:e},p));S.value=!1,m.value=m.value?m.value:[],m.value=[...m.value,...D.data.data],E.value=e||1,$.value=D.data.meta.last_page;let b=m.value.find(L=>L.id==k.params.id);o==!1&&!b&&E.value<$.value&&Object.keys(p).length===0&&V(++E.value),b&&setTimeout(()=>{o==!1&&Z()},500)}function Z(){const e=document.getElementById(`estimate-${k.params.id}`);e&&(e.scrollIntoView({behavior:"smooth"}),e.classList.add("shake"),ee())}function ee(){P.value.addEventListener("scroll",e=>{e.target.scrollTop>0&&e.target.scrollTop+e.target.clientHeight>e.target.scrollHeight-200&&E.value<$.value&&V(++E.value,!0)})}async function H(){F.value=!0;let e=await i.fetchEstimate(k.params.id);e.data&&(F.value=!1,r.value=z({},e.data.data))}async function v(){m.value=[],V()}function te(){return t.orderBy==="asc"?(t.orderBy="desc",v(),!0):(t.orderBy="asc",v(),!0)}async function ae(){J.openDialog({title:g("general.are_you_sure"),message:g("estimates.confirm_mark_as_sent"),yesLabel:g("general.ok"),noLabel:g("general.cancel"),variant:"primary",hideNoButton:!1,size:"lg"}).then(e=>{I.value=!1,e&&(i.markAsSent({id:r.value.id,status:"SENT"}),r.value.status="SENT",I.value=!0),I.value=!1})}async function se(e){c.openModal({title:g("estimates.send_estimate"),componentName:"SendEstimateModal",id:r.value.id,data:r.value})}function le(){let e=m.value.findIndex(o=>o.id===r.value.id);m.value[e]&&(m.value[e].status="SENT",r.value.status="SENT")}return(e,o)=>{const p=d("BaseButton"),D=d("BasePageHeader"),b=d("BaseIcon"),L=d("BaseInput"),j=d("BaseRadio"),N=d("BaseInputGroup"),A=d("BaseDropdownItem"),oe=d("BaseDropdown"),re=d("BaseText"),ne=d("BaseEstimateStatusBadge"),ie=d("BaseFormatMoney"),de=d("router-link"),ue=d("BasePage");return f(),T(X,null,[s(Te,{onUpdate:le}),r.value?(f(),x(ue,{key:0,class:"xl:pl-96 xl:ml-8"},{default:l(()=>{var G;return[s(D,{title:n(K)},{actions:l(()=>[u("div",Fe,[r.value.status==="DRAFT"&&n(U).hasAbilities(n(Y).EDIT_ESTIMATE)?(f(),x(p,{key:0,disabled:I.value,"content-loading":F.value,variant:"primary-outline",onClick:ae},{default:l(()=>[C(h(e.$t("estimates.mark_as_sent")),1)]),_:1},8,["disabled","content-loading"])):B("",!0)]),r.value.status==="DRAFT"&&n(U).hasAbilities(n(Y).SEND_ESTIMATE)?(f(),x(p,{key:0,"content-loading":F.value,variant:"primary",class:"text-sm",onClick:se},{default:l(()=>[C(h(e.$t("estimates.send_estimate")),1)]),_:1},8,["content-loading"])):B("",!0),s(we,{class:"ml-3",row:r.value},null,8,["row"])]),_:1},8,["title"]),u("div",Ve,[u("div",De,[u("div",$e,[s(L,{modelValue:n(t).searchText,"onUpdate:modelValue":o[0]||(o[0]=a=>n(t).searchText=a),placeholder:e.$t("general.search"),type:"text",variant:"gray",onInput:o[1]||(o[1]=a=>v())},{right:l(()=>[s(b,{name:"SearchIcon",class:"text-gray-400"})]),_:1},8,["modelValue","placeholder"])]),u("div",Le,[s(oe,{class:"ml-3",position:"bottom-start","width-class":"w-45","position-class":"left-0"},{activator:l(()=>[s(p,{size:"md",variant:"gray"},{default:l(()=>[s(b,{name:"FilterIcon"})]),_:1})]),default:l(()=>[u("div",je,h(e.$t("general.sort_by")),1),s(A,{class:"flex px-4 py-2 cursor-pointer"},{default:l(()=>[s(N,{class:"-mt-3 font-normal"},{default:l(()=>[s(j,{id:"filter_estimate_date",modelValue:n(t).orderByField,"onUpdate:modelValue":[o[2]||(o[2]=a=>n(t).orderByField=a),v],label:e.$t("reports.estimates.estimate_date"),size:"sm",name:"filter",value:"estimate_date"},null,8,["modelValue","label"])]),_:1})]),_:1}),s(A,{class:"flex px-4 py-2 cursor-pointer"},{default:l(()=>[s(N,{class:"-mt-3 font-normal"},{default:l(()=>[s(j,{id:"filter_due_date",modelValue:n(t).orderByField,"onUpdate:modelValue":[o[3]||(o[3]=a=>n(t).orderByField=a),v],label:e.$t("estimates.due_date"),value:"expiry_date",size:"sm",name:"filter"},null,8,["modelValue","label"])]),_:1})]),_:1}),s(A,{class:"flex px-4 py-2 cursor-pointer"},{default:l(()=>[s(N,{class:"-mt-3 font-normal"},{default:l(()=>[s(j,{id:"filter_estimate_number",modelValue:n(t).orderByField,"onUpdate:modelValue":[o[4]||(o[4]=a=>n(t).orderByField=a),v],label:e.$t("estimates.estimate_number"),value:"estimate_number",size:"sm",name:"filter"},null,8,["modelValue","label"])]),_:1})]),_:1})]),_:1}),s(p,{class:"ml-1",size:"md",variant:"gray",onClick:te},{default:l(()=>[n(R)?(f(),x(b,{key:0,name:"SortAscendingIcon"})):(f(),x(b,{key:1,name:"SortDescendingIcon"}))]),_:1})])]),u("div",{ref:(a,M)=>{M.estimateListSection=a,P.value=a},class:"h-full overflow-y-scroll border-l border-gray-200 border-solid base-scroll"},[(f(!0),T(X,null,he(m.value,(a,M)=>(f(),T("div",{key:M},[a?(f(),x(de,{key:0,id:"estimate-"+a.id,to:`/admin/estimates/${a.id}/view`,class:xe(["flex justify-between side-estimate p-4 cursor-pointer hover:bg-gray-100 items-center border-l-4 border-transparent",{"bg-gray-100 border-l-4 border-primary-500 border-solid":W(a.id)}]),style:{"border-bottom":"1px solid rgba(185, 193, 209, 0.41)"}},{default:l(()=>[u("div",Ne,[s(re,{text:a.customer.name,length:30,class:"pr-2 mb-2 text-sm not-italic font-normal leading-5 text-black capitalize truncate"},null,8,["text"]),u("div",Ae,h(a.estimate_number),1),s(ne,{status:a.status,class:"px-1 text-xs"},{default:l(()=>[C(h(a.status),1)]),_:2},1032,["status"])]),u("div",Me,[s(ie,{amount:a.total,currency:a.customer.currency,class:"block mb-2 text-xl not-italic font-semibold leading-8 text-right text-gray-900"},null,8,["amount","currency"]),u("div",ze,h(a.formatted_estimate_date),1)])]),_:2},1032,["id","to","class"])):B("",!0)]))),128)),S.value?(f(),T("div",Ce,[s(Ie,{class:"h-6 m-1 animate-spin text-primary-400"})])):B("",!0),!((G=m.value)==null?void 0:G.length)&&!S.value?(f(),T("p",Ue,h(e.$t("estimates.no_matching_estimates")),1)):B("",!0)],512)]),u("div",Pe,[u("iframe",{src:`${n(Q)}`,class:"flex-1 border border-gray-400 border-solid rounded-md bg-white frame-style"},null,8,Re)])]}),_:1})):B("",!0)],64)}}};export{Ke as default};