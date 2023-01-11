/*! jQuery v3.6.3 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,y=n.hasOwnProperty,a=y.toString,l=a.call(Object),v={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},S=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||S).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.3",E=function(e,t){return new E.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}E.fn=E.prototype={jquery:f,constructor:E,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=E.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return E.each(this,e)},map:function(n){return this.pushStack(E.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(E.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(E.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},E.extend=E.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(E.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||E.isPlainObject(n)?n:{},i=!1,a[t]=E.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},E.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=y.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?E.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:v}),"function"==typeof Symbol&&(E.fn[Symbol.iterator]=t[Symbol.iterator]),E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,S,y,s,c,v,E="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,S)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&v(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!y||!y.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ve(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=E)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{if(d.cssSupportsSelector&&!CSS.supports("selector(:is("+c+"))"))throw new Error;return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===E&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[E]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ye(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ve(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,S=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.cssSupportsSelector=ce(function(){return CSS.supports("selector(*)")&&C.querySelectorAll(":is(:jqfake)")&&!CSS.supports("selector(:is(*,:jqfake))")}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=E,!C.getElementsByName||!C.getElementsByName(E).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&S){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&S){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&S)return t.getElementsByClassName(e)},s=[],y=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+E+"'></a><select id='"+E+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+E+"-]").length||y.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||y.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+E+"+*").length||y.push(".#.+[+~]"),e.querySelectorAll("\\\f"),y.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),d.cssSupportsSelector||y.push(":has"),y=y.length&&new RegExp(y.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),v=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType&&e.documentElement||e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&v(p,e)?-1:t==C||t.ownerDocument==p&&v(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&S&&!N[t+" "]&&(!s||!s.test(t))&&(!y||!y.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),v(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!S):void 0;return void 0!==r?r:d.attributes||!S?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace($," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,y){var v="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===y?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=v!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(v){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=y)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[E]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[E]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=S?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ye(function(){return[0]}),last:ye(function(e,t){return[t-1]}),eq:ye(function(e,t,n){return[n<0?n+t:n]}),even:ye(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ye(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ye(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ye(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[E]||(e[E]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,y,v,e){return y&&!y[E]&&(y=Ce(y)),v&&!v[E]&&(v=Ce(v,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?v||(e?d:l||y)?[]:t:f;if(g&&g(f,p,n,r),y){i=Te(p,u),y(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(v||d){if(v){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);v(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=v?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),v?v(null,t,p,r):H.apply(t,p)})}function Se(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[E]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Se(e.slice(s,n)),n<r&&Se(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,y,v,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Se(t[n]))[E]?i.push(a):o.push(a);(a=A(e,(y=o,m=0<(v=i).length,x=0<y.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!S);while(s=y[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=v[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+v.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&S&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ve(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!S,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},d.sortStable=E.split("").sort(j).join("")===E,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);E.find=d,E.expr=d.selectors,E.expr[":"]=E.expr.pseudos,E.uniqueSort=E.unique=d.uniqueSort,E.text=d.getText,E.isXMLDoc=d.isXML,E.contains=d.contains,E.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&E(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=E.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?E.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?E.grep(e,function(e){return e===n!==r}):"string"!=typeof n?E.grep(e,function(e){return-1<i.call(n,e)!==r}):E.filter(n,e,r)}E.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?E.find.matchesSelector(r,e)?[r]:[]:E.find.matches(e,E.grep(t,function(e){return 1===e.nodeType}))},E.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(E(e).filter(function(){for(t=0;t<r;t++)if(E.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)E.find(e,i[t],n);return 1<r?E.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?E(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(E.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof E?t[0]:t,E.merge(this,E.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:S,!0)),N.test(r[1])&&E.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=S.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(E):E.makeArray(e,this)}).prototype=E.fn,D=E(S);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}E.fn.extend({has:function(e){var t=E(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(E.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&E(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&E.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?E.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(E(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(E.uniqueSort(E.merge(this.get(),E(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),E.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),E.merge([],e.childNodes))}},function(r,i){E.fn[r]=function(e,t){var n=E.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=E.filter(t,n)),1<this.length&&(H[r]||E.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}E.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},E.each(e.match(P)||[],function(e,t){n[t]=!0}),n):E.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){E.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return E.each(arguments,function(e,t){var n;while(-1<(n=E.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<E.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},E.extend({Deferred:function(e){var o=[["notify","progress",E.Callbacks("memory"),E.Callbacks("memory"),2],["resolve","done",E.Callbacks("once memory"),E.Callbacks("once memory"),0,"resolved"],["reject","fail",E.Callbacks("once memory"),E.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return E.Deferred(function(r){E.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){E.Deferred.exceptionHook&&E.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(E.Deferred.getStackHook&&(t.stackTrace=E.Deferred.getStackHook()),C.setTimeout(t))}}return E.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?E.extend(e,a):a}},s={};return E.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=E.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;E.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},E.readyException=function(e){C.setTimeout(function(){throw e})};var F=E.Deferred();function $(){S.removeEventListener("DOMContentLoaded",$),C.removeEventListener("load",$),E.ready()}E.fn.ready=function(e){return F.then(e)["catch"](function(e){E.readyException(e)}),this},E.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--E.readyWait:E.isReady)||(E.isReady=!0)!==e&&0<--E.readyWait||F.resolveWith(S,[E])}}),E.ready.then=F.then,"complete"===S.readyState||"loading"!==S.readyState&&!S.documentElement.doScroll?C.setTimeout(E.ready):(S.addEventListener("DOMContentLoaded",$),C.addEventListener("load",$));var B=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)B(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(E(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=E.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||E.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!E.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}E.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),E.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):B(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),E.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,E.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=E.queue(e,t),r=n.length,i=n.shift(),o=E._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){E.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:E.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),E.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?E.queue(this[0],t):void 0===n?this:this.each(function(){var e=E.queue(this,t,n);E._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&E.dequeue(this,t)})},dequeue:function(e){return this.each(function(){E.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=E.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=S.documentElement,ie=function(e){return E.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return E.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===E.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return E.css(e,t,"")},u=s(),l=n&&n[3]||(E.cssNumber[t]?"":"px"),c=e.nodeType&&(E.cssNumber[t]||"px"!==l&&+u)&&te.exec(E.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)E.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,E.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=E.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}E.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?E(this).show():E(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=S.createDocumentFragment().appendChild(S.createElement("div")),(fe=S.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),v.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",v.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?E.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,v.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))E.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+E.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;E.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<E.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return S.activeElement}catch(e){}}()==("focus"===t)}function Se(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Se(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return E().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=E.guid++)),e.each(function(){E.event.add(this,t,i,r,n)})}function Ee(e,i,o){o?(Y.set(e,i,!1),E.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(E.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:E.event.trigger(E.extend(r[0],E.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&E.event.add(e,i,we)}E.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&E.find.matchesSelector(re,i),n.guid||(n.guid=E.guid++),(u=y.events)||(u=y.events=Object.create(null)),(a=y.handle)||(a=y.handle=function(e){return"undefined"!=typeof E&&E.event.triggered!==e.type?E.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=E.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=E.event.special[d]||{},c=E.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&E.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),E.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.hasData(e)&&Y.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=E.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||E.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)E.event.remove(e,d+t[l],n,r,!0);E.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=E.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=E.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=E.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((E.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<E(i,this).index(l):E.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(E.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[E.expando]?e:new E.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ee(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ee(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},E.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},E.Event=function(e,t){if(!(this instanceof E.Event))return new E.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&E.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[E.expando]=!0},E.Event.prototype={constructor:E.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},E.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},E.event.addProp),E.each({focus:"focusin",blur:"focusout"},function(t,e){E.event.special[t]={setup:function(){return Ee(this,t,Ce),!1},trigger:function(){return Ee(this,t),!0},_default:function(e){return Y.get(e.target,t)},delegateType:e}}),E.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){E.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||E.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),E.fn.extend({on:function(e,t,n,r){return Se(this,e,t,n,r)},one:function(e,t,n,r){return Se(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,E(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){E.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&E(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)E.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=E.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!v.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=E.map(ye(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=E.clone(u,!0,!0),s&&E.merge(a,ye(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,E.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&E.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?E._evalUrl&&!u.noModule&&E._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?E.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||E.cleanData(ye(r)),r.parentNode&&(n&&ie(r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}E.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||E.isXMLDoc(e)))for(a=ye(c),r=0,i=(o=ye(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ye(e),a=a||ye(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ye(c,"script")).length&&ve(a,!f&&ye(e,"script")),c},cleanData:function(e){for(var t,n,r,i=E.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?E.event.remove(n,r):E.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),E.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return B(this,function(e){return void 0===e?E.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(E.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return E.clone(this,e,t)})},html:function(e){return B(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=E.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(E.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;E.inArray(this,n)<0&&(E.cleanData(ye(this)),t&&t.replaceChild(e,this))},n)}}),E.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){E.fn[e]=function(e){for(var t,n=[],r=E(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),E(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=/^--/,Me=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Ie=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},We=new RegExp(ne.join("|"),"i"),Fe="[\\x20\\t\\r\\n\\f]",$e=new RegExp("^"+Fe+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Fe+"+$","g");function Be(e,t,n){var r,i,o,a,s=Re.test(t),u=e.style;return(n=n||Me(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace($e,"$1")||void 0),""!==a||ie(e)||(a=E.style(e,t)),!v.pixelBoxStyles()&&Pe.test(a)&&We.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=S.createElement("div"),l=S.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===l.style.backgroundClip,E.extend(v,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=S.createElement("table"),t=S.createElement("tr"),n=S.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var ze=["Webkit","Moz","ms"],Ue=S.createElement("div").style,Xe={};function Ve(e){var t=E.cssProps[e]||Xe[e];return t||(e in Ue?e:Xe[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=ze.length;while(n--)if((e=ze[n]+t)in Ue)return e}(e)||e)}var Ge=/^(none|table(?!-c[ea]).+)/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=E.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=E.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=E.css(e,"border"+ne[a]+"Width",!0,i))):(u+=E.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=E.css(e,"border"+ne[a]+"Width",!0,i):s+=E.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Me(e),i=(!v.boxSizingReliable()||n)&&"border-box"===E.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!v.boxSizingReliable()&&i||!v.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===E.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===E.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}E.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Re.test(t),l=e.style;if(u||(t=Ve(s)),a=E.cssHooks[t]||E.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(E.cssNumber[s]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Re.test(t)||(t=Ve(s)),(a=E.cssHooks[t]||E.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),E.each(["height","width"],function(e,u){E.cssHooks[u]={get:function(e,t,n){if(t)return!Ge.test(E.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):Ie(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Me(e),o=!v.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===E.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=E.css(e,u)),Je(0,t,s)}}}),E.cssHooks.marginLeft=_e(v.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-Ie(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),E.each({margin:"",padding:"",border:"Width"},function(i,o){E.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(E.cssHooks[i+o].set=Je)}),E.fn.extend({css:function(e,t){return B(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Me(e),i=t.length;a<i;a++)o[t[a]]=E.css(e,t[a],!1,r);return o}return void 0!==n?E.style(e,t,n):E.css(e,t)},e,t,1<arguments.length)}}),((E.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||E.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(E.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=E.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=E.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){E.fx.step[e.prop]?E.fx.step[e.prop](e):1!==e.elem.nodeType||!E.cssHooks[e.prop]&&null==e.elem.style[Ve(e.prop)]?e.elem[e.prop]=e.now:E.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},E.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},E.fx=et.prototype.init,E.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===S.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,E.fx.interval),E.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=E.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:E.extend({},e),opts:E.extend(!0,{specialEasing:{},easing:E.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=E.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=E.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(E._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return E.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),E.fx.timer(E.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}E.Animation=E.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=Y.get(e,"fxshow");for(r in n.queue||(null==(a=E._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,E.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||E.style(e,r)}if((u=!E.isEmptyObject(t))||!E.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=Y.get(e,"display")),"none"===(c=E.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=E.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===E.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(y?"hidden"in y&&(g=y.hidden):y=Y.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)E.style(e,r,d[r])})),u=ct(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),E.speed=function(e,t,n){var r=e&&"object"==typeof e?E.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return E.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in E.fx.speeds?r.duration=E.fx.speeds[r.duration]:r.duration=E.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&E.dequeue(this,r.queue)},r},E.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=E.isEmptyObject(t),o=E.speed(e,n,r),a=function(){var e=ft(this,E.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=E.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||E.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=E.timers,o=n?n.length:0;for(t.finish=!0,E.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),E.each(["toggle","show","hide"],function(e,r){var i=E.fn[r];E.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),E.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){E.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),E.timers=[],E.fx.tick=function(){var e,t=0,n=E.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||E.fx.stop(),tt=void 0},E.fx.timer=function(e){E.timers.push(e),E.fx.start()},E.fx.interval=13,E.fx.start=function(){nt||(nt=!0,st())},E.fx.stop=function(){nt=null},E.fx.speeds={slow:600,fast:200,_default:400},E.fn.delay=function(r,e){return r=E.fx&&E.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=S.createElement("input"),it=S.createElement("select").appendChild(S.createElement("option")),rt.type="checkbox",v.checkOn=""!==rt.value,v.optSelected=it.selected,(rt=S.createElement("input")).value="t",rt.type="radio",v.radioValue="t"===rt.value;var pt,dt=E.expr.attrHandle;E.fn.extend({attr:function(e,t){return B(this,E.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){E.removeAttr(this,e)})}}),E.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?E.prop(e,t,n):(1===o&&E.isXMLDoc(e)||(i=E.attrHooks[t.toLowerCase()]||(E.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void E.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=E.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?E.removeAttr(e,n):e.setAttribute(n,n),n}},E.each(E.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||E.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function yt(e){return(e.match(P)||[]).join(" ")}function vt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}E.fn.extend({prop:function(e,t){return B(this,E.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[E.propFix[e]||e]})}}),E.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&E.isXMLDoc(e)||(t=E.propFix[t]||t,i=E.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=E.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),v.optSelected||(E.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),E.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){E.propFix[this.toLowerCase()]=this}),E.fn.extend({addClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){E(this).addClass(t.call(this,e,vt(this)))}):(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=yt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){E(this).removeClass(t.call(this,e,vt(this)))}):arguments.length?(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=yt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return m(t)?this.each(function(e){E(this).toggleClass(t.call(this,e,vt(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=mt(t),this.each(function(){if(s)for(o=E(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=vt(this))&&Y.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":Y.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+yt(vt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;E.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,E(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=E.map(t,function(e){return null==e?"":e+""})),(r=E.valHooks[this.type]||E.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=E.valHooks[t.type]||E.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),E.extend({valHooks:{option:{get:function(e){var t=E.find.attr(e,"value");return null!=t?t:yt(E.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=E(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=E.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<E.inArray(E.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),E.each(["radio","checkbox"],function(){E.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<E.inArray(E(e).val(),t)}},v.checkOn||(E.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),v.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};E.extend(E.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||S],d=y.call(e,"type")?e.type:e,h=y.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||S,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+E.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[E.expando]?e:new E.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:E.makeArray(t,[e]),c=E.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||S)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),E.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),E.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=E.extend(new E.Event,n,{type:e,isSimulated:!0});E.event.trigger(r,null,t)}}),E.fn.extend({trigger:function(e,t){return this.each(function(){E.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return E.event.trigger(e,t,n,!0)}}),v.focusin||E.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){E.event.simulate(r,e.target,E.event.fix(e))};E.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},St=/\?/;E.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||E.error("Invalid XML: "+(n?E.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Et=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function jt(n,e,r,i){var t;if(Array.isArray(e))E.each(e,function(e,t){r||Et.test(n)?i(n,t):jt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)jt(n+"["+t+"]",e[t],r,i)}E.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!E.isPlainObject(e))E.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},E.fn.extend({serialize:function(){return E.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=E.prop(this,"elements");return e?E.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!E(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=E(this).val();return null==n?null:Array.isArray(n)?E.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var Dt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=S.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function $t(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,E.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Bt(e,t){var n,r,i=E.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&E.extend(!0,e,r),e}Wt.href=Tt.href,E.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":E.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Bt(Bt(e,E.ajaxSettings),t):Bt(E.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,y=E.ajaxSetup({},t),v=y.context||y,m=y.context&&(v.nodeType||v.jquery)?E(v):E.event,x=E.Deferred(),b=E.Callbacks("once memory"),w=y.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(y.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),y.url=((e||y.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),y.type=t.method||t.type||y.method||y.type,y.dataTypes=(y.dataType||"*").toLowerCase().match(P)||[""],null==y.crossDomain){r=S.createElement("a");try{r.href=y.url,r.href=r.href,y.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){y.crossDomain=!0}}if(y.data&&y.processData&&"string"!=typeof y.data&&(y.data=E.param(y.data,y.traditional)),$t(Rt,y,t,T),h)return T;for(i in(g=E.event&&y.global)&&0==E.active++&&E.event.trigger("ajaxStart"),y.type=y.type.toUpperCase(),y.hasContent=!Ot.test(y.type),f=y.url.replace(qt,""),y.hasContent?y.data&&y.processData&&0===(y.contentType||"").indexOf("application/x-www-form-urlencoded")&&(y.data=y.data.replace(Dt,"+")):(o=y.url.slice(f.length),y.data&&(y.processData||"string"==typeof y.data)&&(f+=(St.test(f)?"&":"?")+y.data,delete y.data),!1===y.cache&&(f=f.replace(Lt,"$1"),o=(St.test(f)?"&":"?")+"_="+Ct.guid+++o),y.url=f+o),y.ifModified&&(E.lastModified[f]&&T.setRequestHeader("If-Modified-Since",E.lastModified[f]),E.etag[f]&&T.setRequestHeader("If-None-Match",E.etag[f])),(y.data&&y.hasContent&&!1!==y.contentType||t.contentType)&&T.setRequestHeader("Content-Type",y.contentType),T.setRequestHeader("Accept",y.dataTypes[0]&&y.accepts[y.dataTypes[0]]?y.accepts[y.dataTypes[0]]+("*"!==y.dataTypes[0]?", "+It+"; q=0.01":""):y.accepts["*"]),y.headers)T.setRequestHeader(i,y.headers[i]);if(y.beforeSend&&(!1===y.beforeSend.call(v,T,y)||h))return T.abort();if(u="abort",b.add(y.complete),T.done(y.success),T.fail(y.error),c=$t(Mt,y,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,y]),h)return T;y.async&&0<y.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},y.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(y,T,n)),!i&&-1<E.inArray("script",y.dataTypes)&&E.inArray("json",y.dataTypes)<0&&(y.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(y,s,T,i),i?(y.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(E.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(E.etag[f]=u)),204===e||"HEAD"===y.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(v,[o,l,T]):x.rejectWith(v,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,y,i?o:a]),b.fireWith(v,[T,l]),g&&(m.trigger("ajaxComplete",[T,y]),--E.active||E.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return E.get(e,t,n,"json")},getScript:function(e,t){return E.get(e,void 0,t,"script")}}),E.each(["get","post"],function(e,i){E[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),E.ajax(E.extend({url:e,type:i,dataType:r,data:t,success:n},E.isPlainObject(e)&&e))}}),E.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),E._evalUrl=function(e,t,n){return E.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){E.globalEval(e,t,n)}})},E.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=E(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){E(this).wrapInner(n.call(this,e))}):this.each(function(){var e=E(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){E(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){E(this).replaceWith(this.childNodes)}),this}}),E.expr.pseudos.hidden=function(e){return!E.expr.pseudos.visible(e)},E.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},E.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=E.ajaxSettings.xhr();v.cors=!!zt&&"withCredentials"in zt,v.ajax=zt=!!zt,E.ajaxTransport(function(i){var o,a;if(v.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),E.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),E.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return E.globalEval(e),e}}}),E.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),E.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=E("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),S.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;E.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||E.expando+"_"+Ct.guid++;return this[e]=!0,e}}),E.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||E.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?E(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),v.createHTMLDocument=((Ut=S.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),E.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(v.createHTMLDocument?((r=(t=S.implementation.createHTMLDocument("")).createElement("base")).href=S.location.href,t.head.appendChild(r)):t=S),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&E(o).remove(),E.merge([],i.childNodes)));var r,i,o},E.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=yt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&E.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?E("<div>").append(E.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},E.expr.pseudos.animated=function(t){return E.grep(E.timers,function(e){return t===e.elem}).length},E.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=E.css(e,"position"),c=E(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=E.css(e,"top"),u=E.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,E.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},E.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){E.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===E.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===E.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=E(e).offset()).top+=E.css(e,"borderTopWidth",!0),i.left+=E.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-E.css(r,"marginTop",!0),left:t.left-i.left-E.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===E.css(e,"position"))e=e.offsetParent;return e||re})}}),E.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;E.fn[t]=function(e){return B(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),E.each(["top","left"],function(e,n){E.cssHooks[n]=_e(v.pixelPosition,function(e,t){if(t)return t=Be(e,n),Pe.test(t)?E(e).position()[n]+"px":t})}),E.each({Height:"height",Width:"width"},function(a,s){E.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){E.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return B(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?E.css(e,t,i):E.style(e,t,n,i)},s,n?e:void 0,n)}})}),E.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){E.fn[t]=function(e){return this.on(t,e)}}),E.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){E.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;E.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||E.guid++,i},E.holdReady=function(e){e?E.readyWait++:E.ready(!0)},E.isArray=Array.isArray,E.parseJSON=JSON.parse,E.nodeName=A,E.isFunction=m,E.isWindow=x,E.camelCase=X,E.type=w,E.now=Date.now,E.isNumeric=function(e){var t=E.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},E.trim=function(e){return null==e?"":(e+"").replace(Gt,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return E});var Yt=C.jQuery,Qt=C.$;return E.noConflict=function(e){return C.$===E&&(C.$=Qt),e&&C.jQuery===E&&(C.jQuery=Yt),E},"undefined"==typeof e&&(C.jQuery=C.$=E),E});
;
/*! @drupal/once - v1.0.1 - 2021-06-12 */
var once=function(){"use strict";var n=/[\11\12\14\15\40]+/,e="data-once",t=document;function r(n,t,r){return n[t+"Attribute"](e,r)}function o(e){if("string"!=typeof e)throw new TypeError("once ID must be a string");if(""===e||n.test(e))throw new RangeError("once ID must not be empty or contain spaces");return'[data-once~="'+e+'"]'}function u(n){if(!(n instanceof Element))throw new TypeError("The element must be an instance of Element");return!0}function i(n,e){void 0===e&&(e=t);var r=n;if(null===n)r=[];else{if(!n)throw new TypeError("Selector must not be empty");"string"!=typeof n||e!==t&&!u(e)?n instanceof Element&&(r=[n]):r=e.querySelectorAll(n)}return Array.prototype.slice.call(r)}function c(n,e,t){return e.filter((function(e){var r=u(e)&&e.matches(n);return r&&t&&t(e),r}))}function f(e,t){var o=t.add,u=t.remove,i=[];r(e,"has")&&r(e,"get").trim().split(n).forEach((function(n){i.indexOf(n)<0&&n!==u&&i.push(n)})),o&&i.push(o);var c=i.join(" ");r(e,""===c?"remove":"set",c)}function a(n,e,t){return c(":not("+o(n)+")",i(e,t),(function(e){return f(e,{add:n})}))}return a.remove=function(n,e,t){return c(o(n),i(e,t),(function(e){return f(e,{remove:n})}))},a.filter=function(n,e,t){return c(o(n),i(e,t))},a.find=function(n,e){return i(n?o(n):"[data-once]",e)},a}();

