/*!
 App Connect Sockets
 Version: 2.0.0-beta.5
 (c) 2023 Wappler.io
 @build 2023-12-14 13:03:11
 */
dmx.__sockets=Object.create(null),dmx.Socket=function(t="/"){let e=dmx.__sockets[t];if(!e){let n="";const s=document.querySelector('[src$="socket.io/socket.io.js"]');s&&(n=s.getAttribute("src").replace(/\/?socket\.io\/socket\.io\.js/,"")),e=io(n+t,{transports:["websocket","polling"]}),e.on("connect_error",(()=>{e.io.opts.transports=["polling","websocket"]})),dmx.__sockets[t]=e}return e},dmx.Actions({"socket.emit":function(t){return t=this.parse(t),dmx.Socket(t.namespace).emit(t.eventName,t.params)},"socket.request":function(t){return t=this.parse(t),dmx.Socket(t.namespace).timeout(t.timeout||1e4).emitWithAck(t.eventName,t.params)}}),dmx.Component("socket",{initialData:{id:null,connected:!1,disconnected:!0},attributes:{namespace:{type:String,default:"/"}},methods:{emit(t,e){return this._socket.emit(t,e)},request(t,e){return this._socket.emitWithAck(t,e)}},events:{connect:Event,disconnect:Event,connect_error:Event,message:Event},render:!1,init(t){if(this._connectHandler=this._connectHandler.bind(this),this._disconnectHandler=this._disconnectHandler.bind(this),this._connectErrorHandler=this._connectErrorHandler.bind(this),this._messageHandler=this._messageHandler.bind(this),this._socket=dmx.Socket(this.props.namespace),this._socket.on("connect",this._connectHandler),this._socket.on("disconnect",this._disconnectHandler),this._socket.on("connect_error",this._connectErrorHandler),this._socket.onAny(this._messageHandler),t.textContent.trim())try{this._config=(window.Hjson?Hjson:JSON).parse(t.textContent),Object.keys(this._config).forEach((t=>{this._socket.on(t,((e,n)=>{dmx.Flow.run(this._config[t],dmx.DataScope({$param:e},this)).then((t=>{"function"==typeof n&&n(t)}))}))}))}catch(t){console.error(t)}},destroy(){this._socket.off(),this._socket.offAny()},_updateData(){const{id:t,connected:e,disconnected:n}=this._socket;this.set({id:t,connected:e,disconnected:n})},_connectHandler(){this._updateData(),this.dispatchEvent("connect")},_disconnectHandler(t){this._updateData(),this.dispatchEvent("disconnect",{},{reason:t})},_connectErrorHandler(t){this._updateData(),this.dispatchEvent("connect_error",{},{message:t.message})},_messageHandler(t,e){this.dispatchEvent("message",{},e,t)}});
//# sourceMappingURL=dmxSockets.js.map
