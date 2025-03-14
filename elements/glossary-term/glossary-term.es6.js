/**
 * Copyright 2019 PSU
 * @license Apache-2.0, see License.md for full text.
 */import{html,PolymerElement}from"./node_modules/@polymer/polymer/polymer-element.js";import{HAXWiring}from"./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js";import"./node_modules/@lrnwebcomponents/lrn-vocab/lrn-vocab.js";/**
 * `glossary-term`
 * ``
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */class GlossaryTerm extends PolymerElement{// render function
static get template(){return html`
<style>:host {
  display: inline-block;
}

:host([hidden]) {
  display: none;
}

lrn-vocab {
  display: inline;
}</style>
<template is="dom-if" if="[[!_fallback]]">
  <lrn-vocab term="[[display]]">
    <div>[[definition]]</div>
  </lrn-vocab>
</template>
<template is="dom-if" if="[[_fallback]]">
  <slot></slot>
</template>`}// haxProperty definition
static get haxProperties(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Glossary term",description:"",icon:"icons:android",color:"green",groups:["Term"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"heyMP",owner:"PSU"}},settings:{quick:[],configure:[{property:"name",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"},{property:"definition",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"},{property:"display",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"}],advanced:[]}}}// properties available to the custom element for data binding
static get properties(){return{name:{name:"name",type:"String",value:"",reflectToAttribute:!1,observer:!1},definition:{name:"display",type:"String",value:"",reflectToAttribute:!1,observer:!1},display:{name:"display",type:"String",value:"",reflectToAttribute:!1,observer:!1},_fallback:{name:"fallback",type:"Boolean",value:!0,reflectToAttribute:!1,observer:!1}}}/**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */static get tag(){return"glossary-term"}/**
   * life cycle, element is afixed to the DOM
   */connectedCallback(){super.connectedCallback();this.HAXWiring=new HAXWiring;this.HAXWiring.setup(GlossaryTerm.haxProperties,GlossaryTerm.tag,this);// fetch definition
fetch("http://localhost:4000",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`{ term(name: "${this.name}") { name definition } }`})}).then(r=>r.json()).then(r=>{try{this.definition=r.data.term.definition;this._fallback=!1}catch(error){}})}/**
   * life cycle, element is removed from the DOM
   */ //disconnectedCallback() {}
}window.customElements.define(GlossaryTerm.tag,GlossaryTerm);export{GlossaryTerm};