;
/**
 * @file
 * Parse inline JSON and initialize the drupalSettings global object.
 */

(function () {
  // Use direct child elements to harden against XSS exploits when CSP is on.
  const settingsElement = document.querySelector(
    'head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]',
  );

  /**
   * Variable generated by Drupal with all the configuration created from PHP.
   *
   * @global
   *
   * @type {object}
   */
  window.drupalSettings = {};

  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();
;
/**
 * @file
 * Defines the Drupal JavaScript API.
 */

/**
 * A jQuery object, typically the return value from a `$(selector)` call.
 *
 * Holds an HTMLElement or a collection of HTMLElements.
 *
 * @typedef {object} jQuery
 *
 * @prop {number} length=0
 *   Number of elements contained in the jQuery object.
 */

/**
 * Variable generated by Drupal that holds all translated strings from PHP.
 *
 * Content of this variable is automatically created by Drupal when using the
 * Interface Translation module. It holds the translation of strings used on
 * the page.
 *
 * This variable is used to pass data from the backend to the frontend. Data
 * contained in `drupalSettings` is used during behavior initialization.
 *
 * @global
 *
 * @var {object} drupalTranslations
 */

/**
 * Global Drupal object.
 *
 * All Drupal JavaScript APIs are contained in this namespace.
 *
 * @global
 *
 * @namespace
 */
window.Drupal = { behaviors: {}, locale: {} };

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it in an anonymous closure.
(function (
  Drupal,
  drupalSettings,
  drupalTranslations,
  console,
  Proxy,
  Reflect,
) {
  /**
   * Helper to rethrow errors asynchronously.
   *
   * This way Errors bubbles up outside of the original callstack, making it
   * easier to debug errors in the browser.
   *
   * @param {Error|string} error
   *   The error to be thrown.
   */
  Drupal.throwError = function (error) {
    setTimeout(() => {
      throw error;
    }, 0);
  };

  /**
   * Custom error thrown after attach/detach if one or more behaviors failed.
   * Initializes the JavaScript behaviors for page loads and Ajax requests.
   *
   * @callback Drupal~behaviorAttach
   *
   * @param {HTMLDocument|HTMLElement} context
   *   An element to detach behaviors from.
   * @param {?object} settings
   *   An object containing settings for the current context. It is rarely used.
   *
   * @see Drupal.attachBehaviors
   */

  /**
   * Reverts and cleans up JavaScript behavior initialization.
   *
   * @callback Drupal~behaviorDetach
   *
   * @param {HTMLDocument|HTMLElement} context
   *   An element to attach behaviors to.
   * @param {object} settings
   *   An object containing settings for the current context.
   * @param {string} trigger
   *   One of `'unload'`, `'move'`, or `'serialize'`.
   *
   * @see Drupal.detachBehaviors
   */

  /**
   * @typedef {object} Drupal~behavior
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Function run on page load and after an Ajax call.
   * @prop {Drupal~behaviorDetach} [detach]
   *   Function run when content is serialized or removed from the page.
   */

  /**
   * Holds all initialization methods.
   *
   * @namespace Drupal.behaviors
   *
   * @type {Object.<string, Drupal~behavior>}
   */

  /**
   * Defines a behavior to be run during attach and detach phases.
   *
   * Attaches all registered behaviors to a page element.
   *
   * Behaviors are event-triggered actions that attach to page elements,
   * enhancing default non-JavaScript UIs. Behaviors are registered in the
   * {@link Drupal.behaviors} object using the method 'attach' and optionally
   * also 'detach'.
   *
   * {@link Drupal.attachBehaviors} is added below to the `jQuery.ready` event
   * and therefore runs on initial page load. Developers implementing Ajax in
   * their solutions should also call this function after new page content has
   * been loaded, feeding in an element to be processed, in order to attach all
   * behaviors to the new content.
   *
   * Behaviors should use `var elements =
   * once('behavior-name', selector, context);` to ensure the behavior is
   * attached only once to a given element. (Doing so enables the reprocessing
   * of given elements, which may be needed on occasion despite the ability to
   * limit behavior attachment to a particular element.)
   *
   * @example
   * Drupal.behaviors.behaviorName = {
   *   attach: function (context, settings) {
   *     // ...
   *   },
   *   detach: function (context, settings, trigger) {
   *     // ...
   *   }
   * };
   *
   * @param {HTMLDocument|HTMLElement} [context=document]
   *   An element to attach behaviors to.
   * @param {object} [settings=drupalSettings]
   *   An object containing settings for the current context. If none is given,
   *   the global {@link drupalSettings} object is used.
   *
   * @see Drupal~behaviorAttach
   * @see Drupal.detachBehaviors
   *
   * @throws {Drupal~DrupalBehaviorError}
   */
  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    const behaviors = Drupal.behaviors;
    // Execute all of them.
    Object.keys(behaviors || {}).forEach((i) => {
      if (typeof behaviors[i].attach === 'function') {
        // Don't stop the execution of behaviors in case of an error.
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  /**
   * Detaches registered behaviors from a page element.
   *
   * Developers implementing Ajax in their solutions should call this function
   * before page content is about to be removed, feeding in an element to be
   * processed, in order to allow special behaviors to detach from the content.
   *
   * Such implementations should use `once.filter()` and `once.remove()` to find
   * elements with their corresponding `Drupal.behaviors.behaviorName.attach`
   * implementation, i.e. `once.remove('behaviorName', selector, context)`,
   * to ensure the behavior is detached only from previously processed elements.
   *
   * @param {HTMLDocument|HTMLElement} [context=document]
   *   An element to detach behaviors from.
   * @param {object} [settings=drupalSettings]
   *   An object containing settings for the current context. If none given,
   *   the global {@link drupalSettings} object is used.
   * @param {string} [trigger='unload']
   *   A string containing what's causing the behaviors to be detached. The
   *   possible triggers are:
   *   - `'unload'`: The context element is being removed from the DOM.
   *   - `'move'`: The element is about to be moved within the DOM (for example,
   *     during a tabledrag row swap). After the move is completed,
   *     {@link Drupal.attachBehaviors} is called, so that the behavior can undo
   *     whatever it did in response to the move. Many behaviors won't need to
   *     do anything simply in response to the element being moved, but because
   *     IFRAME elements reload their "src" when being moved within the DOM,
   *     behaviors bound to IFRAME elements (like WYSIWYG editors) may need to
   *     take some action.
   *   - `'serialize'`: When an Ajax form is submitted, this is called with the
   *     form as the context. This provides every behavior within the form an
   *     opportunity to ensure that the field elements have correct content
   *     in them before the form is serialized. The canonical use-case is so
   *     that WYSIWYG editors can update the hidden textarea to which they are
   *     bound.
   *
   * @throws {Drupal~DrupalBehaviorError}
   *
   * @see Drupal~behaviorDetach
   * @see Drupal.attachBehaviors
   */
  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    const behaviors = Drupal.behaviors;
    // Execute all of them.
    Object.keys(behaviors || {}).forEach((i) => {
      if (typeof behaviors[i].detach === 'function') {
        // Don't stop the execution of behaviors in case of an error.
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  /**
   * Encodes special characters in a plain-text string for display as HTML.
   *
   * @param {string} str
   *   The string to be encoded.
   *
   * @return {string}
   *   The encoded string.
   *
   * @ingroup sanitization
   */
  Drupal.checkPlain = function (str) {
    str = str
      .toString()
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
    return str;
  };

  /**
   * Replaces placeholders with sanitized values in a string.
   *
   * @param {string} str
   *   A string with placeholders.
   * @param {object} args
   *   An object of replacements pairs to make. Incidences of any key in this
   *   array are replaced with the corresponding value. Based on the first
   *   character of the key, the value is escaped and/or themed:
   *    - `'!variable'`: inserted as is.
   *    - `'@variable'`: escape plain text to HTML ({@link Drupal.checkPlain}).
   *    - `'%variable'`: escape text and theme as a placeholder for user-
   *      submitted content ({@link Drupal.checkPlain} +
   *      `{@link Drupal.theme}('placeholder')`).
   *
   * @return {string}
   *   The formatted string.
   *
   * @see Drupal.t
   */
  Drupal.formatString = function (str, args) {
    // Keep args intact.
    const processedArgs = {};
    // Transform arguments before inserting them.
    Object.keys(args || {}).forEach((key) => {
      switch (key.charAt(0)) {
        // Escaped only.
        case '@':
          processedArgs[key] = Drupal.checkPlain(args[key]);
          break;

        // Pass-through.
        case '!':
          processedArgs[key] = args[key];
          break;

        // Escaped and placeholder.
        default:
          processedArgs[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    });

    return Drupal.stringReplace(str, processedArgs, null);
  };

  /**
   * Replaces substring.
   *
   * The longest keys will be tried first. Once a substring has been replaced,
   * its new value will not be searched again.
   *
   * @param {string} str
   *   A string with placeholders.
   * @param {object} args
   *   Key-value pairs.
   * @param {Array|null} keys
   *   Array of keys from `args`. Internal use only.
   *
   * @return {string}
   *   The replaced string.
   */
  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    // If the array of keys is not passed then collect the keys from the args.
    if (!Array.isArray(keys)) {
      keys = Object.keys(args || {});

      // Order the keys by the character length. The shortest one is the first.
      keys.sort((a, b) => a.length - b.length);
    }

    if (keys.length === 0) {
      return str;
    }

    // Take next longest one from the end.
    const key = keys.pop();
    const fragments = str.split(key);

    if (keys.length) {
      for (let i = 0; i < fragments.length; i++) {
        // Process each fragment with a copy of remaining keys.
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

  /**
   * Translates strings to the page language, or a given language.
   *
   * See the documentation of the server-side t() function for further details.
   *
   * @param {string} str
   *   A string containing the English text to translate.
   * @param {Object.<string, string>} [args]
   *   An object of replacements pairs to make after translation. Incidences
   *   of any key in this array are replaced with the corresponding value.
   *   See {@link Drupal.formatString}.
   * @param {object} [options]
   *   Additional options for translation.
   * @param {string} [options.context='']
   *   The context the source string belongs to.
   *
   * @return {string}
   *   The formatted string.
   *   The translated string.
   */
  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';

    // Fetch the localized version of the string.
    if (
      typeof drupalTranslations !== 'undefined' &&
      drupalTranslations.strings &&
      drupalTranslations.strings[options.context] &&
      drupalTranslations.strings[options.context][str]
    ) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }
    return str;
  };

  /**
   * Returns the URL to a Drupal page.
   *
   * @param {string} path
   *   Drupal path to transform to URL.
   *
   * @return {string}
   *   The full URL.
   */
  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };

  /**
   * Returns the passed in URL as an absolute URL.
   *
   * @param {string} url
   *   The URL string to be normalized to an absolute URL.
   *
   * @return {string}
   *   The normalized, absolute URL.
   *
   * @see https://github.com/angular/angular.js/blob/v1.4.4/src/ng/urlUtils.js
   * @see https://grack.com/blog/2009/11/17/absolutizing-url-in-javascript
   * @see https://github.com/jquery/jquery-ui/blob/1.11.4/ui/tabs.js#L53
   */
  Drupal.url.toAbsolute = function (url) {
    const urlParsingNode = document.createElement('a');

    // Decode the URL first; this is required by IE <= 6. Decoding non-UTF-8
    // strings may throw an exception.
    try {
      url = decodeURIComponent(url);
    } catch (e) {
      // Empty.
    }

    urlParsingNode.setAttribute('href', url);

    // IE <= 7 normalizes the URL when assigned to the anchor node similar to
    // the other browsers.
    return urlParsingNode.cloneNode(false).href;
  };

  /**
   * Returns true if the URL is within Drupal's base path.
   *
   * @param {string} url
   *   The URL string to be tested.
   *
   * @return {boolean}
   *   `true` if local.
   *
   * @see https://github.com/jquery/jquery-ui/blob/1.11.4/ui/tabs.js#L58
   */
  Drupal.url.isLocal = function (url) {
    // Always use browser-derived absolute URLs in the comparison, to avoid
    // attempts to break out of the base path using directory traversal.
    let absoluteUrl = Drupal.url.toAbsolute(url);
    let { protocol } = window.location;

    // Consider URLs that match this site's base URL but use HTTPS instead of HTTP
    // as local as well.
    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }
    let baseUrl = `${protocol}//${
      window.location.host
    }${drupalSettings.path.baseUrl.slice(0, -1)}`;

    // Decoding non-UTF-8 strings may throw an exception.
    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {
      // Empty.
    }
    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {
      // Empty.
    }

    // The given URL matches the site's base URL, or has a path under the site's
    // base URL.
    return absoluteUrl === baseUrl || absoluteUrl.indexOf(`${baseUrl}/`) === 0;
  };

  /**
   * Formats a string containing a count of items.
   *
   * This function ensures that the string is pluralized correctly. Since
   * {@link Drupal.t} is called by this function, make sure not to pass
   * already-localized strings to it.
   *
   * See the documentation of the server-side
   * \Drupal\Core\StringTranslation\TranslationInterface::formatPlural()
   * function for more details.
   *
   * @param {number} count
   *   The item count to display.
   * @param {string} singular
   *   The string for the singular case. Please make sure it is clear this is
   *   singular, to ease translation (e.g. use "1 new comment" instead of "1
   *   new"). Do not use @count in the singular string.
   * @param {string} plural
   *   The string for the plural case. Please make sure it is clear this is
   *   plural, to ease translation. Use @count in place of the item count, as in
   *   "@count new comments".
   * @param {object} [args]
   *   An object of replacements pairs to make after translation. Incidences
   *   of any key in this array are replaced with the corresponding value.
   *   See {@link Drupal.formatString}.
   *   Note that you do not need to include @count in this array.
   *   This replacement is done automatically for the plural case.
   * @param {object} [options]
   *   The options to pass to the {@link Drupal.t} function.
   *
   * @return {string}
   *   A translated string.
   */
  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;

    const pluralDelimiter = drupalSettings.pluralDelimiter;
    const translations = Drupal.t(
      singular + pluralDelimiter + plural,
      args,
      options,
    ).split(pluralDelimiter);
    let index = 0;

    // Determine the index of the plural form.
    if (
      typeof drupalTranslations !== 'undefined' &&
      drupalTranslations.pluralFormula
    ) {
      index =
        count in drupalTranslations.pluralFormula
          ? drupalTranslations.pluralFormula[count]
          : drupalTranslations.pluralFormula.default;
    } else if (args['@count'] !== 1) {
      index = 1;
    }

    return translations[index];
  };

  /**
   * Encodes a Drupal path for use in a URL.
   *
   * For aesthetic reasons slashes are not escaped.
   *
   * @param {string} item
   *   Unencoded path.
   *
   * @return {string}
   *   The encoded path.
   */
  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };

  /**
   * Triggers deprecation error.
   *
   * Deprecation errors are only triggered if deprecation errors haven't
   * been suppressed.
   *
   * @param {Object} deprecation
   *   The deprecation options.
   * @param {string} deprecation.message
   *   The deprecation message.
   *
   * @see https://www.drupal.org/core/deprecation#javascript
   */
  Drupal.deprecationError = ({ message }) => {
    if (
      drupalSettings.suppressDeprecationErrors === false &&
      typeof console !== 'undefined' &&
      console.warn
    ) {
      console.warn(`[Deprecation] ${message}`);
    }
  };

  /**
   * Triggers deprecation error when object property is being used.
   *
   * @param {Object} deprecation
   *   The deprecation options.
   * @param {Object} deprecation.target
   *   The targeted object.
   * @param {string} deprecation.deprecatedProperty
   *   A key of the deprecated property.
   * @param {string} deprecation.message
   *   The deprecation message.
   * @returns {Object}
   *
   * @see https://www.drupal.org/core/deprecation#javascript
   */
  Drupal.deprecatedProperty = ({ target, deprecatedProperty, message }) => {
    // Proxy and Reflect are not supported by all browsers. Unsupported browsers
    // are ignored since this is a development feature.
    if (!Proxy || !Reflect) {
      return target;
    }

    return new Proxy(target, {
      get: (target, key, ...rest) => {
        if (key === deprecatedProperty) {
          Drupal.deprecationError({ message });
        }
        return Reflect.get(target, key, ...rest);
      },
    });
  };

  /**
   * Generates the themed representation of a Drupal object.
   *
   * All requests for themed output must go through this function. It examines
   * the request and routes it to the appropriate theme function. If the current
   * theme does not provide an override function, the generic theme function is
   * called.
   *
   * @example
   * <caption>To retrieve the HTML for text that should be emphasized and
   * displayed as a placeholder inside a sentence.</caption>
   * Drupal.theme('placeholder', text);
   *
   * @namespace
   *
   * @param {function} func
   *   The name of the theme function to call.
   * @param {...args}
   *   Additional arguments to pass along to the theme function.
   *
   * @return {string|object|HTMLElement|jQuery}
   *   Any data the theme function returns. This could be a plain HTML string,
   *   but also a complex object.
   */
  Drupal.theme = function (func, ...args) {
    if (func in Drupal.theme) {
      return Drupal.theme[func](...args);
    }
  };

  /**
   * Formats text for emphasized display in a placeholder inside a sentence.
   *
   * @param {string} str
   *   The text to format (plain-text).
   *
   * @return {string}
   *   The formatted text (html).
   */
  Drupal.theme.placeholder = function (str) {
    return `<em class="placeholder">${Drupal.checkPlain(str)}</em>`;
  };
})(
  Drupal,
  window.drupalSettings,
  window.drupalTranslations,
  window.console,
  window.Proxy,
  window.Reflect,
);
;
// Allow other JavaScript libraries to use $.
if (window.jQuery) {
  jQuery.noConflict();
}

// Class indicating that JS is enabled; used for styling purpose.
document.documentElement.className += ' js';

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it in an anonymous closure.
(function (Drupal, drupalSettings) {
  /**
   * Calls callback when document ready.
   *
   * @param {function} callback
   *   The function to be called on document ready.
   */
  const domReady = (callback) => {
    const listener = () => {
      callback();
      document.removeEventListener('DOMContentLoaded', listener);
    };
    if (document.readyState !== 'loading') {
      setTimeout(callback, 0);
    } else {
      document.addEventListener('DOMContentLoaded', listener);
    }
  };

  // Attach all behaviors.
  domReady(() => {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(Drupal, window.drupalSettings);
;
/*!
* tabbable 6.0.1
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):(e="undefined"!=typeof globalThis?globalThis:e||self,function(){var n=e.tabbable,o=e.tabbable={};t(o),o.noConflict=function(){return e.tabbable=n,o}}())}(this,(function(e){"use strict";var t=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],n=t.join(","),o="undefined"==typeof Element,r=o?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,a=!o&&Element.prototype.getRootNode?function(e){return e.getRootNode()}:function(e){return e.ownerDocument},i=function(e,t,o){var a=Array.prototype.slice.apply(e.querySelectorAll(n));return t&&r.call(e,n)&&a.unshift(e),a=a.filter(o)},l=function e(t,o,a){for(var i=[],l=Array.from(t);l.length;){var u=l.shift();if("SLOT"===u.tagName){var c=u.assignedElements(),d=e(c.length?c:u.children,!0,a);a.flatten?i.push.apply(i,d):i.push({scopeParent:u,candidates:d})}else{r.call(u,n)&&a.filter(u)&&(o||!t.includes(u))&&i.push(u);var f=u.shadowRoot||"function"==typeof a.getShadowRoot&&a.getShadowRoot(u),s=!a.shadowRootFilter||a.shadowRootFilter(u);if(f&&s){var p=e(!0===f?u.children:f.children,!0,a);a.flatten?i.push.apply(i,p):i.push({scopeParent:u,candidates:p})}else l.unshift.apply(l,u.children)}}return i},u=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},c=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},d=function(e){return"INPUT"===e.tagName},f=function(e){return function(e){return d(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||a(e),o=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=o(window.CSS.escape(e.name));else try{t=o(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var r=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!r||r===e}(e)},s=function(e){var t=e.getBoundingClientRect(),n=t.width,o=t.height;return 0===n&&0===o},p=function(e,t){var n=t.displayCheck,o=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var i=r.call(e,"details>summary:first-of-type")?e.parentElement:e;if(r.call(i,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return s(e)}else{if("function"==typeof o){for(var l=e;e;){var u=e.parentElement,c=a(e);if(u&&!u.shadowRoot&&!0===o(u))return s(e);e=e.assignedSlot?e.assignedSlot:u||c===e.ownerDocument?u:c.host}e=l}if(function(e){for(var t,n=a(e).host,o=!!(null!==(t=n)&&void 0!==t&&t.ownerDocument.contains(n)||e.ownerDocument.contains(e));!o&&n;){var r;o=!(null===(r=n=a(n).host)||void 0===r||!r.ownerDocument.contains(n))}return o}(e))return!e.getClientRects().length;if("legacy-full"!==n)return!0}return!1},h=function(e,t){return!(t.disabled||function(e){return d(e)&&"hidden"===e.type}(t)||p(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var o=t.children.item(n);if("LEGEND"===o.tagName)return!!r.call(t,"fieldset[disabled] *")||!o.contains(e)}return!0}t=t.parentElement}return!1}(t))},m=function(e,t){return!(f(t)||u(t)<0||!h(e,t))},b=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},y=function e(t){var n=[],o=[];return t.forEach((function(t,r){var a=!!t.scopeParent,i=a?t.scopeParent:t,l=u(i,a),c=a?e(t.candidates):i;0===l?a?n.push.apply(n,c):n.push(i):o.push({documentOrder:r,tabIndex:l,item:t,isScope:a,content:c})})),o.sort(c).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)},g=t.concat("iframe").join(",");e.focusable=function(e,t){return(t=t||{}).getShadowRoot?l([e],t.includeContainer,{filter:h.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):i(e,t.includeContainer,h.bind(null,t))},e.isFocusable=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==r.call(e,g)&&h(t,e)},e.isTabbable=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==r.call(e,n)&&m(t,e)},e.tabbable=function(e,t){var n;return n=(t=t||{}).getShadowRoot?l([e],t.includeContainer,{filter:m.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:b}):i(e,t.includeContainer,m.bind(null,t)),y(n)},Object.defineProperty(e,"__esModule",{value:!0})}));

;
/**
 * @file
 * Customization of checkbox.
 */

((Drupal) => {
  /**
   * Constructs a checkbox input element.
   *
   * @return {string}
   *   A string representing a DOM fragment.
   */
  Drupal.theme.checkbox = () =>
    '<input type="checkbox" class="form-checkbox form-boolean form-boolean--type-checkbox"/>';
})(Drupal);
;
/**
 * @file
 * Controls the visibility of desktop navigation.
 *
 * Shows and hides the desktop navigation based on scroll position and controls
 * the functionality of the button that shows/hides the navigation.
 */

/* eslint-disable no-inner-declarations */
((Drupal) => {
  /**
   * Olivero helper functions.
   *
   * @namespace
   */
  Drupal.olivero = {};

  /**
   * Checks if the mobile navigation button is visible.
   *
   * @return {boolean}
   *   True if navButtons is hidden, false if not.
   */
  function isDesktopNav() {
    const navButtons = document.querySelector(
      '[data-drupal-selector="mobile-buttons"]',
    );
    return navButtons
      ? window.getComputedStyle(navButtons).getPropertyValue('display') ===
          'none'
      : false;
  }

  Drupal.olivero.isDesktopNav = isDesktopNav;

  const stickyHeaderToggleButton = document.querySelector(
    '[data-drupal-selector="sticky-header-toggle"]',
  );
  const siteHeaderFixable = document.querySelector(
    '[data-drupal-selector="site-header-fixable"]',
  );

  /**
   * Checks if the sticky header is enabled.
   *
   * @return {boolean}
   *   True if sticky header is enabled, false if not.
   */
  function stickyHeaderIsEnabled() {
    return stickyHeaderToggleButton.getAttribute('aria-checked') === 'true';
  }

  /**
   * Save the current sticky header expanded state to localStorage, and set
   * it to expire after two weeks.
   *
   * @param {boolean} expandedState
   *   Current state of the sticky header button.
   */
  function setStickyHeaderStorage(expandedState) {
    const now = new Date();

    const item = {
      value: expandedState,
      expiry: now.getTime() + 20160000, // 2 weeks from now.
    };
    localStorage.setItem(
      'Drupal.olivero.stickyHeaderState',
      JSON.stringify(item),
    );
  }

  /**
   * Toggle the state of the sticky header between always pinned and
   * only pinned when scrolled to the top of the viewport.
   *
   * @param {boolean} pinnedState
   *   State to change the sticky header to.
   */
  function toggleStickyHeaderState(pinnedState) {
    if (isDesktopNav()) {
      if (pinnedState === true) {
        siteHeaderFixable.classList.add('is-expanded');
      } else {
        siteHeaderFixable.classList.remove('is-expanded');
      }

      stickyHeaderToggleButton.setAttribute('aria-checked', pinnedState);
      setStickyHeaderStorage(pinnedState);
    }
  }

  /**
   * Return the sticky header's stored state from localStorage.
   *
   * @return {boolean}
   *   Stored state of the sticky header.
   */
  function getStickyHeaderStorage() {
    const stickyHeaderState = localStorage.getItem(
      'Drupal.olivero.stickyHeaderState',
    );

    if (!stickyHeaderState) return false;

    const item = JSON.parse(stickyHeaderState);
    const now = new Date();

    // Compare the expiry time of the item with the current time.
    if (now.getTime() > item.expiry) {
      // If the item is expired, delete the item from storage and return null.
      localStorage.removeItem('Drupal.olivero.stickyHeaderState');
      return false;
    }
    return item.value;
  }

  // Only enable scroll interactivity if the browser supports Intersection
  // Observer.
  // @see https://github.com/w3c/IntersectionObserver/blob/master/polyfill/intersection-observer.js#L19-L21
  if (
    'IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype
  ) {
    const fixableElements = document.querySelectorAll(
      '[data-drupal-selector="site-header-fixable"], [data-drupal-selector="social-bar-inner"]',
    );

    function toggleDesktopNavVisibility(entries) {
      if (!isDesktopNav()) return;

      entries.forEach((entry) => {
        // Firefox doesn't seem to support entry.isIntersecting properly,
        // so we check the intersectionRatio.
        if (entry.intersectionRatio < 1) {
          fixableElements.forEach((el) => el.classList.add('is-fixed'));
        } else {
          fixableElements.forEach((el) => el.classList.remove('is-fixed'));
        }
      });
    }

    /**
     * Gets the root margin by checking for various toolbar classes.
     *
     * @return {string}
     *   Root margin for the Intersection Observer options object.
     */
    function getRootMargin() {
      let rootMarginTop = 72;
      const { body } = document;

      if (body.classList.contains('toolbar-fixed')) {
        rootMarginTop -= 39;
      }

      if (
        body.classList.contains('toolbar-horizontal') &&
        body.classList.contains('toolbar-tray-open')
      ) {
        rootMarginTop -= 40;
      }

      return `${rootMarginTop}px 0px 0px 0px`;
    }

    /**
     * Monitor the navigation position.
     */
    function monitorNavPosition() {
      const primaryNav = document.querySelector(
        '[data-drupal-selector="site-header"]',
      );
      const options = {
        rootMargin: getRootMargin(),
        threshold: [0.999, 1],
      };

      const observer = new IntersectionObserver(
        toggleDesktopNavVisibility,
        options,
      );

      if (primaryNav) {
        observer.observe(primaryNav);
      }
    }

    if (stickyHeaderToggleButton) {
      stickyHeaderToggleButton.addEventListener('click', () => {
        toggleStickyHeaderState(!stickyHeaderIsEnabled());
      });
    }

    // If header is pinned open and a header element gains focus, scroll to the
    // top of the page to ensure that the header elements can be seen.
    const siteHeaderInner = document.querySelector(
      '[data-drupal-selector="site-header-inner"]',
    );
    if (siteHeaderInner) {
      siteHeaderInner.addEventListener('focusin', () => {
        if (isDesktopNav() && !stickyHeaderIsEnabled()) {
          const header = document.querySelector(
            '[data-drupal-selector="site-header"]',
          );
          const headerNav = header.querySelector(
            '[data-drupal-selector="header-nav"]',
          );
          const headerMargin = header.clientHeight - headerNav.clientHeight;
          if (window.scrollY > headerMargin) {
            window.scrollTo(0, headerMargin);
          }
        }
      });
    }

    monitorNavPosition();
    setStickyHeaderStorage(getStickyHeaderStorage());
    toggleStickyHeaderState(getStickyHeaderStorage());
  }
})(Drupal);
;
/**
 * @file
 * Attaches behaviors for Drupal's active link marking.
 */

(function (Drupal, drupalSettings) {
  /**
   * Append is-active class.
   *
   * The link is only active if its path corresponds to the current path, the
   * language of the linked path is equal to the current language, and if the
   * query parameters of the link equal those of the current request, since the
   * same request with different query parameters may yield a different page
   * (e.g. pagers, exposed View filters).
   *
   * Does not discriminate based on element type, so allows you to set the
   * is-active class on any element: a, li…
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.activeLinks = {
    attach(context) {
      // Start by finding all potentially active links.
      const path = drupalSettings.path;
      const queryString = JSON.stringify(path.currentQuery);
      const querySelector = path.currentQuery
        ? `[data-drupal-link-query='${queryString}']`
        : ':not([data-drupal-link-query])';
      const originalSelectors = [
        `[data-drupal-link-system-path="${path.currentPath}"]`,
      ];
      let selectors;

      // If this is the front page, we have to check for the <front> path as
      // well.
      if (path.isFront) {
        originalSelectors.push('[data-drupal-link-system-path="<front>"]');
      }

      // Add language filtering.
      selectors = [].concat(
        // Links without any hreflang attributes (most of them).
        originalSelectors.map((selector) => `${selector}:not([hreflang])`),
        // Links with hreflang equals to the current language.
        originalSelectors.map(
          (selector) => `${selector}[hreflang="${path.currentLanguage}"]`,
        ),
      );

      // Add query string selector for pagers, exposed filters.
      selectors = selectors.map((current) => current + querySelector);

      // Query the DOM.
      const activeLinks = context.querySelectorAll(selectors.join(','));
      const il = activeLinks.length;
      for (let i = 0; i < il; i++) {
        activeLinks[i].classList.add('is-active');
      }
    },
    detach(context, settings, trigger) {
      if (trigger === 'unload') {
        const activeLinks = context.querySelectorAll(
          '[data-drupal-link-system-path].is-active',
        );
        const il = activeLinks.length;
        for (let i = 0; i < il; i++) {
          activeLinks[i].classList.remove('is-active');
        }
      }
    },
  };
})(Drupal, drupalSettings);
;
(function ($, Drupal) {
  'use strict';

  /**
   * @file
   * Defines Imce File Manager.
   */

  /**
   * Global container.
   */
  var imce = window.imce = {
    // Configuration options
    conf: {},
    // Locally stored data
    local: {},
    // Events
    events: {},
    // Shortcuts
    shortcuts: {fm: {}, tree: {}, content: {}},
    // Toolbar buttons
    toolbarButtons: {},
    // Folder tree
    tree: {},
    // Currently selected items
    selection: [],
    // Message queue
    messageQueue: [],
    // Sort handlers
    sorters: {}
  };

  /**
   * Initiate imce on document ready.
   */
  $(function () {

    var settings = window.drupalSettings;
    var conf = settings && settings.imce;
    var body = document.body;
    if (conf && !imce.activeFolder && $(body).hasClass('imce-page')) {
      if (!conf.ajax_url) {
        conf.ajax_url = Drupal.url(settings.path.currentPath);
      }
      imce.init(conf, body);
    }
  });

  /**
   * Initialize imce.
   */
  imce.init = function (conf, parentEl) {
    // Set conf
    conf = $.extend(imce.conf, conf);
    if (!conf.ajax_url || !conf.folders || !conf.root_url) {
      return;
    }
    imce.parentEl = parentEl;
    // Get stored data
    try {
      $.extend(imce.local, JSON.parse(localStorage.getItem('imce.local')));
    }
    catch (err) {
      imce.delayError(err);
    }
    // Init
    imce.trigger('preinit');
    imce.checkIntegration();
    imce.initUI();
    imce.initTree();
    // Add shortcuts
    imce.addShortcut('ENTER', imce.eTreeEnter, 'tree');
    imce.addShortcut('UP', imce.eTreeUp, 'tree');
    imce.addShortcut('DOWN', imce.eTreeDown, 'tree');
    imce.addShortcut('LEFT', imce.eTreeLR, 'tree');
    imce.addShortcut('RIGHT', imce.eTreeLR, 'tree');
    imce.addShortcut('ENTER', imce.eContentEnter, 'content');
    imce.addShortcut('UP', imce.eContentArrow, 'content');
    imce.addShortcut('DOWN', imce.eContentArrow, 'content');
    imce.addShortcut('LEFT', imce.eContentArrow, 'content');
    imce.addShortcut('RIGHT', imce.eContentArrow, 'content');
    imce.addShortcut('Ctrl+A', imce.eContentCtrlA, 'content');
    // Add refresh button
    imce.addTbb('refresh', {
      title: Drupal.t('Refresh'),
      permission: 'browse_files|browse_subfolders',
      handler: imce.eFmRefresh,
      shortcut: 'F5',
      icon: 'refresh'
    });
    // Register default activeFolder handler
    imce.bind('activateFolder', imce.defaultActivateFolder);
    // Trigger init handlers
    imce.trigger('init');
    // Create sendto toolbar button if needed.
    imce.createSendtoTbb();
    // Add the file manager to the page
    parentEl.appendChild(imce.fmEl);
    // Set window events
    $(window).on('beforeunload', imce.eWinBeforeunload).on('resize', imce.eWinResize);
    imce.eWinResize();
    // Content focus
    imce.contentEl.focus();
    // Set initial messages
    imce.ajaxProcessMessages(conf);
    // Open active path
    var path = conf.active_path;
    var Folder = path && imce.addFolder(path);
    if (!Folder) {
      for (path in conf.folders) {
        if (Folder = imce.getFolder(path)) {
          break;
        }
      }
    }
    if (Folder) {
      Folder.open();
    }
    // Triger postinit
    imce.trigger('postinit');
  };

  /**
   * Init UI elements.
   */
  imce.initUI = function () {
    var el = imce.fmEl;
    var createEl = imce.createEl;
    if (el) {
      return el;
    }
    el = imce.fmEl = createEl('<div id="imce-fm"></div>');
    el.onkeydown = imce.eFmKeydown;
    el.tabIndex = 0;
    // Toolbar
    el.appendChild(imce.toolbarEl = createEl('<div id="imce-toolbar" aria-label="Operations" role="toolbar"></div>'));
    // Body
    el.appendChild(imce.bodyEl = createEl('<div id="imce-body"></div>'));
    // Tree
    el = imce.treeEl = createEl('<div id="imce-tree"></div>');
    el.onkeydown = imce.eTreeKeydown;
    el.onmousedown = imce.eTreeMousedown;
    el.ontouchstart = imce.eTreeTouchstart;
    el.tabIndex = 0;
    imce.bodyEl.appendChild(el);
    // Tree resizer
    el = imce.treeResizerEl = createEl('<div id="imce-tree-resizer"></div>');
    el.onmousedown = imce.eTreeResizerMousedown;
    el.ontouchstart = imce.eTreeResizerTouchstart;
    imce.bodyEl.appendChild(el);
    // Content
    el = imce.contentEl = createEl('<div id="imce-content"></div>');
    if (imce.conf.thumbnail_grid_style) {
      el.className = 'thumbnail-grid';
    }
    el.onmousedown = imce.eContentMousedown;
    el.ontouchstart = imce.eContentTouchstart;
    el.onkeydown = imce.eContentKeydown;
    el.onscroll = imce.eContentScroll;
    el.tabIndex = 0;
    imce.bodyEl.appendChild(el);
    // Content header
    el = imce.contentHeaderEl = imce.createEl('<div class="imce-content-header"><div class="imce-item"><div class="imce-item-date" data-sort="date">' + Drupal.t('Date') + '</div><div class="imce-item-height" data-sort="height">' + Drupal.t('Height') + '</div><div class="imce-item-width" data-sort="width">' + Drupal.t('Width') + '</div><div class="imce-item-size" data-sort="size">' + Drupal.t('Size') + '</div><div class="imce-item-icon imce-ficon" data-sort="ext"></div><div class="imce-item-name" data-sort="name">' + Drupal.t('Name') + '</div></div></div>');
    el.onclick = imce.eContentHeaderClick;
    imce.contentEl.appendChild(el);
    // Content status
    el = imce.contentStatusEl = imce.createEl('<div class="imce-content-status"></div>');
    imce.contentEl.appendChild(el);
    // Body resizer
    el = imce.bodyResizerEl = createEl('<div id="imce-body-resizer"></div>');
    el.onmousedown = imce.eBodyResizerMousedown;
    el.ontouchstart = imce.eBodyResizerTouchstart;
    imce.fmEl.appendChild(el);
    // Preview
    imce.fmEl.appendChild(imce.previewEl = createEl('<div id="imce-preview"></div>'));
    return el;
  };

  /**
   * Init folder tree.
   */
  imce.initTree = function () {
    var path;
    var folders = imce.getConf('folders');
    // Create root
    var scheme = imce.getConf('scheme');
    var root = new imce.Folder(scheme ? scheme + '://' : '<' + Drupal.t('root') + '>');
    root.setPath('.');
    root.branchEl.className += ' root';
    imce.treeEl.appendChild(root.branchEl);
    // Create predefined folders in alphabetical order.
    var paths = [];
    for (path in folders) {
      if (imce.owns(folders, path)) {
        paths.push(path);
      }
    }
    paths.sort();
    for (var i = 0; path = paths[i]; i++) {
      imce.addFolder(path, folders[path]);
    }
  };

  /**
   * Returns a folder by path.
   */
  imce.getFolder = function (path) {
    if (imce.owns(imce.tree, path)) {
      return imce.tree[path];
    }
  };

  /**
   * Returns an item by path.
   */
  imce.getItem = function (path) {
    var Folder;
    var parts = imce.splitPath(path);
    if (parts) {
      if (Folder = imce.getFolder(parts[0])) {
        return Folder.getItem(parts[1]);
      }
    }
  };

  /**
   * Adds a folder to the tree.
   */
  imce.addFolder = function (path, conf) {
    var parts;
    var parent;
    var Folder = imce.getFolder(path);
    // Existing
    if (Folder) {
      if (conf) {
        Folder.setConf(conf);
      }
      return Folder;
    }
    // New. Append to the parent.
    if (parts = imce.splitPath(path)) {
      if (parent = imce.addFolder(parts[0])) {
        Folder = new imce.Folder(parts[1], conf);
        parent.appendItem(Folder);
        return Folder;
      }
    }
  };

  /**
   * Add a toolbar button.
   */
  imce.addTbb = function (id, opt) {
    return imce.getTbb(id) || new imce.Tbb(id, opt);
  };

  /**
   * Returns a toolbar button.
   */
  imce.getTbb = function (id) {
    return imce.toolbarButtons[id];
  };

  /**
   * Returns a configuration option.
   */
  imce.getConf = function (name, defaultValue) {
    var value;
    var conf = imce.conf;
    if (!name) {
      return conf;
    }
    value = conf[name];
    return value == null ? defaultValue : value;
  };


  /**
   * Returns a copy of selected items.
   */
  imce.getSelection = function () {
    return imce.selection.slice(0);
  };

  /**
   * Counts selected items.
   */
  imce.countSelection = function () {
    return this.selection.length;
  };

  /**
   * Returns the selected items grouped by parent folder and type.
   */
  imce.groupSelection = function () {
    return imce.groupItems(imce.selection);
  };

  /**
   * Select all items in the active folder.
   */
  imce.selectAll = function () {
    var Folder = imce.activeFolder;
    if (Folder) {
      Folder.selectAll();
    }
  };

  /**
   * Deselects all items.
   */
  imce.deselectAll = function () {
    var i;
    var arr = imce.getSelection();
    for (i in arr) {
      if (imce.owns(arr, i)) {
        arr[i].deselect();
      }
    }
  };

  /**
   * Returns last selected item.
   */
  imce.getLastSelected = function () {
    var arr = imce.selection;
    var len = arr.length;
    if (len) {
      return arr[len - 1];
    }
  };

  /**
   * Adds an item to the selection.
   */
  imce.selectItem = function (Item) {
    if (!Item.selected) {
      var arr = imce.selection;
      var oldlen = arr.length;
      arr.push(Item);
      Item.setState('selected');
      if (oldlen < 2) {
        imce.updatePreview();
      }
    }
  };

  /**
   * Removes an item from the selection.
   */
  imce.deselectItem = function (Item) {
    if (Item.selected) {
      var arr = imce.selection;
      var i = $.inArray(Item, arr);
      Item.unsetState('selected');
      if (i !== -1) {
        arr.splice(i, 1);
        if (arr.length < 2) {
          imce.updatePreview();
        }
      }
    }
  };

  /**
   * Loads item uuids by ajax.
   */
  imce.loadItemUuids = function (items, callback) {
    var i;
    var Item;
    var missing = [];
    var loaded = [];
    for (i in items) {
      Item = items[i];
      if (Item && Item.isFile) {
        if (Item.uuid) {
          loaded.push(Item);
        }
        else {
          missing.push(Item);
        }
      }
    }
    // All loaded
    if (!missing.length) {
      if (callback) {
        callback(loaded);
      }
      return loaded;
    }
    // Load missing uuids
    return imce.ajaxItems('uuid', missing, {
      customComplete: function(xhr, status) {
        var path;
        var Item;
        var response = this.response;
        if (response && response.uuids) {
          for (path in response.uuids) {
            if (Item = imce.getItem(path)) {
              Item.uuid = response.uuids[path];
              loaded.push(Item);
            }
          }
        }
        if (callback) {
          callback(loaded);
        }
      }
    });
  };

  /**
   * Generate link/image html for the given items.
   */
   imce.itemsHtml = function (items, type, innerHtml, separator) {
    const lines = [];
    const isImg = type === 'image';
    for (const File of items) {
      // Image.
      if (isImg && File.isImageSource()) {
        lines.push(
          '<img src="' +
            File.getUrl() +
            '"' +
            (File.width ? ' width="' + File.width + '"' : '') +
            (File.height ? ' height="' + File.height + '"' : '') +
            ' data-entity-type="file" data-entity-uuid="' +
            (File.uuid || '') +
            '" alt="" />'
        );
      }
      // Link.
      else {
        // Use the innerHtml for the first link.
        const text = (!lines.length && innerHtml) || File.formatName();
        lines.push('<a href="' + File.getUrl() + '">' + text + '</a>');
      }
    }
    return lines.join(separator == null ? '<br />' : separator);
  };

  /**
   * Checks external application integration by URL parameters.
   *
   * Ex-1: http://example.com/imce?sendto=HANDLER
   * Creates a sendto operation that calls HANDLER(File, imceWin) of the parent window.
   * Ex-2: http://example.com/imce?urlField=FIELD-ID
   * Creates a sendto operation that fills the field in parent window with the selected file's URL.
   * Ex-3: http://example.com/imce?oninit=HANDLER
   * Calls HANDLER() with imce context when the UI is ready.
   */
  imce.checkIntegration = function () {
    var query = imce.getQuery();
    var handler;
    var urlField;
    var parentWin = window.opener || window.parent;
    if (imce.parentWin = parentWin) {
      // Check sendto handler
      if (handler = imce.resolveHandler(query.sendto, parentWin)) {
        imce.sendtoHandler = handler;
      }
      // Check url field
      else if (urlField = query.urlField) {
        if (urlField = parentWin.document.getElementById(urlField)) {
          imce.sendtoHandler = function (Item, win) {
            try {
              imce.parentWin.focus();
              (imce.parentWin.jQuery||$)(urlField).val(Item.getUrl()).trigger('blur').trigger('change').trigger('focus');
            }
            catch (err) {
              imce.delayError(err);
            }
            win.close();
          };
        }
      }
      // Check init handler
      if (handler = imce.resolveHandler(query.oninit, parentWin)) {
        imce.bind('init', handler);
      }
      // Store sendto type
      if (imce.sendtoHandler && query.type) {
        imce.sendtoType = query.type;
      }
    }
  };

  /**
   * Creates the sendto toolbar button.
   */
  imce.createSendtoTbb = function (title, desc) {
    if (imce.sendtoHandler && !imce.getTbb('sendto')) {
      return imce.addTbb('sendto', {
        title: title || Drupal.t('Select'),
        tooltip: desc || Drupal.t('Use the selected file.'),
        handler: function () {
          imce.runSendtoHandler();
        },
        icon: 'check'
      });
    }
  };

  /**
   * Runs custom sendto handler on the first selected item.
   */
  imce.runSendtoHandler = function (items) {
    var handler = imce.sendtoHandler;
    if (handler) {
      var Item;
      var imgType = imce.sendtoType === 'image';
      items = items || imce.getSelection();
      for (var i in items) {
        if (imce.owns(items, i)) {
          Item = items[i];
          if (imgType ? Item.isImageSource() : Item.isFile) {
            return handler(Item, window);
          }
        }
      }
    }
  };

  /**
   * Default handler for activateFolder event.
   */
  imce.defaultActivateFolder = function (Folder, oldFolder) {
    // Enable/disable toolbar buttons by permission.
    var i;
    var j;
    var Tbb;
    var perm;
    var disabled;
    var buttons = imce.toolbarButtons;
    for (i in buttons) {
      if (!imce.owns(buttons, i)) {
        continue;
      }
      Tbb = buttons[i];
      if (perm = Tbb.permission) {
        perm = perm.split('|');
        disabled = true;
        for (j in perm) {
          if (Folder.getPermission(perm[j])) {
            disabled = false;
            break;
          }
        }
        Tbb.setDisabled(disabled);
      }
    }
  };


  /**
   * Updates the active sort state in the content header.
   */
  imce.updateHeader = function () {
    var newsort = imce.activeFolder.activeSort;
    var oldsort = imce.activeSort || {};
    var el = imce.contentHeaderEl;
    // Check if the sort has changed.
    if (newsort && (newsort.key !== oldsort.key || newsort.desc !== oldsort.desc)) {
      // Deactivate existing column
      if (oldsort.key) {
        $('[data-sort="' + oldsort.key + '"]', el).removeClass('sorted ' + (oldsort.desc ? 'desc' : 'asc'));
      }
      // Activate new column
      $('[data-sort="' + newsort.key + '"]', el).addClass('sorted ' + (newsort.desc ? 'desc' : 'asc'));
      // Store the values
      imce.activeSort = newsort;
    }
  };

  /**
   * Schedule preview updating.
   */
  imce.updatePreview = function () {
    clearTimeout(imce.previewTimer);
    imce.previewTimer = setTimeout(imce.doUpdatePreview, 100);
  };

  /**
   * Set preview of currently selected item.
   */
  imce.doUpdatePreview = function () {
    imce.previewItem(imce.countSelection() === 1 ? imce.getLastSelected() : null);
  };

  /**
   * Sets/clears item preview.
   */
  imce.previewItem = function (Item) {
    var currentItem = imce.previewingItem;
    if (imce.previewingItem = Item) {
      $(imce.previewEl).html(Item.createPreviewEl());
      imce.trigger('previewItem', Item);
    }
    else if (currentItem) {
      imce.previewEl.innerHTML = '';
    }
  };

  /**
   * Schedule status update.
   */
  imce.updateStatus = function () {
    clearTimeout(imce.statusTimer);
    imce.statusTimer = setTimeout(imce.doUpdateStatus, 100);
  };

  /**
   * Updates active folder status.
   */
  imce.doUpdateStatus = function () {
    var Folder = imce.activeFolder;
    if (Folder) {
      $(imce.contentStatusEl).html(Folder.formatStatus());
    }
  };


  /**
   * Returns name filtering regexp.
   */
  imce.getNameFilter = function () {
    var filters = imce.getConf('name_filters', []);
    // Dot files
    if (!imce.getConf('allow_dot_files')) {
      filters.push('^\\.|\\.$');
    }
    return filters.length ? new RegExp(filters.join('|')) : false;
  };

  /**
   * Groups an array of items by parent folder and type.
   */
  imce.groupItems = function (items) {
    var i;
    var Item;
    var path;
    var selected;
    var key;
    var names;
    var group = {};
    for (i in items) {
      if (!imce.owns(items, i)) {
        continue;
      }
      Item = items[i];
      path = Item.parent.getPath();
      selected = group[path] = imce.owns(group, path) ? group[path] : {};
      key = Item.isFolder ? 'subfolders' : 'files';
      names = selected[key] = selected[key] || {};
      names[Item.name] = Item;
    }
    return group;
  };

  /**
   * Checks parent folder permissions of the given items.
   */
  imce.validatePermissions = function (items, filePerm, subfolderPerm) {
    var path;
    var Folder;
    var selected;
    var groups = imce.groupItems(items);
    for (path in groups) {
      if (!imce.owns(groups, path)) {
        continue;
      }
      Folder = imce.getFolder(path);
      selected = groups[path];
      // Check file permission if the selection contains files
      if (selected.files && (filePerm == null || !Folder.getPermission(filePerm))) {
        return false;
      }
      // Check folder permission if the selection contains folders
      if (selected.subfolders && (subfolderPerm == null || !Folder.getPermission(subfolderPerm))) {
        return false;
      }
    }
    return true;
  };

  /**
   * Checks if items contain any predefined folder.
   */
  imce.validatePredefinedPath = function (items) {
    var i;
    var Item;
    var Folder;
    for (i in items) {
      if (!imce.owns(items, i)) {
        continue;
      }
      Item = items[i];
      if (Item.isFolder) {
        if (Folder = Item.hasPredefinedPath()) {
          imce.setMessage(Drupal.t('%path is a predefined path and can not be modified.', {'%path': Folder.getPath()}));
          return false;
        }
      }
    }
    return true;
  };

  /**
   * Validates the number of items.
   */
  imce.validateCount = function (items) {
    if (!items.length) {
      imce.setMessage(Drupal.t('Please select a file.'));
      return false;
    }
    return true;
  };

  /**
   * Validates item extensions against an allowed list.
   */
  imce.validateExtensions = function (items, exts) {
    for (var i in items) {
      if (imce.owns(items, i) && !imce.validateExtension(items[i].ext, exts)) {
        return false;
      }
    }
    return true;
  };

  /**
   * Validates an extension against an allowed list.
   */
  imce.validateExtension = function (ext, exts) {
    if (!ext || $.inArray(ext.toLowerCase(), exts.toLowerCase().split(/[\s,]+/)) === -1) {
      imce.setMessage(Drupal.t('Only files with the following extensions are allowed: %files-allowed.', {'%files-allowed': exts}));
      return false;
    }
    return true;
  };

  /**
   * Validates a file name.
   */
  imce.validateFileName = function (name) {
    // Basic validation
    if (!name || name === '.' || name === '..' || !name.length || name.length > 240) {
      return false;
    }
    // Test name filters
    var regex = imce.getNameFilter();
    if (regex && regex.test(name)) {
      imce.setMessage(Drupal.t('%filename is not allowed.', {'%filename': name}));
      return false;
    }
    // Test chars forbidden in various operating systems.
    if (/^\s|\s$|[\/\\:\*\?\x22<>\|\x00-\x1F]/.test(name)) {
      imce.setMessage(Drupal.t('%filename contains invalid characters. Use only alphanumeric characters for better portability.', {'%filename': name}));
      return false;
    }
    return true;
  };

  /**
   * Validates min/max image dimensions.
   */
  imce.validateDimensions = function (items, width, height) {
    // Check min dimensions
    if (width < 1 || height < 1) {
      return false;
    }
    // Check max dimensions.
    var maxwidth = imce.getConf('maxwidth');
    var maxheight = imce.getConf('maxheight');
    if (maxwidth && width > maxwidth || maxheight && height > maxheight) {
      imce.setMessage(Drupal.t('Image dimensions must be smaller than %dimensions pixels.', {'%dimensions': maxwidth + 'x' + maxwidth}));
      return false;
    }
    return true;
  };

  /**
   * Checks if all the selected items are images.
   */
  imce.validateImageTypes = function (items) {
    var Item = imce.getFirstItem(items, 'width', false);
    if (Item) {
      imce.setMessage(Drupal.t('%name is not an image.', {'%name': Item.name}));
      return false;
    }
    return true;
  };


  /**
   * Keydown event for the file manager.
   */
  imce.eFmKeydown = function (event) {
    return imce.eFireShortcut.call(this, event);
  };

  /**
   * Refresh handler for the file manager.
   */
  imce.eFmRefresh = function () {
    imce.activeFolder.load();
  };

  /**
   * Mousedown event for folder tree.
   */
  imce.eTreeMousedown = function (event) {
    // Manually focus as the browser default might have been prevented.
    this.focus();
  };

  /**
   * Touchstart event for folder tree.
   */
  imce.eTreeTouchstart = function (event) {
    this.focus();
  };

  /**
   * Keydown event for folder tree.
   */
  imce.eTreeKeydown = function (event) {
    return imce.eFireShortcut.call(this, event, 'tree');
  };

  /**
   * Tree shortcut: Enter.
   */
  imce.eTreeEnter = function () {
    imce.activeFolder.open();
  };

  /**
   * Tree shortcut: UP.
   */
  imce.eTreeUp = function (e) {
    var Folder = imce.activeFolder;
    var prvEl;
    var prvFolder;
    if (prvEl = Folder.branchEl.previousSibling) {
      if (prvFolder = prvEl.Folder) {
        while (prvFolder.expanded) {
          if (prvEl = prvFolder.subtreeEl.lastChild) {
            prvFolder = prvEl.Folder;
          }
        }
      }
    }
    else {
      prvFolder = Folder.parent;
    }
    if (prvFolder) {
      prvFolder.activate();
      imce.scrollToEl(prvFolder.branchEl, imce.treeEl);
    }
  };

  /**
   * Tree shortcut: DOWN.
   */
  imce.eTreeDown = function (e) {
    var Folder = imce.activeFolder;
    var nextEl;
    var nextFolder;
    if (Folder.expanded && (nextEl = Folder.subtreeEl.firstChild)) {
      nextFolder = nextEl.Folder;
    }
    else {
      // noinspection Eslint
      do {
        if (nextEl = Folder.branchEl.nextSibling) {
          nextFolder = nextEl.Folder;
          break;
        }
      } while (Folder = Folder.parent);
    }
    if (nextFolder) {
      nextFolder.activate();
      imce.scrollToEl(nextFolder.branchEl, imce.treeEl);
    }
  };

  /**
   * Tree shortcut: LEFT/RIGHT.
   */
  imce.eTreeLR = function (e) {
    var Folder = imce.activeFolder;
    if (e.keyCode === 39 ^ Folder.expanded) {
      $(Folder.branchToggleEl).trigger('click');
    }
  };

  /**
   * Mousedown event for tree resizer.
   */
  imce.eTreeResizerMousedown = function (event) {
    return imce.eTreeResizerDown.call(this, imce.eFix(event));
  };

  /**
   * Touch start event for tree resizer.
   */
  imce.eTreeResizerTouchstart = function (event) {
    return imce.eCommonTouchstart(event, imce.eTreeResizerDown, this);
  };

  /**
   * Common Down event for tree resizer.
   */
  imce.eTreeResizerDown = function (e, isTouch) {
    this.startX = e.pageX;
    this.startW = $(imce.treeEl).width();
    this.maxW = this.startW + $(imce.contentEl).width();
    imce.bindDragDrop(imce.eTreeResizerDrag, null, null, isTouch);
    return false;
  };

  /**
   * Drag event for tree resizer.
   */
  imce.eTreeResizerDrag = function (e) {
    var el = imce.treeResizerEl;
    $(imce.treeEl).width(Math.min(el.maxW, Math.max(el.startW + e.pageX - el.startX, 0)));
    e.preventDefault();
  };

  /**
   * Mousedown event for content area.
   */
  imce.eContentMousedown = function (event) {
    // Manually focus as the browser default might have been prevented.
    this.focus();
  };

  /**
   * Touchstart event for content area.
   */
  imce.eContentTouchstart = function (event) {
    this.focus();
  };

  /**
   * Keydown event for content area.
   */
  imce.eContentKeydown = function (event) {
    return imce.eFireShortcut.call(this, event, 'content');
  };

  /**
   * Scroll event for content area.
   */
  imce.eContentScroll = function (event) {
    imce.updateContentPositions();
    setTimeout(imce.updateContentPositions);
  };

  /**
   * Click event for content header.
   */
  imce.eContentHeaderClick = function (event) {
    var key;
    var e = imce.eFix(event);
    var Folder = imce.activeFolder;
    var sort = Folder.activeSort || {};
    if (key = e.target.getAttribute('data-sort')) {
      Folder.sortItems(key, key === sort.key ? !sort.desc : sort.desc);
    }
  };

  /**
   * Update content header position on content scroll.
   */
  imce.updateContentPositions = function () {
    var top = imce.contentEl.scrollTop;
    imce.contentHeaderEl.style.top = top + 'px';
    imce.contentStatusEl.style.bottom = -top + 'px';
  };

  /**
   * Content shortcut: ENTER.
   */
  imce.eContentEnter = function (e) {
    var Item = imce.getLastSelected();
    if (Item) {
      Item.dblClick();
    }
  };

  /**
   * Content shortcut: Ctrl+A.
   */
  imce.eContentCtrlA = function (e) {
    imce.selectAll();
  };

  /**
   * Content shortcut: LEFT/RIGHT/UP/DOWN
   */
  imce.eContentArrow = function (e) {
    var Item;
    var i = 0;
    var Folder = imce.activeFolder;
    var key = e.keyCode;
    if (Item = imce.getLastSelected()) {
      i = Folder.indexOf(Item) + (key % 2 ? key - 38 : imce.countElPerRow(Item.el) * (key - 39));
    }
    if (Item = Folder.getItemAt(i)) {
      Item.click(e);
      Item.scrollIntoView();
    }
  };

  /**
   * Mousedown event for body resizer.
   */
  imce.eBodyResizerMousedown = function (event) {
    return imce.eBodyResizerDown.call(this, imce.eFix(event));
  };

  /**
   * Touch start event for body resizer.
   */
  imce.eBodyResizerTouchstart = function (event) {
    return imce.eCommonTouchstart(event, imce.eBodyResizerDown, this);
  };

  /**
   * Common Down event for body resizer.
   */
  imce.eBodyResizerDown = function (e, isTouch) {
    this.startY = e.pageY;
    this.startH = $(imce.bodyEl).height();
    this.maxH = this.startH + $(imce.previewEl).height();
    imce.bindDragDrop(imce.eBodyResizerDrag, null, null, isTouch);
    return false;
  };

  /**
   * Drag event for body resizer.
   */
  imce.eBodyResizerDrag = function (e) {
    var el = imce.bodyResizerEl;
    var bodyH = Math.min(Math.max(el.startH + e.pageY - el.startY, 0), el.maxH);
    $(imce.bodyEl).height(bodyH);
    $(imce.previewEl).height(el.maxH - bodyH);
    e.preventDefault();
  };

  /**
   * Beforeunload event for window.
   */
  imce.eWinBeforeunload = function (e) {
    // Store active sort.
    var data = {};
    if (data.activeSort = imce.activeSort) {
      imce.trigger('storeLocalData', data);
      try {
        localStorage.setItem('imce.local', JSON.stringify(data));
      }
      catch (err) {
        imce.delayError(err);
      }
    }
  };

  /**
   * Resize event for window.
   */
  imce.eWinResize = function (e) {
    var pdiff;
    var diff = imce.getWindowSize().height - imce.fmEl.offsetHeight;
    // Distribute the excess space to the body and preview elements.
    if (diff) {
      var $bodyEl = $(imce.bodyEl);
      var $prvEl = $(imce.previewEl);
      if ($prvEl[0].offsetHeight) {
        pdiff = parseInt(diff / 2);
        diff -= pdiff;
        $prvEl.height($prvEl.height() + pdiff);
      }
      $bodyEl.height($bodyEl.height() + diff);
    }
  };


  /**
   * Binds an handler by type.
   */
  imce.bind = function (type, handler) {
    var events = imce.events;
    var handlers = events[type];
    if (!handlers) {
      handlers = events[type] = {};
    }
    handlers['' + handler] = handler;
  };

  /**
   * Unbinds an handler by type.
   */
  imce.unbind = function (type, handler) {
    var events = imce.events;
    var handlers = events[type];
    if (handlers) {
      if (1 in arguments) {
        delete handlers['' + handler];
      }
      else {
        delete events[type];
      }
    }
  };

  /**
   * Triggers handlers by type.
   */
  imce.trigger = function (type) {
    var i;
    var handler;
    var handlers = imce.events[type];
    var ret = [];
    if (handlers) {
      for (i in handlers) {
        if (handler = handlers[i]) {
          if (handler.apply) {
            ret.push(handler.apply(imce, Array.prototype.slice.call(arguments, 1)));
          }
        }
      }
    }
    return ret;
  };


  /**
   * Adds a shortcut handler to an area.
   */
  imce.addShortcut = function (shortcut, handler, area) {
    var shortcuts;
    if (shortcuts = imce.getAreaShortcuts(area)) {
      shortcuts[shortcut.toUpperCase()] = handler;
    }
  };

  /**
   * Returns a shortcut handler.
   */
  imce.getShortcut = function (shortcut, area) {
    var shortcuts;
    if (shortcuts = imce.getAreaShortcuts(area)) {
      return shortcuts[shortcut.toUpperCase()];
    }
  };

  /**
   * Removes a shortcut handler.
   */
  imce.removeShortcut = function (shortcut, area) {
    var shortcuts;
    if (shortcuts = imce.getAreaShortcuts(area)) {
      delete shortcuts[shortcut.toUpperCase()];
    }
  };

  /**
   * Executes a shortcut handler.
   * Returns true if shortcut exists and is executed successfully.
   */
  imce.fireShortcut = function (shortcut, area) {
    var handler = imce.getShortcut(shortcut, area);
    if (handler) {
      // DOM element
      if (handler.click) {
        handler.click();
        return true;
      }
      // Callback
      if (handler.apply) {
        // Shortcuts returning false are considered disabled.
        return handler.apply(this, Array.prototype.slice.call(arguments, 2)) !== false;
      }
    }
  };

  /**
   * Returns a shortcut handler.
   */
  imce.getAreaShortcuts = function (area) {
    if (!area) {
      area = 'fm';
    }
    return imce.shortcuts[area];
  };


  /**
   * Builds a shortcut string from an event.
   */
  imce.eBuildShortcut = function (e) {
    var symbol;
    var key = e.keyCode;
    var shortcut = '';
    if (key && (symbol = imce.getKeySymbols(key))) {
      if (e.ctrlKey) {
        shortcut += 'CTRL+';
      }
      if (e.altKey) {
        shortcut += 'ALT+';
      }
      if (e.shiftKey) {
        shortcut += 'SHIFT+';
      }
      shortcut += symbol;
    }
    return shortcut;
  };

  /**
   * Event helper for imce shortcut firing.
   */
  imce.eFireShortcut = function (event, area) {
    var e = event || window.event;
    var shortcut = imce.eBuildShortcut(e);
    // Prevent default if shortcut is executed.
    if (shortcut) {
      e = $.event.fix(e);
      if (imce.fireShortcut.call(this, shortcut, area, e)) {
        e.stopPropagation();
        return false;
      }
    }
  };

  /**
   * Returns key symbols allowed in shortcuts.
   */
  imce.getKeySymbols = function (key) {
    var i;
    var symbols = imce.keySymbols;
    if (!symbols) {
      // Custom keys
      symbols = imce.keySymbols = {
        8: 'BACKSPACE',
        9: 'TAB',
        13: 'ENTER',
        27: 'ESC',
        32: 'SPACE',
        37: 'LEFT',
        38: 'UP',
        39: 'RIGHT',
        40: 'DOWN',
        46: 'DEL'
      };
      // Add numbers
      for (i = 0; i < 10; i++) {
        symbols[48 + i] = '' + i;
      }
      // Add letters
      for (i = 65; i < 91; i++) {
        symbols[i] = String.fromCharCode(i);
      }
      // Add function keys
      for (i = 1; i < 13; i++) {
        symbols[111 + i] = 'F' + i;
      }
    }
    return (0 in arguments) ? symbols[key] : symbols;
  };


  /**
   * Creates an ajax request for a specific operation.
   */
  imce.ajax = function (jsop, opt) {
    return $.ajax(imce.ajaxPrepare(jsop, opt));
  };

  /**
   * Prepares ajax options.
   */
  imce.ajaxPrepare = function (jsop, opt) {
    // Prepare data
    var path;
    var Folder = opt && opt.activeFolder != null ? opt.activeFolder : imce.activeFolder;
    var data = {jsop: jsop, token: imce.getConf('token')};
    if (Folder) {
      if (path = Folder.getPath()) {
        data.active_path = path;
      }
    }
    // Extend defaults
    return $.extend(true, imce.ajaxDefaults(), {data: data, activeFolder: Folder}, opt);
  };

  /**
   * Returns ajax default options.
   */
  imce.ajaxDefaults = function () {
    return {
      url: imce.getConf('ajax_url'),
      type: 'POST',
      dataType: 'json',
      beforeSend: imce.ajaxBeforeSend,
      success: imce.ajaxSuccess,
      error: imce.ajaxError,
      complete: imce.ajaxComplete
    };
  };

  /**
   * Creates an ajax request for a specific operation on the given items.
   */
  imce.ajaxItems = function (jsop, items, opt) {
    return imce.ajax(jsop, $.extend(true, imce.ajaxItemsOpt(items), opt));
  };

  /**
   * Creates an ajax options object including the items as the selection data.
   */
  imce.ajaxItemsOpt = function (items) {
    return {data: {selection: imce.getItemPaths(items)}};
  };

  /**
   * Default before send handler.
   */
  imce.ajaxBeforeSend = function (xhr, opt) {
    var handler;
    var Folder;
    if (handler = opt.customBeforeSend) {
      if (handler.apply(this, arguments) === false) {
        opt.activeFolder = null;
        return false;
      }
    }
    if (Folder = opt.activeFolder) {
      Folder.setBusy(true);
    }
  };

  /**
   * Default ajax success handler.
   */
  imce.ajaxSuccess = function (response, status) {
    var handler;
    var opt = this;
    // Make the response available in complete handlers.
    opt.response = response;
    imce.ajaxProcessResponse(response);
    if (handler = opt.customSuccess) {
      handler.apply(opt, arguments);
    }
  };

  /**
   * Default ajax complete handler.
   */
  imce.ajaxComplete = function (xhr, status) {
    var Folder;
    var handler;
    var opt = this;
    if (Folder = opt.activeFolder) {
      Folder.setBusy(false);
    }
    if (handler = opt.customComplete) {
      handler.apply(opt, arguments);
    }
    opt.response = opt.activeFolder = null;
  };

  /**
   * Default ajax error handler.
   */
  imce.ajaxError = function (xhr, status, e) {
    if (status !== 'abort') {
      imce.setMessage('<pre class="imce-ajax-error">' + Drupal.checkPlain(imce.ajaxErrorMessage(xhr, this.url)) + '</pre>');
    }
  };

  /**
   * Processes the ajax response.
   */
  imce.ajaxProcessResponse = function (response) {
    if (response) {
      imce.ajaxProcessRemoved(response);
      imce.ajaxProcessAdded(response);
      imce.ajaxProcessMessages(response);
    }
  };

  /**
   * Processes the added items in the response.
   */
  imce.ajaxProcessAdded = function (response) {
    var path;
    var Folder;
    var added;
    if (added = response.added) {
      for (path in added) {
        if (Folder = imce.addFolder(path)) {
          Folder.addContent(added[path], true);
          imce.contentEl.focus();
        }
      }
    }
  };

  /**
   * Processes the removed items in the response.
   */
  imce.ajaxProcessRemoved = function (response) {
    var i;
    var Item;
    var paths = response.removed;
    if (paths) {
      for (i in paths) {
        if (Item = imce.getItem(paths[i])) {
          Item.remove();
        }
      }
    }
  };

  /**
   * Processes the messages in the response.
   */
  imce.ajaxProcessMessages = function (response) {
    var i;
    var type;
    var msgs = response.messages;
    if (msgs) {
      for (type in msgs) {
        if (imce.owns(msgs, type)) {
          for (i in msgs[type]) {
            if (msgs[type].hasOwnProperty(i)) {
              imce.setMessage(msgs[type][i], type);
            }
          }
        }
      }
    }
  };

  /**
   * Generates an ajax error message.
   */
  imce.ajaxErrorMessage = function (xhr, url) {
    var msg = Drupal.t('An AJAX HTTP error occurred.');
    msg += '\n' + Drupal.t('Path: !uri', {'!uri': url});
    msg += '\n' + Drupal.t('HTTP Result Code: !status', {'!status': xhr.status || 0});
    msg += '\n' + Drupal.t('StatusText: !statusText', {'!statusText': xhr.statusText || 'N/A'});
    msg += '\n' + Drupal.t('ResponseText: !responseText', {'!responseText': xhr.responseText || 'N/A'});
    return msg;
  };

  /**
   * Returns an array of item paths.
   */
  imce.getItemPaths = function (items) {
    return $.map(items, imce.getItemPath);
  };

  /**
   * Returns the path of an item.
   */
  imce.getItemPath = function (Item) {
    return Item.getPath();
  };


  /**
   * Set a status message.
   */
  imce.setMessage = function (msg, type) {
    if (!type) {
      type = 'error';
    }
    var mq = imce.messageQueue;
    var len = mq.length;
    var msgId = msg + ':' + type;
    // Skip if it's identical to the last message
    if (len && mq[len - 1].msgId === msgId) {
      return false;
    }
    // Add the message
    mq[len] = imce.createMessageEl(msg, type);
    mq[len].msgId = msgId;
    // Schedule the processing at a later time to queue new messages.
    if (!imce.pmqScheduled) {
      imce.pmqScheduled = setTimeout(imce.processMessageQueue, 100);
    }
    return false;
  };

  /**
   * Process message queue.
   */
  imce.processMessageQueue = function () {
    var mq = imce.messageQueue;
    if (mq.length) {
      // Display all messages
      $(imce.createMessagePopupEl()).html(mq).fadeIn(200);
      // Empty array.
      mq.length = 0;
      // Mousedown close
      $(document).on('mousedown', imce.eMPopDocMousedown);
      // Auto close
      imce.mPopCloseTimer = setTimeout(imce.mPopClose, 2500);
    }
  };

  /**
   * Closes currently open message popup.
   */
  imce.mPopClose = function () {
    // Time up but still hovering. Do not close. A new timer will be set on mouseout.
    if (imce.mPopHovering) {
      imce.mPopCloseTimerUp = 1;
      return imce.mPopCloseTimerUp;
    }
    // Time up or mousedown
    clearTimeout(imce.mPopCloseTimer);
    imce.mPopCloseTimerUp = 0;
    $(document).off('mousedown', imce.eMPopDocMousedown);
    $(imce.messagePopupEl).fadeOut(400, imce.processMessageQueueNext);
  };

  /**
   * Continue processing the remaining messages.
   */
  imce.processMessageQueueNext = function () {
    imce.pmqScheduled = 0;
    if (imce.messageQueue.length) {
      imce.pmqScheduled = setTimeout(imce.processMessageQueue, 250);
    }
  };

  /**
   * Mouseover event for message popup.
   */
  imce.eMPopMouseenter = function (e) {
    imce.mPopHovering = 1;
    // Clear the shorter timer set on mouseleave
    if (imce.mPopCloseTimerUp) {
      clearTimeout(imce.mPopCloseTimer);
    }
  };

  /**
   * Mouseout event for message popup.
   */
  imce.eMPopMouseleave = function (e) {
    imce.mPopHovering = 0;
    // Set a shorter close timer if the long time is up
    if (imce.mPopCloseTimerUp) {
      imce.mPopCloseTimer = setTimeout(imce.mPopClose, 2000);
    }
  };

  /**
   * Mousedown event for document in order to close message popup.
   */
  imce.eMPopDocMousedown = function (e) {
    // Close the popup if the mousedown is outside of it.
    if (!imce.mPopHovering) {
      imce.mPopClose();
    }
  };

  /**
   * Creates a message element.
   */
  imce.createMessageEl = function (msg, type) {
    var el = imce.createEl('<div class="imce-message imce-ficon"><div class="imce-message-content"></div></div>');
    el.className += ' ' + type;
    el.firstChild.innerHTML = msg;
    return el;
  };

  /**
   * Creates the message popup element.
   */
  imce.createMessagePopupEl = function () {
    var el = imce.messagePopupEl;
    if (!el) {
      el = imce.messagePopupEl = imce.createLayer('imce-message-popup', imce.fmEl);
      $(el).on('mouseenter', imce.eMPopMouseenter).on('mouseleave', imce.eMPopMouseleave);
    }
    return el;
  };


  /**
   * Checks a permission in a folder conf.
   */
  imce.permissionInFolderConf = function (permission, folderConf) {
    var permissions = folderConf && folderConf.permissions;
    return !!(permissions && ((permission in permissions) ? permissions[permission] : permissions.all));
  };

  /**
   * Checks if a permission exists in any of the predefined folders.
   */
  imce.hasPermission = function (permission, conf) {
    var i;
    var folders = (conf || imce.conf).folders;
    if (folders) {
      for (i in folders) {
        if (imce.permissionInFolderConf(permission, folders[i])) {
          return true;
        }
      }
    }
    return false;
  };

  /**
   * Sorting helpers.
   */
  imce.sortText = function (a, b) {
    return a.toLowerCase() < b.toLowerCase() ? -1 : 1;
  };
  imce.sortNum = function (a, b) {
    return (a || 0) - (b || 0);
  };
  imce.sortNumericProperty = function (a, b, prop) {
    // Do not change sort within folders
    var result = (a.isFolder ? -1 : 1);
    if (a.isFolder === b.isFolder) {
      result = imce.sortNum(a[prop] || 0, b[prop] || 0);
    }
    return result;
  };
  imce.sortBranchName = function (a, b) {
    return imce.sortText(a.name, b.name);
  };

  /**
   * Property sorters.
   */
  imce.sorters.name = function (a, b) {
    var result = (a.isFolder ? -1 : 1);
    if (a.isFolder === b.isFolder) {
      result = imce.sortText(a.name, b.name);
    }
    return result;
  };
  imce.sorters.date = function (a, b) {
    return imce.sortNumericProperty(a, b, 'date');
  };
  imce.sorters.size = function (a, b) {
    return imce.sortNumericProperty(a, b, 'size');
  };
  imce.sorters.width = function (a, b) {
    return imce.sortNumericProperty(a, b, 'width');
  };
  imce.sorters.height = function (a, b) {
    return imce.sortNumericProperty(a, b, 'height');
  };
  imce.sorters.ext = function (a, b) {
    var result = (a.isFolder ? -1 : 1);
    if (a.isFolder === b.isFolder) {
      result = (a.isFolder ? 0 : imce.sortText(a.ext || '', b.ext || ''));
    }
    return result;
  };

  /**
   * Splits a path into dirpath and filename.
   */
  imce.splitPath = function (path) {
    if (typeof path === 'string' && path !== '') {
      var parts = path.split('/');
      var filename = parts.pop();
      var dirpath = parts.join('/');
      if (filename !== '') {
        return [dirpath === '' ? '.' : dirpath, filename];
      }
    }
  };

  /**
   * Creates a file path by joining a folder path and a filename.
   */
  imce.joinPaths = function (dirpath, filename) {
    if (dirpath === '.') {
      return filename;
    }
    if (filename === '.') {
      return dirpath;
    }
    if (dirpath.substring(dirpath.length - 1) !== '/') {
      dirpath += '/';
    }
    return dirpath + filename;
  };

  /**
   * Returns query parameters from the current URL.
   */
  imce.getQuery = function (name) {
    var i;
    var part;
    var parts;
    var str;
    var query = imce.query;
    if (!query) {
      query = imce.query = {};
      if (str = location.search) {
        parts = str.substring(1).split('&');
        for (i in parts) {
          if (imce.owns(parts, i)) {
            part = parts[i].split('=');
            query[imce.decode(part[0])] = part[1] ? imce.decode(part[1]) : '';
          }
        }
      }
    }
    return name ? query[name] : query;
  };

  /**
   * Wrapper around decodeURIComponent.
   * Avoids malformed uri exception.
   */
  imce.decode = function (str) {
    try {
      str = decodeURIComponent(str);
    }
    catch (err) {
      imce.delayError(err);
    }
    return str;
  };

  /**
   * Throws an error after a minimum delay.
   */
  imce.delayError = function (err) {
    setTimeout(function () {
      throw err;
    });
  };

  /**
   * Formats item date.
   */
  imce.formatDate = function (timestamp, dayOnly) {
    var D;
    var p0;
    var ret = '';
    if (timestamp) {
      D = new Date(timestamp * 1000);
      p0 = imce.prependZero;
      ret = D.getFullYear() + '-' + p0(D.getMonth() + 1) + '-' + p0(D.getDate());
      if (!dayOnly) {
        ret += ' ' + p0(D.getHours()) + ':' + p0(D.getMinutes());
      }
    }
    return ret;
  };

  /**
   * Formats item size.
   */
  imce.formatSize = function (size) {
    if (size == null) {
      return '';
    }
    if (!size || size < 100) {
      return Drupal.formatPlural(size, '1 byte', '@count bytes', {'@count': size || 0});
    }
    if (size < 1048576) {
      return Drupal.t('@size KB', {'@size': imce.round(size / 1024, 1)});
    }
    return Drupal.t('@size MB', {'@size': imce.round(size / 1048576, 1)});
  };

  /**
   * Formats content items status.
   */
  imce.formatItemsStatus = function (count, size) {
    return Drupal.t('!items (!size)', {
      '!items': Drupal.formatPlural(count, '1 item', '@count items'),
      '!size': imce.formatSize(size)
    });
  };

  /**
   * Prepends 0 to numbers smaller than 10.
   */
  imce.prependZero = function (num) {
    return num < 10 ? '0' + num : num;
  };

  /**
   * Rounds a number to the given precision
   */
  imce.round = function (num, precision) {
    var n = Math.pow(10, precision);
    return Math.round(num * n) / n;
  };

  /**
   * Returns the extension of a file name.
   */
  imce.getExt = function (name) {
    var pos = name.lastIndexOf('.');
    return pos === -1 ? '' : name.substring(pos + 1);
  };

  /**
   * Checks if an object owns a property.
   */
  imce.owns = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };

  /**
   * Returns the first item that has a property.
   */
  imce.getFirstItem = function (items, prop, state) {
    var i;
    var item;
    if (typeof state === "undefined") {
      state = true;
    }
    for (i in items) {
      if (imce.owns(items, i)) {
        item = items[i];
        if (!prop || (item[prop] ? state : !state)) {
          return item;
        }
      }
    }
  };

  /**
   * Resolves a string to a handler under the given scope.
   */
  imce.resolveHandler = function (str, scope) {
    if (!str) {
      return;
    }
    var i;
    var obj = scope || window;
    var parts = str.split('.');
    var len = parts.length;
    for (i = 0; i < len && (obj = obj[parts[i]]); i++) {
      // empty
    }
    return i === len && obj && obj.call && obj.apply ? obj : false;
  };

  /**
   * Creates a DOM element from html string.
   */
  imce.createEl = function (html) {
    var el;
    var div = imce._div;
    if (!div) {
      div = imce._div = document.createElement('div');
    }
    div.innerHTML = html;
    el = div.firstChild;
    div.removeChild(el);
    return el;
  };

  /**
   * Creates a layer element.
   */
  imce.createLayer = function (cname, parent) {
    var layer = imce.createEl('<div class="imce-layer"></div>');
    if (cname) {
      layer.className += ' ' + cname;
    }
    if (parent !== false) {
      (parent || document.body).appendChild(layer);
    }
    return layer;
  };

  /**
   * Removes element without removing events.
   */
  imce.removeEl = function (el) {
    var parent = el.parentNode;
    if (parent) {
      parent.removeChild(el);
    }
  };

  /**
   * Returns window inner size.
   */
  imce.getWindowSize = function () {
    return {
      width: window.innerWidth || document.documentElement.clientWidth,
      height: window.innerHeight || document.documentElement.clientHeight
    };
  };

  /**
   * Returns scroll values of the window.
   */
  imce.getWindowScroll = function () {
    if (typeof window.pageXOffset === "undefined") {
      var el = document.documentElement;
      return {left: el.scrollLeft, top: el.scrollTop};
    }
    return {left: window.pageXOffset, top: window.pageYOffset};
  };

  /**
   * Fixes and converts an event into jQuery event.
   */
  imce.eFix = function (event) {
    return $.event.fix(event || window.event);
  };

  /**
   * Scroll an element into view inside the scrollable wrapper.
   */
  imce.scrollToEl = function (el, wrpEl, diffTop, diffBottom) {
    if (el.offsetWidth && wrpEl.scrollHeight > wrpEl.clientHeight) {
      var elTop = $(el).offset().top;
      var elBottom = elTop + el.offsetHeight;
      var wrpTop = $(wrpEl).offset().top;
      var wrpBottom = wrpTop + wrpEl.offsetHeight;
      wrpTop += diffTop || 0;
      wrpBottom -= diffBottom || 0;
      // Check top positions
      if (elTop < wrpTop) {
        wrpEl.scrollTop -= wrpTop - elTop + 10;
      }
      else if (wrpBottom < elBottom) {
        // Consider el height might be bigger than the wrapper height.
        // Get the minimum among top space and required scroll.
        wrpEl.scrollTop += Math.min(elBottom - wrpBottom + 10, elTop - wrpTop - 10);
      }
    }
  };

  /**
   * Returns number of the elements that can fit in a row inside the parent.
   */
  imce.countElPerRow = function (el) {
    return Math.max(1, parseInt(el.parentNode.clientWidth / $(el).outerWidth(true)));
  };

  /**
   * Makes the element stay inside window boundaries.
   */
  imce.fixPosition = function (el) {
    var pos = $(el).offset();
    var winSize = imce.getWindowSize();
    var winScroll = imce.getWindowScroll();
    var scrollbar = 18;
    var extraX = pos.left - winScroll.left + el.offsetWidth - winSize.width + scrollbar;
    var extraY = pos.top - winScroll.top + el.offsetHeight - winSize.height + scrollbar;
    // Shift to left
    if (extraX > 0) {
      el.style.left = Math.max(0, pos.left - extraX) + 'px';
    }
    // Shift to top
    if (extraY > 0) {
      el.style.top = Math.max(0, pos.top - extraY) + 'px';
    }
  };


  /**
   * Bind drag drop callbacks to the document
   */
  imce.bindDragDrop = function (drag, drop, data, isTouch) {
    var edata = {drag: drag, drop: drop, data: data, isTouch: isTouch};
    $(document).on(isTouch ? 'touchmove' : 'mousemove', edata, imce.eDocDrag).on(isTouch ? 'touchend' : 'mouseup', edata, imce.eDocDrop);
  };

  /**
   * Default drag event for document which is set by imce.bindDragDrop
   */
  imce.eDocDrag = function (e) {
    var edata = e.data;
    // Call custom drag event if set.
    if (edata.drag) {
      // Fix touch event
      if (edata.isTouch) {
        e = imce.eTouchFix(e, e.originalEvent.changedTouches[0]);
      }
      return edata.drag.call(this, e);
    }
  };

  /**
   * Default drop event for document which is set by imce.bindDragDrop
   */
  imce.eDocDrop = function (e) {
    var edata = e.data;
    $(document).off(edata.isTouch ? 'touchmove' : 'mousemove', imce.eDocDrag).off(edata.isTouch ? 'touchend' : 'mouseup', imce.eDocDrop);
    // Call custom drop event if set.
    if (edata.drop) {
      // Fix touch event
      if (edata.isTouch) {
        e = imce.eTouchFix(e, e.originalEvent.changedTouches[0]);
      }
      return edata.drop.call(this, e);
    }
  };

  /**
   * Fix touch events
   */
  imce.eTouchFix = function (e, touch) {
    // Make sure e is a jquery event object that is writable.
    e = $.event.fix(e);
    if (touch && typeof touch.pageX !== "undefined") {
      e.pageX = touch.pageX;
      e.pageY = touch.pageY;
      e.clientX = touch.clientX;
      e.clientY = touch.clientY;
    }
    return e;
  };

  /**
   * Common touchstart event.
   */
  imce.eCommonTouchstart = function (event, callback, context) {
    var touch;
    var touches = event.changedTouches;
    // Skip event for multi-touch
    if (touches && (touch = touches[0]) && !touches[1]) {
      if (callback && callback.call) {
        return callback.call(context || this, imce.eTouchFix(event, touch), true);
      }
      // Prevent default.
      return false;
    }
  };

})(jQuery, Drupal);
;
/*global imce:true*/
(function ($, Drupal, imce) {
  'use strict';

  /**
   * @file
   * Defines imce Item object.
   */

  /**
   * Imce Item.
   */
  imce.Item = function (name) {
    this.construct(name);
  };

  /**
   * Item prototype.
   */
  var Item = imce.Item.prototype;

  /**
   * Constructs Imce Item.
   */
  Item.construct = function (name) {
    this.createEl();
    this.setName(name);
  };

  /**
   * Creates Item elements.
   */
  Item.createEl = function () {
    var el;
    var children;
    var Item = this;
    if (!Item.el) {
      el = Item.el = imce.createEl('<div class="imce-item"><div class="imce-item-date"></div><div class="imce-item-height"></div><div class="imce-item-width"></div><div class="imce-item-size"></div><div class="imce-item-icon imce-ficon"></div><div class="imce-item-name"></div></div>');
      el.onmousedown = imce.eItemMousedown;
      el.ondblclick = imce.eItemDblclick;
      el.Item = Item;
      children = el.children;
      Item.dateEl = children[0];
      Item.heightEl = children[1];
      Item.widthEl = children[2];
      Item.sizeEl = children[3];
      Item.iconEl = children[4];
      Item.nameEl = children[5];
    }
  };

  /**
   * Appends the item to a parent.
   */
  Item.appendTo = function (parent) {
    parent.appendItem(this);
  };

  /**
   * Removes the item.
   */
  Item.remove = function (shallow) {
    if (this.parent) {
      this.parent.removeItem(this, shallow);
    }
  };

  /**
   * Item click handler.
   */
  Item.click = function (e) {
    var Item = this;
    if (e) {
      // Range select
      if (e.shiftKey) {
        var Folder = imce.activeFolder;
        var lastItem = imce.getLastSelected();
        var start = lastItem ? Folder.indexOf(lastItem) : -1;
        var end = Folder.indexOf(Item);
        var step = start < end ? 1 : -1;
        while (start !== end) {
          Folder.getItemAt(start += step).select();
        }
        return;
      }
      // Toggle select
      if (e.ctrlKey) {
        return Item.toggleSelect();
      }
    }
    var i;
    var selection = imce.getSelection();
    for (i in selection) {
      if (imce.owns(selection, i) && selection[i] !== Item) {
        selection[i].deselect();
      }
    }
    Item.select();
  };

  /**
   * Double click handler.
   */
  Item.dblClick = function () {
    if (imce.sendtoHandler) {
      imce.runSendtoHandler([this]);
    }
    else {
      this.open();
    }
  };

  /**
   * Opens item.
   */
  Item.open = function () {
    var url = this.getUrl();
    if (url) {
      window.open(url);
    }
  };

  /**
   * Selects item.
   */
  Item.select = function () {
    imce.selectItem(this);
  };

  /**
   * Deselects item.
   */
  Item.deselect = function () {
    imce.deselectItem(this);
  };

  /**
   * Toggles select.
   */
  Item.toggleSelect = function () {
    if (this.selected) {
      this.deselect();
    }
    else {
      this.select();
    }
  };

  /**
   * Sets/unsets the item busy.
   */
  Item.setBusy = function (state) {
    this.toggleState('busy', !!state);
  };

  /**
   * Sets/unsets the item disabled.
   */
  Item.setDisabled = function (state) {
    this.toggleState('disabled', !!state);
  };

  /**
   * Checks if the item is ready for an operation.
   */
  Item.isReady = function () {
    return !this.disabled && !this.busy;
  };

  /**
   * Returns item path relative to the root.
   */
  Item.getPath = function () {
    var parent;
    var path = this.path;
    if (path) {
      return path;
    }
    if (parent = this.parent) {
      if (path = parent.getPath()) {
        return imce.joinPaths(path, this.name);
      }
    }
  };

  /**
   * Sets the item path.
   */
  Item.setPath = function (path) {
    this.path = path;
  };

  /**
   * Returns item uri.
   */
  Item.getUri = function () {
    var path = this.getPath();
    if (path) {
      return imce.joinPaths(imce.getConf('root_uri', '/'), path);
    }
  };

  /**
   * Returns item url.
   * Uncached parameter allows unique urls per size+date which is useful to display resized/cropped images
   */
  Item.getUrl = function (absolute, uncached) {
    // Allow urls set by plugins on server side.
    var url = this.url;
    if (!url) {
      var rootUrl = imce.getConf('root_url');
      if (rootUrl) {
        var path = encodeURIComponent(this.getPath()).replace(/%2F/g, '/');
        url = imce.joinPaths(rootUrl, path);
      }
    }
    if (url) {
      if (absolute && url.charAt(0) === '/' && url.charAt(1) !== '/') {
        url = location.protocol + '//' + location.host + url;
      }
      if (uncached) {
        url += (url.indexOf('?') === -1 ? '?' : '&') + ('s' + this.size) + ('d' + this.date);
      }
    }
    return url || '';
  };

  /**
   * Formats item uri.
   */
  Item.formatUri = function () {
    return Drupal.checkPlain(this.getUri());
  };

  /**
   * Formats item path.
   */
  Item.formatPath = function () {
    return Drupal.checkPlain(this.path === '.' ? this.name : this.getPath());
  };

  /**
   * Formats item name.
   */
  Item.formatName = function () {
    return Drupal.checkPlain(this.name);
  };

  /**
   * Formats item size.
   */
  Item.formatSize = function () {
    return imce.formatSize(this.size);
  };

  /**
   * Formats item date.
   */
  Item.formatDate = function (dayOnly) {
    return imce.formatDate(this.date, dayOnly);
  };

  /**
   * Formats item width.
   */
  Item.formatWidth = function () {
    return this.width ? this.width * 1 + '' : '';
  };

  /**
   * Formats item height.
   */
  Item.formatHeight = function () {
    return this.height ? this.height * 1 + '' : '';
  };

  /**
   * Formats item dimensions.
   */
  Item.formatDimensions = function () {
    return this.width ? this.width * 1 + 'x' + this.height * 1 : '';
  };

  /**
   * Adds new item properties.
   * Fires property change events for changed properties.
   */
  Item.extend = function (props) {
    if (props) {
      for (var i in props) {
        if (!imce.owns(props, i)) {
          continue;
        }
        this.setProperty(i, props[i]);
      }
    }
  };

  /**
   * Sets property value and trigger change events.
   */
  Item.setProperty = function (prop, val) {
    var oldval = this[prop];
    if (oldval !== val) {
      this[prop] = val;
      this.triggerPropertyChange(prop, oldval);
    }
  };

  /**
   * Sets item name.
   */
  Item.setName = function (name) {
    this.setProperty('name', name);
  };

  /**
   * Triggers property change handlers.
   */
  Item.triggerPropertyChange = function (prop, oldval) {
    var method = 'on' + prop.charAt(0).toUpperCase() + prop.substring(1) + 'Change';
    if (this[method]) {
      this[method](oldval);
      if (this === imce.previewingItem) {
        imce.updatePreview();
      }
    }
  };

  /**
   * Name change handler.
   */
  Item.onNameChange = function (oldname) {
    var Item = this;
    var name = Item.formatName();
    Item.nameEl.innerHTML = name;
    Item.nameEl.title = name;
    if (Item.parent) {
      Item.parent.onItemNameChange(Item, oldname);
    }
  };

  /**
   * Thumbnail change handler.
   */
  Item.onThumbnailChange = function (oldval) {
    if (this.thumbnail) {
      this.iconEl.innerHTML = '<img src="' + this.thumbnail + '" alt="thumbnail">';
      this.iconEl.className += ' imce-item-thumbnail';
    }
    else {
      this.iconEl.innerHTML = '';
      $(this.iconEl).removeClass('imce-item-thumbnail');
    }
  };

  /**
   * Size change handler.
   */
  Item.onSizeChange = function (oldval) {
    var size = this.formatSize();
    this.sizeEl.innerHTML = size;
    this.sizeEl.title = size;
  };

  /**
   * Date change handler.
   */
  Item.onDateChange = function (oldval) {
    var date = this.formatDate(true);
    this.dateEl.innerHTML = date;
    this.dateEl.title = date;
  };

  /**
   * Width change handler.
   */
  Item.onWidthChange = function (oldval) {
    var width = this.formatWidth();
    this.widthEl.innerHTML = width;
    this.widthEl.title = width;
  };

  /**
   * Height change handler.
   */
  Item.onHeightChange = function (oldval) {
    var height = this.formatHeight();
    this.heightEl.innerHTML = height;
    this.heightEl.title = height;
  };


  /**
   * Creates preview element.
   */
  Item.createPreviewEl = function () {
    var el;
    var Item = this;
    var prvEl = imce.createEl('<div class="imce-item-preview"></div>');
    // Info
    var infoEl = imce.createEl('<div class="imce-preview-info"></div>');
    prvEl.appendChild(infoEl);
    // Folder
    if (Item.isFolder) {
      infoEl.appendChild(imce.createEl('<div class="path">' + Item.formatUri() + '</div>'));
      prvEl.className += ' folder';
    }
    // File
    else {
      var url = Item.getUrl(true);
      infoEl.appendChild(imce.createEl('<div class="url"><a href="' + url + '" target="_blank">' + url + '</a></div>'));
    }
    // Size
    if (Item.size) {
      infoEl.appendChild(imce.createEl('<div class="size">' + Item.formatSize() + '</div>'));
    }
    // Dimensions
    if (Item.width) {
      infoEl.appendChild(imce.createEl('<div class="dimensions">' + Item.formatDimensions() + '</div>'));
    }
    // Date
    if (Item.date) {
      infoEl.appendChild(imce.createEl('<div class="date">' + Item.formatDate() + '</div>'));
    }
    // Image
    if (Item.isImageSource() && imce.getConf('preview_images', 1)) {
      el = imce.createEl('<div class="imce-preview-image"><img src="' + Item.getUrl(false, true) + '"></div>');
      prvEl.appendChild(el);
      prvEl.className += ' image';
      el.firstChild.onclick = imce.ePrvImgClick;
    }
    return prvEl;
  };

  /**
   * Sets a state by name.
   */
  Item.setState = function (name) {
    var el;
    var Item = this;
    if (!Item[name]) {
      Item[name] = true;
      $(Item.el).addClass(name);
      if (el = Item.branchEl) {
        $(el).addClass(name);
      }
    }
  };

  /**
   * Unsets a state by name.
   */
  Item.unsetState = function (name) {
    var el;
    var Item = this;
    if (Item[name]) {
      Item[name] = false;
      $(Item.el).removeClass(name);
      if (el = Item.branchEl) {
        $(el).removeClass(name);
      }
    }
  };

  /**
   * Toggles a state by name.
   */
  Item.toggleState = function (name, state) {
    if (state == null) {
      state = !this[name];
    }
    this[state ? 'setState' : 'unsetState'](name);
  };

  /**
   * Scroll the item element into view.
   */
  Item.scrollIntoView = function () {
    imce.scrollToEl(this.el, imce.contentEl, imce.contentHeaderEl.offsetHeight, imce.contentStatusEl.offsetHeight);
  };

  /**
   * Check if the item can be used as an image source.
   */
  Item.isImageSource = function() {
    return this.width || this.ext && this.ext.toLowerCase() === 'svg';
  };


  /**
   * Mousedown event for items.
   */
  imce.eItemMousedown = function (event) {
    var e = imce.eFix(event);
    this.Item.click(e);
    return !(e.ctrlKey || e.shiftKey);
  };

  /**
   * Double-click event for items.
   */
  imce.eItemDblclick = function (event) {
    this.Item.dblClick();
    return false;
  };

  /**
   * Click event for preview image.
   */
  imce.ePrvImgClick = function () {
    var Item = imce.previewingItem;
    if (Item) {
      Item.dblClick();
    }
    return false;
  };

})(jQuery, Drupal, imce);
;
/*global imce:true*/
(function ($, Drupal, imce) {
  'use strict';

  /**
   * @file
   * Defines imce File object.
   */

  /**
   * File.
   */
  imce.File = function (name) {
    this.construct(name);
  };

  /**
   * Item prototype
   */
  var ItemProto = imce.Item.prototype;

  /**
   * File prototype extends Item prototype.
   */
  var File = $.extend(imce.File.prototype, ItemProto);

  /**
   * Initialize the file object.
   */
  File.construct = function (name) {
    this.isFile = true;
    this.type = 'file';
    ItemProto.construct.apply(this, arguments);
  };

  /**
   * Initialize DOM elements.
   */
  File.createEl = function () {
    if (!this.el) {
      ItemProto.createEl.apply(this, arguments);
      this.el.className += ' file';
    }
  };

  /**
   * Name change handler.
   */
  File.onNameChange = function (oldval) {
    ItemProto.onNameChange.apply(this, arguments);
    // Get the new extension
    var File = this;
    var newext = imce.getExt(File.name);
    // Check if the extension has changed
    if (File.ext !== newext) {
      // Remove the classname of old ext
      if (File.ext != null) {
        if (File.ext) {
          $(File.el).removeClass('file-' + File.ext.toLowerCase());
        }
      }
      // Add the classname for new ext
      if (newext) {
        File.el.className += ' file-' + newext.toLowerCase();
      }
      File.ext = newext;
    }
  };

})(jQuery, Drupal, imce);
;
/*global imce:true*/
(function ($, Drupal, imce) {
  'use strict';

  /**
   * @file
   * Defines imce Folder object.
   */

  /**
   * Folder.
   */
  imce.Folder = function (name, conf) {
    this.construct(name, conf);
  };

  /**
   * Item prototype
   */
  var ItemProto = imce.Item.prototype;

  /**
   * Folder prototype extends Item prototype.
   */
  var Folder = $.extend(imce.Folder.prototype, ItemProto);

  /**
   * Constructs the Folder.
   */
  Folder.construct = function (name, conf) {
    var Folder = this;
    Folder.isFolder = true;
    Folder.type = 'folder';
    Folder.items = [];
    Folder.files = {};
    Folder.subfolders = {};
    ItemProto.construct.apply(Folder, arguments);
    Folder.setConf(conf);
  };

  /**
   * Creates folder elements.
   */
  Folder.createEl = function () {
    var nameEl;
    var toggleEl;
    var branchEl;
    var Folder = this;
    if (!Folder.el) {
      // Item elements.
      ItemProto.createEl.apply(Folder, arguments);
      Folder.el.className += ' folder';
      // Folder elements
      Folder.contentEl = imce.createEl('<div class="imce-folder-content clearfix"></div>');
      Folder.subtreeEl = imce.createEl('<div class="imce-subtree"></div>');
      branchEl = Folder.branchEl = imce.createEl('<div class="imce-branch"><span class="imce-branch-toggle"></span><span class="imce-branch-name imce-ficon"></span></div>');
      toggleEl = Folder.branchToggleEl = branchEl.firstChild;
      toggleEl.onclick = imce.eBranchToggleClick;
      nameEl = Folder.branchNameEl = branchEl.children[1];
      nameEl.onclick = imce.eBranchNameClick;
      branchEl.Folder = nameEl.Folder = toggleEl.Folder = Folder;
    }
  };

  /**
   * Sets the folder content.
   */
  Folder.setContent = function (content) {
    var i;
    var Item;
    var list;
    var Folder = this;
    var items = Folder.getItems();
    // Remove the items that no longer exist.
    for (i in items) {
      if (!imce.owns(items, i)) {
        continue;
      }
      Item = items[i];
      list = Item.isFolder ? content.subfolders : content.files;
      // Existing item is not in the list
      if (!list || !imce.owns(list, Item.name)) {
        // Make sure it's not (parent of) a predefined folder
        if (!Item.isFolder || !Item.hasPredefinedPath()) {
          Folder.removeItem(Item);
        }
      }
    }
    Folder.extend(content.props);
    Folder.addContent(content);
    Folder.content = content;
    Folder.updateSubtree();
  };

  /**
   * Adds new files and subfolders.
   */
  Folder.addContent = function (content, selectNew) {
    var Folder = this;
    var files = content.files;
    var subfolders = content.subfolders;
    if (!files && !subfolders) {
      return;
    }
    // Add items
    Folder.addItems(files, 'file');
    Folder.addItems(subfolders, 'folder');
    // Update sort
    if (Folder.active) {
      Folder.sortItems();
    }
    else {
      Folder.needSort = 1;
    }
    Folder.sortTree();
    // Select new items.
    if (selectNew && Folder.active) {
      var name;
      var fname;
      var sname;
      imce.deselectAll();
      if (files) {
        for (fname in files) {
          if (!imce.owns(files, fname)) {
            continue;
          }
          Folder.getItem(fname).select();
        }
      }
      if (subfolders) {
        for (sname in subfolders) {
          if (!imce.owns(subfolders, sname)) {
            continue;
          }
          Folder.getItem(sname).select();
        }
      }
      // Scroll the last item into view
      if (name = (fname || sname)) {
        Folder.getItem(name).scrollIntoView();
      }
    }
  };

  /**
   * Add a list of items of a specific type.
   */
  Folder.addItems = function (items, type) {
    var Item;
    var name;
    var Type = type === 'folder' ? imce.Folder : imce.File;
    if (items) {
      for (name in items) {
        // Update
        if (Item = this.getItem(name)) {
          Item.extend(items[name]);
          this.updateStatus();
        }
        // Insert
        else {
          Item = new Type(name);
          Item.extend(items[name]);
          this.appendItem(Item);
        }
      }
    }
  };

  /**
   * Returns a copy of items array.
   */
  Folder.getItems = function () {
    return this.items.slice(0);
  };

  /**
   * Append an item to the folder.
   */
  Folder.appendItem = function (Item) {
    var Folder = this;
    var name = Item.name;
    var existing;
    if (!Folder.validateAppend(Item)) {
      return;
    }
    // Remove the item from old parent
    Item.remove(true);
    // Remove existing item with the same name
    if (existing = Folder.getItem(name)) {
      existing.remove();
    }
    // Append item.
    Folder.items.push(Item);
    Item.parent = Folder;
    Folder.contentEl.appendChild(Item.el);
    // Append subfolder
    if (Item.isFolder) {
      Folder.prepareSubtree();
      Folder.subtreeEl.appendChild(Item.branchEl);
      Folder.subfolders[name] = Item;
      Item.setPath((Folder.parent ? Folder.path + '/' : '') + Item.name);
    }
    // Append file
    else {
      Folder.files[name] = Item;
    }
    // Update status.
    Folder.updateStatus();
  };

  /**
   * Remove an item from the folder.
   */
  Folder.removeItem = function (Item, shallow) {
    var name = Item.name;
    var Folder = this;
    // Check if the item is a child
    if (Item.parent !== Folder) {
      return;
    }
    // Deep removal
    if (!shallow) {
      // Remove all descendants of the subfolder.
      if (Item.isFolder) {
        for (var i in Item.items) {
          if (!imce.owns(Item.items, i)) {
            continue;
          }
          Item.removeItem(Item.items[i]);
        }
      }
    }
    // Set item free.
    Item.deselect();
    Item.setBusy(false);
    // Remove subfolder
    if (Item.isFolder) {
      if (Item.active) {
        Folder.activate();
      }
      Item.setPath(null);
      delete Folder.subfolders[name];
      imce.removeEl(Item.branchEl);
      Folder.updateSubtree();
    }
    // Remove file
    else {
      delete Folder.files[name];
    }
    // Remove item
    Folder.items.splice(Folder.indexOf(Item), 1);
    delete Item.parent;
    imce.removeEl(Item.el);
    Folder.updateStatus();
  };

  /**
   * Set folder path.
   * Register the folder to the tree.
   */
  Folder.setPath = function (newpath) {
    var i;
    var Folder = this;
    var oldpath = Folder.path;
    var subfolders = Folder.subfolders;
    if (oldpath !== newpath) {
      // Remove
      if (newpath == null) {
        for (i in subfolders) {
          if (!imce.owns(subfolders, i)) {
            continue;
          }
          subfolders[i].setPath(null);
        }
        delete imce.tree[oldpath];
        delete Folder.path;
      }
      // Add
      else {
        Folder.path = newpath;
        imce.tree[newpath] = Folder;
        Folder.setDisabled(!Folder.getConf());
        for (i in subfolders) {
          if (!imce.owns(subfolders, i)) {
            continue;
          }
          subfolders[i].setPath(newpath + '/' + subfolders[i].name);
        }
        Folder.updateStatus();
      }
    }
  };

  /**
   * Returns a permission value.
   */
  Folder.getPermission = function (name) {
    return imce.permissionInFolderConf(name, this.getConf());
  };

  /**
   * Returns folder configuration.
   */
  Folder.getConf = function () {
    var conf = this.conf;
    var parent;
    if (conf) {
      return conf;
    }
    if (parent = this.parent) {
      if (conf = parent.getConf()) {
        if (imce.permissionInFolderConf('browse_subfolders', conf)) {
          return $.extend({inherited: true}, conf);
        }
      }
    }
  };

  /**
   * Sets folder configuration.
   */
  Folder.setConf = function (conf) {
    if (this.conf !== conf) {
      this.conf = conf;
      this.setDisabled(!this.getConf());
    }
  };

  /**
   * Open folder.
   */
  Folder.open = function (refresh) {
    if (refresh || !this.content) {
      this.load();
    }
    this.activate();
  };

  /**
   * Dynamically load folder contents.
   */
  Folder.load = function () {
    if (this.isReady()) {
      this.setLoading(true);
      imce.ajax('browse', {
        activeFolder: this,
        customComplete: imce.xFolderLoadComplete
      });
    }
  };

  /**
   * Activate folder.
   */
  Folder.activate = function () {
    var Folder = this;
    var oldFolder = imce.activeFolder;
    var parent = Folder.parent;
    if (!Folder.active) {
      // Deactivate the old dir.
      if (oldFolder) {
        oldFolder.deactivate();
      }
      // Check sort
      if (Folder.needSort) {
        Folder.sortItems();
      }
      imce.activeFolder = Folder;
      Folder.active = true;
      $(Folder.branchEl).addClass('active');
      // Add the content to the dom if it is fully loaded.
      if (!Folder.loading) {
        Folder.addContentToDom();
      }
      Folder.setContentVisibility(true);
      // Expand parents if collapsed.
      while (parent) {
        parent.expand();
        parent = parent.parent;
      }
      // Update status and header
      Folder.updateHeader();
      Folder.updateStatus();
      // Trigger activateFolder handlers.
      imce.trigger('activateFolder', Folder, oldFolder);
    }
  };

  /**
   * Deactivate folder.
   */
  Folder.deactivate = function () {
    var Folder = this;
    if (Folder.active) {
      Folder.setContentVisibility(false);
      imce.deselectAll();
      imce.activeFolder = null;
      Folder.active = false;
      $(Folder.branchEl).removeClass('active');
    }
  };

  /**
   * Set loading state.
   */
  Folder.setLoading = function (state) {
    var Folder = this;
    if (state) {
      if (!Folder.loading) {
        Folder.setBusy(true);
        Folder.setState('loading');
        if (Folder.active) {
          imce.deselectAll();
        }
      }
    }
    else if (Folder.loading) {
      Folder.setBusy(false);
      Folder.unsetState('loading');
      if (Folder.active) {
        Folder.addContentToDom();
      }
    }
  };

  /**
   * Returns an item by name.
   */
  Folder.getItem = function (name) {
    var Folder = this;
    if (imce.owns(Folder.files, name)) {
      return Folder.files[name];
    }
    if (imce.owns(Folder.subfolders, name)) {
      return Folder.subfolders[name];
    }
  };

  /**
   * Returns an item by index.
   */
  Folder.getItemAt = function (i) {
    return this.items[i];
  };

  /**
   * Returns the index of an item.
   */
  Folder.indexOf = function (Item) {
    return $.inArray(Item, this.items);
  };

  /**
   * Selects all items.
   */
  Folder.selectAll = function () {
    for (var i in this.items) {
      if (!imce.owns(this.items, i)) {
        continue;
      }
      this.items[i].select();
    }
  };

  /**
   * Returns the number of items.
   */
  Folder.countItems = function () {
    return this.items.length;
  };

  /**
   * Returns the number of subfolders.
   */
  Folder.countSubfolders = function () {
    var i;
    var count = 0;
    for (i in this.subfolders) {
      if (!imce.owns(this.subfolders, i)) {
        continue;
      }
      count++;
    }
    return count;
  };

  /**
   * Name change handler.
   */
  Folder.onNameChange = function (oldval) {
    ItemProto.onNameChange.apply(this, arguments);
    this.branchNameEl.innerHTML = Drupal.checkPlain(this.name);
    this.branchNameEl.title = this.name;
  };

  /**
   * Item name change handler.
   * Triggered by imce.Item.onNameChange()
   */
  Folder.onItemNameChange = function (Item, oldname) {
    var Folder = this;
    var name = Item.name;
    var group = Item.isFolder ? Folder.subfolders : Folder.files;
    delete group[oldname];
    group[name] = Item;
    // Set folder path
    if (Item.isFolder) {
      Item.setPath((Folder.parent ? Folder.path + '/' : '') + name);
    }
  };

  /**
   * Double-click handler.
   */
  Folder.dblClick = function () {
    this.open();
  };

  /**
   * Inserts the content element into the main content area.
   */
  Folder.addContentToDom = function () {
    var el = this.contentEl;
    var parentEl = imce.contentEl;
    if (el.parentNode !== parentEl) {
      parentEl.appendChild(el);
    }
  };

  /**
   * Sets visibility of the content element.
   */
  Folder.setContentVisibility = function (show) {
    var el = this.contentEl;
    el.style.display = show ? '' : 'none';
    if (el.scrollTop) {
      el.scrollTop = 0;
    }
  };

  /**
   * Prepares for subfolder appending.
   */
  Folder.prepareSubtree = function () {
    var Folder = this;
    if (Folder.subtreeEl.parentNode !== Folder.branchEl) {
      Folder.branchEl.appendChild(Folder.subtreeEl);
      $(Folder.branchEl).removeClass('leaf');
      // Prevent expanding of inactive dirs except the first activated dir on init
      if (!Folder.active && imce.activeFolder) {
        Folder.expanded = true;
        Folder.shrink();
      }
      else {
        Folder.expand();
      }
    }
  };

  /**
   * Check and remove subtree element if it's empty.
   */
  Folder.updateSubtree = function () {
    if (!this.countSubfolders()) {
      this.shrink();
      imce.removeEl(this.subtreeEl);
      $(this.branchEl).addClass('leaf');
    }
  };

  /**
   * Expands the subtree.
   */
  Folder.expand = function () {
    if (!this.expanded) {
      this.expanded = true;
      $(this.branchEl).addClass('expanded');
      $(this.subtreeEl).show();
    }
  };

  /**
   * Shrinks the subtree.
   */
  Folder.shrink = function () {
    if (this.expanded) {
      this.expanded = false;
      $(this.branchEl).removeClass('expanded');
      $(this.subtreeEl).hide();
    }
  };

  /**
   * Update folder status.
   */
  Folder.updateStatus = function () {
    if (this.active) {
      imce.updateStatus();
    }
  };

  /**
   * Update header sort.
   */
  Folder.updateHeader = function () {
    if (this.active) {
      imce.updateHeader();
    }
  };

  /**
   * Sort folder items by an item property.
   */
  Folder.sortItems = function (key, desc) {
    var i;
    var sorter;
    var Folder = this;
    var items = Folder.items;
    var active = Folder.activeSort || imce.activeSort || imce.local.activeSort || {};
    if (key == null) {
      key = active.key || 'name';
    }
    if (desc == null) {
      desc = !!active.desc;
    }
    // Remove lazy sort flag.
    Folder.needSort = 0;
    // Check sorter
    if (sorter = imce.sorters[key]) {
      items.sort(sorter);
      if (desc) {
        items.reverse();
      }
      for (i in items) {
        if (!imce.owns(items, i)) {
          continue;
        }
        this.contentEl.appendChild(items[i].el);
      }
      Folder.activeSort = {key: key, desc: desc};
      Folder.updateHeader();
    }
  };

  /**
   * Sorts folder tree elements by name.
   */
  Folder.sortTree = function () {
    var i;
    var Folder = this;
    var subfolders = Folder.subfolders;
    var arr = [];
    for (i in subfolders) {
      if (!imce.owns(subfolders, i)) {
        continue;
      }
      arr.push(subfolders[i]);
    }
    if (arr.length > 1) {
      arr.sort(imce.sortBranchName);
      for (i in arr) {
        if (!imce.owns(arr, i)) {
          continue;
        }
        Folder.subtreeEl.appendChild(arr[i].branchEl);
      }
    }
  };

  /**
   * Check if the item can be appended to the folder.
   */
  Folder.validateAppend = function (Item, copy) {
    // Disallow self appending
    if (Item === this) {
      return false;
    }
    var parent = Item.parent;
    // Allow orphan appending
    if (!parent) {
      return true;
    }
    // Disallow re-appending children
    if (!copy && parent === this) {
      return false;
    }
    // Disallow (grand)parents appending
    if (Item.isFolder) {
      for (parent = this.parent; parent; parent = parent.parent) {
        if (parent === Item) {
          return false;
        }
      }
    }
    return true;
  };

  /**
   * Checks if the folder is predefined.
   */
  Folder.isPredefined = function () {
    return !!this.conf;
  };

  /**
   * Returns the first predefined descendent including itself.
   */
  Folder.hasPredefinedPath = function () {
    if (this.isPredefined()) {
      return this;
    }
    var i;
    var Folder;
    var subfolders = this.subfolders;
    for (i in subfolders) {
      if (Folder = subfolders[i].hasPredefinedPath()) {
        return Folder;
      }
    }
    return false;
  };

  /**
   * Returns status text.
   */
  Folder.formatStatus = function () {
    return '<div class="items">' + imce.formatItemsStatus(this.countItems(), this.getSize()) + '</div>';
  };

  /**
   * Returns the size of the folder.
   */
  Folder.getSize = function () {
    var i;
    var size = 0;
    var files = this.files;
    for (i in files) {
      if (!imce.owns(files, i)) {
        continue;
      }
      size += files[i].size || 0;
    }
    return size;
  };


  /**
   * Click event for branch name.
   */
  imce.eBranchNameClick = function (event) {
    this.Folder.open();
    return false;
  };


  /**
   * Click event for branch toggle.
   */
  imce.eBranchToggleClick = function (event) {
    var Folder = this.Folder;
    if (Folder.countSubfolders()) {
      if (Folder.expanded) {
        Folder.shrink();
      }
      else {
        Folder.expand();
      }
    }
    else {
      Folder.open();
    }
    return false;
  };

  /**
   * Ajax complete handler for folder loading.
   */
  imce.xFolderLoadComplete = function (xhr, status) {
    var content;
    var opt = this;
    var Folder = opt.activeFolder;
    var response = opt.response;
    if (response && (content = response.content)) {
      Folder.setContent(content);
    }
    Folder.setLoading(false);
    if (Folder.countSubfolders()) {
      Folder.expand();
    }
  };

})(jQuery, Drupal, imce);
;
/*global imce:true*/
(function ($, Drupal, imce) {
  'use strict';

  /**
   * @file
   * Defines imce Toolbar Button object.
   */

  /**
   * Toolbar button constructor.
   */
  imce.Tbb = function (id, opt) {
    this.construct(id, opt);
  };

  /**
   * Toolbar button prototype.
   */
  var Tbb = imce.Tbb.prototype;

  /**
   * Constructs button object.
   */
  Tbb.construct = function (id, opt) {
    var Tbb = imce.toolbarButtons[id] = this;
    Tbb.id = id;
    $.extend(Tbb, opt);
    // Append or prepend the element.
    var el = Tbb.createEl();
    var parent = imce.toolbarEl;
    if (Tbb.prepend && parent.firstChild) {
      parent.insertBefore(el, parent.firstChild);
    }
    else {
      parent.appendChild(el);
    }
    // Add shortcut
    if (Tbb.shortcut) {
      imce.addShortcut(Tbb.shortcut, el);
    }
  };

  /**
   * Creates toolbar button element.
   */
  Tbb.createEl = function () {
    var Tbb = this;
    var el = Tbb.el;
    var icon;
    if (!el) {
      el = Tbb.el = imce.createEl('<span class="imce-tbb imce-ficon" role="button"><span class="imce-tbb-title"></span></span>');
      if (icon = Tbb.icon) {
        el.className += ' imce-ficon-' + icon;
      }
      el.className += ' imce-tbb--' + Tbb.id;
      el.title = (Tbb.tooltip || Tbb.title) + (Tbb.shortcut ? ' (' + Tbb.shortcut + ')' : '');
      el.onclick = imce.eTbbClick;
      el.Tbb = Tbb;
      el.firstChild.innerHTML = Tbb.title;
    }
    return el;
  };

  /**
   * Create item popup.
   */
  Tbb.createPopupEl = function () {
    var Tbb = this;
    var el = Tbb.popupEl;
    if (!el) {
      el = Tbb.popupEl = imce.createLayer('imce-tbb-popup');
      el.className += ' imce-tbb-popup--' + Tbb.id;
      el.onkeydown = imce.eTbbPopupKeydown;
      el.Tbb = Tbb;
      if (Tbb.content) {
        el.appendChild(Tbb.content);
      }
    }
    return el;
  };

  /**
   * Open item popup.
   */
  Tbb.openPopup = function (autoclose) {
    var Tbb = this;
    if (!Tbb.active) {
      Tbb.createPopupEl();
      Tbb.setActive(true);
      var popupEl = Tbb.popupEl;
      var $el = $(Tbb.el);
      var css = $el.offset();
      css.top += $el.outerHeight(true);
      $(popupEl).css(css).fadeIn();
      imce.fixPosition(popupEl);
      // Focus on first input
      $('form').find('input,select,textarea').filter(':visible').eq(0).trigger('focus');
      if (autoclose) {
        $(document).on('mousedown', {Tbb: Tbb}, imce.eTbbDocMousedown);
      }
      if (Tbb.onopen) {
        Tbb.onopen.apply(Tbb, arguments);
      }
    }
  };

  /**
   * Close item popup.
   */
  Tbb.closePopup = function () {
    var Tbb = this;
    if (Tbb.popupEl && Tbb.active) {
      Tbb.setActive(false);
      $(Tbb.popupEl).hide();
      imce.contentEl.focus();
      if (Tbb.onclose) {
        Tbb.onclose.apply(Tbb, arguments);
      }
    }
  };

  /**
   * Set active state of the item.
   */
  Tbb.setActive = function (state) {
    this.toggleState('active', !!state);
  };

  /**
   * Set busy state of the item.
   */
  Tbb.setBusy = function (state) {
    this.toggleState('busy', !!state);
  };

  /**
   * Set disabled state of the item.
   */
  Tbb.setDisabled = function (state) {
    this.toggleState('disabled', !!state);
  };

  /**
   * Set/unset a state by name.
   */
  Tbb.toggleState = function (name, state) {
    var Tbb = this;
    var oldState = Tbb[name];
    if (state == null) {
      state = !oldState;
    }
    if (state) {
      if (!oldState) {
        Tbb[name] = true;
        $(Tbb.el).addClass(name);
      }
    }
    else if (oldState) {
      Tbb[name] = false;
      $(Tbb.el).removeClass(name);
    }
  };

  /**
   * Trigger click handler of the button.
   */
  Tbb.click = function (event) {
    var Tbb = this;
    if (!Tbb.disabled) {
      if (Tbb.handler && !Tbb.busy) {
        Tbb.handler.call(Tbb, imce.eFix(event));
      }
      if (Tbb.content) {
        Tbb.openPopup(true);
      }
    }
  };


  /**
   * Click event for toolbar buttons.
   */
  imce.eTbbClick = function (event) {
    this.Tbb.click(event);
  };

  /**
   * Mousedown event for document in order to close toolbar button popup.
   */
  imce.eTbbDocMousedown = function (e) {
    var Tbb = e.data.Tbb;
    var el = Tbb.popupEl;
    if (el !== e.target && !$.contains(el, e.target)) {
      Tbb.closePopup();
      $(document).off('mousedown', imce.eTbbDocMousedown);
    }
  };

  /**
   * Keydown event for toolbar button popup.
   */
  imce.eTbbPopupKeydown = function (event) {
    var e = event || window.event;
    // Close on Esc
    if (e.keyCode === 27) {
      this.Tbb.closePopup();
      return false;
    }
  };

})(jQuery, Drupal, imce);
;
/*global imce:true*/
(function ($, Drupal, imce) {
  'use strict';

  /**
   * @file
   * Defines Newfolder plugin for Imce.
   */

  /**
   * Init handler for New folder.
   */
  imce.bind('init', imce.newfolderInit = function () {
    if (imce.hasPermission('create_subfolders')) {
      // Add toolbar button
      imce.addTbb('newfolder', {
        title: Drupal.t('New folder'),
        permission: 'create_subfolders',
        content: imce.createNewfolderForm(),
        shortcut: 'Ctrl+N',
        icon: 'folder-add'
      });
    }
  });

  /**
   * Creates new folder form.
   */
  imce.createNewfolderForm = function () {
    var form = imce.newfolderForm;
    if (!form) {
      form = imce.newfolderForm = imce.createEl('<form class="imce-newfolder-form"><input type="text" name="newfolder" class="imce-newfolder-input" size="16" /><button type="submit" name="op" class="imce-newfolder-button">' + Drupal.t('Create') + '</button></form>');
      form.elements.newfolder.placeholder = Drupal.t('Folder name');
      form.onsubmit = imce.eNewfolderSubmit;
    }
    return form;
  };

  /**
   * Submit event for new folder form.
   */
  imce.eNewfolderSubmit = function () {
    var name = this.elements.newfolder.value;
    if (imce.validateNewfolder(name)) {
      imce.ajax('newfolder', {data: {newfolder: name}});
      imce.getTbb('newfolder').closePopup();
    }
    return false;
  };

  /**
   * Validates new folder creation.
   */
  imce.validateNewfolder = function (name, parentFolder) {
    if (!parentFolder) {
      parentFolder = imce.activeFolder;
    }
    if (!parentFolder.isReady() || !parentFolder.getPermission('create_subfolders') || !imce.validateFileName(name)) {
      return false;
    }
    if (parentFolder.getItem(name)) {
      imce.setMessage(Drupal.t('%filename already exists.', {'%filename': name}));
      return false;
    }
    return true;
  };

})(jQuery, Drupal, imce);
;
/*global imce:true*/
(function ($, Drupal, imce) {
  'use strict';

  /**
   * @file
   * Defines Upload plugin for Imce.
   */

  /**
   * Init handler for Upload.
   */
  imce.bind('init', imce.uploadInit = function () {
    if (imce.hasPermission('upload_files')) {
      // Add toolbar button
      imce.addTbb('upload', {
        title: Drupal.t('Upload'),
        permission: 'upload_files',
        content: imce.createUploadForm(),
        shortcut: 'Ctrl+Alt+U',
        icon: 'upload'
      });
    }
  });

  /**
   * Creates the upload form.
   */
  imce.createUploadForm = function () {
    var els;
    var el;
    var exts;
    var form = imce.uploadForm;
    var name = 'files[imce][]';
    if (form) {
      return form;
    }
    form = imce.uploadForm = imce.createEl('<form class="imce-upload-form" method="post" enctype="multipart/form-data" accept-charset="UTF-8">' +
    '<div class="imce-form-item imce-form-file">' +
      '<label>' + Drupal.t('File') + '</label>' +
      '<input type="file" name="' + name + '" class="imce-file-input" multiple />' +
    '</div>' +
    '<div class="imce-form-actions">' +
      '<button type="submit" name="op" class="imce-upload-button">' + Drupal.t('Upload') + '</button>' +
    '</div>' +
    '<input type="hidden" name="jsop" value="upload" />' +
    '<input type="hidden" name="token" />' +
  '</form>');
    // Set action
    form.action = imce.getConf('ajax_url');
    els = form.elements;
    // Set token
    els.token.value = imce.getConf('token');
    // Set accepted extensions.
    el = els[name];
    exts = imce.getConf('extensions', '');
    // Skip for * which is interpreted incorrectly by some browsers.
    if (exts !== '*') {
      el.accept = '.' + exts.replace(/\s+/g, ',.');
    }
    // Ajax upload
    if (imce.canAjaxUpload()) {
      imce.activeUq = new imce.UploadQueue({name: name, accept: el.accept});
      form.insertBefore(imce.activeUq.el, form.firstChild);
      form.className += ' uq';
      if (imce.getConf('upload_auto_start', 1)) {
        form.className += ' auto-start';
      }
      form.onsubmit = imce.eUploadQueueSubmit;
    }
    // Iframe upload
    else {
      form.setAttribute('target', 'imce_upload_iframe');
      form.appendChild(imce.createEl('<input type="hidden" name="active_path" />'));
      form.appendChild(imce.createEl('<input type="hidden" name="return_html" value="1" />'));
      form.onsubmit = imce.eUploadIframeSubmit;
    }
    return form;
  };

  /**
   * Submit event for upload form with the upload queue.
   */
  imce.eUploadQueueSubmit = function (event) {
    imce.activeUq.start();
    return false;
  };

  /**
   * Submit event for upload form with iframe.
   */
  imce.eUploadIframeSubmit = function (event) {
    if (!imce.validateUploadForm(this)) {
      return false;
    }
    imce.createUploadIframe();
    this.elements.active_path.value = imce.activeFolder.getPath();
    imce.uploadSetBusy(true);
  };

  /**
   * Validates upload form before submit.
   */
  imce.validateUploadForm = function (form) {
    var i;
    var file;
    var input = form.elements['files[imce][]'];
    var files = input.files;
    // HTML5
    if (files) {
      if (!files.length) {
        return false;
      }
      for (i = 0; file = files[i]; i++) {
        if (!imce.validateFileUpload(file)) {
          return false;
        }
      }
      return true;
    }
    // Old file input
    if (input.value) {
      file = {name: input.value.split(input.value.indexOf('/') === -1 ? '\\' : '/').pop()};
      return imce.validateFileUpload(file);
    }
    return false;
  };

  /**
   * Validates a file before uploading.
   */
  imce.validateFileUpload = function (file) {
    // Extension
    var exts = imce.getConf('extensions', '');
    if (exts !== '*' && !imce.validateExtension(imce.getExt(file.name), exts)) {
      return false;
    }
    // Size
    var maxsize = imce.getConf('maxsize');
    if (maxsize && file.size && file.size > maxsize) {
      imce.setMessage(Drupal.t('%filename is %filesize exceeding the maximum file size of %maxsize.', {
        '%filename': file.name,
        '%filesize': imce.formatSize(file.size),
        '%maxsize': imce.formatSize(maxsize)
      }));
      return false;
    }
    // Name
    if (!imce.validateFileName(file.name)) {
      return false;
    }
    // Trigger validators.
    return $.inArray(false, imce.trigger('validateFileUpload', file)) === -1;
  };

  /**
   * Creates upload iframe.
   */
  imce.createUploadIframe = function () {
    var el = imce.uploadIframe;
    if (!el) {
      el = imce.uploadIframe = imce.createEl('<iframe name="imce_upload_iframe" class="imce-upload-iframe" style="position: absolute; top: -9999px; left: -9999px;" src="javascript: "></iframe>');
      document.body.appendChild(el);
      setTimeout(function () {
        el.onload = imce.eUploadIframeLoad;
      });
    }
    return el;
  };

  /**
   * Load event of upload iframe.
   */
  imce.eUploadIframeLoad = function (event) {
    var text;
    var response;
    var doc;
    var $body;
    var el = this;
    try {
      doc = el.contentDocument || el.contentWindow && el.contentWindow.document;
      if (doc) {
        $body = $(doc.body);
        if (text = $body.find('textarea').eq(0).val()) {
          response = $.parseJSON(text);
        }
        $body.empty();
      }
    }
    catch (err) {
      imce.delayError(err);
    }
    imce.uploadIframeComplete(response, text);
  };

  /**
   * Complete handler of iframe upload;
   */
  imce.uploadIframeComplete = function (response, text) {
    // Got a proper response
    if (response) {
      imce.ajaxProcessResponse(response);
      if (response.added) {
        imce.uploadResetInput(imce.uploadForm.elements['files[imce][]']);
        imce.getTbb('upload').closePopup();
      }
    }
    // Failed
    else {
      imce.setMessage(Drupal.t('Invalid response received from the server.'));
      if (text) {
        imce.setMessage('<pre>' + Drupal.checkPlain(text) + '</pre>');
      }
    }
    imce.uploadSetBusy(false);
  };

  /**
   * Set upload busy state.
   */
  imce.uploadSetBusy = function (state) {
    $('.imce-upload-button', imce.uploadForm).toggleClass('busy', state)[0].disabled = state;
  };

  /**
   * Check support for ajax upload.
   */
  imce.canAjaxUpload = function () {
    var support = imce.ajaxUploadSupport;
    if (support == null) {
      try {
        support = !!(window.FormData && (new XMLHttpRequest().upload));
      }
      catch (err) {
        support = false;
      }
      imce.ajaxUploadSupport = support;
    }
    return support;
  };

  /**
   * Resets a file input.
   */
  imce.uploadResetInput = function (input) {
    // Try value reset first
    if ($(input).val('').val()) {
      // Use form reset
      var form = document.createElement('form');
      var parent = input.parentNode;
      form.style.display = 'none';
      parent.insertBefore(form, input);
      form.appendChild(input);
      form.reset();
      parent.insertBefore(input, form);
      parent.removeChild(form);
    }
  };

})(jQuery, Drupal, imce);
;
/*global imce:true*/
(function ($, Drupal, imce) {
  'use strict';

  /**
   * @file
   * Defines imce Upload Queue and Upload Queue Item.
   */

  /**
   * Upload queue constructor.
   */
  imce.UploadQueue = function (conf) {
    this.construct(conf);
  };

  /**
   * Upload queue prototype.
   */
  var Uq = imce.UploadQueue.prototype;

  /**
   * Constructs upload queue.
   */
  Uq.construct = function (conf) {
    var Uq = this;
    Uq.items = {};
    Uq.queue = [];
    Uq.conf = $.extend({name: 'files[imce][]'}, conf);
    Uq.createEl();
  };

  /**
   * Creates upload queue element.
   */
  Uq.createEl = function () {
    var Uq = this;
    var el = Uq.el;
    var inputEl;
    var accept;
    if (!el) {
      el = Uq.el = imce.createEl('<div class="imce-uq"><span class="imce-uq-button imce-ficon imce-ficon-plus"><span class="imce-uq-label">' + Drupal.t('Add file') + '</span><input type="file" class="imce-uq-input" multiple /></span><div class="imce-uq-items"></div></div>');
      inputEl = Uq.inputEl = el.firstChild.lastChild;
      inputEl.onchange = imce.eUqInputChange;
      if (accept = Uq.conf.accept) {
        inputEl.accept = accept;
      }
      Uq.itemsEl = el.lastChild;
      el.Uq = inputEl.Uq = Uq;
    }
    return el;
  };

  /**
   * Starts the queue.
   */
  Uq.start = function () {
    var Uq = this;
    if (!Uq.running && Uq.queue.length) {
      if (Uq.next()) {
        Uq.running = true;
        imce.uploadSetBusy(true);
      }
    }
    return Uq.running;
  };

  /**
   * Ends the queue.
   */
  Uq.end = function () {
    if (this.running) {
      this.running = false;
      imce.uploadSetBusy(false);
      imce.getTbb('upload').closePopup();
    }
  };

  /**
   * Process the first available item in the queue.
   */
  Uq.next = function () {
    var i;
    var Item;
    var queue = this.queue.slice(0);
    for (i = 0; Item = queue[i]; i++) {
      // Remove completed items from the queue.
      if (Item.completed) {
        Item.remove();
      }
      else if (Item.start()) {
        return Item;
      }
    }
    // No items left. End the queue if running.
    this.end();
  };

  /**
   * Select files from a file reference list.
   */
  Uq.selectFiles = function (list) {
    var i;
    var file;
    var Item;
    var ret;
    var path = imce.activeFolder.getPath();
    for (i = 0; file = list[i]; i++) {
      if (imce.validateFileUpload(file)) {
        Item = new imce.UploadQueueItem(file, path);
        if (this.addItem(Item)) {
          if (!ret) {
            ret = {};
          }
          ret[i] = Item.id;
        }
        else {
          Item.remove();
        }
      }
    }
    return ret;
  };

  /**
   * Returns a queue item.
   */
  Uq.getItem = function (id) {
    return this.items[id];
  };

  /**
   * Adds a queue item.
   */
  Uq.addItem = function (Item) {
    var existing;
    var Uq = this;
    var id = Item.id;
    // Check existing
    if (existing = Uq.getItem(id)) {
      existing.remove(true);
    }
    Item.Uq = Uq;
    Uq.items[id] = Uq.queue[Uq.queue.length] = Item;
    Uq.itemsEl.appendChild(Item.el);
    return Item;
  };

  /**
   * Removes a queue item.
   */
  Uq.removeItem = function (Item, quick) {
    var Uq = this;
    var queue = Uq.queue;
    var i = $.inArray(Item, queue);
    if (i !== -1) {
      queue.splice(i, 1);
      delete Uq.items[Item.id];
      if (quick) {
        $(Item.el).remove();
      }
      else {
        $(Item.el).fadeOut(1000, imce.eUqItemFadeout);
      }
      return Item;
    }
  };

  /**
   * Prepare ajax options for an item.
   */
  Uq.ajaxPrepare = function (Item) {
    var i;
    var field;
    var data;
    var formData;
    var Folder;
    var Uq = this;
    var file = Item.file;
    var dest = Item.destination;
    // Check file and destination
    if (!file || !dest || !(Folder = imce.getFolder(dest))) {
      return;
    }
    // Prepare form data
    data = $(Uq.inputEl.form).serializeArray().concat([{name: 'active_path', value: dest}], Item.formData || []);
    formData = new FormData();
    for (i = 0; field = data[i]; i++) {
      if (field.name) {
        formData.append(field.name, field.value);
      }
    }
    formData.append(Uq.conf.name, Item.file);
    // Extend default ajax options
    return $.extend(imce.ajaxDefaults(), {
      data: formData,
      processData: false,
      contentType: false,
      customBeforeSend: imce.xUqItemBeforeSend,
      customComplete: imce.xUqItemComplete,
      xhr: imce.xUqItemXhr,
      itemId: Item.id,
      activeFolder: Folder
    });
  };


  /**
   * Upload queue item constructor.
   */
  imce.UploadQueueItem = function (file, destination) {
    this.construct(file, destination);
  };

  /**
   * Upload queue item prototype.
   */
  var UqItem = imce.UploadQueueItem.prototype;

  /**
   * Constructs upload queue item.
   */
  UqItem.construct = function (file, destination) {
    this.file = file;
    this.destination = destination;
    this.id = imce.joinPaths(destination, file.name);
    this.createEl();
  };

  /**
   * Creates upload queue element.
   */
  UqItem.createEl = function () {
    var cancelEl;
    var name;
    var Item = this;
    var el = Item.el;
    var file = Item.file;
    if (!el) {
      name = Drupal.checkPlain(file.name);
      el = Item.el = imce.createEl('<div class="imce-uqi"><div class="imce-uqi-cancel"></div><div class="imce-uqi-info"><span class="imce-uqi-name" title="' + name + '">' + name + '</span><span class="imce-uqi-size">' + imce.formatSize(file.size) + '</span></div><div class="imce-uqi-progress"><div class="imce-uqi-bar"></div></div><div class="imce-uqi-percent">' + Drupal.t('!percent%', {'!percent': 0}) + '</div></div>');
      el.Item = Item;
      // Set cancel element events
      cancelEl = el.firstChild;
      cancelEl.onclick = imce.eUqItemCancelClick;
      cancelEl.onmousedown = imce.eUqItemCancelMousedown;
    }
    return el;
  };

  /**
   * Removes the item from queue.
   */
  UqItem.remove = function (quick) {
    var ret;
    var Item = this;
    var Uq = Item.Uq;
    Item.stop();
    if (Uq) {
      Uq.removeItem(Item, quick);
    }
    Item.Uq = Item.xhr = Item.file = Item.formData = Item.el.Item = null;
    return ret;
  };

  /**
   * Start processing the item.
   */
  UqItem.start = function () {
    var opt;
    var Item = this;
    var Uq = Item.Uq;
    if (Uq && !Item.active && !Item.completed) {
      // Get ajax options
      if (opt = Uq.ajaxPrepare(Item)) {
        Item.active = true;
        $(Item.el).addClass('active');
        Item.xhr = $.ajax(opt);
        Uq.activeItem = Item;
        return Uq.activeItem;
      }
    }
  };

  /**
   * Stops processing the item.
   */
  UqItem.stop = function () {
    var Item = this;
    if (Item.active) {
      Item.active = false;
      $(Item.el).removeClass('active');
      if (Item.xhr) {
        Item.xhr.abort();
      }
      // Make sure the item is completed
      Item.complete();
    }
  };

  /**
   * Sets the item as completed.
   */
  UqItem.complete = function (status) {
    var Item = this;
    var Uq = Item.Uq;
    if (!Item.completed) {
      Item.completed = true;
      Item.status = status;
      $(Item.el).addClass(status ? 'success' : 'fail');
      if (status) {
        $('.imce-uqi-percent', Item.el).html(Drupal.t('!percent%', {'!percent': 100}));
      }
      // Check if this is the active item of the queue
      if (Uq && Uq.activeItem === Item) {
        Uq.activeItem = null;
        // Continue queue
        if (Uq.running) {
          Uq.next();
        }
      }
      // Make sure the item is stopped
      Item.stop();
    }
  };

  /**
   * Sets item progress.
   */
  UqItem.progress = function (percent) {
    $(this.el).find('.imce-uqi-percent').text(Drupal.t('!percent%', {'!percent': percent * 1})).end().find('.imce-uqi-bar').css('width', percent * 1 + '%');
  };


  /**
   * Change event of upload queue input
   */
  imce.eUqInputChange = function () {
    this.Uq.selectFiles(this.files);
    imce.uploadResetInput(this);
    if (imce.getConf('upload_auto_start', 1)) {
      $('.imce-upload-button', this.form).trigger('click');
    }
  };

  /**
   * Click event for cancel button of queue item.
   */
  imce.eUqItemCancelClick = function (event) {
    var Item = $(this).closest('.imce-uqi')[0].Item;
    if (Item) {
      Item.remove(true);
    }
    return false;
  };

  /**
   * Mousedown event for cancel button of queue item.
   */
  imce.eUqItemCancelMousedown = function (event) {
    return false;
  };

  /**
   * Fadeout callback for queue item.
   */
  imce.eUqItemFadeout = function () {
    $(this).remove();
  };

  /**
   * Ajax beforeSend handler of upload queue.
   */
  imce.xUqItemBeforeSend = function (xhr) {
    // Replaced by imce.xUqItemXhr
  };

  /**
   * Ajax xhr handler of upload queue.
   */
  imce.xUqItemXhr = function () {
    var id = this.itemId;
    var xhr = new XMLHttpRequest();
    xhr.upload.onprogress = function (e) {
      var Item = imce.activeUq.getItem(id);
      if (Item) {
        Item.progress(parseInt(e.loaded * 100 / e.total));
      }
    };
    return xhr;
  };

  /**
   * Ajax complete handler of upload queue.
   */
  imce.xUqItemComplete = function (xhr, status) {
    var opt = this;
    var Item = imce.activeUq.getItem(opt.itemId);
    status = !!(opt.response && opt.response.added);
    if (Item) {
      Item.complete(status);
    }
  };

})(jQuery, Drupal, imce);
;
/*global imce:true*/
(function ($, Drupal, imce) {
  'use strict';

  /**
   * @file
   * Defines Delete plugin for Imce.
   */

  /**
   * Init handler for Delete.
   */
  imce.bind('init', imce.deleteInit = function () {
    // Check if delete permission exists.
    if (imce.hasPermission('delete_files') || imce.hasPermission('delete_subfolders')) {
      // Add toolbar button.
      imce.addTbb('delete', {
        title: Drupal.t('Delete'),
        permission: 'delete_files|delete_subfolders',
        handler: imce.deleteSelection,
        shortcut: 'DEL',
        icon: 'delete'
      });
    }
  });

  /**
   * Deletes the selected items in the active folder.
   */
  imce.deleteSelection = function () {
    var items = imce.getSelection();
    if (imce.validateDelete(items)) {
      if (confirm(Drupal.formatPlural(items.length, 'Delete !filename?', 'Delete the selected @count items?', {'!filename': items[0].name}))) {
        imce.ajaxItems('delete', items);
      }
    }
  };

  /**
   * Validates item deletion.
   */
  imce.validateDelete = function (items) {
    return imce.activeFolder.isReady() && imce.validateCount(items) && imce.validatePermissions(items, 'delete_files', 'delete_subfolders') && imce.validatePredefinedPath(items);
  };

})(jQuery, Drupal, imce);
;
/*global imce:true*/
(function ($, Drupal, imce) {
  'use strict';

  /**
   * @file
   * Defines Resize plugin for Imce.
   */

  /**
   * Init handler for Resize.
   */
  imce.bind('init', imce.resizeInit = function () {
    if (imce.hasPermission('resize_images')) {
      // Add toolbar button
      imce.addTbb('resize', {
        title: Drupal.t('Resize'),
        permission: 'resize_images',
        content: imce.createResizeForm(),
        shortcut: 'Ctrl+Alt+R',
        icon: 'image'
      });
    }
  });

  /**
   * Creates resize form.
   */
  imce.createResizeForm = function () {
    var form = imce.resizeForm;
    if (!form) {
      form = imce.resizeForm = imce.createEl('<form class="imce-resize-form">' +
        '<div class="imce-form-item imce-resize-dimensions">' +
          '<input type="number" name="width" class="imce-resize-width-input" min="1" step="1" />' +
          '<span class="imce-resize-separator">x</span>' +
          '<input type="number" name="height" class="imce-resize-height-input" min="1" step="1" />' +
        '</div>' +
        '<div class="imce-form-item imce-resize-copy">' +
          '<label><input type="checkbox" name="copy" class="imce-resize-copy-input" />' + Drupal.t('Create a copy') + '</label>' +
        '</div>' +
        '<div class="imce-form-actions">' +
          '<button type="submit" name="op" class="imce-resize-button">' + Drupal.t('Resize') + '</button>' +
        '</div>' +
      '</form>');
      form.onsubmit = imce.eResizeSubmit;
      // Set max values
      var els = form.elements;
      els.width.max = imce.getConf('maxwidth') || 10000;
      els.height.max = imce.getConf('maxheight') || 10000;
      // Set placeholders
      els.width.placeholder = Drupal.t('Width');
      els.height.placeholder = Drupal.t('Height');
      // Set focus event
      els.width.onfocus = els.height.onfocus = imce.eResizeInputFocus;
    }
    return form;
  };

  /**
   * Submit event for resize form.
   */
  imce.eResizeSubmit = function () {
    var data;
    var els = this.elements;
    var width = parseInt(els.width.value * 1);
    var height = parseInt(els.height.value * 1);
    var copy = els.copy.checked ? 1 : 0;
    var items = imce.getSelection();
    if (imce.validateResize(items, width, height, copy)) {
      data = {width: width, height: height, copy: copy};
      imce.ajaxItems('resize', items, {data: data});
      imce.getTbb('resize').closePopup();
    }
    return false;
  };

  /**
   * Validates item resizing.
   */
  imce.validateResize = function (items, width, height, copy) {
    return imce.activeFolder.isReady() && imce.validateCount(items) && imce.validateImageTypes(items) && imce.validateDimensions(items, width, height) && imce.validatePermissions(items, 'resize_images');
  };

  /**
   * Focus event for resize width/height input.
   */
  imce.eResizeInputFocus = function () {
    var el = this;
    var val = el.value;
    // Apply aspect ratio of the selected image after min delay.
    setTimeout(function () {
      if (el === document.activeElement && val === el.value) {
        var ratio;
        var els = el.form.elements;
        var isWidth = els.width === el;
        var value = els[isWidth ? 'height' : 'width'].value * 1;
        var Item = imce.previewingItem;
        if (Item && Item.width && value) {
          ratio = Item.width / Item.height;
          el.value = Math.round(isWidth ? value * ratio : value / ratio);
        }
        el = null;
      }
    });
  };

})(jQuery, Drupal, imce);
;
