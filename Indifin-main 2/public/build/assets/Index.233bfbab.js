import{C as j,a0 as C,B as h,A as o,k as $,Y as L,Z as F,r as i,o as q,e as N,h as c,f as a,w as m,u as p,i as I,t as V,P as H,l as J,m as K}from"./vendor.4cee486b.js";import{d as U,b as z}from"./main.3742ff98.js";const X={class:"grid gap-8 md:grid-cols-12 pt-10"},ee={class:"col-span-8 md:col-span-4"},te={class:"flex flex-col my-6 lg:space-x-3 lg:flex-row"},ae=c("div",{class:"hidden w-5 h-0 mx-4 border border-gray-400 border-solid xl:block",style:{"margin-top":"2.5rem"}},null,-1),oe={class:"col-span-8"},re=["src"],ne={setup(Q){const{t:v}=j(),g=U();g.downloadReport=T;const u=C([{label:v("dateRange.today"),key:"Today"},{label:v("dateRange.this_week"),key:"This Week"},{label:v("dateRange.this_month"),key:"This Month"},{label:v("dateRange.this_quarter"),key:"This Quarter"},{label:v("dateRange.this_year"),key:"This Year"},{label:v("dateRange.previous_week"),key:"Previous Week"},{label:v("dateRange.previous_month"),key:"Previous Month"},{label:v("dateRange.previous_quarter"),key:"Previous Quarter"},{label:v("dateRange.previous_year"),key:"Previous Year"},{label:v("dateRange.custom"),key:"Custom"}]),B=h(u[2]),n=h(["By Customer","By Item"]),y=h("By Customer");let w=h(new Date),D=h(null),e=h(null),Y=h(null),s=C({from_date:o().startOf("month").format("YYYY-MM-DD").toString(),to_date:o().endOf("month").format("YYYY-MM-DD").toString()});const R=z(),r=$(()=>D.value),d=$(()=>R.selectedCompany),P=$(()=>`${e.value}?from_date=${o(s.from_date).format("YYYY-MM-DD")}&to_date=${o(s.to_date).format("YYYY-MM-DD")}`),x=$(()=>`${Y.value}?from_date=${o(s.from_date).format("YYYY-MM-DD")}&to_date=${o(s.to_date).format("YYYY-MM-DD")}`);L(w,f=>{s.from_date=o(f).startOf("year").toString(),s.to_date=o(f).endOf("year").toString()}),F(()=>{e.value=`/reports/sales/customers/${d.value.unique_hash}`,Y.value=`/reports/sales/items/${d.value.unique_hash}`,l()});function _(f,k){return o()[f](k).format("YYYY-MM-DD")}function O(f,k){return o().subtract(1,k)[f](k).format("YYYY-MM-DD")}function t(){switch(B.value.key){case"Today":s.from_date=o().format("YYYY-MM-DD"),s.to_date=o().format("YYYY-MM-DD");break;case"This Week":s.from_date=_("startOf","isoWeek"),s.to_date=_("endOf","isoWeek");break;case"This Month":s.from_date=_("startOf","month"),s.to_date=_("endOf","month");break;case"This Quarter":s.from_date=_("startOf","quarter"),s.to_date=_("endOf","quarter");break;case"This Year":s.from_date=_("startOf","year"),s.to_date=_("endOf","year");break;case"Previous Week":s.from_date=O("startOf","isoWeek"),s.to_date=O("endOf","isoWeek");break;case"Previous Month":s.from_date=O("startOf","month"),s.to_date=O("endOf","month");break;case"Previous Quarter":s.from_date=O("startOf","quarter"),s.to_date=O("endOf","quarter");break;case"Previous Year":s.from_date=O("startOf","year"),s.to_date=O("endOf","year");break}}async function l(){return y.value==="By Customer"?(D.value=P.value,!0):(D.value=x.value,!0)}async function S(){let f=await M();return window.open(r.value,"_blank"),f}function M(){return y.value==="By Customer"?(D.value=P.value,!0):(D.value=x.value,!0)}function T(){if(!M())return!1;window.open(r.value+"&download=true"),setTimeout(()=>y.value==="By Customer"?(D.value=P.value,!0):(D.value=x.value,!0),200)}return(f,k)=>{const b=i("BaseMultiselect"),G=i("BaseInputGroup"),A=i("BaseDatePicker"),E=i("BaseButton"),Z=i("BaseIcon");return q(),N("div",X,[c("div",ee,[a(G,{label:f.$t("reports.sales.date_range"),class:"col-span-12 md:col-span-8"},{default:m(()=>[a(b,{modelValue:B.value,"onUpdate:modelValue":[k[0]||(k[0]=W=>B.value=W),t],options:p(u),"value-prop":"key","track-by":"key",label:"label",object:""},null,8,["modelValue","options"])]),_:1},8,["label"]),c("div",te,[a(G,{label:f.$t("reports.sales.from_date")},{default:m(()=>[a(A,{modelValue:p(s).from_date,"onUpdate:modelValue":k[1]||(k[1]=W=>p(s).from_date=W)},null,8,["modelValue"])]),_:1},8,["label"]),ae,a(G,{label:f.$t("reports.sales.to_date")},{default:m(()=>[a(A,{modelValue:p(s).to_date,"onUpdate:modelValue":k[2]||(k[2]=W=>p(s).to_date=W)},null,8,["modelValue"])]),_:1},8,["label"])]),a(G,{label:f.$t("reports.sales.report_type"),class:"col-span-12 md:col-span-8"},{default:m(()=>[a(b,{modelValue:y.value,"onUpdate:modelValue":[k[3]||(k[3]=W=>y.value=W),l],options:n.value,placeholder:f.$t("reports.sales.report_type"),class:"mt-1"},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"]),a(E,{variant:"primary-outline",class:"content-center hidden mt-0 w-md md:flex md:mt-8",type:"submit",onClick:H(M,["prevent"])},{default:m(()=>[I(V(f.$t("reports.update_report")),1)]),_:1},8,["onClick"])]),c("div",oe,[c("iframe",{src:p(r),class:"hidden w-full h-screen border-gray-100 border-solid rounded md:flex"},null,8,re),c("a",{class:"flex items-center justify-center h-10 px-5 py-1 text-sm font-medium leading-none text-center text-white rounded whitespace-nowrap md:hidden bg-primary-500",onClick:S},[a(Z,{name:"DocumentTextIcon",class:"h-5 mr-2"}),c("span",null,V(f.$t("reports.view_pdf")),1)])])])}}},se={class:"grid gap-8 md:grid-cols-12 pt-10"},le={class:"col-span-8 md:col-span-4"},de={class:"flex flex-col mt-6 lg:space-x-3 lg:flex-row"},ue=c("div",{class:"hidden w-5 h-0 mx-4 border border-gray-400 border-solid xl:block",style:{"margin-top":"2.5rem"}},null,-1),ie={class:"col-span-8"},ce=["src"],me={setup(Q){const v=U(),g=z(),{t:u}=j();v.downloadReport=O;const B=C([{label:u("dateRange.today"),key:"Today"},{label:u("dateRange.this_week"),key:"This Week"},{label:u("dateRange.this_month"),key:"This Month"},{label:u("dateRange.this_quarter"),key:"This Quarter"},{label:u("dateRange.this_year"),key:"This Year"},{label:u("dateRange.previous_week"),key:"Previous Week"},{label:u("dateRange.previous_month"),key:"Previous Month"},{label:u("dateRange.previous_quarter"),key:"Previous Quarter"},{label:u("dateRange.previous_year"),key:"Previous Year"},{label:u("dateRange.custom"),key:"Custom"}]),n=h(B[2]);let y=h(new Date),w=h(null),D=h(null);const e=C({from_date:o().startOf("month").toString(),to_date:o().endOf("month").toString()}),Y=$(()=>w.value),s=$(()=>g.selectedCompany),R=$(()=>`${D.value}?from_date=${o(e.from_date).format("YYYY-MM-DD")}&to_date=${o(e.to_date).format("YYYY-MM-DD")}`);F(()=>{D.value=`/reports/expenses/${s.value.unique_hash}`,w.value=R.value}),L(()=>y,t=>{e.from_date=o(t).startOf("year").toString(),e.to_date=o(t).endOf("year").toString()});function r(t,l){return o()[t](l).format("YYYY-MM-DD")}function d(t,l){return o().subtract(1,l)[t](l).format("YYYY-MM-DD")}function P(){switch(n.value.key){case"Today":e.from_date=o().format("YYYY-MM-DD"),e.to_date=o().format("YYYY-MM-DD");break;case"This Week":e.from_date=r("startOf","isoWeek"),e.to_date=r("endOf","isoWeek");break;case"This Month":e.from_date=r("startOf","month"),e.to_date=r("endOf","month");break;case"This Quarter":e.from_date=r("startOf","quarter"),e.to_date=r("endOf","quarter");break;case"This Year":e.from_date=r("startOf","year"),e.to_date=r("endOf","year");break;case"Previous Week":e.from_date=d("startOf","isoWeek"),e.to_date=d("endOf","isoWeek");break;case"Previous Month":e.from_date=d("startOf","month"),e.to_date=d("endOf","month");break;case"Previous Quarter":e.from_date=d("startOf","quarter"),e.to_date=d("endOf","quarter");break;case"Previous Year":e.from_date=d("startOf","year"),e.to_date=d("endOf","year");break}}async function x(){let t=await _();return window.open(Y.value,"_blank"),t}function _(){return w.value=R.value,!0}function O(){!_(),window.open(Y.value+"&download=true"),setTimeout(()=>{w.value=R.value},200)}return(t,l)=>{const S=i("BaseMultiselect"),M=i("BaseInputGroup"),T=i("BaseDatePicker"),f=i("BaseButton"),k=i("BaseIcon");return q(),N("div",se,[c("div",le,[a(M,{label:t.$t("reports.sales.date_range"),class:"col-span-12 md:col-span-8"},{default:m(()=>[a(S,{modelValue:n.value,"onUpdate:modelValue":[l[0]||(l[0]=b=>n.value=b),P],options:p(B),"value-prop":"key","track-by":"key",label:"label",object:""},null,8,["modelValue","options"])]),_:1},8,["label"]),c("div",de,[a(M,{label:t.$t("reports.expenses.from_date")},{default:m(()=>[a(T,{modelValue:p(e).from_date,"onUpdate:modelValue":l[1]||(l[1]=b=>p(e).from_date=b)},null,8,["modelValue"])]),_:1},8,["label"]),ue,a(M,{label:t.$t("reports.expenses.to_date")},{default:m(()=>[a(T,{modelValue:p(e).to_date,"onUpdate:modelValue":l[2]||(l[2]=b=>p(e).to_date=b)},null,8,["modelValue"])]),_:1},8,["label"])]),a(f,{variant:"primary-outline",class:"content-center hidden mt-0 w-md md:flex md:mt-8",type:"submit",onClick:H(_,["prevent"])},{default:m(()=>[I(V(t.$t("reports.update_report")),1)]),_:1},8,["onClick"])]),c("div",ie,[c("iframe",{src:p(Y),class:"hidden w-full h-screen border-gray-100 border-solid rounded md:flex"},null,8,ce),c("a",{class:"flex items-center justify-center h-10 px-5 py-1 text-sm font-medium leading-none text-center text-white rounded whitespace-nowrap md:hidden bg-primary-500 cursor-pointer",onClick:x},[a(k,{name:"DocumentTextIcon",class:"h-5 mr-2"}),c("span",null,V(t.$t("reports.view_pdf")),1)])])])}}},pe={class:"grid gap-8 md:grid-cols-12 pt-10"},fe={class:"col-span-8 md:col-span-4"},_e={class:"flex flex-col mt-6 lg:space-x-3 lg:flex-row"},be=c("div",{class:"hidden w-5 h-0 mx-4 border border-gray-400 border-solid xl:block",style:{"margin-top":"2.5rem"}},null,-1),ye={class:"col-span-8"},ke=["src"],he={setup(Q){const v=U(),g=z(),{t:u}=j();v.downloadReport=O;const B=C([{label:u("dateRange.today"),key:"Today"},{label:u("dateRange.this_week"),key:"This Week"},{label:u("dateRange.this_month"),key:"This Month"},{label:u("dateRange.this_quarter"),key:"This Quarter"},{label:u("dateRange.this_year"),key:"This Year"},{label:u("dateRange.previous_week"),key:"Previous Week"},{label:u("dateRange.previous_month"),key:"Previous Month"},{label:u("dateRange.previous_quarter"),key:"Previous Quarter"},{label:u("dateRange.previous_year"),key:"Previous Year"},{label:u("dateRange.custom"),key:"Custom"}]),n=h(B[2]);let y=h(null),w=h(null),D=h(new Date);const e=C({from_date:o().startOf("month").toString(),to_date:o().endOf("month").toString()}),Y=$(()=>y.value),s=$(()=>g.selectedCompany),R=$(()=>`${w.value}?from_date=${o(e.from_date).format("YYYY-MM-DD")}&to_date=${o(e.to_date).format("YYYY-MM-DD")}`);L(D,t=>{e.from_date=o(t).startOf("year").toString(),e.to_date=o(t).endOf("year").toString()}),F(()=>{w.value=`/reports/profit-loss/${s.value.unique_hash}`,y.value=R.value});function r(t,l){return o()[t](l).format("YYYY-MM-DD")}function d(t,l){return o().subtract(1,l)[t](l).format("YYYY-MM-DD")}function P(){switch(n.value.key){case"Today":e.from_date=o().format("YYYY-MM-DD"),e.to_date=o().format("YYYY-MM-DD");break;case"This Week":e.from_date=r("startOf","isoWeek"),e.to_date=r("endOf","isoWeek");break;case"This Month":e.from_date=r("startOf","month"),e.to_date=r("endOf","month");break;case"This Quarter":e.from_date=r("startOf","quarter"),e.to_date=r("endOf","quarter");break;case"This Year":e.from_date=r("startOf","year"),e.to_date=r("endOf","year");break;case"Previous Week":e.from_date=d("startOf","isoWeek"),e.to_date=d("endOf","isoWeek");break;case"Previous Month":e.from_date=d("startOf","month"),e.to_date=d("endOf","month");break;case"Previous Quarter":e.from_date=d("startOf","quarter"),e.to_date=d("endOf","quarter");break;case"Previous Year":e.from_date=d("startOf","year"),e.to_date=d("endOf","year");break}}async function x(){let t=await _();return window.open(Y.value,"_blank"),t}function _(){return y.value=R.value,!0}function O(){!_(),window.open(Y.value+"&download=true"),setTimeout(()=>{y.value=R.value},200)}return(t,l)=>{const S=i("BaseMultiselect"),M=i("BaseInputGroup"),T=i("BaseDatePicker"),f=i("BaseButton"),k=i("BaseIcon");return q(),N("div",pe,[c("div",fe,[a(M,{label:t.$t("reports.profit_loss.date_range"),class:"col-span-12 md:col-span-8"},{default:m(()=>[a(S,{modelValue:n.value,"onUpdate:modelValue":[l[0]||(l[0]=b=>n.value=b),P],options:p(B),"value-prop":"key","track-by":"key",label:"label",object:""},null,8,["modelValue","options"])]),_:1},8,["label"]),c("div",_e,[a(M,{label:t.$t("reports.profit_loss.from_date")},{default:m(()=>[a(T,{modelValue:p(e).from_date,"onUpdate:modelValue":l[1]||(l[1]=b=>p(e).from_date=b)},null,8,["modelValue"])]),_:1},8,["label"]),be,a(M,{label:t.$t("reports.profit_loss.to_date")},{default:m(()=>[a(T,{modelValue:p(e).to_date,"onUpdate:modelValue":l[2]||(l[2]=b=>p(e).to_date=b)},null,8,["modelValue"])]),_:1},8,["label"])]),a(f,{variant:"primary-outline",class:"content-center hidden mt-0 w-md md:flex md:mt-8",type:"submit",onClick:H(_,["prevent"])},{default:m(()=>[I(V(t.$t("reports.update_report")),1)]),_:1},8,["onClick"])]),c("div",ye,[c("iframe",{src:p(Y),class:"hidden w-full h-screen border-gray-100 border-solid rounded md:flex"},null,8,ke),c("a",{class:"flex items-center justify-center h-10 px-5 py-1 text-sm font-medium leading-none text-center text-white rounded whitespace-nowrap md:hidden bg-primary-500",onClick:x},[a(k,{name:"DocumentTextIcon",class:"h-5 mr-2"}),c("span",null,V(t.$t("reports.view_pdf")),1)])])])}}},ve={class:"grid gap-8 md:grid-cols-12 pt-10"},ge={class:"col-span-8 md:col-span-4"},Ye={class:"flex flex-col mt-6 lg:space-x-3 lg:flex-row"},De=c("div",{class:"hidden w-5 h-0 mx-4 border border-gray-400 border-solid xl:block",style:{"margin-top":"2.5rem"}},null,-1),we={class:"col-span-8"},Me=["src"],Be={setup(Q){const v=U();v.downloadReport=O;const{t:g}=j(),u=C([{label:g("dateRange.today"),key:"Today"},{label:g("dateRange.this_week"),key:"This Week"},{label:g("dateRange.this_month"),key:"This Month"},{label:g("dateRange.this_quarter"),key:"This Quarter"},{label:g("dateRange.this_year"),key:"This Year"},{label:g("dateRange.previous_week"),key:"Previous Week"},{label:g("dateRange.previous_month"),key:"Previous Month"},{label:g("dateRange.previous_quarter"),key:"Previous Quarter"},{label:g("dateRange.previous_year"),key:"Previous Year"},{label:g("dateRange.custom"),key:"Custom"}]),B=h(u[2]),n=C({from_date:o().startOf("month").format("YYYY-MM-DD").toString(),to_date:o().endOf("month").format("YYYY-MM-DD").toString()});let y=h(null);const w=$(()=>y.value),D=z(),e=$(()=>D.selectedCompany);let Y=h(null);F(()=>{Y.value=`/reports/tax-summary/${e.value.unique_hash}`,y.value=s.value});const s=$(()=>`${Y.value}?from_date=${o(n.from_date).format("YYYY-MM-DD")}&to_date=${o(n.to_date).format("YYYY-MM-DD")}`);let R=h(new Date);L(R.value,t=>{n.from_date=o(t).startOf("year").toString(),n.to_date=o(t).endOf("year").toString()});function r(t,l){return o()[t](l).format("YYYY-MM-DD")}function d(t,l){return o().subtract(1,l)[t](l).format("YYYY-MM-DD")}function P(){switch(B.value.key){case"Today":n.from_date=o().format("YYYY-MM-DD"),n.to_date=o().format("YYYY-MM-DD");break;case"This Week":n.from_date=r("startOf","isoWeek"),n.to_date=r("endOf","isoWeek");break;case"This Month":n.from_date=r("startOf","month"),n.to_date=r("endOf","month");break;case"This Quarter":n.from_date=r("startOf","quarter"),n.to_date=r("endOf","quarter");break;case"This Year":n.from_date=r("startOf","year"),n.to_date=r("endOf","year");break;case"Previous Week":n.from_date=d("startOf","isoWeek"),n.to_date=d("endOf","isoWeek");break;case"Previous Month":n.from_date=d("startOf","month"),n.to_date=d("endOf","month");break;case"Previous Quarter":n.from_date=d("startOf","quarter"),n.to_date=d("endOf","quarter");break;case"Previous Year":n.from_date=d("startOf","year"),n.to_date=d("endOf","year");break}}async function x(){let t=await _();return window.open(w.value,"_blank"),t}function _(){return y.value=s.value,!0}function O(){!_(),window.open(w.value+"&download=true"),setTimeout(()=>{y.value=s.value},200)}return(t,l)=>{const S=i("BaseMultiselect"),M=i("BaseInputGroup"),T=i("BaseDatePicker"),f=i("BaseButton"),k=i("BaseIcon");return q(),N("div",ve,[c("div",ge,[a(M,{label:t.$t("reports.taxes.date_range"),class:"col-span-12 md:col-span-8"},{default:m(()=>[a(S,{modelValue:B.value,"onUpdate:modelValue":[l[0]||(l[0]=b=>B.value=b),P],options:p(u),"value-prop":"key","track-by":"key",label:"label",object:""},null,8,["modelValue","options"])]),_:1},8,["label"]),c("div",Ye,[a(M,{label:t.$t("reports.taxes.from_date")},{default:m(()=>[a(T,{modelValue:p(n).from_date,"onUpdate:modelValue":l[1]||(l[1]=b=>p(n).from_date=b)},null,8,["modelValue"])]),_:1},8,["label"]),De,a(M,{label:t.$t("reports.taxes.to_date")},{default:m(()=>[a(T,{modelValue:p(n).to_date,"onUpdate:modelValue":l[2]||(l[2]=b=>p(n).to_date=b)},null,8,["modelValue"])]),_:1},8,["label"])]),a(f,{variant:"primary-outline",class:"content-center hidden mt-0 w-md md:flex md:mt-8",type:"submit",onClick:H(_,["prevent"])},{default:m(()=>[I(V(t.$t("reports.update_report")),1)]),_:1},8,["onClick"])]),c("div",we,[c("iframe",{src:p(w),class:"hidden w-full h-screen border-gray-100 border-solid rounded md:flex"},null,8,Me),c("a",{class:"flex items-center justify-center h-10 px-5 py-1 text-sm font-medium leading-none text-center text-white rounded whitespace-nowrap md:hidden bg-primary-500",onClick:x},[a(k,{name:"DocumentTextIcon",class:"h-5 mr-2"}),c("span",null,V(t.$t("reports.view_pdf")),1)])])])}}},$e={setup(Q){const v=U();function g(){v.downloadReport()}return(u,B)=>{const n=i("BaseBreadcrumbItem"),y=i("BaseBreadcrumb"),w=i("BaseIcon"),D=i("BaseButton"),e=i("BasePageHeader"),Y=i("BaseTab"),s=i("BaseTabGroup"),R=i("BasePage");return q(),J(R,null,{default:m(()=>[a(e,{title:u.$tc("reports.report",2)},{actions:m(()=>[a(D,{variant:"primary",class:"ml-4",onClick:g},{left:m(r=>[a(w,{name:"DownloadIcon",class:K(r.class)},null,8,["class"])]),default:m(()=>[I(" "+V(u.$t("reports.download_pdf")),1)]),_:1})]),default:m(()=>[a(y,null,{default:m(()=>[a(n,{title:u.$t("general.home"),to:"/admin/dashboard"},null,8,["title"]),a(n,{title:u.$tc("reports.report",2),to:"/admin/reports",active:""},null,8,["title"])]),_:1})]),_:1},8,["title"]),a(s,{class:"p-2"},{default:m(()=>[a(Y,{title:u.$t("reports.sales.sales"),"tab-panel-container":"px-0 py-0"},{default:m(()=>[a(ne,{ref:(r,d)=>{d.report=r}},null,512)]),_:1},8,["title"]),a(Y,{title:u.$t("reports.profit_loss.profit_loss"),"tab-panel-container":"px-0 py-0"},{default:m(()=>[a(he,{ref:(r,d)=>{d.report=r}},null,512)]),_:1},8,["title"]),a(Y,{title:u.$t("reports.expenses.expenses"),"tab-panel-container":"px-0 py-0"},{default:m(()=>[a(me,{ref:(r,d)=>{d.report=r}},null,512)]),_:1},8,["title"]),a(Y,{title:u.$t("reports.taxes.taxes"),"tab-panel-container":"px-0 py-0"},{default:m(()=>[a(Be,{ref:(r,d)=>{d.report=r}},null,512)]),_:1},8,["title"])]),_:1})]),_:1})}}};export{$e as default};