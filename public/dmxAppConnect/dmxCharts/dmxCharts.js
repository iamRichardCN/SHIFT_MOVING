/*!
 DMXzone Charts
 Version: 2.0.0-beta.2
 (c) 2023 Wappler.io
 @build 2023-10-02 15:25:51
 */
dmx.Component("chart",{attributes:{width:{type:Number,default:800},height:{type:Number,default:600},responsive:{type:Boolean,default:!1},type:{type:String,default:"line",enum:["line","area","bar","horizontalBar","pie","doughnut","radar","polarArea"]},colors:{type:[String,Array],default:"default"},legend:{type:String,default:""},data:{type:Array,default:[]},labels:{type:String,default:""},nogrid:{type:Boolean,default:!1},points:{type:Boolean,default:!1},pointStyle:{type:String,default:"circle",enum:["circle","cross","crossRot","dash","line","rect","rectRounded","rectRot","star","triangle"]},pointSize:{type:String,default:3},smooth:{type:Boolean,default:!1},thickness:{type:Number,default:1},dashed:{type:Boolean,default:!1},stacked:{type:Boolean,default:!1},multicolor:{type:Boolean,default:!1},cutout:{type:Number,default:50},noanimation:{type:Boolean,default:!1},fullbar:{type:Boolean,default:!1},labelX:{type:String,default:""},labelY:{type:String,default:""}},colors:{default:["#1c9f8d","#d94712","#2d81b9","#1aa042","#ad1999","#d89515","#d83148","#7e2dad","#828280","#ad312f","#1c9f8d","#d94712","#2d81b9","#1aa042","#ad1999","#d89515","#d83148","#7e2dad","#828280","#ad312f"],colors1:["#5DA5DA","#FAA43A","#60BD68","#F17CB0","#B2912F","#B276B2","#DECF3F","#F15854","#4D4D4D","#5DA5DA","#FAA43A","#60BD68","#F17CB0","#B2912F","#B276B2","#DECF3F","#F15854","#4D4D4D"],colors2:["#5cbae6","#b6d957","#fac364","#d998cb","#f2d249","#93b9c6","#ccc5a8","#52bacc","#98aafb","#5cbae6","#b6d957","#fac364","#d998cb","#f2d249","#93b9c6","#ccc5a8","#52bacc","#98aafb"],colors3:["#3678b3","#f47d0d","#479f2f","#ca2227","#9068bc","#87564b","#da77c1","#7f7f7f","#bbbc26","#4bbfcf","#3678b3","#f47d0d","#479f2f","#ca2227","#9068bc","#87564b","#da77c1","#7f7f7f","#bbbc26","#4bbfcf"],colors4:["#b1c7e8","#f8b978","#a2df8b","#f69795","#c3b0d5","#bf9b94","#f1b5d2","#c7c7c7","#dbda8e","#a6dae5","#b1c7e8","#f8b978","#a2df8b","#f69795","#c3b0d5","#bf9b94","#f1b5d2","#c7c7c7","#dbda8e","#a6dae5"],colors5:["#3a3d79","#66793a","#886c32","#7e3c39","#764273","#4383bd","#db520a","#4ba355","#746cb0","#636363","#3a3d79","#66793a","#886c32","#7e3c39","#764273","#4383bd","#db520a","#4ba355","#746cb0","#636363"],colors6:["#5356a2","#8ea153","#b99d3b","#a5484a","#9e5293","#76afd6","#f38b3c","#80c377","#9e9ac8","#969696","#5356a2","#8ea153","#b99d3b","#a5484a","#9e5293","#76afd6","#f38b3c","#80c377","#9e9ac8","#969696"],colors7:["#6c70ce","#b8ce6c","#e2b853","#cc606b","#c66ebc","#a4cae1","#f5ac6b","#a8d99b","#bcbddc","#bdbdbd","#6c70ce","#b8ce6c","#e2b853","#cc606b","#c66ebc","#a4cae1","#f5ac6b","#a8d99b","#bcbddc","#bdbdbd"],colors8:["#9c9fde","#cfda9c","#e4ca94","#df959b","#d89ed5","#c9dbef","#f8cfa2","#cbe9c0","#dadaeb","#d9d9d9","#9c9fde","#cfda9c","#e4ca94","#df959b","#d89ed5","#c9dbef","#f8cfa2","#cbe9c0","#dadaeb","#d9d9d9"],colors9:["#f44336","#8bc34a","#03a9f4","#ffc107","#e91e63","#cddc39","#00bcd4","#ff9800","#9c27b0","#009688","#f44336","#8bc34a","#03a9f4","#ffc107","#e91e63","#cddc39","#00bcd4","#ff9800","#9c27b0","#009688"]},render(t){this.$node=document.createElement("canvas"),Array.from(t.attributes).forEach((t=>{t.name.startsWith("dmx-")||this.$node.setAttribute(t.name,t.value)})),dmx.dom.replace(t,this.$node),"string"==typeof this.props.colors&&(this.props.colors=this.colors[this.props.colors]||this.colors.default),this.datasets=this.getDatasets(t),this.performUpdate()},performUpdate(t){var a=this,s=this.props.type,o={type:"area"==s?"line":"horizontalBar"==s?"bar":s,options:{responsive:this.props.responsive,layout:{padding:5},plugins:{legend:{display:!1},tooltip:{callbacks:{label:function(t){var o=t.dataset;if(o.tooltipExpression)return dmx.parse(o.tooltipExpression,new dmx.DataScope({$label:o.label,$value:o.data[t.dataIndex]},a));if("doughnut"==s||"pie"==s){var e=a.chart.data.labels[t.dataIndex],r=": "+o.data[t.dataIndex];return Array.isArray(e)?(e=e.slice())[0]+=r:e+=r,e}return"palarArea"==s?a.chart.data.labels[t.dataIndex]+": "+t.label:((e=o.label||"")&&(e+=": "),e+=null!=(r=t.formattedValue)?r:t.label)}}}}}};if("string"==typeof this.props.colors&&(this.props.colors=this.colors[this.props.colors]||this.colors.default),this.props.noanimation&&(o.options.animation={duration:0},o.options.hover={animationDuration:0}),this.props.legend&&(o.options.plugins.legend.display=!0,o.options.plugins.legend.position=this.props.legend),"line"!=this.props.type&&"area"!=this.props.type||(o.options.scales={x:{grid:{display:!this.props.nogrid}},y:{grid:{display:!this.props.nogrid},stacked:this.props.stacked,beginAtZero:!0}},this.datasets.forEach((function(t,a){var s=this.props.colors[a];Object.assign(t,{fill:"area"==this.props.type,lineTension:this.props.smooth?.4:0,backgroundColor:s+"80",borderWidth:+this.props.thickness,borderColor:s,borderDash:this.props.dashed?[5,5]:[],pointStyle:this.props.pointStyle,pointBackgroundColor:s,pointBorderColor:s,pointBorderWidth:1,pointHitRadius:10,pointRadius:this.props.points?+this.props.pointSize:0,pointHoverRadius:+this.props.pointSize})}),this)),"bar"!=this.props.type&&"horizontalBar"!=this.props.type||(o.options.indexAxis="horizontalBar"==this.props.type?"y":"x",o.options.scales={x:{grid:{display:!this.props.nogrid},stacked:this.props.stacked,beginAtZero:!0},y:{grid:{display:!this.props.nogrid},stacked:this.props.stacked,beginAtZero:!0}},this.datasets.forEach((function(t,a){var s=this.props.colors[a];Object.assign(t,{backgroundColor:this.props.multicolor?this.props.colors.map((function(t){return t+"80"})):s+"80",borderColor:this.props.multicolor?this.props.colors:s,borderDash:this.props.dashed?[5,5]:[],borderWidth:+this.props.thickness,barPercentage:this.props.fullbar?1:.9,categoryPercentage:this.props.fullbar?1:.8})}),this)),"polarArea"!=this.props.type&&"radar"!=this.props.type||(o.options.scale={grid:{display:!this.props.nogrid},beginAtZero:!0},this.datasets.forEach((function(t,a){var s=this.props.colors[a];Object.assign(t,{fill:!0,lineTension:this.props.smooth?.4:0,borderWidth:+this.props.thickness,borderDash:this.props.dashed?[5,5]:[],borderColor:"polarArea"==this.props.type?this.props.colors:s,backgroundColor:"polarArea"==this.props.type?this.props.colors.map((function(t){return t+"50"})):s+"50",pointStyle:this.props.pointStyle,pointBackgroundColor:"polarArea"==this.props.type?this.props.colors:s,pointBorderColor:"polarArea"==this.props.type?this.props.colors:s,pointBorderWidth:1,pointHitRadius:10,pointRadius:this.props.points?+this.props.pointSize:0,pointHoverRadius:+this.props.pointSize})}),this)),"pie"!=this.props.type&&"doughnut"!=this.props.type||this.datasets.forEach((function(t,a){this.props.colors[a];Object.assign(t,{backgroundColor:this.props.colors.map((function(t){return t+"80"})),borderColor:this.props.colors,borderWidth:+this.props.thickness})}),this),"doughnut"==this.props.type&&(o.options.cutoutPercentage=this.props.cutout),this.props.labelX&&o.options&&o.options.scales&&(o.options.scales.x.ticks={callback:function(t,s,o){var e=dmx.parse(a.props.labelX,new dmx.DataScope({$value:t,$index:s},a));return null!=e?e:this.getLabelForValue(t)}}),this.props.labelY&&o.options&&o.options.scales&&(o.options.scales.y.ticks={callback:function(t,s,o){var e=dmx.parse(a.props.labelY,new dmx.DataScope({$value:t,$index:s},a));return null!=e?e:this.getLabelForValue(t)}}),JSON.stringify(o)!=JSON.stringify(this.options))this.props.type&&(this.options=dmx.clone(o),o.data=this.getData(),this.chart&&this.chart.destroy(),this.chart=new Chart(this.$node,dmx.clone(o)));else if(this.chart){var e=this.getData(),r=!1;JSON.stringify(this.chart.data.labels)!=JSON.stringify(e.labels)&&(this.chart.data.labels=e.labels,r=!0),e.datasets.length!=this.chart.data.datasets.length?(this.chart.data.datasets=e.datasets,r=!0):e.datasets.forEach((function(t,a){["label","backgroundColor","borderColor","borderWidth","dataExpression","tooltipExpression","data"].forEach((function(s){JSON.stringify(this.chart.data.datasets[a][s])!=JSON.stringify(t[s])&&(this.chart.data.datasets[a][s]=t[s],r=!0)}),this)}),this),r&&this.chart.update()}},destroy(){this.chart&&this.chart.destroy()},getDatasets(t){for(var a=[],s=1;s<=20;s++)t.hasAttribute("dataset-"+s+":value")&&a.push({label:t.hasAttribute("dataset-"+s+":label")?t.getAttribute("dataset-"+s+":label"):"dataset "+s,backgroundColor:this.props.colors.map((function(t){return t+"80"})),borderColor:this.props.colors,borderWidth:1,dataExpression:t.getAttribute("dataset-"+s+":value"),tooltipExpression:t.getAttribute("dataset-"+s+":tooltip"),data:[]});return a},getData(){return this.datasets.map((function(t){var a=dmx.repeatItems(this.props.data);return t.data=a.map((function(a){return+dmx.parse(t.dataExpression,new dmx.DataScope(a,this))}),this),[]}),this),{labels:this.getLabels(),datasets:this.datasets}},getLabels(){return dmx.repeatItems(this.props.data).map((function(t,a){return this.props.labels?dmx.parse(this.props.labels,new dmx.DataScope(t,this)):"value "+(a+1)}),this)}});
//# sourceMappingURL=dmxCharts.js.map