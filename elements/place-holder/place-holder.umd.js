!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@polymer/polymer/lib/utils/render-status.js"),require("@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"),require("@lrnwebcomponents/simple-colors/simple-colors.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@polymer/polymer/lib/utils/render-status.js","@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","@lrnwebcomponents/simple-colors/simple-colors.js"],t):t((e=e||self).PlaceHolder={},e.polymerElement_js,e.renderStatus_js,e.HAXWiring_js)}(this,function(e,t,n,r){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t,n){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=i(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function c(){var e,t,n=(e=['\n    <style include="simple-colors">\n      :host {\n        display: block;\n        border: none;\n        transition: 0.2s all linear;\n      }\n      :host([drag-over]) {\n        border: 4px dashed #2196f3;\n      }\n      .placeholder-inner {\n        text-align: center;\n        padding: 16px;\n        color: var(--simple-colors-default-theme-grey-11, #222222);\n        background-color: var(--simple-colors-default-theme-grey-2, #eeeeee);\n      }\n      iron-icon.placeholder-icon {\n        margin: 0 auto;\n        width: 50%;\n        height: 50%;\n        display: block;\n      }\n      .placeholder-text {\n        line-height: 24px;\n        font-size: 24px;\n        font-style: italic;\n      }\n    </style>\n    <div class="placeholder-inner">\n      <iron-icon icon="[[iconFromType]]" class="placeholder-icon"></iron-icon>\n      <span class="placeholder-text">[[calcText]]</span>\n    </div>'],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return c=function(){return n},n}var p=function(e){function p(){var e,t,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),t=this,e=!(o=i(p).call(this))||"object"!=typeof o&&"function"!=typeof o?l(t):o,import("@polymer/iron-icons/iron-icons.js"),import("@polymer/iron-icons/editor-icons.js"),import("@polymer/iron-icons/notification-icons.js"),import("@polymer/iron-icons/av-icons.js"),import("@polymer/iron-icons/device-icons.js"),import("@polymer/iron-icons/image-icons.js"),n.afterNextRender(l(e),function(){this.HAXWiring=new r.HAXWiring,this.HAXWiring.setup(p.haxProperties,p.tag,this)}),e}var d,u,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(p,t.PolymerElement),d=p,f=[{key:"template",get:function(){return t.html(c())}},{key:"tag",get:function(){return"place-holder"}},{key:"properties",get:function(){return{iconFromType:{type:String,computed:"_getIconFromType(type, dragOver)"},text:{type:String,value:""},calcText:{type:String,computed:"_getCalcText(text, type, dragOver)"},type:{type:String,value:"text"},dragOver:{type:Boolean,value:!1,reflectToAttribute:!0}}}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Placeholder",description:"A place holder that can be converted into the media type that's been selected",icon:"image:transform",color:"grey",groups:["Placeholder"],handles:[],meta:{author:"LRNWebComponents"}},settings:{quick:[],configure:[{property:"type",title:"Type",description:"Type of gizmo that this accepts for replacement.",inputMethod:"select",options:{text:"Text / content",document:"Document / file",audio:"Audio",video:"Video",image:"Image",math:"Math"}}],advanced:[]},saveOptions:{wipeSlot:!0}}}}],(u=[{key:"fireReplaceEvent",value:function(e){this.dispatchEvent(new CustomEvent("place-holder-replace",{bubbles:!0,cancelable:!0,composed:!0,detail:this.type}))}},{key:"_getCalcText",value:function(e,t,n){return n?"Upload file":""===e?"Place holder for "+t+".":e}},{key:"_getIconFromType",value:function(e,t){if(t)return"icons:file-upload";switch(e){case"document":return"editor:insert-drive-file";case"audio":return"av:music-video";case"video":return"notification:ondemand-video";case"image":return"image:crop-original";case"math":return"editor:functions";case"text":default:return"editor:format-align-left"}}},{key:"connectedCallback",value:function(){s(i(p.prototype),"connectedCallback",this).call(this),n.afterNextRender(this,function(){this.addEventListener("dragover",function(e){this.dragOver=!0,e.preventDefault(),e.stopPropagation(),this.classList.add("dragover")}),this.addEventListener("dragleave",function(e){this.dragOver=!1,e.preventDefault(),e.stopPropagation(),this.classList.remove("dragover")}),this.addEventListener("drop",function(e){this.dragOver=!1,e.preventDefault(),e.stopPropagation(),this.classList.remove("dragover");try{"file"===e.dataTransfer.items[0].kind&&(e.placeHolderElement=this,this.dispatchEvent(new CustomEvent("place-holder-file-drop",{bubbles:!0,cancelable:!0,composed:!0,detail:e})))}catch(e){}}),this.addEventListener("dblclick",this.fireReplaceEvent.bind(this))})}},{key:"disconnectedCallback",value:function(){this.removeEventListener("dragover",function(e){this.dragOver=!0,e.preventDefault(),e.stopPropagation(),this.classList.add("dragover")}),this.removeEventListener("dragleave",function(e){this.dragOver=!1,e.preventDefault(),e.stopPropagation(),this.classList.remove("dragover")}),this.removeEventListener("drop",function(e){this.dragOver=!1,e.preventDefault(),e.stopPropagation(),this.classList.remove("dragover");try{"file"===e.dataTransfer.items[0].kind&&(e.placeHolderElement=this,this.dispatchEvent(new CustomEvent("place-holder-file-drop",{bubbles:!0,cancelable:!0,composed:!0,detail:e})))}catch(e){}}),this.removeEventListener("dblclick",this.fireReplaceEvent.bind(this)),s(i(p.prototype),"disconnectedCallback",this).call(this)}}])&&o(d.prototype,u),f&&o(d,f),p}();window.customElements.define(p.tag,p),e.PlaceHolder=p,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=place-holder.umd.js.map
