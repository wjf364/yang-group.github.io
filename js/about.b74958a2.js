(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"45d3":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-main",{staticClass:"about"},[i("h1",[t._v("This is an Reseach page")])])},n=[],s=i("2877"),o=i("6544"),r=i.n(o),c=i("f6c4"),l={},h=Object(s["a"])(l,a,n,!1,null,null,null);e["default"]=h.exports;r()(h,{VMain:c["a"]})},"8adc":function(t,e,i){},"8f5a":function(t,e,i){},9734:function(t,e,i){},b8fa:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-main",[i("v-card",{attrs:{flat:""}},[i("v-row",[i("v-col",[i("div",[i("strong",[t._v("Admin:")]),t._v(" Xi Yang")]),i("div",[i("strong",[t._v("E-mail:")]),t._v(" yangxi21@jlu.edu.cn")])]),i("v-col",{staticClass:"text-right"},[i("div",[t._v("School of Artificial Intelligence, Jilin University")]),i("div",[t._v("吉林省长春市前进大街2699号")]),i("div",[t._v("sai@jlu.edu.cn")])])],1),i("v-row",[i("v-img",{attrs:{src:"img/map.jpg"}})],1)],1)],1)},n=[],s={},o=s,r=i("2877"),c=i("6544"),l=i.n(c),h=i("b0af"),u=i("62ad"),d=i("adda"),v=i("f6c4"),p=i("0fd9"),f=Object(r["a"])(o,a,n,!1,null,null,null);e["default"]=f.exports;l()(f,{VCard:h["a"],VCol:u["a"],VImg:d["a"],VMain:v["a"],VRow:p["a"]})},bea6:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-main",[i("Leader"),i("Members",{attrs:{memberData:t.memberData}})],1)},n=[],s=i("b8ab"),o=i.n(s),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",[t._v("Staff")]),i("v-row",[i("v-col",{attrs:{cols:"2"}},[i("div",[i("v-img",{staticStyle:{"border-radius":"100%"},attrs:{src:t.photo}})],1)]),i("v-col",{attrs:{cols:"3"}},[i("div",{staticClass:"mt-1"},[i("h2",{staticClass:"mb-2"},[t._v(t._s(t.name))]),t._l(t.titles,(function(e){return i("p",{key:e},[t._v(t._s(e))])})),i("a",{attrs:{href:t.homepage}},[t._v("Homepage")]),i("h4",{staticClass:"mb-2 mt-3"},[t._v("Research Interests")]),i("ul",t._l(t.researchInterests,(function(e){return i("li",{key:e},[t._v(t._s(e))])})),0)],2)])],1)],1)},c=[],l={data:function(){return{name:"Xi Yang (杨溪)",homepage:"https://keepthinkingyx.github.io/Xi-Yang/",titles:["Associate Professor","School of Artificial Intelligence, Jilin University"],researchInterests:["Computer graphics","Deep learning","Human–computer interaction"],photo:"img/yangxi.png"}}},h=l,u=i("2877"),d=i("6544"),v=i.n(d),p=i("62ad"),f=i("adda"),m=i("0fd9"),g=Object(u["a"])(h,r,c,!1,null,null,null),b=g.exports;v()(g,{VCol:p["a"],VImg:f["a"],VRow:m["a"]});var y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"lighten-2"},[i("v-container",[t._l(t.std_cat,(function(e,a,n){return[t.cards.includes(a)?i("div",{key:n},[i("v-row",{key:n},[i("v-col",{directives:[{name:"show",rawName:"v-show",value:0!=e.length,expression:"value.length != 0"}],key:n,staticClass:"mt-2",attrs:{cols:"12"}},[i("h2",[t._v(t._s(a))])])],1),i("v-row",{directives:[{name:"show",rawName:"v-show",value:0!=e.length,expression:"value.length != 0"}],key:n},t._l(e,(function(t,e){return i("v-col",{key:""+a+e,attrs:{cols:"2"}},[i("v-sheet",[i("Student",{attrs:{stu:t}})],1)],1)})),1)],1):t._e(),"Collaborators"==a?i("div",{key:n},[i("v-row",[i("div",{staticClass:"mt-2 mb-2"},[i("h2",{staticClass:"mb-4"},[t._v(t._s(a))]),t._l(e,(function(e,n){return i("p",{key:""+a+n,staticStyle:{"line-height":"13px"}},[e["homepage"]!=t.None?i("a",{attrs:{href:e["homepage"]}},[i("b",[t._v(" "+t._s(e["name"])+" ")])]):i("b",[t._v(" "+t._s(e["name"])+" ")]),i("i",[t._v(t._s(e["affiliation"]))])])}))],2)])],1):t._e()]}))],2)],1)},w=[],_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[i("v-img",{staticClass:"white--text align-end",attrs:{height:"250px",src:t.stu.photo}}),i("v-card-subtitle",{staticClass:"pb-0"},[i("h3",[t._v(" "+t._s(t.stu.name)+" ")]),i("p",[t._v("Year: "+t._s(t.stu.year))]),i("p",[i("i",{directives:[{name:"show",rawName:"v-show",value:null!=t.stu.email,expression:"stu.email != null"}],staticClass:"mr-2"},[i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[i("v-icon",t._g(t._b({attrs:{color:"green lighten-1"}},"v-icon",n,!1),a),[t._v(" mdi-email ")])]}}])},[i("span",[t._v(t._s(t.stu.email))])])],1),i("i",{directives:[{name:"show",rawName:"v-show",value:null!=t.stu.github,expression:"stu.github != null"}]},[i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[i("v-icon",t._g(t._b({attrs:{color:"black"}},"v-icon",n,!1),a),[t._v(" mdi-github ")])]}}])},[i("span",[t._v(t._s(t.stu.github))])])],1)])]),i("v-card-text",{staticClass:"text--primary"},[i("v-chip-group",{attrs:{column:"",mandatory:""}},t._l(t.stu.inerest,(function(e){return i("v-chip",{key:e,attrs:{small:"",outlined:"",color:"success","text-color":"green lighten-1"}},[t._v(" "+t._s(e)+" ")])})),1)],1)],1)],1)},O=[],x={props:{stu:{type:Object}}},C=x,A=i("b0af"),k=i("99d9"),j=i("3835"),$=i("5530"),N=(i("4de4"),i("8adc"),i("58df")),D=i("0789"),T=i("9d26"),E=i("a9ad"),S=i("4e82"),I=i("7560"),L=i("f2e7"),B=i("1c87"),V=i("af2b"),M=i("d9bd"),Y=Object(N["a"])(E["a"],V["a"],B["a"],I["a"],Object(S["a"])("chipGroup"),Object(L["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object($["a"])(Object($["a"])(Object($["a"])(Object($["a"])({"v-chip":!0},B["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(B["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var i=Object(j["a"])(e,2),a=i[0],n=i[1];t.$attrs.hasOwnProperty(a)&&Object(M["a"])(a,n,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(T["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(D["a"],t)},genClose:function(){var t=this;return this.$createElement(T["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],i=this.generateRouteLink(),a=i.tag,n=i.data;n.attrs=Object($["a"])(Object($["a"])({},n.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:n.attrs.tabindex}),n.directives.push({name:"show",value:this.active}),n=this.setBackgroundColor(this.color,n);var s=this.textColor||this.outlined&&this.color;return t(a,this.setTextColor(s,n),e)}}),P=(i("8f5a"),i("7efd")),W=Object(N["a"])(P["a"],E["a"]).extend({name:"v-chip-group",provide:function(){return{chipGroup:this}},props:{column:Boolean},computed:{classes:function(){return Object($["a"])(Object($["a"])({},P["a"].options.computed.classes.call(this)),{},{"v-chip-group":!0,"v-chip-group--column":this.column})}},watch:{column:function(t){t&&(this.scrollOffset=0),this.$nextTick(this.onResize)}},methods:{genData:function(){return this.setTextColor(this.color,Object($["a"])({},P["a"].options.methods.genData.call(this)))}}}),F=i("132d"),R=i("ade3"),X=(i("a9e3"),i("9734"),i("53ca")),H=(i("caad"),i("b64b"),i("b0c0"),i("2b0e")),J=H["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var i=this;this.clearDelay();var a=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){i.isActive={open:!0,close:!1}[t]},a)}}}),G=i("80d2"),z=Object(N["a"])(J,L["a"]),Z=z.extend({name:"activatable",props:{activator:{default:null,validator:function(t){return["string","object"].includes(Object(X["a"])(t))}},disabled:Boolean,internalActivator:Boolean,openOnHover:Boolean,openOnFocus:Boolean},data:function(){return{activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave","focus"],listeners:{}}},watch:{activator:"resetActivator",openOnFocus:"resetActivator",openOnHover:"resetActivator"},mounted:function(){var t=Object(G["j"])(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&Object(M["b"])('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy:function(){this.removeActivatorEvents()},methods:{addActivatorEvents:function(){if(this.activator&&!this.disabled&&this.getActivator()){this.listeners=this.genActivatorListeners();for(var t=Object.keys(this.listeners),e=0,i=t;e<i.length;e++){var a=i[e];this.getActivator().addEventListener(a,this.listeners[a])}}},genActivator:function(){var t=Object(G["i"])(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes:function(){return{role:"button","aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners:function(){var t=this;if(this.disabled)return{};var e={};return this.openOnHover?(e.mouseenter=function(e){t.getActivator(e),t.runDelay("open")},e.mouseleave=function(e){t.getActivator(e),t.runDelay("close")}):e.click=function(e){var i=t.getActivator(e);i&&i.focus(),e.stopPropagation(),t.isActive=!t.isActive},this.openOnFocus&&(e.focus=function(e){t.getActivator(e),e.stopPropagation(),t.isActive=!t.isActive}),e},getActivator:function(t){if(this.activatorElement)return this.activatorElement;var e=null;if(this.activator){var i=this.internalActivator?this.$el:document;e="string"===typeof this.activator?i.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){var a=this.activatorNode[0].componentInstance;e=a&&a.$options.mixins&&a.$options.mixins.some((function(t){return t.options&&["activatable","menuable"].includes(t.options.name)}))?a.getActivator():this.activatorNode[0].elm}else t&&(e=t.currentTarget||t.target);return this.activatorElement=e,this.activatorElement},getContentSlot:function(){return Object(G["i"])(this,"default",this.getValueProxy(),!0)},getValueProxy:function(){var t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents:function(){if(this.activator&&this.activatorElement){for(var t=Object.keys(this.listeners),e=0,i=t;e<i.length;e++){var a=i[e];this.activatorElement.removeEventListener(a,this.listeners[a])}this.listeners={}}},resetActivator:function(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}}),q=i("6b75");function U(t){if(Array.isArray(t))return Object(q["a"])(t)}i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("a630");function K(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var Q=i("06c5");function tt(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function et(t){return U(t)||K(t)||Object(Q["a"])(t)||tt()}function it(t){for(var e=[],i=0;i<t.length;i++){var a=t[i];a.isActive&&a.isDependent?e.push(a):e.push.apply(e,et(it(a.$children)))}return e}var at=Object(N["a"])().extend({name:"dependent",data:function(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive:function(t){if(!t)for(var e=this.getOpenDependents(),i=0;i<e.length;i++)e[i].isActive=!1}},methods:{getOpenDependents:function(){return this.closeDependents?it(this.$children):[]},getOpenDependentElements:function(){for(var t=[],e=this.getOpenDependents(),i=0;i<e.length;i++)t.push.apply(t,et(e[i].getClickableDependentElements()));return t},getClickableDependentElements:function(){var t=[this.$el];return this.$refs.content&&t.push(this.$refs.content),this.overlay&&t.push(this.overlay.$el),t.push.apply(t,et(this.getOpenDependentElements())),t}}}),nt=(i("159b"),i("9d65"));function st(t){var e=Object(X["a"])(t);return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}var ot=Object(N["a"])(nt["a"]).extend({name:"detachable",props:{attach:{default:!1,validator:st},contentClass:{type:String,default:""}},data:function(){return{activatorNode:null,hasDetached:!1}},watch:{attach:function(){this.hasDetached=!1,this.initDetach()},hasContent:function(){this.$nextTick(this.initDetach)}},beforeMount:function(){var t=this;this.$nextTick((function(){if(t.activatorNode){var e=Array.isArray(t.activatorNode)?t.activatorNode:[t.activatorNode];e.forEach((function(e){if(e.elm&&t.$el.parentNode){var i=t.$el===t.$el.parentNode.firstChild?t.$el:t.$el.nextSibling;t.$el.parentNode.insertBefore(e.elm,i)}}))}}))},mounted:function(){this.hasContent&&this.initDetach()},deactivated:function(){this.isActive=!1},beforeDestroy:function(){try{if(this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content),this.activatorNode){var t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];t.forEach((function(t){t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)}))}}catch(e){console.log(e)}},methods:{getScopeIdAttrs:function(){var t=Object(G["h"])(this.$vnode,"context.$options._scopeId");return t&&Object(R["a"])({},t,"")},initDetach:function(){var t;this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach||(t=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.appendChild(this.$refs.content),this.hasDetached=!0):Object(M["c"])("Unable to locate target ".concat(this.attach||"[data-app]"),this))}}}),rt=i("fe6c"),ct=(i("99af"),i("2532"),H["a"].extend().extend({name:"stackable",data:function(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex:function(){if("undefined"===typeof window)return 0;var t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:Object(G["k"])(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this.$el,i=[this.stackMinZIndex,Object(G["k"])(e)],a=[].concat(et(document.getElementsByClassName("v-menu__content--active")),et(document.getElementsByClassName("v-dialog__content--active"))),n=0;n<a.length;n++)t.includes(a[n])||i.push(Object(G["k"])(a[n]));return Math.max.apply(Math,i)}}})),lt=Object(N["a"])(ct,rt["a"],Z),ht=lt.extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,openOnClick:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:function(){return{absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}},computed:{computedLeft:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=(!1!==this.attach?t.offsetLeft:t.left)||0,a=Math.max(t.width,e.width),n=0;if(n+=this.left?i-(a-t.width):i,this.offsetX){var s=isNaN(Number(this.maxWidth))?t.width:Math.min(t.width,Number(this.maxWidth));n+=this.left?-s:t.width}return this.nudgeLeft&&(n-=parseInt(this.nudgeLeft)),this.nudgeRight&&(n+=parseInt(this.nudgeRight)),n},computedTop:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=0;return this.top&&(i+=t.height-e.height),!1!==this.attach?i+=t.offsetTop:i+=t.top+this.pageYOffset,this.offsetY&&(i+=this.top?-t.height:t.height),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),i},hasActivator:function(){return!!this.$slots.activator||!!this.$scopedSlots.activator||!!this.activator||!!this.inputActivator}},watch:{disabled:function(t){t&&this.callDeactivate()},isActive:function(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount:function(){this.hasWindow="undefined"!==typeof window},methods:{absolutePosition:function(){return{offsetTop:0,offsetLeft:0,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate:function(){},calcLeft:function(t){return Object(G["d"])(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop:function(){return Object(G["d"])(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow:function(t,e){var i=t+e-this.pageWidth+12;return t=(!this.left||this.right)&&i>0?Math.max(t-i,0):Math.max(t,12),t+this.getOffsetLeft()},calcYOverflow:function(t){var e=this.getInnerHeight(),i=this.pageYOffset+e,a=this.dimensions.activator,n=this.dimensions.content.height,s=t+n,o=i<s;return o&&this.offsetOverflow&&a.top>n?t=this.pageYOffset+(a.top-n):o&&!this.allowOverflow?t=i-n-12:t<this.pageYOffset&&!this.allowOverflow&&(t=this.pageYOffset+12),t<12?12:t},callActivate:function(){this.hasWindow&&this.activate()},callDeactivate:function(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset:function(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed:function(){if(!1===this.attach){var t=this.getActivator();while(t){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1}},deactivate:function(){},genActivatorListeners:function(){var t=this,e=Z.options.methods.genActivatorListeners.call(this),i=e.click;return e.click=function(e){t.openOnClick&&i&&i(e),t.absoluteX=e.clientX,t.absoluteY=e.clientY},e},getInnerHeight:function(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft:function(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop:function(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect:function(t){var e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure:function(t){if(!t||!this.hasWindow)return null;var e=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){var i=window.getComputedStyle(t);e.left=parseInt(i.marginLeft),e.top=parseInt(i.marginTop)}return e},sneakPeek:function(t){var e=this;requestAnimationFrame((function(){var i=e.$refs.content;i&&"none"===i.style.display?(i.style.display="inline-block",t(),i.style.display="none"):t()}))},startTransition:function(){var t=this;return new Promise((function(e){return requestAnimationFrame((function(){t.isContentActive=t.hasJustFocused=t.isActive,e()}))}))},updateDimensions:function(){var t=this;this.hasWindow="undefined"!==typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;var e={activator:Object($["a"])({},this.dimensions.activator),content:Object($["a"])({},this.dimensions.content)};if(!this.hasActivator||this.absolute)e.activator=this.absolutePosition();else{var i=this.getActivator();if(!i)return;e.activator=this.measure(i),e.activator.offsetLeft=i.offsetLeft,!1!==this.attach?e.activator.offsetTop=i.offsetTop:e.activator.offsetTop=0}this.sneakPeek((function(){t.$refs.content&&(e.content=t.measure(t.$refs.content)),t.dimensions=e}))}}}),ut=Object(N["a"])(E["a"],J,at,ot,ht,L["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,i=t.content,a=!this.bottom&&!this.left&&!this.top&&!this.right,n=!1!==this.attach?e.offsetLeft:e.left,s=0;return this.top||this.bottom||a?s=n+e.width/2-i.width/2:(this.left||this.right)&&(s=n+(this.right?e.width:-i.width)+(this.right?10:-10)),this.nudgeLeft&&(s-=parseInt(this.nudgeLeft)),this.nudgeRight&&(s+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(s,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,i=t.content,a=!1!==this.attach?e.offsetTop:e.top,n=0;return this.top||this.bottom?n=a+(this.bottom?e.height:-i.height)+(this.bottom?10:-10):(this.left||this.right)&&(n=a+e.height/2-i.height/2),this.nudgeTop&&(n-=parseInt(this.nudgeTop)),this.nudgeBottom&&(n+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(n+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(G["d"])(this.maxWidth),minWidth:Object(G["d"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(G["j"])(this,"activator",!0)&&Object(M["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=Z.options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===G["l"].esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(R["a"])(t,this.contentClass,!0),Object(R["a"])(t,"menuable__content__active",this.isActive),Object(R["a"])(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}}),dt=Object(u["a"])(C,_,O,!1,null,null,null),vt=dt.exports;v()(dt,{VCard:A["a"],VCardSubtitle:k["a"],VCardText:k["b"],VChip:Y,VChipGroup:W,VIcon:F["a"],VImg:f["a"],VTooltip:ut});var pt={props:["memberData"],components:{Student:vt},data:function(){return{std_cat:{},cards:["Master","Undergraduate","Ph.D.","Past Members"]}},mounted:function(){this.std_cat=this.memberData}},ft=pt,mt=i("a523"),gt=i("8dd9"),bt=Object(u["a"])(ft,y,w,!1,null,null,null),yt=bt.exports;v()(bt,{VCol:p["a"],VContainer:mt["a"],VRow:m["a"],VSheet:gt["a"]});var wt=o.a.load("./data/data.yml"),_t=JSON.stringify(wt),Ot=JSON.parse(_t),xt={components:{Leader:b,Members:yt},data:function(){return{memberData:Ot.memberData}}},Ct=xt,At=i("f6c4"),kt=Object(u["a"])(Ct,a,n,!1,null,null,null);e["default"]=kt.exports;v()(kt,{VMain:At["a"]})},d6c1:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-main",{staticClass:"publication"},[i("h1",[t._v("Publications")]),i("v-container",{},[i("v-row",t._l(t.papers,(function(t,e){return i("v-col",{key:e,attrs:{cols:"auto",md:"10"}},[i("v-card",{attrs:{height:"200",flat:""}},[i("Paper",{attrs:{paper:t}})],1)],1)})),1)],1)],1)},n=[],s=i("b8ab"),o=i.n(s),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-row",{staticClass:"mt-1"},[i("v-col",{staticClass:"pa-0",attrs:{cols:"3"}},[i("v-img",{staticClass:"pa-0 mr-5",staticStyle:{margin:"0 auto"},attrs:{src:t.paper.image,"max-height":"150","max-width":"250","aspect-ratio":1}})],1),i("v-col",{staticClass:"pa-0",attrs:{cols:"9"}},[i("div",{staticClass:"mb-2"},[i("b",[t._v(t._s(t.paper.title))])]),i("div",{staticClass:"mb-2"},[i("i",{domProps:{innerHTML:t._s(t.paper.authors)}})]),i("div",[i("b",{domProps:{innerHTML:t._s(t.paper.pub)}}),i("span",[t._v(" "+t._s(t.paper.year)+" ")])]),i("div",[i("span",{directives:[{name:"show",rawName:"v-show",value:null!=t.paper.links.paper,expression:"paper.links.paper != null"}]},[i("v-btn",{staticClass:"ma-1",attrs:{color:"green lighten-2",dark:"",href:t.paper.links.paper}},[t._v(" paper "),i("v-icon",{attrs:{right:""}},[t._v(" mdi-attachment ")])],1)],1),i("span",{directives:[{name:"show",rawName:"v-show",value:null!=t.paper.links.code,expression:"paper.links.code != null"}]},[i("v-btn",{staticClass:"ma-1",attrs:{color:"orange lighten-2",dark:"",href:t.paper.links.code}},[t._v(" code "),i("v-icon",{attrs:{right:""}},[t._v(" mdi-github ")])],1)],1),i("span",{directives:[{name:"show",rawName:"v-show",value:null!=t.paper.links.data,expression:"paper.links.data != null"}]},[i("v-btn",{staticClass:"ma-1",attrs:{color:"light-blue lighten-2",dark:"",href:t.paper.links.data}},[t._v(" data "),i("v-icon",{attrs:{right:""}},[t._v(" mdi-database ")])],1)],1)])])],1)],1)},c=[],l={props:{paper:{type:Object}},data:function(){return{}}},h=l,u=i("2877"),d=i("6544"),v=i.n(d),p=i("8336"),f=i("62ad"),m=i("132d"),g=i("adda"),b=i("0fd9"),y=Object(u["a"])(h,r,c,!1,null,null,null),w=y.exports;v()(y,{VBtn:p["a"],VCol:f["a"],VIcon:m["a"],VImg:g["a"],VRow:b["a"]});var _=o.a.load("./data/data.yml"),O=JSON.stringify(_),x=JSON.parse(O),C={components:{Paper:w},data:function(){return{papers:x.paperList}}},A=C,k=i("b0af"),j=i("a523"),$=i("f6c4"),N=Object(u["a"])(A,a,n,!1,null,null,null);e["default"]=N.exports;v()(N,{VCard:k["a"],VCol:f["a"],VContainer:j["a"],VMain:$["a"],VRow:b["a"]})}}]);
//# sourceMappingURL=about.b74958a2.js.map