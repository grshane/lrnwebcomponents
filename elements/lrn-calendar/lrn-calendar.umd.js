!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@polymer/polymer/polymer-element.js"),require("@polymer/polymer/lib/utils/render-status.js"),require("@polymer/polymer/lib/legacy/polymer.dom.js"),require("@polymer/polymer/lib/utils/resolve-url.js"),require("@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"),require("@lrnwebcomponents/es-global-bridge/es-global-bridge.js"),require("@polymer/iron-ajax/iron-ajax.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@polymer/polymer/lib/utils/render-status.js","@polymer/polymer/lib/legacy/polymer.dom.js","@polymer/polymer/lib/utils/resolve-url.js","@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","@lrnwebcomponents/es-global-bridge/es-global-bridge.js","@polymer/iron-ajax/iron-ajax.js"],e):e((t=t||self).LrnCalendar={},t.polymerElement_js,t.renderStatus_js,t.polymer_dom_js,t.resolveUrl_js,t.HAXWiring_js)}(this,function(t,e,n,r,i,a){"use strict";function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function h(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t,e,n){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=c(t)););return t}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}function p(){var t,e,n=(t=['\n    <style>\n      :host {\n        display: block;\n      }\n      lrn-calendar-date {\n        display: inline-table;\n        top: 0px;\n      }\n      paper-card {\n        width: 14%;\n        height: 20px;\n        display: inline-table;\n        padding: 0;\n        margin: 0;\n      }\n      .calendar {\n        color: var(--my-toolbar-title-color);\n      }\n      .header {\n        padding-bottom: 15px;\n      }\n    </style>\n\n    <div class="calendar">\n      <div class="header">\n        <div style="float: left">\n          <paper-button raised type="button" on-tap="monthView"\n            >Month</paper-button\n          >\n          <paper-button raised type="button" on-tap="weekView"\n            >Week</paper-button\n          >\n        </div>\n        <div style="float: right">\n          <paper-button raised type="button" on-tap="showDate"\n            >Today</paper-button\n          >\n          <paper-button on-tap="showPrev"\n            ><iron-icon icon="arrow-back"></iron-icon\n          ></paper-button>\n          <paper-button on-tap="showNext"\n            ><iron-icon icon="arrow-forward"></iron-icon\n          ></paper-button>\n        </div>\n        <div style="margin: 0 auto; width: 200px; text-align: center">\n          <h2>[[getDisplayDate(date)]]</h2>\n        </div>\n      </div>\n\n      <div class="calendarView" id="calView"></div>\n    </div>\n  '],e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}})));return p=function(){return n},n}var y=function(t){function o(){var t,e,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),e=this,t=!(r=c(o).call(this))||"object"!=typeof r&&"function"!=typeof r?l(e):r,import("@polymer/paper-button/paper-button.js"),import("@polymer/iron-icons/iron-icons.js"),import("@polymer/iron-icon/iron-icon.js"),import("@polymer/paper-card/paper-card.js"),import("@polymer/paper-menu-button/paper-menu-button.js"),import("@polymer/paper-dropdown-menu/paper-dropdown-menu.js"),import("@lrnwebcomponents/lrnsys-layout/lrnsys-layout.js"),import("@lrnwebcomponents/lrnsys-layout/lib/lrnsys-drawer.js"),import("@lrnwebcomponents/lrnsys-layout/lib/lrnsys-dialog.js"),import("@lrnwebcomponents/lrnsys-layout/lib/lrnsys-collapselist.js"),import("@lrnwebcomponents/lrnsys-layout/lib/lrnsys-collapselist-item.js"),import("@lrnwebcomponents/lrn-calendar/lib/lrn-calendar-date.js"),n.afterNextRender(l(t),function(){this.HAXWiring=new a.HAXWiring,this.HAXWiring.setup(o.haxProperties,o.tag,this)});var s=i.pathFromUrl(decodeURIComponent("undefined"!=typeof document?document.currentScript&&document.currentScript.src||document.baseURI:new("undefined"!=typeof URL?URL:require("url").URL)("file:"+__filename).href)),h="".concat(s,"lib/ical.js/build/ical.js");return window.addEventListener("es-bridge-ical-loaded",t._icalLoaded.bind(l(t))),window.ESGlobalBridge.requestAvailability(),window.ESGlobalBridge.instance.load("ical",h),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(o,e.PolymerElement),h(o,[{key:"_fileChanged",value:function(t,e){"undefined"!==s(t)&&this.__icalLoaded&&(this.loadFile(),this.getDateInfo(),this.createCalendar())}},{key:"_viewTypeChanged",value:function(t,e){"undefined"!==s(t)&&"undefined"!==s(this.file)&&this.__icalLoaded&&(this.getDateInfo(),this.createCalendar())}},{key:"_dateChanged",value:function(t,e){"undefined"!==s(t)&&"undefined"!==s(this.file)&&this.__icalLoaded&&(this.getDateInfo(),this.createCalendar())}},{key:"_dateStringChanged",value:function(t,e){"undefined"!==s(t)&&""!=t&&this.__icalLoaded&&(this.date=new Date(t))}}],[{key:"template",get:function(){return e.html(p())}},{key:"tag",get:function(){return"lrn-calendar"}},{key:"properties",get:function(){return{listOfEvents:{type:Array,value:[]},dateString:{type:String,observer:"_dateStringChanged"},date:{type:Date,value:new Date,observer:"_dateChanged"},view:{type:String,value:"month",observer:"_viewTypeChanged"},file:{type:String,reflectToAttribute:!0,observer:"_fileChanged"}}}}]),h(o,[{key:"disconnectedCallback",value:function(){d(c(o.prototype),"disconnectedCallback",this).call(this),window.removeEventListener("es-bridge-ical-loaded",this._icalLoaded.bind(this))}},{key:"_icalLoaded",value:function(){this.__icalLoaded=!0,"undefined"!==s(this.file)&&this.loadFile()}},{key:"loadFile",value:function(){this.startIndex=0,this.calendarText=this.readTextFile(this.file),this.listOfEvents=this.getEvents(this.date,this.calendarText),this.listOfEvents=this.sortByTime(this.listOfEvents)}},{key:"showPrev",value:function(){if(this.startIndex=0,"month"==this.view)t=2==this.date.getMonth()&&this.date.getDate()>28?new Date(this.date.getFullYear(),this.date.getMonth()-1,28):new Date(this.date.getFullYear(),this.date.getMonth()-1,this.date.getDate()),this.date=t;else{var t=new Date(this.date.getFullYear(),this.date.getMonth(),this.date.getDate()-7);this.date=t}this.startMonth=this.date.getMonth()+1,this.getDateInfo(),this.createCalendar()}},{key:"showNext",value:function(){if("month"==this.view)t=11==this.date.getMonth()?new Date(this.date.getFullYear()+1,0,this.date.getDate()):0==this.date.getMonth()&&this.date.getDate()>28?new Date(this.date.getFullYear(),this.date.getMonth()+1,28):new Date(this.date.getFullYear(),this.date.getMonth()+1,this.date.getDate()),this.date=t;else{var t=new Date(this.date.getFullYear(),this.date.getMonth(),this.date.getDate()+7);this.date=t}this.getDateInfo(),this.createCalendar()}},{key:"showDate",value:function(){this.startIndex=0,this.date=new Date,this.getDateInfo(),this.createCalendar()}},{key:"monthView",value:function(){this.view="month",this.startIndex=0,this.createCalendar()}},{key:"weekView",value:function(){this.view="week",this.startIndex=0,this.createCalendar()}},{key:"readTextFile",value:function(t){this.fileNotFound=!1;var e=new XMLHttpRequest,n="";return e.open("GET",t,!1),e.onreadystatechange=function(){4===e.readyState&&(n=200===e.status||0==e.status?e.responseText:"Not Found")},e.send(null),this.calendarText=n,n}},{key:"createCalendar",value:function(){"month"!=this.view&&"week"!=this.view&&(this.view="month"),this.date.getFullYear()||(this.date=new Date),this.getDateInfo(),this.totalDays=7*this.numweeks,this.calendarText=this.readTextFile(this.file),this.calendarView=this.shadowRoot.querySelector("#calView");for(var t=1,e=r.dom(this.shadowRoot.querySelector("#calView")).node,n=e.childNodes;n[1];)e.removeChild(e.childNodes[1]);var i=this.currentDayofWeek;if("week"==this.view){for(var a=0;this.currentDayofWeek+a<6;)a+=1;this.totalDays=a}if("month"==this.view&&(1==this.currentMonth||3==this.currentMonth||5==this.currentMonth||7==this.currentMonth||8==this.currentMonth||10==this.currentMonth||12==this.currentMonth?(this.totalDays=31,this.totalDays=this.totalDays-this.startDay+1):4==this.currentMonth||6==this.currentMonth||9==this.currentMonth||11==this.currentMonth?(this.totalDays=30,this.totalDays=this.totalDays-this.startDay+1):(this.totalDays=29,this.totalDays=this.totalDays-this.startDay)),this.newDate=new Date(this.currentYear+"/"+this.currentMonth+"/"+this.currentDate),"month"==this.view){for(;1!=this.currentDate;)t-=1,1==this.currentMonth&&1==this.currentDate?(this.currentYear=this.currentYear-1,this.currentMonth=12,this.currentDate=31,this.newDate=new Date(this.currentYear+"/"+this.currentMonth+"/"+this.currentDate)):(this.currentDate=this.currentDate-1,this.newDate=new Date(this.currentYear+"/"+this.currentMonth+"/"+this.currentDate),this.newDate.getDate()!=this.currentDate&&(0!=this.currentDate||2!=this.currentMonth&&4!=this.currentMonth&&6!=this.currentMonth&&8!=this.currentMonth&&9!=this.currentMonth&&11!=this.currentMonth&&1!=this.currentMonth||(this.newDate=new Date(this.currentYear+"/"+(this.currentMonth-1)+"/31"),this.currentDate=31),0!=this.currentDate||5!=this.currentMonth&&7!=this.currentMonth&&10!=this.currentMonth&&12!=this.currentMonth||(this.newDate=new Date(this.currentYear+"/"+(this.currentMonth-1)+"/30"),this.currentDate=30),0==this.currentDate&&3==this.currentMonth&&(this.newDate=new Date(this.currentYear+"/2/29"),this.currentDate=29,2==this.newDate.getMonth()&&(this.newDate=new Date(this.currentYear+"/2/28"),this.currentDate=28)),this.currentMonth=this.currentMonth-1)),0!=this.currentDayofWeek&&0!=i||(this.currentDayofWeek=7,i=-1),this.currentDayofWeek=this.currentDayofWeek-1;7==this.currentDayofWeek&&(this.currentDayofWeek=0)}for(;0!=this.currentDayofWeek;)t-=1,1==this.currentMonth&&1==this.currentDate?(this.currentYear=this.currentYear-1,this.currentMonth=12,this.currentDate=31,this.newDate=new Date(this.currentYear+"/"+this.currentMonth+"/"+this.currentDate)):(this.currentDate=this.currentDate-1,this.newDate=new Date(this.currentYear+"/"+this.currentMonth+"/"+this.currentDate),this.newDate.getDate()!=this.currentDate&&(0!=this.currentDate||2!=this.currentMonth&&4!=this.currentMonth&&6!=this.currentMonth&&8!=this.currentMonth&&9!=this.currentMonth&&11!=this.currentMonth&&1!=this.currentMonth||(this.newDate=new Date(this.currentYear+"/"+(this.currentMonth-1)+"/31"),this.currentDate=31),0!=this.currentDate||5!=this.currentMonth&&7!=this.currentMonth&&10!=this.currentMonth&&12!=this.currentMonth||(this.newDate=new Date(this.currentYear+"/"+(this.currentMonth-1)+"/30"),this.currentDate=30),0==this.currentDate&&3==this.currentMonth&&(this.newDate=new Date(this.currentYear+"/2/29"),this.currentDate=29,2==this.newDate.getMonth()&&(this.newDate=new Date(this.currentYear+"/2/28"),this.currentDate=28)),this.currentMonth=this.currentMonth-1)),this.currentDayofWeek=this.currentDayofWeek-1;(c=document.createElement("lrn-calendar-date")).date=this.newDate,c.firstWeek=!0,c.style.width="14.25%",c.style.display="inline-block",c.setAttribute("id","date"),c.view=this.view,this.date.getFullYear()===this.newDate.getFullYear()&&this.date.getMonth()===this.newDate.getMonth()&&this.date.getDate()===this.newDate.getDate()&&(c.loadeddate=!0);var s=this.eventCheck(this.listOfEvents,this.newDate),o=this.createReturn(s);c.events=o,c.valid=!0,r.dom(this.calendarView).appendChild(c);for(var h=1;t<this.totalDays;){var c;12==this.currentMonth&&31==this.currentDate?(this.currentYear=this.currentYear+1,this.currentMonth=1,this.currentDate=1,this.newDay=new Date(this.currentYear+"/"+this.currentMonth+"/"+this.currentDate)):(this.currentDate=this.currentDate+1,this.newDay=new Date(this.currentYear+"/"+this.currentMonth+"/"+this.currentDate),this.newDay.getDate()!=this.currentDate&&(1!=this.currentMonth&&3!=this.currentMonth&&5!=this.currentMonth&&7!=this.currentMonth&&8!=this.currentMonth&&10!=this.currentMonth&&12!=this.currentMonth||(this.newDay=new Date(this.currentYear+"/"+(this.currentMonth+1)+"/1")),this.currentDate=1,this.currentMonth=this.currentMonth+1)),(c=document.createElement("lrn-calendar-date")).valid=!0,c.setAttribute("id","date"),c.date=this.newDay,c.style.width="14.25%",c.style.display="inline-block",c.view=this.view,this.date.getFullYear()===this.newDay.getFullYear()&&this.date.getMonth()===this.newDay.getMonth()&&this.date.getDate()===this.newDay.getDate()&&(c.loadeddate=!0);var u=this.eventCheck(this.listOfEvents,this.newDay),l=this.createReturn(u);c.events=l,h<7&&(c.firstWeek=!0),h+=1,c.valid=!0,r.dom(this.calendarView).appendChild(c),(t+=1)==this.totalDays&&6!=this.newDay.getDay()&&(t-=1)}}},{key:"getEvents",value:function(t,e){if("Not Found"==e)return"";var n=e,r=ICAL.parse(n),i=new ICAL.Component(r),a=(i.getFirstSubcomponent("vevent"),i.getAllSubcomponents("vevent").map(function(t){return event=new ICAL.Event(t),event}));this.eventArray=[];for(var s=0;s<a.length;s++){this.createDate(a[s]);a[s].isRecurring()&&this.createRecurrence(a[s]),this.eventArray.push(a[s])}return this.eventArray}},{key:"createRecurrence",value:function(t){t.getRecurrenceTypes().WEEKLY?this.createRepeatedEvent(t,156):t.getRecurrenceTypes().DAILY?this.createRepeatedEvent(t,720):t.getRecurrenceTypes().MONTHLY?this.createRepeatedEvent(t,36):t.getRecurrenceTypes().YEARLY&&this.createRepeatedEvent(t,10)}},{key:"createRepeatedEvent",value:function(t,e){for(var n,r=t.iterator(t.startDate),i=0;(n=r.next())&&i++<e;){var a=new ICAL.Event;a.summary=t.summary,a.description=t.description,a.startDate=t.getOccurrenceDetails(n).startDate,a.endDate=t.getOccurrenceDetails(n).endDate;var s=String(t.location);a.location=s,a.startDate._time.day==t.startDate._time.day&&a.startDate._time.month==t.startDate._time.month&&a.startDate._time.year==t.startDate._time.year||this.eventArray.push(a)}}},{key:"createDate",value:function(t){var e=t.startDate._time.year,n=t.startDate._time.month,r=t.startDate._time.day;return new Date(e+"/"+n+"/"+r)}},{key:"eventCheck",value:function(t,e){for(var n=[],r=t.length,i=this.startIndex;i<r;i++){var a=this.createDate(t[i]);a.getTime()>e.getTime()&&(r=i,0!=i&&(this.startIndex=i-1)),a.getTime()==e.getTime()&&n.push(t[i])}return n}},{key:"sortByTime",value:function(t){var e;do{e=!1;for(var n=0;n<t.length-1;n++)if(t[n].startDate>t[n+1].startDate){var r=t[n];t[n]=t[n+1],t[n+1]=r,e=!0}}while(e);return t}},{key:"getDateInfo",value:function(){this.startMonth=this.date.getMonth()+1,this.startYear=this.date.getFullYear(),this.startDay=this.date.getDate(),this.startDayOfWeek=this.date.getDay(),this.currentDate=this.startDay,this.currentMonth=this.startMonth,this.currentYear=this.startYear,this.currentDayofWeek=this.startDayOfWeek}},{key:"createReturn",value:function(t){for(var e=[],n=0;n<t.length;n++)e.push({event:t[n]});return e}},{key:"getDisplayDate",value:function(t){if("function"==typeof t.getMonth){var e=t.getMonth();t.getDate();return["January","February","March","April","May","June","July","August","September","October","November","December"][e]+" "+t.getFullYear()}return""}}],[{key:"haxProperties",get:function(){return{canScale:!1,canPosition:!1,canEditSource:!1,gizmo:{title:"Calendar",description:"Present dates.",icon:"icons:today",color:"grey",groups:["Date"],handles:[{type:"ical",source:"file",date:"date"}],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"file",title:"iCal feed",description:"Calendar feed to display",inputMethod:"textfield",icon:"link",required:!0}],configure:[{property:"file",title:"iCal feed",description:"Calendar feed to display",inputMethod:"textfield",icon:"link",required:!0,validationType:"url"},{property:"view",title:"View calendar in week or month format",description:"week or month view",inputMethod:"select",options:{week:"Week",month:"Month"}},{property:"dateString",title:"Date: yyyy/mm/dd",description:"Date to display calendar",inputMethod:"datepicker"}],advanced:[]}}}}]),o}();window.customElements.define(y.tag,y),t.LrnCalendar=y,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=lrn-calendar.umd.js.map
