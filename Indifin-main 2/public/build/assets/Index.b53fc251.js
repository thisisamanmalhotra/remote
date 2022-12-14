import{C as M,z as oe,aN as G,ah as re,r as o,o as p,l as f,w as t,u as n,f as a,i as g,t as d,B as b,a0 as ue,k as D,Y as ie,Z as ce,aS as de,h as B,q as A,ag as T,m as V,j as E,Q as me,x as H}from"./vendor.4cee486b.js";import{u as O}from"./users.7a450be0.js";import{j as W,u as q,e as Q}from"./main.3742ff98.js";import{_ as pe}from"./AstronautIcon.00725825.js";const fe={props:{row:{type:Object,default:null},table:{type:Object,default:null},loadData:{type:Function,default:null}},setup(U){const $=U,u=W();q();const{t:_}=M();Q();const y=oe();G();const k=O();re("utils");function m(i){u.openDialog({title:_("general.are_you_sure"),message:_("users.confirm_delete",1),yesLabel:_("general.ok"),noLabel:_("general.cancel"),variant:"danger",size:"lg",hideNoButton:!1}).then(l=>{l&&k.deleteUser({ids:[i]}).then(h=>{h&&$.loadData&&$.loadData()})})}return(i,l)=>{const h=o("BaseIcon"),C=o("BaseButton"),v=o("BaseDropdownItem"),w=o("router-link"),x=o("BaseDropdown");return p(),f(x,null,{activator:t(()=>[n(y).name==="users.view"?(p(),f(C,{key:0,variant:"primary"},{default:t(()=>[a(h,{name:"DotsHorizontalIcon",class:"h-5 text-white"})]),_:1})):(p(),f(h,{key:1,name:"DotsHorizontalIcon",class:"h-5 text-gray-500"}))]),default:t(()=>[a(w,{to:`/admin/users/${U.row.id}/edit`},{default:t(()=>[a(v,null,{default:t(()=>[a(h,{name:"PencilIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),g(" "+d(i.$t("general.edit")),1)]),_:1})]),_:1},8,["to"]),a(v,{onClick:l[0]||(l[0]=S=>m(U.row.id))},{default:t(()=>[a(h,{name:"TrashIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),g(" "+d(i.$t("general.delete")),1)]),_:1})]),_:1})}}},_e={class:"flex items-center justify-end space-x-5"},he={class:"relative table-container"},ge={class:"relative flex items-center justify-end h-5 border-gray-200 border-solid"},Be={class:"flex text-sm font-medium cursor-pointer select-none text-primary-400"},ye={class:"absolute z-10 items-center left-6 top-2.5 select-none"},ve={class:"custom-control custom-checkbox"},Ue={setup(U){q();const $=W(),u=O(),_=Q();G();let y=b(!1),k=b(!0);b(null),b("created_at"),b(!1);const{t:m}=M();let i=b(null),l=ue({name:"",email:"",phone:""});const h=D(()=>[{key:"status",thClass:"extra",tdClass:"font-medium text-gray-900",sortable:!1},{key:"name",label:m("users.name"),thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"email",label:"Email"},{key:"phone",label:m("users.phone")},{key:"created_at",label:m("users.added_on")},{key:"actions",tdClass:"text-right text-sm font-medium",sortable:!1}]),C=D(()=>!u.totalUsers&&!k.value),v=D({get:()=>u.selectedUsers,set:s=>u.selectUser(s)}),w=D({get:()=>u.selectAllField,set:s=>u.setSelectAllState(s)});ie(l,()=>{x()},{deep:!0}),ce(()=>{u.fetchUsers(),u.fetchRoles()}),de(()=>{u.selectAllField&&u.selectAllUsers()});function x(){S()}function S(){i.value&&i.value.refresh()}async function X({page:s,filter:r,sort:I}){let F={display_name:l.name!==null?l.name:"",phone:l.phone!==null?l.phone:"",email:l.email!==null?l.email:"",orderByField:I.fieldName||"created_at",orderBy:I.order||"desc",page:s};k.value=!0;let c=await u.fetchUsers(F);return k.value=!1,{data:c.data.data,pagination:{totalPages:c.data.meta.last_page,currentPage:s,totalCount:c.data.meta.total,limit:10}}}function L(){l.name="",l.email="",l.phone=null}function Y(){y.value&&L(),y.value=!y.value}function Z(){$.openDialog({title:m("general.are_you_sure"),message:m("users.confirm_delete",2),yesLabel:m("general.ok"),noLabel:m("general.cancel"),variant:"danger",size:"lg",hideNoButton:!1}).then(s=>{s&&u.deleteMultipleUsers().then(r=>{r.data.success&&i.value&&i.value.refresh()})})}return(s,r)=>{const I=o("BaseBreadcrumbItem"),F=o("BaseBreadcrumb"),c=o("BaseIcon"),j=o("BaseButton"),J=o("BasePageHeader"),P=o("BaseInput"),N=o("BaseInputGroup"),K=o("BaseFilterWrapper"),ee=o("BaseEmptyPlaceholder"),te=o("BaseDropdownItem"),ae=o("BaseDropdown"),R=o("BaseCheckbox"),se=o("router-link"),le=o("BaseTable"),ne=o("BasePage");return p(),f(ne,null,{default:t(()=>[a(J,{title:s.$t("users.title")},{actions:t(()=>[B("div",_e,[A(a(j,{variant:"primary-outline",onClick:Y},{right:t(e=>[n(y)?(p(),f(c,{key:1,name:"XIcon",class:V(e.class)},null,8,["class"])):(p(),f(c,{key:0,name:"FilterIcon",class:V(e.class)},null,8,["class"]))]),default:t(()=>[g(d(s.$t("general.filter"))+" ",1)]),_:1},512),[[T,n(u).totalUsers]]),n(_).currentUser.is_owner?(p(),f(j,{key:0,onClick:r[0]||(r[0]=e=>s.$router.push("users/create"))},{left:t(e=>[a(c,{name:"PlusIcon",class:V(e.class),"aria-hidden":"true"},null,8,["class"])]),default:t(()=>[g(" "+d(s.$t("users.add_user")),1)]),_:1})):E("",!0)])]),default:t(()=>[a(F,null,{default:t(()=>[a(I,{title:s.$t("general.home"),to:"dashboard"},null,8,["title"]),a(I,{title:s.$tc("users.title",2),to:"#",active:""},null,8,["title"])]),_:1})]),_:1},8,["title"]),a(K,{show:n(y),class:"mt-3",onClear:L},{default:t(()=>[a(N,{label:s.$tc("users.name"),class:"flex-1 mt-2 mr-4"},{default:t(()=>[a(P,{modelValue:n(l).name,"onUpdate:modelValue":r[1]||(r[1]=e=>n(l).name=e),type:"text",name:"name",autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label"]),a(N,{label:s.$tc("users.email"),class:"flex-1 mt-2 mr-4"},{default:t(()=>[a(P,{modelValue:n(l).email,"onUpdate:modelValue":r[2]||(r[2]=e=>n(l).email=e),type:"text",name:"email",autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label"]),a(N,{class:"flex-1 mt-2",label:s.$tc("users.phone")},{default:t(()=>[a(P,{modelValue:n(l).phone,"onUpdate:modelValue":r[3]||(r[3]=e=>n(l).phone=e),type:"text",name:"phone",autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["show"]),A(a(ee,{title:s.$t("users.no_users"),description:s.$t("users.list_of_users")},{actions:t(()=>[n(_).currentUser.is_owner?(p(),f(j,{key:0,variant:"primary-outline",onClick:r[4]||(r[4]=e=>s.$router.push("/admin/users/create"))},{left:t(e=>[a(c,{name:"PlusIcon",class:V(e.class)},null,8,["class"])]),default:t(()=>[g(" "+d(s.$t("users.add_user")),1)]),_:1})):E("",!0)]),default:t(()=>[a(pe,{class:"mt-5 mb-4"})]),_:1},8,["title","description"]),[[T,n(C)]]),A(B("div",he,[B("div",ge,[n(u).selectedUsers.length?(p(),f(ae,{key:0},{activator:t(()=>[B("span",Be,[g(d(s.$t("general.actions"))+" ",1),a(c,{name:"ChevronDownIcon",class:"h-5"})])]),default:t(()=>[a(te,{onClick:Z},{default:t(()=>[a(c,{name:"TrashIcon",class:"h-5 mr-3 text-gray-600"}),g(" "+d(s.$t("general.delete")),1)]),_:1})]),_:1})):E("",!0)]),a(le,{ref:(e,z)=>{z.table=e,H(i)?i.value=e:i=e},data:X,columns:n(h),class:"mt-3"},me({header:t(()=>[B("div",ye,[a(R,{modelValue:n(w),"onUpdate:modelValue":r[5]||(r[5]=e=>H(w)?w.value=e:null),variant:"primary",onChange:n(u).selectAllUsers},null,8,["modelValue","onChange"])])]),"cell-status":t(({row:e})=>[B("div",ve,[a(R,{id:e.data.id,modelValue:n(v),"onUpdate:modelValue":r[6]||(r[6]=z=>H(v)?v.value=z:null),value:e.data.id,variant:"primary"},null,8,["id","modelValue","value"])])]),"cell-name":t(({row:e})=>[a(se,{to:{path:`users/${e.data.id}/edit`},class:"font-medium text-primary-500"},{default:t(()=>[g(d(e.data.name),1)]),_:2},1032,["to"])]),"cell-phone":t(({row:e})=>[B("span",null,d(e.data.phone?e.data.phone:"-"),1)]),"cell-created_at":t(({row:e})=>[B("span",null,d(e.data.formatted_created_at),1)]),_:2},[n(_).currentUser.is_owner?{name:"cell-actions",fn:t(({row:e})=>[a(fe,{row:e.data,table:n(i),"load-data":S},null,8,["row","table"])])}:void 0]),1032,["columns"])],512),[[T,!n(C)]])]),_:1})}}};export{Ue as default};
