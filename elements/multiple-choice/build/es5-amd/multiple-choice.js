define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.MultipleChoice = void 0;
  function _templateObject_105f8f30d70011e8a6fb399934d9cd38() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_105f8f30d70011e8a6fb399934d9cd38 = function() {
      return data;
    };
    return data;
  }
  var MultipleChoice = (function(_PolymerElement) {
    babelHelpers.inherits(MultipleChoice, _PolymerElement);
    function MultipleChoice() {
      babelHelpers.classCallCheck(this, MultipleChoice);
      return babelHelpers.possibleConstructorReturn(
        this,
        (
          MultipleChoice.__proto__ || Object.getPrototypeOf(MultipleChoice)
        ).apply(this, arguments)
      );
    }
    babelHelpers.createClass(
      MultipleChoice,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                MultipleChoice.prototype.__proto__ ||
                  Object.getPrototypeOf(MultipleChoice.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              MultipleChoice.haxProperties,
              MultipleChoice.tag,
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
              _templateObject_105f8f30d70011e8a6fb399934d9cd38()
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
                title: "Multiple choice",
                description: "Automated conversion of multiple-choice/",
                icon: "icons:android",
                color: "green",
                groups: ["Choice"],
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
            return "multiple-choice";
          }
        }
      ]
    );
    return MultipleChoice;
  })(_polymerElement.PolymerElement);
  _exports.MultipleChoice = MultipleChoice;
  window.customElements.define(MultipleChoice.tag, MultipleChoice);
});
