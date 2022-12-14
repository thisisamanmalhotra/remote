var ie=Object.defineProperty;var X=Object.getOwnPropertySymbols;var ue=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var J=(C,c,n)=>c in C?ie(C,c,{enumerable:!0,configurable:!0,writable:!0,value:n}):C[c]=n,G=(C,c)=>{for(var n in c||(c={}))ue.call(c,n)&&J(C,n,c[n]);if(X)for(var n of X(c))de.call(c,n)&&J(C,n,c[n]);return C};import{u as Z}from"./exchange-rate.ec168c0b.js";import{c as K,b as ge,j as ve}from"./main.3742ff98.js";import{C as Q,B as R,k as b,E as V,H as T,J as W,M as pe,O as he,Y,X as me,r as v,o as B,l as I,w as l,h as y,i as w,t as x,u as e,f as s,j as D,m as ee,P as fe,ah as ye,e as _e,aZ as xe,x as Ce,a_ as Ee,a$ as $e,b0 as be,F as ke,a0 as Re}from"./vendor.4cee486b.js";import Be from"./BaseTable.8712c8ef.js";const we={class:"flex justify-between w-full"},Ve=["onSubmit"],Ie={class:"px-4 md:px-8 py-8 overflow-y-auto sm:p-6"},Se={class:"z-0 flex justify-end p-4 border-t border-gray-200 border-solid"},Me={setup(C){const{t:c}=Q();let n=R(!1),u=R(!1),E=R(!1),m=R([]),p=R([]);const _=K(),t=Z();let q=R([]);const O=b(()=>({currentExchangeRate:{key:{required:V.withMessage(c("validation.required"),T)},driver:{required:V.withMessage(c("validation.required"),T)},currencies:{required:V.withMessage(c("validation.required"),T)}},currencyConverter:{type:{required:V.withMessage(c("validation.required"),W(i))},url:{required:V.withMessage(c("validation.required"),W($)),url:V.withMessage(c("validation.invalid_url"),pe)}}})),z=b(()=>t.drivers.map(r=>Object.assign({},r,{key:c(r.key)}))),A=b(()=>_.active&&_.componentName==="ExchangeRateProviderModal");b(()=>_.title);const i=b(()=>t.currentExchangeRate.driver==="currency_converter"),$=b(()=>t.currencyConverter&&t.currencyConverter.type==="DEDICATED"),S=b(()=>{switch(t.currentExchangeRate.driver){case"currency_converter":return"https://www.currencyconverterapi.com";case"currency_freak":return"https://currencyfreaks.com";case"currency_layer":return"https://currencylayer.com";case"open_exchange_rate":return"https://openexchangerates.org";default:return""}}),o=he(O,b(()=>t));function N(){m.value=[]}function F(){const{currencies:r}=t.currentExchangeRate;m.value.forEach(a=>{r.forEach((h,f)=>{h===a&&r.splice(f,1)})}),m.value=[]}function P(){t.currentExchangeRate.key=null,t.currentExchangeRate.currencies=[],t.supportedCurrencies=[]}function d(){t.supportedCurrencies=[],p.value=[],t.currentExchangeRate={id:null,name:"",driver:"",key:"",active:!0,currencies:[]},t.currencyConverter={type:"",url:""},m.value=[]}async function M(){t.currentExchangeRate.driver="currency_converter";let r={};t.isEdit&&(r.provider_id=t.currentExchangeRate.id),u.value=!0,await t.fetchDefaultProviders(),await t.fetchActiveCurrency(r),p.value=t.currentExchangeRate.currencies,u.value=!1}Y(()=>i.value,(r,a)=>{r&&ae()},{immediate:!0}),Y(()=>t.currentExchangeRate.key,(r,a)=>{r&&j()}),Y(()=>{var r;return(r=t==null?void 0:t.currencyConverter)==null?void 0:r.type},(r,a)=>{r&&j()}),j=me.exports.debounce(j,500);function te(){return o.value.$touch(),ne(),!!(o.value.$invalid||m.value.length&&t.currentExchangeRate.active)}async function re(){if(te())return!0;let r=G({},t.currentExchangeRate);i.value&&(r.driver_config=G({},t.currencyConverter),$.value||(r.driver_config.url=""));const a=t.isEdit?t.updateProvider:t.addProvider;n.value=!0,await a(r).then(h=>{n.value=!1,_.refreshData&&_.refreshData(),U()}).catch(h=>{n.value=!1})}async function ae(){let r=await t.getCurrencyConverterServers();q.value=r.data.currency_converter_servers,t.currencyConverter.type="FREE"}function j(){var h;const{driver:r,key:a}=t.currentExchangeRate;if(r&&a){E.value=!0;let f={driver:r,key:a};if(i.value&&!t.currencyConverter.type){E.value=!1;return}((h=t==null?void 0:t.currencyConverter)==null?void 0:h.type)&&(f.type=t.currencyConverter.type),t.fetchCurrencies(f).then(k=>{E.value=!1}).catch(k=>{E.value=!1})}}function ne(r=!0){var h;m.value=[];const{currencies:a}=t.currentExchangeRate;a.length&&((h=t.activeUsedCurrencies)==null?void 0:h.length)&&a.forEach(f=>{t.activeUsedCurrencies.includes(f)&&m.value.push(f)})}function U(){_.closeModal(),setTimeout(()=>{d(),o.value.$reset()},300)}return(r,a)=>{const h=v("BaseIcon"),f=v("BaseMultiselect"),k=v("BaseInputGroup"),L=v("BaseInput"),oe=v("BaseSwitch"),se=v("BaseInputGrid"),le=v("BaseInfoAlert"),H=v("BaseButton"),ce=v("BaseModal");return B(),I(ce,{show:e(A),onClose:U,onOpen:M},{header:l(()=>[y("div",we,[w(x(e(_).title)+" ",1),s(h,{name:"XIcon",class:"w-6 h-6 text-gray-500 cursor-pointer",onClick:U})])]),default:l(()=>[y("form",{onSubmit:fe(re,["prevent"])},[y("div",Ie,[s(se,{layout:"one-column"},{default:l(()=>[s(k,{label:r.$tc("settings.exchange_rate.driver"),"content-loading":e(u),required:"",error:e(o).currentExchangeRate.driver.$error&&e(o).currentExchangeRate.driver.$errors[0].$message,"help-text":e(S)},{default:l(()=>[s(f,{modelValue:e(t).currentExchangeRate.driver,"onUpdate:modelValue":[a[0]||(a[0]=g=>e(t).currentExchangeRate.driver=g),P],options:e(z),"content-loading":e(u),"value-prop":"value","can-deselect":!0,label:"key",searchable:!0,invalid:e(o).currentExchangeRate.driver.$error,"track-by":"key",onInput:a[1]||(a[1]=g=>e(o).currentExchangeRate.driver.$touch())},null,8,["modelValue","options","content-loading","invalid"])]),_:1},8,["label","content-loading","error","help-text"]),e(i)?(B(),I(k,{key:0,required:"",label:r.$t("settings.exchange_rate.server"),"content-loading":e(u),error:e(o).currencyConverter.type.$error&&e(o).currencyConverter.type.$errors[0].$message},{default:l(()=>[s(f,{modelValue:e(t).currencyConverter.type,"onUpdate:modelValue":[a[2]||(a[2]=g=>e(t).currencyConverter.type=g),P],"content-loading":e(u),"value-prop":"value",searchable:"",options:e(q),invalid:e(o).currencyConverter.type.$error,label:"value","track-by":"value"},null,8,["modelValue","content-loading","options","invalid"])]),_:1},8,["label","content-loading","error"])):D("",!0),s(k,{label:r.$t("settings.exchange_rate.key"),required:"","content-loading":e(u),error:e(o).currentExchangeRate.key.$error&&e(o).currentExchangeRate.key.$errors[0].$message},{default:l(()=>[s(L,{modelValue:e(t).currentExchangeRate.key,"onUpdate:modelValue":a[3]||(a[3]=g=>e(t).currentExchangeRate.key=g),"content-loading":e(u),type:"text",name:"key",loading:e(E),"loading-position":"right",invalid:e(o).currentExchangeRate.key.$error},null,8,["modelValue","content-loading","loading","invalid"])]),_:1},8,["label","content-loading","error"]),e(t).supportedCurrencies.length?(B(),I(k,{key:1,label:r.$t("settings.exchange_rate.currency"),"content-loading":e(u),error:e(o).currentExchangeRate.currencies.$error&&e(o).currentExchangeRate.currencies.$errors[0].$message,"help-text":r.$t("settings.exchange_rate.currency_help_text")},{default:l(()=>[s(f,{modelValue:e(t).currentExchangeRate.currencies,"onUpdate:modelValue":a[4]||(a[4]=g=>e(t).currentExchangeRate.currencies=g),"content-loading":e(u),"value-prop":"code",mode:"tags",searchable:"",options:e(t).supportedCurrencies,invalid:e(o).currentExchangeRate.currencies.$error,label:"code","track-by":"code","open-direction":"top",onInput:a[5]||(a[5]=g=>e(o).currentExchangeRate.currencies.$touch())},null,8,["modelValue","content-loading","options","invalid"])]),_:1},8,["label","content-loading","error","help-text"])):D("",!0),e($)?(B(),I(k,{key:2,label:r.$t("settings.exchange_rate.url"),"content-loading":e(u),error:e(o).currencyConverter.url.$error&&e(o).currencyConverter.url.$errors[0].$message},{default:l(()=>[s(L,{modelValue:e(t).currencyConverter.url,"onUpdate:modelValue":a[6]||(a[6]=g=>e(t).currencyConverter.url=g),"content-loading":e(u),type:"url",invalid:e(o).currencyConverter.url.$error,onInput:a[7]||(a[7]=g=>e(o).currencyConverter.url.$touch())},null,8,["modelValue","content-loading","invalid"])]),_:1},8,["label","content-loading","error"])):D("",!0),s(oe,{modelValue:e(t).currentExchangeRate.active,"onUpdate:modelValue":a[8]||(a[8]=g=>e(t).currentExchangeRate.active=g),class:"flex","label-right":r.$t("settings.exchange_rate.active")},null,8,["modelValue","label-right"])]),_:1}),e(m).length&&e(t).currentExchangeRate.active?(B(),I(le,{key:0,class:"mt-5",title:r.$t("settings.exchange_rate.currency_in_used"),lists:[e(m).toString()],actions:["Remove"],onHide:N,onRemove:F},null,8,["title","lists"])):D("",!0)]),y("div",Se,[s(H,{class:"mr-3",variant:"primary-outline",type:"button",disabled:e(n),onClick:U},{default:l(()=>[w(x(r.$t("general.cancel")),1)]),_:1},8,["disabled"]),s(H,{loading:e(n),disabled:e(n)||e(E),variant:"primary",type:"submit"},{left:l(g=>[e(n)?D("",!0):(B(),I(h,{key:0,name:"SaveIcon",class:ee(g.class)},null,8,["class"]))]),default:l(()=>[w(" "+x(e(t).isEdit?r.$t("general.update"):r.$t("general.save")),1)]),_:1},8,["loading","disabled"])])],40,Ve)]),_:1},8,["show"])}}},De={slot:"header",class:"flex flex-wrap justify-between lg:flex-nowrap"},qe={class:"text-lg font-medium text-left"},Ne={class:"mt-2 text-sm leading-snug text-left text-gray-500",style:{"max-width":"680px"}},Pe={class:"mt-4 lg:mt-0 lg:ml-2"},je={class:"capitalize"},Ue={class:"inline-block"},Te={setup(C){const{tm:c,t:n}=Q();ge();const u=Z(),E=K(),m=ve();let p=R("");const _=ye("utils"),t=b(()=>[{key:"driver",label:n("settings.exchange_rate.driver"),thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"key",label:n("settings.exchange_rate.key"),thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"active",label:n("settings.exchange_rate.active"),thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"actions",label:"",tdClass:"text-right text-sm font-medium",sortable:!1}]);async function q({page:i,sort:$}){let S=Re({orderByField:$.fieldName||"created_at",orderBy:$.order||"desc",page:i}),o=await u.fetchProviders(S);return{data:o.data.data,pagination:{totalPages:o.data.meta.last_page,currentPage:i,totalCount:o.data.meta.total,limit:5}}}function O(){E.openModal({title:n("settings.exchange_rate.new_driver"),componentName:"ExchangeRateProviderModal",size:"md",refreshData:p.value&&p.value.refresh})}function z(i){u.fetchProvider(i),E.openModal({title:n("settings.exchange_rate.edit_driver"),componentName:"ExchangeRateProviderModal",size:"md",data:i,refreshData:p.value&&p.value.refresh})}function A(i){m.openDialog({title:n("general.are_you_sure"),message:n("settings.exchange_rate.exchange_rate_confirm_delete"),yesLabel:n("general.ok"),noLabel:n("general.cancel"),variant:"danger",hideNoButton:!1,size:"lg"}).then(async $=>{$&&(await u.deleteExchangeRate(i),p.value&&p.value.refresh())})}return(i,$)=>{const S=v("BaseButton"),o=v("BaseBadge"),N=v("BaseDropdownItem"),F=v("BaseDropdown"),P=v("BaseCard");return B(),_e(ke,null,[s(Me),s(P,null,{default:l(()=>[y("div",De,[y("div",null,[y("h6",qe,x(i.$t("settings.menu_title.exchange_rate")),1),y("p",Ne,x(i.$t("settings.exchange_rate.providers_description")),1)]),y("div",Pe,[s(S,{variant:"primary-outline",size:"lg",onClick:O},{left:l(d=>[s(e(xe),{class:ee(d.class)},null,8,["class"])]),default:l(()=>[w(" "+x(i.$t("settings.exchange_rate.new_driver")),1)]),_:1})])]),s(Be,{ref:(d,M)=>{M.table=d,Ce(p)?p.value=d:p=d},class:"mt-16",data:q,columns:e(t)},{"cell-driver":l(({row:d})=>[y("span",je,x(d.data.driver.replace("_"," ")),1)]),"cell-active":l(({row:d})=>[s(o,{"bg-color":e(_).getBadgeStatusColor(d.data.active?"YES":"NO").bgColor,color:e(_).getBadgeStatusColor(d.data.active?"YES":"NO").color},{default:l(()=>[w(x(d.data.active?"YES":"NO"),1)]),_:2},1032,["bg-color","color"])]),"cell-actions":l(({row:d})=>[s(F,null,{activator:l(()=>[y("div",Ue,[s(e(Ee),{class:"w-5 text-gray-500"})])]),default:l(()=>[s(N,{onClick:M=>z(d.data.id)},{default:l(()=>[s(e($e),{class:"h-5 mr-3 text-gray-600"}),w(" "+x(i.$t("general.edit")),1)]),_:2},1032,["onClick"]),s(N,{onClick:M=>A(d.data.id)},{default:l(()=>[s(e(be),{class:"h-5 mr-3 text-gray-600"}),w(" "+x(i.$t("general.delete")),1)]),_:2},1032,["onClick"])]),_:2},1024)]),_:1},8,["columns"])]),_:1})],64)}}};export{Te as default};
