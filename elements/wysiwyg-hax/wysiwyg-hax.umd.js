!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@lrnwebcomponents/cms-hax/cms-hax.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@lrnwebcomponents/cms-hax/cms-hax.js"],t):t((e=e||self).WysiwygHax={},e.polymerElement_js)}(this,function(e,t){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e,t,n){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=i(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function l(){var e,t,n=(e=['\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <textarea id$="[[fieldId]]" name="[[fieldName]]" hidden="">\n[[bodyValue]]</textarea>\n    <cms-hax\n      open-default="[[openDefault]]"\n      hide-message=""\n      body-offset-left="[[bodyOffsetLeft]]"\n      update-page-data="[[updatePageData]]"\n      end-point="[[endPoint]]"\n      app-store-connection="[[appStoreConnection]]"\n      hide-export-button="[[hideExportButton]]"\n      align="[[align]]">\n    </cms-hax>'],(t=['\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <textarea id\\$="[[fieldId]]" name="[[fieldName]]" hidden="">\n[[bodyValue]]</textarea>\n    <cms-hax\n      open-default="[[openDefault]]"\n      hide-message=""\n      body-offset-left="[[bodyOffsetLeft]]"\n      update-page-data="[[updatePageData]]"\n      end-point="[[endPoint]]"\n      app-store-connection="[[appStoreConnection]]"\n      hide-export-button="[[hideExportButton]]"\n      align="[[align]]">\n    </cms-hax>'])||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return l=function(){return n},n}var p=function(e){function p(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),a(this,i(p).apply(this,arguments))}var u,c,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(p,t.PolymerElement),u=p,f=[{key:"template",get:function(){return t.html(l())}},{key:"tag",get:function(){return"wysiwyg-hax"}},{key:"properties",get:function(){return{openDefault:{type:Boolean,value:!1},hideExportButton:{type:Boolean,value:!0},align:{type:String,value:"right"},bodyValue:{type:String},appStoreConnection:{type:Object},fieldId:{type:String,value:"textarea-input-field"},fieldName:{type:String,value:"data[content]"},bodyOffsetLeft:{type:Number,value:-22},editMode:{type:Boolean,reflectToAttribute:!0},endPoint:{type:String},updatePageData:{type:String},activeHaxBody:{type:Object,observer:"_activeHaxBodyUpdated"},__imported:{type:Boolean,value:!1}}}}],(c=[{key:"_attachDom",value:function(e){this.appendChild(e)}},{key:"_activeHaxBodyUpdated",value:function(e,t){var o=this;if(null!=e&&!this.__imported){this.__imported=!0;var i=this.queryEffectiveChildren("template");"undefined"!==n(i)&&(e.importContent(i.innerHTML),this.editMode=!1,window.HaxStore.write("editMode",this.editMode,this),setTimeout(function(){o.editMode=!0,window.HaxStore.write("editMode",o.editMode,o)},200))}}},{key:"connectedCallback",value:function(){d(i(p.prototype),"connectedCallback",this).call(this),document.body.addEventListener("hax-save",this._bodyContentUpdated.bind(this)),document.body.addEventListener("hax-store-property-updated",this._haxStorePropertyUpdated.bind(this))}},{key:"disconnectedCallback",value:function(){document.body.removeEventListener("hax-save",this._bodyContentUpdated.bind(this)),document.body.removeEventListener("hax-store-property-updated",this._haxStorePropertyUpdated.bind(this)),d(i(p.prototype),"disconnectedCallback",this).call(this)}},{key:"_haxStorePropertyUpdated",value:function(e){e.detail&&"undefined"!==n(e.detail.value)&&e.detail.property&&("object"===n(e.detail.value)&&this.set(e.detail.property,null),this.set(e.detail.property,e.detail.value))}},{key:"_bodyContentUpdated",value:function(e){this.bodyValue=window.HaxStore.instance.activeHaxBody.haxToContent()}}])&&o(u.prototype,c),f&&o(u,f),p}();window.customElements.define(p.tag,p),e.WysiwygHax=p,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=wysiwyg-hax.umd.js.map
