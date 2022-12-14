import{a as o,d as l}from"./vendor.4cee486b.js";import{h as a,u as r}from"./main.3742ff98.js";const v=(k=!1)=>{const f=k?window.pinia.defineStore:l,{global:n}=window.i18n;return f({id:"disk",state:()=>({disks:[],diskDrivers:[],diskConfigData:null,selected_driver:"local",doSpaceDiskConfig:{name:"",selected_driver:"doSpaces",key:"",secret:"",region:"",bucket:"",endpoint:"",root:""},dropBoxDiskConfig:{name:"",selected_driver:"dropbox",token:"",key:"",secret:"",app:""},localDiskConfig:{name:"",selected_driver:"local",root:""},s3DiskConfigData:{name:"",selected_driver:"s3",key:"",secret:"",region:"",bucket:"",root:""}}),getters:{getDiskDrivers:e=>e.diskDrivers},actions:{fetchDiskEnv(e){return new Promise((s,t)=>{o.get(`/api/v1/disks/${e.disk}`).then(i=>{s(i)}).catch(i=>{a(i),t(i)})})},fetchDisks(e){return new Promise((s,t)=>{o.get("/api/v1/disks",{params:e}).then(i=>{this.disks=i.data.data,s(i)}).catch(i=>{a(i),t(i)})})},fetchDiskDrivers(){return new Promise((e,s)=>{o.get("/api/v1/disk/drivers").then(t=>{this.diskConfigData=t.data,this.diskDrivers=t.data.drivers,e(t)}).catch(t=>{a(t),s(t)})})},deleteFileDisk(e){return new Promise((s,t)=>{o.delete(`/api/v1/disks/${e}`).then(i=>{if(i.data.success){let d=this.disks.findIndex(c=>c.id===e);this.disks.splice(d,1),r().showNotification({type:"success",message:n.t("settings.disk.deleted_message")})}s(i)}).catch(i=>{a(i),t(i)})})},updateDisk(e){return new Promise((s,t)=>{o.put(`/api/v1/disks/${e.id}`,e).then(i=>{if(i.data){let d=this.disks.findIndex(c=>c.id===i.data.data);this.disks[d]=e.disks,r().showNotification({type:"success",message:n.t("settings.disk.success_set_default_disk")})}s(i)}).catch(i=>{a(i),t(i)})})},createDisk(e){return new Promise((s,t)=>{o.post("/api/v1/disks",e).then(i=>{i.data&&r().showNotification({type:"success",message:n.t("settings.disk.success_create")}),this.disks.push(i.data),s(i)}).catch(i=>{a(i),t(i)})})}}})()};export{v as u};