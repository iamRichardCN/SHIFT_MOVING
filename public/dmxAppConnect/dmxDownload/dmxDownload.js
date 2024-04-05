/*!
 App Connect Download
 Version: 2.0.0-beta.1
 (c) 2023 Wappler.io
 @build 2023-09-12 17:28:19
 */
dmx.Component("download",{initialData:{progress:{position:0,total:0,percent:0},lastError:{status:0,message:""}},attributes:{timeout:{type:Number,default:0},url:{type:String,default:""},filename:{type:String,default:""}},methods:{abort(){this._abort()},download(t){this._download(t)}},events:{done:Event,error:Event,start:Event,progress:ProgressEvent},init(){this._xhr=new XMLHttpRequest,this._xhr.addEventListener("load",this._loadHandler.bind(this)),this._xhr.addEventListener("abort",this._abortHandler.bind(this)),this._xhr.addEventListener("error",this._errorHandler.bind(this)),this._xhr.addEventListener("timeout",this._timeoutHandler.bind(this)),this._xhr.addEventListener("progress",this._progressHandler.bind(this))},_abort(){this._xhr.abort()},_download(t){if(this.url=t||this.props.url,this._xhr.abort(),this._trigger("start"),this._supportsCors(this.url))this._xhr.open("GET",this.url),this._xhr.responseType="blob",this._xhr.send();else{const t=document.createElement("a");t.href=this.url,t.download=this.props.filename||this.url.replace(/.*\//,"").replace(/\?.*/,"")||"download",t.rel="noopener",t.target="_blank",t.dispatchEvent(new MouseEvent("click"))}},_supportsCors(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return e.status>=200&&xhr.status<300},_trigger(t,e){requestAnimationFrame((()=>{this.dispatchEvent(t,e)}))},_reset(){this.set({progress:{position:0,total:0,percent:0},error:{status:0,message:"",response:null}})},_getFilename(){const t=this._xhr.getResponseHeader("Content-Disposition"),e=t&&t.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);return this.props.filename||!(!e||!e[1])&&e[1].replace(/['"]/g,"")||this.url.replace(/.*\//,"").replace(/\?.*/,"")||"download"},_loadHandler(){if(this._reset(),this._trigger("done"),this._xhr.status>=200&&this._xhr.status<300){var t=this._xhr.response,e=document.createElement("a");e.href=URL.createObjectURL(t),e.download=this.getFilename(),e.rel="noopener",setTimeout((()=>{URL.revokeObjectURL(e.href)}),4e4),setTimeout((()=>{e.dispatchEvent(new MouseEvent("click"))}),0)}else this.set("error",{status:this._xhr.status,message:this._xhr.statusText}),this._trigger("error")},_abortHandler(){this._reset(),this._trigger("done")},_errorHandler(){this._reset(),this.set("error",{status:0,message:"Failed to download"}),this._trigger("error"),this._trigger("done")},_timeoutHandler(){this._reset(),this.set("error",{status:0,message:"Download timeout"}),this._trigger("error"),this._trigger("done")},_progressHandler(t){var e=t.loaded||t.position,r=t.lengthComputable?Math.ceil(t.loaded/t.total*100):0;this.set("progress",{position:e,total:t.total,percent:r}),this._trigger("progress",{lengthComputable:t.lengthComputable,loaded:e,total:t.total})}});
//# sourceMappingURL=dmxDownload.js.map