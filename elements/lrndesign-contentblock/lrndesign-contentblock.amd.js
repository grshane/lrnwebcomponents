define(["exports","./node_modules/@polymer/polymer/polymer-element.js"],function(_exports,_polymerElement){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.LrndesignContentblock=void 0;function _templateObject_1a8a41206d6a11e9b436ab4223f04506(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        box-sizing: border-box;\n      }\n    </style>\n    <h3>[[title]]</h3>\n    <slot></slot>"]);_templateObject_1a8a41206d6a11e9b436ab4223f04506=function _templateObject_1a8a41206d6a11e9b436ab4223f04506(){return data};return data}/**
 * `lrndesign-contentblock`
 * `An incredibly basic content block`
 * @demo demo/index.html
 */var LrndesignContentblock=/*#__PURE__*/function(_PolymerElement){babelHelpers.inherits(LrndesignContentblock,_PolymerElement);function LrndesignContentblock(){babelHelpers.classCallCheck(this,LrndesignContentblock);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(LrndesignContentblock).apply(this,arguments))}babelHelpers.createClass(LrndesignContentblock,null,[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_1a8a41206d6a11e9b436ab4223f04506())}},{key:"tag",get:function get(){return"lrndesign-contentblock"}},{key:"properties",get:function get(){return{/**
       * Heading for this block
       */title:{type:String}}}}]);return LrndesignContentblock}(_polymerElement.PolymerElement);_exports.LrndesignContentblock=LrndesignContentblock;window.customElements.define(LrndesignContentblock.tag,LrndesignContentblock)});