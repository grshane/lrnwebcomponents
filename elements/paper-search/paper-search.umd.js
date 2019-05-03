!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("@polymer/polymer/polymer-element.js"),require("@polymer/polymer/lib/utils/render-status.js"),require("@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js"),require("@polymer/polymer/lib/legacy/polymer.dom.js")):"function"==typeof define&&define.amd?define(["@polymer/polymer/polymer-element.js","@polymer/polymer/lib/utils/render-status.js","@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js","@polymer/polymer/lib/legacy/polymer.dom.js"],t):t((e=e||self).polymerElement_js,e.renderStatus_js,e.ironA11yKeysBehavior_js,e.polymer_dom_js)}(this,function(e,t,n,r){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e,t,n){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=a(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}var y=function(r){function l(){return i(this,l),c(this,a(l).apply(this,arguments))}return s(l,mixinBehaviors([n.IronA11yKeysBehavior],e.PolymerElement)),o(l,[{key:"focus",value:function(){this.$.input.focus()}},{key:"connectedCallback",value:function(){p(a(l.prototype),"connectedCallback",this).call(this),t.afterNextRender(this,function(){this.addEventListener("keypress",this._search.bind(this))})}},{key:"disconnectedCallback",value:function(){this.removeEventListener("keypress",this._search.bind(this)),p(a(l.prototype),"disconnectedCallback",this).call(this)}},{key:"_filter",value:function(e){this.dispatchEvent(new CustomEvent("paper-search-filter",{bubbles:!0,cancelable:!0,composed:!0,detail:!0}))}},{key:"_clear",value:function(){this.query="",this.$.input.focus(),this.dispatchEvent(new CustomEvent("paper-search-clear",{bubbles:!0,cancelable:!0,composed:!0,detail:!0}))}},{key:"_search",value:function(e){if(13==e.keyCode)return this.dispatchEvent(new CustomEvent("paper-search-search",{bubbles:!0,cancelable:!0,composed:!0,detail:!0})),!1}}],[{key:"tag",get:function(){return"paper-search-bar"}},{key:"properties",get:function(){return{query:{type:String,notify:!0,value:""},hideFilterButton:{type:Boolean,value:!1},disableFilterButton:{type:Boolean,value:!1},nrSelectedFilters:{type:Number,value:0},icon:{type:String,value:"search"},placeholder:{type:String,value:"Search"}}}}]),l}();window.customElements.define(y.tag,y);var f=function(t){function n(){return i(this,n),c(this,a(n).apply(this,arguments))}return s(n,e.PolymerElement),o(n,[{key:"open",value:function(){r.dom(document.body).appendChild(this),setTimeout(function(){this.$.dialog.open(),this._selectedFilters=Object.assign({},this.selectedFilters)}.bind(this),1)}},{key:"close",value:function(){this.$.dialog.close()}},{key:"_tapSelectFilter",value:function(e){this.$.selector.select(e.model.filter),this._preselectFilterValues()}},{key:"_preselectFilterValues",value:function(){var e=this._selectedFilters[this._selectedFilter.id],t=function(t){return Boolean(e)&&e.indexOf(t.id)>=0};this._selectedFilterValues=this._selectedFilter.values.map(function(e){return Object.assign({},e,{selected:t(e)})})}},{key:"_tapReset",value:function(e){this._selectedFilters={}}},{key:"_tapApply",value:function(e){this.selectedFilters=this._selectedFilters,this.dispatchEvent(new CustomEvent("save",{bubbles:!0,cancelable:!0,composed:!0,detail:!0}))}},{key:"_tapSelectValues",value:function(e){var t,n,r,i=this._selectedFilterValues.filter(function(e){return e.selected}).map(function(e){return e.id});this._selectedFilters=Object.assign({},this._selectedFilters,(t={},n=this._selectedFilter.id,r=i,n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t)),this.$.selector.deselect(this._selectedFilter)}},{key:"_hasSelectedFilters",value:function(e){for(selectedFilter in e)if(e[selectedFilter].length>0)return!0;return!1}},{key:"_getSelectedValuesNames",value:function(e,t){var n=t[e.id];if(!e.values||!n)return this.noValuesLabel;var r=e.values.filter(function(e){return n.indexOf(e.id)>=0}).map(function(e){return e.name});return r.length>0?r.join(", "):this.noValuesLabel}}],[{key:"tag",get:function(){return"paper-filter-dialog"}},{key:"properties",get:function(){return{filters:Array,selectedFilters:{type:Object,notify:!0,value:{}},resetButton:{type:String,value:"Reset"},saveButton:{type:String,value:"Save filters"},noValuesLabel:{type:String,value:"No filters yet"},_selectedFilters:{type:Object,value:{}},_selectedFilter:Object,_selectedFilterValues:{type:Array,value:[]}}}}]),n}();window.customElements.define(f.tag,f);var h=function(t){function n(){return i(this,n),c(this,a(n).apply(this,arguments))}return s(n,e.PolymerElement),o(n,[{key:"getPaperSearchBarInstance",value:function(){return this.$.paperSearchBar}},{key:"_loadMore",value:function(){this.count+=20,this._updateData()}},{key:"_computeHasItems",value:function(e){return void 0!==e&&e.length>0}},{key:"_showNoResults",value:function(e,t){return!e&&!t}},{key:"_onChangeRequest",value:function(e,t){void 0!==t&&(this.count=20,this._updateData())}},{key:"_updateData",value:function(){this.dispatchEvent(new CustomEvent("change-request-params",{bubbles:!0,cancelable:!0,composed:!0,detail:!0}))}},{key:"_onFilter",value:function(){this.$.filterDialog.open()}},{key:"_onSearch",value:function(){this.dispatchEvent(new CustomEvent("search",{bubbles:!0,cancelable:!0,composed:!0,detail:!0}))}},{key:"_getNrSelectedFilters",value:function(e){return Object.keys(e).length<=0?0:Object.keys(e).map(function(t){return e[t].length}).reduce(function(e,t){return e+t})}},{key:"_disableFilterButton",value:function(e){return!(e&&e.length>0)}}],[{key:"tag",get:function(){return"paper-search-panel"}},{key:"properties",get:function(){return{search:{type:String,observer:"_onChangeRequest",notify:!0},filters:Object,selectedFilters:{type:Object,observer:"_onChangeRequest",notify:!0,value:{}},items:Array,hasMore:{type:Boolean,value:!1},loading:{type:Boolean,value:!1},hideFilterButton:{type:Boolean,value:!1},count:{type:Number,notify:!0,value:20},icon:{type:String,value:"search"},placeholder:{type:String,value:"Search"},noResultsText:{type:String,value:"No matching results found."},moreButton:{type:String,value:"More"},resetButton:String,saveButton:String,noValuesLabel:String,_hasItems:{type:Boolean,computed:"_computeHasItems(items)",value:!1}}}}]),n}();window.customElements.define(h.tag,h)});
//# sourceMappingURL=paper-search.umd.js.map
