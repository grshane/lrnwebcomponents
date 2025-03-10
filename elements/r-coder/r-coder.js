/**
 * Copyright 2019 PSU
 * @license Apache-2.0, see License.md for full text.
 */
import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { HAXWiring } from "@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js";
import "@polymer/paper-button/paper-button.js";
import "@lrnwebcomponents/code-editor/code-editor.js";

/**
 * `r-coder`
 * `R coder interface for the r-service backend.`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class RCoder extends PolymerElement {
  // render function
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }

        #editor {
          height: var(--r-coder-editor-height, 300px);
          width: var(--r-coder-editor-width, 100%);
        }

        #button {
          margin: var(--r-code-button-margin, 10px 0);
        }
      </style>
      <code-editor id="editor" language="r"></code-editor>
      <paper-button
        id="button"
        disabled="[[!__connected]]"
        on-click="process"
        raised
        >Process</paper-button
      >
      <div id="output"></div>
    `;
  }

  // haxProperty definition
  static get haxProperties() {
    return {
      canScale: true,
      canPosition: true,
      canEditSource: false,
      gizmo: {
        title: "R coder",
        description: "R coder interface for the r-service backend.",
        icon: "icons:android",
        color: "green",
        groups: ["Coder"],
        handles: [
          {
            type: "todo:read-the-docs-for-usage"
          }
        ],
        meta: {
          author: "heymp",
          owner: "PSU"
        }
      },
      settings: {
        quick: [],
        configure: [
          {
            property: "endpoint",
            description: "",
            inputMethod: "textfield",
            required: false,
            icon: "icons:android"
          }
        ],
        advanced: []
      }
    };
  }
  // properties available to the custom element for data binding
  static get properties() {
    return {
      endpoint: {
        name: "endpoint",
        type: "String",
        value: "/service/r-service",
        reflectToAttribute: false,
        observer: false
      },
      __connected: {
        name: "connected",
        type: "Boolean",
        value: false,
        observer: false
      }
    };
  }

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "r-coder";
  }
  /**
   * life cycle, element is afixed to the DOM
   */
  connectedCallback() {
    super.connectedCallback();
    this.HAXWiring = new HAXWiring();
    this.HAXWiring.setup(RCoder.haxProperties, RCoder.tag, this);

    this.ping();
    this.shadowRoot.getElementById(
      "editor"
    ).editorValue = this.textContent.trim();
  }

  async ping() {
    const status = await fetch(this.endpoint, {
      method: "GET"
    }).then(res => res.status);
    this.__connected = status === 200;
  }

  /**
   * life cycle, element is removed from the DOM
   */
  //disconnectedCallback() {}

  async process() {
    const code = this.shadowRoot.getElementById("editor").value;
    const data = await fetch(this.endpoint, {
      method: "POST",
      body: code
    }).then(res => res.text());
    this.shadowRoot.getElementById("output").innerText = data;
  }
}
window.customElements.define(RCoder.tag, RCoder);

export { RCoder };
