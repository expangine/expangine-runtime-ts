!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("expangine-runtime",[],n):"object"==typeof exports?exports["expangine-runtime"]=n():t["expangine-runtime"]=n()}(this,function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";function r(t){return"number"==typeof t&&isFinite(t)}function o(t){return"string"==typeof t}function i(t){return Array.isArray(t)}function u(t){return t instanceof Date}function c(t){return"boolean"==typeof t}function p(t){return"function"==typeof t}function s(t){return"object"==typeof t&&!Array.isArray(t)}function f(t){return void 0===t}function a(t){if(i(t))return 0===t.length;if(s(t)){for(var n in t)return!1;return!0}return null==t}function y(t,n,e){void 0===e&&(e=function(t){return t});var r={};for(var o in t){var i=t[o];r[e(o,i)]=n(i,o)}return r}e.r(n);var d,l=function(){function t(t){this.options=t}return t.prototype.getOperations=function(t){var n=this;return this.operations||(this.operations=y(t.operations.map,function(t){return t(n)})),this.operations},t}(),h=function(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var r,o,i=e.call(t),u=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return u},_=function(){function t(t){this.prefix=t,this.map=Object.create(null)}return t.prototype.getBuilder=function(t){return this.map[t]||this.map[this.prefix+t]},t.prototype.get=function(t,n){return this.getBuilder(t)(n)},t.prototype.set=function(t,n,e,r,o){var i=this.prefix+t,u={id:i,returnType:n,params:e,optional:r,scope:o},c=o?y(o,function(t,n){return n}):void 0;return this.put(i,c,function(){return u})},t.prototype.build=function(t,n,e,r){var o=this.prefix+t;return this.put(o,e,function(t){var e=h(n(t,r),4),i=e[0],u=e[1],c=e[2],p=e[3];return{id:o,returnType:i,params:u,optional:c,scope:p,generics:r}})},t.prototype.put=function(t,n,e){var r=e;return r.scopeDefaults=n,r.id=t,this.map[t]=r,r},t}(),b=function(t){this.id=t},v=(d=function(t,n){return(d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)},function(t,n){function e(){this.constructor=t}d(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),O=function(t){function n(e){var r=t.call(this,n.id)||this;return r.value=e,r}return v(n,t),n.decode=function(t,e){return new n(t[1])},n.encode=function(t){return i(t.value)?[this.id,t.value]:t.value},n.prototype.getScope=function(){return null},n.prototype.encode=function(){return n.encode(this)},n.id="constant",n}(b),m=function(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var r,o,i=e.call(t),u=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return u},g=function(){function t(t){var n=this;this.types=Object.create(null),this.expressions=Object.create(null),this.parsers=Object.create(null),this.operations=new _(""),t&&(t.types&&t.types.forEach(function(t){return n.addType(t)}),t.expressions&&t.expressions.forEach(function(t){return n.addExpression(t)}),t.aliases&&y(t.aliases,function(t,e){return n.addAlias(e,t)}))}return t.prototype.addType=function(t){this.types[t.id]=t,this.parsers[t.id]=function(n,e){return t.decode(n,e)}},t.prototype.addAlias=function(t,n){var e=n instanceof l?n:this.getType(n);this.parsers[t]=function(){return e}},t.prototype.getType=function(t){var n=i(t)?t[0]:t,e=i(t)?t:[];return this.parsers[n](e,this)},t.prototype.getOperationBuilder=function(t){var n=this.operations.getBuilder(t);if(n)return n;var e=m(t.split(":"),1)[0],r=this.types[e];return r?r.operations.getBuilder(t):null},t.prototype.addExpression=function(t){this.expressions[t.id]=t},t.prototype.getExpression=function(t){if(i(t)){var n=this.expressions[t[0]];if(!n)throw new Error("An expression was not found for: "+JSON.stringify(t));return n.decode(t,this)}return new O(t)},t}(),w=function(){function t(t){this.defs=t,this.ops=Object.create(null),this.exprs=Object.create(null)}return t.prototype.setOperation=function(t,n){this.ops[t.id]=n},t.prototype.setExpression=function(t,n){this.exprs[t.id]=n},t.prototype.getOperation=function(t){return this.ops[t]},t.prototype.getOperationScopeDefaults=function(t){var n=this.defs.getOperationBuilder(t);return n?n.scopeDefaults:{}},t.prototype.getExpression=function(t){return this.exprs[t]},t.prototype.getCommand=function(t){return this.exprs[t.id](t,this)},t.prototype.eval=function(t){return i(t)?this.getCommand(this.defs.getExpression(t)):function(){return t}},t}(),x=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),T=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return x(n,t),n.decode=function(t,n){return this.baseType},n.encode=function(t){return this.id},n.prototype.getSubTypes=function(){return null},n.prototype.getExactType=function(t){return this},n.prototype.isCompatible=function(t){return!0},n.prototype.isValid=function(t){return!0},n.prototype.normalize=function(t){return t},n.prototype.encode=function(){return n.encode(this)},n.id="any",n.operations=new _("any:"),n.baseType=new n({}),n}(l),j=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),E=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return j(n,t),n.decode=function(t){return new n(t[1]||{})},n.encode=function(t){return a(t.options)?this.id:[this.id,t.options]},n.prototype.getSubTypes=function(){return null},n.prototype.getExactType=function(t){return this},n.prototype.isCompatible=function(t){return t instanceof n},n.prototype.isValid=function(t){return r(t)},n.prototype.normalize=function(t){return t},n.prototype.encode=function(){return n.encode(this)},n.id="num",n.operations=new _("num:"),n.baseType=new n({}),n}(l),A=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),S=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return A(n,t),n.decode=function(t,e){return new n(t[1]||{})},n.encode=function(t){return a(t.options)?this.id:[this.id,t.options]},n.prototype.getSubTypes=function(){return null},n.prototype.getExactType=function(t){return this},n.prototype.isCompatible=function(t){return t instanceof n||t instanceof E},n.prototype.isValid=function(t){if(c(t))return!0;var n=t+"";return!(!this.options.true||!this.options.true[n])||!(!this.options.false||!this.options.false[n])},n.prototype.normalize=function(t){if(!c(t)){var n=t+"";if(this.options.true&&this.options.true[n])return!0;if(this.options.false&&this.options.false[n])return!1}return t},n.prototype.encode=function(){return n.encode(this)},n.id="bool",n.operations=new _("bool:"),n.baseType=new n({}),n}(l),P=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),I=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return P(n,t),n.decode=function(t,e){return new n({props:y(t[1],function(t){return e.getType(t)})})},n.encode=function(t){var n=y(t.options.props,function(t){return t.encode()});return[this.id,n]},n.prototype.getSubTypes=function(){return this.options.props},n.prototype.getExactType=function(t){return this},n.prototype.isCompatible=function(t){if(!(t instanceof n))return!1;var e=this.options.props;for(var r in e)if(!t.options.props[r])return!1;return!0},n.prototype.isValid=function(t){if(!s(t))return!1;var n=this.options.props;for(var e in n)if(!n[e].isValid(t[e]))return!1;return!0},n.prototype.normalize=function(t){return t},n.prototype.encode=function(){return n.encode(this)},n.id="obj",n.operations=new _("obj:"),n.baseType=new n({props:{}}),n}(l),V=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),C=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return V(n,t),n.decode=function(t,e){return new n({returnType:e.getType(t[1]),params:e.getType([I.id,t[2]])})},n.encode=function(t){var n=t.options;return n.true||n.false||(n=void 0),n?[this.id,n]:this.id},n.prototype.getSubTypes=function(){var t=this.options;return{returnType:t.returnType,params:t.params}},n.prototype.getExactType=function(t){return this},n.prototype.isCompatible=function(t){return t instanceof n},n.prototype.isValid=function(t){return p(t)},n.prototype.normalize=function(t){return t},n.prototype.encode=function(){return n.encode(this)},n.id="func",n.operations=new _("func:"),n.baseType=new n({returnType:T.baseType,params:I.baseType}),n}(l),M=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),k=function(){return(k=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)},N=function(t){var n="function"==typeof Symbol&&t[Symbol.iterator],e=0;return n?n.call(t):{next:function(){return t&&e>=t.length&&(t=void 0),{value:t&&t[e++],done:!t}}}},z=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return M(n,t),n.decode=function(t,e){var r=e.getType(t[1]),o=t[2]||{};return new n(k({item:r},o))},n.encode=function(t){var n=k({},t.options),e=n.item;return delete n.item,a(n)?[this.id,e.encode()]:[this.id,e.encode(),n]},n.forItem=function(t){return new n({item:t instanceof l?t:t.baseType})},n.prototype.getSubTypes=function(){return{length:n.lengthType,item:this.options.item}},n.prototype.getExactType=function(t){return this},n.prototype.isCompatible=function(t){return t instanceof n&&this.options.item.isCompatible(t.options.item)},n.prototype.isValid=function(t){var n,e;if(!Array.isArray(t))return!1;var o=this.options,i=o.item,u=o.min,c=o.max;if(r(u)&&t.length<u)return!1;if(r(c)&&t.length>c)return!1;try{for(var p=N(t),s=p.next();!s.done;s=p.next()){var f=s.value;if(!i.isValid(f))return!1}}catch(t){n={error:t}}finally{try{s&&!s.done&&(e=p.return)&&e.call(p)}finally{if(n)throw n.error}}return!0},n.prototype.normalize=function(t){return t},n.prototype.encode=function(){return n.encode(this)},n.lengthType=new E({min:0,whole:!0}),n.id="list",n.operations=new _("list:"),n.baseType=new n({item:T.baseType}),n}(l),R=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),X=function(t){var n="function"==typeof Symbol&&t[Symbol.iterator],e=0;return n?n.call(t):{next:function(){return t&&e>=t.length&&(t=void 0),{value:t&&t[e++],done:!t}}}},B=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return R(n,t),n.decode=function(t,e){return new n(t[1].map(function(t){return e.getType(t)}))},n.encode=function(t){var n=t.options.map(function(t){return t.encode()});return[this.id,n]},n.prototype.getOperations=function(t){var n=this;return this.operations||(this.operations={},this.options.forEach(function(t){var e=t.getOperations(t.constructor);for(var r in e)n.operations[r]=e[r]})),this.operations},n.prototype.forMany=function(t,n){var e,r,o=this.options;try{for(var i=X(o),u=i.next();!u.done;u=i.next()){var c=n(u.value);if(void 0!==c)return c}}catch(t){e={error:t}}finally{try{u&&!u.done&&(r=i.return)&&r.call(i)}finally{if(e)throw e.error}}return t},n.prototype.getSubTypes=function(){var t=this;return this.subs||(this.subs={},this.options.forEach(function(n){var e=n.getSubTypes();e&&Object.assign(t.subs,e)})),this.subs},n.prototype.getExactType=function(t){return this.forMany(this,function(n){return n.isValid(t)?n:void 0})},n.prototype.isCompatible=function(t){return this.forMany(!1,function(n){return!!n.isCompatible(t)||void 0})},n.prototype.isValid=function(t){return this.forMany(!1,function(n){return!!n.isValid(t)||void 0})},n.prototype.normalize=function(t){return this.forMany(t,function(n){return n.isValid(t)?n.normalize(t):void 0})},n.prototype.encode=function(){return n.encode(this)},n.id="many",n.operations=new _("many:"),n.baseType=new n([T.baseType]),n}(l),D=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),L=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return D(n,t),n.decode=function(t,e){return new n(e.getType(t[1]))},n.encode=function(t){return[this.id,t.options.encode()]},n.prototype.getOperations=function(t){return this.operations||(this.operations=this.options.getOperations(t)),this.operations},n.prototype.getSubTypes=function(){return this.options.getSubTypes()},n.prototype.getExactType=function(t){return this.options.getExactType(t)},n.prototype.isCompatible=function(t){return t instanceof n?this.options.isCompatible(t.options):this.options.isCompatible(t)},n.prototype.isValid=function(t){return null==t||this.options.isCompatible(t)},n.prototype.normalize=function(t){return null==t?t:this.options.normalize(t)},n.prototype.encode=function(){return n.encode(this)},n.id="?",n.operations=new _("?:"),n.baseType=new n(T.baseType),n}(l),U=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),F=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return U(n,t),n.decode=function(t){return new n(t[1]||{})},n.encode=function(t){return a(t.options)?this.id:[this.id,t.options]},n.prototype.getSubTypes=function(){return null},n.prototype.getExactType=function(t){return this},n.prototype.isCompatible=function(t){return t instanceof n},n.prototype.isValid=function(t){if(!o(t))return!1;var n=this.options,e=n.min,i=n.max,u=n.requireLower,c=n.requireUpper,p=n.matches;return!(r(e)&&t.length<e)&&(!(r(i)&&t.length>i)&&((!u||t===t.toLowerCase())&&((!c||t===t.toUpperCase())&&!(p&&p instanceof RegExp&&!p.test(t)))))},n.prototype.normalize=function(t){return o(t)&&(this.options.forceLower&&(t=t.toLowerCase()),this.options.forceUpper&&(t=t.toUpperCase())),t},n.prototype.encode=function(){return n.encode(this)},n.id="text",n.operations=new _("text:"),n.baseType=new n({}),n}(l),q=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),G=function(t){function n(e){var r=t.call(this,n.id)||this;return r.expressions=e,r}return q(n,t),n.decode=function(t,e){return new n(t[1].map(function(t){return e.getExpression(t)}))},n.encode=function(t){var n=t.expressions.map(function(t){return t.encode()});return[this.id,n]},n.prototype.getScope=function(){return null},n.prototype.encode=function(){return n.encode(this)},n.id="and",n}(b),J=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),W=function(t){function n(e){var r=t.call(this,n.id)||this;return r.chain=e,r}return J(n,t),n.decode=function(t,e){return new n(t[1].map(function(t){return e.getExpression(t)}))},n.encode=function(t){var n=t.chain.map(function(t){return t.encode()});return[this.id,n]},n.prototype.getScope=function(){return null},n.prototype.encode=function(){return n.encode(this)},n.id="chain",n}(b),H=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),K=function(t){function n(e,r){var o=t.call(this,n.id)||this;return o.define=e,o.body=r,o}return H(n,t),n.decode=function(t,e){return new n(y(t[1],function(t){return e.getExpression(t)}),e.getExpression(t[2]))},n.encode=function(t){var n=y(t.define,function(t){return t.encode()});return[this.id,n,t.body.encode()]},n.prototype.getScope=function(){return y(this.define,function(){return T.baseType})},n.prototype.encode=function(){return n.encode(this)},n.id="def",n}(b),Q=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),Y=function(t){function n(e,r,o,i,u,c){var p=t.call(this,n.id)||this;return p.variable=e,p.start=r,p.end=o,p.body=i,p.breakVariable=u,p.maxIterations=c,p}return Q(n,t),n.decode=function(t,e){return new n(t[1],e.getExpression(t[2]),e.getExpression(t[3]),e.getExpression(t[4]),t[5]||"break",parseInt(t[6])||this.MAX_ITERATIONS)},n.encode=function(t){var n=[this.id,t.variable,t.start.encode(),t.end.encode(),t.body.encode()],e=t.maxIterations!==this.MAX_ITERATIONS;return("break"!==t.breakVariable||e)&&n.push(t.breakVariable),e&&n.push(t.maxIterations),n},n.prototype.getScope=function(){var t;return(t={})[this.variable]=E.baseType,t[this.breakVariable]=S.baseType,t},n.prototype.encode=function(){return n.encode(this)},n.MAX_ITERATIONS=1e5,n.id="for",n}(b),Z=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),$=function(t){function n(e){var r=t.call(this,n.id)||this;return r.path=e,r}return Z(n,t),n.decode=function(t,e){return new n(t[1].map(function(t){return e.getExpression(t)}))},n.encode=function(t){var n=t.path.map(function(t){return t.encode()});return[this.id,n]},n.prototype.getScope=function(){return null},n.prototype.encode=function(){return n.encode(this)},n.id="get",n}(b),tt=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),nt=function(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var r,o,i=e.call(t),u=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return u},et=function(t){function n(e,r){var o=t.call(this,n.id)||this;return o.cases=e,o.otherwise=r,o}return tt(n,t),n.decode=function(t,e){return new n(t[1].map(function(t){var n=nt(t,2),r=n[0],o=n[1];return[e.getExpression(r),e.getExpression(o)]}),e.getExpression(t[2]))},n.encode=function(t){var n=t.cases.map(function(t){var n=nt(t,2),e=n[0],r=n[1];return[e.encode(),r.encode()]});return f(t.otherwise)?[this.id,n]:[this.id,n,t.otherwise.encode()]},n.prototype.getScope=function(){return null},n.prototype.encode=function(){return n.encode(this)},n.id="if",n}(b),rt=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),ot=function(t){function n(e){var r=t.call(this,n.id)||this;return r.expression=e,r}return rt(n,t),n.decode=function(t,e){return new n(e.getExpression(t[1]))},n.encode=function(t){var n=t.expression.encode();return[this.id,n]},n.prototype.getScope=function(){return null},n.prototype.encode=function(){return n.encode(this)},n.id="not",n}(b),it=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),ut=function(t){function n(e,r,o){var i=t.call(this,n.id)||this;return i.name=e,i.params=r,i.scopeAlias=o,i}return it(n,t),n.decode=function(t,e){return new n(t[1],y(t[2],function(t){return e.getExpression(t)}),t[3]||{})},n.encode=function(t){var n=y(t.params,function(t){return t.encode()});return a(t.scopeAlias)?[this.id,t.name,n]:[this.id,t.name,n,t.scopeAlias]},n.prototype.getScope=function(){return null},n.prototype.encode=function(){return n.encode(this)},n.id="op",n}(b),ct=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),pt=function(t){function n(e){var r=t.call(this,n.id)||this;return r.expressions=e,r}return ct(n,t),n.decode=function(t,e){return new n(t[1].map(function(t){return e.getExpression(t)}))},n.encode=function(t){var n=t.expressions.map(function(t){return t.encode()});return[this.id,n]},n.prototype.getScope=function(){return null},n.prototype.encode=function(){return n.encode(this)},n.id="or",n}(b),st=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),ft=function(t){function n(e,r){var o=t.call(this,n.id)||this;return o.path=e,o.value=r,o}return st(n,t),n.decode=function(t,e){return new n(t[1].map(function(t){return e.getExpression(t)}),e.getExpression(t[2]))},n.encode=function(t){var n=t.path.map(function(t){return t.encode()});return[this.id,n,t.value.encode()]},n.prototype.getScope=function(){return null},n.prototype.encode=function(){return n.encode(this)},n.id="set",n}(b),at=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),yt=function(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var r,o,i=e.call(t),u=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return u},dt=function(t){function n(e,r,o,i){var u=t.call(this,n.id)||this;return u.value=e,u.op=r,u.cases=o,u.defaultCase=i,u}return at(n,t),n.decode=function(t,e){return new n(e.getExpression(t[1]),t[2],t[3].map(function(t){var n=yt(t,2),r=n[0],o=n[1];return[r.map(function(t){return e.getExpression(t)}),e.getExpression(o)]}),e.getExpression(t[4]))},n.encode=function(t){var n=t.value.encode(),e=t.cases.map(function(t){var n=yt(t,2),e=n[0],r=n[1];return[e.map(function(t){return t.encode()}),r.encode()]});return f(t.defaultCase)?[this.id,n,t.op,e]:[this.id,n,t.op,e,t.defaultCase.encode()]},n.prototype.getScope=function(){return null},n.prototype.encode=function(){return n.encode(this)},n.id="switch",n}(b),lt=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),ht=function(t){function n(e,r){var o=t.call(this,n.id)||this;return o.template=e,o.params=r,o}return lt(n,t),n.decode=function(t,e){return new n(t[1],y(t[2],function(t){return e.getExpression(t)}))},n.encode=function(t){var n=y(t.params,function(t){return t.encode()});return[this.id,t.template,n]},n.prototype.getScope=function(){return null},n.prototype.encode=function(){return n.encode(this)},n.id="tmpl",n}(b),_t=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),bt=function(t){function n(e,r,o,i){var u=t.call(this,n.id)||this;return u.condition=e,u.body=r,u.breakVariable=o,u.maxIterations=i,u}return _t(n,t),n.decode=function(t,e){return new n(e.getExpression(t[1]),e.getExpression(t[2]),t[3]||"break",parseInt(t[4])||this.MAX_ITERATIONS)},n.encode=function(t){var n=[this.id,t.condition.encode(),t.body.encode()],e=t.maxIterations!==this.MAX_ITERATIONS;return("break"!==t.breakVariable||e)&&n.push(t.breakVariable),e&&n.push(t.maxIterations),n},n.prototype.getScope=function(){var t;return(t={})[this.breakVariable]=S.baseType,t},n.prototype.encode=function(){return n.encode(this)},n.MAX_ITERATIONS=1e5,n.id="while",n}(b),vt=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),Ot=function(t){function n(e,r,o,i){var u=t.call(this,n.id)||this;return u.condition=e,u.body=r,u.breakVariable=o,u.maxIterations=i,u}return vt(n,t),n.decode=function(t,e){return new n(e.getExpression(t[1]),e.getExpression(t[2]),t[3]||"break",parseInt(t[4])||this.MAX_ITERATIONS)},n.encode=function(t){var n=[this.id,t.condition.encode(),t.body.encode()],e=t.maxIterations!==this.MAX_ITERATIONS;return("break"!==t.breakVariable||e)&&n.push(t.breakVariable),e&&n.push(t.maxIterations),n},n.prototype.getScope=function(){var t;return(t={})[this.breakVariable]=S.baseType,t},n.prototype.encode=function(){return n.encode(this)},n.MAX_ITERATIONS=1e5,n.id="do",n}(b),mt=new g({types:[z,E,F,S,I,C,T,B,L],expressions:[O,$,ft,ut,W,et,dt,ot,G,pt,Y,bt,Ot,K,ht]});e.d(n,"isNumber",function(){return r}),e.d(n,"isString",function(){return o}),e.d(n,"isArray",function(){return i}),e.d(n,"isDate",function(){return u}),e.d(n,"isBoolean",function(){return c}),e.d(n,"isFunction",function(){return p}),e.d(n,"isObject",function(){return s}),e.d(n,"isUndefined",function(){return f}),e.d(n,"isEmpty",function(){return a}),e.d(n,"mapObject",function(){return y}),e.d(n,"Definitions",function(){return g}),e.d(n,"Expression",function(){return b}),e.d(n,"Operations",function(){return _}),e.d(n,"Runtime",function(){return w}),e.d(n,"Type",function(){return l}),e.d(n,"AnyType",function(){return T}),e.d(n,"BooleanType",function(){return S}),e.d(n,"FunctionType",function(){return C}),e.d(n,"ListType",function(){return z}),e.d(n,"ManyType",function(){return B}),e.d(n,"NumberType",function(){return E}),e.d(n,"ObjectType",function(){return I}),e.d(n,"OptionalType",function(){return L}),e.d(n,"TextType",function(){return F}),e.d(n,"AndExpression",function(){return G}),e.d(n,"ChainExpression",function(){return W}),e.d(n,"ConstantExpression",function(){return O}),e.d(n,"DefineExpression",function(){return K}),e.d(n,"ForExpression",function(){return Y}),e.d(n,"GetExpression",function(){return $}),e.d(n,"IfExpression",function(){return et}),e.d(n,"NotExpression",function(){return ot}),e.d(n,"OperationExpression",function(){return ut}),e.d(n,"OrExpression",function(){return pt}),e.d(n,"SetExpression",function(){return ft}),e.d(n,"SwitchExpression",function(){return dt}),e.d(n,"TemplateExpression",function(){return ht}),e.d(n,"WhileExpression",function(){return bt}),e.d(n,"defs",function(){return mt})}])});
//# sourceMappingURL=expangine-runtime.js.map