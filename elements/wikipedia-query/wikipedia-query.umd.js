!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@polymer/polymer/lib/utils/render-status.js"),require("@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"),require("@polymer/iron-ajax/iron-ajax.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@polymer/polymer/lib/utils/render-status.js","@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","@polymer/iron-ajax/iron-ajax.js"],t):t((e=e||self).WikipediaQuery={},e.polymerElement_js,e.renderStatus_js,e.HAXWiring_js)}(this,function(e,t,n,r){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t,n){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function p(){var e,t,n=(e=['\n      <style>\n        :host {\n          display: block;\n          --wikipedia-query-body-height: 160px;\n        }\n        :host [hidden] {\n          display: none;\n        }\n        #result {\n          height: var(--wikipedia-query-body-height);\n          overflow: scroll;\n          border: 1px grey solid;\n          padding: 8px 16px;\n        }\n        citation-element {\n          background-color: #f8f8f8;\n          padding: 16px 8px;\n          font-size: 12px;\n        }\n      </style>\n      <iron-ajax\n        auto\n        url$="https://en.wikipedia.org/w/api.php?origin=*&amp;action=query&amp;titles=[[search]]&amp;prop=extracts&amp;format=json"\n        handle-as="json"\n        on-response="handleResponse"\n        debounce-duration="250"\n        last-response="{{searchResponse}}"\n      ></iron-ajax>\n      <h3 hidden$="[[!showTitle]]">[[search]] Wikipedia article</h3>\n      <div id="result" hidden$="[[!__rendercontent]]"></div>\n      <citation-element\n        hidden$="[[!__rendercontent]]"\n        creator="{Wikipedia contributors}"\n        scope="sibling"\n        license="by-sa"\n        title="[[search]] --- {Wikipedia}{,} The Free Encyclopedia"\n        source="https://en.wikipedia.org/w/index.php?title=[[search]]"\n        date="[[__now]]"\n      ></citation-element>\n    '],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return p=function(){return n},n}var u=function(e){function u(){var e,t,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),t=this,e=!(i=s(u).call(this))||"object"!=typeof i&&"function"!=typeof i?c(t):i,import("@lrnwebcomponents/citation-element/citation-element.js"),n.afterNextRender(c(e),function(){this.HAXWiring=new r.HAXWiring,this.HAXWiring.setup(u.haxProperties,u.tag,this)}),e}var d,h,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(u,t.PolymerElement),d=u,f=[{key:"tag",get:function(){return"wikipedia-query"}},{key:"template",get:function(){return t.html(p())}},{key:"properties",get:function(){return{showTitle:{type:Boolean,value:!0},search:{type:String,value:"Polymer (library)"},renderAs:{type:String,value:"content",observer:"_renderAsUpdated"},searchResponse:{type:Object}}}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Wikipedia article",description:"This can display a wikipedia article in context in a variety of formats.",icon:"book",color:"green",groups:["Content","Creative Commons"],handles:[{type:"content",title:"search"}],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"search",title:"Search term",description:"Word to search wikipedia for.",inputMethod:"textfield",icon:"editor:title",required:!0},{property:"showTitle",title:"Show title",description:"Whether or not to render the title of the article.",inputMethod:"boolean",icon:"editor:title"}],configure:[{property:"search",title:"Search term",description:"Word to search wikipedia for.",inputMethod:"textfield",icon:"editor:title",required:!0}]},saveOptions:{wipeSlot:!0}}}}],(h=[{key:"connectedCallback",value:function(){l(s(u.prototype),"connectedCallback",this).call(this);var e=new Date(Date.now());this.__now=e.getDate()+"/"+(e.getMonth()+1)+"/"+e.getFullYear()}},{key:"_renderAsUpdated",value:function(e,t){"undefined"!==i(e)&&this._resetRenderMethods()}},{key:"_validRenderMethods",value:function(){return["content"]}},{key:"_resetRenderMethods",value:function(){for(var e=this._validRenderMethods(),t=0;t<e.length;t++)this["__render"+e[t]]=!1}},{key:"handleResponse",value:function(e){if("undefined"!==i(this.searchResponse)&&this.searchResponse.query)for(var t in this["__render".concat(this.renderAs)]=!0,this.searchResponse.query.pages)if(this.searchResponse.query.pages.hasOwnProperty(t)&&this.searchResponse.query.pages[t].extract){var n=this.searchResponse.query.pages[t].extract;n=(n=(n=(n=n.replace(/<script[\s\S]*?>/gi,"&lt;script&gt;")).replace(/<\/script>/gi,"&lt;/script&gt;")).replace(/<style[\s\S]*?>/gi,"&lt;style&gt;")).replace(/<\/style>/gi,"&lt;/style&gt;"),this.shadowRoot.querySelector("#result").innerHTML=n}}}])&&o(d.prototype,h),f&&o(d,f),u}();window.customElements.define(u.tag,u),e.WikipediaQuery=u,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=wikipedia-query.umd.js.map
