define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.LrnsysBehaviors = void 0;
  function _templateObject_005b29f0d6fb11e8b4c33f69c97c1c99() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_005b29f0d6fb11e8b4c33f69c97c1c99 = function() {
      return data;
    };
    return data;
  }
  var LrnsysBehaviors = (function(_PolymerElement) {
    babelHelpers.inherits(LrnsysBehaviors, _PolymerElement);
    function LrnsysBehaviors() {
      babelHelpers.classCallCheck(this, LrnsysBehaviors);
      return babelHelpers.possibleConstructorReturn(
        this,
        (
          LrnsysBehaviors.__proto__ || Object.getPrototypeOf(LrnsysBehaviors)
        ).apply(this, arguments)
      );
    }
    babelHelpers.createClass(
      LrnsysBehaviors,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                LrnsysBehaviors.prototype.__proto__ ||
                  Object.getPrototypeOf(LrnsysBehaviors.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              LrnsysBehaviors.haxProperties,
              LrnsysBehaviors.tag,
              this
            );
          }
        }
      ],
      [
        {
          key: "template",
          get: function get() {
            return (0, _polymerElement.html)(
              _templateObject_005b29f0d6fb11e8b4c33f69c97c1c99()
            );
          }
        },
        {
          key: "haxProperties",
          get: function get() {
            return {
              canScale: !0,
              canPosition: !0,
              canEditSource: !1,
              gizmo: {
                title: "Lrnsys behaviors",
                description: "Automated conversion of lrnsys-behaviors/",
                icon: "icons:android",
                color: "green",
                groups: ["Behaviors"],
                handles: [{ type: "todo:read-the-docs-for-usage" }],
                meta: {
                  author: "btopro",
                  owner: "The Pennsylvania State University"
                }
              },
              settings: { quick: [], configure: [], advanced: [] }
            };
          }
        },
        {
          key: "properties",
          get: function get() {
            return {};
          }
        },
        {
          key: "tag",
          get: function get() {
            return "lrnsys-behaviors";
          }
        }
      ]
    );
    return LrnsysBehaviors;
  })(_polymerElement.PolymerElement);
  _exports.LrnsysBehaviors = LrnsysBehaviors;
  window.customElements.define(LrnsysBehaviors.tag, LrnsysBehaviors);
});
