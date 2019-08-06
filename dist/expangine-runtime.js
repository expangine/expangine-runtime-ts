!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("expangine-runtime",[],n):"object"==typeof exports?exports["expangine-runtime"]=n():t["expangine-runtime"]=n()}(this,function(){return function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(n){return t[n]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";function o(t){return"number"==typeof t&&isFinite(t)}function r(t){return"string"==typeof t}function i(t){return Array.isArray(t)}function u(t){return"boolean"==typeof t}function c(t){return"function"==typeof t}function p(t){return"object"==typeof t&&!Array.isArray(t)}function s(t){return void 0===t}function f(t){if(i(t))return 0===t.length;if(p(t)){for(var n in t)return!1;return!0}return null==t}function a(t,n,e){void 0===e&&(e=function(t){return t});var o={};for(var r in t){var i=t[r];o[e(r,i)]=n(i,r)}return o}e.r(n);var y,d=function(){function t(t){this.options=t}return t.prototype.getOperations=function(t){var n=this;return this.operations||(this.operations=a(t.operations.map,function(t){return t(n)})),this.operations},t}(),l=function(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var o,r,i=e.call(t),u=[];try{for(;(void 0===n||n-- >0)&&!(o=i.next()).done;)u.push(o.value)}catch(t){r={error:t}}finally{try{o&&!o.done&&(e=i.return)&&e.call(i)}finally{if(r)throw r.error}}return u},h=function(){function t(t){this.prefix=t,this.map=Object.create(null)}return t.prototype.get=function(t,n){return(this.map[t]||this.map[this.prefix+t])(n)},t.prototype.set=function(t,n,e,o,r){var i=this.prefix+t,u={id:i,returnType:n,params:e,optional:o,scope:r};return this.put(i,function(){return u})},t.prototype.build=function(t,n){var e=this.prefix+t;return this.put(e,function(t){var o=l(n(t),4),r=o[0],i=o[1],u=o[2],c=o[3];return{id:e,returnType:r,params:i,optional:u,scope:c}})},t.prototype.put=function(t,n){var e=n;return e.id=t,this.map[t]=e,e},t}(),_=function(t){this.id=t},v=(y=function(t,n){return(y=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)},function(t,n){function e(){this.constructor=t}y(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),b=function(t){function n(e){var o=t.call(this,n.id)||this;return o.value=e,o}return v(n,t),n.decode=function(t,e){return new n(t[1])},n.encode=function(t){return i(t.value)?[this.id,t.value]:t.value},n.prototype.getScope=function(){return null},n.prototype.encode=function(){return n.encode(this)},n.id="constant",n}(_),O=function(){function t(t){var n=this;this.types=Object.create(null),this.expressions=Object.create(null),this.parsers=Object.create(null),this.operations=new h(""),t&&(t.types&&t.types.forEach(function(t){return n.addType(t)}),t.expressions&&t.expressions.forEach(function(t){return n.addExpression(t)}),t.aliases&&a(t.aliases,function(t,e){return n.addAlias(e,t)}))}return t.prototype.addType=function(t){this.types[t.id]=t,this.parsers[t.id]=function(n,e){return t.decode(n,e)}},t.prototype.addAlias=function(t,n){var e=n instanceof d?n:this.getType(n);this.parsers[t]=function(){return e}},t.prototype.getType=function(t){var n=i(t)?t[0]:t,e=i(t)?t:[];return this.parsers[n](e,this)},t.prototype.addExpression=function(t){this.expressions[t.id]=t},t.prototype.getExpression=function(t){if(i(t)){var n=this.expressions[t[0]];if(!n)throw new Error("An expression was not found for: "+JSON.stringify(t));return n.decode(t,this)}return new b(t)},t}(),m=function(){function t(t){this.defs=t,this.ops=Object.create(null),this.exprs=Object.create(null)}return t.prototype.setOperation=function(t,n){this.ops[t.id]=n},t.prototype.setExpression=function(t,n){this.exprs[t.id]=n},t.prototype.getOperation=function(t){return this.ops[t]},t.prototype.getExpression=function(t){return this.exprs[t]},t.prototype.getCommand=function(t){return this.exprs[t.id](t,this)},t.prototype.eval=function(t){return i(t)?this.getCommand(this.defs.getExpression(t)):function(){return t}},t}(),w=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),x=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return w(n,t),n.decode=function(t,n){return this.baseType},n.encode=function(t){return this.id},n.prototype.getSubTypes=function(){return null},n.prototype.getExactType=function(t){return this},n.prototype.isCompatible=function(t){return!0},n.prototype.isValid=function(t){return!0},n.prototype.normalize=function(t){return t},n.prototype.encode=function(){return n.encode(this)},n.id="any",n.operations=new h("any:"),n.baseType=new n({}),n}(d),g=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),T=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return g(n,t),n.decode=function(t){return new n(t[1]||{})},n.encode=function(t){return f(t.options)?this.id:[this.id,t.options]},n.prototype.getSubTypes=function(){return null},n.prototype.getExactType=function(t){return this},n.prototype.isCompatible=function(t){return t instanceof n},n.prototype.isValid=function(t){return o(t)},n.prototype.normalize=function(t){return t},n.prototype.encode=function(){return n.encode(this)},n.id="num",n.operations=new h("num:"),n.baseType=new n({}),n}(d),j=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),E=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return j(n,t),n.decode=function(t,e){return new n(t[1]||{})},n.encode=function(t){return f(t.options)?this.id:[this.id,t.options]},n.prototype.getSubTypes=function(){return null},n.prototype.getExactType=function(t){return this},n.prototype.isCompatible=function(t){return t instanceof n||t instanceof T},n.prototype.isValid=function(t){if(u(t))return!0;var n=t+"";return!(!this.options.true||!this.options.true[n])||!(!this.options.false||!this.options.false[n])},n.prototype.normalize=function(t){if(!u(t)){var n=t+"";if(this.options.true&&this.options.true[n])return!0;if(this.options.false&&this.options.false[n])return!1}return t},n.prototype.encode=function(){return n.encode(this)},n.id="bool",n.operations=new h("bool:"),n.baseType=new n({}),n}(d),P=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),A=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return P(n,t),n.decode=function(t,e){return new n({props:a(t[1],function(t){return e.getType(t)})})},n.encode=function(t){var n=a(t.options.props,function(t){return t.encode()});return[this.id,n]},n.prototype.getSubTypes=function(){return this.options.props},n.prototype.getExactType=function(t){return this},n.prototype.isCompatible=function(t){if(!(t instanceof n))return!1;var e=this.options.props;for(var o in e)if(!t.options.props[o])return!1;return!0},n.prototype.isValid=function(t){if(!p(t))return!1;var n=this.options.props;for(var e in n)if(!n[e].isValid(t[e]))return!1;return!0},n.prototype.normalize=function(t){return t},n.prototype.encode=function(){return n.encode(this)},n.id="obj",n.operations=new h("obj:"),n.baseType=new n({props:{}}),n}(d),S=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),C=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return S(n,t),n.decode=function(t,e){return new n({returnType:e.getType(t[1]),params:e.getType([A.id,t[2]])})},n.encode=function(t){var n=t.options;return n.true||n.false||(n=void 0),n?[this.id,n]:this.id},n.prototype.getSubTypes=function(){var t=this.options;return{returnType:t.returnType,params:t.params}},n.prototype.getExactType=function(t){return this},n.prototype.isCompatible=function(t){return t instanceof n},n.prototype.isValid=function(t){return c(t)},n.prototype.normalize=function(t){return t},n.prototype.encode=function(){return n.encode(this)},n.id="func",n.operations=new h("func:"),n.baseType=new n({returnType:x.baseType,params:A.baseType}),n}(d),I=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),M=function(){return(M=Object.assign||function(t){for(var n,e=1,o=arguments.length;e<o;e++)for(var r in n=arguments[e])Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t}).apply(this,arguments)},V=function(t){var n="function"==typeof Symbol&&t[Symbol.iterator],e=0;return n?n.call(t):{next:function(){return t&&e>=t.length&&(t=void 0),{value:t&&t[e++],done:!t}}}},z=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return I(n,t),n.decode=function(t,e){var o=e.getType(t[1]),r=t[2]||{};return new n(M({item:o},r))},n.encode=function(t){var n=M({},t.options),e=n.item;return delete n.item,f(n)?[this.id,e.encode()]:[this.id,e.encode(),n]},n.forItem=function(t){return new n({item:t})},n.prototype.getSubTypes=function(){return{length:n.lengthType,item:this.options.item}},n.prototype.getExactType=function(t){return this},n.prototype.isCompatible=function(t){return t instanceof n&&this.options.item.isCompatible(t.options.item)},n.prototype.isValid=function(t){var n,e;if(!Array.isArray(t))return!1;var r=this.options,i=r.item,u=r.min,c=r.max;if(o(u)&&t.length<u)return!1;if(o(c)&&t.length>c)return!1;try{for(var p=V(t),s=p.next();!s.done;s=p.next()){var f=s.value;if(!i.isValid(f))return!1}}catch(t){n={error:t}}finally{try{s&&!s.done&&(e=p.return)&&e.call(p)}finally{if(n)throw n.error}}return!0},n.prototype.normalize=function(t){return t},n.prototype.encode=function(){return n.encode(this)},n.lengthType=new T({min:0,whole:!0}),n.id="list",n.operations=new h("list:"),n.baseType=new n({item:x.baseType}),n}(d),N=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),R=function(t){var n="function"==typeof Symbol&&t[Symbol.iterator],e=0;return n?n.call(t):{next:function(){return t&&e>=t.length&&(t=void 0),{value:t&&t[e++],done:!t}}}},X=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return N(n,t),n.decode=function(t,e){return new n(t[1].map(function(t){return e.getType(t)}))},n.encode=function(t){var n=t.options.map(function(t){return t.encode()});return[this.id,n]},n.prototype.getSubTypes=function(){return null},n.prototype.forMany=function(t,n){var e,o,r=this.options;try{for(var i=R(r),u=i.next();!u.done;u=i.next()){var c=n(u.value);if(void 0!==c)return c}}catch(t){e={error:t}}finally{try{u&&!u.done&&(o=i.return)&&o.call(i)}finally{if(e)throw e.error}}return t},n.prototype.getExactType=function(t){return this.forMany(this,function(n){return n.isValid(t)?n:void 0})},n.prototype.isCompatible=function(t){return this.forMany(!1,function(n){return!!n.isCompatible(t)||void 0})},n.prototype.isValid=function(t){return this.forMany(!1,function(n){return!!n.isValid(t)||void 0})},n.prototype.normalize=function(t){return this.forMany(t,function(n){return n.isValid(t)?n.normalize(t):void 0})},n.prototype.encode=function(){return n.encode(this)},n.id="many",n.operations=new h("many:"),n.baseType=new n([x.baseType]),n}(d),L=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),U=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return L(n,t),n.decode=function(t,e){return new n(e.getType(t[1]))},n.encode=function(t){return[this.id,t.options.encode()]},n.prototype.getSubTypes=function(){return this.options.getSubTypes()},n.prototype.getExactType=function(t){return this.options.getExactType(t)},n.prototype.isCompatible=function(t){return t instanceof n?this.options.isCompatible(t.options):this.options.isCompatible(t)},n.prototype.isValid=function(t){return null==t||this.options.isCompatible(t)},n.prototype.normalize=function(t){return null==t?t:this.options.normalize(t)},n.prototype.encode=function(){return n.encode(this)},n.id="?",n.operations=new h("?:"),n.baseType=new n(x.baseType),n}(d),F=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),q=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return F(n,t),n.decode=function(t){return new n(t[1]||{})},n.encode=function(t){return f(t.options)?this.id:[this.id,t.options]},n.prototype.getSubTypes=function(){return null},n.prototype.getExactType=function(t){return this},n.prototype.isCompatible=function(t){return t instanceof n},n.prototype.isValid=function(t){if(!r(t))return!1;var n=this.options,e=n.min,i=n.max,u=n.requireLower,c=n.requireUpper,p=n.matches;return!(o(e)&&t.length<e)&&(!(o(i)&&t.length>i)&&((!u||t===t.toLowerCase())&&((!c||t===t.toUpperCase())&&!(p&&p instanceof RegExp&&!p.test(t)))))},n.prototype.normalize=function(t){return r(t)&&(this.options.forceLower&&(t=t.toLowerCase()),this.options.forceUpper&&(t=t.toUpperCase())),t},n.prototype.encode=function(){return n.encode(this)},n.id="text",n.operations=new h("text:"),n.baseType=new n({}),n}(d),B=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),D=function(t){function n(e){var o=t.call(this,n.id)||this;return o.expressions=e,o}return B(n,t),n.decode=function(t,e){return new n(t[1].map(function(t){return e.getExpression(t)}))},n.encode=function(t){var n=t.expressions.map(function(t){return t.encode()});return[this.id,n]},n.prototype.getScope=function(){return null},n.prototype.encode=function(){return n.encode(this)},n.id="and",n}(_),J=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),W=function(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var o,r,i=e.call(t),u=[];try{for(;(void 0===n||n-- >0)&&!(o=i.next()).done;)u.push(o.value)}catch(t){r={error:t}}finally{try{o&&!o.done&&(e=i.return)&&e.call(i)}finally{if(r)throw r.error}}return u},k=function(t){function n(e,o){var r=t.call(this,n.id)||this;return r.cases=e,r.otherwise=o,r}return J(n,t),n.decode=function(t,e){return new n(t[1].map(function(t){var n=W(t,2),o=n[0],r=n[1];return[e.getExpression(o),e.getExpression(r)]}),e.getExpression(t[2]))},n.encode=function(t){var n=t.cases.map(function(t){var n=W(t,2),e=n[0],o=n[1];return[e.encode(),o.encode()]});return s(t.otherwise)?[this.id,n]:[this.id,n,t.otherwise.encode()]},n.prototype.getScope=function(){return null},n.prototype.encode=function(){return n.encode(this)},n.id="if",n}(_),G=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),H=function(t){function n(e){var o=t.call(this,n.id)||this;return o.chain=e,o}return G(n,t),n.decode=function(t,e){return new n(t[1].map(function(t){return e.getExpression(t)}))},n.encode=function(t){var n=t.chain.map(function(t){return t.encode()});return[this.id,n]},n.prototype.getScope=function(){return null},n.prototype.encode=function(){return n.encode(this)},n.id="chain",n}(_),K=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),Q=function(t){function n(e,o){var r=t.call(this,n.id)||this;return r.define=e,r.body=o,r}return K(n,t),n.decode=function(t,e){return new n(a(t[1],function(t){return e.getExpression(t)}),e.getExpression(t[2]))},n.encode=function(t){var n=a(t.define,function(t){return t.encode()});return[this.id,n,t.body.encode()]},n.prototype.getScope=function(){return a(this.define,function(){return x.baseType})},n.prototype.encode=function(){return n.encode(this)},n.id="def",n}(_),Y=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),Z=function(t){function n(e,o,r,i,u){var c=t.call(this,n.id)||this;return c.variable=e,c.start=o,c.end=r,c.body=i,c.maxIterations=u,c}return Y(n,t),n.decode=function(t,e){return new n(t[1],e.getExpression(t[2]),e.getExpression(t[3]),e.getExpression(t[4]),parseInt(t[5])||this.MAX_ITERATIONS)},n.encode=function(t){return t.maxIterations===this.MAX_ITERATIONS?[this.id,t.variable,t.start.encode(),t.end.encode(),t.body.encode()]:[this.id,t.variable,t.start.encode(),t.end.encode(),t.body.encode(),t.maxIterations]},n.prototype.getScope=function(){var t;return(t={})[this.variable]=T.baseType,t},n.prototype.encode=function(){return n.encode(this)},n.MAX_ITERATIONS=1e5,n.id="for",n}(_),$=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),tt=function(t){function n(e){var o=t.call(this,n.id)||this;return o.expression=e,o}return $(n,t),n.decode=function(t,e){return new n(e.getExpression(t[1]))},n.encode=function(t){var n=t.expression.encode();return[this.id,n]},n.prototype.getScope=function(){return null},n.prototype.encode=function(){return n.encode(this)},n.id="not",n}(_),nt=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),et=function(t){function n(e,o,r){var i=t.call(this,n.id)||this;return i.name=e,i.params=o,i.scopeAlias=r,i}return nt(n,t),n.decode=function(t,e){return new n(t[1],a(t[2],function(t){return e.getExpression(t)}),t[3]||{})},n.encode=function(t){var n=a(t.params,function(t){return t.encode()});return f(t.scopeAlias)?[this.id,t.name,n]:[this.id,t.name,n,t.scopeAlias]},n.prototype.getScope=function(){return null},n.prototype.encode=function(){return n.encode(this)},n.id="op",n}(_),ot=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),rt=function(t){function n(e){var o=t.call(this,n.id)||this;return o.expressions=e,o}return ot(n,t),n.decode=function(t,e){return new n(t[1].map(function(t){return e.getExpression(t)}))},n.encode=function(t){var n=t.expressions.map(function(t){return t.encode()});return[this.id,n]},n.prototype.getScope=function(){return null},n.prototype.encode=function(){return n.encode(this)},n.id="or",n}(_),it=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),ut=function(t){function n(e){var o=t.call(this,n.id)||this;return o.path=e,o}return it(n,t),n.decode=function(t,e){return new n(t[1].map(function(t){return e.getExpression(t)}))},n.encode=function(t){var n=t.path.map(function(t){return t.encode()});return[this.id,n]},n.prototype.getScope=function(){return null},n.prototype.encode=function(){return n.encode(this)},n.id="var",n}(_),ct=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),pt=function(t){function n(e,o,r){var i=t.call(this,n.id)||this;return i.condition=e,i.body=o,i.maxIterations=r,i}return ct(n,t),n.decode=function(t,e){return new n(e.getExpression(t[1]),e.getExpression(t[2]),parseInt(t[3])||this.MAX_ITERATIONS)},n.encode=function(t){return t.maxIterations===this.MAX_ITERATIONS?[this.id,t.condition.encode(),t.body.encode()]:[this.id,t.condition.encode(),t.body.encode(),t.maxIterations]},n.prototype.getScope=function(){return null},n.prototype.encode=function(){return n.encode(this)},n.MAX_ITERATIONS=1e5,n.id="while",n}(_),st=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),ft=function(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var o,r,i=e.call(t),u=[];try{for(;(void 0===n||n-- >0)&&!(o=i.next()).done;)u.push(o.value)}catch(t){r={error:t}}finally{try{o&&!o.done&&(e=i.return)&&e.call(i)}finally{if(r)throw r.error}}return u},at=function(t){function n(e,o,r,i){var u=t.call(this,n.id)||this;return u.value=e,u.op=o,u.cases=r,u.defaultCase=i,u}return st(n,t),n.decode=function(t,e){return new n(e.getExpression(t[1]),t[2],t[3].map(function(t){var n=ft(t,2),o=n[0],r=n[1];return[o.map(function(t){return e.getExpression(t)}),e.getExpression(r)]}),e.getExpression(t[4]))},n.encode=function(t){var n=t.value.encode(),e=t.cases.map(function(t){var n=ft(t,2),e=n[0],o=n[1];return[e.map(function(t){return t.encode()}),o.encode()]});return s(t.defaultCase)?[this.id,n,t.op,e]:[this.id,n,t.op,e,t.defaultCase.encode()]},n.prototype.getScope=function(){return null},n.prototype.encode=function(){return n.encode(this)},n.id="switch",n}(_),yt=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),dt=function(t){function n(e,o){var r=t.call(this,n.id)||this;return r.path=e,r.value=o,r}return yt(n,t),n.decode=function(t,e){return new n(t[1].map(function(t){return e.getExpression(t)}),e.getExpression(t[2]))},n.encode=function(t){var n=t.path.map(function(t){return t.encode()});return[this.id,n,t.value.encode()]},n.prototype.getScope=function(){return null},n.prototype.encode=function(){return n.encode(this)},n.id="set",n}(_),lt=new O({types:[z,T,q,E,A,C,x,X,U],expressions:[b,ut,dt,et,H,k,at,tt,D,rt,Z,pt,Q]});e.d(n,"isNumber",function(){return o}),e.d(n,"isString",function(){return r}),e.d(n,"isArray",function(){return i}),e.d(n,"isBoolean",function(){return u}),e.d(n,"isFunction",function(){return c}),e.d(n,"isObject",function(){return p}),e.d(n,"isUndefined",function(){return s}),e.d(n,"isEmpty",function(){return f}),e.d(n,"mapObject",function(){return a}),e.d(n,"Definitions",function(){return O}),e.d(n,"Expression",function(){return _}),e.d(n,"Operations",function(){return h}),e.d(n,"Runtime",function(){return m}),e.d(n,"Type",function(){return d}),e.d(n,"AnyType",function(){return x}),e.d(n,"BooleanType",function(){return E}),e.d(n,"FunctionType",function(){return C}),e.d(n,"ListType",function(){return z}),e.d(n,"ManyType",function(){return X}),e.d(n,"NumberType",function(){return T}),e.d(n,"ObjectType",function(){return A}),e.d(n,"OptionalType",function(){return U}),e.d(n,"TextType",function(){return q}),e.d(n,"AndExpression",function(){return D}),e.d(n,"IfExpression",function(){return k}),e.d(n,"ChainExpression",function(){return H}),e.d(n,"ConstantExpression",function(){return b}),e.d(n,"DefineExpression",function(){return Q}),e.d(n,"ForExpression",function(){return Z}),e.d(n,"NotExpression",function(){return tt}),e.d(n,"OperationExpression",function(){return et}),e.d(n,"OrExpression",function(){return rt}),e.d(n,"VariableExpression",function(){return ut}),e.d(n,"WhileExpression",function(){return pt}),e.d(n,"defs",function(){return lt})}])});
//# sourceMappingURL=expangine-runtime.js.map