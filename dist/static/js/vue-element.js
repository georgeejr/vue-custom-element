!function(t){function e(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var o={};return e.m=t,e.c=o,e.p="/",e(0)}([function(t,e,o){t.exports=o(5)},function(t,e){"use strict";function o(t){var e=t,o=["true","false"].indexOf(t)>-1,n=parseFloat(e,10),r=!isNaN(n)&&isFinite(e);return o?e="true"===e:r&&(e=n),e}function n(t,e){var o={camelCase:[],hyphenate:[]};if(t.props&&t.props.length)t.props.forEach(function(t){o.camelCase.push(e.util.camelize(t))});else if(t.props&&"object"===a(t.props))for(var n in t.props)o.camelCase.push(e.util.camelize(n));return o.camelCase.forEach(function(t){o.hyphenate.push(e.util.hyphenate(t))}),o}function r(t,e){e.camelCase.forEach(function(n,r){Object.defineProperty(t,n,{get:function(){return this.__vue__[n]},set:function(t){this.setAttribute(e.hyphenate[r],o(t))}})})}function c(t,e,n){var r=e.propsData||{};return n.hyphenate.forEach(function(e,c){var a=t.attributes[e]&&t.attributes[e].nodeValue;void 0!==a&&""!==a&&(r[n.camelCase[c]]=o(a))}),r}Object.defineProperty(e,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.convertAttributeValue=o,e.getProps=n,e.reactiveProps=r,e.getPropsData=c},function(t,e,o){"use strict";function n(t,e,o,n,c){t.__vue__||!function(){var a=e.util.extend({},o),i=t.innerHTML,u=(0,r.getPropsData)(t,a,n),l={propsData:u,props:n.camelCase,computed:{reactiveProps:function(){var t=this,e={};return n.camelCase.forEach(function(o){e[o]=t[o]}),e}},render:function(t){var e={props:this.reactiveProps};return t(a,e,[t("div",{domProps:{innerHTML:i}})])}};c.shadow&&t.shadowRoot?(t.shadowRoot.innerHTML="<div></div>",l.el=t.shadowRoot.children[0]):(t.innerHTML="<div></div>",l.el=t.children[0]),(0,r.reactiveProps)(t,n),t.__vue__=new e(l)}()}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;var r=o(1)},function(module,exports){"use strict";function isES2015(){if("undefined"==typeof Symbol)return!1;try{eval("class Foo {}")}catch(t){return!1}return!0}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=isES2015()},function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function i(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}function u(t){function e(){s.shadow===!0&&HTMLElement.prototype.attachShadow&&this.attachShadow({mode:"open"}),"function"==typeof s.constructorCallback&&s.constructorCallback.call(this)}function o(){"function"==typeof s.connectedCallback&&s.connectedCallback.call(this)}function n(){"function"==typeof s.disconnectedCallback&&s.disconnectedCallback.call(this)}function u(t,e,o){"function"==typeof s.attributeChangedCallback&&s.attributeChangedCallback.call(this,t,e,o)}var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("undefined"!=typeof customElements)if(f.default){var p=function(t){function o(t){var n;r(this,o);var a=c(this,(o.__proto__||Object.getPrototypeOf(o)).call(this)),i=t?HTMLElement.call(t):a;return e.call(i),n=i,c(a,n)}return a(o,t),l(o,null,[{key:"observedAttributes",get:function(){return s.observedAttributes||[]}}]),o}(i);p.prototype.connectedCallback=o,p.prototype.disconnectedCallback=n,p.prototype.attributeChangedCallback=u,customElements.define(t,p)}else{var d=function(t){var o=t?HTMLElement.call(t):this;return e.call(o),o};d.observedAttributes=s.observedAttributes||[],d.prototype=Object.create(HTMLElement.prototype,{constructor:{configurable:!0,writable:!0,value:d}}),d.prototype.connectedCallback=o,d.prototype.disconnectedCallback=n,d.prototype.attributeChangedCallback=u,customElements.define(t,d)}}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}();e.default=u,o(6);var s=o(3),f=n(s);Object.setPrototypeOf(i.prototype,HTMLElement.prototype),Object.setPrototypeOf(i,HTMLElement)},function(t,e,o){function n(t){return t&&t.__esModule?t:{default:t}}function r(t){t.element=function(e,o){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=(0,p.getProps)(o,t);(0,l.default)(e,{constructorCallback:function(){"function"==typeof n.constructorCallback&&n.constructorCallback.call(this)},connectedCallback:function(){"function"==typeof n.connectedCallback&&n.connectedCallback.call(this),this.__detached__||(0,f.default)(this,t,o,r,n),this.__detached__=!1},disconnectedCallback:function(){this.__detached__=!0,"function"==typeof n.disconnectedCallback&&n.disconnectedCallback.call(this),setTimeout(function(){this.__detached__&&this.__vue__&&this.__vue__.$destroy(!0)},3e3)},attributeChangedCallback:function(e,o,r){if(this.__vue__&&"undefined"!=typeof r){var c=t.util.camelize(e);"function"==typeof n.attributeChangedCallback&&n.attributeChangedCallback.call(this,e,o,r),this.__vue__[c]=(0,p.convertAttributeValue)(r)}},observedAttributes:r.hyphenate,shadow:!!n.shadow&&!!HTMLElement.prototype.attachShadow})}}var c,a,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=o(4),l=n(u),s=o(2),f=n(s),p=o(1);"object"==i(e)?t.exports=r:(c=[],a=function(){return r}.apply(e,c),!(void 0!==a&&(t.exports=a)))},function(t,e){function o(t,e){return t.__proto__=e,t}Object.setPrototypeOf=Object.setPrototypeOf||o,t.exports=o.bind(Object)}]);
//# sourceMappingURL=vue-element.js.map