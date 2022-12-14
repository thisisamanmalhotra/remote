import{D as I,_ as L,a as M}from"./EstimateIcon.b0e4d06f.js";import{o as m,e as C,m as $,h as r,a as V,r as i,l as h,w as s,f as t,g as z,t as u,aj as F,ah as w,u as n,i as _,C as T,z as A,k as D}from"./vendor.4cee486b.js";import{u as v}from"./global.0e5ae7ae.js";import{h as Z}from"./auth.2475e761.js";import{_ as k}from"./main.3742ff98.js";import S from"./BaseTable.8712c8ef.js";const q=r("circle",{cx:"25",cy:"25",r:"25",fill:"#EAF1FB"},null,-1),N=r("path",{d:"M17.8 17.8C17.1635 17.8 16.5531 18.0529 16.103 18.503C15.6529 18.9531 15.4 19.5635 15.4 20.2V21.4H34.6V20.2C34.6 19.5635 34.3472 18.9531 33.8971 18.503C33.447 18.0529 32.8365 17.8 32.2 17.8H17.8Z",fill:"currentColor"},null,-1),O=r("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M34.6 23.8H15.4V29.8C15.4 30.4366 15.6529 31.047 16.103 31.4971C16.5531 31.9472 17.1635 32.2 17.8 32.2H32.2C32.8365 32.2 33.447 31.9472 33.8971 31.4971C34.3472 31.047 34.6 30.4366 34.6 29.8V23.8ZM17.8 28.6C17.8 28.2818 17.9265 27.9766 18.1515 27.7515C18.3765 27.5265 18.6818 27.4 19 27.4H20.2C20.5183 27.4 20.8235 27.5265 21.0486 27.7515C21.2736 27.9766 21.4 28.2818 21.4 28.6C21.4 28.9183 21.2736 29.2235 21.0486 29.4486C20.8235 29.6736 20.5183 29.8 20.2 29.8H19C18.6818 29.8 18.3765 29.6736 18.1515 29.4486C17.9265 29.2235 17.8 28.9183 17.8 28.6ZM23.8 27.4C23.4818 27.4 23.1765 27.5265 22.9515 27.7515C22.7265 27.9766 22.6 28.2818 22.6 28.6C22.6 28.9183 22.7265 29.2235 22.9515 29.4486C23.1765 29.6736 23.4818 29.8 23.8 29.8H25C25.3183 29.8 25.6235 29.6736 25.8486 29.4486C26.0736 29.2235 26.2 28.9183 26.2 28.6C26.2 28.2818 26.0736 27.9766 25.8486 27.7515C25.6235 27.5265 25.3183 27.4 25 27.4H23.8Z",fill:"currentColor"},null,-1),G=[q,N,O],R={props:{colorClass:{type:String,default:"text-primary-500"}},setup(c){return(a,o)=>(m(),C("svg",{width:"50",height:"50",viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:$(c.colorClass)},G,2))}},{defineStore:J}=window.pinia,P=J({id:"dashboard",state:()=>({recentInvoices:[],recentEstimates:[],invoiceCount:0,estimateCount:0,paymentCount:0,totalDueAmount:[],isDashboardDataLoaded:!1}),actions:{loadData(c){const a=v();return new Promise((o,d)=>{V.get(`/api/v1/${a.companySlug}/customer/dashboard`,{data:c}).then(e=>{this.totalDueAmount=e.data.due_amount,this.estimateCount=e.data.estimate_count,this.invoiceCount=e.data.invoice_count,this.paymentCount=e.data.payment_count,this.recentInvoices=e.data.recentInvoices,this.recentEstimates=e.data.recentEstimates,a.getDashboardDataLoaded=!0,o(e)}).catch(e=>{Z(e),d(e)})})}}}),K={},Q={class:"flex items-center"};function U(c,a){const o=i("BaseContentPlaceholdersText"),d=i("BaseContentPlaceholdersBox"),e=i("BaseContentPlaceholders");return m(),h(e,{rounded:!0,class:"relative flex justify-between w-full p-3 bg-white rounded shadow lg:col-span-3 xl:p-4"},{default:s(()=>[r("div",null,[t(o,{class:"h-5 -mb-1 w-14 xl:mb-6 xl:h-7",lines:1}),t(o,{class:"h-3 w-28 xl:h-4",lines:1})]),r("div",Q,[t(d,{circle:!0,class:"w-10 h-10 xl:w-12 xl:h-12"})])]),_:1})}var W=k(K,[["render",U]]);const X={},Y={class:"flex items-center"};function ee(c,a){const o=i("BaseContentPlaceholdersText"),d=i("BaseContentPlaceholdersBox"),e=i("BaseContentPlaceholders");return m(),h(e,{rounded:!0,class:"relative flex justify-between w-full p-3 bg-white rounded shadow lg:col-span-2 xl:p-4"},{default:s(()=>[r("div",null,[t(o,{class:"w-12 h-5 -mb-1 xl:mb-6 xl:h-7",lines:1}),t(o,{class:"w-20 h-3 xl:h-4",lines:1})]),r("div",Y,[t(d,{circle:!0,class:"w-10 h-10 xl:w-12 xl:h-12"})])]),_:1})}var te=k(X,[["render",ee]]);const ae={class:"text-xl font-semibold leading-tight text-black xl:text-3xl"},se={class:"block mt-1 text-sm leading-tight text-gray-500 xl:text-lg"},oe={class:"flex items-center"},f={props:{iconComponent:{type:Object,required:!0},loading:{type:Boolean,default:!1},route:{type:Object,required:!0},label:{type:String,required:!0},large:{type:Boolean,default:!1}},setup(c){return(a,o)=>{const d=i("router-link");return c.loading?c.large?(m(),h(W,{key:1})):(m(),h(te,{key:2})):(m(),h(d,{key:0,class:$(["relative flex justify-between p-3 bg-white rounded shadow hover:bg-gray-50 xl:p-4 lg:col-span-2",{"lg:!col-span-3":c.large}]),to:c.route},{default:s(()=>[r("div",null,[r("span",ae,[z(a.$slots,"default")]),r("span",se,u(c.label),1)]),r("div",oe,[(m(),h(F(c.iconComponent),{class:"w-10 h-10 xl:w-12 xl:h-12"}))])]),_:3},8,["class","to"]))}}},ne={class:"grid gap-6 sm:grid-cols-2 lg:grid-cols-9 xl:gap-8"},le={setup(c){w("utils");const a=v(),o=P();return o.loadData(),(d,e)=>{const g=i("BaseFormatMoney");return m(),C("div",ne,[t(f,{"icon-component":I,loading:!n(a).getDashboardDataLoaded,route:{name:"invoices.dashboard"},large:!0,label:d.$t("dashboard.cards.due_amount")},{default:s(()=>[t(g,{amount:n(o).totalDueAmount,currency:n(a).currency},null,8,["amount","currency"])]),_:1},8,["loading","route","label"]),t(f,{"icon-component":L,loading:!n(a).getDashboardDataLoaded,route:{name:"invoices.dashboard"},label:d.$t("dashboard.cards.invoices")},{default:s(()=>[_(u(n(o).invoiceCount),1)]),_:1},8,["loading","route","label"]),t(f,{"icon-component":M,loading:!n(a).getDashboardDataLoaded,route:{name:"estimates.dashboard"},label:d.$t("dashboard.cards.estimates")},{default:s(()=>[_(u(n(o).estimateCount),1)]),_:1},8,["loading","route","label"]),t(f,{"icon-component":R,loading:!n(a).getDashboardDataLoaded,route:{name:"payments.dashboard"},label:d.$t("dashboard.cards.payments")},{default:s(()=>[_(u(n(o).paymentCount),1)]),_:1},8,["loading","route","label"])])}}},re={class:"grid grid-cols-1 gap-6 mt-10 xl:grid-cols-2"},ce={class:"due-invoices"},de={class:"relative z-10 flex items-center justify-between mb-3"},ie={class:"mb-0 text-xl font-semibold leading-normal"},ue={class:"recent-estimates"},me={class:"relative z-10 flex items-center justify-between mb-3"},_e={class:"mb-0 text-xl font-semibold leading-normal"},he={setup(c){const a=v(),o=P(),{tm:d,t:e}=T();w("utils"),A();const g=D(()=>[{key:"formattedDueDate",label:e("dashboard.recent_invoices_card.due_on")},{key:"invoice_number",label:e("invoices.number")},{key:"paid_status",label:e("invoices.status")},{key:"due_amount",label:e("dashboard.recent_invoices_card.amount_due")}]),j=D(()=>[{key:"formattedEstimateDate",label:e("dashboard.recent_estimate_card.date")},{key:"estimate_number",label:e("estimates.number")},{key:"status",label:e("estimates.status")},{key:"total",label:e("dashboard.recent_estimate_card.amount_due")}]);return(b,p)=>{const x=i("BaseButton"),y=i("router-link"),E=i("BasePaidStatusBadge"),B=i("BaseFormatMoney"),H=i("BaseEstimateStatusBadge");return m(),C("div",re,[r("div",ce,[r("div",de,[r("h6",ie,u(b.$t("dashboard.recent_invoices_card.title")),1),t(x,{size:"sm",variant:"primary-outline",onClick:p[0]||(p[0]=l=>b.$router.push({name:"invoices.dashboard"}))},{default:s(()=>[_(u(b.$t("dashboard.recent_invoices_card.view_all")),1)]),_:1})]),t(S,{data:n(o).recentInvoices,columns:n(g),loading:!n(a).getDashboardDataLoaded},{"cell-invoice_number":s(({row:l})=>[t(y,{to:{path:`/${n(a).companySlug}/customer/invoices/${l.data.id}/view`},class:"font-medium text-primary-500"},{default:s(()=>[_(u(l.data.invoice_number),1)]),_:2},1032,["to"])]),"cell-paid_status":s(({row:l})=>[t(E,{status:l.data.paid_status},{default:s(()=>[_(u(l.data.paid_status),1)]),_:2},1032,["status"])]),"cell-due_amount":s(({row:l})=>[t(B,{amount:l.data.due_amount,currency:n(a).currency},null,8,["amount","currency"])]),_:1},8,["data","columns","loading"])]),r("div",ue,[r("div",me,[r("h6",_e,u(b.$t("dashboard.recent_estimate_card.title")),1),t(x,{variant:"primary-outline",size:"sm",onClick:p[1]||(p[1]=l=>b.$router.push({name:"estimates.dashboard"}))},{default:s(()=>[_(u(b.$t("dashboard.recent_estimate_card.view_all")),1)]),_:1})]),t(S,{data:n(o).recentEstimates,columns:n(j),loading:!n(a).getDashboardDataLoaded},{"cell-estimate_number":s(({row:l})=>[t(y,{to:{path:`/${n(a).companySlug}/customer/estimates/${l.data.id}/view`},class:"font-medium text-primary-500"},{default:s(()=>[_(u(l.data.estimate_number),1)]),_:2},1032,["to"])]),"cell-status":s(({row:l})=>[t(H,{status:l.data.status,class:"px-3 py-1"},{default:s(()=>[_(u(l.data.status),1)]),_:2},1032,["status"])]),"cell-total":s(({row:l})=>[t(B,{amount:l.data.total,currency:n(a).currency},null,8,["amount","currency"])]),_:1},8,["data","columns","loading"])])])}}},xe={setup(c){return(a,o)=>{const d=i("BasePage");return m(),h(d,null,{default:s(()=>[t(le),t(he)]),_:1})}}};export{xe as default};
