(this.webpackJsonpcode=this.webpackJsonpcode||[]).push([[0],{102:function(e,t,a){},109:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(11),s=a.n(r),c=(a(102),a(8)),l=a(21),o=a(141),u=a(145),d=a(146),p=a(43),b=a(85),h=a(59),f=a(14),g=a(39),v=a(15),m=a(87),j=a(13),x=a(5),O=a(164);var w=a(74),y=a(2),k=Object(o.a)((function(e){return{image:{overflow:"hidden",width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",flexWrap:"wrap"},loading:{flex:"0 0 100%",width:"100%",textAlign:"center",height:"100%",lineHeight:10},imgBlock:{position:"relative",width:function(e){return e.width||"100%"},height:function(e){return e.height||"100%"}},img:{flex:"0 0 auto",width:function(e){return e.width||"100%"},height:function(e){return e.height||"100%"},transition:"opacity .3s linear","&$loaded":{opacity:1}},loaded:{}}}));var N=Object(c.b)()(Object(c.c)((function(e){var t=e.src,a=e.alt,n=e.className,r=e.onLoad,s=e.type,c=void 0===s?"fill":s,o=e.overlay,u=Object(g.a)(e,["src","alt","className","onLoad","type","overlay"]),d=Object(i.useState)(!1),b=Object(j.a)(d,2),h=b[0],v=b[1],m=Object(i.useRef)(),N=function(e,t){var a=Object(O.a)(t),n=a.width,r=a.height,s=Object(i.useState)([0,0]),c=Object(j.a)(s,2),l=Object(j.a)(c[0],2),o=l[0],u=l[1],d=c[1],p=Object(i.useState)([n,r]),b=Object(j.a)(p,2),h=Object(j.a)(b[0],2),f=h[0],g=h[1],v=b[1];return Object(i.useEffect)((function(){var t=n,a=r;if("fill"===e){var i=Math.max(n/o,r/u);t=o*i,a=u*i}if("center"===e){var s=Math.min(n/o,r/u);t=o*s,a=u*s}if("fullHeight"===e){var c=r/u;t=o*c,a=u*c}v([t,a])}),[r,n,u,o,e]),{width:f,height:g,loadedImage:function(e){var t=e.target.naturalWidth,a=e.target.naturalHeight;d([t,a])}}}(c,m),I=N.width,P=N.height,C=N.loadedImage,T=k({width:I,height:P});return Object(y.jsxs)("div",{className:Object(x.a)(T.image,n),ref:m,children:[!h&&Object(y.jsx)(p.a,{className:T.loading,children:"loading"}),Object(y.jsxs)("div",{className:T.imgBlock,children:[Object(y.jsx)(w.LazyLoadImage,Object(f.a)({src:t,alt:a,draggable:!1,className:Object(x.a)(T.img,Object(l.a)({},T.loaded,h)),onLoad:function(e){v(!0),C(e),r&&r(e)}},u)),o]})]})}))),I=a(84),P=a(80),C=a(10),T=a(81),S=a.n(T),V=a(37);function F(e,t){return function(e,t){for(var a=t.toLowerCase(),i=0,n=["year","month","day","hour","minute","second","date","time","timestamp","timestamps"];i<n.length;i++){var r=n[i];if(a.endsWith(r))return!0}return!1}(0,t)?"T":function(e,t){var a,i=Object(V.a)(e);try{for(i.s();!(a=i.n()).done;){var n=a.value;if(isNaN(n))return console.log("Field ".concat(t," has non-numerical data ").concat(n,".")),!1}}catch(r){i.e(r)}finally{i.f()}return!0}(e,t)?function(e,t){for(var a=t.toLowerCase(),i=0,n=["index","idx","id","i"];i<n.length;i++){var r=n[i];if(a.endsWith(r))return console.log("Field ".concat(t," is regarded as order field because of the field name includes ").concat(r,".")),!0}for(var s=e[0],c=1;c<e.length;c++)if(c+s!==e[c])return!1;return console.log("Field ".concat(t," is regarded as order field because the data is in order.")),!0}(e,t)?"O":"Q":"N"}function D(e,t){var a={current:t},i=!0;fetch(e).then((function(e){return e.json()})).then((function(e){a.current=e,i=!1}));return{data:a,ensureLoading:function e(t){i?setTimeout((function(){return e(t)}),500):t()}}}var E=a(38),A=D("".concat(E.homepage,"/knowledgeBase.json"),[]),_=A.data,q=A.ensureLoading,R=function(e,t){var a=function(e){return"object"==typeof e&&Array.isArray(e)},i=function e(t,i){if("*"===t)return!0;if(i==t)return!0;if(typeof i!=typeof t)return!1;if("string"==typeof i&&i!=t)return!1;var n=!0;if(a(t)&&a(i)){var r=!0,s=[];return t.forEach((function(t){if(r){var a=!1;i.forEach((function(i,n){-1!=s.indexOf(n)||a||e(t,i)&&(a=!0,s.push(n))})),a||(r=!1)}})),r}return"object"==typeof t&&Object.keys(t).forEach((function(a){void 0==i[a]?n=!1:n&&(n=e(t[a],i[a]))})),n},n=function(e,t){if(0===e.length)return!0;var a=!1;return e.forEach((function(e){t.includes(e)&&(a=!0)})),a},r=function(e,t){if(0===e.length)return!0;var a=!0;return e.forEach((function(e){t.includes(e)||(a=!1)})),a},s=function e(t,n){if(t=={})return!0;var r=!1;return!!(r=i(t,n))||("string"==typeof n||(a(n)?n.forEach((function(a){r||(r=e(t,a))})):"object"==typeof n&&Object.keys(n).forEach((function(a){r||(r=e(t,n[a]))}))),r)}(t.specification,e.specification);return s&&(s=function(e,t,a){var i=!1;return 0===e.length&&0===t.length?i=!0:0===e.length?t.forEach((function(e){a.forEach((function(t){t.includes(e)&&(i=!0)}))})):0===t.length?e.forEach((function(e){a.forEach((function(t){t.includes(e)&&(i=!0)}))})):e.forEach((function(e){t.forEach((function(t){var n="".concat(e,":").concat(t);a.includes(n)&&(i=!0)}))})),i}(t.actions,t.targets,e.actionTargets))&&(s=n(t.compositions,e.compositions))&&(s=r(t.marks,e.marks))&&(s=n(t.channels,e.channels))&&(s=r(t.datas,e.dataTypes))&&(s=n(t.aggregates,e.aggregates))?[!0,{vis:0,task:0,data:0,sum:0}]:[!1,{vis:0,task:0,data:0,sum:0}]};function M(e){return new Promise((function(t){(function(e){return new Promise((function(t){q((function(){var a=_.current;console.log(_.current);var i=[];a.forEach((function(t){var a=R(t,e),n=Object(j.a)(a,2),r=n[0],s=n[1];r&&i.push({viewId:t.viewId,rankScore:s})})),t(i)}))}))})(e).then((function(e){return t(e)}))}))}function W(e,t){var a={};return t.forEach((function(t){var i;e.includes(t.name)&&(i=t.type,a[i]||(a[i]=0),a[i]++)})),Object.keys(a).map((function(e){return"".concat(e,"\xd7").concat(a[e])})).join(" ")}var L=D("".concat(E.homepage,"/figKnowledgeBase.json")),B=L.data,z=L.ensureLoading,Q=a(82),$=new function e(){var t=this;Object(P.a)(this,e),this.waiting=!1,this.startWait=function(){return t.waiting=!0},this.endWait=function(){return t.waiting=!1},this.data=[],this.uploadData=function(){var e=document.createElement("input");e.type="file",e.accept=".csv",e.multiple=!0,e.onchange=function(){var a=e.files,i=Object(I.a)(new Array(a.length)).map((function(e,t){return i=a[t],new Promise((function(e){S.a.parse(i,{header:!0,complete:function(t){t.errors.forEach((function(e){"TooFewFields"===e.code&&e.row===t.data.length-1&&t.data.pop()})),e({fileName:i.name,fields:t.meta.fields.map((function(e){return{type:F(t.data.map((function(t){return t[e]})),e),name:e}})),content:t.data})}})}));var i}));Promise.all(i).then((function(e){t.resetQueryParams(),t.setData(e);var a=[],i=[];e.map((function(e){return e.fields})).flat().forEach((function(e){i.includes(e.name)||(a.push(e),i.push(e.name))})),t.setFields(a)}))},e.click()},this.setData=function(e){return t.data=e},this.fields=[],this.setFields=function(e){return t.fields=e},this.setFieldType=function(e,a){return t.fields.forEach((function(t){return t.name===e&&(t.type=a)}))},this.isTableViewerOpen=!1,this.showTableViewer=function(){return t.isTableViewerOpen=!0},this.closeTableViewer=function(){return t.isTableViewerOpen=!1},this.isReadMeOpen=!0,this.handleReadMeOpen=function(){return t.isReadMeOpen=!0},this.handleReadMeClose=function(){return t.isReadMeOpen=!1},this.vegaSpecInter=JSON.stringify({x:{type:"*"},y:{type:"*"}},null,4),this.setSpecInter=function(e){t.vegaSpecInter=e},this.queryParams={fields:[],isNonStructural:!0,dataStructure:"",actions:[],targets:[],compositions:[],marks:[],channels:[],dataTypes:[],aggregates:[],useSpec:!1,specification:{}},this.setQueryParams=function(e){t.queryParams=Object(f.a)(Object(f.a)({},t.queryParams),e),t.queryParams.isNonStructural&&(t.queryParams.dataStructure=W(t.queryParams.fields,t.fields))},this.resetQueryParams=function(){t.setQueryParams({fields:[],isNonStructural:!0,dataStructure:"",actions:[],targets:[],compositions:[],marks:[],channels:[],dataTypes:[],aggregates:[],useSpec:!1,specification:{}}),t.vegaSpecInter=JSON.stringify({x:{type:"*"},y:{type:"*"}},null,4),t.generateRecommendationsFromQueryParams()},this.views={},this.getViewData=function(e){return new Promise((function(a){t.views[e]?a(t.views[e]):function(e){return new Promise((function(t){q((function(){var a,i=_.current,n=Object(V.a)(i);try{for(n.s();!(a=n.n()).done;){var r=a.value;r.viewId===e&&t({viewId:e,figFile:"https://github.com/VIS-VAID/data/blob/main/figures/systems/".concat(r.figFile,"?raw=true"),viewFile:"https://github.com/VIS-VAID/data/blob/main/figures/views/".concat(r.viewFile,"?raw=true"),specification:r.specification,actionTargets:r.actionTargets,compositions:r.compositions,marks:r.marks,channels:r.channels,dataTypes:r.dataTypes,aggregates:r.aggregates,figBox:r.figBox,figCaption:r.figCaption,figId:r.figId,relationText:r.relationText,note:r.note})}}catch(s){n.e(s)}finally{n.f()}}))}))}(e).then((function(i){t.views[e]=i,a(i)}))}))},this.recommendations=[],this.setRecommendations=function(e){return t.recommendations=e},this.generateRecommendationsFromQueryParams=function(){t.startWait();var e={actions:t.queryParams.actions,targets:t.queryParams.targets,compositions:t.queryParams.compositions,marks:t.queryParams.marks,channels:t.queryParams.channels,datas:t.queryParams.dataTypes,aggregates:t.queryParams.aggregates};if(t.queryParams.useSpec)try{e.specification=JSON.parse(t.vegaSpecInter)}catch(a){e.specification=t.queryParams.specification}else e.specification=t.queryParams.specification;M(e).then((function(a){t.endWait(),t.setRecommendations(a.map((function(t){return Object(f.a)(Object(f.a)({},t),{},{condition:e})})))}))},this.viewDetail=null,this.showViewDetail=function(e,a){return t.viewDetail={figId:e,initViewId:a}},this.closeViewDetail=function(){return t.viewDetail=null},this.selectedViews=[],this.selectView=function(e){t.getViewData(e).then((function(a){var i=t.recommendations.find((function(t){return t.viewId===e})).condition;t.selectedViews.push({viewId:e,figId:a.figId,viewFile:a.viewFile,condition:i})}))},this.setViews=function(e){return t.selectedViews=e},this.removeView=function(e){return t.selectedViews=t.selectedViews.filter((function(t){return t.viewId!==e}))},this.importViews=function(){var e=document.createElement("input");e.type="file",e.accept=".json",e.onchange=function(){var a=e.files[0];if(a){var i=new FileReader;i.onload=function(e){var a=JSON.parse(e.target.result);Promise.all(a.map((function(e){return new Promise((function(a){t.getViewData(e.view).then((function(t){a({viewId:e.view,figId:t.figId,viewFile:t.viewFile,condition:e.condition})}))}))}))).then((function(e){return t.setViews(e)}))},i.readAsText(a,"utf-8")}},e.click()},this.exportViews=function(){Promise.all(t.selectedViews.map((function(e){return t.getViewData(e.viewId)}))).then((function(e){var a=JSON.stringify(t.selectedViews.map((function(t,a){return{view:e[a].viewId,condition:t.condition}}))),i=new Blob([a],{type:"text/plain;charset=utf-8"});Object(Q.saveAs)(i,"views.json")}))},this.figures={},this.getFigureData=function(e){return new Promise((function(a){t.figures[e]?a(t.figures[e]):function(e){return new Promise((function(t){z((function(){var a,i=B.current,n=Object(V.a)(i);try{for(n.s();!(a=n.n()).done;){var r=a.value;r.figId===e&&t({figId:e,title:r.title,caption:r.caption,viewIds:r.viewIds})}}catch(s){n.e(s)}finally{n.f()}}))}))}(e).then((function(i){t.figures[e]=i,a(i)}))}))},Object(C.l)(this),window.onbeforeunload=function(e){e.preventDefault(),console.error(e)},window.onunload=function(e){e.preventDefault(),console.error(e)},this.generateRecommendationsFromQueryParams()};function J(e){var t=Object(i.useState)({viewId:e,figFile:"",viewFile:"",specification:"",actionTargets:[],compositions:[],marks:[],channels:[],dataTypes:[],aggregates:[],figBox:{x:0,y:0,width:0,height:0},figCaption:"",figId:""}),a=Object(j.a)(t,2),n=a[0],r=a[1];return Object(i.useEffect)((function(){e&&$.getViewData(e).then((function(e){r(e)}))}),[e]),n}var H=Object(o.a)((function(e){return{figImage:{height:"100%",maxWidth:"100%",position:"relative"},figFile:{height:"100%",width:"100%"},box:{position:"absolute",backgroundColor:Object(v.a)(e.palette.primary.main,.8)}}}));var G=function(e){var t=e.viewId,a=e.onLoad,i=e.type,n=void 0===i?"fill":i,r=Object(g.a)(e,["viewId","onLoad","type"]),s=H(),c=J(t),l=function(){var e=c.figBox,t=e.x,a=e.y,i=e.width,n=e.height;return{left:"".concat(100*t,"%"),top:"".concat(100*a,"%"),width:"".concat(100*i,"%"),height:"".concat(100*n,"%")}}();return Object(y.jsx)(m.a,{className:s.figImage,elevation:4,children:Object(y.jsx)(N,Object(f.a)({src:c.figFile,alt:c.figFile,className:s.figFile,onLoad:a,type:n,overlay:Object(y.jsx)("div",{className:s.box,style:l})},r))})};var K=Object(o.a)((function(e){return{figureViewer:{padding:0,height:800,maxHeight:"80vh",backgroundColor:e.palette.primary.light,overflow:"hidden","&:first-child":{paddingTop:0}},top:{height:"calc(100% - ".concat(200+e.spacing(3),"px)"),display:"flex",margin:e.spacing(1,2),overflow:"hidden"},bigImage:{width:"calc(100% - ".concat(500+e.spacing(3),"px)"),flex:"1 1 0",overflow:"hidden",padding:e.spacing(1,1,1,1)},viewImage:{},imageLimitation:{width:function(e){return e.width},height:function(e){return e.height}},spec:{height:"calc(100% - ".concat(e.spacing(1),"px)"),width:300,flex:"0 0 500px",padding:e.spacing(2,1,1,1),overflow:"hidden"},info:{height:"calc(100% - ".concat(e.spacing(1),"px)"),width:200,flex:"0 0 350px",padding:e.spacing(1,1,1,1),overflow:"hidden auto"},title:{height:"30px"},text:{"& + $title":{marginTop:e.spacing(1)}},viewList:{flex:"0 0 200px",height:200,display:"flex",overflow:"scroll hidden",paddingBottom:e.spacing(1),margin:e.spacing(0,1)},view:{flex:"0 0 auto",margin:e.spacing(.5,1)},selected:{boxShadow:"0 0 2px 2px ".concat(e.palette.primary.dark)}}}));var U=Object(c.b)("store")(Object(c.c)((function(e){var t=e.store,a=K(),n=Object(b.a)(),r=function(e){var t=Object(i.useState)(0),a=Object(j.a)(t,2),n=a[0],r=a[1],s=Object(i.useState)({title:"",caption:"",viewIds:[]}),c=Object(j.a)(s,2),l=c[0],o=c[1];return Object(i.useEffect)((function(){if(e){var t=e.figId,a=e.initViewId;$.getFigureData(t).then((function(e){o(e),e.viewIds.forEach((function(e,t){e===a&&r(t)}))}))}}),[e]),Object(f.a)(Object(f.a)({},l),{},{selected:n,select:r})}(t.viewDetail),s=r.title,c=r.caption,o=r.viewIds,g=r.selected,v=r.select,m=J(o[g]);return Object(y.jsx)(u.a,{open:null!==t.viewDetail,onClose:t.closeViewDetail,maxWidth:"xl",fullWidth:!0,children:Object(y.jsxs)(d.a,{className:a.figureViewer,children:[Object(y.jsxs)("div",{className:a.top,children:[Object(y.jsx)("div",{className:a.bigImage,children:Object(y.jsx)(N,{className:a.viewImage,src:m.viewFile,alt:m.viewFile,type:"center"})}),Object(y.jsxs)("div",{className:a.spec,children:[Object(y.jsx)(p.a,{className:a.title,variant:"subtitle1",children:"Specification"}),Object(y.jsx)(h.a,{defaultLanguage:"json",options:{lineNumbers:!1,readOnly:!0,background:n.palette.primary.light},value:JSON.stringify(m.specification,null,4),style:{height:"100%"}})]}),Object(y.jsxs)("div",{className:a.info,children:[Object(y.jsx)(p.a,{className:a.title,variant:"subtitle1",children:"Title"}),Object(y.jsx)(p.a,{className:a.text,title:s,children:s}),Object(y.jsx)(p.a,{className:a.title,variant:"subtitle1",children:"Action-Target Pairs"}),Object(y.jsx)(p.a,{className:a.text,title:m.actionTargets.join(", "),children:function(e){var t=[];return e.forEach((function(e){var a=e.replace("produce","produce-produce").split(":")[0].split("-")[1],i=e.split(":")[1].split("-")[1];t.push("".concat(a," ").concat(i))})),t.join(", ")}(m.actionTargets)}),Object(y.jsx)(p.a,{className:a.title,variant:"subtitle1",children:"Compositions"}),Object(y.jsx)(p.a,{className:a.text,title:m.compositions.join(", "),children:m.compositions.join(", ")}),Object(y.jsx)(p.a,{className:a.title,variant:"subtitle1",children:"Mark Types"}),Object(y.jsx)(p.a,{className:a.text,title:m.marks.join(", "),children:m.marks.join(", ")}),Object(y.jsx)(p.a,{className:a.title,variant:"subtitle1",children:"Data Types"}),Object(y.jsx)(p.a,{className:a.text,title:m.dataTypes.join(", "),children:m.dataTypes.join(", ")}),Object(y.jsx)(p.a,{className:a.title,variant:"subtitle1",children:"Channels"}),Object(y.jsx)(p.a,{className:a.text,title:m.channels.join(", "),children:m.channels.join(", ")}),Object(y.jsx)(p.a,{className:a.title,variant:"subtitle1",children:"Aggregates"}),Object(y.jsx)(p.a,{className:a.text,title:m.aggregates.join(", "),children:m.aggregates.join(", ")}),Object(y.jsx)(p.a,{className:a.title,variant:"subtitle1",children:"Caption"}),Object(y.jsx)(p.a,{className:a.text,title:c,children:c})]})]}),Object(y.jsx)("div",{className:a.viewList,children:o.map((function(e,t){return Object(y.jsx)("div",{className:Object(x.a)(a.view,Object(l.a)({},a.selected,t===g)),onClick:function(){return v(t)},children:Object(y.jsx)(G,{viewId:e,type:"fullHeight"},e)},e)}))})]})})}))),X=a(25),Y=a(159),Z=a(160),ee=a(153),te=Object(o.a)((function(e){return{item:{width:"100%",display:"flex",flexWrap:"wrap",margin:e.spacing(.5,0),justifyContent:"space-between"},solid:{flex:0},placeholder:{flexBasis:0,flexGrow:1,flexDirection:"column"},shrinkable:{flexBasis:"auto",flexShrink:1,minHeight:24,overflow:"hidden auto"},action:{justifyContent:"center",flexWrap:"nowrap"}}}));var ae=function(e){var t,a=e.children,i=e.solid,n=void 0===i||i,r=e.placeholder,s=void 0!==r&&r,c=e.shrinkable,o=void 0!==c&&c,u=e.action,d=void 0!==u&&u,b=e.title,h=void 0===b?null:b,f=te();return Object(y.jsxs)("div",{className:Object(x.a)(f.item,(t={},Object(l.a)(t,f.solid,n),Object(l.a)(t,f.placeholder,s),Object(l.a)(t,f.shrinkable,o),Object(l.a)(t,f.action,d),t)),children:[h&&Object(y.jsx)(p.a,{variant:"subtitle1",children:h}),a]})},ie=a(155),ne=(a(147),a(148));var re="rgb(20, 90, 140)",se="rgb(36, 40, 41)";var ce={strings:{systemName:"VAID: Indexing View Designs in Visual Analytics System"},theme:{palette:{primary:{light:"rgb(239, 250, 254)",main:"rgb(212, 231, 245)",dark:re},background:{default:"rgb(239, 250, 254)"}},props:{MuiAppBar:{elevation:1}},overrides:{MuiAppBar:{colorPrimary:{backgroundColor:re,color:"#ffffff"}},MuiTypography:{subtitle1:{fontWeight:"bold"}},MuiCheckbox:{colorPrimary:{color:Object(v.a)(re,.5),"&$checked":{color:re}}},MuiSwitch:{colorPrimary:{"&$checked":{color:re}}},MuiTooltip:{tooltip:{maxWidth:500,fontSize:"1.25rem",whiteSpace:"pre-line"}},MuiCssBaseline:{"@global":{"*::-webkit-scrollbar":{width:10,height:10},"*::-webkit-scrollbar-track":{display:"none"},"*::-webkit-scrollbar-corner":{display:"none"},"*::-webkit-scrollbar-thumb":{backgroundColor:Object(v.a)(se,.1),borderRadius:10},"*:hover::-webkit-scrollbar-thumb":{backgroundColor:Object(v.d)(se,.2)},"*::-webkit-scrollbar-thumb:hover":{backgroundColor:se},"*::-webkit-scrollbar-thumb:active":{backgroundColor:Object(v.b)(se,.2)}}}},spacing:10},const:{actions:{consume:[{value:"consume-present",label:"present"},{value:"consume-discover",label:"discover"},{value:"consume-enjoy",label:"enjoy"}],produce:[{value:"produce",label:"produce"}],search:[{value:"search-lookup",label:"lookup"},{value:"search-browse",label:"browse"},{value:"search-locate",label:"locate"},{value:"search-explore",label:"explore"}],query:[{value:"query-identify",label:"identify"},{value:"query-compare",label:"compare"},{value:"query-summarize",label:"summarize"}]},targets:{Attributes:[{value:"Attributes-values",label:"values"},{value:"Attributes-distribution",label:"distribution"},{value:"Attributes-range",label:"range"},{value:"Attributes-extremes",label:"extremes"},{value:"Attributes-outliers",label:"anomalies"},{value:"Attributes-clusters",label:"clusters"},{value:"Attributes-order",label:"order"},{value:"Attributes-correlation",label:"correlation"},{value:"Attributes-similarity",label:"similarity"}],Graphs:[{value:"Graphs-graphs",label:"graphs"},{value:"Graphs-nodes",label:"nodes"},{value:"Graphs-links/paths",label:"links/paths"},{value:"Graphs-topology/structures",label:"topology/structures"},{value:"Graphs-clusters/groups",label:"clusters/groups"}]},aggregates:[{value:"count",label:"count"},{value:"bin",label:"bin"},{value:"average",label:"average"},{value:"sum",label:"sum"},{value:"median",label:"median"},{value:"variance",label:"variance"}],marks:[{value:"bar",label:"bar"},{value:"point",label:"scatter plot"},{value:"line",label:"line"},{value:"rect",label:"rect"},{value:"area",label:"area"},{value:"unit",label:"unit"},{value:"arc",label:"pie/donut"},{value:"sankey",label:"sankey"},{value:"geoshape",label:"map"},{value:"radar",label:"radar"},{value:"tree",label:"tree"},{value:"boxplot",label:"boxplot"},{value:"tick",label:"tick"},{value:"surface",label:"surface"},{value:"text",label:"text"},{value:"treemap",label:"treemap"},{value:"word_cloud",label:"word cloud"},{value:"circle",label:"circle"},{value:"rule",label:"rule"},{value:"image",label:"image"},{value:"dandelion",label:"dandelion"},{value:"icicle",label:"icicle"},{value:"icon",label:"icon"},{value:"storyline",label:"storyline"},{value:"sunburst",label:"sunburst"},{value:"venn",label:"venn"},{value:"calendar",label:"calendar"},{value:"contour",label:"contour"},{value:"graph",label:"graph"},{value:"matrix",label:"matrix"},{value:"vector",label:"vector"},{value:"others",label:"others"}],dataTypes:[{value:"quantitative",label:"quantitative"},{value:"nominal",label:"nominal"},{value:"temporal",label:"temporal"},{value:"ordinal",label:"ordinal"}],compositions:[{value:"nested",label:"nested"},{value:"layer",label:"layer"},{value:"facet",label:"facet"},{value:"concat",label:"concat"}],channels:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"color",label:"color"},{value:"node",label:"node"},{value:"link",label:"link"},{value:"theta",label:"theta"},{value:"size",label:"size"},{value:"radius",label:"radius"},{value:"unit",label:"unit"},{value:"text",label:"text"},{value:"xoffset",label:"xoffset"}]},colors:{tree:"#e8c7c7",graph:"#d8a3a3",treemap:"#c87e7e",hierarchical_edge_bundling:"#b85a5a",sunburst_icicle:"#a93636",line_chart:"#d8bea3",parallel_coordinate:"#c8a47e",polar_plot:"#b88a5a",storyline:"#a97036",flow_diagram:"#c8c87e",chord_diagram:"#b8b85a",sankey_diagram:"#a9a936",map:"#70a936",heatmap:"#7ec87e",unit_visualization:"#5ab85a",glyph_based:"#36a936",scatterplot:"#36a970",matrix:"#7ec8c8",table:"#5ab8b8",small_multiple:"#36a9a9",pie_chart:"#7ea4c8",sector_chart:"#5a8ab8",donut_chart:"#3670a9",error_bar:"#7e7ec8",box_plot:"#5a5ab8",stripe_graph:"#3636a9",bar_chart:"#7036a9",area_chart:"#b85ab8",proportional_area_chart:"#a936a9",word_cloud:"#a93670",contour_graph:"#d8bea3",surface_graph:"#b88a5a",vector_graph:"#a97036",scivis:"#c8c87e",others:"#d3d3d3"}},le=a(165),oe=a(169),ue=a(166),de=a(151),pe=a(152);function be(e){var t=e.title,a=e.value,i=e.onChange,r=e.options,s=e.twolevel,c=void 0!==s&&s,l=n.a.createRef();return Object(y.jsxs)("div",{ref:l,style:{padding:"0px 15px 0px 10px"},children:[t&&Object(y.jsx)(p.a,{variant:"subtitle1",children:t}),Object(y.jsxs)(le.a,{select:!0,SelectProps:{multiple:!0,renderValue:function(e){return e.map((function(e){return function(e){if(c){var t=null;return Object.keys(r).forEach((function(a){if(null===t){var i=r[a].findIndex((function(t){return t.value===e}));-1!=i&&(t=r[a][i].label)}})),null==t?e:t}var a=r.findIndex((function(t){return t.value===e}));return-1===a?e:r[a].label}(e)})).join(", ")}},style:{width:200},value:a,onChange:i,children:[!c&&r.map((function(e){return Object(y.jsxs)(oe.a,{value:e.value,children:[Object(y.jsx)(ue.a,{checked:a.includes(e.value)}),Object(y.jsx)(de.a,{primary:e.label})]},e.value)})),c&&Object.keys(r).map((function(e){return[Object(y.jsx)(pe.a,{children:e}),r[e].map((function(e){return Object(y.jsxs)(oe.a,{value:"".concat(e.value),children:[Object(y.jsx)(ue.a,{checked:a.includes(e.value)}),Object(y.jsx)(de.a,{primary:e.label})]},"".concat(e.value))}))]}))]})]})}var he=n.a.memo(be),fe=a(163),ge=a(149),ve=Object(o.a)((function(e){return{fieldCheckbox:{display:"flex",width:"100%",alignItems:"center"},text:{display:"flex",flex:1,overflow:"hidden",border:"1px solid ".concat(e.palette.primary.main),borderRadius:e.shape.borderRadius},type:{margin:e.spacing(0,1),minWidth:0,padding:e.spacing(0,1),flex:0},name:{},selectInput:{display:"none"}}}));Object(c.b)()(Object(c.c)((function(e){var t=e.type,a=e.name,n=e.editable,r=e.checked,s=e.onChange,c=e.onChangeType,l=ve(),o=Object(i.useState)(!1),u=Object(j.a)(o,2),d=u[0],b=u[1],h=function(){return b(!0)};return Object(y.jsxs)("div",{className:l.fieldCheckbox,children:[Object(y.jsxs)("div",{className:l.text,children:[Object(y.jsx)(ee.a,{className:l.type,variant:"text",size:"small",onClick:h,children:t}),Object(y.jsxs)(p.a,{className:l.name,noWrap:!0,children:["#",a]})]}),Object(y.jsx)(ue.a,{color:"primary",disabled:!n,checked:r&&n,onChange:s}),Object(y.jsx)(fe.a,{open:d,onClose:function(){return b(!1)},onOpen:h,value:t,input:Object(y.jsx)(ge.a,{className:l.selectInput}),onChange:function(e){return c(a,e.target.value)},children:ce.const.fieldTypes.map((function(e){return Object(y.jsx)(oe.a,{value:e.value,children:e.label},e.value)}))})]})})));var me=a(154);var je=Object(c.b)("store")(Object(c.c)((function(e){var t=e.store;return Object(y.jsxs)("div",{style:{display:"block",width:"100%"},children:[Object(y.jsx)(me.a,{control:Object(y.jsx)(ne.a,{checked:t.queryParams.useSpec,onChange:function(e){return t.setQueryParams({useSpec:e.target.checked})},color:"primary",name:"search by specification"}),label:"Use Specification",style:{padding:"10px"}}),Object(y.jsx)(h.a,{height:"30vh",defaultLanguage:"json",options:{selectOnLineNumbers:!0},onChange:function(e,a){t.setSpecInter(e)},value:t.vegaSpecInter,defaultValue:JSON.stringify({x:{type:"*"},y:{type:"*"}},null,4)})]})}))),xe=Object(o.a)((function(e){return{queryPanel:{width:"100%",height:"100%",overflow:"hidden",display:"flex",flexDirection:"column"},itemContainer:{height:"30vh",width:"100%",display:"flex",flexWrap:"wrap",justifyContent:"start"}}}));var Oe=Object(c.b)("store")(Object(c.c)((function(e){var t=e.store,a=xe();return Object(y.jsxs)("div",{className:a.queryPanel,children:[Object(y.jsx)(ae,{title:"Filters",children:Object(y.jsxs)("div",{className:a.itemContainer,children:[Object(y.jsx)(he,{title:"Task: Action",value:t.queryParams.actions,onChange:function(e){return t.setQueryParams({actions:e.target.value})},options:ce.const.actions,twolevel:!0}),Object(y.jsx)(he,{title:"Task: Target",value:t.queryParams.targets,onChange:function(e){return t.setQueryParams({targets:e.target.value})},options:ce.const.targets,twolevel:!0}),Object(y.jsx)(he,{title:"Layout",value:t.queryParams.compositions,onChange:function(e){return t.setQueryParams({compositions:e.target.value})},options:ce.const.compositions}),Object(y.jsx)(he,{title:"Visualization",value:t.queryParams.marks,onChange:function(e){return t.setQueryParams({marks:e.target.value})},options:ce.const.marks.sort((function(e,t){return e.label>t.label?1:-1}))}),Object(y.jsx)(he,{title:"Visual Channel",value:t.queryParams.channels,onChange:function(e){return t.setQueryParams({channels:e.target.value})},options:ce.const.channels}),Object(y.jsx)(he,{title:"Data Type",value:t.queryParams.dataTypes,onChange:function(e){return t.setQueryParams({dataTypes:e.target.value})},options:ce.const.dataTypes})]})}),Object(y.jsx)(ae,{title:"JSON Specification",children:Object(y.jsx)(je,{})}),Object(y.jsx)(ae,{placeholder:!0}),Object(y.jsx)(ae,{action:!0,children:Object(y.jsx)(ee.a,{variant:"outlined",onClick:function(){t.generateRecommendationsFromQueryParams()},children:"Search"})}),Object(y.jsx)(ae,{action:!0,children:Object(y.jsx)(ee.a,{variant:"text",endIcon:Object(y.jsx)(ie.a,{}),onClick:t.resetQueryParams,children:"Reset"})})]})}))),we=a(168),ye=a(111),ke=Object(o.a)((function(e){return{actionBox:{position:"relative","&:hover > $actions":{opacity:1}},actions:{position:"absolute",right:0,top:0,maxWidth:"100%",display:"flex",flexWrap:"wrap",opacity:0,transition:"opacity .3s linear"},action:{flex:0,margin:e.spacing(.5)}}}));var Ne=function(e){var t=e.actions,a=e.className,i=e.children,n=ke();return Object(y.jsxs)("div",{className:Object(x.a)(n.actionBox,a),children:[i,Object(y.jsx)("div",{className:n.actions,children:t.map((function(e,t){return Object(y.jsx)("div",{className:n.action,children:Object(y.jsx)(ye.a,{size:"small",onClick:e.click,children:e.icon})},t)}))})]})},Ie=a(156),Pe=Object(o.a)((function(e){return{recommendation:{minWidth:300,width:"100%",height:200,backgroundColor:e.palette.background.default,display:"flex",padding:e.spacing(1,.5,1,1)},image:{flex:"1 1 0",width:0},imagePreview:{maxHeight:"60vh",maxWidth:"60vw"},popover:{pointerEvents:"none"},paper:{padding:e.spacing(1),width:"30vw",textAlign:"center"},popoverText:{textAlign:"left"},info:{flex:"1 1 0",width:0,margin:e.spacing(1,1,1,.5),overflow:"hidden auto"},title:{verticalAlign:"Bottom",display:"inline-flex"},icon:{fontSize:"1.25rem",margin:"4px 2px"},text:{marginLeft:24,"& + $title":{marginTop:e.spacing(1)}}}}));var Ce=Object(c.b)("store")(Object(c.c)((function(e){var t=e.rec,a=e.store,i=Pe(),r=J(t.viewId),s=n.a.useState(null),c=Object(j.a)(s,2),l=c[0],o=c[1],u=function(){o(null)},d=Boolean(l);return Object(y.jsx)(Ne,{actions:[{icon:Object(y.jsx)(Ie.a,{}),click:function(e){e.preventDefault(),a.showViewDetail(r.figId,r.viewId)}}],children:Object(y.jsxs)(m.a,{elevation:4,className:i.recommendation,draggable:!0,onDragStart:function(e){e.dataTransfer.setData("viewId",t.viewId),e.dataTransfer.dropEffect="copy"},children:[Object(y.jsx)(N,{src:r.viewFile,alt:r.viewFile,className:i.image,onMouseEnter:function(e){o(e.currentTarget)},onMouseLeave:u}),Object(y.jsx)(we.a,{className:i.popover,classes:{paper:i.paper},open:d,anchorEl:l,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},onClose:u,disableRestoreFocus:!0,children:Object(y.jsx)("img",{className:i.imagePreview,src:r.viewFile,alt:r.viewFile})})]})})}))),Te=Object(o.a)((function(e){return{recommendationsPanel:{overflow:"hidden scroll",width:"100%",height:"100%",paddingLeft:e.spacing(.5),paddingRight:e.spacing(1),display:"grid",gridTemplateColumns:function(t){return"repeat(".concat(Math.floor((t.width-e.spacing(2))/(300+e.spacing(2))),", 1fr)")},gridTemplateRows:"repeat(auto-fill, 200px)",gap:e.spacing(2),justifyContent:"space-evenly"}}}));var Se=Object(c.b)("store")(Object(c.c)((function(e){var t=e.store,a=Object(i.useRef)(),n=Object(O.a)(a).width,r=Te({width:n});return Object(y.jsx)("div",{className:r.recommendationsPanel,ref:a,children:t.recommendations.map((function(e){return Object(y.jsx)(Ce,{rec:e},e.viewId)}))})}))),Ve=Object(o.a)((function(e){return{panel:{position:"absolute",backgroundColor:e.palette.background.paper,borderRadius:e.shape.borderRadius},title:{margin:"4px auto 4px 10px"},content:{position:"absolute",top:40,bottom:e.spacing(1),left:e.spacing(1),right:e.spacing(1),overflow:"hidden"}}}));var Fe=Object(c.b)()(Object(c.c)((function(e){var t=e.title,a=e.pos,i=e.children,n=Ve();return Object(y.jsxs)("div",{className:n.panel,style:a,children:[Object(y.jsx)(p.a,{variant:"h6",className:n.title,children:t}),Object(y.jsx)("div",{className:n.content,children:i})]})}))),De=Object(o.a)((function(e){return{outerArea:{position:"relative",width:"100%",height:"100%"},innerContainer:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}}}));var Ee=Object(c.b)()(Object(c.c)((function(e){var t=e.ratio,a=e.children,n=De(),r=Object(i.useRef)(),s=Object(O.a)(r),c=function(e,t,a){return e&&t&&a?t*a>e?[e,e/a]:[t*a,t]:[0,0]}(s.width,s.height,t),l=Object(j.a)(c,2),o=l[0],u=l[1];return Object(y.jsx)("div",{className:n.outerArea,ref:r,children:Object(y.jsx)("div",{className:n.innerContainer,style:{width:o,height:u},children:a})})}))),Ae=a(110),_e=a(157),qe=Object(o.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}}));var Re=Object(c.b)("store")(Object(c.c)((function(e){var t=e.store,a=qe();return Object(y.jsx)(Ae.a,{className:a.backdrop,open:t.waiting,children:Object(y.jsx)(_e.a,{color:"inherit"})})}))),Me=a(158);var We=Object(c.b)("store")(Object(c.c)((function(e){var t=e.store;return Object(y.jsxs)(u.a,{onClose:t.handleReadMeClose,open:t.isReadMeOpen,maxWidth:"lg",fullWidth:!0,children:[Object(y.jsx)(Me.a,{children:"Introduction to VAID"}),Object(y.jsx)(d.a,{children:Object(y.jsx)("embed",{src:E.homepage+"/codebook.pdf#toolbar=0&navpanes=0&scrollbar=0",style:{width:"100%",height:"800px"}})})]})}))),Le=Object(o.a)((function(e){return{root:{width:"100vw",height:"100vh",backgroundColor:e.palette.primary.light},content:{position:"relative",width:"100vw",height:"calc(100vh - 48px)"},flex:{flex:1}}}));var Be=Object(c.b)("store")(Object(c.c)((function(e){var t=e.store,a=Le(),i=Object(X.a)();return Object(y.jsxs)("div",{className:a.root,children:[Object(y.jsx)(Y.a,{position:"static",children:Object(y.jsxs)(Z.a,{variant:"dense",children:[Object(y.jsx)(p.a,{variant:"h5",color:"inherit",component:"div",children:ce.strings.systemName}),Object(y.jsx)("div",{className:a.flex}),Object(y.jsx)(ee.a,{color:"inherit",onClick:t.handleReadMeOpen,children:"ReadMe"}),Object(y.jsx)(We,{})]})}),Object(y.jsx)("div",{className:a.content,children:Object(y.jsxs)(Ee,{ratio:1920/1032,children:[Object(y.jsx)(Fe,{title:"Query Panel",pos:{top:i.spacing(1),bottom:i.spacing(1),left:i.spacing(1),width:500},bgColor:i.palette.primary.light,children:Object(y.jsx)(Oe,{})}),Object(y.jsx)(Fe,{title:"Retrieved Visualizations: ".concat(t.recommendations.length," found"),pos:{top:i.spacing(1),bottom:"".concat(i.spacing(2),"px"),left:i.spacing(2)+500,right:i.spacing(1)},bgColor:i.palette.primary.light,children:Object(y.jsx)(Se,{})})]})}),Object(y.jsx)(U,{}),Object(y.jsx)(Re,{})]})}))),ze=a(161),Qe=a(83),$e=a(162);s.a.render(Object(y.jsx)(n.a.StrictMode,{children:Object(y.jsx)(c.a,{store:$,children:Object(y.jsxs)(ze.a,{theme:Object(Qe.a)(ce.theme),children:[Object(y.jsx)($e.a,{}),Object(y.jsx)(Be,{})]})})}),document.getElementById("root"))},38:function(e){e.exports=JSON.parse('{"homepage":"https://vis-vaid.github.io/","name":"code","version":"0.1.0","private":true,"dependencies":{"@babel/core":"7.12.3","@material-ui/core":"^4.12.3","@material-ui/icons":"^4.11.2","@monaco-editor/react":"^4.3.1","@pmmmwh/react-refresh-webpack-plugin":"0.4.3","@svgr/webpack":"5.5.0","@testing-library/jest-dom":"^5.11.4","@testing-library/react":"^11.1.0","@testing-library/user-event":"^12.1.10","@typescript-eslint/eslint-plugin":"^4.5.0","@typescript-eslint/parser":"^4.5.0","ahooks":"^2.10.9","babel-eslint":"^10.1.0","babel-jest":"^26.6.0","babel-loader":"8.1.0","babel-plugin-named-asset-import":"^0.3.7","babel-preset-react-app":"^10.0.0","bfj":"^7.0.2","camelcase":"^6.1.0","case-sensitive-paths-webpack-plugin":"2.3.0","clsx":"^1.1.1","css-loader":"4.3.0","dotenv":"8.2.0","dotenv-expand":"5.1.0","eslint":"^7.11.0","eslint-config-react-app":"^6.0.0","eslint-plugin-flowtype":"^5.2.0","eslint-plugin-import":"^2.22.1","eslint-plugin-jest":"^24.1.0","eslint-plugin-jsx-a11y":"^6.3.1","eslint-plugin-react":"^7.21.5","eslint-plugin-react-hooks":"^4.2.0","eslint-plugin-testing-library":"^3.9.2","eslint-webpack-plugin":"^2.5.2","file-loader":"6.1.1","file-saver":"^2.0.5","fs-extra":"^9.0.1","gh-pages":"^3.2.3","html-webpack-plugin":"4.5.0","identity-obj-proxy":"3.0.0","jest":"26.6.0","jest-circus":"26.6.0","jest-resolve":"26.6.0","jest-watch-typeahead":"0.6.1","konva":"^8.1.3","mini-css-extract-plugin":"0.11.3","mobx":"^6.3.2","mobx-react":"^7.2.0","optimize-css-assets-webpack-plugin":"5.0.4","papaparse":"^5.3.1","pnp-webpack-plugin":"1.6.4","postcss-flexbugs-fixes":"4.2.1","postcss-loader":"3.0.0","postcss-normalize":"8.0.1","postcss-preset-env":"6.7.0","postcss-safe-parser":"5.0.2","prompts":"2.4.0","prop-types":"^15.7.2","react":"^17.0.2","react-alignment-guides":"^1.0.0-rc.46","react-app-polyfill":"^2.0.0","react-dev-utils":"^11.0.3","react-dom":"^17.0.2","react-konva":"^17.0.2-5","react-lazy-load-image-component":"^1.5.1","react-refresh":"^0.8.3","react-virtualized":"^9.22.3","resolve":"1.18.1","resolve-url-loader":"^3.1.2","sass-loader":"^10.0.5","semver":"7.3.2","style-loader":"1.3.0","terser-webpack-plugin":"4.2.3","ts-pnp":"1.2.0","url-loader":"4.1.1","web-vitals":"^1.0.1","webpack":"4.44.2","webpack-dev-server":"3.11.1","webpack-manifest-plugin":"2.2.0","workbox-webpack-plugin":"5.1.4"},"scripts":{"start":"node scripts/start.js","build":"node scripts/build.js","test":"node scripts/test.js","predeploy":"yarn build","deploy":"gh-pages -d build"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"jest":{"roots":["<rootDir>/src"],"collectCoverageFrom":["src/**/*.{js,jsx,ts,tsx}","!src/**/*.d.ts"],"setupFiles":["react-app-polyfill/jsdom"],"setupFilesAfterEnv":["<rootDir>/src/setupTests.js"],"testMatch":["<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}","<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"],"testEnvironment":"jsdom","testRunner":"E:\\\\Projects\\\\Submissions\\\\CHI22\\\\KBVA\\\\code\\\\node_modules\\\\jest-circus\\\\runner.js","transform":{"^.+\\\\.(js|jsx|mjs|cjs|ts|tsx)$":"<rootDir>/config/jest/babelTransform.js","^.+\\\\.css$":"<rootDir>/config/jest/cssTransform.js","^(?!.*\\\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)":"<rootDir>/config/jest/fileTransform.js"},"transformIgnorePatterns":["[/\\\\\\\\]node_modules[/\\\\\\\\].+\\\\.(js|jsx|mjs|cjs|ts|tsx)$","^.+\\\\.module\\\\.(css|sass|scss)$"],"modulePaths":[],"moduleNameMapper":{"^react-native$":"react-native-web","^.+\\\\.module\\\\.(css|sass|scss)$":"identity-obj-proxy"},"moduleFileExtensions":["web.js","js","web.ts","ts","web.tsx","tsx","json","web.jsx","jsx","node"],"watchPlugins":["jest-watch-typeahead/filename","jest-watch-typeahead/testname"],"resetMocks":true},"babel":{"presets":["react-app"]}}')}},[[109,1,2]]]);
//# sourceMappingURL=main.2a5d0f0c.chunk.js.map