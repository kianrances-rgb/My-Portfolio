(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function l0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Uu={exports:{}},Va={},Fu={exports:{}},Tt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function Cx(){if(Jp)return Tt;Jp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.iterator;function g(b){return b===null||typeof b!="object"?null:(b=S&&b[S]||b["@@iterator"],typeof b=="function"?b:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,L={};function y(b,O,he){this.props=b,this.context=O,this.refs=L,this.updater=he||w}y.prototype.isReactComponent={},y.prototype.setState=function(b,O){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,O,"setState")},y.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function _(){}_.prototype=y.prototype;function D(b,O,he){this.props=b,this.context=O,this.refs=L,this.updater=he||w}var z=D.prototype=new _;z.constructor=D,A(z,y.prototype),z.isPureReactComponent=!0;var R=Array.isArray,I=Object.prototype.hasOwnProperty,P={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function x(b,O,he){var _e,Ce={},Ee=null,W=null;if(O!=null)for(_e in O.ref!==void 0&&(W=O.ref),O.key!==void 0&&(Ee=""+O.key),O)I.call(O,_e)&&!E.hasOwnProperty(_e)&&(Ce[_e]=O[_e]);var k=arguments.length-2;if(k===1)Ce.children=he;else if(1<k){for(var V=Array(k),Me=0;Me<k;Me++)V[Me]=arguments[Me+2];Ce.children=V}if(b&&b.defaultProps)for(_e in k=b.defaultProps,k)Ce[_e]===void 0&&(Ce[_e]=k[_e]);return{$$typeof:s,type:b,key:Ee,ref:W,props:Ce,_owner:P.current}}function U(b,O){return{$$typeof:s,type:b.type,key:O,ref:b.ref,props:b.props,_owner:b._owner}}function F(b){return typeof b=="object"&&b!==null&&b.$$typeof===s}function X(b){var O={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(he){return O[he]})}var j=/\/+/g;function J(b,O){return typeof b=="object"&&b!==null&&b.key!=null?X(""+b.key):O.toString(36)}function $(b,O,he,_e,Ce){var Ee=typeof b;(Ee==="undefined"||Ee==="boolean")&&(b=null);var W=!1;if(b===null)W=!0;else switch(Ee){case"string":case"number":W=!0;break;case"object":switch(b.$$typeof){case s:case e:W=!0}}if(W)return W=b,Ce=Ce(W),b=_e===""?"."+J(W,0):_e,R(Ce)?(he="",b!=null&&(he=b.replace(j,"$&/")+"/"),$(Ce,O,he,"",function(Me){return Me})):Ce!=null&&(F(Ce)&&(Ce=U(Ce,he+(!Ce.key||W&&W.key===Ce.key?"":(""+Ce.key).replace(j,"$&/")+"/")+b)),O.push(Ce)),1;if(W=0,_e=_e===""?".":_e+":",R(b))for(var k=0;k<b.length;k++){Ee=b[k];var V=_e+J(Ee,k);W+=$(Ee,O,he,V,Ce)}else if(V=g(b),typeof V=="function")for(b=V.call(b),k=0;!(Ee=b.next()).done;)Ee=Ee.value,V=_e+J(Ee,k++),W+=$(Ee,O,he,V,Ce);else if(Ee==="object")throw O=String(b),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.");return W}function Q(b,O,he){if(b==null)return b;var _e=[],Ce=0;return $(b,_e,"","",function(Ee){return O.call(he,Ee,Ce++)}),_e}function oe(b){if(b._status===-1){var O=b._result;O=O(),O.then(function(he){(b._status===0||b._status===-1)&&(b._status=1,b._result=he)},function(he){(b._status===0||b._status===-1)&&(b._status=2,b._result=he)}),b._status===-1&&(b._status=0,b._result=O)}if(b._status===1)return b._result.default;throw b._result}var ee={current:null},Y={transition:null},q={ReactCurrentDispatcher:ee,ReactCurrentBatchConfig:Y,ReactCurrentOwner:P};function B(){throw Error("act(...) is not supported in production builds of React.")}return Tt.Children={map:Q,forEach:function(b,O,he){Q(b,function(){O.apply(this,arguments)},he)},count:function(b){var O=0;return Q(b,function(){O++}),O},toArray:function(b){return Q(b,function(O){return O})||[]},only:function(b){if(!F(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},Tt.Component=y,Tt.Fragment=t,Tt.Profiler=o,Tt.PureComponent=D,Tt.StrictMode=r,Tt.Suspense=h,Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,Tt.act=B,Tt.cloneElement=function(b,O,he){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var _e=A({},b.props),Ce=b.key,Ee=b.ref,W=b._owner;if(O!=null){if(O.ref!==void 0&&(Ee=O.ref,W=P.current),O.key!==void 0&&(Ce=""+O.key),b.type&&b.type.defaultProps)var k=b.type.defaultProps;for(V in O)I.call(O,V)&&!E.hasOwnProperty(V)&&(_e[V]=O[V]===void 0&&k!==void 0?k[V]:O[V])}var V=arguments.length-2;if(V===1)_e.children=he;else if(1<V){k=Array(V);for(var Me=0;Me<V;Me++)k[Me]=arguments[Me+2];_e.children=k}return{$$typeof:s,type:b.type,key:Ce,ref:Ee,props:_e,_owner:W}},Tt.createContext=function(b){return b={$$typeof:u,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:l,_context:b},b.Consumer=b},Tt.createElement=x,Tt.createFactory=function(b){var O=x.bind(null,b);return O.type=b,O},Tt.createRef=function(){return{current:null}},Tt.forwardRef=function(b){return{$$typeof:f,render:b}},Tt.isValidElement=F,Tt.lazy=function(b){return{$$typeof:v,_payload:{_status:-1,_result:b},_init:oe}},Tt.memo=function(b,O){return{$$typeof:p,type:b,compare:O===void 0?null:O}},Tt.startTransition=function(b){var O=Y.transition;Y.transition={};try{b()}finally{Y.transition=O}},Tt.unstable_act=B,Tt.useCallback=function(b,O){return ee.current.useCallback(b,O)},Tt.useContext=function(b){return ee.current.useContext(b)},Tt.useDebugValue=function(){},Tt.useDeferredValue=function(b){return ee.current.useDeferredValue(b)},Tt.useEffect=function(b,O){return ee.current.useEffect(b,O)},Tt.useId=function(){return ee.current.useId()},Tt.useImperativeHandle=function(b,O,he){return ee.current.useImperativeHandle(b,O,he)},Tt.useInsertionEffect=function(b,O){return ee.current.useInsertionEffect(b,O)},Tt.useLayoutEffect=function(b,O){return ee.current.useLayoutEffect(b,O)},Tt.useMemo=function(b,O){return ee.current.useMemo(b,O)},Tt.useReducer=function(b,O,he){return ee.current.useReducer(b,O,he)},Tt.useRef=function(b){return ee.current.useRef(b)},Tt.useState=function(b){return ee.current.useState(b)},Tt.useSyncExternalStore=function(b,O,he){return ee.current.useSyncExternalStore(b,O,he)},Tt.useTransition=function(){return ee.current.useTransition()},Tt.version="18.3.1",Tt}var em;function hf(){return em||(em=1,Fu.exports=Cx()),Fu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function Rx(){if(tm)return Va;tm=1;var s=hf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,p){var v,S={},g=null,w=null;p!==void 0&&(g=""+p),h.key!==void 0&&(g=""+h.key),h.ref!==void 0&&(w=h.ref);for(v in h)r.call(h,v)&&!l.hasOwnProperty(v)&&(S[v]=h[v]);if(f&&f.defaultProps)for(v in h=f.defaultProps,h)S[v]===void 0&&(S[v]=h[v]);return{$$typeof:e,type:f,key:g,ref:w,props:S,_owner:o.current}}return Va.Fragment=t,Va.jsx=u,Va.jsxs=u,Va}var nm;function Px(){return nm||(nm=1,Uu.exports=Rx()),Uu.exports}var M=Px(),De=hf();const Nx=l0(De);var gl={},ku={exports:{}},Gn={},Ou={exports:{}},Bu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var im;function Lx(){return im||(im=1,(function(s){function e(Y,q){var B=Y.length;Y.push(q);e:for(;0<B;){var b=B-1>>>1,O=Y[b];if(0<o(O,q))Y[b]=q,Y[B]=O,B=b;else break e}}function t(Y){return Y.length===0?null:Y[0]}function r(Y){if(Y.length===0)return null;var q=Y[0],B=Y.pop();if(B!==q){Y[0]=B;e:for(var b=0,O=Y.length,he=O>>>1;b<he;){var _e=2*(b+1)-1,Ce=Y[_e],Ee=_e+1,W=Y[Ee];if(0>o(Ce,B))Ee<O&&0>o(W,Ce)?(Y[b]=W,Y[Ee]=B,b=Ee):(Y[b]=Ce,Y[_e]=B,b=_e);else if(Ee<O&&0>o(W,B))Y[b]=W,Y[Ee]=B,b=Ee;else break e}}return q}function o(Y,q){var B=Y.sortIndex-q.sortIndex;return B!==0?B:Y.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var h=[],p=[],v=1,S=null,g=3,w=!1,A=!1,L=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function z(Y){for(var q=t(p);q!==null;){if(q.callback===null)r(p);else if(q.startTime<=Y)r(p),q.sortIndex=q.expirationTime,e(h,q);else break;q=t(p)}}function R(Y){if(L=!1,z(Y),!A)if(t(h)!==null)A=!0,oe(I);else{var q=t(p);q!==null&&ee(R,q.startTime-Y)}}function I(Y,q){A=!1,L&&(L=!1,_(x),x=-1),w=!0;var B=g;try{for(z(q),S=t(h);S!==null&&(!(S.expirationTime>q)||Y&&!X());){var b=S.callback;if(typeof b=="function"){S.callback=null,g=S.priorityLevel;var O=b(S.expirationTime<=q);q=s.unstable_now(),typeof O=="function"?S.callback=O:S===t(h)&&r(h),z(q)}else r(h);S=t(h)}if(S!==null)var he=!0;else{var _e=t(p);_e!==null&&ee(R,_e.startTime-q),he=!1}return he}finally{S=null,g=B,w=!1}}var P=!1,E=null,x=-1,U=5,F=-1;function X(){return!(s.unstable_now()-F<U)}function j(){if(E!==null){var Y=s.unstable_now();F=Y;var q=!0;try{q=E(!0,Y)}finally{q?J():(P=!1,E=null)}}else P=!1}var J;if(typeof D=="function")J=function(){D(j)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,Q=$.port2;$.port1.onmessage=j,J=function(){Q.postMessage(null)}}else J=function(){y(j,0)};function oe(Y){E=Y,P||(P=!0,J())}function ee(Y,q){x=y(function(){Y(s.unstable_now())},q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Y){Y.callback=null},s.unstable_continueExecution=function(){A||w||(A=!0,oe(I))},s.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<Y?Math.floor(1e3/Y):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(Y){switch(g){case 1:case 2:case 3:var q=3;break;default:q=g}var B=g;g=q;try{return Y()}finally{g=B}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Y,q){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var B=g;g=Y;try{return q()}finally{g=B}},s.unstable_scheduleCallback=function(Y,q,B){var b=s.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?b+B:b):B=b,Y){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=B+O,Y={id:v++,callback:q,priorityLevel:Y,startTime:B,expirationTime:O,sortIndex:-1},B>b?(Y.sortIndex=B,e(p,Y),t(h)===null&&Y===t(p)&&(L?(_(x),x=-1):L=!0,ee(R,B-b))):(Y.sortIndex=O,e(h,Y),A||w||(A=!0,oe(I))),Y},s.unstable_shouldYield=X,s.unstable_wrapCallback=function(Y){var q=g;return function(){var B=g;g=q;try{return Y.apply(this,arguments)}finally{g=B}}}})(Bu)),Bu}var rm;function Ix(){return rm||(rm=1,Ou.exports=Lx()),Ou.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sm;function Dx(){if(sm)return Gn;sm=1;var s=hf(),e=Ix();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},S={};function g(n){return h.call(S,n)?!0:h.call(v,n)?!1:p.test(n)?S[n]=!0:(v[n]=!0,!1)}function w(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function A(n,i,a,c){if(i===null||typeof i>"u"||w(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function L(n,i,a,c,d,m,C){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=C}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new L(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new L(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new L(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new L(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new L(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new L(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new L(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new L(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new L(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,D);y[i]=new L(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,D);y[i]=new L(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,D);y[i]=new L(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new L(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new L("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new L(n,1,!1,n.toLowerCase(),null,!0,!0)});function z(n,i,a,c){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(A(i,a,d,c)&&(a=null),c||d===null?g(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),P=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),F=Symbol.for("react.provider"),X=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),ee=Symbol.for("react.offscreen"),Y=Symbol.iterator;function q(n){return n===null||typeof n!="object"?null:(n=Y&&n[Y]||n["@@iterator"],typeof n=="function"?n:null)}var B=Object.assign,b;function O(n){if(b===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);b=i&&i[1]||""}return`
`+b+n}var he=!1;function _e(n,i){if(!n||he)return"";he=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ve){var c=ve}Reflect.construct(n,[],i)}else{try{i.call()}catch(ve){c=ve}n.call(i.prototype)}else{try{throw Error()}catch(ve){c=ve}n()}}catch(ve){if(ve&&c&&typeof ve.stack=="string"){for(var d=ve.stack.split(`
`),m=c.stack.split(`
`),C=d.length-1,H=m.length-1;1<=C&&0<=H&&d[C]!==m[H];)H--;for(;1<=C&&0<=H;C--,H--)if(d[C]!==m[H]){if(C!==1||H!==1)do if(C--,H--,0>H||d[C]!==m[H]){var Z=`
`+d[C].replace(" at new "," at ");return n.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",n.displayName)),Z}while(1<=C&&0<=H);break}}}finally{he=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?O(n):""}function Ce(n){switch(n.tag){case 5:return O(n.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return n=_e(n.type,!1),n;case 11:return n=_e(n.type.render,!1),n;case 1:return n=_e(n.type,!0),n;default:return""}}function Ee(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case E:return"Fragment";case P:return"Portal";case U:return"Profiler";case x:return"StrictMode";case J:return"Suspense";case $:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case X:return(n.displayName||"Context")+".Consumer";case F:return(n._context.displayName||"Context")+".Provider";case j:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Q:return i=n.displayName||null,i!==null?i:Ee(n.type)||"Memo";case oe:i=n._payload,n=n._init;try{return Ee(n(i))}catch{}}return null}function W(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(i);case 8:return i===x?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function k(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function V(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Me(n){var i=V(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(C){c=""+C,m.call(this,C)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(C){c=""+C},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ge(n){n._valueTracker||(n._valueTracker=Me(n))}function se(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=V(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Pe(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function me(n,i){var a=i.checked;return B({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Fe(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=k(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ze(n,i){i=i.checked,i!=null&&z(n,"checked",i,!1)}function Ue(n,i){Ze(n,i);var a=k(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?pt(n,i.type,a):i.hasOwnProperty("defaultValue")&&pt(n,i.type,k(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ve(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function pt(n,i,a){(i!=="number"||Pe(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var dt=Array.isArray;function ft(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+k(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function St(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return B({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function K(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(dt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:k(a)}}function Ht(n,i){var a=k(i.value),c=k(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Mt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function G(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function T(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?G(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var re,ue=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(re=re||document.createElement("div"),re.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=re.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function le(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var be={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ie=["Webkit","ms","Moz","O"];Object.keys(be).forEach(function(n){Ie.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),be[i]=be[n]})});function ye(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||be.hasOwnProperty(n)&&be[n]?(""+i).trim():i+"px"}function we(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=ye(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var ze=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function it(n,i){if(i){if(ze[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ge(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ke=null;function rt(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var lt=null,ht=null,te=null;function Oe(n){if(n=Ca(n)){if(typeof lt!="function")throw Error(t(280));var i=n.stateNode;i&&(i=No(i),lt(n.stateNode,n.type,i))}}function Se(n){ht?te?te.push(n):te=[n]:ht=n}function Be(){if(ht){var n=ht,i=te;if(te=ht=null,Oe(n),i)for(n=0;n<i.length;n++)Oe(i[n])}}function Ye(n,i){return n(i)}function Te(){}var at=!1;function tt(n,i,a){if(at)return n(i,a);at=!0;try{return Ye(n,i,a)}finally{at=!1,(ht!==null||te!==null)&&(Te(),Be())}}function Dt(n,i){var a=n.stateNode;if(a===null)return null;var c=No(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Nt=!1;if(f)try{var gn={};Object.defineProperty(gn,"passive",{get:function(){Nt=!0}}),window.addEventListener("test",gn,gn),window.removeEventListener("test",gn,gn)}catch{Nt=!1}function Zn(n,i,a,c,d,m,C,H,Z){var ve=Array.prototype.slice.call(arguments,3);try{i.apply(a,ve)}catch(Re){this.onError(Re)}}var kr=!1,hs=null,Or=!1,Br=null,rc={onError:function(n){kr=!0,hs=n}};function ho(n,i,a,c,d,m,C,H,Z){kr=!1,hs=null,Zn.apply(rc,arguments)}function po(n,i,a,c,d,m,C,H,Z){if(ho.apply(this,arguments),kr){if(kr){var ve=hs;kr=!1,hs=null}else throw Error(t(198));Or||(Or=!0,Br=ve)}}function Pn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function ps(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function oa(n){if(Pn(n)!==n)throw Error(t(188))}function mo(n){var i=n.alternate;if(!i){if(i=Pn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return oa(d),n;if(m===c)return oa(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var C=!1,H=d.child;H;){if(H===a){C=!0,a=d,c=m;break}if(H===c){C=!0,c=d,a=m;break}H=H.sibling}if(!C){for(H=m.child;H;){if(H===a){C=!0,a=m,c=d;break}if(H===c){C=!0,c=m,a=d;break}H=H.sibling}if(!C)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function zr(n){return n=mo(n),n!==null?la(n):null}function la(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=la(n);if(i!==null)return i;n=n.sibling}return null}var Gr=e.unstable_scheduleCallback,ca=e.unstable_cancelCallback,go=e.unstable_shouldYield,sc=e.unstable_requestPaint,qt=e.unstable_now,ac=e.unstable_getCurrentPriorityLevel,ua=e.unstable_ImmediatePriority,da=e.unstable_UserBlockingPriority,N=e.unstable_NormalPriority,ne=e.unstable_LowPriority,xe=e.unstable_IdlePriority,ce=null,ae=null;function Xe(n){if(ae&&typeof ae.onCommitFiberRoot=="function")try{ae.onCommitFiberRoot(ce,n,void 0,(n.current.flags&128)===128)}catch{}}var He=Math.clz32?Math.clz32:st,We=Math.log,Je=Math.LN2;function st(n){return n>>>=0,n===0?32:31-(We(n)/Je|0)|0}var xt=64,yt=4194304;function Ke(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function At(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,C=a&268435455;if(C!==0){var H=C&~d;H!==0?c=Ke(H):(m&=C,m!==0&&(c=Ke(m)))}else C=a&~d,C!==0?c=Ke(C):m!==0&&(c=Ke(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-He(i),d=1<<a,c|=n[a],i&=~d;return c}function Qt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gt(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var C=31-He(m),H=1<<C,Z=d[C];Z===-1?((H&a)===0||(H&c)!==0)&&(d[C]=Qt(H,i)):Z<=i&&(n.expiredLanes|=H),m&=~H}}function Ot(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function an(){var n=xt;return xt<<=1,(xt&4194240)===0&&(xt=64),n}function qe(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function tn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-He(i),n[i]=a}function Ct(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-He(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function yn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-He(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var wt=0;function di(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Wi,Ut,jt,fi,Bt,Qn=!1,hi=[],pi=null,ur=null,dr=null,fa=new Map,ha=new Map,fr=[],K0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ff(n,i){switch(n){case"focusin":case"focusout":pi=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":fa.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ha.delete(i.pointerId)}}function pa(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Ca(i),i!==null&&Ut(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Z0(n,i,a,c,d){switch(i){case"focusin":return pi=pa(pi,n,i,a,c,d),!0;case"dragenter":return ur=pa(ur,n,i,a,c,d),!0;case"mouseover":return dr=pa(dr,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return fa.set(m,pa(fa.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,ha.set(m,pa(ha.get(m)||null,n,i,a,c,d)),!0}return!1}function kf(n){var i=Hr(n.target);if(i!==null){var a=Pn(i);if(a!==null){if(i=a.tag,i===13){if(i=ps(a),i!==null){n.blockedOn=i,Bt(n.priority,function(){jt(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function xo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=lc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);ke=c,a.target.dispatchEvent(c),ke=null}else return i=Ca(a),i!==null&&Ut(i),n.blockedOn=a,!1;i.shift()}return!0}function Of(n,i,a){xo(n)&&a.delete(i)}function Q0(){Qn=!1,pi!==null&&xo(pi)&&(pi=null),ur!==null&&xo(ur)&&(ur=null),dr!==null&&xo(dr)&&(dr=null),fa.forEach(Of),ha.forEach(Of)}function ma(n,i){n.blockedOn===i&&(n.blockedOn=null,Qn||(Qn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Q0)))}function ga(n){function i(d){return ma(d,n)}if(0<hi.length){ma(hi[0],n);for(var a=1;a<hi.length;a++){var c=hi[a];c.blockedOn===n&&(c.blockedOn=null)}}for(pi!==null&&ma(pi,n),ur!==null&&ma(ur,n),dr!==null&&ma(dr,n),fa.forEach(i),ha.forEach(i),a=0;a<fr.length;a++)c=fr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<fr.length&&(a=fr[0],a.blockedOn===null);)kf(a),a.blockedOn===null&&fr.shift()}var ms=R.ReactCurrentBatchConfig,vo=!0;function J0(n,i,a,c){var d=wt,m=ms.transition;ms.transition=null;try{wt=1,oc(n,i,a,c)}finally{wt=d,ms.transition=m}}function eg(n,i,a,c){var d=wt,m=ms.transition;ms.transition=null;try{wt=4,oc(n,i,a,c)}finally{wt=d,ms.transition=m}}function oc(n,i,a,c){if(vo){var d=lc(n,i,a,c);if(d===null)Tc(n,i,c,_o,a),Ff(n,c);else if(Z0(d,n,i,a,c))c.stopPropagation();else if(Ff(n,c),i&4&&-1<K0.indexOf(n)){for(;d!==null;){var m=Ca(d);if(m!==null&&Wi(m),m=lc(n,i,a,c),m===null&&Tc(n,i,c,_o,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Tc(n,i,c,null,a)}}var _o=null;function lc(n,i,a,c){if(_o=null,n=rt(c),n=Hr(n),n!==null)if(i=Pn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=ps(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return _o=n,null}function Bf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ac()){case ua:return 1;case da:return 4;case N:case ne:return 16;case xe:return 536870912;default:return 16}default:return 16}}var hr=null,cc=null,yo=null;function zf(){if(yo)return yo;var n,i=cc,a=i.length,c,d="value"in hr?hr.value:hr.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var C=a-n;for(c=1;c<=C&&i[a-c]===d[m-c];c++);return yo=d.slice(n,1<c?1-c:void 0)}function So(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Mo(){return!0}function Gf(){return!1}function Wn(n){function i(a,c,d,m,C){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=C,this.currentTarget=null;for(var H in n)n.hasOwnProperty(H)&&(a=n[H],this[H]=a?a(m):m[H]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Mo:Gf,this.isPropagationStopped=Gf,this}return B(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Mo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Mo)},persist:function(){},isPersistent:Mo}),i}var gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uc=Wn(gs),xa=B({},gs,{view:0,detail:0}),tg=Wn(xa),dc,fc,va,wo=B({},xa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==va&&(va&&n.type==="mousemove"?(dc=n.screenX-va.screenX,fc=n.screenY-va.screenY):fc=dc=0,va=n),dc)},movementY:function(n){return"movementY"in n?n.movementY:fc}}),Hf=Wn(wo),ng=B({},wo,{dataTransfer:0}),ig=Wn(ng),rg=B({},xa,{relatedTarget:0}),hc=Wn(rg),sg=B({},gs,{animationName:0,elapsedTime:0,pseudoElement:0}),ag=Wn(sg),og=B({},gs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),lg=Wn(og),cg=B({},gs,{data:0}),Vf=Wn(cg),ug={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hg(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=fg[n])?!!i[n]:!1}function pc(){return hg}var pg=B({},xa,{key:function(n){if(n.key){var i=ug[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=So(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?dg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pc,charCode:function(n){return n.type==="keypress"?So(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?So(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),mg=Wn(pg),gg=B({},wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wf=Wn(gg),xg=B({},xa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pc}),vg=Wn(xg),_g=B({},gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),yg=Wn(_g),Sg=B({},wo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Mg=Wn(Sg),wg=[9,13,27,32],mc=f&&"CompositionEvent"in window,_a=null;f&&"documentMode"in document&&(_a=document.documentMode);var Eg=f&&"TextEvent"in window&&!_a,Xf=f&&(!mc||_a&&8<_a&&11>=_a),jf=" ",Yf=!1;function qf(n,i){switch(n){case"keyup":return wg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $f(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var xs=!1;function Tg(n,i){switch(n){case"compositionend":return $f(i);case"keypress":return i.which!==32?null:(Yf=!0,jf);case"textInput":return n=i.data,n===jf&&Yf?null:n;default:return null}}function bg(n,i){if(xs)return n==="compositionend"||!mc&&qf(n,i)?(n=zf(),yo=cc=hr=null,xs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Xf&&i.locale!=="ko"?null:i.data;default:return null}}var Ag={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Ag[n.type]:i==="textarea"}function Zf(n,i,a,c){Se(c),i=Co(i,"onChange"),0<i.length&&(a=new uc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var ya=null,Sa=null;function Cg(n){mh(n,0)}function Eo(n){var i=Ms(n);if(se(i))return n}function Rg(n,i){if(n==="change")return i}var Qf=!1;if(f){var gc;if(f){var xc="oninput"in document;if(!xc){var Jf=document.createElement("div");Jf.setAttribute("oninput","return;"),xc=typeof Jf.oninput=="function"}gc=xc}else gc=!1;Qf=gc&&(!document.documentMode||9<document.documentMode)}function eh(){ya&&(ya.detachEvent("onpropertychange",th),Sa=ya=null)}function th(n){if(n.propertyName==="value"&&Eo(Sa)){var i=[];Zf(i,Sa,n,rt(n)),tt(Cg,i)}}function Pg(n,i,a){n==="focusin"?(eh(),ya=i,Sa=a,ya.attachEvent("onpropertychange",th)):n==="focusout"&&eh()}function Ng(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Eo(Sa)}function Lg(n,i){if(n==="click")return Eo(i)}function Ig(n,i){if(n==="input"||n==="change")return Eo(i)}function Dg(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var mi=typeof Object.is=="function"?Object.is:Dg;function Ma(n,i){if(mi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!h.call(i,d)||!mi(n[d],i[d]))return!1}return!0}function nh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ih(n,i){var a=nh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=nh(a)}}function rh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?rh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function sh(){for(var n=window,i=Pe();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Pe(n.document)}return i}function vc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Ug(n){var i=sh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&rh(a.ownerDocument.documentElement,a)){if(c!==null&&vc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=ih(a,m);var C=ih(a,c);d&&C&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==C.node||n.focusOffset!==C.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(C.node,C.offset)):(i.setEnd(C.node,C.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Fg=f&&"documentMode"in document&&11>=document.documentMode,vs=null,_c=null,wa=null,yc=!1;function ah(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;yc||vs==null||vs!==Pe(c)||(c=vs,"selectionStart"in c&&vc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),wa&&Ma(wa,c)||(wa=c,c=Co(_c,"onSelect"),0<c.length&&(i=new uc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=vs)))}function To(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var _s={animationend:To("Animation","AnimationEnd"),animationiteration:To("Animation","AnimationIteration"),animationstart:To("Animation","AnimationStart"),transitionend:To("Transition","TransitionEnd")},Sc={},oh={};f&&(oh=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function bo(n){if(Sc[n])return Sc[n];if(!_s[n])return n;var i=_s[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in oh)return Sc[n]=i[a];return n}var lh=bo("animationend"),ch=bo("animationiteration"),uh=bo("animationstart"),dh=bo("transitionend"),fh=new Map,hh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(n,i){fh.set(n,i),l(i,[n])}for(var Mc=0;Mc<hh.length;Mc++){var wc=hh[Mc],kg=wc.toLowerCase(),Og=wc[0].toUpperCase()+wc.slice(1);pr(kg,"on"+Og)}pr(lh,"onAnimationEnd"),pr(ch,"onAnimationIteration"),pr(uh,"onAnimationStart"),pr("dblclick","onDoubleClick"),pr("focusin","onFocus"),pr("focusout","onBlur"),pr(dh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ea="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ea));function ph(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,po(c,i,void 0,n),n.currentTarget=null}function mh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var C=c.length-1;0<=C;C--){var H=c[C],Z=H.instance,ve=H.currentTarget;if(H=H.listener,Z!==m&&d.isPropagationStopped())break e;ph(d,H,ve),m=Z}else for(C=0;C<c.length;C++){if(H=c[C],Z=H.instance,ve=H.currentTarget,H=H.listener,Z!==m&&d.isPropagationStopped())break e;ph(d,H,ve),m=Z}}}if(Or)throw n=Br,Or=!1,Br=null,n}function Wt(n,i){var a=i[Nc];a===void 0&&(a=i[Nc]=new Set);var c=n+"__bubble";a.has(c)||(gh(i,n,2,!1),a.add(c))}function Ec(n,i,a){var c=0;i&&(c|=4),gh(a,n,c,i)}var Ao="_reactListening"+Math.random().toString(36).slice(2);function Ta(n){if(!n[Ao]){n[Ao]=!0,r.forEach(function(a){a!=="selectionchange"&&(Bg.has(a)||Ec(a,!1,n),Ec(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ao]||(i[Ao]=!0,Ec("selectionchange",!1,i))}}function gh(n,i,a,c){switch(Bf(i)){case 1:var d=J0;break;case 4:d=eg;break;default:d=oc}a=d.bind(null,i,a,n),d=void 0,!Nt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Tc(n,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var C=c.tag;if(C===3||C===4){var H=c.stateNode.containerInfo;if(H===d||H.nodeType===8&&H.parentNode===d)break;if(C===4)for(C=c.return;C!==null;){var Z=C.tag;if((Z===3||Z===4)&&(Z=C.stateNode.containerInfo,Z===d||Z.nodeType===8&&Z.parentNode===d))return;C=C.return}for(;H!==null;){if(C=Hr(H),C===null)return;if(Z=C.tag,Z===5||Z===6){c=m=C;continue e}H=H.parentNode}}c=c.return}tt(function(){var ve=m,Re=rt(a),Ne=[];e:{var Ae=fh.get(n);if(Ae!==void 0){var $e=uc,et=n;switch(n){case"keypress":if(So(a)===0)break e;case"keydown":case"keyup":$e=mg;break;case"focusin":et="focus",$e=hc;break;case"focusout":et="blur",$e=hc;break;case"beforeblur":case"afterblur":$e=hc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$e=Hf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$e=ig;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$e=vg;break;case lh:case ch:case uh:$e=ag;break;case dh:$e=yg;break;case"scroll":$e=tg;break;case"wheel":$e=Mg;break;case"copy":case"cut":case"paste":$e=lg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$e=Wf}var nt=(i&4)!==0,nn=!nt&&n==="scroll",de=nt?Ae!==null?Ae+"Capture":null:Ae;nt=[];for(var ie=ve,pe;ie!==null;){pe=ie;var Le=pe.stateNode;if(pe.tag===5&&Le!==null&&(pe=Le,de!==null&&(Le=Dt(ie,de),Le!=null&&nt.push(ba(ie,Le,pe)))),nn)break;ie=ie.return}0<nt.length&&(Ae=new $e(Ae,et,null,a,Re),Ne.push({event:Ae,listeners:nt}))}}if((i&7)===0){e:{if(Ae=n==="mouseover"||n==="pointerover",$e=n==="mouseout"||n==="pointerout",Ae&&a!==ke&&(et=a.relatedTarget||a.fromElement)&&(Hr(et)||et[Xi]))break e;if(($e||Ae)&&(Ae=Re.window===Re?Re:(Ae=Re.ownerDocument)?Ae.defaultView||Ae.parentWindow:window,$e?(et=a.relatedTarget||a.toElement,$e=ve,et=et?Hr(et):null,et!==null&&(nn=Pn(et),et!==nn||et.tag!==5&&et.tag!==6)&&(et=null)):($e=null,et=ve),$e!==et)){if(nt=Hf,Le="onMouseLeave",de="onMouseEnter",ie="mouse",(n==="pointerout"||n==="pointerover")&&(nt=Wf,Le="onPointerLeave",de="onPointerEnter",ie="pointer"),nn=$e==null?Ae:Ms($e),pe=et==null?Ae:Ms(et),Ae=new nt(Le,ie+"leave",$e,a,Re),Ae.target=nn,Ae.relatedTarget=pe,Le=null,Hr(Re)===ve&&(nt=new nt(de,ie+"enter",et,a,Re),nt.target=pe,nt.relatedTarget=nn,Le=nt),nn=Le,$e&&et)t:{for(nt=$e,de=et,ie=0,pe=nt;pe;pe=ys(pe))ie++;for(pe=0,Le=de;Le;Le=ys(Le))pe++;for(;0<ie-pe;)nt=ys(nt),ie--;for(;0<pe-ie;)de=ys(de),pe--;for(;ie--;){if(nt===de||de!==null&&nt===de.alternate)break t;nt=ys(nt),de=ys(de)}nt=null}else nt=null;$e!==null&&xh(Ne,Ae,$e,nt,!1),et!==null&&nn!==null&&xh(Ne,nn,et,nt,!0)}}e:{if(Ae=ve?Ms(ve):window,$e=Ae.nodeName&&Ae.nodeName.toLowerCase(),$e==="select"||$e==="input"&&Ae.type==="file")var ot=Rg;else if(Kf(Ae))if(Qf)ot=Ig;else{ot=Ng;var ct=Pg}else($e=Ae.nodeName)&&$e.toLowerCase()==="input"&&(Ae.type==="checkbox"||Ae.type==="radio")&&(ot=Lg);if(ot&&(ot=ot(n,ve))){Zf(Ne,ot,a,Re);break e}ct&&ct(n,Ae,ve),n==="focusout"&&(ct=Ae._wrapperState)&&ct.controlled&&Ae.type==="number"&&pt(Ae,"number",Ae.value)}switch(ct=ve?Ms(ve):window,n){case"focusin":(Kf(ct)||ct.contentEditable==="true")&&(vs=ct,_c=ve,wa=null);break;case"focusout":wa=_c=vs=null;break;case"mousedown":yc=!0;break;case"contextmenu":case"mouseup":case"dragend":yc=!1,ah(Ne,a,Re);break;case"selectionchange":if(Fg)break;case"keydown":case"keyup":ah(Ne,a,Re)}var ut;if(mc)e:{switch(n){case"compositionstart":var mt="onCompositionStart";break e;case"compositionend":mt="onCompositionEnd";break e;case"compositionupdate":mt="onCompositionUpdate";break e}mt=void 0}else xs?qf(n,a)&&(mt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(mt="onCompositionStart");mt&&(Xf&&a.locale!=="ko"&&(xs||mt!=="onCompositionStart"?mt==="onCompositionEnd"&&xs&&(ut=zf()):(hr=Re,cc="value"in hr?hr.value:hr.textContent,xs=!0)),ct=Co(ve,mt),0<ct.length&&(mt=new Vf(mt,n,null,a,Re),Ne.push({event:mt,listeners:ct}),ut?mt.data=ut:(ut=$f(a),ut!==null&&(mt.data=ut)))),(ut=Eg?Tg(n,a):bg(n,a))&&(ve=Co(ve,"onBeforeInput"),0<ve.length&&(Re=new Vf("onBeforeInput","beforeinput",null,a,Re),Ne.push({event:Re,listeners:ve}),Re.data=ut))}mh(Ne,i)})}function ba(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Co(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=Dt(n,a),m!=null&&c.unshift(ba(n,m,d)),m=Dt(n,i),m!=null&&c.push(ba(n,m,d))),n=n.return}return c}function ys(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function xh(n,i,a,c,d){for(var m=i._reactName,C=[];a!==null&&a!==c;){var H=a,Z=H.alternate,ve=H.stateNode;if(Z!==null&&Z===c)break;H.tag===5&&ve!==null&&(H=ve,d?(Z=Dt(a,m),Z!=null&&C.unshift(ba(a,Z,H))):d||(Z=Dt(a,m),Z!=null&&C.push(ba(a,Z,H)))),a=a.return}C.length!==0&&n.push({event:i,listeners:C})}var zg=/\r\n?/g,Gg=/\u0000|\uFFFD/g;function vh(n){return(typeof n=="string"?n:""+n).replace(zg,`
`).replace(Gg,"")}function Ro(n,i,a){if(i=vh(i),vh(n)!==i&&a)throw Error(t(425))}function Po(){}var bc=null,Ac=null;function Cc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Rc=typeof setTimeout=="function"?setTimeout:void 0,Hg=typeof clearTimeout=="function"?clearTimeout:void 0,_h=typeof Promise=="function"?Promise:void 0,Vg=typeof queueMicrotask=="function"?queueMicrotask:typeof _h<"u"?function(n){return _h.resolve(null).then(n).catch(Wg)}:Rc;function Wg(n){setTimeout(function(){throw n})}function Pc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),ga(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);ga(i)}function mr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function yh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Ss=Math.random().toString(36).slice(2),Ni="__reactFiber$"+Ss,Aa="__reactProps$"+Ss,Xi="__reactContainer$"+Ss,Nc="__reactEvents$"+Ss,Xg="__reactListeners$"+Ss,jg="__reactHandles$"+Ss;function Hr(n){var i=n[Ni];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Xi]||a[Ni]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=yh(n);n!==null;){if(a=n[Ni])return a;n=yh(n)}return i}n=a,a=n.parentNode}return null}function Ca(n){return n=n[Ni]||n[Xi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ms(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function No(n){return n[Aa]||null}var Lc=[],ws=-1;function gr(n){return{current:n}}function Xt(n){0>ws||(n.current=Lc[ws],Lc[ws]=null,ws--)}function Vt(n,i){ws++,Lc[ws]=n.current,n.current=i}var xr={},Sn=gr(xr),Fn=gr(!1),Vr=xr;function Es(n,i){var a=n.type.contextTypes;if(!a)return xr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function kn(n){return n=n.childContextTypes,n!=null}function Lo(){Xt(Fn),Xt(Sn)}function Sh(n,i,a){if(Sn.current!==xr)throw Error(t(168));Vt(Sn,i),Vt(Fn,a)}function Mh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,W(n)||"Unknown",d));return B({},a,c)}function Io(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||xr,Vr=Sn.current,Vt(Sn,n),Vt(Fn,Fn.current),!0}function wh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Mh(n,i,Vr),c.__reactInternalMemoizedMergedChildContext=n,Xt(Fn),Xt(Sn),Vt(Sn,n)):Xt(Fn),Vt(Fn,a)}var ji=null,Do=!1,Ic=!1;function Eh(n){ji===null?ji=[n]:ji.push(n)}function Yg(n){Do=!0,Eh(n)}function vr(){if(!Ic&&ji!==null){Ic=!0;var n=0,i=wt;try{var a=ji;for(wt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}ji=null,Do=!1}catch(d){throw ji!==null&&(ji=ji.slice(n+1)),Gr(ua,vr),d}finally{wt=i,Ic=!1}}return null}var Ts=[],bs=0,Uo=null,Fo=0,Jn=[],ei=0,Wr=null,Yi=1,qi="";function Xr(n,i){Ts[bs++]=Fo,Ts[bs++]=Uo,Uo=n,Fo=i}function Th(n,i,a){Jn[ei++]=Yi,Jn[ei++]=qi,Jn[ei++]=Wr,Wr=n;var c=Yi;n=qi;var d=32-He(c)-1;c&=~(1<<d),a+=1;var m=32-He(i)+d;if(30<m){var C=d-d%5;m=(c&(1<<C)-1).toString(32),c>>=C,d-=C,Yi=1<<32-He(i)+d|a<<d|c,qi=m+n}else Yi=1<<m|a<<d|c,qi=n}function Dc(n){n.return!==null&&(Xr(n,1),Th(n,1,0))}function Uc(n){for(;n===Uo;)Uo=Ts[--bs],Ts[bs]=null,Fo=Ts[--bs],Ts[bs]=null;for(;n===Wr;)Wr=Jn[--ei],Jn[ei]=null,qi=Jn[--ei],Jn[ei]=null,Yi=Jn[--ei],Jn[ei]=null}var Xn=null,jn=null,Yt=!1,gi=null;function bh(n,i){var a=ri(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Ah(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Xn=n,jn=mr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Xn=n,jn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Wr!==null?{id:Yi,overflow:qi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ri(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Xn=n,jn=null,!0):!1;default:return!1}}function Fc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function kc(n){if(Yt){var i=jn;if(i){var a=i;if(!Ah(n,i)){if(Fc(n))throw Error(t(418));i=mr(a.nextSibling);var c=Xn;i&&Ah(n,i)?bh(c,a):(n.flags=n.flags&-4097|2,Yt=!1,Xn=n)}}else{if(Fc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Yt=!1,Xn=n}}}function Ch(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Xn=n}function ko(n){if(n!==Xn)return!1;if(!Yt)return Ch(n),Yt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Cc(n.type,n.memoizedProps)),i&&(i=jn)){if(Fc(n))throw Rh(),Error(t(418));for(;i;)bh(n,i),i=mr(i.nextSibling)}if(Ch(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){jn=mr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}jn=null}}else jn=Xn?mr(n.stateNode.nextSibling):null;return!0}function Rh(){for(var n=jn;n;)n=mr(n.nextSibling)}function As(){jn=Xn=null,Yt=!1}function Oc(n){gi===null?gi=[n]:gi.push(n)}var qg=R.ReactCurrentBatchConfig;function Ra(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(C){var H=d.refs;C===null?delete H[m]:H[m]=C},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Oo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Ph(n){var i=n._init;return i(n._payload)}function Nh(n){function i(de,ie){if(n){var pe=de.deletions;pe===null?(de.deletions=[ie],de.flags|=16):pe.push(ie)}}function a(de,ie){if(!n)return null;for(;ie!==null;)i(de,ie),ie=ie.sibling;return null}function c(de,ie){for(de=new Map;ie!==null;)ie.key!==null?de.set(ie.key,ie):de.set(ie.index,ie),ie=ie.sibling;return de}function d(de,ie){return de=br(de,ie),de.index=0,de.sibling=null,de}function m(de,ie,pe){return de.index=pe,n?(pe=de.alternate,pe!==null?(pe=pe.index,pe<ie?(de.flags|=2,ie):pe):(de.flags|=2,ie)):(de.flags|=1048576,ie)}function C(de){return n&&de.alternate===null&&(de.flags|=2),de}function H(de,ie,pe,Le){return ie===null||ie.tag!==6?(ie=Ru(pe,de.mode,Le),ie.return=de,ie):(ie=d(ie,pe),ie.return=de,ie)}function Z(de,ie,pe,Le){var ot=pe.type;return ot===E?Re(de,ie,pe.props.children,Le,pe.key):ie!==null&&(ie.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===oe&&Ph(ot)===ie.type)?(Le=d(ie,pe.props),Le.ref=Ra(de,ie,pe),Le.return=de,Le):(Le=ll(pe.type,pe.key,pe.props,null,de.mode,Le),Le.ref=Ra(de,ie,pe),Le.return=de,Le)}function ve(de,ie,pe,Le){return ie===null||ie.tag!==4||ie.stateNode.containerInfo!==pe.containerInfo||ie.stateNode.implementation!==pe.implementation?(ie=Pu(pe,de.mode,Le),ie.return=de,ie):(ie=d(ie,pe.children||[]),ie.return=de,ie)}function Re(de,ie,pe,Le,ot){return ie===null||ie.tag!==7?(ie=Jr(pe,de.mode,Le,ot),ie.return=de,ie):(ie=d(ie,pe),ie.return=de,ie)}function Ne(de,ie,pe){if(typeof ie=="string"&&ie!==""||typeof ie=="number")return ie=Ru(""+ie,de.mode,pe),ie.return=de,ie;if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case I:return pe=ll(ie.type,ie.key,ie.props,null,de.mode,pe),pe.ref=Ra(de,null,ie),pe.return=de,pe;case P:return ie=Pu(ie,de.mode,pe),ie.return=de,ie;case oe:var Le=ie._init;return Ne(de,Le(ie._payload),pe)}if(dt(ie)||q(ie))return ie=Jr(ie,de.mode,pe,null),ie.return=de,ie;Oo(de,ie)}return null}function Ae(de,ie,pe,Le){var ot=ie!==null?ie.key:null;if(typeof pe=="string"&&pe!==""||typeof pe=="number")return ot!==null?null:H(de,ie,""+pe,Le);if(typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case I:return pe.key===ot?Z(de,ie,pe,Le):null;case P:return pe.key===ot?ve(de,ie,pe,Le):null;case oe:return ot=pe._init,Ae(de,ie,ot(pe._payload),Le)}if(dt(pe)||q(pe))return ot!==null?null:Re(de,ie,pe,Le,null);Oo(de,pe)}return null}function $e(de,ie,pe,Le,ot){if(typeof Le=="string"&&Le!==""||typeof Le=="number")return de=de.get(pe)||null,H(ie,de,""+Le,ot);if(typeof Le=="object"&&Le!==null){switch(Le.$$typeof){case I:return de=de.get(Le.key===null?pe:Le.key)||null,Z(ie,de,Le,ot);case P:return de=de.get(Le.key===null?pe:Le.key)||null,ve(ie,de,Le,ot);case oe:var ct=Le._init;return $e(de,ie,pe,ct(Le._payload),ot)}if(dt(Le)||q(Le))return de=de.get(pe)||null,Re(ie,de,Le,ot,null);Oo(ie,Le)}return null}function et(de,ie,pe,Le){for(var ot=null,ct=null,ut=ie,mt=ie=0,hn=null;ut!==null&&mt<pe.length;mt++){ut.index>mt?(hn=ut,ut=null):hn=ut.sibling;var Ft=Ae(de,ut,pe[mt],Le);if(Ft===null){ut===null&&(ut=hn);break}n&&ut&&Ft.alternate===null&&i(de,ut),ie=m(Ft,ie,mt),ct===null?ot=Ft:ct.sibling=Ft,ct=Ft,ut=hn}if(mt===pe.length)return a(de,ut),Yt&&Xr(de,mt),ot;if(ut===null){for(;mt<pe.length;mt++)ut=Ne(de,pe[mt],Le),ut!==null&&(ie=m(ut,ie,mt),ct===null?ot=ut:ct.sibling=ut,ct=ut);return Yt&&Xr(de,mt),ot}for(ut=c(de,ut);mt<pe.length;mt++)hn=$e(ut,de,mt,pe[mt],Le),hn!==null&&(n&&hn.alternate!==null&&ut.delete(hn.key===null?mt:hn.key),ie=m(hn,ie,mt),ct===null?ot=hn:ct.sibling=hn,ct=hn);return n&&ut.forEach(function(Ar){return i(de,Ar)}),Yt&&Xr(de,mt),ot}function nt(de,ie,pe,Le){var ot=q(pe);if(typeof ot!="function")throw Error(t(150));if(pe=ot.call(pe),pe==null)throw Error(t(151));for(var ct=ot=null,ut=ie,mt=ie=0,hn=null,Ft=pe.next();ut!==null&&!Ft.done;mt++,Ft=pe.next()){ut.index>mt?(hn=ut,ut=null):hn=ut.sibling;var Ar=Ae(de,ut,Ft.value,Le);if(Ar===null){ut===null&&(ut=hn);break}n&&ut&&Ar.alternate===null&&i(de,ut),ie=m(Ar,ie,mt),ct===null?ot=Ar:ct.sibling=Ar,ct=Ar,ut=hn}if(Ft.done)return a(de,ut),Yt&&Xr(de,mt),ot;if(ut===null){for(;!Ft.done;mt++,Ft=pe.next())Ft=Ne(de,Ft.value,Le),Ft!==null&&(ie=m(Ft,ie,mt),ct===null?ot=Ft:ct.sibling=Ft,ct=Ft);return Yt&&Xr(de,mt),ot}for(ut=c(de,ut);!Ft.done;mt++,Ft=pe.next())Ft=$e(ut,de,mt,Ft.value,Le),Ft!==null&&(n&&Ft.alternate!==null&&ut.delete(Ft.key===null?mt:Ft.key),ie=m(Ft,ie,mt),ct===null?ot=Ft:ct.sibling=Ft,ct=Ft);return n&&ut.forEach(function(Ax){return i(de,Ax)}),Yt&&Xr(de,mt),ot}function nn(de,ie,pe,Le){if(typeof pe=="object"&&pe!==null&&pe.type===E&&pe.key===null&&(pe=pe.props.children),typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case I:e:{for(var ot=pe.key,ct=ie;ct!==null;){if(ct.key===ot){if(ot=pe.type,ot===E){if(ct.tag===7){a(de,ct.sibling),ie=d(ct,pe.props.children),ie.return=de,de=ie;break e}}else if(ct.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===oe&&Ph(ot)===ct.type){a(de,ct.sibling),ie=d(ct,pe.props),ie.ref=Ra(de,ct,pe),ie.return=de,de=ie;break e}a(de,ct);break}else i(de,ct);ct=ct.sibling}pe.type===E?(ie=Jr(pe.props.children,de.mode,Le,pe.key),ie.return=de,de=ie):(Le=ll(pe.type,pe.key,pe.props,null,de.mode,Le),Le.ref=Ra(de,ie,pe),Le.return=de,de=Le)}return C(de);case P:e:{for(ct=pe.key;ie!==null;){if(ie.key===ct)if(ie.tag===4&&ie.stateNode.containerInfo===pe.containerInfo&&ie.stateNode.implementation===pe.implementation){a(de,ie.sibling),ie=d(ie,pe.children||[]),ie.return=de,de=ie;break e}else{a(de,ie);break}else i(de,ie);ie=ie.sibling}ie=Pu(pe,de.mode,Le),ie.return=de,de=ie}return C(de);case oe:return ct=pe._init,nn(de,ie,ct(pe._payload),Le)}if(dt(pe))return et(de,ie,pe,Le);if(q(pe))return nt(de,ie,pe,Le);Oo(de,pe)}return typeof pe=="string"&&pe!==""||typeof pe=="number"?(pe=""+pe,ie!==null&&ie.tag===6?(a(de,ie.sibling),ie=d(ie,pe),ie.return=de,de=ie):(a(de,ie),ie=Ru(pe,de.mode,Le),ie.return=de,de=ie),C(de)):a(de,ie)}return nn}var Cs=Nh(!0),Lh=Nh(!1),Bo=gr(null),zo=null,Rs=null,Bc=null;function zc(){Bc=Rs=zo=null}function Gc(n){var i=Bo.current;Xt(Bo),n._currentValue=i}function Hc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Ps(n,i){zo=n,Bc=Rs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(On=!0),n.firstContext=null)}function ti(n){var i=n._currentValue;if(Bc!==n)if(n={context:n,memoizedValue:i,next:null},Rs===null){if(zo===null)throw Error(t(308));Rs=n,zo.dependencies={lanes:0,firstContext:n}}else Rs=Rs.next=n;return i}var jr=null;function Vc(n){jr===null?jr=[n]:jr.push(n)}function Ih(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Vc(i)):(a.next=d.next,d.next=a),i.interleaved=a,$i(n,c)}function $i(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var _r=!1;function Wc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ki(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function yr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(It&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,$i(n,a)}return d=c.interleaved,d===null?(i.next=i,Vc(c)):(i.next=d.next,d.next=i),c.interleaved=i,$i(n,a)}function Go(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,yn(n,a)}}function Uh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var C={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=C:m=m.next=C,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Ho(n,i,a,c){var d=n.updateQueue;_r=!1;var m=d.firstBaseUpdate,C=d.lastBaseUpdate,H=d.shared.pending;if(H!==null){d.shared.pending=null;var Z=H,ve=Z.next;Z.next=null,C===null?m=ve:C.next=ve,C=Z;var Re=n.alternate;Re!==null&&(Re=Re.updateQueue,H=Re.lastBaseUpdate,H!==C&&(H===null?Re.firstBaseUpdate=ve:H.next=ve,Re.lastBaseUpdate=Z))}if(m!==null){var Ne=d.baseState;C=0,Re=ve=Z=null,H=m;do{var Ae=H.lane,$e=H.eventTime;if((c&Ae)===Ae){Re!==null&&(Re=Re.next={eventTime:$e,lane:0,tag:H.tag,payload:H.payload,callback:H.callback,next:null});e:{var et=n,nt=H;switch(Ae=i,$e=a,nt.tag){case 1:if(et=nt.payload,typeof et=="function"){Ne=et.call($e,Ne,Ae);break e}Ne=et;break e;case 3:et.flags=et.flags&-65537|128;case 0:if(et=nt.payload,Ae=typeof et=="function"?et.call($e,Ne,Ae):et,Ae==null)break e;Ne=B({},Ne,Ae);break e;case 2:_r=!0}}H.callback!==null&&H.lane!==0&&(n.flags|=64,Ae=d.effects,Ae===null?d.effects=[H]:Ae.push(H))}else $e={eventTime:$e,lane:Ae,tag:H.tag,payload:H.payload,callback:H.callback,next:null},Re===null?(ve=Re=$e,Z=Ne):Re=Re.next=$e,C|=Ae;if(H=H.next,H===null){if(H=d.shared.pending,H===null)break;Ae=H,H=Ae.next,Ae.next=null,d.lastBaseUpdate=Ae,d.shared.pending=null}}while(!0);if(Re===null&&(Z=Ne),d.baseState=Z,d.firstBaseUpdate=ve,d.lastBaseUpdate=Re,i=d.shared.interleaved,i!==null){d=i;do C|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);$r|=C,n.lanes=C,n.memoizedState=Ne}}function Fh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Pa={},Li=gr(Pa),Na=gr(Pa),La=gr(Pa);function Yr(n){if(n===Pa)throw Error(t(174));return n}function Xc(n,i){switch(Vt(La,i),Vt(Na,n),Vt(Li,Pa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:T(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=T(i,n)}Xt(Li),Vt(Li,i)}function Ns(){Xt(Li),Xt(Na),Xt(La)}function kh(n){Yr(La.current);var i=Yr(Li.current),a=T(i,n.type);i!==a&&(Vt(Na,n),Vt(Li,a))}function jc(n){Na.current===n&&(Xt(Li),Xt(Na))}var $t=gr(0);function Vo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Yc=[];function qc(){for(var n=0;n<Yc.length;n++)Yc[n]._workInProgressVersionPrimary=null;Yc.length=0}var Wo=R.ReactCurrentDispatcher,$c=R.ReactCurrentBatchConfig,qr=0,Kt=null,on=null,dn=null,Xo=!1,Ia=!1,Da=0,$g=0;function Mn(){throw Error(t(321))}function Kc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!mi(n[a],i[a]))return!1;return!0}function Zc(n,i,a,c,d,m){if(qr=m,Kt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Wo.current=n===null||n.memoizedState===null?Jg:ex,n=a(c,d),Ia){m=0;do{if(Ia=!1,Da=0,25<=m)throw Error(t(301));m+=1,dn=on=null,i.updateQueue=null,Wo.current=tx,n=a(c,d)}while(Ia)}if(Wo.current=qo,i=on!==null&&on.next!==null,qr=0,dn=on=Kt=null,Xo=!1,i)throw Error(t(300));return n}function Qc(){var n=Da!==0;return Da=0,n}function Ii(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?Kt.memoizedState=dn=n:dn=dn.next=n,dn}function ni(){if(on===null){var n=Kt.alternate;n=n!==null?n.memoizedState:null}else n=on.next;var i=dn===null?Kt.memoizedState:dn.next;if(i!==null)dn=i,on=n;else{if(n===null)throw Error(t(310));on=n,n={memoizedState:on.memoizedState,baseState:on.baseState,baseQueue:on.baseQueue,queue:on.queue,next:null},dn===null?Kt.memoizedState=dn=n:dn=dn.next=n}return dn}function Ua(n,i){return typeof i=="function"?i(n):i}function Jc(n){var i=ni(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=on,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var C=d.next;d.next=m.next,m.next=C}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var H=C=null,Z=null,ve=m;do{var Re=ve.lane;if((qr&Re)===Re)Z!==null&&(Z=Z.next={lane:0,action:ve.action,hasEagerState:ve.hasEagerState,eagerState:ve.eagerState,next:null}),c=ve.hasEagerState?ve.eagerState:n(c,ve.action);else{var Ne={lane:Re,action:ve.action,hasEagerState:ve.hasEagerState,eagerState:ve.eagerState,next:null};Z===null?(H=Z=Ne,C=c):Z=Z.next=Ne,Kt.lanes|=Re,$r|=Re}ve=ve.next}while(ve!==null&&ve!==m);Z===null?C=c:Z.next=H,mi(c,i.memoizedState)||(On=!0),i.memoizedState=c,i.baseState=C,i.baseQueue=Z,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,Kt.lanes|=m,$r|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function eu(n){var i=ni(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var C=d=d.next;do m=n(m,C.action),C=C.next;while(C!==d);mi(m,i.memoizedState)||(On=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function Oh(){}function Bh(n,i){var a=Kt,c=ni(),d=i(),m=!mi(c.memoizedState,d);if(m&&(c.memoizedState=d,On=!0),c=c.queue,tu(Hh.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||dn!==null&&dn.memoizedState.tag&1){if(a.flags|=2048,Fa(9,Gh.bind(null,a,c,d,i),void 0,null),fn===null)throw Error(t(349));(qr&30)!==0||zh(a,i,d)}return d}function zh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Kt.updateQueue,i===null?(i={lastEffect:null,stores:null},Kt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Gh(n,i,a,c){i.value=a,i.getSnapshot=c,Vh(i)&&Wh(n)}function Hh(n,i,a){return a(function(){Vh(i)&&Wh(n)})}function Vh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!mi(n,a)}catch{return!0}}function Wh(n){var i=$i(n,1);i!==null&&yi(i,n,1,-1)}function Xh(n){var i=Ii();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:n},i.queue=n,n=n.dispatch=Qg.bind(null,Kt,n),[i.memoizedState,n]}function Fa(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Kt.updateQueue,i===null?(i={lastEffect:null,stores:null},Kt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function jh(){return ni().memoizedState}function jo(n,i,a,c){var d=Ii();Kt.flags|=n,d.memoizedState=Fa(1|i,a,void 0,c===void 0?null:c)}function Yo(n,i,a,c){var d=ni();c=c===void 0?null:c;var m=void 0;if(on!==null){var C=on.memoizedState;if(m=C.destroy,c!==null&&Kc(c,C.deps)){d.memoizedState=Fa(i,a,m,c);return}}Kt.flags|=n,d.memoizedState=Fa(1|i,a,m,c)}function Yh(n,i){return jo(8390656,8,n,i)}function tu(n,i){return Yo(2048,8,n,i)}function qh(n,i){return Yo(4,2,n,i)}function $h(n,i){return Yo(4,4,n,i)}function Kh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Zh(n,i,a){return a=a!=null?a.concat([n]):null,Yo(4,4,Kh.bind(null,i,n),a)}function nu(){}function Qh(n,i){var a=ni();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Kc(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Jh(n,i){var a=ni();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Kc(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function ep(n,i,a){return(qr&21)===0?(n.baseState&&(n.baseState=!1,On=!0),n.memoizedState=a):(mi(a,i)||(a=an(),Kt.lanes|=a,$r|=a,n.baseState=!0),i)}function Kg(n,i){var a=wt;wt=a!==0&&4>a?a:4,n(!0);var c=$c.transition;$c.transition={};try{n(!1),i()}finally{wt=a,$c.transition=c}}function tp(){return ni().memoizedState}function Zg(n,i,a){var c=Er(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},np(n))ip(i,a);else if(a=Ih(n,i,a,c),a!==null){var d=Ln();yi(a,n,c,d),rp(a,i,c)}}function Qg(n,i,a){var c=Er(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(np(n))ip(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var C=i.lastRenderedState,H=m(C,a);if(d.hasEagerState=!0,d.eagerState=H,mi(H,C)){var Z=i.interleaved;Z===null?(d.next=d,Vc(i)):(d.next=Z.next,Z.next=d),i.interleaved=d;return}}catch{}finally{}a=Ih(n,i,d,c),a!==null&&(d=Ln(),yi(a,n,c,d),rp(a,i,c))}}function np(n){var i=n.alternate;return n===Kt||i!==null&&i===Kt}function ip(n,i){Ia=Xo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function rp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,yn(n,a)}}var qo={readContext:ti,useCallback:Mn,useContext:Mn,useEffect:Mn,useImperativeHandle:Mn,useInsertionEffect:Mn,useLayoutEffect:Mn,useMemo:Mn,useReducer:Mn,useRef:Mn,useState:Mn,useDebugValue:Mn,useDeferredValue:Mn,useTransition:Mn,useMutableSource:Mn,useSyncExternalStore:Mn,useId:Mn,unstable_isNewReconciler:!1},Jg={readContext:ti,useCallback:function(n,i){return Ii().memoizedState=[n,i===void 0?null:i],n},useContext:ti,useEffect:Yh,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,jo(4194308,4,Kh.bind(null,i,n),a)},useLayoutEffect:function(n,i){return jo(4194308,4,n,i)},useInsertionEffect:function(n,i){return jo(4,2,n,i)},useMemo:function(n,i){var a=Ii();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Ii();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Zg.bind(null,Kt,n),[c.memoizedState,n]},useRef:function(n){var i=Ii();return n={current:n},i.memoizedState=n},useState:Xh,useDebugValue:nu,useDeferredValue:function(n){return Ii().memoizedState=n},useTransition:function(){var n=Xh(!1),i=n[0];return n=Kg.bind(null,n[1]),Ii().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Kt,d=Ii();if(Yt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),fn===null)throw Error(t(349));(qr&30)!==0||zh(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,Yh(Hh.bind(null,c,m,n),[n]),c.flags|=2048,Fa(9,Gh.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=Ii(),i=fn.identifierPrefix;if(Yt){var a=qi,c=Yi;a=(c&~(1<<32-He(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Da++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=$g++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},ex={readContext:ti,useCallback:Qh,useContext:ti,useEffect:tu,useImperativeHandle:Zh,useInsertionEffect:qh,useLayoutEffect:$h,useMemo:Jh,useReducer:Jc,useRef:jh,useState:function(){return Jc(Ua)},useDebugValue:nu,useDeferredValue:function(n){var i=ni();return ep(i,on.memoizedState,n)},useTransition:function(){var n=Jc(Ua)[0],i=ni().memoizedState;return[n,i]},useMutableSource:Oh,useSyncExternalStore:Bh,useId:tp,unstable_isNewReconciler:!1},tx={readContext:ti,useCallback:Qh,useContext:ti,useEffect:tu,useImperativeHandle:Zh,useInsertionEffect:qh,useLayoutEffect:$h,useMemo:Jh,useReducer:eu,useRef:jh,useState:function(){return eu(Ua)},useDebugValue:nu,useDeferredValue:function(n){var i=ni();return on===null?i.memoizedState=n:ep(i,on.memoizedState,n)},useTransition:function(){var n=eu(Ua)[0],i=ni().memoizedState;return[n,i]},useMutableSource:Oh,useSyncExternalStore:Bh,useId:tp,unstable_isNewReconciler:!1};function xi(n,i){if(n&&n.defaultProps){i=B({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function iu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:B({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var $o={isMounted:function(n){return(n=n._reactInternals)?Pn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Ln(),d=Er(n),m=Ki(c,d);m.payload=i,a!=null&&(m.callback=a),i=yr(n,m,d),i!==null&&(yi(i,n,d,c),Go(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Ln(),d=Er(n),m=Ki(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=yr(n,m,d),i!==null&&(yi(i,n,d,c),Go(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Ln(),c=Er(n),d=Ki(a,c);d.tag=2,i!=null&&(d.callback=i),i=yr(n,d,c),i!==null&&(yi(i,n,c,a),Go(i,n,c))}};function sp(n,i,a,c,d,m,C){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,C):i.prototype&&i.prototype.isPureReactComponent?!Ma(a,c)||!Ma(d,m):!0}function ap(n,i,a){var c=!1,d=xr,m=i.contextType;return typeof m=="object"&&m!==null?m=ti(m):(d=kn(i)?Vr:Sn.current,c=i.contextTypes,m=(c=c!=null)?Es(n,d):xr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=$o,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function op(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&$o.enqueueReplaceState(i,i.state,null)}function ru(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Wc(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=ti(m):(m=kn(i)?Vr:Sn.current,d.context=Es(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(iu(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&$o.enqueueReplaceState(d,d.state,null),Ho(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Ls(n,i){try{var a="",c=i;do a+=Ce(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function su(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function au(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var nx=typeof WeakMap=="function"?WeakMap:Map;function lp(n,i,a){a=Ki(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){nl||(nl=!0,Su=c),au(n,i)},a}function cp(n,i,a){a=Ki(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){au(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){au(n,i),typeof c!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var C=i.stack;this.componentDidCatch(i.value,{componentStack:C!==null?C:""})}),a}function up(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new nx;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=gx.bind(null,n,i,a),i.then(n,n))}function dp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function fp(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ki(-1,1),i.tag=2,yr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var ix=R.ReactCurrentOwner,On=!1;function Nn(n,i,a,c){i.child=n===null?Lh(i,null,a,c):Cs(i,n.child,a,c)}function hp(n,i,a,c,d){a=a.render;var m=i.ref;return Ps(i,d),c=Zc(n,i,a,c,m,d),a=Qc(),n!==null&&!On?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Zi(n,i,d)):(Yt&&a&&Dc(i),i.flags|=1,Nn(n,i,c,d),i.child)}function pp(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!Cu(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,mp(n,i,m,c,d)):(n=ll(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var C=m.memoizedProps;if(a=a.compare,a=a!==null?a:Ma,a(C,c)&&n.ref===i.ref)return Zi(n,i,d)}return i.flags|=1,n=br(m,c),n.ref=i.ref,n.return=i,i.child=n}function mp(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(Ma(m,c)&&n.ref===i.ref)if(On=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(On=!0);else return i.lanes=n.lanes,Zi(n,i,d)}return ou(n,i,a,c,d)}function gp(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Vt(Ds,Yn),Yn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Vt(Ds,Yn),Yn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,Vt(Ds,Yn),Yn|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,Vt(Ds,Yn),Yn|=c;return Nn(n,i,d,a),i.child}function xp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function ou(n,i,a,c,d){var m=kn(a)?Vr:Sn.current;return m=Es(i,m),Ps(i,d),a=Zc(n,i,a,c,m,d),c=Qc(),n!==null&&!On?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Zi(n,i,d)):(Yt&&c&&Dc(i),i.flags|=1,Nn(n,i,a,d),i.child)}function vp(n,i,a,c,d){if(kn(a)){var m=!0;Io(i)}else m=!1;if(Ps(i,d),i.stateNode===null)Zo(n,i),ap(i,a,c),ru(i,a,c,d),c=!0;else if(n===null){var C=i.stateNode,H=i.memoizedProps;C.props=H;var Z=C.context,ve=a.contextType;typeof ve=="object"&&ve!==null?ve=ti(ve):(ve=kn(a)?Vr:Sn.current,ve=Es(i,ve));var Re=a.getDerivedStateFromProps,Ne=typeof Re=="function"||typeof C.getSnapshotBeforeUpdate=="function";Ne||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(H!==c||Z!==ve)&&op(i,C,c,ve),_r=!1;var Ae=i.memoizedState;C.state=Ae,Ho(i,c,C,d),Z=i.memoizedState,H!==c||Ae!==Z||Fn.current||_r?(typeof Re=="function"&&(iu(i,a,Re,c),Z=i.memoizedState),(H=_r||sp(i,a,H,c,Ae,Z,ve))?(Ne||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(i.flags|=4194308)):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=Z),C.props=c,C.state=Z,C.context=ve,c=H):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{C=i.stateNode,Dh(n,i),H=i.memoizedProps,ve=i.type===i.elementType?H:xi(i.type,H),C.props=ve,Ne=i.pendingProps,Ae=C.context,Z=a.contextType,typeof Z=="object"&&Z!==null?Z=ti(Z):(Z=kn(a)?Vr:Sn.current,Z=Es(i,Z));var $e=a.getDerivedStateFromProps;(Re=typeof $e=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(H!==Ne||Ae!==Z)&&op(i,C,c,Z),_r=!1,Ae=i.memoizedState,C.state=Ae,Ho(i,c,C,d);var et=i.memoizedState;H!==Ne||Ae!==et||Fn.current||_r?(typeof $e=="function"&&(iu(i,a,$e,c),et=i.memoizedState),(ve=_r||sp(i,a,ve,c,Ae,et,Z)||!1)?(Re||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(c,et,Z),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(c,et,Z)),typeof C.componentDidUpdate=="function"&&(i.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof C.componentDidUpdate!="function"||H===n.memoizedProps&&Ae===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||H===n.memoizedProps&&Ae===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=et),C.props=c,C.state=et,C.context=Z,c=ve):(typeof C.componentDidUpdate!="function"||H===n.memoizedProps&&Ae===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||H===n.memoizedProps&&Ae===n.memoizedState||(i.flags|=1024),c=!1)}return lu(n,i,a,c,m,d)}function lu(n,i,a,c,d,m){xp(n,i);var C=(i.flags&128)!==0;if(!c&&!C)return d&&wh(i,a,!1),Zi(n,i,m);c=i.stateNode,ix.current=i;var H=C&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&C?(i.child=Cs(i,n.child,null,m),i.child=Cs(i,null,H,m)):Nn(n,i,H,m),i.memoizedState=c.state,d&&wh(i,a,!0),i.child}function _p(n){var i=n.stateNode;i.pendingContext?Sh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Sh(n,i.context,!1),Xc(n,i.containerInfo)}function yp(n,i,a,c,d){return As(),Oc(d),i.flags|=256,Nn(n,i,a,c),i.child}var cu={dehydrated:null,treeContext:null,retryLane:0};function uu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Sp(n,i,a){var c=i.pendingProps,d=$t.current,m=!1,C=(i.flags&128)!==0,H;if((H=C)||(H=n!==null&&n.memoizedState===null?!1:(d&2)!==0),H?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Vt($t,d&1),n===null)return kc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(C=c.children,n=c.fallback,m?(c=i.mode,m=i.child,C={mode:"hidden",children:C},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=C):m=cl(C,c,0,null),n=Jr(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=uu(a),i.memoizedState=cu,n):du(i,C));if(d=n.memoizedState,d!==null&&(H=d.dehydrated,H!==null))return rx(n,i,C,c,H,d,a);if(m){m=c.fallback,C=i.mode,d=n.child,H=d.sibling;var Z={mode:"hidden",children:c.children};return(C&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=Z,i.deletions=null):(c=br(d,Z),c.subtreeFlags=d.subtreeFlags&14680064),H!==null?m=br(H,m):(m=Jr(m,C,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,C=n.child.memoizedState,C=C===null?uu(a):{baseLanes:C.baseLanes|a,cachePool:null,transitions:C.transitions},m.memoizedState=C,m.childLanes=n.childLanes&~a,i.memoizedState=cu,c}return m=n.child,n=m.sibling,c=br(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function du(n,i){return i=cl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Ko(n,i,a,c){return c!==null&&Oc(c),Cs(i,n.child,null,a),n=du(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function rx(n,i,a,c,d,m,C){if(a)return i.flags&256?(i.flags&=-257,c=su(Error(t(422))),Ko(n,i,C,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=cl({mode:"visible",children:c.children},d,0,null),m=Jr(m,d,C,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&Cs(i,n.child,null,C),i.child.memoizedState=uu(C),i.memoizedState=cu,m);if((i.mode&1)===0)return Ko(n,i,C,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var H=c.dgst;return c=H,m=Error(t(419)),c=su(m,c,void 0),Ko(n,i,C,c)}if(H=(C&n.childLanes)!==0,On||H){if(c=fn,c!==null){switch(C&-C){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|C))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,$i(n,d),yi(c,n,d,-1))}return Au(),c=su(Error(t(421))),Ko(n,i,C,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=xx.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,jn=mr(d.nextSibling),Xn=i,Yt=!0,gi=null,n!==null&&(Jn[ei++]=Yi,Jn[ei++]=qi,Jn[ei++]=Wr,Yi=n.id,qi=n.overflow,Wr=i),i=du(i,c.children),i.flags|=4096,i)}function Mp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Hc(n.return,i,a)}function fu(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function wp(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(Nn(n,i,c.children,a),c=$t.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Mp(n,a,i);else if(n.tag===19)Mp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Vt($t,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Vo(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),fu(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Vo(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}fu(i,!0,a,null,m);break;case"together":fu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Zo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Zi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),$r|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=br(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=br(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function sx(n,i,a){switch(i.tag){case 3:_p(i),As();break;case 5:kh(i);break;case 1:kn(i.type)&&Io(i);break;case 4:Xc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Vt(Bo,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Vt($t,$t.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Sp(n,i,a):(Vt($t,$t.current&1),n=Zi(n,i,a),n!==null?n.sibling:null);Vt($t,$t.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return wp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Vt($t,$t.current),c)break;return null;case 22:case 23:return i.lanes=0,gp(n,i,a)}return Zi(n,i,a)}var Ep,hu,Tp,bp;Ep=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},hu=function(){},Tp=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Yr(Li.current);var m=null;switch(a){case"input":d=me(n,d),c=me(n,c),m=[];break;case"select":d=B({},d,{value:void 0}),c=B({},c,{value:void 0}),m=[];break;case"textarea":d=St(n,d),c=St(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Po)}it(a,c);var C;a=null;for(ve in d)if(!c.hasOwnProperty(ve)&&d.hasOwnProperty(ve)&&d[ve]!=null)if(ve==="style"){var H=d[ve];for(C in H)H.hasOwnProperty(C)&&(a||(a={}),a[C]="")}else ve!=="dangerouslySetInnerHTML"&&ve!=="children"&&ve!=="suppressContentEditableWarning"&&ve!=="suppressHydrationWarning"&&ve!=="autoFocus"&&(o.hasOwnProperty(ve)?m||(m=[]):(m=m||[]).push(ve,null));for(ve in c){var Z=c[ve];if(H=d!=null?d[ve]:void 0,c.hasOwnProperty(ve)&&Z!==H&&(Z!=null||H!=null))if(ve==="style")if(H){for(C in H)!H.hasOwnProperty(C)||Z&&Z.hasOwnProperty(C)||(a||(a={}),a[C]="");for(C in Z)Z.hasOwnProperty(C)&&H[C]!==Z[C]&&(a||(a={}),a[C]=Z[C])}else a||(m||(m=[]),m.push(ve,a)),a=Z;else ve==="dangerouslySetInnerHTML"?(Z=Z?Z.__html:void 0,H=H?H.__html:void 0,Z!=null&&H!==Z&&(m=m||[]).push(ve,Z)):ve==="children"?typeof Z!="string"&&typeof Z!="number"||(m=m||[]).push(ve,""+Z):ve!=="suppressContentEditableWarning"&&ve!=="suppressHydrationWarning"&&(o.hasOwnProperty(ve)?(Z!=null&&ve==="onScroll"&&Wt("scroll",n),m||H===Z||(m=[])):(m=m||[]).push(ve,Z))}a&&(m=m||[]).push("style",a);var ve=m;(i.updateQueue=ve)&&(i.flags|=4)}},bp=function(n,i,a,c){a!==c&&(i.flags|=4)};function ka(n,i){if(!Yt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function wn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function ax(n,i,a){var c=i.pendingProps;switch(Uc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wn(i),null;case 1:return kn(i.type)&&Lo(),wn(i),null;case 3:return c=i.stateNode,Ns(),Xt(Fn),Xt(Sn),qc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(ko(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,gi!==null&&(Eu(gi),gi=null))),hu(n,i),wn(i),null;case 5:jc(i);var d=Yr(La.current);if(a=i.type,n!==null&&i.stateNode!=null)Tp(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return wn(i),null}if(n=Yr(Li.current),ko(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[Ni]=i,c[Aa]=m,n=(i.mode&1)!==0,a){case"dialog":Wt("cancel",c),Wt("close",c);break;case"iframe":case"object":case"embed":Wt("load",c);break;case"video":case"audio":for(d=0;d<Ea.length;d++)Wt(Ea[d],c);break;case"source":Wt("error",c);break;case"img":case"image":case"link":Wt("error",c),Wt("load",c);break;case"details":Wt("toggle",c);break;case"input":Fe(c,m),Wt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Wt("invalid",c);break;case"textarea":K(c,m),Wt("invalid",c)}it(a,m),d=null;for(var C in m)if(m.hasOwnProperty(C)){var H=m[C];C==="children"?typeof H=="string"?c.textContent!==H&&(m.suppressHydrationWarning!==!0&&Ro(c.textContent,H,n),d=["children",H]):typeof H=="number"&&c.textContent!==""+H&&(m.suppressHydrationWarning!==!0&&Ro(c.textContent,H,n),d=["children",""+H]):o.hasOwnProperty(C)&&H!=null&&C==="onScroll"&&Wt("scroll",c)}switch(a){case"input":ge(c),Ve(c,m,!0);break;case"textarea":ge(c),Mt(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Po)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{C=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=G(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=C.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=C.createElement(a,{is:c.is}):(n=C.createElement(a),a==="select"&&(C=n,c.multiple?C.multiple=!0:c.size&&(C.size=c.size))):n=C.createElementNS(n,a),n[Ni]=i,n[Aa]=c,Ep(n,i,!1,!1),i.stateNode=n;e:{switch(C=Ge(a,c),a){case"dialog":Wt("cancel",n),Wt("close",n),d=c;break;case"iframe":case"object":case"embed":Wt("load",n),d=c;break;case"video":case"audio":for(d=0;d<Ea.length;d++)Wt(Ea[d],n);d=c;break;case"source":Wt("error",n),d=c;break;case"img":case"image":case"link":Wt("error",n),Wt("load",n),d=c;break;case"details":Wt("toggle",n),d=c;break;case"input":Fe(n,c),d=me(n,c),Wt("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=B({},c,{value:void 0}),Wt("invalid",n);break;case"textarea":K(n,c),d=St(n,c),Wt("invalid",n);break;default:d=c}it(a,d),H=d;for(m in H)if(H.hasOwnProperty(m)){var Z=H[m];m==="style"?we(n,Z):m==="dangerouslySetInnerHTML"?(Z=Z?Z.__html:void 0,Z!=null&&ue(n,Z)):m==="children"?typeof Z=="string"?(a!=="textarea"||Z!=="")&&le(n,Z):typeof Z=="number"&&le(n,""+Z):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?Z!=null&&m==="onScroll"&&Wt("scroll",n):Z!=null&&z(n,m,Z,C))}switch(a){case"input":ge(n),Ve(n,c,!1);break;case"textarea":ge(n),Mt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+k(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?ft(n,!!c.multiple,m,!1):c.defaultValue!=null&&ft(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Po)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return wn(i),null;case 6:if(n&&i.stateNode!=null)bp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Yr(La.current),Yr(Li.current),ko(i)){if(c=i.stateNode,a=i.memoizedProps,c[Ni]=i,(m=c.nodeValue!==a)&&(n=Xn,n!==null))switch(n.tag){case 3:Ro(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ro(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Ni]=i,i.stateNode=c}return wn(i),null;case 13:if(Xt($t),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Yt&&jn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Rh(),As(),i.flags|=98560,m=!1;else if(m=ko(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Ni]=i}else As(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;wn(i),m=!1}else gi!==null&&(Eu(gi),gi=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||($t.current&1)!==0?ln===0&&(ln=3):Au())),i.updateQueue!==null&&(i.flags|=4),wn(i),null);case 4:return Ns(),hu(n,i),n===null&&Ta(i.stateNode.containerInfo),wn(i),null;case 10:return Gc(i.type._context),wn(i),null;case 17:return kn(i.type)&&Lo(),wn(i),null;case 19:if(Xt($t),m=i.memoizedState,m===null)return wn(i),null;if(c=(i.flags&128)!==0,C=m.rendering,C===null)if(c)ka(m,!1);else{if(ln!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(C=Vo(n),C!==null){for(i.flags|=128,ka(m,!1),c=C.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,C=m.alternate,C===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=C.childLanes,m.lanes=C.lanes,m.child=C.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=C.memoizedProps,m.memoizedState=C.memoizedState,m.updateQueue=C.updateQueue,m.type=C.type,n=C.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Vt($t,$t.current&1|2),i.child}n=n.sibling}m.tail!==null&&qt()>Us&&(i.flags|=128,c=!0,ka(m,!1),i.lanes=4194304)}else{if(!c)if(n=Vo(C),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),ka(m,!0),m.tail===null&&m.tailMode==="hidden"&&!C.alternate&&!Yt)return wn(i),null}else 2*qt()-m.renderingStartTime>Us&&a!==1073741824&&(i.flags|=128,c=!0,ka(m,!1),i.lanes=4194304);m.isBackwards?(C.sibling=i.child,i.child=C):(a=m.last,a!==null?a.sibling=C:i.child=C,m.last=C)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=qt(),i.sibling=null,a=$t.current,Vt($t,c?a&1|2:a&1),i):(wn(i),null);case 22:case 23:return bu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Yn&1073741824)!==0&&(wn(i),i.subtreeFlags&6&&(i.flags|=8192)):wn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function ox(n,i){switch(Uc(i),i.tag){case 1:return kn(i.type)&&Lo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ns(),Xt(Fn),Xt(Sn),qc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return jc(i),null;case 13:if(Xt($t),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));As()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Xt($t),null;case 4:return Ns(),null;case 10:return Gc(i.type._context),null;case 22:case 23:return bu(),null;case 24:return null;default:return null}}var Qo=!1,En=!1,lx=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function Is(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Jt(n,i,c)}else a.current=null}function pu(n,i,a){try{a()}catch(c){Jt(n,i,c)}}var Ap=!1;function cx(n,i){if(bc=vo,n=sh(),vc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var C=0,H=-1,Z=-1,ve=0,Re=0,Ne=n,Ae=null;t:for(;;){for(var $e;Ne!==a||d!==0&&Ne.nodeType!==3||(H=C+d),Ne!==m||c!==0&&Ne.nodeType!==3||(Z=C+c),Ne.nodeType===3&&(C+=Ne.nodeValue.length),($e=Ne.firstChild)!==null;)Ae=Ne,Ne=$e;for(;;){if(Ne===n)break t;if(Ae===a&&++ve===d&&(H=C),Ae===m&&++Re===c&&(Z=C),($e=Ne.nextSibling)!==null)break;Ne=Ae,Ae=Ne.parentNode}Ne=$e}a=H===-1||Z===-1?null:{start:H,end:Z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ac={focusedElem:n,selectionRange:a},vo=!1,Qe=i;Qe!==null;)if(i=Qe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Qe=n;else for(;Qe!==null;){i=Qe;try{var et=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(et!==null){var nt=et.memoizedProps,nn=et.memoizedState,de=i.stateNode,ie=de.getSnapshotBeforeUpdate(i.elementType===i.type?nt:xi(i.type,nt),nn);de.__reactInternalSnapshotBeforeUpdate=ie}break;case 3:var pe=i.stateNode.containerInfo;pe.nodeType===1?pe.textContent="":pe.nodeType===9&&pe.documentElement&&pe.removeChild(pe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Le){Jt(i,i.return,Le)}if(n=i.sibling,n!==null){n.return=i.return,Qe=n;break}Qe=i.return}return et=Ap,Ap=!1,et}function Oa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&pu(i,a,m)}d=d.next}while(d!==c)}}function Jo(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function mu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Cp(n){var i=n.alternate;i!==null&&(n.alternate=null,Cp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ni],delete i[Aa],delete i[Nc],delete i[Xg],delete i[jg])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Rp(n){return n.tag===5||n.tag===3||n.tag===4}function Pp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Rp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function gu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Po));else if(c!==4&&(n=n.child,n!==null))for(gu(n,i,a),n=n.sibling;n!==null;)gu(n,i,a),n=n.sibling}function xu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(xu(n,i,a),n=n.sibling;n!==null;)xu(n,i,a),n=n.sibling}var xn=null,vi=!1;function Sr(n,i,a){for(a=a.child;a!==null;)Np(n,i,a),a=a.sibling}function Np(n,i,a){if(ae&&typeof ae.onCommitFiberUnmount=="function")try{ae.onCommitFiberUnmount(ce,a)}catch{}switch(a.tag){case 5:En||Is(a,i);case 6:var c=xn,d=vi;xn=null,Sr(n,i,a),xn=c,vi=d,xn!==null&&(vi?(n=xn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):xn.removeChild(a.stateNode));break;case 18:xn!==null&&(vi?(n=xn,a=a.stateNode,n.nodeType===8?Pc(n.parentNode,a):n.nodeType===1&&Pc(n,a),ga(n)):Pc(xn,a.stateNode));break;case 4:c=xn,d=vi,xn=a.stateNode.containerInfo,vi=!0,Sr(n,i,a),xn=c,vi=d;break;case 0:case 11:case 14:case 15:if(!En&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,C=m.destroy;m=m.tag,C!==void 0&&((m&2)!==0||(m&4)!==0)&&pu(a,i,C),d=d.next}while(d!==c)}Sr(n,i,a);break;case 1:if(!En&&(Is(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(H){Jt(a,i,H)}Sr(n,i,a);break;case 21:Sr(n,i,a);break;case 22:a.mode&1?(En=(c=En)||a.memoizedState!==null,Sr(n,i,a),En=c):Sr(n,i,a);break;default:Sr(n,i,a)}}function Lp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new lx),i.forEach(function(c){var d=vx.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function _i(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,C=i,H=C;e:for(;H!==null;){switch(H.tag){case 5:xn=H.stateNode,vi=!1;break e;case 3:xn=H.stateNode.containerInfo,vi=!0;break e;case 4:xn=H.stateNode.containerInfo,vi=!0;break e}H=H.return}if(xn===null)throw Error(t(160));Np(m,C,d),xn=null,vi=!1;var Z=d.alternate;Z!==null&&(Z.return=null),d.return=null}catch(ve){Jt(d,i,ve)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Ip(i,n),i=i.sibling}function Ip(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(_i(i,n),Di(n),c&4){try{Oa(3,n,n.return),Jo(3,n)}catch(nt){Jt(n,n.return,nt)}try{Oa(5,n,n.return)}catch(nt){Jt(n,n.return,nt)}}break;case 1:_i(i,n),Di(n),c&512&&a!==null&&Is(a,a.return);break;case 5:if(_i(i,n),Di(n),c&512&&a!==null&&Is(a,a.return),n.flags&32){var d=n.stateNode;try{le(d,"")}catch(nt){Jt(n,n.return,nt)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,C=a!==null?a.memoizedProps:m,H=n.type,Z=n.updateQueue;if(n.updateQueue=null,Z!==null)try{H==="input"&&m.type==="radio"&&m.name!=null&&Ze(d,m),Ge(H,C);var ve=Ge(H,m);for(C=0;C<Z.length;C+=2){var Re=Z[C],Ne=Z[C+1];Re==="style"?we(d,Ne):Re==="dangerouslySetInnerHTML"?ue(d,Ne):Re==="children"?le(d,Ne):z(d,Re,Ne,ve)}switch(H){case"input":Ue(d,m);break;case"textarea":Ht(d,m);break;case"select":var Ae=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var $e=m.value;$e!=null?ft(d,!!m.multiple,$e,!1):Ae!==!!m.multiple&&(m.defaultValue!=null?ft(d,!!m.multiple,m.defaultValue,!0):ft(d,!!m.multiple,m.multiple?[]:"",!1))}d[Aa]=m}catch(nt){Jt(n,n.return,nt)}}break;case 6:if(_i(i,n),Di(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(nt){Jt(n,n.return,nt)}}break;case 3:if(_i(i,n),Di(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ga(i.containerInfo)}catch(nt){Jt(n,n.return,nt)}break;case 4:_i(i,n),Di(n);break;case 13:_i(i,n),Di(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(yu=qt())),c&4&&Lp(n);break;case 22:if(Re=a!==null&&a.memoizedState!==null,n.mode&1?(En=(ve=En)||Re,_i(i,n),En=ve):_i(i,n),Di(n),c&8192){if(ve=n.memoizedState!==null,(n.stateNode.isHidden=ve)&&!Re&&(n.mode&1)!==0)for(Qe=n,Re=n.child;Re!==null;){for(Ne=Qe=Re;Qe!==null;){switch(Ae=Qe,$e=Ae.child,Ae.tag){case 0:case 11:case 14:case 15:Oa(4,Ae,Ae.return);break;case 1:Is(Ae,Ae.return);var et=Ae.stateNode;if(typeof et.componentWillUnmount=="function"){c=Ae,a=Ae.return;try{i=c,et.props=i.memoizedProps,et.state=i.memoizedState,et.componentWillUnmount()}catch(nt){Jt(c,a,nt)}}break;case 5:Is(Ae,Ae.return);break;case 22:if(Ae.memoizedState!==null){Fp(Ne);continue}}$e!==null?($e.return=Ae,Qe=$e):Fp(Ne)}Re=Re.sibling}e:for(Re=null,Ne=n;;){if(Ne.tag===5){if(Re===null){Re=Ne;try{d=Ne.stateNode,ve?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(H=Ne.stateNode,Z=Ne.memoizedProps.style,C=Z!=null&&Z.hasOwnProperty("display")?Z.display:null,H.style.display=ye("display",C))}catch(nt){Jt(n,n.return,nt)}}}else if(Ne.tag===6){if(Re===null)try{Ne.stateNode.nodeValue=ve?"":Ne.memoizedProps}catch(nt){Jt(n,n.return,nt)}}else if((Ne.tag!==22&&Ne.tag!==23||Ne.memoizedState===null||Ne===n)&&Ne.child!==null){Ne.child.return=Ne,Ne=Ne.child;continue}if(Ne===n)break e;for(;Ne.sibling===null;){if(Ne.return===null||Ne.return===n)break e;Re===Ne&&(Re=null),Ne=Ne.return}Re===Ne&&(Re=null),Ne.sibling.return=Ne.return,Ne=Ne.sibling}}break;case 19:_i(i,n),Di(n),c&4&&Lp(n);break;case 21:break;default:_i(i,n),Di(n)}}function Di(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Rp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(le(d,""),c.flags&=-33);var m=Pp(n);xu(n,m,d);break;case 3:case 4:var C=c.stateNode.containerInfo,H=Pp(n);gu(n,H,C);break;default:throw Error(t(161))}}catch(Z){Jt(n,n.return,Z)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function ux(n,i,a){Qe=n,Dp(n)}function Dp(n,i,a){for(var c=(n.mode&1)!==0;Qe!==null;){var d=Qe,m=d.child;if(d.tag===22&&c){var C=d.memoizedState!==null||Qo;if(!C){var H=d.alternate,Z=H!==null&&H.memoizedState!==null||En;H=Qo;var ve=En;if(Qo=C,(En=Z)&&!ve)for(Qe=d;Qe!==null;)C=Qe,Z=C.child,C.tag===22&&C.memoizedState!==null?kp(d):Z!==null?(Z.return=C,Qe=Z):kp(d);for(;m!==null;)Qe=m,Dp(m),m=m.sibling;Qe=d,Qo=H,En=ve}Up(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,Qe=m):Up(n)}}function Up(n){for(;Qe!==null;){var i=Qe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:En||Jo(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!En)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:xi(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Fh(i,m,c);break;case 3:var C=i.updateQueue;if(C!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Fh(i,C,a)}break;case 5:var H=i.stateNode;if(a===null&&i.flags&4){a=H;var Z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":Z.autoFocus&&a.focus();break;case"img":Z.src&&(a.src=Z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ve=i.alternate;if(ve!==null){var Re=ve.memoizedState;if(Re!==null){var Ne=Re.dehydrated;Ne!==null&&ga(Ne)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}En||i.flags&512&&mu(i)}catch(Ae){Jt(i,i.return,Ae)}}if(i===n){Qe=null;break}if(a=i.sibling,a!==null){a.return=i.return,Qe=a;break}Qe=i.return}}function Fp(n){for(;Qe!==null;){var i=Qe;if(i===n){Qe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Qe=a;break}Qe=i.return}}function kp(n){for(;Qe!==null;){var i=Qe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Jo(4,i)}catch(Z){Jt(i,a,Z)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(Z){Jt(i,d,Z)}}var m=i.return;try{mu(i)}catch(Z){Jt(i,m,Z)}break;case 5:var C=i.return;try{mu(i)}catch(Z){Jt(i,C,Z)}}}catch(Z){Jt(i,i.return,Z)}if(i===n){Qe=null;break}var H=i.sibling;if(H!==null){H.return=i.return,Qe=H;break}Qe=i.return}}var dx=Math.ceil,el=R.ReactCurrentDispatcher,vu=R.ReactCurrentOwner,ii=R.ReactCurrentBatchConfig,It=0,fn=null,rn=null,vn=0,Yn=0,Ds=gr(0),ln=0,Ba=null,$r=0,tl=0,_u=0,za=null,Bn=null,yu=0,Us=1/0,Qi=null,nl=!1,Su=null,Mr=null,il=!1,wr=null,rl=0,Ga=0,Mu=null,sl=-1,al=0;function Ln(){return(It&6)!==0?qt():sl!==-1?sl:sl=qt()}function Er(n){return(n.mode&1)===0?1:(It&2)!==0&&vn!==0?vn&-vn:qg.transition!==null?(al===0&&(al=an()),al):(n=wt,n!==0||(n=window.event,n=n===void 0?16:Bf(n.type)),n)}function yi(n,i,a,c){if(50<Ga)throw Ga=0,Mu=null,Error(t(185));tn(n,a,c),((It&2)===0||n!==fn)&&(n===fn&&((It&2)===0&&(tl|=a),ln===4&&Tr(n,vn)),zn(n,c),a===1&&It===0&&(i.mode&1)===0&&(Us=qt()+500,Do&&vr()))}function zn(n,i){var a=n.callbackNode;Gt(n,i);var c=At(n,n===fn?vn:0);if(c===0)a!==null&&ca(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&ca(a),i===1)n.tag===0?Yg(Bp.bind(null,n)):Eh(Bp.bind(null,n)),Vg(function(){(It&6)===0&&vr()}),a=null;else{switch(di(c)){case 1:a=ua;break;case 4:a=da;break;case 16:a=N;break;case 536870912:a=xe;break;default:a=N}a=Yp(a,Op.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Op(n,i){if(sl=-1,al=0,(It&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Fs()&&n.callbackNode!==a)return null;var c=At(n,n===fn?vn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=ol(n,c);else{i=c;var d=It;It|=2;var m=Gp();(fn!==n||vn!==i)&&(Qi=null,Us=qt()+500,Zr(n,i));do try{px();break}catch(H){zp(n,H)}while(!0);zc(),el.current=m,It=d,rn!==null?i=0:(fn=null,vn=0,i=ln)}if(i!==0){if(i===2&&(d=Ot(n),d!==0&&(c=d,i=wu(n,d))),i===1)throw a=Ba,Zr(n,0),Tr(n,c),zn(n,qt()),a;if(i===6)Tr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!fx(d)&&(i=ol(n,c),i===2&&(m=Ot(n),m!==0&&(c=m,i=wu(n,m))),i===1))throw a=Ba,Zr(n,0),Tr(n,c),zn(n,qt()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Qr(n,Bn,Qi);break;case 3:if(Tr(n,c),(c&130023424)===c&&(i=yu+500-qt(),10<i)){if(At(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Ln(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Rc(Qr.bind(null,n,Bn,Qi),i);break}Qr(n,Bn,Qi);break;case 4:if(Tr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var C=31-He(c);m=1<<C,C=i[C],C>d&&(d=C),c&=~m}if(c=d,c=qt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*dx(c/1960))-c,10<c){n.timeoutHandle=Rc(Qr.bind(null,n,Bn,Qi),c);break}Qr(n,Bn,Qi);break;case 5:Qr(n,Bn,Qi);break;default:throw Error(t(329))}}}return zn(n,qt()),n.callbackNode===a?Op.bind(null,n):null}function wu(n,i){var a=za;return n.current.memoizedState.isDehydrated&&(Zr(n,i).flags|=256),n=ol(n,i),n!==2&&(i=Bn,Bn=a,i!==null&&Eu(i)),n}function Eu(n){Bn===null?Bn=n:Bn.push.apply(Bn,n)}function fx(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!mi(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Tr(n,i){for(i&=~_u,i&=~tl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-He(i),c=1<<a;n[a]=-1,i&=~c}}function Bp(n){if((It&6)!==0)throw Error(t(327));Fs();var i=At(n,0);if((i&1)===0)return zn(n,qt()),null;var a=ol(n,i);if(n.tag!==0&&a===2){var c=Ot(n);c!==0&&(i=c,a=wu(n,c))}if(a===1)throw a=Ba,Zr(n,0),Tr(n,i),zn(n,qt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Qr(n,Bn,Qi),zn(n,qt()),null}function Tu(n,i){var a=It;It|=1;try{return n(i)}finally{It=a,It===0&&(Us=qt()+500,Do&&vr())}}function Kr(n){wr!==null&&wr.tag===0&&(It&6)===0&&Fs();var i=It;It|=1;var a=ii.transition,c=wt;try{if(ii.transition=null,wt=1,n)return n()}finally{wt=c,ii.transition=a,It=i,(It&6)===0&&vr()}}function bu(){Yn=Ds.current,Xt(Ds)}function Zr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Hg(a)),rn!==null)for(a=rn.return;a!==null;){var c=a;switch(Uc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Lo();break;case 3:Ns(),Xt(Fn),Xt(Sn),qc();break;case 5:jc(c);break;case 4:Ns();break;case 13:Xt($t);break;case 19:Xt($t);break;case 10:Gc(c.type._context);break;case 22:case 23:bu()}a=a.return}if(fn=n,rn=n=br(n.current,null),vn=Yn=i,ln=0,Ba=null,_u=tl=$r=0,Bn=za=null,jr!==null){for(i=0;i<jr.length;i++)if(a=jr[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var C=m.next;m.next=d,c.next=C}a.pending=c}jr=null}return n}function zp(n,i){do{var a=rn;try{if(zc(),Wo.current=qo,Xo){for(var c=Kt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Xo=!1}if(qr=0,dn=on=Kt=null,Ia=!1,Da=0,vu.current=null,a===null||a.return===null){ln=1,Ba=i,rn=null;break}e:{var m=n,C=a.return,H=a,Z=i;if(i=vn,H.flags|=32768,Z!==null&&typeof Z=="object"&&typeof Z.then=="function"){var ve=Z,Re=H,Ne=Re.tag;if((Re.mode&1)===0&&(Ne===0||Ne===11||Ne===15)){var Ae=Re.alternate;Ae?(Re.updateQueue=Ae.updateQueue,Re.memoizedState=Ae.memoizedState,Re.lanes=Ae.lanes):(Re.updateQueue=null,Re.memoizedState=null)}var $e=dp(C);if($e!==null){$e.flags&=-257,fp($e,C,H,m,i),$e.mode&1&&up(m,ve,i),i=$e,Z=ve;var et=i.updateQueue;if(et===null){var nt=new Set;nt.add(Z),i.updateQueue=nt}else et.add(Z);break e}else{if((i&1)===0){up(m,ve,i),Au();break e}Z=Error(t(426))}}else if(Yt&&H.mode&1){var nn=dp(C);if(nn!==null){(nn.flags&65536)===0&&(nn.flags|=256),fp(nn,C,H,m,i),Oc(Ls(Z,H));break e}}m=Z=Ls(Z,H),ln!==4&&(ln=2),za===null?za=[m]:za.push(m),m=C;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var de=lp(m,Z,i);Uh(m,de);break e;case 1:H=Z;var ie=m.type,pe=m.stateNode;if((m.flags&128)===0&&(typeof ie.getDerivedStateFromError=="function"||pe!==null&&typeof pe.componentDidCatch=="function"&&(Mr===null||!Mr.has(pe)))){m.flags|=65536,i&=-i,m.lanes|=i;var Le=cp(m,H,i);Uh(m,Le);break e}}m=m.return}while(m!==null)}Vp(a)}catch(ot){i=ot,rn===a&&a!==null&&(rn=a=a.return);continue}break}while(!0)}function Gp(){var n=el.current;return el.current=qo,n===null?qo:n}function Au(){(ln===0||ln===3||ln===2)&&(ln=4),fn===null||($r&268435455)===0&&(tl&268435455)===0||Tr(fn,vn)}function ol(n,i){var a=It;It|=2;var c=Gp();(fn!==n||vn!==i)&&(Qi=null,Zr(n,i));do try{hx();break}catch(d){zp(n,d)}while(!0);if(zc(),It=a,el.current=c,rn!==null)throw Error(t(261));return fn=null,vn=0,ln}function hx(){for(;rn!==null;)Hp(rn)}function px(){for(;rn!==null&&!go();)Hp(rn)}function Hp(n){var i=jp(n.alternate,n,Yn);n.memoizedProps=n.pendingProps,i===null?Vp(n):rn=i,vu.current=null}function Vp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=ax(a,i,Yn),a!==null){rn=a;return}}else{if(a=ox(a,i),a!==null){a.flags&=32767,rn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ln=6,rn=null;return}}if(i=i.sibling,i!==null){rn=i;return}rn=i=n}while(i!==null);ln===0&&(ln=5)}function Qr(n,i,a){var c=wt,d=ii.transition;try{ii.transition=null,wt=1,mx(n,i,a,c)}finally{ii.transition=d,wt=c}return null}function mx(n,i,a,c){do Fs();while(wr!==null);if((It&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(Ct(n,m),n===fn&&(rn=fn=null,vn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||il||(il=!0,Yp(N,function(){return Fs(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=ii.transition,ii.transition=null;var C=wt;wt=1;var H=It;It|=4,vu.current=null,cx(n,a),Ip(a,n),Ug(Ac),vo=!!bc,Ac=bc=null,n.current=a,ux(a),sc(),It=H,wt=C,ii.transition=m}else n.current=a;if(il&&(il=!1,wr=n,rl=d),m=n.pendingLanes,m===0&&(Mr=null),Xe(a.stateNode),zn(n,qt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(nl)throw nl=!1,n=Su,Su=null,n;return(rl&1)!==0&&n.tag!==0&&Fs(),m=n.pendingLanes,(m&1)!==0?n===Mu?Ga++:(Ga=0,Mu=n):Ga=0,vr(),null}function Fs(){if(wr!==null){var n=di(rl),i=ii.transition,a=wt;try{if(ii.transition=null,wt=16>n?16:n,wr===null)var c=!1;else{if(n=wr,wr=null,rl=0,(It&6)!==0)throw Error(t(331));var d=It;for(It|=4,Qe=n.current;Qe!==null;){var m=Qe,C=m.child;if((Qe.flags&16)!==0){var H=m.deletions;if(H!==null){for(var Z=0;Z<H.length;Z++){var ve=H[Z];for(Qe=ve;Qe!==null;){var Re=Qe;switch(Re.tag){case 0:case 11:case 15:Oa(8,Re,m)}var Ne=Re.child;if(Ne!==null)Ne.return=Re,Qe=Ne;else for(;Qe!==null;){Re=Qe;var Ae=Re.sibling,$e=Re.return;if(Cp(Re),Re===ve){Qe=null;break}if(Ae!==null){Ae.return=$e,Qe=Ae;break}Qe=$e}}}var et=m.alternate;if(et!==null){var nt=et.child;if(nt!==null){et.child=null;do{var nn=nt.sibling;nt.sibling=null,nt=nn}while(nt!==null)}}Qe=m}}if((m.subtreeFlags&2064)!==0&&C!==null)C.return=m,Qe=C;else e:for(;Qe!==null;){if(m=Qe,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Oa(9,m,m.return)}var de=m.sibling;if(de!==null){de.return=m.return,Qe=de;break e}Qe=m.return}}var ie=n.current;for(Qe=ie;Qe!==null;){C=Qe;var pe=C.child;if((C.subtreeFlags&2064)!==0&&pe!==null)pe.return=C,Qe=pe;else e:for(C=ie;Qe!==null;){if(H=Qe,(H.flags&2048)!==0)try{switch(H.tag){case 0:case 11:case 15:Jo(9,H)}}catch(ot){Jt(H,H.return,ot)}if(H===C){Qe=null;break e}var Le=H.sibling;if(Le!==null){Le.return=H.return,Qe=Le;break e}Qe=H.return}}if(It=d,vr(),ae&&typeof ae.onPostCommitFiberRoot=="function")try{ae.onPostCommitFiberRoot(ce,n)}catch{}c=!0}return c}finally{wt=a,ii.transition=i}}return!1}function Wp(n,i,a){i=Ls(a,i),i=lp(n,i,1),n=yr(n,i,1),i=Ln(),n!==null&&(tn(n,1,i),zn(n,i))}function Jt(n,i,a){if(n.tag===3)Wp(n,n,a);else for(;i!==null;){if(i.tag===3){Wp(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Mr===null||!Mr.has(c))){n=Ls(a,n),n=cp(i,n,1),i=yr(i,n,1),n=Ln(),i!==null&&(tn(i,1,n),zn(i,n));break}}i=i.return}}function gx(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Ln(),n.pingedLanes|=n.suspendedLanes&a,fn===n&&(vn&a)===a&&(ln===4||ln===3&&(vn&130023424)===vn&&500>qt()-yu?Zr(n,0):_u|=a),zn(n,i)}function Xp(n,i){i===0&&((n.mode&1)===0?i=1:(i=yt,yt<<=1,(yt&130023424)===0&&(yt=4194304)));var a=Ln();n=$i(n,i),n!==null&&(tn(n,i,a),zn(n,a))}function xx(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Xp(n,a)}function vx(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Xp(n,a)}var jp;jp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Fn.current)On=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return On=!1,sx(n,i,a);On=(n.flags&131072)!==0}else On=!1,Yt&&(i.flags&1048576)!==0&&Th(i,Fo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Zo(n,i),n=i.pendingProps;var d=Es(i,Sn.current);Ps(i,a),d=Zc(null,i,c,n,d,a);var m=Qc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,kn(c)?(m=!0,Io(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Wc(i),d.updater=$o,i.stateNode=d,d._reactInternals=i,ru(i,c,n,a),i=lu(null,i,c,!0,m,a)):(i.tag=0,Yt&&m&&Dc(i),Nn(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Zo(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=yx(c),n=xi(c,n),d){case 0:i=ou(null,i,c,n,a);break e;case 1:i=vp(null,i,c,n,a);break e;case 11:i=hp(null,i,c,n,a);break e;case 14:i=pp(null,i,c,xi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:xi(c,d),ou(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:xi(c,d),vp(n,i,c,d,a);case 3:e:{if(_p(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,Dh(n,i),Ho(i,c,null,a);var C=i.memoizedState;if(c=C.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:C.cache,pendingSuspenseBoundaries:C.pendingSuspenseBoundaries,transitions:C.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Ls(Error(t(423)),i),i=yp(n,i,c,a,d);break e}else if(c!==d){d=Ls(Error(t(424)),i),i=yp(n,i,c,a,d);break e}else for(jn=mr(i.stateNode.containerInfo.firstChild),Xn=i,Yt=!0,gi=null,a=Lh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(As(),c===d){i=Zi(n,i,a);break e}Nn(n,i,c,a)}i=i.child}return i;case 5:return kh(i),n===null&&kc(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,C=d.children,Cc(c,d)?C=null:m!==null&&Cc(c,m)&&(i.flags|=32),xp(n,i),Nn(n,i,C,a),i.child;case 6:return n===null&&kc(i),null;case 13:return Sp(n,i,a);case 4:return Xc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Cs(i,null,c,a):Nn(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:xi(c,d),hp(n,i,c,d,a);case 7:return Nn(n,i,i.pendingProps,a),i.child;case 8:return Nn(n,i,i.pendingProps.children,a),i.child;case 12:return Nn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,C=d.value,Vt(Bo,c._currentValue),c._currentValue=C,m!==null)if(mi(m.value,C)){if(m.children===d.children&&!Fn.current){i=Zi(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var H=m.dependencies;if(H!==null){C=m.child;for(var Z=H.firstContext;Z!==null;){if(Z.context===c){if(m.tag===1){Z=Ki(-1,a&-a),Z.tag=2;var ve=m.updateQueue;if(ve!==null){ve=ve.shared;var Re=ve.pending;Re===null?Z.next=Z:(Z.next=Re.next,Re.next=Z),ve.pending=Z}}m.lanes|=a,Z=m.alternate,Z!==null&&(Z.lanes|=a),Hc(m.return,a,i),H.lanes|=a;break}Z=Z.next}}else if(m.tag===10)C=m.type===i.type?null:m.child;else if(m.tag===18){if(C=m.return,C===null)throw Error(t(341));C.lanes|=a,H=C.alternate,H!==null&&(H.lanes|=a),Hc(C,a,i),C=m.sibling}else C=m.child;if(C!==null)C.return=m;else for(C=m;C!==null;){if(C===i){C=null;break}if(m=C.sibling,m!==null){m.return=C.return,C=m;break}C=C.return}m=C}Nn(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Ps(i,a),d=ti(d),c=c(d),i.flags|=1,Nn(n,i,c,a),i.child;case 14:return c=i.type,d=xi(c,i.pendingProps),d=xi(c.type,d),pp(n,i,c,d,a);case 15:return mp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:xi(c,d),Zo(n,i),i.tag=1,kn(c)?(n=!0,Io(i)):n=!1,Ps(i,a),ap(i,c,d),ru(i,c,d,a),lu(null,i,c,!0,n,a);case 19:return wp(n,i,a);case 22:return gp(n,i,a)}throw Error(t(156,i.tag))};function Yp(n,i){return Gr(n,i)}function _x(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(n,i,a,c){return new _x(n,i,a,c)}function Cu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function yx(n){if(typeof n=="function")return Cu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===j)return 11;if(n===Q)return 14}return 2}function br(n,i){var a=n.alternate;return a===null?(a=ri(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function ll(n,i,a,c,d,m){var C=2;if(c=n,typeof n=="function")Cu(n)&&(C=1);else if(typeof n=="string")C=5;else e:switch(n){case E:return Jr(a.children,d,m,i);case x:C=8,d|=8;break;case U:return n=ri(12,a,i,d|2),n.elementType=U,n.lanes=m,n;case J:return n=ri(13,a,i,d),n.elementType=J,n.lanes=m,n;case $:return n=ri(19,a,i,d),n.elementType=$,n.lanes=m,n;case ee:return cl(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case F:C=10;break e;case X:C=9;break e;case j:C=11;break e;case Q:C=14;break e;case oe:C=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ri(C,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function Jr(n,i,a,c){return n=ri(7,n,c,i),n.lanes=a,n}function cl(n,i,a,c){return n=ri(22,n,c,i),n.elementType=ee,n.lanes=a,n.stateNode={isHidden:!1},n}function Ru(n,i,a){return n=ri(6,n,null,i),n.lanes=a,n}function Pu(n,i,a){return i=ri(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Sx(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qe(0),this.expirationTimes=qe(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qe(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Nu(n,i,a,c,d,m,C,H,Z){return n=new Sx(n,i,a,H,Z),i===1?(i=1,m===!0&&(i|=8)):i=0,m=ri(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wc(m),n}function Mx(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function qp(n){if(!n)return xr;n=n._reactInternals;e:{if(Pn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(kn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(kn(a))return Mh(n,a,i)}return i}function $p(n,i,a,c,d,m,C,H,Z){return n=Nu(a,c,!0,n,d,m,C,H,Z),n.context=qp(null),a=n.current,c=Ln(),d=Er(a),m=Ki(c,d),m.callback=i??null,yr(a,m,d),n.current.lanes=d,tn(n,d,c),zn(n,c),n}function ul(n,i,a,c){var d=i.current,m=Ln(),C=Er(d);return a=qp(a),i.context===null?i.context=a:i.pendingContext=a,i=Ki(m,C),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=yr(d,i,C),n!==null&&(yi(n,d,C,m),Go(n,d,C)),C}function dl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Kp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Lu(n,i){Kp(n,i),(n=n.alternate)&&Kp(n,i)}function wx(){return null}var Zp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Iu(n){this._internalRoot=n}fl.prototype.render=Iu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));ul(n,i,null,null)},fl.prototype.unmount=Iu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Kr(function(){ul(null,n,null,null)}),i[Xi]=null}};function fl(n){this._internalRoot=n}fl.prototype.unstable_scheduleHydration=function(n){if(n){var i=fi();n={blockedOn:null,target:n,priority:i};for(var a=0;a<fr.length&&i!==0&&i<fr[a].priority;a++);fr.splice(a,0,n),a===0&&kf(n)}};function Du(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function hl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Qp(){}function Ex(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var ve=dl(C);m.call(ve)}}var C=$p(i,c,n,0,null,!1,!1,"",Qp);return n._reactRootContainer=C,n[Xi]=C.current,Ta(n.nodeType===8?n.parentNode:n),Kr(),C}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var H=c;c=function(){var ve=dl(Z);H.call(ve)}}var Z=Nu(n,0,!1,null,null,!1,!1,"",Qp);return n._reactRootContainer=Z,n[Xi]=Z.current,Ta(n.nodeType===8?n.parentNode:n),Kr(function(){ul(i,Z,a,c)}),Z}function pl(n,i,a,c,d){var m=a._reactRootContainer;if(m){var C=m;if(typeof d=="function"){var H=d;d=function(){var Z=dl(C);H.call(Z)}}ul(i,C,n,d)}else C=Ex(a,i,n,d,c);return dl(C)}Wi=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Ke(i.pendingLanes);a!==0&&(yn(i,a|1),zn(i,qt()),(It&6)===0&&(Us=qt()+500,vr()))}break;case 13:Kr(function(){var c=$i(n,1);if(c!==null){var d=Ln();yi(c,n,1,d)}}),Lu(n,1)}},Ut=function(n){if(n.tag===13){var i=$i(n,134217728);if(i!==null){var a=Ln();yi(i,n,134217728,a)}Lu(n,134217728)}},jt=function(n){if(n.tag===13){var i=Er(n),a=$i(n,i);if(a!==null){var c=Ln();yi(a,n,i,c)}Lu(n,i)}},fi=function(){return wt},Bt=function(n,i){var a=wt;try{return wt=n,i()}finally{wt=a}},lt=function(n,i,a){switch(i){case"input":if(Ue(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=No(c);if(!d)throw Error(t(90));se(c),Ue(c,d)}}}break;case"textarea":Ht(n,a);break;case"select":i=a.value,i!=null&&ft(n,!!a.multiple,i,!1)}},Ye=Tu,Te=Kr;var Tx={usingClientEntryPoint:!1,Events:[Ca,Ms,No,Se,Be,Tu]},Ha={findFiberByHostInstance:Hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bx={bundleType:Ha.bundleType,version:Ha.version,rendererPackageName:Ha.rendererPackageName,rendererConfig:Ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=zr(n),n===null?null:n.stateNode},findFiberByHostInstance:Ha.findFiberByHostInstance||wx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ml.isDisabled&&ml.supportsFiber)try{ce=ml.inject(bx),ae=ml}catch{}}return Gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tx,Gn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Du(i))throw Error(t(200));return Mx(n,i,null,a)},Gn.createRoot=function(n,i){if(!Du(n))throw Error(t(299));var a=!1,c="",d=Zp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Nu(n,1,!1,null,null,a,!1,c,d),n[Xi]=i.current,Ta(n.nodeType===8?n.parentNode:n),new Iu(i)},Gn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=zr(i),n=n===null?null:n.stateNode,n},Gn.flushSync=function(n){return Kr(n)},Gn.hydrate=function(n,i,a){if(!hl(i))throw Error(t(200));return pl(null,n,i,!0,a)},Gn.hydrateRoot=function(n,i,a){if(!Du(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",C=Zp;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(C=a.onRecoverableError)),i=$p(i,null,n,1,a??null,d,!1,m,C),n[Xi]=i.current,Ta(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new fl(i)},Gn.render=function(n,i,a){if(!hl(i))throw Error(t(200));return pl(null,n,i,!1,a)},Gn.unmountComponentAtNode=function(n){if(!hl(n))throw Error(t(40));return n._reactRootContainer?(Kr(function(){pl(null,null,n,!1,function(){n._reactRootContainer=null,n[Xi]=null})}),!0):!1},Gn.unstable_batchedUpdates=Tu,Gn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!hl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return pl(n,i,a,!1,c)},Gn.version="18.3.1-next-f1338f8080-20240426",Gn}var am;function Ux(){if(am)return ku.exports;am=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),ku.exports=Dx(),ku.exports}var om;function Fx(){if(om)return gl;om=1;var s=Ux();return gl.createRoot=s.createRoot,gl.hydrateRoot=s.hydrateRoot,gl}var kx=Fx();const Ox=l0(kx);function Bx(){const s=De.useRef(null);return De.useEffect(()=>{const e=s.current;if(!e)return;const t=e.getContext("2d");if(!t)return;let r=null,o=window.innerWidth,l=window.innerHeight,u=Math.min(window.devicePixelRatio||1,2),f=0,h=0,p=0,v=0;const S=P=>{f=P.clientX-o/2,h=P.clientY-l/2},g=350;let w=[];const A=()=>{w=[];const P=["#ffffff","#ffffff","#aadcff","#ffe0aa","#e2d4f8"];for(let E=0;E<g;E++){let x=0,U=.5,F=.03,X=.008,j=.3;E<150?(x=0,U=Math.random()*.6+.3,F=Math.random()*.04+.015,X=.008,j=Math.random()*.4+.2):E<270?(x=1,U=Math.random()*.8+.8,F=Math.random()*.06+.04,X=.02,j=Math.random()*.4+.4):(x=2,U=Math.random()*1.1+1.4,F=Math.random()*.12+.08,X=.045,j=Math.random()*.35+.65),w.push({x:Math.random()*o,y:Math.random()*l,baseSize:U,speed:F,layer:x,parallax:X,baseAlpha:j,alpha:j,twinkleRate:Math.random()*.025+.008,twinklePhase:Math.random()*Math.PI*2,color:P[Math.floor(Math.random()*P.length)]})}};let L=[],y=1;const _=()=>{const P=Math.PI*.18+(Math.random()-.5)*.28,E=2100+Math.random()*700;let x,U;Math.random()>.4?(x=Math.random()*(o*.85),U=-30):(x=-30,U=Math.random()*(l*.45));const F=.32+Math.random()*.18;L.push({x,y:U,vx:Math.cos(P)*E,vy:Math.sin(P)*E,speed:E,angle:P,age:0,burnDuration:F,trailLife:.42,history:[],embers:[]})},D=()=>{o=window.innerWidth,l=window.innerHeight,u=Math.min(window.devicePixelRatio||1,2),e.width=Math.floor(o*u),e.height=Math.floor(l*u),e.style.width=`${o}px`,e.style.height=`${l}px`,A()};D();let z=performance.now();const R=P=>{if(document.hidden){r=null;return}const E=Math.min((P-z)/1e3,.08);z=P,p+=(f-p)*.04,v+=(h-v)*.04,t.setTransform(u,0,0,u,0,0),t.clearRect(0,0,o,l);const x=P*.001;for(let U=0;U<w.length;U++){const F=w[U];F.y-=F.speed,F.y<0&&(F.y=l),F.y>l&&(F.y=0);const X=Math.sin(x*4+F.twinklePhase)*.25,j=Math.max(.12,Math.min(1,F.baseAlpha+X));let J=(F.x-p*F.parallax)%o;J<0&&(J+=o);let $=(F.y-v*F.parallax)%l;$<0&&($+=l),t.fillStyle=F.color,t.globalAlpha=j,t.beginPath(),t.arc(J,$,F.baseSize,0,Math.PI*2),t.fill(),F.layer===2&&j>.8&&(t.globalAlpha=j*.3,t.beginPath(),t.arc(J,$,F.baseSize*2.2,0,Math.PI*2),t.fill())}y-=E,y<=0&&(_(),y=3);for(let U=L.length-1;U>=0;U--){const F=L[U];F.age+=E;const X=F.age<=F.burnDuration;if(X){F.x+=F.vx*E,F.y+=F.vy*E;let j=1;F.age<.08?j=F.age/.08:F.age>F.burnDuration-.12&&(j=Math.max(0,(F.burnDuration-F.age)/.12)),F.history.push({x:F.x,y:F.y,time:P,brightness:j}),Math.random()<.35&&F.embers.push({x:F.x+(Math.random()-.5)*6,y:F.y+(Math.random()-.5)*6,vx:F.vx*.12+(Math.random()-.5)*40,vy:F.vy*.12+(Math.random()-.5)*40,life:.16+Math.random()*.22,maxLife:.38,size:.75+Math.random()*1.2})}for(;F.history.length>0&&(P-F.history[0].time)/1e3>F.trailLife;)F.history.shift();if(!X&&F.history.length===0&&F.embers.length===0){L.splice(U,1);continue}if(t.save(),F.history.length>1){const j=F.history[F.history.length-1],J=F.history[0],$=(P-j.time)/1e3,Q=Math.max(0,1-$/F.trailLife);if(Q>.01){const oe=t.createLinearGradient(J.x,J.y,j.x,j.y);oe.addColorStop(0,"rgba(0, 255, 204, 0)"),oe.addColorStop(.35,`rgba(93, 230, 255, ${(.18*Q).toFixed(3)})`),oe.addColorStop(.75,`rgba(140, 240, 255, ${(.55*Q).toFixed(3)})`),oe.addColorStop(1,`rgba(255, 255, 255, ${(.9*Q).toFixed(3)})`);const ee=t.createLinearGradient(J.x,J.y,j.x,j.y);ee.addColorStop(0,"rgba(255, 255, 255, 0)"),ee.addColorStop(.4,`rgba(255, 255, 255, ${(.28*Q).toFixed(3)})`),ee.addColorStop(.85,`rgba(255, 255, 255, ${(.88*Q).toFixed(3)})`),ee.addColorStop(1,`rgba(255, 255, 255, ${(1*Q).toFixed(3)})`),t.strokeStyle=oe,t.lineWidth=4.2,t.lineCap="round",t.beginPath(),t.moveTo(F.history[0].x,F.history[0].y);for(let Y=1;Y<F.history.length;Y++)t.lineTo(F.history[Y].x,F.history[Y].y);t.stroke(),t.strokeStyle=ee,t.lineWidth=1.6,t.beginPath(),t.moveTo(F.history[0].x,F.history[0].y);for(let Y=1;Y<F.history.length;Y++)t.lineTo(F.history[Y].x,F.history[Y].y);t.stroke()}}if(X){let j=1;F.age<.08?j=F.age/.08:F.age>F.burnDuration-.12&&(j=Math.max(0,(F.burnDuration-F.age)/.12)),t.save(),t.translate(F.x,F.y),t.rotate(F.angle),t.fillStyle=`rgba(93, 230, 255, ${(j*.45).toFixed(3)})`,t.beginPath(),t.ellipse(0,0,16,5,0,0,Math.PI*2),t.fill(),t.fillStyle=`rgba(255, 255, 255, ${(j*.95).toFixed(3)})`,t.beginPath(),t.ellipse(2,0,10,2.2,0,0,Math.PI*2),t.fill(),t.fillStyle=`rgba(255, 255, 255, ${j.toFixed(3)})`,t.beginPath(),t.arc(8,0,1.8,0,Math.PI*2),t.fill(),t.restore()}for(let j=F.embers.length-1;j>=0;j--){const J=F.embers[j];if(J.x+=J.vx*E,J.y+=J.vy*E,J.vx*=.88,J.vy*=.88,J.life-=E,J.life<=0){F.embers.splice(j,1);continue}const $=J.life/J.maxLife;t.fillStyle=`rgba(255, 255, 255, ${($*.85).toFixed(3)})`,t.beginPath(),t.arc(J.x,J.y,J.size,0,Math.PI*2),t.fill()}t.restore()}t.globalAlpha=1,r=requestAnimationFrame(R)};r=requestAnimationFrame(R);const I=()=>{document.hidden?r&&(cancelAnimationFrame(r),r=null):r||(z=performance.now(),r=requestAnimationFrame(R))};return window.addEventListener("resize",D),window.addEventListener("mousemove",S,{passive:!0}),document.addEventListener("visibilitychange",I),()=>{r&&cancelAnimationFrame(r),window.removeEventListener("resize",D),window.removeEventListener("mousemove",S),document.removeEventListener("visibilitychange",I)}},[]),M.jsx("canvas",{ref:s,id:"bg-starfield",className:"fixed inset-0 w-full h-full pointer-events-none z-0","aria-hidden":"true"})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pf="186",zx=0,lm=1,Gx=2,zl=1,Hx=2,Ja=3,cs=0,Dn=1,rr=2,ar=0,to=1,yd=2,cm=3,um=4,Vx=5,Qs=100,Wx=101,Xx=102,jx=103,Yx=104,qx=200,$x=201,Kx=202,Zx=203,c0=204,u0=205,Qx=206,Jx=207,ev=208,tv=209,nv=210,iv=211,rv=212,sv=213,av=214,Sd=0,Md=1,wd=2,no=3,Ed=4,Td=5,bd=6,Ad=7,d0=0,ov=1,lv=2,Gi=0,f0=1,h0=2,p0=3,mf=4,m0=5,g0=6,x0=7,v0=300,us=301,ia=302,zu=303,Gu=304,Jl=306,io=1e3,bi=1001,Cd=1002,_n=1003,cv=1004,xl=1005,An=1006,Hu=1007,ss=1008,Kn=1009,_0=1010,y0=1011,ro=1012,gf=1013,Hi=1014,Bi=1015,Vi=1016,xf=1017,vf=1018,so=1020,S0=35902,M0=35899,w0=1021,E0=1022,Ai=1023,cr=1026,as=1027,T0=1028,_f=1029,ds=1030,yf=1031,Sf=1033,Gl=33776,Hl=33777,Vl=33778,Wl=33779,Rd=35840,Pd=35841,Nd=35842,Ld=35843,Id=36196,Dd=37492,Ud=37496,Fd=37488,kd=37489,jl=37490,Od=37491,Bd=37808,zd=37809,Gd=37810,Hd=37811,Vd=37812,Wd=37813,Xd=37814,jd=37815,Yd=37816,qd=37817,$d=37818,Kd=37819,Zd=37820,Qd=37821,Jd=36492,ef=36494,tf=36495,nf=36283,rf=36284,Yl=36285,sf=36286,uv=3200,af=0,dv=1,Dr="",oi="srgb",ql="srgb-linear",$l="linear",zt="srgb",Vu=7680,fv=519,hv=512,pv=513,mv=514,Mf=515,gv=516,xv=517,wf=518,vv=519,_v=35044,dm="300 es",zi=2e3,ao=2001;function yv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Kl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Sv(){const s=Kl("canvas");return s.style.display="block",s}const fm={};function hm(...s){const e="THREE."+s.shift();console.log(e,...s)}function b0(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function gt(...s){s=b0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function kt(...s){s=b0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function ta(...s){const e=s.join(" ");e in fm||(fm[e]=!0,gt(...s))}function Mv(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const wv={[Sd]:Md,[wd]:bd,[Ed]:Ad,[no]:Td,[Md]:Sd,[bd]:wd,[Ad]:Ed,[Td]:no};class fs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wu=Math.PI/180,of=180/Math.PI;function lo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Tn[s&255]+Tn[s>>8&255]+Tn[s>>16&255]+Tn[s>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[r&255]+Tn[r>>8&255]+Tn[r>>16&255]+Tn[r>>24&255]).toLowerCase()}function Pt(s,e,t){return Math.max(e,Math.min(t,s))}function Ev(s,e){return(s%e+e)%e}function Xu(s,e,t){return(1-t)*s+t*e}function Wa(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Hn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Nf=class Nf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Pt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Pt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Nf.prototype.isVector2=!0;let bt=Nf;class sa{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,f){let h=r[o+0],p=r[o+1],v=r[o+2],S=r[o+3],g=l[u+0],w=l[u+1],A=l[u+2],L=l[u+3];if(S!==L||h!==g||p!==w||v!==A){let y=h*g+p*w+v*A+S*L;y<0&&(g=-g,w=-w,A=-A,L=-L,y=-y);let _=1-f;if(y<.9995){const D=Math.acos(y),z=Math.sin(D);_=Math.sin(_*D)/z,f=Math.sin(f*D)/z,h=h*_+g*f,p=p*_+w*f,v=v*_+A*f,S=S*_+L*f}else{h=h*_+g*f,p=p*_+w*f,v=v*_+A*f,S=S*_+L*f;const D=1/Math.sqrt(h*h+p*p+v*v+S*S);h*=D,p*=D,v*=D,S*=D}}e[t]=h,e[t+1]=p,e[t+2]=v,e[t+3]=S}static multiplyQuaternionsFlat(e,t,r,o,l,u){const f=r[o],h=r[o+1],p=r[o+2],v=r[o+3],S=l[u],g=l[u+1],w=l[u+2],A=l[u+3];return e[t]=f*A+v*S+h*w-p*g,e[t+1]=h*A+v*g+p*S-f*w,e[t+2]=p*A+v*w+f*g-h*S,e[t+3]=v*A-f*S-h*g-p*w,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,p=f(r/2),v=f(o/2),S=f(l/2),g=h(r/2),w=h(o/2),A=h(l/2);switch(u){case"XYZ":this._x=g*v*S+p*w*A,this._y=p*w*S-g*v*A,this._z=p*v*A+g*w*S,this._w=p*v*S-g*w*A;break;case"YXZ":this._x=g*v*S+p*w*A,this._y=p*w*S-g*v*A,this._z=p*v*A-g*w*S,this._w=p*v*S+g*w*A;break;case"ZXY":this._x=g*v*S-p*w*A,this._y=p*w*S+g*v*A,this._z=p*v*A+g*w*S,this._w=p*v*S-g*w*A;break;case"ZYX":this._x=g*v*S-p*w*A,this._y=p*w*S+g*v*A,this._z=p*v*A-g*w*S,this._w=p*v*S+g*w*A;break;case"YZX":this._x=g*v*S+p*w*A,this._y=p*w*S+g*v*A,this._z=p*v*A-g*w*S,this._w=p*v*S-g*w*A;break;case"XZY":this._x=g*v*S-p*w*A,this._y=p*w*S-g*v*A,this._z=p*v*A+g*w*S,this._w=p*v*S+g*w*A;break;default:gt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],f=t[5],h=t[9],p=t[2],v=t[6],S=t[10],g=r+f+S;if(g>0){const w=.5/Math.sqrt(g+1);this._w=.25/w,this._x=(v-h)*w,this._y=(l-p)*w,this._z=(u-o)*w}else if(r>f&&r>S){const w=2*Math.sqrt(1+r-f-S);this._w=(v-h)/w,this._x=.25*w,this._y=(o+u)/w,this._z=(l+p)/w}else if(f>S){const w=2*Math.sqrt(1+f-r-S);this._w=(l-p)/w,this._x=(o+u)/w,this._y=.25*w,this._z=(h+v)/w}else{const w=2*Math.sqrt(1+S-r-f);this._w=(u-o)/w,this._x=(l+p)/w,this._y=(h+v)/w,this._z=.25*w}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,f=t._x,h=t._y,p=t._z,v=t._w;return this._x=r*v+u*f+o*p-l*h,this._y=o*v+u*h+l*f-r*p,this._z=l*v+u*p+r*h-o*f,this._w=u*v-r*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let h=1-t;if(f<.9995){const p=Math.acos(f),v=Math.sin(p);h=Math.sin(h*p)/v,t=Math.sin(t*p)/v,this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Lf=class Lf{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,h=e.w,p=2*(u*o-f*r),v=2*(f*t-l*o),S=2*(l*r-u*t);return this.x=t+h*p+u*S-f*v,this.y=r+h*v+f*p-l*S,this.z=o+h*S+l*v-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Pt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*u-r*h,this.z=r*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ju.copy(this).projectOnVector(e),this.sub(ju)}reflect(e){return this.sub(ju.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Pt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Lf.prototype.isVector3=!0;let fe=Lf;const ju=new fe,pm=new sa,If=class If{constructor(e,t,r,o,l,u,f,h,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,h,p)}set(e,t,r,o,l,u,f,h,p){const v=this.elements;return v[0]=e,v[1]=o,v[2]=f,v[3]=t,v[4]=l,v[5]=h,v[6]=r,v[7]=u,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[3],h=r[6],p=r[1],v=r[4],S=r[7],g=r[2],w=r[5],A=r[8],L=o[0],y=o[3],_=o[6],D=o[1],z=o[4],R=o[7],I=o[2],P=o[5],E=o[8];return l[0]=u*L+f*D+h*I,l[3]=u*y+f*z+h*P,l[6]=u*_+f*R+h*E,l[1]=p*L+v*D+S*I,l[4]=p*y+v*z+S*P,l[7]=p*_+v*R+S*E,l[2]=g*L+w*D+A*I,l[5]=g*y+w*z+A*P,l[8]=g*_+w*R+A*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8];return t*u*v-t*f*p-r*l*v+r*f*h+o*l*p-o*u*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8],S=v*u-f*p,g=f*h-v*l,w=p*l-u*h,A=t*S+r*g+o*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const L=1/A;return e[0]=S*L,e[1]=(o*p-v*r)*L,e[2]=(f*r-o*u)*L,e[3]=g*L,e[4]=(v*t-o*h)*L,e[5]=(o*l-f*t)*L,e[6]=w*L,e[7]=(r*h-p*t)*L,e[8]=(u*t-r*l)*L,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,f){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*u+p*f)+u+e,-o*p,o*h,-o*(-p*u+h*f)+f+t,0,0,1),this}scale(e,t){return ta("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Yu.makeScale(e,t)),this}rotate(e){return ta("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Yu.makeRotation(-e)),this}translate(e,t){return ta("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Yu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};If.prototype.isMatrix3=!0;let vt=If;const Yu=new vt,mm=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gm=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tv(){const s={enabled:!0,workingColorSpace:ql,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===zt&&(o.r=or(o.r),o.g=or(o.g),o.b=or(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===zt&&(o.r=na(o.r),o.g=na(o.g),o.b=na(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Dr?$l:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return ta("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return ta("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[ql]:{primaries:e,whitePoint:r,transfer:$l,toXYZ:mm,fromXYZ:gm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:e,whitePoint:r,transfer:zt,toXYZ:mm,fromXYZ:gm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),s}const Rt=Tv();function or(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function na(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ks;class bv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ks===void 0&&(ks=Kl("canvas")),ks.width=e.width,ks.height=e.height;const o=ks.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=ks}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Kl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=or(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(or(t[r]/255)*255):t[r]=or(t[r]);return{data:t,width:e.width,height:e.height}}else return gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Av=0;class Ef{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Av++}),this.uuid=lo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(qu(o[u].image)):l.push(qu(o[u]))}else l=qu(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function qu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?bv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(gt("Texture: Unable to serialize Texture."),{})}let Cv=0;const $u=new fe;class Cn extends fs{constructor(e=Cn.DEFAULT_IMAGE,t=Cn.DEFAULT_MAPPING,r=bi,o=bi,l=An,u=ss,f=Ai,h=Kn,p=Cn.DEFAULT_ANISOTROPY,v=Dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=lo(),this.name="",this.source=new Ef(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize($u).x}get height(){return this.source.getSize($u).y}get depth(){return this.source.getSize($u).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){gt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){gt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==v0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case io:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case Cd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case io:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case Cd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=v0;Cn.DEFAULT_ANISOTROPY=1;const Df=class Df{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const h=e.elements,p=h[0],v=h[4],S=h[8],g=h[1],w=h[5],A=h[9],L=h[2],y=h[6],_=h[10];if(Math.abs(v-g)<.01&&Math.abs(S-L)<.01&&Math.abs(A-y)<.01){if(Math.abs(v+g)<.1&&Math.abs(S+L)<.1&&Math.abs(A+y)<.1&&Math.abs(p+w+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const z=(p+1)/2,R=(w+1)/2,I=(_+1)/2,P=(v+g)/4,E=(S+L)/4,x=(A+y)/4;return z>R&&z>I?z<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(z),o=P/r,l=E/r):R>I?R<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(R),r=P/o,l=x/o):I<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(I),r=E/l,o=x/l),this.set(r,o,l,t),this}let D=Math.sqrt((y-A)*(y-A)+(S-L)*(S-L)+(g-v)*(g-v));return Math.abs(D)<.001&&(D=1),this.x=(y-A)/D,this.y=(S-L)/D,this.z=(g-v)/D,this.w=Math.acos((p+w+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this.w=Pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this.w=Pt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Pt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Df.prototype.isVector4=!0;let Zt=Df;class Rv extends fs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new Cn(o),u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:An,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Ef(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends Rv{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class A0 extends Cn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=_n,this.minFilter=_n,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pv extends Cn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=_n,this.minFilter=_n,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ql=class Ql{constructor(e,t,r,o,l,u,f,h,p,v,S,g,w,A,L,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,h,p,v,S,g,w,A,L,y)}set(e,t,r,o,l,u,f,h,p,v,S,g,w,A,L,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=o,_[1]=l,_[5]=u,_[9]=f,_[13]=h,_[2]=p,_[6]=v,_[10]=S,_[14]=g,_[3]=w,_[7]=A,_[11]=L,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ql().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Os.setFromMatrixColumn(e,0).length(),l=1/Os.setFromMatrixColumn(e,1).length(),u=1/Os.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),h=Math.cos(o),p=Math.sin(o),v=Math.cos(l),S=Math.sin(l);if(e.order==="XYZ"){const g=u*v,w=u*S,A=f*v,L=f*S;t[0]=h*v,t[4]=-h*S,t[8]=p,t[1]=w+A*p,t[5]=g-L*p,t[9]=-f*h,t[2]=L-g*p,t[6]=A+w*p,t[10]=u*h}else if(e.order==="YXZ"){const g=h*v,w=h*S,A=p*v,L=p*S;t[0]=g+L*f,t[4]=A*f-w,t[8]=u*p,t[1]=u*S,t[5]=u*v,t[9]=-f,t[2]=w*f-A,t[6]=L+g*f,t[10]=u*h}else if(e.order==="ZXY"){const g=h*v,w=h*S,A=p*v,L=p*S;t[0]=g-L*f,t[4]=-u*S,t[8]=A+w*f,t[1]=w+A*f,t[5]=u*v,t[9]=L-g*f,t[2]=-u*p,t[6]=f,t[10]=u*h}else if(e.order==="ZYX"){const g=u*v,w=u*S,A=f*v,L=f*S;t[0]=h*v,t[4]=A*p-w,t[8]=g*p+L,t[1]=h*S,t[5]=L*p+g,t[9]=w*p-A,t[2]=-p,t[6]=f*h,t[10]=u*h}else if(e.order==="YZX"){const g=u*h,w=u*p,A=f*h,L=f*p;t[0]=h*v,t[4]=L-g*S,t[8]=A*S+w,t[1]=S,t[5]=u*v,t[9]=-f*v,t[2]=-p*v,t[6]=w*S+A,t[10]=g-L*S}else if(e.order==="XZY"){const g=u*h,w=u*p,A=f*h,L=f*p;t[0]=h*v,t[4]=-S,t[8]=p*v,t[1]=g*S+L,t[5]=u*v,t[9]=w*S-A,t[2]=A*S-w,t[6]=f*v,t[10]=L*S+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nv,e,Lv)}lookAt(e,t,r){const o=this.elements;return qn.subVectors(e,t),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),Cr.crossVectors(r,qn),Cr.lengthSq()===0&&(Math.abs(r.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),Cr.crossVectors(r,qn)),Cr.normalize(),vl.crossVectors(qn,Cr),o[0]=Cr.x,o[4]=vl.x,o[8]=qn.x,o[1]=Cr.y,o[5]=vl.y,o[9]=qn.y,o[2]=Cr.z,o[6]=vl.z,o[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[4],h=r[8],p=r[12],v=r[1],S=r[5],g=r[9],w=r[13],A=r[2],L=r[6],y=r[10],_=r[14],D=r[3],z=r[7],R=r[11],I=r[15],P=o[0],E=o[4],x=o[8],U=o[12],F=o[1],X=o[5],j=o[9],J=o[13],$=o[2],Q=o[6],oe=o[10],ee=o[14],Y=o[3],q=o[7],B=o[11],b=o[15];return l[0]=u*P+f*F+h*$+p*Y,l[4]=u*E+f*X+h*Q+p*q,l[8]=u*x+f*j+h*oe+p*B,l[12]=u*U+f*J+h*ee+p*b,l[1]=v*P+S*F+g*$+w*Y,l[5]=v*E+S*X+g*Q+w*q,l[9]=v*x+S*j+g*oe+w*B,l[13]=v*U+S*J+g*ee+w*b,l[2]=A*P+L*F+y*$+_*Y,l[6]=A*E+L*X+y*Q+_*q,l[10]=A*x+L*j+y*oe+_*B,l[14]=A*U+L*J+y*ee+_*b,l[3]=D*P+z*F+R*$+I*Y,l[7]=D*E+z*X+R*Q+I*q,l[11]=D*x+z*j+R*oe+I*B,l[15]=D*U+z*J+R*ee+I*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],h=e[9],p=e[13],v=e[2],S=e[6],g=e[10],w=e[14],A=e[3],L=e[7],y=e[11],_=e[15],D=h*w-p*g,z=f*w-p*S,R=f*g-h*S,I=u*w-p*v,P=u*g-h*v,E=u*S-f*v;return t*(L*D-y*z+_*R)-r*(A*D-y*I+_*P)+o*(A*z-L*I+_*E)-l*(A*R-L*P+y*E)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[1],u=e[5],f=e[9],h=e[2],p=e[6],v=e[10];return t*(u*v-f*p)-r*(l*v-f*h)+o*(l*p-u*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8],S=e[9],g=e[10],w=e[11],A=e[12],L=e[13],y=e[14],_=e[15],D=t*f-r*u,z=t*h-o*u,R=t*p-l*u,I=r*h-o*f,P=r*p-l*f,E=o*p-l*h,x=v*L-S*A,U=v*y-g*A,F=v*_-w*A,X=S*y-g*L,j=S*_-w*L,J=g*_-w*y,$=D*J-z*j+R*X+I*F-P*U+E*x;if($===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/$;return e[0]=(f*J-h*j+p*X)*Q,e[1]=(o*j-r*J-l*X)*Q,e[2]=(L*E-y*P+_*I)*Q,e[3]=(g*P-S*E-w*I)*Q,e[4]=(h*F-u*J-p*U)*Q,e[5]=(t*J-o*F+l*U)*Q,e[6]=(y*R-A*E-_*z)*Q,e[7]=(v*E-g*R+w*z)*Q,e[8]=(u*j-f*F+p*x)*Q,e[9]=(r*F-t*j-l*x)*Q,e[10]=(A*P-L*R+_*D)*Q,e[11]=(S*R-v*P-w*D)*Q,e[12]=(f*U-u*X-h*x)*Q,e[13]=(t*X-r*U+o*x)*Q,e[14]=(L*z-A*I-y*D)*Q,e[15]=(v*I-S*z+g*D)*Q,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,f=e.y,h=e.z,p=l*u,v=l*f;return this.set(p*u+r,p*f-o*h,p*h+o*f,0,p*f+o*h,v*f+r,v*h-o*u,0,p*h-o*f,v*h+o*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,f=t._z,h=t._w,p=l+l,v=u+u,S=f+f,g=l*p,w=l*v,A=l*S,L=u*v,y=u*S,_=f*S,D=h*p,z=h*v,R=h*S,I=r.x,P=r.y,E=r.z;return o[0]=(1-(L+_))*I,o[1]=(w+R)*I,o[2]=(A-z)*I,o[3]=0,o[4]=(w-R)*P,o[5]=(1-(g+_))*P,o[6]=(y+D)*P,o[7]=0,o[8]=(A+z)*E,o[9]=(y-D)*E,o[10]=(1-(g+L))*E,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let u=Os.set(o[0],o[1],o[2]).length();const f=Os.set(o[4],o[5],o[6]).length(),h=Os.set(o[8],o[9],o[10]).length();l<0&&(u=-u),Si.copy(this);const p=1/u,v=1/f,S=1/h;return Si.elements[0]*=p,Si.elements[1]*=p,Si.elements[2]*=p,Si.elements[4]*=v,Si.elements[5]*=v,Si.elements[6]*=v,Si.elements[8]*=S,Si.elements[9]*=S,Si.elements[10]*=S,t.setFromRotationMatrix(Si),r.x=u,r.y=f,r.z=h,this}makePerspective(e,t,r,o,l,u,f=zi,h=!1){const p=this.elements,v=2*l/(t-e),S=2*l/(r-o),g=(t+e)/(t-e),w=(r+o)/(r-o);let A,L;if(h)A=l/(u-l),L=u*l/(u-l);else if(f===zi)A=-(u+l)/(u-l),L=-2*u*l/(u-l);else if(f===ao)A=-u/(u-l),L=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=S,p[9]=w,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=L,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,u,f=zi,h=!1){const p=this.elements,v=2/(t-e),S=2/(r-o),g=-(t+e)/(t-e),w=-(r+o)/(r-o);let A,L;if(h)A=1/(u-l),L=u/(u-l);else if(f===zi)A=-2/(u-l),L=-(u+l)/(u-l);else if(f===ao)A=-1/(u-l),L=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=S,p[9]=0,p[13]=w,p[2]=0,p[6]=0,p[10]=A,p[14]=L,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};Ql.prototype.isMatrix4=!0;let en=Ql;const Os=new fe,Si=new en,Nv=new fe(0,0,0),Lv=new fe(1,1,1),Cr=new fe,vl=new fe,qn=new fe,xm=new en,vm=new sa;class Fr{constructor(e=0,t=0,r=0,o=Fr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],h=o[1],p=o[5],v=o[9],S=o[2],g=o[6],w=o[10];switch(t){case"XYZ":this._y=Math.asin(Pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,w),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,w),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-S,l),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,w),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Pt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,w),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-S,l)):(this._x=0,this._y=Math.atan2(f,w));break;case"XZY":this._z=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,w),this._y=0);break;default:gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return xm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vm.setFromEuler(this),this.setFromQuaternion(vm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fr.DEFAULT_ORDER="XYZ";let C0=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Iv=0;const _m=new fe,Bs=new sa,Ji=new en,_l=new fe,Xa=new fe,Dv=new fe,Uv=new sa,ym=new fe(1,0,0),Sm=new fe(0,1,0),Mm=new fe(0,0,1),wm={type:"added"},Fv={type:"removed"},zs={type:"childadded",child:null},Ku={type:"childremoved",child:null};class Rn extends fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Iv++}),this.uuid=lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const e=new fe,t=new Fr,r=new sa,o=new fe(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new en},normalMatrix:{value:new vt}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new C0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.premultiply(Bs),this}rotateX(e){return this.rotateOnAxis(ym,e)}rotateY(e){return this.rotateOnAxis(Sm,e)}rotateZ(e){return this.rotateOnAxis(Mm,e)}translateOnAxis(e,t){return _m.copy(e).applyQuaternion(this.quaternion),this.position.add(_m.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ym,e)}translateY(e){return this.translateOnAxis(Sm,e)}translateZ(e){return this.translateOnAxis(Mm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?_l.copy(e):_l.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Xa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(Xa,_l,this.up):Ji.lookAt(_l,Xa,this.up),this.quaternion.setFromRotationMatrix(Ji),o&&(Ji.extractRotation(o.matrixWorld),Bs.setFromRotationMatrix(Ji),this.quaternion.premultiply(Bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(kt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wm),zs.child=e,this.dispatchEvent(zs),zs.child=null):kt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fv),Ku.child=e,this.dispatchEvent(Ku),Ku.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wm),zs.child=e,this.dispatchEvent(zs),zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xa,e,Dv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xa,Uv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,v=h.length;p<v;p++){const S=h[p];l(e.shapes,S)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=u(e.geometries),h=u(e.materials),p=u(e.textures),v=u(e.images),S=u(e.shapes),g=u(e.skeletons),w=u(e.animations),A=u(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),S.length>0&&(r.shapes=S),g.length>0&&(r.skeletons=g),w.length>0&&(r.animations=w),A.length>0&&(r.nodes=A)}return r.object=o,r;function u(f){const h=[];for(const p in f){const v=f[p];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Rn.DEFAULT_UP=new fe(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Js extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kv={type:"move"};class Zu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Js,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Js,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new fe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new fe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Js,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new fe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new fe,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const L of e.hand.values()){const y=t.getJointPose(L,r),_=this._getHandJoint(p,L);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const v=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],g=v.position.distanceTo(S.position),w=.02,A=.005;p.inputState.pinching&&g>w+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=w-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(kv)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Js;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const R0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rr={h:0,s:0,l:0},yl={h:0,s:0,l:0};function Qu(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Lt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Rt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Rt.workingColorSpace){if(e=Ev(e,1),t=Pt(t,0,1),r=Pt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=Qu(u,l,e+1/3),this.g=Qu(u,l,e),this.b=Qu(u,l,e-1/3)}return Rt.colorSpaceToWorking(this,o),this}setStyle(e,t=oi){function r(l){l!==void 0&&parseFloat(l)<1&&gt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:gt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);gt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=oi){const r=R0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):gt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}copyLinearToSRGB(e){return this.r=na(e.r),this.g=na(e.g),this.b=na(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=oi){return Rt.workingToColorSpace(bn.copy(this),e),Math.round(Pt(bn.r*255,0,255))*65536+Math.round(Pt(bn.g*255,0,255))*256+Math.round(Pt(bn.b*255,0,255))}getHexString(e=oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.workingToColorSpace(bn.copy(this),t);const r=bn.r,o=bn.g,l=bn.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let h,p;const v=(f+u)/2;if(f===u)h=0,p=0;else{const S=u-f;switch(p=v<=.5?S/(u+f):S/(2-u-f),u){case r:h=(o-l)/S+(o<l?6:0);break;case o:h=(l-r)/S+2;break;case l:h=(r-o)/S+4;break}h/=6}return e.h=h,e.s=p,e.l=v,e}getRGB(e,t=Rt.workingColorSpace){return Rt.workingToColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=oi){Rt.workingToColorSpace(bn.copy(this),e);const t=bn.r,r=bn.g,o=bn.b;return e!==oi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Rr),this.setHSL(Rr.h+e,Rr.s+t,Rr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Rr),e.getHSL(yl);const r=Xu(Rr.h,yl.h,t),o=Xu(Rr.s,yl.s,t),l=Xu(Rr.l,yl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new Lt;Lt.NAMES=R0;class Ov extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fr,this.environmentIntensity=1,this.environmentRotation=new Fr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Mi=new fe,er=new fe,Ju=new fe,tr=new fe,Gs=new fe,Hs=new fe,Em=new fe,ed=new fe,td=new fe,nd=new fe,id=new Zt,rd=new Zt,sd=new Zt;class Ti{constructor(e=new fe,t=new fe,r=new fe){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Mi.subVectors(e,t),o.cross(Mi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Mi.subVectors(o,t),er.subVectors(r,t),Ju.subVectors(e,t);const u=Mi.dot(Mi),f=Mi.dot(er),h=Mi.dot(Ju),p=er.dot(er),v=er.dot(Ju),S=u*p-f*f;if(S===0)return l.set(0,0,0),null;const g=1/S,w=(p*h-f*v)*g,A=(u*v-f*h)*g;return l.set(1-w-A,A,w)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,tr)===null?!1:tr.x>=0&&tr.y>=0&&tr.x+tr.y<=1}static getInterpolation(e,t,r,o,l,u,f,h){return this.getBarycoord(e,t,r,o,tr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,tr.x),h.addScaledVector(u,tr.y),h.addScaledVector(f,tr.z),h)}static getInterpolatedAttribute(e,t,r,o,l,u){return id.setScalar(0),rd.setScalar(0),sd.setScalar(0),id.fromBufferAttribute(e,t),rd.fromBufferAttribute(e,r),sd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(id,l.x),u.addScaledVector(rd,l.y),u.addScaledVector(sd,l.z),u}static isFrontFacing(e,t,r,o){return Mi.subVectors(r,t),er.subVectors(e,t),Mi.cross(er).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),er.subVectors(this.a,this.b),Mi.cross(er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ti.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Ti.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,f;Gs.subVectors(o,r),Hs.subVectors(l,r),ed.subVectors(e,r);const h=Gs.dot(ed),p=Hs.dot(ed);if(h<=0&&p<=0)return t.copy(r);td.subVectors(e,o);const v=Gs.dot(td),S=Hs.dot(td);if(v>=0&&S<=v)return t.copy(o);const g=h*S-v*p;if(g<=0&&h>=0&&v<=0)return u=h/(h-v),t.copy(r).addScaledVector(Gs,u);nd.subVectors(e,l);const w=Gs.dot(nd),A=Hs.dot(nd);if(A>=0&&w<=A)return t.copy(l);const L=w*p-h*A;if(L<=0&&p>=0&&A<=0)return f=p/(p-A),t.copy(r).addScaledVector(Hs,f);const y=v*A-w*S;if(y<=0&&S-v>=0&&w-A>=0)return Em.subVectors(l,o),f=(S-v)/(S-v+(w-A)),t.copy(o).addScaledVector(Em,f);const _=1/(y+L+g);return u=L*_,f=g*_,t.copy(r).addScaledVector(Gs,u).addScaledVector(Hs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class co{constructor(e=new fe(1/0,1/0,1/0),t=new fe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,wi):wi.fromBufferAttribute(l,u),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Sl.copy(r.boundingBox)),Sl.applyMatrix4(e.matrixWorld),this.union(Sl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ja),Ml.subVectors(this.max,ja),Vs.subVectors(e.a,ja),Ws.subVectors(e.b,ja),Xs.subVectors(e.c,ja),Pr.subVectors(Ws,Vs),Nr.subVectors(Xs,Ws),es.subVectors(Vs,Xs);let t=[0,-Pr.z,Pr.y,0,-Nr.z,Nr.y,0,-es.z,es.y,Pr.z,0,-Pr.x,Nr.z,0,-Nr.x,es.z,0,-es.x,-Pr.y,Pr.x,0,-Nr.y,Nr.x,0,-es.y,es.x,0];return!ad(t,Vs,Ws,Xs,Ml)||(t=[1,0,0,0,1,0,0,0,1],!ad(t,Vs,Ws,Xs,Ml))?!1:(wl.crossVectors(Pr,Nr),t=[wl.x,wl.y,wl.z],ad(t,Vs,Ws,Xs,Ml))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const nr=[new fe,new fe,new fe,new fe,new fe,new fe,new fe,new fe],wi=new fe,Sl=new co,Vs=new fe,Ws=new fe,Xs=new fe,Pr=new fe,Nr=new fe,es=new fe,ja=new fe,Ml=new fe,wl=new fe,ts=new fe;function ad(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){ts.fromArray(s,l);const f=o.x*Math.abs(ts.x)+o.y*Math.abs(ts.y)+o.z*Math.abs(ts.z),h=e.dot(ts),p=t.dot(ts),v=r.dot(ts);if(Math.max(-Math.max(h,p,v),Math.min(h,p,v))>f)return!1}return!0}const sn=new fe,El=new bt;let Bv=0;class lr extends fs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=_v,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)El.fromBufferAttribute(this,t),El.applyMatrix3(e),this.setXY(t,El.x,El.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Wa(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Hn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wa(t,this.array)),t}setX(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wa(t,this.array)),t}setY(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wa(t,this.array)),t}setW(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),r=Hn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),r=Hn(r,this.array),o=Hn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),r=Hn(r,this.array),o=Hn(o,this.array),l=Hn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class P0 extends lr{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class N0 extends lr{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Un extends lr{constructor(e,t,r){super(new Float32Array(e),t,r)}}const zv=new co,Ya=new fe,od=new fe;class Tf{constructor(e=new fe,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):zv.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ya.subVectors(e,this.center);const t=Ya.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Ya,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(od.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ya.copy(e.center).add(od)),this.expandByPoint(Ya.copy(e.center).sub(od))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Gv=0;const si=new en,ld=new Rn,js=new fe,$n=new co,qa=new co,pn=new fe;class Pi extends fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=lo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yv(e)?N0:P0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new vt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,r){return si.makeTranslation(e,t,r),this.applyMatrix4(si),this}scale(e,t,r){return si.makeScale(e,t,r),this.applyMatrix4(si),this}lookAt(e){return ld.lookAt(e),ld.updateMatrix(),this.applyMatrix4(ld.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Un(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new co);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new fe(-1/0,-1/0,-1/0),new fe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];$n.setFromBufferAttribute(l),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new fe,1/0);return}if(e){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];qa.setFromBufferAttribute(f),this.morphTargetsRelative?(pn.addVectors($n.min,qa.min),$n.expandByPoint(pn),pn.addVectors($n.max,qa.max),$n.expandByPoint(pn)):($n.expandByPoint(qa.min),$n.expandByPoint(qa.max))}$n.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)pn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(pn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,v=f.count;p<v;p++)pn.fromBufferAttribute(f,p),h&&(js.fromBufferAttribute(e,p),pn.add(js)),o=Math.max(o,r.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new lr(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const f=[],h=[];for(let x=0;x<r.count;x++)f[x]=new fe,h[x]=new fe;const p=new fe,v=new fe,S=new fe,g=new bt,w=new bt,A=new bt,L=new fe,y=new fe;function _(x,U,F){p.fromBufferAttribute(r,x),v.fromBufferAttribute(r,U),S.fromBufferAttribute(r,F),g.fromBufferAttribute(l,x),w.fromBufferAttribute(l,U),A.fromBufferAttribute(l,F),v.sub(p),S.sub(p),w.sub(g),A.sub(g);const X=1/(w.x*A.y-A.x*w.y);isFinite(X)&&(L.copy(v).multiplyScalar(A.y).addScaledVector(S,-w.y).multiplyScalar(X),y.copy(S).multiplyScalar(w.x).addScaledVector(v,-A.x).multiplyScalar(X),f[x].add(L),f[U].add(L),f[F].add(L),h[x].add(y),h[U].add(y),h[F].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let x=0,U=D.length;x<U;++x){const F=D[x],X=F.start,j=F.count;for(let J=X,$=X+j;J<$;J+=3)_(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const z=new fe,R=new fe,I=new fe,P=new fe;function E(x){I.fromBufferAttribute(o,x),P.copy(I);const U=f[x];z.copy(U),z.sub(I.multiplyScalar(I.dot(U))).normalize(),R.crossVectors(P,U);const X=R.dot(h[x])<0?-1:1;u.setXYZW(x,z.x,z.y,z.z,X)}for(let x=0,U=D.length;x<U;++x){const F=D[x],X=F.start,j=F.count;for(let J=X,$=X+j;J<$;J+=3)E(e.getX(J+0)),E(e.getX(J+1)),E(e.getX(J+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new lr(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,w=r.count;g<w;g++)r.setXYZ(g,0,0,0);const o=new fe,l=new fe,u=new fe,f=new fe,h=new fe,p=new fe,v=new fe,S=new fe;if(e)for(let g=0,w=e.count;g<w;g+=3){const A=e.getX(g+0),L=e.getX(g+1),y=e.getX(g+2);o.fromBufferAttribute(t,A),l.fromBufferAttribute(t,L),u.fromBufferAttribute(t,y),v.subVectors(u,l),S.subVectors(o,l),v.cross(S),f.fromBufferAttribute(r,A),h.fromBufferAttribute(r,L),p.fromBufferAttribute(r,y),f.add(v),h.add(v),p.add(v),r.setXYZ(A,f.x,f.y,f.z),r.setXYZ(L,h.x,h.y,h.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let g=0,w=t.count;g<w;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),v.subVectors(u,l),S.subVectors(o,l),v.cross(S),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)pn.fromBufferAttribute(e,t),pn.normalize(),e.setXYZ(t,pn.x,pn.y,pn.z)}toNonIndexed(){function e(f,h){const p=f.array,v=f.itemSize,S=f.normalized,g=new p.constructor(h.length*v);let w=0,A=0;for(let L=0,y=h.length;L<y;L++){f.isInterleavedBufferAttribute?w=h[L]*f.data.stride+f.offset:w=h[L]*v;for(let _=0;_<v;_++)g[A++]=p[w++]}return new lr(g,v,S)}if(this.index===null)return gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pi,r=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let v=0,S=p.length;v<S;v++){const g=p[v],w=e(g,r);h.push(w)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],v=[];for(let S=0,g=p.length;S<g;S++){const w=p[S];v.push(w.toJSON(e.data))}v.length>0&&(o[h]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const v=o[p];this.setAttribute(p,v.clone(t))}const l=e.morphAttributes;for(const p in l){const v=[],S=l[p];for(let g=0,w=S.length;g<w;g++)v.push(S[g].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,v=u.length;p<v;p++){const S=u[p];this.addGroup(S.start,S.count,S.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cd=new fe,Hv=new fe,Vv=new vt;class Ir{constructor(e=new fe(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=cd.subVectors(r,t).cross(Hv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(cd),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Vv.getNormalMatrix(e),o=this.coplanarPoint(cd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Wv=0;class uo extends fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wv++}),this.uuid=lo(),this.name="",this.type="Material",this.blending=to,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=c0,this.blendDst=u0,this.blendEquation=Qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vu,this.stencilZFail=Vu,this.stencilZPass=Vu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){gt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){gt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Lt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Ir().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new bt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new bt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ir=new fe,ud=new fe,Tl=new fe,bl=new fe;class Xv{constructor(e=new fe,t=new fe(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ir)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ir.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ir.copy(this.origin).addScaledVector(this.direction,t),ir.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){ud.copy(e).add(t).multiplyScalar(.5),Tl.copy(t).sub(e).normalize(),bl.copy(this.origin).sub(ud);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Tl),f=bl.dot(this.direction),h=-bl.dot(Tl),p=bl.lengthSq(),v=Math.abs(1-u*u);let S,g,w,A;if(v>0)if(S=u*h-f,g=u*f-h,A=l*v,S>=0)if(g>=-A)if(g<=A){const L=1/v;S*=L,g*=L,w=S*(S+u*g+2*f)+g*(u*S+g+2*h)+p}else g=l,S=Math.max(0,-(u*g+f)),w=-S*S+g*(g+2*h)+p;else g=-l,S=Math.max(0,-(u*g+f)),w=-S*S+g*(g+2*h)+p;else g<=-A?(S=Math.max(0,-(-u*l+f)),g=S>0?-l:Math.min(Math.max(-l,-h),l),w=-S*S+g*(g+2*h)+p):g<=A?(S=0,g=Math.min(Math.max(-l,-h),l),w=g*(g+2*h)+p):(S=Math.max(0,-(u*l+f)),g=S>0?l:Math.min(Math.max(-l,-h),l),w=-S*S+g*(g+2*h)+p);else g=u>0?-l:l,S=Math.max(0,-(u*g+f)),w=-S*S+g*(g+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(ud).addScaledVector(Tl,g),w}intersectSphere(e,t){if(e.radius<0)return null;ir.subVectors(e.center,this.origin);const r=ir.dot(this.direction),o=ir.dot(ir)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,h=r+u;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,f,h;const p=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,o=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,o=(e.min.x-g.x)*p),v>=0?(l=(e.min.y-g.y)*v,u=(e.max.y-g.y)*v):(l=(e.max.y-g.y)*v,u=(e.min.y-g.y)*v),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),S>=0?(f=(e.min.z-g.z)*S,h=(e.max.z-g.z)*S):(f=(e.max.z-g.z)*S,h=(e.min.z-g.z)*S),r>h||f>o)||((f>r||r!==r)&&(r=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,ir)!==null}intersectTriangle(e,t,r,o,l){const u=this.origin,f=this.direction,h=f.x,p=f.y,v=f.z,S=e.x-u.x,g=e.y-u.y,w=e.z-u.z,A=t.x-u.x,L=t.y-u.y,y=t.z-u.z,_=r.x-u.x,D=r.y-u.y,z=r.z-u.z,R=Math.abs(h),I=Math.abs(p),P=Math.abs(v);let E,x,U,F,X,j,J,$,Q,oe,ee,Y;if(R>=I&&R>=P?(U=h,j=S,Q=A,Y=_,h>=0?(E=p,x=v,F=g,X=w,J=L,$=y,oe=D,ee=z):(E=v,x=p,F=w,X=g,J=y,$=L,oe=z,ee=D)):I>=P?(U=p,j=g,Q=L,Y=D,p>=0?(E=v,x=h,F=w,X=S,J=y,$=A,oe=z,ee=_):(E=h,x=v,F=S,X=w,J=A,$=y,oe=_,ee=z)):(U=v,j=w,Q=y,Y=z,v>=0?(E=h,x=p,F=S,X=g,J=A,$=L,oe=_,ee=D):(E=p,x=h,F=g,X=S,J=L,$=A,oe=D,ee=_)),U===0)return null;const q=E/U,B=x/U,b=1/U,O=F-q*j,he=X-B*j,_e=J-q*Q,Ce=$-B*Q,Ee=oe-q*Y,W=ee-B*Y,k=Ee*Ce-W*_e,V=O*W-he*Ee,Me=_e*he-Ce*O;if(o){if(k<0||V<0||Me<0)return null}else if((k<0||V<0||Me<0)&&(k>0||V>0||Me>0))return null;const ge=k+V+Me;if(ge===0)return null;const se=b*(k*j+V*Q+Me*Y);return(ge>0?se<0:se>0)?null:this.at(se/ge,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class L0 extends uo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fr,this.combine=d0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tm=new en,ns=new Xv,Al=new Tf,bm=new fe,Cl=new fe,Rl=new fe,Pl=new fe,dd=new fe,Nl=new fe,Am=new fe,Ll=new fe;class ui extends Rn{constructor(e=new Pi,t=new L0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Nl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const v=f[h],S=l[h];v!==0&&(dd.fromBufferAttribute(S,e),u?Nl.addScaledVector(dd,v):Nl.addScaledVector(dd.sub(t),v))}t.add(Nl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Al.copy(r.boundingSphere),Al.applyMatrix4(l),ns.copy(e.ray).recast(e.near),!(Al.containsPoint(ns.origin)===!1&&(ns.intersectSphere(Al,bm)===null||ns.origin.distanceToSquared(bm)>(e.far-e.near)**2))&&(Tm.copy(l).invert(),ns.copy(e.ray).applyMatrix4(Tm),!(r.boundingBox!==null&&ns.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ns)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,S=l.attributes.normal,g=l.groups,w=l.drawRange;if(f!==null)if(Array.isArray(u))for(let A=0,L=g.length;A<L;A++){const y=g[A],_=u[y.materialIndex],D=Math.max(y.start,w.start),z=Math.min(f.count,Math.min(y.start+y.count,w.start+w.count));for(let R=D,I=z;R<I;R+=3){const P=f.getX(R),E=f.getX(R+1),x=f.getX(R+2);o=Il(this,_,e,r,p,v,S,P,E,x),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const A=Math.max(0,w.start),L=Math.min(f.count,w.start+w.count);for(let y=A,_=L;y<_;y+=3){const D=f.getX(y),z=f.getX(y+1),R=f.getX(y+2);o=Il(this,u,e,r,p,v,S,D,z,R),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let A=0,L=g.length;A<L;A++){const y=g[A],_=u[y.materialIndex],D=Math.max(y.start,w.start),z=Math.min(h.count,Math.min(y.start+y.count,w.start+w.count));for(let R=D,I=z;R<I;R+=3){const P=R,E=R+1,x=R+2;o=Il(this,_,e,r,p,v,S,P,E,x),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const A=Math.max(0,w.start),L=Math.min(h.count,w.start+w.count);for(let y=A,_=L;y<_;y+=3){const D=y,z=y+1,R=y+2;o=Il(this,u,e,r,p,v,S,D,z,R),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function jv(s,e,t,r,o,l,u,f){let h;if(e.side===Dn?h=r.intersectTriangle(u,l,o,!0,f):h=r.intersectTriangle(o,l,u,e.side===cs,f),h===null)return null;Ll.copy(f),Ll.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Ll);return p<t.near||p>t.far?null:{distance:p,point:Ll.clone(),object:s}}function Il(s,e,t,r,o,l,u,f,h,p){s.getVertexPosition(f,Cl),s.getVertexPosition(h,Rl),s.getVertexPosition(p,Pl);const v=jv(s,e,t,r,Cl,Rl,Pl,Am);if(v){const S=new fe;Ti.getBarycoord(Am,Cl,Rl,Pl,S),o&&(v.uv=Ti.getInterpolatedAttribute(o,f,h,p,S,new bt)),l&&(v.uv1=Ti.getInterpolatedAttribute(l,f,h,p,S,new bt)),u&&(v.normal=Ti.getInterpolatedAttribute(u,f,h,p,S,new fe),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:f,b:h,c:p,normal:new fe,materialIndex:0};Ti.getNormal(Cl,Rl,Pl,g.normal),v.face=g,v.barycoord=S}return v}class Yv extends Cn{constructor(e=null,t=1,r=1,o,l,u,f,h,p=_n,v=_n,S,g){super(null,u,f,h,p,v,o,l,S,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const is=new Tf,qv=new bt(.5,.5),Dl=new fe;class bf{constructor(e=new Ir,t=new Ir,r=new Ir,o=new Ir,l=new Ir,u=new Ir){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=zi,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],p=l[3],v=l[4],S=l[5],g=l[6],w=l[7],A=l[8],L=l[9],y=l[10],_=l[11],D=l[12],z=l[13],R=l[14],I=l[15];if(o[0].setComponents(p-u,w-v,_-A,I-D).normalize(),o[1].setComponents(p+u,w+v,_+A,I+D).normalize(),o[2].setComponents(p+f,w+S,_+L,I+z).normalize(),o[3].setComponents(p-f,w-S,_-L,I-z).normalize(),r)o[4].setComponents(h,g,y,R).normalize(),o[5].setComponents(p-h,w-g,_-y,I-R).normalize();else if(o[4].setComponents(p-h,w-g,_-y,I-R).normalize(),t===zi)o[5].setComponents(p+h,w+g,_+y,I+R).normalize();else if(t===ao)o[5].setComponents(h,g,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(e){is.center.set(0,0,0);const t=qv.distanceTo(e.center);return is.radius=.7071067811865476+t,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Dl.x=o.normal.x>0?e.max.x:e.min.x,Dl.y=o.normal.y>0?e.max.y:e.min.y,Dl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Dl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class I0 extends Cn{constructor(e=[],t=us,r,o,l,u,f,h,p,v){super(e,t,r,o,l,u,f,h,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cm extends Cn{constructor(e,t,r,o,l,u,f,h,p){super(e,t,r,o,l,u,f,h,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class oo extends Cn{constructor(e,t,r=Hi,o,l,u,f=_n,h=_n,p,v=cr,S=1){if(v!==cr&&v!==as)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:S};super(g,o,l,u,f,h,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ef(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class $v extends oo{constructor(e,t=Hi,r=us,o,l,u=_n,f=_n,h,p=cr){const v={width:e,height:e,depth:1},S=[v,v,v,v,v,v];super(e,e,t,r,o,l,u,f,h,p),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class D0 extends Cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class fo extends Pi{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],v=[],S=[];let g=0,w=0;A("z","y","x",-1,-1,r,t,e,u,l,0),A("z","y","x",1,-1,r,t,-e,u,l,1),A("x","z","y",1,1,e,r,t,o,u,2),A("x","z","y",1,-1,e,r,-t,o,u,3),A("x","y","z",1,-1,e,t,r,o,l,4),A("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new Un(p,3)),this.setAttribute("normal",new Un(v,3)),this.setAttribute("uv",new Un(S,2));function A(L,y,_,D,z,R,I,P,E,x,U){const F=R/E,X=I/x,j=R/2,J=I/2,$=P/2,Q=E+1,oe=x+1;let ee=0,Y=0;const q=new fe;for(let B=0;B<oe;B++){const b=B*X-J;for(let O=0;O<Q;O++){const he=O*F-j;q[L]=he*D,q[y]=b*z,q[_]=$,p.push(q.x,q.y,q.z),q[L]=0,q[y]=0,q[_]=P>0?1:-1,v.push(q.x,q.y,q.z),S.push(O/E),S.push(1-B/x),ee+=1}}for(let B=0;B<x;B++)for(let b=0;b<E;b++){const O=g+b+Q*B,he=g+b+Q*(B+1),_e=g+(b+1)+Q*(B+1),Ce=g+(b+1)+Q*B;h.push(O,he,Ce),h.push(he,_e,Ce),Y+=6}f.addGroup(w,Y,U),w+=Y,g+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Af extends Pi{constructor(e=[],t=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:o};const l=[],u=[];f(o),p(r),v(),this.setAttribute("position",new Un(l,3)),this.setAttribute("normal",new Un(l.slice(),3)),this.setAttribute("uv",new Un(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(D){const z=new fe,R=new fe,I=new fe;for(let P=0;P<t.length;P+=3)w(t[P+0],z),w(t[P+1],R),w(t[P+2],I),h(z,R,I,D)}function h(D,z,R,I){const P=I+1,E=[];for(let x=0;x<=P;x++){E[x]=[];const U=D.clone().lerp(R,x/P),F=z.clone().lerp(R,x/P),X=P-x;for(let j=0;j<=X;j++)j===0&&x===P?E[x][j]=U:E[x][j]=U.clone().lerp(F,j/X)}for(let x=0;x<P;x++)for(let U=0;U<2*(P-x)-1;U++){const F=Math.floor(U/2);U%2===0?(g(E[x][F+1]),g(E[x+1][F]),g(E[x][F])):(g(E[x][F+1]),g(E[x+1][F+1]),g(E[x+1][F]))}}function p(D){const z=new fe;for(let R=0;R<l.length;R+=3)z.x=l[R+0],z.y=l[R+1],z.z=l[R+2],z.normalize().multiplyScalar(D),l[R+0]=z.x,l[R+1]=z.y,l[R+2]=z.z}function v(){const D=new fe;for(let z=0;z<l.length;z+=3){D.x=l[z+0],D.y=l[z+1],D.z=l[z+2];const R=y(D)/2/Math.PI+.5,I=_(D)/Math.PI+.5;u.push(R,1-I)}A(),S()}function S(){for(let D=0;D<u.length;D+=6){const z=u[D+0],R=u[D+2],I=u[D+4],P=Math.max(z,R,I),E=Math.min(z,R,I);P>.9&&E<.1&&(z<.2&&(u[D+0]+=1),R<.2&&(u[D+2]+=1),I<.2&&(u[D+4]+=1))}}function g(D){l.push(D.x,D.y,D.z)}function w(D,z){const R=D*3;z.x=e[R+0],z.y=e[R+1],z.z=e[R+2]}function A(){const D=new fe,z=new fe,R=new fe,I=new fe,P=new bt,E=new bt,x=new bt;for(let U=0,F=0;U<l.length;U+=9,F+=6){D.set(l[U+0],l[U+1],l[U+2]),z.set(l[U+3],l[U+4],l[U+5]),R.set(l[U+6],l[U+7],l[U+8]),P.set(u[F+0],u[F+1]),E.set(u[F+2],u[F+3]),x.set(u[F+4],u[F+5]),I.copy(D).add(z).add(R).divideScalar(3);const X=y(I);L(P,F+0,D,X),L(E,F+2,z,X),L(x,F+4,R,X)}}function L(D,z,R,I){I<0&&D.x===1&&(u[z]=D.x-1),R.x===0&&R.z===0&&(u[z]=I/2/Math.PI+.5)}function y(D){return Math.atan2(D.z,-D.x)}function _(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Af(e.vertices,e.indices,e.radius,e.detail)}}class Cf extends Af{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,o=1/r,l=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-o,-r,0,-o,r,0,o,-r,0,o,r,-o,-r,0,-o,r,0,o,-r,0,o,r,0,-r,0,-o,r,0,-o,-r,0,o,r,0,o],u=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(l,u,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Cf(e.radius,e.detail)}}class ec extends Pi{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(r),h=Math.floor(o),p=f+1,v=h+1,S=e/f,g=t/h,w=[],A=[],L=[],y=[];for(let _=0;_<v;_++){const D=_*g-u;for(let z=0;z<p;z++){const R=z*S-l;A.push(R,-D,0),L.push(0,0,1),y.push(z/f),y.push(1-_/h)}}for(let _=0;_<h;_++)for(let D=0;D<f;D++){const z=D+p*_,R=D+p*(_+1),I=D+1+p*(_+1),P=D+1+p*_;w.push(z,R,P),w.push(R,I,P)}this.setIndex(w),this.setAttribute("position",new Un(A,3)),this.setAttribute("normal",new Un(L,3)),this.setAttribute("uv",new Un(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ec(e.width,e.height,e.widthSegments,e.heightSegments)}}class Zl extends Pi{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(u+f,Math.PI);let p=0;const v=[],S=new fe,g=new fe,w=[],A=[],L=[],y=[];for(let _=0;_<=r;_++){const D=[],z=_/r,R=u+z*f,I=e*Math.cos(R),P=Math.sqrt(e*e-I*I);let E=0;_===0&&u===0?E=.5/t:_===r&&h===Math.PI&&(E=-.5/t);for(let x=0;x<=t;x++){const U=x/t,F=o+U*l;S.x=-P*Math.cos(F),S.y=I,S.z=P*Math.sin(F),A.push(S.x,S.y,S.z),g.copy(S).normalize(),L.push(g.x,g.y,g.z),y.push(U+E,1-z),D.push(p++)}v.push(D)}for(let _=0;_<r;_++)for(let D=0;D<t;D++){const z=v[_][D+1],R=v[_][D],I=v[_+1][D],P=v[_+1][D+1];(_!==0||u>0)&&w.push(z,R,P),(_!==r-1||h<Math.PI)&&w.push(R,I,P)}this.setIndex(w),this.setAttribute("position",new Un(A,3)),this.setAttribute("normal",new Un(L,3)),this.setAttribute("uv",new Un(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ra(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(Rm(o))o.isRenderTargetTexture?(gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(Rm(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function In(s){const e={};for(let t=0;t<s.length;t++){const r=ra(s[t]);for(const o in r)e[o]=r[o]}return e}function Rm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Kv(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function U0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const Zv={clone:ra,merge:In};var Qv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends uo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qv,this.fragmentShader=Jv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ra(e.uniforms),this.uniformsGroups=Kv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new Lt().setHex(o.value);break;case"v2":this.uniforms[r].value=new bt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new fe().fromArray(o.value);break;case"v4":this.uniforms[r].value=new Zt().fromArray(o.value);break;case"m3":this.uniforms[r].value=new vt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new en().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class e_ extends Ri{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Pm extends uo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=af,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class t_ extends uo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class n_ extends uo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class F0 extends Rn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const fd=new en,Nm=new fe,Lm=new fe;class i_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.mapType=Kn,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bf,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Nm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nm),Lm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lm),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,o){fd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(fd,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=o?o.z/l.x:1,f=o?o.w/l.y:1,h=o?o.x/l.x:0,p=o?o.y/l.y:0;e.coordinateSystem===ao||e.reversedDepth?t.set(.5*u,0,0,.5*u+h,0,.5*f,0,.5*f+p,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+h,0,.5*f,0,.5*f+p,0,0,.5,.5,0,0,0,1),t.multiply(fd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ul=new fe,Fl=new sa,Ui=new fe;class k0 extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ul,Fl,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ul,Fl,Ui.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(Ul,Fl,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ul,Fl,Ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Lr=new fe,Im=new bt,Dm=new bt;class li extends k0{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=of*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return of*2*Math.atan(Math.tan(Wu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Lr.x,Lr.y).multiplyScalar(-e/Lr.z),Lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Lr.x,Lr.y).multiplyScalar(-e/Lr.z)}getViewSize(e,t){return this.getViewBounds(e,Im,Dm),t.subVectors(Dm,Im)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Wu*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/h,t-=u.offsetY*r/p,o*=u.width/h,r*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Rf extends k0{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=v*this.view.offsetY,h=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class r_ extends i_{constructor(){super(new Rf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Um extends F0{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.target=new Rn,this.shadow=new r_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class s_ extends F0{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ys=-90,qs=1;class a_ extends Rn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new li(Ys,qs,e,t);o.layers=this.layers,this.add(o);const l=new li(Ys,qs,e,t);l.layers=this.layers,this.add(l);const u=new li(Ys,qs,e,t);u.layers=this.layers,this.add(u);const f=new li(Ys,qs,e,t);f.layers=this.layers,this.add(f);const h=new li(Ys,qs,e,t);h.layers=this.layers,this.add(h);const p=new li(Ys,qs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,f,h]=t;for(const p of t)this.remove(p);if(e===zi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===ao)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,p,v]=this.children,S=e.getRenderTarget(),g=e.getActiveCubeFace(),w=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const L=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.generateMipmaps=L,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(S,g,w),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class o_ extends li{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Uf=class Uf{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};Uf.prototype.isMatrix2=!0;let Fm=Uf;function km(s,e,t,r){const o=l_(r);switch(t){case w0:return s*e;case T0:return s*e/o.components*o.byteLength;case _f:return s*e/o.components*o.byteLength;case ds:return s*e*2/o.components*o.byteLength;case yf:return s*e*2/o.components*o.byteLength;case E0:return s*e*3/o.components*o.byteLength;case Ai:return s*e*4/o.components*o.byteLength;case Sf:return s*e*4/o.components*o.byteLength;case Gl:case Hl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Vl:case Wl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pd:case Ld:return Math.max(s,16)*Math.max(e,8)/4;case Rd:case Nd:return Math.max(s,8)*Math.max(e,8)/2;case Id:case Dd:case Fd:case kd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ud:case jl:case Od:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case zd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Gd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Hd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Wd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case jd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Yd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case qd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case $d:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Kd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Zd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Qd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Jd:case ef:case tf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case nf:case rf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Yl:case sf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function l_(s){switch(s){case Kn:case _0:return{byteLength:1,components:1};case ro:case y0:case Vi:return{byteLength:2,components:1};case xf:case vf:return{byteLength:2,components:4};case Hi:case gf:case Bi:return{byteLength:4,components:1};case S0:case M0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pf}}));typeof window<"u"&&(window.__THREE__?gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function O0(){let s=null,e=!1,t=null,r=null;function o(l,u){r=s.requestAnimationFrame(o),t(l,u)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function c_(s){const e=new WeakMap;function t(f,h){const p=f.array,v=f.usage,S=p.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,p,v),f.onUploadCallback();let w;if(p instanceof Float32Array)w=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)w=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?w=s.HALF_FLOAT:w=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)w=s.SHORT;else if(p instanceof Uint32Array)w=s.UNSIGNED_INT;else if(p instanceof Int32Array)w=s.INT;else if(p instanceof Int8Array)w=s.BYTE;else if(p instanceof Uint8Array)w=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)w=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:w,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:S}}function r(f,h,p){const v=h.array,S=h.updateRanges;if(s.bindBuffer(p,f),S.length===0)s.bufferSubData(p,0,v);else{S.sort((w,A)=>w.start-A.start);let g=0;for(let w=1;w<S.length;w++){const A=S[g],L=S[w];L.start<=A.start+A.count+1?A.count=Math.max(A.count,L.start+L.count-A.start):(++g,S[g]=L)}S.length=g+1;for(let w=0,A=S.length;w<A;w++){const L=S[w];s.bufferSubData(p,L.start*v.BYTES_PER_ELEMENT,v,L.start,L.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:u}}var u_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,d_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,f_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,h_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,m_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,g_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,x_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,v_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,__=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,y_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,S_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,M_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,w_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,E_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,T_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,b_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,A_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,C_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,R_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,P_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,N_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,L_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,I_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,D_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,U_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,F_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,k_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,O_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,B_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,z_="gl_FragColor = linearToOutputTexel( gl_FragColor );",G_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,H_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,V_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,W_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,X_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,j_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Y_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,q_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,K_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Z_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Q_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,J_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ey=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ty=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ny=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,iy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ry=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ay=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ly=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fy=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,hy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,py=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,my=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_y=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,My=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ey=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ty=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,by=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ay=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ry=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Py=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ny=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ly=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Iy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Dy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Uy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ky=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Oy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,By=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,zy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Yy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$y=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ky=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,eS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,aS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_S=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,yS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,SS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ES=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,TS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,RS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,NS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,LS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,US=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,BS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,VS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Et={alphahash_fragment:u_,alphahash_pars_fragment:d_,alphamap_fragment:f_,alphamap_pars_fragment:h_,alphatest_fragment:p_,alphatest_pars_fragment:m_,aomap_fragment:g_,aomap_pars_fragment:x_,batching_pars_vertex:v_,batching_vertex:__,begin_vertex:y_,beginnormal_vertex:S_,bsdfs:M_,iridescence_fragment:w_,bumpmap_pars_fragment:E_,clipping_planes_fragment:T_,clipping_planes_pars_fragment:b_,clipping_planes_pars_vertex:A_,clipping_planes_vertex:C_,color_fragment:R_,color_pars_fragment:P_,color_pars_vertex:N_,color_vertex:L_,common:I_,cube_uv_reflection_fragment:D_,defaultnormal_vertex:U_,displacementmap_pars_vertex:F_,displacementmap_vertex:k_,emissivemap_fragment:O_,emissivemap_pars_fragment:B_,colorspace_fragment:z_,colorspace_pars_fragment:G_,envmap_fragment:H_,envmap_common_pars_fragment:V_,envmap_pars_fragment:W_,envmap_pars_vertex:X_,envmap_physical_pars_fragment:ny,envmap_vertex:j_,fog_vertex:Y_,fog_pars_vertex:q_,fog_fragment:$_,fog_pars_fragment:K_,gradientmap_pars_fragment:Z_,lightmap_pars_fragment:Q_,lights_lambert_fragment:J_,lights_lambert_pars_fragment:ey,lights_pars_begin:ty,lights_toon_fragment:iy,lights_toon_pars_fragment:ry,lights_phong_fragment:sy,lights_phong_pars_fragment:ay,lights_physical_fragment:oy,lights_physical_pars_fragment:ly,lights_fragment_begin:cy,lights_fragment_maps:uy,lights_fragment_end:dy,lightprobes_pars_fragment:fy,logdepthbuf_fragment:hy,logdepthbuf_pars_fragment:py,logdepthbuf_pars_vertex:my,logdepthbuf_vertex:gy,map_fragment:xy,map_pars_fragment:vy,map_particle_fragment:_y,map_particle_pars_fragment:yy,metalnessmap_fragment:Sy,metalnessmap_pars_fragment:My,morphinstance_vertex:wy,morphcolor_vertex:Ey,morphnormal_vertex:Ty,morphtarget_pars_vertex:by,morphtarget_vertex:Ay,normal_fragment_begin:Cy,normal_fragment_maps:Ry,normal_pars_fragment:Py,normal_pars_vertex:Ny,normal_vertex:Ly,normalmap_pars_fragment:Iy,clearcoat_normal_fragment_begin:Dy,clearcoat_normal_fragment_maps:Uy,clearcoat_pars_fragment:Fy,iridescence_pars_fragment:ky,opaque_fragment:Oy,packing:By,premultiplied_alpha_fragment:zy,project_vertex:Gy,dithering_fragment:Hy,dithering_pars_fragment:Vy,roughnessmap_fragment:Wy,roughnessmap_pars_fragment:Xy,shadowmap_pars_fragment:jy,shadowmap_pars_vertex:Yy,shadowmap_vertex:qy,shadowmask_pars_fragment:$y,skinbase_vertex:Ky,skinning_pars_vertex:Zy,skinning_vertex:Qy,skinnormal_vertex:Jy,specularmap_fragment:eS,specularmap_pars_fragment:tS,tonemapping_fragment:nS,tonemapping_pars_fragment:iS,transmission_fragment:rS,transmission_pars_fragment:sS,uv_pars_fragment:aS,uv_pars_vertex:oS,uv_vertex:lS,worldpos_vertex:cS,background_vert:uS,background_frag:dS,backgroundCube_vert:fS,backgroundCube_frag:hS,cube_vert:pS,cube_frag:mS,depth_vert:gS,depth_frag:xS,distance_vert:vS,distance_frag:_S,equirect_vert:yS,equirect_frag:SS,linedashed_vert:MS,linedashed_frag:wS,meshbasic_vert:ES,meshbasic_frag:TS,meshlambert_vert:bS,meshlambert_frag:AS,meshmatcap_vert:CS,meshmatcap_frag:RS,meshnormal_vert:PS,meshnormal_frag:NS,meshphong_vert:LS,meshphong_frag:IS,meshphysical_vert:DS,meshphysical_frag:US,meshtoon_vert:FS,meshtoon_frag:kS,points_vert:OS,points_frag:BS,shadow_vert:zS,shadow_frag:GS,sprite_vert:HS,sprite_frag:VS},je={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new fe},probesMax:{value:new fe},probesResolution:{value:new fe}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},ki={basic:{uniforms:In([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:In([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new Lt(0)},envMapIntensity:{value:1}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:In([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:In([je.common,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.roughnessmap,je.metalnessmap,je.fog,je.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:In([je.common,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.gradientmap,je.fog,je.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:In([je.common,je.bumpmap,je.normalmap,je.displacementmap,je.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:In([je.points,je.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:In([je.common,je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:In([je.common,je.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:In([je.common,je.bumpmap,je.normalmap,je.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:In([je.sprite,je.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:Et.backgroundCube_vert,fragmentShader:Et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distance:{uniforms:In([je.common,je.displacementmap,{referencePosition:{value:new fe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distance_vert,fragmentShader:Et.distance_frag},shadow:{uniforms:In([je.lights,je.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};ki.physical={uniforms:In([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};const kl={r:0,b:0,g:0},WS=new en,B0=new vt;B0.set(-1,0,0,0,1,0,0,0,1);function XS(s,e,t,r,o,l){const u=new Lt(0);let f=o===!0?0:1,h,p,v=null,S=0,g=null;function w(D){let z=D.isScene===!0?D.background:null;if(z&&z.isTexture){const R=D.backgroundBlurriness>0;z=e.get(z,R)}return z}function A(D){let z=!1;const R=w(D);R===null?y(u,f):R&&R.isColor&&(y(R,1),z=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,l):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||z)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function L(D,z){const R=w(z);R&&(R.isCubeTexture||R.mapping===Jl)?(p===void 0&&(p=new ui(new fo(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:ra(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(I,P,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=R,p.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(WS.makeRotationFromEuler(z.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(B0),p.material.toneMapped=Rt.getTransfer(R.colorSpace)!==zt,(v!==R||S!==R.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,v=R,S=R.version,g=s.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null)):R&&R.isTexture&&(h===void 0&&(h=new ui(new ec(2,2),new Ri({name:"BackgroundMaterial",uniforms:ra(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=R,h.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,h.material.toneMapped=Rt.getTransfer(R.colorSpace)!==zt,R.matrixAutoUpdate===!0&&R.updateMatrix(),h.material.uniforms.uvTransform.value.copy(R.matrix),(v!==R||S!==R.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,v=R,S=R.version,g=s.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null))}function y(D,z){D.getRGB(kl,U0(s)),t.buffers.color.setClear(kl.r,kl.g,kl.b,z,l)}function _(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(D,z=1){u.set(D),f=z,y(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(D){f=D,y(u,f)},render:A,addToRenderList:L,dispose:_}}function jS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,u=!1;function f(X,j,J,$,Q){let oe=!1;const ee=S(X,$,J,j);l!==ee&&(l=ee,p(l.object)),oe=w(X,$,J,Q),oe&&A(X,$,J,Q),Q!==null&&e.update(Q,s.ELEMENT_ARRAY_BUFFER),(oe||u)&&(u=!1,R(X,j,J,$),Q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function h(){return s.createVertexArray()}function p(X){return s.bindVertexArray(X)}function v(X){return s.deleteVertexArray(X)}function S(X,j,J,$){const Q=$.wireframe===!0;let oe=r[j.id];oe===void 0&&(oe={},r[j.id]=oe);const ee=X.isInstancedMesh===!0?X.id:0;let Y=oe[ee];Y===void 0&&(Y={},oe[ee]=Y);let q=Y[J.id];q===void 0&&(q={},Y[J.id]=q);let B=q[Q];return B===void 0&&(B=g(h()),q[Q]=B),B}function g(X){const j=[],J=[],$=[];for(let Q=0;Q<t;Q++)j[Q]=0,J[Q]=0,$[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:J,attributeDivisors:$,object:X,attributes:{},index:null}}function w(X,j,J,$){const Q=l.attributes,oe=j.attributes;let ee=0;const Y=J.getAttributes();for(const q in Y)if(Y[q].location>=0){const b=Q[q];let O=oe[q];if(O===void 0&&(q==="instanceMatrix"&&X.instanceMatrix&&(O=X.instanceMatrix),q==="instanceColor"&&X.instanceColor&&(O=X.instanceColor)),b===void 0||b.attribute!==O||O&&b.data!==O.data)return!0;ee++}return l.attributesNum!==ee||l.index!==$}function A(X,j,J,$){const Q={},oe=j.attributes;let ee=0;const Y=J.getAttributes();for(const q in Y)if(Y[q].location>=0){let b=oe[q];b===void 0&&(q==="instanceMatrix"&&X.instanceMatrix&&(b=X.instanceMatrix),q==="instanceColor"&&X.instanceColor&&(b=X.instanceColor));const O={};O.attribute=b,b&&b.data&&(O.data=b.data),Q[q]=O,ee++}l.attributes=Q,l.attributesNum=ee,l.index=$}function L(){const X=l.newAttributes;for(let j=0,J=X.length;j<J;j++)X[j]=0}function y(X){_(X,0)}function _(X,j){const J=l.newAttributes,$=l.enabledAttributes,Q=l.attributeDivisors;J[X]=1,$[X]===0&&(s.enableVertexAttribArray(X),$[X]=1),Q[X]!==j&&(s.vertexAttribDivisor(X,j),Q[X]=j)}function D(){const X=l.newAttributes,j=l.enabledAttributes;for(let J=0,$=j.length;J<$;J++)j[J]!==X[J]&&(s.disableVertexAttribArray(J),j[J]=0)}function z(X,j,J,$,Q,oe,ee){ee===!0?s.vertexAttribIPointer(X,j,J,Q,oe):s.vertexAttribPointer(X,j,J,$,Q,oe)}function R(X,j,J,$){L();const Q=$.attributes,oe=J.getAttributes(),ee=j.defaultAttributeValues;for(const Y in oe){const q=oe[Y];if(q.location>=0){let B=Q[Y];if(B===void 0&&(Y==="instanceMatrix"&&X.instanceMatrix&&(B=X.instanceMatrix),Y==="instanceColor"&&X.instanceColor&&(B=X.instanceColor)),B!==void 0){const b=B.normalized,O=B.itemSize,he=e.get(B);if(he===void 0)continue;const _e=he.buffer,Ce=he.type,Ee=he.bytesPerElement,W=Ce===s.INT||Ce===s.UNSIGNED_INT||B.gpuType===gf;if(B.isInterleavedBufferAttribute){const k=B.data,V=k.stride,Me=B.offset;if(k.isInstancedInterleavedBuffer){for(let ge=0;ge<q.locationSize;ge++)_(q.location+ge,k.meshPerAttribute);X.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let ge=0;ge<q.locationSize;ge++)y(q.location+ge);s.bindBuffer(s.ARRAY_BUFFER,_e);for(let ge=0;ge<q.locationSize;ge++)z(q.location+ge,O/q.locationSize,Ce,b,V*Ee,(Me+O/q.locationSize*ge)*Ee,W)}else{if(B.isInstancedBufferAttribute){for(let k=0;k<q.locationSize;k++)_(q.location+k,B.meshPerAttribute);X.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let k=0;k<q.locationSize;k++)y(q.location+k);s.bindBuffer(s.ARRAY_BUFFER,_e);for(let k=0;k<q.locationSize;k++)z(q.location+k,O/q.locationSize,Ce,b,O*Ee,O/q.locationSize*k*Ee,W)}}else if(ee!==void 0){const b=ee[Y];if(b!==void 0)switch(b.length){case 2:s.vertexAttrib2fv(q.location,b);break;case 3:s.vertexAttrib3fv(q.location,b);break;case 4:s.vertexAttrib4fv(q.location,b);break;default:s.vertexAttrib1fv(q.location,b)}}}}D()}function I(){U();for(const X in r){const j=r[X];for(const J in j){const $=j[J];for(const Q in $){const oe=$[Q];for(const ee in oe)v(oe[ee].object),delete oe[ee];delete $[Q]}}delete r[X]}}function P(X){if(r[X.id]===void 0)return;const j=r[X.id];for(const J in j){const $=j[J];for(const Q in $){const oe=$[Q];for(const ee in oe)v(oe[ee].object),delete oe[ee];delete $[Q]}}delete r[X.id]}function E(X){for(const j in r){const J=r[j];for(const $ in J){const Q=J[$];if(Q[X.id]===void 0)continue;const oe=Q[X.id];for(const ee in oe)v(oe[ee].object),delete oe[ee];delete Q[X.id]}}}function x(X){for(const j in r){const J=r[j],$=X.isInstancedMesh===!0?X.id:0,Q=J[$];if(Q!==void 0){for(const oe in Q){const ee=Q[oe];for(const Y in ee)v(ee[Y].object),delete ee[Y];delete Q[oe]}delete J[$],Object.keys(J).length===0&&delete r[j]}}}function U(){F(),u=!0,l!==o&&(l=o,p(l.object))}function F(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:U,resetDefaultState:F,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfObject:x,releaseStatesOfProgram:E,initAttributes:L,enableAttribute:y,disableUnusedAttributes:D}}function YS(s,e,t){let r;function o(h){r=h}function l(h,p){s.drawArrays(r,h,p),t.update(p,r,1)}function u(h,p,v){v!==0&&(s.drawArraysInstanced(r,h,p,v),t.update(p,r,v))}function f(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,p,0,v);let g=0;for(let w=0;w<v;w++)g+=p[w];t.update(g,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function qS(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(E){return!(E!==Ai&&r.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(E){const x=E===Vi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Kn&&E!==Bi&&!x&&r.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function h(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=h(p);v!==p&&(gt("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const S=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const w=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),L=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),z=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=s.getParameter(s.MAX_SAMPLES),P=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:S,reversedDepthBuffer:g,maxTextures:w,maxVertexTextures:A,maxTextureSize:L,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:D,maxVaryings:z,maxFragmentUniforms:R,maxSamples:I,samples:P}}function $S(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Ir,f=new vt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){const w=S.length!==0||g||r!==0||o;return o=g,r=S.length,w},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(S,g){t=v(S,g,0)},this.setState=function(S,g,w){const A=S.clippingPlanes,L=S.clipIntersection,y=S.clipShadows,_=s.get(S);if(!o||A===null||A.length===0||l&&!y)l?v(null):p();else{const D=l?0:r,z=D*4;let R=_.clippingState||null;h.value=R,R=v(A,g,z,w);for(let I=0;I!==z;++I)R[I]=t[I];_.clippingState=R,this.numIntersection=L?this.numPlanes:0,this.numPlanes+=D}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(S,g,w,A){const L=S!==null?S.length:0;let y=null;if(L!==0){if(y=h.value,A!==!0||y===null){const _=w+L*4,D=g.matrixWorldInverse;f.getNormalMatrix(D),(y===null||y.length<_)&&(y=new Float32Array(_));for(let z=0,R=w;z!==L;++z,R+=4)u.copy(S[z]).applyMatrix4(D,f),u.normal.toArray(y,R),y[R+3]=u.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=L,e.numIntersection=0,y}}const ea=4,KS=6,ZS=20,QS=256,$a=new Rf,Om=new Lt;let hd=null,pd=0,md=0,gd=!1;const JS=new fe,rs=new fe;class Bm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:f=JS}=l;hd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(hd,pd,md),this._renderer.xr.enabled=gd,e.scissorTest=!1,$s(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===us||e.mapping===ia?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:An,minFilter:An,generateMipmaps:!1,type:Vi,format:Ai,colorSpace:ql,depthBuffer:!1},o=zm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zm(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=eM(l)),this._blurMaterial=nM(l,e,t),this._ggxMaterial=tM(l,e,t)}return o}_compileMaterial(e){const t=new ui(new Pi,e);this._renderer.compile(t,$a)}_sceneToCubeUV(e,t,r,o,l){const h=new li(90,1,t,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],S=this._renderer,g=S.autoClear,w=S.toneMapping;S.getClearColor(Om),S.toneMapping=Gi,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(o),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ui(new fo,new L0({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1})));const L=this._backgroundBox,y=L.material;let _=!1;const D=e.background;D?D.isColor&&(y.color.copy(D),e.background=null,_=!0):(y.color.copy(Om),_=!0);for(let z=0;z<6;z++){const R=z%3;R===0?(h.up.set(0,p[z],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+v[z],l.y,l.z)):R===1?(h.up.set(0,0,p[z]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+v[z],l.z)):(h.up.set(0,p[z],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+v[z]));const I=this._cubeSize;$s(o,R*I,z>2?I:0,I,I),S.setRenderTarget(o),_&&S.render(L,h),S.render(e,h)}S.toneMapping=w,S.autoClear=g,e.background=D}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===us||e.mapping===ia;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gm());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;$s(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(u,$a)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const h=u.uniforms,p=r/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),S=Math.sqrt(p*p-v*v),g=p*1.25,w=S*g,{_lodMax:A}=this,L=this._sizeLods[r],y=3*L*(r>A-ea?r-A+ea:0),_=4*(this._cubeSize-L);h.envMap.value=e.texture,h.roughness.value=w,h.mipInt.value=A-t,$s(l,y,_,3*L,2*L),o.setRenderTarget(l),o.render(f,$a),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=A-r,$s(e,y,_,3*L,2*L),o.setRenderTarget(e),o.render(f,$a)}_blur(e,t,r,o){const l=this._pingPongRenderTarget,u=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,l,t,r,u),this._blurPass(l,e,r,r,u)}_blurPass(e,t,r,o,l){const u=this._renderer,f=this._blurMaterial,h=this._lodMeshes[o];h.material=f;const p=f.uniforms;p.envMap.value=e.texture,p.sigma.value=l,p.mipInt.value=this._lodMax-r;const v=this._sizeLods[o],S=3*v*(o>this._lodMax-ea?o-this._lodMax+ea:0),g=4*(this._cubeSize-v);$s(t,S,g,3*v,2*v),u.setRenderTarget(t),u.render(h,$a)}}function eM(s){const e=[],t=[];let r=s;const o=s-ea+1+KS;for(let l=0;l<o;l++){const u=Math.pow(2,r);e.push(u);const f=1/(u-2),h=-f,p=1+f,v=[h,h,p,h,p,p,h,h,p,p,h,p],S=6,g=6,w=3,A=new Float32Array(w*g*S),L=new Float32Array(w*g*S);for(let _=0;_<S;_++){const D=_%3*2/3-1,z=_>2?0:-1,R=[D,z,0,D+2/3,z,0,D+2/3,z+1,0,D,z,0,D+2/3,z+1,0,D,z+1,0];A.set(R,w*g*_);for(let I=0;I<g;I++){const P=v[I*2]*2-1,E=v[I*2+1]*2-1;_===0?rs.set(1,E,P):_===1?rs.set(-P,1,-E):_===2?rs.set(-P,E,1):_===3?rs.set(-1,E,-P):_===4?rs.set(-P,-1,E):rs.set(P,E,-1),rs.toArray(L,(_*g+I)*w)}}const y=new Pi;y.setAttribute("position",new lr(A,w)),y.setAttribute("outputDirection",new lr(L,w)),t.push(new ui(y,null)),r>ea&&r--}return{lodMeshes:t,sizeLods:e}}function zm(s,e,t){const r=new Ci(s,e,t);return r.texture.mapping=Jl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function $s(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function tM(s,e,t){return new Ri({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:QS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function nM(s,e,t){return new Ri({name:"SphericalGaussianBlur",defines:{SAMPLES:ZS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:tc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Gm(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Hm(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function tc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class z0 extends Ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new I0(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new fo(5,5,5),l=new Ri({name:"CubemapFromEquirect",uniforms:ra(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Dn,blending:ar});l.uniforms.tEquirect.value=t;const u=new ui(o,l),f=t.minFilter;return t.minFilter===ss&&(t.minFilter=An),new a_(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}function iM(s){let e=new WeakMap,t=new WeakMap,r=null;function o(g,w=!1){return g==null?null:w?u(g):l(g)}function l(g){if(g&&g.isTexture){const w=g.mapping;if(w===zu||w===Gu)if(e.has(g)){const A=e.get(g).texture;return f(A,g.mapping)}else{const A=g.image;if(A&&A.height>0){const L=new z0(A.height);return L.fromEquirectangularTexture(s,g),e.set(g,L),g.addEventListener("dispose",p),f(L.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const w=g.mapping,A=w===zu||w===Gu,L=w===us||w===ia;if(A||L){let y=t.get(g);const _=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==_)return r===null&&(r=new Bm(s)),y=A?r.fromEquirectangular(g,y):r.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),y.texture;if(y!==void 0)return y.texture;{const D=g.image;return A&&D&&D.height>0||L&&D&&h(D)?(r===null&&(r=new Bm(s)),y=A?r.fromEquirectangular(g):r.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),g.addEventListener("dispose",v),y.texture):null}}}return g}function f(g,w){return w===zu?g.mapping=us:w===Gu&&(g.mapping=ia),g}function h(g){let w=0;const A=6;for(let L=0;L<A;L++)g[L]!==void 0&&w++;return w===A}function p(g){const w=g.target;w.removeEventListener("dispose",p);const A=e.get(w);A!==void 0&&(e.delete(w),A.dispose())}function v(g){const w=g.target;w.removeEventListener("dispose",v);const A=t.get(w);A!==void 0&&(t.delete(w),A.dispose())}function S(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:S}}function rM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&ta("WebGLRenderer: "+r+" extension not supported."),o}}}function sM(s,e,t,r){const o={},l=new WeakMap;function u(S){const g=S.target;g.index!==null&&e.remove(g.index);for(const A in g.attributes)e.remove(g.attributes[A]);g.removeEventListener("dispose",u),delete o[g.id];const w=l.get(g);w&&(e.remove(w),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function f(S,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,t.memory.geometries++),g}function h(S){const g=S.attributes;for(const w in g)e.update(g[w],s.ARRAY_BUFFER)}function p(S){const g=[],w=S.index,A=S.attributes.position;let L=0;if(A===void 0)return;if(w!==null){const D=w.array;L=w.version;for(let z=0,R=D.length;z<R;z+=3){const I=D[z+0],P=D[z+1],E=D[z+2];g.push(I,P,P,E,E,I)}}else{const D=A.array;L=A.version;for(let z=0,R=D.length/3-1;z<R;z+=3){const I=z+0,P=z+1,E=z+2;g.push(I,P,P,E,E,I)}}const y=new(A.count>=65535?N0:P0)(g,1);y.version=L;const _=l.get(S);_&&e.remove(_),l.set(S,y)}function v(S){const g=l.get(S);if(g){const w=S.index;w!==null&&g.version<w.version&&p(S)}else p(S);return l.get(S)}return{get:f,update:h,getWireframeAttribute:v}}function aM(s,e,t){let r;function o(S){r=S}let l,u;function f(S){l=S.type,u=S.bytesPerElement}function h(S,g){s.drawElements(r,g,l,S*u),t.update(g,r,1)}function p(S,g,w){w!==0&&(s.drawElementsInstanced(r,g,l,S*u,w),t.update(g,r,w))}function v(S,g,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,S,0,w);let L=0;for(let y=0;y<w;y++)L+=g[y];t.update(L,r,1)}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=v}function oM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:kt("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function lM(s,e,t){const r=new WeakMap,o=new Zt;function l(u,f,h){const p=u.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,S=v!==void 0?v.length:0;let g=r.get(f);if(g===void 0||g.count!==S){let F=function(){x.dispose(),r.delete(f),f.removeEventListener("dispose",F)};var w=F;g!==void 0&&g.texture.dispose();const A=f.morphAttributes.position!==void 0,L=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],D=f.morphAttributes.normal||[],z=f.morphAttributes.color||[];let R=0;A===!0&&(R=1),L===!0&&(R=2),y===!0&&(R=3);let I=f.attributes.position.count*R,P=1;I>e.maxTextureSize&&(P=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const E=new Float32Array(I*P*4*S),x=new A0(E,I,P,S);x.type=Bi,x.needsUpdate=!0;const U=R*4;for(let X=0;X<S;X++){const j=_[X],J=D[X],$=z[X],Q=I*P*4*X;for(let oe=0;oe<j.count;oe++){const ee=oe*U;A===!0&&(o.fromBufferAttribute(j,oe),E[Q+ee+0]=o.x,E[Q+ee+1]=o.y,E[Q+ee+2]=o.z,E[Q+ee+3]=0),L===!0&&(o.fromBufferAttribute(J,oe),E[Q+ee+4]=o.x,E[Q+ee+5]=o.y,E[Q+ee+6]=o.z,E[Q+ee+7]=0),y===!0&&(o.fromBufferAttribute($,oe),E[Q+ee+8]=o.x,E[Q+ee+9]=o.y,E[Q+ee+10]=o.z,E[Q+ee+11]=$.itemSize===4?o.w:1)}}g={count:S,texture:x,size:new bt(I,P)},r.set(f,g),f.addEventListener("dispose",F)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let A=0;for(let y=0;y<p.length;y++)A+=p[y];const L=f.morphTargetsRelative?1:1-A;h.getUniforms().setValue(s,"morphTargetBaseInfluence",L),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function cM(s,e,t,r,o){let l=new WeakMap;function u(p){const v=o.render.frame,S=p.geometry,g=e.get(p,S);if(l.get(g)!==v&&(e.update(g),l.set(g,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==v&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,v))),p.isSkinnedMesh){const w=p.skeleton;l.get(w)!==v&&(w.update(),l.set(w,v))}return g}function f(){l=new WeakMap}function h(p){const v=p.target;v.removeEventListener("dispose",h),r.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:u,dispose:f}}const uM={[f0]:"LINEAR_TONE_MAPPING",[h0]:"REINHARD_TONE_MAPPING",[p0]:"CINEON_TONE_MAPPING",[mf]:"ACES_FILMIC_TONE_MAPPING",[g0]:"AGX_TONE_MAPPING",[x0]:"NEUTRAL_TONE_MAPPING",[m0]:"CUSTOM_TONE_MAPPING"};function dM(s,e,t,r,o,l){const u=new Ci(e,t,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let f=null,h=null;const p=new Pi;p.setAttribute("position",new Un([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Un([0,2,0,0,2,0],2));const v=new e_({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),S=new ui(p,v),g=new Rf(-1,1,1,-1,0,1);let w=null,A=null,L=!1,y,_=null,D=[],z=!1;this.setSize=function(R,I){u.setSize(R,I),f!==null&&f.setSize(R,I),h!==null&&h.setSize(R,I);for(let P=0;P<D.length;P++){const E=D[P];E.setSize&&E.setSize(R,I)}},this.setEffects=function(R){D=R,z=D.length>0&&D[0].isRenderPass===!0;const I=u.width,P=u.height;D.length>0&&f===null&&(f=new Ci(I,P,{type:Vi,depthBuffer:!1,stencilBuffer:!1}),h=new Ci(I,P,{type:Vi,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<D.length;E++){const x=D[E];x.setSize&&x.setSize(I,P)}},this.begin=function(R,I){if(L||R.toneMapping===Gi&&D.length===0)return!1;if(_=I,I!==null){const P=I.width,E=I.height;(u.width!==P||u.height!==E)&&this.setSize(P,E)}return z===!1&&R.setRenderTarget(u),y=R.toneMapping,R.toneMapping=Gi,!0},this.hasRenderPass=function(){return z},this.end=function(R,I){R.toneMapping=y,L=!0;let P=u,E=f;for(let x=0;x<D.length;x++){const U=D[x];U.enabled!==!1&&(U.render(R,E,P,I),U.needsSwap!==!1&&(P=E,E=E===f?h:f))}if(w!==R.outputColorSpace||A!==R.toneMapping){w=R.outputColorSpace,A=R.toneMapping,v.defines={},Rt.getTransfer(w)===zt&&(v.defines.SRGB_TRANSFER="");const x=uM[A];x&&(v.defines[x]=""),v.needsUpdate=!0}v.uniforms.tDiffuse.value=P.texture,R.setRenderTarget(_),R.render(S,g),_=null,L=!1},this.isCompositing=function(){return L},this.dispose=function(){u.dispose(),f!==null&&f.dispose(),h!==null&&h.dispose(),p.dispose(),v.dispose()}}const G0=new Cn,lf=new oo(1,1),H0=new A0,V0=new Pv,W0=new I0,Vm=[],Wm=[],Xm=new Float32Array(16),jm=new Float32Array(9),Ym=new Float32Array(4);function aa(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=Vm[o];if(l===void 0&&(l=new Float32Array(o),Vm[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(l,f)}return l}function cn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function un(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function nc(s,e){let t=Wm[e];t===void 0&&(t=new Int32Array(e),Wm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function fM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function hM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;s.uniform2fv(this.addr,e),un(t,e)}}function pM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;s.uniform3fv(this.addr,e),un(t,e)}}function mM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;s.uniform4fv(this.addr,e),un(t,e)}}function gM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(cn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(cn(t,r))return;Ym.set(r),s.uniformMatrix2fv(this.addr,!1,Ym),un(t,r)}}function xM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(cn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(cn(t,r))return;jm.set(r),s.uniformMatrix3fv(this.addr,!1,jm),un(t,r)}}function vM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(cn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(cn(t,r))return;Xm.set(r),s.uniformMatrix4fv(this.addr,!1,Xm),un(t,r)}}function _M(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function yM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;s.uniform2iv(this.addr,e),un(t,e)}}function SM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;s.uniform3iv(this.addr,e),un(t,e)}}function MM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;s.uniform4iv(this.addr,e),un(t,e)}}function wM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function EM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;s.uniform2uiv(this.addr,e),un(t,e)}}function TM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;s.uniform3uiv(this.addr,e),un(t,e)}}function bM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;s.uniform4uiv(this.addr,e),un(t,e)}}function AM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(lf.compareFunction=t.isReversedDepthBuffer()?wf:Mf,l=lf):l=G0,t.setTexture2D(e||l,o)}function CM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||V0,o)}function RM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||W0,o)}function PM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||H0,o)}function NM(s){switch(s){case 5126:return fM;case 35664:return hM;case 35665:return pM;case 35666:return mM;case 35674:return gM;case 35675:return xM;case 35676:return vM;case 5124:case 35670:return _M;case 35667:case 35671:return yM;case 35668:case 35672:return SM;case 35669:case 35673:return MM;case 5125:return wM;case 36294:return EM;case 36295:return TM;case 36296:return bM;case 35678:case 36198:case 36298:case 36306:case 35682:return AM;case 35679:case 36299:case 36307:return CM;case 35680:case 36300:case 36308:case 36293:return RM;case 36289:case 36303:case 36311:case 36292:return PM}}function LM(s,e){s.uniform1fv(this.addr,e)}function IM(s,e){const t=aa(e,this.size,2);s.uniform2fv(this.addr,t)}function DM(s,e){const t=aa(e,this.size,3);s.uniform3fv(this.addr,t)}function UM(s,e){const t=aa(e,this.size,4);s.uniform4fv(this.addr,t)}function FM(s,e){const t=aa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function kM(s,e){const t=aa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function OM(s,e){const t=aa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function BM(s,e){s.uniform1iv(this.addr,e)}function zM(s,e){s.uniform2iv(this.addr,e)}function GM(s,e){s.uniform3iv(this.addr,e)}function HM(s,e){s.uniform4iv(this.addr,e)}function VM(s,e){s.uniform1uiv(this.addr,e)}function WM(s,e){s.uniform2uiv(this.addr,e)}function XM(s,e){s.uniform3uiv(this.addr,e)}function jM(s,e){s.uniform4uiv(this.addr,e)}function YM(s,e,t){const r=this.cache,o=e.length,l=nc(t,o);cn(r,l)||(s.uniform1iv(this.addr,l),un(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=lf:u=G0;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function qM(s,e,t){const r=this.cache,o=e.length,l=nc(t,o);cn(r,l)||(s.uniform1iv(this.addr,l),un(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||V0,l[u])}function $M(s,e,t){const r=this.cache,o=e.length,l=nc(t,o);cn(r,l)||(s.uniform1iv(this.addr,l),un(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||W0,l[u])}function KM(s,e,t){const r=this.cache,o=e.length,l=nc(t,o);cn(r,l)||(s.uniform1iv(this.addr,l),un(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||H0,l[u])}function ZM(s){switch(s){case 5126:return LM;case 35664:return IM;case 35665:return DM;case 35666:return UM;case 35674:return FM;case 35675:return kM;case 35676:return OM;case 5124:case 35670:return BM;case 35667:case 35671:return zM;case 35668:case 35672:return GM;case 35669:case 35673:return HM;case 5125:return VM;case 36294:return WM;case 36295:return XM;case 36296:return jM;case 35678:case 36198:case 36298:case 36306:case 35682:return YM;case 35679:case 36299:case 36307:return qM;case 35680:case 36300:case 36308:case 36293:return $M;case 36289:case 36303:case 36311:case 36292:return KM}}class QM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=NM(t.type)}}class JM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ZM(t.type)}}class e1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const xd=/(\w+)(\])?(\[|\.)?/g;function qm(s,e){s.seq.push(e),s.map[e.id]=e}function t1(s,e,t){const r=s.name,o=r.length;for(xd.lastIndex=0;;){const l=xd.exec(r),u=xd.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&u+2===o){qm(t,p===void 0?new QM(f,s,e):new JM(f,s,e));break}else{let S=t.map[f];S===void 0&&(S=new e1(f),qm(t,S)),t=S}}}class Xl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(t,u),h=e.getUniformLocation(t,f.name);t1(f,h,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function $m(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const n1=37297;let i1=0;function r1(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const Km=new vt;function s1(s){Rt._getMatrix(Km,Rt.workingColorSpace,s);const e=`mat3( ${Km.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(s)){case $l:return[e,"LinearTransferOETF"];case zt:return[e,"sRGBTransferOETF"];default:return gt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Zm(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+r1(s.getShaderSource(e),f)}else return l}function a1(s,e){const t=s1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const o1={[f0]:"Linear",[h0]:"Reinhard",[p0]:"Cineon",[mf]:"ACESFilmic",[g0]:"AgX",[x0]:"Neutral",[m0]:"Custom"};function l1(s,e){const t=o1[e];return t===void 0?(gt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ol=new fe;function c1(){Rt.getLuminanceCoefficients(Ol);const s=Ol.x.toFixed(4),e=Ol.y.toFixed(4),t=Ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function u1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(eo).join(`
`)}function d1(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function f1(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function eo(s){return s!==""}function Qm(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const h1=/^[ \t]*#include +<([\w\d./]+)>/gm;function cf(s){return s.replace(h1,m1)}const p1=new Map;function m1(s,e){let t=Et[e];if(t===void 0){const r=p1.get(e);if(r!==void 0)t=Et[r],gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return cf(t)}const g1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function e0(s){return s.replace(g1,x1)}function x1(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function t0(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const v1={[zl]:"SHADOWMAP_TYPE_PCF",[Ja]:"SHADOWMAP_TYPE_VSM"};function _1(s){return v1[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const y1={[us]:"ENVMAP_TYPE_CUBE",[ia]:"ENVMAP_TYPE_CUBE",[Jl]:"ENVMAP_TYPE_CUBE_UV"};function S1(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":y1[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const M1={[ia]:"ENVMAP_MODE_REFRACTION"};function w1(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":M1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const E1={[d0]:"ENVMAP_BLENDING_MULTIPLY",[ov]:"ENVMAP_BLENDING_MIX",[lv]:"ENVMAP_BLENDING_ADD"};function T1(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":E1[s.combine]||"ENVMAP_BLENDING_NONE"}function b1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function A1(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const h=_1(t),p=S1(t),v=w1(t),S=T1(t),g=b1(t),w=u1(t),A=d1(l),L=o.createProgram();let y,_,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(eo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(eo).join(`
`),_.length>0&&(_+=`
`)):(y=[t0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(eo).join(`
`),_=[t0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+S:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?Et.tonemapping_pars_fragment:"",t.toneMapping!==Gi?l1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Et.colorspace_pars_fragment,a1("linearToOutputTexel",t.outputColorSpace),c1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(eo).join(`
`)),u=cf(u),u=Qm(u,t),u=Jm(u,t),f=cf(f),f=Qm(f,t),f=Jm(f,t),u=e0(u),f=e0(f),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[w,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===dm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const z=D+y+u,R=D+_+f,I=$m(o,o.VERTEX_SHADER,z),P=$m(o,o.FRAGMENT_SHADER,R);o.attachShader(L,I),o.attachShader(L,P),t.index0AttributeName!==void 0?o.bindAttribLocation(L,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(L,0,"position"),o.linkProgram(L);function E(X){if(s.debug.checkShaderErrors){const j=o.getProgramInfoLog(L)||"",J=o.getShaderInfoLog(I)||"",$=o.getShaderInfoLog(P)||"",Q=j.trim(),oe=J.trim(),ee=$.trim();let Y=!0,q=!0;if(o.getProgramParameter(L,o.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,L,I,P);else{const B=Zm(o,I,"vertex"),b=Zm(o,P,"fragment");kt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(L,o.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+Q+`
`+B+`
`+b)}else Q!==""?gt("WebGLProgram: Program Info Log:",Q):(oe===""||ee==="")&&(q=!1);q&&(X.diagnostics={runnable:Y,programLog:Q,vertexShader:{log:oe,prefix:y},fragmentShader:{log:ee,prefix:_}})}o.deleteShader(I),o.deleteShader(P),x=new Xl(o,L),U=f1(o,L)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let U;this.getAttributes=function(){return U===void 0&&E(this),U};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=o.getProgramParameter(L,n1)),F},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(L),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=i1++,this.cacheKey=e,this.usedTimes=1,this.program=L,this.vertexShader=I,this.fragmentShader=P,this}let C1=0;class R1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new P1(e),t.set(e,r)),r}}class P1{constructor(e){this.id=C1++,this.code=e,this.usedTimes=0}}function N1(s){return s===ds||s===jl||s===Yl}function L1(s,e,t,r,o,l){const u=new C0,f=new R1,h=new Set,p=[],v=new Map,S=r.logarithmicDepthBuffer;let g=r.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(x){return h.add(x),x===0?"uv":`uv${x}`}function L(x,U,F,X,j,J){const $=X.fog,Q=j.geometry,oe=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?X.environment:null,ee=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Y=e.get(x.envMap||oe,ee),q=Y&&Y.mapping===Jl?Y.image.height:null,B=w[x.type];x.precision!==null&&(g=r.getMaxPrecision(x.precision),g!==x.precision&&gt("WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const b=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,O=b!==void 0?b.length:0;let he=0;Q.morphAttributes.position!==void 0&&(he=1),Q.morphAttributes.normal!==void 0&&(he=2),Q.morphAttributes.color!==void 0&&(he=3);let _e,Ce,Ee,W;if(B){const Dt=ki[B];_e=Dt.vertexShader,Ce=Dt.fragmentShader}else{_e=x.vertexShader,Ce=x.fragmentShader;const Dt=f.getVertexShaderStage(x),Nt=f.getFragmentShaderStage(x);f.update(x,Dt,Nt),Ee=Dt.id,W=Nt.id}const k=s.getRenderTarget(),V=s.state.buffers.depth.getReversed(),Me=j.isInstancedMesh===!0,ge=j.isBatchedMesh===!0,se=!!x.map,Pe=!!x.matcap,me=!!Y,Fe=!!x.aoMap,Ze=!!x.lightMap,Ue=!!x.bumpMap&&x.wireframe===!1,Ve=!!x.normalMap,pt=!!x.displacementMap,dt=!!x.emissiveMap,ft=!!x.metalnessMap,St=!!x.roughnessMap,K=x.anisotropy>0,Ht=x.clearcoat>0,Mt=x.dispersion>0,G=x.retroreflectivity>0,T=x.iridescence>0,re=x.sheen>0,ue=x.transmission>0,le=K&&!!x.anisotropyMap,be=Ht&&!!x.clearcoatMap,Ie=Ht&&!!x.clearcoatNormalMap,ye=Ht&&!!x.clearcoatRoughnessMap,we=T&&!!x.iridescenceMap,ze=T&&!!x.iridescenceThicknessMap,it=re&&!!x.sheenColorMap,Ge=re&&!!x.sheenRoughnessMap,ke=!!x.specularMap,rt=!!x.specularColorMap,lt=!!x.specularIntensityMap,ht=ue&&!!x.transmissionMap,te=ue&&!!x.thicknessMap,Oe=!!x.gradientMap,Se=!!x.alphaMap,Be=x.alphaTest>0,Ye=!!x.alphaHash,Te=!!x.extensions;let at=Gi;x.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(at=s.toneMapping);const tt={shaderID:B,shaderType:x.type,shaderName:x.name,vertexShader:_e,fragmentShader:Ce,defines:x.defines,customVertexShaderID:Ee,customFragmentShaderID:W,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:ge,batchingColor:ge&&j._colorsTexture!==null,instancing:Me,instancingColor:Me&&j.instanceColor!==null,instancingMorph:Me&&j.morphTexture!==null,outputColorSpace:k===null?s.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Rt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:se,matcap:Pe,envMap:me,envMapMode:me&&Y.mapping,envMapCubeUVHeight:q,aoMap:Fe,lightMap:Ze,bumpMap:Ue,normalMap:Ve,displacementMap:pt,emissiveMap:dt,normalMapObjectSpace:Ve&&x.normalMapType===dv,normalMapTangentSpace:Ve&&x.normalMapType===af,packedNormalMap:Ve&&x.normalMapType===af&&N1(x.normalMap.format),metalnessMap:ft,roughnessMap:St,anisotropy:K,anisotropyMap:le,clearcoat:Ht,clearcoatMap:be,clearcoatNormalMap:Ie,clearcoatRoughnessMap:ye,dispersion:Mt,retroreflection:G,iridescence:T,iridescenceMap:we,iridescenceThicknessMap:ze,sheen:re,sheenColorMap:it,sheenRoughnessMap:Ge,specularMap:ke,specularColorMap:rt,specularIntensityMap:lt,transmission:ue,transmissionMap:ht,thicknessMap:te,gradientMap:Oe,opaque:x.transparent===!1&&x.blending===to&&x.alphaToCoverage===!1,alphaMap:Se,alphaTest:Be,alphaHash:Ye,combine:x.combine,mapUv:se&&A(x.map.channel),aoMapUv:Fe&&A(x.aoMap.channel),lightMapUv:Ze&&A(x.lightMap.channel),bumpMapUv:Ue&&A(x.bumpMap.channel),normalMapUv:Ve&&A(x.normalMap.channel),displacementMapUv:pt&&A(x.displacementMap.channel),emissiveMapUv:dt&&A(x.emissiveMap.channel),metalnessMapUv:ft&&A(x.metalnessMap.channel),roughnessMapUv:St&&A(x.roughnessMap.channel),anisotropyMapUv:le&&A(x.anisotropyMap.channel),clearcoatMapUv:be&&A(x.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&A(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&A(x.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&A(x.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&A(x.iridescenceThicknessMap.channel),sheenColorMapUv:it&&A(x.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&A(x.sheenRoughnessMap.channel),specularMapUv:ke&&A(x.specularMap.channel),specularColorMapUv:rt&&A(x.specularColorMap.channel),specularIntensityMapUv:lt&&A(x.specularIntensityMap.channel),transmissionMapUv:ht&&A(x.transmissionMap.channel),thicknessMapUv:te&&A(x.thicknessMap.channel),alphaMapUv:Se&&A(x.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Ve||K),vertexNormals:!!Q.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!Q.attributes.uv&&(se||Se),fog:!!$,useFog:x.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||Q.attributes.normal===void 0&&Ve===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:V,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:he,numSunLights:U.sun.length,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numSunLightShadows:U.sunShadowMap.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:J.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:at,decodeVideoTexture:se&&x.map.isVideoTexture===!0&&Rt.getTransfer(x.map.colorSpace)===zt,decodeVideoTextureEmissive:dt&&x.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(x.emissiveMap.colorSpace)===zt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===rr,flipSided:x.side===Dn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Te&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&x.extensions.multiDraw===!0||ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return tt.vertexUv1s=h.has(1),tt.vertexUv2s=h.has(2),tt.vertexUv3s=h.has(3),h.clear(),tt}function y(x){const U=[];if(x.shaderID?U.push(x.shaderID):(U.push(x.customVertexShaderID),U.push(x.customFragmentShaderID)),x.defines!==void 0)for(const F in x.defines)U.push(F),U.push(x.defines[F]);return x.isRawShaderMaterial===!1&&(_(U,x),D(U,x),U.push(s.outputColorSpace)),U.push(x.customProgramCacheKey),U.join()}function _(x,U){x.push(U.precision),x.push(U.outputColorSpace),x.push(U.envMapMode),x.push(U.envMapCubeUVHeight),x.push(U.mapUv),x.push(U.alphaMapUv),x.push(U.lightMapUv),x.push(U.aoMapUv),x.push(U.bumpMapUv),x.push(U.normalMapUv),x.push(U.displacementMapUv),x.push(U.emissiveMapUv),x.push(U.metalnessMapUv),x.push(U.roughnessMapUv),x.push(U.anisotropyMapUv),x.push(U.clearcoatMapUv),x.push(U.clearcoatNormalMapUv),x.push(U.clearcoatRoughnessMapUv),x.push(U.iridescenceMapUv),x.push(U.iridescenceThicknessMapUv),x.push(U.sheenColorMapUv),x.push(U.sheenRoughnessMapUv),x.push(U.specularMapUv),x.push(U.specularColorMapUv),x.push(U.specularIntensityMapUv),x.push(U.transmissionMapUv),x.push(U.thicknessMapUv),x.push(U.combine),x.push(U.fogExp2),x.push(U.sizeAttenuation),x.push(U.morphTargetsCount),x.push(U.morphAttributeCount),x.push(U.numSunLights),x.push(U.numDirLights),x.push(U.numPointLights),x.push(U.numSpotLights),x.push(U.numSpotLightMaps),x.push(U.numHemiLights),x.push(U.numRectAreaLights),x.push(U.numSunLightShadows),x.push(U.numDirLightShadows),x.push(U.numPointLightShadows),x.push(U.numSpotLightShadows),x.push(U.numSpotLightShadowsWithMaps),x.push(U.numLightProbes),x.push(U.shadowMapType),x.push(U.toneMapping),x.push(U.numClippingPlanes),x.push(U.numClipIntersection),x.push(U.depthPacking)}function D(x,U){u.disableAll(),U.instancing&&u.enable(0),U.instancingColor&&u.enable(1),U.instancingMorph&&u.enable(2),U.matcap&&u.enable(3),U.envMap&&u.enable(4),U.normalMapObjectSpace&&u.enable(5),U.normalMapTangentSpace&&u.enable(6),U.clearcoat&&u.enable(7),U.iridescence&&u.enable(8),U.alphaTest&&u.enable(9),U.vertexColors&&u.enable(10),U.vertexAlphas&&u.enable(11),U.vertexUv1s&&u.enable(12),U.vertexUv2s&&u.enable(13),U.vertexUv3s&&u.enable(14),U.vertexTangents&&u.enable(15),U.anisotropy&&u.enable(16),U.alphaHash&&u.enable(17),U.batching&&u.enable(18),U.dispersion&&u.enable(19),U.retroreflection&&u.enable(24),U.batchingColor&&u.enable(20),U.gradientMap&&u.enable(21),U.packedNormalMap&&u.enable(22),U.vertexNormals&&u.enable(23),x.push(u.mask),u.disableAll(),U.fog&&u.enable(0),U.useFog&&u.enable(1),U.flatShading&&u.enable(2),U.logarithmicDepthBuffer&&u.enable(3),U.reversedDepthBuffer&&u.enable(4),U.skinning&&u.enable(5),U.morphTargets&&u.enable(6),U.morphNormals&&u.enable(7),U.morphColors&&u.enable(8),U.premultipliedAlpha&&u.enable(9),U.shadowMapEnabled&&u.enable(10),U.doubleSided&&u.enable(11),U.flipSided&&u.enable(12),U.useDepthPacking&&u.enable(13),U.dithering&&u.enable(14),U.transmission&&u.enable(15),U.sheen&&u.enable(16),U.opaque&&u.enable(17),U.pointsUvs&&u.enable(18),U.decodeVideoTexture&&u.enable(19),U.decodeVideoTextureEmissive&&u.enable(20),U.alphaToCoverage&&u.enable(21),U.numLightProbeGrids>0&&u.enable(22),U.hasPositionAttribute&&u.enable(23),x.push(u.mask)}function z(x){const U=w[x.type];let F;if(U){const X=ki[U];F=Zv.clone(X.uniforms)}else F=x.uniforms;return F}function R(x,U){let F=v.get(U);return F!==void 0?++F.usedTimes:(F=new A1(s,U,x,o),p.push(F),v.set(U,F)),F}function I(x){if(--x.usedTimes===0){const U=p.indexOf(x);p[U]=p[p.length-1],p.pop(),v.delete(x.cacheKey),x.destroy()}}function P(x){f.remove(x)}function E(){f.dispose()}return{getParameters:L,getProgramCacheKey:y,getUniforms:z,acquireProgram:R,releaseProgram:I,releaseShaderCache:P,programs:p,dispose:E}}function I1(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,h){s.get(u)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function D1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function n0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function i0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(g){let w=0;return g.isInstancedMesh&&(w+=2),g.isSkinnedMesh&&(w+=1),w}function f(g,w,A,L,y,_){let D=s[e];return D===void 0?(D={id:g.id,object:g,geometry:w,material:A,materialVariant:u(g),groupOrder:L,renderOrder:g.renderOrder,z:y,group:_},s[e]=D):(D.id=g.id,D.object=g,D.geometry=w,D.material=A,D.materialVariant=u(g),D.groupOrder=L,D.renderOrder=g.renderOrder,D.z=y,D.group=_),e++,D}function h(g,w,A,L,y,_,D){D.reversedDepth===!0&&(y=-y);const z=f(g,w,A,L,y,_);A.transmission>0?r.push(z):A.transparent===!0?o.push(z):t.push(z)}function p(g,w,A,L,y,_){const D=f(g,w,A,L,y,_);A.transmission>0?r.unshift(D):A.transparent===!0?o.unshift(D):t.unshift(D)}function v(g,w){t.length>1&&t.sort(g||D1),r.length>1&&r.sort(w||n0),o.length>1&&o.sort(w||n0)}function S(){for(let g=e,w=s.length;g<w;g++){const A=s[g];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:h,unshift:p,finish:S,sort:v}}function U1(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new i0,s.set(r,[u])):o>=l.length?(u=new i0,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function F1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new fe,color:new Lt};break;case"SpotLight":t={position:new fe,direction:new fe,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new fe,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new fe,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":t={color:new Lt,position:new fe,halfWidth:new fe,halfHeight:new fe};break}return s[e.id]=t,t}}}function k1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let O1=0;function B1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function z1(s){const e=new F1,t=k1(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new fe);const o=new fe,l=new en,u=new en;function f(p){let v=0,S=0,g=0;for(let j=0;j<9;j++)r.probe[j].set(0,0,0);let w=0,A=0,L=0,y=0,_=0,D=0,z=0,R=0,I=0,P=0,E=0,x=0,U=0,F=0;p.sort(B1);for(let j=0,J=p.length;j<J;j++){const $=p[j],Q=$.color,oe=$.intensity,ee=$.distance;let Y=null;if($.shadow&&$.shadow.map&&($.shadow.map.texture.format===ds?Y=$.shadow.map.texture:Y=$.shadow.map.depthTexture||$.shadow.map.texture),$.isAmbientLight)v+=Q.r*oe,S+=Q.g*oe,g+=Q.b*oe;else if($.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector($.sh.coefficients[q],oe);F++}else if($.isSunLight){const q=e.get($);if(q.color.copy($.color).multiplyScalar($.intensity),$.castShadow){const B=$.shadow,b=t.get($);b.shadowIntensity=B.intensity,b.shadowBias=B.bias,b.shadowNormalBias=B.normalBias,b.shadowRadius=B.radius,b.shadowMapSize.copy(B.mapSize).multiply(B.getFrameExtents()),r.sunShadow[A]=b,r.sunShadowMap[A]=Y;const O=B.getViewportCount();for(let he=0;he<O;he++)r.sunShadowMatrix[L+he]=B.getMatrix(he),r.sunShadowCascade[L+he]=B._cascadeData[he];L+=O,A++}r.sun[w]=q,w++}else if($.isDirectionalLight){const q=e.get($);if(q.color.copy($.color).multiplyScalar($.intensity),$.castShadow){const B=$.shadow,b=t.get($);b.shadowIntensity=B.intensity,b.shadowBias=B.bias,b.shadowNormalBias=B.normalBias,b.shadowRadius=B.radius,b.shadowMapSize=B.mapSize,r.directionalShadow[y]=b,r.directionalShadowMap[y]=Y,r.directionalShadowMatrix[y]=$.shadow.matrix,I++}r.directional[y]=q,y++}else if($.isSpotLight){const q=e.get($);q.position.setFromMatrixPosition($.matrixWorld),q.color.copy(Q).multiplyScalar(oe),q.distance=ee,q.coneCos=Math.cos($.angle),q.penumbraCos=Math.cos($.angle*(1-$.penumbra)),q.decay=$.decay,r.spot[D]=q;const B=$.shadow;if($.map&&(r.spotLightMap[x]=$.map,x++,B.updateMatrices($),$.castShadow&&U++),r.spotLightMatrix[D]=B.matrix,$.castShadow){const b=t.get($);b.shadowIntensity=B.intensity,b.shadowBias=B.bias,b.shadowNormalBias=B.normalBias,b.shadowRadius=B.radius,b.shadowMapSize=B.mapSize,r.spotShadow[D]=b,r.spotShadowMap[D]=Y,E++}D++}else if($.isRectAreaLight){const q=e.get($);q.color.copy(Q).multiplyScalar(oe),q.halfWidth.set($.width*.5,0,0),q.halfHeight.set(0,$.height*.5,0),r.rectArea[z]=q,z++}else if($.isPointLight){const q=e.get($);if(q.color.copy($.color).multiplyScalar($.intensity),q.distance=$.distance,q.decay=$.decay,$.castShadow){const B=$.shadow,b=t.get($);b.shadowIntensity=B.intensity,b.shadowBias=B.bias,b.shadowNormalBias=B.normalBias,b.shadowRadius=B.radius,b.shadowMapSize=B.mapSize,b.shadowCameraNear=B.camera.near,b.shadowCameraFar=B.camera.far,r.pointShadow[_]=b,r.pointShadowMap[_]=Y,r.pointShadowMatrix[_]=$.shadow.matrix,P++}r.point[_]=q,_++}else if($.isHemisphereLight){const q=e.get($);q.skyColor.copy($.color).multiplyScalar(oe),q.groundColor.copy($.groundColor).multiplyScalar(oe),r.hemi[R]=q,R++}}z>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=je.LTC_FLOAT_1,r.rectAreaLTC2=je.LTC_FLOAT_2):(r.rectAreaLTC1=je.LTC_HALF_1,r.rectAreaLTC2=je.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=S,r.ambient[2]=g;const X=r.hash;(X.sunLength!==w||X.directionalLength!==y||X.pointLength!==_||X.spotLength!==D||X.rectAreaLength!==z||X.hemiLength!==R||X.numSunShadows!==A||X.numDirectionalShadows!==I||X.numPointShadows!==P||X.numSpotShadows!==E||X.numSpotMaps!==x||X.numLightProbes!==F)&&(r.sun.length=w,r.directional.length=y,r.spot.length=D,r.rectArea.length=z,r.point.length=_,r.hemi.length=R,r.sunShadow.length=A,r.sunShadowMap.length=A,r.sunShadowMatrix.length=L,r.sunShadowCascade.length=L,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.directionalShadowMatrix.length=I,r.pointShadow.length=P,r.pointShadowMap.length=P,r.pointShadowMatrix.length=P,r.spotShadow.length=E,r.spotShadowMap.length=E,r.spotLightMatrix.length=E+x-U,r.spotLightMap.length=x,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=F,X.sunLength=w,X.directionalLength=y,X.pointLength=_,X.spotLength=D,X.rectAreaLength=z,X.hemiLength=R,X.numSunShadows=A,X.numDirectionalShadows=I,X.numPointShadows=P,X.numSpotShadows=E,X.numSpotMaps=x,X.numLightProbes=F,r.version=O1++)}function h(p,v){let S=0,g=0,w=0,A=0,L=0,y=0;const _=v.matrixWorldInverse;for(let D=0,z=p.length;D<z;D++){const R=p[D];if(R.isSunLight){const I=r.sun[S];I.direction.setFromMatrixPosition(R.matrixWorld),I.direction.transformDirection(_),S++}else if(R.isDirectionalLight){const I=r.directional[g];I.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(_),g++}else if(R.isSpotLight){const I=r.spot[A];I.position.setFromMatrixPosition(R.matrixWorld),I.position.applyMatrix4(_),I.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(_),A++}else if(R.isRectAreaLight){const I=r.rectArea[L];I.position.setFromMatrixPosition(R.matrixWorld),I.position.applyMatrix4(_),u.identity(),l.copy(R.matrixWorld),l.premultiply(_),u.extractRotation(l),I.halfWidth.set(R.width*.5,0,0),I.halfHeight.set(0,R.height*.5,0),I.halfWidth.applyMatrix4(u),I.halfHeight.applyMatrix4(u),L++}else if(R.isPointLight){const I=r.point[w];I.position.setFromMatrixPosition(R.matrixWorld),I.position.applyMatrix4(_),w++}else if(R.isHemisphereLight){const I=r.hemi[y];I.direction.setFromMatrixPosition(R.matrixWorld),I.direction.transformDirection(_),y++}}}return{setup:f,setupView:h,state:r}}function r0(s){const e=new z1(s),t=[],r=[],o=[];function l(g){S.camera=g,t.length=0,r.length=0,o.length=0}function u(g){t.push(g)}function f(g){r.push(g)}function h(g){o.push(g)}function p(){e.setup(t)}function v(g){e.setupView(t,g)}const S={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:S,setupLights:p,setupLightsView:v,pushLight:u,pushShadow:f,pushLightProbeGrid:h}}function G1(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new r0(s),e.set(o,[f])):l>=u.length?(f=new r0(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const H1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,W1=[new fe(1,0,0),new fe(-1,0,0),new fe(0,1,0),new fe(0,-1,0),new fe(0,0,1),new fe(0,0,-1)],X1=[new fe(0,-1,0),new fe(0,-1,0),new fe(0,0,1),new fe(0,0,-1),new fe(0,-1,0),new fe(0,-1,0)],s0=new en,Ka=new fe,vd=new fe;function j1(s,e,t){let r=new bf;const o=new bt,l=new bt,u=new Zt,f=new t_,h=new n_,p={},v=t.maxTextureSize,S={[cs]:Dn,[Dn]:cs,[rr]:rr},g=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:H1,fragmentShader:V1}),w=g.clone();w.defines.HORIZONTAL_PASS=1;const A=new Pi;A.setAttribute("position",new lr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const L=new ui(A,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zl;let _=this.type;this.render=function(P,E,x){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;this.type===Hx&&(gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=zl);const U=s.getRenderTarget(),F=s.getActiveCubeFace(),X=s.getActiveMipmapLevel(),j=s.state;j.setBlending(ar),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const J=_!==this.type;J&&E.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(Q=>Q.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,Q=P.length;$<Q;$++){const oe=P[$],ee=oe.shadow;if(ee===void 0){gt("WebGLShadowMap:",oe,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;o.copy(ee.mapSize);const Y=ee.getFrameExtents();o.multiply(Y),l.copy(ee.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/Y.x),o.x=l.x*Y.x,ee.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/Y.y),o.y=l.y*Y.y,ee.mapSize.y=l.y));const q=s.state.buffers.depth.getReversed();if(ee.camera._reversedDepth=q,ee.map===null||J===!0){if(ee.map!==null&&(ee.map.depthTexture!==null&&(ee.map.depthTexture.dispose(),ee.map.depthTexture=null),ee.map.dispose()),this.type===Ja){if(oe.isPointLight){gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ee.map=new Ci(o.x,o.y,{format:ds,type:Vi,minFilter:An,magFilter:An,generateMipmaps:!1}),ee.map.texture.name=oe.name+".shadowMap",ee.map.depthTexture=new oo(o.x,o.y,Bi),ee.map.depthTexture.name=oe.name+".shadowMapDepth",ee.map.depthTexture.format=cr,ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=_n,ee.map.depthTexture.magFilter=_n}else oe.isPointLight?(ee.map=new z0(o.x),ee.map.depthTexture=new $v(o.x,Hi)):(ee.map=new Ci(o.x,o.y),ee.map.depthTexture=new oo(o.x,o.y,Hi)),ee.map.depthTexture.name=oe.name+".shadowMap",ee.map.depthTexture.format=cr,this.type===zl?(ee.map.depthTexture.compareFunction=q?wf:Mf,ee.map.depthTexture.minFilter=An,ee.map.depthTexture.magFilter=An):(ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=_n,ee.map.depthTexture.magFilter=_n);ee.camera.updateProjectionMatrix()}ee.map.isWebGLCubeRenderTarget!==!0&&(ee.map.width!==o.x||ee.map.height!==o.y)&&ee.map.setSize(o.x,o.y);const B=ee.map.isWebGLCubeRenderTarget?6:ee.getViewportCount();oe.isPointLight!==!0&&ee.updateMatrices(oe,x);for(let b=0;b<B;b++){const O=ee.getCamera(b);if(oe.isPointLight){const he=ee.camera,_e=ee.matrix,Ce=oe.distance||he.far;Ce!==he.far&&(he.far=Ce,he.updateProjectionMatrix()),Ka.setFromMatrixPosition(oe.matrixWorld),he.position.copy(Ka),vd.copy(he.position),vd.add(W1[b]),he.up.copy(X1[b]),he.lookAt(vd),he.updateMatrixWorld(),_e.makeTranslation(-Ka.x,-Ka.y,-Ka.z),s0.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),ee._frustum.setFromProjectionMatrix(s0,he.coordinateSystem,he.reversedDepth)}if(ee.map.isWebGLCubeRenderTarget)s.setRenderTarget(ee.map,b),s.clear();else{b===0&&(s.setRenderTarget(ee.map),s.clear());const he=ee.getViewport(b);u.set(l.x*he.x,l.y*he.y,l.x*he.z,l.y*he.w),j.viewport(u)}r=ee.getFrustum(b),R(E,x,O,oe,this.type)}ee.isPointLightShadow!==!0&&this.type===Ja&&D(ee,x),ee.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(U,F,X)};function D(P,E){const x=e.update(L);g.defines.VSM_SAMPLES!==P.blurSamples&&(g.defines.VSM_SAMPLES=P.blurSamples,w.defines.VSM_SAMPLES=P.blurSamples,g.needsUpdate=!0,w.needsUpdate=!0),P.mapPass===null?P.mapPass=new Ci(o.x,o.y,{format:ds,type:Vi}):(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)&&P.mapPass.setSize(P.map.width,P.map.height),g.uniforms.shadow_pass.value=P.map.depthTexture,g.uniforms.resolution.value.set(P.map.width,P.map.height),g.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(E,null,x,g,L,null),w.uniforms.shadow_pass.value=P.mapPass.texture,w.uniforms.resolution.value.set(P.map.width,P.map.height),w.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(E,null,x,w,L,null)}function z(P,E,x,U){let F=null;const X=x.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(X!==void 0)F=X;else if(F=x.isPointLight===!0?h:f,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const j=F.uuid,J=E.uuid;let $=p[j];$===void 0&&($={},p[j]=$);let Q=$[J];Q===void 0&&(Q=F.clone(),$[J]=Q,E.addEventListener("dispose",I)),F=Q}if(F.visible=E.visible,F.wireframe=E.wireframe,U===Ja?F.side=E.shadowSide!==null?E.shadowSide:E.side:F.side=E.shadowSide!==null?E.shadowSide:S[E.side],F.alphaMap=E.alphaMap,F.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,F.map=E.map,F.clipShadows=E.clipShadows,F.clippingPlanes=E.clippingPlanes,F.clipIntersection=E.clipIntersection,F.displacementMap=E.displacementMap,F.displacementScale=E.displacementScale,F.displacementBias=E.displacementBias,F.wireframeLinewidth=E.wireframeLinewidth,F.linewidth=E.linewidth,x.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const j=s.properties.get(F);j.light=x}return F}function R(P,E,x,U,F){if(P.visible===!1)return;if(P.layers.test(E.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&F===Ja)&&(!P.frustumCulled||P.intersectsFrustum(r))){P.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,P.matrixWorld);const J=e.update(P),$=P.material;if(Array.isArray($)){const Q=J.groups;for(let oe=0,ee=Q.length;oe<ee;oe++){const Y=Q[oe],q=$[Y.materialIndex];if(q&&q.visible){const B=z(P,q,U,F);P.onBeforeShadow(s,P,E,x,J,B,Y),s.renderBufferDirect(x,null,J,B,P,Y),P.onAfterShadow(s,P,E,x,J,B,Y)}}}else if($.visible){const Q=z(P,$,U,F);P.onBeforeShadow(s,P,E,x,J,Q,null),s.renderBufferDirect(x,null,J,Q,P,null),P.onAfterShadow(s,P,E,x,J,Q,null)}}const j=P.children;for(let J=0,$=j.length;J<$;J++)R(j[J],E,x,U,F)}function I(P){P.target.removeEventListener("dispose",I);for(const x in p){const U=p[x],F=P.target.uuid;F in U&&(U[F].dispose(),delete U[F])}}}function Y1(s,e){function t(){let te=!1;const Oe=new Zt;let Se=null;const Be=new Zt(0,0,0,0);return{setMask:function(Ye){Se!==Ye&&!te&&(s.colorMask(Ye,Ye,Ye,Ye),Se=Ye)},setLocked:function(Ye){te=Ye},setClear:function(Ye,Te,at,tt,Dt){Dt===!0&&(Ye*=tt,Te*=tt,at*=tt),Oe.set(Ye,Te,at,tt),Be.equals(Oe)===!1&&(s.clearColor(Ye,Te,at,tt),Be.copy(Oe))},reset:function(){te=!1,Se=null,Be.set(-1,0,0,0)}}}function r(){let te=!1,Oe=!1,Se=null,Be=null,Ye=null;return{setReversed:function(Te){if(Oe!==Te){const at=e.get("EXT_clip_control");Te?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT),Oe=Te;const tt=Ye;Ye=null,this.setClear(tt)}},getReversed:function(){return Oe},setTest:function(Te){Te?k(s.DEPTH_TEST):V(s.DEPTH_TEST)},setMask:function(Te){Se!==Te&&!te&&(s.depthMask(Te),Se=Te)},setFunc:function(Te){if(Oe&&(Te=wv[Te]),Be!==Te){switch(Te){case Sd:s.depthFunc(s.NEVER);break;case Md:s.depthFunc(s.ALWAYS);break;case wd:s.depthFunc(s.LESS);break;case no:s.depthFunc(s.LEQUAL);break;case Ed:s.depthFunc(s.EQUAL);break;case Td:s.depthFunc(s.GEQUAL);break;case bd:s.depthFunc(s.GREATER);break;case Ad:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Be=Te}},setLocked:function(Te){te=Te},setClear:function(Te){Ye!==Te&&(Ye=Te,Oe&&(Te=1-Te),s.clearDepth(Te))},reset:function(){te=!1,Se=null,Be=null,Ye=null,Oe=!1}}}function o(){let te=!1,Oe=null,Se=null,Be=null,Ye=null,Te=null,at=null,tt=null,Dt=null;return{setTest:function(Nt){te||(Nt?k(s.STENCIL_TEST):V(s.STENCIL_TEST))},setMask:function(Nt){Oe!==Nt&&!te&&(s.stencilMask(Nt),Oe=Nt)},setFunc:function(Nt,gn,Zn){(Se!==Nt||Be!==gn||Ye!==Zn)&&(s.stencilFunc(Nt,gn,Zn),Se=Nt,Be=gn,Ye=Zn)},setOp:function(Nt,gn,Zn){(Te!==Nt||at!==gn||tt!==Zn)&&(s.stencilOp(Nt,gn,Zn),Te=Nt,at=gn,tt=Zn)},setLocked:function(Nt){te=Nt},setClear:function(Nt){Dt!==Nt&&(s.clearStencil(Nt),Dt=Nt)},reset:function(){te=!1,Oe=null,Se=null,Be=null,Ye=null,Te=null,at=null,tt=null,Dt=null}}}const l=new t,u=new r,f=new o,h=new WeakMap,p=new WeakMap;let v={},S={},g={},w=new WeakMap,A=[],L=null,y=!1,_=null,D=null,z=null,R=null,I=null,P=null,E=null,x=new Lt(0,0,0),U=0,F=!1,X=null,j=null,J=null,$=null,Q=null;const oe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,Y=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(q)[1]),ee=Y>=1):q.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),ee=Y>=2);let B=null,b={};const O=s.getParameter(s.SCISSOR_BOX),he=s.getParameter(s.VIEWPORT),_e=new Zt().fromArray(O),Ce=new Zt().fromArray(he);function Ee(te,Oe,Se,Be){const Ye=new Uint8Array(4),Te=s.createTexture();s.bindTexture(te,Te),s.texParameteri(te,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(te,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let at=0;at<Se;at++)te===s.TEXTURE_3D||te===s.TEXTURE_2D_ARRAY?s.texImage3D(Oe,0,s.RGBA,1,1,Be,0,s.RGBA,s.UNSIGNED_BYTE,Ye):s.texImage2D(Oe+at,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ye);return Te}const W={};W[s.TEXTURE_2D]=Ee(s.TEXTURE_2D,s.TEXTURE_2D,1),W[s.TEXTURE_CUBE_MAP]=Ee(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[s.TEXTURE_2D_ARRAY]=Ee(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),W[s.TEXTURE_3D]=Ee(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),k(s.DEPTH_TEST),u.setFunc(no),Ue(!1),Ve(lm),k(s.CULL_FACE),Fe(ar);function k(te){v[te]!==!0&&(s.enable(te),v[te]=!0)}function V(te){v[te]!==!1&&(s.disable(te),v[te]=!1)}function Me(te,Oe){return g[te]!==Oe?(s.bindFramebuffer(te,Oe),g[te]=Oe,te===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Oe),te===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Oe),!0):!1}function ge(te,Oe){let Se=A,Be=!1;if(te){Se=w.get(Oe),Se===void 0&&(Se=[],w.set(Oe,Se));const Ye=te.textures;if(Se.length!==Ye.length||Se[0]!==s.COLOR_ATTACHMENT0){for(let Te=0,at=Ye.length;Te<at;Te++)Se[Te]=s.COLOR_ATTACHMENT0+Te;Se.length=Ye.length,Be=!0}}else Se[0]!==s.BACK&&(Se[0]=s.BACK,Be=!0);Be&&s.drawBuffers(Se)}function se(te){return L!==te?(s.useProgram(te),L=te,!0):!1}const Pe={[Qs]:s.FUNC_ADD,[Wx]:s.FUNC_SUBTRACT,[Xx]:s.FUNC_REVERSE_SUBTRACT};Pe[jx]=s.MIN,Pe[Yx]=s.MAX;const me={[qx]:s.ZERO,[$x]:s.ONE,[Kx]:s.SRC_COLOR,[c0]:s.SRC_ALPHA,[nv]:s.SRC_ALPHA_SATURATE,[ev]:s.DST_COLOR,[Qx]:s.DST_ALPHA,[Zx]:s.ONE_MINUS_SRC_COLOR,[u0]:s.ONE_MINUS_SRC_ALPHA,[tv]:s.ONE_MINUS_DST_COLOR,[Jx]:s.ONE_MINUS_DST_ALPHA,[iv]:s.CONSTANT_COLOR,[rv]:s.ONE_MINUS_CONSTANT_COLOR,[sv]:s.CONSTANT_ALPHA,[av]:s.ONE_MINUS_CONSTANT_ALPHA};function Fe(te,Oe,Se,Be,Ye,Te,at,tt,Dt,Nt){if(te===ar){y===!0&&(V(s.BLEND),y=!1);return}if(y===!1&&(k(s.BLEND),y=!0),te!==Vx){if(te!==_||Nt!==F){if((D!==Qs||I!==Qs)&&(s.blendEquation(s.FUNC_ADD),D=Qs,I=Qs),Nt)switch(te){case to:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yd:s.blendFunc(s.ONE,s.ONE);break;case cm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case um:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:kt("WebGLState: Invalid blending: ",te);break}else switch(te){case to:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yd:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case cm:kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case um:kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:kt("WebGLState: Invalid blending: ",te);break}z=null,R=null,P=null,E=null,x.set(0,0,0),U=0,_=te,F=Nt}return}Ye=Ye||Oe,Te=Te||Se,at=at||Be,(Oe!==D||Ye!==I)&&(s.blendEquationSeparate(Pe[Oe],Pe[Ye]),D=Oe,I=Ye),(Se!==z||Be!==R||Te!==P||at!==E)&&(s.blendFuncSeparate(me[Se],me[Be],me[Te],me[at]),z=Se,R=Be,P=Te,E=at),(tt.equals(x)===!1||Dt!==U)&&(s.blendColor(tt.r,tt.g,tt.b,Dt),x.copy(tt),U=Dt),_=te,F=!1}function Ze(te,Oe){te.side===rr?V(s.CULL_FACE):k(s.CULL_FACE);let Se=te.side===Dn;Oe&&(Se=!Se),Ue(Se),te.blending===to&&te.transparent===!1?Fe(ar):Fe(te.blending,te.blendEquation,te.blendSrc,te.blendDst,te.blendEquationAlpha,te.blendSrcAlpha,te.blendDstAlpha,te.blendColor,te.blendAlpha,te.premultipliedAlpha),u.setFunc(te.depthFunc),u.setTest(te.depthTest),u.setMask(te.depthWrite),l.setMask(te.colorWrite);const Be=te.stencilWrite;f.setTest(Be),Be&&(f.setMask(te.stencilWriteMask),f.setFunc(te.stencilFunc,te.stencilRef,te.stencilFuncMask),f.setOp(te.stencilFail,te.stencilZFail,te.stencilZPass)),dt(te.polygonOffset,te.polygonOffsetFactor,te.polygonOffsetUnits),te.alphaToCoverage===!0?k(s.SAMPLE_ALPHA_TO_COVERAGE):V(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(te){X!==te&&(te?s.frontFace(s.CW):s.frontFace(s.CCW),X=te)}function Ve(te){te!==zx?(k(s.CULL_FACE),te!==j&&(te===lm?s.cullFace(s.BACK):te===Gx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):V(s.CULL_FACE),j=te}function pt(te){te!==J&&(ee&&s.lineWidth(te),J=te)}function dt(te,Oe,Se){te?(k(s.POLYGON_OFFSET_FILL),($!==Oe||Q!==Se)&&($=Oe,Q=Se,u.getReversed()&&(Oe=-Oe),s.polygonOffset(Oe,Se))):V(s.POLYGON_OFFSET_FILL)}function ft(te){te?k(s.SCISSOR_TEST):V(s.SCISSOR_TEST)}function St(te){te===void 0&&(te=s.TEXTURE0+oe-1),B!==te&&(s.activeTexture(te),B=te)}function K(te,Oe,Se){Se===void 0&&(B===null?Se=s.TEXTURE0+oe-1:Se=B);let Be=b[Se];Be===void 0&&(Be={type:void 0,texture:void 0},b[Se]=Be),(Be.type!==te||Be.texture!==Oe)&&(B!==Se&&(s.activeTexture(Se),B=Se),s.bindTexture(te,Oe||W[te]),Be.type=te,Be.texture=Oe)}function Ht(){const te=b[B];te!==void 0&&te.type!==void 0&&(s.bindTexture(te.type,null),te.type=void 0,te.texture=void 0)}function Mt(){try{s.compressedTexImage2D(...arguments)}catch(te){kt("WebGLState:",te)}}function G(){try{s.compressedTexImage3D(...arguments)}catch(te){kt("WebGLState:",te)}}function T(){try{s.texSubImage2D(...arguments)}catch(te){kt("WebGLState:",te)}}function re(){try{s.texSubImage3D(...arguments)}catch(te){kt("WebGLState:",te)}}function ue(){try{s.compressedTexSubImage2D(...arguments)}catch(te){kt("WebGLState:",te)}}function le(){try{s.compressedTexSubImage3D(...arguments)}catch(te){kt("WebGLState:",te)}}function be(){try{s.texStorage2D(...arguments)}catch(te){kt("WebGLState:",te)}}function Ie(){try{s.texStorage3D(...arguments)}catch(te){kt("WebGLState:",te)}}function ye(){try{s.texImage2D(...arguments)}catch(te){kt("WebGLState:",te)}}function we(){try{s.texImage3D(...arguments)}catch(te){kt("WebGLState:",te)}}function ze(te){return S[te]!==void 0?S[te]:s.getParameter(te)}function it(te,Oe){S[te]!==Oe&&(s.pixelStorei(te,Oe),S[te]=Oe)}function Ge(te){_e.equals(te)===!1&&(s.scissor(te.x,te.y,te.z,te.w),_e.copy(te))}function ke(te){Ce.equals(te)===!1&&(s.viewport(te.x,te.y,te.z,te.w),Ce.copy(te))}function rt(te,Oe){let Se=p.get(Oe);Se===void 0&&(Se=new WeakMap,p.set(Oe,Se));let Be=Se.get(te);Be===void 0&&(Be=s.getUniformBlockIndex(Oe,te.name),Se.set(te,Be))}function lt(te,Oe){const Be=p.get(Oe).get(te);h.get(Oe)!==Be&&(s.uniformBlockBinding(Oe,Be,te.__bindingPointIndex),h.set(Oe,Be))}function ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},S={},B=null,b={},g={},w=new WeakMap,A=[],L=null,y=!1,_=null,D=null,z=null,R=null,I=null,P=null,E=null,x=new Lt(0,0,0),U=0,F=!1,X=null,j=null,J=null,$=null,Q=null,_e.set(0,0,s.canvas.width,s.canvas.height),Ce.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:k,disable:V,bindFramebuffer:Me,drawBuffers:ge,useProgram:se,setBlending:Fe,setMaterial:Ze,setFlipSided:Ue,setCullFace:Ve,setLineWidth:pt,setPolygonOffset:dt,setScissorTest:ft,activeTexture:St,bindTexture:K,unbindTexture:Ht,compressedTexImage2D:Mt,compressedTexImage3D:G,texImage2D:ye,texImage3D:we,pixelStorei:it,getParameter:ze,updateUBOMapping:rt,uniformBlockBinding:lt,texStorage2D:be,texStorage3D:Ie,texSubImage2D:T,texSubImage3D:re,compressedTexSubImage2D:ue,compressedTexSubImage3D:le,scissor:Ge,viewport:ke,reset:ht}}function q1(s,e,t,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new bt,v=new WeakMap,S=new Set;let g;const w=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function L(G,T){return A?new OffscreenCanvas(G,T):Kl("canvas")}function y(G,T,re){let ue=1;const le=Mt(G);if((le.width>re||le.height>re)&&(ue=re/Math.max(le.width,le.height)),ue<1)if(typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&G instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&G instanceof ImageBitmap||typeof VideoFrame<"u"&&G instanceof VideoFrame){const be=Math.floor(ue*le.width),Ie=Math.floor(ue*le.height);g===void 0&&(g=L(be,Ie));const ye=T?L(be,Ie):g;return ye.width=be,ye.height=Ie,ye.getContext("2d").drawImage(G,0,0,be,Ie),gt("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+be+"x"+Ie+")."),ye}else return"data"in G&&gt("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),G;return G}function _(G){return G.generateMipmaps}function D(G){s.generateMipmap(G)}function z(G){return G.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:G.isWebGL3DRenderTarget?s.TEXTURE_3D:G.isWebGLArrayRenderTarget||G.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function R(G,T,re,ue,le,be=!1){if(G!==null){if(s[G]!==void 0)return s[G];gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+G+"'")}let Ie;ue&&(Ie=e.get("EXT_texture_norm16"),Ie||gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ye=T;if(T===s.RED&&(re===s.FLOAT&&(ye=s.R32F),re===s.HALF_FLOAT&&(ye=s.R16F),re===s.UNSIGNED_BYTE&&(ye=s.R8),re===s.UNSIGNED_SHORT&&Ie&&(ye=Ie.R16_EXT),re===s.SHORT&&Ie&&(ye=Ie.R16_SNORM_EXT)),T===s.RED_INTEGER&&(re===s.UNSIGNED_BYTE&&(ye=s.R8UI),re===s.UNSIGNED_SHORT&&(ye=s.R16UI),re===s.UNSIGNED_INT&&(ye=s.R32UI),re===s.BYTE&&(ye=s.R8I),re===s.SHORT&&(ye=s.R16I),re===s.INT&&(ye=s.R32I)),T===s.RG&&(re===s.FLOAT&&(ye=s.RG32F),re===s.HALF_FLOAT&&(ye=s.RG16F),re===s.UNSIGNED_BYTE&&(ye=s.RG8),re===s.UNSIGNED_SHORT&&Ie&&(ye=Ie.RG16_EXT),re===s.SHORT&&Ie&&(ye=Ie.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(re===s.UNSIGNED_BYTE&&(ye=s.RG8UI),re===s.UNSIGNED_SHORT&&(ye=s.RG16UI),re===s.UNSIGNED_INT&&(ye=s.RG32UI),re===s.BYTE&&(ye=s.RG8I),re===s.SHORT&&(ye=s.RG16I),re===s.INT&&(ye=s.RG32I)),T===s.RGB_INTEGER&&(re===s.UNSIGNED_BYTE&&(ye=s.RGB8UI),re===s.UNSIGNED_SHORT&&(ye=s.RGB16UI),re===s.UNSIGNED_INT&&(ye=s.RGB32UI),re===s.BYTE&&(ye=s.RGB8I),re===s.SHORT&&(ye=s.RGB16I),re===s.INT&&(ye=s.RGB32I)),T===s.RGBA_INTEGER&&(re===s.UNSIGNED_BYTE&&(ye=s.RGBA8UI),re===s.UNSIGNED_SHORT&&(ye=s.RGBA16UI),re===s.UNSIGNED_INT&&(ye=s.RGBA32UI),re===s.BYTE&&(ye=s.RGBA8I),re===s.SHORT&&(ye=s.RGBA16I),re===s.INT&&(ye=s.RGBA32I)),T===s.RGB&&(re===s.UNSIGNED_SHORT&&Ie&&(ye=Ie.RGB16_EXT),re===s.SHORT&&Ie&&(ye=Ie.RGB16_SNORM_EXT),re===s.UNSIGNED_INT_5_9_9_9_REV&&(ye=s.RGB9_E5),re===s.UNSIGNED_INT_10F_11F_11F_REV&&(ye=s.R11F_G11F_B10F)),T===s.RGBA){const we=be?$l:Rt.getTransfer(le);re===s.FLOAT&&(ye=s.RGBA32F),re===s.HALF_FLOAT&&(ye=s.RGBA16F),re===s.UNSIGNED_BYTE&&(ye=we===zt?s.SRGB8_ALPHA8:s.RGBA8),re===s.UNSIGNED_SHORT&&Ie&&(ye=Ie.RGBA16_EXT),re===s.SHORT&&Ie&&(ye=Ie.RGBA16_SNORM_EXT),re===s.UNSIGNED_SHORT_4_4_4_4&&(ye=s.RGBA4),re===s.UNSIGNED_SHORT_5_5_5_1&&(ye=s.RGB5_A1)}return(ye===s.R16F||ye===s.R32F||ye===s.RG16F||ye===s.RG32F||ye===s.RGBA16F||ye===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ye}function I(G,T){let re;return G?T===null||T===Hi||T===so?re=s.DEPTH24_STENCIL8:T===Bi?re=s.DEPTH32F_STENCIL8:T===ro&&(re=s.DEPTH24_STENCIL8,gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Hi||T===so?re=s.DEPTH_COMPONENT24:T===Bi?re=s.DEPTH_COMPONENT32F:T===ro&&(re=s.DEPTH_COMPONENT16),re}function P(G,T){return _(G)===!0||G.isFramebufferTexture&&G.minFilter!==_n&&G.minFilter!==An?Math.log2(Math.max(T.width,T.height))+1:G.mipmaps!==void 0&&G.mipmaps.length>0?G.mipmaps.length:G.isCompressedTexture&&Array.isArray(G.image)?T.mipmaps.length:1}function E(G){const T=G.target;T.removeEventListener("dispose",E),U(T),T.isVideoTexture&&v.delete(T),T.isHTMLTexture&&S.delete(T)}function x(G){const T=G.target;T.removeEventListener("dispose",x),X(T)}function U(G){const T=r.get(G);if(T.__webglInit===void 0)return;const re=G.source,ue=w.get(re);if(ue){const le=ue[T.__cacheKey];le.usedTimes--,le.usedTimes===0&&F(G),Object.keys(ue).length===0&&w.delete(re)}r.remove(G)}function F(G){const T=r.get(G);s.deleteTexture(T.__webglTexture);const re=G.source,ue=w.get(re);delete ue[T.__cacheKey],u.memory.textures--}function X(G){const T=r.get(G);if(G.depthTexture&&(G.depthTexture.dispose(),r.remove(G.depthTexture)),G.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(T.__webglFramebuffer[ue]))for(let le=0;le<T.__webglFramebuffer[ue].length;le++)s.deleteFramebuffer(T.__webglFramebuffer[ue][le]);else s.deleteFramebuffer(T.__webglFramebuffer[ue]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[ue])}else{if(Array.isArray(T.__webglFramebuffer))for(let ue=0;ue<T.__webglFramebuffer.length;ue++)s.deleteFramebuffer(T.__webglFramebuffer[ue]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ue=0;ue<T.__webglColorRenderbuffer.length;ue++)T.__webglColorRenderbuffer[ue]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[ue]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const re=G.textures;for(let ue=0,le=re.length;ue<le;ue++){const be=r.get(re[ue]);be.__webglTexture&&(s.deleteTexture(be.__webglTexture),u.memory.textures--),r.remove(re[ue])}r.remove(G)}let j=0;function J(){j=0}function $(){return j}function Q(G){j=G}function oe(){const G=j;return G>=o.maxTextures&&gt("WebGLTextures: Trying to use "+(G+1)+" texture units while this GPU supports only "+o.maxTextures),j+=1,G}function ee(G){const T=[];return T.push(G.wrapS),T.push(G.wrapT),T.push(G.wrapR||0),T.push(G.magFilter),T.push(G.minFilter),T.push(G.anisotropy),T.push(G.internalFormat),T.push(G.format),T.push(G.type),T.push(G.generateMipmaps),T.push(G.premultiplyAlpha),T.push(G.flipY),T.push(G.unpackAlignment),T.push(G.colorSpace),T.join()}function Y(G,T){const re=r.get(G);if(G.isVideoTexture&&K(G),G.isRenderTargetTexture===!1&&G.isExternalTexture!==!0&&G.version>0&&re.__version!==G.version){const ue=G.image;if(ue===null)gt("WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)gt("WebGLRenderer: Texture marked for update but image is incomplete");else{V(re,G,T);return}}else G.isExternalTexture&&(re.__webglTexture=G.sourceTexture?G.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,re.__webglTexture,s.TEXTURE0+T)}function q(G,T){const re=r.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&re.__version!==G.version){V(re,G,T);return}else G.isExternalTexture&&(re.__webglTexture=G.sourceTexture?G.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,re.__webglTexture,s.TEXTURE0+T)}function B(G,T){const re=r.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&re.__version!==G.version){V(re,G,T);return}t.bindTexture(s.TEXTURE_3D,re.__webglTexture,s.TEXTURE0+T)}function b(G,T){const re=r.get(G);if(G.isCubeDepthTexture!==!0&&G.version>0&&re.__version!==G.version){Me(re,G,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture,s.TEXTURE0+T)}const O={[io]:s.REPEAT,[bi]:s.CLAMP_TO_EDGE,[Cd]:s.MIRRORED_REPEAT},he={[_n]:s.NEAREST,[cv]:s.NEAREST_MIPMAP_NEAREST,[xl]:s.NEAREST_MIPMAP_LINEAR,[An]:s.LINEAR,[Hu]:s.LINEAR_MIPMAP_NEAREST,[ss]:s.LINEAR_MIPMAP_LINEAR},_e={[hv]:s.NEVER,[vv]:s.ALWAYS,[pv]:s.LESS,[Mf]:s.LEQUAL,[mv]:s.EQUAL,[wf]:s.GEQUAL,[gv]:s.GREATER,[xv]:s.NOTEQUAL};function Ce(G,T){if(T.type===Bi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===An||T.magFilter===Hu||T.magFilter===xl||T.magFilter===ss||T.minFilter===An||T.minFilter===Hu||T.minFilter===xl||T.minFilter===ss)&&gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(G,s.TEXTURE_WRAP_S,O[T.wrapS]),s.texParameteri(G,s.TEXTURE_WRAP_T,O[T.wrapT]),(G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY)&&s.texParameteri(G,s.TEXTURE_WRAP_R,O[T.wrapR]),s.texParameteri(G,s.TEXTURE_MAG_FILTER,he[T.magFilter]),s.texParameteri(G,s.TEXTURE_MIN_FILTER,he[T.minFilter]),T.compareFunction&&(s.texParameteri(G,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(G,s.TEXTURE_COMPARE_FUNC,_e[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===_n||T.minFilter!==xl&&T.minFilter!==ss||T.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const re=e.get("EXT_texture_filter_anisotropic");s.texParameterf(G,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Ee(G,T){let re=!1;G.__webglInit===void 0&&(G.__webglInit=!0,T.addEventListener("dispose",E));const ue=T.source;let le=w.get(ue);le===void 0&&(le={},w.set(ue,le));const be=ee(T);if(be!==G.__cacheKey){le[be]===void 0&&(le[be]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,re=!0),le[be].usedTimes++;const Ie=le[G.__cacheKey];Ie!==void 0&&(le[G.__cacheKey].usedTimes--,Ie.usedTimes===0&&F(T)),G.__cacheKey=be,G.__webglTexture=le[be].texture}return re}function W(G,T,re){return Math.floor(Math.floor(G/re)/T)}function k(G,T,re,ue){const be=G.updateRanges;if(be.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,re,ue,T.data);else{be.sort((it,Ge)=>it.start-Ge.start);let Ie=0;for(let it=1;it<be.length;it++){const Ge=be[Ie],ke=be[it],rt=Ge.start+Ge.count,lt=W(ke.start,T.width,4),ht=W(Ge.start,T.width,4);ke.start<=rt+1&&lt===ht&&W(ke.start+ke.count-1,T.width,4)===lt?Ge.count=Math.max(Ge.count,ke.start+ke.count-Ge.start):(++Ie,be[Ie]=ke)}be.length=Ie+1;const ye=t.getParameter(s.UNPACK_ROW_LENGTH),we=t.getParameter(s.UNPACK_SKIP_PIXELS),ze=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let it=0,Ge=be.length;it<Ge;it++){const ke=be[it],rt=Math.floor(ke.start/4),lt=Math.ceil(ke.count/4),ht=rt%T.width,te=Math.floor(rt/T.width),Oe=lt,Se=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,ht),t.pixelStorei(s.UNPACK_SKIP_ROWS,te),t.texSubImage2D(s.TEXTURE_2D,0,ht,te,Oe,Se,re,ue,T.data)}G.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ye),t.pixelStorei(s.UNPACK_SKIP_PIXELS,we),t.pixelStorei(s.UNPACK_SKIP_ROWS,ze)}}function V(G,T,re){let ue=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ue=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ue=s.TEXTURE_3D);const le=Ee(G,T),be=T.source;t.bindTexture(ue,G.__webglTexture,s.TEXTURE0+re);const Ie=r.get(be);if(be.version!==Ie.__version||le===!0){if(t.activeTexture(s.TEXTURE0+re),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const Se=Rt.getPrimaries(Rt.workingColorSpace),Be=T.colorSpace===Dr?null:Rt.getPrimaries(T.colorSpace),Ye=T.colorSpace===Dr||Se===Be?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye)}t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let we=y(T.image,!1,o.maxTextureSize);we=Ht(T,we);const ze=l.convert(T.format,T.colorSpace),it=l.convert(T.type);let Ge=R(T.internalFormat,ze,it,T.normalized,T.colorSpace,T.isVideoTexture);Ce(ue,T);let ke;const rt=T.mipmaps,lt=T.isVideoTexture!==!0,ht=Ie.__version===void 0||le===!0,te=be.dataReady,Oe=P(T,we);if(T.isDepthTexture)Ge=I(T.format===as,T.type),ht&&(lt?t.texStorage2D(s.TEXTURE_2D,1,Ge,we.width,we.height):t.texImage2D(s.TEXTURE_2D,0,Ge,we.width,we.height,0,ze,it,null));else if(T.isDataTexture)if(rt.length>0){lt&&ht&&t.texStorage2D(s.TEXTURE_2D,Oe,Ge,rt[0].width,rt[0].height);for(let Se=0,Be=rt.length;Se<Be;Se++)ke=rt[Se],lt?te&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,ke.width,ke.height,ze,it,ke.data):t.texImage2D(s.TEXTURE_2D,Se,Ge,ke.width,ke.height,0,ze,it,ke.data);T.generateMipmaps=!1}else lt?(ht&&t.texStorage2D(s.TEXTURE_2D,Oe,Ge,we.width,we.height),te&&k(T,we,ze,it)):t.texImage2D(s.TEXTURE_2D,0,Ge,we.width,we.height,0,ze,it,we.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){lt&&ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Oe,Ge,rt[0].width,rt[0].height,we.depth);for(let Se=0,Be=rt.length;Se<Be;Se++)if(ke=rt[Se],T.format!==Ai)if(ze!==null)if(lt){if(te)if(T.layerUpdates.size>0){const Ye=km(ke.width,ke.height,T.format,T.type);for(const Te of T.layerUpdates){const at=ke.data.subarray(Te*Ye/ke.data.BYTES_PER_ELEMENT,(Te+1)*Ye/ke.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,Te,ke.width,ke.height,1,ze,at)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,ke.width,ke.height,we.depth,ze,ke.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Se,Ge,ke.width,ke.height,we.depth,0,ke.data,0,0);else gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?te&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,ke.width,ke.height,we.depth,ze,it,ke.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Se,Ge,ke.width,ke.height,we.depth,0,ze,it,ke.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{lt&&ht&&t.texStorage2D(s.TEXTURE_2D,Oe,Ge,rt[0].width,rt[0].height);for(let Se=0,Be=rt.length;Se<Be;Se++)ke=rt[Se],T.format!==Ai?ze!==null?lt?te&&t.compressedTexSubImage2D(s.TEXTURE_2D,Se,0,0,ke.width,ke.height,ze,ke.data):t.compressedTexImage2D(s.TEXTURE_2D,Se,Ge,ke.width,ke.height,0,ke.data):gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?te&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,ke.width,ke.height,ze,it,ke.data):t.texImage2D(s.TEXTURE_2D,Se,Ge,ke.width,ke.height,0,ze,it,ke.data)}else if(T.isDataArrayTexture)if(lt){if(ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Oe,Ge,we.width,we.height,we.depth),te)if(T.layerUpdates.size>0){const Se=km(we.width,we.height,T.format,T.type);for(const Be of T.layerUpdates){const Ye=we.data.subarray(Be*Se/we.data.BYTES_PER_ELEMENT,(Be+1)*Se/we.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Be,we.width,we.height,1,ze,it,Ye)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,ze,it,we.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ge,we.width,we.height,we.depth,0,ze,it,we.data);else if(T.isData3DTexture)lt?(ht&&t.texStorage3D(s.TEXTURE_3D,Oe,Ge,we.width,we.height,we.depth),te&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,ze,it,we.data)):t.texImage3D(s.TEXTURE_3D,0,Ge,we.width,we.height,we.depth,0,ze,it,we.data);else if(T.isFramebufferTexture){if(ht)if(lt)t.texStorage2D(s.TEXTURE_2D,Oe,Ge,we.width,we.height);else{let Se=we.width,Be=we.height;for(let Ye=0;Ye<Oe;Ye++)t.texImage2D(s.TEXTURE_2D,Ye,Ge,Se,Be,0,ze,it,null),Se>>=1,Be>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){const Se=s.canvas;if(Se.hasAttribute("layoutsubtree")||Se.setAttribute("layoutsubtree","true"),we.parentNode!==Se){Se.appendChild(we),S.add(T),Se.onpaint=Be=>{const Ye=Be.changedElements;for(const Te of S)Ye.includes(Te.image)&&(Te.needsUpdate=!0)},Se.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,we);else{const Ye=s.RGBA,Te=s.RGBA,at=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ye,Te,at,we)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(rt.length>0){if(lt&&ht){const Se=Mt(rt[0]);t.texStorage2D(s.TEXTURE_2D,Oe,Ge,Se.width,Se.height)}for(let Se=0,Be=rt.length;Se<Be;Se++)ke=rt[Se],lt?te&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,ze,it,ke):t.texImage2D(s.TEXTURE_2D,Se,Ge,ze,it,ke);T.generateMipmaps=!1}else if(lt){if(ht){const Se=Mt(we);t.texStorage2D(s.TEXTURE_2D,Oe,Ge,Se.width,Se.height)}te&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ze,it,we)}else t.texImage2D(s.TEXTURE_2D,0,Ge,ze,it,we);_(T)&&D(ue),Ie.__version=be.version,T.onUpdate&&T.onUpdate(T)}G.__version=T.version}function Me(G,T,re){if(T.image.length!==6)return;const ue=Ee(G,T),le=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+re);const be=r.get(le);if(le.version!==be.__version||ue===!0){t.activeTexture(s.TEXTURE0+re);const Ie=Rt.getPrimaries(Rt.workingColorSpace),ye=T.colorSpace===Dr?null:Rt.getPrimaries(T.colorSpace),we=T.colorSpace===Dr||Ie===ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const ze=T.isCompressedTexture||T.image[0].isCompressedTexture,it=T.image[0]&&T.image[0].isDataTexture,Ge=[];for(let Te=0;Te<6;Te++)!ze&&!it?Ge[Te]=y(T.image[Te],!0,o.maxCubemapSize):Ge[Te]=it?T.image[Te].image:T.image[Te],Ge[Te]=Ht(T,Ge[Te]);const ke=Ge[0],rt=l.convert(T.format,T.colorSpace),lt=l.convert(T.type),ht=R(T.internalFormat,rt,lt,T.normalized,T.colorSpace),te=T.isVideoTexture!==!0,Oe=be.__version===void 0||ue===!0,Se=le.dataReady;let Be=P(T,ke);Ce(s.TEXTURE_CUBE_MAP,T);let Ye;if(ze){te&&Oe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Be,ht,ke.width,ke.height);for(let Te=0;Te<6;Te++){Ye=Ge[Te].mipmaps;for(let at=0;at<Ye.length;at++){const tt=Ye[at];T.format!==Ai?rt!==null?te?Se&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,at,0,0,tt.width,tt.height,rt,tt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,at,ht,tt.width,tt.height,0,tt.data):gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,at,0,0,tt.width,tt.height,rt,lt,tt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,at,ht,tt.width,tt.height,0,rt,lt,tt.data)}}}else{if(Ye=T.mipmaps,te&&Oe){Ye.length>0&&Be++;const Te=Mt(Ge[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Be,ht,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(it){te?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Ge[Te].width,Ge[Te].height,rt,lt,Ge[Te].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ht,Ge[Te].width,Ge[Te].height,0,rt,lt,Ge[Te].data);for(let at=0;at<Ye.length;at++){const Dt=Ye[at].image[Te].image;te?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,at+1,0,0,Dt.width,Dt.height,rt,lt,Dt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,at+1,ht,Dt.width,Dt.height,0,rt,lt,Dt.data)}}else{te?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,rt,lt,Ge[Te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ht,rt,lt,Ge[Te]);for(let at=0;at<Ye.length;at++){const tt=Ye[at];te?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,at+1,0,0,rt,lt,tt.image[Te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,at+1,ht,rt,lt,tt.image[Te])}}}_(T)&&D(s.TEXTURE_CUBE_MAP),be.__version=le.version,T.onUpdate&&T.onUpdate(T)}G.__version=T.version}function ge(G,T,re,ue,le,be){const Ie=l.convert(re.format,re.colorSpace),ye=l.convert(re.type),we=R(re.internalFormat,Ie,ye,re.normalized,re.colorSpace),ze=r.get(T),it=r.get(re);if(it.__renderTarget=T,!ze.__hasExternalTextures){const Ge=Math.max(1,T.width>>be),ke=Math.max(1,T.height>>be);le===s.TEXTURE_3D||le===s.TEXTURE_2D_ARRAY?t.texImage3D(le,be,we,Ge,ke,T.depth,0,Ie,ye,null):t.texImage2D(le,be,we,Ge,ke,0,Ie,ye,null)}t.bindFramebuffer(s.FRAMEBUFFER,G),St(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ue,le,it.__webglTexture,0,ft(T)):(le===s.TEXTURE_2D||le>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ue,le,it.__webglTexture,be),t.bindFramebuffer(s.FRAMEBUFFER,null)}function se(G,T,re){if(s.bindRenderbuffer(s.RENDERBUFFER,G),T.depthBuffer){const ue=T.depthTexture,le=ue&&ue.isDepthTexture?ue.type:null,be=I(T.stencilBuffer,le),Ie=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;St(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft(T),be,T.width,T.height):re?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft(T),be,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,be,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ie,s.RENDERBUFFER,G)}else{const ue=T.textures;for(let le=0;le<ue.length;le++){const be=ue[le],Ie=l.convert(be.format,be.colorSpace),ye=l.convert(be.type),we=R(be.internalFormat,Ie,ye,be.normalized,be.colorSpace);St(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft(T),we,T.width,T.height):re?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft(T),we,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,we,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pe(G,T,re){const ue=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,G),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const le=r.get(T.depthTexture);if(le.__renderTarget=T,(!le.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ue){if(le.__webglInit===void 0&&(le.__webglInit=!0,T.depthTexture.addEventListener("dispose",E)),le.__webglTexture===void 0){le.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,le.__webglTexture),Ce(s.TEXTURE_CUBE_MAP,T.depthTexture);const ze=l.convert(T.depthTexture.format),it=l.convert(T.depthTexture.type);let Ge;T.depthTexture.format===cr?Ge=s.DEPTH_COMPONENT24:T.depthTexture.format===as&&(Ge=s.DEPTH24_STENCIL8);for(let ke=0;ke<6;ke++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0,Ge,T.width,T.height,0,ze,it,null)}}else Y(T.depthTexture,0);const be=le.__webglTexture,Ie=ft(T),ye=ue?s.TEXTURE_CUBE_MAP_POSITIVE_X+re:s.TEXTURE_2D,we=T.depthTexture.format===as?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===cr)St(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,we,ye,be,0,Ie):s.framebufferTexture2D(s.FRAMEBUFFER,we,ye,be,0);else if(T.depthTexture.format===as)St(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,we,ye,be,0,Ie):s.framebufferTexture2D(s.FRAMEBUFFER,we,ye,be,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function me(G){const T=r.get(G),re=G.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==G.depthTexture){const ue=G.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ue){const le=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ue.removeEventListener("dispose",le)};ue.addEventListener("dispose",le),T.__depthDisposeCallback=le}T.__boundDepthTexture=ue}if(G.depthTexture&&!T.__autoAllocateDepthBuffer)if(re)for(let ue=0;ue<6;ue++)Pe(T.__webglFramebuffer[ue],G,ue);else{const ue=G.texture.mipmaps;ue&&ue.length>0?Pe(T.__webglFramebuffer[0],G,0):Pe(T.__webglFramebuffer,G,0)}else if(re){T.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[ue]),T.__webglDepthbuffer[ue]===void 0)T.__webglDepthbuffer[ue]=s.createRenderbuffer(),se(T.__webglDepthbuffer[ue],G,!1);else{const le=G.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=T.__webglDepthbuffer[ue];s.bindRenderbuffer(s.RENDERBUFFER,be),s.framebufferRenderbuffer(s.FRAMEBUFFER,le,s.RENDERBUFFER,be)}}else{const ue=G.texture.mipmaps;if(ue&&ue.length>0?t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),se(T.__webglDepthbuffer,G,!1);else{const le=G.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,be),s.framebufferRenderbuffer(s.FRAMEBUFFER,le,s.RENDERBUFFER,be)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Fe(G,T,re){const ue=r.get(G);T!==void 0&&ge(ue.__webglFramebuffer,G,G.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),re!==void 0&&me(G)}function Ze(G){const T=G.texture,re=r.get(G),ue=r.get(T);G.addEventListener("dispose",x);const le=G.textures,be=G.isWebGLCubeRenderTarget===!0,Ie=le.length>1;if(Ie||(ue.__webglTexture===void 0&&(ue.__webglTexture=s.createTexture()),ue.__version=T.version,u.memory.textures++),be){re.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(T.mipmaps&&T.mipmaps.length>0){re.__webglFramebuffer[ye]=[];for(let we=0;we<T.mipmaps.length;we++)re.__webglFramebuffer[ye][we]=s.createFramebuffer()}else re.__webglFramebuffer[ye]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){re.__webglFramebuffer=[];for(let ye=0;ye<T.mipmaps.length;ye++)re.__webglFramebuffer[ye]=s.createFramebuffer()}else re.__webglFramebuffer=s.createFramebuffer();if(Ie)for(let ye=0,we=le.length;ye<we;ye++){const ze=r.get(le[ye]);ze.__webglTexture===void 0&&(ze.__webglTexture=s.createTexture(),u.memory.textures++)}if(G.samples>0&&St(G)===!1){re.__webglMultisampledFramebuffer=s.createFramebuffer(),re.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let ye=0;ye<le.length;ye++){const we=le[ye];re.__webglColorRenderbuffer[ye]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,re.__webglColorRenderbuffer[ye]);const ze=l.convert(we.format,we.colorSpace),it=l.convert(we.type),Ge=R(we.internalFormat,ze,it,we.normalized,we.colorSpace,G.isXRRenderTarget===!0),ke=ft(G);s.renderbufferStorageMultisample(s.RENDERBUFFER,ke,Ge,G.width,G.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,re.__webglColorRenderbuffer[ye])}s.bindRenderbuffer(s.RENDERBUFFER,null),G.depthBuffer&&(re.__webglDepthRenderbuffer=s.createRenderbuffer(),se(re.__webglDepthRenderbuffer,G,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(be){t.bindTexture(s.TEXTURE_CUBE_MAP,ue.__webglTexture),Ce(s.TEXTURE_CUBE_MAP,T);for(let ye=0;ye<6;ye++)if(T.mipmaps&&T.mipmaps.length>0)for(let we=0;we<T.mipmaps.length;we++)ge(re.__webglFramebuffer[ye][we],G,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,we);else ge(re.__webglFramebuffer[ye],G,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);_(T)&&D(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let ye=0,we=le.length;ye<we;ye++){const ze=le[ye],it=r.get(ze);let Ge=s.TEXTURE_2D;(G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(Ge=G.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ge,it.__webglTexture),Ce(Ge,ze),ge(re.__webglFramebuffer,G,ze,s.COLOR_ATTACHMENT0+ye,Ge,0),_(ze)&&D(Ge)}t.unbindTexture()}else{let ye=s.TEXTURE_2D;if((G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(ye=G.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ye,ue.__webglTexture),Ce(ye,T),T.mipmaps&&T.mipmaps.length>0)for(let we=0;we<T.mipmaps.length;we++)ge(re.__webglFramebuffer[we],G,T,s.COLOR_ATTACHMENT0,ye,we);else ge(re.__webglFramebuffer,G,T,s.COLOR_ATTACHMENT0,ye,0);_(T)&&D(ye),t.unbindTexture()}G.depthBuffer&&me(G)}function Ue(G){const T=G.textures;for(let re=0,ue=T.length;re<ue;re++){const le=T[re];if(_(le)){const be=z(G),Ie=r.get(le).__webglTexture;t.bindTexture(be,Ie),D(be),t.unbindTexture()}}}const Ve=[],pt=[];function dt(G){if(G.samples>0){if(St(G)===!1){const T=G.textures,re=G.width,ue=G.height;let le=s.COLOR_BUFFER_BIT;const be=G.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ie=r.get(G),ye=T.length>1;if(ye)for(let ze=0;ze<T.length;ze++)t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const we=G.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let ze=0;ze<T.length;ze++){if(G.resolveDepthBuffer&&(G.depthBuffer&&(le|=s.DEPTH_BUFFER_BIT),G.stencilBuffer&&G.resolveStencilBuffer&&(le|=s.STENCIL_BUFFER_BIT)),ye){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[ze]);const it=r.get(T[ze]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,it,0)}s.blitFramebuffer(0,0,re,ue,0,0,re,ue,le,s.NEAREST),h===!0&&(Ve.length=0,pt.length=0,Ve.push(s.COLOR_ATTACHMENT0+ze),G.depthBuffer&&G.storeMultisampledDepthBuffer===!1&&(Ve.push(be),pt.push(be),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,pt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ve))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ye)for(let ze=0;ze<T.length;ze++){t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[ze]);const it=r.get(T[ze]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.TEXTURE_2D,it,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(G.depthBuffer&&G.storeMultisampledDepthBuffer===!1&&h){const T=G.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function ft(G){return Math.min(o.maxSamples,G.samples)}function St(G){const T=r.get(G);return G.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function K(G){const T=u.render.frame;v.get(G)!==T&&(v.set(G,T),G.update())}function Ht(G,T){const re=G.colorSpace,ue=G.format,le=G.type;return G.isCompressedTexture===!0||G.isVideoTexture===!0||re!==ql&&re!==Dr&&(Rt.getTransfer(re)===zt?(ue!==Ai||le!==Kn)&&gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):kt("WebGLTextures: Unsupported texture color space:",re)),T}function Mt(G){return typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement?(p.width=G.naturalWidth||G.width,p.height=G.naturalHeight||G.height):typeof VideoFrame<"u"&&G instanceof VideoFrame?(p.width=G.displayWidth,p.height=G.displayHeight):(p.width=G.width,p.height=G.height),p}this.allocateTextureUnit=oe,this.resetTextureUnits=J,this.getTextureUnits=$,this.setTextureUnits=Q,this.setTexture2D=Y,this.setTexture2DArray=q,this.setTexture3D=B,this.setTextureCube=b,this.rebindTextures=Fe,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=St,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function $1(s,e){function t(r,o=Dr){let l;const u=Rt.getTransfer(o);if(r===Kn)return s.UNSIGNED_BYTE;if(r===xf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===vf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===S0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===M0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===_0)return s.BYTE;if(r===y0)return s.SHORT;if(r===ro)return s.UNSIGNED_SHORT;if(r===gf)return s.INT;if(r===Hi)return s.UNSIGNED_INT;if(r===Bi)return s.FLOAT;if(r===Vi)return s.HALF_FLOAT;if(r===w0)return s.ALPHA;if(r===E0)return s.RGB;if(r===Ai)return s.RGBA;if(r===cr)return s.DEPTH_COMPONENT;if(r===as)return s.DEPTH_STENCIL;if(r===T0)return s.RED;if(r===_f)return s.RED_INTEGER;if(r===ds)return s.RG;if(r===yf)return s.RG_INTEGER;if(r===Sf)return s.RGBA_INTEGER;if(r===Gl||r===Hl||r===Vl||r===Wl)if(u===zt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Gl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Hl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Vl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Wl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Gl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Hl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Vl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Wl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Rd||r===Pd||r===Nd||r===Ld)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Rd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Pd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Nd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ld)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Id||r===Dd||r===Ud||r===Fd||r===kd||r===jl||r===Od)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Id||r===Dd)return u===zt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Ud)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Fd)return l.COMPRESSED_R11_EAC;if(r===kd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===jl)return l.COMPRESSED_RG11_EAC;if(r===Od)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Bd||r===zd||r===Gd||r===Hd||r===Vd||r===Wd||r===Xd||r===jd||r===Yd||r===qd||r===$d||r===Kd||r===Zd||r===Qd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Bd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===zd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Gd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Hd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Vd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Wd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Xd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===jd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Yd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===qd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===$d)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Kd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Zd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Qd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Jd||r===ef||r===tf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Jd)return u===zt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ef)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===tf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===nf||r===rf||r===Yl||r===sf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===nf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===rf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yl)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===sf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===so?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const K1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Q1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new D0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Ri({vertexShader:K1,fragmentShader:Z1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ui(new ec(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class J1 extends fs{constructor(e,t){super();const r=this;let o=null,l=1,u=null,f="local-floor",h=1,p=null,v=null,S=null,g=null,w=null,A=null;const L=typeof XRWebGLBinding<"u",y=new Q1,_={},D=t.getContextAttributes();let z=null,R=null;const I=[],P=[],E=new bt;let x=null,U=null;const F=new li;F.viewport=new Zt;const X=new li;X.viewport=new Zt;const j=[F,X],J=new o_;let $=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let k=I[W];return k===void 0&&(k=new Zu,I[W]=k),k.getTargetRaySpace()},this.getControllerGrip=function(W){let k=I[W];return k===void 0&&(k=new Zu,I[W]=k),k.getGripSpace()},this.getHand=function(W){let k=I[W];return k===void 0&&(k=new Zu,I[W]=k),k.getHandSpace()};function oe(W){const k=P.indexOf(W.inputSource);if(k===-1)return;const V=I[k];V!==void 0&&(V.update(W.inputSource,W.frame,p||u),V.dispatchEvent({type:W.type,data:W.inputSource}))}function ee(){o.removeEventListener("select",oe),o.removeEventListener("selectstart",oe),o.removeEventListener("selectend",oe),o.removeEventListener("squeeze",oe),o.removeEventListener("squeezestart",oe),o.removeEventListener("squeezeend",oe),o.removeEventListener("end",ee),o.removeEventListener("inputsourceschange",Y);for(let W=0;W<I.length;W++){const k=P[W];k!==null&&(P[W]=null,I[W].disconnect(k))}$=null,Q=null,y.reset();for(const W in _)delete _[W];if(e.setRenderTarget(z),w=null,g=null,S=null,o=null,R=null,Ee.stop(),r.isPresenting=!1,e.setPixelRatio(x),e.setSize(E.width,E.height,!1),U!==null){const W=U.camera;W.fov=U.fov,W.zoom=U.zoom,W.updateProjectionMatrix(),U=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){l=W,r.isPresenting===!0&&gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){f=W,r.isPresenting===!0&&gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(W){p=W},this.getBaseLayer=function(){return g!==null?g:w},this.getBinding=function(){return S===null&&L&&(S=new XRWebGLBinding(o,t)),S},this.getFrame=function(){return A},this.getSession=function(){return o},this.setSession=async function(W){if(o=W,o!==null){if(z=e.getRenderTarget(),o.addEventListener("select",oe),o.addEventListener("selectstart",oe),o.addEventListener("selectend",oe),o.addEventListener("squeeze",oe),o.addEventListener("squeezestart",oe),o.addEventListener("squeezeend",oe),o.addEventListener("end",ee),o.addEventListener("inputsourceschange",Y),D.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(E),L&&"createProjectionLayer"in XRWebGLBinding.prototype){let V=null,Me=null,ge=null;D.depth&&(ge=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,V=D.stencil?as:cr,Me=D.stencil?so:Hi);const se={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:l};S=this.getBinding(),g=S.createProjectionLayer(se),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),R=new Ci(g.textureWidth,g.textureHeight,{format:Ai,type:Kn,depthTexture:new oo(g.textureWidth,g.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const V={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:l};w=new XRWebGLLayer(o,t,V),o.updateRenderState({baseLayer:w}),e.setPixelRatio(1),e.setSize(w.framebufferWidth,w.framebufferHeight,!1),R=new Ci(w.framebufferWidth,w.framebufferHeight,{format:Ai,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:w.ignoreDepthValues===!1,resolveStencilBuffer:w.ignoreDepthValues===!1,storeMultisampledDepthBuffer:w.ignoreDepthValues===!1,storeMultisampledStencilBuffer:w.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await o.requestReferenceSpace(f),Ee.setContext(o),Ee.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Y(W){for(let k=0;k<W.removed.length;k++){const V=W.removed[k],Me=P.indexOf(V);Me>=0&&(P[Me]=null,I[Me].disconnect(V))}for(let k=0;k<W.added.length;k++){const V=W.added[k];let Me=P.indexOf(V);if(Me===-1){for(let se=0;se<I.length;se++)if(se>=P.length){P.push(V),Me=se;break}else if(P[se]===null){P[se]=V,Me=se;break}if(Me===-1)break}const ge=I[Me];ge&&ge.connect(V)}}const q=new fe,B=new fe;function b(W,k,V){q.setFromMatrixPosition(k.matrixWorld),B.setFromMatrixPosition(V.matrixWorld);const Me=q.distanceTo(B),ge=k.projectionMatrix.elements,se=V.projectionMatrix.elements,Pe=ge[14]/(ge[10]-1),me=ge[14]/(ge[10]+1),Fe=(ge[9]+1)/ge[5],Ze=(ge[9]-1)/ge[5],Ue=(ge[8]-1)/ge[0],Ve=(se[8]+1)/se[0],pt=Pe*Ue,dt=Pe*Ve,ft=Me/(-Ue+Ve),St=ft*-Ue;if(k.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(St),W.translateZ(ft),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),ge[10]===-1)W.projectionMatrix.copy(k.projectionMatrix),W.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{const K=Pe+ft,Ht=me+ft,Mt=pt-St,G=dt+(Me-St),T=Fe*me/Ht*K,re=Ze*me/Ht*K;W.projectionMatrix.makePerspective(Mt,G,T,re,K,Ht),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function O(W,k){k===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(k.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(o===null)return;let k=W.near,V=W.far;y.texture!==null&&(y.depthNear>0&&(k=y.depthNear),y.depthFar>0&&(V=y.depthFar)),J.near=X.near=F.near=k,J.far=X.far=F.far=V,($!==J.near||Q!==J.far)&&(o.updateRenderState({depthNear:J.near,depthFar:J.far}),$=J.near,Q=J.far),J.layers.mask=W.layers.mask|6,F.layers.mask=J.layers.mask&-5,X.layers.mask=J.layers.mask&-3;const Me=W.parent,ge=J.cameras;O(J,Me);for(let se=0;se<ge.length;se++)O(ge[se],Me);ge.length===2?b(J,F,X):J.projectionMatrix.copy(F.projectionMatrix),U===null&&W.isPerspectiveCamera&&(U={camera:W,fov:W.fov,zoom:W.zoom}),he(W,J,Me)};function he(W,k,V){V===null?W.matrix.copy(k.matrixWorld):(W.matrix.copy(V.matrixWorld),W.matrix.invert(),W.matrix.multiply(k.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(k.projectionMatrix),W.projectionMatrixInverse.copy(k.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=of*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(g===null&&w===null))return h},this.setFoveation=function(W){h=W,g!==null&&(g.fixedFoveation=W),w!==null&&w.fixedFoveation!==void 0&&(w.fixedFoveation=W)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(J)},this.getCameraTexture=function(W){return _[W]};let _e=null;function Ce(W,k){if(v=k.getViewerPose(p||u),A=k,v!==null){const V=v.views;w!==null&&(e.setRenderTargetFramebuffer(R,w.framebuffer),e.setRenderTarget(R));let Me=!1;V.length!==J.cameras.length&&(J.cameras.length=0,Me=!0);for(let me=0;me<V.length;me++){const Fe=V[me];let Ze=null;if(w!==null)Ze=w.getViewport(Fe);else{const Ve=S.getViewSubImage(g,Fe);Ze=Ve.viewport,me===0&&(e.setRenderTargetTextures(R,Ve.colorTexture,Ve.depthStencilTexture),e.setRenderTarget(R))}let Ue=j[me];Ue===void 0&&(Ue=new li,Ue.layers.enable(me),Ue.viewport=new Zt,j[me]=Ue),Ue.matrix.fromArray(Fe.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(Fe.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),me===0&&(J.matrix.copy(Ue.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Me===!0&&J.cameras.push(Ue)}const ge=o.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&L){S=r.getBinding();const me=S.getDepthInformation(V[0]);me&&me.isValid&&me.texture&&y.init(me,o.renderState)}if(ge&&ge.includes("camera-access")&&L){e.state.unbindTexture(),S=r.getBinding();for(let me=0;me<V.length;me++){const Fe=V[me].camera;if(Fe){let Ze=_[Fe];Ze||(Ze=new D0,_[Fe]=Ze);const Ue=S.getCameraImage(Fe);Ze.sourceTexture=Ue}}}}for(let V=0;V<I.length;V++){const Me=P[V],ge=I[V];Me!==null&&ge!==void 0&&ge.update(Me,k,p||u)}_e&&_e(W,k),k.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:k}),A=null}const Ee=new O0;Ee.setAnimationLoop(Ce),this.setAnimationLoop=function(W){_e=W},this.dispose=function(){}}}const ew=new en,X0=new vt;X0.set(-1,0,0,0,1,0,0,0,1);function tw(s,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,U0(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function o(y,_,D,z,R){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?l(y,_):_.isMeshLambertMaterial?(l(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(l(y,_),S(y,_)):_.isMeshPhongMaterial?(l(y,_),v(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(l(y,_),g(y,_),_.isMeshPhysicalMaterial&&w(y,_,R)):_.isMeshMatcapMaterial?(l(y,_),A(y,_)):_.isMeshDepthMaterial?l(y,_):_.isMeshDistanceMaterial?(l(y,_),L(y,_)):_.isMeshNormalMaterial?l(y,_):_.isLineBasicMaterial?(u(y,_),_.isLineDashedMaterial&&f(y,_)):_.isPointsMaterial?h(y,_,D,z):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Dn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Dn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const D=e.get(_),z=D.envMap,R=D.envMapRotation;z&&(y.envMap.value=z,y.envMapRotation.value.setFromMatrix4(ew.makeRotationFromEuler(R)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(X0),y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function u(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function f(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function h(y,_,D,z){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*D,y.scale.value=z*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function v(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function S(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function g(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function w(y,_,D){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Dn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.retroreflectivity>0&&(y.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,_){_.matcap&&(y.matcap.value=_.matcap)}function L(y,_){const D=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function nw(s,e,t,r){let o={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(R,I){const P=I.program;r.uniformBlockBinding(R,P)}function p(R,I){let P=o[R.id];P===void 0&&(y(R),P=v(R),o[R.id]=P,R.addEventListener("dispose",D));const E=I.program;r.updateUBOMapping(R,E);const x=e.render.frame;l[R.id]!==x&&(g(R),l[R.id]=x)}function v(R){const I=S();R.__bindingPointIndex=I;const P=s.createBuffer(),E=R.__size,x=R.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,E,x),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,I,P),P}function S(){for(let R=0;R<f;R++)if(u.indexOf(R)===-1)return u.push(R),R;return kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const I=o[R.id],P=R.uniforms,E=R.__cache;s.bindBuffer(s.UNIFORM_BUFFER,I);for(let x=0,U=P.length;x<U;x++){const F=P[x];if(Array.isArray(F))for(let X=0,j=F.length;X<j;X++)w(F[X],x,X,E);else w(F,x,0,E)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function w(R,I,P,E){if(L(R,I,P,E)===!0){const x=R.__offset,U=R.value;if(Array.isArray(U)){let F=0;for(let X=0;X<U.length;X++){const j=U[X],J=_(j);A(j,R.__data,F),typeof j!="number"&&typeof j!="boolean"&&!j.isMatrix3&&!ArrayBuffer.isView(j)&&(F+=J.storage/Float32Array.BYTES_PER_ELEMENT)}}else A(U,R.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,x,R.__data)}}function A(R,I,P){typeof R=="number"||typeof R=="boolean"?I[0]=R:R.isMatrix3?(I[0]=R.elements[0],I[1]=R.elements[1],I[2]=R.elements[2],I[3]=0,I[4]=R.elements[3],I[5]=R.elements[4],I[6]=R.elements[5],I[7]=0,I[8]=R.elements[6],I[9]=R.elements[7],I[10]=R.elements[8],I[11]=0):ArrayBuffer.isView(R)?I.set(new R.constructor(R.buffer,R.byteOffset,I.length)):R.toArray(I,P)}function L(R,I,P,E){const x=R.value,U=I+"_"+P;if(E[U]===void 0)return typeof x=="number"||typeof x=="boolean"?E[U]=x:ArrayBuffer.isView(x)?E[U]=x.slice():E[U]=x.clone(),!0;{const F=E[U];if(typeof x=="number"||typeof x=="boolean"){if(F!==x)return E[U]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(F.equals(x)===!1)return F.copy(x),!0}}return!1}function y(R){const I=R.uniforms;let P=0;const E=16;for(let U=0,F=I.length;U<F;U++){const X=Array.isArray(I[U])?I[U]:[I[U]];for(let j=0,J=X.length;j<J;j++){const $=X[j],Q=Array.isArray($.value)?$.value:[$.value];for(let oe=0,ee=Q.length;oe<ee;oe++){const Y=Q[oe],q=_(Y),B=P%E,b=B%q.boundary,O=B+b;P+=b,O!==0&&E-O<q.storage&&(P+=E-O),$.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=P,P+=q.storage}}}const x=P%E;return x>0&&(P+=E-x),R.__size=P,R.__cache={},this}function _(R){const I={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(I.boundary=4,I.storage=4):R.isVector2?(I.boundary=8,I.storage=8):R.isVector3||R.isColor?(I.boundary=16,I.storage=12):R.isVector4?(I.boundary=16,I.storage=16):R.isMatrix3?(I.boundary=48,I.storage=48):R.isMatrix4?(I.boundary=64,I.storage=64):R.isTexture?gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(I.boundary=16,I.storage=R.byteLength):gt("WebGLRenderer: Unsupported uniform value type.",R),I}function D(R){const I=R.target;I.removeEventListener("dispose",D);const P=u.indexOf(I.__bindingPointIndex);u.splice(P,1),s.deleteBuffer(o[I.id]),delete o[I.id],delete l[I.id]}function z(){for(const R in o)s.deleteBuffer(o[R]);u=[],o={},l={}}return{bind:h,update:p,dispose:z}}const iw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fi=null;function rw(){return Fi===null&&(Fi=new Yv(iw,16,16,ds,Vi),Fi.name="DFG_LUT",Fi.minFilter=An,Fi.magFilter=An,Fi.wrapS=bi,Fi.wrapT=bi,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}class sw{constructor(e={}){const{canvas:t=Sv(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:w=Kn}=e;this.isWebGLRenderer=!0;let A;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=r.getContextAttributes().alpha}else A=u;const L=w,y=new Set([Sf,yf,_f]),_=new Set([Kn,Hi,ro,so,xf,vf]),D=new Uint32Array(4),z=new Int32Array(4),R=new fe;let I=null,P=null;const E=[],x=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let X=!1,j=null,J=null,$=null,Q=null;this._outputColorSpace=oi;let oe=0,ee=0,Y=null,q=-1,B=null;const b=new Zt,O=new Zt;let he=null;const _e=new Lt(0);let Ce=0,Ee=t.width,W=t.height,k=1,V=null,Me=null;const ge=new Zt(0,0,Ee,W),se=new Zt(0,0,Ee,W);let Pe=!1;const me=new bf;let Fe=!1,Ze=!1;const Ue=new en,Ve=new fe,pt=new Zt,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function St(){return Y===null?k:1}let K=r;function Ht(N,ne){return t.getContext(N,ne)}let Mt,G,T,re,ue,le,be,Ie,ye,we,ze,it,Ge,ke,rt,lt,ht,te,Oe,Se,Be,Ye,Te;try{const N={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${pf}`),t.addEventListener("webglcontextlost",Dt,!1),t.addEventListener("webglcontextrestored",Nt,!1),t.addEventListener("webglcontextcreationerror",gn,!1),K===null){const ne="webgl2";if(K=Ht(ne,N),K===null)throw Ht(ne)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}at()}catch(N){throw t.removeEventListener("webglcontextlost",Dt,!1),t.removeEventListener("webglcontextrestored",Nt,!1),t.removeEventListener("webglcontextcreationerror",gn,!1),kt("WebGLRenderer: "+N.message),N}function at(){Mt=new rM(K),Mt.init(),Be=new $1(K,Mt),G=new qS(K,Mt,e,Be),T=new Y1(K,Mt),G.reversedDepthBuffer&&g&&T.buffers.depth.setReversed(!0),J=K.createFramebuffer(),$=K.createFramebuffer(),Q=K.createFramebuffer(),re=new oM(K),ue=new I1,le=new q1(K,Mt,T,ue,G,Be,re),be=new iM(F),Ie=new c_(K),Ye=new jS(K,Ie),ye=new sM(K,Ie,re,Ye),we=new cM(K,ye,Ie,Ye,re),te=new lM(K,G,le),rt=new $S(ue),ze=new L1(F,be,Mt,G,Ye,rt),it=new tw(F,ue),Ge=new U1,ke=new G1(Mt),ht=new XS(F,be,T,we,A,h),lt=new j1(F,we,G),Te=new nw(K,re,G,T),Oe=new YS(K,Mt,re),Se=new aM(K,Mt,re),re.programs=ze.programs,F.capabilities=G,F.extensions=Mt,F.properties=ue,F.renderLists=Ge,F.shadowMap=lt,F.state=T,F.info=re}L!==Kn&&(U=new dM(L,t.width,t.height,f,o,l));const tt=new J1(F,K);this.xr=tt,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const N=Mt.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Mt.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(N){N!==void 0&&(k=N,this.setSize(Ee,W,!1))},this.getSize=function(N){return N.set(Ee,W)},this.setSize=function(N,ne,xe=!0){if(tt.isPresenting){gt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=N,W=ne,t.width=Math.floor(N*k),t.height=Math.floor(ne*k),xe===!0&&(t.style.width=N+"px",t.style.height=ne+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,N,ne)},this.getDrawingBufferSize=function(N){return N.set(Ee*k,W*k).floor()},this.setDrawingBufferSize=function(N,ne,xe){Ee=N,W=ne,k=xe,t.width=Math.floor(N*xe),t.height=Math.floor(ne*xe),this.setViewport(0,0,N,ne)},this.setEffects=function(N){if(L===Kn){kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let ne=0;ne<N.length;ne++)if(N[ne].isOutputPass===!0){gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(b)},this.getViewport=function(N){return N.copy(ge)},this.setViewport=function(N,ne,xe,ce){N.isVector4?ge.set(N.x,N.y,N.z,N.w):ge.set(N,ne,xe,ce),T.viewport(b.copy(ge).multiplyScalar(k).round())},this.getScissor=function(N){return N.copy(se)},this.setScissor=function(N,ne,xe,ce){N.isVector4?se.set(N.x,N.y,N.z,N.w):se.set(N,ne,xe,ce),T.scissor(O.copy(se).multiplyScalar(k).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(N){T.setScissorTest(Pe=N)},this.setOpaqueSort=function(N){V=N},this.setTransparentSort=function(N){Me=N},this.getClearColor=function(N){return N.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor(...arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha(...arguments)},this.clear=function(N=!0,ne=!0,xe=!0){let ce=0;if(N){let ae=!1;if(Y!==null){const Xe=Y.texture.format;ae=y.has(Xe)}if(ae){const Xe=Y.texture.type,He=_.has(Xe),We=ht.getClearColor(),Je=ht.getClearAlpha(),st=We.r,xt=We.g,yt=We.b;He?(D[0]=st,D[1]=xt,D[2]=yt,D[3]=Je,K.clearBufferuiv(K.COLOR,0,D)):(z[0]=st,z[1]=xt,z[2]=yt,z[3]=Je,K.clearBufferiv(K.COLOR,0,z))}else ce|=K.COLOR_BUFFER_BIT}ne&&(ce|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),xe&&(ce|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ce!==0&&K.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),j=N},this.dispose=function(){t.removeEventListener("webglcontextlost",Dt,!1),t.removeEventListener("webglcontextrestored",Nt,!1),t.removeEventListener("webglcontextcreationerror",gn,!1),ht.dispose(),Ge.dispose(),ke.dispose(),ue.dispose(),be.dispose(),we.dispose(),Ye.dispose(),Te.dispose(),ze.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",ho),tt.removeEventListener("sessionend",po),Pn.stop()};function Dt(N){N.preventDefault(),hm("WebGLRenderer: Context Lost."),X=!0}function Nt(){hm("WebGLRenderer: Context Restored."),X=!1;const N=re.autoReset,ne=lt.enabled,xe=lt.autoUpdate,ce=lt.needsUpdate,ae=lt.type;at(),re.autoReset=N,lt.enabled=ne,lt.autoUpdate=xe,lt.needsUpdate=ce,lt.type=ae}function gn(N){kt("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Zn(N){const ne=N.target;ne.removeEventListener("dispose",Zn),kr(ne)}function kr(N){hs(N),ue.remove(N)}function hs(N){const ne=ue.get(N).programs;ne!==void 0&&(ne.forEach(function(xe){ze.releaseProgram(xe)}),N.isShaderMaterial&&ze.releaseShaderCache(N))}this.renderBufferDirect=function(N,ne,xe,ce,ae,Xe){ne===null&&(ne=dt);const He=ae.isMesh&&ae.matrixWorld.determinantAffine()<0,We=qt(N,ne,xe,ce,ae);T.setMaterial(ce,He);let Je=xe.index,st=1;if(ce.wireframe===!0){if(Je=ye.getWireframeAttribute(xe),Je===void 0)return;st=2}const xt=xe.drawRange,yt=xe.attributes.position;let Ke=xt.start*st,At=(xt.start+xt.count)*st;Xe!==null&&(Ke=Math.max(Ke,Xe.start*st),At=Math.min(At,(Xe.start+Xe.count)*st)),Je!==null?(Ke=Math.max(Ke,0),At=Math.min(At,Je.count)):yt!=null&&(Ke=Math.max(Ke,0),At=Math.min(At,yt.count));const Qt=At-Ke;if(Qt<0||Qt===1/0)return;Ye.setup(ae,ce,We,xe,Je);let Gt,Ot=Oe;if(Je!==null&&(Gt=Ie.get(Je),Ot=Se,Ot.setIndex(Gt)),ae.isMesh)ce.wireframe===!0?(T.setLineWidth(ce.wireframeLinewidth*St()),Ot.setMode(K.LINES)):Ot.setMode(K.TRIANGLES);else if(ae.isLine){let an=ce.linewidth;an===void 0&&(an=1),T.setLineWidth(an*St()),ae.isLineSegments?Ot.setMode(K.LINES):ae.isLineLoop?Ot.setMode(K.LINE_LOOP):Ot.setMode(K.LINE_STRIP)}else ae.isPoints?Ot.setMode(K.POINTS):ae.isSprite&&Ot.setMode(K.TRIANGLES);if(ae.isBatchedMesh)if(Mt.get("WEBGL_multi_draw"))Ot.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const an=ae._multiDrawStarts,qe=ae._multiDrawCounts,tn=ae._multiDrawCount,Ct=Je?Ie.get(Je).bytesPerElement:1,yn=ue.get(ce).currentProgram.getUniforms();for(let wt=0;wt<tn;wt++)yn.setValue(K,"_gl_DrawID",wt),Ot.render(an[wt]/Ct,qe[wt])}else if(ae.isInstancedMesh)Ot.renderInstances(Ke,Qt,ae.count);else if(xe.isInstancedBufferGeometry){const an=xe._maxInstanceCount!==void 0?xe._maxInstanceCount:1/0,qe=Math.min(xe.instanceCount,an);Ot.renderInstances(Ke,Qt,qe)}else Ot.render(Ke,Qt)};function Or(N,ne,xe,ce){j!==null&&N.isNodeMaterial&&j.setObject(ce,N),Fe===!0&&rt.setState(N,xe,!1),N.transparent===!0&&N.side===rr&&N.forceSinglePass===!1?(N.side=Dn,N.needsUpdate=!0,Gr(N,ne,ce),N.side=cs,N.needsUpdate=!0,Gr(N,ne,ce),N.side=rr):Gr(N,ne,ce)}this.compile=function(N,ne,xe=null){xe===null&&(xe=N),j!==null&&j.renderStart(N,ne,xe),P=ke.get(xe),P.init(ne),x.push(P),xe.traverseVisible(function(ae){ae.isLight&&ae.layers.test(ne.layers)&&(P.pushLight(ae),ae.castShadow&&P.pushShadow(ae))}),N!==xe&&N.traverseVisible(function(ae){ae.isLight&&ae.layers.test(ne.layers)&&(P.pushLight(ae),ae.castShadow&&P.pushShadow(ae))}),P.setupLights(),j!==null&&j.updateLights(P.state.lightsArray),Ze=this.localClippingEnabled,Fe=rt.init(this.clippingPlanes,Ze),Fe===!0&&rt.setGlobalState(this.clippingPlanes,ne),j!==null&&lt.render(P.state.shadowsArray,xe,ne);const ce=new Set;return N.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const Xe=ae.material;if(Xe)if(Array.isArray(Xe))for(let He=0;He<Xe.length;He++){const We=Xe[He];Or(We,xe,ne,ae),ce.add(We)}else Or(Xe,xe,ne,ae),ce.add(Xe)}),P=x.pop(),j!==null&&j.renderEnd(),ce},this.compileAsync=function(N,ne,xe=null){const ce=this.compile(N,ne,xe);return new Promise(ae=>{function Xe(){if(ce.forEach(function(He){const Je=ue.get(He).currentProgram;(Je===void 0||Je.isReady())&&ce.delete(He)}),ce.size===0){ae(N);return}setTimeout(Xe,10)}Mt.get("KHR_parallel_shader_compile")!==null?Xe():setTimeout(Xe,10)})};let Br=null;function rc(N){Br&&Br(N)}function ho(){Pn.stop()}function po(){Pn.start()}const Pn=new O0;Pn.setAnimationLoop(rc),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(N){Br=N,tt.setAnimationLoop(N),N===null?Pn.stop():Pn.start()},tt.addEventListener("sessionstart",ho),tt.addEventListener("sessionend",po),this.render=function(N,ne){if(ne!==void 0&&ne.isCamera!==!0){kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;j!==null&&j.renderStart(N,ne);const xe=tt.enabled===!0&&tt.isPresenting===!0,ce=U!==null&&(Y===null||xe)&&U.begin(F,Y);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ne.parent===null&&ne.matrixWorldAutoUpdate===!0&&ne.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(ne),ne=tt.getCamera()),N.isScene===!0&&N.onBeforeRender(F,N,ne,Y),P=ke.get(N,x.length),P.init(ne),P.state.textureUnits=le.getTextureUnits(),x.push(P),Ue.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),me.setFromProjectionMatrix(Ue,zi,ne.reversedDepth),Ze=this.localClippingEnabled,Fe=rt.init(this.clippingPlanes,Ze),I=Ge.get(N,E.length),I.init(),E.push(I),tt.enabled===!0&&tt.isPresenting===!0){const He=F.xr.getDepthSensingMesh();He!==null&&ps(He,ne,-1/0,F.sortObjects)}ps(N,ne,0,F.sortObjects),I.finish(),j!==null&&j.updateLights(P.state.lightsArray),F.sortObjects===!0&&I.sort(V,Me),ft=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,ft&&ht.addToRenderList(I,N),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Fe===!0&&rt.beginShadows();const ae=P.state.shadowsArray;if(lt.render(ae,N,ne),Fe===!0&&rt.endShadows(),(ce&&U.hasRenderPass())===!1){const He=I.opaque,We=I.transmissive;if(P.setupLights(),ne.isArrayCamera){const Je=ne.cameras;if(We.length>0)for(let st=0,xt=Je.length;st<xt;st++){const yt=Je[st];mo(He,We,N,yt)}ft&&ht.render(N);for(let st=0,xt=Je.length;st<xt;st++){const yt=Je[st];oa(I,N,yt,yt.viewport)}}else We.length>0&&mo(He,We,N,ne),ft&&ht.render(N),oa(I,N,ne)}Y!==null&&ee===0&&(le.updateMultisampleRenderTarget(Y),le.updateRenderTargetMipmap(Y)),ce&&U.end(F),N.isScene===!0&&N.onAfterRender(F,N,ne),Ye.resetDefaultState(),q=-1,B=null,x.pop(),x.length>0?(P=x[x.length-1],le.setTextureUnits(P.state.textureUnits),Fe===!0&&rt.setGlobalState(F.clippingPlanes,P.state.camera)):P=null,E.pop(),E.length>0?I=E[E.length-1]:I=null,j!==null&&j.renderEnd()};function ps(N,ne,xe,ce){if(N.visible===!1)return;if(N.layers.test(ne.layers)){if(N.isGroup)xe=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(ne);else if(N.isLightProbeGrid)P.pushLightProbeGrid(N);else if(N.isLight)P.pushLight(N),N.castShadow&&P.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||N.intersectsFrustum(me)){ce&&pt.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Ue);const He=we.update(N),We=N.material;We.visible&&I.push(N,He,We,xe,pt.z,null,ne)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||N.intersectsFrustum(me))){const He=we.update(N),We=N.material;if(ce&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),pt.copy(N.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),pt.copy(He.boundingSphere.center)),pt.applyMatrix4(N.matrixWorld).applyMatrix4(Ue)),Array.isArray(We)){const Je=He.groups;for(let st=0,xt=Je.length;st<xt;st++){const yt=Je[st],Ke=We[yt.materialIndex];Ke&&Ke.visible&&I.push(N,He,Ke,xe,pt.z,yt,ne)}}else We.visible&&I.push(N,He,We,xe,pt.z,null,ne)}}const Xe=N.children;for(let He=0,We=Xe.length;He<We;He++)ps(Xe[He],ne,xe,ce)}function oa(N,ne,xe,ce){const{opaque:ae,transmissive:Xe,transparent:He}=N;P.setupLightsView(xe),Fe===!0&&rt.setGlobalState(F.clippingPlanes,xe),ce&&T.viewport(b.copy(ce)),ae.length>0&&zr(ae,ne,xe),Xe.length>0&&zr(Xe,ne,xe),He.length>0&&zr(He,ne,xe),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function mo(N,ne,xe,ce){if((xe.isScene===!0?xe.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[ce.id]===void 0){const Ke=Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[ce.id]=new Ci(1,1,{generateMipmaps:!0,type:Ke?Vi:Kn,minFilter:ss,samples:Math.max(4,G.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const Xe=P.state.transmissionRenderTarget[ce.id],He=ce.viewport||b;Xe.setSize(He.z*F.transmissionResolutionScale,He.w*F.transmissionResolutionScale);const We=F.getRenderTarget(),Je=F.getActiveCubeFace(),st=F.getActiveMipmapLevel();F.setRenderTarget(Xe),F.getClearColor(_e),Ce=F.getClearAlpha(),Ce<1&&F.setClearColor(16777215,.5),F.clear(),ft&&ht.render(xe);const xt=F.toneMapping;F.toneMapping=Gi;const yt=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),P.setupLightsView(ce),Fe===!0&&rt.setGlobalState(F.clippingPlanes,ce),zr(N,xe,ce),le.updateMultisampleRenderTarget(Xe),le.updateRenderTargetMipmap(Xe),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let At=0,Qt=ne.length;At<Qt;At++){const Gt=ne[At],{object:Ot,geometry:an,material:qe,group:tn}=Gt;if(qe.side===rr&&Ot.layers.test(ce.layers)){const Ct=qe.side;qe.side=Dn,qe.needsUpdate=!0,la(Ot,xe,ce,an,qe,tn),qe.side=Ct,qe.needsUpdate=!0,Ke=!0}}Ke===!0&&(le.updateMultisampleRenderTarget(Xe),le.updateRenderTargetMipmap(Xe))}F.setRenderTarget(We,Je,st),F.setClearColor(_e,Ce),yt!==void 0&&(ce.viewport=yt),F.toneMapping=xt}function zr(N,ne,xe){const ce=ne.isScene===!0?ne.overrideMaterial:null;for(let ae=0,Xe=N.length;ae<Xe;ae++){const He=N[ae],{object:We,geometry:Je,group:st}=He;let xt=He.material;xt.allowOverride===!0&&ce!==null&&(xt=ce),We.layers.test(xe.layers)&&la(We,ne,xe,Je,xt,st)}}function la(N,ne,xe,ce,ae,Xe){j!==null&&ae.isNodeMaterial&&j.setObject(N,ae),N.onBeforeRender(F,ne,xe,ce,ae,Xe),N.modelViewMatrix.multiplyMatrices(xe.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),ae.onBeforeRender(F,ne,xe,ce,N,Xe),ae.transparent===!0&&ae.side===rr&&ae.forceSinglePass===!1?(ae.side=Dn,ae.needsUpdate=!0,F.renderBufferDirect(xe,ne,ce,ae,N,Xe),ae.side=cs,ae.needsUpdate=!0,F.renderBufferDirect(xe,ne,ce,ae,N,Xe),ae.side=rr):F.renderBufferDirect(xe,ne,ce,ae,N,Xe),N.onAfterRender(F,ne,xe,ce,ae,Xe)}function Gr(N,ne,xe){ne.isScene!==!0&&(ne=dt);const ce=ue.get(N),ae=P.state.lights,Xe=P.state.shadowsArray,He=ae.state.version,We=ze.getParameters(N,ae.state,Xe,ne,xe,P.state.lightProbeGridArray),Je=ze.getProgramCacheKey(We);let st=ce.programs;ce.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?ne.environment:null,ce.fog=ne.fog;const xt=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;ce.envMap=be.get(N.envMap||ce.environment,xt),ce.envMapRotation=ce.environment!==null&&N.envMap===null?ne.environmentRotation:N.envMapRotation,st===void 0&&(N.addEventListener("dispose",Zn),st=new Map,ce.programs=st);let yt=st.get(Je);if(yt!==void 0){if(ce.currentProgram===yt&&ce.lightsStateVersion===He)return go(N,We),yt}else We.uniforms=ze.getUniforms(N),j!==null&&N.isNodeMaterial&&j.build(N,xe,We),N.onBeforeCompile(We,F),yt=ze.acquireProgram(We,Je),st.set(Je,yt),ce.uniforms=We.uniforms;const Ke=ce.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Ke.clippingPlanes=rt.uniform),go(N,We),ce.needsLights=ua(N),ce.lightsStateVersion=He,ce.needsLights&&(Ke.ambientLightColor.value=ae.state.ambient,Ke.lightProbe.value=ae.state.probe,Ke.sunLights.value=ae.state.sun,Ke.sunLightShadows.value=ae.state.sunShadow,Ke.directionalLights.value=ae.state.directional,Ke.directionalLightShadows.value=ae.state.directionalShadow,Ke.spotLights.value=ae.state.spot,Ke.spotLightShadows.value=ae.state.spotShadow,Ke.rectAreaLights.value=ae.state.rectArea,Ke.ltc_1.value=ae.state.rectAreaLTC1,Ke.ltc_2.value=ae.state.rectAreaLTC2,Ke.pointLights.value=ae.state.point,Ke.pointLightShadows.value=ae.state.pointShadow,Ke.hemisphereLights.value=ae.state.hemi,Ke.sunShadowMatrix.value=ae.state.sunShadowMatrix,Ke.sunShadowCascade.value=ae.state.sunShadowCascade,Ke.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,Ke.spotLightMatrix.value=ae.state.spotLightMatrix,Ke.spotLightMap.value=ae.state.spotLightMap,Ke.pointShadowMatrix.value=ae.state.pointShadowMatrix),ce.lightProbeGrid=P.state.lightProbeGridArray.length>0,ce.currentProgram=yt,ce.uniformsList=null,yt}function ca(N){if(N.uniformsList===null){const ne=N.currentProgram.getUniforms();N.uniformsList=Xl.seqWithValue(ne.seq,N.uniforms)}return N.uniformsList}function go(N,ne){const xe=ue.get(N);xe.outputColorSpace=ne.outputColorSpace,xe.batching=ne.batching,xe.batchingColor=ne.batchingColor,xe.instancing=ne.instancing,xe.instancingColor=ne.instancingColor,xe.instancingMorph=ne.instancingMorph,xe.skinning=ne.skinning,xe.morphTargets=ne.morphTargets,xe.morphNormals=ne.morphNormals,xe.morphColors=ne.morphColors,xe.morphTargetsCount=ne.morphTargetsCount,xe.numClippingPlanes=ne.numClippingPlanes,xe.numIntersection=ne.numClipIntersection,xe.vertexAlphas=ne.vertexAlphas,xe.vertexTangents=ne.vertexTangents,xe.toneMapping=ne.toneMapping}function sc(N,ne){if(N.length===0)return null;if(N.length===1)return N[0].texture!==null?N[0]:null;R.setFromMatrixPosition(ne.matrixWorld);for(let xe=0,ce=N.length;xe<ce;xe++){const ae=N[xe];if(ae.texture!==null&&ae.boundingBox.containsPoint(R))return ae}return null}function qt(N,ne,xe,ce,ae){ne.isScene!==!0&&(ne=dt),le.resetTextureUnits();const Xe=ne.fog,He=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial?ne.environment:null,We=Y===null?F.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Rt.workingColorSpace,Je=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial&&!ce.envMap||ce.isMeshPhongMaterial&&!ce.envMap,st=be.get(ce.envMap||He,Je),xt=ce.vertexColors===!0&&!!xe.attributes.color&&xe.attributes.color.itemSize===4,yt=!!xe.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),Ke=!!xe.morphAttributes.position,At=!!xe.morphAttributes.normal,Qt=!!xe.morphAttributes.color;let Gt=Gi;ce.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Gt=F.toneMapping);const Ot=xe.morphAttributes.position||xe.morphAttributes.normal||xe.morphAttributes.color,an=Ot!==void 0?Ot.length:0,qe=ue.get(ce),tn=P.state.lights;if(Fe===!0&&(Ze===!0||N!==B)){const Bt=N===B&&ce.id===q;rt.setState(ce,N,Bt)}let Ct=!1;ce.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==tn.state.version||qe.outputColorSpace!==We||ae.isBatchedMesh&&qe.batching===!1||!ae.isBatchedMesh&&qe.batching===!0||ae.isBatchedMesh&&qe.batchingColor===!0&&ae._colorsTexture===null||ae.isBatchedMesh&&qe.batchingColor===!1&&ae._colorsTexture!==null||ae.isInstancedMesh&&qe.instancing===!1||!ae.isInstancedMesh&&qe.instancing===!0||ae.isSkinnedMesh&&qe.skinning===!1||!ae.isSkinnedMesh&&qe.skinning===!0||ae.isInstancedMesh&&qe.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&qe.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&qe.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&qe.instancingMorph===!1&&ae.morphTexture!==null||qe.envMap!==st||ce.fog===!0&&qe.fog!==Xe||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==rt.numPlanes||qe.numIntersection!==rt.numIntersection)||qe.vertexAlphas!==xt||qe.vertexTangents!==yt||qe.morphTargets!==Ke||qe.morphNormals!==At||qe.morphColors!==Qt||qe.toneMapping!==Gt||qe.morphTargetsCount!==an||!!qe.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(Ct=!0):(Ct=!0,qe.__version=ce.version);let yn=qe.currentProgram;Ct===!0&&(yn=Gr(ce,ne,ae),j&&ce.isNodeMaterial&&j.onUpdateProgram(ce,yn,qe));let wt=!1,di=!1,Wi=!1;const Ut=yn.getUniforms(),jt=qe.uniforms;if(T.useProgram(yn.program)&&(wt=!0,di=!0,Wi=!0),ce.id!==q&&(q=ce.id,di=!0),qe.needsLights){const Bt=sc(P.state.lightProbeGridArray,ae);qe.lightProbeGrid!==Bt&&(qe.lightProbeGrid=Bt,di=!0)}if(wt||B!==N){T.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),Ut.setValue(K,"projectionMatrix",N.projectionMatrix),Ut.setValue(K,"viewMatrix",N.matrixWorldInverse);const Qn=Ut.map.cameraPosition;Qn!==void 0&&Qn.setValue(K,Ve.setFromMatrixPosition(N.matrixWorld)),G.logarithmicDepthBuffer&&Ut.setValue(K,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Ut.setValue(K,"isOrthographic",N.isOrthographicCamera===!0),B!==N&&(B=N,di=!0,Wi=!0)}if(qe.needsLights&&(tn.state.sunShadowMap.length>0&&Ut.setValue(K,"sunShadowMap",tn.state.sunShadowMap,le),tn.state.directionalShadowMap.length>0&&Ut.setValue(K,"directionalShadowMap",tn.state.directionalShadowMap,le),tn.state.spotShadowMap.length>0&&Ut.setValue(K,"spotShadowMap",tn.state.spotShadowMap,le),tn.state.pointShadowMap.length>0&&Ut.setValue(K,"pointShadowMap",tn.state.pointShadowMap,le)),ae.isSkinnedMesh){Ut.setOptional(K,ae,"bindMatrix"),Ut.setOptional(K,ae,"bindMatrixInverse");const Bt=ae.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),Ut.setValue(K,"boneTexture",Bt.boneTexture,le))}ae.isBatchedMesh&&(Ut.setOptional(K,ae,"batchingTexture"),Ut.setValue(K,"batchingTexture",ae._matricesTexture,le),Ut.setOptional(K,ae,"batchingIdTexture"),Ut.setValue(K,"batchingIdTexture",ae._indirectTexture,le),Ut.setOptional(K,ae,"batchingColorTexture"),ae._colorsTexture!==null&&Ut.setValue(K,"batchingColorTexture",ae._colorsTexture,le));const fi=xe.morphAttributes;if((fi.position!==void 0||fi.normal!==void 0||fi.color!==void 0)&&te.update(ae,xe,yn),(di||qe.receiveShadow!==ae.receiveShadow)&&(qe.receiveShadow=ae.receiveShadow,Ut.setValue(K,"receiveShadow",ae.receiveShadow)),(ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial)&&ce.envMap===null&&ne.environment!==null&&(jt.envMapIntensity.value=ne.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=rw()),di){if(Ut.setValue(K,"toneMappingExposure",F.toneMappingExposure),qe.needsLights&&ac(jt,Wi),Xe&&ce.fog===!0&&it.refreshFogUniforms(jt,Xe),it.refreshMaterialUniforms(jt,ce,k,W,P.state.transmissionRenderTarget[N.id]),qe.needsLights&&qe.lightProbeGrid){const Bt=qe.lightProbeGrid;jt.probesSH.value=Bt.texture,jt.probesMin.value.copy(Bt.boundingBox.min),jt.probesMax.value.copy(Bt.boundingBox.max),jt.probesResolution.value.copy(Bt.resolution)}Xl.upload(K,ca(qe),jt,le)}if(ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(Xl.upload(K,ca(qe),jt,le),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Ut.setValue(K,"center",ae.center),Ut.setValue(K,"modelViewMatrix",ae.modelViewMatrix),Ut.setValue(K,"normalMatrix",ae.normalMatrix),Ut.setValue(K,"modelMatrix",ae.matrixWorld),ce.uniformsGroups!==void 0){const Bt=ce.uniformsGroups;for(let Qn=0,hi=Bt.length;Qn<hi;Qn++){const pi=Bt[Qn];Te.update(pi,yn),Te.bind(pi,yn)}}return yn}function ac(N,ne){N.ambientLightColor.needsUpdate=ne,N.lightProbe.needsUpdate=ne,N.sunLights.needsUpdate=ne,N.sunLightShadows.needsUpdate=ne,N.directionalLights.needsUpdate=ne,N.directionalLightShadows.needsUpdate=ne,N.pointLights.needsUpdate=ne,N.pointLightShadows.needsUpdate=ne,N.spotLights.needsUpdate=ne,N.spotLightShadows.needsUpdate=ne,N.rectAreaLights.needsUpdate=ne,N.hemisphereLights.needsUpdate=ne}function ua(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return oe},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(N,ne,xe){const ce=ue.get(N);ce.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),ue.get(N.texture).__webglTexture=ne,ue.get(N.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:xe,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,ne){const xe=ue.get(N);xe.__webglFramebuffer=ne,xe.__useDefaultFramebuffer=ne===void 0},this.setRenderTarget=function(N,ne=0,xe=0){Y=N,oe=ne,ee=xe;let ce=null,ae=!1,Xe=!1;if(N){const We=ue.get(N);if(We.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(K.FRAMEBUFFER,We.__webglFramebuffer),b.copy(N.viewport),O.copy(N.scissor),he=N.scissorTest,T.viewport(b),T.scissor(O),T.setScissorTest(he),q=-1;return}else if(We.__webglFramebuffer===void 0)le.setupRenderTarget(N);else if(We.__hasExternalTextures)le.rebindTextures(N,ue.get(N.texture).__webglTexture,ue.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const xt=N.depthTexture;if(We.__boundDepthTexture!==xt){if(xt!==null&&ue.has(xt)&&(N.width!==xt.image.width||N.height!==xt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(N)}}const Je=N.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Xe=!0);const st=ue.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(st[ne])?ce=st[ne][xe]:ce=st[ne],ae=!0):N.samples>0&&le.useMultisampledRTT(N)===!1?ce=ue.get(N).__webglMultisampledFramebuffer:Array.isArray(st)?ce=st[xe]:ce=st,b.copy(N.viewport),O.copy(N.scissor),he=N.scissorTest}else b.copy(ge).multiplyScalar(k).floor(),O.copy(se).multiplyScalar(k).floor(),he=Pe;if(xe!==0&&(ce=J),T.bindFramebuffer(K.FRAMEBUFFER,ce)&&T.drawBuffers(N,ce),T.viewport(b),T.scissor(O),T.setScissorTest(he),ae){const We=ue.get(N.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+ne,We.__webglTexture,xe)}else if(Xe){const We=ne;for(let Je=0;Je<N.textures.length;Je++){const st=ue.get(N.textures[Je]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+Je,st.__webglTexture,xe,We)}}else if(N!==null&&xe!==0){const We=ue.get(N.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,We.__webglTexture,xe)}q=-1};function da(N){const ne=ue.get(N);return(ne.__readFormat!==N.format||ne.__readType!==N.type)&&(ne.__readFormat=N.format,ne.__readType=N.type,ne.__formatReadable=G.textureFormatReadable(N.format),ne.__typeReadable=G.textureTypeReadable(N.type)),ne}this.readRenderTargetPixels=function(N,ne,xe,ce,ae,Xe,He,We=0){if(!(N&&N.isWebGLRenderTarget)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=ue.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&He!==void 0&&(Je=Je[He]),Je){T.bindFramebuffer(K.FRAMEBUFFER,Je);try{const st=N.textures[We],xt=st.format,yt=st.type;N.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+We);const Ke=da(st);if(Ke.__formatReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ke.__typeReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ne>=0&&ne<=N.width-ce&&xe>=0&&xe<=N.height-ae&&K.readPixels(ne,xe,ce,ae,Be.convert(xt),Be.convert(yt),Xe)}finally{const st=Y!==null?ue.get(Y).__webglFramebuffer:null;T.bindFramebuffer(K.FRAMEBUFFER,st)}}},this.readRenderTargetPixelsAsync=async function(N,ne,xe,ce,ae,Xe,He,We=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=ue.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&He!==void 0&&(Je=Je[He]),Je)if(ne>=0&&ne<=N.width-ce&&xe>=0&&xe<=N.height-ae){T.bindFramebuffer(K.FRAMEBUFFER,Je);const st=N.textures[We],xt=st.format,yt=st.type;N.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+We);const Ke=da(st);if(Ke.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ke.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const At=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,At),K.bufferData(K.PIXEL_PACK_BUFFER,Xe.byteLength,K.STREAM_READ),K.readPixels(ne,xe,ce,ae,Be.convert(xt),Be.convert(yt),0),K.bindBuffer(K.PIXEL_PACK_BUFFER,null);const Qt=Y!==null?ue.get(Y).__webglFramebuffer:null;T.bindFramebuffer(K.FRAMEBUFFER,Qt);const Gt=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await Mv(K,Gt,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,At),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,Xe),K.bindBuffer(K.PIXEL_PACK_BUFFER,null),K.deleteBuffer(At),K.deleteSync(Gt),Xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,ne=null,xe=0){const ce=Math.pow(2,-xe),ae=Math.floor(N.image.width*ce),Xe=Math.floor(N.image.height*ce),He=ne!==null?ne.x:0,We=ne!==null?ne.y:0;le.setTexture2D(N,0),K.copyTexSubImage2D(K.TEXTURE_2D,xe,0,0,He,We,ae,Xe),T.unbindTexture()},this.copyTextureToTexture=function(N,ne,xe=null,ce=null,ae=0,Xe=0){let He,We,Je,st,xt,yt,Ke,At,Qt;const Gt=N.isCompressedTexture?N.mipmaps[Xe]:N.image;if(xe!==null)He=xe.max.x-xe.min.x,We=xe.max.y-xe.min.y,Je=xe.isBox3?xe.max.z-xe.min.z:1,st=xe.min.x,xt=xe.min.y,yt=xe.isBox3?xe.min.z:0;else{const jt=Math.pow(2,-ae);He=Math.floor(Gt.width*jt),We=Math.floor(Gt.height*jt),N.isDataArrayTexture?Je=Gt.depth:N.isData3DTexture?Je=Math.floor(Gt.depth*jt):Je=1,st=0,xt=0,yt=0}ce!==null?(Ke=ce.x,At=ce.y,Qt=ce.z):(Ke=0,At=0,Qt=0);const Ot=Be.convert(ne.format),an=Be.convert(ne.type);let qe;ne.isData3DTexture?(le.setTexture3D(ne,0),qe=K.TEXTURE_3D):ne.isDataArrayTexture||ne.isCompressedArrayTexture?(le.setTexture2DArray(ne,0),qe=K.TEXTURE_2D_ARRAY):(le.setTexture2D(ne,0),qe=K.TEXTURE_2D),T.activeTexture(K.TEXTURE0),T.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,ne.flipY),T.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),T.pixelStorei(K.UNPACK_ALIGNMENT,ne.unpackAlignment);const tn=T.getParameter(K.UNPACK_ROW_LENGTH),Ct=T.getParameter(K.UNPACK_IMAGE_HEIGHT),yn=T.getParameter(K.UNPACK_SKIP_PIXELS),wt=T.getParameter(K.UNPACK_SKIP_ROWS),di=T.getParameter(K.UNPACK_SKIP_IMAGES);T.pixelStorei(K.UNPACK_ROW_LENGTH,Gt.width),T.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Gt.height),T.pixelStorei(K.UNPACK_SKIP_PIXELS,st),T.pixelStorei(K.UNPACK_SKIP_ROWS,xt),T.pixelStorei(K.UNPACK_SKIP_IMAGES,yt);const Wi=N.isDataArrayTexture||N.isData3DTexture,Ut=ne.isDataArrayTexture||ne.isData3DTexture;if(N.isDepthTexture){const jt=ue.get(N),fi=ue.get(ne),Bt=ue.get(jt.__renderTarget),Qn=ue.get(fi.__renderTarget);T.bindFramebuffer(K.READ_FRAMEBUFFER,Bt.__webglFramebuffer),T.bindFramebuffer(K.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let hi=0;hi<Je;hi++)Wi&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ue.get(N).__webglTexture,ae,yt+hi),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ue.get(ne).__webglTexture,Xe,Qt+hi)),K.blitFramebuffer(st,xt,He,We,Ke,At,He,We,K.DEPTH_BUFFER_BIT,K.NEAREST);T.bindFramebuffer(K.READ_FRAMEBUFFER,null),T.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(ae!==0||N.isRenderTargetTexture||ue.has(N)){const jt=ue.get(N),fi=ue.get(ne);T.bindFramebuffer(K.READ_FRAMEBUFFER,$),T.bindFramebuffer(K.DRAW_FRAMEBUFFER,Q);for(let Bt=0;Bt<Je;Bt++)Wi?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,jt.__webglTexture,ae,yt+Bt):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,jt.__webglTexture,ae),Ut?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,fi.__webglTexture,Xe,Qt+Bt):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,fi.__webglTexture,Xe),ae!==0?K.blitFramebuffer(st,xt,He,We,Ke,At,He,We,K.COLOR_BUFFER_BIT,K.NEAREST):Ut?K.copyTexSubImage3D(qe,Xe,Ke,At,Qt+Bt,st,xt,He,We):K.copyTexSubImage2D(qe,Xe,Ke,At,st,xt,He,We);T.bindFramebuffer(K.READ_FRAMEBUFFER,null),T.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else Ut?N.isDataTexture||N.isData3DTexture?K.texSubImage3D(qe,Xe,Ke,At,Qt,He,We,Je,Ot,an,Gt.data):ne.isCompressedArrayTexture?K.compressedTexSubImage3D(qe,Xe,Ke,At,Qt,He,We,Je,Ot,Gt.data):K.texSubImage3D(qe,Xe,Ke,At,Qt,He,We,Je,Ot,an,Gt):N.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,Xe,Ke,At,He,We,Ot,an,Gt.data):N.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,Xe,Ke,At,Gt.width,Gt.height,Ot,Gt.data):K.texSubImage2D(K.TEXTURE_2D,Xe,Ke,At,He,We,Ot,an,Gt);T.pixelStorei(K.UNPACK_ROW_LENGTH,tn),T.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Ct),T.pixelStorei(K.UNPACK_SKIP_PIXELS,yn),T.pixelStorei(K.UNPACK_SKIP_ROWS,wt),T.pixelStorei(K.UNPACK_SKIP_IMAGES,di),Xe===0&&ne.generateMipmaps&&K.generateMipmap(qe),T.unbindTexture()},this.initRenderTarget=function(N){ue.get(N).__webglFramebuffer===void 0&&le.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?le.setTextureCube(N,0):N.isData3DTexture?le.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?le.setTexture2DArray(N,0):le.setTexture2D(N,0),T.unbindTexture()},this.resetState=function(){oe=0,ee=0,Y=null,T.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}}function aw(){const t=document.createElement("canvas");t.width=2048,t.height=1024;const r=t.getContext("2d"),o=document.createElement("canvas");o.width=2048,o.height=1024;const l=o.getContext("2d");r.fillStyle="#8b8f98",r.fillRect(0,0,2048,1024),l.fillStyle="#808080",l.fillRect(0,0,2048,1024),[{x:.28,y:.38,r:.16,opacity:.38},{x:.45,y:.32,r:.12,opacity:.42},{x:.58,y:.36,r:.09,opacity:.4},{x:.65,y:.42,r:.1,opacity:.44},{x:.76,y:.48,r:.08,opacity:.36},{x:.52,y:.56,r:.08,opacity:.35}].forEach(({x:A,y:L,r:y,opacity:_})=>{const D=A*2048,z=L*1024,R=y*2048;for(let I=0;I<5;I++){const P=Math.sin(I*1.7)*R*.25,E=Math.cos(I*2.3)*R*.25,x=R*(.6+Math.random()*.4),U=r.createRadialGradient(D+P,z+E,0,D+P,z+E,x);U.addColorStop(0,`rgba(32, 35, 42, ${_})`),U.addColorStop(.65,`rgba(48, 52, 60, ${_*.7})`),U.addColorStop(1,"rgba(139, 143, 152, 0)"),r.fillStyle=U,r.beginPath(),r.arc(D+P,z+E,x,0,Math.PI*2),r.fill();const F=l.createRadialGradient(D+P,z+E,0,D+P,z+E,x);F.addColorStop(0,`rgba(60, 60, 60, ${_})`),F.addColorStop(1,"rgba(128, 128, 128, 0)"),l.fillStyle=F,l.beginPath(),l.arc(D+P,z+E,x,0,Math.PI*2),l.fill()}});const f=r.getImageData(0,0,2048,1024),h=f.data,p=l.getImageData(0,0,2048,1024),v=p.data;for(let A=0;A<h.length;A+=4){const L=(Math.random()-.5)*22;h[A]=Math.max(0,Math.min(255,h[A]+L)),h[A+1]=Math.max(0,Math.min(255,h[A+1]+L)),h[A+2]=Math.max(0,Math.min(255,h[A+2]+L)),v[A]=Math.max(0,Math.min(255,v[A]+L*1.5)),v[A+1]=v[A],v[A+2]=v[A]}r.putImageData(f,0,0),l.putImageData(p,0,0);const S=180;for(let A=0;A<S;A++){const L=Math.random()*2048,y=Math.random()*1024,_=Math.random()<.08?Math.random()*32+20:Math.random()*12+4;r.strokeStyle="rgba(235, 240, 250, 0.45)",r.lineWidth=Math.max(1,_*.16),r.beginPath(),r.arc(L,y,_,0,Math.PI*2),r.stroke();const D=r.createRadialGradient(L,y,0,L,y,_);D.addColorStop(0,"rgba(40, 42, 48, 0.6)"),D.addColorStop(.8,"rgba(65, 68, 76, 0.35)"),D.addColorStop(1,"rgba(235, 240, 250, 0.3)"),r.fillStyle=D,r.beginPath(),r.arc(L,y,_,0,Math.PI*2),r.fill();const z=l.createRadialGradient(L,y,0,L,y,_*1.25);if(z.addColorStop(0,"rgba(30, 30, 30, 0.8)"),z.addColorStop(.75,"rgba(50, 50, 50, 0.5)"),z.addColorStop(.9,"rgba(240, 240, 240, 0.9)"),z.addColorStop(1,"rgba(128, 128, 128, 0)"),l.fillStyle=z,l.beginPath(),l.arc(L,y,_*1.25,0,Math.PI*2),l.fill(),_>22&&Math.random()>.4){r.save(),r.strokeStyle="rgba(245, 250, 255, 0.22)",r.lineWidth=1;const R=12+Math.floor(Math.random()*10);for(let I=0;I<R;I++){const P=I/R*Math.PI*2+(Math.random()-.5)*.2,E=_*(3.5+Math.random()*4.5);r.beginPath(),r.moveTo(L,y),r.lineTo(L+Math.cos(P)*E,y+Math.sin(P)*E),r.stroke()}r.restore()}}const g=new Cm(t);g.wrapS=io,g.wrapT=bi;const w=new Cm(o);return w.wrapS=io,w.wrapT=bi,{colorTexture:g,bumpTexture:w}}function ow(){const s=De.useRef(null),[e,t]=De.useState(0),[r,o]=De.useState(!1);return De.useEffect(()=>{const l=s.current;if(!l)return;let u=window.innerWidth,f=window.innerHeight;const h=new Ov,p=new li(42,u/f,.1,100);p.position.set(0,0,7.5);const v=new sw({antialias:!0,alpha:!0,powerPreference:"high-performance"});v.setSize(u,f),v.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),v.toneMapping=mf,v.toneMappingExposure=1.25,l.appendChild(v.domElement);const{colorTexture:S,bumpTexture:g}=aw(),w=new Js,A=()=>{window.innerWidth<768?w.position.set(.6,-.4,0):w.position.set(2.1,.05,0)};A(),h.add(w);const L=1.95,y=new Zl(L,64,64),_=new Pm({map:S,bumpMap:g,bumpScale:.065,roughness:.88,metalness:.04}),D=new ui(y,_);w.add(D);const z=new Zl(L*1.018,48,48),R=new Ri({uniforms:{glowColor:{value:new Lt(11197695)},viewVector:{value:p.position}},vertexShader:`
        uniform vec3 viewVector;
        varying float intensity;
        void main() {
          vec3 vNormal = normalize(normalMatrix * normal);
          vec3 vNormel = normalize(normalMatrix * viewVector);
          intensity = pow(0.68 - dot(vNormal, vec3(0, 0, 1.0)), 2.8);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 glowColor;
        varying float intensity;
        void main() {
          vec3 glow = glowColor * intensity;
          gl_FragColor = vec4(glow, intensity * 0.45);
        }
      `,side:Dn,blending:yd,transparent:!0,depthWrite:!1}),I=new ui(z,R);w.add(I);const P=new Js;w.add(P);const E=[],x=16,U=new Pm({color:7238526,roughness:.92,metalness:.1,flatShading:!0});for(let ge=0;ge<x;ge++){const se=.06+Math.random()*.08,Pe=new Cf(se,0),me=Pe.attributes.position;for(let dt=0;dt<me.count;dt++){const ft=(Math.random()-.5)*.035;me.setXYZ(dt,me.getX(dt)+ft,me.getY(dt)+ft,me.getZ(dt)+ft)}Pe.computeVertexNormals();const Fe=new ui(Pe,U),Ze=L*(1.28+Math.random()*.85),Ue=ge/x*Math.PI*2+Math.random()*.4,Ve=(Math.random()-.5)*.65,pt=.003+Math.random()*.005;E.push({mesh:Fe,dist:Ze,angle:Ue,inclination:Ve,speed:pt,rotSpeedX:(Math.random()-.5)*.03,rotSpeedY:(Math.random()-.5)*.03,rotSpeedZ:(Math.random()-.5)*.03}),P.add(Fe)}const F=new Um(16777215,2.7);F.position.set(6,2.2,3.5),h.add(F);const X=new s_(922402,.25);h.add(X);const j=new Um(65484,.4);j.position.set(-5,-2,-2),h.add(j);let J=.15,$=-.45,Q=J,oe=$,ee=0,Y=0,q=!1,B=0,b=0;const O=ge=>{const se=l.getBoundingClientRect(),Pe=ge.clientX-se.left,me=ge.clientY-se.top;(Pe>u*.45||window.innerWidth<768)&&(q=!0,o(!0),B=Pe,b=me,ee=0,Y=0)},he=ge=>{if(!q)return;const se=l.getBoundingClientRect(),Pe=ge.clientX-se.left,me=ge.clientY-se.top,Fe=Pe-B,Ze=me-b;B=Pe,b=me,Y=Fe*.0055,ee=Ze*.0055,$+=Y,J+=ee},_e=()=>{q&&(q=!1,o(!1))};window.addEventListener("pointerdown",O),window.addEventListener("pointermove",he),window.addEventListener("pointerup",_e),window.addEventListener("pointercancel",_e);let Ce=window.scrollY,Ee=window.scrollY;const W=()=>{Ee=window.scrollY};window.addEventListener("scroll",W,{passive:!0});const k=()=>{u=window.innerWidth,f=window.innerHeight,p.aspect=u/f,p.updateProjectionMatrix(),v.setSize(u,f),v.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),A()};window.addEventListener("resize",k);let V=null;const Me=()=>{if(document.hidden){V=requestAnimationFrame(Me);return}Ce+=(Ee-Ce)*.08;const ge=window.innerHeight,se=ge*.2,Pe=ge*.65;let me=0;Ce>=se&&(me=Math.min(1,(Ce-se)/(Pe-se)));const Fe=.72+me*.28;w.scale.set(Fe,Fe,Fe);const Ze=Math.max(1,document.documentElement.scrollHeight-ge),Ue=Math.max(0,Math.min(1,Ce/Ze));q||($+=9e-4,ee*=.92,Y*=.92,J+=ee,$+=Y),J=Math.max(-.85,Math.min(.85,J)),Q+=(J-Q)*.08,oe+=($-oe)*.08,D.rotation.y=oe,D.rotation.x=Q+Ue*.22,E.forEach(Ve=>{Ve.angle+=Ve.speed;const pt=Math.cos(Ve.angle)*Ve.dist,dt=Math.sin(Ve.angle)*Ve.dist,ft=Math.sin(Ve.angle+Ve.inclination)*(Ve.dist*.32);Ve.mesh.position.set(pt,ft,dt),Ve.mesh.rotation.x+=Ve.rotSpeedX,Ve.mesh.rotation.y+=Ve.rotSpeedY,Ve.mesh.rotation.z+=Ve.rotSpeedZ}),R.uniforms.viewVector.value=p.position,s.current&&(s.current.style.opacity=me.toFixed(3),s.current.style.pointerEvents=me>.35?"auto":"none"),v.render(h,p),V=requestAnimationFrame(Me)};return V=requestAnimationFrame(Me),()=>{cancelAnimationFrame(V),window.removeEventListener("pointerdown",O),window.removeEventListener("pointermove",he),window.removeEventListener("pointerup",_e),window.removeEventListener("pointercancel",_e),window.removeEventListener("scroll",W),window.removeEventListener("resize",k),y.dispose(),_.dispose(),z.dispose(),R.dispose(),S.dispose(),g.dispose(),U.dispose(),E.forEach(ge=>ge.mesh.geometry.dispose()),v.dispose(),l&&v.domElement&&l.removeChild(v.domElement)}},[]),M.jsx("div",{ref:s,id:"moon-3d-background",className:"fixed inset-0 w-full h-full z-[2] transition-opacity duration-500 overflow-hidden",style:{opacity:0,pointerEvents:"none",cursor:r?"grabbing":"grab"},"aria-hidden":"true",title:"3D Interactive Lunar Orbit - Click & drag to spin"})}class lw{constructor(e,t,r,o){this.x=e,this.y=t,this.bhX=r,this.bhY=o;const l=Math.atan2(o-t,r-e),u=l+Math.PI/2*(Math.random()>.5?1:-1),f=.5+Math.random()*1.1;this.vx=Math.cos(l)*f+Math.cos(u)*(Math.random()*.5),this.vy=Math.sin(l)*f+Math.sin(u)*(Math.random()*.5),this.life=1,this.decay=.005+Math.random()*.008,this.size=1.5+Math.random()*2.5;const h=["rgba(255, 230, 100, ","rgba(255, 120, 40, ","rgba(93, 230, 255, ","rgba(255, 60, 90, ","rgba(255, 255, 255, "];this.colorBase=h[Math.floor(Math.random()*h.length)]}update(){const e=this.bhX-this.x,t=this.bhY-this.y,r=Math.sqrt(e*e+t*t);if(r<15){this.life=0;return}const o=Math.min(5,95/Math.max(r,10));this.vx+=e/r*o*.04,this.vy+=t/r*o*.04,this.vx*=.985,this.vy*=.985,this.x+=this.vx,this.y+=this.vy,this.life-=this.decay}draw(e){if(this.life<=0)return;const t=Math.max(0,this.life);e.save(),e.shadowColor="rgba(255, 140, 40, 0.8)",e.shadowBlur=8,e.fillStyle=`${this.colorBase}${t})`,e.beginPath(),e.arc(this.x,this.y,Math.max(.1,this.size*t),0,Math.PI*2),e.fill(),e.restore()}}class cw{constructor(e,t,r,o){this.x=e,this.y=t,this.destX=r,this.destY=o;const l=Math.atan2(o-t,r-e),u=l+Math.PI/2*(Math.random()>.5?1:-1),f=5+Math.random()*6.5,h=(Math.random()-.5)*5;this.vx=Math.cos(l)*f+Math.cos(u)*h,this.vy=Math.sin(l)*f+Math.sin(u)*h,this.life=1,this.decay=.005+Math.random()*.006,this.size=2+Math.random()*2.8;const p=["rgba(0, 255, 204, ","rgba(93, 230, 255, ","rgba(255, 215, 0, ","rgba(255, 255, 255, ","rgba(179, 136, 255, "];this.colorBase=p[Math.floor(Math.random()*p.length)]}update(){const e=this.destX-this.x,t=this.destY-this.y,r=Math.hypot(e,t);if(r<32){this.life-=.045,this.vx=t/r*3-e/r*2,this.vy=-(e/r)*3-t/r*2,this.x+=this.vx,this.y+=this.vy;return}const o=Math.min(15,220/Math.max(r,15))+.6;this.vx+=e/r*o*.45,this.vy+=t/r*o*.45,this.vx*=.965,this.vy*=.965,this.x+=this.vx,this.y+=this.vy,this.life-=this.decay}draw(e){if(this.life<=0)return;const t=Math.max(0,this.life);e.save(),e.shadowColor="rgba(0, 255, 204, 0.9)",e.shadowBlur=10,e.fillStyle=`${this.colorBase}${t})`,e.beginPath(),e.arc(this.x,this.y,Math.max(.2,this.size*Math.min(1,t*1.2)),0,Math.PI*2),e.fill(),e.strokeStyle=`${this.colorBase}${t*.65})`,e.lineWidth=Math.max(.5,this.size*.45),e.beginPath(),e.moveTo(this.x,this.y),e.lineTo(this.x-this.vx*2,this.y-this.vy*2),e.stroke(),e.restore()}}function uw(){const s=De.useRef(null);return De.useEffect(()=>{const e=s.current;if(!e)return;const t=e.getContext("2d");if(!t)return;const r=[],o=220;let l=null,u=Math.min(window.devicePixelRatio||1,2);const f=()=>{u=Math.min(window.devicePixelRatio||1,2);const g=window.innerWidth,w=window.innerHeight;e.width=Math.floor(g*u),e.height=Math.floor(w*u),e.style.width=`${g}px`,e.style.height=`${w}px`};f(),window.addEventListener("resize",f,{passive:!0});const h=(g,w,A,L)=>{r.length<o&&r.push(new lw(g,w,A,L))},p=(g,w,A,L)=>{r.length<o&&r.push(new cw(g,w,A,L))};window.emitSiphonParticle=h,window.emitQuantumTunnelParticle=p;const v=g=>{if(!g.detail)return;const{startX:w,startY:A,bhX:L,bhY:y,destX:_,destY:D,isTunnel:z}=g.detail;if(typeof w=="number"&&typeof A=="number")if(z&&typeof _=="number"&&typeof D=="number")p(w,A,_,D);else{const R=typeof L=="number"?L:window.innerWidth/2,I=typeof y=="number"?y:window.innerHeight/2;h(w,A,R,I)}};window.addEventListener("emit-siphon-particle",v);const S=()=>{t.save(),t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,e.width,e.height),t.scale(u,u);for(let g=r.length-1;g>=0;g--){const w=r[g];w.update(),w.draw(t),w.life<=0&&r.splice(g,1)}t.restore(),l=requestAnimationFrame(S)};return l=requestAnimationFrame(S),()=>{cancelAnimationFrame(l),window.removeEventListener("resize",f),window.removeEventListener("emit-siphon-particle",v),window.emitSiphonParticle===h&&delete window.emitSiphonParticle,window.emitQuantumTunnelParticle===p&&delete window.emitQuantumTunnelParticle}},[]),M.jsx("canvas",{id:"siphon-canvas",ref:s,className:"siphon-canvas pointer-events-none fixed inset-0 z-40","aria-hidden":"true"})}let _t=null,Vn=null,Za=null,Qa=null,Ks=null,Bl=null,sr=null,Ur=null,Oi=null,ai=!1;const uf=new Set;function df(){uf.forEach(s=>{try{s(ai)}catch(e){console.error("Audio subscriber error:",e)}})}function a0(){if(_t)return;const s=window.AudioContext||window.webkitAudioContext;s&&(_t=new s,Vn=_t.createGain(),Vn.gain.setValueAtTime(.08,_t.currentTime),Vn.connect(_t.destination),Za=_t.createOscillator(),Za.type="sine",Za.frequency.setValueAtTime(55,_t.currentTime),Qa=_t.createOscillator(),Qa.type="triangle",Qa.frequency.setValueAtTime(55.75,_t.currentTime),Ks=_t.createBiquadFilter(),Ks.type="lowpass",Ks.frequency.setValueAtTime(140,_t.currentTime),Bl=_t.createGain(),Bl.gain.setValueAtTime(.6,_t.currentTime),Za.connect(Ks),Qa.connect(Ks),Ks.connect(Bl),Bl.connect(Vn),Za.start(),Qa.start(),sr=_t.createOscillator(),sr.type="sawtooth",sr.frequency.setValueAtTime(45,_t.currentTime),Oi=_t.createBiquadFilter(),Oi.type="lowpass",Oi.frequency.setValueAtTime(80,_t.currentTime),Oi.Q.setValueAtTime(4,_t.currentTime),Ur=_t.createGain(),Ur.gain.setValueAtTime(0,_t.currentTime),sr.connect(Oi),Oi.connect(Ur),Ur.connect(Vn),sr.start(),ai=!0,df())}function Pf(){const[s,e]=De.useState(ai);De.useEffect(()=>{uf.add(e),e(ai);try{if(localStorage.getItem("cosmic_audio_active")==="true"&&!_t){const l=()=>{localStorage.getItem("cosmic_audio_active")==="true"&&!ai&&(a0(),_t&&_t.state==="suspended"&&_t.resume()),window.removeEventListener("pointerdown",l),window.removeEventListener("keydown",l)};window.addEventListener("pointerdown",l,{once:!0}),window.addEventListener("keydown",l,{once:!0})}}catch{}return()=>{uf.delete(e)}},[]);const t=De.useCallback(()=>{if(!_t){a0();try{localStorage.setItem("cosmic_audio_active","true")}catch{}return!0}if(_t.state==="suspended"||!ai){_t.resume().then(()=>{if(!Vn)return;const l=_t.currentTime;Vn.gain.cancelScheduledValues(l),Vn.gain.setValueAtTime(.001,l),Vn.gain.linearRampToValueAtTime(.08,l+.12)}),ai=!0,df();try{localStorage.setItem("cosmic_audio_active","true")}catch{}return!0}else{const l=_t.currentTime;Vn&&(Vn.gain.cancelScheduledValues(l),Vn.gain.linearRampToValueAtTime(1e-4,l+.12)),setTimeout(()=>{!ai&&_t&&_t.state!=="closed"&&_t.suspend()},130),ai=!1,df();try{localStorage.setItem("cosmic_audio_active","false")}catch{}return!1}},[]),r=De.useCallback(l=>{if(!_t||!ai||!Ur||!sr||!Oi||_t.state==="suspended")return;const u=Math.max(0,Math.min(1,l)),f=_t.currentTime,h=Math.min(.7,u*.85),p=45+u*80,v=80+u*450;Ur.gain.setTargetAtTime(h,f,.05),sr.frequency.setTargetAtTime(p,f,.05),Oi.frequency.setTargetAtTime(v,f,.05)},[]),o=De.useCallback(()=>{if(!(!_t||!ai||!Vn)&&_t.state!=="suspended")try{const l=_t.currentTime,u=_t.createOscillator(),f=_t.createGain();u.type="sine",u.frequency.setValueAtTime(880,l),u.frequency.exponentialRampToValueAtTime(1760,l+.35),f.gain.setValueAtTime(.06,l),f.gain.exponentialRampToValueAtTime(1e-4,l+.8),u.connect(f),f.connect(Vn),u.start(l),u.stop(l+.85)}catch(l){console.error("Failed to play celestial chime:",l)}},[]);return{isPlaying:s,toggleAudio:t,setGravitationalShear:r,playChime:o}}function _d(s){if(!_t||!ai||!Ur||!sr||!Oi||_t.state==="suspended")return;const e=Math.max(0,Math.min(1,s)),t=_t.currentTime,r=Math.min(.7,e*.85),o=45+e*80,l=80+e*450;Ur.gain.setTargetAtTime(r,t,.05),sr.frequency.setTargetAtTime(o,t,.05),Oi.frequency.setTargetAtTime(l,t,.05)}typeof window<"u"&&(window.setCosmicAudioShear=_d,window.CosmicAudio=window.CosmicAudio||{},window.CosmicAudio.setGravitationalPitch=_d,window.addEventListener("cosmic-audio-shear",s=>{s.detail&&typeof s.detail.shear=="number"&&_d(s.detail.shear)}));const Zs={intro:{sector:"SINGULARITY",messages:["You're at Singularity, driven by a real-time relativistic WebGL black hole engine.","Notice Kian's title in pure white, with its upper edge disintegrating into cosmic stardust.","The white particle dust is physically pulled into the black hole's singularity core.","Drag me directly into the black hole center to test quantum gravitational disintegration!"]},arcade:{sector:"LUNAR ORBIT DEFENSE",messages:["Entering Lunar Orbit Defense. The photorealistic 3D Moon and asteroid field anchor the dogfight.","Interact with the viewport to take manual flight control, or press Space to fire lasers without scrolling.","Collect plasma power-up orbs to deploy multi-vector spread armaments."]},galaxy:{sector:"EDUCATION",messages:["Entering the Education section. To the right is a photorealistic 3D Moon with real-time crater relief.","Drag directly on the 3D Moon to spin it in zero-g with realistic physical momentum.","Notice the orbital debris circling in gravitational equilibrium around the lunar surface.","Explore Kian's academic foundation across ICCT Colleges and DAEHAN ICT Strand in the orbital cards."]},supernova:{sector:"SKILLS",messages:["Inside the Skills section. The 3D Moon dynamically shifts angle under solar radiation.","Drag the 3D Moon at any time to inspect its day/night terminator crater shadows.","Here are Kian's technical skills forged across Languages, Frontend, Backend, and Systems.","Use the segmented filter bar above to isolate technical clusters."]},contact:{sector:"CONTACT",messages:["Arrived at Contact. Ready to build or collaborate? Transmit a signal.","Select any communication terminal or use the direct composer to dispatch an email to Kian.","You can also explore his GitHub repositories or connect directly on social channels."]},footer:{sector:"MISSION COMPLETE",messages:["Mission Complete. You have traversed Kian Rances Cagadas's cosmic portfolio.","Human-crafted computational excellence in the vast cosmic expanse."]}};function dw(){const[s,e]=De.useState(!0),[t,r]=De.useState("intro"),[o,l]=De.useState(0),[u,f]=De.useState(!1),[h,p]=De.useState(!1),[v,S]=De.useState(!1),[g,w]=De.useState(!1),[A,L]=De.useState("idle"),y=De.useRef(!1),[_,D]=De.useState({x:0,y:0}),[z,R]=De.useState(0),[I,P]=De.useState(!1),[E,x]=De.useState({left:!1,right:!1}),U=De.useRef({x:0,y:0,vx:0,vy:0,targetX:0,targetY:0,currentZone:"RIGHT",waypointQueue:[],roamTimer:0,thrustPulse:0,userHasDragged:!1,dragStart:{mouseX:0,mouseY:0,startX:0,startY:0}}),F=De.useRef(null),{playChime:X}=Pf(),j=De.useCallback(()=>{var Pe,me;const W=document.getElementById("intro");if(!W)return null;const k=W.getBoundingClientRect();if(k.bottom<60||k.top>window.innerHeight-60)return null;const V=k.left+k.width/2,Me=k.top+k.height/2,ge=((Pe=window.BlackHoleEngine)==null?void 0:Pe.radius)||Math.min(k.width,k.height)*.16,se=((me=window.BlackHoleEngine)==null?void 0:me.tidalRadius)||ge*2.8;return{x:V,y:Me,radius:ge,tidalRadius:se}},[]);De.useEffect(()=>{const W=()=>{const k=window.innerWidth,V=window.innerHeight,Me=Math.max(30,k-135),ge=Math.max(120,V-220);U.current.x=Me,U.current.y=ge,U.current.targetX=Me,U.current.targetY=ge,U.current.currentZone="RIGHT",D({x:Me,y:ge})};return W(),window.addEventListener("resize",W),()=>window.removeEventListener("resize",W)},[]),De.useEffect(()=>{const W=()=>{const k=[{id:"footer",el:document.querySelector("footer")||document.getElementById("footer")},{id:"contact",el:document.getElementById("contact")},{id:"supernova",el:document.getElementById("supernova")},{id:"galaxy",el:document.getElementById("galaxy")},{id:"arcade",el:document.getElementById("arcade")},{id:"intro",el:document.getElementById("intro")}],V=window.innerHeight*.42;for(const Me of k)if(Me.el){const ge=Me.el.getBoundingClientRect();if(ge.top<=V&&ge.bottom>=100){Me.id!==t&&(r(Me.id),l(0),p(!0),setTimeout(()=>p(!1),550));break}}};return window.addEventListener("scroll",W,{passive:!0}),W(),()=>window.removeEventListener("scroll",W)},[t]),De.useEffect(()=>{const W=setInterval(()=>{!document.hidden&&!v&&!y.current&&(l(k=>{const V=Zs[t]||Zs.intro;return(k+1)%V.messages.length}),p(!0),setTimeout(()=>p(!1),500))},7500);return()=>clearInterval(W)},[t,v]);const J=De.useCallback((W,k)=>{if(y.current)return;y.current=!0,S(!1),L("collapsing");const V=U.current;V.targetX=W-50,V.targetY=k-50,V.vx=0,V.vy=0;const Me=window.innerWidth,ge=window.innerHeight,se=Math.max(30,Me-140),Pe=Math.max(120,ge-160),me=se+50,Fe=Pe+50;typeof X=="function"&&X();for(let Ze=0;Ze<65;Ze++)setTimeout(()=>{if(typeof window.emitQuantumTunnelParticle=="function"){const Ue=(Math.random()-.5)*35,Ve=(Math.random()-.5)*35;window.emitQuantumTunnelParticle(W+Ue,k+Ve,me,Fe)}},Ze*15);window.dispatchEvent(new CustomEvent("cosmic-telemetry-update",{detail:{shearRatio:1,distanceText:"SINGULARITY CORE",statusText:"SPAGHETTIFYING CORE"}})),setTimeout(()=>{L("swallowed"),window.dispatchEvent(new CustomEvent("trigger-hawking-flash")),window.dispatchEvent(new CustomEvent("cosmic-telemetry-update",{detail:{shearRatio:1,distanceText:"EVENT HORIZON",statusText:"QUANTUM DISINTEGRATION COMPLETE"}}))},450),setTimeout(()=>{V.x=se,V.y=Pe,V.targetX=se,V.targetY=Pe,V.vx=0,V.vy=0,V.currentZone="BOTTOM",D({x:se,y:Pe}),L("tunneling")},1e3),setTimeout(()=>{L("respawning"),typeof X=="function"&&X(),window.dispatchEvent(new CustomEvent("cosmic-telemetry-update",{detail:{shearRatio:0,distanceText:"SAFE ORBIT",statusText:"QUANTUM REBOUND COMPLETE"}})),p(!0),setTimeout(()=>p(!1),1200)},1650),setTimeout(()=>{L("idle"),y.current=!1,V.waypointQueue=[],V.roamTimer=4},2550)},[X]);De.useEffect(()=>{const W=()=>{const k=j();k&&J(k.x,k.y)};return window.addEventListener("trigger-spaghetti-demo",W),()=>window.removeEventListener("trigger-spaghetti-demo",W)},[j,J]),De.useEffect(()=>{let W=null,k=performance.now();const V=()=>{const se=window.innerWidth,Pe=window.innerHeight,me=Math.max(30,Math.min(65,se*.04)),Fe=85,Ze=Math.max(90,Pe-135),Ue=se-me-75;return{w:se,h:Pe,marginSide:me,marginTop:Fe,marginBottom:Ze,rightX:Ue,cTL:{x:me+10,y:Fe},cTR:{x:Ue,y:Fe},cBR:{x:Ue,y:Ze},cBL:{x:me+10,y:Ze}}},Me=()=>{const se=U.current,{w:Pe,h:me,marginSide:Fe,marginTop:Ze,marginBottom:Ue,rightX:Ve,cTL:pt,cTR:dt,cBR:ft,cBL:St}=V();if(se.waypointQueue&&se.waypointQueue.length>0){const le=se.waypointQueue.shift();se.targetX=le.x,se.targetY=le.y,se.roamTimer=le.duration||3;return}const K=["LEFT","RIGHT","TOP","BOTTOM"],Mt=Math.random()<.78?K.filter(le=>le!==se.currentZone)[Math.floor(Math.random()*(K.length-1))]:se.currentZone;se.currentZone=Mt;const G=()=>({x:Fe+Math.random()*25,y:Ze+35+Math.random()*(Ue-Ze-70)}),T=()=>({x:Ve+Math.random()*25,y:Ze+35+Math.random()*(Ue-Ze-70)}),re=()=>({x:Fe+40+Math.random()*(Ve-Fe-80),y:Ze+Math.random()*20}),ue=()=>({x:Fe+40+Math.random()*(Ve-Fe-80),y:Ue+Math.random()*20});if(Mt==="LEFT"){const le=G();if(se.x>Pe*.5){se.y<me*.5?se.waypointQueue=[dt,{x:Pe*.5,y:Ze},pt,le]:se.waypointQueue=[ft,{x:Pe*.5,y:Ue},St,le];const be=se.waypointQueue.shift();se.targetX=be.x,se.targetY=be.y}else se.targetX=le.x,se.targetY=le.y}else if(Mt==="RIGHT"){const le=T();if(se.x<Pe*.5){se.y<me*.5?se.waypointQueue=[pt,{x:Pe*.5,y:Ze},dt,le]:se.waypointQueue=[St,{x:Pe*.5,y:Ue},ft,le];const be=se.waypointQueue.shift();se.targetX=be.x,se.targetY=be.y}else se.targetX=le.x,se.targetY=le.y}else if(Mt==="TOP"){const le=re();if(se.y>me*.5){se.x<Pe*.5?se.waypointQueue=[St,{x:Fe,y:me*.5},pt,le]:se.waypointQueue=[ft,{x:Ve,y:me*.5},dt,le];const be=se.waypointQueue.shift();se.targetX=be.x,se.targetY=be.y}else se.targetX=le.x,se.targetY=le.y}else{const le=ue();if(se.y<me*.5){se.x<Pe*.5?se.waypointQueue=[pt,{x:Fe,y:me*.5},St,le]:se.waypointQueue=[dt,{x:Ve,y:me*.5},ft,le];const be=se.waypointQueue.shift();se.targetX=be.x,se.targetY=be.y}else se.targetX=le.x,se.targetY=le.y}se.roamTimer=4.5+Math.random()*4.5};Me();const ge=se=>{const Pe=Math.min((se-k)/1e3,.08);k=se;const me=U.current,{w:Fe,h:Ze,marginSide:Ue,marginTop:Ve,marginBottom:pt,rightX:dt}=V();if(y.current){A==="collapsing"&&(me.x+=(me.targetX-me.x)*Math.min(1,8*Pe),me.y+=(me.targetY-me.y)*Math.min(1,8*Pe),D({x:Math.round(me.x),y:Math.round(me.y)})),W=requestAnimationFrame(ge);return}if(!v&&!g){me.roamTimer-=Pe,me.thrustPulse=(me.thrustPulse||0)+Pe*10,me.roamTimer<=0&&Me();const ft=Math.max(75,Fe*.12),St=Math.min(Fe-140,Fe*.88),K=115,Ht=Ze-140;if(me.x>ft&&me.x<St&&me.y>K&&me.y<Ht){const re=me.x-ft,ue=St-me.x,le=me.y-K,be=Ht-me.y,Ie=Math.min(re,ue,le,be);Ie===re?(me.vx-=240*Pe,me.targetX=Ue+10,me.currentZone="LEFT"):Ie===ue?(me.vx+=240*Pe,me.targetX=dt,me.currentZone="RIGHT"):Ie===le?(me.vy-=240*Pe,me.targetY=Ve,me.currentZone="TOP"):(me.vy+=240*Pe,me.targetY=pt,me.currentZone="BOTTOM"),me.waypointQueue=[],me.roamTimer=3}const Mt=me.targetX-me.x,G=me.targetY-me.y,T=Math.hypot(Mt,G);if(T>16){const re=Math.min(60,T*.75),ue=Mt/T*re,le=G/T*re;me.vx+=(ue-me.vx)*Math.min(1,2*Pe),me.vy+=(le-me.vy)*Math.min(1,2*Pe),me.x+=me.vx*Pe,me.y+=me.vy*Pe;const be=Math.hypot(me.vx,me.vy);P(be>14);const Ie=Math.max(-20,Math.min(20,me.vx/45*16));R(Ie),x({left:me.vx>18,right:me.vx<-18})}else{me.vx*=.92,me.vy*=.92;const re=Math.sin(se*.0012)*.35,ue=Math.cos(se*.0016)*.45;me.x+=re,me.y+=ue,P(!1),R(Math.sin(se*.0014)*3),x({left:!1,right:!1})}me.x=Math.max(15,Math.min(Fe-110,me.x)),me.y=Math.max(75,Math.min(Ze-135,me.y)),D({x:Math.round(me.x),y:Math.round(me.y)})}W=requestAnimationFrame(ge)};return W=requestAnimationFrame(ge),()=>cancelAnimationFrame(W)},[v,g,A]);const $=W=>{if(W.stopPropagation(),v||y.current)return;f(!0),typeof X=="function"&&X();const k=Zs[t]||Zs.intro;l(V=>(V+1)%k.messages.length),p(!0),setTimeout(()=>{f(!1),p(!1)},1100)},Q=W=>{(W.key==="Enter"||W.key===" ")&&(W.preventDefault(),$(W))},oe=W=>{var V,Me;if(W.target.closest(".astro-dock-btn")||y.current)return;S(!0);const k=U.current;k.userHasDragged=!0,k.dragStart={mouseX:W.clientX,mouseY:W.clientY,startX:k.x,startY:k.y},(Me=(V=W.currentTarget).setPointerCapture)==null||Me.call(V,W.pointerId)},ee=W=>{var se,Pe;if(!v||y.current)return;const k=U.current,V=W.clientX-k.dragStart.mouseX,Me=W.clientY-k.dragStart.mouseY;k.x=Math.max(15,Math.min(window.innerWidth-110,k.dragStart.startX+V)),k.y=Math.max(75,Math.min(window.innerHeight-135,k.dragStart.startY+Me)),k.targetX=k.x,k.targetY=k.y,D({x:k.x,y:k.y});const ge=j();if(ge){const me=k.x+50,Fe=k.y+50,Ze=Math.hypot(me-ge.x,Fe-ge.y);if(Ze<ge.tidalRadius){typeof window.emitSiphonParticle=="function"&&window.emitSiphonParticle(me,Fe,ge.x,ge.y);const Ue=Math.max(0,Math.min(1,1-(Ze-ge.radius)/(ge.tidalRadius-ge.radius)));window.dispatchEvent(new CustomEvent("cosmic-telemetry-update",{detail:{shearRatio:Ue,distanceText:Ze<ge.radius*1.1?"EVENT HORIZON":`${Math.round(Ze)} KM`,statusText:Ze<ge.radius?"SINGULARITY BREACH":"TIDAL STRETCH"}}))}Ze<ge.radius*.95&&((Pe=(se=W.currentTarget).releasePointerCapture)==null||Pe.call(se,W.pointerId),J(ge.x,ge.y))}},Y=W=>{var k,V;if(v&&!y.current){S(!1),(V=(k=W.currentTarget).releasePointerCapture)==null||V.call(k,W.pointerId);const Me=U.current,ge=window.innerWidth,se=window.innerHeight,Pe=j();if(Pe){const Ve=Me.x+50,pt=Me.y+50;if(Math.hypot(Ve-Pe.x,pt-Pe.y)<Pe.radius*1.2){J(Pe.x,Pe.y);return}}const me=Math.max(75,ge*.12),Fe=Math.min(ge-140,ge*.88),Ze=115,Ue=se-140;Me.x>me&&Me.x<Fe&&Me.y>Ze&&Me.y<Ue?Me.x<ge/2?(Me.currentZone="LEFT",Me.targetX=45):(Me.currentZone="RIGHT",Me.targetX=ge-120):Me.targetX=Me.x,Me.targetY=Me.y,Me.waypointQueue=[],Me.roamTimer=3.5}},q=W=>{W.stopPropagation(),w(k=>!k)},B=Zs[t]||Zs.intro,b=B.messages[o%B.messages.length],O=_.x>(typeof window<"u"?window.innerWidth/2:500),he=_.y<165,_e=A==="swallowed"||A==="tunneling",Ce=A==="collapsing",Ee=A==="respawning";return M.jsxs("aside",{ref:F,id:"floating-astronaut-companion",className:`fixed z-40 transition-opacity duration-500 select-none ${s&&!_e?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"} ${v?"cursor-grabbing":"cursor-grab"} ${u?"wander-boost":""}`,style:{left:`${_.x}px`,top:`${_.y}px`,touchAction:"none"},onPointerDown:oe,onPointerMove:ee,onPointerUp:Y,onPointerCancel:Y,"aria-label":"Astronaut Kian Cosmic Tour Companion",children:[Ee&&M.jsx("span",{className:"absolute -inset-6 rounded-full border-2 border-cyan-400 animate-ping pointer-events-none opacity-90 shadow-[0_0_35px_rgba(0,255,204,0.9)]","aria-hidden":"true"}),!g&&!Ce&&!_e&&M.jsxs("div",{id:"floating-speech-bubble",className:`absolute max-w-[280px] sm:max-w-[320px] flex flex-col items-start p-3.5 rounded-2xl bg-[#060814]/90 border border-white/10 backdrop-blur-2xl shadow-[0_16px_40px_rgba(0,0,0,0.85)] ring-1 ring-white/5 transition-all duration-300 z-50 ${he?"top-[105%] mt-2":"bottom-[105%] mb-2"} ${O?"right-0":"left-0"} ${h?"scale-105":"scale-100"}`,"aria-live":"polite",children:[M.jsxs("div",{className:"flex items-center justify-between w-full pb-2 mb-2 border-b border-white/10 text-[10px] font-mono tracking-[0.2em] text-cyan-400 font-medium",children:[M.jsxs("span",{className:"flex items-center gap-1.5",children:[M.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,255,204,0.8)]"}),M.jsx("span",{className:"text-white/80",children:B.sector})]}),M.jsx("button",{type:"button",className:"w-4 h-4 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors text-xs cursor-pointer",onClick:q,title:"Dock companion","aria-label":"Dock companion",children:"✕"})]}),M.jsx("p",{className:"text-left font-outfit text-xs text-white/90 leading-relaxed pt-0.5 whitespace-normal",children:Ee?"Event horizon breached! Quantum tunneling re-materialization complete.":b})]}),g&&M.jsxs("button",{type:"button",className:"px-3.5 py-1.5 rounded-full bg-[#060814]/90 border border-white/10 backdrop-blur-xl text-[11px] font-mono tracking-widest text-white/80 flex items-center gap-2 hover:border-cyan-400/40 hover:text-white transition-all shadow-[0_8px_25px_rgba(0,0,0,0.8)] cursor-pointer",onClick:q,title:"Resume Tour","aria-label":"Resume Tour",children:[M.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,255,204,0.8)] animate-pulse"}),M.jsx("span",{children:"TOUR ACTIVE"})]}),M.jsx("div",{className:`floating-astro-body transition-all duration-300 ${Ce?"scale-[0.1] rotate-[720deg] blur-[3px] brightness-[300%] opacity-20 duration-500":Ee?"scale-100 rotate-0 blur-0 brightness-150 duration-700":"scale-100 rotate-0 blur-0 brightness-100"}`,style:{transform:Ce?"scale(0.08) rotate(720deg)":Ee?"scale(1.0) rotate(0deg)":`rotate(${z}deg)`},onClick:$,onKeyDown:Q,tabIndex:0,role:"button","aria-label":"Astronaut Kian - Click to talk & flip, drag to reposition",title:"Click to interact • Drag into black hole center to test disintegration!",children:M.jsxs("svg",{className:"w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.7)] drop-shadow-[0_0_15px_rgba(0,255,204,0.3)]",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[M.jsxs("defs",{children:[M.jsxs("linearGradient",{id:"astroVisorGold",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[M.jsx("stop",{offset:"0%",stopColor:"#fff8cc"}),M.jsx("stop",{offset:"25%",stopColor:"#ffc700"}),M.jsx("stop",{offset:"60%",stopColor:"#e08500"}),M.jsx("stop",{offset:"85%",stopColor:"#7a3b00"}),M.jsx("stop",{offset:"100%",stopColor:"#1a0e2e"})]}),M.jsxs("radialGradient",{id:"astroHelmet3D",cx:"35%",cy:"30%",r:"70%",children:[M.jsx("stop",{offset:"0%",stopColor:"#ffffff"}),M.jsx("stop",{offset:"45%",stopColor:"#edf3fa"}),M.jsx("stop",{offset:"80%",stopColor:"#c2d3ea"}),M.jsx("stop",{offset:"100%",stopColor:"#7e96b8"})]}),M.jsxs("linearGradient",{id:"mmuChassisGrad",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[M.jsx("stop",{offset:"0%",stopColor:"#252d42"}),M.jsx("stop",{offset:"50%",stopColor:"#171c2b"}),M.jsx("stop",{offset:"100%",stopColor:"#0b0e18"})]}),M.jsxs("linearGradient",{id:"cryoTankGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[M.jsx("stop",{offset:"0%",stopColor:"#455470"}),M.jsx("stop",{offset:"35%",stopColor:"#9db4d4"}),M.jsx("stop",{offset:"70%",stopColor:"#5a6f91"}),M.jsx("stop",{offset:"100%",stopColor:"#222b3d"})]}),M.jsxs("linearGradient",{id:"nozzleGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[M.jsx("stop",{offset:"0%",stopColor:"#1a2233"}),M.jsx("stop",{offset:"50%",stopColor:"#4e6285"}),M.jsx("stop",{offset:"100%",stopColor:"#1a2233"})]}),M.jsxs("linearGradient",{id:"ionFlameOuter",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[M.jsx("stop",{offset:"0%",stopColor:"#00ffcc",stopOpacity:"0.95"}),M.jsx("stop",{offset:"35%",stopColor:"#38bdf8",stopOpacity:"0.85"}),M.jsx("stop",{offset:"75%",stopColor:"#818cf8",stopOpacity:"0.4"}),M.jsx("stop",{offset:"100%",stopColor:"#a855f7",stopOpacity:"0"})]}),M.jsxs("linearGradient",{id:"ionFlameCore",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[M.jsx("stop",{offset:"0%",stopColor:"#ffffff",stopOpacity:"1"}),M.jsx("stop",{offset:"40%",stopColor:"#a5f3fc",stopOpacity:"0.9"}),M.jsx("stop",{offset:"100%",stopColor:"#00ffcc",stopOpacity:"0"})]}),M.jsxs("linearGradient",{id:"suitFabricGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[M.jsx("stop",{offset:"0%",stopColor:"#d5e3f5"}),M.jsx("stop",{offset:"40%",stopColor:"#ffffff"}),M.jsx("stop",{offset:"80%",stopColor:"#e2ecfa"}),M.jsx("stop",{offset:"100%",stopColor:"#adc3e0"})]}),M.jsxs("filter",{id:"beaconBloom",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[M.jsx("feGaussianBlur",{stdDeviation:"2.5",result:"blur"}),M.jsxs("feMerge",{children:[M.jsx("feMergeNode",{in:"blur"}),M.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),M.jsx("path",{d:"M 22 55 C 8 62, -6 50, -18 60",fill:"none",stroke:"#38bdf8",strokeWidth:"2.5",strokeDasharray:"4 3",opacity:"0.8"}),M.jsxs("g",{className:"left-engine-exhaust",children:[M.jsx("ellipse",{cx:"26",cy:u||v||I?82:74,rx:u||v||I?5.5:4,ry:u||v||I?18:10,fill:"url(#ionFlameOuter)"}),M.jsx("ellipse",{cx:"26",cy:u||v||I?78:72,rx:"2.2",ry:u||v||I?11:6,fill:"url(#ionFlameCore)"}),M.jsx("ellipse",{cx:"26",cy:"71",rx:"1.5",ry:"2",fill:"#ffffff",opacity:"0.9"})]}),M.jsxs("g",{className:"right-engine-exhaust",children:[M.jsx("ellipse",{cx:"74",cy:u||v||I?82:74,rx:u||v||I?5.5:4,ry:u||v||I?18:10,fill:"url(#ionFlameOuter)"}),M.jsx("ellipse",{cx:"74",cy:u||v||I?78:72,rx:"2.2",ry:u||v||I?11:6,fill:"url(#ionFlameCore)"}),M.jsx("ellipse",{cx:"74",cy:"71",rx:"1.5",ry:"2",fill:"#ffffff",opacity:"0.9"})]}),M.jsxs("g",{opacity:I||u?1:.6,children:[M.jsx("circle",{cx:"26",cy:"88",r:"1.5",fill:"#38bdf8",className:"animate-ping"}),M.jsx("circle",{cx:"74",cy:"88",r:"1.5",fill:"#38bdf8",className:"animate-ping"}),M.jsx("circle",{cx:"26",cy:"95",r:"1.1",fill:"#00ffcc"}),M.jsx("circle",{cx:"74",cy:"95",r:"1.1",fill:"#00ffcc"})]}),M.jsx("rect",{x:"28",y:"32",width:"44",height:"36",rx:"8",fill:"url(#mmuChassisGrad)",stroke:"#475569",strokeWidth:"1.8"}),M.jsx("line",{x1:"36",y1:"42",x2:"64",y2:"42",stroke:"rgba(255,255,255,0.12)",strokeWidth:"1.5"}),M.jsx("line",{x1:"36",y1:"47",x2:"64",y2:"47",stroke:"rgba(255,255,255,0.12)",strokeWidth:"1.5"}),M.jsx("line",{x1:"36",y1:"52",x2:"64",y2:"52",stroke:"rgba(255,255,255,0.12)",strokeWidth:"1.5"}),M.jsx("rect",{x:"20",y:"34",width:"9",height:"28",rx:"4.5",fill:"url(#cryoTankGrad)",stroke:"#334155",strokeWidth:"1.5"}),M.jsx("line",{x1:"22",y1:"36",x2:"22",y2:"58",stroke:"rgba(255,255,255,0.4)",strokeWidth:"1"}),M.jsx("rect",{x:"71",y:"34",width:"9",height:"28",rx:"4.5",fill:"url(#cryoTankGrad)",stroke:"#334155",strokeWidth:"1.5"}),M.jsx("line",{x1:"73",y1:"36",x2:"73",y2:"58",stroke:"rgba(255,255,255,0.4)",strokeWidth:"1"}),M.jsx("polygon",{points:"23,62 29,62 31,68 21,68",fill:"url(#nozzleGrad)",stroke:"#64748b",strokeWidth:"1"}),M.jsx("polygon",{points:"71,62 77,62 79,68 69,68",fill:"url(#nozzleGrad)",stroke:"#64748b",strokeWidth:"1"}),M.jsx("circle",{cx:"18",cy:"33",r:"2.5",fill:"#1e293b",stroke:"#64748b",strokeWidth:"1"}),M.jsx("circle",{cx:"82",cy:"33",r:"2.5",fill:"#1e293b",stroke:"#64748b",strokeWidth:"1"}),E.left&&M.jsx("ellipse",{cx:"14",cy:"33",rx:"4.5",ry:"2",fill:"#38bdf8",opacity:"0.9"}),E.right&&M.jsx("ellipse",{cx:"86",cy:"33",rx:"4.5",ry:"2",fill:"#38bdf8",opacity:"0.9"}),M.jsx("rect",{x:"34",y:"65",width:"12",height:"21",rx:"5.5",fill:"url(#suitFabricGrad)",stroke:"#475569",strokeWidth:"1.8"}),M.jsx("rect",{x:"54",y:"65",width:"12",height:"21",rx:"5.5",fill:"url(#suitFabricGrad)",stroke:"#475569",strokeWidth:"1.8"}),M.jsx("rect",{x:"35",y:"73",width:"10",height:"4",rx:"1.5",fill:"#334155",opacity:"0.5"}),M.jsx("rect",{x:"55",y:"73",width:"10",height:"4",rx:"1.5",fill:"#334155",opacity:"0.5"}),M.jsx("rect",{x:"32",y:"80",width:"14",height:"7.5",rx:"3.5",fill:"#1e293b",stroke:"#475569",strokeWidth:"1.2"}),M.jsx("rect",{x:"54",y:"80",width:"14",height:"7.5",rx:"3.5",fill:"#1e293b",stroke:"#475569",strokeWidth:"1.2"}),M.jsx("rect",{x:"32",y:"35",width:"36",height:"35",rx:"10",fill:"url(#suitFabricGrad)",stroke:"#475569",strokeWidth:"2"}),M.jsx("rect",{x:"40",y:"43",width:"20",height:"14",rx:"4",fill:"#0f172a",stroke:"#334155",strokeWidth:"1.2"}),M.jsx("circle",{cx:"45",cy:"50",r:"2.2",fill:"#10b981",className:"animate-pulse"}),M.jsx("circle",{cx:"55",cy:"50",r:"2.2",fill:"#00ffcc",className:"animate-pulse"}),M.jsx("path",{d:"M 36 36 L 40 50",stroke:"#334155",strokeWidth:"1.8"}),M.jsx("path",{d:"M 64 36 L 60 50",stroke:"#334155",strokeWidth:"1.8"}),M.jsx("path",{d:"M 33 42 L 18 54 L 22 59 L 36 48 Z",fill:"url(#suitFabricGrad)",stroke:"#475569",strokeWidth:"1.6"}),M.jsx("circle",{cx:"19",cy:"57",r:"4.5",fill:"#1e293b"}),M.jsxs("g",{className:"w-waving-arm",children:[M.jsx("path",{d:"M 67 42 L 82 30 L 86 35 L 70 48 Z",fill:"url(#suitFabricGrad)",stroke:"#475569",strokeWidth:"1.6"}),M.jsx("circle",{cx:"84",cy:"31",r:"4.8",fill:"#1e293b"}),M.jsx("path",{d:"M 84 27 L 89 22 L 91 26 L 87 31",fill:"#1e293b"})]}),M.jsx("circle",{cx:"50",cy:"26",r:"19",fill:"url(#astroHelmet3D)",stroke:"#475569",strokeWidth:"2.5"}),M.jsx("ellipse",{cx:"50",cy:"26",rx:"14",ry:"11",fill:"url(#astroVisorGold)",stroke:"#b45309",strokeWidth:"1.6"}),M.jsx("ellipse",{cx:"46",cy:"22",rx:"6.5",ry:"3.5",fill:"rgba(255, 255, 255, 0.85)",transform:"rotate(-15 46 22)"}),M.jsx("line",{x1:"64",y1:"16",x2:"72",y2:"7",stroke:"#64748b",strokeWidth:"2.5",strokeLinecap:"round"}),M.jsx("circle",{cx:"73.5",cy:"6",r:"3.5",fill:"#00ffcc",filter:"url(#beaconBloom)",className:"animate-pulse"})]})})]})}const os={name:"KIAN RANCES CAGADAS",coordinateTag:"SOL-3 - DEV - 2026",footerMotto:"Human-crafted computational excellence in the vast cosmic expanse. Typography set in Space Grotesk."},ls=[{id:"intro",label:"SINGULARITY"},{id:"galaxy",label:"EDUCATION"},{id:"supernova",label:"SKILLS"},{id:"contact",label:"CONTACT"}],fw=[{epoch:"COLLEGE",degreeBadge:"COLLEGE LEVEL",timeRange:"2023 — PRESENT",institution:"ICCT Colleges Inc",department:"College of Engineering and Digital Technology",image:"./assets/images/galaxy-college.jpg",summary:"Advanced academic studies in digital technology, computer engineering, distributed architecture, and software systems. Developing cutting-edge computational logic, scalable database systems, and human-centered user experiences.",highlights:[{title:"College of Engineering and Digital Technology",desc:"Rigorous mastery of software engineering methodologies, modern systems architecture, and resilient computational applications."},{title:"Core Systems & Lab Focus",desc:"Real-time systems engineering, WebGL graphics rendering, scalable cloud backend development, and high-efficiency algorithmic implementations."}],tags:["Software Engineering","Digital Technology","Distributed Systems","Database Architecture","Advanced Web Systems","Interactive Graphics"]},{epoch:"SENIOR HIGH",degreeBadge:"SENIOR HIGH SCHOOL",timeRange:"2017 — 2018",institution:"DAEHAN College of Business and Technology Inc",department:"Information, Communication and Technology Strand",image:"./assets/images/galaxy-senior-high.jpg",summary:"Specialized academic and technical curriculum within the Information, Communication and Technology (ICT) track, building fundamental competence in algorithmic problem solving, computer systems, and digital networks.",highlights:[{title:"Information, Communication and Technology Strand",desc:"Specialized focus on computer programming principles, networking foundations, and digital systems architecture."},{title:"Technical Projects",desc:"Hands-on development in computer servicing, algorithmic logic, database basics, and structured software creation."}],tags:["ICT Strand","Computer Programming","Database Fundamentals","Systems Servicing","Algorithmic Logic"]}],o0=[{id:"languages",title:"Core Languages & Runtimes",icon:"⌨",desc:"The fundamental vernaculars for structuring logic, memory, and asynchronous workflows.",skills:["JavaScript (ES2024+)","TypeScript","Python","C / C++","HTML5 / Semantic DOM","CSS3 / Modern CSS Architecture","SQL (Postgres Dialect)"]},{id:"frontend",title:"Frontend & Interactive Graphics",icon:"✦",desc:"Architecting immersive, 60fps web experiences with high visual fidelity and clean component lifecycles.",skills:["React.js & React Hooks","Next.js (App Router / SSR)","WebGL & GLSL Shaders","Canvas 2D Rendering API","Web Audio API (Procedural Synthesis)","Responsive Design & Accessibility (a11y)","Performance Optimization (Core Web Vitals)"]},{id:"backend",title:"Backend & Data Infrastructure",icon:"⚡",desc:"Resilient server-side services, stateless APIs, and optimized query pipelines.",skills:["Node.js Ecosystem","Express.js & RESTful APIs","PostgreSQL & Prisma ORM","MongoDB & Document Stores","Redis Caching & Pub/Sub","JWT, Session & OAuth2 Security","WebSockets & Real-Time Sync"]},{id:"devops",title:"DevOps, Tooling & Systems",icon:"⚙",desc:"Disciplined developer ergonomics, version control hygiene, and containerized deployments.",skills:["Git & GitHub Workflows","Docker & Containerization","Linux / Bash Shell Scripting","Vite, Webpack & Rollup Bundlers","CI/CD (GitHub Actions)","Cloudflare & Edge Functions","Clean Code & Test-Driven Discipline"]}],ci={email:"Kianrances@gmail.com",githubUrl:"https://github.com/kianrances-rgb",githubHandle:"@kianrances-rgb",facebookUrl:"https://www.facebook.com/100024036827109/",channels:[{type:"email",label:"Email Address",value:"Kianrances@gmail.com",instruction:"Click to transmit an email directly to this address",btnText:"Transmit via Email",href:"mailto:Kianrances@gmail.com"},{type:"github",label:"GitHub Account",value:"@kianrances-rgb",instruction:"Click to explore repositories, commits & codebase",btnText:"Open GitHub Profile",href:"https://github.com/kianrances-rgb"},{type:"facebook",label:"Facebook Profile",value:"https://www.facebook.com/100024036827109/",instruction:"Click to visit profile page and initiate message",btnText:"Open Facebook Profile",href:"https://www.facebook.com/100024036827109/"}]};function hw({className:s=""}){const{isPlaying:e,toggleAudio:t,playChime:r}=Pf(),o=l=>{l.preventDefault(),l.stopPropagation(),t()&&setTimeout(()=>{r()},40)};return M.jsxs("button",{type:"button",id:"audio-toggle",onClick:o,className:`group relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 font-mono text-[11px] tracking-wider select-none focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 border cursor-pointer ${e?"bg-cyan-500/10 border-cyan-400/40 text-cyan-300 shadow-[0_0_15px_rgba(0,255,204,0.25)] hover:shadow-[0_0_22px_rgba(0,255,204,0.4)]":"bg-white/[0.04] border-white/10 text-white/50 hover:border-white/25 hover:text-white"} ${s}`,"aria-label":"Cosmic Audio Engine - Procedural Space Drone",title:"Cosmic Audio Engine - Procedural Space Drone","aria-pressed":e,children:[M.jsx("span",{className:"relative w-4 h-4 flex items-center justify-center shrink-0",children:M.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-4 h-4 overflow-visible","aria-hidden":"true",children:[M.jsx("path",{d:"M11 5L6 9H2V15H6L11 19V5Z",fill:e?"currentColor":"none",fillOpacity:e?.25:0,className:"transition-colors duration-300"}),e&&M.jsx("path",{d:"M15.54 8.46C16.48 9.4 17 10.66 17 12C17 13.34 16.48 14.6 15.54 15.54",className:"stroke-[#00ffcc] animate-pulse"}),e&&M.jsx("path",{d:"M19.07 4.93C20.94 6.8 22 9.34 22 12C22 14.66 20.94 17.2 19.07 19.07",className:"stroke-[#00ffcc] animate-pulse [animation-delay:180ms]"}),!e&&M.jsx("line",{x1:"23",y1:"1",x2:"1",y2:"23",stroke:"#ff3355",strokeWidth:"2.5",strokeLinecap:"round",className:"drop-shadow-[0_0_4px_rgba(255,51,85,0.8)]"})]})}),M.jsx("span",{className:`audio-status-text font-mono text-[11px] font-bold tracking-widest transition-colors duration-300 ${e?"text-[#00ffcc] drop-shadow-[0_0_8px_rgba(0,255,204,0.7)]":"text-zinc-400 group-hover:text-red-400/90"}`,children:e?"AUDIO: ON":"AUDIO: OFF"})]})}/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),j0=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var mw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=De.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...f},h)=>De.createElement("svg",{ref:h,...mw,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:j0("lucide",o),...f},[...u.map(([p,v])=>De.createElement(p,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=(s,e)=>{const t=De.forwardRef(({className:r,...o},l)=>De.createElement(gw,{ref:l,iconNode:e,className:j0(`lucide-${pw(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=mn("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=mn("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=mn("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=mn("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=mn("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=mn("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=mn("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=mn("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=mn("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=mn("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=mn("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=mn("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=mn("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=mn("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=mn("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=mn("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=mn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rw=mn("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function Pw({isOpen:s,onClose:e,activeSection:t="intro",onNavigate:r}){De.useEffect(()=>{if(s){const l=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=l}}},[s]),De.useEffect(()=>{const l=u=>{u.key==="Escape"&&s&&(e==null||e())};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[s,e]);const o=(l,u)=>{if(l.preventDefault(),r)r(u);else{const f=document.getElementById(u);f?f.scrollIntoView({behavior:"smooth"}):window.location.hash=u}e==null||e()};return M.jsxs("div",{id:"mobile-nav-drawer",className:`fixed inset-0 z-[9998] transition-all duration-300 lg:hidden ${s?"opacity-100 pointer-events-auto visible":"opacity-0 pointer-events-none invisible"}`,role:"dialog","aria-modal":"true","aria-hidden":!s,"aria-label":"Sector Navigation",children:[M.jsx("div",{className:"absolute inset-0 bg-[#03040c]/85 backdrop-blur-xl transition-opacity duration-300 cursor-pointer",onClick:e,"aria-hidden":"true"}),M.jsxs("aside",{className:`absolute top-0 right-0 h-full w-[85%] max-w-[340px] bg-[#060814]/95 border-l border-white/10 shadow-[-20px_0_60px_rgba(0,0,0,0.95)] flex flex-col justify-between p-6 sm:p-8 transition-transform duration-300 ease-out z-[9999] backdrop-blur-3xl ${s?"translate-x-0":"translate-x-full"}`,children:[M.jsxs("div",{className:"flex flex-col gap-8",children:[M.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-white/10",children:[M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,255,204,0.8)]"}),M.jsx("h2",{className:"font-mono text-xs tracking-[0.2em] text-white/80 uppercase font-semibold",children:"NAVIGATION"})]}),M.jsx("button",{type:"button",onClick:e,className:"w-8 h-8 rounded-full border border-white/10 hover:border-white/30 text-white/60 hover:text-white transition-all flex items-center justify-center cursor-pointer","aria-label":"Close Navigation",children:M.jsx(Cw,{className:"w-4 h-4"})})]}),M.jsx("nav",{"aria-label":"Mobile Navigation",children:M.jsx("ul",{className:"flex flex-col gap-2",children:ls.map(l=>{const u=t===l.id;return M.jsx("li",{children:M.jsxs("a",{href:`#${l.id}`,onClick:f=>o(f,l.id),className:`group flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-300 font-grotesk text-sm font-medium tracking-wide ${u?"bg-white/10 border border-white/20 text-white shadow-[0_0_20px_rgba(255,255,255,0.06)]":"border border-transparent text-white/60 hover:text-white hover:bg-white/[0.04]"}`,children:[M.jsxs("div",{className:"flex items-center gap-3",children:[M.jsx("span",{className:`w-1.5 h-1.5 rounded-full transition-all ${u?"bg-cyan-400 shadow-[0_0_8px_rgba(0,255,204,0.8)]":"bg-transparent"}`,"aria-hidden":"true"}),M.jsx("span",{children:l.label})]}),M.jsx(ic,{className:"w-4 h-4 text-white/30 group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"})]})},l.id)})})})]}),M.jsx("div",{className:"pt-4 border-t border-white/10 text-center",children:M.jsx("div",{className:"font-mono text-[10px] text-white/40 tracking-[0.2em] uppercase",children:os.coordinateTag})})]})]})}function Nw({activeSection:s,onSectionChange:e,onNavigate:t}){const[r,o]=De.useState(!1),[l,u]=De.useState("intro"),f=s??l;De.useEffect(()=>{if(s!==void 0)return;const v=()=>{const S=window.scrollY+140;for(let g=ls.length-1;g>=0;g--){const w=ls[g],A=document.getElementById(w.id);if(A){const L=A.offsetTop;if(S>=L){u(w.id);break}}}};return window.addEventListener("scroll",v,{passive:!0}),v(),()=>window.removeEventListener("scroll",v)},[s]);const h=v=>{const S=document.getElementById(v);S?S.scrollIntoView({behavior:"smooth"}):window.location.hash=v;const g=t||e;g==null||g(v)},p=v=>{v.preventDefault(),h("intro")};return M.jsxs(M.Fragment,{children:[M.jsx("header",{className:"fixed top-4 sm:top-6 inset-x-0 mx-auto w-[92%] max-w-5xl z-50 rounded-full px-4 sm:px-6 py-2.5 backdrop-blur-2xl bg-[#060814]/85 border border-white/10 shadow-[0_16px_50px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.15)] ring-1 ring-white/5 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",role:"banner",children:M.jsxs("div",{className:"w-full flex items-center justify-between gap-4",children:[M.jsxs("div",{className:"flex items-center gap-3 sm:gap-4 shrink-0",children:[M.jsx("a",{href:"#intro",onClick:p,className:"group relative w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center p-1 bg-gradient-to-br from-[#171d36] to-[#060918] border border-[rgba(140,190,255,0.35)] shadow-[0_0_16px_rgba(93,230,255,0.25)] hover:scale-105 hover:rotate-[-4deg] hover:border-[#00ffcc] hover:shadow-[0_0_24px_rgba(0,255,204,0.5)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ffcc]","aria-label":"Jump to Singularity Intro",title:"Astronaut Helmet - Singularity Core",children:M.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-full h-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]","aria-hidden":"true",children:[M.jsx("circle",{cx:"20",cy:"20",r:"18",fill:"#080c1a",stroke:"rgba(140, 180, 255, 0.45)",strokeWidth:"1.5"}),M.jsx("circle",{cx:"20",cy:"19",r:"14",fill:"#e2ebf8",stroke:"#364366",strokeWidth:"1.8"}),M.jsx("rect",{x:"12",y:"30",width:"16",height:"5",rx:"2.5",fill:"#252d42",stroke:"#687ba6",strokeWidth:"1.2"}),M.jsx("ellipse",{cx:"20",cy:"18.5",rx:"10.5",ry:"8",fill:"url(#headerVisorGrad)",stroke:"#b88320",strokeWidth:"1.2"}),M.jsx("path",{d:"M15 14 Q20 12 25 14 Q22 17 16 16 Z",fill:"rgba(255, 255, 255, 0.85)"}),M.jsx("circle",{cx:"24",cy:"22",r:"1",fill:"#44ffff"}),M.jsx("line",{x1:"31",y1:"12",x2:"36",y2:"6",stroke:"#8fa3cb",strokeWidth:"1.8"}),M.jsx("circle",{cx:"36",cy:"6",r:"1.8",fill:"#00ffcc",className:"animate-beacon-flash"}),M.jsx("circle",{cx:"36",cy:"6",r:"3.5",fill:"#00ffcc",opacity:"0.3",className:"animate-ping"}),M.jsx("defs",{children:M.jsxs("linearGradient",{id:"headerVisorGrad",x1:"0",y1:"0",x2:"1",y2:"1",children:[M.jsx("stop",{offset:"0%",stopColor:"#ffe066"}),M.jsx("stop",{offset:"35%",stopColor:"#ff9d00"}),M.jsx("stop",{offset:"75%",stopColor:"#542500"}),M.jsx("stop",{offset:"100%",stopColor:"#0a1024"})]})})]})}),M.jsx("div",{className:"relative inline-flex items-center overflow-visible select-none",children:M.jsxs("a",{href:"#intro",onClick:p,className:"relative block group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded",children:[M.jsx("h1",{className:"font-orbitron font-extrabold text-sm sm:text-base md:text-lg tracking-[0.16em] uppercase text-[#f4f8ff] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] group-hover:text-cyan-200 transition-colors",children:os.name}),M.jsx("span",{className:"brand-title-sheen","aria-hidden":"true",children:os.name})]})})]}),M.jsxs("div",{className:"flex items-center gap-3 sm:gap-4 shrink-0",children:[M.jsx("nav",{className:"hidden lg:flex items-center gap-1 xl:gap-2","aria-label":"Cosmic Desktop Navigation",children:M.jsx("ul",{className:"flex items-center gap-1 xl:gap-1.5 m-0 p-0 list-none",children:ls.map(v=>{const S=f===v.id;return M.jsx("li",{children:M.jsx("a",{href:`#${v.id}`,onClick:g=>{g.preventDefault(),h(v.id)},className:`flex items-center px-4 py-1.5 rounded-full font-['Outfit'] text-xs font-semibold tracking-wider transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] select-none border ${S?"text-white bg-white/10 border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_15px_rgba(0,255,204,0.2)]":"text-slate-400 hover:text-white hover:bg-white/[0.05] border-transparent"}`,"aria-current":S?"page":void 0,children:M.jsx("span",{className:"tracking-widest",children:v.label})})},v.id)})})}),M.jsx(hw,{}),M.jsxs("button",{type:"button",id:"mobile-menu-btn",onClick:()=>o(v=>!v),className:"lg:hidden relative flex flex-col justify-center items-center w-10 h-10 rounded-md bg-[#0f142d]/75 border border-[rgba(140,180,255,0.2)] hover:border-cyan-400 hover:shadow-[0_0_14px_rgba(93,230,255,0.35)] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ffcc]","aria-label":"Toggle Navigation Drawer","aria-expanded":r,"aria-controls":"mobile-nav-drawer",children:[M.jsx("span",{className:`block w-5 h-0.5 bg-[#f4f8ff] rounded transition-transform duration-300 ease-in-out ${r?"rotate-45 translate-y-1.5 bg-[#00ffcc]":"-translate-y-1"}`}),M.jsx("span",{className:`block w-5 h-0.5 bg-[#f4f8ff] rounded transition-opacity duration-200 ${r?"opacity-0":"opacity-100"}`}),M.jsx("span",{className:`block w-5 h-0.5 bg-[#f4f8ff] rounded transition-transform duration-300 ease-in-out ${r?"-rotate-45 -translate-y-1.5 bg-[#00ffcc]":"translate-y-1"}`})]})]})]})}),M.jsx(Pw,{isOpen:r,onClose:()=>o(!1),activeSection:f,onNavigate:h})]})}const Lw=`
  attribute vec2 a_position;
  varying vec2 v_uv;
  void main() {
      v_uv = (a_position + 1.0) * 0.5;
      gl_Position = vec4(a_position, 0.0, 1.0);
  }
`,Iw=`
  precision highp float;
  uniform vec2 u_resolution;
  uniform float u_time;
  uniform vec2 u_mouse;
  varying vec2 v_uv;

  #define PI 3.14159265359

  // 2D Rotation Matrix
  mat2 rotate2d(float angle) {
      float s = sin(angle);
      float c = cos(angle);
      return mat2(c, -s, s, c);
  }

  // Pseudo-random noise
  float hash(vec2 p) {
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
  }

  // Fractal Brownian Motion for swirling plasma dust
  float fbm(vec2 p) {
      float v = 0.0;
      float a = 0.5;
      vec2 shift = vec2(100.0);
      mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
      for (int i = 0; i < 4; ++i) {
          v += a * (sin(p.x * 3.0) * cos(p.y * 3.0));
          p = rot * p * 2.0 + shift;
          a *= 0.5;
      }
      return v;
  }

  void main() {
      // Aspect ratio correction
      vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);
      
      // Mouse tilt reaction
      vec2 mouseOffset = (u_mouse - 0.5) * 0.35;
      uv -= mouseOffset * 0.25;

      float r = length(uv);
      float angle = atan(uv.y, uv.x);

      // Schwarzschild Event Horizon radius & Photon sphere radius
      float r_s = 0.18;            // Event horizon shadow radius
      float r_photon = r_s * 1.5;   // Photon sphere border

      // Gravitational Lensing Distortion: Light bends sharply toward singularity
      // Deflection angle alpha ~ 4GM / (c^2 * r)
      float deflection = (r_s * r_s * 0.85) / max(r, 0.001);
      vec2 lensedUV = uv;
      if (r > r_s) {
          lensedUV -= normalize(uv) * deflection * 0.5;
      }

      // Tilted Accretion Disk Projection
      // Simulates an accretion disk viewed at ~70 deg inclination
      vec2 diskCoord = lensedUV;
      diskCoord.y /= 0.42; // Foreshorten vertical axis for 3D tilt

      // Gravitational Lensing creates a secondary upper and lower halo
      // by bending the back of the disk OVER and UNDER the event horizon!
      float haloY = abs(lensedUV.y) - (r_s * 1.1);
      vec2 haloCoord = vec2(lensedUV.x, haloY / 0.3);

      float diskR = length(diskCoord);
      float haloR = length(haloCoord);

      // Swirling angular dynamics with Keplerian velocity profile (v ~ 1/sqrt(r))
      float time = u_time * 0.8;
      float swirlAngle = angle + (time * 0.75) / max(r * 2.0, 0.2);
      float plasmaNoise = fbm(vec2(swirlAngle * 4.0, r * 14.0 - time * 1.2));

      // Plasma glow intensity in accretion disk
      float diskGlow = 0.0;
      if (diskR > r_s * 1.05 && diskR < r_s * 4.2) {
          float diskMask = smoothstep(r_s * 1.05, r_s * 1.4, diskR) * (1.0 - smoothstep(r_s * 2.2, r_s * 4.2, diskR));
          diskGlow += diskMask * (0.8 + 0.4 * plasmaNoise);
      }

      // Gravitationally bent upper and lower halo
      if (haloR > r_s * 0.95 && haloR < r_s * 3.2) {
          float haloMask = smoothstep(r_s * 0.95, r_s * 1.3, haloR) * (1.0 - smoothstep(r_s * 1.8, r_s * 3.2, haloR));
          diskGlow += haloMask * 0.65 * (0.8 + 0.3 * sin(swirlAngle * 5.0 + time));
      }

      // Relativistic Doppler Beaming Factor:
      // Material moving toward observer (left side, uv.x < 0) is boosted significantly brighter & blueshifted!
      // Material moving away (right side, uv.x > 0) is redshifted and dimmer.
      float dopplerFactor = clamp(1.0 - (uv.x / max(r, 0.1)) * 0.55, 0.25, 2.2);
      diskGlow *= dopplerFactor;

      // Einstein Photon Ring: razor sharp intense luminous circle
      float photonRing = exp(-pow((r - r_photon) * 85.0, 2.0)) * 2.2;

      // Inner Accretion Edge flare
      float innerEdge = exp(-pow((r - r_s * 1.08) * 45.0, 2.0)) * 1.8;

      // Gravitational Spacetime grid warping in the background
      vec2 gridUV = lensedUV * 18.0;
      float grid = (1.0 - smoothstep(0.0, 0.08, abs(sin(gridUV.x * PI)))) * 
                   (1.0 - smoothstep(0.0, 0.08, abs(sin(gridUV.y * PI)))) * 0.08;

      // Color Palette Synthesis:
      // Accretion Core: Blazing white & cyan (high energy)
      // Mid Disk: Luminous gold & plasma orange
      // Outer Disk: Deep relativistic dark red & violet
      vec3 colWhite = vec3(1.0, 1.0, 1.0);
      vec3 colCyan  = vec3(0.35, 0.85, 1.0);
      vec3 colGold  = vec3(1.0, 0.72, 0.22);
      vec3 colRed   = vec3(0.95, 0.25, 0.12);
      vec3 colVoid  = vec3(0.012, 0.015, 0.035);

      vec3 color = colVoid;
      color += grid * vec3(0.25, 0.45, 0.85);

      // Blend Plasma Accretion Spectrum
      vec3 plasmaColor = mix(colRed, colGold, clamp(diskGlow * 1.2, 0.0, 1.0));
      plasmaColor = mix(plasmaColor, colCyan, clamp((diskGlow - 0.7) * 2.0, 0.0, 1.0));
      color += plasmaColor * diskGlow * 1.4;

      // Add Photon Sphere & Inner Edge Luminance
      color += (colCyan * 0.6 + colWhite * 0.4) * photonRing;
      color += (colGold * 0.7 + colWhite * 0.3) * innerEdge;

      // Central Black Hole Event Horizon Singularity:
      // Absolute darkness inside r <= r_s
      float shadowMask = smoothstep(r_s - 0.008, r_s + 0.004, r);
      color *= shadowMask;

      // Relativistic Gravitational Glow around shadow border
      float horizonCorona = exp(-pow((r - r_s) * 28.0, 2.0)) * 0.9;
      color += vec3(1.0, 0.65, 0.3) * horizonCorona * shadowMask;

      // Vignette edge
      float vig = 1.0 - smoothstep(0.7, 1.4, length(uv));
      color *= vig;

      gl_FragColor = vec4(color, 1.0);
  }
`;function Dw(){const s=De.useRef(null),e=De.useRef(null);return De.useEffect(()=>{const t=s.current;if(!t)return;const r=()=>{const B=e.current||document.getElementById("hawking-radiation-flash");B&&(B.classList.remove("flare"),B.offsetWidth,B.classList.add("flare"),setTimeout(()=>{B.classList.remove("flare")},650))};window.BlackHoleEngine={center:{x:window.innerWidth/2,y:window.innerHeight/2},radius:80,tidalRadius:360,isActive:!0,getMetrics:function(){return{x:this.center.x,y:this.center.y,radius:this.radius,tidalRadius:this.tidalRadius}},triggerHawkingFlash:r};let o=null,l=null,u=null,f=null,h=null,p=null,v=null,S=null,g=.5,w=.5,A=.5,L=.5,y=performance.now(),_=!1,D=!0,z=!document.hidden,R=null;function I(B,b,O){const he=B.createShader(b);return B.shaderSource(he,O),B.compileShader(he),B.getShaderParameter(he,B.COMPILE_STATUS)?he:(console.warn("Shader Compile Error:",B.getShaderInfoLog(he)),B.deleteShader(he),null)}function P(){try{if(o=t.getContext("webgl",{antialias:!0,alpha:!1,depth:!1})||t.getContext("experimental-webgl"),!o||(u=I(o,o.VERTEX_SHADER,Lw),f=I(o,o.FRAGMENT_SHADER,Iw),!u||!f))return!1;if(l=o.createProgram(),o.attachShader(l,u),o.attachShader(l,f),o.linkProgram(l),!o.getProgramParameter(l,o.LINK_STATUS))return console.warn("WebGL Link Error:",o.getProgramInfoLog(l)),!1;o.useProgram(l),h=o.createBuffer(),o.bindBuffer(o.ARRAY_BUFFER,h),o.bufferData(o.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),o.STATIC_DRAW);const B=o.getAttribLocation(l,"a_position");return o.enableVertexAttribArray(B),o.vertexAttribPointer(B,2,o.FLOAT,!1,0,0),p=o.getUniformLocation(l,"u_resolution"),v=o.getUniformLocation(l,"u_time"),S=o.getUniformLocation(l,"u_mouse"),!0}catch(B){return console.warn("WebGL Initialization Exception:",B),!1}}function E(){const b=window.matchMedia&&window.matchMedia("(pointer: coarse)").matches?1.25:1.75,O=Math.min(window.devicePixelRatio||1,b),he=window.innerWidth,_e=window.innerHeight;t.width=Math.floor(he*O),t.height=Math.floor(_e*O),o&&o.viewport(0,0,t.width,t.height);const Ce=document.getElementById("intro");if(Ce){const W=Ce.getBoundingClientRect();window.BlackHoleEngine.center.x=W.left+W.width/2,window.BlackHoleEngine.center.y=W.top+W.height/2}else window.BlackHoleEngine.center.x=he/2,window.BlackHoleEngine.center.y=_e/2;const Ee=Math.min(he,_e);window.BlackHoleEngine.radius=Ee*.16,window.BlackHoleEngine.tidalRadius=Ee*.48}function x(B){const b=t.getContext("2d");if(!b)return;const O=t.width,he=t.height,_e=O/2,Ce=he/2,Ee=window.BlackHoleEngine.radius||Math.min(O,he)*.16,W=(B-y)*.001;b.fillStyle="#030308",b.fillRect(0,0,O,he),b.save();const k=(g-.5)*40,V=(w-.5)*-25;b.translate(_e+k,Ce+V),b.save(),b.strokeStyle="rgba(93, 230, 255, 0.05)",b.lineWidth=1;const Me=50;for(let Ue=-O/2;Ue<=O/2;Ue+=Me){b.beginPath();for(let Ve=-he/2;Ve<=he/2;Ve+=25){const pt=Math.hypot(Ue,Ve),dt=Math.min(60,Ee*Ee*1.5/Math.max(pt,15)),ft=Math.atan2(Ve,Ue),St=Ue-Math.cos(ft)*dt,K=Ve-Math.sin(ft)*dt;Ve===-he/2?b.moveTo(St,K):b.lineTo(St,K)}b.stroke()}b.restore();const ge=Math.sin(W*1.8)*4,se=b.createLinearGradient(-Ee*2.8,0,Ee*2.8,0);se.addColorStop(0,"rgba(93, 230, 255, 0.85)"),se.addColorStop(.35,"rgba(255, 230, 150, 0.9)"),se.addColorStop(.7,"rgba(255, 120, 30, 0.6)"),se.addColorStop(1,"rgba(180, 40, 20, 0.2)"),b.lineWidth=Ee*.38,b.strokeStyle=se,b.beginPath(),b.ellipse(0,-Ee*.3+ge,Ee*2.1,Ee*1.75,0,Math.PI*.98,Math.PI*2.02),b.stroke();const Pe=-.18+(w-.5)*.08;b.save(),b.rotate(Pe);const me=7;for(let Ue=0;Ue<me;Ue++){const Ve=Ee*(1.2+Ue*.35),pt=(1-Ue/me)*(.55+.25*Math.sin(W*2.5+Ue)),dt=b.createLinearGradient(-Ve*2.5,0,Ve*2.5,0);dt.addColorStop(0,`rgba(93, 230, 255, ${pt*.95})`),dt.addColorStop(.3,`rgba(255, 240, 160, ${pt*.9})`),dt.addColorStop(.65,`rgba(255, 130, 30, ${pt*.55})`),dt.addColorStop(1,`rgba(180, 40, 20, ${pt*.2})`),b.lineWidth=Ee*.22,b.strokeStyle=dt,b.beginPath(),b.ellipse(0,0,Ve*2.4,Ve*.85,0,0,Math.PI*2),b.stroke()}for(let Ue=0;Ue<18;Ue++){const Ve=Ee*(1.3+Ue%4*.45),pt=2.2/Math.sqrt(Ve/Ee)*W+Ue*Math.PI/9,dt=Math.cos(pt)*(Ve*2.2),ft=Math.sin(pt)*(Ve*.78),St=2.5+Math.sin(W*4+Ue)*1.5,K=dt<0;b.fillStyle=K?"rgba(255, 255, 255, 0.95)":"rgba(255, 120, 30, 0.5)",b.shadowColor=K?"#5de6ff":"#ff5522",b.shadowBlur=K?12:4,b.beginPath(),b.arc(dt,ft,St,0,Math.PI*2),b.fill()}b.shadowBlur=0,b.restore();const Fe=b.createLinearGradient(-Ee*2.5,0,Ee*2.5,0);Fe.addColorStop(0,"rgba(93, 230, 255, 0.7)"),Fe.addColorStop(.4,"rgba(255, 180, 50, 0.75)"),Fe.addColorStop(.8,"rgba(255, 80, 20, 0.4)"),Fe.addColorStop(1,"rgba(120, 20, 10, 0.15)"),b.lineWidth=Ee*.24,b.strokeStyle=Fe,b.beginPath(),b.ellipse(0,Ee*.28-ge*.5,Ee*1.85,Ee*1.4,0,Math.PI*.05,Math.PI*.95),b.stroke();const Ze=1+Math.sin(W*3.2)*.08;b.strokeStyle="rgba(255, 245, 210, 0.95)",b.shadowColor="#ffe082",b.shadowBlur=18,b.lineWidth=3.5,b.beginPath(),b.arc(0,0,Ee*1.48*Ze,0,Math.PI*2),b.stroke(),b.strokeStyle="rgba(93, 230, 255, 0.75)",b.shadowColor="#5de6ff",b.shadowBlur=12,b.lineWidth=2,b.beginPath(),b.arc(0,0,Ee*1.15,0,Math.PI*2),b.stroke(),b.shadowBlur=0,b.fillStyle="#000000",b.beginPath(),b.arc(0,0,Ee,0,Math.PI*2),b.fill(),b.strokeStyle="rgba(255, 140, 40, 0.85)",b.lineWidth=2.5,b.stroke(),b.restore()}function U(){!R&&D&&z&&(R=requestAnimationFrame(X))}function F(){R&&(cancelAnimationFrame(R),R=null)}function X(B){if(!D||!z){R=null;return}g+=(A-g)*.05,w+=(L-w)*.05;const b=document.getElementById("intro");if(b){const O=b.getBoundingClientRect();window.BlackHoleEngine.center.x=O.left+O.width/2,window.BlackHoleEngine.center.y=O.top+O.height/2}if(_&&o&&l){o.useProgram(l);const O=(B-y)*.001;o.uniform2f(p,t.width,t.height),o.uniform1f(v,O),o.uniform2f(S,g,w),o.drawArrays(o.TRIANGLES,0,6)}else x(B);R=requestAnimationFrame(X)}const j=B=>{A=B.clientX/window.innerWidth,L=1-B.clientY/window.innerHeight},J=()=>{const B=document.getElementById("intro");if(B){const b=B.getBoundingClientRect();window.BlackHoleEngine.center.x=b.left+b.width/2,window.BlackHoleEngine.center.y=b.top+b.height/2}},$=()=>{z=!document.hidden,z&&D?U():F()},Q=B=>{B.preventDefault(),F(),_=!1,o=null,l=null},oe=()=>{_=P(),E(),U()},ee=()=>{r()};window.addEventListener("mousemove",j,{passive:!0}),window.addEventListener("resize",E),window.addEventListener("scroll",J,{passive:!0}),document.addEventListener("visibilitychange",$),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",oe,!1),window.addEventListener("trigger-hawking-flash",ee);const Y=document.getElementById("intro");let q=null;return"IntersectionObserver"in window&&Y&&(q=new IntersectionObserver(B=>{B.forEach(b=>{D=b.isIntersecting,D?U():F()})},{threshold:.05}),q.observe(Y)),_=P(),E(),U(),()=>{F(),q&&q.disconnect(),window.removeEventListener("mousemove",j),window.removeEventListener("resize",E),window.removeEventListener("scroll",J),document.removeEventListener("visibilitychange",$),t.removeEventListener("webglcontextlost",Q),t.removeEventListener("webglcontextrestored",oe),window.removeEventListener("trigger-hawking-flash",ee),window.BlackHoleEngine&&(window.BlackHoleEngine.isActive=!1),o&&(h&&o.deleteBuffer(h),l&&o.deleteProgram(l),u&&o.deleteShader(u),f&&o.deleteShader(f))}},[]),M.jsxs("div",{className:"blackhole-viewport absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center overflow-hidden z-[1]",id:"blackhole-viewport","aria-hidden":"true",children:[M.jsx("canvas",{id:"blackhole-canvas",ref:s,className:"blackhole-canvas w-full h-full block"}),M.jsx("div",{id:"hawking-radiation-flash",ref:e,className:"hawking-radiation-flash","aria-hidden":"true"})]})}function Uw(){const s=De.useRef(null),e=De.useRef(null),[t,r]=De.useState(!1),{playChime:o}=Pf(),l=De.useRef(o);De.useEffect(()=>{l.current=o},[o]);const u=De.useRef(!1),f=De.useRef(!1),h=De.useRef(!1),p=[{text:"KIAN",key:"w1"},{text:"RANCES",key:"w2"},{text:"CAGADAS",key:"w3"}];return De.useEffect(()=>{const v=s.current,S=e.current;if(!v||!S)return;const g=v.getContext("2d");if(!g)return;let w=null,A=0,L=0,y=1;const _=[],D=750;let z=[];const R=()=>{const Q=S.querySelectorAll(".dust-letter-wrap");if(!Q||Q.length===0)return;v.closest("#intro")||document.getElementById("intro")||document.body;const oe=[];Q.forEach(ee=>{const Y=ee.querySelector(".dust-letter-base"),q=Y?Y.textContent.trim():"";if(!q)return;const B=ee.getBoundingClientRect(),b=Math.max(12,Math.floor(B.width)),O=Math.max(16,Math.floor(B.height)),he=document.createElement("canvas");he.width=b,he.height=O;const _e=he.getContext("2d",{willReadFrequently:!0});if(!_e)return;const Ce=window.getComputedStyle(Y),Ee=Ce.font||`${Ce.fontWeight} ${Ce.fontSize} ${Ce.fontFamily}`;_e.font=Ee,_e.fillStyle="#ffffff",_e.textBaseline="top",_e.textAlign="left",_e.fillText(q,0,0);try{const W=_e.getImageData(0,0,b,O).data,k=[];for(let V=1;V<O;V+=2)for(let Me=1;Me<b;Me+=2){const ge=W[(V*b+Me)*4+3];ge>80&&k.push({x:Me,y:V,normY:V/O,alpha:ge/255})}k.length>0&&oe.push({char:q,element:ee,points:k,charW:b,charH:O})}catch{}}),z=oe},I=()=>{const oe=(v.closest("#intro")||document.getElementById("intro")||document.body).getBoundingClientRect();y=Math.min(window.devicePixelRatio||1,2),A=oe.width,L=oe.height,v.width=Math.floor(A*y),v.height=Math.floor(L*y),v.style.width=`${A}px`,v.style.height=`${L}px`,R()};I(),window.addEventListener("resize",I),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>{R()});const P=(Q,oe)=>{if(_.length>=D||oe>=.99)return;let ee=0,Y=0;if(z.length>0){const b=z[Math.floor(Math.random()*z.length)],O=Math.max(0,oe-.16),he=Math.min(1,oe+.1),_e=b.points.filter(k=>k.normY>=O&&k.normY<=he),Ce=_e.length>0?_e:b.points,Ee=Ce[Math.floor(Math.random()*Ce.length)],W=b.element.getBoundingClientRect();ee=W.left-Q.left+Ee.x,Y=W.top-Q.top+Ee.y}else{const b=S.querySelectorAll(".dust-letter-wrap");if(b.length===0)return;const he=b[Math.floor(Math.random()*b.length)].getBoundingClientRect();ee=he.left-Q.left+Math.random()*he.width,Y=he.top-Q.top+oe*he.height}const q=(Math.random()-.5)*12,B=-20-Math.random()*24;_.push({x:ee,y:Y,vx:q,vy:B,size:.75+Math.random()*1.15,alpha:.88+Math.random()*.12,life:0,maxLife:3.5+Math.random()*1.6,phase:Math.random()*Math.PI*2,swirlFactor:.8+Math.random()*.45,isRespawnSparkle:!1})},E=Q=>{if(z.length!==0)for(let oe=0;oe<80;oe++){const ee=z[Math.floor(Math.random()*z.length)],Y=ee.points[Math.floor(Math.random()*ee.points.length)],q=ee.element.getBoundingClientRect(),B=q.left-Q.left+Y.x,b=q.top-Q.top+Y.y,O=Math.random()*Math.PI*2,he=20+Math.random()*60;_.push({x:B+(Math.random()-.5)*16,y:b+(Math.random()-.5)*16,vx:Math.cos(O)*he,vy:Math.sin(O)*he,size:1.1+Math.random()*1.5,alpha:1,life:0,maxLife:.85+Math.random()*.45,phase:Math.random()*Math.PI*2,swirlFactor:.2,isRespawnSparkle:!0})}};let x=performance.now(),U=0;const F=3e4,X=27800,j=28600,J=28800,$=Q=>{var O;const oe=Math.min((Q-x)/1e3,.08);x=Q,g.save(),g.scale(y,y),g.clearRect(0,0,A,L);const ee=v.getBoundingClientRect(),Y=Q%F;Y<600&&(u.current||f.current||h.current)&&(u.current=!1,f.current=!1,h.current=!1,r(!1));const q=(O=window.BlackHoleEngine)==null?void 0:O.center,B=q!=null&&q.x?q.x-ee.left:A/2,b=q!=null&&q.y?q.y-ee.top:L/2;if(Y<X){const he=Y/X,_e=he*100;S.style.setProperty("--erode-pct",`${_e.toFixed(2)}%`),S.style.setProperty("--letter-opacity","1");const Ce=Math.floor(5+he*7);for(let Ee=0;Ee<Ce;Ee++)P(ee,he);if(Q-U>250){U=Q;const Ee=Math.max(1,Math.ceil((X-Y)/1e3));window.dispatchEvent(new CustomEvent("cosmic-telemetry-update",{detail:{shearRatio:Math.min(1,he*.88),distanceText:`${Ee}s TO SINGULARITY`,statusText:"MASS DISINTEGRATION // SIPHONING"}}))}}else Y<J?(S.style.setProperty("--erode-pct","100%"),S.style.setProperty("--letter-opacity","0"),Y>=j&&!u.current&&(u.current=!0,window.dispatchEvent(new CustomEvent("trigger-hawking-flash")),window.dispatchEvent(new CustomEvent("cosmic-telemetry-update",{detail:{shearRatio:1,distanceText:"SINGULARITY CORE",statusText:"SINGULARITY INGESTION COMPLETE"}})))):(S.style.setProperty("--erode-pct","0%"),S.style.setProperty("--letter-opacity","1"),f.current||(f.current=!0,r(!0),typeof l.current=="function"&&l.current(),window.dispatchEvent(new CustomEvent("cosmic-telemetry-update",{detail:{shearRatio:0,distanceText:"EVENT HORIZON",statusText:"QUANTUM RE-MATERIALIZATION COMPLETE"}}))),h.current||(h.current=!0,E(ee)));for(let he=_.length-1;he>=0;he--){const _e=_[he];_e.life+=oe;const Ce=B-_e.x,Ee=b-_e.y,W=Math.sqrt(Ce*Ce+Ee*Ee);if(!_e.isRespawnSparkle&&W<=22||_e.life>=_e.maxLife){_.splice(he,1);continue}if(_e.isRespawnSparkle){_e.x+=_e.vx*oe,_e.y+=_e.vy*oe,_e.vx*=.92,_e.vy*=.92;const K=_e.life/_e.maxLife,Ht=Math.max(0,1-K);g.fillStyle=`rgba(0, 255, 204, ${Ht.toFixed(3)})`,g.beginPath(),g.arc(_e.x,_e.y,_e.size*(1-K*.4),0,Math.PI*2),g.fill(),g.fillStyle=`rgba(255, 255, 255, ${(Ht*.6).toFixed(3)})`,g.beginPath(),g.arc(_e.x,_e.y,_e.size*.5,0,Math.PI*2),g.fill();continue}const k=Ce/W,V=Ee/W,Me=-V,ge=k,se=Math.max(0,Math.min(480,W)),Pe=Math.pow(1-se/480,1.2),me=40+Pe*215,Fe=Pe*135*_e.swirlFactor,Ze=Math.sin(_e.y*.014+_e.phase+Q*.0016)*(5*(1-Pe)),Ue=k*me+Me*Fe+Ze,Ve=V*me+ge*Fe,pt=3.4;_e.vx+=(Ue-_e.vx)*Math.min(1,pt*oe),_e.vy+=(Ve-_e.vy)*Math.min(1,pt*oe),_e.x+=_e.vx*oe,_e.y+=_e.vy*oe;const dt=_e.life/_e.maxLife,ft=W<65?W/65:1,St=Math.max(0,Math.min(1,_e.alpha*ft*(1-dt*.25)));g.fillStyle=`rgba(255, 255, 255, ${St.toFixed(3)})`,g.beginPath(),g.arc(_e.x,_e.y,_e.size,0,Math.PI*2),g.fill(),_e.size>1.25&&(g.fillStyle=`rgba(255, 255, 255, ${(St*.22).toFixed(3)})`,g.beginPath(),g.arc(_e.x,_e.y,_e.size*2.2,0,Math.PI*2),g.fill())}g.restore(),w=requestAnimationFrame($)};return w=requestAnimationFrame($),()=>{cancelAnimationFrame(w),window.removeEventListener("resize",I)}},[]),M.jsxs(M.Fragment,{children:[M.jsx("canvas",{ref:s,className:"singularity-dust-canvas absolute inset-0 w-full h-full pointer-events-none z-10","aria-hidden":"true"}),M.jsx("div",{ref:e,className:"disintegrating-title-container relative z-20 w-full max-w-6xl flex flex-col items-center justify-center text-center select-none pointer-events-auto mt-auto pb-12 sm:pb-16 px-4","aria-label":"Kian Rances Cagadas - Software Developer, Systems Architect & Cosmic Explorer",children:M.jsxs("div",{className:"relative flex flex-col items-center w-full max-w-5xl",children:[t&&M.jsx("span",{className:"absolute -inset-4 sm:-inset-10 rounded-full border-2 border-cyan-400 animate-ping pointer-events-none opacity-90 shadow-[0_0_50px_rgba(0,255,204,0.95)]","aria-hidden":"true"}),M.jsx("h1",{className:`disintegrating-name font-['Orbitron'] font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.14em] uppercase text-white select-none relative flex flex-wrap items-center justify-center leading-none transition-all duration-700 ${t?"scale-100 brightness-[240%] drop-shadow-[0_0_35px_rgba(0,255,204,0.95)]":"scale-100 brightness-100 drop-shadow-none"}`,children:p.map((v,S)=>M.jsxs("span",{className:"inline-flex items-center whitespace-nowrap",children:[v.text.split("").map((g,w)=>M.jsxs("span",{className:"dust-letter-wrap inline-block relative text-white",children:[M.jsx("span",{className:"dust-letter-base inline-block",children:g}),M.jsx("span",{className:"dust-letter-dissolve inline-block","aria-hidden":"true",children:g})]},`${v.key}-${w}`)),S<p.length-1&&M.jsx("span",{className:"inline-block w-3 sm:w-5 md:w-7","aria-hidden":"true",children:" "})]},v.key))}),M.jsx("p",{className:"font-['Outfit'] text-xs sm:text-sm md:text-base font-medium tracking-[0.22em] text-[#00ffcc] uppercase mt-5 mb-8 max-w-2xl mx-auto",children:"Software Developer, Systems Architect & Cosmic Explorer"}),M.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4",children:[M.jsxs("a",{href:"#galaxy",className:"group relative inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-[#00ffcc] text-[#030308] font-['Space_Grotesk'] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white hover:shadow-[0_0_30px_rgba(0,255,204,0.5)] active:scale-[0.98]",children:[M.jsx("span",{children:"Explore Education"}),M.jsx("span",{className:"w-8 h-8 rounded-full bg-black/15 flex items-center justify-center text-[#030308] font-bold group-hover:translate-y-0.5 transition-transform duration-300",children:"↓"})]}),M.jsxs("a",{href:"#contact",className:"group relative inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-white/[0.06] border border-white/15 text-white font-['Space_Grotesk'] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/10 hover:border-white/30 backdrop-blur-md active:scale-[0.98]",children:[M.jsx("span",{children:"Initiate Contact"}),M.jsx("span",{className:"w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white font-bold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300",children:"↗"})]})]})]})})]})}function Fw(){return M.jsxs("section",{id:"intro",className:"hero-section relative min-h-screen w-full flex flex-col items-center justify-end overflow-hidden pt-20 pb-8 px-4 select-none","aria-label":"Introductory Singularity",children:[M.jsx(Dw,{}),M.jsx(Uw,{})]})}class kw{constructor(){this.ctx=null,this.enabled=!0}init(){if(this.ctx)return;const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}playLaser(e=!1){if(this.enabled&&(this.init(),!(!this.ctx||this.ctx.state==="suspended")))try{const t=this.ctx.currentTime,r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type=e?"sawtooth":"sine",r.frequency.setValueAtTime(e?1100:860,t),r.frequency.exponentialRampToValueAtTime(140,t+.1),o.gain.setValueAtTime(.08,t),o.gain.exponentialRampToValueAtTime(.001,t+.1),r.connect(o),o.connect(this.ctx.destination),r.start(t),r.stop(t+.11)}catch{}}playExplosion(e=!1){if(this.enabled&&(this.init(),!(!this.ctx||this.ctx.state==="suspended")))try{const t=this.ctx.currentTime,r=e?.35:.2,o=Math.floor(this.ctx.sampleRate*r),l=this.ctx.createBuffer(1,o,this.ctx.sampleRate),u=l.getChannelData(0);for(let v=0;v<o;v++)u[v]=Math.random()*2-1;const f=this.ctx.createBufferSource();f.buffer=l;const h=this.ctx.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(e?600:450,t),h.frequency.exponentialRampToValueAtTime(40,t+r);const p=this.ctx.createGain();p.gain.setValueAtTime(e?.22:.12,t),p.gain.exponentialRampToValueAtTime(.001,t+r),f.connect(h),h.connect(p),p.connect(this.ctx.destination),f.start(t)}catch{}}playPowerup(){if(this.enabled&&(this.init(),!(!this.ctx||this.ctx.state==="suspended")))try{const e=this.ctx.currentTime;[587.33,739.99,880,1174.66].forEach((t,r)=>{const o=this.ctx.createOscillator(),l=this.ctx.createGain(),u=e+r*.05;o.type="sine",o.frequency.setValueAtTime(t,u),l.gain.setValueAtTime(.06,u),l.gain.exponentialRampToValueAtTime(.001,u+.18),o.connect(l),l.connect(this.ctx.destination),o.start(u),o.stop(u+.19)})}catch{}}}const Ei=new kw;function Ow(){const s=De.useRef(null),e=De.useRef(null),[t,r]=De.useState(0),[o,l]=De.useState(12500),[u,f]=De.useState(100),[h,p]=De.useState(1),[v,S]=De.useState(!0),[g,w]=De.useState(!0),[A,L]=De.useState(!1),[y,_]=De.useState("LUNAR ORBIT DEFENSE ACTIVE"),D=De.useRef({width:800,height:420,scale:1,player:{x:400,y:350,vx:0,targetX:400,targetY:350,width:36,height:38,speed:360,shield:100,maxShield:100,isHit:!1,hitTimer:0,overdriveTimer:0,weaponType:"dual",thrusterFlicker:0},keys:{left:!1,right:!1,up:!1,down:!1,shoot:!1},mouse:{x:400,y:350,isDown:!1},stars:[],bullets:[],enemyBullets:[],enemies:[],asteroids:[],particles:[],shockwaves:[],powerups:[],floatingTexts:[],screenShake:0,score:0,highScore:12500,wave:1,isAutoPilot:!0,autoShootTimer:0,autoEvadeTimer:0,lastTime:performance.now(),waveSpawnTimer:0}),z=()=>{const P=!g;w(P),Ei.enabled=P,P&&Ei.init()},R=()=>{const P=!v;S(P),D.current.isAutoPilot=P,_(P?"LUNAR AI AUTO-PILOT ENGAGED":"PILOT MANUAL FLIGHT OVERRIDE - PRESS SPACE TO FIRE"),P||Ei.init()},I=De.useCallback((P=1)=>{const E=D.current;if(E.wave=P,E.enemies=[],E.enemyBullets=[],E.waveSpawnTimer=0,P%3===0)E.enemies.push({type:"boss",x:E.width/2,y:80,vx:70,vy:0,width:110,height:64,hp:35+P*12,maxHp:35+P*12,score:1500,shootTimer:.6,color:"#ff2a85",shieldAngle:0}),_(`CRITICAL ALERT: LUNAR DREADNOUGHT ENCOUNTERED // WAVE ${P}`);else{const U=Math.min(14,6+P*2);for(let F=0;F<U;F++){const X=F%3===0?"cruiser":"interceptor";E.enemies.push({type:X,x:70+F%7*95,y:50+Math.floor(F/7)*60,baseX:70+F%7*95,vx:(Math.random()>.5?1:-1)*(45+P*10),width:X==="cruiser"?44:32,height:X==="cruiser"?36:28,hp:X==="cruiser"?4:2,maxHp:X==="cruiser"?4:2,score:X==="cruiser"?250:120,shootTimer:1+Math.random()*2,color:X==="cruiser"?"#ffaa00":"#ff3366",phase:Math.random()*Math.PI*2})}_(`LUNAR DEFENSE PERIMETER: WAVE ${P} HOSTILES ENGAGED`)}if(E.asteroids.length<3)for(let U=0;U<2;U++)E.asteroids.push({x:Math.random()*E.width,y:-40-U*80,vx:(Math.random()-.5)*40,vy:35+Math.random()*30,radius:18+Math.random()*14,rot:0,rotSpeed:(Math.random()-.5)*1.5,hp:3});p(P)},[]);return De.useEffect(()=>{const P=s.current;if(!P)return;const E=P.getContext("2d");if(!E)return;try{const B=localStorage.getItem("space_arcade_modern_hi");if(B){const b=parseInt(B,10);isNaN(b)||(l(b),D.current.highScore=b)}}catch{}const x=D.current;x.stars=[];for(let B=0;B<90;B++)x.stars.push({x:Math.random()*x.width,y:Math.random()*x.height,speed:80+Math.random()*260,length:2+Math.random()*8,alpha:.3+Math.random()*.7});I(1);const U=()=>{const B=Math.min(window.devicePixelRatio||1,2);P.width=800*B,P.height=420*B,D.current.scale=B};U(),window.addEventListener("resize",U);const F=B=>{(B.code==="Space"||B.key===" "||B.keyCode===32||B.which===32)&&(B.preventDefault(),B.stopPropagation(),x.keys.shoot=!0),["ArrowLeft","KeyA"].includes(B.code)&&(x.keys.left=!0),["ArrowRight","KeyD"].includes(B.code)&&(x.keys.right=!0),["ArrowUp","KeyW"].includes(B.code)&&(B.preventDefault(),x.keys.up=!0),["ArrowDown","KeyS"].includes(B.code)&&(B.preventDefault(),x.keys.down=!0),x.isAutoPilot&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","KeyA","KeyD","KeyW","KeyS","Space"].includes(B.code)&&(S(!1),x.isAutoPilot=!1,_("PILOT MANUAL FLIGHT OVERRIDE - PRESS SPACE TO FIRE"),Ei.init())},X=B=>{["ArrowLeft","KeyA"].includes(B.code)&&(x.keys.left=!1),["ArrowRight","KeyD"].includes(B.code)&&(x.keys.right=!1),["ArrowUp","KeyW"].includes(B.code)&&(x.keys.up=!1),["ArrowDown","KeyS"].includes(B.code)&&(x.keys.down=!1),(B.code==="Space"||B.key===" "||B.keyCode===32||B.which===32)&&(B.preventDefault(),B.stopPropagation(),x.keys.shoot=!1)};window.addEventListener("keydown",F,{passive:!1}),window.addEventListener("keyup",X,{passive:!1});const j=B=>{const b=P.getBoundingClientRect(),O=800/b.width,he=420/b.height;x.mouse.x=(B.clientX-b.left)*O,x.mouse.y=(B.clientY-b.top)*he},J=B=>{j(B),x.mouse.isDown=!0,document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),x.isAutoPilot&&(S(!1),x.isAutoPilot=!1,_("PILOT MANUAL FLIGHT OVERRIDE - PRESS SPACE TO FIRE"),Ei.init())},$=()=>{x.mouse.isDown=!1};P.addEventListener("pointermove",j),P.addEventListener("pointerdown",J),window.addEventListener("pointerup",$);const Q=(B,b,O="#00ffcc",he=!1)=>{const _e=he?32:18;for(let Ce=0;Ce<_e;Ce++){const Ee=Math.random()*Math.PI*2,W=(he?80:50)+Math.random()*(he?240:160);x.particles.push({x:B,y:b,vx:Math.cos(Ee)*W,vy:Math.sin(Ee)*W,life:.35+Math.random()*.45,maxLife:.5,size:1.5+Math.random()*(he?4:2.5),color:O})}x.shockwaves.push({x:B,y:b,radius:4,maxRadius:he?70:40,alpha:.9,color:O}),he&&(x.screenShake=6)},oe=(B,b,O,he="#00ffcc")=>{x.floatingTexts.push({text:B,x:b,y:O,alpha:1,life:.8,color:he})};let ee=null,Y=performance.now();const q=B=>{const b=Math.min((B-Y)/1e3,.08);if(Y=B,E.save(),E.scale(x.scale,x.scale),x.screenShake>0){const k=(Math.random()-.5)*x.screenShake,V=(Math.random()-.5)*x.screenShake;E.translate(k,V),x.screenShake=Math.max(0,x.screenShake-b*15)}E.clearRect(0,0,x.width,x.height),E.fillStyle="rgba(3, 5, 16, 0.28)",E.fillRect(0,0,x.width,x.height),E.strokeStyle="#5de6ff",E.lineWidth=1.2,x.stars.forEach(k=>{k.y+=k.speed*b,k.y>x.height&&(k.y=0,k.x=Math.random()*x.width),E.globalAlpha=k.alpha,E.beginPath(),E.moveTo(k.x,k.y),E.lineTo(k.x,k.y+k.length),E.stroke()}),E.globalAlpha=1;const O=x.player;if(O.thrusterFlicker=(O.thrusterFlicker+b*12)%(Math.PI*2),x.isAutoPilot){const k=x.enemies.filter(Pe=>Pe.hp>0);let V=400,Me=345;x.powerups.length>0?(V=x.powerups[0].x,Me=x.powerups[0].y):k.length>0&&(k.sort((Pe,me)=>me.y-Pe.y||Math.abs(Pe.x-O.x)-Math.abs(me.x-O.x)),V=k[0].x);const ge=x.enemyBullets.find(Pe=>Math.abs(Pe.x-O.x)<45&&Pe.y>220);ge&&(V+=ge.x>O.x?-65:65),O.x+=(V-O.x)*Math.min(1,5*b),O.y+=(Me-O.y)*Math.min(1,3.5*b),x.autoShootTimer+=b;const se=O.overdriveTimer>0?.12:.22;x.autoShootTimer>=se&&(x.autoShootTimer=0,he())}else x.mouse.isDown?(O.x+=(x.mouse.x-O.x)*Math.min(1,8*b),O.y+=(x.mouse.y-O.y)*Math.min(1,8*b),x.autoShootTimer+=b,x.autoShootTimer>=(O.overdriveTimer>0?.12:.2)&&(x.autoShootTimer=0,he())):(x.keys.left&&(O.x-=O.speed*b),x.keys.right&&(O.x+=O.speed*b),x.keys.up&&(O.y-=O.speed*b),x.keys.down&&(O.y+=O.speed*b),x.keys.shoot&&(x.autoShootTimer+=b,x.autoShootTimer>=(O.overdriveTimer>0?.12:.2)&&(x.autoShootTimer=0,he())));O.x=Math.max(30,Math.min(x.width-30,O.x)),O.y=Math.max(160,Math.min(x.height-35,O.y)),O.overdriveTimer>0&&(O.overdriveTimer-=b,O.overdriveTimer<=0&&(O.weaponType="dual",L(!1))),O.shield<O.maxShield&&(O.shield=Math.min(O.maxShield,O.shield+b*4),f(Math.round(O.shield))),O.isHit&&(O.hitTimer-=b,O.hitTimer<=0&&(O.isHit=!1));function he(){O.weaponType==="triple"||O.overdriveTimer>0?(x.bullets.push({x:O.x,y:O.y-18,vx:0,vy:-520,color:"#00ffcc",size:3}),x.bullets.push({x:O.x-12,y:O.y-12,vx:-120,vy:-500,color:"#ffaa00",size:2.8}),x.bullets.push({x:O.x+12,y:O.y-12,vx:120,vy:-500,color:"#ffaa00",size:2.8}),Ei.playLaser(!0)):(x.bullets.push({x:O.x-10,y:O.y-16,vx:0,vy:-540,color:"#00ffcc",size:2.8}),x.bullets.push({x:O.x+10,y:O.y-16,vx:0,vy:-540,color:"#00ffcc",size:2.8}),Ei.playLaser(!1))}E.save(),E.translate(O.x,O.y);const _e=(O.vx||x.mouse.x-O.x)*.001;E.rotate(Math.max(-.25,Math.min(.25,_e)));const Ce=14+Math.sin(O.thrusterFlicker)*5,Ee=E.createLinearGradient(0,16,0,16+Ce);if(Ee.addColorStop(0,"#ffffff"),Ee.addColorStop(.3,"#00ffcc"),Ee.addColorStop(1,"transparent"),E.fillStyle=Ee,E.beginPath(),E.moveTo(-7,16),E.lineTo(0,16+Ce),E.lineTo(7,16),E.closePath(),E.fill(),E.fillStyle=O.isHit?"#ffffff":"#0a1024",E.strokeStyle=O.overdriveTimer>0?"#ffaa00":"#00ffcc",E.lineWidth=2,E.shadowColor=O.overdriveTimer>0?"#ffaa00":"#00ffcc",E.shadowBlur=10,E.beginPath(),E.moveTo(0,-18),E.lineTo(16,12),E.lineTo(10,15),E.lineTo(5,12),E.lineTo(0,14),E.lineTo(-5,12),E.lineTo(-10,15),E.lineTo(-16,12),E.closePath(),E.fill(),E.stroke(),E.shadowBlur=0,E.fillStyle="#5de6ff",E.beginPath(),E.ellipse(0,-4,3.5,8,0,0,Math.PI*2),E.fill(),O.shield>0){const k=Math.max(.12,O.shield/O.maxShield*(O.isHit?.8:.28));E.strokeStyle=`rgba(0, 255, 204, ${k})`,E.fillStyle=`rgba(0, 255, 204, ${k*.25})`,E.lineWidth=1.8,E.beginPath(),E.ellipse(0,0,26,26,0,0,Math.PI*2),E.fill(),E.stroke()}E.restore();for(let k=x.bullets.length-1;k>=0;k--){const V=x.bullets[k];V.x+=V.vx*b,V.y+=V.vy*b,E.fillStyle=V.color,E.shadowColor=V.color,E.shadowBlur=8,E.fillRect(V.x-V.size/2,V.y,V.size,12),E.shadowBlur=0;let Me=!1;for(let ge=0;ge<x.enemies.length;ge++){const se=x.enemies[ge];if(se.hp>0&&V.x>=se.x-se.width/2&&V.x<=se.x+se.width/2&&V.y>=se.y-se.height/2&&V.y<=se.y+se.height/2){if(se.hp-=1,Me=!0,Q(V.x,V.y,se.color,!1),se.hp<=0){if(x.score+=se.score,r(x.score),x.score>x.highScore){x.highScore=x.score,l(x.highScore);try{localStorage.setItem("space_arcade_modern_hi",x.highScore.toString())}catch{}}Q(se.x,se.y,se.color,se.type==="boss"),Ei.playExplosion(se.type==="boss"),oe(`+${se.score}`,se.x,se.y-10,se.color),(Math.random()<.28||se.type==="boss")&&x.powerups.push({x:se.x,y:se.y,vy:65,type:"overdrive",rot:0})}break}}if(!Me)for(let ge=0;ge<x.asteroids.length;ge++){const se=x.asteroids[ge];if(Math.hypot(V.x-se.x,V.y-se.y)<se.radius){se.hp-=1,Me=!0,Q(V.x,V.y,"#5de6ff",!1),se.hp<=0&&(x.score+=80,r(x.score),oe("+80",se.x,se.y,"#5de6ff"),Q(se.x,se.y,"#5de6ff",!1),x.asteroids.splice(ge,1));break}}(Me||V.y<-20)&&x.bullets.splice(k,1)}const W=x.enemies.filter(k=>k.hp>0);W.length===0&&(x.waveSpawnTimer+=b,x.waveSpawnTimer>1.2&&(I(x.wave+1),Ei.playPowerup())),W.forEach(k=>{k.type==="boss"?(k.x+=k.vx*b,(k.x>x.width-90||k.x<90)&&(k.vx*=-1),k.shieldAngle+=b*1.8,k.shootTimer-=b,k.shootTimer<=0&&(k.shootTimer=.55,x.enemyBullets.push({x:k.x-30,y:k.y+25,vx:-40,vy:240,color:"#ff2a85"}),x.enemyBullets.push({x:k.x+30,y:k.y+25,vx:40,vy:240,color:"#ff2a85"}),x.enemyBullets.push({x:k.x,y:k.y+35,vx:0,vy:260,color:"#ffaa00"})),E.save(),E.translate(k.x,k.y),E.strokeStyle="#ff2a85",E.fillStyle="#100518",E.lineWidth=2.5,E.shadowColor="#ff2a85",E.shadowBlur=15,E.beginPath(),E.moveTo(0,32),E.lineTo(55,0),E.lineTo(40,-25),E.lineTo(-40,-25),E.lineTo(-55,0),E.closePath(),E.fill(),E.stroke(),E.shadowBlur=0,E.fillStyle="#ffaa00",E.beginPath(),E.arc(0,0,14,0,Math.PI*2),E.fill(),E.strokeStyle="rgba(0, 255, 204, 0.7)",E.lineWidth=3,E.beginPath(),E.arc(0,0,42,k.shieldAngle,k.shieldAngle+Math.PI*.8),E.stroke(),E.restore()):(k.x+=k.vx*b,(k.x>x.width-45||k.x<45)&&(k.vx*=-1,k.y+=8),k.shootTimer-=b,k.shootTimer<=0&&(k.shootTimer=1.8+Math.random()*2.5,x.enemyBullets.push({x:k.x,y:k.y+16,vx:(Math.random()-.5)*40,vy:220+x.wave*15,color:k.color})),E.save(),E.translate(k.x,k.y),E.fillStyle="#14081c",E.strokeStyle=k.color,E.lineWidth=1.8,E.shadowColor=k.color,E.shadowBlur=8,E.beginPath(),E.moveTo(0,14),E.lineTo(k.width/2,-10),E.lineTo(0,-5),E.lineTo(-k.width/2,-10),E.closePath(),E.fill(),E.stroke(),E.shadowBlur=0,E.restore())});for(let k=x.asteroids.length-1;k>=0;k--){const V=x.asteroids[k];V.x+=V.vx*b,V.y+=V.vy*b,V.rot+=V.rotSpeed*b,E.save(),E.translate(V.x,V.y),E.rotate(V.rot),E.fillStyle="#0a1426",E.strokeStyle="rgba(93, 230, 255, 0.6)",E.lineWidth=1.5,E.beginPath();const Me=6;for(let ge=0;ge<Me;ge++){const se=ge/Me*Math.PI*2,Pe=V.radius*(.8+ge%2*.3),me=Math.cos(se)*Pe,Fe=Math.sin(se)*Pe;ge===0?E.moveTo(me,Fe):E.lineTo(me,Fe)}E.closePath(),E.fill(),E.stroke(),E.restore(),V.y>x.height+40&&x.asteroids.splice(k,1)}for(let k=x.enemyBullets.length-1;k>=0;k--){const V=x.enemyBullets[k];if(V.x+=V.vx*b,V.y+=V.vy*b,E.fillStyle=V.color,E.shadowColor=V.color,E.shadowBlur=8,E.beginPath(),E.arc(V.x,V.y,3.5,0,Math.PI*2),E.fill(),E.shadowBlur=0,Math.hypot(V.x-O.x,V.y-O.y)<26){O.shield=Math.max(0,O.shield-18),O.isHit=!0,O.hitTimer=.25,f(Math.round(O.shield)),Q(V.x,V.y,"#00ffcc",!1),Ei.playExplosion(!1),x.enemyBullets.splice(k,1),O.shield<=0&&_("CRITICAL HULL WARNING - EMERGENCY RECHARGE ACTIVE");continue}V.y>x.height+10&&x.enemyBullets.splice(k,1)}for(let k=x.powerups.length-1;k>=0;k--){const V=x.powerups[k];V.y+=V.vy*b,V.rot+=b*3,E.save(),E.translate(V.x,V.y),E.rotate(V.rot),E.strokeStyle="#ffd700",E.fillStyle="rgba(255, 215, 0, 0.3)",E.lineWidth=2,E.shadowColor="#ffd700",E.shadowBlur=12,E.strokeRect(-9,-9,18,18),E.fillRect(-9,-9,18,18),E.shadowBlur=0,E.restore(),Math.hypot(V.x-O.x,V.y-O.y)<32?(O.overdriveTimer=8,O.weaponType="triple",O.shield=Math.min(O.maxShield,O.shield+25),f(Math.round(O.shield)),L(!0),Ei.playPowerup(),oe("OVERDRIVE ENGAGED!",O.x,O.y-30,"#ffd700"),x.powerups.splice(k,1)):V.y>x.height+20&&x.powerups.splice(k,1)}for(let k=x.shockwaves.length-1;k>=0;k--){const V=x.shockwaves[k];if(V.radius+=(V.maxRadius-V.radius)*Math.min(1,9*b),V.alpha-=b*1.8,V.alpha<=0||V.radius>=V.maxRadius-2){x.shockwaves.splice(k,1);continue}E.strokeStyle=V.color,E.globalAlpha=V.alpha,E.lineWidth=2.5,E.beginPath(),E.arc(V.x,V.y,V.radius,0,Math.PI*2),E.stroke(),E.globalAlpha=1}for(let k=x.particles.length-1;k>=0;k--){const V=x.particles[k];if(V.x+=V.vx*b,V.y+=V.vy*b,V.life-=b,V.life<=0){x.particles.splice(k,1);continue}E.fillStyle=V.color,E.globalAlpha=Math.max(0,V.life/V.maxLife),E.beginPath(),E.arc(V.x,V.y,V.size,0,Math.PI*2),E.fill(),E.globalAlpha=1}for(let k=x.floatingTexts.length-1;k>=0;k--){const V=x.floatingTexts[k];if(V.y-=b*35,V.life-=b,V.life<=0){x.floatingTexts.splice(k,1);continue}E.fillStyle=V.color,E.globalAlpha=Math.max(0,V.life/.8),E.font="bold 13px Orbitron, sans-serif",E.textAlign="center",E.fillText(V.text,V.x,V.y),E.globalAlpha=1}E.restore(),ee=requestAnimationFrame(q)};return ee=requestAnimationFrame(q),()=>{cancelAnimationFrame(ee),window.removeEventListener("resize",U),window.removeEventListener("keydown",F),window.removeEventListener("keyup",X),P.removeEventListener("pointermove",j),P.removeEventListener("pointerdown",J),window.removeEventListener("pointerup",$)}},[I]),M.jsx("section",{id:"arcade",ref:e,className:"relative w-full py-20 px-4 sm:px-6 lg:px-8 border-y border-white/10 bg-[#030510]/35 backdrop-blur-[2px] select-none","aria-label":"Lunar Orbit Defense Space Arcade",children:M.jsxs("div",{className:"max-w-5xl mx-auto flex flex-col items-center",children:[M.jsxs("div",{className:"w-full flex flex-wrap items-center justify-between gap-4 mb-6 px-1",children:[M.jsxs("div",{className:"flex items-center gap-3",children:[M.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(0,255,204,0.8)]"}),M.jsxs("h2",{className:"font-grotesk font-bold text-sm sm:text-base tracking-wider uppercase text-white flex items-center gap-2.5",children:[M.jsx("span",{children:"LUNAR ORBIT INTERCEPTOR"}),M.jsx("span",{className:"text-[10px] px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-400/30 text-cyan-300 font-mono tracking-widest",children:"LUNAR DEFENSE"})]})]}),M.jsxs("div",{className:"flex items-center gap-2.5",children:[M.jsx("button",{type:"button",onClick:P=>{R(),P.currentTarget.blur()},onKeyDown:P=>{(P.code==="Space"||P.key===" "||P.keyCode===32)&&(P.preventDefault(),P.stopPropagation())},className:`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-grotesk font-medium tracking-wide transition-all border cursor-pointer ${v?"bg-cyan-500/15 border-cyan-400/40 text-cyan-200 hover:bg-cyan-500/25 shadow-[0_0_15px_rgba(0,255,204,0.2)]":"bg-rose-500/15 border-rose-400/40 text-rose-200 hover:bg-rose-500/25 shadow-[0_0_15px_rgba(244,63,94,0.2)]"}`,title:"Toggle AI Auto-Pilot or Manual Controls",children:v?M.jsxs(M.Fragment,{children:[M.jsx(vw,{className:"w-3.5 h-3.5 text-cyan-300"}),M.jsx("span",{children:"AI AUTO-PILOT"})]}):M.jsxs(M.Fragment,{children:[M.jsx(ww,{className:"w-3.5 h-3.5 text-rose-300"}),M.jsx("span",{children:"MANUAL FLIGHT"})]})}),M.jsx("button",{type:"button",onClick:P=>{z(),P.currentTarget.blur()},onKeyDown:P=>{(P.code==="Space"||P.key===" "||P.keyCode===32)&&(P.preventDefault(),P.stopPropagation())},className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-white/70 hover:text-white hover:border-white/25 transition-all cursor-pointer",title:"Toggle Game Sound FX","aria-label":"Toggle Game Sound",children:g?M.jsxs(M.Fragment,{children:[M.jsx(bw,{className:"w-3.5 h-3.5 text-cyan-300"}),M.jsx("span",{children:"AUDIO ON"})]}):M.jsxs(M.Fragment,{children:[M.jsx(Aw,{className:"w-3.5 h-3.5 text-white/40"}),M.jsx("span",{children:"AUDIO MUTED"})]})})]})]}),M.jsxs("div",{className:"w-full grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4 px-1 font-mono text-xs text-white/70",children:[M.jsxs("div",{className:"flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/10",children:[M.jsx("span",{className:"text-white/40 text-[11px]",children:"SHIELD:"}),M.jsx("div",{className:"flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden",children:M.jsx("div",{className:"h-full bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300",style:{width:`${u}%`}})}),M.jsxs("span",{className:"text-cyan-300 font-bold",children:[u,"%"]})]}),M.jsxs("div",{className:"flex items-center justify-between px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/10",children:[M.jsx("span",{className:"text-white/40 text-[11px]",children:"SCORE:"}),M.jsx("span",{className:"text-white font-bold",children:t.toLocaleString()})]}),M.jsxs("div",{className:"flex items-center justify-between px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/10",children:[M.jsx("span",{className:"text-white/40 text-[11px]",children:"HIGH SCORE:"}),M.jsx("span",{className:"text-amber-300 font-bold",children:o.toLocaleString()})]}),M.jsxs("div",{className:"flex items-center justify-between px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/10",children:[M.jsx("span",{className:"text-white/40 text-[11px]",children:"WAVE:"}),M.jsxs("span",{className:"text-rose-400 font-bold",children:["SECTOR ",h]})]})]}),M.jsxs("div",{className:"relative w-full aspect-[800/420] max-h-[460px] rounded-2xl overflow-hidden border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.85)] bg-[rgba(6,10,26,0.35)] backdrop-blur-[2px]",children:[M.jsx("canvas",{ref:s,tabIndex:0,className:"w-full h-full block cursor-crosshair touch-none focus:outline-none","aria-label":"Interactive Space Combat Game"}),A&&M.jsxs("div",{className:"absolute top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/80 text-amber-300 font-mono text-xs font-bold tracking-widest animate-pulse shadow-[0_0_20px_rgba(245,158,11,0.5)]",children:[M.jsx(Rw,{className:"w-3.5 h-3.5 text-amber-400"}),M.jsx("span",{children:"OVERDRIVE WEAPONS ACTIVE"})]}),M.jsxs("div",{className:"absolute bottom-2.5 left-4 right-4 flex items-center justify-between pointer-events-none text-[11px] font-mono text-white/40",children:[M.jsx("span",{children:y}),M.jsx("span",{className:"hidden sm:inline",children:"CONTROLS: DRAG / WASD / ARROWS • SPACE TO FIRE"})]})]})]})})}function Bw({milestone:s}){if(!s)return null;const{epoch:e="EPOCH",degreeBadge:t="DEGREE",timeRange:r="",institution:o="",department:l="",image:u=null,summary:f="",highlights:h=[],tags:p=[]}=s;return M.jsx("article",{className:"timeline-orbit-card relative flex flex-col h-full group p-2 sm:p-2.5 rounded-[2.25rem] bg-white/[0.03] border border-white/10 ring-1 ring-white/5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-cyan-400/40 hover:shadow-[0_24px_70px_rgba(0,0,0,0.8),0_0_30px_rgba(0,255,204,0.12)]",children:M.jsxs("div",{className:"card-glass-body relative flex-1 flex flex-col p-7 sm:p-9 rounded-[calc(2.25rem-0.625rem)] bg-[#070a18]/95 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]",children:[M.jsxs("div",{className:"card-top-meta flex items-center justify-between mb-4 gap-2 flex-wrap",children:[M.jsx("span",{className:"degree-badge font-['Outfit'] text-xs font-bold tracking-[0.2em] text-[#ffaa00] uppercase px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/25 shadow-[0_0_12px_rgba(255,170,0,0.15)]",children:t}),M.jsx("span",{className:"time-range font-['Share_Tech_Mono'] text-xs text-slate-400 tracking-wider",children:r})]}),M.jsx("h3",{className:"institution-title font-['Space_Grotesk'] text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-1.5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]",children:o}),M.jsx("h4",{className:"department-sub font-['Outfit'] text-sm sm:text-base font-semibold text-[#00ffcc] tracking-wider uppercase mb-5",children:l}),u&&M.jsxs("div",{className:"campus-hud-frame relative overflow-hidden rounded-xl mb-6 border border-white/10 bg-black/50 group/img shadow-[0_8px_30px_rgba(0,0,0,0.6)]",children:[M.jsx("span",{className:"hud-corner-tl absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400 z-10 pointer-events-none"}),M.jsx("span",{className:"hud-corner-tr absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400 z-10 pointer-events-none"}),M.jsx("span",{className:"hud-corner-bl absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400 z-10 pointer-events-none"}),M.jsx("span",{className:"hud-corner-br absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400 z-10 pointer-events-none"}),M.jsx("div",{className:"absolute top-2.5 right-3 z-10 pointer-events-none px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-cyan-300 tracking-widest uppercase",children:"CAMPUS ARCHIVE"}),M.jsx("img",{src:u,alt:`${o} campus visual`,className:"w-full h-48 sm:h-56 object-cover object-center filter brightness-90 contrast-110 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/img:scale-105 group-hover/img:brightness-100",loading:"lazy"}),M.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#030308]/90 via-transparent to-transparent pointer-events-none"})]}),M.jsx("p",{className:"institution-summary font-['Outfit'] text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal tracking-wide",children:f}),h&&h.length>0&&M.jsx("div",{className:"academic-highlights flex flex-col gap-3.5 mb-8",children:h.map((v,S)=>M.jsxs("div",{className:"highlight-item flex items-start gap-3.5 text-sm sm:text-base text-slate-200 leading-relaxed font-['Outfit']",children:[M.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#00ffcc] mt-2 shrink-0 shadow-[0_0_8px_#00ffcc]","aria-hidden":"true"}),M.jsxs("div",{className:"hl-content",children:[M.jsxs("strong",{className:"text-white font-semibold",children:[v.title,":"]})," ",M.jsx("span",{className:"text-slate-300 font-light",children:v.desc})]})]},S))}),p&&p.length>0&&M.jsx("div",{className:"course-tags flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/10",children:p.map((v,S)=>M.jsx("span",{className:"ctag font-['Share_Tech_Mono'] text-xs px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-slate-300 uppercase tracking-wider transition-all duration-300 hover:text-white hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(0,255,204,0.25)]",children:v},S))})]})})}function zw(){return M.jsxs("section",{id:"galaxy",className:"cosmic-panel galaxy-panel relative min-h-screen w-full py-32 md:py-48 px-4 sm:px-8 lg:px-16 overflow-hidden","aria-labelledby":"galaxy-heading",children:[M.jsx("div",{className:"panel-atmosphere galaxy-backdrop absolute inset-0 pointer-events-none z-[1]","aria-hidden":"true"}),M.jsxs("div",{className:"panel-container relative max-w-7xl mx-auto w-full z-[2]",children:[M.jsxs("header",{className:"panel-header text-center mb-20 relative",children:[M.jsx("div",{className:"inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] tracking-[0.25em] uppercase font-semibold text-[#00ffcc] mb-6 shadow-[0_0_20px_rgba(0,255,204,0.15)]",children:M.jsx("span",{children:"ACADEMIC FOUNDATIONS"})}),M.jsx("h2",{id:"galaxy-heading",className:"panel-title font-['Space_Grotesk'] text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight uppercase text-white mb-4 drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)]",children:"EDUCATION"}),M.jsx("p",{className:"panel-subtitle font-['Outfit'] text-base sm:text-lg font-light tracking-wide text-slate-300 max-w-2xl mx-auto leading-relaxed",children:"Formations in digital systems architecture, computational logic, and software engineering."})]}),M.jsx("div",{className:"galaxy-timeline grid grid-cols-1 lg:grid-cols-2 gap-8 relative max-w-6xl mx-auto w-full",children:fw.map((s,e)=>M.jsx(Bw,{milestone:s},s.epoch||e))})]})]})}function Gw({name:s}){return M.jsxs("div",{className:"group flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/[0.025] hover:bg-white/[0.07] border border-white/[0.06] hover:border-purple-400/40 hover:shadow-[0_4px_20px_rgba(168,85,247,0.12)] transition-all duration-300 cursor-default",children:[M.jsxs("div",{className:"flex items-center gap-2.5 min-w-0",children:[M.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-purple-400/60 group-hover:bg-cyan-300 group-hover:shadow-[0_0_8px_rgba(103,232,249,0.9)] transition-all flex-shrink-0","aria-hidden":"true"}),M.jsx("span",{className:"font-grotesk text-sm font-medium tracking-wide text-white/85 group-hover:text-white truncate transition-colors",children:s})]}),M.jsxs("div",{className:"flex items-center gap-1 pl-2 flex-shrink-0 opacity-40 group-hover:opacity-100 transition-opacity",children:[M.jsx("span",{className:"w-1 h-2 rounded-sm bg-purple-400/40 group-hover:bg-cyan-400"}),M.jsx("span",{className:"w-1 h-2.5 rounded-sm bg-purple-400/60 group-hover:bg-cyan-400"}),M.jsx("span",{className:"w-1 h-3 rounded-sm bg-purple-400/80 group-hover:bg-cyan-400"})]})]})}const Hw=[{id:"all",label:"All Clusters"},{id:"languages",label:"Languages"},{id:"frontend",label:"Frontend & Graphics"},{id:"backend",label:"Backend & Data"},{id:"devops",label:"DevOps & Systems"}],Vw={languages:$0,frontend:Ew,backend:Mw,devops:Sw},Ww={languages:"lg:col-span-7",frontend:"lg:col-span-5",backend:"lg:col-span-5",devops:"lg:col-span-7"};function Xw(){const[s,e]=De.useState("all"),t=s==="all"?o0:o0.filter(r=>r.id===s);return M.jsxs("section",{id:"supernova",className:"relative min-h-screen w-full py-32 md:py-48 px-4 sm:px-8 lg:px-16 overflow-hidden","aria-labelledby":"supernova-heading",children:[M.jsx("div",{className:"absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_50%_20%,rgba(168,85,247,0.06),transparent_70%)]","aria-hidden":"true"}),M.jsxs("div",{className:"relative max-w-7xl mx-auto w-full z-10",children:[M.jsxs("header",{className:"text-center mb-16 relative",children:[M.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 ring-1 ring-white/5 text-[11px] font-mono tracking-[0.2em] text-white/70 mb-6 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)]",children:[M.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]"}),M.jsx("span",{children:"TECHNICAL MASTERY"}),M.jsx("span",{className:"text-white/20",children:"/"}),M.jsx("span",{className:"text-white/50",children:"STELLAR FORMATION"})]}),M.jsx("h2",{id:"supernova-heading",className:"font-grotesk text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4",children:"SKILLS"}),M.jsx("p",{className:"font-outfit text-base sm:text-lg font-light text-white/60 max-w-2xl mx-auto leading-relaxed",children:"Core Skills Forged in High-Energy Problem Solving & System Architecture"})]}),M.jsx("div",{className:"flex justify-center mb-16",role:"tablist","aria-label":"Skill Categories",children:M.jsx("div",{className:"inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-full bg-white/[0.03] border border-white/10 ring-1 ring-white/5 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.6)]",children:Hw.map(r=>{const o=s===r.id;return M.jsx("button",{type:"button",role:"tab","aria-selected":o,onClick:()=>e(r.id),className:`font-grotesk px-4 sm:px-5 py-2 rounded-full text-xs sm:text-xs font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer ${o?"bg-white/15 text-white shadow-[0_0_20px_rgba(255,255,255,0.08)] border border-white/20 scale-[1.02]":"text-white/50 hover:text-white/90 hover:bg-white/[0.04] border border-transparent"}`,children:r.label},r.id)})})}),M.jsx("div",{className:`grid grid-cols-1 lg:grid-cols-12 gap-6 grid-flow-dense transition-all duration-500 ${s!=="all"?"max-w-3xl mx-auto":""}`,children:t.map(r=>{const o=Vw[r.id]||$0,l=s==="all"?Ww[r.id]||"lg:col-span-6":"col-span-12";return M.jsx("div",{className:`col-span-1 ${l} p-2.5 rounded-[2.25rem] bg-white/[0.03] border border-white/10 ring-1 ring-white/5 hover:border-purple-500/30 hover:shadow-[0_20px_60px_rgba(168,85,247,0.12)] transition-all duration-500 group flex flex-col`,children:M.jsxs("div",{className:"rounded-[calc(2.25rem-0.625rem)] bg-[#070a18]/95 p-6 sm:p-8 border border-white/5 flex flex-col h-full relative overflow-hidden",children:[M.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 group-hover:bg-purple-500/10 transition-all duration-700","aria-hidden":"true"}),M.jsxs("div",{className:"flex items-start gap-4 mb-3 relative z-10",children:[M.jsx("div",{className:"w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/10 ring-1 ring-white/5 flex items-center justify-center flex-shrink-0 text-purple-300 group-hover:text-cyan-300 group-hover:border-cyan-400/30 transition-all",children:M.jsx(o,{className:"w-5 h-5"})}),M.jsxs("div",{children:[M.jsx("h3",{className:"font-grotesk text-lg sm:text-xl font-bold tracking-tight text-white",children:r.title}),M.jsx("p",{className:"font-outfit text-sm font-light text-white/55 mt-1 leading-relaxed",children:r.desc})]})]}),M.jsx("div",{className:"flex flex-col gap-2 mt-6 relative z-10",children:r.skills.map(u=>M.jsx(Gw,{name:u},u))})]})},r.id)})})]})]})}function jw({channel:s}){if(!s)return null;const{type:e,label:t,value:r,instruction:o,btnText:l,href:u}=s,h={email:"MAILTO PROTOCOL",github:"GIT REPOSITORY",facebook:"SOCIAL CONNECT"}[e]||"SECURE LINK",p=e!=="email",v=()=>{switch(e){case"email":return M.jsx(ff,{className:"w-5 h-5 text-cyan-300"});case"github":return M.jsx(q0,{className:"w-5 h-5 text-white"});case"facebook":return M.jsx(Y0,{className:"w-5 h-5 text-blue-400"});default:return M.jsx(ff,{className:"w-5 h-5 text-cyan-300"})}};return M.jsx("a",{href:u,target:p?"_blank":void 0,rel:p?"noopener noreferrer":void 0,className:"p-2.5 rounded-[2rem] bg-white/[0.03] border border-white/10 ring-1 ring-white/5 hover:border-cyan-400/40 hover:shadow-[0_20px_50px_rgba(0,255,204,0.12)] transition-all duration-500 group flex flex-col block",id:`${e}-channel-link`,title:o,"aria-label":`${t}: ${r} - ${o}`,children:M.jsxs("div",{className:"rounded-[calc(2rem-0.625rem)] bg-[#070a18]/95 p-6 sm:p-7 border border-white/5 flex flex-col justify-between h-full relative overflow-hidden",children:[M.jsx("div",{className:"absolute -top-12 -right-12 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/15 transition-all duration-700","aria-hidden":"true"}),M.jsxs("div",{className:"flex items-center justify-between mb-6 relative z-10",children:[M.jsx("span",{className:"font-mono text-[10px] tracking-[0.2em] uppercase text-cyan-400/90 bg-cyan-950/40 px-2.5 py-1 rounded-full border border-cyan-500/20",children:h}),M.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,255,204,0.8)]","aria-hidden":"true"})]}),M.jsxs("div",{className:"relative z-10",children:[M.jsx("div",{className:"w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 ring-1 ring-white/5 flex items-center justify-center mb-5 group-hover:border-cyan-400/40 group-hover:scale-105 transition-all duration-300",children:v()}),M.jsx("h3",{className:"font-grotesk text-lg font-bold text-white tracking-wide",children:t}),M.jsx("p",{className:"font-mono text-sm text-white/60 group-hover:text-cyan-200 transition-colors mt-1.5 break-all",children:r}),M.jsx("p",{className:"font-outfit text-xs text-white/40 mt-2 leading-relaxed",children:o})]}),M.jsxs("div",{className:"mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between relative z-10",children:[M.jsx("span",{className:"font-grotesk text-xs uppercase tracking-wider font-semibold text-white/70 group-hover:text-white transition-colors",children:l||"Connect"}),M.jsx("div",{className:"w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white group-hover:bg-cyan-400 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-all duration-300 shadow-[0_0_12px_rgba(0,255,204,0.2)]",children:M.jsx(ic,{className:"w-4 h-4"})})]})]})})}function Yw(){const s=ci==null?void 0:ci.email,[e,t]=De.useState({name:"",email:"",subject:"",body:""}),[r,o]=De.useState(`ONLINE // TARGET: ${s.toLowerCase()}`),[l,u]=De.useState({visible:!1,text:"",type:"",link:null}),[f,h]=De.useState(!1),[p,v]=De.useState(0),[S,g]=De.useState(!1),w=De.useRef(null),A=De.useRef(null),L=z=>{const{name:R,value:I}=z.target;t(P=>({...P,[R]:I}))},y=()=>{const z=s,R=()=>{g(!0),o("CLIPBOARD ACCESS GRANTED"),u({visible:!0,text:`COPIED TO CLIPBOARD: ${z}`,type:"success",link:null}),A.current&&clearTimeout(A.current),A.current=setTimeout(()=>{g(!1)},2500),w.current&&clearTimeout(w.current),w.current=setTimeout(()=>{u(I=>({...I,visible:!1}))},3500)};navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(z).then(R).catch(()=>{_(z,R)}):_(z,R)},_=(z,R)=>{try{const I=document.createElement("input");I.value=z,document.body.appendChild(I),I.select(),document.execCommand("copy"),document.body.removeChild(I),R&&R()}catch(I){console.warn("Fallback copy failed:",I)}},D=z=>{z.preventDefault();const R=e.name.trim(),I=e.email.trim(),P=e.subject.trim(),E=e.body.trim(),x=P?`[Portfolio Transmission] ${P}`:`[Portfolio Transmission] Message from ${R}`,U=`Transmitter Name: ${R}
Return Coordinates: ${I}

Payload:
${E}

---
Transmitted via Kian Rances Cagadas Terminal`,F=encodeURIComponent(x),X=encodeURIComponent(U),j=`https://mail.google.com/mail/?view=cm&fs=1&to=${s.toLowerCase()}&su=${F}&body=${X}`;let J=null;try{J=window.open("about:blank","_blank")}catch{J=null}h(!0),v(15),o("RESOLVING GMAIL DISPATCH..."),u({visible:!0,text:"ENCRYPTING PAYLOAD & RESOLVING GMAIL... [25%]",type:"transmitting",link:null}),setTimeout(()=>{v(70),u({visible:!0,text:`COORDINATES LOCKED: ${s.toLowerCase()}... [70%]`,type:"transmitting",link:null})},250),setTimeout(()=>{v(100),o(`DIRECTED TO GMAIL // ${s.toLowerCase()}`),u({visible:!0,text:"OPENING GMAIL COMPOSE...",type:"success",link:j}),J&&!J.closed?J.location.href=j:window.location.href=j,setTimeout(()=>{h(!1)},2500)},700)};return M.jsx("div",{className:"p-2.5 sm:p-3 rounded-[2.25rem] bg-white/[0.03] border border-white/10 ring-1 ring-white/5 shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative mt-12",children:M.jsxs("div",{className:"rounded-[calc(2.25rem-0.75rem)] bg-[#070a18]/95 p-6 sm:p-10 border border-white/5 relative overflow-hidden",children:[M.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none","aria-hidden":"true"}),M.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-white/[0.08] gap-4 relative z-10",children:[M.jsxs("div",{className:"flex items-center gap-3",children:[M.jsxs("div",{className:"flex items-center gap-1.5","aria-hidden":"true",children:[M.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-rose-500/80 shadow-[0_0_8px_rgba(244,63,94,0.6)]"}),M.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.6)]"}),M.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"})]}),M.jsx("span",{className:"font-mono text-xs tracking-[0.2em] uppercase text-white/70",children:"MESSAGE COMPOSER"})]}),M.jsxs("div",{className:"font-mono text-xs tracking-wider text-cyan-400/90 flex items-center gap-2",children:[M.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"}),M.jsx("span",{children:r})]})]}),M.jsxs("form",{id:"contact-form",className:"relative z-10 space-y-6",onSubmit:D,children:[M.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-6",children:[M.jsxs("div",{children:[M.jsx("label",{htmlFor:"sender-name",className:"block font-mono text-[11px] tracking-[0.16em] uppercase text-white/50 mb-2",children:"Transmitter Identity (Name)"}),M.jsx("input",{type:"text",id:"sender-name",name:"name",value:e.name,onChange:L,placeholder:"E.g. Dr. Jane Orbit",required:!0,className:"w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/20 font-grotesk text-sm focus:outline-none focus:border-cyan-400/60 focus:bg-white/[0.06] focus:ring-1 focus:ring-cyan-400/30 transition-all"})]}),M.jsxs("div",{children:[M.jsx("label",{htmlFor:"sender-email",className:"block font-mono text-[11px] tracking-[0.16em] uppercase text-white/50 mb-2",children:"Return Coordinates (Email)"}),M.jsx("input",{type:"email",id:"sender-email",name:"email",value:e.email,onChange:L,placeholder:"E.g. jane@observatory.org",required:!0,className:"w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/20 font-grotesk text-sm focus:outline-none focus:border-cyan-400/60 focus:bg-white/[0.06] focus:ring-1 focus:ring-cyan-400/30 transition-all"})]})]}),M.jsxs("div",{children:[M.jsx("label",{htmlFor:"sender-subject",className:"block font-mono text-[11px] tracking-[0.16em] uppercase text-white/50 mb-2",children:"Transmission Frequency (Subject)"}),M.jsx("input",{type:"text",id:"sender-subject",name:"subject",value:e.subject,onChange:L,placeholder:"Project Collaboration - Technical Inquiry",required:!0,className:"w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/20 font-grotesk text-sm focus:outline-none focus:border-cyan-400/60 focus:bg-white/[0.06] focus:ring-1 focus:ring-cyan-400/30 transition-all"})]}),M.jsxs("div",{children:[M.jsx("label",{htmlFor:"sender-message",className:"block font-mono text-[11px] tracking-[0.16em] uppercase text-white/50 mb-2",children:"Transmission Payload (Message)"}),M.jsx("textarea",{id:"sender-message",name:"body",rows:4,value:e.body,onChange:L,placeholder:"Enter message payload here...",required:!0,className:"w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/20 font-grotesk text-sm focus:outline-none focus:border-cyan-400/60 focus:bg-white/[0.06] focus:ring-1 focus:ring-cyan-400/30 transition-all resize-y"})]}),M.jsxs("div",{className:"flex flex-wrap items-center gap-4 pt-4",children:[M.jsxs("button",{type:"submit",id:"send-transmission-btn",className:"inline-flex items-center justify-between gap-3 px-6 py-3.5 rounded-full bg-white text-black font-grotesk text-xs font-semibold tracking-wider uppercase hover:bg-cyan-300 transition-all duration-300 group cursor-pointer shadow-[0_0_25px_rgba(255,255,255,0.2)]",children:[M.jsx("span",{children:"Transmit via Gmail"}),M.jsx("div",{className:"w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform",children:M.jsx(Tw,{className:"w-3.5 h-3.5 text-black"})})]}),M.jsx("button",{type:"button",id:"copy-email-btn",onClick:y,className:"inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/[0.04] border border-white/10 text-white font-grotesk text-xs font-medium tracking-wider uppercase hover:bg-white/[0.08] hover:border-white/20 transition-all cursor-pointer",children:S?M.jsxs(M.Fragment,{children:[M.jsx(_w,{className:"w-4 h-4 text-emerald-400"}),M.jsx("span",{className:"text-emerald-300",children:"Copied to Clipboard"})]}):M.jsxs(M.Fragment,{children:[M.jsx(yw,{className:"w-4 h-4 text-white/60"}),M.jsx("span",{children:"Copy Direct Email"})]})})]}),f&&M.jsx("div",{className:"w-full h-1 bg-white/5 rounded-full overflow-hidden mt-4",children:M.jsx("div",{className:"h-full bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300",style:{width:`${p}%`}})}),l.visible&&M.jsx("div",{className:`p-4 rounded-xl border text-xs font-mono tracking-wide ${l.type==="success"?"bg-cyan-950/40 border-cyan-400/40 text-cyan-200":"bg-white/[0.03] border-white/10 text-white/80"}`,role:"status","aria-live":"polite",children:l.link?M.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2",children:[M.jsx("span",{children:l.text}),M.jsxs("a",{href:l.link,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-cyan-300 underline font-bold hover:text-cyan-200",children:[M.jsx("span",{children:"Manual Link"}),M.jsx(ic,{className:"w-3.5 h-3.5"})]})]}):l.text})]})]})})}function qw(){const s=(ci==null?void 0:ci.channels)||[];return M.jsxs("section",{id:"contact",className:"relative min-h-screen w-full py-32 md:py-48 px-4 sm:px-8 lg:px-16 overflow-hidden","aria-labelledby":"contact-heading",children:[M.jsx("div",{className:"absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_50%_30%,rgba(0,255,204,0.05),transparent_70%)]","aria-hidden":"true"}),M.jsxs("div",{className:"relative max-w-7xl mx-auto w-full z-10",children:[M.jsxs("header",{className:"text-center mb-16 relative",children:[M.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 ring-1 ring-white/5 text-[11px] font-mono tracking-[0.2em] text-white/70 mb-6 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)]",children:[M.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,255,204,0.8)]"}),M.jsx("span",{children:"DIRECT CONNECT"}),M.jsx("span",{className:"text-white/20",children:"/"}),M.jsx("span",{className:"text-white/50",children:"SUBSPACE LINK"})]}),M.jsx("h2",{id:"contact-heading",className:"font-grotesk text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4",children:"CONTACT"}),M.jsx("p",{className:"font-outfit text-base sm:text-lg font-light text-white/60 max-w-2xl mx-auto leading-relaxed",children:"Transmit your communication directly across the cosmic spectrum. Connect instantly via any terminal below."})]}),M.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-12",children:s.map(e=>M.jsx(jw,{channel:e},e.type))}),M.jsx("div",{className:"relative max-w-4xl mx-auto w-full",children:M.jsx(Yw,{})})]})]})}function $w(){const s=new Date().getFullYear(),e=(r,o)=>{r.preventDefault();const l=document.getElementById(o);l?l.scrollIntoView({behavior:"smooth"}):window.location.hash=o},t=r=>{r.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})};return M.jsxs("footer",{className:"relative z-20 w-full border-t border-white/10 bg-[#030308] overflow-hidden",role:"contentinfo",children:[M.jsx("div",{className:"absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none","aria-hidden":"true"}),M.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-24 sm:py-32",children:[M.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start",children:[M.jsxs("div",{className:"lg:col-span-5 space-y-5",children:[M.jsxs("div",{className:"flex items-center gap-3",children:[M.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,255,204,0.8)]"}),M.jsxs("div",{children:[M.jsx("span",{className:"font-grotesk text-xl font-bold tracking-tight text-white block",children:os.name}),M.jsx("span",{className:"font-mono text-[11px] uppercase tracking-[0.2em] text-white/40 block mt-0.5",children:os.coordinateTag})]})]}),M.jsx("p",{className:"font-outfit text-sm text-white/50 max-w-sm leading-relaxed",children:os.footerMotto}),M.jsxs("div",{className:"pt-2 flex items-center gap-2",children:[M.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]"}),M.jsx("span",{className:"font-mono text-xs text-white/40 tracking-wider",children:"CORE TELEMETRY BROADCAST ONLINE"})]})]}),M.jsxs("div",{className:"lg:col-span-3 space-y-4",children:[M.jsx("span",{className:"font-mono text-xs uppercase tracking-[0.2em] text-white/40 block pb-2 border-b border-white/5",children:"NAVIGATION"}),M.jsx("nav",{"aria-label":"Footer Quick Links",className:"grid grid-cols-1 gap-2.5",children:ls.map(r=>M.jsxs("a",{href:`#${r.id}`,onClick:o=>e(o,r.id),className:"group flex items-center justify-between font-grotesk text-sm text-white/60 hover:text-white transition-colors py-1",children:[M.jsx("span",{className:"tracking-wide",children:r.label}),M.jsx(ic,{className:"w-3.5 h-3.5 text-white/20 group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"})]},r.id))})]}),M.jsxs("div",{className:"lg:col-span-4 space-y-5 lg:text-right flex flex-col items-start lg:items-end",children:[M.jsxs("div",{className:"w-full",children:[M.jsx("span",{className:"font-mono text-xs uppercase tracking-[0.2em] text-white/40 block pb-2 border-b border-white/5 mb-4",children:"CHANNELS"}),M.jsxs("ul",{className:"space-y-3 font-grotesk text-sm",children:[M.jsx("li",{children:M.jsxs("a",{href:`mailto:${ci.email}`,className:"inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors group","aria-label":`Send Email to ${ci.email}`,children:[M.jsx(ff,{className:"w-4 h-4 text-white/30 group-hover:text-cyan-300 transition-colors"}),M.jsx("span",{children:ci.email})]})}),M.jsx("li",{children:M.jsxs("a",{href:ci.githubUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors group","aria-label":"GitHub Profile",children:[M.jsx(q0,{className:"w-4 h-4 text-white/30 group-hover:text-white transition-colors"}),M.jsxs("span",{children:["GitHub ",ci.githubHandle]})]})}),M.jsx("li",{children:M.jsxs("a",{href:ci.facebookUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors group","aria-label":"Facebook Profile",children:[M.jsx(Y0,{className:"w-4 h-4 text-white/30 group-hover:text-blue-400 transition-colors"}),M.jsx("span",{children:"Facebook Profile"})]})})]})]}),M.jsx("div",{className:"pt-2",children:M.jsxs("button",{type:"button",onClick:t,className:"inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-white/30 hover:bg-white/[0.08] text-xs font-grotesk font-medium uppercase tracking-wider text-white transition-all cursor-pointer group","aria-label":"Return to singularity",children:[M.jsx("span",{children:"Return to Top"}),M.jsx("div",{className:"w-5 h-5 rounded-full bg-white/10 flex items-center justify-center group-hover:-translate-y-0.5 transition-transform",children:M.jsx(xw,{className:"w-3 h-3 text-white"})})]})})]})]}),M.jsxs("div",{className:"mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40",children:[M.jsxs("div",{children:["© ",s," ",M.jsx("span",{className:"text-white/80",children:os.name}),". All rights reserved."]}),M.jsxs("div",{className:"flex items-center gap-4 text-[11px] uppercase tracking-wider text-white/40",children:[M.jsx("span",{children:"SECURE TELEMETRY"}),M.jsx("span",{children:"•"}),M.jsx("span",{className:"text-cyan-400",children:"STATUS ONLINE"})]})]})]})]})}function Kw(){const[s,e]=De.useState("intro");De.useEffect(()=>{const r=()=>{const o=window.innerHeight*.35;for(let l=ls.length-1;l>=0;l--){const u=ls[l],f=document.getElementById(u.id);if(f&&f.getBoundingClientRect().top<=o){e(u.id);break}}};return window.addEventListener("scroll",r,{passive:!0}),r(),()=>window.removeEventListener("scroll",r)},[]);const t=De.useCallback(r=>{e(r);const o=document.getElementById(r);o?o.scrollIntoView({behavior:"smooth"}):window.location.hash=r},[]);return M.jsxs("div",{className:"relative min-h-screen bg-[#030308] text-[#f4f8ff] overflow-x-hidden selection:bg-[#00ffcc]/30 selection:text-[#00ffcc]",children:[M.jsx("a",{href:"#main-content",className:"skip-to-content sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#030308] focus:text-[#00ffcc] focus:border focus:border-[#00ffcc] focus:rounded-md focus:shadow-[0_0_20px_rgba(0,255,204,0.6)] focus:font-['Orbitron'] focus:text-xs focus:font-bold focus:tracking-wider",children:"SKIP TO CONTENT [ACCESS SINGULARITY]"}),M.jsx(Bx,{}),M.jsx(uw,{}),M.jsx(ow,{}),M.jsx(dw,{}),M.jsx(Nw,{activeSection:s,onNavigate:t}),M.jsxs("main",{id:"main-content",className:"relative z-10 focus:outline-none overflow-x-hidden w-full max-w-full",tabIndex:-1,children:[M.jsx(Fw,{}),M.jsx(Ow,{}),M.jsx(zw,{}),M.jsx(Xw,{}),M.jsx(qw,{})]}),M.jsx($w,{})]})}Ox.createRoot(document.getElementById("root")).render(M.jsx(Nx.StrictMode,{children:M.jsx(Kw,{})}));
