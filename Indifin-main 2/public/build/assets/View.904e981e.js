var te=Object.defineProperty;var P=Object.getOwnPropertySymbols;var ne=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;var M=(p,e,o)=>e in p?te(p,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):p[e]=o,G=(p,e)=>{for(var o in e||(e={}))ne.call(e,o)&&M(p,o,e[o]);if(P)for(var o of P(e))ae.call(e,o)&&M(p,o,e[o]);return p};import{C as z,z as q,B as w,a0 as oe,k as O,X as re,r as u,o as m,e as T,h as b,f as n,w as i,u as a,t as h,l as y,F as Q,y as se,i as j,m as ie,j as R,ah as le,aN as W,Q as ce,Y as ue}from"./vendor.4cee486b.js";import{t as A,e as X,g as C,j as de}from"./main.3742ff98.js";import{L as me}from"./LoadingIcon.4543ad65.js";import{_ as _e}from"./InvoiceIndexDropdown.aa6b0cf8.js";import{_ as ve}from"./SendInvoiceModal.0d0a0b30.js";import{_ as ge}from"./RecurringInvoiceIndexDropdown.87764609.js";import"./mail-driver.8c4f24bc.js";const pe={class:"fixed top-0 left-0 hidden h-full pt-16 pb-[6.4rem] ml-56 bg-white xl:ml-64 w-88 xl:block"},fe={class:"flex items-center justify-between px-4 pt-8 pb-2 border border-gray-200 border-solid height-full"},be={class:"mb-6"},ye={class:"flex mb-6 ml-3",role:"group","aria-label":"First group"},Ie={class:"px-2 py-1 pb-2 mb-1 mb-2 text-sm border-b border-gray-200 border-solid"},Be={class:"flex-2"},he={class:"mt-1 mb-2 text-xs not-italic font-medium leading-5 text-gray-600"},xe={class:"flex-1 whitespace-nowrap right"},we={class:"text-sm not-italic font-normal leading-5 text-right text-gray-600 est-date"},Re={key:0,class:"flex justify-center p-4 items-center"},ke={key:1,class:"flex justify-center px-4 mt-5 text-sm text-gray-600"},Se={setup(p){const e=A();z();const o=q(),l=w(!1),_=w(null),d=w(1),f=w(1),I=w(null),t=oe({orderBy:null,orderByField:null,searchText:null}),k=O(()=>t.orderBy==="asc"||t.orderBy==null);function S(s){return o.params.id==s}async function B(s,v=!1){if(l.value)return;let g={};t.searchText!==""&&t.searchText!==null&&t.searchText!==void 0&&(g.search=t.searchText),t.orderBy!==null&&t.orderBy!==void 0&&(g.orderBy=t.orderBy),t.orderByField!==null&&t.orderByField!==void 0&&(g.orderByField=t.orderByField),l.value=!0;let $=await e.fetchRecurringInvoices(G({page:s},g));l.value=!1,_.value=_.value?_.value:[],_.value=[..._.value,...$.data.data],d.value=s||1,f.value=$.data.meta.last_page;let x=_.value.find(E=>E.id==o.params.id);v==!1&&!x&&d.value<f.value&&Object.keys(g).length===0&&B(++d.value),x&&setTimeout(()=>{v==!1&&V()},500)}function V(){const s=document.getElementById(`recurring-invoice-${o.params.id}`);s&&(s.scrollIntoView({behavior:"smooth"}),s.classList.add("shake"),D())}function D(){I.value.addEventListener("scroll",s=>{s.target.scrollTop>0&&s.target.scrollTop+s.target.clientHeight>s.target.scrollHeight-200&&d.value<f.value&&B(++d.value,!0)})}async function r(){_.value=[],B()}function F(){return t.orderBy==="asc"?(t.orderBy="desc",r(),!0):(t.orderBy="asc",r(),!0)}return B(),r=re.exports.debounce(r,500),(s,v)=>{var H;const g=u("BaseIcon"),$=u("BaseInput"),x=u("BaseButton"),E=u("BaseRadio"),N=u("BaseInputGroup"),L=u("BaseDropdownItem"),Y=u("BaseDropdown"),J=u("BaseText"),K=u("BaseRecurringInvoiceStatusBadge"),Z=u("BaseFormatMoney"),ee=u("router-link");return m(),T("div",pe,[b("div",fe,[b("div",be,[n($,{modelValue:a(t).searchText,"onUpdate:modelValue":v[0]||(v[0]=c=>a(t).searchText=c),placeholder:s.$t("general.search"),type:"text",variant:"gray",onInput:v[1]||(v[1]=c=>r())},{right:i(()=>[n(g,{name:"SearchIcon",class:"h-5 text-gray-400"})]),_:1},8,["modelValue","placeholder"])]),b("div",ye,[n(Y,{class:"ml-3",position:"bottom-start"},{activator:i(()=>[n(x,{size:"md",variant:"gray"},{default:i(()=>[n(g,{name:"FilterIcon",class:"h-5"})]),_:1})]),default:i(()=>[b("div",Ie,h(s.$t("general.sort_by")),1),n(L,{class:"flex px-1 py-2 cursor-pointer"},{default:i(()=>[n(N,{class:"-mt-3 font-normal"},{default:i(()=>[n(E,{id:"filter_next_invoice_date",modelValue:a(t).orderByField,"onUpdate:modelValue":[v[2]||(v[2]=c=>a(t).orderByField=c),r],label:s.$t("recurring_invoices.next_invoice_date"),size:"sm",name:"filter",value:"next_invoice_at"},null,8,["modelValue","label"])]),_:1})]),_:1}),n(L,{class:"flex px-1 py-2 cursor-pointer"},{default:i(()=>[n(N,{class:"-mt-3 font-normal"},{default:i(()=>[n(E,{id:"filter_start_date",modelValue:a(t).orderByField,"onUpdate:modelValue":[v[3]||(v[3]=c=>a(t).orderByField=c),r],label:s.$t("recurring_invoices.starts_at"),value:"starts_at",size:"sm",name:"filter"},null,8,["modelValue","label"])]),_:1})]),_:1})]),_:1}),n(x,{class:"ml-1",size:"md",variant:"gray",onClick:F},{default:i(()=>[a(k)?(m(),y(g,{key:0,name:"SortAscendingIcon",class:"h-5"})):(m(),y(g,{key:1,name:"SortDescendingIcon",class:"h-5"}))]),_:1})])]),b("div",{ref:(c,U)=>{U.invoiceListSection=c,I.value=c},class:"h-full overflow-y-scroll border-l border-gray-200 border-solid base-scroll"},[(m(!0),T(Q,null,se(_.value,(c,U)=>(m(),T("div",{key:U},[c?(m(),y(ee,{key:0,id:"recurring-invoice-"+c.id,to:`/admin/recurring-invoices/${c.id}/view`,class:ie(["flex justify-between side-invoice p-4 cursor-pointer hover:bg-gray-100 items-center border-l-4 border-transparent",{"bg-gray-100 border-l-4 border-primary-500 border-solid":S(c.id)}]),style:{"border-bottom":"1px solid rgba(185, 193, 209, 0.41)"}},{default:i(()=>[b("div",Be,[n(J,{text:c.customer.name,length:30,class:"pr-2 mb-2 text-sm not-italic font-normal leading-5 text-black capitalize truncate"},null,8,["text"]),b("div",he,h(c.invoice_number),1),n(K,{status:c.status,class:"px-1 text-xs"},{default:i(()=>[j(h(c.status),1)]),_:2},1032,["status"])]),b("div",xe,[n(Z,{class:"block mb-2 text-xl not-italic font-semibold leading-8 text-right text-gray-900",amount:c.total,currency:c.customer.currency},null,8,["amount","currency"]),b("div",we,h(c.formatted_starts_at),1)])]),_:2},1032,["id","to","class"])):R("",!0)]))),128)),l.value?(m(),T("div",Re,[n(me,{class:"h-6 m-1 animate-spin text-primary-400"})])):R("",!0),!((H=_.value)==null?void 0:H.length)&&!l.value?(m(),T("p",ke,h(s.$t("invoices.no_matching_invoices")),1)):R("",!0)],512)])}}},$e={class:"relative table-container"},Ee={setup(p){const e=A(),o=w(null);w(null),le("$utils");const{t:l}=z();w(null),W();const _=X(),d=O(()=>[{key:"invoice_date",label:l("invoices.date"),thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"invoice_number",label:l("invoices.invoice")},{key:"customer.name",label:l("invoices.customer")},{key:"status",label:l("invoices.status")},{key:"total",label:l("invoices.total")},{key:"actions",label:l("invoices.action"),tdClass:"text-right text-sm font-medium",thClass:"text-right",sortable:!1}]);function f(){return _.hasAbilities([C.DELETE_INVOICE,C.EDIT_INVOICE,C.VIEW_INVOICE,C.SEND_INVOICE])}function I(t){let k=e.newRecurringInvoice.invoices.findIndex(S=>S.id===t);e.newRecurringInvoice.invoices[k]&&(e.newRecurringInvoice.invoices[k].status="SENT")}return(t,k)=>{const S=u("router-link"),B=u("BaseFormatMoney"),V=u("BaseInvoiceStatusBadge"),D=u("BaseTable");return m(),T(Q,null,[n(ve,{onUpdate:I}),b("div",$e,[n(D,{ref:(r,F)=>{F.table=r,o.value=r},data:a(e).newRecurringInvoice.invoices,columns:a(d),loading:a(e).isFetchingViewData,"placeholder-count":5,class:"mt-5"},ce({"cell-invoice_number":i(({row:r})=>[n(S,{to:{path:`/admin/invoices/${r.data.id}/view`},class:"font-medium text-primary-500"},{default:i(()=>[j(h(r.data.invoice_number),1)]),_:2},1032,["to"])]),"cell-total":i(({row:r})=>[n(B,{amount:r.data.due_amount,currency:r.data.currency},null,8,["amount","currency"])]),"cell-status":i(({row:r})=>[n(V,{status:r.data.status,class:"px-3 py-1"},{default:i(()=>[j(h(r.data.status),1)]),_:2},1032,["status"])]),_:2},[f()?{name:"cell-actions",fn:i(({row:r})=>[n(_e,{row:r.data,table:o.value},null,8,["row","table"])])}:void 0]),1032,["data","columns","loading"])])],64)}}},Ve={setup(p){const e=A(),o=q();let l=O(()=>e.isFetchingViewData);ue(o,()=>{o.params.id&&o.name==="recurring-invoices.view"&&_()},{immediate:!0});async function _(){await e.fetchRecurringInvoice(o.params.id)}return(d,f)=>{const I=u("BaseHeading"),t=u("BaseDescriptionListItem"),k=u("BaseDescriptionList"),S=u("BaseCard");return m(),y(S,{class:"mt-10"},{default:i(()=>[n(I,null,{default:i(()=>[j(h(d.$t("customers.basic_info")),1)]),_:1}),n(k,{class:"mt-5"},{default:i(()=>{var B,V,D,r,F,s,v,g,$,x,E,N,L;return[n(t,{label:d.$t("recurring_invoices.starts_at"),"content-loading":a(l),value:(B=a(e).newRecurringInvoice)==null?void 0:B.formatted_starts_at},null,8,["label","content-loading","value"]),n(t,{label:d.$t("recurring_invoices.next_invoice_date"),"content-loading":a(l),value:(V=a(e).newRecurringInvoice)==null?void 0:V.formatted_next_invoice_at},null,8,["label","content-loading","value"]),((D=a(e).newRecurringInvoice)==null?void 0:D.limit_date)&&((r=a(e).newRecurringInvoice)==null?void 0:r.limit_by)!=="NONE"?(m(),y(t,{key:0,label:d.$t("recurring_invoices.limit_date"),"content-loading":a(l),value:(F=a(e).newRecurringInvoice)==null?void 0:F.limit_date},null,8,["label","content-loading","value"])):R("",!0),((s=a(e).newRecurringInvoice)==null?void 0:s.limit_date)&&((v=a(e).newRecurringInvoice)==null?void 0:v.limit_by)!=="NONE"?(m(),y(t,{key:1,label:d.$t("recurring_invoices.limit_by"),"content-loading":a(l),value:(g=a(e).newRecurringInvoice)==null?void 0:g.limit_by},null,8,["label","content-loading","value"])):R("",!0),(($=a(e).newRecurringInvoice)==null?void 0:$.limit_count)?(m(),y(t,{key:2,label:d.$t("recurring_invoices.limit_count"),value:(x=a(e).newRecurringInvoice)==null?void 0:x.limit_count,"content-loading":a(l)},null,8,["label","value","content-loading"])):R("",!0),((E=a(e).newRecurringInvoice)==null?void 0:E.selectedFrequency)?(m(),y(t,{key:3,label:d.$t("recurring_invoices.frequency.title"),value:(L=(N=a(e).newRecurringInvoice)==null?void 0:N.selectedFrequency)==null?void 0:L.label,"content-loading":a(l)},null,8,["label","value","content-loading"])):R("",!0)]}),_:1}),n(I,{class:"mt-8"},{default:i(()=>[j(h(d.$t("invoices.title",2)),1)]),_:1}),n(Ee)]),_:1})}}},Ae={setup(p){de();const e=A(),o=X();z(),W();const l=O(()=>{var d,f;return e.newRecurringInvoice?(f=(d=e.newRecurringInvoice)==null?void 0:d.customer)==null?void 0:f.name:""});function _(){return o.hasAbilities([C.DELETE_RECURRING_INVOICE,C.EDIT_RECURRING_INVOICE])}return(d,f)=>{const I=u("BasePageHeader"),t=u("BasePage");return m(),y(t,{class:"xl:pl-96"},{default:i(()=>[n(I,{title:a(l)},{actions:i(()=>[_()?(m(),y(ge,{key:0,row:a(e).newRecurringInvoice},null,8,["row"])):R("",!0)]),_:1},8,["title"]),n(Se),n(Ve)]),_:1})}}};export{Ae as default};
