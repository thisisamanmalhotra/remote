import{B as b,C as ve,aN as pe,a0 as ge,k as R,aR as be,aS as Ie,r,o as I,l as B,w as s,f as a,q as k,ag as V,u as o,m as $,i as m,t as _,j as M,Q as q,h as p,x as Be}from"./vendor.4cee486b.js";import{t as he,l as ye,j as Ce,u as Re,e as ke,g as h}from"./main.3742ff98.js";import{_ as Ve}from"./SendInvoiceModal.0d0a0b30.js";import{_ as $e}from"./RecurringInvoiceIndexDropdown.87764609.js";import{_ as Ee}from"./MoonwalkerIcon.eea64e54.js";import"./mail-driver.8c4f24bc.js";const Ne=p("div",{class:"hidden w-8 h-0 mx-4 border border-gray-400 border-solid xl:block",style:{"margin-top":"1.5rem"}},null,-1),Se={class:"relative table-container"},Ae={class:"relative flex items-center justify-between h-10 mt-5 list-none border-b-2 border-gray-200 border-solid"},Te={class:"flex text-sm font-medium cursor-pointer select-none text-primary-400"},we={class:"absolute items-center left-6 top-2.5 select-none"},xe={class:"relative block"},Ge={setup(De){const c=he();ye();const H=Ce(),D=Re(),E=ke(),y=b(null),{t:i}=ve(),g=b(!1),F=b(["ACTIVE","ON_HOLD","ALL"]),N=b(!0),f=b("recurring-invoices.all");pe();let l=ge({customer_id:"",status:"",from_date:"",to_date:""});const L=R(()=>!c.totalRecurringInvoices&&!N.value),S=R({get:()=>c.selectedRecurringInvoices,set:e=>c.selectRecurringInvoice(e)}),W=R(()=>[{key:"checkbox",thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"starts_at",label:i("recurring_invoices.starts_at"),thClass:"extra",tdClass:"font-medium"},{key:"customer",label:i("invoices.customer")},{key:"frequency",label:i("recurring_invoices.frequency.title")},{key:"status",label:i("invoices.status")},{key:"total",label:i("invoices.total")},{key:"actions",label:i("recurring_invoices.action"),tdClass:"text-right text-sm font-medium",thClass:"text-right",sortable:!1}]);be(l,()=>{Y()},{debounce:500}),Ie(()=>{c.selectAllField&&c.selectAllRecurringInvoices()});const z=R(()=>F.value.findIndex(e=>e===l.status));function Q(){return E.hasAbilities([h.DELETE_RECURRING_INVOICE,h.EDIT_RECURRING_INVOICE,h.VIEW_RECURRING_INVOICE])}function X(e){const n=c.frequencies.find(u=>u.value===e);return n?n.label:`CUSTOM: ${e}`}function A(){y.value&&y.value.refresh()}async function J({page:e,filter:n,sort:u}){let v={customer_id:l.customer_id,status:l.status,from_date:l.from_date,to_date:l.to_date,orderByField:u.fieldName||"created_at",orderBy:u.order||"desc",page:e};N.value=!0;let d=await c.fetchRecurringInvoices(v);return N.value=!1,{data:d.data.data,pagination:{totalPages:d.data.meta.last_page,currentPage:e,totalCount:d.data.meta.total,limit:10}}}function K(e){if(f.value==e.title)return!0;switch(f.value=e.title,e.title){case i("recurring_invoices.active"):l.status="ACTIVE";break;case i("recurring_invoices.on_hold"):l.status="ON_HOLD";break;case i("recurring_invoices.all"):l.status="ALL";break}}function Y(){c.$patch(e=>{e.selectedRecurringInvoices=[],e.selectAllField=!1}),A()}function O(){l.customer_id="",l.status="",l.from_date="",l.to_date="",l.invoice_number="",f.value=i("general.all")}async function Z(e=null){H.openDialog({title:i("general.are_you_sure"),message:i("invoices.confirm_delete"),yesLabel:i("general.ok"),noLabel:i("general.cancel"),variant:"danger",hideNoButton:!1,size:"lg"}).then(async n=>{n&&await c.deleteMultipleRecurringInvoices(e).then(u=>{u.data.success?(A(),c.$patch(v=>{v.selectedRecurringInvoices=[],v.selectAllField=!1}),D.showNotification({type:"success",message:i("recurring_invoices.deleted_message",2)})):u.data.error&&D.showNotification({type:"error",message:u.data.message})})})}function ee(){g.value&&O(),g.value=!g.value}async function te(e,n){l.status="",A()}function ae(e){switch(e){case"ACTIVE":f.value=i("recurring_invoices.active");break;case"ON_HOLD":f.value=i("recurring_invoices.on_hold");break;case"ALL":f.value=i("recurring_invoices.all");break}}return(e,n)=>{const u=r("BaseBreadcrumbItem"),v=r("BaseBreadcrumb"),d=r("BaseIcon"),T=r("BaseButton"),U=r("router-link"),se=r("BasePageHeader"),ne=r("BaseCustomerSelectInput"),C=r("BaseInputGroup"),le=r("BaseMultiselect"),P=r("BaseDatePicker"),oe=r("BaseFilterWrapper"),re=r("BaseEmptyPlaceholder"),w=r("BaseTab"),ie=r("BaseTabGroup"),ce=r("BaseDropdownItem"),ue=r("BaseDropdown"),j=r("BaseCheckbox"),G=r("BaseText"),de=r("BaseRecurringInvoiceStatusBadge"),me=r("BaseFormatMoney"),_e=r("BaseTable"),fe=r("BasePage");return I(),B(fe,null,{default:s(()=>[a(Ve),a(se,{title:e.$t("recurring_invoices.title")},{actions:s(()=>[k(a(T,{variant:"primary-outline",onClick:ee},{right:s(t=>[g.value?(I(),B(d,{key:1,name:"XIcon",class:$(t.class)},null,8,["class"])):(I(),B(d,{key:0,name:"FilterIcon",class:$(t.class)},null,8,["class"]))]),default:s(()=>[m(_(e.$t("general.filter"))+" ",1)]),_:1},512),[[V,o(c).totalRecurringInvoices]]),o(E).hasAbilities(o(h).CREATE_RECURRING_INVOICE)?(I(),B(U,{key:0,to:"recurring-invoices/create"},{default:s(()=>[a(T,{variant:"primary",class:"ml-4"},{left:s(t=>[a(d,{name:"PlusIcon",class:$(t.class)},null,8,["class"])]),default:s(()=>[m(" "+_(e.$t("recurring_invoices.new_invoice")),1)]),_:1})]),_:1})):M("",!0)]),default:s(()=>[a(v,null,{default:s(()=>[a(u,{title:e.$t("general.home"),to:"dashboard"},null,8,["title"]),a(u,{title:e.$tc("recurring_invoices.invoice",2),to:"#",active:""},null,8,["title"])]),_:1})]),_:1},8,["title"]),k(a(oe,{onClear:O},{default:s(()=>[a(C,{label:e.$tc("customers.customer",1)},{default:s(()=>[a(ne,{modelValue:o(l).customer_id,"onUpdate:modelValue":n[0]||(n[0]=t=>o(l).customer_id=t),placeholder:e.$t("customers.type_or_click"),"value-prop":"id",label:"name"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(C,{label:e.$t("recurring_invoices.status")},{default:s(()=>[a(le,{modelValue:o(l).status,"onUpdate:modelValue":[n[1]||(n[1]=t=>o(l).status=t),ae],options:F.value,searchable:"",placeholder:e.$t("general.select_a_status"),onRemove:n[2]||(n[2]=t=>te())},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"]),a(C,{label:e.$t("general.from")},{default:s(()=>[a(P,{modelValue:o(l).from_date,"onUpdate:modelValue":n[3]||(n[3]=t=>o(l).from_date=t),"calendar-button":!0,"calendar-button-icon":"calendar"},null,8,["modelValue"])]),_:1},8,["label"]),Ne,a(C,{label:e.$t("general.to")},{default:s(()=>[a(P,{modelValue:o(l).to_date,"onUpdate:modelValue":n[4]||(n[4]=t=>o(l).to_date=t),"calendar-button":!0,"calendar-button-icon":"calendar"},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},512),[[V,g.value]]),k(a(re,{title:e.$t("recurring_invoices.no_invoices"),description:e.$t("recurring_invoices.list_of_invoices")},q({default:s(()=>[a(Ee,{class:"mt-5 mb-4"})]),_:2},[o(E).hasAbilities(o(h).CREATE_RECURRING_INVOICE)?{name:"actions",fn:s(()=>[a(T,{variant:"primary-outline",onClick:n[5]||(n[5]=t=>e.$router.push("/admin/recurring-invoices/create"))},{left:s(t=>[a(d,{name:"PlusIcon",class:$(t.class)},null,8,["class"])]),default:s(()=>[m(" "+_(e.$t("recurring_invoices.add_new_invoice")),1)]),_:1})])}:void 0]),1032,["title","description"]),[[V,o(L)]]),k(p("div",Se,[p("div",Ae,[a(ie,{class:"-mb-5","default-index":o(z),onChange:K},{default:s(()=>[a(w,{title:e.$t("recurring_invoices.all"),filter:"ALL"},null,8,["title"]),a(w,{title:e.$t("recurring_invoices.active"),filter:"ACTIVE"},null,8,["title"]),a(w,{title:e.$t("recurring_invoices.on_hold"),filter:"ON_HOLD"},null,8,["title"])]),_:1},8,["default-index"]),o(c).selectedRecurringInvoices.length?(I(),B(ue,{key:0,class:"absolute float-right"},{activator:s(()=>[p("span",Te,[m(_(e.$t("general.actions"))+" ",1),a(d,{name:"ChevronDownIcon",class:"h-5"})])]),default:s(()=>[a(ce,{onClick:n[6]||(n[6]=t=>Z())},{default:s(()=>[a(d,{name:"TrashIcon",class:"mr-3 text-gray-600"}),m(" "+_(e.$t("general.delete")),1)]),_:1})]),_:1})):M("",!0)]),a(_e,{ref:(t,x)=>{x.table=t,y.value=t},data:J,columns:o(W),"placeholder-count":o(c).totalRecurringInvoices>=20?10:5,class:"mt-10"},q({header:s(()=>[p("div",we,[a(j,{modelValue:o(c).selectAllField,"onUpdate:modelValue":n[7]||(n[7]=t=>o(c).selectAllField=t),variant:"primary",onChange:o(c).selectAllRecurringInvoices},null,8,["modelValue","onChange"])])]),"cell-checkbox":s(({row:t})=>[p("div",xe,[a(j,{id:t.id,modelValue:o(S),"onUpdate:modelValue":n[8]||(n[8]=x=>Be(S)?S.value=x:null),value:t.data.id},null,8,["id","modelValue","value"])])]),"cell-starts_at":s(({row:t})=>[m(_(t.data.formatted_starts_at),1)]),"cell-customer":s(({row:t})=>[a(U,{to:{path:`recurring-invoices/${t.data.id}/view`}},{default:s(()=>[a(G,{text:t.data.customer.name,length:30,tag:"span",class:"font-medium text-primary-500 flex flex-col"},null,8,["text"]),a(G,{text:t.data.customer.contact_name?t.data.customer.contact_name:"",length:30,tag:"span",class:"text-xs text-gray-400"},null,8,["text"])]),_:2},1032,["to"])]),"cell-frequency":s(({row:t})=>[m(_(X(t.data.frequency)),1)]),"cell-status":s(({row:t})=>[a(de,{status:t.data.status,class:"px-3 py-1"},{default:s(()=>[m(_(t.data.status),1)]),_:2},1032,["status"])]),"cell-total":s(({row:t})=>[a(me,{amount:t.data.total,currency:t.data.customer.currency},null,8,["amount","currency"])]),_:2},[Q?{name:"cell-actions",fn:s(({row:t})=>[a($e,{row:t.data,table:y.value},null,8,["row","table"])])}:void 0]),1032,["columns","placeholder-count"])],512),[[V,!o(L)]])]),_:1})}}};export{Ge as default};
