define(["exports","./node_modules/@polymer/polymer/polymer-element.js","./node_modules/@polymer/paper-card/paper-card.js","./node_modules/@polymer/paper-button/paper-button.js","./node_modules/@polymer/polymer/lib/elements/dom-repeat.js","./node_modules/@polymer/polymer/lib/elements/dom-if.js"],function(_exports,_polymerElement,_paperCard,_paperButton,_domRepeat,_domIf){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.LrnAssignments=_exports.LrnAssignment=void 0;function _templateObject2_c4d0ccd06d6a11e9a3db398085ccc146(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: flex;\n        flex-wrap: wrap;\n      }\n      :host lrn-assignment {\n        margin: 16px;\n      }\n      :host([layout=\"wide\"]) lrn-assignment {\n        width: calc(100% - 32px);\n      }\n      :host([layout=\"medium\"]) lrn-assignment {\n        width: calc(50% - 32px);\n      }\n      :host([layout=\"tight\"]) lrn-assignment {\n        width: calc(25% - 32px);\n      }\n    </style>\n    <template is=\"dom-repeat\" items=\"[[assignments]]\">\n      <lrn-assignment\n        title=\"[[item.title]]\"\n        actions=\"[[item.actions]]\"\n      ></lrn-assignment>\n    </template>\n\n    <template is=\"dom-if\" if=\"[[url]]\">\n      <iron-ajax\n        auto=\"\"\n        url=\"[[url]]\"\n        handle-as=\"json\"\n        on-response=\"handleResponse\"\n      ></iron-ajax>\n    </template>"]);_templateObject2_c4d0ccd06d6a11e9a3db398085ccc146=function _templateObject2_c4d0ccd06d6a11e9a3db398085ccc146(){return data};return data}function _templateObject_c4d0ccd06d6a11e9a3db398085ccc146(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: flex;\n        width: 100%;\n      }\n      paper-card {\n        width: 100%;\n      }\n    </style>\n    <paper-card\n      heading=\"[[title]]\"\n      image=\"[[image]]\"\n      elevation=\"1\"\n      animated-shadow=\"false\"\n    >\n      <div class=\"card-content\">[[details]] <slot></slot></div>\n      <div class=\"card-actions\">\n        <template is=\"dom-repeat\" items=\"[[actions]]\">\n          <a href$=\"[[item.url]]\"\n            ><paper-button raised>[[item.label]]</paper-button></a\n          >\n        </template>\n      </div>\n    </paper-card>"]);_templateObject_c4d0ccd06d6a11e9a3db398085ccc146=function _templateObject_c4d0ccd06d6a11e9a3db398085ccc146(){return data};return data}/**
`lrn-assignment`

* @demo demo/index.html
*/var LrnAssignment=/*#__PURE__*/function(_PolymerElement){babelHelpers.inherits(LrnAssignment,_PolymerElement);function LrnAssignment(){babelHelpers.classCallCheck(this,LrnAssignment);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(LrnAssignment).apply(this,arguments))}babelHelpers.createClass(LrnAssignment,null,[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_c4d0ccd06d6a11e9a3db398085ccc146())}},{key:"tag",get:function get(){return"lrn-assignment"}},{key:"properties",get:function get(){return{/**
       * Title
       */title:{type:String},/**
       * Image url
       */image:{type:String},/**
       * Details of the assignment
       */details:{type:String},/**
       * url
       */url:{type:String},open:{type:Boolean,value:!1},complete:{type:Boolean,value:!1},actions:{type:Object}}}}]);return LrnAssignment}(_polymerElement.PolymerElement);_exports.LrnAssignment=LrnAssignment;window.customElements.define(LrnAssignment.tag,LrnAssignment);var LrnAssignments=/*#__PURE__*/function(_PolymerElement2){babelHelpers.inherits(LrnAssignments,_PolymerElement2);function LrnAssignments(){babelHelpers.classCallCheck(this,LrnAssignments);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(LrnAssignments).apply(this,arguments))}babelHelpers.createClass(LrnAssignments,[{key:"assignmentsChanged",value:function assignmentsChanged(assignments){if(1>=assignments.length){this.layout="wide"}else if(4>=assignments.length){this.layout="medium"}else if(6>=assignments.length){this.layout="tight"}}},{key:"rowItemsChanged",value:function rowItemsChanged(items){}},{key:"handleResponse",value:function handleResponse(data){this.assignments=data.response}}],[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject2_c4d0ccd06d6a11e9a3db398085ccc146())}},{key:"tag",get:function get(){return"lrn-assignments"}},{key:"properties",get:function get(){return{assignments:{type:Object,reflectToAttribute:!0,observer:"assignmentsChanged"},layout:{type:String,reflectToAttribute:!0},url:{type:String}}}}]);return LrnAssignments}(_polymerElement.PolymerElement);_exports.LrnAssignments=LrnAssignments;window.customElements.define(LrnAssignments.tag,LrnAssignments)});