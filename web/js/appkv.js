/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});

/*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

if (typeof jQuery === 'undefined') { throw new Error('Bootstrap\'s JavaScript requires jQuery') }

/* ========================================================================
 * Bootstrap: transition.js v3.2.0
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.2.0
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.2.0'

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.hasClass('alert') ? $this : $this.parent()
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(150) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.2.0
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.2.0'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state = state + 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    $el[val](data[state] == null ? this.options[state] : data[state])

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked') && this.$element.hasClass('active')) changed = false
        else $parent.find('.active').removeClass('active')
      }
      if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change')
    }

    if (changed) this.$element.toggleClass('active')
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document).on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
    var $btn = $(e.target)
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
    Plugin.call($btn, 'toggle')
    e.preventDefault()
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.2.0
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element).on('keydown.bs.carousel', $.proxy(this.keydown, this))
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      =
    this.sliding     =
    this.interval    =
    this.$active     =
    this.$items      = null

    this.options.pause == 'hover' && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.2.0'

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true
  }

  Carousel.prototype.keydown = function (e) {
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || $active[type]()
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var fallback  = type == 'next' ? 'first' : 'last'
    var that      = this

    if (!$next.length) {
      if (!this.options.wrap) return
      $next = this.$element.find('.item')[fallback]()
    }

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd($active.css('transition-duration').slice(0, -1) * 1000)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  $(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  })

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.2.0
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.transitioning = null

    if (this.options.parent) this.$parent = $(this.options.parent)
    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.2.0'

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var actives = this.$parent && this.$parent.find('> .panel > .in')

    if (actives && actives.length) {
      var hasData = actives.data('bs.collapse')
      if (hasData && hasData.transitioning) return
      Plugin.call(actives, 'hide')
      hasData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(350)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse')
      .removeClass('in')

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .trigger('hidden.bs.collapse')
        .removeClass('collapsing')
        .addClass('collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(350)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && option == 'show') option = !option
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var href
    var $this   = $(this)
    var target  = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7
    var $target = $(target)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()
    var parent  = $this.attr('data-parent')
    var $parent = parent && $(parent)

    if (!data || !data.transitioning) {
      if ($parent) $parent.find('[data-toggle="collapse"][data-parent="' + parent + '"]').not($this).addClass('collapsed')
      $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
    }

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.2.0
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.2.0'

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.trigger('focus')

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown', relatedTarget)
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27)/.test(e.keyCode)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive || (isActive && e.keyCode == 27)) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.divider):visible a'
    var $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc)

    if (!$items.length) return

    var index = $items.index($items.filter(':focus'))

    if (e.keyCode == 38 && index > 0)                 index--                        // up
    if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
    if (!~index)                                      index = 0

    $items.eq(index).trigger('focus')
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $parent = getParent($(this))
      var relatedTarget = { relatedTarget: this }
      if (!$parent.hasClass('open')) return
      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))
      if (e.isDefaultPrevented()) return
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle + ', [role="menu"], [role="listbox"]', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.2.0
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options        = options
    this.$body          = $(document.body)
    this.$element       = $(element)
    this.$backdrop      =
    this.isShown        = null
    this.scrollbarWidth = 0

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.2.0'

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.$body.addClass('modal-open')

    this.setScrollbar()
    this.escape()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$element.find('.modal-dialog') // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(300) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.$body.removeClass('modal-open')

    this.resetScrollbar()
    this.escape()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(300) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keyup.dismiss.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus.call(this.$element[0])
          : this.hide.call(this)
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(150) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  Modal.prototype.checkScrollbar = function () {
    if (document.body.clientWidth >= window.innerWidth) return
    this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    /*var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    if (this.scrollbarWidth) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)*/
  }

  Modal.prototype.resetScrollbar = function () {
    /*this.$body.css('padding-right', '')*/
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.2.0
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       =
    this.options    =
    this.enabled    =
    this.timeout    =
    this.hoverState =
    this.$element   = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.2.0'

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport)

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(document.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var $parent      = this.$element.parent()
        var parentDim    = this.getPosition($parent)

        placement = placement == 'bottom' && pos.top   + pos.height       + actualHeight - parentDim.scroll > parentDim.height ? 'top'    :
                    placement == 'top'    && pos.top   - parentDim.scroll - actualHeight < 0                                   ? 'bottom' :
                    placement == 'right'  && pos.right + actualWidth      > parentDim.width                                    ? 'left'   :
                    placement == 'left'   && pos.left  - actualWidth      < parentDim.left                                     ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(150) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  = offset.top  + marginTop
    offset.left = offset.left + marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var arrowDelta          = delta.left ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowPosition       = delta.left ? 'left'        : 'top'
    var arrowOffsetPosition = delta.left ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], arrowPosition)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, position) {
    this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + '%') : '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function () {
    var that = this
    var $tip = this.tip()
    var e    = $.Event('hide.bs.' + this.type)

    this.$element.removeAttr('aria-describedby')

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element.trigger('hidden.bs.' + that.type)
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && this.$tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(150) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof ($e.attr('data-original-title')) != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element
    var el     = $element[0]
    var isBody = el.tagName == 'BODY'
    return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : null, {
      scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop(),
      width:  isBody ? $(window).width()  : $element.outerWidth(),
      height: isBody ? $(window).height() : $element.outerHeight()
    }, isBody ? { top: 0, left: 0 } : $element.offset())
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width   }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.width) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    return (this.$tip = this.$tip || $(this.options.template))
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.validate = function () {
    if (!this.$element[0].parentNode) {
      this.hide()
      this.$element = null
      this.options  = null
    }
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
  }

  Tooltip.prototype.destroy = function () {
    clearTimeout(this.timeout)
    this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && option == 'destroy') return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.2.0
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.2.0'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').empty()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }

  Popover.prototype.tip = function () {
    if (!this.$tip) this.$tip = $(this.options.template)
    return this.$tip
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && option == 'destroy') return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.2.0
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    var process  = $.proxy(this.process, this)

    this.$body          = $('body')
    this.$scrollElement = $(element).is('body') ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', process)
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.2.0'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var offsetMethod = 'offset'
    var offsetBase   = 0

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.offsets = []
    this.targets = []
    this.scrollHeight = this.getScrollHeight()

    var self     = this

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        self.offsets.push(this[0])
        self.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop <= offsets[0]) {
      return activeTarget != (i = targets[0]) && this.activate(i)
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')

    var selector = this.selector +
        '[data-target="' + target + '"],' +
        this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.2.0
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.VERSION = '3.2.0'

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var previous = $ul.find('.active:last a')[0]
    var e        = $.Event('show.bs.tab', {
      relatedTarget: previous
    })

    $this.trigger(e)

    if (e.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: previous
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && $active.hasClass('fade')

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
        .removeClass('active')

      element.addClass('active')

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu')) {
        element.closest('li.dropdown').addClass('active')
      }

      callback && callback()
    }

    transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(150) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.2.0
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      =
    this.unpin        =
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.2.0'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var scrollHeight = $(document).height()
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.unpin   != null && (scrollTop + this.unpin <= position.top) ? false :
                offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ? 'bottom' :
                offsetTop    != null && (scrollTop <= offsetTop) ? 'top' : false

    if (this.affixed === affix) return
    if (this.unpin != null) this.$element.css('top', '')

    var affixType = 'affix' + (affix ? '-' + affix : '')
    var e         = $.Event(affixType + '.bs.affix')

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    this.affixed = affix
    this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

    this.$element
      .removeClass(Affix.RESET)
      .addClass(affixType)
      .trigger($.Event(affixType.replace('affix', 'affixed')))

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - this.$element.height() - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom) data.offset.bottom = data.offsetBottom
      if (data.offsetTop)    data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);

/*! http://mths.be/placeholder v2.0.8 by @mathias */
;(function(window, document, $) {

    // Opera Mini v7 doesn’t support placeholder although its DOM seems to indicate so
    var isOperaMini = Object.prototype.toString.call(window.operamini) == '[object OperaMini]';
    var isInputSupported = 'placeholder' in document.createElement('input') && !isOperaMini;
    var isTextareaSupported = 'placeholder' in document.createElement('textarea') && !isOperaMini;
    var prototype = $.fn;
    var valHooks = $.valHooks;
    var propHooks = $.propHooks;
    var hooks;
    var placeholder;

    if (isInputSupported && isTextareaSupported) {

        placeholder = prototype.placeholder = function() {
            return this;
        };

        placeholder.input = placeholder.textarea = true;

    } else {

        placeholder = prototype.placeholder = function() {
            var $this = this;
            $this
                .filter((isInputSupported ? 'textarea' : ':input') + '[placeholder]')
                .not('.placeholder')
                .bind({
                    'focus.placeholder': clearPlaceholder,
                    'blur.placeholder': setPlaceholder
                })
                .data('placeholder-enabled', true)
                .trigger('blur.placeholder');
            return $this;
        };

        placeholder.input = isInputSupported;
        placeholder.textarea = isTextareaSupported;

        hooks = {
            'get': function(element) {
                var $element = $(element);

                var $passwordInput = $element.data('placeholder-password');
                if ($passwordInput) {
                    return $passwordInput[0].value;
                }

                return $element.data('placeholder-enabled') && $element.hasClass('placeholder') ? '' : element.value;
            },
            'set': function(element, value) {
                var $element = $(element);

                var $passwordInput = $element.data('placeholder-password');
                if ($passwordInput) {
                    return $passwordInput[0].value = value;
                }

                if (!$element.data('placeholder-enabled')) {
                    return element.value = value;
                }
                if (value == '') {
                    element.value = value;
                    // Issue #56: Setting the placeholder causes problems if the element continues to have focus.
                    if (element != safeActiveElement()) {
                        // We can't use `triggerHandler` here because of dummy text/password inputs :(
                        setPlaceholder.call(element);
                    }
                } else if ($element.hasClass('placeholder')) {
                    clearPlaceholder.call(element, true, value) || (element.value = value);
                } else {
                    element.value = value;
                }
                // `set` can not return `undefined`; see http://jsapi.info/jquery/1.7.1/val#L2363
                return $element;
            }
        };

        if (!isInputSupported) {
            valHooks.input = hooks;
            propHooks.value = hooks;
        }
        if (!isTextareaSupported) {
            valHooks.textarea = hooks;
            propHooks.value = hooks;
        }

        $(function() {
            // Look for forms
            $(document).delegate('form', 'submit.placeholder', function() {
                // Clear the placeholder values so they don't get submitted
                var $inputs = $('.placeholder', this).each(clearPlaceholder);
                setTimeout(function() {
                    $inputs.each(setPlaceholder);
                }, 10);
            });
        });

        // Clear placeholder values upon page reload
        $(window).bind('beforeunload.placeholder', function() {
            $('.placeholder').each(function() {
                this.value = '';
            });
        });

    }

    function args(elem) {
        // Return an object of element attributes
        var newAttrs = {};
        var rinlinejQuery = /^jQuery\d+$/;
        $.each(elem.attributes, function(i, attr) {
            if (attr.specified && !rinlinejQuery.test(attr.name)) {
                newAttrs[attr.name] = attr.value;
            }
        });
        return newAttrs;
    }

    function clearPlaceholder(event, value) {
        var input = this;
        var $input = $(input);
        if (input.value == $input.attr('placeholder') && $input.hasClass('placeholder')) {
            if ($input.data('placeholder-password')) {
                $input = $input.hide().next().show().attr('id', $input.removeAttr('id').data('placeholder-id'));
                // If `clearPlaceholder` was called from `$.valHooks.input.set`
                if (event === true) {
                    return $input[0].value = value;
                }
                $input.focus();
            } else {
                input.value = '';
                $input.removeClass('placeholder');
                input == safeActiveElement() && input.select();
            }
        }
    }

    function setPlaceholder() {
        var $replacement;
        var input = this;
        var $input = $(input);
        var id = this.id;
        if (input.value == '') {
            if (input.type == 'password') {
                if (!$input.data('placeholder-textinput')) {
                    try {
                        $replacement = $input.clone().attr({ 'type': 'text' });
                    } catch(e) {
                        $replacement = $('<input>').attr($.extend(args(this), { 'type': 'text' }));
                    }
                    $replacement
                        .removeAttr('name')
                        .data({
                            'placeholder-password': $input,
                            'placeholder-id': id
                        })
                        .bind('focus.placeholder', clearPlaceholder);
                    $input
                        .data({
                            'placeholder-textinput': $replacement,
                            'placeholder-id': id
                        })
                        .before($replacement);
                }
                $input = $input.removeAttr('id').hide().prev().attr('id', id).show();
                // Note: `$input[0] != input` now!
            }
            $input.addClass('placeholder');
            $input[0].value = $input.attr('placeholder');
        } else {
            $input.removeClass('placeholder');
        }
    }

    function safeActiveElement() {
        // Avoid IE9 `document.activeElement` of death
        // https://github.com/mathiasbynens/jquery-placeholder/pull/99
        try {
            return document.activeElement;
        } catch (exception) {}
    }

}(this, document, jQuery));
/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.0
 *
 */
(function(f){jQuery.fn.extend({slimScroll:function(h){var a=f.extend({width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:0.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:0.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px"},h);this.each(function(){function r(d){if(s){d=d||
window.event;var c=0;d.wheelDelta&&(c=-d.wheelDelta/120);d.detail&&(c=d.detail/3);f(d.target||d.srcTarget||d.srcElement).closest("."+a.wrapperClass).is(b.parent())&&m(c,!0);d.preventDefault&&!k&&d.preventDefault();k||(d.returnValue=!1)}}function m(d,f,h){k=!1;var e=d,g=b.outerHeight()-c.outerHeight();f&&(e=parseInt(c.css("top"))+d*parseInt(a.wheelStep)/100*c.outerHeight(),e=Math.min(Math.max(e,0),g),e=0<d?Math.ceil(e):Math.floor(e),c.css({top:e+"px"}));l=parseInt(c.css("top"))/(b.outerHeight()-c.outerHeight());
e=l*(b[0].scrollHeight-b.outerHeight());h&&(e=d,d=e/b[0].scrollHeight*b.outerHeight(),d=Math.min(Math.max(d,0),g),c.css({top:d+"px"}));b.scrollTop(e);b.trigger("slimscrolling",~~e);v();p()}function C(){window.addEventListener?(this.addEventListener("DOMMouseScroll",r,!1),this.addEventListener("mousewheel",r,!1),this.addEventListener("MozMousePixelScroll",r,!1)):document.attachEvent("onmousewheel",r)}function w(){u=Math.max(b.outerHeight()/b[0].scrollHeight*b.outerHeight(),D);c.css({height:u+"px"});
var a=u==b.outerHeight()?"none":"block";c.css({display:a})}function v(){w();clearTimeout(A);l==~~l?(k=a.allowPageScroll,B!=l&&b.trigger("slimscroll",0==~~l?"top":"bottom")):k=!1;B=l;u>=b.outerHeight()?k=!0:(c.stop(!0,!0).fadeIn("fast"),a.railVisible&&g.stop(!0,!0).fadeIn("fast"))}function p(){a.alwaysVisible||(A=setTimeout(function(){a.disableFadeOut&&s||(x||y)||(c.fadeOut("slow"),g.fadeOut("slow"))},1E3))}var s,x,y,A,z,u,l,B,D=30,k=!1,b=f(this);if(b.parent().hasClass(a.wrapperClass)){var n=b.scrollTop(),
c=b.parent().find("."+a.barClass),g=b.parent().find("."+a.railClass);w();if(f.isPlainObject(h)){if("height"in h&&"auto"==h.height){b.parent().css("height","auto");b.css("height","auto");var q=b.parent().parent().height();b.parent().css("height",q);b.css("height",q)}if("scrollTo"in h)n=parseInt(a.scrollTo);else if("scrollBy"in h)n+=parseInt(a.scrollBy);else if("destroy"in h){c.remove();g.remove();b.unwrap();return}m(n,!1,!0)}}else{a.height="auto"==a.height?b.parent().height():a.height;n=f("<div></div>").addClass(a.wrapperClass).css({position:"relative",
overflow:"hidden",width:a.width,height:a.height});b.css({overflow:"hidden",width:a.width,height:a.height});var g=f("<div></div>").addClass(a.railClass).css({width:a.size,height:"100%",position:"absolute",top:0,display:a.alwaysVisible&&a.railVisible?"block":"none","border-radius":a.railBorderRadius,background:a.railColor,opacity:a.railOpacity,zIndex:90}),c=f("<div></div>").addClass(a.barClass).css({background:a.color,width:a.size,position:"absolute",top:0,opacity:a.opacity,display:a.alwaysVisible?
"block":"none","border-radius":a.borderRadius,BorderRadius:a.borderRadius,MozBorderRadius:a.borderRadius,WebkitBorderRadius:a.borderRadius,zIndex:99}),q="right"==a.position?{right:a.distance}:{left:a.distance};g.css(q);c.css(q);b.wrap(n);b.parent().append(c);b.parent().append(g);a.railDraggable&&c.bind("mousedown",function(a){var b=f(document);y=!0;t=parseFloat(c.css("top"));pageY=a.pageY;b.bind("mousemove.slimscroll",function(a){currTop=t+a.pageY-pageY;c.css("top",currTop);m(0,c.position().top,!1)});
b.bind("mouseup.slimscroll",function(a){y=!1;p();b.unbind(".slimscroll")});return!1}).bind("selectstart.slimscroll",function(a){a.stopPropagation();a.preventDefault();return!1});g.hover(function(){v()},function(){p()});c.hover(function(){x=!0},function(){x=!1});b.hover(function(){s=!0;v();p()},function(){s=!1;p()});b.bind("touchstart",function(a,b){a.originalEvent.touches.length&&(z=a.originalEvent.touches[0].pageY)});b.bind("touchmove",function(b){k||b.originalEvent.preventDefault();b.originalEvent.touches.length&&
(m((z-b.originalEvent.touches[0].pageY)/a.touchScrollStep,!0),z=b.originalEvent.touches[0].pageY)});w();"bottom"===a.start?(c.css({top:b.outerHeight()-c.outerHeight()}),m(0,!0)):"top"!==a.start&&(m(f(a.start).position().top,null,!0),a.alwaysVisible||c.hide());C()}});return this}});jQuery.fn.extend({slimscroll:jQuery.fn.slimScroll})})(jQuery);
/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.1
*/
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});
// OpenLayers 3. See http://openlayers.org/
// License: https://raw.githubusercontent.com/openlayers/ol3/master/LICENSE.md
// Version: v3.12.1

(function (root, factory) {
  if (typeof exports === "object") {
    module.exports = factory();
  } else if (typeof define === "function" && define.amd) {
    define([], factory);
  } else {
    root.ol = factory();
  }
}(this, function () {
  var OPENLAYERS = {};
  var l,aa=aa||{},ba=this;function ca(b){return void 0!==b}function u(b,c,d){b=b.split(".");d=d||ba;b[0]in d||!d.execScript||d.execScript("var "+b[0]);for(var e;b.length&&(e=b.shift());)!b.length&&ca(c)?d[e]=c:d[e]?d=d[e]:d=d[e]={}}function da(){}function ea(b){b.Yb=function(){return b.Pg?b.Pg:b.Pg=new b}}
function fa(b){var c=typeof b;if("object"==c)if(b){if(b instanceof Array)return"array";if(b instanceof Object)return c;var d=Object.prototype.toString.call(b);if("[object Window]"==d)return"object";if("[object Array]"==d||"number"==typeof b.length&&"undefined"!=typeof b.splice&&"undefined"!=typeof b.propertyIsEnumerable&&!b.propertyIsEnumerable("splice"))return"array";if("[object Function]"==d||"undefined"!=typeof b.call&&"undefined"!=typeof b.propertyIsEnumerable&&!b.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==c&&"undefined"==typeof b.call)return"object";return c}function ga(b){return"array"==fa(b)}function ha(b){var c=fa(b);return"array"==c||"object"==c&&"number"==typeof b.length}function ia(b){return"string"==typeof b}function ja(b){return"number"==typeof b}function ka(b){return"function"==fa(b)}function oa(b){var c=typeof b;return"object"==c&&null!=b||"function"==c}function w(b){return b[pa]||(b[pa]=++qa)}var pa="closure_uid_"+(1E9*Math.random()>>>0),qa=0;
function ra(b,c,d){return b.call.apply(b.bind,arguments)}function ta(b,c,d){if(!b)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var d=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(d,e);return b.apply(c,d)}}return function(){return b.apply(c,arguments)}}function ua(b,c,d){ua=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ra:ta;return ua.apply(null,arguments)}
function va(b,c){var d=Array.prototype.slice.call(arguments,1);return function(){var c=d.slice();c.push.apply(c,arguments);return b.apply(this,c)}}var wa=Date.now||function(){return+new Date};function y(b,c){function d(){}d.prototype=c.prototype;b.ca=c.prototype;b.prototype=new d;b.prototype.constructor=b;b.zp=function(b,d,g){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return c.prototype[d].apply(b,h)}};var xa,ya;function za(){};function Aa(b){if(Error.captureStackTrace)Error.captureStackTrace(this,Aa);else{var c=Error().stack;c&&(this.stack=c)}b&&(this.message=String(b))}y(Aa,Error);Aa.prototype.name="CustomError";var Ba;function Ca(b,c){var d=b.length-c.length;return 0<=d&&b.indexOf(c,d)==d}function Da(b,c){for(var d=b.split("%s"),e="",f=Array.prototype.slice.call(arguments,1);f.length&&1<d.length;)e+=d.shift()+f.shift();return e+d.join("%s")}var Ea=String.prototype.trim?function(b){return b.trim()}:function(b){return b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function Ga(b){if(!Ha.test(b))return b;-1!=b.indexOf("&")&&(b=b.replace(Ia,"&amp;"));-1!=b.indexOf("<")&&(b=b.replace(Ja,"&lt;"));-1!=b.indexOf(">")&&(b=b.replace(Ka,"&gt;"));-1!=b.indexOf('"')&&(b=b.replace(La,"&quot;"));-1!=b.indexOf("'")&&(b=b.replace(Ma,"&#39;"));-1!=b.indexOf("\x00")&&(b=b.replace(Na,"&#0;"));return b}var Ia=/&/g,Ja=/</g,Ka=/>/g,La=/"/g,Ma=/'/g,Na=/\x00/g,Ha=/[\x00&<>"']/,Oa=String.prototype.repeat?function(b,c){return b.repeat(c)}:function(b,c){return Array(c+1).join(b)};
function Pa(b){b=ca(void 0)?b.toFixed(void 0):String(b);var c=b.indexOf(".");-1==c&&(c=b.length);return Oa("0",Math.max(0,2-c))+b}
function Qa(b,c){for(var d=0,e=Ea(String(b)).split("."),f=Ea(String(c)).split("."),g=Math.max(e.length,f.length),h=0;0==d&&h<g;h++){var k=e[h]||"",m=f[h]||"",n=RegExp("(\\d*)(\\D*)","g"),p=RegExp("(\\d*)(\\D*)","g");do{var q=n.exec(k)||["","",""],r=p.exec(m)||["","",""];if(0==q[0].length&&0==r[0].length)break;d=Ra(0==q[1].length?0:parseInt(q[1],10),0==r[1].length?0:parseInt(r[1],10))||Ra(0==q[2].length,0==r[2].length)||Ra(q[2],r[2])}while(0==d)}return d}function Ra(b,c){return b<c?-1:b>c?1:0};function Sa(b,c,d){return Math.min(Math.max(b,c),d)}var Ta=function(){var b;"cosh"in Math?b=Math.cosh:b=function(b){b=Math.exp(b);return(b+1/b)/2};return b}();function Va(b,c,d,e,f,g){var h=f-d,k=g-e;if(0!==h||0!==k){var m=((b-d)*h+(c-e)*k)/(h*h+k*k);1<m?(d=f,e=g):0<m&&(d+=h*m,e+=k*m)}return Wa(b,c,d,e)}function Wa(b,c,d,e){b=d-b;c=e-c;return b*b+c*c}function Xa(b){return b*Math.PI/180};function Ya(b){return function(c){if(c)return[Sa(c[0],b[0],b[2]),Sa(c[1],b[1],b[3])]}}function Za(b){return b};var $a=Array.prototype;function ab(b,c){return $a.indexOf.call(b,c,void 0)}function bb(b,c){$a.forEach.call(b,c,void 0)}function cb(b,c){return $a.filter.call(b,c,void 0)}function db(b,c){return $a.map.call(b,c,void 0)}function eb(b,c){return $a.some.call(b,c,void 0)}function fb(b,c){var d=gb(b,c,void 0);return 0>d?null:ia(b)?b.charAt(d):b[d]}function gb(b,c,d){for(var e=b.length,f=ia(b)?b.split(""):b,g=0;g<e;g++)if(g in f&&c.call(d,f[g],g,b))return g;return-1}
function hb(b,c){var d=ab(b,c),e;(e=0<=d)&&$a.splice.call(b,d,1);return e}function ib(b){return $a.concat.apply($a,arguments)}function jb(b){var c=b.length;if(0<c){for(var d=Array(c),e=0;e<c;e++)d[e]=b[e];return d}return[]}function kb(b,c){for(var d=1;d<arguments.length;d++){var e=arguments[d];if(ha(e)){var f=b.length||0,g=e.length||0;b.length=f+g;for(var h=0;h<g;h++)b[f+h]=e[h]}else b.push(e)}}function lb(b,c,d,e){$a.splice.apply(b,mb(arguments,1))}
function mb(b,c,d){return 2>=arguments.length?$a.slice.call(b,c):$a.slice.call(b,c,d)}function nb(b,c){b.sort(c||ob)}function pb(b){for(var c=qb,d=0;d<b.length;d++)b[d]={index:d,value:b[d]};var e=c||ob;nb(b,function(b,c){return e(b.value,c.value)||b.index-c.index});for(d=0;d<b.length;d++)b[d]=b[d].value}function rb(b,c){if(!ha(b)||!ha(c)||b.length!=c.length)return!1;for(var d=b.length,e=sb,f=0;f<d;f++)if(!e(b[f],c[f]))return!1;return!0}function ob(b,c){return b>c?1:b<c?-1:0}
function sb(b,c){return b===c}function tb(b){for(var c=[],d=0;d<arguments.length;d++){var e=arguments[d];if(ga(e))for(var f=0;f<e.length;f+=8192)for(var g=mb(e,f,f+8192),g=tb.apply(null,g),h=0;h<g.length;h++)c.push(g[h]);else c.push(e)}return c};function ub(b,c){return b>c?1:b<c?-1:0}function vb(b,c){return 0<=b.indexOf(c)}function wb(b,c,d){var e=b.length;if(b[0]<=c)return 0;if(!(c<=b[e-1]))if(0<d)for(d=1;d<e;++d){if(b[d]<c)return d-1}else if(0>d)for(d=1;d<e;++d){if(b[d]<=c)return d}else for(d=1;d<e;++d){if(b[d]==c)return d;if(b[d]<c)return b[d-1]-c<c-b[d]?d-1:d}return e-1};function xb(b){return function(c,d,e){if(void 0!==c)return c=wb(b,c,e),c=Sa(c+d,0,b.length-1),b[c]}}function yb(b,c,d){return function(e,f,g){if(void 0!==e)return e=Math.max(Math.floor(Math.log(c/e)/Math.log(b)+(0<g?0:0>g?1:.5))+f,0),void 0!==d&&(e=Math.min(e,d)),c/Math.pow(b,e)}};function zb(b){if(void 0!==b)return 0}function Ab(b,c){if(void 0!==b)return b+c}function Bb(b){var c=2*Math.PI/b;return function(b,e){if(void 0!==b)return b=Math.floor((b+e)/c+.5)*c}}function Cb(){var b=Xa(5);return function(c,d){if(void 0!==c)return Math.abs(c+d)<=b?0:c+d}};function Db(b,c,d){this.center=b;this.resolution=c;this.rotation=d};var Eb;a:{var Fb=ba.navigator;if(Fb){var Gb=Fb.userAgent;if(Gb){Eb=Gb;break a}}Eb=""}function Hb(b){return-1!=Eb.indexOf(b)};function Ib(b,c,d){for(var e in b)c.call(d,b[e],e,b)}function Jb(b,c){for(var d in b)if(c.call(void 0,b[d],d,b))return!0;return!1}function Kb(b){var c=0,d;for(d in b)c++;return c}function Lb(b){var c=[],d=0,e;for(e in b)c[d++]=b[e];return c}function Mb(b,c){for(var d in b)if(b[d]==c)return!0;return!1}function Ob(b,c){for(var d in b)if(c.call(void 0,b[d],d,b))return d}function Pb(b){for(var c in b)return!1;return!0}function Qb(b){for(var c in b)delete b[c]}function Rb(b,c,d){return c in b?b[c]:d}
function Sb(b,c){var d=[];return c in b?b[c]:b[c]=d}function Tb(b){var c={},d;for(d in b)c[d]=b[d];return c}function Ub(b){var c=fa(b);if("object"==c||"array"==c){if(ka(b.clone))return b.clone();var c="array"==c?[]:{},d;for(d in b)c[d]=Ub(b[d]);return c}return b}var Vb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Wb(b,c){for(var d,e,f=1;f<arguments.length;f++){e=arguments[f];for(d in e)b[d]=e[d];for(var g=0;g<Vb.length;g++)d=Vb[g],Object.prototype.hasOwnProperty.call(e,d)&&(b[d]=e[d])}};var Xb=Hb("Opera")||Hb("OPR"),Yb=Hb("Trident")||Hb("MSIE"),Zb=Hb("Edge"),$b=Hb("Gecko")&&!(-1!=Eb.toLowerCase().indexOf("webkit")&&!Hb("Edge"))&&!(Hb("Trident")||Hb("MSIE"))&&!Hb("Edge"),ac=-1!=Eb.toLowerCase().indexOf("webkit")&&!Hb("Edge"),bc=Hb("Macintosh"),cc=Hb("Windows"),dc=Hb("Linux")||Hb("CrOS");function ec(){var b=Eb;if($b)return/rv\:([^\);]+)(\)|;)/.exec(b);if(Zb)return/Edge\/([\d\.]+)/.exec(b);if(Yb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(b);if(ac)return/WebKit\/(\S+)/.exec(b)}
function fc(){var b=ba.document;return b?b.documentMode:void 0}var gc=function(){if(Xb&&ba.opera){var b;var c=ba.opera.version;try{b=c()}catch(d){b=c}return b}b="";(c=ec())&&(b=c?c[1]:"");return Yb&&(c=fc(),c>parseFloat(b))?String(c):b}(),hc={};function ic(b){return hc[b]||(hc[b]=0<=Qa(gc,b))}var jc=ba.document,kc=jc&&Yb?fc()||("CSS1Compat"==jc.compatMode?parseInt(gc,10):5):void 0;var lc=!Yb||9<=kc,mc=!Yb||9<=kc,nc=Yb&&!ic("9");!ac||ic("528");$b&&ic("1.9b")||Yb&&ic("8")||Xb&&ic("9.5")||ac&&ic("528");$b&&!ic("8")||Yb&&ic("9");function oc(){0!=pc&&(qc[w(this)]=this);this.na=this.na;this.va=this.va}var pc=0,qc={};oc.prototype.na=!1;oc.prototype.Fc=function(){if(!this.na&&(this.na=!0,this.Y(),0!=pc)){var b=w(this);delete qc[b]}};function rc(b,c){var d=va(sc,c);b.na?d.call(void 0):(b.va||(b.va=[]),b.va.push(ca(void 0)?ua(d,void 0):d))}oc.prototype.Y=function(){if(this.va)for(;this.va.length;)this.va.shift()()};function sc(b){b&&"function"==typeof b.Fc&&b.Fc()};function tc(b,c){this.type=b;this.g=this.target=c;this.j=!1;this.Th=!0}tc.prototype.b=function(){this.j=!0};tc.prototype.preventDefault=function(){this.Th=!1};function uc(b){b.b()}function vc(b){b.preventDefault()};function wc(b){wc[" "](b);return b}wc[" "]=da;function xc(b,c){tc.call(this,b?b.type:"");this.relatedTarget=this.g=this.target=null;this.G=this.i=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.B=this.c=this.f=this.o=!1;this.state=null;this.l=!1;this.a=null;if(b){var d=this.type=b.type,e=b.changedTouches?b.changedTouches[0]:null;this.target=b.target||b.srcElement;this.g=c;var f=b.relatedTarget;if(f){if($b){var g;a:{try{wc(f.nodeName);g=!0;break a}catch(h){}g=!1}g||(f=null)}}else"mouseover"==d?
f=b.fromElement:"mouseout"==d&&(f=b.toElement);this.relatedTarget=f;null===e?(this.offsetX=ac||void 0!==b.offsetX?b.offsetX:b.layerX,this.offsetY=ac||void 0!==b.offsetY?b.offsetY:b.layerY,this.clientX=void 0!==b.clientX?b.clientX:b.pageX,this.clientY=void 0!==b.clientY?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0);this.button=
b.button;this.i=b.keyCode||0;this.G=b.charCode||("keypress"==d?b.keyCode:0);this.o=b.ctrlKey;this.f=b.altKey;this.c=b.shiftKey;this.B=b.metaKey;this.l=bc?b.metaKey:b.ctrlKey;this.state=b.state;this.a=b;b.defaultPrevented&&this.preventDefault()}}y(xc,tc);var yc=[1,4,2];function zc(b){return(lc?0==b.a.button:"click"==b.type?!0:!!(b.a.button&yc[0]))&&!(ac&&bc&&b.o)}xc.prototype.b=function(){xc.ca.b.call(this);this.a.stopPropagation?this.a.stopPropagation():this.a.cancelBubble=!0};
xc.prototype.preventDefault=function(){xc.ca.preventDefault.call(this);var b=this.a;if(b.preventDefault)b.preventDefault();else if(b.returnValue=!1,nc)try{if(b.ctrlKey||112<=b.keyCode&&123>=b.keyCode)b.keyCode=-1}catch(c){}};var Ac="closure_listenable_"+(1E6*Math.random()|0);function Bc(b){return!(!b||!b[Ac])}var Cc=0;function Dc(b,c,d,e,f){this.listener=b;this.a=null;this.src=c;this.type=d;this.bd=!!e;this.ke=f;this.key=++Cc;this.Uc=this.Vd=!1}function Ec(b){b.Uc=!0;b.listener=null;b.a=null;b.src=null;b.ke=null};function Fc(b){this.src=b;this.a={};this.f=0}Fc.prototype.add=function(b,c,d,e,f){var g=b.toString();b=this.a[g];b||(b=this.a[g]=[],this.f++);var h=Gc(b,c,e,f);-1<h?(c=b[h],d||(c.Vd=!1)):(c=new Dc(c,this.src,g,!!e,f),c.Vd=d,b.push(c));return c};Fc.prototype.remove=function(b,c,d,e){b=b.toString();if(!(b in this.a))return!1;var f=this.a[b];c=Gc(f,c,d,e);return-1<c?(Ec(f[c]),$a.splice.call(f,c,1),0==f.length&&(delete this.a[b],this.f--),!0):!1};
function Hc(b,c){var d=c.type;if(!(d in b.a))return!1;var e=hb(b.a[d],c);e&&(Ec(c),0==b.a[d].length&&(delete b.a[d],b.f--));return e}function Ic(b,c,d,e,f){b=b.a[c.toString()];c=-1;b&&(c=Gc(b,d,e,f));return-1<c?b[c]:null}function Jc(b,c,d){var e=ca(c),f=e?c.toString():"",g=ca(d);return Jb(b.a,function(b){for(var c=0;c<b.length;++c)if(!(e&&b[c].type!=f||g&&b[c].bd!=d))return!0;return!1})}
function Gc(b,c,d,e){for(var f=0;f<b.length;++f){var g=b[f];if(!g.Uc&&g.listener==c&&g.bd==!!d&&g.ke==e)return f}return-1};var Kc="closure_lm_"+(1E6*Math.random()|0),Lc={},Mc=0;function D(b,c,d,e,f){if(ga(c)){for(var g=0;g<c.length;g++)D(b,c[g],d,e,f);return null}d=Nc(d);return Bc(b)?b.Ra(c,d,e,f):Oc(b,c,d,!1,e,f)}
function Oc(b,c,d,e,f,g){if(!c)throw Error("Invalid event type");var h=!!f,k=Pc(b);k||(b[Kc]=k=new Fc(b));d=k.add(c,d,e,f,g);if(d.a)return d;e=Rc();d.a=e;e.src=b;e.listener=d;if(b.addEventListener)b.addEventListener(c.toString(),e,h);else if(b.attachEvent)b.attachEvent(Sc(c.toString()),e);else throw Error("addEventListener and attachEvent are unavailable.");Mc++;return d}
function Rc(){var b=Tc,c=mc?function(d){return b.call(c.src,c.listener,d)}:function(d){d=b.call(c.src,c.listener,d);if(!d)return d};return c}function Uc(b,c,d,e,f){if(ga(c)){for(var g=0;g<c.length;g++)Uc(b,c[g],d,e,f);return null}d=Nc(d);return Bc(b)?b.yb.add(String(c),d,!0,e,f):Oc(b,c,d,!0,e,f)}function Vc(b,c,d,e,f){if(ga(c))for(var g=0;g<c.length;g++)Vc(b,c[g],d,e,f);else d=Nc(d),Bc(b)?b.Wf(c,d,e,f):b&&(b=Pc(b))&&(c=Ic(b,c,d,!!e,f))&&Wc(c)}
function Wc(b){if(ja(b)||!b||b.Uc)return!1;var c=b.src;if(Bc(c))return Hc(c.yb,b);var d=b.type,e=b.a;c.removeEventListener?c.removeEventListener(d,e,b.bd):c.detachEvent&&c.detachEvent(Sc(d),e);Mc--;(d=Pc(c))?(Hc(d,b),0==d.f&&(d.src=null,c[Kc]=null)):Ec(b);return!0}function Sc(b){return b in Lc?Lc[b]:Lc[b]="on"+b}function Xc(b,c,d,e){var f=!0;if(b=Pc(b))if(c=b.a[c.toString()])for(c=c.concat(),b=0;b<c.length;b++){var g=c[b];g&&g.bd==d&&!g.Uc&&(g=Yc(g,e),f=f&&!1!==g)}return f}
function Yc(b,c){var d=b.listener,e=b.ke||b.src;b.Vd&&Wc(b);return d.call(e,c)}
function Tc(b,c){if(b.Uc)return!0;if(!mc){var d;if(!(d=c))a:{d=["window","event"];for(var e=ba,f;f=d.shift();)if(null!=e[f])e=e[f];else{d=null;break a}d=e}f=d;d=new xc(f,this);e=!0;if(!(0>f.keyCode||void 0!=f.returnValue)){a:{var g=!1;if(0==f.keyCode)try{f.keyCode=-1;break a}catch(m){g=!0}if(g||void 0==f.returnValue)f.returnValue=!0}f=[];for(g=d.g;g;g=g.parentNode)f.push(g);for(var g=b.type,h=f.length-1;!d.j&&0<=h;h--){d.g=f[h];var k=Xc(f[h],g,!0,d),e=e&&k}for(h=0;!d.j&&h<f.length;h++)d.g=f[h],k=
Xc(f[h],g,!1,d),e=e&&k}return e}return Yc(b,new xc(c,this))}function Pc(b){b=b[Kc];return b instanceof Fc?b:null}var Zc="__closure_events_fn_"+(1E9*Math.random()>>>0);function Nc(b){if(ka(b))return b;b[Zc]||(b[Zc]=function(c){return b.handleEvent(c)});return b[Zc]};function $c(){oc.call(this);this.yb=new Fc(this);this.Od=this;this.gb=null}y($c,oc);$c.prototype[Ac]=!0;l=$c.prototype;l.addEventListener=function(b,c,d,e){D(this,b,c,d,e)};l.removeEventListener=function(b,c,d,e){Vc(this,b,c,d,e)};
l.s=function(b){var c,d=this.gb;if(d)for(c=[];d;d=d.gb)c.push(d);var d=this.Od,e=b.type||b;if(ia(b))b=new tc(b,d);else if(b instanceof tc)b.target=b.target||d;else{var f=b;b=new tc(e,d);Wb(b,f)}var f=!0,g;if(c)for(var h=c.length-1;!b.j&&0<=h;h--)g=b.g=c[h],f=bd(g,e,!0,b)&&f;b.j||(g=b.g=d,f=bd(g,e,!0,b)&&f,b.j||(f=bd(g,e,!1,b)&&f));if(c)for(h=0;!b.j&&h<c.length;h++)g=b.g=c[h],f=bd(g,e,!1,b)&&f;return f};
l.Y=function(){$c.ca.Y.call(this);if(this.yb){var b=this.yb,c=0,d;for(d in b.a){for(var e=b.a[d],f=0;f<e.length;f++)++c,Ec(e[f]);delete b.a[d];b.f--}}this.gb=null};l.Ra=function(b,c,d,e){return this.yb.add(String(b),c,!1,d,e)};l.Wf=function(b,c,d,e){return this.yb.remove(String(b),c,d,e)};
function bd(b,c,d,e){c=b.yb.a[String(c)];if(!c)return!0;c=c.concat();for(var f=!0,g=0;g<c.length;++g){var h=c[g];if(h&&!h.Uc&&h.bd==d){var k=h.listener,m=h.ke||h.src;h.Vd&&Hc(b.yb,h);f=!1!==k.call(m,e)&&f}}return f&&0!=e.Th}function cd(b,c,d){return Jc(b.yb,ca(c)?String(c):void 0,d)};function dd(){$c.call(this);this.f=0}y(dd,$c);function ed(b){Wc(b)}l=dd.prototype;l.u=function(){++this.f;this.s("change")};l.L=function(){return this.f};l.H=function(b,c,d){return D(this,b,c,!1,d)};l.M=function(b,c,d){return Uc(this,b,c,!1,d)};l.K=function(b,c,d){Vc(this,b,c,!1,d)};l.N=ed;function fd(b,c,d){tc.call(this,b);this.key=c;this.oldValue=d}y(fd,tc);function gd(b){dd.call(this);w(this);this.G={};void 0!==b&&this.I(b)}y(gd,dd);var hd={};function id(b){return hd.hasOwnProperty(b)?hd[b]:hd[b]="change:"+b}l=gd.prototype;l.get=function(b){var c;this.G.hasOwnProperty(b)&&(c=this.G[b]);return c};l.P=function(){return Object.keys(this.G)};l.R=function(){var b={},c;for(c in this.G)b[c]=this.G[c];return b};
function jd(b,c,d){var e;e=id(c);b.s(new fd(e,c,d));b.s(new fd("propertychange",c,d))}l.set=function(b,c,d){d?this.G[b]=c:(d=this.G[b],this.G[b]=c,d!==c&&jd(this,b,d))};l.I=function(b,c){for(var d in b)this.set(d,b[d],c)};l.S=function(b,c){if(b in this.G){var d=this.G[b];delete this.G[b];c||jd(this,b,d)}};function kd(b,c,d){void 0===d&&(d=[0,0]);d[0]=b[0]+2*c;d[1]=b[1]+2*c;return d}function ld(b,c,d){void 0===d&&(d=[0,0]);d[0]=b[0]*c+.5|0;d[1]=b[1]*c+.5|0;return d}function md(b,c){if(ga(b))return b;void 0===c?c=[b,b]:(c[0]=b,c[1]=b);return c};function nd(b,c){var d=b%c;return 0>d*c?d+c:d}function od(b,c,d){return b+d*(c-b)};function pd(b,c){b[0]+=c[0];b[1]+=c[1];return b}function qd(b,c){var d=b[0],e=b[1],f=c[0],g=c[1],h=f[0],f=f[1],k=g[0],g=g[1],m=k-h,n=g-f,d=0===m&&0===n?0:(m*(d-h)+n*(e-f))/(m*m+n*n||0);0>=d||(1<=d?(h=k,f=g):(h+=d*m,f+=d*n));return[h,f]}function rd(b,c){var d=nd(b+180,360)-180,e=Math.abs(Math.round(3600*d));return Math.floor(e/3600)+"\u00b0 "+Pa(Math.floor(e/60%60))+"\u2032 "+Pa(Math.floor(e%60))+"\u2033 "+c.charAt(0>d?1:0)}
function sd(b,c,d){return b?c.replace("{x}",b[0].toFixed(d)).replace("{y}",b[1].toFixed(d)):""}function td(b,c){for(var d=!0,e=b.length-1;0<=e;--e)if(b[e]!=c[e]){d=!1;break}return d}function ud(b,c){var d=Math.cos(c),e=Math.sin(c),f=b[1]*d+b[0]*e;b[0]=b[0]*d-b[1]*e;b[1]=f;return b}function vd(b,c){var d=b[0]-c[0],e=b[1]-c[1];return d*d+e*e}function wd(b,c){return vd(b,qd(b,c))}function xd(b,c){return sd(b,"{x}, {y}",c)};function yd(b){this.length=b.length||b;for(var c=0;c<this.length;c++)this[c]=b[c]||0}yd.prototype.a=4;yd.prototype.set=function(b,c){c=c||0;for(var d=0;d<b.length&&c+d<this.length;d++)this[c+d]=b[d]};yd.prototype.toString=Array.prototype.join;"undefined"==typeof Float32Array&&(yd.BYTES_PER_ELEMENT=4,yd.prototype.BYTES_PER_ELEMENT=yd.prototype.a,yd.prototype.set=yd.prototype.set,yd.prototype.toString=yd.prototype.toString,u("Float32Array",yd,void 0));function zd(b){this.length=b.length||b;for(var c=0;c<this.length;c++)this[c]=b[c]||0}zd.prototype.a=8;zd.prototype.set=function(b,c){c=c||0;for(var d=0;d<b.length&&c+d<this.length;d++)this[c+d]=b[d]};zd.prototype.toString=Array.prototype.join;if("undefined"==typeof Float64Array){try{zd.BYTES_PER_ELEMENT=8}catch(b){}zd.prototype.BYTES_PER_ELEMENT=zd.prototype.a;zd.prototype.set=zd.prototype.set;zd.prototype.toString=zd.prototype.toString;u("Float64Array",zd,void 0)};function Ad(b,c,d,e,f){b[0]=c;b[1]=d;b[2]=e;b[3]=f};function Bd(){var b=Array(16);Cd(b,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);return b}function Dd(){var b=Array(16);Cd(b,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return b}function Cd(b,c,d,e,f,g,h,k,m,n,p,q,r,t,x,z,A){b[0]=c;b[1]=d;b[2]=e;b[3]=f;b[4]=g;b[5]=h;b[6]=k;b[7]=m;b[8]=n;b[9]=p;b[10]=q;b[11]=r;b[12]=t;b[13]=x;b[14]=z;b[15]=A}
function Ed(b,c){b[0]=c[0];b[1]=c[1];b[2]=c[2];b[3]=c[3];b[4]=c[4];b[5]=c[5];b[6]=c[6];b[7]=c[7];b[8]=c[8];b[9]=c[9];b[10]=c[10];b[11]=c[11];b[12]=c[12];b[13]=c[13];b[14]=c[14];b[15]=c[15]}function Fd(b){b[0]=1;b[1]=0;b[2]=0;b[3]=0;b[4]=0;b[5]=1;b[6]=0;b[7]=0;b[8]=0;b[9]=0;b[10]=1;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1}
function Gd(b,c,d){var e=b[0],f=b[1],g=b[2],h=b[3],k=b[4],m=b[5],n=b[6],p=b[7],q=b[8],r=b[9],t=b[10],x=b[11],z=b[12],A=b[13],B=b[14];b=b[15];var v=c[0],L=c[1],M=c[2],J=c[3],C=c[4],sa=c[5],la=c[6],K=c[7],ma=c[8],Ua=c[9],Nb=c[10],na=c[11],Fa=c[12],ad=c[13],Qc=c[14];c=c[15];d[0]=e*v+k*L+q*M+z*J;d[1]=f*v+m*L+r*M+A*J;d[2]=g*v+n*L+t*M+B*J;d[3]=h*v+p*L+x*M+b*J;d[4]=e*C+k*sa+q*la+z*K;d[5]=f*C+m*sa+r*la+A*K;d[6]=g*C+n*sa+t*la+B*K;d[7]=h*C+p*sa+x*la+b*K;d[8]=e*ma+k*Ua+q*Nb+z*na;d[9]=f*ma+m*Ua+r*Nb+A*na;d[10]=
g*ma+n*Ua+t*Nb+B*na;d[11]=h*ma+p*Ua+x*Nb+b*na;d[12]=e*Fa+k*ad+q*Qc+z*c;d[13]=f*Fa+m*ad+r*Qc+A*c;d[14]=g*Fa+n*ad+t*Qc+B*c;d[15]=h*Fa+p*ad+x*Qc+b*c}
function Hd(b,c){var d=b[0],e=b[1],f=b[2],g=b[3],h=b[4],k=b[5],m=b[6],n=b[7],p=b[8],q=b[9],r=b[10],t=b[11],x=b[12],z=b[13],A=b[14],B=b[15],v=d*k-e*h,L=d*m-f*h,M=d*n-g*h,J=e*m-f*k,C=e*n-g*k,sa=f*n-g*m,la=p*z-q*x,K=p*A-r*x,ma=p*B-t*x,Ua=q*A-r*z,Nb=q*B-t*z,na=r*B-t*A,Fa=v*na-L*Nb+M*Ua+J*ma-C*K+sa*la;0!=Fa&&(Fa=1/Fa,c[0]=(k*na-m*Nb+n*Ua)*Fa,c[1]=(-e*na+f*Nb-g*Ua)*Fa,c[2]=(z*sa-A*C+B*J)*Fa,c[3]=(-q*sa+r*C-t*J)*Fa,c[4]=(-h*na+m*ma-n*K)*Fa,c[5]=(d*na-f*ma+g*K)*Fa,c[6]=(-x*sa+A*M-B*L)*Fa,c[7]=(p*sa-r*M+t*
L)*Fa,c[8]=(h*Nb-k*ma+n*la)*Fa,c[9]=(-d*Nb+e*ma-g*la)*Fa,c[10]=(x*C-z*M+B*v)*Fa,c[11]=(-p*C+q*M-t*v)*Fa,c[12]=(-h*Ua+k*K-m*la)*Fa,c[13]=(d*Ua-e*K+f*la)*Fa,c[14]=(-x*J+z*L-A*v)*Fa,c[15]=(p*J-q*L+r*v)*Fa)}function Id(b,c,d){var e=b[1]*c+b[5]*d+0*b[9]+b[13],f=b[2]*c+b[6]*d+0*b[10]+b[14],g=b[3]*c+b[7]*d+0*b[11]+b[15];b[12]=b[0]*c+b[4]*d+0*b[8]+b[12];b[13]=e;b[14]=f;b[15]=g}
function Jd(b,c,d){Cd(b,b[0]*c,b[1]*c,b[2]*c,b[3]*c,b[4]*d,b[5]*d,b[6]*d,b[7]*d,1*b[8],1*b[9],1*b[10],1*b[11],b[12],b[13],b[14],b[15])}function Kd(b,c){var d=b[0],e=b[1],f=b[2],g=b[3],h=b[4],k=b[5],m=b[6],n=b[7],p=Math.cos(c),q=Math.sin(c);b[0]=d*p+h*q;b[1]=e*p+k*q;b[2]=f*p+m*q;b[3]=g*p+n*q;b[4]=d*-q+h*p;b[5]=e*-q+k*p;b[6]=f*-q+m*p;b[7]=g*-q+n*p}new Float64Array(3);new Float64Array(3);new Float64Array(4);new Float64Array(4);new Float64Array(4);new Float64Array(16);function Ld(b){for(var c=Md(),d=0,e=b.length;d<e;++d)Nd(c,b[d]);return c}function Od(b,c,d){var e=Math.min.apply(null,b),f=Math.min.apply(null,c);b=Math.max.apply(null,b);c=Math.max.apply(null,c);return Pd(e,f,b,c,d)}function Qd(b,c,d){return d?(d[0]=b[0]-c,d[1]=b[1]-c,d[2]=b[2]+c,d[3]=b[3]+c,d):[b[0]-c,b[1]-c,b[2]+c,b[3]+c]}function Rd(b,c){return c?(c[0]=b[0],c[1]=b[1],c[2]=b[2],c[3]=b[3],c):b.slice()}
function Sd(b,c,d){c=c<b[0]?b[0]-c:b[2]<c?c-b[2]:0;b=d<b[1]?b[1]-d:b[3]<d?d-b[3]:0;return c*c+b*b}function Td(b,c){return Ud(b,c[0],c[1])}function Vd(b,c){return b[0]<=c[0]&&c[2]<=b[2]&&b[1]<=c[1]&&c[3]<=b[3]}function Ud(b,c,d){return b[0]<=c&&c<=b[2]&&b[1]<=d&&d<=b[3]}function Wd(b,c){var d=b[1],e=b[2],f=b[3],g=c[0],h=c[1],k=0;g<b[0]?k=k|16:g>e&&(k=k|4);h<d?k|=8:h>f&&(k|=2);0===k&&(k=1);return k}function Md(){return[Infinity,Infinity,-Infinity,-Infinity]}
function Pd(b,c,d,e,f){return f?(f[0]=b,f[1]=c,f[2]=d,f[3]=e,f):[b,c,d,e]}function Xd(b,c){var d=b[0],e=b[1];return Pd(d,e,d,e,c)}function Yd(b,c,d,e,f){f=Pd(Infinity,Infinity,-Infinity,-Infinity,f);return Zd(f,b,c,d,e)}function ae(b,c){return b[0]==c[0]&&b[2]==c[2]&&b[1]==c[1]&&b[3]==c[3]}function be(b,c){c[0]<b[0]&&(b[0]=c[0]);c[2]>b[2]&&(b[2]=c[2]);c[1]<b[1]&&(b[1]=c[1]);c[3]>b[3]&&(b[3]=c[3]);return b}
function Nd(b,c){c[0]<b[0]&&(b[0]=c[0]);c[0]>b[2]&&(b[2]=c[0]);c[1]<b[1]&&(b[1]=c[1]);c[1]>b[3]&&(b[3]=c[1])}function Zd(b,c,d,e,f){for(;d<e;d+=f){var g=b,h=c[d],k=c[d+1];g[0]=Math.min(g[0],h);g[1]=Math.min(g[1],k);g[2]=Math.max(g[2],h);g[3]=Math.max(g[3],k)}return b}function ce(b,c,d){var e;return(e=c.call(d,de(b)))||(e=c.call(d,ee(b)))||(e=c.call(d,fe(b)))?e:(e=c.call(d,ge(b)))?e:!1}function he(b){var c=0;ie(b)||(c=je(b)*ke(b));return c}function de(b){return[b[0],b[1]]}
function ee(b){return[b[2],b[1]]}function le(b){return[(b[0]+b[2])/2,(b[1]+b[3])/2]}function me(b,c,d,e){var f=c*e[0]/2;e=c*e[1]/2;c=Math.cos(d);d=Math.sin(d);f=[-f,-f,f,f];e=[-e,e,-e,e];var g,h,k;for(g=0;4>g;++g)h=f[g],k=e[g],f[g]=b[0]+h*c-k*d,e[g]=b[1]+h*d+k*c;return Od(f,e,void 0)}function ke(b){return b[3]-b[1]}function ne(b,c,d){d=d?d:Md();oe(b,c)&&(d[0]=b[0]>c[0]?b[0]:c[0],d[1]=b[1]>c[1]?b[1]:c[1],d[2]=b[2]<c[2]?b[2]:c[2],d[3]=b[3]<c[3]?b[3]:c[3]);return d}function ge(b){return[b[0],b[3]]}
function fe(b){return[b[2],b[3]]}function je(b){return b[2]-b[0]}function oe(b,c){return b[0]<=c[2]&&b[2]>=c[0]&&b[1]<=c[3]&&b[3]>=c[1]}function ie(b){return b[2]<b[0]||b[3]<b[1]}function pe(b,c){var d=(b[2]-b[0])/2*(c-1),e=(b[3]-b[1])/2*(c-1);b[0]-=d;b[2]+=d;b[1]-=e;b[3]+=e}function qe(b,c,d){b=[b[0],b[1],b[0],b[3],b[2],b[1],b[2],b[3]];c(b,b,2);return Od([b[0],b[2],b[4],b[6]],[b[1],b[3],b[5],b[7]],d)};function re(b){return function(){return b}}var se=re(!1),te=re(!0),ue=re(null);function ve(b){return b}function we(b){var c;c=c||0;return function(){return b.apply(this,Array.prototype.slice.call(arguments,0,c))}}function xe(b){var c=arguments,d=c.length;return function(){for(var b,f=0;f<d;f++)b=c[f].apply(this,arguments);return b}}function ye(b){var c=arguments,d=c.length;return function(){for(var b=0;b<d;b++)if(!c[b].apply(this,arguments))return!1;return!0}};/*

 Latitude/longitude spherical geodesy formulae taken from
 http://www.movable-type.co.uk/scripts/latlong.html
 Licensed under CC-BY-3.0.
*/
function ze(b){this.radius=b}ze.prototype.f=function(b){for(var c=0,d=b.length,e=b[d-1][0],f=b[d-1][1],g=0;g<d;g++)var h=b[g][0],k=b[g][1],c=c+Xa(h-e)*(2+Math.sin(Xa(f))+Math.sin(Xa(k))),e=h,f=k;return c*this.radius*this.radius/2};ze.prototype.a=function(b,c){var d=Xa(b[1]),e=Xa(c[1]),f=(e-d)/2,g=Xa(c[0]-b[0])/2,d=Math.sin(f)*Math.sin(f)+Math.sin(g)*Math.sin(g)*Math.cos(d)*Math.cos(e);return 2*this.radius*Math.atan2(Math.sqrt(d),Math.sqrt(1-d))};
ze.prototype.offset=function(b,c,d){var e=Xa(b[1]);c/=this.radius;var f=Math.asin(Math.sin(e)*Math.cos(c)+Math.cos(e)*Math.sin(c)*Math.cos(d));return[180*(Xa(b[0])+Math.atan2(Math.sin(d)*Math.sin(c)*Math.cos(e),Math.cos(c)-Math.sin(e)*Math.sin(f)))/Math.PI,180*f/Math.PI]};var Ae=new ze(6370997);var Be={};Be.degrees=2*Math.PI*Ae.radius/360;Be.ft=.3048;Be.m=1;Be["us-ft"]=1200/3937;
function Ce(b){this.a=b.code;this.f=b.units;this.i=void 0!==b.extent?b.extent:null;this.j=void 0!==b.worldExtent?b.worldExtent:null;this.g=void 0!==b.axisOrientation?b.axisOrientation:"enu";this.c=void 0!==b.global?b.global:!1;this.b=!(!this.c||!this.i);this.o=void 0!==b.getPointResolution?b.getPointResolution:this.hk;this.l=null;var c=De,d=b.code;if("function"==typeof proj4&&void 0===c[d]){var e=proj4.defs(d);if(void 0!==e){void 0!==e.axis&&void 0===b.axisOrientation&&(this.g=e.axis);void 0===b.units&&
(b=e.units,void 0===e.to_meter||void 0!==b&&void 0!==Be[b]||(b=e.to_meter.toString(),Be[b]=e.to_meter),this.f=b);for(var f in c)b=proj4.defs(f),void 0!==b&&(c=Ee(f),b===e?Fe([c,this]):(b=proj4(f,d),Ge(c,this,b.forward,b.inverse)))}}}l=Ce.prototype;l.Jj=function(){return this.a};l.J=function(){return this.i};l.Am=function(){return this.f};l.Kc=function(){return Be[this.f]};l.tk=function(){return this.j};function He(b){return b.g}l.gl=function(){return this.c};
l.No=function(b){this.c=b;this.b=!(!b||!this.i)};l.Bm=function(b){this.i=b;this.b=!(!this.c||!b)};l.Vo=function(b){this.j=b};l.Mo=function(b){this.o=b};l.hk=function(b,c){if("degrees"==this.f)return b;var d=Ie(this,Ee("EPSG:4326")),e=[c[0]-b/2,c[1],c[0]+b/2,c[1],c[0],c[1]-b/2,c[0],c[1]+b/2],e=d(e,e,2),d=Ae.a(e.slice(0,2),e.slice(2,4)),e=Ae.a(e.slice(4,6),e.slice(6,8)),e=(d+e)/2,d=this.Kc();void 0!==d&&(e/=d);return e};l.getPointResolution=function(b,c){return this.o(b,c)};var De={},Je={};
function Fe(b){Ke(b);b.forEach(function(c){b.forEach(function(b){c!==b&&Le(c,b,Me)})})}function Ne(){var b=Oe,c=Pe,d=Qe;Re.forEach(function(e){b.forEach(function(b){Le(e,b,c);Le(b,e,d)})})}function Se(b){De[b.a]=b;Le(b,b,Me)}function Ke(b){var c=[];b.forEach(function(b){c.push(Se(b))})}function Te(b){return b?ia(b)?Ee(b):b:Ee("EPSG:3857")}function Le(b,c,d){b=b.a;c=c.a;b in Je||(Je[b]={});Je[b][c]=d}function Ge(b,c,d,e){b=Ee(b);c=Ee(c);Le(b,c,Ue(d));Le(c,b,Ue(e))}
function Ue(b){return function(c,d,e){var f=c.length;e=void 0!==e?e:2;d=void 0!==d?d:Array(f);var g,h;for(h=0;h<f;h+=e)for(g=b([c[h],c[h+1]]),d[h]=g[0],d[h+1]=g[1],g=e-1;2<=g;--g)d[h+g]=c[h+g];return d}}function Ee(b){var c;b instanceof Ce?c=b:ia(b)?(c=De[b],void 0===c&&"function"==typeof proj4&&void 0!==proj4.defs(b)&&(c=new Ce({code:b}),Se(c))):c=null;return c}function Ve(b,c){if(b===c)return!0;var d=b.f===c.f;return b.a===c.a?d:Ie(b,c)===Me&&d}
function We(b,c){var d=Ee(b),e=Ee(c);return Ie(d,e)}function Ie(b,c){var d=b.a,e=c.a,f;d in Je&&e in Je[d]&&(f=Je[d][e]);void 0===f&&(f=Xe);return f}function Xe(b,c){if(void 0!==c&&b!==c){for(var d=0,e=b.length;d<e;++d)c[d]=b[d];b=c}return b}function Me(b,c){var d;if(void 0!==c){d=0;for(var e=b.length;d<e;++d)c[d]=b[d];d=c}else d=b.slice();return d}function Ye(b,c,d){return We(c,d)(b,void 0,b.length)}function Ze(b,c,d){c=We(c,d);return qe(b,c)};function $e(){gd.call(this);this.B=Md();this.v=-1;this.i={};this.o=this.j=0}y($e,gd);l=$e.prototype;l.qb=function(b,c){var d=c?c:[NaN,NaN];this.nb(b[0],b[1],d,Infinity);return d};l.og=function(b){return this.uc(b[0],b[1])};l.uc=se;l.J=function(b){this.v!=this.f&&(this.B=this.Wd(this.B),this.v=this.f);var c=this.B;b?(b[0]=c[0],b[1]=c[1],b[2]=c[2],b[3]=c[3]):b=c;return b};l.xb=function(b){return this.td(b*b)};l.lb=function(b,c){this.pc(We(b,c));return this};function af(b,c,d,e,f,g){var h=f[0],k=f[1],m=f[4],n=f[5],p=f[12];f=f[13];for(var q=g?g:[],r=0;c<d;c+=e){var t=b[c],x=b[c+1];q[r++]=h*t+m*x+p;q[r++]=k*t+n*x+f}g&&q.length!=r&&(q.length=r);return q};function bf(){$e.call(this);this.b="XY";this.a=2;this.A=null}y(bf,$e);function cf(b){if("XY"==b)return 2;if("XYZ"==b||"XYM"==b)return 3;if("XYZM"==b)return 4}l=bf.prototype;l.uc=se;l.Wd=function(b){return Yd(this.A,0,this.A.length,this.a,b)};l.Kb=function(){return this.A.slice(0,this.a)};l.ia=function(){return this.A};l.Lb=function(){return this.A.slice(this.A.length-this.a)};l.Mb=function(){return this.b};
l.td=function(b){this.o!=this.f&&(Qb(this.i),this.j=0,this.o=this.f);if(0>b||0!==this.j&&b<=this.j)return this;var c=b.toString();if(this.i.hasOwnProperty(c))return this.i[c];var d=this.Lc(b);if(d.ia().length<this.A.length)return this.i[c]=d;this.j=b;return this};l.Lc=function(){return this};l.ra=function(){return this.a};function df(b,c,d){b.a=cf(c);b.b=c;b.A=d}
function ef(b,c,d,e){if(c)d=cf(c);else{for(c=0;c<e;++c){if(0===d.length){b.b="XY";b.a=2;return}d=d[0]}d=d.length;c=2==d?"XY":3==d?"XYZ":4==d?"XYZM":void 0}b.b=c;b.a=d}l.pc=function(b){this.A&&(b(this.A,this.A,this.a),this.u())};l.Pc=function(b,c){var d=this.ia();if(d){var e=d.length,f=this.ra(),g=d?d:[],h=0,k,m;for(k=0;k<e;k+=f)for(g[h++]=d[k]+b,g[h++]=d[k+1]+c,m=k+2;m<k+f;++m)g[h++]=d[m];d&&g.length!=h&&(g.length=h);this.u()}};function ff(b,c,d,e){for(var f=0,g=b[d-e],h=b[d-e+1];c<d;c+=e)var k=b[c],m=b[c+1],f=f+(h*k-g*m),g=k,h=m;return f/2}function gf(b,c,d,e){var f=0,g,h;g=0;for(h=d.length;g<h;++g){var k=d[g],f=f+ff(b,c,k,e);c=k}return f};function hf(b,c,d,e,f,g,h){var k=b[c],m=b[c+1],n=b[d]-k,p=b[d+1]-m;if(0!==n||0!==p)if(g=((f-k)*n+(g-m)*p)/(n*n+p*p),1<g)c=d;else if(0<g){for(f=0;f<e;++f)h[f]=od(b[c+f],b[d+f],g);h.length=e;return}for(f=0;f<e;++f)h[f]=b[c+f];h.length=e}function jf(b,c,d,e,f){var g=b[c],h=b[c+1];for(c+=e;c<d;c+=e){var k=b[c],m=b[c+1],g=Wa(g,h,k,m);g>f&&(f=g);g=k;h=m}return f}function kf(b,c,d,e,f){var g,h;g=0;for(h=d.length;g<h;++g){var k=d[g];f=jf(b,c,k,e,f);c=k}return f}
function lf(b,c,d,e,f,g,h,k,m,n,p){if(c==d)return n;var q;if(0===f){q=Wa(h,k,b[c],b[c+1]);if(q<n){for(p=0;p<e;++p)m[p]=b[c+p];m.length=e;return q}return n}for(var r=p?p:[NaN,NaN],t=c+e;t<d;)if(hf(b,t-e,t,e,h,k,r),q=Wa(h,k,r[0],r[1]),q<n){n=q;for(p=0;p<e;++p)m[p]=r[p];m.length=e;t+=e}else t+=e*Math.max((Math.sqrt(q)-Math.sqrt(n))/f|0,1);if(g&&(hf(b,d-e,c,e,h,k,r),q=Wa(h,k,r[0],r[1]),q<n)){n=q;for(p=0;p<e;++p)m[p]=r[p];m.length=e}return n}
function mf(b,c,d,e,f,g,h,k,m,n,p){p=p?p:[NaN,NaN];var q,r;q=0;for(r=d.length;q<r;++q){var t=d[q];n=lf(b,c,t,e,f,g,h,k,m,n,p);c=t}return n};function nf(b,c){var d=0,e,f;e=0;for(f=c.length;e<f;++e)b[d++]=c[e];return d}function of(b,c,d,e){var f,g;f=0;for(g=d.length;f<g;++f){var h=d[f],k;for(k=0;k<e;++k)b[c++]=h[k]}return c}function pf(b,c,d,e,f){f=f?f:[];var g=0,h,k;h=0;for(k=d.length;h<k;++h)c=of(b,c,d[h],e),f[g++]=c;f.length=g;return f};function qf(b,c,d,e,f){f=void 0!==f?f:[];for(var g=0;c<d;c+=e)f[g++]=b.slice(c,c+e);f.length=g;return f}function rf(b,c,d,e,f){f=void 0!==f?f:[];var g=0,h,k;h=0;for(k=d.length;h<k;++h){var m=d[h];f[g++]=qf(b,c,m,e,f[g]);c=m}f.length=g;return f};function tf(b,c,d,e,f,g,h){var k=(d-c)/e;if(3>k){for(;c<d;c+=e)g[h++]=b[c],g[h++]=b[c+1];return h}var m=Array(k);m[0]=1;m[k-1]=1;d=[c,d-e];for(var n=0,p;0<d.length;){var q=d.pop(),r=d.pop(),t=0,x=b[r],z=b[r+1],A=b[q],B=b[q+1];for(p=r+e;p<q;p+=e){var v=Va(b[p],b[p+1],x,z,A,B);v>t&&(n=p,t=v)}t>f&&(m[(n-c)/e]=1,r+e<n&&d.push(r,n),n+e<q&&d.push(n,q))}for(p=0;p<k;++p)m[p]&&(g[h++]=b[c+p*e],g[h++]=b[c+p*e+1]);return h}
function uf(b,c,d,e,f,g,h,k){var m,n;m=0;for(n=d.length;m<n;++m){var p=d[m];a:{var q=b,r=p,t=e,x=f,z=g;if(c!=r){var A=x*Math.round(q[c]/x),B=x*Math.round(q[c+1]/x);c+=t;z[h++]=A;z[h++]=B;var v=void 0,L=void 0;do if(v=x*Math.round(q[c]/x),L=x*Math.round(q[c+1]/x),c+=t,c==r){z[h++]=v;z[h++]=L;break a}while(v==A&&L==B);for(;c<r;){var M,J;M=x*Math.round(q[c]/x);J=x*Math.round(q[c+1]/x);c+=t;if(M!=v||J!=L){var C=v-A,sa=L-B,la=M-A,K=J-B;C*K==sa*la&&(0>C&&la<C||C==la||0<C&&la>C)&&(0>sa&&K<sa||sa==K||0<sa&&
K>sa)||(z[h++]=v,z[h++]=L,A=v,B=L);v=M;L=J}}z[h++]=v;z[h++]=L}}k.push(h);c=p}return h};function vf(b,c){bf.call(this);this.g=this.l=-1;this.la(b,c)}y(vf,bf);l=vf.prototype;l.clone=function(){var b=new vf(null);wf(b,this.b,this.A.slice());return b};l.nb=function(b,c,d,e){if(e<Sd(this.J(),b,c))return e;this.g!=this.f&&(this.l=Math.sqrt(jf(this.A,0,this.A.length,this.a,0)),this.g=this.f);return lf(this.A,0,this.A.length,this.a,this.l,!0,b,c,d,e)};l.bm=function(){return ff(this.A,0,this.A.length,this.a)};l.Z=function(){return qf(this.A,0,this.A.length,this.a)};
l.Lc=function(b){var c=[];c.length=tf(this.A,0,this.A.length,this.a,b,c,0);b=new vf(null);wf(b,"XY",c);return b};l.W=function(){return"LinearRing"};l.la=function(b,c){b?(ef(this,c,b,1),this.A||(this.A=[]),this.A.length=of(this.A,0,b,this.a),this.u()):wf(this,"XY",null)};function wf(b,c,d){df(b,c,d);b.u()};function E(b,c){bf.call(this);this.la(b,c)}y(E,bf);l=E.prototype;l.clone=function(){var b=new E(null);b.ba(this.b,this.A.slice());return b};l.nb=function(b,c,d,e){var f=this.A;b=Wa(b,c,f[0],f[1]);if(b<e){e=this.a;for(c=0;c<e;++c)d[c]=f[c];d.length=e;return b}return e};l.Z=function(){return this.A?this.A.slice():[]};l.Wd=function(b){return Xd(this.A,b)};l.W=function(){return"Point"};l.Ea=function(b){return Ud(b,this.A[0],this.A[1])};
l.la=function(b,c){b?(ef(this,c,b,0),this.A||(this.A=[]),this.A.length=nf(this.A,b),this.u()):this.ba("XY",null)};l.ba=function(b,c){df(this,b,c);this.u()};function xf(b,c,d,e,f){return!ce(f,function(f){return!yf(b,c,d,e,f[0],f[1])})}function yf(b,c,d,e,f,g){for(var h=!1,k=b[d-e],m=b[d-e+1];c<d;c+=e){var n=b[c],p=b[c+1];m>g!=p>g&&f<(n-k)*(g-m)/(p-m)+k&&(h=!h);k=n;m=p}return h}function zf(b,c,d,e,f,g){if(0===d.length||!yf(b,c,d[0],e,f,g))return!1;var h;c=1;for(h=d.length;c<h;++c)if(yf(b,d[c-1],d[c],e,f,g))return!1;return!0};function Af(b,c,d,e,f,g,h){var k,m,n,p,q,r=f[g+1],t=[],x=d[0];n=b[x-e];q=b[x-e+1];for(k=c;k<x;k+=e){p=b[k];m=b[k+1];if(r<=q&&m<=r||q<=r&&r<=m)n=(r-q)/(m-q)*(p-n)+n,t.push(n);n=p;q=m}x=NaN;q=-Infinity;t.sort(ub);n=t[0];k=1;for(m=t.length;k<m;++k){p=t[k];var z=Math.abs(p-n);z>q&&(n=(n+p)/2,zf(b,c,d,e,n,r)&&(x=n,q=z));n=p}isNaN(x)&&(x=f[g]);return h?(h.push(x,r),h):[x,r]};function Bf(b,c,d,e,f,g){for(var h=[b[c],b[c+1]],k=[],m;c+e<d;c+=e){k[0]=b[c+e];k[1]=b[c+e+1];if(m=f.call(g,h,k))return m;h[0]=k[0];h[1]=k[1]}return!1};function Cf(b,c,d,e,f){var g=Zd(Md(),b,c,d,e);return oe(f,g)?Vd(f,g)||g[0]>=f[0]&&g[2]<=f[2]||g[1]>=f[1]&&g[3]<=f[3]?!0:Bf(b,c,d,e,function(b,c){var d=!1,e=Wd(f,b),g=Wd(f,c);if(1===e||1===g)d=!0;else{var q=f[0],r=f[1],t=f[2],x=f[3],z=c[0],A=c[1],B=(A-b[1])/(z-b[0]);g&2&&!(e&2)&&(d=z-(A-x)/B,d=d>=q&&d<=t);d||!(g&4)||e&4||(d=A-(z-t)*B,d=d>=r&&d<=x);d||!(g&8)||e&8||(d=z-(A-r)/B,d=d>=q&&d<=t);d||!(g&16)||e&16||(d=A-(z-q)*B,d=d>=r&&d<=x)}return d}):!1}
function Df(b,c,d,e,f){var g=d[0];if(!(Cf(b,c,g,e,f)||yf(b,c,g,e,f[0],f[1])||yf(b,c,g,e,f[0],f[3])||yf(b,c,g,e,f[2],f[1])||yf(b,c,g,e,f[2],f[3])))return!1;if(1===d.length)return!0;c=1;for(g=d.length;c<g;++c)if(xf(b,d[c-1],d[c],e,f))return!1;return!0};function Ef(b,c,d,e){for(var f=0,g=b[d-e],h=b[d-e+1];c<d;c+=e)var k=b[c],m=b[c+1],f=f+(k-g)*(m+h),g=k,h=m;return 0<f}function Ff(b,c,d,e){var f=0;e=void 0!==e?e:!1;var g,h;g=0;for(h=c.length;g<h;++g){var k=c[g],f=Ef(b,f,k,d);if(0===g){if(e&&f||!e&&!f)return!1}else if(e&&!f||!e&&f)return!1;f=k}return!0}
function Gf(b,c,d,e,f){f=void 0!==f?f:!1;var g,h;g=0;for(h=d.length;g<h;++g){var k=d[g],m=Ef(b,c,k,e);if(0===g?f&&m||!f&&!m:f&&!m||!f&&m)for(var m=b,n=k,p=e;c<n-p;){var q;for(q=0;q<p;++q){var r=m[c+q];m[c+q]=m[n-p+q];m[n-p+q]=r}c+=p;n-=p}c=k}return c}function Hf(b,c,d,e){var f=0,g,h;g=0;for(h=c.length;g<h;++g)f=Gf(b,f,c[g],d,e);return f};function F(b,c){bf.call(this);this.g=[];this.C=-1;this.D=null;this.T=this.O=this.U=-1;this.l=null;this.la(b,c)}y(F,bf);l=F.prototype;l.oj=function(b){this.A?kb(this.A,b.ia()):this.A=b.ia().slice();this.g.push(this.A.length);this.u()};l.clone=function(){var b=new F(null);b.ba(this.b,this.A.slice(),this.g.slice());return b};
l.nb=function(b,c,d,e){if(e<Sd(this.J(),b,c))return e;this.O!=this.f&&(this.U=Math.sqrt(kf(this.A,0,this.g,this.a,0)),this.O=this.f);return mf(this.A,0,this.g,this.a,this.U,!0,b,c,d,e)};l.uc=function(b,c){return zf(this.bc(),0,this.g,this.a,b,c)};l.em=function(){return gf(this.bc(),0,this.g,this.a)};l.Z=function(b){var c;void 0!==b?(c=this.bc().slice(),Gf(c,0,this.g,this.a,b)):c=this.A;return rf(c,0,this.g,this.a)};l.zb=function(){return this.g};
function If(b){if(b.C!=b.f){var c=le(b.J());b.D=Af(b.bc(),0,b.g,b.a,c,0);b.C=b.f}return b.D}l.Sj=function(){return new E(If(this))};l.Xj=function(){return this.g.length};l.Dg=function(b){if(0>b||this.g.length<=b)return null;var c=new vf(null);wf(c,this.b,this.A.slice(0===b?0:this.g[b-1],this.g[b]));return c};l.be=function(){var b=this.b,c=this.A,d=this.g,e=[],f=0,g,h;g=0;for(h=d.length;g<h;++g){var k=d[g],m=new vf(null);wf(m,b,c.slice(f,k));e.push(m);f=k}return e};
l.bc=function(){if(this.T!=this.f){var b=this.A;Ff(b,this.g,this.a)?this.l=b:(this.l=b.slice(),this.l.length=Gf(this.l,0,this.g,this.a));this.T=this.f}return this.l};l.Lc=function(b){var c=[],d=[];c.length=uf(this.A,0,this.g,this.a,Math.sqrt(b),c,0,d);b=new F(null);b.ba("XY",c,d);return b};l.W=function(){return"Polygon"};l.Ea=function(b){return Df(this.bc(),0,this.g,this.a,b)};
l.la=function(b,c){if(b){ef(this,c,b,2);this.A||(this.A=[]);var d=pf(this.A,0,b,this.a,this.g);this.A.length=0===d.length?0:d[d.length-1];this.u()}else this.ba("XY",null,this.g)};l.ba=function(b,c,d){df(this,b,c);this.g=d;this.u()};function Jf(b,c,d,e){var f=e?e:32;e=[];var g;for(g=0;g<f;++g)kb(e,b.offset(c,d,2*Math.PI*g/f));e.push(e[0],e[1]);b=new F(null);b.ba("XY",e,[e.length]);return b}
function Kf(b){var c=b[0],d=b[1],e=b[2];b=b[3];c=[c,d,c,b,e,b,e,d,c,d];d=new F(null);d.ba("XY",c,[c.length]);return d}function Lf(b,c,d){var e=c?c:32,f=b.ra();c=b.b;for(var g=new F(null,c),e=f*(e+1),f=[],h=0;h<e;h++)f[h]=0;g.ba(c,f,[f.length]);Mf(g,b.wd(),b.zf(),d);return g}function Mf(b,c,d,e){var f=b.ia(),g=b.b,h=b.ra(),k=b.zb(),m=f.length/h-1;e=e?e:0;for(var n,p,q=0;q<=m;++q)p=q*h,n=e+2*nd(q,m)*Math.PI/m,f[p]=c[0]+d*Math.cos(n),f[p+1]=c[1]+d*Math.sin(n);b.ba(g,f,k)};function Nf(b){gd.call(this);b=b||{};this.b=[0,0];var c={};c.center=void 0!==b.center?b.center:null;this.g=Te(b.projection);var d,e,f,g=void 0!==b.minZoom?b.minZoom:0;d=void 0!==b.maxZoom?b.maxZoom:28;var h=void 0!==b.zoomFactor?b.zoomFactor:2;if(void 0!==b.resolutions)d=b.resolutions,e=d[0],f=d[d.length-1],d=xb(d);else{e=Te(b.projection);f=e.J();var k=(f?Math.max(je(f),ke(f)):360*Be.degrees/Be[e.f])/256/Math.pow(2,0),m=k/Math.pow(2,28);e=b.maxResolution;void 0!==e?g=0:e=k/Math.pow(h,g);f=b.minResolution;
void 0===f&&(f=void 0!==b.maxZoom?void 0!==b.maxResolution?e/Math.pow(h,d):k/Math.pow(h,d):m);d=g+Math.floor(Math.log(e/f)/Math.log(h));f=e/Math.pow(h,d-g);d=yb(h,e,d-g)}this.a=e;this.j=f;this.c=g;g=void 0!==b.extent?Ya(b.extent):Za;(void 0!==b.enableRotation?b.enableRotation:1)?(e=b.constrainRotation,e=void 0===e||!0===e?Cb():!1===e?Ab:ja(e)?Bb(e):Ab):e=zb;this.i=new Db(g,d,e);void 0!==b.resolution?c.resolution=b.resolution:void 0!==b.zoom&&(c.resolution=this.constrainResolution(this.a,b.zoom-this.c));
c.rotation=void 0!==b.rotation?b.rotation:0;this.I(c)}y(Nf,gd);l=Nf.prototype;l.Xd=function(b){return this.i.center(b)};l.constrainResolution=function(b,c,d){return this.i.resolution(b,c||0,d||0)};l.constrainRotation=function(b,c){return this.i.rotation(b,c||0)};l.Ua=function(){return this.get("center")};l.$c=function(b){var c=this.Ua(),d=this.$(),e=this.Fa();return me(c,d,e,b)};l.Ml=function(){return this.g};l.$=function(){return this.get("resolution")};
function Of(b){var c=b.a,d=Math.log(c/b.j)/Math.log(2);return function(b){return c/Math.pow(2,b*d)}}l.Fa=function(){return this.get("rotation")};function Pf(b){var c=b.a,d=Math.log(c/b.j)/Math.log(2);return function(b){return Math.log(c/b)/Math.log(2)/d}}function Qf(b){var c=b.Ua(),d=b.g,e=b.$();b=b.Fa();return{center:[Math.round(c[0]/e)*e,Math.round(c[1]/e)*e],projection:void 0!==d?d:null,resolution:e,rotation:b}}
l.uk=function(){var b,c=this.$();if(void 0!==c){var d,e=0;do{d=this.constrainResolution(this.a,e);if(d==c){b=e;break}++e}while(d>this.j)}return void 0!==b?this.c+b:b};
l.kf=function(b,c,d){b instanceof bf||(b=Kf(b));var e=d||{};d=void 0!==e.padding?e.padding:[0,0,0,0];var f=void 0!==e.constrainResolution?e.constrainResolution:!0,g=void 0!==e.nearest?e.nearest:!1,h;void 0!==e.minResolution?h=e.minResolution:void 0!==e.maxZoom?h=this.constrainResolution(this.a,e.maxZoom-this.c,0):h=0;var k=b.ia(),m=this.Fa(),e=Math.cos(-m),m=Math.sin(-m),n=Infinity,p=Infinity,q=-Infinity,r=-Infinity;b=b.ra();for(var t=0,x=k.length;t<x;t+=b)var z=k[t]*e-k[t+1]*m,A=k[t]*m+k[t+1]*e,
n=Math.min(n,z),p=Math.min(p,A),q=Math.max(q,z),r=Math.max(r,A);k=[n,p,q,r];c=[c[0]-d[1]-d[3],c[1]-d[0]-d[2]];c=Math.max(je(k)/c[0],ke(k)/c[1]);c=isNaN(c)?h:Math.max(c,h);f&&(h=this.constrainResolution(c,0,0),!g&&h<c&&(h=this.constrainResolution(h,-1,0)),c=h);this.Ub(c);m=-m;g=(n+q)/2+(d[1]-d[3])/2*c;d=(p+r)/2+(d[0]-d[2])/2*c;this.kb([g*e-d*m,d*e+g*m])};
l.uj=function(b,c,d){var e=this.Fa(),f=Math.cos(-e),e=Math.sin(-e),g=b[0]*f-b[1]*e;b=b[1]*f+b[0]*e;var h=this.$(),g=g+(c[0]/2-d[0])*h;b+=(d[1]-c[1]/2)*h;e=-e;this.kb([g*f-b*e,b*f+g*e])};function Rf(b){return!!b.Ua()&&void 0!==b.$()}l.rotate=function(b,c){if(void 0!==c){var d,e=this.Ua();void 0!==e&&(d=[e[0]-c[0],e[1]-c[1]],ud(d,b-this.Fa()),pd(d,c));this.kb(d)}this.ue(b)};l.kb=function(b){this.set("center",b)};function Sf(b,c){b.b[1]+=c}l.Ub=function(b){this.set("resolution",b)};
l.ue=function(b){this.set("rotation",b)};l.Wo=function(b){b=this.constrainResolution(this.a,b-this.c,0);this.Ub(b)};function Tf(b){return Math.pow(b,3)}function Uf(b){return 1-Tf(1-b)}function Vf(b){return 3*b*b-2*b*b*b}function Wf(b){return b}function Xf(b){return.5>b?Vf(2*b):1-Vf(2*(b-.5))};function Yf(b){var c=b.source,d=b.start?b.start:Date.now(),e=c[0],f=c[1],g=void 0!==b.duration?b.duration:1E3,h=b.easing?b.easing:Vf;return function(b,c){if(c.time<d)return c.animate=!0,c.viewHints[0]+=1,!0;if(c.time<d+g){var n=1-h((c.time-d)/g),p=e-c.viewState.center[0],q=f-c.viewState.center[1];c.animate=!0;c.viewState.center[0]+=n*p;c.viewState.center[1]+=n*q;c.viewHints[0]+=1;return!0}return!1}}
function Zf(b){var c=b.rotation?b.rotation:0,d=b.start?b.start:Date.now(),e=void 0!==b.duration?b.duration:1E3,f=b.easing?b.easing:Vf,g=b.anchor?b.anchor:null;return function(b,k){if(k.time<d)return k.animate=!0,k.viewHints[0]+=1,!0;if(k.time<d+e){var m=1-f((k.time-d)/e),m=(c-k.viewState.rotation)*m;k.animate=!0;k.viewState.rotation+=m;if(g){var n=k.viewState.center;n[0]-=g[0];n[1]-=g[1];ud(n,m);pd(n,g)}k.viewHints[0]+=1;return!0}return!1}}
function $f(b){var c=b.resolution,d=b.start?b.start:Date.now(),e=void 0!==b.duration?b.duration:1E3,f=b.easing?b.easing:Vf;return function(b,h){if(h.time<d)return h.animate=!0,h.viewHints[0]+=1,!0;if(h.time<d+e){var k=1-f((h.time-d)/e),m=c-h.viewState.resolution;h.animate=!0;h.viewState.resolution+=k*m;h.viewHints[0]+=1;return!0}return!1}};function ag(b,c,d,e){return void 0!==e?(e[0]=b,e[1]=c,e[2]=d,e):[b,c,d]}function bg(b,c,d){return b+"/"+c+"/"+d}function dg(b){var c=b[0],d=Array(c),e=1<<c-1,f,g;for(f=0;f<c;++f)g=48,b[1]&e&&(g+=1),b[2]&e&&(g+=2),d[f]=String.fromCharCode(g),e>>=1;return d.join("")}function eg(b){return bg(b[0],b[1],b[2])};function fg(b,c,d,e){this.a=b;this.c=c;this.f=d;this.b=e}fg.prototype.contains=function(b){return gg(this,b[1],b[2])};function hg(b,c){return b.a<=c.a&&c.c<=b.c&&b.f<=c.f&&c.b<=b.b}function gg(b,c,d){return b.a<=c&&c<=b.c&&b.f<=d&&d<=b.b}function ig(b,c){return b.a==c.a&&b.f==c.f&&b.c==c.c&&b.b==c.b}function jg(b){return b.b-b.f+1}function kg(b){return b.c-b.a+1}function lg(b,c){return b.a<=c.c&&b.c>=c.a&&b.f<=c.b&&b.b>=c.f};function mg(b){this.f=b.html;this.a=b.tileRanges?b.tileRanges:null}mg.prototype.b=function(){return this.f};function ng(b,c,d){tc.call(this,b,d);this.element=c}y(ng,tc);function og(b){gd.call(this);this.a=b?b:[];pg(this)}y(og,gd);l=og.prototype;l.clear=function(){for(;0<this.$b();)this.pop()};l.uf=function(b){var c,d;c=0;for(d=b.length;c<d;++c)this.push(b[c]);return this};l.forEach=function(b,c){this.a.forEach(b,c)};l.wl=function(){return this.a};l.item=function(b){return this.a[b]};l.$b=function(){return this.get("length")};l.le=function(b,c){lb(this.a,b,0,c);pg(this);this.s(new ng("add",c,this))};
l.pop=function(){return this.Sf(this.$b()-1)};l.push=function(b){var c=this.a.length;this.le(c,b);return c};l.remove=function(b){var c=this.a,d,e;d=0;for(e=c.length;d<e;++d)if(c[d]===b)return this.Sf(d)};l.Sf=function(b){var c=this.a[b];$a.splice.call(this.a,b,1);pg(this);this.s(new ng("remove",c,this));return c};l.Jo=function(b,c){var d=this.$b();if(b<d)d=this.a[b],this.a[b]=c,this.s(new ng("remove",d,this)),this.s(new ng("add",c,this));else{for(;d<b;++d)this.le(d,void 0);this.le(b,c)}};
function pg(b){b.set("length",b.a.length)};var qg=/^#(?:[0-9a-f]{3}){1,2}$/i,rg=/^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i,sg=/^(?:rgba)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|1|0\.\d{0,10})\)$/i;function tg(b){return ga(b)?b:ug(b)}function vg(b){if(!ia(b)){var c=b[0];c!=(c|0)&&(c=c+.5|0);var d=b[1];d!=(d|0)&&(d=d+.5|0);var e=b[2];e!=(e|0)&&(e=e+.5|0);b="rgba("+c+","+d+","+e+","+b[3]+")"}return b}
var ug=function(){var b={},c=0;return function(d){var e;if(b.hasOwnProperty(d))e=b[d];else{if(1024<=c){e=0;for(var f in b)0===(e++&3)&&(delete b[f],--c)}var g,h;qg.exec(d)?(h=3==d.length-1?1:2,e=parseInt(d.substr(1+0*h,h),16),f=parseInt(d.substr(1+1*h,h),16),g=parseInt(d.substr(1+2*h,h),16),1==h&&(e=(e<<4)+e,f=(f<<4)+f,g=(g<<4)+g),e=[e,f,g,1]):(h=sg.exec(d))?(e=Number(h[1]),f=Number(h[2]),g=Number(h[3]),h=Number(h[4]),e=[e,f,g,h],e=wg(e,e)):(h=rg.exec(d))?(e=Number(h[1]),f=Number(h[2]),g=Number(h[3]),
e=[e,f,g,1],e=wg(e,e)):e=void 0;b[d]=e;++c}return e}}();function wg(b,c){var d=c||[];d[0]=Sa(b[0]+.5|0,0,255);d[1]=Sa(b[1]+.5|0,0,255);d[2]=Sa(b[2]+.5|0,0,255);d[3]=Sa(b[3],0,1);return d};var xg=!Yb||9<=kc;!$b&&!Yb||Yb&&9<=kc||$b&&ic("1.9.1");Yb&&ic("9");function yg(b,c){this.x=ca(b)?b:0;this.y=ca(c)?c:0}l=yg.prototype;l.clone=function(){return new yg(this.x,this.y)};l.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};l.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};l.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};l.scale=function(b,c){var d=ja(c)?c:b;this.x*=b;this.y*=d;return this};function zg(b,c){this.width=b;this.height=c}l=zg.prototype;l.clone=function(){return new zg(this.width,this.height)};l.rj=function(){return this.width*this.height};l.La=function(){return!this.rj()};l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
l.scale=function(b,c){var d=ja(c)?c:b;this.width*=b;this.height*=d;return this};function Ag(b){return b?new Bg(Cg(b)):Ba||(Ba=new Bg)}function Dg(b){var c=document;return ia(b)?c.getElementById(b):b}function Eg(b,c){Ib(c,function(c,e){"style"==e?b.style.cssText=c:"class"==e?b.className=c:"for"==e?b.htmlFor=c:Fg.hasOwnProperty(e)?b.setAttribute(Fg[e],c):0==e.lastIndexOf("aria-",0)||0==e.lastIndexOf("data-",0)?b.setAttribute(e,c):b[e]=c})}
var Fg={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Gg(b){b=b.document.documentElement;return new zg(b.clientWidth,b.clientHeight)}
function Hg(b,c,d){var e=arguments,f=document,g=e[0],h=e[1];if(!xg&&h&&(h.name||h.type)){g=["<",g];h.name&&g.push(' name="',Ga(h.name),'"');if(h.type){g.push(' type="',Ga(h.type),'"');var k={};Wb(k,h);delete k.type;h=k}g.push(">");g=g.join("")}g=f.createElement(g);h&&(ia(h)?g.className=h:ga(h)?g.className=h.join(" "):Eg(g,h));2<e.length&&Ig(f,g,e);return g}
function Ig(b,c,d){function e(d){d&&c.appendChild(ia(d)?b.createTextNode(d):d)}for(var f=2;f<d.length;f++){var g=d[f];!ha(g)||oa(g)&&0<g.nodeType?e(g):bb(Jg(g)?jb(g):g,e)}}function Kg(b){for(var c;c=b.firstChild;)b.removeChild(c)}function Lg(b,c,d){b.insertBefore(c,b.childNodes[d]||null)}function Mg(b){b&&b.parentNode&&b.parentNode.removeChild(b)}function Ng(b,c){var d=c.parentNode;d&&d.replaceChild(b,c)}
function Og(b){if(ca(b.firstElementChild))b=b.firstElementChild;else for(b=b.firstChild;b&&1!=b.nodeType;)b=b.nextSibling;return b}function Pg(b,c){if(b.contains&&1==c.nodeType)return b==c||b.contains(c);if("undefined"!=typeof b.compareDocumentPosition)return b==c||Boolean(b.compareDocumentPosition(c)&16);for(;c&&b!=c;)c=c.parentNode;return c==b}function Cg(b){return 9==b.nodeType?b:b.ownerDocument||b.document}
function Jg(b){if(b&&"number"==typeof b.length){if(oa(b))return"function"==typeof b.item||"string"==typeof b.item;if(ka(b))return"function"==typeof b.item}return!1}function Bg(b){this.a=b||ba.document||document}Bg.prototype.I=Eg;function Qg(){return!0}
function Rg(b){var c=b.a;b=c.scrollingElement?c.scrollingElement:ac?c.body||c.documentElement:c.documentElement;c=c.parentWindow||c.defaultView;return Yb&&ic("10")&&c.pageYOffset!=b.scrollTop?new yg(b.scrollLeft,b.scrollTop):new yg(c.pageXOffset||b.scrollLeft,c.pageYOffset||b.scrollTop)}Bg.prototype.appendChild=function(b,c){b.appendChild(c)};Bg.prototype.contains=Pg;function Sg(b){if(b.classList)return b.classList;b=b.className;return ia(b)&&b.match(/\S+/g)||[]}function Tg(b,c){var d;b.classList?d=b.classList.contains(c):(d=Sg(b),d=0<=ab(d,c));return d}function Ug(b,c){b.classList?b.classList.add(c):Tg(b,c)||(b.className+=0<b.className.length?" "+c:c)}function Vg(b,c){b.classList?b.classList.remove(c):Tg(b,c)&&(b.className=cb(Sg(b),function(b){return b!=c}).join(" "))}function Wg(b,c){Tg(b,c)?Vg(b,c):Ug(b,c)};function Xg(b,c,d,e){this.top=b;this.right=c;this.bottom=d;this.left=e}l=Xg.prototype;l.clone=function(){return new Xg(this.top,this.right,this.bottom,this.left)};l.contains=function(b){return this&&b?b instanceof Xg?b.left>=this.left&&b.right<=this.right&&b.top>=this.top&&b.bottom<=this.bottom:b.x>=this.left&&b.x<=this.right&&b.y>=this.top&&b.y<=this.bottom:!1};
l.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};l.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};l.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};
l.scale=function(b,c){var d=ja(c)?c:b;this.left*=b;this.right*=b;this.top*=d;this.bottom*=d;return this};function Yg(b,c,d,e){this.left=b;this.top=c;this.width=d;this.height=e}l=Yg.prototype;l.clone=function(){return new Yg(this.left,this.top,this.width,this.height)};l.contains=function(b){return b instanceof Yg?this.left<=b.left&&this.left+this.width>=b.left+b.width&&this.top<=b.top&&this.top+this.height>=b.top+b.height:b.x>=this.left&&b.x<=this.left+this.width&&b.y>=this.top&&b.y<=this.top+this.height};
l.distance=function(b){var c=b.x<this.left?this.left-b.x:Math.max(b.x-(this.left+this.width),0);b=b.y<this.top?this.top-b.y:Math.max(b.y-(this.top+this.height),0);return Math.sqrt(c*c+b*b)};l.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};l.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};l.scale=function(b,c){var d=ja(c)?c:b;this.left*=b;this.width*=b;this.top*=d;this.height*=d;return this};function Zg(b,c){var d=Cg(b);return d.defaultView&&d.defaultView.getComputedStyle&&(d=d.defaultView.getComputedStyle(b,null))?d[c]||d.getPropertyValue(c)||"":""}function $g(b,c){return Zg(b,c)||(b.currentStyle?b.currentStyle[c]:null)||b.style&&b.style[c]}function ah(b,c,d){var e;c instanceof yg?(e=c.x,c=c.y):(e=c,c=d);b.style.left=bh(e);b.style.top=bh(c)}
function ch(b){var c;try{c=b.getBoundingClientRect()}catch(d){return{left:0,top:0,right:0,bottom:0}}Yb&&b.ownerDocument.body&&(b=b.ownerDocument,c.left-=b.documentElement.clientLeft+b.body.clientLeft,c.top-=b.documentElement.clientTop+b.body.clientTop);return c}function dh(b){if(1==b.nodeType)return b=ch(b),new yg(b.left,b.top);b=b.changedTouches?b.changedTouches[0]:b;return new yg(b.clientX,b.clientY)}function bh(b){"number"==typeof b&&(b=b+"px");return b}
function eh(b){var c=fh;if("none"!=$g(b,"display"))return c(b);var d=b.style,e=d.display,f=d.visibility,g=d.position;d.visibility="hidden";d.position="absolute";d.display="inline";b=c(b);d.display=e;d.position=g;d.visibility=f;return b}function fh(b){var c=b.offsetWidth,d=b.offsetHeight,e=ac&&!c&&!d;return ca(c)&&!e||!b.getBoundingClientRect?new zg(c,d):(b=ch(b),new zg(b.right-b.left,b.bottom-b.top))}function gh(b,c){b.style.display=c?"":"none"}
function hh(b,c,d,e){if(/^\d+px?$/.test(c))return parseInt(c,10);var f=b.style[d],g=b.runtimeStyle[d];b.runtimeStyle[d]=b.currentStyle[d];b.style[d]=c;c=b.style[e];b.style[d]=f;b.runtimeStyle[d]=g;return c}function ih(b,c){var d=b.currentStyle?b.currentStyle[c]:null;return d?hh(b,d,"left","pixelLeft"):0}
function jh(b,c){if(Yb){var d=ih(b,c+"Left"),e=ih(b,c+"Right"),f=ih(b,c+"Top"),g=ih(b,c+"Bottom");return new Xg(f,e,g,d)}d=Zg(b,c+"Left");e=Zg(b,c+"Right");f=Zg(b,c+"Top");g=Zg(b,c+"Bottom");return new Xg(parseFloat(f),parseFloat(e),parseFloat(g),parseFloat(d))}var kh={thin:2,medium:4,thick:6};function lh(b,c){if("none"==(b.currentStyle?b.currentStyle[c+"Style"]:null))return 0;var d=b.currentStyle?b.currentStyle[c+"Width"]:null;return d in kh?kh[d]:hh(b,d,"left","pixelLeft")}
function mh(b){if(Yb&&!(9<=kc)){var c=lh(b,"borderLeft"),d=lh(b,"borderRight"),e=lh(b,"borderTop");b=lh(b,"borderBottom");return new Xg(e,d,b,c)}c=Zg(b,"borderLeftWidth");d=Zg(b,"borderRightWidth");e=Zg(b,"borderTopWidth");b=Zg(b,"borderBottomWidth");return new Xg(parseFloat(e),parseFloat(d),parseFloat(b),parseFloat(c))};function nh(b,c,d){tc.call(this,b);this.map=c;this.frameState=void 0!==d?d:null}y(nh,tc);function oh(b){gd.call(this);this.element=b.element?b.element:null;this.a=this.U=null;this.o=[];this.render=b.render?b.render:za;b.target&&this.c(b.target)}y(oh,gd);oh.prototype.Y=function(){Mg(this.element);oh.ca.Y.call(this)};oh.prototype.g=function(){return this.a};
oh.prototype.setMap=function(b){this.a&&Mg(this.element);0<this.o.length&&(this.o.forEach(Wc),this.o.length=0);if(this.a=b)(this.U?this.U:b.j).appendChild(this.element),this.render!==za&&this.o.push(D(b,"postrender",this.render,!1,this)),b.render()};oh.prototype.c=function(b){this.U=Dg(b)};function ph(){this.b=0;this.c={};this.f=this.a=null}l=ph.prototype;l.clear=function(){this.b=0;this.c={};this.f=this.a=null};function qh(b,c){return b.c.hasOwnProperty(c)}l.forEach=function(b,c){for(var d=this.a;d;)b.call(c,d.mc,d.oe,this),d=d.sb};l.get=function(b){b=this.c[b];if(b===this.f)return b.mc;b===this.a?(this.a=this.a.sb,this.a.hc=null):(b.sb.hc=b.hc,b.hc.sb=b.sb);b.sb=null;b.hc=this.f;this.f=this.f.sb=b;return b.mc};l.qc=function(){return this.b};
l.P=function(){var b=Array(this.b),c=0,d;for(d=this.f;d;d=d.hc)b[c++]=d.oe;return b};l.sc=function(){var b=Array(this.b),c=0,d;for(d=this.f;d;d=d.hc)b[c++]=d.mc;return b};l.pop=function(){var b=this.a;delete this.c[b.oe];b.sb&&(b.sb.hc=null);this.a=b.sb;this.a||(this.f=null);--this.b;return b.mc};l.replace=function(b,c){this.get(b);this.c[b].mc=c};l.set=function(b,c){var d={oe:b,sb:null,hc:this.f,mc:c};this.f?this.f.sb=d:this.a=d;this.f=d;this.c[b]=d;++this.b};function rh(b){ph.call(this);this.g=void 0!==b?b:2048}y(rh,ph);function sh(b){return b.qc()>b.g}function th(b,c){for(var d,e;sh(b)&&!(d=b.a.mc,e=d.a[0].toString(),e in c&&c[e].contains(d.a));)b.pop().Fc()};function uh(b,c){$c.call(this);this.a=b;this.state=c;this.f=null;this.key=""}y(uh,$c);function vh(b){b.s("change")}uh.prototype.$a=function(){return w(this).toString()};uh.prototype.g=function(){return this.a};function wh(b){gd.call(this);this.b=Ee(b.projection);this.i=void 0!==b.attributions?b.attributions:null;this.U=b.logo;this.B=void 0!==b.state?b.state:"ready";this.O=void 0!==b.wrapX?b.wrapX:!1}y(wh,gd);l=wh.prototype;l.ye=za;l.sa=function(){return this.i};l.qa=function(){return this.U};l.ta=function(){return this.b};l.ua=function(){return this.B};function xh(b){return b.O}l.ma=function(b){this.i=b;this.u()};function yh(b,c){b.B=c;b.u()};function zh(b){this.minZoom=void 0!==b.minZoom?b.minZoom:0;this.a=b.resolutions;this.maxZoom=this.a.length-1;this.b=void 0!==b.origin?b.origin:null;this.g=null;void 0!==b.origins&&(this.g=b.origins);var c=b.extent;void 0===c||this.b||this.g||(this.b=ge(c));this.i=null;void 0!==b.tileSizes&&(this.i=b.tileSizes);this.l=void 0!==b.tileSize?b.tileSize:this.i?null:256;this.G=void 0!==c?c:null;this.f=null;void 0!==b.sizes?this.f=b.sizes.map(function(b){return new fg(Math.min(0,b[0]),Math.max(b[0]-1,-1),
Math.min(0,b[1]),Math.max(b[1]-1,-1))},this):c&&Ah(this,c);this.c=[0,0]}var Bh=[0,0,0];function Ch(b,c,d,e,f){f=b.Aa(c,f);for(c=c[0]-1;c>=b.minZoom;){if(d.call(null,c,Dh(b,f,c,e)))return!0;--c}return!1}l=zh.prototype;l.J=function(){return this.G};l.Eg=function(){return this.maxZoom};l.Fg=function(){return this.minZoom};l.Da=function(b){return this.b?this.b:this.g[b]};l.$=function(b){return this.a[b]};l.zh=function(){return this.a};
function Eh(b,c,d,e){return c[0]<b.maxZoom?(e=b.Aa(c,e),Dh(b,e,c[0]+1,d)):null}function Fh(b,c,d,e){Gh(b,c[0],c[1],d,!1,Bh);var f=Bh[1],g=Bh[2];Gh(b,c[2],c[3],d,!0,Bh);b=Bh[1];c=Bh[2];void 0!==e?(e.a=f,e.c=b,e.f=g,e.b=c):e=new fg(f,b,g,c);return e}function Dh(b,c,d,e){d=b.$(d);return Fh(b,c,d,e)}function Hh(b,c){var d=b.Da(c[0]),e=b.$(c[0]),f=md(b.Ka(c[0]),b.c);return[d[0]+(c[1]+.5)*f[0]*e,d[1]+(c[2]+.5)*f[1]*e]}
l.Aa=function(b,c){var d=this.Da(b[0]),e=this.$(b[0]),f=md(this.Ka(b[0]),this.c),g=d[0]+b[1]*f[0]*e,d=d[1]+b[2]*f[1]*e;return Pd(g,d,g+f[0]*e,d+f[1]*e,c)};l.fe=function(b,c,d){return Gh(this,b[0],b[1],c,!1,d)};function Gh(b,c,d,e,f,g){var h=Ih(b,e),k=e/b.$(h),m=b.Da(h);b=md(b.Ka(h),b.c);c=k*Math.floor((c-m[0])/e+(f?.5:0))/b[0];d=k*Math.floor((d-m[1])/e+(f?0:.5))/b[1];f?(c=Math.ceil(c)-1,d=Math.ceil(d)-1):(c=Math.floor(c),d=Math.floor(d));return ag(h,c,d,g)}
l.ge=function(b,c,d){c=this.$(c);return Gh(this,b[0],b[1],c,!1,d)};l.Ka=function(b){return this.l?this.l:this.i[b]};function Ih(b,c){var d=wb(b.a,c,0);return Sa(d,b.minZoom,b.maxZoom)}function Ah(b,c){for(var d=b.a.length,e=Array(d),f=b.minZoom;f<d;++f)e[f]=Dh(b,c,f);b.f=e}function Jh(b){var c=b.l;if(!c){var c=Kh(b),d=Lh(c,void 0,void 0),c=new zh({extent:c,origin:ge(c),resolutions:d,tileSize:void 0});b.l=c}return c}
function Mh(b){var c={};Wb(c,void 0!==b?b:{});void 0===c.extent&&(c.extent=Ee("EPSG:3857").J());c.resolutions=Lh(c.extent,c.maxZoom,c.tileSize);delete c.maxZoom;return new zh(c)}function Lh(b,c,d){c=void 0!==c?c:42;var e=ke(b);b=je(b);d=md(void 0!==d?d:256);d=Math.max(b/d[0],e/d[1]);c+=1;e=Array(c);for(b=0;b<c;++b)e[b]=d/Math.pow(2,b);return e}function Kh(b){b=Ee(b);var c=b.J();c||(b=180*Be.degrees/b.Kc(),c=Pd(-b,-b,b,b));return c};function Nh(b){wh.call(this,{attributions:b.attributions,extent:b.extent,logo:b.logo,projection:b.projection,state:b.state,wrapX:b.wrapX});this.pa=void 0!==b.opaque?b.opaque:!1;this.v=void 0!==b.tilePixelRatio?b.tilePixelRatio:1;this.tileGrid=void 0!==b.tileGrid?b.tileGrid:null;this.a=new rh(b.df);this.c=[0,0]}y(Nh,wh);l=Nh.prototype;l.qh=function(){return sh(this.a)};l.rh=function(b,c){var d=this.ud(b);d&&th(d,c)};
function Oh(b,c,d,e,f){c=b.ud(c);if(!c)return!1;for(var g=!0,h,k,m=e.a;m<=e.c;++m)for(var n=e.f;n<=e.b;++n)h=b.Ab(d,m,n),k=!1,qh(c,h)&&(h=c.get(h),(k=2===h.state)&&(k=!1!==f(h))),k||(g=!1);return g}l.ae=function(){return 0};l.Cg=function(){return""};l.Ab=bg;l.Ha=function(){return this.tileGrid};l.ib=function(b){return this.tileGrid?this.tileGrid:Jh(b)};l.ud=function(b){var c=this.b;return c&&!Ve(c,b)?null:this.a};l.Qb=function(b,c,d){c=this.ib(d);return ld(md(c.Ka(b),this.c),this.v,this.c)};
function Ph(b,c,d){var e=void 0!==d?d:b.b;d=b.ib(e);if(b.O&&e.c){var f=c;c=f[0];b=Hh(d,f);e=Kh(e);Td(e,b)?c=f:(f=je(e),b[0]+=f*Math.ceil((e[0]-b[0])/f),c=d.ge(b,c))}f=c[0];e=c[1];b=c[2];if(d.minZoom>f||f>d.maxZoom)d=!1;else{var g=d.J();d=(d=g?Dh(d,g,f):d.f?d.f[f]:null)?gg(d,e,b):!0}return d?c:null}l.Yf=za;function Qh(b,c){tc.call(this,b);this.tile=c}y(Qh,tc);function Rh(b){b=b?b:{};this.C=document.createElement("UL");this.B=document.createElement("LI");this.C.appendChild(this.B);gh(this.B,!1);this.b=void 0!==b.collapsed?b.collapsed:!0;this.j=void 0!==b.collapsible?b.collapsible:!0;this.j||(this.b=!1);var c=b.className?b.className:"ol-attribution",d=b.tipLabel?b.tipLabel:"Attributions",e=b.collapseLabel?b.collapseLabel:"\u00bb";this.D=ia(e)?Hg("SPAN",{},e):e;e=b.label?b.label:"i";this.O=ia(e)?Hg("SPAN",{},e):e;d=Hg("BUTTON",{type:"button",title:d},this.j&&
!this.b?this.D:this.O);D(d,"click",this.Pl,!1,this);c=Hg("DIV",c+" ol-unselectable ol-control"+(this.b&&this.j?" ol-collapsed":"")+(this.j?"":" ol-uncollapsible"),this.C,d);oh.call(this,{element:c,render:b.render?b.render:Sh,target:b.target});this.v=!0;this.l={};this.i={};this.T={}}y(Rh,oh);
function Sh(b){if(b=b.frameState){var c,d,e,f,g,h,k,m,n,p,q,r=b.layerStatesArray,t=Tb(b.attributions),x={},z=b.viewState.projection;d=0;for(c=r.length;d<c;d++)if(h=r[d].layer.ea())if(p=w(h).toString(),n=h.i)for(e=0,f=n.length;e<f;e++)if(k=n[e],m=w(k).toString(),!(m in t)){if(g=b.usedTiles[p]){var A=h.ib(z);a:{q=k;var B=z;if(q.a){var v=void 0,L=void 0,M=void 0,J=void 0;for(J in g)if(J in q.a)for(var M=g[J],C,v=0,L=q.a[J].length;v<L;++v){C=q.a[J][v];if(lg(C,M)){q=!0;break a}var sa=Dh(A,B.J(),parseInt(J,
10)),la=kg(sa);if(M.a<sa.a||M.c>sa.c)if(lg(C,new fg(nd(M.a,la),nd(M.c,la),M.f,M.b))||kg(M)>la&&lg(C,sa)){q=!0;break a}}q=!1}else q=!0}}else q=!1;q?(m in x&&delete x[m],t[m]=k):x[m]=k}c=[t,x];d=c[0];c=c[1];for(var K in this.l)K in d?(this.i[K]||(gh(this.l[K],!0),this.i[K]=!0),delete d[K]):K in c?(this.i[K]&&(gh(this.l[K],!1),delete this.i[K]),delete c[K]):(Mg(this.l[K]),delete this.l[K],delete this.i[K]);for(K in d)e=document.createElement("LI"),e.innerHTML=d[K].f,this.C.appendChild(e),this.l[K]=e,
this.i[K]=!0;for(K in c)e=document.createElement("LI"),e.innerHTML=c[K].f,gh(e,!1),this.C.appendChild(e),this.l[K]=e;K=!Pb(this.i)||!Pb(b.logos);this.v!=K&&(gh(this.element,K),this.v=K);K&&Pb(this.i)?Ug(this.element,"ol-logo-only"):Vg(this.element,"ol-logo-only");var ma;b=b.logos;K=this.T;for(ma in K)ma in b||(Mg(K[ma]),delete K[ma]);for(var Ua in b)Ua in K||(ma=new Image,ma.src=Ua,d=b[Ua],""===d?d=ma:(d=Hg("A",{href:d}),d.appendChild(ma)),this.B.appendChild(d),K[Ua]=d);gh(this.B,!Pb(b))}else this.v&&
(gh(this.element,!1),this.v=!1)}l=Rh.prototype;l.Pl=function(b){b.preventDefault();Th(this)};function Th(b){Wg(b.element,"ol-collapsed");b.b?Ng(b.D,b.O):Ng(b.O,b.D);b.b=!b.b}l.Ol=function(){return this.j};l.Rl=function(b){this.j!==b&&(this.j=b,Wg(this.element,"ol-uncollapsible"),!b&&this.b&&Th(this))};l.Ql=function(b){this.j&&this.b!==b&&Th(this)};l.Nl=function(){return this.b};function Uh(b){b=b?b:{};var c=b.className?b.className:"ol-rotate",d=b.label?b.label:"\u21e7";this.b=null;ia(d)?this.b=Hg("SPAN","ol-compass",d):(this.b=d,Ug(this.b,"ol-compass"));d=Hg("BUTTON",{"class":c+"-reset",type:"button",title:b.tipLabel?b.tipLabel:"Reset rotation"},this.b);D(d,"click",Uh.prototype.v,!1,this);c=Hg("DIV",c+" ol-unselectable ol-control",d);d=b.render?b.render:Vh;this.j=b.resetNorth?b.resetNorth:void 0;oh.call(this,{element:c,render:d,target:b.target});this.l=void 0!==b.duration?
b.duration:250;this.i=void 0!==b.autoHide?b.autoHide:!0;this.B=void 0;this.i&&Ug(this.element,"ol-hidden")}y(Uh,oh);Uh.prototype.v=function(b){b.preventDefault();if(void 0!==this.j)this.j();else{b=this.a;var c=b.aa();if(c){var d=c.Fa();void 0!==d&&(0<this.l&&(d%=2*Math.PI,d<-Math.PI&&(d+=2*Math.PI),d>Math.PI&&(d-=2*Math.PI),b.Na(Zf({rotation:d,duration:this.l,easing:Uf}))),c.ue(0))}}};
function Vh(b){if(b=b.frameState){b=b.viewState.rotation;if(b!=this.B){var c="rotate("+b+"rad)";if(this.i){var d=this.element;0===b?Ug(d,"ol-hidden"):Vg(d,"ol-hidden")}this.b.style.msTransform=c;this.b.style.webkitTransform=c;this.b.style.transform=c}this.B=b}};function Wh(b){b=b?b:{};var c=b.className?b.className:"ol-zoom",d=b.delta?b.delta:1,e=b.zoomOutLabel?b.zoomOutLabel:"\u2212",f=b.zoomOutTipLabel?b.zoomOutTipLabel:"Zoom out",g=Hg("BUTTON",{"class":c+"-in",type:"button",title:b.zoomInTipLabel?b.zoomInTipLabel:"Zoom in"},b.zoomInLabel?b.zoomInLabel:"+");D(g,"click",va(Wh.prototype.i,d),!1,this);e=Hg("BUTTON",{"class":c+"-out",type:"button",title:f},e);D(e,"click",va(Wh.prototype.i,-d),!1,this);c=Hg("DIV",c+" ol-unselectable ol-control",g,e);oh.call(this,
{element:c,target:b.target});this.b=void 0!==b.duration?b.duration:250}y(Wh,oh);Wh.prototype.i=function(b,c){c.preventDefault();var d=this.a,e=d.aa();if(e){var f=e.$();f&&(0<this.b&&d.Na($f({resolution:f,duration:this.b,easing:Uf})),d=e.constrainResolution(f,b),e.Ub(d))}};function Xh(b){b=b?b:{};var c=new og;(void 0!==b.zoom?b.zoom:1)&&c.push(new Wh(b.zoomOptions));(void 0!==b.rotate?b.rotate:1)&&c.push(new Uh(b.rotateOptions));(void 0!==b.attribution?b.attribution:1)&&c.push(new Rh(b.attributionOptions));return c};var Yh=ac?"webkitfullscreenchange":$b?"mozfullscreenchange":Yb?"MSFullscreenChange":"fullscreenchange";function Zh(){var b=Ag().a,c=b.body;return!!(c.webkitRequestFullscreen||c.mozRequestFullScreen&&b.mozFullScreenEnabled||c.msRequestFullscreen&&b.msFullscreenEnabled||c.requestFullscreen&&b.fullscreenEnabled)}
function $h(b){b.webkitRequestFullscreen?b.webkitRequestFullscreen():b.mozRequestFullScreen?b.mozRequestFullScreen():b.msRequestFullscreen?b.msRequestFullscreen():b.requestFullscreen&&b.requestFullscreen()}function ai(){var b=Ag().a;return!!(b.webkitIsFullScreen||b.mozFullScreen||b.msFullscreenElement||b.fullscreenElement)};function bi(b){b=b?b:{};this.b=b.className?b.className:"ol-full-screen";var c=b.label?b.label:"\u2922";this.i=ia(c)?document.createTextNode(c):c;c=b.labelActive?b.labelActive:"\u00d7";this.j=ia(c)?document.createTextNode(c):c;c=b.tipLabel?b.tipLabel:"Toggle full-screen";c=Hg("BUTTON",{"class":this.b+"-"+ai(),type:"button",title:c},this.i);D(c,"click",this.v,!1,this);D(ba.document,Yh,this.l,!1,this);var d=this.b+" ol-unselectable ol-control "+(Zh()?"":"ol-unsupported"),c=Hg("DIV",d,c);oh.call(this,
{element:c,target:b.target});this.B=void 0!==b.keys?b.keys:!1}y(bi,oh);bi.prototype.v=function(b){b.preventDefault();Zh()&&(b=this.a)&&(ai()?(b=Ag().a,b.webkitCancelFullScreen?b.webkitCancelFullScreen():b.mozCancelFullScreen?b.mozCancelFullScreen():b.msExitFullscreen?b.msExitFullscreen():b.exitFullscreen&&b.exitFullscreen()):(b=b.xf(),b=Dg(b),this.B?b.mozRequestFullScreenWithKeys?b.mozRequestFullScreenWithKeys():b.webkitRequestFullscreen?b.webkitRequestFullscreen():$h(b):$h(b)))};
bi.prototype.l=function(){var b=this.b+"-true",c=this.b+"-false",d=Og(this.element),e=this.a;ai()?(Tg(d,c)&&(Vg(d,c),Ug(d,b)),Ng(this.j,this.i)):(Tg(d,b)&&(Vg(d,b),Ug(d,c)),Ng(this.i,this.j));e&&e.Vc()};function di(b){b=b?b:{};var c=Hg("DIV",b.className?b.className:"ol-mouse-position");oh.call(this,{element:c,render:b.render?b.render:ei,target:b.target});D(this,id("projection"),this.Sl,!1,this);b.coordinateFormat&&this.Wh(b.coordinateFormat);b.projection&&this.bh(Ee(b.projection));this.B=b.undefinedHTML?b.undefinedHTML:"";this.l=c.innerHTML;this.j=this.i=this.b=null}y(di,oh);
function ei(b){b=b.frameState;b?this.b!=b.viewState.projection&&(this.b=b.viewState.projection,this.i=null):this.b=null;fi(this,this.j)}l=di.prototype;l.Sl=function(){this.i=null};l.wg=function(){return this.get("coordinateFormat")};l.ah=function(){return this.get("projection")};l.Nk=function(b){this.j=this.a.$d(b.a);fi(this,this.j)};l.Ok=function(){fi(this,null);this.j=null};
l.setMap=function(b){di.ca.setMap.call(this,b);b&&(b=b.a,this.o.push(D(b,"mousemove",this.Nk,!1,this),D(b,"mouseout",this.Ok,!1,this)))};l.Wh=function(b){this.set("coordinateFormat",b)};l.bh=function(b){this.set("projection",b)};function fi(b,c){var d=b.B;if(c&&b.b){if(!b.i){var e=b.ah();b.i=e?Ie(b.b,e):Xe}if(e=b.a.Ga(c))b.i(e,e),d=(d=b.wg())?d(e):e.toString()}b.l&&d==b.l||(b.element.innerHTML=d,b.l=d)};function gi(b,c,d){oc.call(this);this.xa=null;this.b=!1;this.i=b;this.g=d;this.a=c||window;this.f=ua(this.c,this)}y(gi,oc);gi.prototype.start=function(){hi(this);this.b=!1;var b=ii(this),c=ji(this);b&&!c&&this.a.mozRequestAnimationFrame?(this.xa=D(this.a,"MozBeforePaint",this.f),this.a.mozRequestAnimationFrame(null),this.b=!0):this.xa=b&&c?b.call(this.a,this.f):this.a.setTimeout(we(this.f),20)};
function hi(b){if(null!=b.xa){var c=ii(b),d=ji(b);c&&!d&&b.a.mozRequestAnimationFrame?Wc(b.xa):c&&d?d.call(b.a,b.xa):b.a.clearTimeout(b.xa)}b.xa=null}gi.prototype.c=function(){this.b&&this.xa&&Wc(this.xa);this.xa=null;this.i.call(this.g,wa())};gi.prototype.Y=function(){hi(this);gi.ca.Y.call(this)};function ii(b){b=b.a;return b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||b.oRequestAnimationFrame||b.msRequestAnimationFrame||null}
function ji(b){b=b.a;return b.cancelAnimationFrame||b.cancelRequestAnimationFrame||b.webkitCancelRequestAnimationFrame||b.mozCancelRequestAnimationFrame||b.oCancelRequestAnimationFrame||b.msCancelRequestAnimationFrame||null};function ki(b){ba.setTimeout(function(){throw b;},0)}function li(b,c){var d=b;c&&(d=ua(b,c));d=mi(d);!ka(ba.setImmediate)||ba.Window&&ba.Window.prototype&&ba.Window.prototype.setImmediate==ba.setImmediate?(ni||(ni=oi()),ni(d)):ba.setImmediate(d)}var ni;
function oi(){var b=ba.MessageChannel;"undefined"===typeof b&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!Hb("Presto")&&(b=function(){var b=document.createElement("IFRAME");b.style.display="none";b.src="";document.documentElement.appendChild(b);var c=b.contentWindow,b=c.document;b.open();b.write("");b.close();var d="callImmediate"+Math.random(),e="file:"==c.location.protocol?"*":c.location.protocol+"//"+c.location.host,b=ua(function(b){if(("*"==e||b.origin==e)&&b.data==
d)this.port1.onmessage()},this);c.addEventListener("message",b,!1);this.port1={};this.port2={postMessage:function(){c.postMessage(d,e)}}});if("undefined"!==typeof b&&!Hb("Trident")&&!Hb("MSIE")){var c=new b,d={},e=d;c.port1.onmessage=function(){if(ca(d.next)){d=d.next;var b=d.ng;d.ng=null;b()}};return function(b){e.next={ng:b};e=e.next;c.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(b){var c=document.createElement("SCRIPT");
c.onreadystatechange=function(){c.onreadystatechange=null;c.parentNode.removeChild(c);c=null;b();b=null};document.documentElement.appendChild(c)}:function(b){ba.setTimeout(b,0)}}var mi=ve;function pi(b,c){this.f={};this.a=[];this.b=0;var d=arguments.length;if(1<d){if(d%2)throw Error("Uneven number of arguments");for(var e=0;e<d;e+=2)this.set(arguments[e],arguments[e+1])}else if(b){if(b instanceof pi)e=b.P(),d=b.sc();else{var d=[],f=0;for(e in b)d[f++]=e;e=d;d=Lb(b)}for(f=0;f<e.length;f++)this.set(e[f],d[f])}}l=pi.prototype;l.qc=function(){return this.b};l.sc=function(){qi(this);for(var b=[],c=0;c<this.a.length;c++)b.push(this.f[this.a[c]]);return b};l.P=function(){qi(this);return this.a.concat()};
l.La=function(){return 0==this.b};l.clear=function(){this.f={};this.b=this.a.length=0};l.remove=function(b){return ri(this.f,b)?(delete this.f[b],this.b--,this.a.length>2*this.b&&qi(this),!0):!1};function qi(b){if(b.b!=b.a.length){for(var c=0,d=0;c<b.a.length;){var e=b.a[c];ri(b.f,e)&&(b.a[d++]=e);c++}b.a.length=d}if(b.b!=b.a.length){for(var f={},d=c=0;c<b.a.length;)e=b.a[c],ri(f,e)||(b.a[d++]=e,f[e]=1),c++;b.a.length=d}}l.get=function(b,c){return ri(this.f,b)?this.f[b]:c};
l.set=function(b,c){ri(this.f,b)||(this.b++,this.a.push(b));this.f[b]=c};l.forEach=function(b,c){for(var d=this.P(),e=0;e<d.length;e++){var f=d[e],g=this.get(f);b.call(c,g,f,this)}};l.clone=function(){return new pi(this)};function ri(b,c){return Object.prototype.hasOwnProperty.call(b,c)};function si(){this.a=wa()}new si;si.prototype.set=function(b){this.a=b};si.prototype.reset=function(){this.set(wa())};si.prototype.get=function(){return this.a};function ti(b){$c.call(this);this.a=b||window;this.f=D(this.a,"resize",this.c,!1,this);this.b=Gg(this.a||window)}y(ti,$c);ti.prototype.Y=function(){ti.ca.Y.call(this);this.f&&(Wc(this.f),this.f=null);this.b=this.a=null};ti.prototype.c=function(){var b=Gg(this.a||window),c=this.b;b==c||b&&c&&b.width==c.width&&b.height==c.height||(this.b=b,this.s("resize"))};function ui(b,c,d,e,f){if(!(Yb||Zb||ac&&ic("525")))return!0;if(bc&&f)return vi(b);if(f&&!e)return!1;ja(c)&&(c=wi(c));if(!d&&(17==c||18==c||bc&&91==c))return!1;if((ac||Zb)&&e&&d)switch(b){case 220:case 219:case 221:case 192:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:return!1}if(Yb&&e&&c==b)return!1;switch(b){case 13:return!0;case 27:return!(ac||Zb)}return vi(b)}
function vi(b){if(48<=b&&57>=b||96<=b&&106>=b||65<=b&&90>=b||(ac||Zb)&&0==b)return!0;switch(b){case 32:case 43:case 63:case 64:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:return!0;default:return!1}}function wi(b){if($b)b=xi(b);else if(bc&&ac)a:switch(b){case 93:b=91;break a}return b}
function xi(b){switch(b){case 61:return 187;case 59:return 186;case 173:return 189;case 224:return 91;case 0:return 224;default:return b}};function yi(b,c){$c.call(this);b&&zi(this,b,c)}y(yi,$c);l=yi.prototype;l.vd=null;l.me=null;l.rf=null;l.ne=null;l.jb=-1;l.Zb=-1;l.cf=!1;
var Ai={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},Bi={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},Ci=Yb||Zb||ac&&ic("525"),Di=bc&&$b;
yi.prototype.a=function(b){if(ac||Zb)if(17==this.jb&&!b.o||18==this.jb&&!b.f||bc&&91==this.jb&&!b.B)this.Zb=this.jb=-1;-1==this.jb&&(b.o&&17!=b.i?this.jb=17:b.f&&18!=b.i?this.jb=18:b.B&&91!=b.i&&(this.jb=91));Ci&&!ui(b.i,this.jb,b.c,b.o,b.f)?this.handleEvent(b):(this.Zb=wi(b.i),Di&&(this.cf=b.f))};yi.prototype.f=function(b){this.Zb=this.jb=-1;this.cf=b.f};
yi.prototype.handleEvent=function(b){var c=b.a,d,e,f=c.altKey;Yb&&"keypress"==b.type?(d=this.Zb,e=13!=d&&27!=d?c.keyCode:0):(ac||Zb)&&"keypress"==b.type?(d=this.Zb,e=0<=c.charCode&&63232>c.charCode&&vi(d)?c.charCode:0):Xb&&!ac?(d=this.Zb,e=vi(d)?c.keyCode:0):(d=c.keyCode||this.Zb,e=c.charCode||0,Di&&(f=this.cf),bc&&63==e&&224==d&&(d=191));var g=d=wi(d),h=c.keyIdentifier;d?63232<=d&&d in Ai?g=Ai[d]:25==d&&b.c&&(g=9):h&&h in Bi&&(g=Bi[h]);this.jb=g;b=new Ei(g,e,0,c);b.f=f;this.s(b)};
function zi(b,c,d){b.ne&&Fi(b);b.vd=c;b.me=D(b.vd,"keypress",b,d);b.rf=D(b.vd,"keydown",b.a,d,b);b.ne=D(b.vd,"keyup",b.f,d,b)}function Fi(b){b.me&&(Wc(b.me),Wc(b.rf),Wc(b.ne),b.me=null,b.rf=null,b.ne=null);b.vd=null;b.jb=-1;b.Zb=-1}yi.prototype.Y=function(){yi.ca.Y.call(this);Fi(this)};function Ei(b,c,d,e){xc.call(this,e);this.type="key";this.i=b;this.G=c}y(Ei,xc);function Gi(b,c){$c.call(this);var d=this.a=b;(d=oa(d)&&1==d.nodeType?this.a:this.a?this.a.body:null)&&$g(d,"direction");this.f=D(this.a,$b?"DOMMouseScroll":"mousewheel",this,c)}y(Gi,$c);
Gi.prototype.handleEvent=function(b){var c=0,d=0;b=b.a;if("mousewheel"==b.type){c=1;if(Yb||ac&&(cc||ic("532.0")))c=40;d=Hi(-b.wheelDelta,c);c=ca(b.wheelDeltaX)?Hi(-b.wheelDeltaY,c):d}else d=b.detail,100<d?d=3:-100>d&&(d=-3),ca(b.axis)&&b.axis===b.HORIZONTAL_AXIS||(c=d);ja(this.b)&&(c=Math.min(Math.max(c,-this.b),this.b));d=new Ii(d,b,0,c);this.s(d)};function Hi(b,c){return ac&&(bc||dc)&&0!=b%c?b:b/c}Gi.prototype.Y=function(){Gi.ca.Y.call(this);Wc(this.f);this.f=null};
function Ii(b,c,d,e){xc.call(this,c);this.type="mousewheel";this.detail=b;this.v=e}y(Ii,xc);function Ji(b,c,d){tc.call(this,b);this.a=c;b=d?d:{};this.buttons=Ki(b);this.pressure=Li(b,this.buttons);this.bubbles="bubbles"in b?b.bubbles:!1;this.cancelable="cancelable"in b?b.cancelable:!1;this.view="view"in b?b.view:null;this.detail="detail"in b?b.detail:null;this.screenX="screenX"in b?b.screenX:0;this.screenY="screenY"in b?b.screenY:0;this.clientX="clientX"in b?b.clientX:0;this.clientY="clientY"in b?b.clientY:0;this.button="button"in b?b.button:0;this.relatedTarget="relatedTarget"in b?b.relatedTarget:
null;this.pointerId="pointerId"in b?b.pointerId:0;this.width="width"in b?b.width:0;this.height="height"in b?b.height:0;this.pointerType="pointerType"in b?b.pointerType:"";this.isPrimary="isPrimary"in b?b.isPrimary:!1;c.preventDefault&&(this.preventDefault=function(){c.preventDefault()})}y(Ji,tc);function Ki(b){if(b.buttons||Mi)b=b.buttons;else switch(b.which){case 1:b=1;break;case 2:b=4;break;case 3:b=2;break;default:b=0}return b}
function Li(b,c){var d=0;b.pressure?d=b.pressure:d=c?.5:0;return d}var Mi=!1;try{Mi=1===(new MouseEvent("click",{buttons:1})).buttons}catch(b){};function Ni(b,c){var d=document.createElement("CANVAS");b&&(d.width=b);c&&(d.height=c);return d.getContext("2d")}
var Oi=function(){var b;return function(){if(void 0===b)if(ba.getComputedStyle){var c=document.createElement("P"),d,e={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.appendChild(c);for(var f in e)f in c.style&&(c.style[f]="translate(1px,1px)",d=ba.getComputedStyle(c).getPropertyValue(e[f]));Mg(c);b=d&&"none"!==d}else b=!1;return b}}(),Pi=function(){var b;return function(){if(void 0===b)if(ba.getComputedStyle){var c=
document.createElement("P"),d,e={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.appendChild(c);for(var f in e)f in c.style&&(c.style[f]="translate3d(1px,1px,1px)",d=ba.getComputedStyle(c).getPropertyValue(e[f]));Mg(c);b=d&&"none"!==d}else b=!1;return b}}();
function Qi(b,c){var d=b.style;d.WebkitTransform=c;d.MozTransform=c;d.a=c;d.msTransform=c;d.transform=c;Yb&&ic("9.0")&&(b.style.transformOrigin="0 0")}function Ri(b,c){var d;if(Pi()){var e=Array(16);for(d=0;16>d;++d)e[d]=c[d].toFixed(6);Qi(b,"matrix3d("+e.join(",")+")")}else if(Oi()){var e=[c[0],c[1],c[4],c[5],c[12],c[13]],f=Array(6);for(d=0;6>d;++d)f[d]=e[d].toFixed(6);Qi(b,"matrix("+f.join(",")+")")}else b.style.left=Math.round(c[12])+"px",b.style.top=Math.round(c[13])+"px"};var Si=["experimental-webgl","webgl","webkit-3d","moz-webgl"];function Ti(b,c){var d,e,f=Si.length;for(e=0;e<f;++e)try{if(d=b.getContext(Si[e],c))return d}catch(g){}return null};var Ui,Vi=ba.devicePixelRatio||1,Wi=!1,Xi=function(){if(!("HTMLCanvasElement"in ba))return!1;try{var b=Ni();return b?(void 0!==b.setLineDash&&(Wi=!0),!0):!1}catch(c){return!1}}(),Yi="DeviceOrientationEvent"in ba,Zi="geolocation"in ba.navigator,$i="ontouchstart"in ba,aj="PointerEvent"in ba,bj=!!ba.navigator.msPointerEnabled,cj=!1,dj,ej=[];
if("WebGLRenderingContext"in ba)try{var fj=Ti(document.createElement("CANVAS"),{failIfMajorPerformanceCaveat:!0});fj&&(cj=!0,dj=fj.getParameter(fj.MAX_TEXTURE_SIZE),ej=fj.getSupportedExtensions())}catch(b){}Ui=cj;ya=ej;xa=dj;function gj(b,c){this.a=b;this.g=c};function hj(b){gj.call(this,b,{mousedown:this.il,mousemove:this.jl,mouseup:this.ml,mouseover:this.ll,mouseout:this.kl});this.f=b.f;this.b=[]}y(hj,gj);function ij(b,c){for(var d=b.b,e=c.clientX,f=c.clientY,g=0,h=d.length,k;g<h&&(k=d[g]);g++){var m=Math.abs(f-k[1]);if(25>=Math.abs(e-k[0])&&25>=m)return!0}return!1}function jj(b){var c=kj(b,b.a),d=c.preventDefault;c.preventDefault=function(){b.preventDefault();d()};c.pointerId=1;c.isPrimary=!0;c.pointerType="mouse";return c}l=hj.prototype;
l.il=function(b){if(!ij(this,b)){(1).toString()in this.f&&this.cancel(b);var c=jj(b);this.f[(1).toString()]=b;lj(this.a,mj,c,b)}};l.jl=function(b){if(!ij(this,b)){var c=jj(b);lj(this.a,nj,c,b)}};l.ml=function(b){if(!ij(this,b)){var c=this.f[(1).toString()];c&&c.button===b.button&&(c=jj(b),lj(this.a,oj,c,b),delete this.f[(1).toString()])}};l.ll=function(b){if(!ij(this,b)){var c=jj(b);pj(this.a,c,b)}};l.kl=function(b){if(!ij(this,b)){var c=jj(b);qj(this.a,c,b)}};
l.cancel=function(b){var c=jj(b);this.a.cancel(c,b);delete this.f[(1).toString()]};function rj(b){gj.call(this,b,{MSPointerDown:this.rl,MSPointerMove:this.sl,MSPointerUp:this.vl,MSPointerOut:this.tl,MSPointerOver:this.ul,MSPointerCancel:this.ql,MSGotPointerCapture:this.ol,MSLostPointerCapture:this.pl});this.f=b.f;this.b=["","unavailable","touch","pen","mouse"]}y(rj,gj);function sj(b,c){var d=c;ja(c.a.pointerType)&&(d=kj(c,c.a),d.pointerType=b.b[c.a.pointerType]);return d}l=rj.prototype;l.rl=function(b){this.f[b.a.pointerId.toString()]=b;var c=sj(this,b);lj(this.a,mj,c,b)};
l.sl=function(b){var c=sj(this,b);lj(this.a,nj,c,b)};l.vl=function(b){var c=sj(this,b);lj(this.a,oj,c,b);delete this.f[b.a.pointerId.toString()]};l.tl=function(b){var c=sj(this,b);qj(this.a,c,b)};l.ul=function(b){var c=sj(this,b);pj(this.a,c,b)};l.ql=function(b){var c=sj(this,b);this.a.cancel(c,b);delete this.f[b.a.pointerId.toString()]};l.pl=function(b){this.a.s(new Ji("lostpointercapture",b,b.a))};l.ol=function(b){this.a.s(new Ji("gotpointercapture",b,b.a))};function tj(b){gj.call(this,b,{pointerdown:this.Vn,pointermove:this.Wn,pointerup:this.Zn,pointerout:this.Xn,pointerover:this.Yn,pointercancel:this.Un,gotpointercapture:this.vk,lostpointercapture:this.hl})}y(tj,gj);l=tj.prototype;l.Vn=function(b){uj(this.a,b)};l.Wn=function(b){uj(this.a,b)};l.Zn=function(b){uj(this.a,b)};l.Xn=function(b){uj(this.a,b)};l.Yn=function(b){uj(this.a,b)};l.Un=function(b){uj(this.a,b)};l.hl=function(b){uj(this.a,b)};l.vk=function(b){uj(this.a,b)};function vj(b,c){gj.call(this,b,{touchstart:this.ap,touchmove:this.$o,touchend:this.Zo,touchcancel:this.Yo});this.f=b.f;this.j=c;this.b=void 0;this.i=0;this.c=void 0}y(vj,gj);l=vj.prototype;l.Sh=function(){this.i=0;this.c=void 0};
function wj(b,c,d){c=kj(c,d);c.pointerId=d.identifier+2;c.bubbles=!0;c.cancelable=!0;c.detail=b.i;c.button=0;c.buttons=1;c.width=d.webkitRadiusX||d.radiusX||0;c.height=d.webkitRadiusY||d.radiusY||0;c.pressure=d.webkitForce||d.force||.5;c.isPrimary=b.b===d.identifier;c.pointerType="touch";c.clientX=d.clientX;c.clientY=d.clientY;c.screenX=d.screenX;c.screenY=d.screenY;return c}
function xj(b,c,d){function e(){c.preventDefault()}var f=Array.prototype.slice.call(c.a.changedTouches),g=f.length,h,k;for(h=0;h<g;++h)k=wj(b,c,f[h]),k.preventDefault=e,d.call(b,c,k)}
l.ap=function(b){var c=b.a.touches,d=Object.keys(this.f),e=d.length;if(e>=c.length){var f=[],g,h,k;for(g=0;g<e;++g){h=d[g];k=this.f[h];var m;if(!(m=1==h))a:{m=c.length;for(var n=void 0,p=0;p<m;p++)if(n=c[p],n.identifier===h-2){m=!0;break a}m=!1}m||f.push(k.wc)}for(g=0;g<f.length;++g)this.ef(b,f[g])}c=Kb(this.f);if(0===c||1===c&&(1).toString()in this.f)this.b=b.a.changedTouches[0].identifier,void 0!==this.c&&ba.clearTimeout(this.c);yj(this,b);this.i++;xj(this,b,this.Qn)};
l.Qn=function(b,c){this.f[c.pointerId]={target:c.target,wc:c,Ah:c.target};var d=this.a;c.bubbles=!0;lj(d,Aj,c,b);d=this.a;c.bubbles=!1;lj(d,Bj,c,b);lj(this.a,mj,c,b)};l.$o=function(b){b.preventDefault();xj(this,b,this.nl)};l.nl=function(b,c){var d=this.f[c.pointerId];if(d){var e=d.wc,f=d.Ah;lj(this.a,nj,c,b);e&&f!==c.target&&(e.relatedTarget=c.target,c.relatedTarget=f,e.target=f,c.target?(qj(this.a,e,b),pj(this.a,c,b)):(c.target=f,c.relatedTarget=null,this.ef(b,c)));d.wc=c;d.Ah=c.target}};
l.Zo=function(b){yj(this,b);xj(this,b,this.bp)};l.bp=function(b,c){lj(this.a,oj,c,b);this.a.wc(c,b);var d=this.a;c.bubbles=!1;lj(d,Cj,c,b);delete this.f[c.pointerId];c.isPrimary&&(this.b=void 0,this.c=ba.setTimeout(ua(this.Sh,this),200))};l.Yo=function(b){xj(this,b,this.ef)};l.ef=function(b,c){this.a.cancel(c,b);this.a.wc(c,b);var d=this.a;c.bubbles=!1;lj(d,Cj,c,b);delete this.f[c.pointerId];c.isPrimary&&(this.b=void 0,this.c=ba.setTimeout(ua(this.Sh,this),200))};
function yj(b,c){var d=b.j.b,e=c.a.changedTouches[0];if(b.b===e.identifier){var f=[e.clientX,e.clientY];d.push(f);ba.setTimeout(function(){hb(d,f)},2500)}};function Dj(b){$c.call(this);this.c=b;this.f={};this.b={};this.a=[];aj?Ej(this,new tj(this)):bj?Ej(this,new rj(this)):(b=new hj(this),Ej(this,b),$i&&Ej(this,new vj(this,b)));b=this.a.length;for(var c,d=0;d<b;d++)c=this.a[d],Fj(this,Object.keys(c.g))}y(Dj,$c);function Ej(b,c){var d=Object.keys(c.g);d&&(d.forEach(function(b){var d=c.g[b];d&&(this.b[b]=ua(d,c))},b),b.a.push(c))}Dj.prototype.g=function(b){var c=this.b[b.type];c&&c(b)};
function Fj(b,c){c.forEach(function(b){D(this.c,b,this.g,!1,this)},b)}function Gj(b,c){c.forEach(function(b){Vc(this.c,b,this.g,!1,this)},b)}function kj(b,c){for(var d={},e,f=0,g=Hj.length;f<g;f++)e=Hj[f][0],d[e]=b[e]||c[e]||Hj[f][1];return d}Dj.prototype.wc=function(b,c){b.bubbles=!0;lj(this,Ij,b,c)};Dj.prototype.cancel=function(b,c){lj(this,Jj,b,c)};function qj(b,c,d){b.wc(c,d);var e=c.relatedTarget;e&&Pg(c.target,e)||(c.bubbles=!1,lj(b,Cj,c,d))}
function pj(b,c,d){c.bubbles=!0;lj(b,Aj,c,d);var e=c.relatedTarget;e&&Pg(c.target,e)||(c.bubbles=!1,lj(b,Bj,c,d))}function lj(b,c,d,e){b.s(new Ji(c,e,d))}function uj(b,c){b.s(new Ji(c.type,c,c.a))}Dj.prototype.Y=function(){for(var b=this.a.length,c,d=0;d<b;d++)c=this.a[d],Gj(this,Object.keys(c.g));Dj.ca.Y.call(this)};
var nj="pointermove",mj="pointerdown",oj="pointerup",Aj="pointerover",Ij="pointerout",Bj="pointerenter",Cj="pointerleave",Jj="pointercancel",Hj=[["bubbles",!1],["cancelable",!1],["view",null],["detail",null],["screenX",0],["screenY",0],["clientX",0],["clientY",0],["ctrlKey",!1],["altKey",!1],["shiftKey",!1],["metaKey",!1],["button",0],["relatedTarget",null],["buttons",0],["pointerId",0],["width",0],["height",0],["pressure",0],["tiltX",0],["tiltY",0],["pointerType",""],["hwTimestamp",0],["isPrimary",
!1],["type",""],["target",null],["currentTarget",null],["which",0]];function Kj(b,c,d,e,f){nh.call(this,b,c,f);this.a=d;this.originalEvent=d.a;this.pixel=c.$d(this.originalEvent);this.coordinate=c.Ga(this.pixel);this.dragging=void 0!==e?e:!1}y(Kj,nh);Kj.prototype.preventDefault=function(){Kj.ca.preventDefault.call(this);this.a.preventDefault()};Kj.prototype.b=function(){Kj.ca.b.call(this);this.a.b()};function Lj(b,c,d,e,f){Kj.call(this,b,c,d.a,e,f);this.f=d}y(Lj,Kj);
function Mj(b){$c.call(this);this.b=b;this.i=0;this.j=!1;this.f=this.l=this.c=null;b=this.b.a;this.B=0;this.G={};this.g=new Dj(b);this.a=null;this.l=D(this.g,mj,this.Rk,!1,this);this.o=D(this.g,nj,this.xo,!1,this)}y(Mj,$c);function Nj(b,c){var d;d=new Lj(Oj,b.b,c);b.s(d);0!==b.i?(ba.clearTimeout(b.i),b.i=0,d=new Lj(Pj,b.b,c),b.s(d)):b.i=ba.setTimeout(ua(function(){this.i=0;var b=new Lj(Qj,this.b,c);this.s(b)},b),250)}
function Rj(b,c){c.type==Sj||c.type==Tj?delete b.G[c.pointerId]:c.type==Uj&&(b.G[c.pointerId]=!0);b.B=Kb(b.G)}l=Mj.prototype;l.Lg=function(b){Rj(this,b);var c=new Lj(Sj,this.b,b);this.s(c);!this.j&&0===b.button&&Nj(this,this.f);0===this.B&&(this.c.forEach(Wc),this.c=null,this.j=!1,this.f=null,sc(this.a),this.a=null)};
l.Rk=function(b){Rj(this,b);var c=new Lj(Uj,this.b,b);this.s(c);this.f=b;this.c||(this.a=new Dj(document),this.c=[D(this.a,Vj,this.Il,!1,this),D(this.a,Sj,this.Lg,!1,this),D(this.g,Tj,this.Lg,!1,this)])};l.Il=function(b){if(b.clientX!=this.f.clientX||b.clientY!=this.f.clientY){this.j=!0;var c=new Lj(Wj,this.b,b,this.j);this.s(c)}b.preventDefault()};l.xo=function(b){this.s(new Lj(b.type,this.b,b,!(!this.f||b.clientX==this.f.clientX&&b.clientY==this.f.clientY)))};
l.Y=function(){this.o&&(Wc(this.o),this.o=null);this.l&&(Wc(this.l),this.l=null);this.c&&(this.c.forEach(Wc),this.c=null);this.a&&(sc(this.a),this.a=null);this.g&&(sc(this.g),this.g=null);Mj.ca.Y.call(this)};var Qj="singleclick",Oj="click",Pj="dblclick",Wj="pointerdrag",Vj="pointermove",Uj="pointerdown",Sj="pointerup",Tj="pointercancel",Xj={up:Qj,jp:Oj,kp:Pj,np:Wj,qp:Vj,mp:Uj,tp:Sj,sp:"pointerover",rp:"pointerout",op:"pointerenter",pp:"pointerleave",lp:Tj};function Yj(b){gd.call(this);var c=Tb(b);c.opacity=void 0!==b.opacity?b.opacity:1;c.visible=void 0!==b.visible?b.visible:!0;c.zIndex=void 0!==b.zIndex?b.zIndex:0;c.maxResolution=void 0!==b.maxResolution?b.maxResolution:Infinity;c.minResolution=void 0!==b.minResolution?b.minResolution:0;this.I(c)}y(Yj,gd);
function Zj(b){var c=b.Rb(),d=b.pf(),e=b.rb(),f=b.J(),g=b.Sb(),h=b.Nb(),k=b.Ob();return{layer:b,opacity:Sa(c,0,1),O:d,visible:e,Bb:!0,extent:f,zIndex:g,maxResolution:h,minResolution:Math.max(k,0)}}l=Yj.prototype;l.J=function(){return this.get("extent")};l.Nb=function(){return this.get("maxResolution")};l.Ob=function(){return this.get("minResolution")};l.Rb=function(){return this.get("opacity")};l.rb=function(){return this.get("visible")};l.Sb=function(){return this.get("zIndex")};
l.cc=function(b){this.set("extent",b)};l.kc=function(b){this.set("maxResolution",b)};l.lc=function(b){this.set("minResolution",b)};l.dc=function(b){this.set("opacity",b)};l.ec=function(b){this.set("visible",b)};l.fc=function(b){this.set("zIndex",b)};function ak(){};function bk(b,c,d,e,f,g){tc.call(this,b,c);this.vectorContext=d;this.frameState=e;this.context=f;this.glContext=g}y(bk,tc);function ck(b){var c=Tb(b);delete c.source;Yj.call(this,c);this.i=this.B=this.o=null;b.map&&this.setMap(b.map);D(this,id("source"),this.Xk,!1,this);this.zc(b.source?b.source:null)}y(ck,Yj);function dk(b,c){return b.visible&&c>=b.minResolution&&c<b.maxResolution}l=ck.prototype;l.of=function(b){b=b?b:[];b.push(Zj(this));return b};l.ea=function(){return this.get("source")||null};l.pf=function(){var b=this.ea();return b?b.B:"undefined"};l.zm=function(){this.u()};
l.Xk=function(){this.i&&(Wc(this.i),this.i=null);var b=this.ea();b&&(this.i=D(b,"change",this.zm,!1,this));this.u()};l.setMap=function(b){Wc(this.o);this.o=null;b||this.u();Wc(this.B);this.B=null;b&&(this.o=D(b,"precompose",function(b){var d=Zj(this);d.Bb=!1;d.zIndex=Infinity;b.frameState.layerStatesArray.push(d);b.frameState.layerStates[w(this)]=d},!1,this),this.B=D(this,"change",b.render,!1,b),this.u())};l.zc=function(b){this.set("source",b)};function ek(b,c,d,e,f){$c.call(this);this.i=f;this.extent=b;this.b=d;this.resolution=c;this.state=e}y(ek,$c);function fk(b){b.s("change")}ek.prototype.J=function(){return this.extent};ek.prototype.$=function(){return this.resolution};function gk(b,c,d,e,f,g,h,k){Fd(b);0===c&&0===d||Id(b,c,d);1==e&&1==f||Jd(b,e,f);0!==g&&Kd(b,g);0===h&&0===k||Id(b,h,k);return b}function hk(b,c){return b[0]==c[0]&&b[1]==c[1]&&b[4]==c[4]&&b[5]==c[5]&&b[12]==c[12]&&b[13]==c[13]}function ik(b,c,d){var e=b[1],f=b[5],g=b[13],h=c[0];c=c[1];d[0]=b[0]*h+b[4]*c+b[12];d[1]=e*h+f*c+g;return d};function jk(b){dd.call(this);this.a=b}y(jk,dd);l=jk.prototype;l.ab=za;l.vc=function(b,c,d,e){b=b.slice();ik(c.pixelToCoordinateMatrix,b,b);if(this.ab(b,c,te,this))return d.call(e,this.a)};l.xe=se;l.cd=function(b,c,d){return function(e,f){return Oh(b,c,e,f,function(b){d[e]||(d[e]={});d[e][b.a.toString()]=b})}};l.Dm=function(b){2===b.target.state&&kk(this)};function lk(b,c){var d=c.state;2!=d&&3!=d&&D(c,"change",b.Dm,!1,b);0==d&&(c.load(),d=c.state);return 2==d}
function kk(b){var c=b.a;c.rb()&&"ready"==c.pf()&&b.u()}function mk(b,c){c.qh()&&b.postRenderFunctions.push(va(function(b,c,f){c=w(b).toString();b.rh(f.viewState.projection,f.usedTiles[c])},c))}function nk(b,c){if(c){var d,e,f;e=0;for(f=c.length;e<f;++e)d=c[e],b[w(d).toString()]=d}}function ok(b,c){var d=c.U;void 0!==d&&(ia(d)?b.logos[d]="":oa(d)&&(b.logos[d.src]=d.href))}
function pk(b,c,d,e){c=w(c).toString();d=d.toString();c in b?d in b[c]?(b=b[c][d],e.a<b.a&&(b.a=e.a),e.c>b.c&&(b.c=e.c),e.f<b.f&&(b.f=e.f),e.b>b.b&&(b.b=e.b)):b[c][d]=e:(b[c]={},b[c][d]=e)}function qk(b,c,d){return[c*(Math.round(b[0]/c)+d[0]%2/2),c*(Math.round(b[1]/c)+d[1]%2/2)]}
function rk(b,c,d,e,f,g,h,k,m,n){var p=w(c).toString();p in b.wantedTiles||(b.wantedTiles[p]={});var q=b.wantedTiles[p];b=b.tileQueue;var r=d.minZoom,t,x,z,A,B,v;for(v=h;v>=r;--v)for(x=Dh(d,g,v,x),z=d.$(v),A=x.a;A<=x.c;++A)for(B=x.f;B<=x.b;++B)h-v<=k?(t=c.Pb(v,A,B,e,f),0==t.state&&(q[eg(t.a)]=!0,t.$a()in b.b||b.c([t,p,Hh(d,t.a),z])),void 0!==m&&m.call(n,t)):c.Yf(v,A,B,f)};function sk(b){this.B=b.opacity;this.C=b.rotateWithView;this.G=b.rotation;this.j=b.scale;this.D=b.snapToPixel}l=sk.prototype;l.Be=function(){return this.B};l.de=function(){return this.C};l.Ce=function(){return this.G};l.De=function(){return this.j};l.ee=function(){return this.D};l.Ee=function(b){this.B=b};l.Fe=function(b){this.G=b};l.Ge=function(b){this.j=b};function tk(b){b=b||{};this.g=void 0!==b.anchor?b.anchor:[.5,.5];this.c=null;this.f=void 0!==b.anchorOrigin?b.anchorOrigin:"top-left";this.l=void 0!==b.anchorXUnits?b.anchorXUnits:"fraction";this.o=void 0!==b.anchorYUnits?b.anchorYUnits:"fraction";var c=void 0!==b.crossOrigin?b.crossOrigin:null,d=void 0!==b.img?b.img:null,e=void 0!==b.imgSize?b.imgSize:null,f=b.src;void 0!==f&&0!==f.length||!d||(f=d.src||w(d).toString());var g=void 0!==b.src?0:2,h=uk.Yb(),k=h.get(f,c);k||(k=new vk(d,f,e,c,g),h.set(f,
c,k));this.a=k;this.O=void 0!==b.offset?b.offset:[0,0];this.b=void 0!==b.offsetOrigin?b.offsetOrigin:"top-left";this.i=null;this.v=void 0!==b.size?b.size:null;sk.call(this,{opacity:void 0!==b.opacity?b.opacity:1,rotation:void 0!==b.rotation?b.rotation:0,scale:void 0!==b.scale?b.scale:1,snapToPixel:void 0!==b.snapToPixel?b.snapToPixel:!0,rotateWithView:void 0!==b.rotateWithView?b.rotateWithView:!1})}y(tk,sk);l=tk.prototype;
l.Xb=function(){if(this.c)return this.c;var b=this.g,c=this.Cb();if("fraction"==this.l||"fraction"==this.o){if(!c)return null;b=this.g.slice();"fraction"==this.l&&(b[0]*=c[0]);"fraction"==this.o&&(b[1]*=c[1])}if("top-left"!=this.f){if(!c)return null;b===this.g&&(b=this.g.slice());if("top-right"==this.f||"bottom-right"==this.f)b[0]=-b[0]+c[0];if("bottom-left"==this.f||"bottom-right"==this.f)b[1]=-b[1]+c[1]}return this.c=b};l.gc=function(){return this.a.a};l.rd=function(){return this.a.b};l.Cd=function(){return this.a.f};
l.Ae=function(){var b=this.a;if(!b.g)if(b.l){var c=b.b[0],d=b.b[1],e=Ni(c,d);e.fillRect(0,0,c,d);b.g=e.canvas}else b.g=b.a;return b.g};l.Da=function(){if(this.i)return this.i;var b=this.O;if("top-left"!=this.b){var c=this.Cb(),d=this.a.b;if(!c||!d)return null;b=b.slice();if("top-right"==this.b||"bottom-right"==this.b)b[0]=d[0]-c[0]-b[0];if("bottom-left"==this.b||"bottom-right"==this.b)b[1]=d[1]-c[1]-b[1]}return this.i=b};l.hn=function(){return this.a.i};l.Cb=function(){return this.v?this.v:this.a.b};
l.tf=function(b,c){return D(this.a,"change",b,!1,c)};l.load=function(){this.a.load()};l.Xf=function(b,c){Vc(this.a,"change",b,!1,c)};function vk(b,c,d,e,f){$c.call(this);this.g=null;this.a=b?b:new Image;null!==e&&(this.a.crossOrigin=e);this.c=null;this.f=f;this.b=d;this.i=c;this.l=!1;2==this.f&&wk(this)}y(vk,$c);function wk(b){var c=Ni(1,1);try{c.drawImage(b.a,0,0),c.getImageData(0,0,1,1)}catch(d){b.l=!0}}vk.prototype.j=function(){this.f=3;this.c.forEach(Wc);this.c=null;this.s("change")};
vk.prototype.o=function(){this.f=2;this.b=[this.a.width,this.a.height];this.c.forEach(Wc);this.c=null;wk(this);this.s("change")};vk.prototype.load=function(){if(0==this.f){this.f=1;this.c=[Uc(this.a,"error",this.j,!1,this),Uc(this.a,"load",this.o,!1,this)];try{this.a.src=this.i}catch(b){this.j()}}};function uk(){this.a={};this.f=0}ea(uk);uk.prototype.clear=function(){this.a={};this.f=0};uk.prototype.get=function(b,c){var d=c+":"+b;return d in this.a?this.a[d]:null};
uk.prototype.set=function(b,c,d){this.a[c+":"+b]=d;++this.f};function xk(b,c){oc.call(this);this.i=c;this.c={};this.G={}}y(xk,oc);function yk(b){var c=b.viewState,d=b.coordinateToPixelMatrix;gk(d,b.size[0]/2,b.size[1]/2,1/c.resolution,-1/c.resolution,-c.rotation,-c.center[0],-c.center[1]);Hd(d,b.pixelToCoordinateMatrix)}l=xk.prototype;l.Y=function(){Ib(this.c,sc);xk.ca.Y.call(this)};
function zk(){var b=uk.Yb();if(32<b.f){var c=0,d,e;for(d in b.a){e=b.a[d];var f;if(f=0===(c++&3))Bc(e)?e=cd(e,void 0,void 0):(e=Pc(e),e=!!e&&Jc(e,void 0,void 0)),f=!e;f&&(delete b.a[d],--b.f)}}}
l.Bf=function(b,c,d,e,f,g){function h(b){var c=w(b).toString();if(!(c in p))return p[c]=!0,d.call(e,b,null)}var k,m=c.viewState,n=m.resolution,p={},q=m.projection,m=b;if(q.b){var q=q.J(),r=je(q),t=b[0];if(t<q[0]||t>q[2])m=[t+r*Math.ceil((q[0]-t)/r),b[1]]}q=c.layerStatesArray;for(r=q.length-1;0<=r;--r){var t=q[r],x=t.layer;if(dk(t,n)&&f.call(g,x)){var z=Ak(this,x);x.ea()&&(k=z.ab(xh(x.ea())?m:b,c,t.Bb?d:h,e));if(k)return k}}};
l.lh=function(b,c,d,e,f,g){var h,k=c.viewState.resolution,m=c.layerStatesArray,n;for(n=m.length-1;0<=n;--n){h=m[n];var p=h.layer;if(dk(h,k)&&f.call(g,p)&&(h=Ak(this,p).vc(b,c,d,e)))return h}};l.mh=function(b,c,d,e){return void 0!==this.Bf(b,c,te,this,d,e)};function Ak(b,c){var d=w(c).toString();if(d in b.c)return b.c[d];var e=b.hf(c);b.c[d]=e;b.G[d]=D(e,"change",b.Hk,!1,b);return e}l.Hk=function(){this.i.render()};l.Ne=za;
l.Do=function(b,c){for(var d in this.c)if(!(c&&d in c.layerStates)){var e=d,f=this.c[e];delete this.c[e];Wc(this.G[e]);delete this.G[e];sc(f)}};function Bk(b,c){for(var d in b.c)if(!(d in c.layerStates)){c.postRenderFunctions.push(ua(b.Do,b));break}}function qb(b,c){return b.zIndex-c.zIndex};function Ck(b,c){this.o=b;this.i=c;this.a=[];this.f=[];this.b={}}Ck.prototype.clear=function(){this.a.length=0;this.f.length=0;Qb(this.b)};function Dk(b){var c=b.a,d=b.f,e=c[0];1==c.length?(c.length=0,d.length=0):(c[0]=c.pop(),d[0]=d.pop(),Ek(b,0));c=b.i(e);delete b.b[c];return e}Ck.prototype.c=function(b){var c=this.o(b);return Infinity!=c?(this.a.push(b),this.f.push(c),this.b[this.i(b)]=!0,Fk(this,0,this.a.length-1),!0):!1};Ck.prototype.qc=function(){return this.a.length};
Ck.prototype.La=function(){return 0===this.a.length};function Ek(b,c){for(var d=b.a,e=b.f,f=d.length,g=d[c],h=e[c],k=c;c<f>>1;){var m=2*c+1,n=2*c+2,m=n<f&&e[n]<e[m]?n:m;d[c]=d[m];e[c]=e[m];c=m}d[c]=g;e[c]=h;Fk(b,k,c)}function Fk(b,c,d){var e=b.a;b=b.f;for(var f=e[d],g=b[d];d>c;){var h=d-1>>1;if(b[h]>g)e[d]=e[h],b[d]=b[h],d=h;else break}e[d]=f;b[d]=g}
function Gk(b){var c=b.o,d=b.a,e=b.f,f=0,g=d.length,h,k,m;for(k=0;k<g;++k)h=d[k],m=c(h),Infinity==m?delete b.b[b.i(h)]:(e[f]=m,d[f++]=h);d.length=f;e.length=f;for(c=(b.a.length>>1)-1;0<=c;c--)Ek(b,c)};function Hk(b,c){Ck.call(this,function(c){return b.apply(null,c)},function(b){return b[0].$a()});this.G=c;this.g=0;this.j={}}y(Hk,Ck);Hk.prototype.c=function(b){var c=Hk.ca.c.call(this,b);c&&D(b[0],"change",this.l,!1,this);return c};Hk.prototype.l=function(b){b=b.target;var c=b.state;if(2===c||3===c||4===c)Vc(b,"change",this.l,!1,this),b=b.$a(),b in this.j&&(delete this.j[b],--this.g),this.G()};
function Ik(b,c,d){for(var e=0,f;b.g<c&&e<d&&0<b.qc();)f=Dk(b)[0],0===f.state&&(f.load(),b.j[f.$a()]=!0,++b.g,++e)};function Jk(b,c,d){this.c=b;this.b=c;this.i=d;this.a=[];this.f=this.g=0}function Kk(b,c){var d=b.c,e=b.f,f=b.b-e,g=Math.log(b.b/b.f)/b.c;return Yf({source:c,duration:g,easing:function(b){return e*(Math.exp(d*b*g)-1)/f}})};function Lk(b){gd.call(this);this.B=null;this.g(!0);this.handleEvent=b.handleEvent}y(Lk,gd);Lk.prototype.b=function(){return this.get("active")};Lk.prototype.i=function(){return this.B};Lk.prototype.g=function(b){this.set("active",b)};Lk.prototype.setMap=function(b){this.B=b};function Mk(b,c,d,e,f){if(void 0!==d){var g=c.Fa(),h=c.Ua();void 0!==g&&h&&f&&0<f&&(b.Na(Zf({rotation:g,duration:f,easing:Uf})),e&&b.Na(Yf({source:h,duration:f,easing:Uf})));c.rotate(d,e)}}
function Nk(b,c,d,e,f){var g=c.$();d=c.constrainResolution(g,d,0);Ok(b,c,d,e,f)}function Ok(b,c,d,e,f){if(d){var g=c.$(),h=c.Ua();void 0!==g&&h&&d!==g&&f&&0<f&&(b.Na($f({resolution:g,duration:f,easing:Uf})),e&&b.Na(Yf({source:h,duration:f,easing:Uf})));if(e){var k;b=c.Ua();f=c.$();void 0!==b&&void 0!==f&&(k=[e[0]-d*(e[0]-b[0])/f,e[1]-d*(e[1]-b[1])/f]);c.kb(k)}c.Ub(d)}};function Pk(b){b=b?b:{};this.a=b.delta?b.delta:1;Lk.call(this,{handleEvent:Qk});this.c=void 0!==b.duration?b.duration:250}y(Pk,Lk);function Qk(b){var c=!1,d=b.a;if(b.type==Pj){var c=b.map,e=b.coordinate,d=d.c?-this.a:this.a,f=c.aa();Nk(c,f,d,e,this.c);b.preventDefault();c=!0}return!c};function Rk(b){b=b.a;return b.f&&!b.l&&b.c}function Sk(b){return"pointermove"==b.type}function Tk(b){return b.type==Qj}function Uk(b){b=b.a;return!b.f&&!b.l&&!b.c}function Vk(b){b=b.a;return!b.f&&!b.l&&b.c}function Wk(b){b=b.a.target.tagName;return"INPUT"!==b&&"SELECT"!==b&&"TEXTAREA"!==b}function Xk(b){return"mouse"==b.f.pointerType};function Yk(b){b=b?b:{};Lk.call(this,{handleEvent:b.handleEvent?b.handleEvent:Zk});this.Cc=b.handleDownEvent?b.handleDownEvent:se;this.Yc=b.handleDragEvent?b.handleDragEvent:za;this.Xe=b.handleMoveEvent?b.handleMoveEvent:za;this.Ye=b.handleUpEvent?b.handleUpEvent:se;this.C=!1;this.fa={};this.j=[]}y(Yk,Lk);function $k(b){for(var c=b.length,d=0,e=0,f=0;f<c;f++)d+=b[f].clientX,e+=b[f].clientY;return[d/c,e/c]}
function Zk(b){if(!(b instanceof Lj))return!0;var c=!1,d=b.type;if(d===Uj||d===Wj||d===Sj)d=b.f,b.type==Sj?delete this.fa[d.pointerId]:b.type==Uj?this.fa[d.pointerId]=d:d.pointerId in this.fa&&(this.fa[d.pointerId]=d),this.j=Lb(this.fa);this.C&&(b.type==Wj?this.Yc(b):b.type==Sj&&(this.C=this.Ye(b)));b.type==Uj?(this.C=b=this.Cc(b),c=this.Ac(b)):b.type==Vj&&this.Xe(b);return!c}Yk.prototype.Ac=ve;function al(b){Yk.call(this,{handleDownEvent:bl,handleDragEvent:cl,handleUpEvent:dl});b=b?b:{};this.a=b.kinetic;this.c=this.l=null;this.v=b.condition?b.condition:Uk;this.o=!1}y(al,Yk);function cl(b){var c=$k(this.j);this.a&&this.a.a.push(c[0],c[1],Date.now());if(this.c){var d=this.c[0]-c[0],e=c[1]-this.c[1];b=b.map;var f=b.aa(),g=Qf(f),e=d=[d,e],h=g.resolution;e[0]*=h;e[1]*=h;ud(d,g.rotation);pd(d,g.center);d=f.Xd(d);b.render();f.kb(d)}this.c=c}
function dl(b){b=b.map;var c=b.aa();if(0===this.j.length){var d;if(d=!this.o&&this.a)if(d=this.a,6>d.a.length)d=!1;else{var e=Date.now()-d.i,f=d.a.length-3;if(d.a[f+2]<e)d=!1;else{for(var g=f-3;0<g&&d.a[g+2]>e;)g-=3;var e=d.a[f+2]-d.a[g+2],h=d.a[f]-d.a[g],f=d.a[f+1]-d.a[g+1];d.g=Math.atan2(f,h);d.f=Math.sqrt(h*h+f*f)/e;d=d.f>d.b}}d&&(d=this.a,d=(d.b-d.f)/d.c,f=this.a.g,g=c.Ua(),this.l=Kk(this.a,g),b.Na(this.l),g=b.Pa(g),d=b.Ga([g[0]-d*Math.cos(f),g[1]-d*Math.sin(f)]),d=c.Xd(d),c.kb(d));Sf(c,-1);b.render();
return!1}this.c=null;return!0}function bl(b){if(0<this.j.length&&this.v(b)){var c=b.map,d=c.aa();this.c=null;this.C||Sf(d,1);c.render();this.l&&hb(c.O,this.l)&&(d.kb(b.frameState.viewState.center),this.l=null);this.a&&(b=this.a,b.a.length=0,b.g=0,b.f=0);this.o=1<this.j.length;return!0}return!1}al.prototype.Ac=se;function el(b){b=b?b:{};Yk.call(this,{handleDownEvent:fl,handleDragEvent:gl,handleUpEvent:hl});this.c=b.condition?b.condition:Rk;this.a=void 0;this.l=void 0!==b.duration?b.duration:250}y(el,Yk);function gl(b){if(Xk(b)){var c=b.map,d=c.Sa();b=b.pixel;d=Math.atan2(d[1]/2-b[1],b[0]-d[0]/2);if(void 0!==this.a){b=d-this.a;var e=c.aa(),f=e.Fa();c.render();Mk(c,e,f-b)}this.a=d}}
function hl(b){if(!Xk(b))return!0;b=b.map;var c=b.aa();Sf(c,-1);var d=c.Fa(),e=this.l,d=c.constrainRotation(d,0);Mk(b,c,d,void 0,e);return!1}function fl(b){return Xk(b)&&zc(b.a)&&this.c(b)?(b=b.map,Sf(b.aa(),1),b.render(),this.a=void 0,!0):!1}el.prototype.Ac=se;function il(b){this.c=null;this.f=document.createElement("div");this.f.style.position="absolute";this.f.className="ol-box "+b;this.b=this.g=this.a=null}y(il,oc);il.prototype.Y=function(){this.setMap(null);il.ca.Y.call(this)};function jl(b){var c=b.g,d=b.b;b=b.f.style;b.left=Math.min(c[0],d[0])+"px";b.top=Math.min(c[1],d[1])+"px";b.width=Math.abs(d[0]-c[0])+"px";b.height=Math.abs(d[1]-c[1])+"px"}
il.prototype.setMap=function(b){if(this.a){this.a.l.removeChild(this.f);var c=this.f.style;c.left=c.top=c.width=c.height="inherit"}(this.a=b)&&this.a.l.appendChild(this.f)};function kl(b){var c=b.g,d=b.b,c=[c,[c[0],d[1]],d,[d[0],c[1]]].map(b.a.Ga,b.a);c[4]=c[0].slice();b.c?b.c.la([c]):b.c=new F([c])}il.prototype.X=function(){return this.c};function ll(b,c){tc.call(this,b);this.coordinate=c}y(ll,tc);function ml(b){Yk.call(this,{handleDownEvent:nl,handleDragEvent:pl,handleUpEvent:ql});b=b?b:{};this.c=new il(b.className||"ol-dragbox");this.a=null;this.v=b.condition?b.condition:te}y(ml,Yk);function pl(b){if(Xk(b)){var c=this.c;b=b.pixel;c.g=this.a;c.b=b;kl(c);jl(c)}}ml.prototype.X=function(){return this.c.X()};ml.prototype.o=za;
function ql(b){if(!Xk(b))return!0;this.c.setMap(null);var c=b.pixel[0]-this.a[0],d=b.pixel[1]-this.a[1];64<=c*c+d*d&&(this.o(b),this.s(new ll("boxend",b.coordinate)));return!1}function nl(b){if(Xk(b)&&zc(b.a)&&this.v(b)){this.a=b.pixel;this.c.setMap(b.map);var c=this.c,d=this.a;c.g=this.a;c.b=d;kl(c);jl(c);this.s(new ll("boxstart",b.coordinate));return!0}return!1};function rl(b){b=b?b:{};var c=b.condition?b.condition:Vk;this.l=void 0!==b.duration?b.duration:200;ml.call(this,{condition:c,className:b.className||"ol-dragzoom"})}y(rl,ml);rl.prototype.o=function(){var b=this.B,c=b.aa(),d=b.Sa(),e=this.X().J(),d=c.constrainResolution(Math.max(je(e)/d[0],ke(e)/d[1])),f=c.$(),g=c.Ua();b.Na($f({resolution:f,duration:this.l,easing:Uf}));b.Na(Yf({source:g,duration:this.l,easing:Uf}));c.kb(le(e));c.Ub(d)};function sl(b){Lk.call(this,{handleEvent:tl});b=b||{};this.a=void 0!==b.condition?b.condition:ye(Uk,Wk);this.c=void 0!==b.duration?b.duration:100;this.j=void 0!==b.pixelDelta?b.pixelDelta:128}y(sl,Lk);
function tl(b){var c=!1;if("key"==b.type){var d=b.a.i;if(this.a(b)&&(40==d||37==d||39==d||38==d)){var e=b.map,c=e.aa(),f=c.$()*this.j,g=0,h=0;40==d?h=-f:37==d?g=-f:39==d?g=f:h=f;d=[g,h];ud(d,c.Fa());f=this.c;if(g=c.Ua())f&&0<f&&e.Na(Yf({source:g,duration:f,easing:Wf})),e=c.Xd([g[0]+d[0],g[1]+d[1]]),c.kb(e);b.preventDefault();c=!0}}return!c};function ul(b){Lk.call(this,{handleEvent:vl});b=b?b:{};this.c=b.condition?b.condition:Wk;this.a=b.delta?b.delta:1;this.j=void 0!==b.duration?b.duration:100}y(ul,Lk);function vl(b){var c=!1;if("key"==b.type){var d=b.a.G;if(this.c(b)&&(43==d||45==d)){c=b.map;d=43==d?this.a:-this.a;c.render();var e=c.aa();Nk(c,e,d,void 0,this.j);b.preventDefault();c=!0}}return!c};function wl(b){Lk.call(this,{handleEvent:xl});b=b||{};this.c=0;this.C=void 0!==b.duration?b.duration:250;this.o=void 0!==b.useAnchor?b.useAnchor:!0;this.a=null;this.l=this.j=void 0}y(wl,Lk);function xl(b){var c=!1;if("mousewheel"==b.type){var c=b.map,d=b.a;this.o&&(this.a=b.coordinate);this.c+=d.v;void 0===this.j&&(this.j=Date.now());d=Math.max(80-(Date.now()-this.j),0);ba.clearTimeout(this.l);this.l=ba.setTimeout(ua(this.v,this,c),d);b.preventDefault();c=!0}return!c}
wl.prototype.v=function(b){var c=Sa(this.c,-1,1),d=b.aa();b.render();Nk(b,d,-c,this.a,this.C);this.c=0;this.a=null;this.l=this.j=void 0};wl.prototype.D=function(b){this.o=b;b||(this.a=null)};function yl(b){Yk.call(this,{handleDownEvent:zl,handleDragEvent:Al,handleUpEvent:Bl});b=b||{};this.c=null;this.l=void 0;this.a=!1;this.o=0;this.D=void 0!==b.threshold?b.threshold:.3;this.v=void 0!==b.duration?b.duration:250}y(yl,Yk);
function Al(b){var c=0,d=this.j[0],e=this.j[1],d=Math.atan2(e.clientY-d.clientY,e.clientX-d.clientX);void 0!==this.l&&(c=d-this.l,this.o+=c,!this.a&&Math.abs(this.o)>this.D&&(this.a=!0));this.l=d;b=b.map;d=dh(b.a);e=$k(this.j);e[0]-=d.x;e[1]-=d.y;this.c=b.Ga(e);this.a&&(d=b.aa(),e=d.Fa(),b.render(),Mk(b,d,e+c,this.c))}function Bl(b){if(2>this.j.length){b=b.map;var c=b.aa();Sf(c,-1);if(this.a){var d=c.Fa(),e=this.c,f=this.v,d=c.constrainRotation(d,0);Mk(b,c,d,e,f)}return!1}return!0}
function zl(b){return 2<=this.j.length?(b=b.map,this.c=null,this.l=void 0,this.a=!1,this.o=0,this.C||Sf(b.aa(),1),b.render(),!0):!1}yl.prototype.Ac=se;function Cl(b){Yk.call(this,{handleDownEvent:Dl,handleDragEvent:El,handleUpEvent:Fl});b=b?b:{};this.c=null;this.o=void 0!==b.duration?b.duration:400;this.a=void 0;this.l=1}y(Cl,Yk);function El(b){var c=1,d=this.j[0],e=this.j[1],f=d.clientX-e.clientX,d=d.clientY-e.clientY,f=Math.sqrt(f*f+d*d);void 0!==this.a&&(c=this.a/f);this.a=f;1!=c&&(this.l=c);b=b.map;var f=b.aa(),d=f.$(),e=dh(b.a),g=$k(this.j);g[0]-=e.x;g[1]-=e.y;this.c=b.Ga(g);b.render();Ok(b,f,d*c,this.c)}
function Fl(b){if(2>this.j.length){b=b.map;var c=b.aa();Sf(c,-1);var d=c.$(),e=this.c,f=this.o,d=c.constrainResolution(d,0,this.l-1);Ok(b,c,d,e,f);return!1}return!0}function Dl(b){return 2<=this.j.length?(b=b.map,this.c=null,this.a=void 0,this.l=1,this.C||Sf(b.aa(),1),b.render(),!0):!1}Cl.prototype.Ac=se;function Gl(b){b=b?b:{};var c=new og,d=new Jk(-.005,.05,100);(void 0!==b.altShiftDragRotate?b.altShiftDragRotate:1)&&c.push(new el);(void 0!==b.doubleClickZoom?b.doubleClickZoom:1)&&c.push(new Pk({delta:b.zoomDelta,duration:b.zoomDuration}));(void 0!==b.dragPan?b.dragPan:1)&&c.push(new al({kinetic:d}));(void 0!==b.pinchRotate?b.pinchRotate:1)&&c.push(new yl);(void 0!==b.pinchZoom?b.pinchZoom:1)&&c.push(new Cl({duration:b.zoomDuration}));if(void 0!==b.keyboard?b.keyboard:1)c.push(new sl),c.push(new ul({delta:b.zoomDelta,
duration:b.zoomDuration}));(void 0!==b.mouseWheelZoom?b.mouseWheelZoom:1)&&c.push(new wl({duration:b.zoomDuration}));(void 0!==b.shiftDragZoom?b.shiftDragZoom:1)&&c.push(new rl({duration:b.zoomDuration}));return c};function Hl(b){var c=b||{};b=Tb(c);delete b.layers;c=c.layers;Yj.call(this,b);this.b=[];this.a={};D(this,id("layers"),this.Jk,!1,this);c?ga(c)&&(c=new og(c.slice())):c=new og;this.ih(c)}y(Hl,Yj);l=Hl.prototype;l.ie=function(){this.rb()&&this.u()};
l.Jk=function(){this.b.forEach(Wc);this.b.length=0;var b=this.Qc();this.b.push(D(b,"add",this.Ik,!1,this),D(b,"remove",this.Kk,!1,this));Ib(this.a,function(b){b.forEach(Wc)});Qb(this.a);var b=b.a,c,d,e;c=0;for(d=b.length;c<d;c++)e=b[c],this.a[w(e).toString()]=[D(e,"propertychange",this.ie,!1,this),D(e,"change",this.ie,!1,this)];this.u()};l.Ik=function(b){b=b.element;var c=w(b).toString();this.a[c]=[D(b,"propertychange",this.ie,!1,this),D(b,"change",this.ie,!1,this)];this.u()};
l.Kk=function(b){b=w(b.element).toString();this.a[b].forEach(Wc);delete this.a[b];this.u()};l.Qc=function(){return this.get("layers")};l.ih=function(b){this.set("layers",b)};
l.of=function(b){var c=void 0!==b?b:[],d=c.length;this.Qc().forEach(function(b){b.of(c)});b=Zj(this);var e,f;for(e=c.length;d<e;d++)f=c[d],f.opacity*=b.opacity,f.visible=f.visible&&b.visible,f.maxResolution=Math.min(f.maxResolution,b.maxResolution),f.minResolution=Math.max(f.minResolution,b.minResolution),void 0!==b.extent&&(f.extent=void 0!==f.extent?ne(f.extent,b.extent):b.extent);return c};l.pf=function(){return"ready"};function Il(b){Ce.call(this,{code:b,units:"m",extent:Jl,global:!0,worldExtent:Kl})}y(Il,Ce);Il.prototype.getPointResolution=function(b,c){return b/Ta(c[1]/6378137)};var Ll=6378137*Math.PI,Jl=[-Ll,-Ll,Ll,Ll],Kl=[-180,-85,180,85],Oe="EPSG:3857 EPSG:102100 EPSG:102113 EPSG:900913 urn:ogc:def:crs:EPSG:6.18:3:3857 urn:ogc:def:crs:EPSG::3857 http://www.opengis.net/gml/srs/epsg.xml#3857".split(" ").map(function(b){return new Il(b)});
function Pe(b,c,d){var e=b.length;d=1<d?d:2;void 0===c&&(2<d?c=b.slice():c=Array(e));for(var f=0;f<e;f+=d)c[f]=6378137*Math.PI*b[f]/180,c[f+1]=6378137*Math.log(Math.tan(Math.PI*(b[f+1]+90)/360));return c}function Qe(b,c,d){var e=b.length;d=1<d?d:2;void 0===c&&(2<d?c=b.slice():c=Array(e));for(var f=0;f<e;f+=d)c[f]=180*b[f]/(6378137*Math.PI),c[f+1]=360*Math.atan(Math.exp(b[f+1]/6378137))/Math.PI-90;return c};function Ml(b,c){Ce.call(this,{code:b,units:"degrees",extent:Nl,axisOrientation:c,global:!0,worldExtent:Nl})}y(Ml,Ce);Ml.prototype.getPointResolution=function(b){return b};
var Nl=[-180,-90,180,90],Re=[new Ml("CRS:84"),new Ml("EPSG:4326","neu"),new Ml("urn:ogc:def:crs:EPSG::4326","neu"),new Ml("urn:ogc:def:crs:EPSG:6.6:4326","neu"),new Ml("urn:ogc:def:crs:OGC:1.3:CRS84"),new Ml("urn:ogc:def:crs:OGC:2:84"),new Ml("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new Ml("urn:x-ogc:def:crs:EPSG:4326","neu")];function Ol(){Fe(Oe);Fe(Re);Ne()};function Pl(b){ck.call(this,b?b:{})}y(Pl,ck);function G(b){b=b?b:{};var c=Tb(b);delete c.preload;delete c.useInterimTilesOnError;ck.call(this,c);this.c(void 0!==b.preload?b.preload:0);this.g(void 0!==b.useInterimTilesOnError?b.useInterimTilesOnError:!0)}y(G,ck);G.prototype.a=function(){return this.get("preload")};G.prototype.c=function(b){this.set("preload",b)};G.prototype.b=function(){return this.get("useInterimTilesOnError")};G.prototype.g=function(b){this.set("useInterimTilesOnError",b)};var Ql=[0,0,0,1],Rl=[],Sl=[0,0,0,1];function Tl(b){b=b||{};this.a=void 0!==b.color?b.color:null;this.f=void 0}Tl.prototype.b=function(){return this.a};Tl.prototype.c=function(b){this.a=b;this.f=void 0};Tl.prototype.Jb=function(){void 0===this.f&&(this.f="f"+(this.a?vg(this.a):"-"));return this.f};function Ul(){this.f=-1};function Vl(){this.f=-1;this.f=64;this.a=Array(4);this.g=Array(this.f);this.c=this.b=0;this.reset()}y(Vl,Ul);Vl.prototype.reset=function(){this.a[0]=1732584193;this.a[1]=4023233417;this.a[2]=2562383102;this.a[3]=271733878;this.c=this.b=0};
function Wl(b,c,d){d||(d=0);var e=Array(16);if(ia(c))for(var f=0;16>f;++f)e[f]=c.charCodeAt(d++)|c.charCodeAt(d++)<<8|c.charCodeAt(d++)<<16|c.charCodeAt(d++)<<24;else for(f=0;16>f;++f)e[f]=c[d++]|c[d++]<<8|c[d++]<<16|c[d++]<<24;c=b.a[0];d=b.a[1];var f=b.a[2],g=b.a[3],h=0,h=c+(g^d&(f^g))+e[0]+3614090360&4294967295;c=d+(h<<7&4294967295|h>>>25);h=g+(f^c&(d^f))+e[1]+3905402710&4294967295;g=c+(h<<12&4294967295|h>>>20);h=f+(d^g&(c^d))+e[2]+606105819&4294967295;f=g+(h<<17&4294967295|h>>>15);h=d+(c^f&(g^
c))+e[3]+3250441966&4294967295;d=f+(h<<22&4294967295|h>>>10);h=c+(g^d&(f^g))+e[4]+4118548399&4294967295;c=d+(h<<7&4294967295|h>>>25);h=g+(f^c&(d^f))+e[5]+1200080426&4294967295;g=c+(h<<12&4294967295|h>>>20);h=f+(d^g&(c^d))+e[6]+2821735955&4294967295;f=g+(h<<17&4294967295|h>>>15);h=d+(c^f&(g^c))+e[7]+4249261313&4294967295;d=f+(h<<22&4294967295|h>>>10);h=c+(g^d&(f^g))+e[8]+1770035416&4294967295;c=d+(h<<7&4294967295|h>>>25);h=g+(f^c&(d^f))+e[9]+2336552879&4294967295;g=c+(h<<12&4294967295|h>>>20);h=f+
(d^g&(c^d))+e[10]+4294925233&4294967295;f=g+(h<<17&4294967295|h>>>15);h=d+(c^f&(g^c))+e[11]+2304563134&4294967295;d=f+(h<<22&4294967295|h>>>10);h=c+(g^d&(f^g))+e[12]+1804603682&4294967295;c=d+(h<<7&4294967295|h>>>25);h=g+(f^c&(d^f))+e[13]+4254626195&4294967295;g=c+(h<<12&4294967295|h>>>20);h=f+(d^g&(c^d))+e[14]+2792965006&4294967295;f=g+(h<<17&4294967295|h>>>15);h=d+(c^f&(g^c))+e[15]+1236535329&4294967295;d=f+(h<<22&4294967295|h>>>10);h=c+(f^g&(d^f))+e[1]+4129170786&4294967295;c=d+(h<<5&4294967295|
h>>>27);h=g+(d^f&(c^d))+e[6]+3225465664&4294967295;g=c+(h<<9&4294967295|h>>>23);h=f+(c^d&(g^c))+e[11]+643717713&4294967295;f=g+(h<<14&4294967295|h>>>18);h=d+(g^c&(f^g))+e[0]+3921069994&4294967295;d=f+(h<<20&4294967295|h>>>12);h=c+(f^g&(d^f))+e[5]+3593408605&4294967295;c=d+(h<<5&4294967295|h>>>27);h=g+(d^f&(c^d))+e[10]+38016083&4294967295;g=c+(h<<9&4294967295|h>>>23);h=f+(c^d&(g^c))+e[15]+3634488961&4294967295;f=g+(h<<14&4294967295|h>>>18);h=d+(g^c&(f^g))+e[4]+3889429448&4294967295;d=f+(h<<20&4294967295|
h>>>12);h=c+(f^g&(d^f))+e[9]+568446438&4294967295;c=d+(h<<5&4294967295|h>>>27);h=g+(d^f&(c^d))+e[14]+3275163606&4294967295;g=c+(h<<9&4294967295|h>>>23);h=f+(c^d&(g^c))+e[3]+4107603335&4294967295;f=g+(h<<14&4294967295|h>>>18);h=d+(g^c&(f^g))+e[8]+1163531501&4294967295;d=f+(h<<20&4294967295|h>>>12);h=c+(f^g&(d^f))+e[13]+2850285829&4294967295;c=d+(h<<5&4294967295|h>>>27);h=g+(d^f&(c^d))+e[2]+4243563512&4294967295;g=c+(h<<9&4294967295|h>>>23);h=f+(c^d&(g^c))+e[7]+1735328473&4294967295;f=g+(h<<14&4294967295|
h>>>18);h=d+(g^c&(f^g))+e[12]+2368359562&4294967295;d=f+(h<<20&4294967295|h>>>12);h=c+(d^f^g)+e[5]+4294588738&4294967295;c=d+(h<<4&4294967295|h>>>28);h=g+(c^d^f)+e[8]+2272392833&4294967295;g=c+(h<<11&4294967295|h>>>21);h=f+(g^c^d)+e[11]+1839030562&4294967295;f=g+(h<<16&4294967295|h>>>16);h=d+(f^g^c)+e[14]+4259657740&4294967295;d=f+(h<<23&4294967295|h>>>9);h=c+(d^f^g)+e[1]+2763975236&4294967295;c=d+(h<<4&4294967295|h>>>28);h=g+(c^d^f)+e[4]+1272893353&4294967295;g=c+(h<<11&4294967295|h>>>21);h=f+(g^
c^d)+e[7]+4139469664&4294967295;f=g+(h<<16&4294967295|h>>>16);h=d+(f^g^c)+e[10]+3200236656&4294967295;d=f+(h<<23&4294967295|h>>>9);h=c+(d^f^g)+e[13]+681279174&4294967295;c=d+(h<<4&4294967295|h>>>28);h=g+(c^d^f)+e[0]+3936430074&4294967295;g=c+(h<<11&4294967295|h>>>21);h=f+(g^c^d)+e[3]+3572445317&4294967295;f=g+(h<<16&4294967295|h>>>16);h=d+(f^g^c)+e[6]+76029189&4294967295;d=f+(h<<23&4294967295|h>>>9);h=c+(d^f^g)+e[9]+3654602809&4294967295;c=d+(h<<4&4294967295|h>>>28);h=g+(c^d^f)+e[12]+3873151461&4294967295;
g=c+(h<<11&4294967295|h>>>21);h=f+(g^c^d)+e[15]+530742520&4294967295;f=g+(h<<16&4294967295|h>>>16);h=d+(f^g^c)+e[2]+3299628645&4294967295;d=f+(h<<23&4294967295|h>>>9);h=c+(f^(d|~g))+e[0]+4096336452&4294967295;c=d+(h<<6&4294967295|h>>>26);h=g+(d^(c|~f))+e[7]+1126891415&4294967295;g=c+(h<<10&4294967295|h>>>22);h=f+(c^(g|~d))+e[14]+2878612391&4294967295;f=g+(h<<15&4294967295|h>>>17);h=d+(g^(f|~c))+e[5]+4237533241&4294967295;d=f+(h<<21&4294967295|h>>>11);h=c+(f^(d|~g))+e[12]+1700485571&4294967295;c=d+
(h<<6&4294967295|h>>>26);h=g+(d^(c|~f))+e[3]+2399980690&4294967295;g=c+(h<<10&4294967295|h>>>22);h=f+(c^(g|~d))+e[10]+4293915773&4294967295;f=g+(h<<15&4294967295|h>>>17);h=d+(g^(f|~c))+e[1]+2240044497&4294967295;d=f+(h<<21&4294967295|h>>>11);h=c+(f^(d|~g))+e[8]+1873313359&4294967295;c=d+(h<<6&4294967295|h>>>26);h=g+(d^(c|~f))+e[15]+4264355552&4294967295;g=c+(h<<10&4294967295|h>>>22);h=f+(c^(g|~d))+e[6]+2734768916&4294967295;f=g+(h<<15&4294967295|h>>>17);h=d+(g^(f|~c))+e[13]+1309151649&4294967295;
d=f+(h<<21&4294967295|h>>>11);h=c+(f^(d|~g))+e[4]+4149444226&4294967295;c=d+(h<<6&4294967295|h>>>26);h=g+(d^(c|~f))+e[11]+3174756917&4294967295;g=c+(h<<10&4294967295|h>>>22);h=f+(c^(g|~d))+e[2]+718787259&4294967295;f=g+(h<<15&4294967295|h>>>17);h=d+(g^(f|~c))+e[9]+3951481745&4294967295;b.a[0]=b.a[0]+c&4294967295;b.a[1]=b.a[1]+(f+(h<<21&4294967295|h>>>11))&4294967295;b.a[2]=b.a[2]+f&4294967295;b.a[3]=b.a[3]+g&4294967295}
function Xl(b,c){var d;ca(d)||(d=c.length);for(var e=d-b.f,f=b.g,g=b.b,h=0;h<d;){if(0==g)for(;h<=e;)Wl(b,c,h),h+=b.f;if(ia(c))for(;h<d;){if(f[g++]=c.charCodeAt(h++),g==b.f){Wl(b,f);g=0;break}}else for(;h<d;)if(f[g++]=c[h++],g==b.f){Wl(b,f);g=0;break}}b.b=g;b.c+=d};function Yl(b){b=b||{};this.a=void 0!==b.color?b.color:null;this.c=b.lineCap;this.b=void 0!==b.lineDash?b.lineDash:null;this.g=b.lineJoin;this.i=b.miterLimit;this.f=b.width;this.j=void 0}l=Yl.prototype;l.pn=function(){return this.a};l.Uj=function(){return this.c};l.qn=function(){return this.b};l.Vj=function(){return this.g};l.$j=function(){return this.i};l.rn=function(){return this.f};l.sn=function(b){this.a=b;this.j=void 0};l.Oo=function(b){this.c=b;this.j=void 0};
l.tn=function(b){this.b=b;this.j=void 0};l.Po=function(b){this.g=b;this.j=void 0};l.Qo=function(b){this.i=b;this.j=void 0};l.Uo=function(b){this.f=b;this.j=void 0};
l.Jb=function(){if(void 0===this.j){var b="s"+(this.a?vg(this.a):"-")+","+(void 0!==this.c?this.c.toString():"-")+","+(this.b?this.b.toString():"-")+","+(void 0!==this.g?this.g:"-")+","+(void 0!==this.i?this.i.toString():"-")+","+(void 0!==this.f?this.f.toString():"-"),c=new Vl;Xl(c,b);b=Array((56>c.b?c.f:2*c.f)-c.b);b[0]=128;for(var d=1;d<b.length-8;++d)b[d]=0;for(var e=8*c.c,d=b.length-8;d<b.length;++d)b[d]=e&255,e/=256;Xl(c,b);b=Array(16);for(d=e=0;4>d;++d)for(var f=0;32>f;f+=8)b[e++]=c.a[d]>>>
f&255;if(8192>=b.length)c=String.fromCharCode.apply(null,b);else for(c="",d=0;d<b.length;d+=8192)e=mb(b,d,d+8192),c+=String.fromCharCode.apply(null,e);this.j=c}return this.j};function Zl(b){b=b||{};this.i=this.a=this.g=null;this.c=void 0!==b.fill?b.fill:null;this.f=void 0!==b.stroke?b.stroke:null;this.b=b.radius;this.v=[0,0];this.o=this.O=this.l=null;var c=b.atlasManager,d,e=null,f,g=0;this.f&&(f=vg(this.f.a),g=this.f.f,void 0===g&&(g=1),e=this.f.b,Wi||(e=null));var h=2*(this.b+g)+1;f={strokeStyle:f,Id:g,size:h,lineDash:e};void 0===c?(this.a=document.createElement("CANVAS"),this.a.height=h,this.a.width=h,d=h=this.a.width,c=this.a.getContext("2d"),this.vh(f,c,0,0),this.c?
this.i=this.a:(c=this.i=document.createElement("CANVAS"),c.height=f.size,c.width=f.size,c=c.getContext("2d"),this.uh(f,c,0,0))):(h=Math.round(h),(e=!this.c)&&(d=ua(this.uh,this,f)),g=this.Jb(),f=c.add(g,h,h,ua(this.vh,this,f),d),this.a=f.image,this.v=[f.offsetX,f.offsetY],d=f.image.width,this.i=e?f.Og:this.a);this.l=[h/2,h/2];this.O=[h,h];this.o=[d,d];sk.call(this,{opacity:1,rotateWithView:!1,rotation:0,scale:1,snapToPixel:void 0!==b.snapToPixel?b.snapToPixel:!0})}y(Zl,sk);l=Zl.prototype;l.Xb=function(){return this.l};
l.en=function(){return this.c};l.Ae=function(){return this.i};l.gc=function(){return this.a};l.Cd=function(){return 2};l.rd=function(){return this.o};l.Da=function(){return this.v};l.fn=function(){return this.b};l.Cb=function(){return this.O};l.gn=function(){return this.f};l.tf=za;l.load=za;l.Xf=za;
l.vh=function(b,c,d,e){c.setTransform(1,0,0,1,0,0);c.translate(d,e);c.beginPath();c.arc(b.size/2,b.size/2,this.b,0,2*Math.PI,!0);this.c&&(c.fillStyle=vg(this.c.a),c.fill());this.f&&(c.strokeStyle=b.strokeStyle,c.lineWidth=b.Id,b.lineDash&&c.setLineDash(b.lineDash),c.stroke());c.closePath()};
l.uh=function(b,c,d,e){c.setTransform(1,0,0,1,0,0);c.translate(d,e);c.beginPath();c.arc(b.size/2,b.size/2,this.b,0,2*Math.PI,!0);c.fillStyle=vg(Ql);c.fill();this.f&&(c.strokeStyle=b.strokeStyle,c.lineWidth=b.Id,b.lineDash&&c.setLineDash(b.lineDash),c.stroke());c.closePath()};l.Jb=function(){var b=this.f?this.f.Jb():"-",c=this.c?this.c.Jb():"-";this.g&&b==this.g[1]&&c==this.g[2]&&this.b==this.g[3]||(this.g=["c"+b+c+(void 0!==this.b?this.b.toString():"-"),b,c,this.b]);return this.g[0]};function $l(b){b=b||{};this.i=null;this.c=am;void 0!==b.geometry&&this.yh(b.geometry);this.g=void 0!==b.fill?b.fill:null;this.f=void 0!==b.image?b.image:null;this.b=void 0!==b.stroke?b.stroke:null;this.j=void 0!==b.text?b.text:null;this.a=b.zIndex}l=$l.prototype;l.X=function(){return this.i};l.Pj=function(){return this.c};l.vn=function(){return this.g};l.wn=function(){return this.f};l.xn=function(){return this.b};l.Ca=function(){return this.j};l.yn=function(){return this.a};
l.yh=function(b){ka(b)?this.c=b:ia(b)?this.c=function(c){return c.get(b)}:b?void 0!==b&&(this.c=function(){return b}):this.c=am;this.i=b};l.zn=function(b){this.a=b};function bm(b){if(!ka(b)){var c;c=ga(b)?b:[b];b=function(){return c}}return b}var cm=null;function dm(){if(!cm){var b=new Tl({color:"rgba(255,255,255,0.4)"}),c=new Yl({color:"#3399CC",width:1.25});cm=[new $l({image:new Zl({fill:b,stroke:c,radius:5}),fill:b,stroke:c})]}return cm}
function em(){var b={},c=[255,255,255,1],d=[0,153,255,1];b.Polygon=[new $l({fill:new Tl({color:[255,255,255,.5]})})];b.MultiPolygon=b.Polygon;b.LineString=[new $l({stroke:new Yl({color:c,width:5})}),new $l({stroke:new Yl({color:d,width:3})})];b.MultiLineString=b.LineString;b.Circle=b.Polygon.concat(b.LineString);b.Point=[new $l({image:new Zl({radius:6,fill:new Tl({color:d}),stroke:new Yl({color:c,width:1.5})}),zIndex:Infinity})];b.MultiPoint=b.Point;b.GeometryCollection=b.Polygon.concat(b.LineString,
b.Point);return b}function am(b){return b.X()};function H(b){b=b?b:{};var c=Tb(b);delete c.style;delete c.renderBuffer;delete c.updateWhileAnimating;delete c.updateWhileInteracting;ck.call(this,c);this.a=void 0!==b.renderBuffer?b.renderBuffer:100;this.v=null;this.b=void 0;this.c(b.style);this.j=void 0!==b.updateWhileAnimating?b.updateWhileAnimating:!1;this.l=void 0!==b.updateWhileInteracting?b.updateWhileInteracting:!1}y(H,ck);function fm(b){return b.get("renderOrder")}H.prototype.C=function(){return this.v};H.prototype.D=function(){return this.b};
H.prototype.c=function(b){this.v=void 0!==b?b:dm;this.b=null===b?void 0:bm(this.v);this.u()};function I(b){b=b?b:{};var c=Tb(b);delete c.preload;delete c.useInterimTilesOnError;H.call(this,c);this.T(b.preload?b.preload:0);this.V(b.useInterimTilesOnError?b.useInterimTilesOnError:!0)}y(I,H);I.prototype.g=function(){return this.get("preload")};I.prototype.U=function(){return this.get("useInterimTilesOnError")};I.prototype.T=function(b){this.set("preload",b)};I.prototype.V=function(b){this.set("useInterimTilesOnError",b)};function gm(b,c,d,e,f){this.v={};this.b=b;this.D=c;this.g=d;this.na=e;this.Yc=f;this.i=this.a=this.f=this.gb=this.oa=this.ga=null;this.wa=this.pa=this.B=this.T=this.U=this.va=0;this.hb=!1;this.j=this.Db=0;this.Eb=!1;this.V=0;this.c="";this.o=this.O=this.Od=this.nc=0;this.fa=this.G=this.l=null;this.C=[];this.Cc=Bd()}
function hm(b,c,d){if(b.i){c=af(c,0,d,2,b.na,b.C);d=b.b;var e=b.Cc,f=d.globalAlpha;1!=b.B&&(d.globalAlpha=f*b.B);var g=b.Db;b.hb&&(g+=b.Yc);var h,k;h=0;for(k=c.length;h<k;h+=2){var m=c[h]-b.va,n=c[h+1]-b.U;b.Eb&&(m=m+.5|0,n=n+.5|0);if(0!==g||1!=b.j){var p=m+b.va,q=n+b.U;gk(e,p,q,b.j,b.j,g,-p,-q);d.setTransform(e[0],e[1],e[4],e[5],e[12],e[13])}d.drawImage(b.i,b.pa,b.wa,b.V,b.T,m,n,b.V,b.T)}0===g&&1==b.j||d.setTransform(1,0,0,1,0,0);1!=b.B&&(d.globalAlpha=f)}}
function im(b,c,d,e){var f=0;if(b.fa&&""!==b.c){b.l&&jm(b,b.l);b.G&&km(b,b.G);var g=b.fa,h=b.b,k=b.gb;k?(k.font!=g.font&&(k.font=h.font=g.font),k.textAlign!=g.textAlign&&(k.textAlign=h.textAlign=g.textAlign),k.textBaseline!=g.textBaseline&&(k.textBaseline=h.textBaseline=g.textBaseline)):(h.font=g.font,h.textAlign=g.textAlign,h.textBaseline=g.textBaseline,b.gb={font:g.font,textAlign:g.textAlign,textBaseline:g.textBaseline});c=af(c,f,d,e,b.na,b.C);for(g=b.b;f<d;f+=e){h=c[f]+b.nc;k=c[f+1]+b.Od;if(0!==
b.O||1!=b.o){var m=gk(b.Cc,h,k,b.o,b.o,b.O,-h,-k);g.setTransform(m[0],m[1],m[4],m[5],m[12],m[13])}b.G&&g.strokeText(b.c,h,k);b.l&&g.fillText(b.c,h,k)}0===b.O&&1==b.o||g.setTransform(1,0,0,1,0,0)}}function lm(b,c,d,e,f,g){var h=b.b;b=af(c,d,e,f,b.na,b.C);h.moveTo(b[0],b[1]);for(c=2;c<b.length;c+=2)h.lineTo(b[c],b[c+1]);g&&h.lineTo(b[0],b[1]);return e}function mm(b,c,d,e,f){var g=b.b,h,k;h=0;for(k=e.length;h<k;++h)d=lm(b,c,d,e[h],f,!0),g.closePath();return d}l=gm.prototype;
l.md=function(b,c){var d=b.toString(),e=this.v[d];void 0!==e?e.push(c):this.v[d]=[c]};l.Gc=function(b){if(oe(this.g,b.J())){if(this.f||this.a){this.f&&jm(this,this.f);this.a&&km(this,this.a);var c;c=this.na;var d=this.C,e=b.ia();c=e?af(e,0,e.length,b.ra(),c,d):null;d=c[2]-c[0];e=c[3]-c[1];d=Math.sqrt(d*d+e*e);e=this.b;e.beginPath();e.arc(c[0],c[1],d,0,2*Math.PI);this.f&&e.fill();this.a&&e.stroke()}""!==this.c&&im(this,b.wd(),2,2)}};
l.jf=function(b,c){var d=(0,c.c)(b);if(d&&oe(this.g,d.J())){var e=c.a;void 0===e&&(e=0);this.md(e,function(b){b.bb(c.g,c.b);b.ub(c.f);b.cb(c.Ca());nm[d.W()].call(b,d,null)})}};l.Yd=function(b,c){var d=b.c,e,f;e=0;for(f=d.length;e<f;++e){var g=d[e];nm[g.W()].call(this,g,c)}};l.Hb=function(b){var c=b.ia();b=b.ra();this.i&&hm(this,c,c.length);""!==this.c&&im(this,c,c.length,b)};l.Gb=function(b){var c=b.ia();b=b.ra();this.i&&hm(this,c,c.length);""!==this.c&&im(this,c,c.length,b)};
l.Wb=function(b){if(oe(this.g,b.J())){if(this.a){km(this,this.a);var c=this.b,d=b.ia();c.beginPath();lm(this,d,0,d.length,b.ra(),!1);c.stroke()}""!==this.c&&(b=om(b),im(this,b,2,2))}};l.Hc=function(b){var c=b.J();if(oe(this.g,c)){if(this.a){km(this,this.a);var c=this.b,d=b.ia(),e=0,f=b.zb(),g=b.ra();c.beginPath();var h,k;h=0;for(k=f.length;h<k;++h)e=lm(this,d,e,f[h],g,!1);c.stroke()}""!==this.c&&(b=pm(b),im(this,b,b.length,2))}};
l.Jc=function(b){if(oe(this.g,b.J())){if(this.a||this.f){this.f&&jm(this,this.f);this.a&&km(this,this.a);var c=this.b;c.beginPath();mm(this,b.bc(),0,b.zb(),b.ra());this.f&&c.fill();this.a&&c.stroke()}""!==this.c&&(b=If(b),im(this,b,2,2))}};
l.Ic=function(b){if(oe(this.g,b.J())){if(this.a||this.f){this.f&&jm(this,this.f);this.a&&km(this,this.a);var c=this.b,d=rm(b),e=0,f=b.g,g=b.ra(),h,k;h=0;for(k=f.length;h<k;++h){var m=f[h];c.beginPath();e=mm(this,d,e,m,g);this.f&&c.fill();this.a&&c.stroke()}}""!==this.c&&(b=sm(b),im(this,b,b.length,2))}};function tm(b){var c=Object.keys(b.v).map(Number);c.sort(ub);var d,e,f,g,h;d=0;for(e=c.length;d<e;++d)for(f=b.v[c[d].toString()],g=0,h=f.length;g<h;++g)f[g](b)}
function jm(b,c){var d=b.b,e=b.ga;e?e.fillStyle!=c.fillStyle&&(e.fillStyle=d.fillStyle=c.fillStyle):(d.fillStyle=c.fillStyle,b.ga={fillStyle:c.fillStyle})}
function km(b,c){var d=b.b,e=b.oa;e?(e.lineCap!=c.lineCap&&(e.lineCap=d.lineCap=c.lineCap),Wi&&!rb(e.lineDash,c.lineDash)&&d.setLineDash(e.lineDash=c.lineDash),e.lineJoin!=c.lineJoin&&(e.lineJoin=d.lineJoin=c.lineJoin),e.lineWidth!=c.lineWidth&&(e.lineWidth=d.lineWidth=c.lineWidth),e.miterLimit!=c.miterLimit&&(e.miterLimit=d.miterLimit=c.miterLimit),e.strokeStyle!=c.strokeStyle&&(e.strokeStyle=d.strokeStyle=c.strokeStyle)):(d.lineCap=c.lineCap,Wi&&d.setLineDash(c.lineDash),d.lineJoin=c.lineJoin,d.lineWidth=
c.lineWidth,d.miterLimit=c.miterLimit,d.strokeStyle=c.strokeStyle,b.oa={lineCap:c.lineCap,lineDash:c.lineDash,lineJoin:c.lineJoin,lineWidth:c.lineWidth,miterLimit:c.miterLimit,strokeStyle:c.strokeStyle})}
l.bb=function(b,c){if(b){var d=b.a;this.f={fillStyle:vg(d?d:Ql)}}else this.f=null;if(c){var d=c.a,e=c.c,f=c.b,g=c.g,h=c.f,k=c.i;this.a={lineCap:void 0!==e?e:"round",lineDash:f?f:Rl,lineJoin:void 0!==g?g:"round",lineWidth:this.D*(void 0!==h?h:1),miterLimit:void 0!==k?k:10,strokeStyle:vg(d?d:Sl)}}else this.a=null};
l.ub=function(b){if(b){var c=b.Xb(),d=b.gc(1),e=b.Da(),f=b.Cb();this.va=c[0];this.U=c[1];this.T=f[1];this.i=d;this.B=b.B;this.pa=e[0];this.wa=e[1];this.hb=b.C;this.Db=b.G;this.j=b.j;this.Eb=b.D;this.V=f[0]}else this.i=null};
l.cb=function(b){if(b){var c=b.a;c?(c=c.a,this.l={fillStyle:vg(c?c:Ql)}):this.l=null;var d=b.j;if(d){var c=d.a,e=d.c,f=d.b,g=d.g,h=d.f,d=d.i;this.G={lineCap:void 0!==e?e:"round",lineDash:f?f:Rl,lineJoin:void 0!==g?g:"round",lineWidth:void 0!==h?h:1,miterLimit:void 0!==d?d:10,strokeStyle:vg(c?c:Sl)}}else this.G=null;var c=b.b,e=b.c,f=b.g,g=b.i,h=b.f,d=b.Ca(),k=b.l;b=b.o;this.fa={font:void 0!==c?c:"10px sans-serif",textAlign:void 0!==k?k:"center",textBaseline:void 0!==b?b:"middle"};this.c=void 0!==
d?d:"";this.nc=void 0!==e?this.D*e:0;this.Od=void 0!==f?this.D*f:0;this.O=void 0!==g?g:0;this.o=this.D*(void 0!==h?h:1)}else this.c=""};var nm={Point:gm.prototype.Hb,LineString:gm.prototype.Wb,Polygon:gm.prototype.Jc,MultiPoint:gm.prototype.Gb,MultiLineString:gm.prototype.Hc,MultiPolygon:gm.prototype.Ic,GeometryCollection:gm.prototype.Yd,Circle:gm.prototype.Gc};function um(b){jk.call(this,b);this.O=Bd()}y(um,jk);
um.prototype.G=function(b,c,d){vm(this,"precompose",d,b,void 0);var e=this.zd();if(e){var f=c.extent,g=void 0!==f;if(g){var h=b.pixelRatio,k=ge(f),m=fe(f),n=ee(f),f=de(f);ik(b.coordinateToPixelMatrix,k,k);ik(b.coordinateToPixelMatrix,m,m);ik(b.coordinateToPixelMatrix,n,n);ik(b.coordinateToPixelMatrix,f,f);d.save();d.beginPath();d.moveTo(k[0]*h,k[1]*h);d.lineTo(m[0]*h,m[1]*h);d.lineTo(n[0]*h,n[1]*h);d.lineTo(f[0]*h,f[1]*h);d.clip()}h=this.nf();k=d.globalAlpha;d.globalAlpha=c.opacity;0===b.viewState.rotation?
d.drawImage(e,0,0,+e.width,+e.height,Math.round(h[12]),Math.round(h[13]),Math.round(e.width*h[0]),Math.round(e.height*h[5])):(d.setTransform(h[0],h[1],h[4],h[5],h[12],h[13]),d.drawImage(e,0,0),d.setTransform(1,0,0,1,0,0));d.globalAlpha=k;g&&d.restore()}vm(this,"postcompose",d,b,void 0)};function vm(b,c,d,e,f){var g=b.a;cd(g,c)&&(b=void 0!==f?f:wm(b,e,0),b=new gm(d,e.pixelRatio,e.extent,b,e.viewState.rotation),g.s(new bk(c,g,b,e,d,null)),tm(b))}
function wm(b,c,d){var e=c.viewState,f=c.pixelRatio;return gk(b.O,f*c.size[0]/2,f*c.size[1]/2,f/e.resolution,-f/e.resolution,-e.rotation,-e.center[0]+d,-e.center[1])}function xm(b,c){var d=[0,0];ik(c,b,d);return d}
var ym=function(){var b=null,c=null;return function(d){if(!b){b=Ni(1,1);c=b.createImageData(1,1);var e=c.data;e[0]=42;e[1]=84;e[2]=126;e[3]=255}var e=b.canvas,f=d[0]<=e.width&&d[1]<=e.height;f||(e.width=d[0],e.height=d[1],e=d[0]-1,d=d[1]-1,b.putImageData(c,e,d),d=b.getImageData(e,d,1,1),f=rb(c.data,d.data));return f}}();var zm=["Polygon","LineString","Image","Text"];function Am(b,c,d){this.gb=b;this.V=c;this.c=null;this.g=0;this.resolution=d;this.U=this.va=null;this.f=[];this.coordinates=[];this.ga=Bd();this.a=[];this.fa=[];this.oa=Bd()}y(Am,ak);
function Bm(b,c,d,e,f,g){var h=b.coordinates.length,k=b.lf(),m=[c[d],c[d+1]],n=[NaN,NaN],p=!0,q,r,t;for(q=d+f;q<e;q+=f)n[0]=c[q],n[1]=c[q+1],t=Wd(k,n),t!==r?(p&&(b.coordinates[h++]=m[0],b.coordinates[h++]=m[1]),b.coordinates[h++]=n[0],b.coordinates[h++]=n[1],p=!1):1===t?(b.coordinates[h++]=n[0],b.coordinates[h++]=n[1],p=!1):p=!0,m[0]=n[0],m[1]=n[1],r=t;q===d+f&&(b.coordinates[h++]=m[0],b.coordinates[h++]=m[1]);g&&(b.coordinates[h++]=c[d],b.coordinates[h++]=c[d+1]);return h}
function Cm(b,c){b.va=[0,c,0];b.f.push(b.va);b.U=[0,c,0];b.a.push(b.U)}
function Dm(b,c,d,e,f,g,h,k,m){var n;hk(e,b.ga)?n=b.fa:(n=af(b.coordinates,0,b.coordinates.length,2,e,b.fa),Ed(b.ga,e));e=!Pb(g);var p=0,q=h.length,r=0,t;b=b.oa;for(var x,z,A,B;p<q;){var v=h[p],L,M,J,C;switch(v[0]){case 0:r=v[1];e&&g[w(r).toString()]||!r.X()?p=v[2]:void 0===m||oe(m,r.X().J())?++p:p=v[2];break;case 1:c.beginPath();++p;break;case 2:r=v[1];t=n[r];v=n[r+1];A=n[r+2]-t;r=n[r+3]-v;c.arc(t,v,Math.sqrt(A*A+r*r),0,2*Math.PI,!0);++p;break;case 3:c.closePath();++p;break;case 4:r=v[1];t=v[2];
L=v[3];J=v[4]*d;var sa=v[5]*d,la=v[6];M=v[7];var K=v[8],ma=v[9];A=v[11];B=v[12];var Ua=v[13],Nb=v[14];for(v[10]&&(A+=f);r<t;r+=2){v=n[r]-J;C=n[r+1]-sa;Ua&&(v=v+.5|0,C=C+.5|0);if(1!=B||0!==A){var na=v+J,Fa=C+sa;gk(b,na,Fa,B,B,A,-na,-Fa);c.setTransform(b[0],b[1],b[4],b[5],b[12],b[13])}na=c.globalAlpha;1!=M&&(c.globalAlpha=na*M);c.drawImage(L,K,ma,Nb,la,v,C,Nb*d,la*d);1!=M&&(c.globalAlpha=na);1==B&&0===A||c.setTransform(1,0,0,1,0,0)}++p;break;case 5:r=v[1];t=v[2];J=v[3];sa=v[4]*d;la=v[5]*d;A=v[6];B=
v[7]*d;L=v[8];for(M=v[9];r<t;r+=2){v=n[r]+sa;C=n[r+1]+la;if(1!=B||0!==A)gk(b,v,C,B,B,A,-v,-C),c.setTransform(b[0],b[1],b[4],b[5],b[12],b[13]);K=J.split("\n");ma=K.length;1<ma?(Ua=Math.round(1.5*c.measureText("M").width),C-=(ma-1)/2*Ua):Ua=0;for(Nb=0;Nb<ma;Nb++)na=K[Nb],M&&c.strokeText(na,v,C),L&&c.fillText(na,v,C),C+=Ua;1==B&&0===A||c.setTransform(1,0,0,1,0,0)}++p;break;case 6:if(void 0!==k&&(r=v[1],r=k(r)))return r;++p;break;case 7:c.fill();++p;break;case 8:r=v[1];t=v[2];v=n[r];C=n[r+1];A=v+.5|0;
B=C+.5|0;if(A!==x||B!==z)c.moveTo(v,C),x=A,z=B;for(r+=2;r<t;r+=2)if(v=n[r],C=n[r+1],A=v+.5|0,B=C+.5|0,A!==x||B!==z)c.lineTo(v,C),x=A,z=B;++p;break;case 9:c.fillStyle=v[1];++p;break;case 10:x=void 0!==v[7]?v[7]:!0;z=v[2];c.strokeStyle=v[1];c.lineWidth=x?z*d:z;c.lineCap=v[3];c.lineJoin=v[4];c.miterLimit=v[5];Wi&&c.setLineDash(v[6]);z=x=NaN;++p;break;case 11:c.font=v[1];c.textAlign=v[2];c.textBaseline=v[3];++p;break;case 12:c.stroke();++p;break;default:++p}}}
function Em(b){var c=b.a;c.reverse();var d,e=c.length,f,g,h=-1;for(d=0;d<e;++d)if(f=c[d],g=f[0],6==g)h=d;else if(0==g){f[2]=d;f=b.a;for(g=d;h<g;){var k=f[h];f[h]=f[g];f[g]=k;++h;--g}h=-1}}function Fm(b,c){b.va[2]=b.f.length;b.va=null;b.U[2]=b.a.length;b.U=null;var d=[6,c];b.f.push(d);b.a.push(d)}Am.prototype.we=za;Am.prototype.lf=function(){return this.V};
function Gm(b,c,d){Am.call(this,b,c,d);this.l=this.T=null;this.na=this.O=this.D=this.C=this.v=this.B=this.G=this.o=this.j=this.i=this.b=void 0}y(Gm,Am);Gm.prototype.Hb=function(b,c){if(this.l){Cm(this,c);var d=b.ia(),e=this.coordinates.length,d=Bm(this,d,0,d.length,b.ra(),!1);this.f.push([4,e,d,this.l,this.b,this.i,this.j,this.o,this.G,this.B,this.v,this.C,this.D,this.O,this.na]);this.a.push([4,e,d,this.T,this.b,this.i,this.j,this.o,this.G,this.B,this.v,this.C,this.D,this.O,this.na]);Fm(this,c)}};
Gm.prototype.Gb=function(b,c){if(this.l){Cm(this,c);var d=b.ia(),e=this.coordinates.length,d=Bm(this,d,0,d.length,b.ra(),!1);this.f.push([4,e,d,this.l,this.b,this.i,this.j,this.o,this.G,this.B,this.v,this.C,this.D,this.O,this.na]);this.a.push([4,e,d,this.T,this.b,this.i,this.j,this.o,this.G,this.B,this.v,this.C,this.D,this.O,this.na]);Fm(this,c)}};Gm.prototype.we=function(){Em(this);this.i=this.b=void 0;this.l=this.T=null;this.na=this.O=this.C=this.v=this.B=this.G=this.o=this.D=this.j=void 0};
Gm.prototype.ub=function(b){var c=b.Xb(),d=b.Cb(),e=b.Ae(1),f=b.gc(1),g=b.Da();this.b=c[0];this.i=c[1];this.T=e;this.l=f;this.j=d[1];this.o=b.B;this.G=g[0];this.B=g[1];this.v=b.C;this.C=b.G;this.D=b.j;this.O=b.D;this.na=d[0]};function Hm(b,c,d){Am.call(this,b,c,d);this.b={jd:void 0,dd:void 0,ed:null,fd:void 0,gd:void 0,hd:void 0,sf:0,strokeStyle:void 0,lineCap:void 0,lineDash:null,lineJoin:void 0,lineWidth:void 0,miterLimit:void 0}}y(Hm,Am);
function Im(b,c,d,e,f){var g=b.coordinates.length;c=Bm(b,c,d,e,f,!1);g=[8,g,c];b.f.push(g);b.a.push(g);return e}l=Hm.prototype;l.lf=function(){this.c||(this.c=Rd(this.V),0<this.g&&Qd(this.c,this.resolution*(this.g+1)/2,this.c));return this.c};
function Jm(b){var c=b.b,d=c.strokeStyle,e=c.lineCap,f=c.lineDash,g=c.lineJoin,h=c.lineWidth,k=c.miterLimit;c.jd==d&&c.dd==e&&rb(c.ed,f)&&c.fd==g&&c.gd==h&&c.hd==k||(c.sf!=b.coordinates.length&&(b.f.push([12]),c.sf=b.coordinates.length),b.f.push([10,d,h,e,g,k,f],[1]),c.jd=d,c.dd=e,c.ed=f,c.fd=g,c.gd=h,c.hd=k)}
l.Wb=function(b,c){var d=this.b,e=d.lineWidth;void 0!==d.strokeStyle&&void 0!==e&&(Jm(this),Cm(this,c),this.a.push([10,d.strokeStyle,d.lineWidth,d.lineCap,d.lineJoin,d.miterLimit,d.lineDash],[1]),d=b.ia(),Im(this,d,0,d.length,b.ra()),this.a.push([12]),Fm(this,c))};
l.Hc=function(b,c){var d=this.b,e=d.lineWidth;if(void 0!==d.strokeStyle&&void 0!==e){Jm(this);Cm(this,c);this.a.push([10,d.strokeStyle,d.lineWidth,d.lineCap,d.lineJoin,d.miterLimit,d.lineDash],[1]);var d=b.zb(),e=b.ia(),f=b.ra(),g=0,h,k;h=0;for(k=d.length;h<k;++h)g=Im(this,e,g,d[h],f);this.a.push([12]);Fm(this,c)}};l.we=function(){this.b.sf!=this.coordinates.length&&this.f.push([12]);Em(this);this.b=null};
l.bb=function(b,c){var d=c.a;this.b.strokeStyle=vg(d?d:Sl);d=c.c;this.b.lineCap=void 0!==d?d:"round";d=c.b;this.b.lineDash=d?d:Rl;d=c.g;this.b.lineJoin=void 0!==d?d:"round";d=c.f;this.b.lineWidth=void 0!==d?d:1;d=c.i;this.b.miterLimit=void 0!==d?d:10;this.b.lineWidth>this.g&&(this.g=this.b.lineWidth,this.c=null)};
function Km(b,c,d){Am.call(this,b,c,d);this.b={qg:void 0,jd:void 0,dd:void 0,ed:null,fd:void 0,gd:void 0,hd:void 0,fillStyle:void 0,strokeStyle:void 0,lineCap:void 0,lineDash:null,lineJoin:void 0,lineWidth:void 0,miterLimit:void 0}}y(Km,Am);
function Lm(b,c,d,e,f){var g=b.b,h=[1];b.f.push(h);b.a.push(h);var k,h=0;for(k=e.length;h<k;++h){var m=e[h],n=b.coordinates.length;d=Bm(b,c,d,m,f,!0);d=[8,n,d];n=[3];b.f.push(d,n);b.a.push(d,n);d=m}c=[7];b.a.push(c);void 0!==g.fillStyle&&b.f.push(c);void 0!==g.strokeStyle&&(g=[12],b.f.push(g),b.a.push(g));return d}l=Km.prototype;
l.Gc=function(b,c){var d=this.b,e=d.strokeStyle;if(void 0!==d.fillStyle||void 0!==e){Mm(this);Cm(this,c);this.a.push([9,vg(Ql)]);void 0!==d.strokeStyle&&this.a.push([10,d.strokeStyle,d.lineWidth,d.lineCap,d.lineJoin,d.miterLimit,d.lineDash]);var f=b.ia(),e=this.coordinates.length;Bm(this,f,0,f.length,b.ra(),!1);f=[1];e=[2,e];this.f.push(f,e);this.a.push(f,e);e=[7];this.a.push(e);void 0!==d.fillStyle&&this.f.push(e);void 0!==d.strokeStyle&&(d=[12],this.f.push(d),this.a.push(d));Fm(this,c)}};
l.Jc=function(b,c){var d=this.b,e=d.strokeStyle;if(void 0!==d.fillStyle||void 0!==e)Mm(this),Cm(this,c),this.a.push([9,vg(Ql)]),void 0!==d.strokeStyle&&this.a.push([10,d.strokeStyle,d.lineWidth,d.lineCap,d.lineJoin,d.miterLimit,d.lineDash]),d=b.zb(),e=b.bc(),Lm(this,e,0,d,b.ra()),Fm(this,c)};
l.Ic=function(b,c){var d=this.b,e=d.strokeStyle;if(void 0!==d.fillStyle||void 0!==e){Mm(this);Cm(this,c);this.a.push([9,vg(Ql)]);void 0!==d.strokeStyle&&this.a.push([10,d.strokeStyle,d.lineWidth,d.lineCap,d.lineJoin,d.miterLimit,d.lineDash]);var d=b.g,e=rm(b),f=b.ra(),g=0,h,k;h=0;for(k=d.length;h<k;++h)g=Lm(this,e,g,d[h],f);Fm(this,c)}};l.we=function(){Em(this);this.b=null;var b=this.gb;if(0!==b){var c=this.coordinates,d,e;d=0;for(e=c.length;d<e;++d)c[d]=b*Math.round(c[d]/b)}};
l.lf=function(){this.c||(this.c=Rd(this.V),0<this.g&&Qd(this.c,this.resolution*(this.g+1)/2,this.c));return this.c};
l.bb=function(b,c){var d=this.b;if(b){var e=b.a;d.fillStyle=vg(e?e:Ql)}else d.fillStyle=void 0;c?(e=c.a,d.strokeStyle=vg(e?e:Sl),e=c.c,d.lineCap=void 0!==e?e:"round",e=c.b,d.lineDash=e?e.slice():Rl,e=c.g,d.lineJoin=void 0!==e?e:"round",e=c.f,d.lineWidth=void 0!==e?e:1,e=c.i,d.miterLimit=void 0!==e?e:10,d.lineWidth>this.g&&(this.g=d.lineWidth,this.c=null)):(d.strokeStyle=void 0,d.lineCap=void 0,d.lineDash=null,d.lineJoin=void 0,d.lineWidth=void 0,d.miterLimit=void 0)};
function Mm(b){var c=b.b,d=c.fillStyle,e=c.strokeStyle,f=c.lineCap,g=c.lineDash,h=c.lineJoin,k=c.lineWidth,m=c.miterLimit;void 0!==d&&c.qg!=d&&(b.f.push([9,d]),c.qg=c.fillStyle);void 0===e||c.jd==e&&c.dd==f&&c.ed==g&&c.fd==h&&c.gd==k&&c.hd==m||(b.f.push([10,e,k,f,h,m,g]),c.jd=e,c.dd=f,c.ed=g,c.fd=h,c.gd=k,c.hd=m)}function Nm(b,c,d){Am.call(this,b,c,d);this.O=this.D=this.C=null;this.l="";this.v=this.B=this.G=this.o=0;this.j=this.i=this.b=null}y(Nm,Am);
Nm.prototype.Ib=function(b,c,d,e,f,g){if(""!==this.l&&this.j&&(this.b||this.i)){if(this.b){f=this.b;var h=this.C;if(!h||h.fillStyle!=f.fillStyle){var k=[9,f.fillStyle];this.f.push(k);this.a.push(k);h?h.fillStyle=f.fillStyle:this.C={fillStyle:f.fillStyle}}}this.i&&(f=this.i,h=this.D,h&&h.lineCap==f.lineCap&&h.lineDash==f.lineDash&&h.lineJoin==f.lineJoin&&h.lineWidth==f.lineWidth&&h.miterLimit==f.miterLimit&&h.strokeStyle==f.strokeStyle||(k=[10,f.strokeStyle,f.lineWidth,f.lineCap,f.lineJoin,f.miterLimit,
f.lineDash,!1],this.f.push(k),this.a.push(k),h?(h.lineCap=f.lineCap,h.lineDash=f.lineDash,h.lineJoin=f.lineJoin,h.lineWidth=f.lineWidth,h.miterLimit=f.miterLimit,h.strokeStyle=f.strokeStyle):this.D={lineCap:f.lineCap,lineDash:f.lineDash,lineJoin:f.lineJoin,lineWidth:f.lineWidth,miterLimit:f.miterLimit,strokeStyle:f.strokeStyle}));f=this.j;h=this.O;h&&h.font==f.font&&h.textAlign==f.textAlign&&h.textBaseline==f.textBaseline||(k=[11,f.font,f.textAlign,f.textBaseline],this.f.push(k),this.a.push(k),h?
(h.font=f.font,h.textAlign=f.textAlign,h.textBaseline=f.textBaseline):this.O={font:f.font,textAlign:f.textAlign,textBaseline:f.textBaseline});Cm(this,g);f=this.coordinates.length;b=Bm(this,b,c,d,e,!1);b=[5,f,b,this.l,this.o,this.G,this.B,this.v,!!this.b,!!this.i];this.f.push(b);this.a.push(b);Fm(this,g)}};
Nm.prototype.cb=function(b){if(b){var c=b.a;c?(c=c.a,c=vg(c?c:Ql),this.b?this.b.fillStyle=c:this.b={fillStyle:c}):this.b=null;var d=b.j;if(d){var c=d.a,e=d.c,f=d.b,g=d.g,h=d.f,d=d.i,e=void 0!==e?e:"round",f=f?f.slice():Rl,g=void 0!==g?g:"round",h=void 0!==h?h:1,d=void 0!==d?d:10,c=vg(c?c:Sl);if(this.i){var k=this.i;k.lineCap=e;k.lineDash=f;k.lineJoin=g;k.lineWidth=h;k.miterLimit=d;k.strokeStyle=c}else this.i={lineCap:e,lineDash:f,lineJoin:g,lineWidth:h,miterLimit:d,strokeStyle:c}}else this.i=null;
var m=b.b,c=b.c,e=b.g,f=b.i,h=b.f,d=b.Ca(),g=b.l,k=b.o;b=void 0!==m?m:"10px sans-serif";g=void 0!==g?g:"center";k=void 0!==k?k:"middle";this.j?(m=this.j,m.font=b,m.textAlign=g,m.textBaseline=k):this.j={font:b,textAlign:g,textBaseline:k};this.l=void 0!==d?d:"";this.o=void 0!==c?c:0;this.G=void 0!==e?e:0;this.B=void 0!==f?f:0;this.v=void 0!==h?h:1}else this.l=""};function Om(b,c,d,e){this.G=b;this.g=c;this.o=d;this.i=e;this.f={};this.j=Ni(1,1);this.l=Bd()}
function Pm(b){for(var c in b.f){var d=b.f[c],e;for(e in d)d[e].we()}}Om.prototype.c=function(b,c,d,e,f){var g=this.l;gk(g,.5,.5,1/c,-1/c,-d,-b[0],-b[1]);var h=this.j;h.clearRect(0,0,1,1);var k;void 0!==this.i&&(k=Md(),Nd(k,b),Qd(k,c*this.i,k));return Qm(this,h,g,d,e,function(b){if(0<h.getImageData(0,0,1,1).data[3]){if(b=f(b))return b;h.clearRect(0,0,1,1)}},k)};
Om.prototype.a=function(b,c){var d=void 0!==b?b.toString():"0",e=this.f[d];void 0===e&&(e={},this.f[d]=e);d=e[c];void 0===d&&(d=new Rm[c](this.G,this.g,this.o),e[c]=d);return d};Om.prototype.La=function(){return Pb(this.f)};
Om.prototype.b=function(b,c,d,e,f){var g=Object.keys(this.f).map(Number);g.sort(ub);var h=this.g,k=h[0],m=h[1],n=h[2],h=h[3],k=[k,m,k,h,n,h,n,m];af(k,0,8,2,d,k);b.save();b.beginPath();b.moveTo(k[0],k[1]);b.lineTo(k[2],k[3]);b.lineTo(k[4],k[5]);b.lineTo(k[6],k[7]);b.closePath();b.clip();for(var p,q,k=0,m=g.length;k<m;++k)for(p=this.f[g[k].toString()],n=0,h=zm.length;n<h;++n)q=p[zm[n]],void 0!==q&&Dm(q,b,c,d,e,f,q.f,void 0);b.restore()};
function Qm(b,c,d,e,f,g,h){var k=Object.keys(b.f).map(Number);k.sort(function(b,c){return c-b});var m,n,p,q,r;m=0;for(n=k.length;m<n;++m)for(q=b.f[k[m].toString()],p=zm.length-1;0<=p;--p)if(r=q[zm[p]],void 0!==r&&(r=Dm(r,c,1,d,e,f,r.a,g,h)))return r}var Rm={Image:Gm,LineString:Hm,Polygon:Km,Text:Nm};function Sm(b,c,d,e){this.b=b;this.a=c;this.g=d;this.c=e}l=Sm.prototype;l.get=function(b){return this.c[b]};l.zb=function(){return this.g};l.J=function(){this.f||(this.f="Point"===this.b?Xd(this.a):Yd(this.a,0,this.a.length,2));return this.f};l.ia=Sm.prototype.bc=function(){return this.a};l.X=function(){return this};l.Cm=function(){return this.c};l.td=Sm.prototype.X;l.ra=function(){return 2};l.ac=za;l.W=function(){return this.b};function Tm(b,c){return w(b)-w(c)}function Um(b,c){var d=.5*b/c;return d*d}function Vm(b,c,d,e,f,g){var h=!1,k,m;if(k=d.f)m=k.Cd(),2==m||3==m?k.Xf(f,g):(0==m&&k.load(),k.tf(f,g),h=!0);if(f=(0,d.c)(c))e=f.td(e),(0,Wm[e.W()])(b,e,d,c);return h}
var Wm={Point:function(b,c,d,e){var f=d.f;if(f){if(2!=f.Cd())return;var g=b.a(d.a,"Image");g.ub(f);g.Hb(c,e)}if(f=d.Ca())b=b.a(d.a,"Text"),b.cb(f),b.Ib(c.ia(),0,2,2,c,e)},LineString:function(b,c,d,e){var f=d.b;if(f){var g=b.a(d.a,"LineString");g.bb(null,f);g.Wb(c,e)}if(f=d.Ca())b=b.a(d.a,"Text"),b.cb(f),b.Ib(om(c),0,2,2,c,e)},Polygon:function(b,c,d,e){var f=d.g,g=d.b;if(f||g){var h=b.a(d.a,"Polygon");h.bb(f,g);h.Jc(c,e)}if(f=d.Ca())b=b.a(d.a,"Text"),b.cb(f),b.Ib(If(c),0,2,2,c,e)},MultiPoint:function(b,
c,d,e){var f=d.f;if(f){if(2!=f.Cd())return;var g=b.a(d.a,"Image");g.ub(f);g.Gb(c,e)}if(f=d.Ca())b=b.a(d.a,"Text"),b.cb(f),d=c.ia(),b.Ib(d,0,d.length,c.ra(),c,e)},MultiLineString:function(b,c,d,e){var f=d.b;if(f){var g=b.a(d.a,"LineString");g.bb(null,f);g.Hc(c,e)}if(f=d.Ca())b=b.a(d.a,"Text"),b.cb(f),d=pm(c),b.Ib(d,0,d.length,2,c,e)},MultiPolygon:function(b,c,d,e){var f=d.g,g=d.b;if(g||f){var h=b.a(d.a,"Polygon");h.bb(f,g);h.Ic(c,e)}if(f=d.Ca())b=b.a(d.a,"Text"),b.cb(f),d=sm(c),b.Ib(d,0,d.length,2,
c,e)},GeometryCollection:function(b,c,d,e){c=c.c;var f,g;f=0;for(g=c.length;f<g;++f)(0,Wm[c[f].W()])(b,c[f],d,e)},Circle:function(b,c,d,e){var f=d.g,g=d.b;if(f||g){var h=b.a(d.a,"Polygon");h.bb(f,g);h.Gc(c,e)}if(f=d.Ca())b=b.a(d.a,"Text"),b.cb(f),b.Ib(c.wd(),0,2,2,c,e)}};function Xm(b,c,d,e,f,g){this.g=void 0!==g?g:null;ek.call(this,b,c,d,void 0!==g?0:2,e);this.c=f;this.f=null}y(Xm,ek);Xm.prototype.getError=function(){return this.f};Xm.prototype.j=function(b){b?(this.f=b,this.state=3):this.state=2;fk(this)};Xm.prototype.load=function(){0==this.state&&(this.state=1,fk(this),this.g(ua(this.j,this)))};Xm.prototype.a=function(){return this.c};var Ym=!((Hb("Chrome")||Hb("CriOS"))&&!Hb("Opera")&&!Hb("OPR")&&!Hb("Edge"))||Hb("iPhone")&&!Hb("iPod")&&!Hb("iPad")||Hb("iPad")||Hb("iPod");function Zm(b,c,d,e){var f=Ye(d,c,b);d=c.getPointResolution(e,d);c=c.Kc();void 0!==c&&(d*=c);c=b.Kc();void 0!==c&&(d/=c);b=b.getPointResolution(d,f)/d;isFinite(b)&&!isNaN(b)&&0<b&&(d/=b);return d}function $m(b,c,d,e){b=d-b;c=e-c;var f=Math.sqrt(b*b+c*c);return[Math.round(d+b/f),Math.round(e+c/f)]}
function an(b,c,d,e,f,g,h,k,m,n){var p=Ni(Math.round(d*b),Math.round(d*c));if(0===m.length)return p.canvas;p.scale(d,d);var q=Md();m.forEach(function(b){be(q,b.extent)});var r=Ni(Math.round(d*je(q)/e),Math.round(d*ke(q)/e));r.scale(d/e,d/e);r.translate(-q[0],q[3]);m.forEach(function(b){r.drawImage(b.image,b.extent[0],-b.extent[3],je(b.extent),ke(b.extent))});var t=ge(h);k.c.forEach(function(b){var c=b.source,f=b.target,h=c[1][0],k=c[1][1],m=c[2][0],n=c[2][1];b=(f[0][0]-t[0])/g;var J=-(f[0][1]-t[1])/
g,C=(f[1][0]-t[0])/g,sa=-(f[1][1]-t[1])/g,la=(f[2][0]-t[0])/g,K=-(f[2][1]-t[1])/g,f=c[0][0],c=c[0][1],h=h-f,k=k-c,m=m-f,n=n-c;a:{h=[[h,k,0,0,C-b],[m,n,0,0,la-b],[0,0,h,k,sa-J],[0,0,m,n,K-J]];k=h.length;for(m=0;m<k;m++){for(var n=m,ma=Math.abs(h[m][m]),Ua=m+1;Ua<k;Ua++){var Nb=Math.abs(h[Ua][m]);Nb>ma&&(ma=Nb,n=Ua)}if(0===ma){h=null;break a}ma=h[n];h[n]=h[m];h[m]=ma;for(n=m+1;n<k;n++)for(ma=-h[n][m]/h[m][m],Ua=m;Ua<k+1;Ua++)h[n][Ua]=m==Ua?0:h[n][Ua]+ma*h[m][Ua]}m=Array(k);for(n=k-1;0<=n;n--)for(m[n]=
h[n][k]/h[n][n],ma=n-1;0<=ma;ma--)h[ma][k]-=h[ma][n]*m[n];h=m}h&&(p.save(),p.beginPath(),Ym?(m=(b+C+la)/3,n=(J+sa+K)/3,k=$m(m,n,b,J),C=$m(m,n,C,sa),la=$m(m,n,la,K),p.moveTo(k[0],k[1]),p.lineTo(C[0],C[1]),p.lineTo(la[0],la[1])):(p.moveTo(b,J),p.lineTo(C,sa),p.lineTo(la,K)),p.closePath(),p.clip(),p.transform(h[0],h[2],h[1],h[3],b,J),p.translate(q[0]-f,q[3]-c),p.scale(e/d,-e/d),p.drawImage(r.canvas,0,0),p.restore())});n&&(p.save(),p.strokeStyle="black",p.lineWidth=1,k.c.forEach(function(b){var c=b.target;
b=(c[0][0]-t[0])/g;var d=-(c[0][1]-t[1])/g,e=(c[1][0]-t[0])/g,f=-(c[1][1]-t[1])/g,h=(c[2][0]-t[0])/g,c=-(c[2][1]-t[1])/g;p.beginPath();p.moveTo(b,d);p.lineTo(e,f);p.lineTo(h,c);p.closePath();p.stroke()}),p.restore());return p.canvas};function bn(b,c,d,e,f){this.b=b;this.g=c;var g={},h=We(this.g,this.b);this.f=function(b){var c=b[0]+"/"+b[1];g[c]||(g[c]=h(b));return g[c]};this.i=e;this.G=f*f;this.c=[];this.l=!1;this.o=this.b.b&&!!e&&!!this.b.J()&&je(e)==je(this.b.J());this.a=this.b.J()?je(this.b.J()):null;this.j=this.g.J()?je(this.g.J()):null;b=ge(d);c=fe(d);e=ee(d);d=de(d);f=this.f(b);var k=this.f(c),m=this.f(e),n=this.f(d);cn(this,b,c,e,d,f,k,m,n,10);if(this.l){var p=Infinity;this.c.forEach(function(b){p=Math.min(p,b.source[0][0],
b.source[1][0],b.source[2][0])});this.c.forEach(function(b){if(Math.max(b.source[0][0],b.source[1][0],b.source[2][0])-p>this.a/2){var c=[[b.source[0][0],b.source[0][1]],[b.source[1][0],b.source[1][1]],[b.source[2][0],b.source[2][1]]];c[0][0]-p>this.a/2&&(c[0][0]-=this.a);c[1][0]-p>this.a/2&&(c[1][0]-=this.a);c[2][0]-p>this.a/2&&(c[2][0]-=this.a);Math.max(c[0][0],c[1][0],c[2][0])-Math.min(c[0][0],c[1][0],c[2][0])<this.a/2&&(b.source=c)}},this)}g={}}
function cn(b,c,d,e,f,g,h,k,m,n){var p=Ld([g,h,k,m]),q=b.a?je(p)/b.a:null,r=b.b.b&&.5<q&&1>q,t=!1;if(0<n){if(b.g.c&&b.j)var x=Ld([c,d,e,f]),t=t|.25<je(x)/b.j;!r&&b.b.c&&q&&(t|=.25<q)}if(t||!b.i||oe(p,b.i)){if(!(t||isFinite(g[0])&&isFinite(g[1])&&isFinite(h[0])&&isFinite(h[1])&&isFinite(k[0])&&isFinite(k[1])&&isFinite(m[0])&&isFinite(m[1])))if(0<n)t=!0;else return;if(0<n&&(t||(q=b.f([(c[0]+e[0])/2,(c[1]+e[1])/2]),p=r?(nd(g[0],b.a)+nd(k[0],b.a))/2-nd(q[0],b.a):(g[0]+k[0])/2-q[0],q=(g[1]+k[1])/2-q[1],
t=p*p+q*q>b.G),t)){Math.abs(c[0]-e[0])<=Math.abs(c[1]-e[1])?(r=[(d[0]+e[0])/2,(d[1]+e[1])/2],p=b.f(r),q=[(f[0]+c[0])/2,(f[1]+c[1])/2],t=b.f(q),cn(b,c,d,r,q,g,h,p,t,n-1),cn(b,q,r,e,f,t,p,k,m,n-1)):(r=[(c[0]+d[0])/2,(c[1]+d[1])/2],p=b.f(r),q=[(e[0]+f[0])/2,(e[1]+f[1])/2],t=b.f(q),cn(b,c,r,q,f,g,p,t,m,n-1),cn(b,r,d,e,q,p,h,k,t,n-1));return}if(r){if(!b.o)return;b.l=!0}b.c.push({source:[g,k,m],target:[c,e,f]});b.c.push({source:[g,h,k],target:[c,d,e]})}}
function dn(b){var c=Md();b.c.forEach(function(b){b=b.source;Nd(c,b[0]);Nd(c,b[1]);Nd(c,b[2])});return c};function en(b,c,d,e,f,g){this.v=c;this.B=b.J();var h=c.J(),k=h?ne(d,h):d,h=Zm(b,c,le(k),e);this.o=new bn(b,c,k,this.B,.5*h);this.j=e;this.g=d;b=dn(this.o);this.G=(this.f=g(b,h,f))?this.f.b:1;this.c=this.l=null;f=2;g=[];this.f&&(f=0,g=this.f.i);ek.call(this,d,e,this.G,f,g)}y(en,ek);en.prototype.Y=function(){1==this.state&&(Wc(this.c),this.c=null);en.ca.Y.call(this)};en.prototype.a=function(){return this.l};
function fn(b){var c=b.f.state;2==c&&(b.l=an(je(b.g)/b.j,ke(b.g)/b.j,b.G,b.f.$(),0,b.j,b.g,b.o,[{extent:b.f.J(),image:b.f.a()}]));b.state=c;fk(b)}en.prototype.load=function(){if(0==this.state){this.state=1;fk(this);var b=this.f.state;2==b||3==b?fn(this):(this.c=this.f.Ra("change",function(){var b=this.f.state;if(2==b||3==b)Wc(this.c),this.c=null,fn(this)},!1,this),this.f.load())}};function gn(b){wh.call(this,{attributions:b.attributions,extent:b.extent,logo:b.logo,projection:b.projection,state:b.state});this.D=void 0!==b.resolutions?b.resolutions:null;this.a=null;this.oa=0}y(gn,wh);function hn(b,c){if(b.D){var d=wb(b.D,c,0);c=b.D[d]}return c}
gn.prototype.C=function(b,c,d,e){var f=this.b;if(f&&e&&!Ve(f,e)){if(this.a){if(this.oa==this.f&&Ve(this.a.v,e)&&this.a.$()==c&&this.a.b==d&&ae(this.a.J(),b))return this.a;this.a.Fc();this.a=null}this.a=new en(f,e,b,c,d,ua(function(b,c,d){return this.qd(b,c,d,f)},this));this.oa=this.f;return this.a}f&&(e=f);return this.qd(b,c,d,e)};gn.prototype.l=function(b){b=b.target;switch(b.state){case 1:this.s(new jn(kn,b));break;case 2:this.s(new jn(ln,b));break;case 3:this.s(new jn(mn,b))}};
function nn(b,c){b.a().src=c}function jn(b,c){tc.call(this,b);this.image=c}y(jn,tc);var kn="imageloadstart",ln="imageloadend",mn="imageloaderror";function on(b){gn.call(this,{attributions:b.attributions,logo:b.logo,projection:b.projection,resolutions:b.resolutions,state:void 0!==b.state?b.state:void 0});this.ga=b.canvasFunction;this.V=null;this.fa=0;this.pa=void 0!==b.ratio?b.ratio:1.5}y(on,gn);on.prototype.qd=function(b,c,d,e){c=hn(this,c);var f=this.V;if(f&&this.fa==this.f&&f.$()==c&&f.b==d&&Vd(f.J(),b))return f;b=b.slice();pe(b,this.pa);(e=this.ga(b,c,d,[je(b)/c*d,ke(b)/c*d],e))&&(f=new Xm(b,c,d,this.i,e));this.V=f;this.fa=this.f;return f};function pn(b){gd.call(this);this.xa=void 0;this.a="geometry";this.c=null;this.g=void 0;this.b=null;D(this,id(this.a),this.he,!1,this);void 0!==b&&(b instanceof $e||!b?this.Ma(b):this.I(b))}y(pn,gd);l=pn.prototype;l.clone=function(){var b=new pn(this.R());b.yc(this.a);var c=this.X();c&&b.Ma(c.clone());(c=this.c)&&b.wf(c);return b};l.X=function(){return this.get(this.a)};l.Oa=function(){return this.xa};l.Qj=function(){return this.a};l.zl=function(){return this.c};l.ac=function(){return this.g};
l.Al=function(){this.u()};l.he=function(){this.b&&(Wc(this.b),this.b=null);var b=this.X();b&&(this.b=D(b,"change",this.Al,!1,this));this.u()};l.Ma=function(b){this.set(this.a,b)};l.wf=function(b){this.g=(this.c=b)?qn(b):void 0;this.u()};l.jc=function(b){this.xa=b;this.u()};l.yc=function(b){Vc(this,id(this.a),this.he,!1,this);this.a=b;D(this,id(this.a),this.he,!1,this);this.he()};function qn(b){if(!ka(b)){var c;c=ga(b)?b:[b];b=function(){return c}}return b};function rn(b){b.prototype.then=b.prototype.then;b.prototype.$goog_Thenable=!0}function sn(b){if(!b)return!1;try{return!!b.$goog_Thenable}catch(c){return!1}};function tn(b,c,d){this.c=d;this.b=b;this.g=c;this.f=0;this.a=null}tn.prototype.get=function(){var b;0<this.f?(this.f--,b=this.a,this.a=b.next,b.next=null):b=this.b();return b};function un(b,c){b.g(c);b.f<b.c&&(b.f++,c.next=b.a,b.a=c)};function vn(){this.f=this.a=null}var xn=new tn(function(){return new wn},function(b){b.reset()},100);vn.prototype.add=function(b,c){var d=xn.get();d.set(b,c);this.f?this.f.next=d:this.a=d;this.f=d};vn.prototype.remove=function(){var b=null;this.a&&(b=this.a,this.a=this.a.next,this.a||(this.f=null),b.next=null);return b};function wn(){this.next=this.f=this.a=null}wn.prototype.set=function(b,c){this.a=b;this.f=c;this.next=null};wn.prototype.reset=function(){this.next=this.f=this.a=null};function yn(b,c){zn||An();Bn||(zn(),Bn=!0);Cn.add(b,c)}var zn;function An(){if(ba.Promise&&ba.Promise.resolve){var b=ba.Promise.resolve(void 0);zn=function(){b.then(Dn)}}else zn=function(){li(Dn)}}var Bn=!1,Cn=new vn;function Dn(){for(var b=null;b=Cn.remove();){try{b.a.call(b.f)}catch(c){ki(c)}un(xn,b)}Bn=!1};function En(b,c){this.a=Fn;this.j=void 0;this.c=this.f=this.b=null;this.g=this.i=!1;if(b!=da)try{var d=this;b.call(c,function(b){Gn(d,Hn,b)},function(b){Gn(d,In,b)})}catch(e){Gn(this,In,e)}}var Fn=0,Hn=2,In=3;function Jn(){this.next=this.b=this.f=this.c=this.a=null;this.g=!1}Jn.prototype.reset=function(){this.b=this.f=this.c=this.a=null;this.g=!1};var Kn=new tn(function(){return new Jn},function(b){b.reset()},100);function Ln(b,c,d){var e=Kn.get();e.c=b;e.f=c;e.b=d;return e}
En.prototype.then=function(b,c,d){return Mn(this,ka(b)?b:null,ka(c)?c:null,d)};rn(En);En.prototype.cancel=function(b){this.a==Fn&&yn(function(){var c=new Nn(b);On(this,c)},this)};function On(b,c){if(b.a==Fn)if(b.b){var d=b.b;if(d.f){for(var e=0,f=null,g=null,h=d.f;h&&(h.g||(e++,h.a==b&&(f=h),!(f&&1<e)));h=h.next)f||(g=h);f&&(d.a==Fn&&1==e?On(d,c):(g?(e=g,e.next==d.c&&(d.c=e),e.next=e.next.next):Pn(d),Qn(d,f,In,c)))}b.b=null}else Gn(b,In,c)}
function Rn(b,c){b.f||b.a!=Hn&&b.a!=In||Sn(b);b.c?b.c.next=c:b.f=c;b.c=c}function Mn(b,c,d,e){var f=Ln(null,null,null);f.a=new En(function(b,h){f.c=c?function(d){try{var f=c.call(e,d);b(f)}catch(n){h(n)}}:b;f.f=d?function(c){try{var f=d.call(e,c);!ca(f)&&c instanceof Nn?h(c):b(f)}catch(n){h(n)}}:h});f.a.b=b;Rn(b,f);return f.a}En.prototype.o=function(b){this.a=Fn;Gn(this,Hn,b)};En.prototype.G=function(b){this.a=Fn;Gn(this,In,b)};
function Gn(b,c,d){if(b.a==Fn){b==d&&(c=In,d=new TypeError("Promise cannot resolve to itself"));b.a=1;var e;a:{var f=d,g=b.o,h=b.G;if(f instanceof En)Rn(f,Ln(g||da,h||null,b)),e=!0;else if(sn(f))f.then(g,h,b),e=!0;else{if(oa(f))try{var k=f.then;if(ka(k)){Tn(f,k,g,h,b);e=!0;break a}}catch(m){h.call(b,m);e=!0;break a}e=!1}}e||(b.j=d,b.a=c,b.b=null,Sn(b),c!=In||d instanceof Nn||Un(b,d))}}
function Tn(b,c,d,e,f){function g(b){k||(k=!0,e.call(f,b))}function h(b){k||(k=!0,d.call(f,b))}var k=!1;try{c.call(b,h,g)}catch(m){g(m)}}function Sn(b){b.i||(b.i=!0,yn(b.l,b))}function Pn(b){var c=null;b.f&&(c=b.f,b.f=c.next,c.next=null);b.f||(b.c=null);return c}En.prototype.l=function(){for(var b=null;b=Pn(this);)Qn(this,b,this.a,this.j);this.i=!1};
function Qn(b,c,d,e){if(d==In&&c.f&&!c.g)for(;b&&b.g;b=b.b)b.g=!1;if(c.a)c.a.b=null,Vn(c,d,e);else try{c.g?c.c.call(c.b):Vn(c,d,e)}catch(f){Wn.call(null,f)}un(Kn,c)}function Vn(b,c,d){c==Hn?b.c.call(b.b,d):b.f&&b.f.call(b.b,d)}function Un(b,c){b.g=!0;yn(function(){b.g&&Wn.call(null,c)})}var Wn=ki;function Nn(b){Aa.call(this,b)}y(Nn,Aa);Nn.prototype.name="cancel";function Xn(b,c,d){if(ka(b))d&&(b=ua(b,d));else if(b&&"function"==typeof b.handleEvent)b=ua(b.handleEvent,b);else throw Error("Invalid listener argument");return 2147483647<c?-1:ba.setTimeout(b,c||0)};var Yn=ba.JSON.parse,Zn=ba.JSON.stringify;function $n(){}$n.prototype.a=null;function ao(b){var c;(c=b.a)||(c={},bo(b)&&(c[0]=!0,c[1]=!0),c=b.a=c);return c};var co;function eo(){}y(eo,$n);function fo(b){return(b=bo(b))?new ActiveXObject(b):new XMLHttpRequest}function bo(b){if(!b.f&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var c=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],d=0;d<c.length;d++){var e=c[d];try{return new ActiveXObject(e),b.f=e}catch(f){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return b.f}co=new eo;var go=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function ho(b,c){if(b)for(var d=b.split("&"),e=0;e<d.length;e++){var f=d[e].indexOf("="),g=null,h=null;0<=f?(g=d[e].substring(0,f),h=d[e].substring(f+1)):g=d[e];c(g,h?decodeURIComponent(h.replace(/\+/g," ")):"")}}
function io(b){if(b[1]){var c=b[0],d=c.indexOf("#");0<=d&&(b.push(c.substr(d)),b[0]=c=c.substr(0,d));d=c.indexOf("?");0>d?b[1]="?":d==c.length-1&&(b[1]=void 0)}return b.join("")}function jo(b,c,d){if(ga(c))for(var e=0;e<c.length;e++)jo(b,String(c[e]),d);else null!=c&&d.push("&",b,""===c?"":"=",encodeURIComponent(String(c)))}function ko(b,c){for(var d in c)jo(d,c[d],b);return b};function lo(b){$c.call(this);this.O=new pi;this.o=b||null;this.a=!1;this.l=this.ha=null;this.g=this.U=this.v="";this.f=this.B=this.c=this.G=!1;this.j=0;this.b=null;this.i=mo;this.C=this.V=!1}y(lo,$c);var mo="",no=/^https?$/i,oo=["POST","PUT"];
function po(b,c){if(b.ha)throw Error("[goog.net.XhrIo] Object is active with another request="+b.v+"; newUri="+c);b.v=c;b.g="";b.U="GET";b.G=!1;b.a=!0;b.ha=b.o?fo(b.o):fo(co);b.l=b.o?ao(b.o):ao(co);b.ha.onreadystatechange=ua(b.D,b);try{b.B=!0,b.ha.open("GET",String(c),!0),b.B=!1}catch(g){qo(b,g);return}var d=b.O.clone(),e=fb(d.P(),ro),f=ba.FormData&&!1;!(0<=ab(oo,"GET"))||e||f||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");d.forEach(function(b,c){this.ha.setRequestHeader(c,
b)},b);b.i&&(b.ha.responseType=b.i);"withCredentials"in b.ha&&(b.ha.withCredentials=b.V);try{so(b),0<b.j&&(b.C=to(b.ha),b.C?(b.ha.timeout=b.j,b.ha.ontimeout=ua(b.Bc,b)):b.b=Xn(b.Bc,b.j,b)),b.c=!0,b.ha.send(""),b.c=!1}catch(g){qo(b,g)}}function to(b){return Yb&&ic(9)&&ja(b.timeout)&&ca(b.ontimeout)}function ro(b){return"content-type"==b.toLowerCase()}
lo.prototype.Bc=function(){"undefined"!=typeof aa&&this.ha&&(this.g="Timed out after "+this.j+"ms, aborting",this.s("timeout"),this.ha&&this.a&&(this.a=!1,this.f=!0,this.ha.abort(),this.f=!1,this.s("complete"),this.s("abort"),uo(this)))};function qo(b,c){b.a=!1;b.ha&&(b.f=!0,b.ha.abort(),b.f=!1);b.g=c;vo(b);uo(b)}function vo(b){b.G||(b.G=!0,b.s("complete"),b.s("error"))}lo.prototype.Y=function(){this.ha&&(this.a&&(this.a=!1,this.f=!0,this.ha.abort(),this.f=!1),uo(this,!0));lo.ca.Y.call(this)};
lo.prototype.D=function(){this.na||(this.B||this.c||this.f?wo(this):this.T())};lo.prototype.T=function(){wo(this)};function wo(b){if(b.a&&"undefined"!=typeof aa&&(!b.l[1]||4!=xo(b)||2!=yo(b)))if(b.c&&4==xo(b))Xn(b.D,0,b);else if(b.s("readystatechange"),4==xo(b)){b.a=!1;try{if(zo(b))b.s("complete"),b.s("success");else{var c;try{c=2<xo(b)?b.ha.statusText:""}catch(d){c=""}b.g=c+" ["+yo(b)+"]";vo(b)}}finally{uo(b)}}}
function uo(b,c){if(b.ha){so(b);var d=b.ha,e=b.l[0]?da:null;b.ha=null;b.l=null;c||b.s("ready");try{d.onreadystatechange=e}catch(f){}}}function so(b){b.ha&&b.C&&(b.ha.ontimeout=null);ja(b.b)&&(ba.clearTimeout(b.b),b.b=null)}
function zo(b){var c=yo(b),d;a:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:d=!0;break a;default:d=!1}if(!d){if(c=0===c)b=String(b.v).match(go)[1]||null,!b&&ba.self&&ba.self.location&&(b=ba.self.location.protocol,b=b.substr(0,b.length-1)),c=!no.test(b?b.toLowerCase():"");d=c}return d}function xo(b){return b.ha?b.ha.readyState:0}function yo(b){try{return 2<xo(b)?b.ha.status:-1}catch(c){return-1}}function Ao(b){try{return b.ha?b.ha.responseText:""}catch(c){return""}}
function Bo(b){try{if(!b.ha)return null;if("response"in b.ha)return b.ha.response;switch(b.i){case mo:case "text":return b.ha.responseText;case "arraybuffer":if("mozResponseArrayBuffer"in b.ha)return b.ha.mozResponseArrayBuffer}return null}catch(c){return null}};function Co(b,c,d,e,f,g){uh.call(this,b,c);this.j=e;this.i=null;this.b=g;this.c={kd:!1,Tf:null,Rh:-1,Hd:null};this.G=f;this.l=d}y(Co,uh);l=Co.prototype;l.Y=function(){Co.ca.Y.call(this)};l.Ll=function(){return this.j};l.$a=function(){return this.l};l.load=function(){0==this.state&&(this.state=1,vh(this),this.G(this,this.l),this.o(null,NaN,this.b))};l.ai=function(b){this.o=b};function Do(){if(!Yb)return!1;try{return new ActiveXObject("MSXML2.DOMDocument"),!0}catch(b){return!1}}var Eo=Yb&&Do();function Fo(b){var c=b.xml;if(c)return c;if("undefined"!=typeof XMLSerializer)return(new XMLSerializer).serializeToString(b);throw Error("Your browser does not support serializing XML documents");};var Go;a:if(document.implementation&&document.implementation.createDocument)Go=document.implementation.createDocument("","",null);else{if(Eo){var Ho=new ActiveXObject("MSXML2.DOMDocument");if(Ho){Ho.resolveExternals=!1;Ho.validateOnParse=!1;try{Ho.setProperty("ProhibitDTD",!0),Ho.setProperty("MaxXMLSize",2048),Ho.setProperty("MaxElementDepth",256)}catch(b){}}if(Ho){Go=Ho;break a}}throw Error("Your browser does not support creating new documents");}var Io=Go;
function Jo(b,c){return Io.createElementNS(b,c)}function Ko(b,c){b||(b="");return Io.createNode(1,c,b)}var Lo=document.implementation&&document.implementation.createDocument?Jo:Ko;function Mo(b,c){return No(b,c,[]).join("")}function No(b,c,d){if(4==b.nodeType||3==b.nodeType)c?d.push(String(b.nodeValue).replace(/(\r\n|\r|\n)/g,"")):d.push(b.nodeValue);else for(b=b.firstChild;b;b=b.nextSibling)No(b,c,d);return d}function Oo(b){return b.localName}
function Po(b){var c=b.localName;return void 0!==c?c:b.baseName}var Qo=Yb?Po:Oo;function Ro(b){return b instanceof Document}function So(b){return oa(b)&&9==b.nodeType}var To=Yb?So:Ro;function Uo(b){return b instanceof Node}function Vo(b){return oa(b)&&void 0!==b.nodeType}var Wo=Yb?Vo:Uo;function Xo(b,c,d){return b.getAttributeNS(c,d)||""}function Yo(b,c,d){var e="";b=Zo(b,c,d);void 0!==b&&(e=b.nodeValue);return e}var $o=document.implementation&&document.implementation.createDocument?Xo:Yo;
function ap(b,c,d){return b.getAttributeNodeNS(c,d)}function bp(b,c,d){var e=null;b=b.attributes;for(var f,g,h=0,k=b.length;h<k;++h)if(f=b[h],f.namespaceURI==c&&(g=f.prefix?f.prefix+":"+d:d,g==f.nodeName)){e=f;break}return e}var Zo=document.implementation&&document.implementation.createDocument?ap:bp;function cp(b,c,d,e){b.setAttributeNS(c,d,e)}function dp(b,c,d,e){c?(c=b.ownerDocument.createNode(2,d,c),c.nodeValue=e,b.setAttributeNode(c)):b.setAttribute(d,e)}
var ep=document.implementation&&document.implementation.createDocument?cp:dp;function fp(b){return(new DOMParser).parseFromString(b,"application/xml")}function gp(b,c){return function(d,e){var f=b.call(c,d,e);void 0!==f&&kb(e[e.length-1],f)}}function hp(b,c){return function(d,e){var f=b.call(void 0!==c?c:this,d,e);void 0!==f&&e[e.length-1].push(f)}}function ip(b,c){return function(d,e){var f=b.call(void 0!==c?c:this,d,e);void 0!==f&&(e[e.length-1]=f)}}
function jp(b){return function(c,d){var e=b.call(this,c,d);void 0!==e&&Sb(d[d.length-1],c.localName).push(e)}}function N(b,c){return function(d,e){var f=b.call(this,d,e);void 0!==f&&(e[e.length-1][void 0!==c?c:d.localName]=f)}}function O(b,c){return function(d,e,f){b.call(void 0!==c?c:this,d,e,f);f[f.length-1].node.appendChild(d)}}function kp(b){var c,d;return function(e,f,g){if(void 0===c){c={};var h={};h[e.localName]=b;c[e.namespaceURI]=h;d=lp(e.localName)}mp(c,d,f,g)}}
function lp(b,c){return function(d,e,f){d=e[e.length-1].node;e=b;void 0===e&&(e=f);f=c;void 0===c&&(f=d.namespaceURI);return Lo(f,e)}}var np=lp();function op(b,c){for(var d=c.length,e=Array(d),f=0;f<d;++f)e[f]=b[c[f]];return e}function P(b,c,d){d=void 0!==d?d:{};var e,f;e=0;for(f=b.length;e<f;++e)d[b[e]]=c;return d}function pp(b,c,d,e){for(c=c.firstElementChild;c;c=c.nextElementSibling){var f=b[c.namespaceURI];void 0!==f&&(f=f[c.localName],void 0!==f&&f.call(e,c,d))}}
function Q(b,c,d,e,f){e.push(b);pp(c,d,e,f);return e.pop()}function mp(b,c,d,e,f,g){for(var h=(void 0!==f?f:d).length,k,m,n=0;n<h;++n)k=d[n],void 0!==k&&(m=c.call(g,k,e,void 0!==f?f[n]:void 0),void 0!==m&&b[m.namespaceURI][m.localName].call(g,m,k,e))}function qp(b,c,d,e,f,g,h){f.push(b);mp(c,d,e,f,g,h);f.pop()};function rp(b,c,d,e){return function(f,g,h){var k=new lo;k.i="arraybuffer"==c.W()?"arraybuffer":"text";D(k,"complete",function(b){b=b.target;if(zo(b)){var f=c.W(),g;if("json"==f)g=Ao(b);else if("text"==f)g=Ao(b);else if("xml"==f){if(!Yb)try{g=b.ha?b.ha.responseXML:null}catch(k){g=null}g||(g=fp(Ao(b)))}else"arraybuffer"==f&&(g=Bo(b));g&&(this instanceof Co&&(f=c.Ia(g).f,"tile-pixels"===f&&(this.b=h=new Ce({code:this.b.a,units:f}))),d.call(this,c.Ba(g,{featureProjection:h})))}else e.call(this);sc(b)},
!1,this);ka(b)?po(k,b(f,g,h)):po(k,b)}}function sp(b,c){return rp(b,c,function(b){this.i=b;this.state=2;vh(this)},function(){this.state=3;vh(this)})}function tp(b,c){return rp(b,c,function(b){this.Ec(b)},za)};function up(){return[[-Infinity,-Infinity,Infinity,Infinity]]};var vp,wp,xp,yp;
(function(){var b={ja:{}};(function(){function c(b,d){if(!(this instanceof c))return new c(b,d);this.bf=Math.max(4,b||9);this.hg=Math.max(2,Math.ceil(.4*this.bf));d&&this.cj(d);this.clear()}function d(b,c){b.bbox=e(b,0,b.children.length,c)}function e(b,c,d,e){for(var g=[Infinity,Infinity,-Infinity,-Infinity],h;c<d;c++)h=b.children[c],f(g,b.Qa?e(h):h.bbox);return g}function f(b,c){b[0]=Math.min(b[0],c[0]);b[1]=Math.min(b[1],c[1]);b[2]=Math.max(b[2],c[2]);b[3]=Math.max(b[3],c[3])}function g(b,c){return b.bbox[0]-
c.bbox[0]}function h(b,c){return b.bbox[1]-c.bbox[1]}function k(b){return(b[2]-b[0])*(b[3]-b[1])}function m(b){return b[2]-b[0]+(b[3]-b[1])}function n(b,c){return b[0]<=c[0]&&b[1]<=c[1]&&c[2]<=b[2]&&c[3]<=b[3]}function p(b,c){return c[0]<=b[2]&&c[1]<=b[3]&&c[2]>=b[0]&&c[3]>=b[1]}function q(b,c,d,e,f){for(var g=[c,d],h;g.length;)d=g.pop(),c=g.pop(),d-c<=e||(h=c+Math.ceil((d-c)/e/2)*e,r(b,c,d,h,f),g.push(c,h,h,d))}function r(b,c,d,e,f){for(var g,h,k,m,n;d>c;){600<d-c&&(g=d-c+1,h=e-c+1,k=Math.log(g),
m=.5*Math.exp(2*k/3),n=.5*Math.sqrt(k*m*(g-m)/g)*(0>h-g/2?-1:1),k=Math.max(c,Math.floor(e-h*m/g+n)),h=Math.min(d,Math.floor(e+(g-h)*m/g+n)),r(b,k,h,e,f));g=b[e];h=c;m=d;t(b,c,e);for(0<f(b[d],g)&&t(b,c,d);h<m;){t(b,h,m);h++;for(m--;0>f(b[h],g);)h++;for(;0<f(b[m],g);)m--}0===f(b[c],g)?t(b,c,m):(m++,t(b,m,d));m<=e&&(c=m+1);e<=m&&(d=m-1)}}function t(b,c,d){var e=b[c];b[c]=b[d];b[d]=e}c.prototype={all:function(){return this.cg(this.data,[])},search:function(b){var c=this.data,d=[],e=this.fb;if(!p(b,c.bbox))return d;
for(var f=[],g,h,k,m;c;){g=0;for(h=c.children.length;g<h;g++)k=c.children[g],m=c.Qa?e(k):k.bbox,p(b,m)&&(c.Qa?d.push(k):n(b,m)?this.cg(k,d):f.push(k));c=f.pop()}return d},load:function(b){if(!b||!b.length)return this;if(b.length<this.hg){for(var c=0,d=b.length;c<d;c++)this.ya(b[c]);return this}b=this.eg(b.slice(),0,b.length-1,0);this.data.children.length?this.data.height===b.height?this.jg(this.data,b):(this.data.height<b.height&&(c=this.data,this.data=b,b=c),this.gg(b,this.data.height-b.height-1,
!0)):this.data=b;return this},ya:function(b){b&&this.gg(b,this.data.height-1);return this},clear:function(){this.data={children:[],height:1,bbox:[Infinity,Infinity,-Infinity,-Infinity],Qa:!0};return this},remove:function(b){if(!b)return this;for(var c=this.data,d=this.fb(b),e=[],f=[],g,h,k,m;c||e.length;){c||(c=e.pop(),h=e[e.length-1],g=f.pop(),m=!0);if(c.Qa&&(k=c.children.indexOf(b),-1!==k)){c.children.splice(k,1);e.push(c);this.aj(e);break}m||c.Qa||!n(c.bbox,d)?h?(g++,c=h.children[g],m=!1):c=null:
(e.push(c),f.push(g),g=0,h=c,c=c.children[0])}return this},fb:function(b){return b},ff:function(b,c){return b[0]-c[0]},gf:function(b,c){return b[1]-c[1]},toJSON:function(){return this.data},cg:function(b,c){for(var d=[];b;)b.Qa?c.push.apply(c,b.children):d.push.apply(d,b.children),b=d.pop();return c},eg:function(b,c,e,f){var g=e-c+1,h=this.bf,k;if(g<=h)return k={children:b.slice(c,e+1),height:1,bbox:null,Qa:!0},d(k,this.fb),k;f||(f=Math.ceil(Math.log(g)/Math.log(h)),h=Math.ceil(g/Math.pow(h,f-1)));
k={children:[],height:f,bbox:null};var g=Math.ceil(g/h),h=g*Math.ceil(Math.sqrt(h)),m,n,p;for(q(b,c,e,h,this.ff);c<=e;c+=h)for(n=Math.min(c+h-1,e),q(b,c,n,g,this.gf),m=c;m<=n;m+=g)p=Math.min(m+g-1,n),k.children.push(this.eg(b,m,p,f-1));d(k,this.fb);return k},$i:function(b,c,d,e){for(var f,g,h,m,n,p,q,r;;){e.push(c);if(c.Qa||e.length-1===d)break;q=r=Infinity;f=0;for(g=c.children.length;f<g;f++)h=c.children[f],n=k(h.bbox),p=h.bbox,p=(Math.max(p[2],b[2])-Math.min(p[0],b[0]))*(Math.max(p[3],b[3])-Math.min(p[1],
b[1]))-n,p<r?(r=p,q=n<q?n:q,m=h):p===r&&n<q&&(q=n,m=h);c=m}return c},gg:function(b,c,d){var e=this.fb;d=d?b.bbox:e(b);var e=[],g=this.$i(d,this.data,c,e);g.children.push(b);for(f(g.bbox,d);0<=c;)if(e[c].children.length>this.bf)this.ij(e,c),c--;else break;this.Xi(d,e,c)},ij:function(b,c){var e=b[c],f=e.children.length,g=this.hg;this.Yi(e,g,f);f=this.Zi(e,g,f);f={children:e.children.splice(f,e.children.length-f),height:e.height};e.Qa&&(f.Qa=!0);d(e,this.fb);d(f,this.fb);c?b[c-1].children.push(f):this.jg(e,
f)},jg:function(b,c){this.data={children:[b,c],height:b.height+1};d(this.data,this.fb)},Zi:function(b,c,d){var f,g,h,m,n,p,q;n=p=Infinity;for(f=c;f<=d-c;f++)g=e(b,0,f,this.fb),h=e(b,f,d,this.fb),m=Math.max(0,Math.min(g[2],h[2])-Math.max(g[0],h[0]))*Math.max(0,Math.min(g[3],h[3])-Math.max(g[1],h[1])),g=k(g)+k(h),m<n?(n=m,q=f,p=g<p?g:p):m===n&&g<p&&(p=g,q=f);return q},Yi:function(b,c,d){var e=b.Qa?this.ff:g,f=b.Qa?this.gf:h,k=this.dg(b,c,d,e);c=this.dg(b,c,d,f);k<c&&b.children.sort(e)},dg:function(b,
c,d,g){b.children.sort(g);g=this.fb;var h=e(b,0,c,g),k=e(b,d-c,d,g),n=m(h)+m(k),p,q;for(p=c;p<d-c;p++)q=b.children[p],f(h,b.Qa?g(q):q.bbox),n+=m(h);for(p=d-c-1;p>=c;p--)q=b.children[p],f(k,b.Qa?g(q):q.bbox),n+=m(k);return n},Xi:function(b,c,d){for(;0<=d;d--)f(c[d].bbox,b)},aj:function(b){for(var c=b.length-1,e;0<=c;c--)0===b[c].children.length?0<c?(e=b[c-1].children,e.splice(e.indexOf(b[c]),1)):this.clear():d(b[c],this.fb)},cj:function(b){var c=["return a"," - b",";"];this.ff=new Function("a","b",
c.join(b[0]));this.gf=new Function("a","b",c.join(b[1]));this.fb=new Function("a","return [a"+b.join(", a")+"];")}};"undefined"!==typeof b?b.ja=c:"undefined"!==typeof self?self.a=c:window.a=c})();vp=b.ja})();function zp(b){this.f=vp(b);this.a={}}l=zp.prototype;l.ya=function(b,c){var d=[b[0],b[1],b[2],b[3],c];this.f.ya(d);this.a[w(c)]=d};l.load=function(b,c){for(var d=Array(c.length),e=0,f=c.length;e<f;e++){var g=b[e],h=c[e],g=[g[0],g[1],g[2],g[3],h];d[e]=g;this.a[w(h)]=g}this.f.load(d)};l.remove=function(b){b=w(b);var c=this.a[b];delete this.a[b];return null!==this.f.remove(c)};function Ap(b,c,d){var e=w(d);ae(b.a[e].slice(0,4),c)||(b.remove(d),b.ya(c,d))}
function Bp(b){return b.f.all().map(function(b){return b[4]})}function Cp(b,c){return b.f.search(c).map(function(b){return b[4]})}l.forEach=function(b,c){return Dp(Bp(this),b,c)};function Ep(b,c,d,e){return Dp(Cp(b,c),d,e)}function Dp(b,c,d){for(var e,f=0,g=b.length;f<g&&!(e=c.call(d,b[f]));f++);return e}l.La=function(){return Pb(this.a)};l.clear=function(){this.f.clear();this.a={}};l.J=function(){return this.f.data.bbox};function R(b){b=b||{};wh.call(this,{attributions:b.attributions,logo:b.logo,projection:void 0,state:"ready",wrapX:void 0!==b.wrapX?b.wrapX:!0});this.T=za;void 0!==b.loader?this.T=b.loader:void 0!==b.url&&(this.T=tp(b.url,b.format));this.pa=void 0!==b.strategy?b.strategy:up;var c=void 0!==b.useSpatialIndex?b.useSpatialIndex:!0;this.a=c?new zp:null;this.V=new zp;this.g={};this.j={};this.l={};this.o={};this.c=null;var d,e;b.features instanceof og?(d=b.features,e=d.a):ga(b.features)&&(e=b.features);c||
void 0!==d||(d=new og(e));void 0!==e&&Fp(this,e);void 0!==d&&Gp(this,d)}y(R,wh);l=R.prototype;l.Bd=function(b){var c=w(b).toString();if(Hp(this,c,b)){Ip(this,c,b);var d=b.X();d?(c=d.J(),this.a&&this.a.ya(c,b)):this.g[c]=b;this.s(new Jp("addfeature",b))}this.u()};function Ip(b,c,d){b.o[c]=[D(d,"change",b.th,!1,b),D(d,"propertychange",b.th,!1,b)]}function Hp(b,c,d){var e=!0,f=d.Oa();void 0!==f?f.toString()in b.j?e=!1:b.j[f.toString()]=d:b.l[c]=d;return e}l.Ec=function(b){Fp(this,b);this.u()};
function Fp(b,c){var d,e,f,g,h=[],k=[],m=[];e=0;for(f=c.length;e<f;e++)g=c[e],d=w(g).toString(),Hp(b,d,g)&&k.push(g);e=0;for(f=k.length;e<f;e++){g=k[e];d=w(g).toString();Ip(b,d,g);var n=g.X();n?(d=n.J(),h.push(d),m.push(g)):b.g[d]=g}b.a&&b.a.load(h,m);e=0;for(f=k.length;e<f;e++)b.s(new Jp("addfeature",k[e]))}
function Gp(b,c){var d=!1;D(b,"addfeature",function(b){d||(d=!0,c.push(b.feature),d=!1)});D(b,"removefeature",function(b){d||(d=!0,c.remove(b.feature),d=!1)});D(c,"add",function(b){d||(b=b.element,d=!0,this.Bd(b),d=!1)},!1,b);D(c,"remove",function(b){d||(b=b.element,d=!0,this.Rc(b),d=!1)},!1,b);b.c=c}
l.clear=function(b){if(b){for(var c in this.o)this.o[c].forEach(Wc);this.c||(this.o={},this.j={},this.l={})}else b=this.Qh,this.a&&(this.a.forEach(b,this),Ib(this.g,b,this));this.c&&this.c.clear();this.a&&this.a.clear();this.V.clear();this.g={};this.s(new Jp("clear"));this.u()};l.sg=function(b,c){if(this.a)return this.a.forEach(b,c);if(this.c)return this.c.forEach(b,c)};function Kp(b,c,d){b.pb([c[0],c[1],c[0],c[1]],function(b){if(b.X().og(c))return d.call(void 0,b)})}
l.pb=function(b,c,d){if(this.a)return Ep(this.a,b,c,d);if(this.c)return this.c.forEach(c,d)};l.tg=function(b,c,d){return this.pb(b,function(e){if(e.X().Ea(b)&&(e=c.call(d,e)))return e})};l.zg=function(){return this.c};l.ze=function(){var b;this.c?b=this.c.a:this.a&&(b=Bp(this.a),Pb(this.g)||kb(b,Lb(this.g)));return b};l.yg=function(b){var c=[];Kp(this,b,function(b){c.push(b)});return c};l.mf=function(b){return Cp(this.a,b)};
l.vg=function(b){var c=b[0],d=b[1],e=null,f=[NaN,NaN],g=Infinity,h=[-Infinity,-Infinity,Infinity,Infinity];Ep(this.a,h,function(b){var m=b.X(),n=g;g=m.nb(c,d,f,g);g<n&&(e=b,b=Math.sqrt(g),h[0]=c-b,h[1]=d-b,h[2]=c+b,h[3]=d+b)});return e};l.J=function(){return this.a.J()};l.xg=function(b){b=this.j[b.toString()];return void 0!==b?b:null};
l.th=function(b){b=b.target;var c=w(b).toString(),d=b.X();d?(d=d.J(),c in this.g?(delete this.g[c],this.a&&this.a.ya(d,b)):this.a&&Ap(this.a,d,b)):c in this.g||(this.a&&this.a.remove(b),this.g[c]=b);d=b.Oa();void 0!==d?(d=d.toString(),c in this.l?(delete this.l[c],this.j[d]=b):this.j[d]!==b&&(Lp(this,b),this.j[d]=b)):c in this.l||(Lp(this,b),this.l[c]=b);this.u();this.s(new Jp("changefeature",b))};l.La=function(){return this.a.La()&&Pb(this.g)};
l.Nc=function(b,c,d){var e=this.V;b=this.pa(b,c);var f,g;f=0;for(g=b.length;f<g;++f){var h=b[f];Ep(e,h,function(b){return Vd(b.extent,h)})||(this.T.call(this,h,c,d),e.ya(h,{extent:h.slice()}))}};l.Rc=function(b){var c=w(b).toString();c in this.g?delete this.g[c]:this.a&&this.a.remove(b);this.Qh(b);this.u()};l.Qh=function(b){var c=w(b).toString();this.o[c].forEach(Wc);delete this.o[c];var d=b.Oa();void 0!==d?delete this.j[d.toString()]:delete this.l[c];this.s(new Jp("removefeature",b))};
function Lp(b,c){for(var d in b.j)if(b.j[d]===c){delete b.j[d];break}}function Jp(b,c){tc.call(this,b);this.feature=c}y(Jp,tc);function Mp(b){this.c=b.source;this.wa=Bd();this.g=Ni();this.j=[0,0];this.v=null;on.call(this,{attributions:b.attributions,canvasFunction:ua(this.tj,this),logo:b.logo,projection:b.projection,ratio:b.ratio,resolutions:b.resolutions,state:this.c.B});this.T=null;this.o=void 0;this.ph(b.style);D(this.c,"change",this.Om,void 0,this)}y(Mp,on);l=Mp.prototype;
l.tj=function(b,c,d,e,f){var g=new Om(.5*c/d,b,c);this.c.Nc(b,c,f);var h=!1;this.c.pb(b,function(b){var e;if(!(e=h)){var f;(e=b.ac())?f=e.call(b,c):this.o&&(f=this.o(b,c));if(f){var p,q=!1;e=0;for(p=f.length;e<p;++e)q=Vm(g,b,f[e],Um(c,d),this.Nm,this)||q;e=q}else e=!1}h=e},this);Pm(g);if(h)return null;this.j[0]!=e[0]||this.j[1]!=e[1]?(this.g.canvas.width=e[0],this.g.canvas.height=e[1],this.j[0]=e[0],this.j[1]=e[1]):this.g.clearRect(0,0,e[0],e[1]);b=Np(this,le(b),c,d,e);g.b(this.g,d,b,0,{});this.v=
g;return this.g.canvas};l.ye=function(b,c,d,e,f){if(this.v){var g={};return this.v.c(b,c,0,e,function(b){var c=w(b).toString();if(!(c in g))return g[c]=!0,f(b)})}};l.Km=function(){return this.c};l.Lm=function(){return this.T};l.Mm=function(){return this.o};function Np(b,c,d,e,f){return gk(b.wa,f[0]/2,f[1]/2,e/d,-e/d,0,-c[0],-c[1])}l.Nm=function(){this.u()};l.Om=function(){yh(this,this.c.B)};l.ph=function(b){this.T=void 0!==b?b:dm;this.o=b?bm(this.T):void 0;this.u()};function Op(b){um.call(this,b);this.g=null;this.i=Bd();this.b=this.c=null}y(Op,um);l=Op.prototype;l.ab=function(b,c,d,e){var f=this.a;return f.ea().ye(b,c.viewState.resolution,c.viewState.rotation,c.skippedFeatureUids,function(b){return d.call(e,b,f)})};
l.vc=function(b,c,d,e){if(this.zd())if(this.a.ea()instanceof Mp){if(b=b.slice(),ik(c.pixelToCoordinateMatrix,b,b),this.ab(b,c,te,this))return d.call(e,this.a)}else if(this.c||(this.c=Bd(),Hd(this.i,this.c)),c=xm(b,this.c),this.b||(this.b=Ni(1,1)),this.b.clearRect(0,0,1,1),this.b.drawImage(this.zd(),c[0],c[1],1,1,0,0,1,1),0<this.b.getImageData(0,0,1,1).data[3])return d.call(e,this.a)};l.zd=function(){return this.g?this.g.a():null};l.nf=function(){return this.i};
l.Ad=function(b,c){var d=b.pixelRatio,e=b.viewState,f=e.center,g=e.resolution,h=e.rotation,k=this.a.ea(),m=b.viewHints,n=b.extent;void 0!==c.extent&&(n=ne(n,c.extent));m[0]||m[1]||ie(n)||(e=k.C(n,g,d,e.projection))&&lk(this,e)&&(this.g=e);if(this.g){var e=this.g,m=e.J(),n=e.$(),p=e.b,g=d*n/(g*p);gk(this.i,d*b.size[0]/2,d*b.size[1]/2,g,g,h,p*(m[0]-f[0])/n,p*(f[1]-m[3])/n);this.c=null;nk(b.attributions,e.i);ok(b,k)}return!0};function Pp(b){um.call(this,b);this.b=this.i=null;this.o=!1;this.j=null;this.B=Bd();this.g=null;this.C=this.D=this.v=NaN;this.l=this.c=null;this.U=[0,0]}y(Pp,um);Pp.prototype.zd=function(){return this.i};Pp.prototype.nf=function(){return this.B};
Pp.prototype.Ad=function(b,c){function d(b){b=b.state;return 2==b||4==b||3==b&&!K}var e=b.pixelRatio,f=b.viewState,g=f.projection,h=this.a,k=h.ea(),m=k.ib(g),n=k.ae(),p=Ih(m,f.resolution),q=k.Qb(p,b.pixelRatio,g),r=q[0]/md(m.Ka(p),this.U)[0],t=m.$(p),r=t/r,x=f.center,z;t==f.resolution?(x=qk(x,t,b.size),z=me(x,t,f.rotation,b.size)):z=b.extent;void 0!==c.extent&&(z=ne(z,c.extent));if(ie(z))return!1;var A=Fh(m,z,t),B=q[0]*kg(A),v=q[1]*jg(A),L,M;this.i?(L=this.i,M=this.j,this.b[0]<B||this.b[1]<v||this.D!==
q[0]||this.C!==q[1]||this.o&&(this.b[0]>B||this.b[1]>v)?(L.width=B,L.height=v,this.b=[B,v],this.o=!ym(this.b),this.c=null):(B=this.b[0],v=this.b[1],p==this.v&&hg(this.c,A)||(this.c=null))):(M=Ni(B,v),this.i=M.canvas,this.b=[B,v],this.j=M,this.o=!ym(this.b));var J,C;this.c?(v=this.c,B=kg(v)):(B/=q[0],v/=q[1],J=A.a-Math.floor((B-kg(A))/2),C=A.f-Math.floor((v-jg(A))/2),this.v=p,this.D=q[0],this.C=q[1],this.c=new fg(J,J+B-1,C,C+v-1),this.l=Array(B*v),v=this.c);L={};L[p]={};var sa=[],la=this.cd(k,g,L),
K=h.b(),ma=Md(),Ua=new fg(0,0,0,0),Nb,na,Fa;for(C=A.a;C<=A.c;++C)for(Fa=A.f;Fa<=A.b;++Fa)na=k.Pb(p,C,Fa,e,g),!d(na)&&na.f&&(na=na.f),d(na)?L[p][eg(na.a)]=na:(Nb=Ch(m,na.a,la,Ua,ma),Nb||(sa.push(na),(Nb=Eh(m,na.a,Ua,ma))&&la(p+1,Nb)));la=0;for(Nb=sa.length;la<Nb;++la)na=sa[la],C=q[0]*(na.a[1]-v.a),Fa=q[1]*(v.b-na.a[2]),M.clearRect(C,Fa,q[0],q[1]);sa=Object.keys(L).map(Number);sa.sort(ub);var ad=k.pa,Qc=ge(m.Aa([p,v.a,v.b],ma)),sf,zj,$d,ci,cg,qm,la=0;for(Nb=sa.length;la<Nb;++la)if(sf=sa[la],q=k.Qb(sf,
e,g),ci=L[sf],sf==p)for(zj in ci)na=ci[zj],J=(na.a[2]-v.f)*B+(na.a[1]-v.a),this.l[J]!=na&&(C=q[0]*(na.a[1]-v.a),Fa=q[1]*(v.b-na.a[2]),$d=na.state,4!=$d&&(3!=$d||K)&&ad||M.clearRect(C,Fa,q[0],q[1]),2==$d&&M.drawImage(na.Ta(),n,n,q[0],q[1],C,Fa,q[0],q[1]),this.l[J]=na);else for(zj in sf=m.$(sf)/t,ci)for(na=ci[zj],J=m.Aa(na.a,ma),C=(J[0]-Qc[0])/r,Fa=(Qc[1]-J[3])/r,qm=sf*q[0],cg=sf*q[1],$d=na.state,4!=$d&&ad||M.clearRect(C,Fa,qm,cg),2==$d&&M.drawImage(na.Ta(),n,n,q[0],q[1],C,Fa,qm,cg),na=Dh(m,J,p,Ua),
J=Math.max(na.a,v.a),Fa=Math.min(na.c,v.c),C=Math.max(na.f,v.f),na=Math.min(na.b,v.b),$d=J;$d<=Fa;++$d)for(cg=C;cg<=na;++cg)J=(cg-v.f)*B+($d-v.a),this.l[J]=void 0;pk(b.usedTiles,k,p,A);rk(b,k,m,e,g,z,p,h.a());mk(b,k);ok(b,k);gk(this.B,e*b.size[0]/2,e*b.size[1]/2,e*r/f.resolution,e*r/f.resolution,f.rotation,(Qc[0]-x[0])/r,(x[1]-Qc[1])/r);this.g=null;return!0};
Pp.prototype.vc=function(b,c,d,e){if(this.j&&(this.g||(this.g=Bd(),Hd(this.B,this.g)),b=xm(b,this.g),0<this.j.getImageData(b[0],b[1],1,1).data[3]))return d.call(e,this.a)};function Qp(b){um.call(this,b);this.c=!1;this.o=-1;this.l=NaN;this.i=Md();this.b=this.j=null;this.g=Ni()}y(Qp,um);
Qp.prototype.G=function(b,c,d){var e=b.extent,f=b.pixelRatio,g=c.Bb?b.skippedFeatureUids:{},h=b.viewState,k=h.projection,h=h.rotation,m=k.J(),n=this.a.ea(),p=wm(this,b,0);vm(this,"precompose",d,b,p);var q=this.b;if(q&&!q.La()){var r;cd(this.a,"render")?(this.g.canvas.width=d.canvas.width,this.g.canvas.height=d.canvas.height,r=this.g):r=d;var t=r.globalAlpha;r.globalAlpha=c.opacity;q.b(r,f,p,h,g);if(n.O&&k.b&&!Vd(m,e)){c=e[0];k=je(m);for(n=0;c<m[0];)--n,p=k*n,p=wm(this,b,p),q.b(r,f,p,h,g),c+=k;n=0;
for(c=e[2];c>m[2];)++n,p=k*n,p=wm(this,b,p),q.b(r,f,p,h,g),c-=k;p=wm(this,b,0)}r!=d&&(vm(this,"render",r,b,p),d.drawImage(r.canvas,0,0));r.globalAlpha=t}vm(this,"postcompose",d,b,p)};Qp.prototype.ab=function(b,c,d,e){if(this.b){var f=c.viewState.resolution,g=c.viewState.rotation,h=this.a,k=c.layerStates[w(h)],m={};return this.b.c(b,f,g,k.Bb?c.skippedFeatureUids:{},function(b){var c=w(b).toString();if(!(c in m))return m[c]=!0,d.call(e,b,h)})}};Qp.prototype.B=function(){kk(this)};
Qp.prototype.Ad=function(b){function c(b){var c,e=b.ac();e?c=e.call(b,n):(e=d.b)&&(c=e(b,n));if(c){if(c){e=!1;if(ga(c))for(var f=0,g=c.length;f<g;++f)e=Vm(r,b,c[f],Um(n,p),this.B,this)||e;else e=Vm(r,b,c,Um(n,p),this.B,this)||e;b=e}else b=!1;this.c=this.c||b}}var d=this.a,e=d.ea();nk(b.attributions,e.i);ok(b,e);var f=b.viewHints[0],g=b.viewHints[1],h=d.j,k=d.l;if(!this.c&&!h&&f||!k&&g)return!0;var m=b.extent,k=b.viewState,f=k.projection,n=k.resolution,p=b.pixelRatio,g=d.f,q=d.a,h=fm(d);void 0===h&&
(h=Tm);m=Qd(m,q*n);q=k.projection.J();e.O&&k.projection.b&&!Vd(q,b.extent)&&(b=Math.max(je(m)/2,je(q)),m[0]=q[0]-b,m[2]=q[2]+b);if(!this.c&&this.l==n&&this.o==g&&this.j==h&&Vd(this.i,m))return!0;sc(this.b);this.b=null;this.c=!1;var r=new Om(.5*n/p,m,n,d.a);e.Nc(m,n,f);if(h){var t=[];e.pb(m,function(b){t.push(b)},this);t.sort(h);t.forEach(c,this)}else e.pb(m,c,this);Pm(r);this.l=n;this.o=g;this.j=h;this.i=m;this.b=r;return!0};function Rp(b,c){var d=/\{z\}/g,e=/\{x\}/g,f=/\{y\}/g,g=/\{-y\}/g;return function(h){if(h)return b.replace(d,h[0].toString()).replace(e,h[1].toString()).replace(f,function(){return(-h[2]-1).toString()}).replace(g,function(){return(jg(c.f?c.f[h[0]]:null)+h[2]).toString()})}}function Sp(b,c){for(var d=b.length,e=Array(d),f=0;f<d;++f)e[f]=Rp(b[f],c);return Tp(e)}function Tp(b){return 1===b.length?b[0]:function(c,d,e){if(c)return b[nd((c[1]<<c[0])+c[2],b.length)](c,d,e)}}function Up(){}
function Vp(b){var c=[],d=/\{(\d)-(\d)\}/.exec(b)||/\{([a-z])-([a-z])\}/.exec(b);if(d){var e=d[2].charCodeAt(0),f;for(f=d[1].charCodeAt(0);f<=e;++f)c.push(b.replace(d[0],String.fromCharCode(f)))}else c.push(b);return c};function Wp(b){Nh.call(this,{attributions:b.attributions,df:b.df,extent:b.extent,logo:b.logo,opaque:b.opaque,projection:b.projection,state:b.state?b.state:void 0,tileGrid:b.tileGrid,tilePixelRatio:b.tilePixelRatio,wrapX:b.wrapX});this.tileLoadFunction=b.tileLoadFunction;this.tileUrlFunction=b.tileUrlFunction?b.tileUrlFunction:Up;this.urls=null;b.urls?b.tileUrlFunction?this.urls=b.urls:this.Wa(b.urls):b.url&&this.Va(b.url);b.tileUrlFunction&&this.Ja(b.tileUrlFunction)}y(Wp,Nh);l=Wp.prototype;
l.Xa=function(){return this.tileLoadFunction};l.Ya=function(){return this.tileUrlFunction};l.Za=function(){return this.urls};l.sh=function(b){b=b.target;switch(b.state){case 1:this.s(new Qh("tileloadstart",b));break;case 2:this.s(new Qh("tileloadend",b));break;case 3:this.s(new Qh("tileloaderror",b))}};l.eb=function(b){this.a.clear();this.tileLoadFunction=b;this.u()};l.Ja=function(b){this.a.clear();this.tileUrlFunction=b;this.u()};l.Va=function(b){this.Ja(Sp(Vp(b),this.tileGrid));this.urls=[b]};
l.Wa=function(b){this.Ja(Sp(b,this.tileGrid));this.urls=b};l.Yf=function(b,c,d){b=this.Ab(b,c,d);qh(this.a,b)&&this.a.get(b)};function Xp(b){Wp.call(this,{attributions:b.attributions,df:128,extent:b.extent,logo:b.logo,opaque:b.opaque,projection:b.projection,state:b.state?b.state:void 0,tileGrid:b.tileGrid,tileLoadFunction:b.tileLoadFunction?b.tileLoadFunction:Yp,tileUrlFunction:b.tileUrlFunction,tilePixelRatio:b.tilePixelRatio,url:b.url,urls:b.urls,wrapX:void 0===b.wrapX?!0:b.wrapX});this.g=b.format?b.format:null;this.tileClass=b.tileClass?b.tileClass:Co}y(Xp,Wp);
Xp.prototype.Pb=function(b,c,d,e,f){var g=this.Ab(b,c,d);if(qh(this.a,g))return this.a.get(g);b=[b,c,d];e=(c=Ph(this,b,f))?this.tileUrlFunction(c,e,f):void 0;f=new this.tileClass(b,void 0!==e?0:4,void 0!==e?e:"",this.g,this.tileLoadFunction,f);D(f,"change",this.sh,!1,this);this.a.set(g,f);return f};function Yp(b,c){b.ai(sp(c,b.j))};function Zp(b){um.call(this,b);this.c=Ni();this.b=!1;this.g=[];this.i=Md();this.l=[NaN,NaN];this.o=Bd()}y(Zp,um);
Zp.prototype.G=function(b,c,d){var e=b.pixelRatio,f=c.Bb?b.skippedFeatureUids:{},g=b.viewState,h=g.center,k=g.projection,m=g.resolution,n=g.rotation,p=this.a,q=p.ea(),r=wm(this,b,0);vm(this,"precompose",d,b,r);cd(p,"render")?(this.c.canvas.width=d.canvas.width,this.c.canvas.height=d.canvas.height,p=this.c):p=d;var t=p.globalAlpha;p.globalAlpha=c.opacity;c=this.g;var x=q.tileGrid,z,A,B,v,L,M;A=0;for(B=c.length;A<B;++A)v=c[A],z=v.a[0],L=x.Ka(z),M=q.Qb(z,e,k),L=M[0]/md(L,this.l)[0],z=x.$(z),z/=L,"tile-pixels"==
v.b.f&&(r=ge(x.Aa(v.a,this.i)),r=gk(this.o,e*b.size[0]/2,e*b.size[1]/2,e*z/m,e*z/m,g.rotation,(r[0]-h[0])/z,(h[1]-r[1])/z)),v.c.Hd.b(p,e,r,n,f);r=wm(this,b,0);p!=d&&(vm(this,"render",p,b,r),d.drawImage(p.canvas,0,0));p.globalAlpha=t;vm(this,"postcompose",d,b,r)};
function $p(b,c,d,e){function f(b){var c,e=b.ac();e?c=e.call(b,t):(e=d.b)&&(c=e(b,t));if(c){ga(c)||(c=[c]);var e=z,f=x;if(c){var g=!1;if(ga(c))for(var h=0,m=c.length;h<m;++h)g=Vm(f,b,c[h],e,this.j,this)||g;else g=Vm(f,b,c,e,this.j,this)||g;b=g}else b=!1;this.b=this.b||b;k.kd=k.kd||b}}var g=d.f,h=fm(d)||null,k=c.c;if(k.kd||k.Rh!=g||k.Tf!=h){sc(k.Hd);k.Hd=null;k.kd=!1;var m=d.ea(),n=m.tileGrid,p=c.a,q="tile-pixels"==c.b.f,r;q?(r=m.Qb(p[0],e,c.b),r=[0,0,r[0],r[1]]):r=n.Aa(p);var t=n.$(p[0]),m=q?m.v:
t;k.kd=!1;var x=new Om(0,r,m,d.a),z=Um(m,e);c=c.i;h&&h!==k.Tf&&c.sort(h);c.forEach(f,b);Pm(x);k.Rh=g;k.Tf=h;k.Hd=x}}
Zp.prototype.ab=function(b,c,d,e){var f=c.viewState.resolution,g=c.viewState.rotation,h=this.a,k=c.layerStates[w(h)],m={},n=this.g,p=h.ea(),q=p.tileGrid,r,t,x,z,A,B;x=0;for(z=n.length;x<z;++x)B=n[x],t=B.a,A=p.tileGrid.Aa(t,this.i),Td(A,b)&&("tile-pixels"===B.b.f?(A=ge(A),f=p.v,t=q.$(t[0])/f,t=[(b[0]-A[0])/t,(A[1]-b[1])/t]):t=b,B=B.c.Hd,r=r||B.c(t,f,g,k.Bb?c.skippedFeatureUids:{},function(b){var c=w(b).toString();if(!(c in m))return m[c]=!0,d.call(e,b,h)}));return r};Zp.prototype.j=function(){kk(this)};
Zp.prototype.Ad=function(b,c){var d=this.a,e=d.ea();nk(b.attributions,e.i);ok(b,e);var f=b.viewHints[0],g=b.viewHints[1],h=d.j,k=d.l;if(!this.b&&!h&&f||!k&&g)return!0;g=b.extent;c.extent&&(g=ne(g,c.extent));if(ie(g))return!1;for(var f=b.viewState,h=f.projection,k=f.resolution,f=b.pixelRatio,m=e.tileGrid,n=m.a,p=n.length-1;0<p&&n[p]<k;)--p;n=Dh(m,g,p);pk(b.usedTiles,e,p,n);rk(b,e,m,f,h,g,p,d.g());mk(b,e);g={};g[p]={};var q=this.cd(e,h,g),r=d.U(),t=this.i,x=new fg(0,0,0,0),z,A,B;for(A=n.a;A<=n.c;++A)for(B=
n.f;B<=n.b;++B)k=e.Pb(p,A,B,f,h),z=k.state,2==z||4==z||3==z&&!r?g[p][eg(k.a)]=k:(z=Ch(m,k.a,q,x,t),z||(k=Eh(m,k.a,x,t))&&q(p+1,k));this.b=!1;e=Object.keys(g).map(Number);e.sort(ub);for(var h=[],v,m=0,p=e.length;m<p;++m)for(v in k=e[m],n=g[k],n)k=n[v],2==k.state&&(h.push(k),$p(this,k,d,f));this.g=h;return!0};function aq(b,c){xk.call(this,0,c);this.b=Ni();this.a=this.b.canvas;this.a.style.width="100%";this.a.style.height="100%";this.a.className="ol-unselectable";Lg(b,this.a,0);this.f=!0;this.g=Bd()}y(aq,xk);aq.prototype.hf=function(b){return b instanceof Pl?new Op(b):b instanceof G?new Pp(b):b instanceof I?new Zp(b):b instanceof H?new Qp(b):null};
function bq(b,c,d){var e=b.i,f=b.b;if(cd(e,c)){var g=d.extent,h=d.pixelRatio,k=d.viewState.rotation,m=d.pixelRatio,n=d.viewState,p=n.resolution;b=gk(b.g,b.a.width/2,b.a.height/2,m/p,-m/p,-n.rotation,-n.center[0],-n.center[1]);g=new gm(f,h,g,b,k);e.s(new bk(c,e,g,d,f,null));tm(g)}}aq.prototype.W=function(){return"canvas"};
aq.prototype.Ne=function(b){if(b){var c=this.b,d=b.size[0]*b.pixelRatio,e=b.size[1]*b.pixelRatio;this.a.width!=d||this.a.height!=e?(this.a.width=d,this.a.height=e):c.clearRect(0,0,this.a.width,this.a.height);yk(b);bq(this,"precompose",b);d=b.layerStatesArray;pb(d);var e=b.viewState.resolution,f,g,h,k;f=0;for(g=d.length;f<g;++f)k=d[f],h=k.layer,h=Ak(this,h),dk(k,e)&&"ready"==k.O&&h.Ad(b,k)&&h.G(b,k,c);bq(this,"postcompose",b);this.f||(gh(this.a,!0),this.f=!0);Bk(this,b);b.postRenderFunctions.push(zk)}else this.f&&
(gh(this.a,!1),this.f=!1)};function cq(b,c){jk.call(this,b);this.target=c}y(cq,jk);cq.prototype.g=za;cq.prototype.l=za;function dq(b){var c=document.createElement("DIV");c.style.position="absolute";cq.call(this,b,c);this.b=null;this.c=Dd()}y(dq,cq);dq.prototype.ab=function(b,c,d,e){var f=this.a;return f.ea().ye(b,c.viewState.resolution,c.viewState.rotation,c.skippedFeatureUids,function(b){return d.call(e,b,f)})};dq.prototype.g=function(){Kg(this.target);this.b=null};
dq.prototype.i=function(b,c){var d=b.viewState,e=d.center,f=d.resolution,g=d.rotation,h=this.b,k=this.a.ea(),m=b.viewHints,n=b.extent;void 0!==c.extent&&(n=ne(n,c.extent));m[0]||m[1]||ie(n)||(d=k.C(n,f,b.pixelRatio,d.projection))&&lk(this,d)&&(h=d);h&&(m=h.J(),n=h.$(),d=Bd(),gk(d,b.size[0]/2,b.size[1]/2,n/f,n/f,g,(m[0]-e[0])/n,(e[1]-m[3])/n),h!=this.b&&(e=h.a(this),e.style.maxWidth="none",e.style.position="absolute",Kg(this.target),this.target.appendChild(e),this.b=h),hk(d,this.c)||(Ri(this.target,
d),Ed(this.c,d)),nk(b.attributions,h.i),ok(b,k));return!0};function eq(b){var c=document.createElement("DIV");c.style.position="absolute";cq.call(this,b,c);this.c=!0;this.o=1;this.j=0;this.b={}}y(eq,cq);eq.prototype.g=function(){Kg(this.target);this.j=0};
eq.prototype.i=function(b,c){if(!c.visible)return this.c&&(gh(this.target,!1),this.c=!1),!0;var d=b.pixelRatio,e=b.viewState,f=e.projection,g=this.a,h=g.ea(),k=h.ib(f),m=h.ae(),n=Ih(k,e.resolution),p=k.$(n),q=e.center,r;p==e.resolution?(q=qk(q,p,b.size),r=me(q,p,e.rotation,b.size)):r=b.extent;void 0!==c.extent&&(r=ne(r,c.extent));var p=Fh(k,r,p),t={};t[n]={};var x=this.cd(h,f,t),z=g.b(),A=Md(),B=new fg(0,0,0,0),v,L,M,J;for(M=p.a;M<=p.c;++M)for(J=p.f;J<=p.b;++J)v=h.Pb(n,M,J,d,f),L=v.state,L=2==L||
4==L||3==L&&!z,!L&&v.f&&(v=v.f),L=v.state,2==L?t[n][eg(v.a)]=v:4==L||3==L&&!z||(L=Ch(k,v.a,x,B,A),L||(v=Eh(k,v.a,B,A))&&x(n+1,v));var C;if(this.j!=h.f){for(C in this.b)z=this.b[+C],Mg(z.target);this.b={};this.j=h.f}A=Object.keys(t).map(Number);A.sort(ub);var x={},sa;M=0;for(J=A.length;M<J;++M){C=A[M];C in this.b?z=this.b[C]:(z=k.ge(q,C),z=new fq(k,z),x[C]=!0,this.b[C]=z);C=t[C];for(sa in C){v=z;L=C[sa];var la=m,K=L.a,ma=K[0],Ua=K[1],Nb=K[2],K=eg(K);if(!(K in v.f)){var ma=md(v.g.Ka(ma),v.l),na=L.Ta(v),
Fa=na.style;Fa.maxWidth="none";var ad=void 0,Qc=void 0;0<la?(ad=document.createElement("DIV"),Qc=ad.style,Qc.overflow="hidden",Qc.width=ma[0]+"px",Qc.height=ma[1]+"px",Fa.position="absolute",Fa.left=-la+"px",Fa.top=-la+"px",Fa.width=ma[0]+2*la+"px",Fa.height=ma[1]+2*la+"px",ad.appendChild(na)):(Fa.width=ma[0]+"px",Fa.height=ma[1]+"px",ad=na,Qc=Fa);Qc.position="absolute";Qc.left=(Ua-v.b[1])*ma[0]+"px";Qc.top=(v.b[2]-Nb)*ma[1]+"px";v.a||(v.a=document.createDocumentFragment());v.a.appendChild(ad);v.f[K]=
L}}z.a&&(z.target.appendChild(z.a),z.a=null)}m=Object.keys(this.b).map(Number);m.sort(ub);M=Bd();sa=0;for(A=m.length;sa<A;++sa)if(C=m[sa],z=this.b[C],C in t)if(v=z.$(),J=z.Da(),gk(M,b.size[0]/2,b.size[1]/2,v/e.resolution,v/e.resolution,e.rotation,(J[0]-q[0])/v,(q[1]-J[1])/v),z.setTransform(M),C in x){for(--C;0<=C;--C)if(C in this.b){J=this.b[C].target;J.parentNode&&J.parentNode.insertBefore(z.target,J.nextSibling);break}0>C&&Lg(this.target,z.target,0)}else{if(!b.viewHints[0]&&!b.viewHints[1]){L=Dh(z.g,
r,z.b[0],B);C=[];v=J=void 0;for(v in z.f)J=z.f[v],L.contains(J.a)||C.push(J);la=L=void 0;L=0;for(la=C.length;L<la;++L)J=C[L],v=eg(J.a),Mg(J.Ta(z)),delete z.f[v]}}else Mg(z.target),delete this.b[C];c.opacity!=this.o&&(this.o=this.target.style.opacity=c.opacity);c.visible&&!this.c&&(gh(this.target,!0),this.c=!0);pk(b.usedTiles,h,n,p);rk(b,h,k,d,f,r,n,g.a());mk(b,h);ok(b,h);return!0};
function fq(b,c){this.target=document.createElement("DIV");this.target.style.position="absolute";this.target.style.width="100%";this.target.style.height="100%";this.g=b;this.b=c;this.i=ge(b.Aa(c));this.j=b.$(c[0]);this.f={};this.a=null;this.c=Dd();this.l=[0,0]}fq.prototype.Da=function(){return this.i};fq.prototype.$=function(){return this.j};fq.prototype.setTransform=function(b){hk(b,this.c)||(Ri(this.target,b),Ed(this.c,b))};function gq(b){this.j=Ni();var c=this.j.canvas;c.style.maxWidth="none";c.style.position="absolute";cq.call(this,b,c);this.c=!1;this.v=-1;this.B=NaN;this.o=Md();this.b=this.G=null;this.O=Bd();this.D=Bd()}y(gq,cq);
gq.prototype.l=function(b,c){var d=b.viewState,e=d.center,f=d.rotation,g=d.resolution,d=b.pixelRatio,h=b.size[0],k=b.size[1],m=h*d,n=k*d,e=gk(this.O,d*h/2,d*k/2,d/g,-d/g,-f,-e[0],-e[1]),g=this.j;g.canvas.width=m;g.canvas.height=n;h=gk(this.D,0,0,1/d,1/d,0,-(m-h)/2*d,-(n-k)/2*d);Ri(g.canvas,h);hq(this,"precompose",b,e);(h=this.b)&&!h.La()&&(g.globalAlpha=c.opacity,h.b(g,d,e,f,c.Bb?b.skippedFeatureUids:{}),hq(this,"render",b,e));hq(this,"postcompose",b,e)};
function hq(b,c,d,e){var f=b.j;b=b.a;cd(b,c)&&(e=new gm(f,d.pixelRatio,d.extent,e,d.viewState.rotation),b.s(new bk(c,b,e,d,f,null)),tm(e))}gq.prototype.ab=function(b,c,d,e){if(this.b){var f=c.viewState.resolution,g=c.viewState.rotation,h=this.a,k=c.layerStates[w(h)],m={};return this.b.c(b,f,g,k.Bb?c.skippedFeatureUids:{},function(b){var c=w(b).toString();if(!(c in m))return m[c]=!0,d.call(e,b,h)})}};gq.prototype.C=function(){kk(this)};
gq.prototype.i=function(b){function c(b){var c,e=b.ac();e?c=e.call(b,m):(e=d.b)&&(c=e(b,m));if(c){if(c){e=!1;if(ga(c))for(var f=0,g=c.length;f<g;++f)e=Vm(p,b,c[f],Um(m,n),this.C,this)||e;else e=Vm(p,b,c,Um(m,n),this.C,this)||e;b=e}else b=!1;this.c=this.c||b}}var d=this.a,e=d.ea();nk(b.attributions,e.i);ok(b,e);var f=b.viewHints[0],g=b.viewHints[1],h=d.j,k=d.l;if(!this.c&&!h&&f||!k&&g)return!0;var g=b.extent,h=b.viewState,f=h.projection,m=h.resolution,n=b.pixelRatio;b=d.f;k=d.a;h=fm(d);void 0===h&&
(h=Tm);g=Qd(g,k*m);if(!this.c&&this.B==m&&this.v==b&&this.G==h&&Vd(this.o,g))return!0;sc(this.b);this.b=null;this.c=!1;var p=new Om(.5*m/n,g,m,d.a);e.Nc(g,m,f);if(h){var q=[];e.pb(g,function(b){q.push(b)},this);q.sort(h);q.forEach(c,this)}else e.pb(g,c,this);Pm(p);this.B=m;this.v=b;this.G=h;this.o=g;this.b=p;return!0};function iq(b,c){xk.call(this,0,c);this.b=Ni();var d=this.b.canvas;d.style.position="absolute";d.style.width="100%";d.style.height="100%";d.className="ol-unselectable";Lg(b,d,0);this.g=Bd();this.a=document.createElement("DIV");this.a.className="ol-unselectable";d=this.a.style;d.position="absolute";d.width="100%";d.height="100%";D(this.a,"touchstart",vc);Lg(b,this.a,0);this.f=!0}y(iq,xk);iq.prototype.Y=function(){Mg(this.a);iq.ca.Y.call(this)};
iq.prototype.hf=function(b){if(b instanceof Pl)b=new dq(b);else if(b instanceof G)b=new eq(b);else if(b instanceof H)b=new gq(b);else return null;return b};function jq(b,c,d){var e=b.i;if(cd(e,c)){var f=d.extent,g=d.pixelRatio,h=d.viewState,k=h.rotation,m=b.b,n=m.canvas;gk(b.g,n.width/2,n.height/2,g/h.resolution,-g/h.resolution,-h.rotation,-h.center[0],-h.center[1]);b=new gm(m,g,f,b.g,k);e.s(new bk(c,e,b,d,m,null));tm(b)}}iq.prototype.W=function(){return"dom"};
iq.prototype.Ne=function(b){if(b){var c=this.i;if(cd(c,"precompose")||cd(c,"postcompose")){var c=this.b.canvas,d=b.pixelRatio;c.width=b.size[0]*d;c.height=b.size[1]*d}jq(this,"precompose",b);c=b.layerStatesArray;pb(c);var d=b.viewState.resolution,e,f,g,h;e=0;for(f=c.length;e<f;++e)h=c[e],g=h.layer,g=Ak(this,g),Lg(this.a,g.target,e),dk(h,d)&&"ready"==h.O?g.i(b,h)&&g.l(b,h):g.g();var c=b.layerStates,k;for(k in this.c)k in c||(g=this.c[k],Mg(g.target));this.f||(gh(this.a,!0),this.f=!0);yk(b);Bk(this,
b);b.postRenderFunctions.push(zk);jq(this,"postcompose",b)}else this.f&&(gh(this.a,!1),this.f=!1)};function kq(b){this.a=b}function lq(b){this.a=b}y(lq,kq);lq.prototype.W=function(){return 35632};function mq(b){this.a=b}y(mq,kq);mq.prototype.W=function(){return 35633};function nq(){this.a="precision mediump float;varying vec2 a;varying float b;uniform float k;uniform sampler2D l;void main(void){vec4 texColor=texture2D(l,a);gl_FragColor.rgb=texColor.rgb;float alpha=texColor.a*b*k;if(alpha==0.0){discard;}gl_FragColor.a=alpha;}"}y(nq,lq);ea(nq);
function oq(){this.a="varying vec2 a;varying float b;attribute vec2 c;attribute vec2 d;attribute vec2 e;attribute float f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;void main(void){mat4 offsetMatrix=i;if(g==1.0){offsetMatrix=i*j;}vec4 offsets=offsetMatrix*vec4(e,0.,0.);gl_Position=h*vec4(c,0.,1.)+offsets;a=d;b=f;}"}y(oq,mq);ea(oq);
function pq(b,c){this.l=b.getUniformLocation(c,"j");this.o=b.getUniformLocation(c,"i");this.i=b.getUniformLocation(c,"k");this.j=b.getUniformLocation(c,"h");this.a=b.getAttribLocation(c,"e");this.f=b.getAttribLocation(c,"f");this.c=b.getAttribLocation(c,"c");this.b=b.getAttribLocation(c,"g");this.g=b.getAttribLocation(c,"d")};function qq(b){this.a=void 0!==b?b:[]};function rq(b,c){this.G=b;this.a=c;this.f={};this.i={};this.g={};this.l=this.o=this.c=this.j=null;(this.b=vb(ya,"OES_element_index_uint"))&&c.getExtension("OES_element_index_uint");D(this.G,"webglcontextlost",this.Hn,!1,this);D(this.G,"webglcontextrestored",this.In,!1,this)}
function sq(b,c,d){var e=b.a,f=d.a,g=w(d);if(g in b.f)e.bindBuffer(c,b.f[g].buffer);else{var h=e.createBuffer();e.bindBuffer(c,h);var k;34962==c?k=new Float32Array(f):34963==c&&(k=b.b?new Uint32Array(f):new Uint16Array(f));e.bufferData(c,k,35044);b.f[g]={Fb:d,buffer:h}}}function tq(b,c){var d=b.a,e=w(c),f=b.f[e];d.isContextLost()||d.deleteBuffer(f.buffer);delete b.f[e]}l=rq.prototype;
l.Y=function(){var b=this.a;b.isContextLost()||(Ib(this.f,function(c){b.deleteBuffer(c.buffer)}),Ib(this.g,function(c){b.deleteProgram(c)}),Ib(this.i,function(c){b.deleteShader(c)}),b.deleteFramebuffer(this.c),b.deleteRenderbuffer(this.l),b.deleteTexture(this.o))};l.Gn=function(){return this.a};
function uq(b){if(!b.c){var c=b.a,d=c.createFramebuffer();c.bindFramebuffer(c.FRAMEBUFFER,d);var e=vq(c,1,1),f=c.createRenderbuffer();c.bindRenderbuffer(c.RENDERBUFFER,f);c.renderbufferStorage(c.RENDERBUFFER,c.DEPTH_COMPONENT16,1,1);c.framebufferTexture2D(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0,c.TEXTURE_2D,e,0);c.framebufferRenderbuffer(c.FRAMEBUFFER,c.DEPTH_ATTACHMENT,c.RENDERBUFFER,f);c.bindTexture(c.TEXTURE_2D,null);c.bindRenderbuffer(c.RENDERBUFFER,null);c.bindFramebuffer(c.FRAMEBUFFER,null);b.c=d;
b.o=e;b.l=f}return b.c}function wq(b,c){var d=w(c);if(d in b.i)return b.i[d];var e=b.a,f=e.createShader(c.W());e.shaderSource(f,c.a);e.compileShader(f);return b.i[d]=f}function xq(b,c,d){var e=w(c)+"/"+w(d);if(e in b.g)return b.g[e];var f=b.a,g=f.createProgram();f.attachShader(g,wq(b,c));f.attachShader(g,wq(b,d));f.linkProgram(g);return b.g[e]=g}l.Hn=function(){Qb(this.f);Qb(this.i);Qb(this.g);this.l=this.o=this.c=this.j=null};l.In=function(){};
l.He=function(b){if(b==this.j)return!1;this.a.useProgram(b);this.j=b;return!0};function yq(b,c,d){var e=b.createTexture();b.bindTexture(b.TEXTURE_2D,e);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.LINEAR);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.LINEAR);void 0!==c&&b.texParameteri(3553,10242,c);void 0!==d&&b.texParameteri(3553,10243,d);return e}function vq(b,c,d){var e=yq(b,void 0,void 0);b.texImage2D(b.TEXTURE_2D,0,b.RGBA,c,d,0,b.RGBA,b.UNSIGNED_BYTE,null);return e}
function zq(b,c){var d=yq(b,33071,33071);b.texImage2D(b.TEXTURE_2D,0,b.RGBA,b.RGBA,b.UNSIGNED_BYTE,c);return d};function Aq(b,c){this.D=this.C=void 0;this.o=le(c);this.v=[];this.i=[];this.na=void 0;this.g=[];this.c=[];this.U=this.va=void 0;this.f=[];this.O=this.l=null;this.T=void 0;this.hb=Dd();this.Db=Dd();this.fa=this.V=void 0;this.Eb=Dd();this.gb=this.oa=this.ga=void 0;this.wa=[];this.j=[];this.a=[];this.B=null;this.b=[];this.G=[];this.pa=void 0}y(Aq,ak);
function Bq(b,c){var d=b.B,e=b.l,f=b.wa,g=b.j,h=c.a;return function(){if(!h.isContextLost()){var b,m;b=0;for(m=f.length;b<m;++b)h.deleteTexture(f[b]);b=0;for(m=g.length;b<m;++b)h.deleteTexture(g[b])}tq(c,d);tq(c,e)}}
function Cq(b,c,d,e){var f=b.C,g=b.D,h=b.na,k=b.va,m=b.U,n=b.T,p=b.V,q=b.fa,r=b.ga?1:0,t=b.oa,x=b.gb,z=b.pa,A=Math.cos(t),t=Math.sin(t),B=b.f.length,v=b.a.length,L,M,J,C,sa,la;for(L=0;L<d;L+=e)sa=c[L]-b.o[0],la=c[L+1]-b.o[1],M=v/8,J=-x*f,C=-x*(h-g),b.a[v++]=sa,b.a[v++]=la,b.a[v++]=J*A-C*t,b.a[v++]=J*t+C*A,b.a[v++]=p/m,b.a[v++]=(q+h)/k,b.a[v++]=n,b.a[v++]=r,J=x*(z-f),C=-x*(h-g),b.a[v++]=sa,b.a[v++]=la,b.a[v++]=J*A-C*t,b.a[v++]=J*t+C*A,b.a[v++]=(p+z)/m,b.a[v++]=(q+h)/k,b.a[v++]=n,b.a[v++]=r,J=x*(z-
f),C=x*g,b.a[v++]=sa,b.a[v++]=la,b.a[v++]=J*A-C*t,b.a[v++]=J*t+C*A,b.a[v++]=(p+z)/m,b.a[v++]=q/k,b.a[v++]=n,b.a[v++]=r,J=-x*f,C=x*g,b.a[v++]=sa,b.a[v++]=la,b.a[v++]=J*A-C*t,b.a[v++]=J*t+C*A,b.a[v++]=p/m,b.a[v++]=q/k,b.a[v++]=n,b.a[v++]=r,b.f[B++]=M,b.f[B++]=M+1,b.f[B++]=M+2,b.f[B++]=M,b.f[B++]=M+2,b.f[B++]=M+3}Aq.prototype.Gb=function(b,c){this.b.push(this.f.length);this.G.push(c);var d=b.ia();Cq(this,d,d.length,b.ra())};
Aq.prototype.Hb=function(b,c){this.b.push(this.f.length);this.G.push(c);var d=b.ia();Cq(this,d,d.length,b.ra())};function Dq(b,c){var d=c.a;b.v.push(b.f.length);b.i.push(b.f.length);b.B=new qq(b.a);sq(c,34962,b.B);b.l=new qq(b.f);sq(c,34963,b.l);var e={};Eq(b.wa,b.g,e,d);Eq(b.j,b.c,e,d);b.C=void 0;b.D=void 0;b.na=void 0;b.g=null;b.c=null;b.va=void 0;b.U=void 0;b.f=null;b.T=void 0;b.V=void 0;b.fa=void 0;b.ga=void 0;b.oa=void 0;b.gb=void 0;b.a=null;b.pa=void 0}
function Eq(b,c,d,e){var f,g,h,k=c.length;for(h=0;h<k;++h)f=c[h],g=w(f).toString(),g in d?f=d[g]:(f=zq(e,f),d[g]=f),b[h]=f}
function Fq(b,c,d,e,f,g,h,k,m,n,p){var q=c.a;sq(c,34962,b.B);sq(c,34963,b.l);var r=nq.Yb(),t=oq.Yb(),t=xq(c,r,t);b.O?r=b.O:(r=new pq(q,t),b.O=r);c.He(t);q.enableVertexAttribArray(r.c);q.vertexAttribPointer(r.c,2,5126,!1,32,0);q.enableVertexAttribArray(r.a);q.vertexAttribPointer(r.a,2,5126,!1,32,8);q.enableVertexAttribArray(r.g);q.vertexAttribPointer(r.g,2,5126,!1,32,16);q.enableVertexAttribArray(r.f);q.vertexAttribPointer(r.f,1,5126,!1,32,24);q.enableVertexAttribArray(r.b);q.vertexAttribPointer(r.b,
1,5126,!1,32,28);t=b.Eb;gk(t,0,0,2/(e*g[0]),2/(e*g[1]),-f,-(d[0]-b.o[0]),-(d[1]-b.o[1]));d=b.Db;e=2/g[0];g=2/g[1];Fd(d);d[0]=e;d[5]=g;d[10]=1;d[15]=1;g=b.hb;Fd(g);0!==f&&Kd(g,-f);q.uniformMatrix4fv(r.j,!1,t);q.uniformMatrix4fv(r.o,!1,d);q.uniformMatrix4fv(r.l,!1,g);q.uniform1f(r.i,h);var x;if(void 0===m)Gq(b,q,c,k,b.wa,b.v);else{if(n)a:{f=c.b?5125:5123;c=c.b?4:2;g=b.b.length-1;for(h=b.j.length-1;0<=h;--h)for(q.bindTexture(3553,b.j[h]),n=0<h?b.i[h-1]:0,t=b.i[h];0<=g&&b.b[g]>=n;){x=b.b[g];d=b.G[g];
e=w(d).toString();if(void 0===k[e]&&d.X()&&(void 0===p||oe(p,d.X().J()))&&(q.clear(q.COLOR_BUFFER_BIT|q.DEPTH_BUFFER_BIT),q.drawElements(4,t-x,f,x*c),t=m(d))){b=t;break a}t=x;g--}b=void 0}else q.clear(q.COLOR_BUFFER_BIT|q.DEPTH_BUFFER_BIT),Gq(b,q,c,k,b.j,b.i),b=(b=m(null))?b:void 0;x=b}q.disableVertexAttribArray(r.c);q.disableVertexAttribArray(r.a);q.disableVertexAttribArray(r.g);q.disableVertexAttribArray(r.f);q.disableVertexAttribArray(r.b);return x}
function Gq(b,c,d,e,f,g){var h=d.b?5125:5123;d=d.b?4:2;if(Pb(e)){var k;b=0;e=f.length;for(k=0;b<e;++b){c.bindTexture(3553,f[b]);var m=g[b];c.drawElements(4,m-k,h,k*d);k=m}}else{k=0;var n,m=0;for(n=f.length;m<n;++m){c.bindTexture(3553,f[m]);for(var p=0<m?g[m-1]:0,q=g[m],r=p;k<b.b.length&&b.b[k]<=q;){var t=w(b.G[k]).toString();void 0!==e[t]?(r!==p&&c.drawElements(4,p-r,h,r*d),p=r=k===b.b.length-1?q:b.b[k+1]):p=k===b.b.length-1?q:b.b[k+1];k++}r!==p&&c.drawElements(4,p-r,h,r*d)}}}
Aq.prototype.ub=function(b){var c=b.Xb(),d=b.gc(1),e=b.rd(),f=b.Ae(1),g=b.B,h=b.Da(),k=b.C,m=b.G,n=b.Cb();b=b.j;var p;0===this.g.length?this.g.push(d):(p=this.g[this.g.length-1],w(p)!=w(d)&&(this.v.push(this.f.length),this.g.push(d)));0===this.c.length?this.c.push(f):(p=this.c[this.c.length-1],w(p)!=w(f)&&(this.i.push(this.f.length),this.c.push(f)));this.C=c[0];this.D=c[1];this.na=n[1];this.va=e[1];this.U=e[0];this.T=g;this.V=h[0];this.fa=h[1];this.oa=m;this.ga=k;this.gb=b;this.pa=n[0]};
function Hq(b,c,d){this.i=c;this.j=b;this.g=d;this.f={}}function Iq(b,c){var d=[],e;for(e in b.f)d.push(Bq(b.f[e],c));return xe.apply(null,d)}function Jq(b,c){for(var d in b.f)Dq(b.f[d],c)}Hq.prototype.a=function(b,c){var d=this.f[c];void 0===d&&(d=new Kq[c](this.j,this.i),this.f[c]=d);return d};Hq.prototype.La=function(){return Pb(this.f)};Hq.prototype.b=function(b,c,d,e,f,g,h,k){var m,n;g=0;for(m=zm.length;g<m;++g)n=this.f[zm[g]],void 0!==n&&Fq(n,b,c,d,e,f,h,k,void 0,!1)};
function Lq(b,c,d,e,f,g,h,k,m,n){var p=Mq,q,r;for(q=zm.length-1;0<=q;--q)if(r=b.f[zm[q]],void 0!==r&&(r=Fq(r,c,d,e,f,p,g,h,k,m,n)))return r}Hq.prototype.c=function(b,c,d,e,f,g,h,k,m,n){var p=c.a;p.bindFramebuffer(p.FRAMEBUFFER,uq(c));var q;void 0!==this.g&&(q=Qd(Xd(b),e*this.g));return Lq(this,c,b,e,f,k,m,function(b){var c=new Uint8Array(4);p.readPixels(0,0,1,1,p.RGBA,p.UNSIGNED_BYTE,c);if(0<c[3]&&(b=n(b)))return b},!0,q)};
function Nq(b,c,d,e,f,g,h){var k=d.a;k.bindFramebuffer(k.FRAMEBUFFER,uq(d));return void 0!==Lq(b,d,c,e,f,g,h,function(){var b=new Uint8Array(4);k.readPixels(0,0,1,1,k.RGBA,k.UNSIGNED_BYTE,b);return 0<b[3]},!1)}var Kq={Image:Aq},Mq=[1,1];function Oq(b,c,d,e,f,g){this.f=b;this.g=c;this.c=g;this.l=f;this.j=e;this.i=d;this.b=null;this.a={}}y(Oq,ak);l=Oq.prototype;l.md=function(b,c){var d=b.toString(),e=this.a[d];void 0!==e?e.push(c):this.a[d]=[c]};l.Gc=function(){};l.jf=function(b,c){var d=(0,c.c)(b);if(d&&oe(this.c,d.J())){var e=c.a;void 0===e&&(e=0);this.md(e,function(b){b.bb(c.g,c.b);b.ub(c.f);b.cb(c.Ca());var e=Pq[d.W()];e&&e.call(b,d,null)})}};
l.Yd=function(b,c){var d=b.c,e,f;e=0;for(f=d.length;e<f;++e){var g=d[e],h=Pq[g.W()];h&&h.call(this,g,c)}};l.Hb=function(b,c){var d=this.f,e=(new Hq(1,this.c)).a(0,"Image");e.ub(this.b);e.Hb(b,c);Dq(e,d);Fq(e,this.f,this.g,this.i,this.j,this.l,1,{},void 0,!1);Bq(e,d)()};l.Wb=function(){};l.Hc=function(){};l.Gb=function(b,c){var d=this.f,e=(new Hq(1,this.c)).a(0,"Image");e.ub(this.b);e.Gb(b,c);Dq(e,d);Fq(e,this.f,this.g,this.i,this.j,this.l,1,{},void 0,!1);Bq(e,d)()};l.Ic=function(){};l.Jc=function(){};
l.Ib=function(){};l.bb=function(){};l.ub=function(b){this.b=b};l.cb=function(){};var Pq={Point:Oq.prototype.Hb,MultiPoint:Oq.prototype.Gb,GeometryCollection:Oq.prototype.Yd};function Qq(){this.a="precision mediump float;varying vec2 a;uniform float f;uniform sampler2D g;void main(void){vec4 texColor=texture2D(g,a);gl_FragColor.rgb=texColor.rgb;gl_FragColor.a=texColor.a*f;}"}y(Qq,lq);ea(Qq);function Rq(){this.a="varying vec2 a;attribute vec2 b;attribute vec2 c;uniform mat4 d;uniform mat4 e;void main(void){gl_Position=e*vec4(b,0.,1.);a=(d*vec4(c,0.,1.)).st;}"}y(Rq,mq);ea(Rq);
function Sq(b,c){this.b=b.getUniformLocation(c,"f");this.c=b.getUniformLocation(c,"e");this.i=b.getUniformLocation(c,"d");this.g=b.getUniformLocation(c,"g");this.a=b.getAttribLocation(c,"b");this.f=b.getAttribLocation(c,"c")};function Tq(b,c){jk.call(this,c);this.b=b;this.U=new qq([-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,1,1,1]);this.g=this.mb=null;this.i=void 0;this.o=Bd();this.B=Dd();this.G=null}y(Tq,jk);
function Uq(b,c,d){var e=b.b.b;if(void 0===b.i||b.i!=d){c.postRenderFunctions.push(va(function(b,c,d){b.isContextLost()||(b.deleteFramebuffer(c),b.deleteTexture(d))},e,b.g,b.mb));c=vq(e,d,d);var f=e.createFramebuffer();e.bindFramebuffer(36160,f);e.framebufferTexture2D(36160,36064,3553,c,0);b.mb=c;b.g=f;b.i=d}else e.bindFramebuffer(36160,b.g)}
Tq.prototype.nh=function(b,c,d){Vq(this,"precompose",d,b);sq(d,34962,this.U);var e=d.a,f=Qq.Yb(),g=Rq.Yb(),f=xq(d,f,g);this.G?g=this.G:this.G=g=new Sq(e,f);d.He(f)&&(e.enableVertexAttribArray(g.a),e.vertexAttribPointer(g.a,2,5126,!1,16,0),e.enableVertexAttribArray(g.f),e.vertexAttribPointer(g.f,2,5126,!1,16,8),e.uniform1i(g.g,0));e.uniformMatrix4fv(g.i,!1,this.o);e.uniformMatrix4fv(g.c,!1,this.B);e.uniform1f(g.b,c.opacity);e.bindTexture(3553,this.mb);e.drawArrays(5,0,4);Vq(this,"postcompose",d,b)};
function Vq(b,c,d,e){b=b.a;if(cd(b,c)){var f=e.viewState;b.s(new bk(c,b,new Oq(d,f.center,f.resolution,f.rotation,e.size,e.extent),e,null,d))}}Tq.prototype.Cf=function(){this.g=this.mb=null;this.i=void 0};function Wq(b,c){Tq.call(this,b,c);this.l=this.j=this.c=null}y(Wq,Tq);function Xq(b,c){var d=c.a();return zq(b.b.b,d)}Wq.prototype.ab=function(b,c,d,e){var f=this.a;return f.ea().ye(b,c.viewState.resolution,c.viewState.rotation,c.skippedFeatureUids,function(b){return d.call(e,b,f)})};
Wq.prototype.Df=function(b,c){var d=this.b.b,e=b.pixelRatio,f=b.viewState,g=f.center,h=f.resolution,k=f.rotation,m=this.c,n=this.mb,p=this.a.ea(),q=b.viewHints,r=b.extent;void 0!==c.extent&&(r=ne(r,c.extent));q[0]||q[1]||ie(r)||(f=p.C(r,h,e,f.projection))&&lk(this,f)&&(m=f,n=Xq(this,f),this.mb&&b.postRenderFunctions.push(va(function(b,c){b.isContextLost()||b.deleteTexture(c)},d,this.mb)));m&&(d=this.b.g.G,Yq(this,d.width,d.height,e,g,h,k,m.J()),this.l=null,e=this.o,Fd(e),Jd(e,1,-1),Id(e,0,-1),this.c=
m,this.mb=n,nk(b.attributions,m.i),ok(b,p));return!0};function Yq(b,c,d,e,f,g,h,k){c*=g;d*=g;b=b.B;Fd(b);Jd(b,2*e/c,2*e/d);Kd(b,-h);Id(b,k[0]-f[0],k[1]-f[1]);Jd(b,(k[2]-k[0])/2,(k[3]-k[1])/2);Id(b,1,1)}Wq.prototype.xe=function(b,c){return void 0!==this.ab(b,c,te,this)};
Wq.prototype.vc=function(b,c,d,e){if(this.c&&this.c.a())if(this.a.ea()instanceof Mp){if(b=b.slice(),ik(c.pixelToCoordinateMatrix,b,b),this.ab(b,c,te,this))return d.call(e,this.a)}else{var f=[this.c.a().width,this.c.a().height];if(!this.l){var g=c.size;c=Bd();Fd(c);Id(c,-1,-1);Jd(c,2/g[0],2/g[1]);Id(c,0,g[1]);Jd(c,1,-1);g=Bd();Hd(this.B,g);var h=Bd();Fd(h);Id(h,0,f[1]);Jd(h,1,-1);Jd(h,f[0]/2,f[1]/2);Id(h,1,1);var k=Bd();Gd(h,g,k);Gd(k,c,k);this.l=k}c=[0,0];ik(this.l,b,c);if(!(0>c[0]||c[0]>f[0]||0>
c[1]||c[1]>f[1])&&(this.j||(this.j=Ni(1,1)),this.j.clearRect(0,0,1,1),this.j.drawImage(this.c.a(),c[0],c[1],1,1,0,0,1,1),0<this.j.getImageData(0,0,1,1).data[3]))return d.call(e,this.a)}};function Zq(){this.a="precision mediump float;varying vec2 a;uniform sampler2D e;void main(void){gl_FragColor=texture2D(e,a);}"}y(Zq,lq);ea(Zq);function $q(){this.a="varying vec2 a;attribute vec2 b;attribute vec2 c;uniform vec4 d;void main(void){gl_Position=vec4(b*d.xy+d.zw,0.,1.);a=c;}"}y($q,mq);ea($q);function ar(b,c){this.b=b.getUniformLocation(c,"e");this.c=b.getUniformLocation(c,"d");this.a=b.getAttribLocation(c,"b");this.f=b.getAttribLocation(c,"c")};function br(b,c){Tq.call(this,b,c);this.D=Zq.Yb();this.T=$q.Yb();this.c=null;this.C=new qq([0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0]);this.v=this.j=null;this.l=-1;this.O=[0,0]}y(br,Tq);l=br.prototype;l.Y=function(){tq(this.b.g,this.C);br.ca.Y.call(this)};l.cd=function(b,c,d){var e=this.b;return function(f,g){return Oh(b,c,f,g,function(b){var c=qh(e.f,b.$a());c&&(d[f]||(d[f]={}),d[f][b.a.toString()]=b);return c})}};l.Cf=function(){br.ca.Cf.call(this);this.c=null};
l.Df=function(b,c,d){var e=this.b,f=d.a,g=b.viewState,h=g.projection,k=this.a,m=k.ea(),n=m.ib(h),p=Ih(n,g.resolution),q=n.$(p),r=m.Qb(p,b.pixelRatio,h),t=r[0]/md(n.Ka(p),this.O)[0],x=q/t,z=m.ae(),A=g.center,B;q==g.resolution?(A=qk(A,q,b.size),B=me(A,q,g.rotation,b.size)):B=b.extent;q=Fh(n,B,q);if(this.j&&ig(this.j,q)&&this.l==m.f)x=this.v;else{var v=[kg(q),jg(q)],L=Math.pow(2,Math.ceil(Math.log(Math.max(v[0]*r[0],v[1]*r[1]))/Math.LN2)),v=x*L,M=n.Da(p),J=M[0]+q.a*r[0]*x,x=M[1]+q.f*r[1]*x,x=[J,x,J+
v,x+v];Uq(this,b,L);f.viewport(0,0,L,L);f.clearColor(0,0,0,0);f.clear(16384);f.disable(3042);L=xq(d,this.D,this.T);d.He(L);this.c||(this.c=new ar(f,L));sq(d,34962,this.C);f.enableVertexAttribArray(this.c.a);f.vertexAttribPointer(this.c.a,2,5126,!1,16,0);f.enableVertexAttribArray(this.c.f);f.vertexAttribPointer(this.c.f,2,5126,!1,16,8);f.uniform1i(this.c.b,0);d={};d[p]={};var C=this.cd(m,h,d),sa=k.b(),L=!0,J=Md(),la=new fg(0,0,0,0),K,ma,Ua;for(ma=q.a;ma<=q.c;++ma)for(Ua=q.f;Ua<=q.b;++Ua){M=m.Pb(p,
ma,Ua,t,h);if(void 0!==c.extent&&(K=n.Aa(M.a,J),!oe(K,c.extent)))continue;K=M.state;K=2==K||4==K||3==K&&!sa;!K&&M.f&&(M=M.f);K=M.state;if(2==K){if(qh(e.f,M.$a())){d[p][eg(M.a)]=M;continue}}else if(4==K||3==K&&!sa)continue;L=!1;K=Ch(n,M.a,C,la,J);K||(M=Eh(n,M.a,la,J))&&C(p+1,M)}c=Object.keys(d).map(Number);c.sort(ub);for(var C=new Float32Array(4),Nb,na,Fa,sa=0,la=c.length;sa<la;++sa)for(Nb in na=d[c[sa]],na)M=na[Nb],K=n.Aa(M.a,J),ma=2*(K[2]-K[0])/v,Ua=2*(K[3]-K[1])/v,Fa=2*(K[0]-x[0])/v-1,K=2*(K[1]-
x[1])/v-1,Ad(C,ma,Ua,Fa,K),f.uniform4fv(this.c.c,C),cr(e,M,r,z*t),f.drawArrays(5,0,4);L?(this.j=q,this.v=x,this.l=m.f):(this.v=this.j=null,this.l=-1,b.animate=!0)}pk(b.usedTiles,m,p,q);var ad=e.l;rk(b,m,n,t,h,B,p,k.a(),function(b){var c;(c=2!=b.state||qh(e.f,b.$a()))||(c=b.$a()in ad.b);c||ad.c([b,Hh(n,b.a),n.$(b.a[0]),r,z*t])},this);mk(b,m);ok(b,m);f=this.o;Fd(f);Id(f,(A[0]-x[0])/(x[2]-x[0]),(A[1]-x[1])/(x[3]-x[1]));0!==g.rotation&&Kd(f,g.rotation);Jd(f,b.size[0]*g.resolution/(x[2]-x[0]),b.size[1]*
g.resolution/(x[3]-x[1]));Id(f,-.5,-.5);return!0};l.vc=function(b,c,d,e){if(this.g){var f=[0,0];ik(this.o,[b[0]/c.size[0],(c.size[1]-b[1])/c.size[1]],f);b=[f[0]*this.i,f[1]*this.i];c=this.b.g.a;c.bindFramebuffer(c.FRAMEBUFFER,this.g);f=new Uint8Array(4);c.readPixels(b[0],b[1],1,1,c.RGBA,c.UNSIGNED_BYTE,f);if(0<f[3])return d.call(e,this.a)}};function dr(b,c){Tq.call(this,b,c);this.l=!1;this.O=-1;this.D=NaN;this.v=Md();this.j=this.c=this.C=null}y(dr,Tq);l=dr.prototype;l.nh=function(b,c,d){this.j=c;var e=b.viewState,f=this.c;f&&!f.La()&&f.b(d,e.center,e.resolution,e.rotation,b.size,b.pixelRatio,c.opacity,c.Bb?b.skippedFeatureUids:{})};l.Y=function(){var b=this.c;b&&(Iq(b,this.b.g)(),this.c=null);dr.ca.Y.call(this)};
l.ab=function(b,c,d,e){if(this.c&&this.j){var f=c.viewState,g=this.a,h=this.j,k={};return this.c.c(b,this.b.g,f.center,f.resolution,f.rotation,c.size,c.pixelRatio,h.opacity,h.Bb?c.skippedFeatureUids:{},function(b){var c=w(b).toString();if(!(c in k))return k[c]=!0,d.call(e,b,g)})}};l.xe=function(b,c){if(this.c&&this.j){var d=c.viewState;return Nq(this.c,b,this.b.g,d.resolution,d.rotation,this.j.opacity,c.skippedFeatureUids)}return!1};
l.vc=function(b,c,d,e){b=b.slice();ik(c.pixelToCoordinateMatrix,b,b);if(this.xe(b,c))return d.call(e,this.a)};l.oh=function(){kk(this)};
l.Df=function(b,c,d){function e(b){var c,d=b.ac();d?c=d.call(b,n):(d=f.b)&&(c=d(b,n));if(c){if(c){d=!1;if(ga(c))for(var e=0,g=c.length;e<g;++e)d=Vm(r,b,c[e],Um(n,p),this.oh,this)||d;else d=Vm(r,b,c,Um(n,p),this.oh,this)||d;b=d}else b=!1;this.l=this.l||b}}var f=this.a;c=f.ea();nk(b.attributions,c.i);ok(b,c);var g=b.viewHints[0],h=b.viewHints[1],k=f.j,m=f.l;if(!this.l&&!k&&g||!m&&h)return!0;var h=b.extent,k=b.viewState,g=k.projection,n=k.resolution,p=b.pixelRatio,k=f.f,q=f.a,m=fm(f);void 0===m&&(m=
Tm);h=Qd(h,q*n);if(!this.l&&this.D==n&&this.O==k&&this.C==m&&Vd(this.v,h))return!0;this.c&&b.postRenderFunctions.push(Iq(this.c,d));this.l=!1;var r=new Hq(.5*n/p,h,f.a);c.Nc(h,n,g);if(m){var t=[];c.pb(h,function(b){t.push(b)},this);t.sort(m);t.forEach(e,this)}else c.pb(h,e,this);Jq(r,d);this.D=n;this.O=k;this.C=m;this.v=h;this.c=r;return!0};function er(b,c){xk.call(this,0,c);this.a=document.createElement("CANVAS");this.a.style.width="100%";this.a.style.height="100%";this.a.className="ol-unselectable";Lg(b,this.a,0);this.v=this.C=0;this.D=Ni();this.o=!0;this.b=Ti(this.a,{antialias:!0,depth:!1,failIfMajorPerformanceCaveat:!0,preserveDrawingBuffer:!1,stencil:!0});this.g=new rq(this.a,this.b);D(this.a,"webglcontextlost",this.Em,!1,this);D(this.a,"webglcontextrestored",this.Fm,!1,this);this.f=new ph;this.B=null;this.l=new Ck(ua(function(b){var c=
b[1];b=b[2];var f=c[0]-this.B[0],c=c[1]-this.B[1];return 65536*Math.log(b)+Math.sqrt(f*f+c*c)/b},this),function(b){return b[0].$a()});this.O=ua(function(){if(!this.l.La()){Gk(this.l);var b=Dk(this.l);cr(this,b[0],b[3],b[4])}},this);this.j=0;fr(this)}y(er,xk);
function cr(b,c,d,e){var f=b.b,g=c.$a();if(qh(b.f,g))b=b.f.get(g),f.bindTexture(3553,b.mb),9729!=b.Sg&&(f.texParameteri(3553,10240,9729),b.Sg=9729),9729!=b.Tg&&(f.texParameteri(3553,10240,9729),b.Tg=9729);else{var h=f.createTexture();f.bindTexture(3553,h);if(0<e){var k=b.D.canvas,m=b.D;b.C!==d[0]||b.v!==d[1]?(k.width=d[0],k.height=d[1],b.C=d[0],b.v=d[1]):m.clearRect(0,0,d[0],d[1]);m.drawImage(c.Ta(),e,e,d[0],d[1],0,0,d[0],d[1]);f.texImage2D(3553,0,6408,6408,5121,k)}else f.texImage2D(3553,0,6408,6408,
5121,c.Ta());f.texParameteri(3553,10240,9729);f.texParameteri(3553,10241,9729);f.texParameteri(3553,10242,33071);f.texParameteri(3553,10243,33071);b.f.set(g,{mb:h,Sg:9729,Tg:9729})}}l=er.prototype;l.hf=function(b){return b instanceof Pl?new Wq(this,b):b instanceof G?new br(this,b):b instanceof H?new dr(this,b):null};
function gr(b,c,d){var e=b.i;if(cd(e,c)){var f=b.g;b=d.viewState;b=new Oq(f,b.center,b.resolution,b.rotation,d.size,d.extent);e.s(new bk(c,e,b,d,null,f));c=Object.keys(b.a).map(Number);c.sort(ub);var g,h;d=0;for(e=c.length;d<e;++d)for(f=b.a[c[d].toString()],g=0,h=f.length;g<h;++g)f[g](b)}}l.Y=function(){var b=this.b;b.isContextLost()||this.f.forEach(function(c){c&&b.deleteTexture(c.mb)});sc(this.g);er.ca.Y.call(this)};
l.xj=function(b,c){for(var d=this.b,e;1024<this.f.qc()-this.j;){if(e=this.f.a.mc)d.deleteTexture(e.mb);else if(+this.f.a.oe==c.index)break;else--this.j;this.f.pop()}};l.W=function(){return"webgl"};l.Em=function(b){b.preventDefault();this.f.clear();this.j=0;Ib(this.c,function(b){b.Cf()})};l.Fm=function(){fr(this);this.i.render()};function fr(b){b=b.b;b.activeTexture(33984);b.blendFuncSeparate(770,771,1,771);b.disable(2884);b.disable(2929);b.disable(3089);b.disable(2960)}
l.Ne=function(b){var c=this.g,d=this.b;if(d.isContextLost())return!1;if(!b)return this.o&&(gh(this.a,!1),this.o=!1),!1;this.B=b.focus;this.f.set((-b.index).toString(),null);++this.j;gr(this,"precompose",b);var e=[],f=b.layerStatesArray;pb(f);var g=b.viewState.resolution,h,k,m,n;h=0;for(k=f.length;h<k;++h)n=f[h],dk(n,g)&&"ready"==n.O&&(m=Ak(this,n.layer),m.Df(b,n,c)&&e.push(n));f=b.size[0]*b.pixelRatio;g=b.size[1]*b.pixelRatio;if(this.a.width!=f||this.a.height!=g)this.a.width=f,this.a.height=g;d.bindFramebuffer(36160,
null);d.clearColor(0,0,0,0);d.clear(16384);d.enable(3042);d.viewport(0,0,this.a.width,this.a.height);h=0;for(k=e.length;h<k;++h)n=e[h],m=Ak(this,n.layer),m.nh(b,n,c);this.o||(gh(this.a,!0),this.o=!0);yk(b);1024<this.f.qc()-this.j&&b.postRenderFunctions.push(ua(this.xj,this));this.l.La()||(b.postRenderFunctions.push(this.O),b.animate=!0);gr(this,"postcompose",b);Bk(this,b);b.postRenderFunctions.push(zk)};
l.Bf=function(b,c,d,e,f,g){var h;if(this.b.isContextLost())return!1;var k=c.viewState,m=c.layerStatesArray,n;for(n=m.length-1;0<=n;--n){h=m[n];var p=h.layer;if(dk(h,k.resolution)&&f.call(g,p)&&(h=Ak(this,p).ab(b,c,d,e)))return h}};l.mh=function(b,c,d,e){var f=!1;if(this.b.isContextLost())return!1;var g=c.viewState,h=c.layerStatesArray,k;for(k=h.length-1;0<=k;--k){var m=h[k],n=m.layer;if(dk(m,g.resolution)&&d.call(e,n)&&(f=Ak(this,n).xe(b,c)))return!0}return f};
l.lh=function(b,c,d,e,f){if(this.b.isContextLost())return!1;var g=c.viewState,h,k=c.layerStatesArray,m;for(m=k.length-1;0<=m;--m){h=k[m];var n=h.layer;if(dk(h,g.resolution)&&f.call(e,n)&&(h=Ak(this,n).vc(b,c,d,e)))return h}};var hr=["canvas","webgl","dom"];
function S(b){gd.call(this);var c=ir(b);this.nc=void 0!==b.loadTilesWhileAnimating?b.loadTilesWhileAnimating:!1;this.Cc=void 0!==b.loadTilesWhileInteracting?b.loadTilesWhileInteracting:!1;this.Xe=void 0!==b.pixelRatio?b.pixelRatio:Vi;this.Yc=c.logos;this.v=new gi(this.Eo,void 0,this);rc(this,this.v);this.Db=Bd();this.Ye=Bd();this.Eb=0;this.b=null;this.wa=Md();this.D=this.U=null;this.a=document.createElement("DIV");this.a.className="ol-viewport";this.a.style.position="relative";this.a.style.overflow=
"hidden";this.a.style.width="100%";this.a.style.height="100%";this.a.style.msTouchAction="none";this.a.style.touchAction="none";$i&&Ug(this.a,"ol-touch");this.l=document.createElement("DIV");this.l.className="ol-overlaycontainer";this.a.appendChild(this.l);this.j=document.createElement("DIV");this.j.className="ol-overlaycontainer-stopevent";D(this.j,["click","dblclick","mousedown","touchstart","MSPointerDown",Uj,$b?"DOMMouseScroll":"mousewheel"],uc);this.a.appendChild(this.j);b=new Mj(this);D(b,Lb(Xj),
this.Kg,!1,this);rc(this,b);this.ga=c.keyboardEventTarget;this.C=new yi;D(this.C,"key",this.Jg,!1,this);rc(this,this.C);b=new Gi(this.a);D(b,"mousewheel",this.Jg,!1,this);rc(this,b);this.g=c.controls;this.c=c.interactions;this.i=c.overlays;this.V={};this.o=new c.Go(this.a,this);rc(this,this.o);this.hb=new ti;rc(this,this.hb);this.T=this.B=null;this.O=[];this.pa=[];this.oa=new Hk(ua(this.qk,this),ua(this.Zk,this));this.fa={};D(this,id("layergroup"),this.Ek,!1,this);D(this,id("view"),this.$k,!1,this);
D(this,id("size"),this.Wk,!1,this);D(this,id("target"),this.Yk,!1,this);this.I(c.values);this.g.forEach(function(b){b.setMap(this)},this);D(this.g,"add",function(b){b.element.setMap(this)},!1,this);D(this.g,"remove",function(b){b.element.setMap(null)},!1,this);this.c.forEach(function(b){b.setMap(this)},this);D(this.c,"add",function(b){b.element.setMap(this)},!1,this);D(this.c,"remove",function(b){b.element.setMap(null)},!1,this);this.i.forEach(this.mg,this);D(this.i,"add",function(b){this.mg(b.element)},
!1,this);D(this.i,"remove",function(b){var c=b.element.Oa();void 0!==c&&delete this.V[c.toString()];b.element.setMap(null)},!1,this)}y(S,gd);l=S.prototype;l.kj=function(b){this.g.push(b)};l.lj=function(b){this.c.push(b)};l.kg=function(b){this.rc().Qc().push(b)};l.lg=function(b){this.i.push(b)};l.mg=function(b){var c=b.Oa();void 0!==c&&(this.V[c.toString()]=b);b.setMap(this)};l.Na=function(b){this.render();Array.prototype.push.apply(this.O,arguments)};l.Y=function(){Mg(this.a);S.ca.Y.call(this)};
l.pd=function(b,c,d,e,f){if(this.b)return b=this.Ga(b),this.o.Bf(b,this.b,c,void 0!==d?d:null,void 0!==e?e:te,void 0!==f?f:null)};l.Jl=function(b,c,d,e,f){if(this.b)return this.o.lh(b,this.b,c,void 0!==d?d:null,void 0!==e?e:te,void 0!==f?f:null)};l.bl=function(b,c,d){if(!this.b)return!1;b=this.Ga(b);return this.o.mh(b,this.b,void 0!==c?c:te,void 0!==d?d:null)};l.Mj=function(b){return this.Ga(this.$d(b))};l.$d=function(b){var c;c=this.a;b=dh(b);c=dh(c);c=new yg(b.x-c.x,b.y-c.y);return[c.x,c.y]};
l.xf=function(){return this.get("target")};l.Mc=function(){var b=this.xf();return void 0!==b?Dg(b):null};l.Ga=function(b){var c=this.b;return c?(b=b.slice(),ik(c.pixelToCoordinateMatrix,b,b)):null};l.Kj=function(){return this.g};l.dk=function(){return this.i};l.ck=function(b){b=this.V[b.toString()];return void 0!==b?b:null};l.Rj=function(){return this.c};l.rc=function(){return this.get("layergroup")};l.Zg=function(){return this.rc().Qc()};
l.Pa=function(b){var c=this.b;return c?(b=b.slice(0,2),ik(c.coordinateToPixelMatrix,b,b)):null};l.Sa=function(){return this.get("size")};l.aa=function(){return this.get("view")};l.sk=function(){return this.a};l.qk=function(b,c,d,e){var f=this.b;if(!(f&&c in f.wantedTiles&&f.wantedTiles[c][eg(b.a)]))return Infinity;b=d[0]-f.focus[0];d=d[1]-f.focus[1];return 65536*Math.log(e)+Math.sqrt(b*b+d*d)/e};l.Jg=function(b,c){var d=new Kj(c||b.type,this,b);this.Kg(d)};
l.Kg=function(b){if(this.b){this.T=b.coordinate;b.frameState=this.b;var c=this.c.a,d;if(!1!==this.s(b))for(d=c.length-1;0<=d;d--){var e=c[d];if(e.b()&&!e.handleEvent(b))break}}};l.Uk=function(){var b=this.b,c=this.oa;if(!c.La()){var d=16,e=d,f=0;b&&(f=b.viewHints,f[0]&&(d=this.nc?8:0,e=2),f[1]&&(d=this.Cc?8:0,e=2),f=Kb(b.wantedTiles));d*=f;e*=f;c.g<d&&(Gk(c),Ik(c,d,e))}c=this.pa;d=0;for(e=c.length;d<e;++d)c[d](this,b);c.length=0};l.Wk=function(){this.render()};
l.Yk=function(){var b=this.Mc();Fi(this.C);b?(b.appendChild(this.a),zi(this.C,this.ga?this.ga:b),this.B||(this.B=D(this.hb,"resize",this.Vc,!1,this))):(Mg(this.a),this.B&&(Wc(this.B),this.B=null));this.Vc()};l.Zk=function(){this.render()};l.al=function(){this.render()};l.$k=function(){this.U&&(Wc(this.U),this.U=null);var b=this.aa();b&&(this.U=D(b,"propertychange",this.al,!1,this));this.render()};l.Fk=function(){this.render()};l.Gk=function(){this.render()};
l.Ek=function(){this.D&&(this.D.forEach(Wc),this.D=null);var b=this.rc();b&&(this.D=[D(b,"propertychange",this.Gk,!1,this),D(b,"change",this.Fk,!1,this)]);this.render()};l.Fo=function(){var b=this.v;hi(b);b.c()};l.render=function(){null!=this.v.xa||this.v.start()};l.yo=function(b){return this.g.remove(b)};l.zo=function(b){return this.c.remove(b)};l.Bo=function(b){return this.rc().Qc().remove(b)};l.Co=function(b){return this.i.remove(b)};
l.Eo=function(b){var c,d,e,f=this.Sa(),g=this.aa(),h=null;if(void 0!==f&&0<f[0]&&0<f[1]&&g&&Rf(g)){var h=g.b.slice(),k=this.rc().of(),m={};c=0;for(d=k.length;c<d;++c)m[w(k[c].layer)]=k[c];e=Qf(g);h={animate:!1,attributions:{},coordinateToPixelMatrix:this.Db,extent:null,focus:this.T?this.T:e.center,index:this.Eb++,layerStates:m,layerStatesArray:k,logos:Tb(this.Yc),pixelRatio:this.Xe,pixelToCoordinateMatrix:this.Ye,postRenderFunctions:[],size:f,skippedFeatureUids:this.fa,tileQueue:this.oa,time:b,usedTiles:{},
viewState:e,viewHints:h,wantedTiles:{}}}if(h){b=this.O;c=f=0;for(d=b.length;c<d;++c)g=b[c],g(this,h)&&(b[f++]=g);b.length=f;h.extent=me(e.center,e.resolution,e.rotation,h.size)}this.b=h;this.o.Ne(h);h&&(h.animate&&this.render(),Array.prototype.push.apply(this.pa,h.postRenderFunctions),0!==this.O.length||h.viewHints[0]||h.viewHints[1]||ae(h.extent,this.wa)||(this.s(new nh("moveend",this,h)),Rd(h.extent,this.wa)));this.s(new nh("postrender",this,h));li(this.Uk,this)};
l.$h=function(b){this.set("layergroup",b)};l.Vf=function(b){this.set("size",b)};l.Kl=function(b){this.set("target",b)};l.To=function(b){this.set("view",b)};l.ii=function(b){b=w(b).toString();this.fa[b]=!0;this.render()};
l.Vc=function(){var b=this.Mc();if(b){var c=Cg(b),d=Yb&&b.currentStyle;d&&Qg(Ag(c))&&"auto"!=d.width&&"auto"!=d.height&&!d.boxSizing?(c=hh(b,d.width,"width","pixelWidth"),b=hh(b,d.height,"height","pixelHeight"),b=new zg(c,b)):(d=new zg(b.offsetWidth,b.offsetHeight),c=jh(b,"padding"),b=mh(b),b=new zg(d.width-b.left-c.left-c.right-b.right,d.height-b.top-c.top-c.bottom-b.bottom));this.Vf([b.width,b.height])}else this.Vf(void 0)};l.li=function(b){b=w(b).toString();delete this.fa[b];this.render()};
function ir(b){var c=null;void 0!==b.keyboardEventTarget&&(c=ia(b.keyboardEventTarget)?document.getElementById(b.keyboardEventTarget):b.keyboardEventTarget);var d={},e={};if(void 0===b.logo||"boolean"==typeof b.logo&&b.logo)e["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAHGAAABxgEXwfpGAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAhNQTFRF////AP//AICAgP//AFVVQECA////K1VVSbbbYL/fJ05idsTYJFtbbcjbJllmZszWWMTOIFhoHlNiZszTa9DdUcHNHlNlV8XRIVdiasrUHlZjIVZjaMnVH1RlIFRkH1RkH1ZlasvYasvXVsPQH1VkacnVa8vWIVZjIFRjVMPQa8rXIVVkXsXRsNveIFVkIFZlIVVj3eDeh6GmbMvXH1ZkIFRka8rWbMvXIFVkIFVjIFVkbMvWH1VjbMvWIFVlbcvWIFVla8vVIFVkbMvWbMvVH1VkbMvWIFVlbcvWIFVkbcvVbMvWjNPbIFVkU8LPwMzNIFVkbczWIFVkbsvWbMvXIFVkRnB8bcvW2+TkW8XRIFVkIlZlJVloJlpoKlxrLl9tMmJwOWd0Omh1RXF8TneCT3iDUHiDU8LPVMLPVcLPVcPQVsPPVsPQV8PQWMTQWsTQW8TQXMXSXsXRX4SNX8bSYMfTYcfTYsfTY8jUZcfSZsnUaIqTacrVasrVa8jTa8rWbI2VbMvWbcvWdJObdcvUdszUd8vVeJaee87Yfc3WgJyjhqGnitDYjaarldPZnrK2oNbborW5o9bbo9fbpLa6q9ndrL3ArtndscDDutzfu8fJwN7gwt7gxc/QyuHhy+HizeHi0NfX0+Pj19zb1+Tj2uXk29/e3uLg3+Lh3+bl4uXj4ufl4+fl5Ofl5ufl5ujm5+jmySDnBAAAAFp0Uk5TAAECAgMEBAYHCA0NDg4UGRogIiMmKSssLzU7PkJJT1JTVFliY2hrdHZ3foSFhYeJjY2QkpugqbG1tre5w8zQ09XY3uXn6+zx8vT09vf4+Pj5+fr6/P39/f3+gz7SsAAAAVVJREFUOMtjYKA7EBDnwCPLrObS1BRiLoJLnte6CQy8FLHLCzs2QUG4FjZ5GbcmBDDjxJBXDWxCBrb8aM4zbkIDzpLYnAcE9VXlJSWlZRU13koIeW57mGx5XjoMZEUqwxWYQaQbSzLSkYGfKFSe0QMsX5WbjgY0YS4MBplemI4BdGBW+DQ11eZiymfqQuXZIjqwyadPNoSZ4L+0FVM6e+oGI6g8a9iKNT3o8kVzNkzRg5lgl7p4wyRUL9Yt2jAxVh6mQCogae6GmflI8p0r13VFWTHBQ0rWPW7ahgWVcPm+9cuLoyy4kCJDzCm6d8PSFoh0zvQNC5OjDJhQopPPJqph1doJBUD5tnkbZiUEqaCnB3bTqLTFG1bPn71kw4b+GFdpLElKIzRxxgYgWNYc5SCENVHKeUaltHdXx0dZ8uBI1hJ2UUDgq82CM2MwKeibqAvSO7MCABq0wXEPiqWEAAAAAElFTkSuQmCC"]=
"http://openlayers.org/";else{var f=b.logo;ia(f)?e[f]="":oa(f)&&(e[f.src]=f.href)}f=b.layers instanceof Hl?b.layers:new Hl({layers:b.layers});d.layergroup=f;d.target=b.target;d.view=void 0!==b.view?b.view:new Nf;var f=xk,g;void 0!==b.renderer?ga(b.renderer)?g=b.renderer:ia(b.renderer)&&(g=[b.renderer]):g=hr;var h,k;h=0;for(k=g.length;h<k;++h){var m=g[h];if("canvas"==m){if(Xi){f=aq;break}}else if("dom"==m){f=iq;break}else if("webgl"==m&&Ui){f=er;break}}var n;void 0!==b.controls?n=ga(b.controls)?new og(b.controls.slice()):
b.controls:n=Xh();var p;void 0!==b.interactions?p=ga(b.interactions)?new og(b.interactions.slice()):b.interactions:p=Gl();b=void 0!==b.overlays?ga(b.overlays)?new og(b.overlays.slice()):b.overlays:new og;return{controls:n,interactions:p,keyboardEventTarget:c,logos:e,overlays:b,Go:f,values:d}}Ol();function jr(b){gd.call(this);this.xa=b.id;this.j=void 0!==b.insertFirst?b.insertFirst:!0;this.l=void 0!==b.stopEvent?b.stopEvent:!0;this.b=document.createElement("DIV");this.b.className="ol-overlay-container";this.b.style.position="absolute";this.autoPan=void 0!==b.autoPan?b.autoPan:!1;this.g=void 0!==b.autoPanAnimation?b.autoPanAnimation:{};this.i=void 0!==b.autoPanMargin?b.autoPanMargin:20;this.a={Ud:"",pe:"",Oe:"",Pe:"",visible:!0};this.c=null;D(this,id("element"),this.Ak,!1,this);D(this,id("map"),
this.Lk,!1,this);D(this,id("offset"),this.Qk,!1,this);D(this,id("position"),this.Sk,!1,this);D(this,id("positioning"),this.Tk,!1,this);void 0!==b.element&&this.Xh(b.element);this.bi(void 0!==b.offset?b.offset:[0,0]);this.ei(void 0!==b.positioning?b.positioning:"top-left");void 0!==b.position&&this.yf(b.position)}y(jr,gd);l=jr.prototype;l.se=function(){return this.get("element")};l.Oa=function(){return this.xa};l.te=function(){return this.get("map")};l.Gg=function(){return this.get("offset")};
l.$g=function(){return this.get("position")};l.Hg=function(){return this.get("positioning")};l.Ak=function(){Kg(this.b);var b=this.se();b&&this.b.appendChild(b)};l.Lk=function(){this.c&&(Mg(this.b),Wc(this.c),this.c=null);var b=this.te();b&&(this.c=D(b,"postrender",this.render,!1,this),kr(this),b=this.l?b.j:b.l,this.j?Lg(b,this.b,0):b.appendChild(this.b))};l.render=function(){kr(this)};l.Qk=function(){kr(this)};
l.Sk=function(){kr(this);if(void 0!==this.get("position")&&this.autoPan){var b=this.te();if(void 0!==b&&b.Mc()){var c=lr(b.Mc(),b.Sa()),d=this.se(),e=d.offsetWidth,f=d.currentStyle||window.getComputedStyle(d),e=e+(parseInt(f.marginLeft,10)+parseInt(f.marginRight,10)),f=d.offsetHeight,g=d.currentStyle||window.getComputedStyle(d),f=f+(parseInt(g.marginTop,10)+parseInt(g.marginBottom,10)),h=lr(d,[e,f]),d=this.i;Vd(c,h)||(e=h[0]-c[0],f=c[2]-h[2],g=h[1]-c[1],h=c[3]-h[3],c=[0,0],0>e?c[0]=e-d:0>f&&(c[0]=
Math.abs(f)+d),0>g?c[1]=g-d:0>h&&(c[1]=Math.abs(h)+d),0===c[0]&&0===c[1])||(d=b.aa().Ua(),e=b.Pa(d),c=[e[0]+c[0],e[1]+c[1]],this.g&&(this.g.source=d,b.Na(Yf(this.g))),b.aa().kb(b.Ga(c)))}}};l.Tk=function(){kr(this)};l.Xh=function(b){this.set("element",b)};l.setMap=function(b){this.set("map",b)};l.bi=function(b){this.set("offset",b)};l.yf=function(b){this.set("position",b)};
function lr(b,c){var d=Cg(b),e=new yg(0,0),f;f=d?Cg(d):document;f=!Yb||9<=kc||Qg(Ag(f))?f.documentElement:f.body;b!=f&&(f=ch(b),d=Rg(Ag(d)),e.x=f.left+d.x,e.y=f.top+d.y);return[e.x,e.y,e.x+c[0],e.y+c[1]]}l.ei=function(b){this.set("positioning",b)};function mr(b,c){b.a.visible!==c&&(gh(b.b,c),b.a.visible=c)}
function kr(b){var c=b.te(),d=b.$g();if(void 0!==c&&c.b&&void 0!==d){var d=c.Pa(d),e=c.Sa(),c=b.b.style,f=b.Gg(),g=b.Hg(),h=f[0],f=f[1];if("bottom-right"==g||"center-right"==g||"top-right"==g)""!==b.a.pe&&(b.a.pe=c.left=""),h=Math.round(e[0]-d[0]-h)+"px",b.a.Oe!=h&&(b.a.Oe=c.right=h);else{""!==b.a.Oe&&(b.a.Oe=c.right="");if("bottom-center"==g||"center-center"==g||"top-center"==g)h-=eh(b.b).width/2;h=Math.round(d[0]+h)+"px";b.a.pe!=h&&(b.a.pe=c.left=h)}if("bottom-left"==g||"bottom-center"==g||"bottom-right"==
g)""!==b.a.Pe&&(b.a.Pe=c.top=""),d=Math.round(e[1]-d[1]-f)+"px",b.a.Ud!=d&&(b.a.Ud=c.bottom=d);else{""!==b.a.Ud&&(b.a.Ud=c.bottom="");if("center-left"==g||"center-center"==g||"center-right"==g)f-=eh(b.b).height/2;d=Math.round(d[1]+f)+"px";b.a.Pe!=d&&(b.a.Pe=c.top=d)}mr(b,!0)}else mr(b,!1)};function nr(b){b=b?b:{};this.i=void 0!==b.collapsed?b.collapsed:!0;this.j=void 0!==b.collapsible?b.collapsible:!0;this.j||(this.i=!1);var c=b.className?b.className:"ol-overviewmap",d=b.tipLabel?b.tipLabel:"Overview map",e=b.collapseLabel?b.collapseLabel:"\u00ab";this.B=ia(e)?Hg("SPAN",{},e):e;e=b.label?b.label:"\u00bb";this.v=ia(e)?Hg("SPAN",{},e):e;d=Hg("BUTTON",{type:"button",title:d},this.j&&!this.i?this.B:this.v);D(d,"click",this.Vl,!1,this);var e=Hg("DIV","ol-overviewmap-map"),f=this.b=new S({controls:new og,
interactions:new og,target:e,view:b.view});b.layers&&b.layers.forEach(function(b){f.kg(b)},this);var g=Hg("DIV","ol-overviewmap-box");this.l=new jr({position:[0,0],positioning:"bottom-left",element:g});this.b.lg(this.l);c=Hg("DIV",c+" ol-unselectable ol-control"+(this.i&&this.j?" ol-collapsed":"")+(this.j?"":" ol-uncollapsible"),e,d);oh.call(this,{element:c,render:b.render?b.render:or,target:b.target})}y(nr,oh);l=nr.prototype;
l.setMap=function(b){var c=this.a;b!==c&&(c&&(c=c.aa())&&Vc(c,id("rotation"),this.je,!1,this),nr.ca.setMap.call(this,b),b&&(this.o.push(D(b,"propertychange",this.Mk,!1,this)),0===this.b.Zg().$b()&&this.b.$h(b.rc()),b=b.aa()))&&(D(b,id("rotation"),this.je,!1,this),Rf(b)&&(this.b.Vc(),pr(this)))};l.Mk=function(b){"view"===b.key&&((b=b.oldValue)&&Vc(b,id("rotation"),this.je,!1,this),b=this.a.aa(),D(b,id("rotation"),this.je,!1,this))};l.je=function(){this.b.aa().ue(this.a.aa().Fa())};
function or(){var b=this.a,c=this.b;if(b.b&&c.b){var d=b.Sa(),b=b.aa().$c(d),e=c.Sa(),d=c.aa().$c(e),f=c.Pa(ge(b)),c=c.Pa(ee(b)),c=new zg(Math.abs(f[0]-c[0]),Math.abs(f[1]-c[1])),f=e[0],e=e[1];c.width<.1*f||c.height<.1*e||c.width>.75*f||c.height>.75*e?pr(this):Vd(d,b)||(b=this.b,d=this.a.aa(),b.aa().kb(d.Ua()))}qr(this)}function pr(b){var c=b.a;b=b.b;var d=c.Sa(),c=c.aa().$c(d),d=b.Sa();b=b.aa();pe(c,1/(.1*Math.pow(2,Math.log(7.5)/Math.LN2/2)));b.kf(c,d)}
function qr(b){var c=b.a,d=b.b;if(c.b&&d.b){var e=c.Sa(),f=c.aa(),g=d.aa();d.Sa();var c=f.Fa(),h=b.l,d=b.l.se(),f=f.$c(e),e=g.$(),g=de(f),f=fe(f),k;if(b=b.a.aa().Ua())k=[g[0]-b[0],g[1]-b[1]],ud(k,c),pd(k,b);h.yf(k);d&&(k=new zg(Math.abs((g[0]-f[0])/e),Math.abs((f[1]-g[1])/e)),c=Qg(Ag(Cg(d))),!Yb||ic("10")||c&&ic("8")?(d=d.style,$b?d.MozBoxSizing="border-box":ac?d.WebkitBoxSizing="border-box":d.boxSizing="border-box",d.width=Math.max(k.width,0)+"px",d.height=Math.max(k.height,0)+"px"):(b=d.style,c?
(c=jh(d,"padding"),d=mh(d),b.pixelWidth=k.width-d.left-c.left-c.right-d.right,b.pixelHeight=k.height-d.top-c.top-c.bottom-d.bottom):(b.pixelWidth=k.width,b.pixelHeight=k.height)))}}l.Vl=function(b){b.preventDefault();rr(this)};function rr(b){Wg(b.element,"ol-collapsed");b.i?Ng(b.B,b.v):Ng(b.v,b.B);b.i=!b.i;var c=b.b;b.i||c.b||(c.Vc(),pr(b),Uc(c,"postrender",function(){qr(this)},!1,b))}l.Ul=function(){return this.j};
l.Xl=function(b){this.j!==b&&(this.j=b,Wg(this.element,"ol-uncollapsible"),!b&&this.i&&rr(this))};l.Wl=function(b){this.j&&this.i!==b&&rr(this)};l.Tl=function(){return this.i};l.ek=function(){return this.b};function sr(b){b=b?b:{};var c=b.className?b.className:"ol-scale-line";this.l=Hg("DIV",c+"-inner");this.j=Hg("DIV",c+" ol-unselectable",this.l);this.v=null;this.B=void 0!==b.minWidth?b.minWidth:64;this.b=!1;this.O=void 0;this.C="";this.i=null;oh.call(this,{element:this.j,render:b.render?b.render:tr,target:b.target});D(this,id("units"),this.V,!1,this);this.T(b.units||"metric")}y(sr,oh);var ur=[1,2,5];sr.prototype.D=function(){return this.get("units")};
function tr(b){(b=b.frameState)?this.v=b.viewState:this.v=null;vr(this)}sr.prototype.V=function(){vr(this)};sr.prototype.T=function(b){this.set("units",b)};
function vr(b){var c=b.v;if(c){var d=c.center,e=c.projection,c=e.getPointResolution(c.resolution,d),f=e.f,g=b.D();"degrees"!=f||"metric"!=g&&"imperial"!=g&&"us"!=g&&"nautical"!=g?"degrees"!=f&&"degrees"==g?(b.i||(b.i=Ie(e,Ee("EPSG:4326"))),d=Math.cos(Xa(b.i(d)[1])),e=Ae.radius,e/=Be[f],c*=180/(Math.PI*d*e)):b.i=null:(b.i=null,d=Math.cos(Xa(d[1])),c*=Math.PI*d*Ae.radius/180);d=b.B*c;f="";"degrees"==g?d<1/60?(f="\u2033",c*=3600):1>d?(f="\u2032",c*=60):f="\u00b0":"imperial"==g?.9144>d?(f="in",c/=.0254):
1609.344>d?(f="ft",c/=.3048):(f="mi",c/=1609.344):"nautical"==g?(c/=1852,f="nm"):"metric"==g?1>d?(f="mm",c*=1E3):1E3>d?f="m":(f="km",c/=1E3):"us"==g&&(.9144>d?(f="in",c*=39.37):1609.344>d?(f="ft",c/=.30480061):(f="mi",c/=1609.3472));for(d=3*Math.floor(Math.log(b.B*c)/Math.log(10));;){e=ur[d%3]*Math.pow(10,Math.floor(d/3));g=Math.round(e/c);if(isNaN(g)){gh(b.j,!1);b.b=!1;return}if(g>=b.B)break;++d}c=e+" "+f;b.C!=c&&(b.l.innerHTML=c,b.C=c);b.O!=g&&(b.l.style.width=g+"px",b.O=g);b.b||(gh(b.j,!0),b.b=
!0)}else b.b&&(gh(b.j,!1),b.b=!1)};function wr(b){oc.call(this);this.f=b;this.a={}}y(wr,oc);var xr=[];wr.prototype.Ra=function(b,c,d,e){ga(c)||(c&&(xr[0]=c.toString()),c=xr);for(var f=0;f<c.length;f++){var g=D(b,c[f],d||this.handleEvent,e||!1,this.f||this);if(!g)break;this.a[g.key]=g}return this};
wr.prototype.Wf=function(b,c,d,e,f){if(ga(c))for(var g=0;g<c.length;g++)this.Wf(b,c[g],d,e,f);else d=d||this.handleEvent,f=f||this.f||this,d=Nc(d),e=!!e,c=Bc(b)?Ic(b.yb,String(c),d,e,f):b?(b=Pc(b))?Ic(b,c,d,e,f):null:null,c&&(Wc(c),delete this.a[c.key]);return this};function yr(b){Ib(b.a,function(b,d){this.a.hasOwnProperty(d)&&Wc(b)},b);b.a={}}wr.prototype.Y=function(){wr.ca.Y.call(this);yr(this)};wr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function zr(b,c,d){$c.call(this);this.target=b;this.handle=c||b;this.a=d||new Yg(NaN,NaN,NaN,NaN);this.i=Cg(b);this.f=new wr(this);rc(this,this.f);this.g=this.c=this.o=this.l=this.screenY=this.screenX=this.clientY=this.clientX=0;this.b=!1;D(this.handle,["touchstart","mousedown"],this.ji,!1,this)}y(zr,$c);var Ar=Yb||$b&&ic("1.9.3");l=zr.prototype;
l.Y=function(){zr.ca.Y.call(this);Vc(this.handle,["touchstart","mousedown"],this.ji,!1,this);yr(this.f);Ar&&this.i.releaseCapture();this.handle=this.target=null};
l.ji=function(b){var c="mousedown"==b.type;if(this.b||c&&!zc(b))this.s("earlycancel");else if(this.s(new Br("start",this,b.clientX,b.clientY))){this.b=!0;b.preventDefault();var c=this.i,d=c.documentElement,e=!Ar;this.f.Ra(c,["touchmove","mousemove"],this.Pk,e);this.f.Ra(c,["touchend","mouseup"],this.Zd,e);Ar?(d.setCapture(!1),this.f.Ra(d,"losecapture",this.Zd)):this.f.Ra(c?c.parentWindow||c.defaultView:window,"blur",this.Zd);this.G&&this.f.Ra(this.G,"scroll",this.Nn,e);this.clientX=this.l=b.clientX;
this.clientY=this.o=b.clientY;this.screenX=b.screenX;this.screenY=b.screenY;this.c=this.target.offsetLeft;this.g=this.target.offsetTop;this.j=Rg(Ag(this.i))}};l.Zd=function(b){yr(this.f);Ar&&this.i.releaseCapture();this.b?(this.b=!1,this.s(new Br("end",this,b.clientX,b.clientY,0,Cr(this,this.c),Dr(this,this.g)))):this.s("earlycancel")};
l.Pk=function(b){var c=1*(b.clientX-this.clientX),d=b.clientY-this.clientY;this.clientX=b.clientX;this.clientY=b.clientY;this.screenX=b.screenX;this.screenY=b.screenY;if(!this.b){var e=this.l-this.clientX,f=this.o-this.clientY;if(0<e*e+f*f)if(this.s(new Br("start",this,b.clientX,b.clientY)))this.b=!0;else{this.na||this.Zd(b);return}}d=Er(this,c,d);c=d.x;d=d.y;this.b&&this.s(new Br("beforedrag",this,b.clientX,b.clientY,0,c,d))&&(Fr(this,b,c,d),b.preventDefault())};
function Er(b,c,d){var e=Rg(Ag(b.i));c+=e.x-b.j.x;d+=e.y-b.j.y;b.j=e;b.c+=c;b.g+=d;return new yg(Cr(b,b.c),Dr(b,b.g))}l.Nn=function(b){var c=Er(this,0,0);b.clientX=this.clientX;b.clientY=this.clientY;Fr(this,b,c.x,c.y)};function Fr(b,c,d,e){b.target.style.left=d+"px";b.target.style.top=e+"px";b.s(new Br("drag",b,c.clientX,c.clientY,0,d,e))}function Cr(b,c){var d=b.a,e=isNaN(d.left)?null:d.left,d=isNaN(d.width)?0:d.width;return Math.min(null!=e?e+d:Infinity,Math.max(null!=e?e:-Infinity,c))}
function Dr(b,c){var d=b.a,e=isNaN(d.top)?null:d.top,d=isNaN(d.height)?0:d.height;return Math.min(null!=e?e+d:Infinity,Math.max(null!=e?e:-Infinity,c))}function Br(b,c,d,e,f,g,h){tc.call(this,b);this.clientX=d;this.clientY=e;this.left=ca(g)?g:c.c;this.top=ca(h)?h:c.g}y(Br,tc);function Gr(b){b=b?b:{};this.i=void 0;this.j=Hr;this.l=null;this.v=!1;this.B=void 0!==b.duration?b.duration:200;var c=b.className?b.className:"ol-zoomslider",d=Hg("BUTTON",{type:"button","class":c+"-thumb ol-unselectable"}),c=Hg("DIV",[c,"ol-unselectable","ol-control"],d);this.b=new zr(d);rc(this,this.b);D(this.b,"start",this.zk,!1,this);D(this.b,"drag",this.xk,!1,this);D(this.b,"end",this.yk,!1,this);D(c,"click",this.wk,!1,this);D(d,"click",uc);oh.call(this,{element:c,render:b.render?b.render:Ir})}
y(Gr,oh);var Hr=0;l=Gr.prototype;l.setMap=function(b){Gr.ca.setMap.call(this,b);b&&b.render()};
function Ir(b){if(b.frameState){if(!this.v){var c=this.element,d=eh(c),e=Og(c),c=jh(e,"margin"),f=new zg(e.offsetWidth,e.offsetHeight),e=f.width+c.right+c.left,c=f.height+c.top+c.bottom;this.l=[e,c];e=d.width-e;c=d.height-c;d.width>d.height?(this.j=1,d=new Yg(0,0,e,0)):(this.j=Hr,d=new Yg(0,0,0,c));this.b.a=d||new Yg(NaN,NaN,NaN,NaN);this.v=!0}b=b.frameState.viewState.resolution;b!==this.i&&(this.i=b,b=1-Pf(this.a.aa())(b),d=this.b,c=Og(this.element),1==this.j?ah(c,d.a.left+d.a.width*b):ah(c,d.a.left,
d.a.top+d.a.height*b))}}l.wk=function(b){var c=this.a,d=c.aa(),e=d.$();c.Na($f({resolution:e,duration:this.B,easing:Uf}));b=Jr(this,Kr(this,b.offsetX-this.l[0]/2,b.offsetY-this.l[1]/2));d.Ub(d.constrainResolution(b))};l.zk=function(){Sf(this.a.aa(),1)};l.xk=function(b){this.i=Jr(this,Kr(this,b.left,b.top));this.a.aa().Ub(this.i)};l.yk=function(){var b=this.a,c=b.aa();Sf(c,-1);b.Na($f({resolution:this.i,duration:this.B,easing:Uf}));b=c.constrainResolution(this.i);c.Ub(b)};
function Kr(b,c,d){var e=b.b.a;return Sa(1===b.j?(c-e.left)/e.width:(d-e.top)/e.height,0,1)}function Jr(b,c){return Of(b.a.aa())(1-c)};function Lr(b){b=b?b:{};this.b=b.extent?b.extent:null;var c=b.className?b.className:"ol-zoom-extent",d=Hg("BUTTON",{type:"button",title:b.tipLabel?b.tipLabel:"Fit to extent"},b.label?b.label:"E");D(d,"click",this.i,!1,this);c=Hg("DIV",c+" ol-unselectable ol-control",d);oh.call(this,{element:c,target:b.target})}y(Lr,oh);Lr.prototype.i=function(b){b.preventDefault();var c=this.a;b=c.aa();var d=this.b?this.b:b.g.J(),c=c.Sa();b.kf(d,c)};function Mr(b){gd.call(this);b=b?b:{};this.a=null;D(this,id("tracking"),this.yl,!1,this);this.vf(void 0!==b.tracking?b.tracking:!1)}y(Mr,gd);l=Mr.prototype;l.Y=function(){this.vf(!1);Mr.ca.Y.call(this)};
l.On=function(b){b=b.a;if(null!==b.alpha){var c=Xa(b.alpha);this.set("alpha",c);"boolean"==typeof b.absolute&&b.absolute?this.set("heading",c):ja(b.webkitCompassHeading)&&-1!=b.webkitCompassAccuracy&&this.set("heading",Xa(b.webkitCompassHeading))}null!==b.beta&&this.set("beta",Xa(b.beta));null!==b.gamma&&this.set("gamma",Xa(b.gamma));this.u()};l.Fj=function(){return this.get("alpha")};l.Ij=function(){return this.get("beta")};l.Oj=function(){return this.get("gamma")};l.xl=function(){return this.get("heading")};
l.Vg=function(){return this.get("tracking")};l.yl=function(){if(Yi){var b=this.Vg();b&&!this.a?this.a=D(ba,"deviceorientation",this.On,!1,this):!b&&this.a&&(Wc(this.a),this.a=null)}};l.vf=function(b){this.set("tracking",b)};function Nr(){this.defaultDataProjection=null}function Or(b,c,d){var e;d&&(e={dataProjection:d.dataProjection?d.dataProjection:b.Ia(c),featureProjection:d.featureProjection});return Pr(b,e)}function Pr(b,c){var d;c&&(d={featureProjection:c.featureProjection,dataProjection:c.dataProjection?c.dataProjection:b.defaultDataProjection,rightHanded:c.rightHanded});return d}
function Qr(b,c,d){var e=d?Ee(d.featureProjection):null;d=d?Ee(d.dataProjection):null;return e&&d&&!Ve(e,d)?b instanceof $e?(c?b.clone():b).lb(c?e:d,c?d:e):Ze(c?b.slice():b,c?e:d,c?d:e):b};function Rr(){this.defaultDataProjection=null}y(Rr,Nr);function Sr(b){return oa(b)?b:ia(b)?(b=Yn(b))?b:null:null}l=Rr.prototype;l.W=function(){return"json"};l.Tb=function(b,c){return this.Sc(Sr(b),Or(this,b,c))};l.Ba=function(b,c){return this.Kf(Sr(b),Or(this,b,c))};l.Tc=function(b,c){return this.Gh(Sr(b),Or(this,b,c))};l.Ia=function(b){return this.Nh(Sr(b))};l.Kd=function(b,c){return Zn(this.Wc(b,c))};l.Vb=function(b,c){return Zn(this.Se(b,c))};l.Xc=function(b,c){return Zn(this.Ue(b,c))};function Tr(b,c,d,e,f){var g=NaN,h=NaN,k=(d-c)/e;if(0!==k)if(1==k)g=b[c],h=b[c+1];else if(2==k)g=.5*b[c]+.5*b[c+e],h=.5*b[c+1]+.5*b[c+e+1];else{var h=b[c],k=b[c+1],m=0,g=[0],n;for(n=c+e;n<d;n+=e){var p=b[n],q=b[n+1],m=m+Math.sqrt((p-h)*(p-h)+(q-k)*(q-k));g.push(m);h=p;k=q}d=.5*m;for(var r,h=ob,k=0,m=g.length;k<m;)n=k+m>>1,p=h(d,g[n]),0<p?k=n+1:(m=n,r=!p);r=r?k:~k;0>r?(d=(d-g[-r-2])/(g[-r-1]-g[-r-2]),c+=(-r-2)*e,g=od(b[c],b[c+e],d),h=od(b[c+1],b[c+e+1],d)):(g=b[c+r*e],h=b[c+r*e+1])}return f?(f[0]=
g,f[1]=h,f):[g,h]}function Ur(b,c,d,e,f,g){if(d==c)return null;if(f<b[c+e-1])return g?(d=b.slice(c,c+e),d[e-1]=f,d):null;if(b[d-1]<f)return g?(d=b.slice(d-e,d),d[e-1]=f,d):null;if(f==b[c+e-1])return b.slice(c,c+e);c/=e;for(d/=e;c<d;)g=c+d>>1,f<b[(g+1)*e-1]?d=g:c=g+1;d=b[c*e-1];if(f==d)return b.slice((c-1)*e,(c-1)*e+e);g=(f-d)/(b[(c+1)*e-1]-d);d=[];var h;for(h=0;h<e-1;++h)d.push(od(b[(c-1)*e+h],b[c*e+h],g));d.push(f);return d}
function Vr(b,c,d,e,f,g){var h=0;if(g)return Ur(b,h,c[c.length-1],d,e,f);if(e<b[d-1])return f?(b=b.slice(0,d),b[d-1]=e,b):null;if(b[b.length-1]<e)return f?(b=b.slice(b.length-d),b[d-1]=e,b):null;f=0;for(g=c.length;f<g;++f){var k=c[f];if(h!=k){if(e<b[h+d-1])break;if(e<=b[k-1])return Ur(b,h,k,d,e,!1);h=k}}return null};function T(b,c){bf.call(this);this.g=null;this.C=this.D=this.l=-1;this.la(b,c)}y(T,bf);l=T.prototype;l.mj=function(b){this.A?kb(this.A,b):this.A=b.slice();this.u()};l.clone=function(){var b=new T(null);b.ba(this.b,this.A.slice());return b};l.nb=function(b,c,d,e){if(e<Sd(this.J(),b,c))return e;this.C!=this.f&&(this.D=Math.sqrt(jf(this.A,0,this.A.length,this.a,0)),this.C=this.f);return lf(this.A,0,this.A.length,this.a,this.D,!1,b,c,d,e)};
l.Cj=function(b,c){return Bf(this.A,0,this.A.length,this.a,b,c)};l.$l=function(b,c){return"XYM"!=this.b&&"XYZM"!=this.b?null:Ur(this.A,0,this.A.length,this.a,b,void 0!==c?c:!1)};l.Z=function(){return qf(this.A,0,this.A.length,this.a)};l.am=function(){var b=this.A,c=this.a,d=b[0],e=b[1],f=0,g;for(g=0+c;g<this.A.length;g+=c)var h=b[g],k=b[g+1],f=f+Math.sqrt((h-d)*(h-d)+(k-e)*(k-e)),d=h,e=k;return f};function om(b){b.l!=b.f&&(b.g=Tr(b.A,0,b.A.length,b.a,b.g),b.l=b.f);return b.g}
l.Lc=function(b){var c=[];c.length=tf(this.A,0,this.A.length,this.a,b,c,0);b=new T(null);b.ba("XY",c);return b};l.W=function(){return"LineString"};l.Ea=function(b){return Cf(this.A,0,this.A.length,this.a,b)};l.la=function(b,c){b?(ef(this,c,b,1),this.A||(this.A=[]),this.A.length=of(this.A,0,b,this.a),this.u()):this.ba("XY",null)};l.ba=function(b,c){df(this,b,c);this.u()};function U(b,c){bf.call(this);this.g=[];this.l=this.C=-1;this.la(b,c)}y(U,bf);l=U.prototype;l.nj=function(b){this.A?kb(this.A,b.ia().slice()):this.A=b.ia().slice();this.g.push(this.A.length);this.u()};l.clone=function(){var b=new U(null);b.ba(this.b,this.A.slice(),this.g.slice());return b};l.nb=function(b,c,d,e){if(e<Sd(this.J(),b,c))return e;this.l!=this.f&&(this.C=Math.sqrt(kf(this.A,0,this.g,this.a,0)),this.l=this.f);return mf(this.A,0,this.g,this.a,this.C,!1,b,c,d,e)};
l.cm=function(b,c,d){return"XYM"!=this.b&&"XYZM"!=this.b||0===this.A.length?null:Vr(this.A,this.g,this.a,b,void 0!==c?c:!1,void 0!==d?d:!1)};l.Z=function(){return rf(this.A,0,this.g,this.a)};l.zb=function(){return this.g};l.Wj=function(b){if(0>b||this.g.length<=b)return null;var c=new T(null);c.ba(this.b,this.A.slice(0===b?0:this.g[b-1],this.g[b]));return c};
l.sd=function(){var b=this.A,c=this.g,d=this.b,e=[],f=0,g,h;g=0;for(h=c.length;g<h;++g){var k=c[g],m=new T(null);m.ba(d,b.slice(f,k));e.push(m);f=k}return e};function pm(b){var c=[],d=b.A,e=0,f=b.g;b=b.a;var g,h;g=0;for(h=f.length;g<h;++g){var k=f[g],e=Tr(d,e,k,b);kb(c,e);e=k}return c}l.Lc=function(b){var c=[],d=[],e=this.A,f=this.g,g=this.a,h=0,k=0,m,n;m=0;for(n=f.length;m<n;++m){var p=f[m],k=tf(e,h,p,g,b,c,k);d.push(k);h=p}c.length=k;b=new U(null);b.ba("XY",c,d);return b};l.W=function(){return"MultiLineString"};
l.Ea=function(b){a:{var c=this.A,d=this.g,e=this.a,f=0,g,h;g=0;for(h=d.length;g<h;++g){if(Cf(c,f,d[g],e,b)){b=!0;break a}f=d[g]}b=!1}return b};l.la=function(b,c){if(b){ef(this,c,b,2);this.A||(this.A=[]);var d=pf(this.A,0,b,this.a,this.g);this.A.length=0===d.length?0:d[d.length-1];this.u()}else this.ba("XY",null,this.g)};l.ba=function(b,c,d){df(this,b,c);this.g=d;this.u()};
function Wr(b,c){var d=b.b,e=[],f=[],g,h;g=0;for(h=c.length;g<h;++g){var k=c[g];0===g&&(d=k.b);kb(e,k.ia());f.push(e.length)}b.ba(d,e,f)};function Xr(b,c){bf.call(this);this.la(b,c)}y(Xr,bf);l=Xr.prototype;l.pj=function(b){this.A?kb(this.A,b.ia()):this.A=b.ia().slice();this.u()};l.clone=function(){var b=new Xr(null);b.ba(this.b,this.A.slice());return b};l.nb=function(b,c,d,e){if(e<Sd(this.J(),b,c))return e;var f=this.A,g=this.a,h,k,m;h=0;for(k=f.length;h<k;h+=g)if(m=Wa(b,c,f[h],f[h+1]),m<e){e=m;for(m=0;m<g;++m)d[m]=f[h+m];d.length=g}return e};l.Z=function(){return qf(this.A,0,this.A.length,this.a)};
l.gk=function(b){var c=this.A?this.A.length/this.a:0;if(0>b||c<=b)return null;c=new E(null);c.ba(this.b,this.A.slice(b*this.a,(b+1)*this.a));return c};l.ve=function(){var b=this.A,c=this.b,d=this.a,e=[],f,g;f=0;for(g=b.length;f<g;f+=d){var h=new E(null);h.ba(c,b.slice(f,f+d));e.push(h)}return e};l.W=function(){return"MultiPoint"};l.Ea=function(b){var c=this.A,d=this.a,e,f,g,h;e=0;for(f=c.length;e<f;e+=d)if(g=c[e],h=c[e+1],Ud(b,g,h))return!0;return!1};
l.la=function(b,c){b?(ef(this,c,b,1),this.A||(this.A=[]),this.A.length=of(this.A,0,b,this.a),this.u()):this.ba("XY",null)};l.ba=function(b,c){df(this,b,c);this.u()};function V(b,c){bf.call(this);this.g=[];this.C=-1;this.D=null;this.T=this.O=this.U=-1;this.l=null;this.la(b,c)}y(V,bf);l=V.prototype;l.qj=function(b){if(this.A){var c=this.A.length;kb(this.A,b.ia());b=b.zb().slice();var d,e;d=0;for(e=b.length;d<e;++d)b[d]+=c}else this.A=b.ia().slice(),b=b.zb().slice(),this.g.push();this.g.push(b);this.u()};l.clone=function(){var b=new V(null),c=Ub(this.g);Yr(b,this.b,this.A.slice(),c);return b};
l.nb=function(b,c,d,e){if(e<Sd(this.J(),b,c))return e;if(this.O!=this.f){var f=this.g,g=0,h=0,k,m;k=0;for(m=f.length;k<m;++k)var n=f[k],h=kf(this.A,g,n,this.a,h),g=n[n.length-1];this.U=Math.sqrt(h);this.O=this.f}f=rm(this);g=this.g;h=this.a;k=this.U;m=0;var n=[NaN,NaN],p,q;p=0;for(q=g.length;p<q;++p){var r=g[p];e=mf(f,m,r,h,k,!0,b,c,d,e,n);m=r[r.length-1]}return e};
l.uc=function(b,c){var d;a:{d=rm(this);var e=this.g,f=0;if(0!==e.length){var g,h;g=0;for(h=e.length;g<h;++g){var k=e[g];if(zf(d,f,k,this.a,b,c)){d=!0;break a}f=k[k.length-1]}}d=!1}return d};l.dm=function(){var b=rm(this),c=this.g,d=0,e=0,f,g;f=0;for(g=c.length;f<g;++f)var h=c[f],e=e+gf(b,d,h,this.a),d=h[h.length-1];return e};
l.Z=function(b){var c;void 0!==b?(c=rm(this).slice(),Hf(c,this.g,this.a,b)):c=this.A;b=c;c=this.g;var d=this.a,e=0,f=[],g=0,h,k;h=0;for(k=c.length;h<k;++h){var m=c[h];f[g++]=rf(b,e,m,d,f[g]);e=m[m.length-1]}f.length=g;return f};
function sm(b){if(b.C!=b.f){var c=b.A,d=b.g,e=b.a,f=0,g=[],h,k,m=Md();h=0;for(k=d.length;h<k;++h){var n=d[h],m=Yd(c,f,n[0],e);g.push((m[0]+m[2])/2,(m[1]+m[3])/2);f=n[n.length-1]}c=rm(b);d=b.g;e=b.a;f=0;h=[];k=0;for(m=d.length;k<m;++k)n=d[k],h=Af(c,f,n,e,g,2*k,h),f=n[n.length-1];b.D=h;b.C=b.f}return b.D}l.Tj=function(){var b=new Xr(null);b.ba("XY",sm(this).slice());return b};
function rm(b){if(b.T!=b.f){var c=b.A,d;a:{d=b.g;var e,f;e=0;for(f=d.length;e<f;++e)if(!Ff(c,d[e],b.a,void 0)){d=!1;break a}d=!0}d?b.l=c:(b.l=c.slice(),b.l.length=Hf(b.l,b.g,b.a));b.T=b.f}return b.l}l.Lc=function(b){var c=[],d=[],e=this.A,f=this.g,g=this.a;b=Math.sqrt(b);var h=0,k=0,m,n;m=0;for(n=f.length;m<n;++m){var p=f[m],q=[],k=uf(e,h,p,g,b,c,k,q);d.push(q);h=p[p.length-1]}c.length=k;e=new V(null);Yr(e,"XY",c,d);return e};
l.ik=function(b){if(0>b||this.g.length<=b)return null;var c;0===b?c=0:(c=this.g[b-1],c=c[c.length-1]);b=this.g[b].slice();var d=b[b.length-1];if(0!==c){var e,f;e=0;for(f=b.length;e<f;++e)b[e]-=c}e=new F(null);e.ba(this.b,this.A.slice(c,d),b);return e};l.ce=function(){var b=this.b,c=this.A,d=this.g,e=[],f=0,g,h,k,m;g=0;for(h=d.length;g<h;++g){var n=d[g].slice(),p=n[n.length-1];if(0!==f)for(k=0,m=n.length;k<m;++k)n[k]-=f;k=new F(null);k.ba(b,c.slice(f,p),n);e.push(k);f=p}return e};l.W=function(){return"MultiPolygon"};
l.Ea=function(b){a:{var c=rm(this),d=this.g,e=this.a,f=0,g,h;g=0;for(h=d.length;g<h;++g){var k=d[g];if(Df(c,f,k,e,b)){b=!0;break a}f=k[k.length-1]}b=!1}return b};l.la=function(b,c){if(b){ef(this,c,b,3);this.A||(this.A=[]);var d=this.A,e=this.a,f=this.g,g=0,f=f?f:[],h=0,k,m;k=0;for(m=b.length;k<m;++k)g=pf(d,g,b[k],e,f[h]),f[h++]=g,g=g[g.length-1];f.length=h;0===f.length?this.A.length=0:(d=f[f.length-1],this.A.length=0===d.length?0:d[d.length-1]);this.u()}else Yr(this,"XY",null,this.g)};
function Yr(b,c,d,e){df(b,c,d);b.g=e;b.u()}function Zr(b,c){var d=b.b,e=[],f=[],g,h,k;g=0;for(h=c.length;g<h;++g){var m=c[g];0===g&&(d=m.b);var n=e.length;k=m.zb();var p,q;p=0;for(q=k.length;p<q;++p)k[p]+=n;kb(e,m.ia());f.push(k)}Yr(b,d,e,f)};function $r(b){b=b?b:{};this.defaultDataProjection=null;this.a=b.geometryName}y($r,Rr);
function as(b,c){if(!b)return null;var d;if(ja(b.x)&&ja(b.y))d="Point";else if(b.points)d="MultiPoint";else if(b.paths)d=1===b.paths.length?"LineString":"MultiLineString";else if(b.rings){var e=b.rings,f=bs(b),g=[];d=[];var h,k;h=0;for(k=e.length;h<k;++h){var m=tb(e[h]);Ef(m,0,m.length,f.length)?g.push([e[h]]):d.push(e[h])}for(;d.length;){e=d.shift();f=!1;for(h=g.length-1;0<=h;h--)if(Vd((new vf(g[h][0])).J(),(new vf(e)).J())){g[h].push(e);f=!0;break}f||g.push([e.reverse()])}b=Tb(b);1===g.length?(d=
"Polygon",b.rings=g[0]):(d="MultiPolygon",b.rings=g)}return Qr((0,cs[d])(b),!1,c)}function bs(b){var c="XY";!0===b.hasZ&&!0===b.hasM?c="XYZM":!0===b.hasZ?c="XYZ":!0===b.hasM&&(c="XYM");return c}function ds(b){b=b.b;return{hasZ:"XYZ"===b||"XYZM"===b,hasM:"XYM"===b||"XYZM"===b}}
var cs={Point:function(b){return void 0!==b.m&&void 0!==b.z?new E([b.x,b.y,b.z,b.m],"XYZM"):void 0!==b.z?new E([b.x,b.y,b.z],"XYZ"):void 0!==b.m?new E([b.x,b.y,b.m],"XYM"):new E([b.x,b.y])},LineString:function(b){return new T(b.paths[0],bs(b))},Polygon:function(b){return new F(b.rings,bs(b))},MultiPoint:function(b){return new Xr(b.points,bs(b))},MultiLineString:function(b){return new U(b.paths,bs(b))},MultiPolygon:function(b){return new V(b.rings,bs(b))}},es={Point:function(b){var c=b.Z();b=b.b;if("XYZ"===
b)return{x:c[0],y:c[1],z:c[2]};if("XYM"===b)return{x:c[0],y:c[1],m:c[2]};if("XYZM"===b)return{x:c[0],y:c[1],z:c[2],m:c[3]};if("XY"===b)return{x:c[0],y:c[1]}},LineString:function(b){var c=ds(b);return{hasZ:c.hasZ,hasM:c.hasM,paths:[b.Z()]}},Polygon:function(b){var c=ds(b);return{hasZ:c.hasZ,hasM:c.hasM,rings:b.Z(!1)}},MultiPoint:function(b){var c=ds(b);return{hasZ:c.hasZ,hasM:c.hasM,points:b.Z()}},MultiLineString:function(b){var c=ds(b);return{hasZ:c.hasZ,hasM:c.hasM,paths:b.Z()}},MultiPolygon:function(b){var c=
ds(b);b=b.Z(!1);for(var d=[],e=0;e<b.length;e++)for(var f=b[e].length-1;0<=f;f--)d.push(b[e][f]);return{hasZ:c.hasZ,hasM:c.hasM,rings:d}}};l=$r.prototype;l.Sc=function(b,c){var d=as(b.geometry,c),e=new pn;this.a&&e.yc(this.a);e.Ma(d);c&&c.qf&&b.attributes[c.qf]&&e.jc(b.attributes[c.qf]);b.attributes&&e.I(b.attributes);return e};
l.Kf=function(b,c){var d=c?c:{};if(b.features){var e=[],f=b.features,g,h;d.qf=b.objectIdFieldName;g=0;for(h=f.length;g<h;++g)e.push(this.Sc(f[g],d));return e}return[this.Sc(b,d)]};l.Gh=function(b,c){return as(b,c)};l.Nh=function(b){return b.spatialReference&&b.spatialReference.wkid?Ee("EPSG:"+b.spatialReference.wkid):null};function fs(b,c){return(0,es[b.W()])(Qr(b,!0,c),c)}l.Ue=function(b,c){return fs(b,Pr(this,c))};
l.Wc=function(b,c){c=Pr(this,c);var d={},e=b.X();e&&(d.geometry=fs(e,c));e=b.R();delete e[b.a];d.attributes=Pb(e)?{}:e;c&&c.featureProjection&&(d.spatialReference={wkid:Ee(c.featureProjection).a.split(":").pop()});return d};l.Se=function(b,c){c=Pr(this,c);var d=[],e,f;e=0;for(f=b.length;e<f;++e)d.push(this.Wc(b[e],c));return{features:d}};function gs(b){$e.call(this);this.c=b?b:null;hs(this)}y(gs,$e);function is(b){var c=[],d,e;d=0;for(e=b.length;d<e;++d)c.push(b[d].clone());return c}function js(b){var c,d;if(b.c)for(c=0,d=b.c.length;c<d;++c)Vc(b.c[c],"change",b.u,!1,b)}function hs(b){var c,d;if(b.c)for(c=0,d=b.c.length;c<d;++c)D(b.c[c],"change",b.u,!1,b)}l=gs.prototype;l.clone=function(){var b=new gs(null);b.Yh(this.c);return b};
l.nb=function(b,c,d,e){if(e<Sd(this.J(),b,c))return e;var f=this.c,g,h;g=0;for(h=f.length;g<h;++g)e=f[g].nb(b,c,d,e);return e};l.uc=function(b,c){var d=this.c,e,f;e=0;for(f=d.length;e<f;++e)if(d[e].uc(b,c))return!0;return!1};l.Wd=function(b){Pd(Infinity,Infinity,-Infinity,-Infinity,b);for(var c=this.c,d=0,e=c.length;d<e;++d)be(b,c[d].J());return b};l.Ag=function(){return is(this.c)};
l.td=function(b){this.o!=this.f&&(Qb(this.i),this.j=0,this.o=this.f);if(0>b||0!==this.j&&b<this.j)return this;var c=b.toString();if(this.i.hasOwnProperty(c))return this.i[c];var d=[],e=this.c,f=!1,g,h;g=0;for(h=e.length;g<h;++g){var k=e[g],m=k.td(b);d.push(m);m!==k&&(f=!0)}if(f)return b=new gs(null),js(b),b.c=d,hs(b),b.u(),this.i[c]=b;this.j=b;return this};l.W=function(){return"GeometryCollection"};l.Ea=function(b){var c=this.c,d,e;d=0;for(e=c.length;d<e;++d)if(c[d].Ea(b))return!0;return!1};
l.La=function(){return 0===this.c.length};l.Yh=function(b){b=is(b);js(this);this.c=b;hs(this);this.u()};l.pc=function(b){var c=this.c,d,e;d=0;for(e=c.length;d<e;++d)c[d].pc(b);this.u()};l.Pc=function(b,c){var d=this.c,e,f;e=0;for(f=d.length;e<f;++e)d[e].Pc(b,c);this.u()};l.Y=function(){js(this);gs.ca.Y.call(this)};function ks(b){b=b?b:{};this.defaultDataProjection=null;this.defaultDataProjection=Ee(b.defaultDataProjection?b.defaultDataProjection:"EPSG:4326");this.a=b.geometryName}y(ks,Rr);function ls(b,c){return b?Qr((0,ms[b.type])(b),!1,c):null}function ns(b,c){return(0,os[b.W()])(Qr(b,!0,c),c)}
var ms={Point:function(b){return new E(b.coordinates)},LineString:function(b){return new T(b.coordinates)},Polygon:function(b){return new F(b.coordinates)},MultiPoint:function(b){return new Xr(b.coordinates)},MultiLineString:function(b){return new U(b.coordinates)},MultiPolygon:function(b){return new V(b.coordinates)},GeometryCollection:function(b,c){var d=b.geometries.map(function(b){return ls(b,c)});return new gs(d)}},os={Point:function(b){return{type:"Point",coordinates:b.Z()}},LineString:function(b){return{type:"LineString",
coordinates:b.Z()}},Polygon:function(b,c){var d;c&&(d=c.rightHanded);return{type:"Polygon",coordinates:b.Z(d)}},MultiPoint:function(b){return{type:"MultiPoint",coordinates:b.Z()}},MultiLineString:function(b){return{type:"MultiLineString",coordinates:b.Z()}},MultiPolygon:function(b,c){var d;c&&(d=c.rightHanded);return{type:"MultiPolygon",coordinates:b.Z(d)}},GeometryCollection:function(b,c){return{type:"GeometryCollection",geometries:b.c.map(function(b){return ns(b,c)})}},Circle:function(){return{type:"GeometryCollection",
geometries:[]}}};l=ks.prototype;l.Sc=function(b,c){var d=ls(b.geometry,c),e=new pn;this.a&&e.yc(this.a);e.Ma(d);void 0!==b.id&&e.jc(b.id);b.properties&&e.I(b.properties);return e};l.Kf=function(b,c){if("Feature"==b.type)return[this.Sc(b,c)];if("FeatureCollection"==b.type){var d=[],e=b.features,f,g;f=0;for(g=e.length;f<g;++f)d.push(this.Sc(e[f],c));return d}return[]};l.Gh=function(b,c){return ls(b,c)};
l.Nh=function(b){return(b=b.crs)?"name"==b.type?Ee(b.properties.name):"EPSG"==b.type?Ee("EPSG:"+b.properties.code):null:this.defaultDataProjection};l.Wc=function(b,c){c=Pr(this,c);var d={type:"Feature"},e=b.Oa();void 0!==e&&(d.id=e);e=b.X();d.geometry=e?ns(e,c):null;e=b.R();delete e[b.a];d.properties=Pb(e)?null:e;return d};l.Se=function(b,c){c=Pr(this,c);var d=[],e,f;e=0;for(f=b.length;e<f;++e)d.push(this.Wc(b[e],c));return{type:"FeatureCollection",features:d}};
l.Ue=function(b,c){return ns(b,Pr(this,c))};function ps(){this.defaultDataProjection=null}y(ps,Nr);l=ps.prototype;l.W=function(){return"xml"};l.Tb=function(b,c){if(To(b))return qs(this,b,c);if(Wo(b))return this.Eh(b,c);if(ia(b)){var d=fp(b);return qs(this,d,c)}return null};function qs(b,c,d){b=rs(b,c,d);return 0<b.length?b[0]:null}l.Ba=function(b,c){if(To(b))return rs(this,b,c);if(Wo(b))return this.ic(b,c);if(ia(b)){var d=fp(b);return rs(this,d,c)}return[]};
function rs(b,c,d){var e=[];for(c=c.firstChild;c;c=c.nextSibling)1==c.nodeType&&kb(e,b.ic(c,d));return e}l.Tc=function(b,c){if(To(b))return this.G(b,c);if(Wo(b)){var d=this.Je(b,[Or(this,b,c?c:{})]);return d?d:null}return ia(b)?(d=fp(b),this.G(d,c)):null};l.Ia=function(b){return To(b)?this.Qf(b):Wo(b)?this.Me(b):ia(b)?(b=fp(b),this.Qf(b)):null};l.Qf=function(){return this.defaultDataProjection};l.Me=function(){return this.defaultDataProjection};l.Kd=function(b,c){var d=this.v(b,c);return Fo(d)};
l.Vb=function(b,c){var d=this.f(b,c);return Fo(d)};l.Xc=function(b,c){var d=this.o(b,c);return Fo(d)};function ss(b){b=b?b:{};this.featureType=b.featureType;this.featureNS=b.featureNS;this.srsName=b.srsName;this.schemaLocation="";this.a={};this.a["http://www.opengis.net/gml"]={featureMember:ip(ss.prototype.Ed),featureMembers:ip(ss.prototype.Ed)};this.defaultDataProjection=null}y(ss,ps);l=ss.prototype;
l.Ed=function(b,c){var d=Qo(b),e;if("FeatureCollection"==d)"http://www.opengis.net/wfs"===b.namespaceURI?e=Q([],this.a,b,c,this):e=Q(null,this.a,b,c,this);else if("featureMembers"==d||"featureMember"==d){var f=c[0],g=f.featureType;e=f.featureNS;var h,k;if(!g&&b.childNodes){g=[];e={};h=0;for(k=b.childNodes.length;h<k;++h){var m=b.childNodes[h];if(1===m.nodeType){var n=m.nodeName.split(":").pop();if(-1===g.indexOf(n)){var p;Mb(e,m.namespaceURI)?p=Ob(e,function(b){return b===m.namespaceURI}):(p="p"+
Kb(e),e[p]=m.namespaceURI);g.push(p+":"+n)}}}f.featureType=g;f.featureNS=e}ia(e)&&(h=e,e={},e.p0=h);var f={},g=ga(g)?g:[g],q;for(q in e){n={};h=0;for(k=g.length;h<k;++h)(-1===g[h].indexOf(":")?"p0":g[h].split(":")[0])===q&&(n[g[h].split(":").pop()]="featureMembers"==d?hp(this.Jf,this):ip(this.Jf,this));f[e[q]]=n}e=Q([],f,b,c)}e||(e=[]);return e};l.Je=function(b,c){var d=c[0];d.srsName=b.firstElementChild.getAttribute("srsName");var e=Q(null,this.bg,b,c,this);if(e)return Qr(e,!1,d)};
l.Jf=function(b,c){var d,e=b.getAttribute("fid")||$o(b,"http://www.opengis.net/gml","id"),f={},g;for(d=b.firstElementChild;d;d=d.nextElementSibling){var h=Qo(d);if(0===d.childNodes.length||1===d.childNodes.length&&(3===d.firstChild.nodeType||4===d.firstChild.nodeType)){var k=Mo(d,!1);/^[\s\xa0]*$/.test(k)&&(k=void 0);f[h]=k}else"boundedBy"!==h&&(g=h),f[h]=this.Je(d,c)}d=new pn(f);g&&d.yc(g);e&&d.jc(e);return d};l.Mh=function(b,c){var d=this.Ie(b,c);if(d){var e=new E(null);e.ba("XYZ",d);return e}};
l.Kh=function(b,c){var d=Q([],this.Ki,b,c,this);if(d)return new Xr(d)};l.Jh=function(b,c){var d=Q([],this.Ji,b,c,this);if(d){var e=new U(null);Wr(e,d);return e}};l.Lh=function(b,c){var d=Q([],this.Li,b,c,this);if(d){var e=new V(null);Zr(e,d);return e}};l.Bh=function(b,c){pp(this.Oi,b,c,this)};l.Qg=function(b,c){pp(this.Hi,b,c,this)};l.Ch=function(b,c){pp(this.Pi,b,c,this)};l.Ke=function(b,c){var d=this.Ie(b,c);if(d){var e=new T(null);e.ba("XYZ",d);return e}};
l.jo=function(b,c){var d=Q(null,this.Md,b,c,this);if(d)return d};l.Ih=function(b,c){var d=this.Ie(b,c);if(d){var e=new vf(null);wf(e,"XYZ",d);return e}};l.Le=function(b,c){var d=Q([null],this.We,b,c,this);if(d&&d[0]){var e=new F(null),f=d[0],g=[f.length],h,k;h=1;for(k=d.length;h<k;++h)kb(f,d[h]),g.push(f.length);e.ba("XYZ",f,g);return e}};l.Ie=function(b,c){return Q(null,this.Md,b,c,this)};l.Ki=Object({"http://www.opengis.net/gml":{pointMember:hp(ss.prototype.Bh),pointMembers:hp(ss.prototype.Bh)}});
l.Ji=Object({"http://www.opengis.net/gml":{lineStringMember:hp(ss.prototype.Qg),lineStringMembers:hp(ss.prototype.Qg)}});l.Li=Object({"http://www.opengis.net/gml":{polygonMember:hp(ss.prototype.Ch),polygonMembers:hp(ss.prototype.Ch)}});l.Oi=Object({"http://www.opengis.net/gml":{Point:hp(ss.prototype.Ie)}});l.Hi=Object({"http://www.opengis.net/gml":{LineString:hp(ss.prototype.Ke)}});l.Pi=Object({"http://www.opengis.net/gml":{Polygon:hp(ss.prototype.Le)}});l.Nd=Object({"http://www.opengis.net/gml":{LinearRing:ip(ss.prototype.jo)}});
l.ic=function(b,c){var d={featureType:this.featureType,featureNS:this.featureNS};c&&Wb(d,Or(this,b,c));return this.Ed(b,[d])};l.Me=function(b){return Ee(this.B?this.B:b.firstElementChild.getAttribute("srsName"))};function ts(b){b=Mo(b,!1);return us(b)}function us(b){if(b=/^\s*(true|1)|(false|0)\s*$/.exec(b))return void 0!==b[1]||!1}
function vs(b){b=Mo(b,!1);if(b=/^\s*(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(Z|(?:([+\-])(\d{2})(?::(\d{2}))?))\s*$/.exec(b)){var c=Date.UTC(parseInt(b[1],10),parseInt(b[2],10)-1,parseInt(b[3],10),parseInt(b[4],10),parseInt(b[5],10),parseInt(b[6],10))/1E3;if("Z"!=b[7]){var d="-"==b[8]?-1:1,c=c+60*d*parseInt(b[9],10);void 0!==b[10]&&(c+=3600*d*parseInt(b[10],10))}return c}}function ws(b){b=Mo(b,!1);return xs(b)}
function xs(b){if(b=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(b))return parseFloat(b[1])}function ys(b){b=Mo(b,!1);return zs(b)}function zs(b){if(b=/^\s*(\d+)\s*$/.exec(b))return parseInt(b[1],10)}function W(b){return Mo(b,!1).trim()}function As(b,c){Bs(b,c?"1":"0")}function Cs(b,c){b.appendChild(Io.createTextNode(c.toPrecision()))}function Ds(b,c){b.appendChild(Io.createTextNode(c.toString()))}function Bs(b,c){b.appendChild(Io.createTextNode(c))};function Es(b){b=b?b:{};ss.call(this,b);this.a["http://www.opengis.net/gml"].featureMember=hp(ss.prototype.Ed);this.schemaLocation=b.schemaLocation?b.schemaLocation:"http://www.opengis.net/gml http://schemas.opengis.net/gml/2.1.2/feature.xsd"}y(Es,ss);l=Es.prototype;
l.Fh=function(b,c){var d=Mo(b,!1).replace(/^\s*|\s*$/g,""),e=c[0].srsName,f=b.parentNode.getAttribute("srsDimension"),g="enu";e&&(e=Ee(e))&&(g=e.g);d=d.split(/[\s,]+/);e=2;b.getAttribute("srsDimension")?e=zs(b.getAttribute("srsDimension")):b.getAttribute("dimension")?e=zs(b.getAttribute("dimension")):f&&(e=zs(f));for(var h,k,m=[],n=0,p=d.length;n<p;n+=e)f=parseFloat(d[n]),h=parseFloat(d[n+1]),k=3===e?parseFloat(d[n+2]):0,"en"===g.substr(0,2)?m.push(f,h,k):m.push(h,f,k);return m};
l.fo=function(b,c){var d=Q([null],this.Di,b,c,this);return Pd(d[1][0],d[1][1],d[1][3],d[1][4])};l.dl=function(b,c){var d=Q(void 0,this.Nd,b,c,this);d&&c[c.length-1].push(d)};l.Pn=function(b,c){var d=Q(void 0,this.Nd,b,c,this);d&&(c[c.length-1][0]=d)};l.Md=Object({"http://www.opengis.net/gml":{coordinates:ip(Es.prototype.Fh)}});l.We=Object({"http://www.opengis.net/gml":{innerBoundaryIs:Es.prototype.dl,outerBoundaryIs:Es.prototype.Pn}});l.Di=Object({"http://www.opengis.net/gml":{coordinates:hp(Es.prototype.Fh)}});
l.bg=Object({"http://www.opengis.net/gml":{Point:ip(ss.prototype.Mh),MultiPoint:ip(ss.prototype.Kh),LineString:ip(ss.prototype.Ke),MultiLineString:ip(ss.prototype.Jh),LinearRing:ip(ss.prototype.Ih),Polygon:ip(ss.prototype.Le),MultiPolygon:ip(ss.prototype.Lh),Box:ip(Es.prototype.fo)}});function Fs(b){b=b?b:{};ss.call(this,b);this.l=void 0!==b.surface?b.surface:!1;this.g=void 0!==b.curve?b.curve:!1;this.i=void 0!==b.multiCurve?b.multiCurve:!0;this.j=void 0!==b.multiSurface?b.multiSurface:!0;this.schemaLocation=b.schemaLocation?b.schemaLocation:"http://www.opengis.net/gml http://schemas.opengis.net/gml/3.1.1/profiles/gmlsfProfile/1.0.0/gmlsf.xsd"}y(Fs,ss);l=Fs.prototype;l.no=function(b,c){var d=Q([],this.Ii,b,c,this);if(d){var e=new U(null);Wr(e,d);return e}};
l.oo=function(b,c){var d=Q([],this.Mi,b,c,this);if(d){var e=new V(null);Zr(e,d);return e}};l.rg=function(b,c){pp(this.Ei,b,c,this)};l.ki=function(b,c){pp(this.Ti,b,c,this)};l.ro=function(b,c){return Q([null],this.Ni,b,c,this)};l.to=function(b,c){return Q([null],this.Si,b,c,this)};l.so=function(b,c){return Q([null],this.We,b,c,this)};l.mo=function(b,c){return Q([null],this.Md,b,c,this)};l.fl=function(b,c){var d=Q(void 0,this.Nd,b,c,this);d&&c[c.length-1].push(d)};
l.yj=function(b,c){var d=Q(void 0,this.Nd,b,c,this);d&&(c[c.length-1][0]=d)};l.Oh=function(b,c){var d=Q([null],this.Ui,b,c,this);if(d&&d[0]){var e=new F(null),f=d[0],g=[f.length],h,k;h=1;for(k=d.length;h<k;++h)kb(f,d[h]),g.push(f.length);e.ba("XYZ",f,g);return e}};l.Dh=function(b,c){var d=Q([null],this.Fi,b,c,this);if(d){var e=new T(null);e.ba("XYZ",d);return e}};l.io=function(b,c){var d=Q([null],this.Gi,b,c,this);return Pd(d[1][0],d[1][1],d[2][0],d[2][1])};
l.ko=function(b,c){for(var d=Mo(b,!1),e=/^\s*([+\-]?\d*\.?\d+(?:[eE][+\-]?\d+)?)\s*/,f=[],g;g=e.exec(d);)f.push(parseFloat(g[1])),d=d.substr(g[0].length);if(""===d){d=c[0].srsName;e="enu";d&&(e=He(Ee(d)));if("neu"===e)for(d=0,e=f.length;d<e;d+=3)g=f[d],f[d]=f[d+1],f[d+1]=g;d=f.length;2==d&&f.push(0);return 0===d?void 0:f}};
l.Nf=function(b,c){var d=Mo(b,!1).replace(/^\s*|\s*$/g,""),e=c[0].srsName,f=b.parentNode.getAttribute("srsDimension"),g="enu";e&&(g=He(Ee(e)));d=d.split(/\s+/);e=2;b.getAttribute("srsDimension")?e=zs(b.getAttribute("srsDimension")):b.getAttribute("dimension")?e=zs(b.getAttribute("dimension")):f&&(e=zs(f));for(var h,k,m=[],n=0,p=d.length;n<p;n+=e)f=parseFloat(d[n]),h=parseFloat(d[n+1]),k=3===e?parseFloat(d[n+2]):0,"en"===g.substr(0,2)?m.push(f,h,k):m.push(h,f,k);return m};
l.Md=Object({"http://www.opengis.net/gml":{pos:ip(Fs.prototype.ko),posList:ip(Fs.prototype.Nf)}});l.We=Object({"http://www.opengis.net/gml":{interior:Fs.prototype.fl,exterior:Fs.prototype.yj}});
l.bg=Object({"http://www.opengis.net/gml":{Point:ip(ss.prototype.Mh),MultiPoint:ip(ss.prototype.Kh),LineString:ip(ss.prototype.Ke),MultiLineString:ip(ss.prototype.Jh),LinearRing:ip(ss.prototype.Ih),Polygon:ip(ss.prototype.Le),MultiPolygon:ip(ss.prototype.Lh),Surface:ip(Fs.prototype.Oh),MultiSurface:ip(Fs.prototype.oo),Curve:ip(Fs.prototype.Dh),MultiCurve:ip(Fs.prototype.no),Envelope:ip(Fs.prototype.io)}});l.Ii=Object({"http://www.opengis.net/gml":{curveMember:hp(Fs.prototype.rg),curveMembers:hp(Fs.prototype.rg)}});
l.Mi=Object({"http://www.opengis.net/gml":{surfaceMember:hp(Fs.prototype.ki),surfaceMembers:hp(Fs.prototype.ki)}});l.Ei=Object({"http://www.opengis.net/gml":{LineString:hp(ss.prototype.Ke),Curve:hp(Fs.prototype.Dh)}});l.Ti=Object({"http://www.opengis.net/gml":{Polygon:hp(ss.prototype.Le),Surface:hp(Fs.prototype.Oh)}});l.Ui=Object({"http://www.opengis.net/gml":{patches:ip(Fs.prototype.ro)}});l.Fi=Object({"http://www.opengis.net/gml":{segments:ip(Fs.prototype.to)}});
l.Gi=Object({"http://www.opengis.net/gml":{lowerCorner:hp(Fs.prototype.Nf),upperCorner:hp(Fs.prototype.Nf)}});l.Ni=Object({"http://www.opengis.net/gml":{PolygonPatch:ip(Fs.prototype.so)}});l.Si=Object({"http://www.opengis.net/gml":{LineStringSegment:ip(Fs.prototype.mo)}});function Gs(b,c,d){d=d[d.length-1].srsName;c=c.Z();for(var e=c.length,f=Array(e),g,h=0;h<e;++h){g=c[h];var k=h,m="enu";d&&(m=He(Ee(d)));f[k]="en"===m.substr(0,2)?g[0]+" "+g[1]:g[1]+" "+g[0]}Bs(b,f.join(" "))}
l.zi=function(b,c,d){var e=d[d.length-1].srsName;e&&b.setAttribute("srsName",e);e=Lo(b.namespaceURI,"pos");b.appendChild(e);d=d[d.length-1].srsName;b="enu";d&&(b=He(Ee(d)));c=c.Z();Bs(e,"en"===b.substr(0,2)?c[0]+" "+c[1]:c[1]+" "+c[0])};var Hs={"http://www.opengis.net/gml":{lowerCorner:O(Bs),upperCorner:O(Bs)}};l=Fs.prototype;l.fp=function(b,c,d){var e=d[d.length-1].srsName;e&&b.setAttribute("srsName",e);qp({node:b},Hs,np,[c[0]+" "+c[1],c[2]+" "+c[3]],d,["lowerCorner","upperCorner"],this)};
l.wi=function(b,c,d){var e=d[d.length-1].srsName;e&&b.setAttribute("srsName",e);e=Lo(b.namespaceURI,"posList");b.appendChild(e);Gs(e,c,d)};l.Ri=function(b,c){var d=c[c.length-1],e=d.node,f=d.exteriorWritten;void 0===f&&(d.exteriorWritten=!0);return Lo(e.namespaceURI,void 0!==f?"interior":"exterior")};
l.Ve=function(b,c,d){var e=d[d.length-1].srsName;"PolygonPatch"!==b.nodeName&&e&&b.setAttribute("srsName",e);"Polygon"===b.nodeName||"PolygonPatch"===b.nodeName?(c=c.be(),qp({node:b,srsName:e},Is,this.Ri,c,d,void 0,this)):"Surface"===b.nodeName&&(e=Lo(b.namespaceURI,"patches"),b.appendChild(e),b=Lo(e.namespaceURI,"PolygonPatch"),e.appendChild(b),this.Ve(b,c,d))};
l.Qe=function(b,c,d){var e=d[d.length-1].srsName;"LineStringSegment"!==b.nodeName&&e&&b.setAttribute("srsName",e);"LineString"===b.nodeName||"LineStringSegment"===b.nodeName?(e=Lo(b.namespaceURI,"posList"),b.appendChild(e),Gs(e,c,d)):"Curve"===b.nodeName&&(e=Lo(b.namespaceURI,"segments"),b.appendChild(e),b=Lo(e.namespaceURI,"LineStringSegment"),e.appendChild(b),this.Qe(b,c,d))};
l.yi=function(b,c,d){var e=d[d.length-1],f=e.srsName,e=e.surface;f&&b.setAttribute("srsName",f);c=c.ce();qp({node:b,srsName:f,surface:e},Js,this.c,c,d,void 0,this)};l.gp=function(b,c,d){var e=d[d.length-1].srsName;e&&b.setAttribute("srsName",e);c=c.ve();qp({node:b,srsName:e},Ks,lp("pointMember"),c,d,void 0,this)};l.xi=function(b,c,d){var e=d[d.length-1],f=e.srsName,e=e.curve;f&&b.setAttribute("srsName",f);c=c.sd();qp({node:b,srsName:f,curve:e},Ls,this.c,c,d,void 0,this)};
l.Ai=function(b,c,d){var e=Lo(b.namespaceURI,"LinearRing");b.appendChild(e);this.wi(e,c,d)};l.Bi=function(b,c,d){var e=this.b(c,d);e&&(b.appendChild(e),this.Ve(e,c,d))};l.hp=function(b,c,d){var e=Lo(b.namespaceURI,"Point");b.appendChild(e);this.zi(e,c,d)};l.vi=function(b,c,d){var e=this.b(c,d);e&&(b.appendChild(e),this.Qe(e,c,d))};
l.Te=function(b,c,d){var e=d[d.length-1],f=Tb(e);f.node=b;var g;ga(c)?e.dataProjection?g=Ze(c,e.featureProjection,e.dataProjection):g=c:g=Qr(c,!0,e);qp(f,Ms,this.b,[g],d,void 0,this)};
l.ri=function(b,c,d){var e=c.Oa();e&&b.setAttribute("fid",e);var e=d[d.length-1],f=e.featureNS,g=c.a;e.xc||(e.xc={},e.xc[f]={});var h=c.R();c=[];var k=[],m;for(m in h){var n=h[m];null!==n&&(c.push(m),k.push(n),m==g||n instanceof $e?m in e.xc[f]||(e.xc[f][m]=O(this.Te,this)):m in e.xc[f]||(e.xc[f][m]=O(Bs)))}m=Tb(e);m.node=b;qp(m,e.xc,lp(void 0,f),k,d,c)};
var Js={"http://www.opengis.net/gml":{surfaceMember:O(Fs.prototype.Bi),polygonMember:O(Fs.prototype.Bi)}},Ks={"http://www.opengis.net/gml":{pointMember:O(Fs.prototype.hp)}},Ls={"http://www.opengis.net/gml":{lineStringMember:O(Fs.prototype.vi),curveMember:O(Fs.prototype.vi)}},Is={"http://www.opengis.net/gml":{exterior:O(Fs.prototype.Ai),interior:O(Fs.prototype.Ai)}},Ms={"http://www.opengis.net/gml":{Curve:O(Fs.prototype.Qe),MultiCurve:O(Fs.prototype.xi),Point:O(Fs.prototype.zi),MultiPoint:O(Fs.prototype.gp),
LineString:O(Fs.prototype.Qe),MultiLineString:O(Fs.prototype.xi),LinearRing:O(Fs.prototype.wi),Polygon:O(Fs.prototype.Ve),MultiPolygon:O(Fs.prototype.yi),Surface:O(Fs.prototype.Ve),MultiSurface:O(Fs.prototype.yi),Envelope:O(Fs.prototype.fp)}},Ns={MultiLineString:"lineStringMember",MultiCurve:"curveMember",MultiPolygon:"polygonMember",MultiSurface:"surfaceMember"};Fs.prototype.c=function(b,c){return Lo("http://www.opengis.net/gml",Ns[c[c.length-1].node.nodeName])};
Fs.prototype.b=function(b,c){var d=c[c.length-1],e=d.multiSurface,f=d.surface,g=d.curve,d=d.multiCurve,h;ga(b)?h="Envelope":(h=b.W(),"MultiPolygon"===h&&!0===e?h="MultiSurface":"Polygon"===h&&!0===f?h="Surface":"LineString"===h&&!0===g?h="Curve":"MultiLineString"===h&&!0===d&&(h="MultiCurve"));return Lo("http://www.opengis.net/gml",h)};
Fs.prototype.o=function(b,c){c=Pr(this,c);var d=Lo("http://www.opengis.net/gml","geom"),e={node:d,srsName:this.srsName,curve:this.g,surface:this.l,multiSurface:this.j,multiCurve:this.i};c&&Wb(e,c);this.Te(d,b,[e]);return d};
Fs.prototype.f=function(b,c){c=Pr(this,c);var d=Lo("http://www.opengis.net/gml","featureMembers");ep(d,"http://www.w3.org/2001/XMLSchema-instance","xsi:schemaLocation",this.schemaLocation);var e={srsName:this.srsName,curve:this.g,surface:this.l,multiSurface:this.j,multiCurve:this.i,featureNS:this.featureNS,featureType:this.featureType};c&&Wb(e,c);var e=[e],f=e[e.length-1],g=f.featureType,h=f.featureNS,k={};k[h]={};k[h][g]=O(this.ri,this);f=Tb(f);f.node=d;qp(f,k,lp(g,h),b,e);return d};function Os(b){b=b?b:{};this.defaultDataProjection=null;this.defaultDataProjection=Ee("EPSG:4326");this.a=b.readExtensions}y(Os,ps);var Ps=[null,"http://www.topografix.com/GPX/1/0","http://www.topografix.com/GPX/1/1"];function Qs(b,c,d){b.push(parseFloat(c.getAttribute("lon")),parseFloat(c.getAttribute("lat")));"ele"in d?(b.push(d.ele),delete d.ele):b.push(0);"time"in d?(b.push(d.time),delete d.time):b.push(0);return b}
function Rs(b,c){var d=c[c.length-1],e=b.getAttribute("href");null!==e&&(d.link=e);pp(Ss,b,c)}function Ts(b,c){c[c.length-1].extensionsNode_=b}function Us(b,c){var d=c[0],e=Q({flatCoordinates:[]},Vs,b,c);if(e){var f=e.flatCoordinates;delete e.flatCoordinates;var g=new T(null);g.ba("XYZM",f);Qr(g,!1,d);d=new pn(g);d.I(e);return d}}
function Ws(b,c){var d=c[0],e=Q({flatCoordinates:[],ends:[]},Xs,b,c);if(e){var f=e.flatCoordinates;delete e.flatCoordinates;var g=e.ends;delete e.ends;var h=new U(null);h.ba("XYZM",f,g);Qr(h,!1,d);d=new pn(h);d.I(e);return d}}function Ys(b,c){var d=c[0],e=Q({},Zs,b,c);if(e){var f=Qs([],b,e),f=new E(f,"XYZM");Qr(f,!1,d);d=new pn(f);d.I(e);return d}}
var $s={rte:Us,trk:Ws,wpt:Ys},at=P(Ps,{rte:hp(Us),trk:hp(Ws),wpt:hp(Ys)}),Ss=P(Ps,{text:N(W,"linkText"),type:N(W,"linkType")}),Vs=P(Ps,{name:N(W),cmt:N(W),desc:N(W),src:N(W),link:Rs,number:N(ys),extensions:Ts,type:N(W),rtept:function(b,c){var d=Q({},bt,b,c);d&&Qs(c[c.length-1].flatCoordinates,b,d)}}),bt=P(Ps,{ele:N(ws),time:N(vs)}),Xs=P(Ps,{name:N(W),cmt:N(W),desc:N(W),src:N(W),link:Rs,number:N(ys),type:N(W),extensions:Ts,trkseg:function(b,c){var d=c[c.length-1];pp(ct,b,c);d.ends.push(d.flatCoordinates.length)}}),
ct=P(Ps,{trkpt:function(b,c){var d=Q({},dt,b,c);d&&Qs(c[c.length-1].flatCoordinates,b,d)}}),dt=P(Ps,{ele:N(ws),time:N(vs)}),Zs=P(Ps,{ele:N(ws),time:N(vs),magvar:N(ws),geoidheight:N(ws),name:N(W),cmt:N(W),desc:N(W),src:N(W),link:Rs,sym:N(W),type:N(W),fix:N(W),sat:N(ys),hdop:N(ws),vdop:N(ws),pdop:N(ws),ageofdgpsdata:N(ws),dgpsid:N(ys),extensions:Ts});
function et(b,c){c||(c=[]);for(var d=0,e=c.length;d<e;++d){var f=c[d];if(b.a){var g=f.get("extensionsNode_")||null;b.a(f,g)}f.set("extensionsNode_",void 0)}}Os.prototype.Eh=function(b,c){if(!vb(Ps,b.namespaceURI))return null;var d=$s[b.localName];if(!d)return null;d=d(b,[Or(this,b,c)]);if(!d)return null;et(this,[d]);return d};Os.prototype.ic=function(b,c){if(!vb(Ps,b.namespaceURI))return[];if("gpx"==b.localName){var d=Q([],at,b,[Or(this,b,c)]);if(d)return et(this,d),d}return[]};
function ft(b,c,d){b.setAttribute("href",c);c=d[d.length-1].properties;qp({node:b},gt,np,[c.linkText,c.linkType],d,ht)}function it(b,c,d){var e=d[d.length-1],f=e.node.namespaceURI,g=e.properties;ep(b,null,"lat",c[1]);ep(b,null,"lon",c[0]);switch(e.geometryLayout){case "XYZM":0!==c[3]&&(g.time=c[3]);case "XYZ":0!==c[2]&&(g.ele=c[2]);break;case "XYM":0!==c[2]&&(g.time=c[2])}c=jt[f];e=op(g,c);qp({node:b,properties:g},kt,np,e,d,c)}
var ht=["text","type"],gt=P(Ps,{text:O(Bs),type:O(Bs)}),lt=P(Ps,"name cmt desc src link number type rtept".split(" ")),mt=P(Ps,{name:O(Bs),cmt:O(Bs),desc:O(Bs),src:O(Bs),link:O(ft),number:O(Ds),type:O(Bs),rtept:kp(O(it))}),nt=P(Ps,"name cmt desc src link number type trkseg".split(" ")),qt=P(Ps,{name:O(Bs),cmt:O(Bs),desc:O(Bs),src:O(Bs),link:O(ft),number:O(Ds),type:O(Bs),trkseg:kp(O(function(b,c,d){qp({node:b,geometryLayout:c.b,properties:{}},ot,pt,c.Z(),d)}))}),pt=lp("trkpt"),ot=P(Ps,{trkpt:O(it)}),
jt=P(Ps,"ele time magvar geoidheight name cmt desc src link sym type fix sat hdop vdop pdop ageofdgpsdata dgpsid".split(" ")),kt=P(Ps,{ele:O(Cs),time:O(function(b,c){var d=new Date(1E3*c),d=d.getUTCFullYear()+"-"+Pa(d.getUTCMonth()+1)+"-"+Pa(d.getUTCDate())+"T"+Pa(d.getUTCHours())+":"+Pa(d.getUTCMinutes())+":"+Pa(d.getUTCSeconds())+"Z";b.appendChild(Io.createTextNode(d))}),magvar:O(Cs),geoidheight:O(Cs),name:O(Bs),cmt:O(Bs),desc:O(Bs),src:O(Bs),link:O(ft),sym:O(Bs),type:O(Bs),fix:O(Bs),sat:O(Ds),
hdop:O(Cs),vdop:O(Cs),pdop:O(Cs),ageofdgpsdata:O(Cs),dgpsid:O(Ds)}),rt={Point:"wpt",LineString:"rte",MultiLineString:"trk"};function st(b,c){var d=b.X();if(d&&(d=rt[d.W()]))return Lo(c[c.length-1].node.namespaceURI,d)}
var tt=P(Ps,{rte:O(function(b,c,d){var e=d[0],f=c.R();b={node:b,properties:f};if(c=c.X())c=Qr(c,!0,e),b.geometryLayout=c.b,f.rtept=c.Z();e=lt[d[d.length-1].node.namespaceURI];f=op(f,e);qp(b,mt,np,f,d,e)}),trk:O(function(b,c,d){var e=d[0],f=c.R();b={node:b,properties:f};if(c=c.X())c=Qr(c,!0,e),f.trkseg=c.sd();e=nt[d[d.length-1].node.namespaceURI];f=op(f,e);qp(b,qt,np,f,d,e)}),wpt:O(function(b,c,d){var e=d[0],f=d[d.length-1];f.properties=c.R();if(c=c.X())c=Qr(c,!0,e),f.geometryLayout=c.b,it(b,c.Z(),
d)})});Os.prototype.f=function(b,c){c=Pr(this,c);var d=Lo("http://www.topografix.com/GPX/1/1","gpx");qp({node:d},tt,st,b,[c]);return d};function ut(b){b=vt(b);return db(b,function(b){return b.b.substring(b.f,b.a)})}function wt(b,c,d){this.b=b;this.f=c;this.a=d}function vt(b){for(var c=RegExp("\r\n|\r|\n","g"),d=0,e,f=[];e=c.exec(b);)d=new wt(b,d,e.index),f.push(d),d=c.lastIndex;d<b.length&&(d=new wt(b,d,b.length),f.push(d));return f};function xt(){this.defaultDataProjection=null}y(xt,Nr);l=xt.prototype;l.W=function(){return"text"};l.Tb=function(b,c){return this.Dd(ia(b)?b:"",Pr(this,c))};l.Ba=function(b,c){return this.Lf(ia(b)?b:"",Pr(this,c))};l.Tc=function(b,c){return this.Fd(ia(b)?b:"",Pr(this,c))};l.Ia=function(){return this.defaultDataProjection};l.Kd=function(b,c){return this.Re(b,Pr(this,c))};l.Vb=function(b,c){return this.si(b,Pr(this,c))};l.Xc=function(b,c){return this.Ld(b,Pr(this,c))};function yt(b){b=b?b:{};this.defaultDataProjection=null;this.defaultDataProjection=Ee("EPSG:4326");this.a=b.altitudeMode?b.altitudeMode:"none"}y(yt,xt);var zt=/^B(\d{2})(\d{2})(\d{2})(\d{2})(\d{5})([NS])(\d{3})(\d{5})([EW])([AV])(\d{5})(\d{5})/,At=/^H.([A-Z]{3}).*?:(.*)/,Bt=/^HFDTE(\d{2})(\d{2})(\d{2})/;
yt.prototype.Dd=function(b,c){var d=this.a,e=ut(b),f={},g=[],h=2E3,k=0,m=1,n,p;n=0;for(p=e.length;n<p;++n){var q=e[n],r;if("B"==q.charAt(0)){if(r=zt.exec(q)){var q=parseInt(r[1],10),t=parseInt(r[2],10),x=parseInt(r[3],10),z=parseInt(r[4],10)+parseInt(r[5],10)/6E4;"S"==r[6]&&(z=-z);var A=parseInt(r[7],10)+parseInt(r[8],10)/6E4;"W"==r[9]&&(A=-A);g.push(A,z);"none"!=d&&g.push("gps"==d?parseInt(r[11],10):"barometric"==d?parseInt(r[12],10):0);g.push(Date.UTC(h,k,m,q,t,x)/1E3)}}else if("H"==q.charAt(0))if(r=
Bt.exec(q))m=parseInt(r[1],10),k=parseInt(r[2],10)-1,h=2E3+parseInt(r[3],10);else if(r=At.exec(q))f[r[1]]=r[2].trim(),Bt.exec(q)}if(0===g.length)return null;e=new T(null);e.ba("none"==d?"XYM":"XYZM",g);d=new pn(Qr(e,!1,c));d.I(f);return d};yt.prototype.Lf=function(b,c){var d=this.Dd(b,c);return d?[d]:[]};function Ct(b,c){this.f=this.j=this.c="";this.l=null;this.g=this.a="";this.i=!1;var d;b instanceof Ct?(this.i=ca(c)?c:b.i,Dt(this,b.c),this.j=b.j,this.f=b.f,Et(this,b.l),this.a=b.a,Ft(this,b.b.clone()),this.g=b.g):b&&(d=String(b).match(go))?(this.i=!!c,Dt(this,d[1]||"",!0),this.j=Gt(d[2]||""),this.f=Gt(d[3]||"",!0),Et(this,d[4]),this.a=Gt(d[5]||"",!0),Ft(this,d[6]||"",!0),this.g=Gt(d[7]||"")):(this.i=!!c,this.b=new Ht(null,0,this.i))}
Ct.prototype.toString=function(){var b=[],c=this.c;c&&b.push(It(c,Jt,!0),":");var d=this.f;if(d||"file"==c)b.push("//"),(c=this.j)&&b.push(It(c,Jt,!0),"@"),b.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.l,null!=d&&b.push(":",String(d));if(d=this.a)this.f&&"/"!=d.charAt(0)&&b.push("/"),b.push(It(d,"/"==d.charAt(0)?Kt:Lt,!0));(d=this.b.toString())&&b.push("?",d);(d=this.g)&&b.push("#",It(d,Mt));return b.join("")};Ct.prototype.clone=function(){return new Ct(this)};
function Dt(b,c,d){b.c=d?Gt(c,!0):c;b.c&&(b.c=b.c.replace(/:$/,""))}function Et(b,c){if(c){c=Number(c);if(isNaN(c)||0>c)throw Error("Bad port number "+c);b.l=c}else b.l=null}function Ft(b,c,d){c instanceof Ht?(b.b=c,Nt(b.b,b.i)):(d||(c=It(c,Ot)),b.b=new Ht(c,0,b.i))}function Pt(b){return b instanceof Ct?b.clone():new Ct(b,void 0)}
function Qt(b,c){b instanceof Ct||(b=Pt(b));c instanceof Ct||(c=Pt(c));var d=b,e=c,f=d.clone(),g=!!e.c;g?Dt(f,e.c):g=!!e.j;g?f.j=e.j:g=!!e.f;g?f.f=e.f:g=null!=e.l;var h=e.a;if(g)Et(f,e.l);else if(g=!!e.a)if("/"!=h.charAt(0)&&(d.f&&!d.a?h="/"+h:(d=f.a.lastIndexOf("/"),-1!=d&&(h=f.a.substr(0,d+1)+h))),d=h,".."==d||"."==d)h="";else if(-1!=d.indexOf("./")||-1!=d.indexOf("/.")){for(var h=0==d.lastIndexOf("/",0),d=d.split("/"),k=[],m=0;m<d.length;){var n=d[m++];"."==n?h&&m==d.length&&k.push(""):".."==n?
((1<k.length||1==k.length&&""!=k[0])&&k.pop(),h&&m==d.length&&k.push("")):(k.push(n),h=!0)}h=k.join("/")}else h=d;g?f.a=h:g=""!==e.b.toString();g?Ft(f,Gt(e.b.toString())):g=!!e.g;g&&(f.g=e.g);return f}function Gt(b,c){return b?c?decodeURI(b.replace(/%25/g,"%2525")):decodeURIComponent(b):""}function It(b,c,d){return ia(b)?(b=encodeURI(b).replace(c,Rt),d&&(b=b.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),b):null}function Rt(b){b=b.charCodeAt(0);return"%"+(b>>4&15).toString(16)+(b&15).toString(16)}
var Jt=/[#\/\?@]/g,Lt=/[\#\?:]/g,Kt=/[\#\?]/g,Ot=/[\#\?@]/g,Mt=/#/g;function Ht(b,c,d){this.f=this.a=null;this.b=b||null;this.c=!!d}function St(b){b.a||(b.a=new pi,b.f=0,b.b&&ho(b.b,function(c,d){b.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}l=Ht.prototype;l.qc=function(){St(this);return this.f};l.add=function(b,c){St(this);this.b=null;b=Tt(this,b);var d=this.a.get(b);d||this.a.set(b,d=[]);d.push(c);this.f++;return this};
l.remove=function(b){St(this);b=Tt(this,b);return ri(this.a.f,b)?(this.b=null,this.f-=this.a.get(b).length,this.a.remove(b)):!1};l.clear=function(){this.a=this.b=null;this.f=0};l.La=function(){St(this);return 0==this.f};function Ut(b,c){St(b);c=Tt(b,c);return ri(b.a.f,c)}l.P=function(){St(this);for(var b=this.a.sc(),c=this.a.P(),d=[],e=0;e<c.length;e++)for(var f=b[e],g=0;g<f.length;g++)d.push(c[e]);return d};
l.sc=function(b){St(this);var c=[];if(ia(b))Ut(this,b)&&(c=ib(c,this.a.get(Tt(this,b))));else{b=this.a.sc();for(var d=0;d<b.length;d++)c=ib(c,b[d])}return c};l.set=function(b,c){St(this);this.b=null;b=Tt(this,b);Ut(this,b)&&(this.f-=this.a.get(b).length);this.a.set(b,[c]);this.f++;return this};l.get=function(b,c){var d=b?this.sc(b):[];return 0<d.length?String(d[0]):c};function Vt(b,c,d){b.remove(c);0<d.length&&(b.b=null,b.a.set(Tt(b,c),jb(d)),b.f+=d.length)}
l.toString=function(){if(this.b)return this.b;if(!this.a)return"";for(var b=[],c=this.a.P(),d=0;d<c.length;d++)for(var e=c[d],f=encodeURIComponent(String(e)),e=this.sc(e),g=0;g<e.length;g++){var h=f;""!==e[g]&&(h+="="+encodeURIComponent(String(e[g])));b.push(h)}return this.b=b.join("&")};l.clone=function(){var b=new Ht;b.b=this.b;this.a&&(b.a=this.a.clone(),b.f=this.f);return b};function Tt(b,c){var d=String(c);b.c&&(d=d.toLowerCase());return d}
function Nt(b,c){c&&!b.c&&(St(b),b.b=null,b.a.forEach(function(b,c){var f=c.toLowerCase();c!=f&&(this.remove(c),Vt(this,f,b))},b));b.c=c};function Wt(b){b=b||{};this.b=b.font;this.i=b.rotation;this.f=b.scale;this.G=b.text;this.l=b.textAlign;this.o=b.textBaseline;this.a=void 0!==b.fill?b.fill:new Tl({color:"#333"});this.j=void 0!==b.stroke?b.stroke:null;this.c=void 0!==b.offsetX?b.offsetX:0;this.g=void 0!==b.offsetY?b.offsetY:0}l=Wt.prototype;l.Nj=function(){return this.b};l.ak=function(){return this.c};l.bk=function(){return this.g};l.An=function(){return this.a};l.Bn=function(){return this.i};l.Cn=function(){return this.f};l.Dn=function(){return this.j};
l.Ca=function(){return this.G};l.nk=function(){return this.l};l.pk=function(){return this.o};l.Lo=function(b){this.b=b};l.ci=function(b){this.c=b};l.di=function(b){this.g=b};l.Ko=function(b){this.a=b};l.En=function(b){this.i=b};l.Fn=function(b){this.f=b};l.Ro=function(b){this.j=b};l.fi=function(b){this.G=b};l.gi=function(b){this.l=b};l.So=function(b){this.o=b};function Xt(b){b=b?b:{};this.defaultDataProjection=null;this.defaultDataProjection=Ee("EPSG:4326");this.b=b.defaultStyle?b.defaultStyle:Yt;this.c=void 0!==b.extractStyles?b.extractStyles:!0;this.i=void 0!==b.writeStyles?b.writeStyles:!0;this.a={};this.g=void 0!==b.showPointNames?b.showPointNames:!0}y(Xt,ps);
var Zt=["http://www.google.com/kml/ext/2.2"],$t=[null,"http://earth.google.com/kml/2.0","http://earth.google.com/kml/2.1","http://earth.google.com/kml/2.2","http://www.opengis.net/kml/2.2"],au=[255,255,255,1],bu=new Tl({color:au}),cu=[20,2],du=[64,64],eu=new tk({anchor:cu,anchorOrigin:"bottom-left",anchorXUnits:"pixels",anchorYUnits:"pixels",crossOrigin:"anonymous",rotation:0,scale:.5,size:du,src:"https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png"}),fu=new Yl({color:au,width:1}),gu=new Wt({font:"bold 16px Helvetica",
fill:bu,stroke:new Yl({color:[51,51,51,1],width:2}),scale:.8}),Yt=[new $l({fill:bu,image:eu,text:gu,stroke:fu,zIndex:0})],hu={fraction:"fraction",pixels:"pixels"};function iu(b,c){var d=null,e=[0,0],f="start";b.f&&(d=b.f.rd())&&2==d.length&&(e[0]=b.f.j*d[0]/2,e[1]=-b.f.j*d[1]/2,f="left");Pb(b.Ca())?d=new Wt({text:c,offsetX:e[0],offsetY:e[1],textAlign:f}):(d=Tb(b.Ca()),d.fi(c),d.gi(f),d.ci(e[0]),d.di(e[1]));return new $l({text:d})}
function ju(b,c,d,e,f){return function(){var g=f,h="";g&&this.X()&&(g="Point"===this.X().W());g&&(h=this.R().name,g=g&&h);if(b)return g?(g=iu(b[0],h),b.concat(g)):b;if(c){var k=ku(c,d,e);return g?(g=iu(k[0],h),k.concat(g)):k}return g?(g=iu(d[0],h),d.concat(g)):d}}function ku(b,c,d){return ga(b)?b:ia(b)?(!(b in d)&&"#"+b in d&&(b="#"+b),ku(d[b],c,d)):c}
function lu(b){b=Mo(b,!1);if(b=/^\s*#?\s*([0-9A-Fa-f]{8})\s*$/.exec(b))return b=b[1],[parseInt(b.substr(6,2),16),parseInt(b.substr(4,2),16),parseInt(b.substr(2,2),16),parseInt(b.substr(0,2),16)/255]}function mu(b){b=Mo(b,!1);for(var c=[],d=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)(?:\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?))?\s*/i,e;e=d.exec(b);)c.push(parseFloat(e[1]),parseFloat(e[2]),e[3]?parseFloat(e[3]):0),b=b.substr(e[0].length);return""!==b?void 0:c}
function nu(b){var c=Mo(b,!1);return b.baseURI?Qt(b.baseURI,c.trim()).toString():c.trim()}function ou(b){b=ws(b);if(void 0!==b)return Math.sqrt(b)}function pu(b,c){return Q(null,qu,b,c)}function ru(b,c){var d=Q({A:[],oi:[]},su,b,c);if(d){var e=d.A,d=d.oi,f,g;f=0;for(g=Math.min(e.length,d.length);f<g;++f)e[4*f+3]=d[f];d=new T(null);d.ba("XYZM",e);return d}}function tu(b,c){var d=Q({},uu,b,c),e=Q(null,vu,b,c);if(e){var f=new T(null);f.ba("XYZ",e);f.I(d);return f}}
function wu(b,c){var d=Q({},uu,b,c),e=Q(null,vu,b,c);if(e){var f=new F(null);f.ba("XYZ",e,[e.length]);f.I(d);return f}}
function xu(b,c){var d=Q([],yu,b,c);if(!d)return null;if(0===d.length)return new gs(d);var e=!0,f=d[0].W(),g,h,k;h=1;for(k=d.length;h<k;++h)if(g=d[h],g.W()!=f){e=!1;break}if(e){if("Point"==f){g=d[0];e=g.b;f=g.ia();h=1;for(k=d.length;h<k;++h)g=d[h],kb(f,g.ia());g=new Xr(null);g.ba(e,f);zu(g,d);return g}return"LineString"==f?(g=new U(null),Wr(g,d),zu(g,d),g):"Polygon"==f?(g=new V(null),Zr(g,d),zu(g,d),g):"GeometryCollection"==f?new gs(d):null}return new gs(d)}
function Au(b,c){var d=Q({},uu,b,c),e=Q(null,vu,b,c);if(e){var f=new E(null);f.ba("XYZ",e);f.I(d);return f}}function Bu(b,c){var d=Q({},uu,b,c),e=Q([null],Cu,b,c);if(e&&e[0]){var f=new F(null),g=e[0],h=[g.length],k,m;k=1;for(m=e.length;k<m;++k)kb(g,e[k]),h.push(g.length);f.ba("XYZ",g,h);f.I(d);return f}}
function Du(b,c){var d=Q({},Eu,b,c);if(!d)return null;var e="fillStyle"in d?d.fillStyle:bu,f=d.fill;void 0===f||f||(e=null);var f="imageStyle"in d?d.imageStyle:eu,g="textStyle"in d?d.textStyle:gu,h="strokeStyle"in d?d.strokeStyle:fu,d=d.outline;void 0===d||d||(h=null);return[new $l({fill:e,image:f,stroke:h,text:g,zIndex:void 0})]}
function zu(b,c){var d=c.length,e=Array(c.length),f=Array(c.length),g,h,k,m;k=m=!1;for(h=0;h<d;++h)g=c[h],e[h]=g.get("extrude"),f[h]=g.get("altitudeMode"),k=k||void 0!==e[h],m=m||f[h];k&&b.set("extrude",e);m&&b.set("altitudeMode",f)}function Fu(b,c){pp(Gu,b,c)}
var Hu=P($t,{value:ip(W)}),Gu=P($t,{Data:function(b,c){var d=b.getAttribute("name");if(null!==d){var e=Q(void 0,Hu,b,c);e&&(c[c.length-1][d]=e)}},SchemaData:function(b,c){pp(Iu,b,c)}}),uu=P($t,{extrude:N(ts),altitudeMode:N(W)}),qu=P($t,{coordinates:ip(mu)}),Cu=P($t,{innerBoundaryIs:function(b,c){var d=Q(void 0,Ju,b,c);d&&c[c.length-1].push(d)},outerBoundaryIs:function(b,c){var d=Q(void 0,Ku,b,c);d&&(c[c.length-1][0]=d)}}),su=P($t,{when:function(b,c){var d=c[c.length-1].oi,e=Mo(b,!1);if(e=/^\s*(\d{4})($|-(\d{2})($|-(\d{2})($|T(\d{2}):(\d{2}):(\d{2})(Z|(?:([+\-])(\d{2})(?::(\d{2}))?)))))\s*$/.exec(e)){var f=
Date.UTC(parseInt(e[1],10),e[3]?parseInt(e[3],10)-1:0,e[5]?parseInt(e[5],10):1,e[7]?parseInt(e[7],10):0,e[8]?parseInt(e[8],10):0,e[9]?parseInt(e[9],10):0);if(e[10]&&"Z"!=e[10]){var g="-"==e[11]?-1:1,f=f+60*g*parseInt(e[12],10);e[13]&&(f+=3600*g*parseInt(e[13],10))}d.push(f)}else d.push(0)}},P(Zt,{coord:function(b,c){var d=c[c.length-1].A,e=Mo(b,!1);(e=/^\s*([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s*$/i.exec(e))?d.push(parseFloat(e[1]),
parseFloat(e[2]),parseFloat(e[3]),0):d.push(0,0,0,0)}})),vu=P($t,{coordinates:ip(mu)}),Lu=P($t,{href:N(nu)},P(Zt,{x:N(ws),y:N(ws),w:N(ws),h:N(ws)})),Mu=P($t,{Icon:N(function(b,c){var d=Q({},Lu,b,c);return d?d:null}),heading:N(ws),hotSpot:N(function(b){var c=b.getAttribute("xunits"),d=b.getAttribute("yunits");return{x:parseFloat(b.getAttribute("x")),$f:hu[c],y:parseFloat(b.getAttribute("y")),ag:hu[d]}}),scale:N(ou)}),Ju=P($t,{LinearRing:ip(pu)}),Nu=P($t,{color:N(lu),scale:N(ou)}),Ou=P($t,{color:N(lu),
width:N(ws)}),yu=P($t,{LineString:hp(tu),LinearRing:hp(wu),MultiGeometry:hp(xu),Point:hp(Au),Polygon:hp(Bu)}),Pu=P(Zt,{Track:hp(ru)}),Ru=P($t,{ExtendedData:Fu,Link:function(b,c){pp(Qu,b,c)},address:N(W),description:N(W),name:N(W),open:N(ts),phoneNumber:N(W),visibility:N(ts)}),Qu=P($t,{href:N(nu)}),Ku=P($t,{LinearRing:ip(pu)}),Su=P($t,{Style:N(Du),key:N(W),styleUrl:N(function(b){var c=Mo(b,!1).trim();return b.baseURI?Qt(b.baseURI,c).toString():c})}),Uu=P($t,{ExtendedData:Fu,MultiGeometry:N(xu,"geometry"),
LineString:N(tu,"geometry"),LinearRing:N(wu,"geometry"),Point:N(Au,"geometry"),Polygon:N(Bu,"geometry"),Style:N(Du),StyleMap:function(b,c){var d=Q(void 0,Tu,b,c);if(d){var e=c[c.length-1];ga(d)?e.Style=d:ia(d)&&(e.styleUrl=d)}},address:N(W),description:N(W),name:N(W),open:N(ts),phoneNumber:N(W),styleUrl:N(nu),visibility:N(ts)},P(Zt,{MultiTrack:N(function(b,c){var d=Q([],Pu,b,c);if(d){var e=new U(null);Wr(e,d);return e}},"geometry"),Track:N(ru,"geometry")})),Vu=P($t,{color:N(lu),fill:N(ts),outline:N(ts)}),
Iu=P($t,{SimpleData:function(b,c){var d=b.getAttribute("name");if(null!==d){var e=W(b);c[c.length-1][d]=e}}}),Eu=P($t,{IconStyle:function(b,c){var d=Q({},Mu,b,c);if(d){var e=c[c.length-1],f="Icon"in d?d.Icon:{},g;g=(g=f.href)?g:"https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png";var h,k,m,n=d.hotSpot;n?(h=[n.x,n.y],k=n.$f,m=n.ag):"https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png"===g?(h=cu,m=k="pixels"):/^http:\/\/maps\.(?:google|gstatic)\.com\//.test(g)&&(h=[.5,0],m=k="fraction");
var p,n=f.x,q=f.y;void 0!==n&&void 0!==q&&(p=[n,q]);var r,n=f.w,f=f.h;void 0!==n&&void 0!==f&&(r=[n,f]);var t,f=d.heading;void 0!==f&&(t=Xa(f));d=d.scale;"https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png"==g&&(r=du,void 0===d&&(d=.5));h=new tk({anchor:h,anchorOrigin:"bottom-left",anchorXUnits:k,anchorYUnits:m,crossOrigin:"anonymous",offset:p,offsetOrigin:"bottom-left",rotation:t,scale:d,size:r,src:g});e.imageStyle=h}},LabelStyle:function(b,c){var d=Q({},Nu,b,c);d&&(c[c.length-1].textStyle=
new Wt({fill:new Tl({color:"color"in d?d.color:au}),scale:d.scale}))},LineStyle:function(b,c){var d=Q({},Ou,b,c);d&&(c[c.length-1].strokeStyle=new Yl({color:"color"in d?d.color:au,width:"width"in d?d.width:1}))},PolyStyle:function(b,c){var d=Q({},Vu,b,c);if(d){var e=c[c.length-1];e.fillStyle=new Tl({color:"color"in d?d.color:au});var f=d.fill;void 0!==f&&(e.fill=f);d=d.outline;void 0!==d&&(e.outline=d)}}}),Tu=P($t,{Pair:function(b,c){var d=Q({},Su,b,c);if(d){var e=d.key;e&&"normal"==e&&((e=d.styleUrl)&&
(c[c.length-1]=e),(d=d.Style)&&(c[c.length-1]=d))}}});l=Xt.prototype;l.Hf=function(b,c){Qo(b);var d=P($t,{Document:gp(this.Hf,this),Folder:gp(this.Hf,this),Placemark:hp(this.Pf,this),Style:ua(this.vo,this),StyleMap:ua(this.uo,this)});if(d=Q([],d,b,c,this))return d};
l.Pf=function(b,c){var d=Q({geometry:null},Uu,b,c);if(d){var e=new pn,f=b.getAttribute("id");null!==f&&e.jc(f);var f=c[0],g=d.geometry;g&&Qr(g,!1,f);e.Ma(g);delete d.geometry;this.c&&e.wf(ju(d.Style,d.styleUrl,this.b,this.a,this.g));delete d.Style;e.I(d);return e}};l.vo=function(b,c){var d=b.getAttribute("id");if(null!==d){var e=Du(b,c);e&&(d=b.baseURI?Qt(b.baseURI,"#"+d).toString():"#"+d,this.a[d]=e)}};
l.uo=function(b,c){var d=b.getAttribute("id");if(null!==d){var e=Q(void 0,Tu,b,c);e&&(d=b.baseURI?Qt(b.baseURI,"#"+d).toString():"#"+d,this.a[d]=e)}};l.Eh=function(b,c){if(!vb($t,b.namespaceURI))return null;var d=this.Pf(b,[Or(this,b,c)]);return d?d:null};
l.ic=function(b,c){if(!vb($t,b.namespaceURI))return[];var d;d=Qo(b);if("Document"==d||"Folder"==d)return(d=this.Hf(b,[Or(this,b,c)]))?d:[];if("Placemark"==d)return(d=this.Pf(b,[Or(this,b,c)]))?[d]:[];if("kml"==d){d=[];var e;for(e=b.firstElementChild;e;e=e.nextElementSibling){var f=this.ic(e,c);f&&kb(d,f)}return d}return[]};l.po=function(b){if(To(b))return Wu(this,b);if(Wo(b))return Xu(this,b);if(ia(b))return b=fp(b),Wu(this,b)};
function Wu(b,c){var d;for(d=c.firstChild;d;d=d.nextSibling)if(1==d.nodeType){var e=Xu(b,d);if(e)return e}}function Xu(b,c){var d;for(d=c.firstElementChild;d;d=d.nextElementSibling)if(vb($t,d.namespaceURI)&&"name"==d.localName)return W(d);for(d=c.firstElementChild;d;d=d.nextElementSibling){var e=Qo(d);if(vb($t,d.namespaceURI)&&("Document"==e||"Folder"==e||"Placemark"==e||"kml"==e)&&(e=Xu(b,d)))return e}}
l.qo=function(b){var c=[];To(b)?kb(c,Yu(this,b)):Wo(b)?kb(c,Zu(this,b)):ia(b)&&(b=fp(b),kb(c,Yu(this,b)));return c};function Yu(b,c){var d,e=[];for(d=c.firstChild;d;d=d.nextSibling)1==d.nodeType&&kb(e,Zu(b,d));return e}
function Zu(b,c){var d,e=[];for(d=c.firstElementChild;d;d=d.nextElementSibling)if(vb($t,d.namespaceURI)&&"NetworkLink"==d.localName){var f=Q({},Ru,d,[]);e.push(f)}for(d=c.firstElementChild;d;d=d.nextElementSibling)f=Qo(d),!vb($t,d.namespaceURI)||"Document"!=f&&"Folder"!=f&&"kml"!=f||kb(e,Zu(b,d));return e}function $u(b,c){var d=tg(c),d=[255*(4==d.length?d[3]:1),d[2],d[1],d[0]],e;for(e=0;4>e;++e){var f=parseInt(d[e],10).toString(16);d[e]=1==f.length?"0"+f:f}Bs(b,d.join(""))}
function av(b,c,d){qp({node:b},bv,cv,[c],d)}function dv(b,c,d){var e={node:b};c.Oa()&&b.setAttribute("id",c.Oa());b=c.R();var f=c.ac();if(f&&(f=f.call(c,0))&&0<f.length){var g=f[0];this.i&&(b.Style=f[0]);(f=g.Ca())&&(b.name=f.Ca())}f=ev[d[d.length-1].node.namespaceURI];b=op(b,f);qp(e,fv,np,b,d,f);b=d[0];(c=c.X())&&(c=Qr(c,!0,b));qp(e,fv,gv,[c],d)}function hv(b,c,d){var e=c.ia();b={node:b};b.layout=c.b;b.stride=c.ra();qp(b,iv,jv,[e],d)}
function kv(b,c,d){c=c.be();var e=c.shift();b={node:b};qp(b,lv,mv,c,d);qp(b,lv,nv,[e],d)}function ov(b,c){Cs(b,c*c)}
var pv=P($t,["Document","Placemark"]),sv=P($t,{Document:O(function(b,c,d){qp({node:b},qv,rv,c,d,void 0,this)}),Placemark:O(dv)}),qv=P($t,{Placemark:O(dv)}),tv={Point:"Point",LineString:"LineString",LinearRing:"LinearRing",Polygon:"Polygon",MultiPoint:"MultiGeometry",MultiLineString:"MultiGeometry",MultiPolygon:"MultiGeometry"},uv=P($t,["href"],P(Zt,["x","y","w","h"])),vv=P($t,{href:O(Bs)},P(Zt,{x:O(Cs),y:O(Cs),w:O(Cs),h:O(Cs)})),wv=P($t,["scale","heading","Icon","hotSpot"]),yv=P($t,{Icon:O(function(b,
c,d){b={node:b};var e=uv[d[d.length-1].node.namespaceURI],f=op(c,e);qp(b,vv,np,f,d,e);e=uv[Zt[0]];f=op(c,e);qp(b,vv,xv,f,d,e)}),heading:O(Cs),hotSpot:O(function(b,c){b.setAttribute("x",c.x);b.setAttribute("y",c.y);b.setAttribute("xunits",c.$f);b.setAttribute("yunits",c.ag)}),scale:O(ov)}),zv=P($t,["color","scale"]),Av=P($t,{color:O($u),scale:O(ov)}),Bv=P($t,["color","width"]),Cv=P($t,{color:O($u),width:O(Cs)}),bv=P($t,{LinearRing:O(hv)}),Dv=P($t,{LineString:O(hv),Point:O(hv),Polygon:O(kv)}),ev=P($t,
"name open visibility address phoneNumber description styleUrl Style".split(" ")),fv=P($t,{MultiGeometry:O(function(b,c,d){b={node:b};var e=c.W(),f,g;"MultiPoint"==e?(f=c.ve(),g=Ev):"MultiLineString"==e?(f=c.sd(),g=Fv):"MultiPolygon"==e&&(f=c.ce(),g=Gv);qp(b,Dv,g,f,d)}),LineString:O(hv),LinearRing:O(hv),Point:O(hv),Polygon:O(kv),Style:O(function(b,c,d){b={node:b};var e={},f=c.g,g=c.b,h=c.f;c=c.Ca();h instanceof tk&&(e.IconStyle=h);c&&(e.LabelStyle=c);g&&(e.LineStyle=g);f&&(e.PolyStyle=f);c=Hv[d[d.length-
1].node.namespaceURI];e=op(e,c);qp(b,Iv,np,e,d,c)}),address:O(Bs),description:O(Bs),name:O(Bs),open:O(As),phoneNumber:O(Bs),styleUrl:O(Bs),visibility:O(As)}),iv=P($t,{coordinates:O(function(b,c,d){d=d[d.length-1];var e=d.layout;d=d.stride;var f;"XY"==e||"XYM"==e?f=2:("XYZ"==e||"XYZM"==e)&&(f=3);var g,h=c.length,k="";if(0<h){k+=c[0];for(e=1;e<f;++e)k+=","+c[e];for(g=d;g<h;g+=d)for(k+=" "+c[g],e=1;e<f;++e)k+=","+c[g+e]}Bs(b,k)})}),lv=P($t,{outerBoundaryIs:O(av),innerBoundaryIs:O(av)}),Jv=P($t,{color:O($u)}),
Hv=P($t,["IconStyle","LabelStyle","LineStyle","PolyStyle"]),Iv=P($t,{IconStyle:O(function(b,c,d){b={node:b};var e={},f=c.Cb(),g=c.rd(),h={href:c.a.i};if(f){h.w=f[0];h.h=f[1];var k=c.Xb(),m=c.Da();m&&g&&0!==m[0]&&m[1]!==f[1]&&(h.x=m[0],h.y=g[1]-(m[1]+f[1]));k&&0!==k[0]&&k[1]!==f[1]&&(e.hotSpot={x:k[0],$f:"pixels",y:f[1]-k[1],ag:"pixels"})}e.Icon=h;f=c.j;1!==f&&(e.scale=f);c=c.G;0!==c&&(e.heading=c);c=wv[d[d.length-1].node.namespaceURI];e=op(e,c);qp(b,yv,np,e,d,c)}),LabelStyle:O(function(b,c,d){b={node:b};
var e={},f=c.a;f&&(e.color=f.a);(c=c.f)&&1!==c&&(e.scale=c);c=zv[d[d.length-1].node.namespaceURI];e=op(e,c);qp(b,Av,np,e,d,c)}),LineStyle:O(function(b,c,d){b={node:b};var e=Bv[d[d.length-1].node.namespaceURI];c=op({color:c.a,width:c.f},e);qp(b,Cv,np,c,d,e)}),PolyStyle:O(function(b,c,d){qp({node:b},Jv,Kv,[c.a],d)})});function xv(b,c,d){return Lo(Zt[0],"gx:"+d)}function rv(b,c){return Lo(c[c.length-1].node.namespaceURI,"Placemark")}
function gv(b,c){if(b)return Lo(c[c.length-1].node.namespaceURI,tv[b.W()])}var Kv=lp("color"),jv=lp("coordinates"),mv=lp("innerBoundaryIs"),Ev=lp("Point"),Fv=lp("LineString"),cv=lp("LinearRing"),Gv=lp("Polygon"),nv=lp("outerBoundaryIs");
Xt.prototype.f=function(b,c){c=Pr(this,c);var d=Lo($t[4],"kml");ep(d,"http://www.w3.org/2000/xmlns/","xmlns:gx",Zt[0]);ep(d,"http://www.w3.org/2000/xmlns/","xmlns:xsi","http://www.w3.org/2001/XMLSchema-instance");ep(d,"http://www.w3.org/2001/XMLSchema-instance","xsi:schemaLocation","http://www.opengis.net/kml/2.2 https://developers.google.com/kml/schema/kml22gx.xsd");var e={node:d},f={};1<b.length?f.Document=b:1==b.length&&(f.Placemark=b[0]);var g=pv[d.namespaceURI],f=op(f,g);qp(e,sv,np,f,[c],g,this);
return d};(function(){var b={},c={ja:b};(function(d){if("object"===typeof b&&"undefined"!==typeof c)c.ja=d();else{var e;"undefined"!==typeof window?e=window:"undefined"!==typeof global?e=global:"undefined"!==typeof self?e=self:e=this;e.Ap=d()}})(function(){return function e(b,c,h){function k(n,q){if(!c[n]){if(!b[n]){var r="function"==typeof require&&require;if(!q&&r)return r(n,!0);if(m)return m(n,!0);r=Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r;}r=c[n]={ja:{}};b[n][0].call(r.ja,function(c){var e=
b[n][1][c];return k(e?e:c)},r,r.ja,e,b,c,h)}return c[n].ja}for(var m="function"==typeof require&&require,n=0;n<h.length;n++)k(h[n]);return k}({1:[function(b,c){function g(b){var c;b&&b.length&&(c=b,b=c.length);b=new Uint8Array(b||0);c&&b.set(c);b.Ph=m.Ph;b.Zf=m.Zf;b.Hh=m.Hh;b.ui=m.ui;b.Of=m.Of;b.ti=m.ti;b.If=m.If;b.pi=m.pi;b.toString=m.toString;b.write=m.write;b.slice=m.slice;b.pg=m.pg;b.dj=!0;return b}function h(b){for(var c=b.length,e=[],f=0,g,h;f<c;f++){g=b.charCodeAt(f);if(55295<g&&57344>g)if(h)if(56320>
g){e.push(239,191,189);h=g;continue}else g=h-55296<<10|g-56320|65536,h=null;else{56319<g||f+1===c?e.push(239,191,189):h=g;continue}else h&&(e.push(239,191,189),h=null);128>g?e.push(g):2048>g?e.push(g>>6|192,g&63|128):65536>g?e.push(g>>12|224,g>>6&63|128,g&63|128):e.push(g>>18|240,g>>12&63|128,g>>6&63|128,g&63|128)}return e}c.ja=g;var k=b("ieee754"),m,n,p;m={Ph:function(b){return(this[b]|this[b+1]<<8|this[b+2]<<16)+16777216*this[b+3]},Zf:function(b,c){this[c]=b;this[c+1]=b>>>8;this[c+2]=b>>>16;this[c+
3]=b>>>24},Hh:function(b){return(this[b]|this[b+1]<<8|this[b+2]<<16)+(this[b+3]<<24)},Of:function(b){return k.read(this,b,!0,23,4)},If:function(b){return k.read(this,b,!0,52,8)},ti:function(b,c){return k.write(this,b,c,!0,23,4)},pi:function(b,c){return k.write(this,b,c,!0,52,8)},toString:function(b,c,e){var f=b="";e=Math.min(this.length,e||this.length);for(c=c||0;c<e;c++){var g=this[c];127>=g?(b+=decodeURIComponent(f)+String.fromCharCode(g),f=""):f+="%"+g.toString(16)}return b+=decodeURIComponent(f)},
write:function(b,c){for(var e=b===n?p:h(b),f=0;f<e.length;f++)this[c+f]=e[f]},slice:function(b,c){return this.subarray(b,c)},pg:function(b,c){c=c||0;for(var e=0;e<this.length;e++)b[c+e]=this[e]}};m.ui=m.Zf;g.byteLength=function(b){n=b;p=h(b);return p.length};g.isBuffer=function(b){return!(!b||!b.dj)}},{ieee754:3}],2:[function(b,c){(function(g){function h(b){this.Fb=k.isBuffer(b)?b:new k(b||0);this.da=0;this.length=this.Fb.length}c.ja=h;var k=g.ip||b("./buffer");h.c=0;h.b=1;h.a=2;h.f=5;var m=Math.pow(2,
63);h.prototype={Mf:function(b,c,e){for(e=e||this.length;this.da<e;){var f=this.za(),g=this.da;b(f>>3,c,this);this.da===g&&this.Xo(f)}return c},lo:function(){var b=this.Fb.Of(this.da);this.da+=4;return b},ho:function(){var b=this.Fb.If(this.da);this.da+=8;return b},za:function(){var b=this.Fb,c,e,f,g,h;c=b[this.da++];if(128>c)return c;c=c&127;f=b[this.da++];if(128>f)return c|f<<7;f=(f&127)<<7;g=b[this.da++];if(128>g)return c|f|g<<14;g=(g&127)<<14;h=b[this.da++];if(128>h)return c|f|g|h<<21;e=b[this.da++];
c=(c|f|g|(h&127)<<21)+268435456*(e&127);if(128>e)return c;e=b[this.da++];c+=34359738368*(e&127);if(128>e)return c;e=b[this.da++];c+=4398046511104*(e&127);if(128>e)return c;e=b[this.da++];c+=562949953421312*(e&127);if(128>e)return c;e=b[this.da++];c+=72057594037927936*(e&127);if(128>e)return c;e=b[this.da++];c+=0x7fffffffffffffff*(e&127);if(128>e)return c;throw Error("Expected varint not more than 10 bytes");},wo:function(){var b=this.da,c=this.za();if(c<m)return c;for(var e=this.da-2;255===this.Fb[e];)e--;
e<b&&(e=b);for(var f=c=0;f<e-b+1;f++)var g=~this.Fb[b+f]&127,c=c+(4>f?g<<7*f:g*Math.pow(2,7*f));return-c-1},Gd:function(){var b=this.za();return 1===b%2?(b+1)/-2:b/2},eo:function(){return Boolean(this.za())},Rf:function(){var b=this.za()+this.da,c=this.Fb.toString("utf8",this.da,b);this.da=b;return c},Xo:function(b){b=b&7;if(b===h.c)for(;127<this.Fb[this.da++];);else if(b===h.a)this.da=this.za()+this.da;else if(b===h.f)this.da+=4;else if(b===h.b)this.da+=8;else throw Error("Unimplemented type: "+
b);}}}).call(this,"undefined"!==typeof global?global:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{})},{"./buffer":1}],3:[function(b,c,g){g.read=function(b,c,e,f,g){var q;q=8*g-f-1;var r=(1<<q)-1,t=r>>1,x=-7;g=e?g-1:0;var z=e?-1:1,A=b[c+g];g+=z;e=A&(1<<-x)-1;A>>=-x;for(x+=q;0<x;e=256*e+b[c+g],g+=z,x-=8);q=e&(1<<-x)-1;e>>=-x;for(x+=f;0<x;q=256*q+b[c+g],g+=z,x-=8);if(0===e)e=1-t;else{if(e===r)return q?NaN:Infinity*(A?-1:1);q+=Math.pow(2,f);e=e-t}return(A?-1:1)*q*Math.pow(2,e-f)};
g.write=function(b,c,e,f,g,q){var r,t=8*q-g-1,x=(1<<t)-1,z=x>>1,A=23===g?Math.pow(2,-24)-Math.pow(2,-77):0;q=f?0:q-1;var B=f?1:-1,v=0>c||0===c&&0>1/c?1:0;c=Math.abs(c);isNaN(c)||Infinity===c?(c=isNaN(c)?1:0,f=x):(f=Math.floor(Math.log(c)/Math.LN2),1>c*(r=Math.pow(2,-f))&&(f--,r*=2),c=1<=f+z?c+A/r:c+A*Math.pow(2,1-z),2<=c*r&&(f++,r/=2),f+z>=x?(c=0,f=x):1<=f+z?(c=(c*r-1)*Math.pow(2,g),f+=z):(c=c*Math.pow(2,z-1)*Math.pow(2,g),f=0));for(;8<=g;b[e+q]=c&255,q+=B,c/=256,g-=8);f=f<<g|c;for(t+=g;0<t;b[e+q]=
f&255,q+=B,f/=256,t-=8);b[e+q-B]|=128*v}},{}]},{},[2])(2)});wp=c.ja})();(function(){var b={},c={ja:b};(function(d){if("object"===typeof b&&"undefined"!==typeof c)c.ja=d();else{var e;"undefined"!==typeof window?e=window:"undefined"!==typeof global?e=global:"undefined"!==typeof self?e=self:e=this;e.Cp=d()}})(function(){return function e(b,c,h){function k(n,q){if(!c[n]){if(!b[n]){var r="function"==typeof require&&require;if(!q&&r)return r(n,!0);if(m)return m(n,!0);r=Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r;}r=c[n]={ja:{}};b[n][0].call(r.ja,function(c){var e=
b[n][1][c];return k(e?e:c)},r,r.ja,e,b,c,h)}return c[n].ja}for(var m="function"==typeof require&&require,n=0;n<h.length;n++)k(h[n]);return k}({1:[function(b,c){c.ja.Vi=b("./lib/vectortile.js");c.ja.vp=b("./lib/vectortilefeature.js");c.ja.wp=b("./lib/vectortilelayer.js")},{"./lib/vectortile.js":2,"./lib/vectortilefeature.js":3,"./lib/vectortilelayer.js":4}],2:[function(b,c){function g(b,c,e){3===b&&(b=new h(e,e.za()+e.da),b.length&&(c[b.name]=b))}var h=b("./vectortilelayer");c.ja=function(b,c){this.layers=
b.Mf(g,{},c)}},{"./vectortilelayer":4}],3:[function(b,c){function g(b,c,e,f,g){this.properties={};this.extent=e;this.type=0;this.oc=b;this.Ze=-1;this.Qd=f;this.Sd=g;b.Mf(h,this,c)}function h(b,c,e){if(1==b)c.yp=e.za();else if(2==b)for(b=e.za()+e.da;e.da<b;){var f=c.Qd[e.za()],g=c.Sd[e.za()];c.properties[f]=g}else 3==b?c.type=e.za():4==b&&(c.Ze=e.da)}var k=b("point-geometry");c.ja=g;g.types=["Unknown","Point","LineString","Polygon"];g.prototype.Rg=function(){var b=this.oc;b.da=this.Ze;for(var c=b.za()+
b.da,e=1,f=0,g=0,h=0,x=[],z;b.da<c;)if(f||(f=b.za(),e=f&7,f=f>>3),f--,1===e||2===e)g+=b.Gd(),h+=b.Gd(),1===e&&(z&&x.push(z),z=[]),z.push(new k(g,h));else if(7===e)z&&z.push(z[0].clone());else throw Error("unknown command "+e);z&&x.push(z);return x};g.prototype.bbox=function(){var b=this.oc;b.da=this.Ze;for(var c=b.za()+b.da,e=1,f=0,g=0,h=0,k=Infinity,z=-Infinity,A=Infinity,B=-Infinity;b.da<c;)if(f||(f=b.za(),e=f&7,f=f>>3),f--,1===e||2===e)g+=b.Gd(),h+=b.Gd(),g<k&&(k=g),g>z&&(z=g),h<A&&(A=h),h>B&&
(B=h);else if(7!==e)throw Error("unknown command "+e);return[k,A,z,B]}},{"point-geometry":5}],4:[function(b,c){function g(b,c){this.version=1;this.name=null;this.extent=4096;this.length=0;this.oc=b;this.Qd=[];this.Sd=[];this.Pd=[];b.Mf(h,this,c);this.length=this.Pd.length}function h(b,c,e){15===b?c.version=e.za():1===b?c.name=e.Rf():5===b?c.extent=e.za():2===b?c.Pd.push(e.da):3===b?c.Qd.push(e.Rf()):4===b&&c.Sd.push(k(e))}function k(b){for(var c=null,e=b.za()+b.da;b.da<e;)c=b.za()>>3,c=1===c?b.Rf():
2===c?b.lo():3===c?b.ho():4===c?b.wo():5===c?b.za():6===c?b.Gd():7===c?b.eo():null;return c}var m=b("./vectortilefeature.js");c.ja=g;g.prototype.feature=function(b){if(0>b||b>=this.Pd.length)throw Error("feature index out of bounds");this.oc.da=this.Pd[b];b=this.oc.za()+this.oc.da;return new m(this.oc,b,this.extent,this.Qd,this.Sd)}},{"./vectortilefeature.js":3}],5:[function(b,c){function g(b,c){this.x=b;this.y=c}c.ja=g;g.prototype={clone:function(){return new g(this.x,this.y)},add:function(b){return this.clone().Wi(b)},
rotate:function(b){return this.clone().gj(b)},round:function(){return this.clone().hj()},angle:function(){return Math.atan2(this.y,this.x)},Wi:function(b){this.x+=b.x;this.y+=b.y;return this},gj:function(b){var c=Math.cos(b);b=Math.sin(b);var e=b*this.x+c*this.y;this.x=c*this.x-b*this.y;this.y=e;return this},hj:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this}};g.a=function(b){return b instanceof g?b:Array.isArray(b)?new g(b[0],b[1]):b}},{}]},{},[1])(1)});xp=c.ja})();function Lv(b){this.defaultDataProjection=null;b=b?b:{};this.defaultDataProjection=new Ce({code:"EPSG:3857",units:"tile-pixels"});this.a=b.featureClass?b.featureClass:Sm;this.c=b.geometryName?b.geometryName:"geometry";this.f=b.layerName?b.layerName:"layer";this.b=b.layers?b.layers:null}y(Lv,Nr);Lv.prototype.W=function(){return"arraybuffer"};
Lv.prototype.Ba=function(b,c){var d=this.b,e=new wp(b),e=new xp.Vi(e),f=[],g=this.a,h,k,m;for(m in e.layers)if(!d||-1!=d.indexOf(m)){h=e.layers[m];for(var n=0,p=h.length;n<p;++n){if(g===Sm){var q=h.feature(n);k=m;var r=q.Rg(),t=[],x=[];Mv(r,x,t);var z=q.type,A=void 0;1===z?A=1===r.length?"Point":"MultiPoint":2===z?A=1===r.length?"LineString":"MultiLineString":3===z&&(A="Polygon");q=q.properties;q[this.f]=k;k=new this.a(A,x,t,q)}else{q=h.feature(n);A=m;x=c;k=new this.a;t=q.properties;t[this.f]=A;A=
q.type;if(0===A)A=null;else{q=q.Rg();r=[];z=[];Mv(q,z,r);var B=void 0;1===A?B=1===q.length?new E(null):new Xr(null):2===A?1===q.length?B=new T(null):B=new U(null):3===A&&(B=new F(null));B.ba("XY",z,r);A=B}(x=Qr(A,!1,Pr(this,x)))&&(t[this.c]=x);k.I(t);k.yc(this.c)}f.push(k)}}return f};Lv.prototype.Ia=function(){return this.defaultDataProjection};Lv.prototype.g=function(b){this.b=b};
function Mv(b,c,d){for(var e=0,f,g,h=0,k=b.length;h<k;++h){f=b[h];for(var m=0,n=f.length;m<n;++m)g=f[m],c.push(g.x,g.y);e+=2*m;d.push(e)}};function Nv(){this.defaultDataProjection=null;this.defaultDataProjection=Ee("EPSG:4326")}y(Nv,ps);function Ov(b,c){c[c.length-1].Jd[b.getAttribute("k")]=b.getAttribute("v")}
var Pv=[null],Qv=P(Pv,{nd:function(b,c){c[c.length-1].Oc.push(b.getAttribute("ref"))},tag:Ov}),Sv=P(Pv,{node:function(b,c){var d=c[0],e=c[c.length-1],f=b.getAttribute("id"),g=[parseFloat(b.getAttribute("lon")),parseFloat(b.getAttribute("lat"))];e.Ug[f]=g;var h=Q({Jd:{}},Rv,b,c);Pb(h.Jd)||(g=new E(g),Qr(g,!1,d),d=new pn(g),d.jc(f),d.I(h.Jd),e.features.push(d))},way:function(b,c){for(var d=c[0],e=b.getAttribute("id"),f=Q({Oc:[],Jd:{}},Qv,b,c),g=c[c.length-1],h=[],k=0,m=f.Oc.length;k<m;k++)kb(h,g.Ug[f.Oc[k]]);
f.Oc[0]==f.Oc[f.Oc.length-1]?(k=new F(null),k.ba("XY",h,[h.length])):(k=new T(null),k.ba("XY",h));Qr(k,!1,d);d=new pn(k);d.jc(e);d.I(f.Jd);g.features.push(d)}}),Rv=P(Pv,{tag:Ov});Nv.prototype.ic=function(b,c){var d=Or(this,b,c);return"osm"==b.localName&&(d=Q({Ug:{},features:[]},Sv,b,[d]),d.features)?d.features:[]};function Tv(b){return b.getAttributeNS("http://www.w3.org/1999/xlink","href")};function Uv(){}Uv.prototype.read=function(b){return To(b)?this.f(b):Wo(b)?this.a(b):ia(b)?(b=fp(b),this.f(b)):null};function Vv(){}y(Vv,Uv);Vv.prototype.f=function(b){for(b=b.firstChild;b;b=b.nextSibling)if(1==b.nodeType)return this.a(b);return null};Vv.prototype.a=function(b){return(b=Q({},Wv,b,[]))?b:null};
var Xv=[null,"http://www.opengis.net/ows/1.1"],Wv=P(Xv,{ServiceIdentification:N(function(b,c){return Q({},Yv,b,c)}),ServiceProvider:N(function(b,c){return Q({},Zv,b,c)}),OperationsMetadata:N(function(b,c){return Q({},$v,b,c)})}),aw=P(Xv,{DeliveryPoint:N(W),City:N(W),AdministrativeArea:N(W),PostalCode:N(W),Country:N(W),ElectronicMailAddress:N(W)}),bw=P(Xv,{Value:jp(function(b){return W(b)})}),cw=P(Xv,{AllowedValues:N(function(b,c){return Q({},bw,b,c)})}),ew=P(Xv,{Phone:N(function(b,c){return Q({},
dw,b,c)}),Address:N(function(b,c){return Q({},aw,b,c)})}),gw=P(Xv,{HTTP:N(function(b,c){return Q({},fw,b,c)})}),fw=P(Xv,{Get:jp(function(b,c){var d=Tv(b);return d?Q({href:d},hw,b,c):void 0}),Post:void 0}),iw=P(Xv,{DCP:N(function(b,c){return Q({},gw,b,c)})}),$v=P(Xv,{Operation:function(b,c){var d=b.getAttribute("name"),e=Q({},iw,b,c);e&&(c[c.length-1][d]=e)}}),dw=P(Xv,{Voice:N(W),Facsimile:N(W)}),hw=P(Xv,{Constraint:jp(function(b,c){var d=b.getAttribute("name");return d?Q({name:d},cw,b,c):void 0})}),
jw=P(Xv,{IndividualName:N(W),PositionName:N(W),ContactInfo:N(function(b,c){return Q({},ew,b,c)})}),Yv=P(Xv,{Title:N(W),ServiceTypeVersion:N(W),ServiceType:N(W)}),Zv=P(Xv,{ProviderName:N(W),ProviderSite:N(Tv),ServiceContact:N(function(b,c){return Q({},jw,b,c)})});function kw(b,c,d,e){var f;void 0!==e?f=e:f=[];e=0;var g,h;for(g=0;g<c;)for(h=b[g++],f[e++]=b[g++],f[e++]=h,h=2;h<d;++h)f[e++]=b[g++];f.length=e};function lw(b){b=b?b:{};this.defaultDataProjection=null;this.defaultDataProjection=Ee("EPSG:4326");this.a=b.factor?b.factor:1E5;this.f=b.geometryLayout?b.geometryLayout:"XY"}y(lw,xt);function mw(b,c,d){var e,f=Array(c);for(e=0;e<c;++e)f[e]=0;var g,h;g=0;for(h=b.length;g<h;)for(e=0;e<c;++e,++g){var k=b[g],m=k-f[e];f[e]=k;b[g]=m}return nw(b,d?d:1E5)}
function ow(b,c,d){var e,f=Array(c);for(e=0;e<c;++e)f[e]=0;b=pw(b,d?d:1E5);var g;d=0;for(g=b.length;d<g;)for(e=0;e<c;++e,++d)f[e]+=b[d],b[d]=f[e];return b}function nw(b,c){var d=c?c:1E5,e,f;e=0;for(f=b.length;e<f;++e)b[e]=Math.round(b[e]*d);d=0;for(e=b.length;d<e;++d)f=b[d],b[d]=0>f?~(f<<1):f<<1;d="";e=0;for(f=b.length;e<f;++e){for(var g=b[e],h=void 0,k="";32<=g;)h=(32|g&31)+63,k+=String.fromCharCode(h),g>>=5;h=g+63;k+=String.fromCharCode(h);d+=k}return d}
function pw(b,c){var d=c?c:1E5,e=[],f=0,g=0,h,k;h=0;for(k=b.length;h<k;++h){var m=b.charCodeAt(h)-63,f=f|(m&31)<<g;32>m?(e.push(f),g=f=0):g+=5}f=0;for(g=e.length;f<g;++f)h=e[f],e[f]=h&1?~(h>>1):h>>1;f=0;for(g=e.length;f<g;++f)e[f]/=d;return e}l=lw.prototype;l.Dd=function(b,c){var d=this.Fd(b,c);return new pn(d)};l.Lf=function(b,c){return[this.Dd(b,c)]};l.Fd=function(b,c){var d=cf(this.f),e=ow(b,d,this.a);kw(e,e.length,d,e);d=qf(e,0,e.length,d);return Qr(new T(d,this.f),!1,Pr(this,c))};
l.Re=function(b,c){var d=b.X();return d?this.Ld(d,c):""};l.si=function(b,c){return this.Re(b[0],c)};l.Ld=function(b,c){b=Qr(b,!0,Pr(this,c));var d=b.ia(),e=b.ra();kw(d,d.length,e,d);return mw(d,e,this.a)};function qw(b){b=b?b:{};this.defaultDataProjection=null;this.defaultDataProjection=Ee(b.defaultDataProjection?b.defaultDataProjection:"EPSG:4326")}y(qw,Rr);function rw(b,c){var d=[],e,f,g,h;g=0;for(h=b.length;g<h;++g)e=b[g],0<g&&d.pop(),0<=e?f=c[e]:f=c[~e].slice().reverse(),d.push.apply(d,f);e=0;for(f=d.length;e<f;++e)d[e]=d[e].slice();return d}function sw(b,c,d,e,f){b=b.geometries;var g=[],h,k;h=0;for(k=b.length;h<k;++h)g[h]=tw(b[h],c,d,e,f);return g}
function tw(b,c,d,e,f){var g=b.type,h=uw[g];c="Point"===g||"MultiPoint"===g?h(b,d,e):h(b,c);d=new pn;d.Ma(Qr(c,!1,f));void 0!==b.id&&d.jc(b.id);b.properties&&d.I(b.properties);return d}
qw.prototype.Kf=function(b,c){if("Topology"==b.type){var d,e=null,f=null;b.transform&&(d=b.transform,e=d.scale,f=d.translate);var g=b.arcs;if(d){d=e;var h=f,k,m;k=0;for(m=g.length;k<m;++k)for(var n=g[k],p=d,q=h,r=0,t=0,x=void 0,z=void 0,A=void 0,z=0,A=n.length;z<A;++z)x=n[z],r+=x[0],t+=x[1],x[0]=r,x[1]=t,vw(x,p,q)}d=[];h=Lb(b.objects);k=0;for(m=h.length;k<m;++k)"GeometryCollection"===h[k].type?(n=h[k],d.push.apply(d,sw(n,g,e,f,c))):(n=h[k],d.push(tw(n,g,e,f,c)));return d}return[]};
function vw(b,c,d){b[0]=b[0]*c[0]+d[0];b[1]=b[1]*c[1]+d[1]}qw.prototype.Ia=function(){return this.defaultDataProjection};
var uw={Point:function(b,c,d){b=b.coordinates;c&&d&&vw(b,c,d);return new E(b)},LineString:function(b,c){var d=rw(b.arcs,c);return new T(d)},Polygon:function(b,c){var d=[],e,f;e=0;for(f=b.arcs.length;e<f;++e)d[e]=rw(b.arcs[e],c);return new F(d)},MultiPoint:function(b,c,d){b=b.coordinates;var e,f;if(c&&d)for(e=0,f=b.length;e<f;++e)vw(b[e],c,d);return new Xr(b)},MultiLineString:function(b,c){var d=[],e,f;e=0;for(f=b.arcs.length;e<f;++e)d[e]=rw(b.arcs[e],c);return new U(d)},MultiPolygon:function(b,c){var d=
[],e,f,g,h,k,m;k=0;for(m=b.arcs.length;k<m;++k){e=b.arcs[k];f=[];g=0;for(h=e.length;g<h;++g)f[g]=rw(e[g],c);d[k]=f}return new V(d)}};function ww(b){b=b?b:{};this.g=b.featureType;this.b=b.featureNS;this.a=b.gmlFormat?b.gmlFormat:new Fs;this.c=b.schemaLocation?b.schemaLocation:"http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.1.0/wfs.xsd";this.defaultDataProjection=null}y(ww,ps);ww.prototype.ic=function(b,c){var d={featureType:this.g,featureNS:this.b};Wb(d,Or(this,b,c?c:{}));d=[d];this.a.a["http://www.opengis.net/gml"].featureMember=hp(ss.prototype.Ed);(d=Q([],this.a.a,b,d,this.a))||(d=[]);return d};
ww.prototype.j=function(b){if(To(b))return xw(b);if(Wo(b))return Q({},yw,b,[]);if(ia(b))return b=fp(b),xw(b)};ww.prototype.i=function(b){if(To(b))return zw(this,b);if(Wo(b))return Aw(this,b);if(ia(b))return b=fp(b),zw(this,b)};function zw(b,c){for(var d=c.firstChild;d;d=d.nextSibling)if(1==d.nodeType)return Aw(b,d)}var Bw={"http://www.opengis.net/gml":{boundedBy:N(ss.prototype.Je,"bounds")}};
function Aw(b,c){var d={},e=zs(c.getAttribute("numberOfFeatures"));d.numberOfFeatures=e;return Q(d,Bw,c,[],b.a)}
var Cw={"http://www.opengis.net/wfs":{totalInserted:N(ys),totalUpdated:N(ys),totalDeleted:N(ys)}},Dw={"http://www.opengis.net/ogc":{FeatureId:hp(function(b){return b.getAttribute("fid")})}},Ew={"http://www.opengis.net/wfs":{Feature:function(b,c){pp(Dw,b,c)}}},yw={"http://www.opengis.net/wfs":{TransactionSummary:N(function(b,c){return Q({},Cw,b,c)},"transactionSummary"),InsertResults:N(function(b,c){return Q([],Ew,b,c)},"insertIds")}};
function xw(b){for(b=b.firstChild;b;b=b.nextSibling)if(1==b.nodeType)return Q({},yw,b,[])}var Fw={"http://www.opengis.net/wfs":{PropertyName:O(Bs)}};function Gw(b,c){var d=Lo("http://www.opengis.net/ogc","Filter"),e=Lo("http://www.opengis.net/ogc","FeatureId");d.appendChild(e);e.setAttribute("fid",c);b.appendChild(d)}
var Hw={"http://www.opengis.net/wfs":{Insert:O(function(b,c,d){var e=d[d.length-1],e=Lo(e.featureNS,e.featureType);b.appendChild(e);Fs.prototype.ri(e,c,d)}),Update:O(function(b,c,d){var e=d[d.length-1],f=e.featureType,g=e.featurePrefix,g=g?g:"feature",h=e.featureNS;b.setAttribute("typeName",g+":"+f);ep(b,"http://www.w3.org/2000/xmlns/","xmlns:"+g,h);if(f=c.Oa()){for(var g=c.P(),h=[],k=0,m=g.length;k<m;k++){var n=c.get(g[k]);void 0!==n&&h.push({name:g[k],value:n})}qp({node:b,srsName:e.srsName},Hw,
lp("Property"),h,d);Gw(b,f)}}),Delete:O(function(b,c,d){var e=d[d.length-1];d=e.featureType;var f=e.featurePrefix,f=f?f:"feature",e=e.featureNS;b.setAttribute("typeName",f+":"+d);ep(b,"http://www.w3.org/2000/xmlns/","xmlns:"+f,e);(c=c.Oa())&&Gw(b,c)}),Property:O(function(b,c,d){var e=Lo("http://www.opengis.net/wfs","Name");b.appendChild(e);Bs(e,c.name);void 0!==c.value&&null!==c.value&&(e=Lo("http://www.opengis.net/wfs","Value"),b.appendChild(e),c.value instanceof $e?Fs.prototype.Te(e,c.value,d):
Bs(e,c.value))}),Native:O(function(b,c){c.ep&&b.setAttribute("vendorId",c.ep);void 0!==c.Io&&b.setAttribute("safeToIgnore",c.Io);void 0!==c.value&&Bs(b,c.value)})}},Iw={"http://www.opengis.net/wfs":{Query:O(function(b,c,d){var e=d[d.length-1],f=e.featurePrefix,g=e.featureNS,h=e.propertyNames,k=e.srsName;b.setAttribute("typeName",(f?f+":":"")+c);k&&b.setAttribute("srsName",k);g&&ep(b,"http://www.w3.org/2000/xmlns/","xmlns:"+f,g);c=Tb(e);c.node=b;qp(c,Fw,lp("PropertyName"),h,d);if(e=e.bbox)h=Lo("http://www.opengis.net/ogc",
"Filter"),c=d[d.length-1].geometryName,f=Lo("http://www.opengis.net/ogc","BBOX"),h.appendChild(f),g=Lo("http://www.opengis.net/ogc","PropertyName"),Bs(g,c),f.appendChild(g),Fs.prototype.Te(f,e,d),b.appendChild(h)})}};
ww.prototype.l=function(b){var c=Lo("http://www.opengis.net/wfs","GetFeature");c.setAttribute("service","WFS");c.setAttribute("version","1.1.0");b&&(b.handle&&c.setAttribute("handle",b.handle),b.outputFormat&&c.setAttribute("outputFormat",b.outputFormat),void 0!==b.maxFeatures&&c.setAttribute("maxFeatures",b.maxFeatures),b.resultType&&c.setAttribute("resultType",b.resultType),void 0!==b.startIndex&&c.setAttribute("startIndex",b.startIndex),void 0!==b.count&&c.setAttribute("count",b.count));ep(c,"http://www.w3.org/2001/XMLSchema-instance",
"xsi:schemaLocation",this.c);var d=b.featureTypes;b=[{node:c,srsName:b.srsName,featureNS:b.featureNS?b.featureNS:this.b,featurePrefix:b.featurePrefix,geometryName:b.geometryName,bbox:b.bbox,propertyNames:b.propertyNames?b.propertyNames:[]}];var e=Tb(b[b.length-1]);e.node=c;qp(e,Iw,lp("Query"),d,b);return c};
ww.prototype.B=function(b,c,d,e){var f=[],g=Lo("http://www.opengis.net/wfs","Transaction");g.setAttribute("service","WFS");g.setAttribute("version","1.1.0");var h,k;e&&(h=e.gmlOptions?e.gmlOptions:{},e.handle&&g.setAttribute("handle",e.handle));ep(g,"http://www.w3.org/2001/XMLSchema-instance","xsi:schemaLocation",this.c);b&&(k={node:g,featureNS:e.featureNS,featureType:e.featureType,featurePrefix:e.featurePrefix},Wb(k,h),qp(k,Hw,lp("Insert"),b,f));c&&(k={node:g,featureNS:e.featureNS,featureType:e.featureType,
featurePrefix:e.featurePrefix},Wb(k,h),qp(k,Hw,lp("Update"),c,f));d&&qp({node:g,featureNS:e.featureNS,featureType:e.featureType,featurePrefix:e.featurePrefix},Hw,lp("Delete"),d,f);e.nativeElements&&qp({node:g,featureNS:e.featureNS,featureType:e.featureType,featurePrefix:e.featurePrefix},Hw,lp("Native"),e.nativeElements,f);return g};ww.prototype.Qf=function(b){for(b=b.firstChild;b;b=b.nextSibling)if(1==b.nodeType)return this.Me(b);return null};
ww.prototype.Me=function(b){if(b.firstElementChild&&b.firstElementChild.firstElementChild)for(b=b.firstElementChild.firstElementChild,b=b.firstElementChild;b;b=b.nextElementSibling)if(0!==b.childNodes.length&&(1!==b.childNodes.length||3!==b.firstChild.nodeType)){var c=[{}];this.a.Je(b,c);return Ee(c.pop().srsName)}return null};function Jw(b){b=b?b:{};this.defaultDataProjection=null;this.a=void 0!==b.splitCollection?b.splitCollection:!1}y(Jw,xt);function Kw(b){b=b.Z();return 0===b.length?"":b[0]+" "+b[1]}function Lw(b){b=b.Z();for(var c=[],d=0,e=b.length;d<e;++d)c.push(b[d][0]+" "+b[d][1]);return c.join(",")}function Mw(b){var c=[];b=b.be();for(var d=0,e=b.length;d<e;++d)c.push("("+Lw(b[d])+")");return c.join(",")}function Nw(b){var c=b.W();b=(0,Ow[c])(b);c=c.toUpperCase();return 0===b.length?c+" EMPTY":c+"("+b+")"}
var Ow={Point:Kw,LineString:Lw,Polygon:Mw,MultiPoint:function(b){var c=[];b=b.ve();for(var d=0,e=b.length;d<e;++d)c.push("("+Kw(b[d])+")");return c.join(",")},MultiLineString:function(b){var c=[];b=b.sd();for(var d=0,e=b.length;d<e;++d)c.push("("+Lw(b[d])+")");return c.join(",")},MultiPolygon:function(b){var c=[];b=b.ce();for(var d=0,e=b.length;d<e;++d)c.push("("+Mw(b[d])+")");return c.join(",")},GeometryCollection:function(b){var c=[];b=b.Ag();for(var d=0,e=b.length;d<e;++d)c.push(Nw(b[d]));return c.join(",")}};
l=Jw.prototype;l.Dd=function(b,c){var d=this.Fd(b,c);if(d){var e=new pn;e.Ma(d);return e}return null};l.Lf=function(b,c){var d=[],e=this.Fd(b,c);this.a&&"GeometryCollection"==e.W()?d=e.c:d=[e];for(var f=[],g=0,h=d.length;g<h;++g)e=new pn,e.Ma(d[g]),f.push(e);return f};l.Fd=function(b,c){var d;d=new Pw(new Qw(b));d.a=Rw(d.f);return(d=Sw(d))?Qr(d,!1,c):null};l.Re=function(b,c){var d=b.X();return d?this.Ld(d,c):""};
l.si=function(b,c){if(1==b.length)return this.Re(b[0],c);for(var d=[],e=0,f=b.length;e<f;++e)d.push(b[e].X());d=new gs(d);return this.Ld(d,c)};l.Ld=function(b,c){return Nw(Qr(b,!0,c))};function Qw(b){this.f=b;this.a=-1}function Tw(b,c){return"0"<=b&&"9">=b||"."==b&&!(void 0!==c&&c)}
function Rw(b){var c=b.f.charAt(++b.a),d={position:b.a,value:c};if("("==c)d.type=2;else if(","==c)d.type=5;else if(")"==c)d.type=3;else if(Tw(c)||"-"==c){d.type=4;var e,c=b.a,f=!1,g=!1;do{if("."==e)f=!0;else if("e"==e||"E"==e)g=!0;e=b.f.charAt(++b.a)}while(Tw(e,f)||!g&&("e"==e||"E"==e)||g&&("-"==e||"+"==e));b=parseFloat(b.f.substring(c,b.a--));d.value=b}else if("a"<=c&&"z">=c||"A"<=c&&"Z">=c){d.type=1;c=b.a;do e=b.f.charAt(++b.a);while("a"<=e&&"z">=e||"A"<=e&&"Z">=e);b=b.f.substring(c,b.a--).toUpperCase();
d.value=b}else{if(" "==c||"\t"==c||"\r"==c||"\n"==c)return Rw(b);if(""===c)d.type=6;else throw Error("Unexpected character: "+c);}return d}function Pw(b){this.f=b}l=Pw.prototype;l.match=function(b){if(b=this.a.type==b)this.a=Rw(this.f);return b};
function Sw(b){var c=b.a;if(b.match(1)){var d=c.value;if("GEOMETRYCOLLECTION"==d){a:{if(b.match(2)){c=[];do c.push(Sw(b));while(b.match(5));if(b.match(3)){b=c;break a}}else if(Uw(b)){b=[];break a}throw Error(Vw(b));}return new gs(b)}var e=Ww[d],c=Xw[d];if(!e||!c)throw Error("Invalid geometry type: "+d);b=e.call(b);return new c(b)}throw Error(Vw(b));}l.Ff=function(){if(this.match(2)){var b=Yw(this);if(this.match(3))return b}else if(Uw(this))return null;throw Error(Vw(this));};
l.Ef=function(){if(this.match(2)){var b=Zw(this);if(this.match(3))return b}else if(Uw(this))return[];throw Error(Vw(this));};l.Gf=function(){if(this.match(2)){var b=$w(this);if(this.match(3))return b}else if(Uw(this))return[];throw Error(Vw(this));};l.Sn=function(){if(this.match(2)){var b;if(2==this.a.type)for(b=[this.Ff()];this.match(5);)b.push(this.Ff());else b=Zw(this);if(this.match(3))return b}else if(Uw(this))return[];throw Error(Vw(this));};
l.Rn=function(){if(this.match(2)){var b=$w(this);if(this.match(3))return b}else if(Uw(this))return[];throw Error(Vw(this));};l.Tn=function(){if(this.match(2)){for(var b=[this.Gf()];this.match(5);)b.push(this.Gf());if(this.match(3))return b}else if(Uw(this))return[];throw Error(Vw(this));};function Yw(b){for(var c=[],d=0;2>d;++d){var e=b.a;if(b.match(4))c.push(e.value);else break}if(2==c.length)return c;throw Error(Vw(b));}function Zw(b){for(var c=[Yw(b)];b.match(5);)c.push(Yw(b));return c}
function $w(b){for(var c=[b.Ef()];b.match(5);)c.push(b.Ef());return c}function Uw(b){var c=1==b.a.type&&"EMPTY"==b.a.value;c&&(b.a=Rw(b.f));return c}function Vw(b){return"Unexpected `"+b.a.value+"` at position "+b.a.position+" in `"+b.f.f+"`"}var Xw={POINT:E,LINESTRING:T,POLYGON:F,MULTIPOINT:Xr,MULTILINESTRING:U,MULTIPOLYGON:V},Ww={POINT:Pw.prototype.Ff,LINESTRING:Pw.prototype.Ef,POLYGON:Pw.prototype.Gf,MULTIPOINT:Pw.prototype.Sn,MULTILINESTRING:Pw.prototype.Rn,MULTIPOLYGON:Pw.prototype.Tn};function ax(){this.version=void 0}y(ax,Uv);ax.prototype.f=function(b){for(b=b.firstChild;b;b=b.nextSibling)if(1==b.nodeType)return this.a(b);return null};ax.prototype.a=function(b){this.version=b.getAttribute("version").trim();return(b=Q({version:this.version},bx,b,[]))?b:null};function cx(b,c){return Q({},dx,b,c)}function ex(b,c){return Q({},fx,b,c)}function gx(b,c){var d=cx(b,c);if(d){var e=[zs(b.getAttribute("width")),zs(b.getAttribute("height"))];d.size=e;return d}}
function hx(b,c){return Q([],ix,b,c)}
var jx=[null,"http://www.opengis.net/wms"],bx=P(jx,{Service:N(function(b,c){return Q({},kx,b,c)}),Capability:N(function(b,c){return Q({},lx,b,c)})}),lx=P(jx,{Request:N(function(b,c){return Q({},mx,b,c)}),Exception:N(function(b,c){return Q([],nx,b,c)}),Layer:N(function(b,c){return Q({},ox,b,c)})}),kx=P(jx,{Name:N(W),Title:N(W),Abstract:N(W),KeywordList:N(hx),OnlineResource:N(Tv),ContactInformation:N(function(b,c){return Q({},px,b,c)}),Fees:N(W),AccessConstraints:N(W),LayerLimit:N(ys),MaxWidth:N(ys),
MaxHeight:N(ys)}),px=P(jx,{ContactPersonPrimary:N(function(b,c){return Q({},qx,b,c)}),ContactPosition:N(W),ContactAddress:N(function(b,c){return Q({},rx,b,c)}),ContactVoiceTelephone:N(W),ContactFacsimileTelephone:N(W),ContactElectronicMailAddress:N(W)}),qx=P(jx,{ContactPerson:N(W),ContactOrganization:N(W)}),rx=P(jx,{AddressType:N(W),Address:N(W),City:N(W),StateOrProvince:N(W),PostCode:N(W),Country:N(W)}),nx=P(jx,{Format:hp(W)}),ox=P(jx,{Name:N(W),Title:N(W),Abstract:N(W),KeywordList:N(hx),CRS:jp(W),
EX_GeographicBoundingBox:N(function(b,c){var d=Q({},sx,b,c);if(d){var e=d.westBoundLongitude,f=d.southBoundLatitude,g=d.eastBoundLongitude,d=d.northBoundLatitude;return void 0===e||void 0===f||void 0===g||void 0===d?void 0:[e,f,g,d]}}),BoundingBox:jp(function(b){var c=[xs(b.getAttribute("minx")),xs(b.getAttribute("miny")),xs(b.getAttribute("maxx")),xs(b.getAttribute("maxy"))],d=[xs(b.getAttribute("resx")),xs(b.getAttribute("resy"))];return{crs:b.getAttribute("CRS"),extent:c,res:d}}),Dimension:jp(function(b){return{name:b.getAttribute("name"),
units:b.getAttribute("units"),unitSymbol:b.getAttribute("unitSymbol"),"default":b.getAttribute("default"),multipleValues:us(b.getAttribute("multipleValues")),nearestValue:us(b.getAttribute("nearestValue")),current:us(b.getAttribute("current")),values:W(b)}}),Attribution:N(function(b,c){return Q({},tx,b,c)}),AuthorityURL:jp(function(b,c){var d=cx(b,c);if(d)return d.name=b.getAttribute("name"),d}),Identifier:jp(W),MetadataURL:jp(function(b,c){var d=cx(b,c);if(d)return d.type=b.getAttribute("type"),
d}),DataURL:jp(cx),FeatureListURL:jp(cx),Style:jp(function(b,c){return Q({},ux,b,c)}),MinScaleDenominator:N(ws),MaxScaleDenominator:N(ws),Layer:jp(function(b,c){var d=c[c.length-1],e=Q({},ox,b,c);if(e){var f=us(b.getAttribute("queryable"));void 0===f&&(f=d.queryable);e.queryable=void 0!==f?f:!1;f=zs(b.getAttribute("cascaded"));void 0===f&&(f=d.cascaded);e.cascaded=f;f=us(b.getAttribute("opaque"));void 0===f&&(f=d.opaque);e.opaque=void 0!==f?f:!1;f=us(b.getAttribute("noSubsets"));void 0===f&&(f=d.noSubsets);
e.noSubsets=void 0!==f?f:!1;(f=xs(b.getAttribute("fixedWidth")))||(f=d.fixedWidth);e.fixedWidth=f;(f=xs(b.getAttribute("fixedHeight")))||(f=d.fixedHeight);e.fixedHeight=f;["Style","CRS","AuthorityURL"].forEach(function(b){if(b in d){var c=Sb(e,b),c=c.concat(d[b]);e[b]=c}});"EX_GeographicBoundingBox BoundingBox Dimension Attribution MinScaleDenominator MaxScaleDenominator".split(" ").forEach(function(b){b in e||(e[b]=d[b])});return e}})}),tx=P(jx,{Title:N(W),OnlineResource:N(Tv),LogoURL:N(gx)}),sx=
P(jx,{westBoundLongitude:N(ws),eastBoundLongitude:N(ws),southBoundLatitude:N(ws),northBoundLatitude:N(ws)}),mx=P(jx,{GetCapabilities:N(ex),GetMap:N(ex),GetFeatureInfo:N(ex)}),fx=P(jx,{Format:jp(W),DCPType:jp(function(b,c){return Q({},vx,b,c)})}),vx=P(jx,{HTTP:N(function(b,c){return Q({},wx,b,c)})}),wx=P(jx,{Get:N(cx),Post:N(cx)}),ux=P(jx,{Name:N(W),Title:N(W),Abstract:N(W),LegendURL:jp(gx),StyleSheetURL:N(cx),StyleURL:N(cx)}),dx=P(jx,{Format:N(W),OnlineResource:N(Tv)}),ix=P(jx,{Keyword:hp(W)});function xx(){this.b="http://mapserver.gis.umn.edu/mapserver";this.a=new Es;this.defaultDataProjection=null}y(xx,ps);
xx.prototype.ic=function(b,c){var d={featureType:this.featureType,featureNS:this.featureNS};c&&Wb(d,Or(this,b,c));var e=[d];b.namespaceURI=this.b;var f=Qo(b),d=[];if(0!==b.childNodes.length){if("msGMLOutput"==f)for(var g=0,h=b.childNodes.length;g<h;g++){var k=b.childNodes[g];if(1===k.nodeType){var m=e[0],n=k.localName.replace("_layer","")+"_feature";m.featureType=n;m.featureNS=this.b;var p={};p[n]=hp(this.a.Jf,this.a);m=P([m.featureNS,null],p);k.namespaceURI=this.b;(k=Q([],m,k,e,this.a))&&kb(d,k)}}"FeatureCollection"==
f&&(e=Q([],this.a.a,b,[{}],this.a))&&(d=e)}return d};function yx(){this.b=new Vv}y(yx,Uv);yx.prototype.f=function(b){for(b=b.firstChild;b;b=b.nextSibling)if(1==b.nodeType)return this.a(b);return null};yx.prototype.a=function(b){this.version=b.getAttribute("version").trim();var c=this.b.a(b);if(!c)return null;c.version=this.version;return(c=Q(c,zx,b,[]))?c:null};function Ax(b){var c=W(b).split(" ");if(c&&2==c.length)return b=+c[0],c=+c[1],isNaN(b)||isNaN(c)?void 0:[b,c]}
var Bx=[null,"http://www.opengis.net/wmts/1.0"],Cx=[null,"http://www.opengis.net/ows/1.1"],zx=P(Bx,{Contents:N(function(b,c){return Q({},Dx,b,c)})}),Dx=P(Bx,{Layer:jp(function(b,c){return Q({},Ex,b,c)}),TileMatrixSet:jp(function(b,c){return Q({},Fx,b,c)})}),Ex=P(Bx,{Style:jp(function(b,c){var d=Q({},Gx,b,c);if(d){var e="true"===b.getAttribute("isDefault");d.isDefault=e;return d}}),Format:jp(W),TileMatrixSetLink:jp(function(b,c){return Q({},Hx,b,c)}),Dimension:jp(function(b,c){return Q({},Ix,b,c)}),
ResourceURL:jp(function(b){var c=b.getAttribute("format"),d=b.getAttribute("template");b=b.getAttribute("resourceType");var e={};c&&(e.format=c);d&&(e.template=d);b&&(e.resourceType=b);return e})},P(Cx,{Title:N(W),Abstract:N(W),WGS84BoundingBox:N(function(b,c){var d=Q([],Jx,b,c);return 2!=d.length?void 0:Ld(d)}),Identifier:N(W)})),Gx=P(Bx,{LegendURL:jp(function(b){var c={};c.format=b.getAttribute("format");c.href=Tv(b);return c})},P(Cx,{Title:N(W),Identifier:N(W)})),Hx=P(Bx,{TileMatrixSet:N(W)}),
Ix=P(Bx,{Default:N(W),Value:jp(W)},P(Cx,{Identifier:N(W)})),Jx=P(Cx,{LowerCorner:hp(Ax),UpperCorner:hp(Ax)}),Fx=P(Bx,{WellKnownScaleSet:N(W),TileMatrix:jp(function(b,c){return Q({},Kx,b,c)})},P(Cx,{SupportedCRS:N(W),Identifier:N(W)})),Kx=P(Bx,{TopLeftCorner:N(Ax),ScaleDenominator:N(ws),TileWidth:N(ys),TileHeight:N(ys),MatrixWidth:N(ys),MatrixHeight:N(ys)},P(Cx,{Identifier:N(W)}));var Lx=new ze(6378137);function Mx(b){gd.call(this);b=b||{};this.a=null;this.c=Xe;this.b=void 0;D(this,id("projection"),this.Dl,!1,this);D(this,id("tracking"),this.El,!1,this);void 0!==b.projection&&this.Yg(Ee(b.projection));void 0!==b.trackingOptions&&this.hi(b.trackingOptions);this.re(void 0!==b.tracking?b.tracking:!1)}y(Mx,gd);l=Mx.prototype;l.Y=function(){this.re(!1);Mx.ca.Y.call(this)};l.Dl=function(){var b=this.Wg();b&&(this.c=Ie(Ee("EPSG:4326"),b),this.a&&this.set("position",this.c(this.a)))};
l.El=function(){if(Zi){var b=this.Xg();b&&void 0===this.b?this.b=ba.navigator.geolocation.watchPosition(ua(this.$n,this),ua(this.ao,this),this.Ig()):b||void 0===this.b||(ba.navigator.geolocation.clearWatch(this.b),this.b=void 0)}};
l.$n=function(b){b=b.coords;this.set("accuracy",b.accuracy);this.set("altitude",null===b.altitude?void 0:b.altitude);this.set("altitudeAccuracy",null===b.altitudeAccuracy?void 0:b.altitudeAccuracy);this.set("heading",null===b.heading?void 0:Xa(b.heading));this.a?(this.a[0]=b.longitude,this.a[1]=b.latitude):this.a=[b.longitude,b.latitude];var c=this.c(this.a);this.set("position",c);this.set("speed",null===b.speed?void 0:b.speed);b=Jf(Lx,this.a,b.accuracy);b.pc(this.c);this.set("accuracyGeometry",b);
this.u()};l.ao=function(b){b.type="error";this.re(!1);this.s(b)};l.Dj=function(){return this.get("accuracy")};l.Ej=function(){return this.get("accuracyGeometry")||null};l.Gj=function(){return this.get("altitude")};l.Hj=function(){return this.get("altitudeAccuracy")};l.Bl=function(){return this.get("heading")};l.Cl=function(){return this.get("position")};l.Wg=function(){return this.get("projection")};l.lk=function(){return this.get("speed")};l.Xg=function(){return this.get("tracking")};l.Ig=function(){return this.get("trackingOptions")};
l.Yg=function(b){this.set("projection",b)};l.re=function(b){this.set("tracking",b)};l.hi=function(b){this.set("trackingOptions",b)};function Nx(b,c,d){bf.call(this);this.Uf(b,c?c:0,d)}y(Nx,bf);l=Nx.prototype;l.clone=function(){var b=new Nx(null),c=this.A.slice();df(b,this.b,c);b.u();return b};l.nb=function(b,c,d,e){var f=this.A;b-=f[0];var g=c-f[1];c=b*b+g*g;if(c<e){if(0===c)for(e=0;e<this.a;++e)d[e]=f[e];else for(e=this.zf()/Math.sqrt(c),d[0]=f[0]+e*b,d[1]=f[1]+e*g,e=2;e<this.a;++e)d[e]=f[e];d.length=this.a;return c}return e};l.uc=function(b,c){var d=this.A,e=b-d[0],d=c-d[1];return e*e+d*d<=Ox(this)};
l.wd=function(){return this.A.slice(0,this.a)};l.Wd=function(b){var c=this.A,d=c[this.a]-c[0];return Pd(c[0]-d,c[1]-d,c[0]+d,c[1]+d,b)};l.zf=function(){return Math.sqrt(Ox(this))};function Ox(b){var c=b.A[b.a]-b.A[0];b=b.A[b.a+1]-b.A[1];return c*c+b*b}l.W=function(){return"Circle"};l.Ea=function(b){var c=this.J();return oe(b,c)?(c=this.wd(),b[0]<=c[0]&&b[2]>=c[0]||b[1]<=c[1]&&b[3]>=c[1]?!0:ce(b,this.og,this)):!1};
l.Yl=function(b){var c=this.a,d=this.A[c]-this.A[0],e=b.slice();e[c]=e[0]+d;for(d=1;d<c;++d)e[c+d]=b[d];df(this,this.b,e);this.u()};l.Uf=function(b,c,d){if(b){ef(this,d,b,0);this.A||(this.A=[]);d=this.A;b=nf(d,b);d[b++]=d[0]+c;var e;c=1;for(e=this.a;c<e;++c)d[b++]=d[c];d.length=b}else df(this,"XY",null);this.u()};l.Zl=function(b){this.A[this.a]=this.A[0]+b;this.u()};function Px(b,c,d){for(var e=[],f=b(0),g=b(1),h=c(f),k=c(g),m=[g,f],n=[k,h],p=[1,0],q={},r=1E5,t,x,z,A,B;0<--r&&0<p.length;)z=p.pop(),f=m.pop(),h=n.pop(),g=z.toString(),g in q||(e.push(h[0],h[1]),q[g]=!0),A=p.pop(),g=m.pop(),k=n.pop(),B=(z+A)/2,t=b(B),x=c(t),Va(x[0],x[1],h[0],h[1],k[0],k[1])<d?(e.push(k[0],k[1]),g=A.toString(),q[g]=!0):(p.push(A,B,B,z),n.push(k,x,x,h),m.push(g,t,t,f));return e}function Qx(b,c,d,e,f){var g=Ee("EPSG:4326");return Px(function(e){return[b,c+(d-c)*e]},We(g,e),f)}
function Rx(b,c,d,e,f){var g=Ee("EPSG:4326");return Px(function(e){return[c+(d-c)*e,b]},We(g,e),f)};function Sx(b){b=b||{};this.g=this.l=null;this.b=this.i=Infinity;this.c=this.j=-Infinity;this.C=this.v=Infinity;this.O=this.D=-Infinity;this.U=void 0!==b.targetSize?b.targetSize:100;this.na=void 0!==b.maxLines?b.maxLines:100;this.a=[];this.f=[];this.va=void 0!==b.strokeStyle?b.strokeStyle:Tx;this.B=this.o=void 0;this.G=null;this.setMap(void 0!==b.map?b.map:null)}var Tx=new Yl({color:"rgba(0,0,0,0.2)"}),Ux=[90,45,30,20,10,5,2,1,.5,.2,.1,.05,.01,.005,.002,.001];
function Vx(b,c,d,e,f,g,h){var k=h;c=Qx(c,d,e,b.g,f);k=void 0!==b.a[k]?b.a[k]:new T(null);k.ba("XY",c);oe(k.J(),g)&&(b.a[h++]=k);return h}function Wx(b,c,d,e,f){var g=f;c=Rx(c,b.c,b.b,b.g,d);g=void 0!==b.f[g]?b.f[g]:new T(null);g.ba("XY",c);oe(g.J(),e)&&(b.f[f++]=g);return f}l=Sx.prototype;l.Fl=function(){return this.l};l.Zj=function(){return this.a};l.fk=function(){return this.f};
l.Mg=function(b){var c=b.vectorContext,d=b.frameState,e=d.extent;b=d.viewState;var f=b.center,g=b.projection,h=b.resolution;b=d.pixelRatio;b=h*h/(4*b*b);if(!this.g||!Ve(this.g,g)){var k=Ee("EPSG:4326"),m=g.J(),n=g.j,p=Ze(n,k,g),q=n[2],r=n[1],t=n[0],x=p[3],z=p[2],A=p[1],p=p[0];this.i=n[3];this.b=q;this.j=r;this.c=t;this.v=x;this.C=z;this.D=A;this.O=p;this.o=We(k,g);this.B=We(g,k);this.G=this.B(le(m));this.g=g}k=0;g.b&&(g=g.J(),k=je(g),d=d.focus[0],d<g[0]||d>g[2])&&(k*=Math.ceil((g[0]-d)/k),e=[e[0]+
k,e[1],e[2]+k,e[3]]);d=this.G[0];g=this.G[1];k=-1;n=Math.pow(this.U*h,2);q=[];r=[];h=0;for(m=Ux.length;h<m;++h){t=Ux[h]/2;q[0]=d-t;q[1]=g-t;r[0]=d+t;r[1]=g+t;this.o(q,q);this.o(r,r);t=Math.pow(r[0]-q[0],2)+Math.pow(r[1]-q[1],2);if(t<=n)break;k=Ux[h]}h=k;if(-1==h)this.a.length=this.f.length=0;else{d=this.B(f);f=d[0];d=d[1];g=this.na;k=[Math.max(e[0],this.O),Math.max(e[1],this.D),Math.min(e[2],this.C),Math.min(e[3],this.v)];k=Ze(k,this.g,"EPSG:4326");n=k[3];r=k[1];f=Math.floor(f/h)*h;q=Sa(f,this.c,
this.b);m=Vx(this,q,r,n,b,e,0);for(k=0;q!=this.c&&k++<g;)q=Math.max(q-h,this.c),m=Vx(this,q,r,n,b,e,m);q=Sa(f,this.c,this.b);for(k=0;q!=this.b&&k++<g;)q=Math.min(q+h,this.b),m=Vx(this,q,r,n,b,e,m);this.a.length=m;d=Math.floor(d/h)*h;f=Sa(d,this.j,this.i);m=Wx(this,f,b,e,0);for(k=0;f!=this.j&&k++<g;)f=Math.max(f-h,this.j),m=Wx(this,f,b,e,m);f=Sa(d,this.j,this.i);for(k=0;f!=this.i&&k++<g;)f=Math.min(f+h,this.i),m=Wx(this,f,b,e,m);this.f.length=m}c.bb(null,this.va);b=0;for(f=this.a.length;b<f;++b)h=
this.a[b],c.Wb(h,null);b=0;for(f=this.f.length;b<f;++b)h=this.f[b],c.Wb(h,null)};l.setMap=function(b){this.l&&(this.l.K("postcompose",this.Mg,this),this.l.render());b&&(b.H("postcompose",this.Mg,this),b.render());this.l=b};function Xx(b,c,d,e,f,g,h){ek.call(this,b,c,d,0,e);this.l=f;this.f=new Image;null!==g&&(this.f.crossOrigin=g);this.g={};this.c=null;this.state=0;this.j=h}y(Xx,ek);Xx.prototype.a=function(b){if(void 0!==b){var c;b=w(b);if(b in this.g)return this.g[b];Pb(this.g)?c=this.f:c=this.f.cloneNode(!1);return this.g[b]=c}return this.f};Xx.prototype.o=function(){this.state=3;this.c.forEach(Wc);this.c=null;fk(this)};
Xx.prototype.G=function(){void 0===this.resolution&&(this.resolution=ke(this.extent)/this.f.height);this.state=2;this.c.forEach(Wc);this.c=null;fk(this)};Xx.prototype.load=function(){0==this.state&&(this.state=1,fk(this),this.c=[Uc(this.f,"error",this.o,!1,this),Uc(this.f,"load",this.G,!1,this)],this.j(this,this.l))};function Yx(b,c,d,e,f){uh.call(this,b,c);this.l=d;this.b=new Image;null!==e&&(this.b.crossOrigin=e);this.c={};this.j=null;this.o=f}y(Yx,uh);l=Yx.prototype;l.Y=function(){1==this.state&&Zx(this);this.f&&sc(this.f);Yx.ca.Y.call(this)};l.Ta=function(b){if(void 0!==b){var c=w(b);if(c in this.c)return this.c[c];b=Pb(this.c)?this.b:this.b.cloneNode(!1);return this.c[c]=b}return this.b};l.$a=function(){return this.l};l.Gl=function(){this.state=3;Zx(this);vh(this)};
l.Hl=function(){this.state=this.b.naturalWidth&&this.b.naturalHeight?2:4;Zx(this);vh(this)};l.load=function(){0==this.state&&(this.state=1,vh(this),this.j=[Uc(this.b,"error",this.Gl,!1,this),Uc(this.b,"load",this.Hl,!1,this)],this.o(this,this.l))};function Zx(b){b.j.forEach(Wc);b.j=null};function $x(b,c){$c.call(this);this.a=new wr(this);var d=b;c&&(d=Cg(b));this.a.Ra(d,"dragenter",this.Jn);d!=b&&this.a.Ra(d,"dragover",this.Kn);this.a.Ra(b,"dragover",this.Ln);this.a.Ra(b,"drop",this.Mn)}y($x,$c);l=$x.prototype;l.ld=!1;l.Y=function(){$x.ca.Y.call(this);this.a.Fc()};l.Jn=function(b){var c=b.a.dataTransfer;(this.ld=!(!c||!(c.types&&(0<=ab(c.types,"Files")||0<=ab(c.types,"public.file-url"))||c.files&&0<c.files.length)))&&b.preventDefault()};
l.Kn=function(b){this.ld&&(b.preventDefault(),b.a.dataTransfer.dropEffect="none")};l.Ln=function(b){if(this.ld){b.preventDefault();b.b();b=b.a.dataTransfer;try{b.effectAllowed="all"}catch(c){}b.dropEffect="copy"}};l.Mn=function(b){this.ld&&(b.preventDefault(),b.b(),b=new xc(b.a),b.type="drop",this.s(b))};/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function ay(b,c){this.g=[];this.v=b;this.B=c||null;this.c=this.a=!1;this.b=void 0;this.o=this.C=this.j=!1;this.i=0;this.f=null;this.l=0}ay.prototype.cancel=function(b){if(this.a)this.b instanceof ay&&this.b.cancel();else{if(this.f){var c=this.f;delete this.f;b?c.cancel(b):(c.l--,0>=c.l&&c.cancel())}this.v?this.v.call(this.B,this):this.o=!0;this.a||(b=new by,cy(this),dy(this,!1,b))}};ay.prototype.G=function(b,c){this.j=!1;dy(this,b,c)};function dy(b,c,d){b.a=!0;b.b=d;b.c=!c;ey(b)}
function cy(b){if(b.a){if(!b.o)throw new fy;b.o=!1}}ay.prototype.ad=function(b){cy(this);dy(this,!0,b)};function gy(b,c,d,e){b.g.push([c,d,e]);b.a&&ey(b)}ay.prototype.then=function(b,c,d){var e,f,g=new En(function(b,c){e=b;f=c});gy(this,e,function(b){b instanceof by?g.cancel():f(b)});return g.then(b,c,d)};rn(ay);function hy(b){return eb(b.g,function(b){return ka(b[1])})}
function ey(b){if(b.i&&b.a&&hy(b)){var c=b.i,d=iy[c];d&&(ba.clearTimeout(d.xa),delete iy[c]);b.i=0}b.f&&(b.f.l--,delete b.f);for(var c=b.b,e=d=!1;b.g.length&&!b.j;){var f=b.g.shift(),g=f[0],h=f[1],f=f[2];if(g=b.c?h:g)try{var k=g.call(f||b.B,c);ca(k)&&(b.c=b.c&&(k==c||k instanceof Error),b.b=c=k);if(sn(c)||"function"===typeof ba.Promise&&c instanceof ba.Promise)e=!0,b.j=!0}catch(m){c=m,b.c=!0,hy(b)||(d=!0)}}b.b=c;e&&(k=ua(b.G,b,!0),e=ua(b.G,b,!1),c instanceof ay?(gy(c,k,e),c.C=!0):c.then(k,e));d&&
(c=new jy(c),iy[c.xa]=c,b.i=c.xa)}function fy(){Aa.call(this)}y(fy,Aa);fy.prototype.message="Deferred has already fired";fy.prototype.name="AlreadyCalledError";function by(){Aa.call(this)}y(by,Aa);by.prototype.message="Deferred was canceled";by.prototype.name="CanceledError";function jy(b){this.xa=ba.setTimeout(ua(this.f,this),0);this.a=b}jy.prototype.f=function(){delete iy[this.xa];throw this.a;};var iy={};function ky(b,c){ca(b.name)?(this.name=b.name,this.code=ly[b.name]):(this.code=b.code,this.name=my(b.code));Aa.call(this,Da("%s %s",this.name,c))}y(ky,Aa);function my(b){var c=Ob(ly,function(c){return b==c});if(!ca(c))throw Error("Invalid code: "+b);return c}var ly={AbortError:3,EncodingError:5,InvalidModificationError:9,InvalidStateError:7,NotFoundError:1,NotReadableError:4,NoModificationAllowedError:6,PathExistsError:12,QuotaExceededError:10,SecurityError:2,SyntaxError:8,TypeMismatchError:11};function ny(b,c){tc.call(this,b.type,c)}y(ny,tc);function oy(){$c.call(this);this.tb=new FileReader;this.tb.onloadstart=ua(this.a,this);this.tb.onprogress=ua(this.a,this);this.tb.onload=ua(this.a,this);this.tb.onabort=ua(this.a,this);this.tb.onerror=ua(this.a,this);this.tb.onloadend=ua(this.a,this)}y(oy,$c);oy.prototype.getError=function(){return this.tb.error&&new ky(this.tb.error,"reading file")};oy.prototype.a=function(b){this.s(new ny(b,this))};oy.prototype.Y=function(){oy.ca.Y.call(this);delete this.tb};
function py(b){var c=new ay;b.Ra("loadend",va(function(b,c){var f=c.tb.result,g=c.getError();null==f||g?(cy(b),dy(b,!1,g)):b.ad(f);c.Fc()},c,b));return c};function qy(b){b=b?b:{};Lk.call(this,{handleEvent:te});this.j=b.formatConstructors?b.formatConstructors:[];this.v=b.projection?Ee(b.projection):null;this.c=null;this.a=void 0}y(qy,Lk);qy.prototype.Y=function(){this.a&&Wc(this.a);qy.ca.Y.call(this)};qy.prototype.l=function(b){b=b.a.dataTransfer.files;var c,d,e;c=0;for(d=b.length;c<d;++c){e=b[c];var f;f=e;var g=new oy,h=py(g);g.tb.readAsText(f,"");f=h;e=va(this.o,e);gy(f,e,null,this)}};
qy.prototype.o=function(b,c){var d=this.B,e=this.v;e||(e=d.aa().g);var d=this.j,f=[],g,h;g=0;for(h=d.length;g<h;++g){var k=new d[g],m;try{m=k.Ba(c)}catch(t){m=null}if(m){var k=k.Ia(c),k=We(k,e),n,p;n=0;for(p=m.length;n<p;++n){var q=m[n],r=q.X();r&&r.pc(k);f.push(q)}}}this.s(new ry(sy,this,b,f,e))};qy.prototype.setMap=function(b){this.a&&(Wc(this.a),this.a=void 0);this.c&&(sc(this.c),this.c=null);qy.ca.setMap.call(this,b);b&&(this.c=new $x(b.a),this.a=D(this.c,"drop",this.l,!1,this))};var sy="addfeatures";
function ry(b,c,d,e,f){tc.call(this,b,c);this.features=e;this.file=d;this.projection=f}y(ry,tc);function ty(b,c){this.x=b;this.y=c}y(ty,yg);ty.prototype.clone=function(){return new ty(this.x,this.y)};ty.prototype.scale=yg.prototype.scale;ty.prototype.add=function(b){this.x+=b.x;this.y+=b.y;return this};ty.prototype.rotate=function(b){var c=Math.cos(b);b=Math.sin(b);var d=this.y*c+this.x*b;this.x=this.x*c-this.y*b;this.y=d;return this};function uy(b){b=b?b:{};Yk.call(this,{handleDownEvent:vy,handleDragEvent:wy,handleUpEvent:xy});this.o=b.condition?b.condition:Vk;this.a=this.c=void 0;this.l=0;this.v=void 0!==b.duration?b.duration:400}y(uy,Yk);
function wy(b){if(Xk(b)){var c=b.map,d=c.Sa();b=b.pixel;b=new ty(b[0]-d[0]/2,d[1]/2-b[1]);d=Math.atan2(b.y,b.x);b=Math.sqrt(b.x*b.x+b.y*b.y);var e=c.aa();c.render();if(void 0!==this.c){var f=d-this.c;Mk(c,e,e.Fa()-f)}this.c=d;void 0!==this.a&&(d=this.a*(e.$()/b),Ok(c,e,d));void 0!==this.a&&(this.l=this.a/b);this.a=b}}
function xy(b){if(!Xk(b))return!0;b=b.map;var c=b.aa();Sf(c,-1);var d=this.l-1,e=c.Fa(),e=c.constrainRotation(e,0);Mk(b,c,e,void 0,void 0);var e=c.$(),f=this.v,e=c.constrainResolution(e,0,d);Ok(b,c,e,void 0,f);this.l=0;return!1}function vy(b){return Xk(b)&&this.o(b)?(Sf(b.map.aa(),1),this.a=this.c=void 0,!0):!1};function yy(b,c){tc.call(this,b);this.feature=c}y(yy,tc);
function zy(b){Yk.call(this,{handleDownEvent:Ay,handleEvent:By,handleUpEvent:Cy});this.ga=null;this.T=!1;this.nc=b.source?b.source:null;this.Db=b.features?b.features:null;this.jj=b.snapTolerance?b.snapTolerance:12;this.V=b.type;this.c=Dy(this.V);this.hb=b.minPoints?b.minPoints:this.c===Ey?3:2;this.wa=b.maxPoints?b.maxPoints:Infinity;var c=b.geometryFunction;if(!c)if("Circle"===this.V)c=function(b,c){var d=c?c:new Nx([NaN,NaN]);d.Uf(b[0],Math.sqrt(vd(b[0],b[1])));return d};else{var d,c=this.c;c===
Fy?d=E:c===Gy?d=T:c===Ey&&(d=F);c=function(b,c){var g=c;g?g.la(b):g=new d(b);return g}}this.D=c;this.U=this.v=this.a=this.O=this.l=this.o=null;this.sj=b.clickTolerance?b.clickTolerance*b.clickTolerance:36;this.oa=new H({source:new R({useSpatialIndex:!1,wrapX:b.wrapX?b.wrapX:!1}),style:b.style?b.style:Hy()});this.Eb=b.geometryName;this.Ci=b.condition?b.condition:Uk;this.pa=b.freehandCondition?b.freehandCondition:Vk;D(this,id("active"),this.ni,!1,this)}y(zy,Yk);
function Hy(){var b=em();return function(c){return b[c.X().W()]}}l=zy.prototype;l.setMap=function(b){zy.ca.setMap.call(this,b);this.ni()};function By(b){var c=!this.T;this.T&&b.type===Wj?(Iy(this,b),c=!1):b.type===Vj?c=Jy(this,b):b.type===Pj&&(c=!1);return Zk.call(this,b)&&c}function Ay(b){if(this.Ci(b))return this.ga=b.pixel,!0;if(this.c!==Gy&&this.c!==Ey||!this.pa(b))return!1;this.ga=b.pixel;this.T=!0;this.o||Ky(this,b);return!0}
function Cy(b){this.T=!1;var c=this.ga,d=b.pixel,e=c[0]-d[0],c=c[1]-d[1],d=!0;e*e+c*c<=this.sj&&(Jy(this,b),this.o?this.c===Ly?this.od():My(this,b)?this.od():Iy(this,b):(Ky(this,b),this.c===Fy&&this.od()),d=!1);return d}
function Jy(b,c){if(b.o){var d=c.coordinate,e=b.l.X(),f;b.c===Fy?f=b.a:b.c===Ey?(f=b.a[0],f=f[f.length-1],My(b,c)&&(d=b.o.slice())):(f=b.a,f=f[f.length-1]);f[0]=d[0];f[1]=d[1];b.D(b.a,e);b.O&&b.O.X().la(d);e instanceof F&&b.c!==Ey?(b.v||(b.v=new pn(new T(null))),e=e.Dg(0),d=b.v.X(),d.ba(e.b,e.ia())):b.U&&(d=b.v.X(),d.la(b.U));Ny(b)}else d=c.coordinate.slice(),b.O?b.O.X().la(d):(b.O=new pn(new E(d)),Ny(b));return!0}
function My(b,c){var d=!1;if(b.l){var e=!1,f=[b.o];b.c===Gy?e=b.a.length>b.hb:b.c===Ey&&(e=b.a[0].length>b.hb,f=[b.a[0][0],b.a[0][b.a[0].length-2]]);if(e)for(var e=c.map,g=0,h=f.length;g<h;g++){var k=f[g],m=e.Pa(k),n=c.pixel,d=n[0]-m[0],m=n[1]-m[1],n=b.T&&b.pa(c)?1:b.jj;if(d=Math.sqrt(d*d+m*m)<=n){b.o=k;break}}}return d}
function Ky(b,c){var d=c.coordinate;b.o=d;b.c===Fy?b.a=d.slice():b.c===Ey?(b.a=[[d.slice(),d.slice()]],b.U=b.a[0]):(b.a=[d.slice(),d.slice()],b.c===Ly&&(b.U=b.a));b.U&&(b.v=new pn(new T(b.U)));d=b.D(b.a);b.l=new pn;b.Eb&&b.l.yc(b.Eb);b.l.Ma(d);Ny(b);b.s(new yy("drawstart",b.l))}
function Iy(b,c){var d=c.coordinate,e=b.l.X(),f,g;if(b.c===Gy)b.o=d.slice(),g=b.a,g.push(d.slice()),f=g.length>b.wa,b.D(g,e);else if(b.c===Ey){g=b.a[0];g.push(d.slice());if(f=g.length>b.wa)b.o=g[0];b.D(b.a,e)}Ny(b);f&&b.od()}l.Ao=function(){var b=this.l.X(),c,d;this.c===Gy?(c=this.a,c.splice(-2,1),this.D(c,b)):this.c===Ey&&(c=this.a[0],c.splice(-2,1),d=this.v.X(),d.la(c),this.D(this.a,b));0===c.length&&(this.o=null);Ny(this)};
l.od=function(){var b=Oy(this),c=this.a,d=b.X();this.c===Gy?(c.pop(),this.D(c,d)):this.c===Ey&&(c[0].pop(),c[0].push(c[0][0]),this.D(c,d));"MultiPoint"===this.V?b.Ma(new Xr([c])):"MultiLineString"===this.V?b.Ma(new U([c])):"MultiPolygon"===this.V&&b.Ma(new V([c]));this.s(new yy("drawend",b));this.Db&&this.Db.push(b);this.nc&&this.nc.Bd(b)};function Oy(b){b.o=null;var c=b.l;c&&(b.l=null,b.O=null,b.v=null,b.oa.ea().clear(!0));return c}
l.fm=function(b){var c=b.X();this.l=b;this.a=c.Z();b=this.a[this.a.length-1];this.o=b.slice();this.a.push(b.slice());Ny(this);this.s(new yy("drawstart",this.l))};l.Ac=se;function Ny(b){var c=[];b.l&&c.push(b.l);b.v&&c.push(b.v);b.O&&c.push(b.O);b=b.oa.ea();b.clear(!0);b.Ec(c)}l.ni=function(){var b=this.B,c=this.b();b&&c||Oy(this);this.oa.setMap(c?b:null)};
function Dy(b){var c;"Point"===b||"MultiPoint"===b?c=Fy:"LineString"===b||"MultiLineString"===b?c=Gy:"Polygon"===b||"MultiPolygon"===b?c=Ey:"Circle"===b&&(c=Ly);return c}var Fy="Point",Gy="LineString",Ey="Polygon",Ly="Circle";function Py(b,c,d){tc.call(this,b);this.features=c;this.mapBrowserPointerEvent=d}y(Py,tc);
function Qy(b){Yk.call(this,{handleDownEvent:Ry,handleDragEvent:Sy,handleEvent:Ty,handleUpEvent:Uy});this.wa=b.deleteCondition?b.deleteCondition:ye(Uk,Tk);this.pa=this.c=null;this.ga=[0,0];this.D=this.T=!1;this.a=new zp;this.O=void 0!==b.pixelTolerance?b.pixelTolerance:10;this.o=this.oa=!1;this.l=null;this.U=new H({source:new R({useSpatialIndex:!1,wrapX:!!b.wrapX}),style:b.style?b.style:Vy(),updateWhileAnimating:!0,updateWhileInteracting:!0});this.V={Point:this.mm,LineString:this.eh,LinearRing:this.eh,
Polygon:this.nm,MultiPoint:this.km,MultiLineString:this.jm,MultiPolygon:this.lm,GeometryCollection:this.im};this.v=b.features;this.v.forEach(this.Af,this);D(this.v,"add",this.gm,!1,this);D(this.v,"remove",this.hm,!1,this)}y(Qy,Yk);l=Qy.prototype;l.Af=function(b){var c=b.X();c.W()in this.V&&this.V[c.W()].call(this,b,c);(c=this.B)&&Wy(this,this.ga,c);D(b,"change",this.dh,!1,this)};function Xy(b,c){b.D||(b.D=!0,b.s(new Py("modifystart",b.v,c)))}
function Yy(b,c){Zy(b,c);b.c&&0===b.v.$b()&&(b.U.ea().Rc(b.c),b.c=null);Vc(c,"change",b.dh,!1,b)}function Zy(b,c){var d=b.a,e=[];d.forEach(function(b){c===b.feature&&e.push(b)});for(var f=e.length-1;0<=f;--f)d.remove(e[f])}l.setMap=function(b){this.U.setMap(b);Qy.ca.setMap.call(this,b)};l.gm=function(b){this.Af(b.element)};l.dh=function(b){this.o||(b=b.target,Yy(this,b),this.Af(b))};l.hm=function(b){Yy(this,b.element)};
l.mm=function(b,c){var d=c.Z(),d={feature:b,geometry:c,ka:[d,d]};this.a.ya(c.J(),d)};l.km=function(b,c){var d=c.Z(),e,f,g;f=0;for(g=d.length;f<g;++f)e=d[f],e={feature:b,geometry:c,depth:[f],index:f,ka:[e,e]},this.a.ya(c.J(),e)};l.eh=function(b,c){var d=c.Z(),e,f,g,h;e=0;for(f=d.length-1;e<f;++e)g=d.slice(e,e+2),h={feature:b,geometry:c,index:e,ka:g},this.a.ya(Ld(g),h)};
l.jm=function(b,c){var d=c.Z(),e,f,g,h,k,m,n;h=0;for(k=d.length;h<k;++h)for(e=d[h],f=0,g=e.length-1;f<g;++f)m=e.slice(f,f+2),n={feature:b,geometry:c,depth:[h],index:f,ka:m},this.a.ya(Ld(m),n)};l.nm=function(b,c){var d=c.Z(),e,f,g,h,k,m,n;h=0;for(k=d.length;h<k;++h)for(e=d[h],f=0,g=e.length-1;f<g;++f)m=e.slice(f,f+2),n={feature:b,geometry:c,depth:[h],index:f,ka:m},this.a.ya(Ld(m),n)};
l.lm=function(b,c){var d=c.Z(),e,f,g,h,k,m,n,p,q,r;m=0;for(n=d.length;m<n;++m)for(p=d[m],h=0,k=p.length;h<k;++h)for(e=p[h],f=0,g=e.length-1;f<g;++f)q=e.slice(f,f+2),r={feature:b,geometry:c,depth:[h,m],index:f,ka:q},this.a.ya(Ld(q),r)};l.im=function(b,c){var d,e=c.c;for(d=0;d<e.length;++d)this.V[e[d].W()].call(this,b,e[d])};function $y(b,c){var d=b.c;d?d.X().la(c):(d=new pn(new E(c)),b.c=d,b.U.ea().Bd(d))}function az(b,c){return b.index-c.index}
function Ry(b){Wy(this,b.pixel,b.map);this.l=[];this.D=!1;var c=this.c;if(c){var d=[],c=c.X().Z(),e=Ld([c]),e=Cp(this.a,e),f={};e.sort(az);for(var g=0,h=e.length;g<h;++g){var k=e[g],m=k.ka,n=w(k.feature),p=k.depth;p&&(n+="-"+p.join("-"));f[n]||(f[n]=Array(2));if(td(m[0],c)&&!f[n][0])this.l.push([k,0]),f[n][0]=k;else if(td(m[1],c)&&!f[n][1]){if("LineString"!==k.geometry.W()&&"MultiLineString"!==k.geometry.W()||!f[n][0]||0!==f[n][0].index)this.l.push([k,1]),f[n][1]=k}else w(m)in this.pa&&!f[n][0]&&
!f[n][1]&&d.push([k,c])}d.length&&Xy(this,b);for(g=d.length-1;0<=g;--g)this.el.apply(this,d[g])}return!!this.c}
function Sy(b){this.T=!1;Xy(this,b);b=b.coordinate;for(var c=0,d=this.l.length;c<d;++c){for(var e=this.l[c],f=e[0],g=f.depth,h=f.geometry,k=h.Z(),m=f.ka,e=e[1];b.length<h.ra();)b.push(0);switch(h.W()){case "Point":k=b;m[0]=m[1]=b;break;case "MultiPoint":k[f.index]=b;m[0]=m[1]=b;break;case "LineString":k[f.index+e]=b;m[e]=b;break;case "MultiLineString":k[g[0]][f.index+e]=b;m[e]=b;break;case "Polygon":k[g[0]][f.index+e]=b;m[e]=b;break;case "MultiPolygon":k[g[1]][g[0]][f.index+e]=b,m[e]=b}f=h;this.o=
!0;f.la(k);this.o=!1}$y(this,b)}function Uy(b){for(var c,d=this.l.length-1;0<=d;--d)c=this.l[d][0],Ap(this.a,Ld(c.ka),c);this.D&&(this.s(new Py("modifyend",this.v,b)),this.D=!1);return!1}
function Ty(b){if(!(b instanceof Lj))return!0;var c;b.map.aa().b.slice()[1]||b.type!=Vj||this.C||(this.ga=b.pixel,Wy(this,b.pixel,b.map));if(this.c&&this.wa(b))if(b.type==Qj&&this.T)c=!0;else{this.c.X();Xy(this,b);c=this.l;var d={},e,f,g,h,k,m,n,p,q;for(k=c.length-1;0<=k;--k)if(g=c[k],p=g[0],h=p.geometry,f=h.Z(),q=w(p.feature),p.depth&&(q+="-"+p.depth.join("-")),n=e=m=void 0,0===g[1]?(e=p,m=p.index):1==g[1]&&(n=p,m=p.index+1),q in d||(d[q]=[n,e,m]),g=d[q],void 0!==n&&(g[0]=n),void 0!==e&&(g[1]=e),
void 0!==g[0]&&void 0!==g[1]){e=f;q=!1;n=m-1;switch(h.W()){case "MultiLineString":f[p.depth[0]].splice(m,1);q=!0;break;case "LineString":f.splice(m,1);q=!0;break;case "MultiPolygon":e=e[p.depth[1]];case "Polygon":e=e[p.depth[0]],4<e.length&&(m==e.length-1&&(m=0),e.splice(m,1),q=!0,0===m&&(e.pop(),e.push(e[0]),n=e.length-1))}q&&(this.a.remove(g[0]),this.a.remove(g[1]),e=h,this.o=!0,e.la(f),this.o=!1,f={depth:p.depth,feature:p.feature,geometry:p.geometry,index:n,ka:[g[0].ka[0],g[1].ka[1]]},this.a.ya(Ld(f.ka),
f),bz(this,h,m,p.depth,-1),this.c&&(this.U.ea().Rc(this.c),this.c=null))}c=!0;this.s(new Py("modifyend",this.v,b));this.D=!1}b.type==Qj&&(this.T=!1);return Zk.call(this,b)&&!c}
function Wy(b,c,d){function e(b,c){return wd(f,b.ka)-wd(f,c.ka)}var f=d.Ga(c),g=d.Ga([c[0]-b.O,c[1]+b.O]),h=d.Ga([c[0]+b.O,c[1]-b.O]),g=Ld([g,h]),g=Cp(b.a,g);if(0<g.length){g.sort(e);var h=g[0].ka,k=qd(f,h),m=d.Pa(k);if(Math.sqrt(vd(c,m))<=b.O){c=d.Pa(h[0]);d=d.Pa(h[1]);c=vd(m,c);d=vd(m,d);b.oa=Math.sqrt(Math.min(c,d))<=b.O;b.oa&&(k=c>d?h[1]:h[0]);$y(b,k);d={};d[w(h)]=!0;c=1;for(m=g.length;c<m;++c)if(k=g[c].ka,td(h[0],k[0])&&td(h[1],k[1])||td(h[0],k[1])&&td(h[1],k[0]))d[w(k)]=!0;else break;b.pa=d;
return}}b.c&&(b.U.ea().Rc(b.c),b.c=null)}
l.el=function(b,c){for(var d=b.ka,e=b.feature,f=b.geometry,g=b.depth,h=b.index,k;c.length<f.ra();)c.push(0);switch(f.W()){case "MultiLineString":k=f.Z();k[g[0]].splice(h+1,0,c);break;case "Polygon":k=f.Z();k[g[0]].splice(h+1,0,c);break;case "MultiPolygon":k=f.Z();k[g[1]][g[0]].splice(h+1,0,c);break;case "LineString":k=f.Z();k.splice(h+1,0,c);break;default:return}this.o=!0;f.la(k);this.o=!1;k=this.a;k.remove(b);bz(this,f,h,g,1);var m={ka:[d[0],c],feature:e,geometry:f,depth:g,index:h};k.ya(Ld(m.ka),
m);this.l.push([m,1]);d={ka:[c,d[1]],feature:e,geometry:f,depth:g,index:h+1};k.ya(Ld(d.ka),d);this.l.push([d,0]);this.T=!0};function bz(b,c,d,e,f){Ep(b.a,c.J(),function(b){b.geometry===c&&(void 0===e||void 0===b.depth||rb(b.depth,e))&&b.index>d&&(b.index+=f)})}function Vy(){var b=em();return function(){return b.Point}};function cz(b,c,d,e){tc.call(this,b);this.selected=c;this.deselected=d;this.mapBrowserEvent=e}y(cz,tc);
function dz(b){Lk.call(this,{handleEvent:ez});b=b?b:{};this.C=b.condition?b.condition:Tk;this.o=b.addCondition?b.addCondition:se;this.D=b.removeCondition?b.removeCondition:se;this.O=b.toggleCondition?b.toggleCondition:Vk;this.v=b.multi?b.multi:!1;this.j=b.filter?b.filter:te;var c;if(b.layers)if(ka(b.layers))c=b.layers;else{var d=b.layers;c=function(b){return vb(d,b)}}else c=te;this.l=c;this.a={};this.c=new H({source:new R({useSpatialIndex:!1,features:b.features,wrapX:b.wrapX}),style:b.style?b.style:
fz(),updateWhileAnimating:!0,updateWhileInteracting:!0});b=this.c.ea().c;D(b,"add",this.om,!1,this);D(b,"remove",this.rm,!1,this)}y(dz,Lk);l=dz.prototype;l.pm=function(){return this.c.ea().c};l.qm=function(b){b=w(b);return this.a[b]};
function ez(b){if(!this.C(b))return!0;var c=this.o(b),d=this.D(b),e=this.O(b),f=!c&&!d&&!e,g=b.map,h=this.c.ea().c,k=[],m=[],n=!1;if(f)g.pd(b.pixel,function(b,c){if(this.j(b,c)){m.push(b);var d=w(b);this.a[d]=c;return!this.v}},this,this.l),0<m.length&&1==h.$b()&&h.item(0)==m[0]||(n=!0,0!==h.$b()&&(k=Array.prototype.concat(h.a),h.clear()),h.uf(m),0===m.length?Qb(this.a):0<k.length&&k.forEach(function(b){b=w(b);delete this.a[b]},this));else{g.pd(b.pixel,function(b,f){if(!vb(h.a,b)){if((c||e)&&this.j(b,
f)){m.push(b);var g=w(b);this.a[g]=f}}else if(d||e)k.push(b),g=w(b),delete this.a[g]},this,this.l);for(f=k.length-1;0<=f;--f)h.remove(k[f]);h.uf(m);if(0<m.length||0<k.length)n=!0}n&&this.s(new cz("select",m,k,b));return Sk(b)}l.setMap=function(b){var c=this.B,d=this.c.ea().c;c&&d.forEach(c.li,c);dz.ca.setMap.call(this,b);this.c.setMap(b);b&&d.forEach(b.ii,b)};function fz(){var b=em();kb(b.Polygon,b.LineString);kb(b.GeometryCollection,b.LineString);return function(c){return b[c.X().W()]}}
l.om=function(b){b=b.element;var c=this.B;c&&c.ii(b)};l.rm=function(b){b=b.element;var c=this.B;c&&c.li(b)};function gz(b){Yk.call(this,{handleEvent:hz,handleDownEvent:te,handleUpEvent:iz});b=b?b:{};this.o=b.source?b.source:null;this.l=b.features?b.features:null;this.ga=[];this.D={};this.O={};this.T={};this.v={};this.U=null;this.c=void 0!==b.pixelTolerance?b.pixelTolerance:10;this.oa=ua(jz,this);this.a=new zp;this.V={Point:this.xm,LineString:this.hh,LinearRing:this.hh,Polygon:this.ym,MultiPoint:this.vm,MultiLineString:this.um,MultiPolygon:this.wm,GeometryCollection:this.tm}}y(gz,Yk);l=gz.prototype;
l.xd=function(b,c){var d=void 0!==c?c:!0,e=b.X(),f=this.V[e.W()];if(f){var g=w(b);this.T[g]=e.J(Md());f.call(this,b,e);d&&(this.O[g]=e.H("change",ua(this.Ck,this,b),this),this.D[g]=b.H(id(b.a),this.sm,this))}};l.Aj=function(b){this.xd(b)};l.Bj=function(b){this.yd(b)};l.fh=function(b){var c;b instanceof Jp?c=b.feature:b instanceof ng&&(c=b.element);this.xd(c)};l.gh=function(b){var c;b instanceof Jp?c=b.feature:b instanceof ng&&(c=b.element);this.yd(c)};
l.sm=function(b){b=b.g;this.yd(b,!0);this.xd(b,!0)};l.Ck=function(b){if(this.C){var c=w(b);c in this.v||(this.v[c]=b)}else this.mi(b)};l.yd=function(b,c){var d=void 0!==c?c:!0,e=w(b),f=this.T[e];if(f){var g=this.a,h=[];Ep(g,f,function(c){b===c.feature&&h.push(c)});for(f=h.length-1;0<=f;--f)g.remove(h[f]);d&&(Wc(this.O[e]),delete this.O[e],Wc(this.D[e]),delete this.D[e])}};
l.setMap=function(b){var c=this.B,d=this.ga,e;this.l?e=this.l:this.o&&(e=this.o.ze());c&&(d.forEach(ed),d.length=0,e.forEach(this.Bj,this));gz.ca.setMap.call(this,b);b&&(this.l?(d.push(this.l.H("add",this.fh,this)),d.push(this.l.H("remove",this.gh,this))):this.o&&(d.push(this.o.H("addfeature",this.fh,this)),d.push(this.o.H("removefeature",this.gh,this))),e.forEach(this.Aj,this))};l.Ac=se;l.mi=function(b){this.yd(b,!1);this.xd(b,!1)};
l.tm=function(b,c){var d,e=c.c;for(d=0;d<e.length;++d)this.V[e[d].W()].call(this,b,e[d])};l.hh=function(b,c){var d=c.Z(),e,f,g,h;e=0;for(f=d.length-1;e<f;++e)g=d.slice(e,e+2),h={feature:b,ka:g},this.a.ya(Ld(g),h)};l.um=function(b,c){var d=c.Z(),e,f,g,h,k,m,n;h=0;for(k=d.length;h<k;++h)for(e=d[h],f=0,g=e.length-1;f<g;++f)m=e.slice(f,f+2),n={feature:b,ka:m},this.a.ya(Ld(m),n)};l.vm=function(b,c){var d=c.Z(),e,f,g;f=0;for(g=d.length;f<g;++f)e=d[f],e={feature:b,ka:[e,e]},this.a.ya(c.J(),e)};
l.wm=function(b,c){var d=c.Z(),e,f,g,h,k,m,n,p,q,r;m=0;for(n=d.length;m<n;++m)for(p=d[m],h=0,k=p.length;h<k;++h)for(e=p[h],f=0,g=e.length-1;f<g;++f)q=e.slice(f,f+2),r={feature:b,ka:q},this.a.ya(Ld(q),r)};l.xm=function(b,c){var d=c.Z(),d={feature:b,ka:[d,d]};this.a.ya(c.J(),d)};l.ym=function(b,c){var d=c.Z(),e,f,g,h,k,m,n;h=0;for(k=d.length;h<k;++h)for(e=d[h],f=0,g=e.length-1;f<g;++f)m=e.slice(f,f+2),n={feature:b,ka:m},this.a.ya(Ld(m),n)};
function hz(b){var c,d,e=b.pixel,f=b.coordinate;c=b.map;var g=c.Ga([e[0]-this.c,e[1]+this.c]);d=c.Ga([e[0]+this.c,e[1]-this.c]);var g=Ld([g,d]),h=Cp(this.a,g),k=!1,g=!1,m=null;d=null;0<h.length&&(this.U=f,h.sort(this.oa),h=h[0].ka,m=qd(f,h),d=c.Pa(m),Math.sqrt(vd(e,d))<=this.c&&(g=!0,e=c.Pa(h[0]),f=c.Pa(h[1]),e=vd(d,e),f=vd(d,f),k=Math.sqrt(Math.min(e,f))<=this.c))&&(m=e>f?h[1]:h[0],d=c.Pa(m),d=[Math.round(d[0]),Math.round(d[1])]);c=m;g&&(b.coordinate=c.slice(0,2),b.pixel=d);return Zk.call(this,b)}
function iz(){var b=Lb(this.v);b.length&&(b.forEach(this.mi,this),this.v={});return!1}function jz(b,c){return wd(this.U,b.ka)-wd(this.U,c.ka)};function kz(b,c,d){tc.call(this,b);this.features=c;this.coordinate=d}y(kz,tc);function lz(b){Yk.call(this,{handleDownEvent:mz,handleDragEvent:nz,handleMoveEvent:oz,handleUpEvent:pz});this.o=void 0;this.a=null;this.c=void 0!==b.features?b.features:null;this.l=null}y(lz,Yk);function mz(b){this.l=qz(this,b.pixel,b.map);return!this.a&&this.l?(this.a=b.coordinate,oz.call(this,b),this.s(new kz("translatestart",this.c,b.coordinate)),!0):!1}
function pz(b){return this.a?(this.a=null,oz.call(this,b),this.s(new kz("translateend",this.c,b.coordinate)),!0):!1}function nz(b){if(this.a){b=b.coordinate;var c=b[0]-this.a[0],d=b[1]-this.a[1];if(this.c)this.c.forEach(function(b){var e=b.X();e.Pc(c,d);b.Ma(e)});else if(this.l){var e=this.l.X();e.Pc(c,d);this.l.Ma(e)}this.a=b;this.s(new kz("translating",this.c,b))}}
function oz(b){var c=b.map.Mc();if(b=b.map.pd(b.pixel,function(b){return b})){var d=!1;this.c&&vb(this.c.a,b)&&(d=!0);this.o=c.style.cursor;c.style.cursor=this.a?"-webkit-grabbing":d?"-webkit-grab":"pointer";c.style.cursor=this.a?d?"grab":"pointer":"grabbing"}else c.style.cursor=void 0!==this.o?this.o:"",this.o=void 0}function qz(b,c,d){var e=null;c=d.pd(c,function(b){return b});b.c&&vb(b.c.a,c)&&(e=c);return e};function X(b){b=b?b:{};var c=Tb(b);delete c.gradient;delete c.radius;delete c.blur;delete c.shadow;delete c.weight;H.call(this,c);this.g=null;this.V=void 0!==b.shadow?b.shadow:250;this.T=void 0;this.U=null;D(this,id("gradient"),this.Dk,!1,this);this.Zh(b.gradient?b.gradient:rz);this.Vh(void 0!==b.blur?b.blur:15);this.kh(void 0!==b.radius?b.radius:8);D(this,[id("blur"),id("radius")],this.Ng,!1,this);this.Ng();var d=b.weight?b.weight:"weight",e;ia(d)?e=function(b){return b.get(d)}:e=d;this.c(ua(function(b){b=
e(b);b=void 0!==b?Sa(b,0,1):1;var c=255*b|0,d=this.U[c];d||(d=[new $l({image:new tk({opacity:b,src:this.T})})],this.U[c]=d);return d},this));this.set("renderOrder",null);D(this,"render",this.Vk,!1,this)}y(X,H);var rz=["#00f","#0ff","#0f0","#ff0","#f00"];l=X.prototype;l.ug=function(){return this.get("blur")};l.Bg=function(){return this.get("gradient")};l.jh=function(){return this.get("radius")};
l.Dk=function(){for(var b=this.Bg(),c=Ni(1,256),d=c.createLinearGradient(0,0,1,256),e=1/(b.length-1),f=0,g=b.length;f<g;++f)d.addColorStop(f*e,b[f]);c.fillStyle=d;c.fillRect(0,0,1,256);this.g=c.getImageData(0,0,1,256).data};l.Ng=function(){var b=this.jh(),c=this.ug(),d=b+c+1,e=2*d,e=Ni(e,e);e.shadowOffsetX=e.shadowOffsetY=this.V;e.shadowBlur=c;e.shadowColor="#000";e.beginPath();c=d-this.V;e.arc(c,c,b,0,2*Math.PI,!0);e.fill();this.T=e.canvas.toDataURL();this.U=Array(256);this.u()};
l.Vk=function(b){b=b.context;var c=b.canvas,c=b.getImageData(0,0,c.width,c.height),d=c.data,e,f,g;e=0;for(f=d.length;e<f;e+=4)if(g=4*d[e+3])d[e]=this.g[g],d[e+1]=this.g[g+1],d[e+2]=this.g[g+2];b.putImageData(c,0,0)};l.Vh=function(b){this.set("blur",b)};l.Zh=function(b){this.set("gradient",b)};l.kh=function(b){this.set("radius",b)};function sz(b,c,d,e,f,g,h,k,m,n){uh.call(this,f,0);this.D=void 0!==n?n:!1;this.C=h;this.j=null;this.i={};this.l=c;this.G=e;this.B=g?g:f;this.b=[];this.c=null;this.o=0;g=e.Aa(this.B);n=this.G.J();f=this.l.J();g=n?ne(g,n):g;if(0===he(g))this.state=4;else if((n=b.J())&&(f?f=ne(f,n):f=n),e=e.$(this.B[0]),e=Zm(b,d,le(g),e),!isFinite(e)||isNaN(e)||0>=e)this.state=4;else if(this.v=new bn(b,d,g,f,e*(void 0!==m?m:.5)),0===this.v.c.length)this.state=4;else if(this.o=Ih(c,e),d=dn(this.v),f&&(b.b?(d[1]=Sa(d[1],
f[1],f[3]),d[3]=Sa(d[3],f[1],f[3])):d=ne(d,f)),he(d))if(b=Dh(c,d,this.o),100>kg(b)*jg(b)){for(c=b.a;c<=b.c;c++)for(d=b.f;d<=b.b;d++)(m=k(this.o,c,d,h))&&this.b.push(m);0===this.b.length&&(this.state=4)}else this.state=3;else this.state=4}y(sz,uh);sz.prototype.Y=function(){1==this.state&&(this.c.forEach(Wc),this.c=null);sz.ca.Y.call(this)};sz.prototype.Ta=function(b){if(void 0!==b){var c=w(b);if(c in this.i)return this.i[c];b=Pb(this.i)?this.j:this.j.cloneNode(!1);return this.i[c]=b}return this.j};
function tz(b){var c=[];b.b.forEach(function(b){b&&2==b.state&&c.push({extent:this.l.Aa(b.a),image:b.Ta()})},b);b.b.length=0;var d=b.B[0],e=b.G.Ka(d),f=ja(e)?e:e[0],e=ja(e)?e:e[1],d=b.G.$(d),g=b.l.$(b.o),h=b.G.Aa(b.B);b.j=an(f,e,b.C,g,b.l.J(),d,h,b.v,c,b.D);b.state=2;vh(b)}
sz.prototype.load=function(){if(0==this.state){this.state=1;vh(this);var b=0;this.c=[];this.b.forEach(function(c){var d=c.state;if(0==d||1==d){b++;var e;e=c.Ra("change",function(){var d=c.state;if(2==d||3==d||4==d)Wc(e),b--,0===b&&(this.c.forEach(Wc),this.c=null,tz(this))},!1,this);this.c.push(e)}},this);this.b.forEach(function(b){0==b.state&&b.load()});0===b&&tz(this)}};function uz(b,c){var d=c||{},e=d.document||document,f=document.createElement("SCRIPT"),g={Uh:f,Bc:void 0},h=new ay(vz,g),k=null,m=null!=d.timeout?d.timeout:5E3;0<m&&(k=window.setTimeout(function(){wz(f,!0);var c=new xz(yz,"Timeout reached for loading script "+b);cy(h);dy(h,!1,c)},m),g.Bc=k);f.onload=f.onreadystatechange=function(){f.readyState&&"loaded"!=f.readyState&&"complete"!=f.readyState||(wz(f,d.vj||!1,k),h.ad(null))};f.onerror=function(){wz(f,!0,k);var c=new xz(zz,"Error while loading script "+
b);cy(h);dy(h,!1,c)};g=d.attributes||{};Wb(g,{type:"text/javascript",charset:"UTF-8",src:b});Eg(f,g);Az(e).appendChild(f);return h}function Az(b){var c=b.getElementsByTagName("HEAD");return c&&0!=c.length?c[0]:b.documentElement}function vz(){if(this&&this.Uh){var b=this.Uh;b&&"SCRIPT"==b.tagName&&wz(b,!0,this.Bc)}}function wz(b,c,d){null!=d&&ba.clearTimeout(d);b.onload=da;b.onerror=da;b.onreadystatechange=da;c&&window.setTimeout(function(){Mg(b)},0)}var zz=0,yz=1;
function xz(b,c){var d="Jsloader error (code #"+b+")";c&&(d+=": "+c);Aa.call(this,d);this.code=b}y(xz,Aa);function Bz(b,c){this.f=new Ct(b);this.a=c?c:"callback";this.Bc=5E3}var Cz=0;function Dz(b,c,d,e){c=c||null;var f="_"+(Cz++).toString(36)+wa().toString(36);ba._callbacks_||(ba._callbacks_={});var g=b.f.clone();if(c)for(var h in c)if(!c.hasOwnProperty||c.hasOwnProperty(h)){var k=g,m=h,n=c[h];ga(n)||(n=[String(n)]);Vt(k.b,m,n)}d&&(ba._callbacks_[f]=Ez(f,d),d=b.a,h="_callbacks_."+f,ga(h)||(h=[String(h)]),Vt(g.b,d,h));b=uz(g.toString(),{timeout:b.Bc,vj:!0});gy(b,null,Fz(f,c,e),void 0)}
Bz.prototype.cancel=function(b){b&&(b.wj&&b.wj.cancel(),b.xa&&Gz(b.xa,!1))};function Fz(b,c,d){return function(){Gz(b,!1);d&&d(c)}}function Ez(b,c){return function(d){Gz(b,!0);c.apply(void 0,arguments)}}function Gz(b,c){ba._callbacks_[b]&&(c?delete ba._callbacks_[b]:ba._callbacks_[b]=da)};function Y(b){Wp.call(this,{attributions:b.attributions,extent:b.extent,logo:b.logo,opaque:b.opaque,projection:b.projection,state:void 0!==b.state?b.state:void 0,tileGrid:b.tileGrid,tileLoadFunction:b.tileLoadFunction?b.tileLoadFunction:Hz,tilePixelRatio:b.tilePixelRatio,tileUrlFunction:b.tileUrlFunction,url:b.url,urls:b.urls,wrapX:b.wrapX});this.crossOrigin=void 0!==b.crossOrigin?b.crossOrigin:null;this.tileClass=void 0!==b.tileClass?b.tileClass:Yx;this.j={};this.o={};this.wa=b.reprojectionErrorThreshold;
this.T=!1}y(Y,Wp);l=Y.prototype;l.qh=function(){return sh(this.a)?!0:Jb(this.j,function(b){return sh(b)})};l.rh=function(b,c){var d=this.ud(b);th(this.a,this.a==d?c:{});Ib(this.j,function(b){th(b,b==d?c:{})})};l.ib=function(b){var c=this.b;return!this.tileGrid||c&&!Ve(c,b)?(c=w(b).toString(),c in this.o||(this.o[c]=Jh(b)),this.o[c]):this.tileGrid};l.ud=function(b){var c=this.b;if(!c||Ve(c,b))return this.a;b=w(b).toString();b in this.j||(this.j[b]=new rh);return this.j[b]};
function Iz(b,c,d,e,f,g,h){c=[c,d,e];f=(d=Ph(b,c,g))?b.tileUrlFunction(d,f,g):void 0;f=new b.tileClass(c,void 0!==f?0:4,void 0!==f?f:"",b.crossOrigin,b.tileLoadFunction);f.key=h;D(f,"change",b.sh,!1,b);return f}
l.Pb=function(b,c,d,e,f){if(this.b&&f&&!Ve(this.b,f)){e=this.ud(f);c=[b,c,d];b=this.Ab.apply(this,c);if(qh(e,b))return e.get(b);var g=this.b;d=this.ib(g);var h=this.ib(f),k=Ph(this,c,f);f=new sz(g,d,f,h,c,k,this.v,ua(function(b,c,d,e){return Jz(this,b,c,d,e,g)},this),this.wa,this.T);e.set(b,f);return f}return Jz(this,b,c,d,e,f)};
function Jz(b,c,d,e,f,g){var h=null,k=b.Ab(c,d,e),m=b.Cg();if(qh(b.a,k)){if(h=b.a.get(k),h.key!=m){var n=h;h.f&&h.f.key==m?(h=h.f,2==n.state&&(h.f=n)):(h=Iz(b,c,d,e,f,g,m),2==n.state?h.f=n:n.f&&2==n.f.state&&(h.f=n.f,n.f=null));h.f&&(h.f.f=null);b.a.replace(k,h)}}else h=Iz(b,c,d,e,f,g,m),b.a.set(k,h);return h}l.vb=function(b){this.T!=b&&(this.T=b,Ib(this.j,function(b){b.clear()}),this.u())};l.wb=function(b,c){var d=Ee(b);d&&(d=w(d).toString(),d in this.o||(this.o[d]=c))};
function Hz(b,c){b.Ta().src=c};function Kz(b){Y.call(this,{crossOrigin:"anonymous",opaque:!0,projection:Ee("EPSG:3857"),reprojectionErrorThreshold:b.reprojectionErrorThreshold,state:"loading",tileLoadFunction:b.tileLoadFunction,wrapX:void 0!==b.wrapX?b.wrapX:!0});this.l=void 0!==b.culture?b.culture:"en-us";this.g=void 0!==b.maxZoom?b.maxZoom:-1;var c=new Ct("https://dev.virtualearth.net/REST/v1/Imagery/Metadata/"+b.imagerySet);Dz(new Bz(c,"jsonp"),{include:"ImageryProviders",uriScheme:"https",key:b.key},ua(this.C,this))}y(Kz,Y);
var Lz=new mg({html:'<a class="ol-attribution-bing-tos" href="http://www.microsoft.com/maps/product/terms.html">Terms of Use</a>'});
Kz.prototype.C=function(b){if(200!=b.statusCode||"OK"!=b.statusDescription||"ValidCredentials"!=b.authenticationResultCode||1!=b.resourceSets.length||1!=b.resourceSets[0].resources.length)yh(this,"error");else{var c=b.brandLogoUri;-1==c.indexOf("https")&&(c=c.replace("http","https"));var d=b.resourceSets[0].resources[0],e=-1==this.g?d.zoomMax:this.g;b=Kh(this.b);var f=Mh({extent:b,minZoom:d.zoomMin,maxZoom:e,tileSize:d.imageWidth==d.imageHeight?d.imageWidth:[d.imageWidth,d.imageHeight]});this.tileGrid=
f;var g=this.l;this.tileUrlFunction=Tp(d.imageUrlSubdomains.map(function(b){var c=[0,0,0],e=d.imageUrl.replace("{subdomain}",b).replace("{culture}",g);return function(b){if(b)return ag(b[0],b[1],-b[2]-1,c),e.replace("{quadkey}",dg(c))}}));if(d.imageryProviders){var h=Ie(Ee("EPSG:4326"),this.b);b=d.imageryProviders.map(function(b){var c=b.attribution,d={};b.coverageAreas.forEach(function(b){var c=b.zoomMin,g=Math.min(b.zoomMax,e);b=b.bbox;b=qe([b[1],b[0],b[3],b[2]],h);var k,m;for(k=c;k<=g;++k)m=k.toString(),
c=Dh(f,b,k),m in d?d[m].push(c):d[m]=[c]});return new mg({html:c,tileRanges:d})});b.push(Lz);this.ma(b)}this.U=c;yh(this,"ready")}};function Mz(b){R.call(this,{attributions:b.attributions,extent:b.extent,logo:b.logo,projection:b.projection,wrapX:b.wrapX});this.D=void 0;this.fa=void 0!==b.distance?b.distance:20;this.C=[];this.v=b.source;this.v.H("change",Mz.prototype.oa,this)}y(Mz,R);Mz.prototype.ga=function(){return this.v};Mz.prototype.Nc=function(b,c,d){this.v.Nc(b,c,d);c!==this.D&&(this.clear(),this.D=c,Nz(this),this.Ec(this.C))};Mz.prototype.oa=function(){this.clear();Nz(this);this.Ec(this.C);this.u()};
function Nz(b){if(void 0!==b.D){b.C.length=0;for(var c=Md(),d=b.fa*b.D,e=b.v.ze(),f={},g=0,h=e.length;g<h;g++){var k=e[g];w(k).toString()in f||(k=k.X().Z(),Xd(k,c),Qd(c,d,c),k=b.v.mf(c),k=k.filter(function(b){b=w(b).toString();return b in f?!1:f[b]=!0}),b.C.push(Oz(k)))}}}function Oz(b){for(var c=b.length,d=[0,0],e=0;e<c;e++){var f=b[e].X().Z();pd(d,f)}c=1/c;d[0]*=c;d[1]*=c;d=new pn(new E(d));d.set("features",b);return d};function Pz(b){gn.call(this,{projection:b.projection,resolutions:b.resolutions});this.ga=void 0!==b.crossOrigin?b.crossOrigin:null;this.o=void 0!==b.displayDpi?b.displayDpi:96;this.j=void 0!==b.params?b.params:{};this.V=b.url;this.c=void 0!==b.imageLoadFunction?b.imageLoadFunction:nn;this.pa=void 0!==b.hidpi?b.hidpi:!0;this.fa=void 0!==b.metersPerUnit?b.metersPerUnit:1;this.v=void 0!==b.ratio?b.ratio:1;this.wa=void 0!==b.useOverlay?b.useOverlay:!1;this.g=null;this.T=0}y(Pz,gn);l=Pz.prototype;
l.Hm=function(){return this.j};
l.qd=function(b,c,d){c=hn(this,c);d=this.pa?d:1;var e=this.g;if(e&&this.T==this.f&&e.$()==c&&e.b==d&&Vd(e.J(),b))return e;1!=this.v&&(b=b.slice(),pe(b,this.v));var f=[je(b)/c*d,ke(b)/c*d];if(void 0!==this.V){var e=this.V,g=le(b),h=this.fa,k=je(b),m=ke(b),n=f[0],p=f[1],q=.0254/this.o,f={OPERATION:this.wa?"GETDYNAMICMAPOVERLAYIMAGE":"GETMAPIMAGE",VERSION:"2.0.0",LOCALE:"en",CLIENTAGENT:"ol.source.ImageMapGuide source",CLIP:"1",SETDISPLAYDPI:this.o,SETDISPLAYWIDTH:Math.round(f[0]),SETDISPLAYHEIGHT:Math.round(f[1]),
SETVIEWSCALE:p*k>n*m?k*h/(n*q):m*h/(p*q),SETVIEWCENTERX:g[0],SETVIEWCENTERY:g[1]};Wb(f,this.j);e=io(ko([e],f));e=new Xx(b,c,d,this.i,e,this.ga,this.c);D(e,"change",this.l,!1,this)}else e=null;this.g=e;this.T=this.f;return e};l.Gm=function(){return this.c};l.Jm=function(b){Wb(this.j,b);this.u()};l.Im=function(b){this.g=null;this.c=b;this.u()};function Qz(b){var c=void 0!==b.attributions?b.attributions:null,d=b.imageExtent,e=void 0!==b.crossOrigin?b.crossOrigin:null,f=void 0!==b.imageLoadFunction?b.imageLoadFunction:nn;gn.call(this,{attributions:c,logo:b.logo,projection:Ee(b.projection)});this.c=new Xx(d,void 0,1,c,b.url,e,f);this.g=b.imageSize?b.imageSize:null;D(this.c,"change",this.l,!1,this)}y(Qz,gn);Qz.prototype.qd=function(b){return oe(b,this.c.J())?this.c:null};
Qz.prototype.l=function(b){if(2==this.c.state){var c=this.c.J(),d=this.c.a(),e,f;this.g?(e=this.g[0],f=this.g[1]):(e=d.width,f=d.height);c=Math.ceil(je(c)/(ke(c)/f));if(c!=e){var g=document.createElement("canvas");g.width=c;g.height=f;g.getContext("2d").drawImage(d,0,0,e,f,0,0,g.width,g.height);this.c.f=g}}Qz.ca.l.call(this,b)};function Rz(b){b=b||{};gn.call(this,{attributions:b.attributions,logo:b.logo,projection:b.projection,resolutions:b.resolutions});this.pa=void 0!==b.crossOrigin?b.crossOrigin:null;this.j=b.url;this.T=void 0!==b.imageLoadFunction?b.imageLoadFunction:nn;this.g=b.params;this.v=!0;Sz(this);this.ga=b.serverType;this.wa=void 0!==b.hidpi?b.hidpi:!0;this.c=null;this.V=[0,0];this.fa=0;this.o=void 0!==b.ratio?b.ratio:1.5}y(Rz,gn);var Tz=[101,101];l=Rz.prototype;
l.Pm=function(b,c,d,e){if(void 0!==this.j){var f=me(b,c,0,Tz),g={SERVICE:"WMS",VERSION:"1.3.0",REQUEST:"GetFeatureInfo",FORMAT:"image/png",TRANSPARENT:!0,QUERY_LAYERS:this.g.LAYERS};Wb(g,this.g,e);e=Math.floor((f[3]-b[1])/c);g[this.v?"I":"X"]=Math.floor((b[0]-f[0])/c);g[this.v?"J":"Y"]=e;return Uz(this,f,Tz,1,Ee(d),g)}};l.Rm=function(){return this.g};
l.qd=function(b,c,d,e){if(void 0===this.j)return null;c=hn(this,c);1==d||this.wa&&void 0!==this.ga||(d=1);b=b.slice();var f=(b[0]+b[2])/2,g=(b[1]+b[3])/2,h=c/d,k=je(b)/h,h=ke(b)/h,m=this.c;if(m&&this.fa==this.f&&m.$()==c&&m.b==d&&Vd(m.J(),b))return m;if(1!=this.o){var m=this.o*je(b)/2,n=this.o*ke(b)/2;b[0]=f-m;b[1]=g-n;b[2]=f+m;b[3]=g+n}f={SERVICE:"WMS",VERSION:"1.3.0",REQUEST:"GetMap",FORMAT:"image/png",TRANSPARENT:!0};Wb(f,this.g);this.V[0]=Math.ceil(k*this.o);this.V[1]=Math.ceil(h*this.o);e=Uz(this,
b,this.V,d,e,f);this.c=new Xx(b,c,d,this.i,e,this.pa,this.T);this.fa=this.f;D(this.c,"change",this.l,!1,this);return this.c};l.Qm=function(){return this.T};
function Uz(b,c,d,e,f,g){g[b.v?"CRS":"SRS"]=f.a;"STYLES"in b.g||(g.STYLES=new String(""));if(1!=e)switch(b.ga){case "geoserver":e=90*e+.5|0;g.FORMAT_OPTIONS="FORMAT_OPTIONS"in g?g.FORMAT_OPTIONS+(";dpi:"+e):"dpi:"+e;break;case "mapserver":g.MAP_RESOLUTION=90*e;break;case "carmentaserver":case "qgis":g.DPI=90*e}g.WIDTH=d[0];g.HEIGHT=d[1];d=f.g;var h;b.v&&"ne"==d.substr(0,2)?h=[c[1],c[0],c[3],c[2]]:h=c;g.BBOX=h.join(",");return io(ko([b.j],g))}l.Sm=function(){return this.j};
l.Tm=function(b){this.c=null;this.T=b;this.u()};l.Um=function(b){b!=this.j&&(this.j=b,this.c=null,this.u())};l.Vm=function(b){Wb(this.g,b);Sz(this);this.c=null;this.u()};function Sz(b){b.v=0<=Qa(Rb(b.g,"VERSION","1.3.0"),"1.3")};function Vz(b){var c=void 0!==b.projection?b.projection:"EPSG:3857",d=void 0!==b.tileGrid?b.tileGrid:Mh({extent:Kh(c),maxZoom:b.maxZoom,tileSize:b.tileSize});Y.call(this,{attributions:b.attributions,crossOrigin:b.crossOrigin,logo:b.logo,projection:c,reprojectionErrorThreshold:b.reprojectionErrorThreshold,tileGrid:d,tileLoadFunction:b.tileLoadFunction,tilePixelRatio:b.tilePixelRatio,tileUrlFunction:b.tileUrlFunction,url:b.url,urls:b.urls,wrapX:void 0!==b.wrapX?b.wrapX:!0})}y(Vz,Y);function Wz(b){b=b||{};var c;void 0!==b.attributions?c=b.attributions:c=[Xz];Vz.call(this,{attributions:c,crossOrigin:void 0!==b.crossOrigin?b.crossOrigin:"anonymous",opaque:!0,maxZoom:void 0!==b.maxZoom?b.maxZoom:19,reprojectionErrorThreshold:b.reprojectionErrorThreshold,tileLoadFunction:b.tileLoadFunction,url:void 0!==b.url?b.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",wrapX:b.wrapX})}y(Wz,Vz);var Xz=new mg({html:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.'});function Yz(b){b=b||{};var c=Zz[b.layer];this.g=b.layer;Vz.call(this,{attributions:c.attributions,crossOrigin:"anonymous",logo:"https://developer.mapquest.com/content/osm/mq_logo.png",maxZoom:c.maxZoom,reprojectionErrorThreshold:b.reprojectionErrorThreshold,opaque:!0,tileLoadFunction:b.tileLoadFunction,url:void 0!==b.url?b.url:"https://otile{1-4}-s.mqcdn.com/tiles/1.0.0/"+this.g+"/{z}/{x}/{y}.jpg"})}y(Yz,Vz);
var $z=new mg({html:'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a>'}),Zz={osm:{maxZoom:19,attributions:[$z,Xz]},sat:{maxZoom:18,attributions:[$z,new mg({html:"Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency"})]},hyb:{maxZoom:18,attributions:[$z,Xz]}};Yz.prototype.l=function(){return this.g};(function(){var b={},c={ja:b};(function(d){if("object"===typeof b&&"undefined"!==typeof c)c.ja=d();else{var e;"undefined"!==typeof window?e=window:"undefined"!==typeof global?e=global:"undefined"!==typeof self?e=self:e=this;e.Bp=d()}})(function(){return function e(b,c,h){function k(n,q){if(!c[n]){if(!b[n]){var r="function"==typeof require&&require;if(!q&&r)return r(n,!0);if(m)return m(n,!0);r=Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r;}r=c[n]={ja:{}};b[n][0].call(r.ja,function(c){var e=
b[n][1][c];return k(e?e:c)},r,r.ja,e,b,c,h)}return c[n].ja}for(var m="function"==typeof require&&require,n=0;n<h.length;n++)k(h[n]);return k}({1:[function(b,c,g){b=b("./processor");g.Qi=b},{"./processor":2}],2:[function(b,c){function g(b){return function(c){var e=c.buffers,f=c.meta,g=c.width,h=c.height,k=e.length,m=e[0].byteLength,B;if(c.imageOps){m=Array(k);for(B=0;B<k;++B)m[B]=new ImageData(new Uint8ClampedArray(e[B]),g,h);g=b(m,f).data}else{g=new Uint8ClampedArray(m);h=Array(k);c=Array(k);for(B=
0;B<k;++B)h[B]=new Uint8ClampedArray(e[B]),c[B]=[0,0,0,0];for(e=0;e<m;e+=4){for(B=0;B<k;++B){var v=h[B];c[B][0]=v[e];c[B][1]=v[e+1];c[B][2]=v[e+2];c[B][3]=v[e+3]}B=b(c,f);g[e]=B[0];g[e+1]=B[1];g[e+2]=B[2];g[e+3]=B[3]}}return g.buffer}}function h(b,c){var e=Object.keys(b.lib||{}).map(function(c){return"var "+c+" = "+b.lib[c].toString()+";"}).concat(["var __minion__ = ("+g.toString()+")(",b.operation.toString(),");",'self.addEventListener("message", function(__event__) {',"var buffer = __minion__(__event__.data);",
"self.postMessage({buffer: buffer, meta: __event__.data.meta}, [buffer]);","});"]),e=URL.createObjectURL(new Blob(e,{type:"text/javascript"})),e=new Worker(e);e.addEventListener("message",c);return e}function k(b,c){var e=g(b.operation);return{postMessage:function(b){setTimeout(function(){c({data:{buffer:e(b),qe:b.qe}})},0)}}}function m(b){this.$e=!!b.cl;var c;0===b.threads?c=0:this.$e?c=1:c=b.threads||1;var e=[];if(c)for(var f=0;f<c;++f)e[f]=h(b,this.ig.bind(this,f));else e[0]=k(b,this.ig.bind(this,
0));this.Td=e;this.Zc=[];this.ej=b.co||Infinity;this.Rd=0;this.Dc={};this.af=null}m.prototype.bo=function(b,c,e){this.bj({tc:b,qe:c,ad:e});this.fg()};m.prototype.bj=function(b){for(this.Zc.push(b);this.Zc.length>this.ej;)this.Zc.shift().ad(null,null)};m.prototype.fg=function(){if(0===this.Rd&&0<this.Zc.length){var b=this.af=this.Zc.shift(),c=b.tc[0].width,e=b.tc[0].height,f=b.tc.map(function(b){return b.data.buffer}),g=this.Td.length;this.Rd=g;if(1===g)this.Td[0].postMessage({buffers:f,meta:b.qe,
imageOps:this.$e,width:c,height:e},f);else for(var h=4*Math.ceil(b.tc[0].data.length/4/g),k=0;k<g;++k){for(var m=k*h,B=[],v=0,L=f.length;v<L;++v)B.push(f[k].slice(m,m+h));this.Td[k].postMessage({buffers:B,meta:b.qe,imageOps:this.$e,width:c,height:e},B)}}};m.prototype.ig=function(b,c){this.xp||(this.Dc[b]=c.data,--this.Rd,0===this.Rd&&this.fj())};m.prototype.fj=function(){var b=this.af,c=this.Td.length,e,f;if(1===c)e=new Uint8ClampedArray(this.Dc[0].buffer),f=this.Dc[0].meta;else{var g=b.tc[0].data.length;
e=new Uint8ClampedArray(g);f=Array(g);for(var g=4*Math.ceil(g/4/c),h=0;h<c;++h){var k=h*g;e.set(new Uint8ClampedArray(this.Dc[h].buffer),k);f[h]=this.Dc[h].meta}}this.af=null;this.Dc={};b.ad(null,new ImageData(e,b.tc[0].width,b.tc[0].height),f);this.fg()};c.ja=m},{}]},{},[1])(1)});yp=c.ja})();function aA(b){this.T=null;this.wa=void 0!==b.operationType?b.operationType:"pixel";this.hb=void 0!==b.threads?b.threads:1;this.c=bA(b.sources);for(var c=0,d=this.c.length;c<d;++c)D(this.c[c],"change",this.u,!1,this);this.g=Ni();this.ga=new Hk(function(){return 1},ua(this.u,this));for(var c=cA(this.c),d={},e=0,f=c.length;e<f;++e)d[w(c[e].layer)]=c[e];this.j=this.o=null;this.fa={animate:!1,attributions:{},coordinateToPixelMatrix:Bd(),extent:null,focus:null,index:0,layerStates:d,layerStatesArray:c,
logos:{},pixelRatio:1,pixelToCoordinateMatrix:Bd(),postRenderFunctions:[],size:[0,0],skippedFeatureUids:{},tileQueue:this.ga,time:Date.now(),usedTiles:{},viewState:{rotation:0},viewHints:[],wantedTiles:{}};gn.call(this,{});void 0!==b.operation&&this.v(b.operation,b.lib)}y(aA,gn);aA.prototype.v=function(b,c){this.T=new yp.Qi({operation:b,cl:"image"===this.wa,co:1,lib:c,threads:this.hb});this.u()};function dA(b,c,d){var e=b.o;return!e||b.f!==e.Ho||d!==e.resolution||!ae(c,e.extent)}
aA.prototype.C=function(b,c,d,e){d=!0;for(var f,g=0,h=this.c.length;g<h;++g)if(f=this.c[g].a.ea(),"ready"!==f.B){d=!1;break}if(!d)return null;if(!dA(this,b,c))return this.j;d=this.g.canvas;f=Math.round(je(b)/c);g=Math.round(ke(b)/c);if(f!==d.width||g!==d.height)d.width=f,d.height=g;f=Tb(this.fa);f.viewState=Tb(f.viewState);var g=le(b),h=Math.round(je(b)/c),k=Math.round(ke(b)/c);f.extent=b;f.focus=le(b);f.size[0]=h;f.size[1]=k;h=f.viewState;h.center=g;h.projection=e;h.resolution=c;this.j=e=new Xm(b,
c,1,this.i,d,this.V.bind(this,f));this.o={extent:b,resolution:c,Ho:this.f};return e};
aA.prototype.V=function(b,c){for(var d=this.c.length,e=Array(d),f=0;f<d;++f){var g;var h=this.c[f],k=b;h.Ad(k,b.layerStatesArray[f]);if(g=h.zd()){var h=h.nf(),m=Math.round(h[12]),n=Math.round(h[13]),p=k.size[0],k=k.size[1];if(g instanceof Image){if(eA){var q=eA.canvas;q.width!==p||q.height!==k?eA=Ni(p,k):eA.clearRect(0,0,p,k)}else eA=Ni(p,k);eA.drawImage(g,m,n,Math.round(g.width*h[0]),Math.round(g.height*h[5]));g=eA.getImageData(0,0,p,k)}else g=g.getContext("2d").getImageData(-m,-n,p,k)}else g=null;
if(g)e[f]=g;else return}d={};this.s(new fA(gA,b,d));this.T.bo(e,d,this.pa.bind(this,b,c));Ik(b.tileQueue,16,16)};aA.prototype.pa=function(b,c,d,e,f){d?c(d):e&&(this.s(new fA(hA,b,f)),dA(this,b.extent,b.viewState.resolution/b.pixelRatio)||this.g.putImageData(e,0,0),c(null))};var eA=null;function cA(b){return b.map(function(b){return Zj(b.a)})}
function bA(b){for(var c=b.length,d=Array(c),e=0;e<c;++e){var f=e,g=b[e],h=null;g instanceof Nh?(g=new G({source:g}),h=new Pp(g)):g instanceof gn&&(g=new Pl({source:g}),h=new Op(g));d[f]=h}return d}function fA(b,c,d){tc.call(this,b);this.extent=c.extent;this.resolution=c.viewState.resolution/c.pixelRatio;this.data=d}y(fA,tc);var gA="beforeoperations",hA="afteroperations";var iA={terrain:{ob:"jpg",opaque:!0},"terrain-background":{ob:"jpg",opaque:!0},"terrain-labels":{ob:"png",opaque:!1},"terrain-lines":{ob:"png",opaque:!1},"toner-background":{ob:"png",opaque:!0},toner:{ob:"png",opaque:!0},"toner-hybrid":{ob:"png",opaque:!1},"toner-labels":{ob:"png",opaque:!1},"toner-lines":{ob:"png",opaque:!1},"toner-lite":{ob:"png",opaque:!0},watercolor:{ob:"jpg",opaque:!0}},jA={terrain:{minZoom:4,maxZoom:18},toner:{minZoom:0,maxZoom:20},watercolor:{minZoom:3,maxZoom:16}};
function kA(b){var c=b.layer.indexOf("-"),c=-1==c?b.layer:b.layer.slice(0,c),d=iA[b.layer];Vz.call(this,{attributions:lA,crossOrigin:"anonymous",maxZoom:jA[c].maxZoom,opaque:d.opaque,reprojectionErrorThreshold:b.reprojectionErrorThreshold,tileLoadFunction:b.tileLoadFunction,url:void 0!==b.url?b.url:"https://stamen-tiles-{a-d}.a.ssl.fastly.net/"+b.layer+"/{z}/{x}/{y}."+d.ob})}y(kA,Vz);
var lA=[new mg({html:'Map tiles by <a href="http://stamen.com/">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>.'}),Xz];function mA(b){b=b||{};var c=void 0!==b.params?b.params:{};Y.call(this,{attributions:b.attributions,crossOrigin:b.crossOrigin,logo:b.logo,projection:b.projection,reprojectionErrorThreshold:b.reprojectionErrorThreshold,tileGrid:b.tileGrid,tileLoadFunction:b.tileLoadFunction,tileUrlFunction:ua(this.D,this),url:b.url,urls:b.urls,wrapX:void 0!==b.wrapX?b.wrapX:!0});this.g=c;this.l=Md()}y(mA,Y);mA.prototype.C=function(){return this.g};
mA.prototype.Qb=function(b,c,d){b=mA.ca.Qb.call(this,b,c,d);return 1==c?b:ld(b,c,this.c)};
mA.prototype.D=function(b,c,d){var e=this.tileGrid;e||(e=this.ib(d));if(!(e.a.length<=b[0])){var f=e.Aa(b,this.l),g=md(e.Ka(b[0]),this.c);1!=c&&(g=ld(g,c,this.c));e={F:"image",FORMAT:"PNG32",TRANSPARENT:!0};Wb(e,this.g);var h=this.urls;h?(d=d.a.split(":").pop(),e.SIZE=g[0]+","+g[1],e.BBOX=f.join(","),e.BBOXSR=d,e.IMAGESR=d,e.DPI=Math.round(e.DPI?e.DPI*c:90*c),b=1==h.length?h[0]:h[nd((b[1]<<b[0])+b[2],h.length)],Ca(b,"/")||(b+="/"),Ca(b,"MapServer/")?b+="export":Ca(b,"ImageServer/")&&(b+="exportImage"),
b=io(ko([b],e))):b=void 0;return b}};mA.prototype.V=function(b){Wb(this.g,b);this.u()};function nA(b,c,d){uh.call(this,b,2);this.i=c;this.c=d;this.b={}}y(nA,uh);nA.prototype.Ta=function(b){b=void 0!==b?w(b):-1;if(b in this.b)return this.b[b];var c=this.i,d=Ni(c[0],c[1]);d.strokeStyle="black";d.strokeRect(.5,.5,c[0]+.5,c[1]+.5);d.fillStyle="black";d.textAlign="center";d.textBaseline="middle";d.font="24px sans-serif";d.fillText(this.c,c[0]/2,c[1]/2);return this.b[b]=d.canvas};
function oA(b){Nh.call(this,{opaque:!1,projection:b.projection,tileGrid:b.tileGrid,wrapX:void 0!==b.wrapX?b.wrapX:!0})}y(oA,Nh);oA.prototype.Pb=function(b,c,d){var e=this.Ab(b,c,d);if(qh(this.a,e))return this.a.get(e);var f=md(this.tileGrid.Ka(b));b=[b,c,d];c=(c=Ph(this,b))?eg(Ph(this,c)):"";f=new nA(b,f,c);this.a.set(e,f);return f};function pA(b){Y.call(this,{attributions:b.attributions,crossOrigin:b.crossOrigin,projection:Ee("EPSG:3857"),reprojectionErrorThreshold:b.reprojectionErrorThreshold,state:"loading",tileLoadFunction:b.tileLoadFunction,wrapX:void 0!==b.wrapX?b.wrapX:!0});Dz(new Bz(b.url),void 0,ua(this.l,this),ua(this.g,this))}y(pA,Y);
pA.prototype.l=function(b){var c=Ee("EPSG:4326"),d=this.b,e;void 0!==b.bounds&&(e=qe(b.bounds,Ie(c,d)));var f=b.minzoom||0,g=b.maxzoom||22;this.tileGrid=d=Mh({extent:Kh(d),maxZoom:g,minZoom:f});this.tileUrlFunction=Sp(b.tiles,d);if(void 0!==b.attribution&&!this.i){c=void 0!==e?e:c.J();e={};for(var h;f<=g;++f)h=f.toString(),e[h]=[Dh(d,c,f)];this.ma([new mg({html:b.attribution,tileRanges:e})])}yh(this,"ready")};pA.prototype.g=function(){yh(this,"error")};function qA(b){Nh.call(this,{projection:Ee("EPSG:3857"),state:"loading"});this.l=void 0!==b.preemptive?b.preemptive:!0;this.g=Up;this.j=void 0;Dz(new Bz(b.url),void 0,ua(this.Xm,this))}y(qA,Nh);l=qA.prototype;l.mk=function(){return this.j};l.zj=function(b,c,d,e,f){this.tileGrid?(c=this.tileGrid.fe(b,c),rA(this.Pb(c[0],c[1],c[2],1,this.b),b,d,e,f)):!0===f?li(function(){d.call(e,null)}):d.call(e,null)};
l.Xm=function(b){var c=Ee("EPSG:4326"),d=this.b,e;void 0!==b.bounds&&(e=qe(b.bounds,Ie(c,d)));var f=b.minzoom||0,g=b.maxzoom||22;this.tileGrid=d=Mh({extent:Kh(d),maxZoom:g,minZoom:f});this.j=b.template;var h=b.grids;if(h){this.g=Sp(h,d);if(void 0!==b.attribution){c=void 0!==e?e:c.J();for(e={};f<=g;++f)h=f.toString(),e[h]=[Dh(d,c,f)];this.ma([new mg({html:b.attribution,tileRanges:e})])}yh(this,"ready")}else yh(this,"error")};
l.Pb=function(b,c,d,e,f){var g=this.Ab(b,c,d);if(qh(this.a,g))return this.a.get(g);b=[b,c,d];c=Ph(this,b,f);e=this.g(c,e,f);e=new sA(b,void 0!==e?0:4,void 0!==e?e:"",this.tileGrid.Aa(b),this.l);this.a.set(g,e);return e};l.Yf=function(b,c,d){b=this.Ab(b,c,d);qh(this.a,b)&&this.a.get(b)};function sA(b,c,d,e,f){uh.call(this,b,c);this.l=d;this.b=e;this.o=f;this.j=this.i=this.c=null}y(sA,uh);l=sA.prototype;l.Ta=function(){return null};
function tA(b,c){if(!b.c||!b.i||!b.j)return null;var d=b.c[Math.floor((1-(c[1]-b.b[1])/(b.b[3]-b.b[1]))*b.c.length)];if(!ia(d))return null;d=d.charCodeAt(Math.floor((c[0]-b.b[0])/(b.b[2]-b.b[0])*d.length));93<=d&&d--;35<=d&&d--;d-=32;return d in b.i?b.j[b.i[d]]:null}function rA(b,c,d,e,f){0==b.state&&!0===f?(Uc(b,"change",function(){d.call(e,tA(this,c))},!1,b),uA(b)):!0===f?li(function(){d.call(e,tA(this,c))},b):d.call(e,tA(b,c))}l.$a=function(){return this.l};l.Bk=function(){this.state=3;vh(this)};
l.Wm=function(b){this.c=b.grid;this.i=b.keys;this.j=b.data;this.state=4;vh(this)};function uA(b){0==b.state&&(b.state=1,Dz(new Bz(b.l),void 0,ua(b.Wm,b),ua(b.Bk,b)))}l.load=function(){this.o&&uA(this)};function vA(b){b=b||{};var c=void 0!==b.params?b.params:{};Y.call(this,{attributions:b.attributions,crossOrigin:b.crossOrigin,logo:b.logo,opaque:!Rb(c,"TRANSPARENT",!0),projection:b.projection,reprojectionErrorThreshold:b.reprojectionErrorThreshold,tileGrid:b.tileGrid,tileLoadFunction:b.tileLoadFunction,tileUrlFunction:ua(this.$m,this),url:b.url,urls:b.urls,wrapX:void 0!==b.wrapX?b.wrapX:!0});this.C=void 0!==b.gutter?b.gutter:0;this.g=c;this.l=!0;this.D=b.serverType;this.fa=void 0!==b.hidpi?b.hidpi:
!0;this.V="";wA(this);this.ga=Md();xA(this)}y(vA,Y);l=vA.prototype;
l.Ym=function(b,c,d,e){d=Ee(d);var f=this.tileGrid;f||(f=this.ib(d));c=f.fe(b,c);if(!(f.a.length<=c[0])){var g=f.$(c[0]),h=f.Aa(c,this.ga),f=md(f.Ka(c[0]),this.c),k=this.C;0!==k&&(f=kd(f,k,this.c),h=Qd(h,g*k,h));k={SERVICE:"WMS",VERSION:"1.3.0",REQUEST:"GetFeatureInfo",FORMAT:"image/png",TRANSPARENT:!0,QUERY_LAYERS:this.g.LAYERS};Wb(k,this.g,e);e=Math.floor((h[3]-b[1])/g);k[this.l?"I":"X"]=Math.floor((b[0]-h[0])/g);k[this.l?"J":"Y"]=e;return yA(this,c,f,h,1,d,k)}};l.ae=function(){return this.C};
l.Ab=function(b,c,d){return this.V+vA.ca.Ab.call(this,b,c,d)};l.Zm=function(){return this.g};
function yA(b,c,d,e,f,g,h){var k=b.urls;if(k){h.WIDTH=d[0];h.HEIGHT=d[1];h[b.l?"CRS":"SRS"]=g.a;"STYLES"in b.g||(h.STYLES=new String(""));if(1!=f)switch(b.D){case "geoserver":d=90*f+.5|0;h.FORMAT_OPTIONS="FORMAT_OPTIONS"in h?h.FORMAT_OPTIONS+(";dpi:"+d):"dpi:"+d;break;case "mapserver":h.MAP_RESOLUTION=90*f;break;case "carmentaserver":case "qgis":h.DPI=90*f}g=g.g;b.l&&"ne"==g.substr(0,2)&&(b=e[0],e[0]=e[1],e[1]=b,b=e[2],e[2]=e[3],e[3]=b);h.BBOX=e.join(",");return io(ko([1==k.length?k[0]:k[nd((c[1]<<
c[0])+c[2],k.length)]],h))}}l.Qb=function(b,c,d){b=vA.ca.Qb.call(this,b,c,d);return 1!=c&&this.fa&&void 0!==this.D?ld(b,c,this.c):b};function wA(b){var c=0,d=[];if(b.urls){var e,f;e=0;for(f=b.urls.length;e<f;++e)d[c++]=b.urls[e]}for(var g in b.g)d[c++]=g+"-"+b.g[g];b.V=d.join("#")}
l.$m=function(b,c,d){var e=this.tileGrid;e||(e=this.ib(d));if(!(e.a.length<=b[0])){1==c||this.fa&&void 0!==this.D||(c=1);var f=e.$(b[0]),g=e.Aa(b,this.ga),e=md(e.Ka(b[0]),this.c),h=this.C;0!==h&&(e=kd(e,h,this.c),g=Qd(g,f*h,g));1!=c&&(e=ld(e,c,this.c));f={SERVICE:"WMS",VERSION:"1.3.0",REQUEST:"GetMap",FORMAT:"image/png",TRANSPARENT:!0};Wb(f,this.g);return yA(this,b,e,g,c,d,f)}};l.an=function(b){Wb(this.g,b);wA(this);xA(this);this.u()};function xA(b){b.l=0<=Qa(Rb(b.g,"VERSION","1.3.0"),"1.3")};function zA(b){this.j=b.matrixIds;zh.call(this,{extent:b.extent,origin:b.origin,origins:b.origins,resolutions:b.resolutions,tileSize:b.tileSize,tileSizes:b.tileSizes,sizes:b.sizes})}y(zA,zh);zA.prototype.o=function(){return this.j};
function AA(b,c){var d=[],e=[],f=[],g=[],h=[],k;k=Ee(b.SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/,"$1:$3"));var m=k.Kc(),n="ne"==k.g.substr(0,2);b.TileMatrix.sort(function(b,c){return c.ScaleDenominator-b.ScaleDenominator});b.TileMatrix.forEach(function(b){e.push(b.Identifier);var c=2.8E-4*b.ScaleDenominator/m,k=b.TileWidth,t=b.TileHeight;n?f.push([b.TopLeftCorner[1],b.TopLeftCorner[0]]):f.push(b.TopLeftCorner);d.push(c);g.push(k==t?k:[k,t]);h.push([b.MatrixWidth,-b.MatrixHeight])});
return new zA({extent:c,origins:f,resolutions:d,matrixIds:e,tileSizes:g,sizes:h})};function Z(b){function c(b){b="KVP"==e?io(ko([b],g)):b.replace(/\{(\w+?)\}/g,function(b,c){return c.toLowerCase()in g?g[c.toLowerCase()]:b});return function(c){if(c){var d={TileMatrix:f.j[c[0]],TileCol:c[1],TileRow:-c[2]-1};Wb(d,h);c=b;return c="KVP"==e?io(ko([c],d)):c.replace(/\{(\w+?)\}/g,function(b,c){return d[c]})}}}this.ga=void 0!==b.version?b.version:"1.0.0";this.D=void 0!==b.format?b.format:"image/jpeg";this.g=void 0!==b.dimensions?b.dimensions:{};this.l="";BA(this);this.V=b.layer;this.C=b.matrixSet;
this.fa=b.style;var d=b.urls;void 0===d&&void 0!==b.url&&(d=Vp(b.url));var e=this.oa=void 0!==b.requestEncoding?b.requestEncoding:"KVP",f=b.tileGrid,g={layer:this.V,style:this.fa,tilematrixset:this.C};"KVP"==e&&Wb(g,{Service:"WMTS",Request:"GetTile",Version:this.ga,Format:this.D});var h=this.g,k=d&&0<d.length?Tp(d.map(c)):Up;Y.call(this,{attributions:b.attributions,crossOrigin:b.crossOrigin,logo:b.logo,projection:b.projection,reprojectionErrorThreshold:b.reprojectionErrorThreshold,tileClass:b.tileClass,
tileGrid:f,tileLoadFunction:b.tileLoadFunction,tilePixelRatio:b.tilePixelRatio,tileUrlFunction:k,urls:d,wrapX:void 0!==b.wrapX?b.wrapX:!1})}y(Z,Y);l=Z.prototype;l.Lj=function(){return this.g};l.bn=function(){return this.D};l.Cg=function(){return this.l};l.cn=function(){return this.V};l.Yj=function(){return this.C};l.kk=function(){return this.oa};l.dn=function(){return this.fa};l.rk=function(){return this.ga};function BA(b){var c=0,d=[],e;for(e in b.g)d[c++]=e+"-"+b.g[e];b.l=d.join("/")}
l.cp=function(b){Wb(this.g,b);BA(this);this.u()};function CA(b){b=b||{};var c=b.size,d=c[0],e=c[1],f=[],g=256;switch(void 0!==b.tierSizeCalculation?b.tierSizeCalculation:"default"){case "default":for(;d>g||e>g;)f.push([Math.ceil(d/g),Math.ceil(e/g)]),g+=g;break;case "truncated":for(;d>g||e>g;)f.push([Math.ceil(d/g),Math.ceil(e/g)]),d>>=1,e>>=1}f.push([1,1]);f.reverse();for(var g=[1],h=[0],e=1,d=f.length;e<d;e++)g.push(1<<e),h.push(f[e-1][0]*f[e-1][1]+h[e-1]);g.reverse();var c=[0,-c[1],c[0],0],c=new zh({extent:c,origin:ge(c),resolutions:g}),k=b.url;
Y.call(this,{attributions:b.attributions,crossOrigin:b.crossOrigin,logo:b.logo,reprojectionErrorThreshold:b.reprojectionErrorThreshold,tileClass:DA,tileGrid:c,tileUrlFunction:function(b){if(b){var c=b[0],d=b[1];b=-b[2]-1;return k+"TileGroup"+((d+b*f[c][0]+h[c])/256|0)+"/"+c+"-"+d+"-"+b+".jpg"}}})}y(CA,Y);function DA(b,c,d,e,f){Yx.call(this,b,c,d,e,f);this.i={}}y(DA,Yx);
DA.prototype.Ta=function(b){var c=void 0!==b?w(b).toString():"";if(c in this.i)return this.i[c];b=DA.ca.Ta.call(this,b);if(2==this.state){if(256==b.width&&256==b.height)return this.i[c]=b;var d=Ni(256,256);d.drawImage(b,0,0);return this.i[c]=d.canvas}return b};function EA(b){b=b||{};this.f=void 0!==b.initialSize?b.initialSize:256;this.b=void 0!==b.maxSize?b.maxSize:void 0!==xa?xa:2048;this.a=void 0!==b.space?b.space:1;this.g=[new FA(this.f,this.a)];this.c=this.f;this.i=[new FA(this.c,this.a)]}EA.prototype.add=function(b,c,d,e,f,g){if(c+this.a>this.b||d+this.a>this.b)return null;e=GA(this,!1,b,c,d,e,g);if(!e)return null;b=GA(this,!0,b,c,d,void 0!==f?f:ue,g);return{offsetX:e.offsetX,offsetY:e.offsetY,image:e.image,Og:b.image}};
function GA(b,c,d,e,f,g,h){var k=c?b.i:b.g,m,n,p;n=0;for(p=k.length;n<p;++n){m=k[n];if(m=m.add(d,e,f,g,h))return m;m||n!==p-1||(c?(m=Math.min(2*b.c,b.b),b.c=m):(m=Math.min(2*b.f,b.b),b.f=m),m=new FA(m,b.a),k.push(m),++p)}}function FA(b,c){this.a=c;this.f=[{x:0,y:0,width:b,height:b}];this.c={};this.b=document.createElement("CANVAS");this.b.width=b;this.b.height=b;this.g=this.b.getContext("2d")}FA.prototype.get=function(b){return Rb(this.c,b,null)};
FA.prototype.add=function(b,c,d,e,f){var g,h,k;h=0;for(k=this.f.length;h<k;++h)if(g=this.f[h],g.width>=c+this.a&&g.height>=d+this.a)return k={offsetX:g.x+this.a,offsetY:g.y+this.a,image:this.b},this.c[b]=k,e.call(f,this.g,g.x+this.a,g.y+this.a),b=h,c=c+this.a,d=d+this.a,f=e=void 0,g.width-c>g.height-d?(e={x:g.x+c,y:g.y,width:g.width-c,height:g.height},f={x:g.x,y:g.y+d,width:c,height:g.height-d},HA(this,b,e,f)):(e={x:g.x+c,y:g.y,width:g.width-c,height:d},f={x:g.x,y:g.y+d,width:g.width,height:g.height-
d},HA(this,b,e,f)),k;return null};function HA(b,c,d,e){c=[c,1];0<d.width&&0<d.height&&c.push(d);0<e.width&&0<e.height&&c.push(e);b.f.splice.apply(b.f,c)};function IA(b){this.v=this.c=this.g=null;this.o=void 0!==b.fill?b.fill:null;this.va=[0,0];this.a=b.points;this.b=void 0!==b.radius?b.radius:b.radius1;this.i=void 0!==b.radius2?b.radius2:this.b;this.l=void 0!==b.angle?b.angle:0;this.f=void 0!==b.stroke?b.stroke:null;this.na=this.U=this.O=null;var c=b.atlasManager,d="",e="",f=0,g=null,h,k=0;this.f&&(h=vg(this.f.a),k=this.f.f,void 0===k&&(k=1),g=this.f.b,Wi||(g=null),e=this.f.g,void 0===e&&(e="round"),d=this.f.c,void 0===d&&(d="round"),f=this.f.i,void 0===
f&&(f=10));var m=2*(this.b+k)+1,d={strokeStyle:h,Id:k,size:m,lineCap:d,lineDash:g,lineJoin:e,miterLimit:f};if(void 0===c){this.c=document.createElement("CANVAS");this.c.height=m;this.c.width=m;var c=m=this.c.width,n=this.c.getContext("2d");this.xh(d,n,0,0);this.o?this.v=this.c:(n=this.v=document.createElement("CANVAS"),n.height=d.size,n.width=d.size,n=n.getContext("2d"),this.wh(d,n,0,0))}else m=Math.round(m),(e=!this.o)&&(n=ua(this.wh,this,d)),f=this.Jb(),n=c.add(f,m,m,ua(this.xh,this,d),n),this.c=
n.image,this.va=[n.offsetX,n.offsetY],c=n.image.width,this.v=e?n.Og:this.c;this.O=[m/2,m/2];this.U=[m,m];this.na=[c,c];sk.call(this,{opacity:1,rotateWithView:!1,rotation:void 0!==b.rotation?b.rotation:0,scale:1,snapToPixel:void 0!==b.snapToPixel?b.snapToPixel:!0})}y(IA,sk);l=IA.prototype;l.Xb=function(){return this.O};l.jn=function(){return this.l};l.kn=function(){return this.o};l.Ae=function(){return this.v};l.gc=function(){return this.c};l.rd=function(){return this.na};l.Cd=function(){return 2};
l.Da=function(){return this.va};l.ln=function(){return this.a};l.mn=function(){return this.b};l.jk=function(){return this.i};l.Cb=function(){return this.U};l.nn=function(){return this.f};l.tf=za;l.load=za;l.Xf=za;
l.xh=function(b,c,d,e){var f;c.setTransform(1,0,0,1,0,0);c.translate(d,e);c.beginPath();this.i!==this.b&&(this.a*=2);for(d=0;d<=this.a;d++)e=2*d*Math.PI/this.a-Math.PI/2+this.l,f=0===d%2?this.b:this.i,c.lineTo(b.size/2+f*Math.cos(e),b.size/2+f*Math.sin(e));this.o&&(c.fillStyle=vg(this.o.a),c.fill());this.f&&(c.strokeStyle=b.strokeStyle,c.lineWidth=b.Id,b.lineDash&&c.setLineDash(b.lineDash),c.lineCap=b.lineCap,c.lineJoin=b.lineJoin,c.miterLimit=b.miterLimit,c.stroke());c.closePath()};
l.wh=function(b,c,d,e){c.setTransform(1,0,0,1,0,0);c.translate(d,e);c.beginPath();this.i!==this.b&&(this.a*=2);var f;for(d=0;d<=this.a;d++)f=2*d*Math.PI/this.a-Math.PI/2+this.l,e=0===d%2?this.b:this.i,c.lineTo(b.size/2+e*Math.cos(f),b.size/2+e*Math.sin(f));c.fillStyle=Ql;c.fill();this.f&&(c.strokeStyle=b.strokeStyle,c.lineWidth=b.Id,b.lineDash&&c.setLineDash(b.lineDash),c.stroke());c.closePath()};
l.Jb=function(){var b=this.f?this.f.Jb():"-",c=this.o?this.o.Jb():"-";this.g&&b==this.g[1]&&c==this.g[2]&&this.b==this.g[3]&&this.i==this.g[4]&&this.l==this.g[5]&&this.a==this.g[6]||(this.g=["r"+b+c+(void 0!==this.b?this.b.toString():"-")+(void 0!==this.i?this.i.toString():"-")+(void 0!==this.l?this.l.toString():"-")+(void 0!==this.a?this.a.toString():"-"),b,c,this.b,this.i,this.l,this.a]);return this.g[0]};u("ol.animation.bounce",function(b){var c=b.resolution,d=b.start?b.start:Date.now(),e=void 0!==b.duration?b.duration:1E3,f=b.easing?b.easing:Xf;return function(b,h){if(h.time<d)return h.animate=!0,h.viewHints[0]+=1,!0;if(h.time<d+e){var k=f((h.time-d)/e),m=c-h.viewState.resolution;h.animate=!0;h.viewState.resolution+=k*m;h.viewHints[0]+=1;return!0}return!1}},OPENLAYERS);u("ol.animation.pan",Yf,OPENLAYERS);u("ol.animation.rotate",Zf,OPENLAYERS);u("ol.animation.zoom",$f,OPENLAYERS);
u("ol.Attribution",mg,OPENLAYERS);mg.prototype.getHTML=mg.prototype.b;ng.prototype.element=ng.prototype.element;u("ol.Collection",og,OPENLAYERS);og.prototype.clear=og.prototype.clear;og.prototype.extend=og.prototype.uf;og.prototype.forEach=og.prototype.forEach;og.prototype.getArray=og.prototype.wl;og.prototype.item=og.prototype.item;og.prototype.getLength=og.prototype.$b;og.prototype.insertAt=og.prototype.le;og.prototype.pop=og.prototype.pop;og.prototype.push=og.prototype.push;
og.prototype.remove=og.prototype.remove;og.prototype.removeAt=og.prototype.Sf;og.prototype.setAt=og.prototype.Jo;u("ol.coordinate.add",pd,OPENLAYERS);u("ol.coordinate.createStringXY",function(b){return function(c){return xd(c,b)}},OPENLAYERS);u("ol.coordinate.format",sd,OPENLAYERS);u("ol.coordinate.rotate",ud,OPENLAYERS);u("ol.coordinate.toStringHDMS",function(b){return b?rd(b[1],"NS")+" "+rd(b[0],"EW"):""},OPENLAYERS);u("ol.coordinate.toStringXY",xd,OPENLAYERS);u("ol.DeviceOrientation",Mr,OPENLAYERS);
Mr.prototype.getAlpha=Mr.prototype.Fj;Mr.prototype.getBeta=Mr.prototype.Ij;Mr.prototype.getGamma=Mr.prototype.Oj;Mr.prototype.getHeading=Mr.prototype.xl;Mr.prototype.getTracking=Mr.prototype.Vg;Mr.prototype.setTracking=Mr.prototype.vf;u("ol.easing.easeIn",Tf,OPENLAYERS);u("ol.easing.easeOut",Uf,OPENLAYERS);u("ol.easing.inAndOut",Vf,OPENLAYERS);u("ol.easing.linear",Wf,OPENLAYERS);u("ol.easing.upAndDown",Xf,OPENLAYERS);u("ol.extent.boundingExtent",Ld,OPENLAYERS);u("ol.extent.buffer",Qd,OPENLAYERS);
u("ol.extent.containsCoordinate",Td,OPENLAYERS);u("ol.extent.containsExtent",Vd,OPENLAYERS);u("ol.extent.containsXY",Ud,OPENLAYERS);u("ol.extent.createEmpty",Md,OPENLAYERS);u("ol.extent.equals",ae,OPENLAYERS);u("ol.extent.extend",be,OPENLAYERS);u("ol.extent.getBottomLeft",de,OPENLAYERS);u("ol.extent.getBottomRight",ee,OPENLAYERS);u("ol.extent.getCenter",le,OPENLAYERS);u("ol.extent.getHeight",ke,OPENLAYERS);u("ol.extent.getIntersection",ne,OPENLAYERS);
u("ol.extent.getSize",function(b){return[b[2]-b[0],b[3]-b[1]]},OPENLAYERS);u("ol.extent.getTopLeft",ge,OPENLAYERS);u("ol.extent.getTopRight",fe,OPENLAYERS);u("ol.extent.getWidth",je,OPENLAYERS);u("ol.extent.intersects",oe,OPENLAYERS);u("ol.extent.isEmpty",ie,OPENLAYERS);u("ol.extent.applyTransform",qe,OPENLAYERS);u("ol.Feature",pn,OPENLAYERS);pn.prototype.clone=pn.prototype.clone;pn.prototype.getGeometry=pn.prototype.X;pn.prototype.getId=pn.prototype.Oa;pn.prototype.getGeometryName=pn.prototype.Qj;
pn.prototype.getStyle=pn.prototype.zl;pn.prototype.getStyleFunction=pn.prototype.ac;pn.prototype.setGeometry=pn.prototype.Ma;pn.prototype.setStyle=pn.prototype.wf;pn.prototype.setId=pn.prototype.jc;pn.prototype.setGeometryName=pn.prototype.yc;u("ol.featureloader.tile",sp,OPENLAYERS);u("ol.featureloader.xhr",tp,OPENLAYERS);u("ol.Geolocation",Mx,OPENLAYERS);Mx.prototype.getAccuracy=Mx.prototype.Dj;Mx.prototype.getAccuracyGeometry=Mx.prototype.Ej;Mx.prototype.getAltitude=Mx.prototype.Gj;
Mx.prototype.getAltitudeAccuracy=Mx.prototype.Hj;Mx.prototype.getHeading=Mx.prototype.Bl;Mx.prototype.getPosition=Mx.prototype.Cl;Mx.prototype.getProjection=Mx.prototype.Wg;Mx.prototype.getSpeed=Mx.prototype.lk;Mx.prototype.getTracking=Mx.prototype.Xg;Mx.prototype.getTrackingOptions=Mx.prototype.Ig;Mx.prototype.setProjection=Mx.prototype.Yg;Mx.prototype.setTracking=Mx.prototype.re;Mx.prototype.setTrackingOptions=Mx.prototype.hi;u("ol.Graticule",Sx,OPENLAYERS);Sx.prototype.getMap=Sx.prototype.Fl;
Sx.prototype.getMeridians=Sx.prototype.Zj;Sx.prototype.getParallels=Sx.prototype.fk;Sx.prototype.setMap=Sx.prototype.setMap;u("ol.has.DEVICE_PIXEL_RATIO",Vi,OPENLAYERS);u("ol.has.CANVAS",Xi,OPENLAYERS);u("ol.has.DEVICE_ORIENTATION",Yi,OPENLAYERS);u("ol.has.GEOLOCATION",Zi,OPENLAYERS);u("ol.has.TOUCH",$i,OPENLAYERS);u("ol.has.WEBGL",Ui,OPENLAYERS);Xx.prototype.getImage=Xx.prototype.a;Yx.prototype.getImage=Yx.prototype.Ta;u("ol.Kinetic",Jk,OPENLAYERS);u("ol.loadingstrategy.all",up,OPENLAYERS);
u("ol.loadingstrategy.bbox",function(b){return[b]},OPENLAYERS);u("ol.loadingstrategy.tile",function(b){return function(c,d){var e=Ih(b,d),f=Dh(b,c,e),g=[],e=[e,0,0];for(e[1]=f.a;e[1]<=f.c;++e[1])for(e[2]=f.f;e[2]<=f.b;++e[2])g.push(b.Aa(e));return g}},OPENLAYERS);u("ol.Map",S,OPENLAYERS);S.prototype.addControl=S.prototype.kj;S.prototype.addInteraction=S.prototype.lj;S.prototype.addLayer=S.prototype.kg;S.prototype.addOverlay=S.prototype.lg;S.prototype.beforeRender=S.prototype.Na;
S.prototype.forEachFeatureAtPixel=S.prototype.pd;S.prototype.forEachLayerAtPixel=S.prototype.Jl;S.prototype.hasFeatureAtPixel=S.prototype.bl;S.prototype.getEventCoordinate=S.prototype.Mj;S.prototype.getEventPixel=S.prototype.$d;S.prototype.getTarget=S.prototype.xf;S.prototype.getTargetElement=S.prototype.Mc;S.prototype.getCoordinateFromPixel=S.prototype.Ga;S.prototype.getControls=S.prototype.Kj;S.prototype.getOverlays=S.prototype.dk;S.prototype.getOverlayById=S.prototype.ck;
S.prototype.getInteractions=S.prototype.Rj;S.prototype.getLayerGroup=S.prototype.rc;S.prototype.getLayers=S.prototype.Zg;S.prototype.getPixelFromCoordinate=S.prototype.Pa;S.prototype.getSize=S.prototype.Sa;S.prototype.getView=S.prototype.aa;S.prototype.getViewport=S.prototype.sk;S.prototype.renderSync=S.prototype.Fo;S.prototype.render=S.prototype.render;S.prototype.removeControl=S.prototype.yo;S.prototype.removeInteraction=S.prototype.zo;S.prototype.removeLayer=S.prototype.Bo;
S.prototype.removeOverlay=S.prototype.Co;S.prototype.setLayerGroup=S.prototype.$h;S.prototype.setSize=S.prototype.Vf;S.prototype.setTarget=S.prototype.Kl;S.prototype.setView=S.prototype.To;S.prototype.updateSize=S.prototype.Vc;Kj.prototype.originalEvent=Kj.prototype.originalEvent;Kj.prototype.pixel=Kj.prototype.pixel;Kj.prototype.coordinate=Kj.prototype.coordinate;Kj.prototype.dragging=Kj.prototype.dragging;Kj.prototype.preventDefault=Kj.prototype.preventDefault;Kj.prototype.stopPropagation=Kj.prototype.b;
nh.prototype.map=nh.prototype.map;nh.prototype.frameState=nh.prototype.frameState;fd.prototype.key=fd.prototype.key;fd.prototype.oldValue=fd.prototype.oldValue;u("ol.Object",gd,OPENLAYERS);gd.prototype.get=gd.prototype.get;gd.prototype.getKeys=gd.prototype.P;gd.prototype.getProperties=gd.prototype.R;gd.prototype.set=gd.prototype.set;gd.prototype.setProperties=gd.prototype.I;gd.prototype.unset=gd.prototype.S;u("ol.Observable",dd,OPENLAYERS);u("ol.Observable.unByKey",ed,OPENLAYERS);
dd.prototype.changed=dd.prototype.u;dd.prototype.dispatchEvent=dd.prototype.s;dd.prototype.getRevision=dd.prototype.L;dd.prototype.on=dd.prototype.H;dd.prototype.once=dd.prototype.M;dd.prototype.un=dd.prototype.K;dd.prototype.unByKey=dd.prototype.N;u("ol.inherits",y,OPENLAYERS);u("ol.Overlay",jr,OPENLAYERS);jr.prototype.getElement=jr.prototype.se;jr.prototype.getId=jr.prototype.Oa;jr.prototype.getMap=jr.prototype.te;jr.prototype.getOffset=jr.prototype.Gg;jr.prototype.getPosition=jr.prototype.$g;
jr.prototype.getPositioning=jr.prototype.Hg;jr.prototype.setElement=jr.prototype.Xh;jr.prototype.setMap=jr.prototype.setMap;jr.prototype.setOffset=jr.prototype.bi;jr.prototype.setPosition=jr.prototype.yf;jr.prototype.setPositioning=jr.prototype.ei;u("ol.render.toContext",function(b,c){var d=b.canvas,e=c?c:{},f=e.pixelRatio||Vi;if(e=e.size)d.width=e[0]*f,d.height=e[1]*f,d.style.width=e[0]+"px",d.style.height=e[1]+"px";d=[0,0,d.width,d.height];e=gk(Bd(),0,0,f,f,0,0,0);return new gm(b,f,d,e,0)},OPENLAYERS);
u("ol.size.toSize",md,OPENLAYERS);uh.prototype.getTileCoord=uh.prototype.g;Co.prototype.getFormat=Co.prototype.Ll;Co.prototype.setLoader=Co.prototype.ai;u("ol.View",Nf,OPENLAYERS);Nf.prototype.constrainCenter=Nf.prototype.Xd;Nf.prototype.constrainResolution=Nf.prototype.constrainResolution;Nf.prototype.constrainRotation=Nf.prototype.constrainRotation;Nf.prototype.getCenter=Nf.prototype.Ua;Nf.prototype.calculateExtent=Nf.prototype.$c;Nf.prototype.getProjection=Nf.prototype.Ml;
Nf.prototype.getResolution=Nf.prototype.$;Nf.prototype.getRotation=Nf.prototype.Fa;Nf.prototype.getZoom=Nf.prototype.uk;Nf.prototype.fit=Nf.prototype.kf;Nf.prototype.centerOn=Nf.prototype.uj;Nf.prototype.rotate=Nf.prototype.rotate;Nf.prototype.setCenter=Nf.prototype.kb;Nf.prototype.setResolution=Nf.prototype.Ub;Nf.prototype.setRotation=Nf.prototype.ue;Nf.prototype.setZoom=Nf.prototype.Wo;u("ol.xml.getAllTextContent",Mo,OPENLAYERS);u("ol.xml.parse",fp,OPENLAYERS);rq.prototype.getGL=rq.prototype.Gn;
rq.prototype.useProgram=rq.prototype.He;u("ol.tilegrid.TileGrid",zh,OPENLAYERS);zh.prototype.getMaxZoom=zh.prototype.Eg;zh.prototype.getMinZoom=zh.prototype.Fg;zh.prototype.getOrigin=zh.prototype.Da;zh.prototype.getResolution=zh.prototype.$;zh.prototype.getResolutions=zh.prototype.zh;zh.prototype.getTileCoordExtent=zh.prototype.Aa;zh.prototype.getTileCoordForCoordAndResolution=zh.prototype.fe;zh.prototype.getTileCoordForCoordAndZ=zh.prototype.ge;zh.prototype.getTileSize=zh.prototype.Ka;
u("ol.tilegrid.createXYZ",Mh,OPENLAYERS);u("ol.tilegrid.WMTS",zA,OPENLAYERS);zA.prototype.getMatrixIds=zA.prototype.o;u("ol.tilegrid.WMTS.createFromCapabilitiesMatrixSet",AA,OPENLAYERS);u("ol.style.AtlasManager",EA,OPENLAYERS);u("ol.style.Circle",Zl,OPENLAYERS);Zl.prototype.getFill=Zl.prototype.en;Zl.prototype.getImage=Zl.prototype.gc;Zl.prototype.getRadius=Zl.prototype.fn;Zl.prototype.getStroke=Zl.prototype.gn;u("ol.style.Fill",Tl,OPENLAYERS);Tl.prototype.getColor=Tl.prototype.b;
Tl.prototype.setColor=Tl.prototype.c;u("ol.style.Icon",tk,OPENLAYERS);tk.prototype.getAnchor=tk.prototype.Xb;tk.prototype.getImage=tk.prototype.gc;tk.prototype.getOrigin=tk.prototype.Da;tk.prototype.getSrc=tk.prototype.hn;tk.prototype.getSize=tk.prototype.Cb;tk.prototype.load=tk.prototype.load;u("ol.style.Image",sk,OPENLAYERS);sk.prototype.getOpacity=sk.prototype.Be;sk.prototype.getRotateWithView=sk.prototype.de;sk.prototype.getRotation=sk.prototype.Ce;sk.prototype.getScale=sk.prototype.De;
sk.prototype.getSnapToPixel=sk.prototype.ee;sk.prototype.setOpacity=sk.prototype.Ee;sk.prototype.setRotation=sk.prototype.Fe;sk.prototype.setScale=sk.prototype.Ge;u("ol.style.RegularShape",IA,OPENLAYERS);IA.prototype.getAnchor=IA.prototype.Xb;IA.prototype.getAngle=IA.prototype.jn;IA.prototype.getFill=IA.prototype.kn;IA.prototype.getImage=IA.prototype.gc;IA.prototype.getOrigin=IA.prototype.Da;IA.prototype.getPoints=IA.prototype.ln;IA.prototype.getRadius=IA.prototype.mn;IA.prototype.getRadius2=IA.prototype.jk;
IA.prototype.getSize=IA.prototype.Cb;IA.prototype.getStroke=IA.prototype.nn;u("ol.style.Stroke",Yl,OPENLAYERS);Yl.prototype.getColor=Yl.prototype.pn;Yl.prototype.getLineCap=Yl.prototype.Uj;Yl.prototype.getLineDash=Yl.prototype.qn;Yl.prototype.getLineJoin=Yl.prototype.Vj;Yl.prototype.getMiterLimit=Yl.prototype.$j;Yl.prototype.getWidth=Yl.prototype.rn;Yl.prototype.setColor=Yl.prototype.sn;Yl.prototype.setLineCap=Yl.prototype.Oo;Yl.prototype.setLineDash=Yl.prototype.tn;Yl.prototype.setLineJoin=Yl.prototype.Po;
Yl.prototype.setMiterLimit=Yl.prototype.Qo;Yl.prototype.setWidth=Yl.prototype.Uo;u("ol.style.Style",$l,OPENLAYERS);$l.prototype.getGeometry=$l.prototype.X;$l.prototype.getGeometryFunction=$l.prototype.Pj;$l.prototype.getFill=$l.prototype.vn;$l.prototype.getImage=$l.prototype.wn;$l.prototype.getStroke=$l.prototype.xn;$l.prototype.getText=$l.prototype.Ca;$l.prototype.getZIndex=$l.prototype.yn;$l.prototype.setGeometry=$l.prototype.yh;$l.prototype.setZIndex=$l.prototype.zn;u("ol.style.Text",Wt,OPENLAYERS);
Wt.prototype.getFont=Wt.prototype.Nj;Wt.prototype.getOffsetX=Wt.prototype.ak;Wt.prototype.getOffsetY=Wt.prototype.bk;Wt.prototype.getFill=Wt.prototype.An;Wt.prototype.getRotation=Wt.prototype.Bn;Wt.prototype.getScale=Wt.prototype.Cn;Wt.prototype.getStroke=Wt.prototype.Dn;Wt.prototype.getText=Wt.prototype.Ca;Wt.prototype.getTextAlign=Wt.prototype.nk;Wt.prototype.getTextBaseline=Wt.prototype.pk;Wt.prototype.setFont=Wt.prototype.Lo;Wt.prototype.setOffsetX=Wt.prototype.ci;Wt.prototype.setOffsetY=Wt.prototype.di;
Wt.prototype.setFill=Wt.prototype.Ko;Wt.prototype.setRotation=Wt.prototype.En;Wt.prototype.setScale=Wt.prototype.Fn;Wt.prototype.setStroke=Wt.prototype.Ro;Wt.prototype.setText=Wt.prototype.fi;Wt.prototype.setTextAlign=Wt.prototype.gi;Wt.prototype.setTextBaseline=Wt.prototype.So;u("ol.Sphere",ze,OPENLAYERS);ze.prototype.geodesicArea=ze.prototype.f;ze.prototype.haversineDistance=ze.prototype.a;u("ol.source.BingMaps",Kz,OPENLAYERS);u("ol.source.BingMaps.TOS_ATTRIBUTION",Lz,OPENLAYERS);
u("ol.source.Cluster",Mz,OPENLAYERS);Mz.prototype.getSource=Mz.prototype.ga;u("ol.source.ImageCanvas",on,OPENLAYERS);u("ol.source.ImageMapGuide",Pz,OPENLAYERS);Pz.prototype.getParams=Pz.prototype.Hm;Pz.prototype.getImageLoadFunction=Pz.prototype.Gm;Pz.prototype.updateParams=Pz.prototype.Jm;Pz.prototype.setImageLoadFunction=Pz.prototype.Im;u("ol.source.Image",gn,OPENLAYERS);jn.prototype.image=jn.prototype.image;u("ol.source.ImageStatic",Qz,OPENLAYERS);u("ol.source.ImageVector",Mp,OPENLAYERS);
Mp.prototype.getSource=Mp.prototype.Km;Mp.prototype.getStyle=Mp.prototype.Lm;Mp.prototype.getStyleFunction=Mp.prototype.Mm;Mp.prototype.setStyle=Mp.prototype.ph;u("ol.source.ImageWMS",Rz,OPENLAYERS);Rz.prototype.getGetFeatureInfoUrl=Rz.prototype.Pm;Rz.prototype.getParams=Rz.prototype.Rm;Rz.prototype.getImageLoadFunction=Rz.prototype.Qm;Rz.prototype.getUrl=Rz.prototype.Sm;Rz.prototype.setImageLoadFunction=Rz.prototype.Tm;Rz.prototype.setUrl=Rz.prototype.Um;Rz.prototype.updateParams=Rz.prototype.Vm;
u("ol.source.MapQuest",Yz,OPENLAYERS);Yz.prototype.getLayer=Yz.prototype.l;u("ol.source.OSM",Wz,OPENLAYERS);u("ol.source.OSM.ATTRIBUTION",Xz,OPENLAYERS);u("ol.source.Raster",aA,OPENLAYERS);aA.prototype.setOperation=aA.prototype.v;fA.prototype.extent=fA.prototype.extent;fA.prototype.resolution=fA.prototype.resolution;fA.prototype.data=fA.prototype.data;u("ol.source.Source",wh,OPENLAYERS);wh.prototype.getAttributions=wh.prototype.sa;wh.prototype.getLogo=wh.prototype.qa;wh.prototype.getProjection=wh.prototype.ta;
wh.prototype.getState=wh.prototype.ua;wh.prototype.setAttributions=wh.prototype.ma;u("ol.source.Stamen",kA,OPENLAYERS);u("ol.source.TileArcGISRest",mA,OPENLAYERS);mA.prototype.getParams=mA.prototype.C;mA.prototype.updateParams=mA.prototype.V;u("ol.source.TileDebug",oA,OPENLAYERS);u("ol.source.TileImage",Y,OPENLAYERS);Y.prototype.setRenderReprojectionEdges=Y.prototype.vb;Y.prototype.setTileGridForProjection=Y.prototype.wb;u("ol.source.TileJSON",pA,OPENLAYERS);u("ol.source.Tile",Nh,OPENLAYERS);
Nh.prototype.getTileGrid=Nh.prototype.Ha;Qh.prototype.tile=Qh.prototype.tile;u("ol.source.TileUTFGrid",qA,OPENLAYERS);qA.prototype.getTemplate=qA.prototype.mk;qA.prototype.forDataAtCoordinateAndResolution=qA.prototype.zj;u("ol.source.TileWMS",vA,OPENLAYERS);vA.prototype.getGetFeatureInfoUrl=vA.prototype.Ym;vA.prototype.getParams=vA.prototype.Zm;vA.prototype.updateParams=vA.prototype.an;Wp.prototype.getTileLoadFunction=Wp.prototype.Xa;Wp.prototype.getTileUrlFunction=Wp.prototype.Ya;
Wp.prototype.getUrls=Wp.prototype.Za;Wp.prototype.setTileLoadFunction=Wp.prototype.eb;Wp.prototype.setTileUrlFunction=Wp.prototype.Ja;Wp.prototype.setUrl=Wp.prototype.Va;Wp.prototype.setUrls=Wp.prototype.Wa;u("ol.source.Vector",R,OPENLAYERS);R.prototype.addFeature=R.prototype.Bd;R.prototype.addFeatures=R.prototype.Ec;R.prototype.clear=R.prototype.clear;R.prototype.forEachFeature=R.prototype.sg;R.prototype.forEachFeatureInExtent=R.prototype.pb;R.prototype.forEachFeatureIntersectingExtent=R.prototype.tg;
R.prototype.getFeaturesCollection=R.prototype.zg;R.prototype.getFeatures=R.prototype.ze;R.prototype.getFeaturesAtCoordinate=R.prototype.yg;R.prototype.getFeaturesInExtent=R.prototype.mf;R.prototype.getClosestFeatureToCoordinate=R.prototype.vg;R.prototype.getExtent=R.prototype.J;R.prototype.getFeatureById=R.prototype.xg;R.prototype.removeFeature=R.prototype.Rc;Jp.prototype.feature=Jp.prototype.feature;u("ol.source.VectorTile",Xp,OPENLAYERS);u("ol.source.WMTS",Z,OPENLAYERS);
Z.prototype.getDimensions=Z.prototype.Lj;Z.prototype.getFormat=Z.prototype.bn;Z.prototype.getLayer=Z.prototype.cn;Z.prototype.getMatrixSet=Z.prototype.Yj;Z.prototype.getRequestEncoding=Z.prototype.kk;Z.prototype.getStyle=Z.prototype.dn;Z.prototype.getVersion=Z.prototype.rk;Z.prototype.updateDimensions=Z.prototype.cp;
u("ol.source.WMTS.optionsFromCapabilities",function(b,c){var d=fb(b.Contents.Layer,function(b){return b.Identifier==c.layer}),e=b.Contents.TileMatrixSet,f,g;f=1<d.TileMatrixSetLink.length?"projection"in c?gb(d.TileMatrixSetLink,function(b){return fb(e,function(c){return c.Identifier==b.TileMatrixSet}).SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/,"$1:$3")==c.projection}):gb(d.TileMatrixSetLink,function(b){return b.TileMatrixSet==c.matrixSet}):0;0>f&&(f=0);g=d.TileMatrixSetLink[f].TileMatrixSet;
var h=d.Format[0];"format"in c&&(h=c.format);f=gb(d.Style,function(b){return"style"in c?b.Title==c.style:b.isDefault});0>f&&(f=0);f=d.Style[f].Identifier;var k={};"Dimension"in d&&d.Dimension.forEach(function(b){var c=b.Identifier,d=b.Default;void 0===d&&(d=b.Value[0]);k[c]=d});var m=fb(b.Contents.TileMatrixSet,function(b){return b.Identifier==g}),n;n="projection"in c?Ee(c.projection):Ee(m.SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/,"$1:$3"));var p=d.WGS84BoundingBox,q,r;void 0!==p&&
(r=Ee("EPSG:4326").J(),r=p[0]==r[0]&&p[2]==r[2],q=Ze(p,"EPSG:4326",n),(p=n.J())&&(Vd(p,q)||(q=void 0)));var m=AA(m,q),t=[];q=c.requestEncoding;q=void 0!==q?q:"";if(b.hasOwnProperty("OperationsMetadata")&&b.OperationsMetadata.hasOwnProperty("GetTile")&&0!==q.indexOf("REST"))for(var d=b.OperationsMetadata.GetTile.DCP.HTTP.Get,p=0,x=d.length;p<x;++p){var z=fb(d[p].Constraint,function(b){return"GetEncoding"==b.name}).AllowedValues.Value;0<z.length&&vb(z,"KVP")&&(q="KVP",t.push(d[p].href))}else q="REST",
d.ResourceURL.forEach(function(b){"tile"==b.resourceType&&(h=b.format,t.push(b.template))});return{urls:t,layer:c.layer,matrixSet:g,format:h,projection:n,requestEncoding:q,tileGrid:m,style:f,dimensions:k,wrapX:r}},OPENLAYERS);u("ol.source.XYZ",Vz,OPENLAYERS);u("ol.source.Zoomify",CA,OPENLAYERS);bk.prototype.vectorContext=bk.prototype.vectorContext;bk.prototype.frameState=bk.prototype.frameState;bk.prototype.context=bk.prototype.context;bk.prototype.glContext=bk.prototype.glContext;
Sm.prototype.get=Sm.prototype.get;Sm.prototype.getExtent=Sm.prototype.J;Sm.prototype.getGeometry=Sm.prototype.X;Sm.prototype.getProperties=Sm.prototype.Cm;Sm.prototype.getType=Sm.prototype.W;u("ol.render.VectorContext",ak,OPENLAYERS);Oq.prototype.drawAsync=Oq.prototype.md;Oq.prototype.drawCircleGeometry=Oq.prototype.Gc;Oq.prototype.drawFeature=Oq.prototype.jf;Oq.prototype.drawGeometryCollectionGeometry=Oq.prototype.Yd;Oq.prototype.drawPointGeometry=Oq.prototype.Hb;
Oq.prototype.drawLineStringGeometry=Oq.prototype.Wb;Oq.prototype.drawMultiLineStringGeometry=Oq.prototype.Hc;Oq.prototype.drawMultiPointGeometry=Oq.prototype.Gb;Oq.prototype.drawMultiPolygonGeometry=Oq.prototype.Ic;Oq.prototype.drawPolygonGeometry=Oq.prototype.Jc;Oq.prototype.drawText=Oq.prototype.Ib;Oq.prototype.setFillStrokeStyle=Oq.prototype.bb;Oq.prototype.setImageStyle=Oq.prototype.ub;Oq.prototype.setTextStyle=Oq.prototype.cb;gm.prototype.drawAsync=gm.prototype.md;
gm.prototype.drawCircleGeometry=gm.prototype.Gc;gm.prototype.drawFeature=gm.prototype.jf;gm.prototype.drawPointGeometry=gm.prototype.Hb;gm.prototype.drawMultiPointGeometry=gm.prototype.Gb;gm.prototype.drawLineStringGeometry=gm.prototype.Wb;gm.prototype.drawMultiLineStringGeometry=gm.prototype.Hc;gm.prototype.drawPolygonGeometry=gm.prototype.Jc;gm.prototype.drawMultiPolygonGeometry=gm.prototype.Ic;gm.prototype.setFillStrokeStyle=gm.prototype.bb;gm.prototype.setImageStyle=gm.prototype.ub;
gm.prototype.setTextStyle=gm.prototype.cb;u("ol.proj.common.add",Ol,OPENLAYERS);u("ol.proj.METERS_PER_UNIT",Be,OPENLAYERS);u("ol.proj.Projection",Ce,OPENLAYERS);Ce.prototype.getCode=Ce.prototype.Jj;Ce.prototype.getExtent=Ce.prototype.J;Ce.prototype.getUnits=Ce.prototype.Am;Ce.prototype.getMetersPerUnit=Ce.prototype.Kc;Ce.prototype.getWorldExtent=Ce.prototype.tk;Ce.prototype.isGlobal=Ce.prototype.gl;Ce.prototype.setGlobal=Ce.prototype.No;Ce.prototype.setExtent=Ce.prototype.Bm;
Ce.prototype.setWorldExtent=Ce.prototype.Vo;Ce.prototype.setGetPointResolution=Ce.prototype.Mo;Ce.prototype.getPointResolution=Ce.prototype.getPointResolution;u("ol.proj.addEquivalentProjections",Fe,OPENLAYERS);u("ol.proj.addProjection",Se,OPENLAYERS);u("ol.proj.addCoordinateTransforms",Ge,OPENLAYERS);u("ol.proj.fromLonLat",function(b,c){return Ye(b,"EPSG:4326",void 0!==c?c:"EPSG:3857")},OPENLAYERS);u("ol.proj.toLonLat",function(b,c){return Ye(b,void 0!==c?c:"EPSG:3857","EPSG:4326")},OPENLAYERS);
u("ol.proj.get",Ee,OPENLAYERS);u("ol.proj.getTransform",We,OPENLAYERS);u("ol.proj.transform",Ye,OPENLAYERS);u("ol.proj.transformExtent",Ze,OPENLAYERS);u("ol.layer.Heatmap",X,OPENLAYERS);X.prototype.getBlur=X.prototype.ug;X.prototype.getGradient=X.prototype.Bg;X.prototype.getRadius=X.prototype.jh;X.prototype.setBlur=X.prototype.Vh;X.prototype.setGradient=X.prototype.Zh;X.prototype.setRadius=X.prototype.kh;u("ol.layer.Image",Pl,OPENLAYERS);Pl.prototype.getSource=Pl.prototype.ea;
u("ol.layer.Layer",ck,OPENLAYERS);ck.prototype.getSource=ck.prototype.ea;ck.prototype.setMap=ck.prototype.setMap;ck.prototype.setSource=ck.prototype.zc;u("ol.layer.Base",Yj,OPENLAYERS);Yj.prototype.getExtent=Yj.prototype.J;Yj.prototype.getMaxResolution=Yj.prototype.Nb;Yj.prototype.getMinResolution=Yj.prototype.Ob;Yj.prototype.getOpacity=Yj.prototype.Rb;Yj.prototype.getVisible=Yj.prototype.rb;Yj.prototype.getZIndex=Yj.prototype.Sb;Yj.prototype.setExtent=Yj.prototype.cc;
Yj.prototype.setMaxResolution=Yj.prototype.kc;Yj.prototype.setMinResolution=Yj.prototype.lc;Yj.prototype.setOpacity=Yj.prototype.dc;Yj.prototype.setVisible=Yj.prototype.ec;Yj.prototype.setZIndex=Yj.prototype.fc;u("ol.layer.Group",Hl,OPENLAYERS);Hl.prototype.getLayers=Hl.prototype.Qc;Hl.prototype.setLayers=Hl.prototype.ih;u("ol.layer.Tile",G,OPENLAYERS);G.prototype.getPreload=G.prototype.a;G.prototype.getSource=G.prototype.ea;G.prototype.setPreload=G.prototype.c;
G.prototype.getUseInterimTilesOnError=G.prototype.b;G.prototype.setUseInterimTilesOnError=G.prototype.g;u("ol.layer.Vector",H,OPENLAYERS);H.prototype.getSource=H.prototype.ea;H.prototype.getStyle=H.prototype.C;H.prototype.getStyleFunction=H.prototype.D;H.prototype.setStyle=H.prototype.c;u("ol.layer.VectorTile",I,OPENLAYERS);I.prototype.getPreload=I.prototype.g;I.prototype.getSource=I.prototype.ea;I.prototype.getUseInterimTilesOnError=I.prototype.U;I.prototype.setPreload=I.prototype.T;
I.prototype.setUseInterimTilesOnError=I.prototype.V;u("ol.interaction.DoubleClickZoom",Pk,OPENLAYERS);u("ol.interaction.DoubleClickZoom.handleEvent",Qk,OPENLAYERS);u("ol.interaction.DragAndDrop",qy,OPENLAYERS);u("ol.interaction.DragAndDrop.handleEvent",te,OPENLAYERS);ry.prototype.features=ry.prototype.features;ry.prototype.file=ry.prototype.file;ry.prototype.projection=ry.prototype.projection;ll.prototype.coordinate=ll.prototype.coordinate;u("ol.interaction.DragBox",ml,OPENLAYERS);
ml.prototype.getGeometry=ml.prototype.X;u("ol.interaction.DragPan",al,OPENLAYERS);u("ol.interaction.DragRotateAndZoom",uy,OPENLAYERS);u("ol.interaction.DragRotate",el,OPENLAYERS);u("ol.interaction.DragZoom",rl,OPENLAYERS);yy.prototype.feature=yy.prototype.feature;u("ol.interaction.Draw",zy,OPENLAYERS);u("ol.interaction.Draw.handleEvent",By,OPENLAYERS);zy.prototype.removeLastPoint=zy.prototype.Ao;zy.prototype.finishDrawing=zy.prototype.od;zy.prototype.extend=zy.prototype.fm;
u("ol.interaction.Draw.createRegularPolygon",function(b,c){return function(d,e){var f=d[0],g=d[1],h=Math.sqrt(vd(f,g)),k=e?e:Lf(new Nx(f),b);Mf(k,f,h,c?c:Math.atan((g[1]-f[1])/(g[0]-f[0])));return k}},OPENLAYERS);u("ol.interaction.Interaction",Lk,OPENLAYERS);Lk.prototype.getActive=Lk.prototype.b;Lk.prototype.getMap=Lk.prototype.i;Lk.prototype.setActive=Lk.prototype.g;u("ol.interaction.defaults",Gl,OPENLAYERS);u("ol.interaction.KeyboardPan",sl,OPENLAYERS);
u("ol.interaction.KeyboardPan.handleEvent",tl,OPENLAYERS);u("ol.interaction.KeyboardZoom",ul,OPENLAYERS);u("ol.interaction.KeyboardZoom.handleEvent",vl,OPENLAYERS);Py.prototype.features=Py.prototype.features;Py.prototype.mapBrowserPointerEvent=Py.prototype.mapBrowserPointerEvent;u("ol.interaction.Modify",Qy,OPENLAYERS);u("ol.interaction.Modify.handleEvent",Ty,OPENLAYERS);u("ol.interaction.MouseWheelZoom",wl,OPENLAYERS);u("ol.interaction.MouseWheelZoom.handleEvent",xl,OPENLAYERS);
wl.prototype.setMouseAnchor=wl.prototype.D;u("ol.interaction.PinchRotate",yl,OPENLAYERS);u("ol.interaction.PinchZoom",Cl,OPENLAYERS);u("ol.interaction.Pointer",Yk,OPENLAYERS);u("ol.interaction.Pointer.handleEvent",Zk,OPENLAYERS);cz.prototype.selected=cz.prototype.selected;cz.prototype.deselected=cz.prototype.deselected;cz.prototype.mapBrowserEvent=cz.prototype.mapBrowserEvent;u("ol.interaction.Select",dz,OPENLAYERS);dz.prototype.getFeatures=dz.prototype.pm;dz.prototype.getLayer=dz.prototype.qm;
u("ol.interaction.Select.handleEvent",ez,OPENLAYERS);dz.prototype.setMap=dz.prototype.setMap;u("ol.interaction.Snap",gz,OPENLAYERS);gz.prototype.addFeature=gz.prototype.xd;gz.prototype.removeFeature=gz.prototype.yd;kz.prototype.features=kz.prototype.features;kz.prototype.coordinate=kz.prototype.coordinate;u("ol.interaction.Translate",lz,OPENLAYERS);u("ol.geom.Circle",Nx,OPENLAYERS);Nx.prototype.clone=Nx.prototype.clone;Nx.prototype.getCenter=Nx.prototype.wd;Nx.prototype.getRadius=Nx.prototype.zf;
Nx.prototype.getType=Nx.prototype.W;Nx.prototype.intersectsExtent=Nx.prototype.Ea;Nx.prototype.setCenter=Nx.prototype.Yl;Nx.prototype.setCenterAndRadius=Nx.prototype.Uf;Nx.prototype.setRadius=Nx.prototype.Zl;Nx.prototype.transform=Nx.prototype.lb;u("ol.geom.Geometry",$e,OPENLAYERS);$e.prototype.getClosestPoint=$e.prototype.qb;$e.prototype.getExtent=$e.prototype.J;$e.prototype.simplify=$e.prototype.xb;$e.prototype.transform=$e.prototype.lb;u("ol.geom.GeometryCollection",gs,OPENLAYERS);
gs.prototype.clone=gs.prototype.clone;gs.prototype.getGeometries=gs.prototype.Ag;gs.prototype.getType=gs.prototype.W;gs.prototype.intersectsExtent=gs.prototype.Ea;gs.prototype.setGeometries=gs.prototype.Yh;gs.prototype.applyTransform=gs.prototype.pc;gs.prototype.translate=gs.prototype.Pc;u("ol.geom.LinearRing",vf,OPENLAYERS);vf.prototype.clone=vf.prototype.clone;vf.prototype.getArea=vf.prototype.bm;vf.prototype.getCoordinates=vf.prototype.Z;vf.prototype.getType=vf.prototype.W;
vf.prototype.setCoordinates=vf.prototype.la;u("ol.geom.LineString",T,OPENLAYERS);T.prototype.appendCoordinate=T.prototype.mj;T.prototype.clone=T.prototype.clone;T.prototype.forEachSegment=T.prototype.Cj;T.prototype.getCoordinateAtM=T.prototype.$l;T.prototype.getCoordinates=T.prototype.Z;T.prototype.getLength=T.prototype.am;T.prototype.getType=T.prototype.W;T.prototype.intersectsExtent=T.prototype.Ea;T.prototype.setCoordinates=T.prototype.la;u("ol.geom.MultiLineString",U,OPENLAYERS);
U.prototype.appendLineString=U.prototype.nj;U.prototype.clone=U.prototype.clone;U.prototype.getCoordinateAtM=U.prototype.cm;U.prototype.getCoordinates=U.prototype.Z;U.prototype.getLineString=U.prototype.Wj;U.prototype.getLineStrings=U.prototype.sd;U.prototype.getType=U.prototype.W;U.prototype.intersectsExtent=U.prototype.Ea;U.prototype.setCoordinates=U.prototype.la;u("ol.geom.MultiPoint",Xr,OPENLAYERS);Xr.prototype.appendPoint=Xr.prototype.pj;Xr.prototype.clone=Xr.prototype.clone;
Xr.prototype.getCoordinates=Xr.prototype.Z;Xr.prototype.getPoint=Xr.prototype.gk;Xr.prototype.getPoints=Xr.prototype.ve;Xr.prototype.getType=Xr.prototype.W;Xr.prototype.intersectsExtent=Xr.prototype.Ea;Xr.prototype.setCoordinates=Xr.prototype.la;u("ol.geom.MultiPolygon",V,OPENLAYERS);V.prototype.appendPolygon=V.prototype.qj;V.prototype.clone=V.prototype.clone;V.prototype.getArea=V.prototype.dm;V.prototype.getCoordinates=V.prototype.Z;V.prototype.getInteriorPoints=V.prototype.Tj;
V.prototype.getPolygon=V.prototype.ik;V.prototype.getPolygons=V.prototype.ce;V.prototype.getType=V.prototype.W;V.prototype.intersectsExtent=V.prototype.Ea;V.prototype.setCoordinates=V.prototype.la;u("ol.geom.Point",E,OPENLAYERS);E.prototype.clone=E.prototype.clone;E.prototype.getCoordinates=E.prototype.Z;E.prototype.getType=E.prototype.W;E.prototype.intersectsExtent=E.prototype.Ea;E.prototype.setCoordinates=E.prototype.la;u("ol.geom.Polygon",F,OPENLAYERS);F.prototype.appendLinearRing=F.prototype.oj;
F.prototype.clone=F.prototype.clone;F.prototype.getArea=F.prototype.em;F.prototype.getCoordinates=F.prototype.Z;F.prototype.getInteriorPoint=F.prototype.Sj;F.prototype.getLinearRingCount=F.prototype.Xj;F.prototype.getLinearRing=F.prototype.Dg;F.prototype.getLinearRings=F.prototype.be;F.prototype.getType=F.prototype.W;F.prototype.intersectsExtent=F.prototype.Ea;F.prototype.setCoordinates=F.prototype.la;u("ol.geom.Polygon.circular",Jf,OPENLAYERS);u("ol.geom.Polygon.fromExtent",Kf,OPENLAYERS);
u("ol.geom.Polygon.fromCircle",Lf,OPENLAYERS);u("ol.geom.SimpleGeometry",bf,OPENLAYERS);bf.prototype.getFirstCoordinate=bf.prototype.Kb;bf.prototype.getLastCoordinate=bf.prototype.Lb;bf.prototype.getLayout=bf.prototype.Mb;bf.prototype.applyTransform=bf.prototype.pc;bf.prototype.translate=bf.prototype.Pc;u("ol.format.EsriJSON",$r,OPENLAYERS);$r.prototype.readFeature=$r.prototype.Tb;$r.prototype.readFeatures=$r.prototype.Ba;$r.prototype.readGeometry=$r.prototype.Tc;$r.prototype.readProjection=$r.prototype.Ia;
$r.prototype.writeGeometry=$r.prototype.Xc;$r.prototype.writeGeometryObject=$r.prototype.Ue;$r.prototype.writeFeature=$r.prototype.Kd;$r.prototype.writeFeatureObject=$r.prototype.Wc;$r.prototype.writeFeatures=$r.prototype.Vb;$r.prototype.writeFeaturesObject=$r.prototype.Se;u("ol.format.Feature",Nr,OPENLAYERS);u("ol.format.GeoJSON",ks,OPENLAYERS);ks.prototype.readFeature=ks.prototype.Tb;ks.prototype.readFeatures=ks.prototype.Ba;ks.prototype.readGeometry=ks.prototype.Tc;
ks.prototype.readProjection=ks.prototype.Ia;ks.prototype.writeFeature=ks.prototype.Kd;ks.prototype.writeFeatureObject=ks.prototype.Wc;ks.prototype.writeFeatures=ks.prototype.Vb;ks.prototype.writeFeaturesObject=ks.prototype.Se;ks.prototype.writeGeometry=ks.prototype.Xc;ks.prototype.writeGeometryObject=ks.prototype.Ue;u("ol.format.GPX",Os,OPENLAYERS);Os.prototype.readFeature=Os.prototype.Tb;Os.prototype.readFeatures=Os.prototype.Ba;Os.prototype.readProjection=Os.prototype.Ia;
Os.prototype.writeFeatures=Os.prototype.Vb;Os.prototype.writeFeaturesNode=Os.prototype.f;u("ol.format.IGC",yt,OPENLAYERS);yt.prototype.readFeature=yt.prototype.Tb;yt.prototype.readFeatures=yt.prototype.Ba;yt.prototype.readProjection=yt.prototype.Ia;u("ol.format.KML",Xt,OPENLAYERS);Xt.prototype.readFeature=Xt.prototype.Tb;Xt.prototype.readFeatures=Xt.prototype.Ba;Xt.prototype.readName=Xt.prototype.po;Xt.prototype.readNetworkLinks=Xt.prototype.qo;Xt.prototype.readProjection=Xt.prototype.Ia;
Xt.prototype.writeFeatures=Xt.prototype.Vb;Xt.prototype.writeFeaturesNode=Xt.prototype.f;u("ol.format.MVT",Lv,OPENLAYERS);Lv.prototype.setLayers=Lv.prototype.g;u("ol.format.OSMXML",Nv,OPENLAYERS);Nv.prototype.readFeatures=Nv.prototype.Ba;Nv.prototype.readProjection=Nv.prototype.Ia;u("ol.format.Polyline",lw,OPENLAYERS);u("ol.format.Polyline.encodeDeltas",mw,OPENLAYERS);u("ol.format.Polyline.decodeDeltas",ow,OPENLAYERS);u("ol.format.Polyline.encodeFloats",nw,OPENLAYERS);
u("ol.format.Polyline.decodeFloats",pw,OPENLAYERS);lw.prototype.readFeature=lw.prototype.Tb;lw.prototype.readFeatures=lw.prototype.Ba;lw.prototype.readGeometry=lw.prototype.Tc;lw.prototype.readProjection=lw.prototype.Ia;lw.prototype.writeGeometry=lw.prototype.Xc;u("ol.format.TopoJSON",qw,OPENLAYERS);qw.prototype.readFeatures=qw.prototype.Ba;qw.prototype.readProjection=qw.prototype.Ia;u("ol.format.WFS",ww,OPENLAYERS);ww.prototype.readFeatures=ww.prototype.Ba;ww.prototype.readTransactionResponse=ww.prototype.j;
ww.prototype.readFeatureCollectionMetadata=ww.prototype.i;ww.prototype.writeGetFeature=ww.prototype.l;ww.prototype.writeTransaction=ww.prototype.B;ww.prototype.readProjection=ww.prototype.Ia;u("ol.format.WKT",Jw,OPENLAYERS);Jw.prototype.readFeature=Jw.prototype.Tb;Jw.prototype.readFeatures=Jw.prototype.Ba;Jw.prototype.readGeometry=Jw.prototype.Tc;Jw.prototype.writeFeature=Jw.prototype.Kd;Jw.prototype.writeFeatures=Jw.prototype.Vb;Jw.prototype.writeGeometry=Jw.prototype.Xc;
u("ol.format.WMSCapabilities",ax,OPENLAYERS);ax.prototype.read=ax.prototype.read;u("ol.format.WMSGetFeatureInfo",xx,OPENLAYERS);xx.prototype.readFeatures=xx.prototype.Ba;u("ol.format.WMTSCapabilities",yx,OPENLAYERS);yx.prototype.read=yx.prototype.read;u("ol.format.GML2",Es,OPENLAYERS);u("ol.format.GML3",Fs,OPENLAYERS);Fs.prototype.writeGeometryNode=Fs.prototype.o;Fs.prototype.writeFeatures=Fs.prototype.Vb;Fs.prototype.writeFeaturesNode=Fs.prototype.f;u("ol.format.GML",Fs,OPENLAYERS);
Fs.prototype.writeFeatures=Fs.prototype.Vb;Fs.prototype.writeFeaturesNode=Fs.prototype.f;ss.prototype.readFeatures=ss.prototype.Ba;u("ol.events.condition.altKeyOnly",function(b){b=b.a;return b.f&&!b.l&&!b.c},OPENLAYERS);u("ol.events.condition.altShiftKeysOnly",Rk,OPENLAYERS);u("ol.events.condition.always",te,OPENLAYERS);u("ol.events.condition.click",function(b){return b.type==Oj},OPENLAYERS);u("ol.events.condition.never",se,OPENLAYERS);u("ol.events.condition.pointerMove",Sk,OPENLAYERS);
u("ol.events.condition.singleClick",Tk,OPENLAYERS);u("ol.events.condition.doubleClick",function(b){return b.type==Pj},OPENLAYERS);u("ol.events.condition.noModifierKeys",Uk,OPENLAYERS);u("ol.events.condition.platformModifierKeyOnly",function(b){b=b.a;return!b.f&&b.l&&!b.c},OPENLAYERS);u("ol.events.condition.shiftKeyOnly",Vk,OPENLAYERS);u("ol.events.condition.targetNotEditable",Wk,OPENLAYERS);u("ol.events.condition.mouseOnly",Xk,OPENLAYERS);u("ol.control.Attribution",Rh,OPENLAYERS);
u("ol.control.Attribution.render",Sh,OPENLAYERS);Rh.prototype.getCollapsible=Rh.prototype.Ol;Rh.prototype.setCollapsible=Rh.prototype.Rl;Rh.prototype.setCollapsed=Rh.prototype.Ql;Rh.prototype.getCollapsed=Rh.prototype.Nl;u("ol.control.Control",oh,OPENLAYERS);oh.prototype.getMap=oh.prototype.g;oh.prototype.setMap=oh.prototype.setMap;oh.prototype.setTarget=oh.prototype.c;u("ol.control.defaults",Xh,OPENLAYERS);u("ol.control.FullScreen",bi,OPENLAYERS);u("ol.control.MousePosition",di,OPENLAYERS);
u("ol.control.MousePosition.render",ei,OPENLAYERS);di.prototype.getCoordinateFormat=di.prototype.wg;di.prototype.getProjection=di.prototype.ah;di.prototype.setCoordinateFormat=di.prototype.Wh;di.prototype.setProjection=di.prototype.bh;u("ol.control.OverviewMap",nr,OPENLAYERS);u("ol.control.OverviewMap.render",or,OPENLAYERS);nr.prototype.getCollapsible=nr.prototype.Ul;nr.prototype.setCollapsible=nr.prototype.Xl;nr.prototype.setCollapsed=nr.prototype.Wl;nr.prototype.getCollapsed=nr.prototype.Tl;
nr.prototype.getOverviewMap=nr.prototype.ek;u("ol.control.Rotate",Uh,OPENLAYERS);u("ol.control.Rotate.render",Vh,OPENLAYERS);u("ol.control.ScaleLine",sr,OPENLAYERS);sr.prototype.getUnits=sr.prototype.D;u("ol.control.ScaleLine.render",tr,OPENLAYERS);sr.prototype.setUnits=sr.prototype.T;u("ol.control.Zoom",Wh,OPENLAYERS);u("ol.control.ZoomSlider",Gr,OPENLAYERS);u("ol.control.ZoomSlider.render",Ir,OPENLAYERS);u("ol.control.ZoomToExtent",Lr,OPENLAYERS);u("ol.color.asArray",tg,OPENLAYERS);
u("ol.color.asString",vg,OPENLAYERS);gd.prototype.changed=gd.prototype.u;gd.prototype.dispatchEvent=gd.prototype.s;gd.prototype.getRevision=gd.prototype.L;gd.prototype.on=gd.prototype.H;gd.prototype.once=gd.prototype.M;gd.prototype.un=gd.prototype.K;gd.prototype.unByKey=gd.prototype.N;og.prototype.get=og.prototype.get;og.prototype.getKeys=og.prototype.P;og.prototype.getProperties=og.prototype.R;og.prototype.set=og.prototype.set;og.prototype.setProperties=og.prototype.I;og.prototype.unset=og.prototype.S;
og.prototype.changed=og.prototype.u;og.prototype.dispatchEvent=og.prototype.s;og.prototype.getRevision=og.prototype.L;og.prototype.on=og.prototype.H;og.prototype.once=og.prototype.M;og.prototype.un=og.prototype.K;og.prototype.unByKey=og.prototype.N;Mr.prototype.get=Mr.prototype.get;Mr.prototype.getKeys=Mr.prototype.P;Mr.prototype.getProperties=Mr.prototype.R;Mr.prototype.set=Mr.prototype.set;Mr.prototype.setProperties=Mr.prototype.I;Mr.prototype.unset=Mr.prototype.S;Mr.prototype.changed=Mr.prototype.u;
Mr.prototype.dispatchEvent=Mr.prototype.s;Mr.prototype.getRevision=Mr.prototype.L;Mr.prototype.on=Mr.prototype.H;Mr.prototype.once=Mr.prototype.M;Mr.prototype.un=Mr.prototype.K;Mr.prototype.unByKey=Mr.prototype.N;pn.prototype.get=pn.prototype.get;pn.prototype.getKeys=pn.prototype.P;pn.prototype.getProperties=pn.prototype.R;pn.prototype.set=pn.prototype.set;pn.prototype.setProperties=pn.prototype.I;pn.prototype.unset=pn.prototype.S;pn.prototype.changed=pn.prototype.u;pn.prototype.dispatchEvent=pn.prototype.s;
pn.prototype.getRevision=pn.prototype.L;pn.prototype.on=pn.prototype.H;pn.prototype.once=pn.prototype.M;pn.prototype.un=pn.prototype.K;pn.prototype.unByKey=pn.prototype.N;Mx.prototype.get=Mx.prototype.get;Mx.prototype.getKeys=Mx.prototype.P;Mx.prototype.getProperties=Mx.prototype.R;Mx.prototype.set=Mx.prototype.set;Mx.prototype.setProperties=Mx.prototype.I;Mx.prototype.unset=Mx.prototype.S;Mx.prototype.changed=Mx.prototype.u;Mx.prototype.dispatchEvent=Mx.prototype.s;Mx.prototype.getRevision=Mx.prototype.L;
Mx.prototype.on=Mx.prototype.H;Mx.prototype.once=Mx.prototype.M;Mx.prototype.un=Mx.prototype.K;Mx.prototype.unByKey=Mx.prototype.N;Yx.prototype.getTileCoord=Yx.prototype.g;S.prototype.get=S.prototype.get;S.prototype.getKeys=S.prototype.P;S.prototype.getProperties=S.prototype.R;S.prototype.set=S.prototype.set;S.prototype.setProperties=S.prototype.I;S.prototype.unset=S.prototype.S;S.prototype.changed=S.prototype.u;S.prototype.dispatchEvent=S.prototype.s;S.prototype.getRevision=S.prototype.L;
S.prototype.on=S.prototype.H;S.prototype.once=S.prototype.M;S.prototype.un=S.prototype.K;S.prototype.unByKey=S.prototype.N;Kj.prototype.map=Kj.prototype.map;Kj.prototype.frameState=Kj.prototype.frameState;Lj.prototype.originalEvent=Lj.prototype.originalEvent;Lj.prototype.pixel=Lj.prototype.pixel;Lj.prototype.coordinate=Lj.prototype.coordinate;Lj.prototype.dragging=Lj.prototype.dragging;Lj.prototype.preventDefault=Lj.prototype.preventDefault;Lj.prototype.stopPropagation=Lj.prototype.b;
Lj.prototype.map=Lj.prototype.map;Lj.prototype.frameState=Lj.prototype.frameState;jr.prototype.get=jr.prototype.get;jr.prototype.getKeys=jr.prototype.P;jr.prototype.getProperties=jr.prototype.R;jr.prototype.set=jr.prototype.set;jr.prototype.setProperties=jr.prototype.I;jr.prototype.unset=jr.prototype.S;jr.prototype.changed=jr.prototype.u;jr.prototype.dispatchEvent=jr.prototype.s;jr.prototype.getRevision=jr.prototype.L;jr.prototype.on=jr.prototype.H;jr.prototype.once=jr.prototype.M;
jr.prototype.un=jr.prototype.K;jr.prototype.unByKey=jr.prototype.N;Co.prototype.getTileCoord=Co.prototype.g;Nf.prototype.get=Nf.prototype.get;Nf.prototype.getKeys=Nf.prototype.P;Nf.prototype.getProperties=Nf.prototype.R;Nf.prototype.set=Nf.prototype.set;Nf.prototype.setProperties=Nf.prototype.I;Nf.prototype.unset=Nf.prototype.S;Nf.prototype.changed=Nf.prototype.u;Nf.prototype.dispatchEvent=Nf.prototype.s;Nf.prototype.getRevision=Nf.prototype.L;Nf.prototype.on=Nf.prototype.H;Nf.prototype.once=Nf.prototype.M;
Nf.prototype.un=Nf.prototype.K;Nf.prototype.unByKey=Nf.prototype.N;zA.prototype.getMaxZoom=zA.prototype.Eg;zA.prototype.getMinZoom=zA.prototype.Fg;zA.prototype.getOrigin=zA.prototype.Da;zA.prototype.getResolution=zA.prototype.$;zA.prototype.getResolutions=zA.prototype.zh;zA.prototype.getTileCoordExtent=zA.prototype.Aa;zA.prototype.getTileCoordForCoordAndResolution=zA.prototype.fe;zA.prototype.getTileCoordForCoordAndZ=zA.prototype.ge;zA.prototype.getTileSize=zA.prototype.Ka;
Zl.prototype.getOpacity=Zl.prototype.Be;Zl.prototype.getRotateWithView=Zl.prototype.de;Zl.prototype.getRotation=Zl.prototype.Ce;Zl.prototype.getScale=Zl.prototype.De;Zl.prototype.getSnapToPixel=Zl.prototype.ee;Zl.prototype.setOpacity=Zl.prototype.Ee;Zl.prototype.setRotation=Zl.prototype.Fe;Zl.prototype.setScale=Zl.prototype.Ge;tk.prototype.getOpacity=tk.prototype.Be;tk.prototype.getRotateWithView=tk.prototype.de;tk.prototype.getRotation=tk.prototype.Ce;tk.prototype.getScale=tk.prototype.De;
tk.prototype.getSnapToPixel=tk.prototype.ee;tk.prototype.setOpacity=tk.prototype.Ee;tk.prototype.setRotation=tk.prototype.Fe;tk.prototype.setScale=tk.prototype.Ge;IA.prototype.getOpacity=IA.prototype.Be;IA.prototype.getRotateWithView=IA.prototype.de;IA.prototype.getRotation=IA.prototype.Ce;IA.prototype.getScale=IA.prototype.De;IA.prototype.getSnapToPixel=IA.prototype.ee;IA.prototype.setOpacity=IA.prototype.Ee;IA.prototype.setRotation=IA.prototype.Fe;IA.prototype.setScale=IA.prototype.Ge;
wh.prototype.get=wh.prototype.get;wh.prototype.getKeys=wh.prototype.P;wh.prototype.getProperties=wh.prototype.R;wh.prototype.set=wh.prototype.set;wh.prototype.setProperties=wh.prototype.I;wh.prototype.unset=wh.prototype.S;wh.prototype.changed=wh.prototype.u;wh.prototype.dispatchEvent=wh.prototype.s;wh.prototype.getRevision=wh.prototype.L;wh.prototype.on=wh.prototype.H;wh.prototype.once=wh.prototype.M;wh.prototype.un=wh.prototype.K;wh.prototype.unByKey=wh.prototype.N;Nh.prototype.getAttributions=Nh.prototype.sa;
Nh.prototype.getLogo=Nh.prototype.qa;Nh.prototype.getProjection=Nh.prototype.ta;Nh.prototype.getState=Nh.prototype.ua;Nh.prototype.setAttributions=Nh.prototype.ma;Nh.prototype.get=Nh.prototype.get;Nh.prototype.getKeys=Nh.prototype.P;Nh.prototype.getProperties=Nh.prototype.R;Nh.prototype.set=Nh.prototype.set;Nh.prototype.setProperties=Nh.prototype.I;Nh.prototype.unset=Nh.prototype.S;Nh.prototype.changed=Nh.prototype.u;Nh.prototype.dispatchEvent=Nh.prototype.s;Nh.prototype.getRevision=Nh.prototype.L;
Nh.prototype.on=Nh.prototype.H;Nh.prototype.once=Nh.prototype.M;Nh.prototype.un=Nh.prototype.K;Nh.prototype.unByKey=Nh.prototype.N;Wp.prototype.getTileGrid=Wp.prototype.Ha;Wp.prototype.getAttributions=Wp.prototype.sa;Wp.prototype.getLogo=Wp.prototype.qa;Wp.prototype.getProjection=Wp.prototype.ta;Wp.prototype.getState=Wp.prototype.ua;Wp.prototype.setAttributions=Wp.prototype.ma;Wp.prototype.get=Wp.prototype.get;Wp.prototype.getKeys=Wp.prototype.P;Wp.prototype.getProperties=Wp.prototype.R;
Wp.prototype.set=Wp.prototype.set;Wp.prototype.setProperties=Wp.prototype.I;Wp.prototype.unset=Wp.prototype.S;Wp.prototype.changed=Wp.prototype.u;Wp.prototype.dispatchEvent=Wp.prototype.s;Wp.prototype.getRevision=Wp.prototype.L;Wp.prototype.on=Wp.prototype.H;Wp.prototype.once=Wp.prototype.M;Wp.prototype.un=Wp.prototype.K;Wp.prototype.unByKey=Wp.prototype.N;Y.prototype.getTileLoadFunction=Y.prototype.Xa;Y.prototype.getTileUrlFunction=Y.prototype.Ya;Y.prototype.getUrls=Y.prototype.Za;
Y.prototype.setTileLoadFunction=Y.prototype.eb;Y.prototype.setTileUrlFunction=Y.prototype.Ja;Y.prototype.setUrl=Y.prototype.Va;Y.prototype.setUrls=Y.prototype.Wa;Y.prototype.getTileGrid=Y.prototype.Ha;Y.prototype.getAttributions=Y.prototype.sa;Y.prototype.getLogo=Y.prototype.qa;Y.prototype.getProjection=Y.prototype.ta;Y.prototype.getState=Y.prototype.ua;Y.prototype.setAttributions=Y.prototype.ma;Y.prototype.get=Y.prototype.get;Y.prototype.getKeys=Y.prototype.P;Y.prototype.getProperties=Y.prototype.R;
Y.prototype.set=Y.prototype.set;Y.prototype.setProperties=Y.prototype.I;Y.prototype.unset=Y.prototype.S;Y.prototype.changed=Y.prototype.u;Y.prototype.dispatchEvent=Y.prototype.s;Y.prototype.getRevision=Y.prototype.L;Y.prototype.on=Y.prototype.H;Y.prototype.once=Y.prototype.M;Y.prototype.un=Y.prototype.K;Y.prototype.unByKey=Y.prototype.N;Kz.prototype.setRenderReprojectionEdges=Kz.prototype.vb;Kz.prototype.setTileGridForProjection=Kz.prototype.wb;Kz.prototype.getTileLoadFunction=Kz.prototype.Xa;
Kz.prototype.getTileUrlFunction=Kz.prototype.Ya;Kz.prototype.getUrls=Kz.prototype.Za;Kz.prototype.setTileLoadFunction=Kz.prototype.eb;Kz.prototype.setTileUrlFunction=Kz.prototype.Ja;Kz.prototype.setUrl=Kz.prototype.Va;Kz.prototype.setUrls=Kz.prototype.Wa;Kz.prototype.getTileGrid=Kz.prototype.Ha;Kz.prototype.getAttributions=Kz.prototype.sa;Kz.prototype.getLogo=Kz.prototype.qa;Kz.prototype.getProjection=Kz.prototype.ta;Kz.prototype.getState=Kz.prototype.ua;Kz.prototype.setAttributions=Kz.prototype.ma;
Kz.prototype.get=Kz.prototype.get;Kz.prototype.getKeys=Kz.prototype.P;Kz.prototype.getProperties=Kz.prototype.R;Kz.prototype.set=Kz.prototype.set;Kz.prototype.setProperties=Kz.prototype.I;Kz.prototype.unset=Kz.prototype.S;Kz.prototype.changed=Kz.prototype.u;Kz.prototype.dispatchEvent=Kz.prototype.s;Kz.prototype.getRevision=Kz.prototype.L;Kz.prototype.on=Kz.prototype.H;Kz.prototype.once=Kz.prototype.M;Kz.prototype.un=Kz.prototype.K;Kz.prototype.unByKey=Kz.prototype.N;R.prototype.getAttributions=R.prototype.sa;
R.prototype.getLogo=R.prototype.qa;R.prototype.getProjection=R.prototype.ta;R.prototype.getState=R.prototype.ua;R.prototype.setAttributions=R.prototype.ma;R.prototype.get=R.prototype.get;R.prototype.getKeys=R.prototype.P;R.prototype.getProperties=R.prototype.R;R.prototype.set=R.prototype.set;R.prototype.setProperties=R.prototype.I;R.prototype.unset=R.prototype.S;R.prototype.changed=R.prototype.u;R.prototype.dispatchEvent=R.prototype.s;R.prototype.getRevision=R.prototype.L;R.prototype.on=R.prototype.H;
R.prototype.once=R.prototype.M;R.prototype.un=R.prototype.K;R.prototype.unByKey=R.prototype.N;Mz.prototype.addFeature=Mz.prototype.Bd;Mz.prototype.addFeatures=Mz.prototype.Ec;Mz.prototype.clear=Mz.prototype.clear;Mz.prototype.forEachFeature=Mz.prototype.sg;Mz.prototype.forEachFeatureInExtent=Mz.prototype.pb;Mz.prototype.forEachFeatureIntersectingExtent=Mz.prototype.tg;Mz.prototype.getFeaturesCollection=Mz.prototype.zg;Mz.prototype.getFeatures=Mz.prototype.ze;Mz.prototype.getFeaturesAtCoordinate=Mz.prototype.yg;
Mz.prototype.getFeaturesInExtent=Mz.prototype.mf;Mz.prototype.getClosestFeatureToCoordinate=Mz.prototype.vg;Mz.prototype.getExtent=Mz.prototype.J;Mz.prototype.getFeatureById=Mz.prototype.xg;Mz.prototype.removeFeature=Mz.prototype.Rc;Mz.prototype.getAttributions=Mz.prototype.sa;Mz.prototype.getLogo=Mz.prototype.qa;Mz.prototype.getProjection=Mz.prototype.ta;Mz.prototype.getState=Mz.prototype.ua;Mz.prototype.setAttributions=Mz.prototype.ma;Mz.prototype.get=Mz.prototype.get;Mz.prototype.getKeys=Mz.prototype.P;
Mz.prototype.getProperties=Mz.prototype.R;Mz.prototype.set=Mz.prototype.set;Mz.prototype.setProperties=Mz.prototype.I;Mz.prototype.unset=Mz.prototype.S;Mz.prototype.changed=Mz.prototype.u;Mz.prototype.dispatchEvent=Mz.prototype.s;Mz.prototype.getRevision=Mz.prototype.L;Mz.prototype.on=Mz.prototype.H;Mz.prototype.once=Mz.prototype.M;Mz.prototype.un=Mz.prototype.K;Mz.prototype.unByKey=Mz.prototype.N;gn.prototype.getAttributions=gn.prototype.sa;gn.prototype.getLogo=gn.prototype.qa;
gn.prototype.getProjection=gn.prototype.ta;gn.prototype.getState=gn.prototype.ua;gn.prototype.setAttributions=gn.prototype.ma;gn.prototype.get=gn.prototype.get;gn.prototype.getKeys=gn.prototype.P;gn.prototype.getProperties=gn.prototype.R;gn.prototype.set=gn.prototype.set;gn.prototype.setProperties=gn.prototype.I;gn.prototype.unset=gn.prototype.S;gn.prototype.changed=gn.prototype.u;gn.prototype.dispatchEvent=gn.prototype.s;gn.prototype.getRevision=gn.prototype.L;gn.prototype.on=gn.prototype.H;
gn.prototype.once=gn.prototype.M;gn.prototype.un=gn.prototype.K;gn.prototype.unByKey=gn.prototype.N;on.prototype.getAttributions=on.prototype.sa;on.prototype.getLogo=on.prototype.qa;on.prototype.getProjection=on.prototype.ta;on.prototype.getState=on.prototype.ua;on.prototype.setAttributions=on.prototype.ma;on.prototype.get=on.prototype.get;on.prototype.getKeys=on.prototype.P;on.prototype.getProperties=on.prototype.R;on.prototype.set=on.prototype.set;on.prototype.setProperties=on.prototype.I;
on.prototype.unset=on.prototype.S;on.prototype.changed=on.prototype.u;on.prototype.dispatchEvent=on.prototype.s;on.prototype.getRevision=on.prototype.L;on.prototype.on=on.prototype.H;on.prototype.once=on.prototype.M;on.prototype.un=on.prototype.K;on.prototype.unByKey=on.prototype.N;Pz.prototype.getAttributions=Pz.prototype.sa;Pz.prototype.getLogo=Pz.prototype.qa;Pz.prototype.getProjection=Pz.prototype.ta;Pz.prototype.getState=Pz.prototype.ua;Pz.prototype.setAttributions=Pz.prototype.ma;
Pz.prototype.get=Pz.prototype.get;Pz.prototype.getKeys=Pz.prototype.P;Pz.prototype.getProperties=Pz.prototype.R;Pz.prototype.set=Pz.prototype.set;Pz.prototype.setProperties=Pz.prototype.I;Pz.prototype.unset=Pz.prototype.S;Pz.prototype.changed=Pz.prototype.u;Pz.prototype.dispatchEvent=Pz.prototype.s;Pz.prototype.getRevision=Pz.prototype.L;Pz.prototype.on=Pz.prototype.H;Pz.prototype.once=Pz.prototype.M;Pz.prototype.un=Pz.prototype.K;Pz.prototype.unByKey=Pz.prototype.N;Qz.prototype.getAttributions=Qz.prototype.sa;
Qz.prototype.getLogo=Qz.prototype.qa;Qz.prototype.getProjection=Qz.prototype.ta;Qz.prototype.getState=Qz.prototype.ua;Qz.prototype.setAttributions=Qz.prototype.ma;Qz.prototype.get=Qz.prototype.get;Qz.prototype.getKeys=Qz.prototype.P;Qz.prototype.getProperties=Qz.prototype.R;Qz.prototype.set=Qz.prototype.set;Qz.prototype.setProperties=Qz.prototype.I;Qz.prototype.unset=Qz.prototype.S;Qz.prototype.changed=Qz.prototype.u;Qz.prototype.dispatchEvent=Qz.prototype.s;Qz.prototype.getRevision=Qz.prototype.L;
Qz.prototype.on=Qz.prototype.H;Qz.prototype.once=Qz.prototype.M;Qz.prototype.un=Qz.prototype.K;Qz.prototype.unByKey=Qz.prototype.N;Mp.prototype.getAttributions=Mp.prototype.sa;Mp.prototype.getLogo=Mp.prototype.qa;Mp.prototype.getProjection=Mp.prototype.ta;Mp.prototype.getState=Mp.prototype.ua;Mp.prototype.setAttributions=Mp.prototype.ma;Mp.prototype.get=Mp.prototype.get;Mp.prototype.getKeys=Mp.prototype.P;Mp.prototype.getProperties=Mp.prototype.R;Mp.prototype.set=Mp.prototype.set;
Mp.prototype.setProperties=Mp.prototype.I;Mp.prototype.unset=Mp.prototype.S;Mp.prototype.changed=Mp.prototype.u;Mp.prototype.dispatchEvent=Mp.prototype.s;Mp.prototype.getRevision=Mp.prototype.L;Mp.prototype.on=Mp.prototype.H;Mp.prototype.once=Mp.prototype.M;Mp.prototype.un=Mp.prototype.K;Mp.prototype.unByKey=Mp.prototype.N;Rz.prototype.getAttributions=Rz.prototype.sa;Rz.prototype.getLogo=Rz.prototype.qa;Rz.prototype.getProjection=Rz.prototype.ta;Rz.prototype.getState=Rz.prototype.ua;
Rz.prototype.setAttributions=Rz.prototype.ma;Rz.prototype.get=Rz.prototype.get;Rz.prototype.getKeys=Rz.prototype.P;Rz.prototype.getProperties=Rz.prototype.R;Rz.prototype.set=Rz.prototype.set;Rz.prototype.setProperties=Rz.prototype.I;Rz.prototype.unset=Rz.prototype.S;Rz.prototype.changed=Rz.prototype.u;Rz.prototype.dispatchEvent=Rz.prototype.s;Rz.prototype.getRevision=Rz.prototype.L;Rz.prototype.on=Rz.prototype.H;Rz.prototype.once=Rz.prototype.M;Rz.prototype.un=Rz.prototype.K;
Rz.prototype.unByKey=Rz.prototype.N;Vz.prototype.setRenderReprojectionEdges=Vz.prototype.vb;Vz.prototype.setTileGridForProjection=Vz.prototype.wb;Vz.prototype.getTileLoadFunction=Vz.prototype.Xa;Vz.prototype.getTileUrlFunction=Vz.prototype.Ya;Vz.prototype.getUrls=Vz.prototype.Za;Vz.prototype.setTileLoadFunction=Vz.prototype.eb;Vz.prototype.setTileUrlFunction=Vz.prototype.Ja;Vz.prototype.setUrl=Vz.prototype.Va;Vz.prototype.setUrls=Vz.prototype.Wa;Vz.prototype.getTileGrid=Vz.prototype.Ha;
Vz.prototype.getAttributions=Vz.prototype.sa;Vz.prototype.getLogo=Vz.prototype.qa;Vz.prototype.getProjection=Vz.prototype.ta;Vz.prototype.getState=Vz.prototype.ua;Vz.prototype.setAttributions=Vz.prototype.ma;Vz.prototype.get=Vz.prototype.get;Vz.prototype.getKeys=Vz.prototype.P;Vz.prototype.getProperties=Vz.prototype.R;Vz.prototype.set=Vz.prototype.set;Vz.prototype.setProperties=Vz.prototype.I;Vz.prototype.unset=Vz.prototype.S;Vz.prototype.changed=Vz.prototype.u;Vz.prototype.dispatchEvent=Vz.prototype.s;
Vz.prototype.getRevision=Vz.prototype.L;Vz.prototype.on=Vz.prototype.H;Vz.prototype.once=Vz.prototype.M;Vz.prototype.un=Vz.prototype.K;Vz.prototype.unByKey=Vz.prototype.N;Yz.prototype.setRenderReprojectionEdges=Yz.prototype.vb;Yz.prototype.setTileGridForProjection=Yz.prototype.wb;Yz.prototype.getTileLoadFunction=Yz.prototype.Xa;Yz.prototype.getTileUrlFunction=Yz.prototype.Ya;Yz.prototype.getUrls=Yz.prototype.Za;Yz.prototype.setTileLoadFunction=Yz.prototype.eb;Yz.prototype.setTileUrlFunction=Yz.prototype.Ja;
Yz.prototype.setUrl=Yz.prototype.Va;Yz.prototype.setUrls=Yz.prototype.Wa;Yz.prototype.getTileGrid=Yz.prototype.Ha;Yz.prototype.getAttributions=Yz.prototype.sa;Yz.prototype.getLogo=Yz.prototype.qa;Yz.prototype.getProjection=Yz.prototype.ta;Yz.prototype.getState=Yz.prototype.ua;Yz.prototype.setAttributions=Yz.prototype.ma;Yz.prototype.get=Yz.prototype.get;Yz.prototype.getKeys=Yz.prototype.P;Yz.prototype.getProperties=Yz.prototype.R;Yz.prototype.set=Yz.prototype.set;Yz.prototype.setProperties=Yz.prototype.I;
Yz.prototype.unset=Yz.prototype.S;Yz.prototype.changed=Yz.prototype.u;Yz.prototype.dispatchEvent=Yz.prototype.s;Yz.prototype.getRevision=Yz.prototype.L;Yz.prototype.on=Yz.prototype.H;Yz.prototype.once=Yz.prototype.M;Yz.prototype.un=Yz.prototype.K;Yz.prototype.unByKey=Yz.prototype.N;Wz.prototype.setRenderReprojectionEdges=Wz.prototype.vb;Wz.prototype.setTileGridForProjection=Wz.prototype.wb;Wz.prototype.getTileLoadFunction=Wz.prototype.Xa;Wz.prototype.getTileUrlFunction=Wz.prototype.Ya;
Wz.prototype.getUrls=Wz.prototype.Za;Wz.prototype.setTileLoadFunction=Wz.prototype.eb;Wz.prototype.setTileUrlFunction=Wz.prototype.Ja;Wz.prototype.setUrl=Wz.prototype.Va;Wz.prototype.setUrls=Wz.prototype.Wa;Wz.prototype.getTileGrid=Wz.prototype.Ha;Wz.prototype.getAttributions=Wz.prototype.sa;Wz.prototype.getLogo=Wz.prototype.qa;Wz.prototype.getProjection=Wz.prototype.ta;Wz.prototype.getState=Wz.prototype.ua;Wz.prototype.setAttributions=Wz.prototype.ma;Wz.prototype.get=Wz.prototype.get;
Wz.prototype.getKeys=Wz.prototype.P;Wz.prototype.getProperties=Wz.prototype.R;Wz.prototype.set=Wz.prototype.set;Wz.prototype.setProperties=Wz.prototype.I;Wz.prototype.unset=Wz.prototype.S;Wz.prototype.changed=Wz.prototype.u;Wz.prototype.dispatchEvent=Wz.prototype.s;Wz.prototype.getRevision=Wz.prototype.L;Wz.prototype.on=Wz.prototype.H;Wz.prototype.once=Wz.prototype.M;Wz.prototype.un=Wz.prototype.K;Wz.prototype.unByKey=Wz.prototype.N;aA.prototype.getAttributions=aA.prototype.sa;
aA.prototype.getLogo=aA.prototype.qa;aA.prototype.getProjection=aA.prototype.ta;aA.prototype.getState=aA.prototype.ua;aA.prototype.setAttributions=aA.prototype.ma;aA.prototype.get=aA.prototype.get;aA.prototype.getKeys=aA.prototype.P;aA.prototype.getProperties=aA.prototype.R;aA.prototype.set=aA.prototype.set;aA.prototype.setProperties=aA.prototype.I;aA.prototype.unset=aA.prototype.S;aA.prototype.changed=aA.prototype.u;aA.prototype.dispatchEvent=aA.prototype.s;aA.prototype.getRevision=aA.prototype.L;
aA.prototype.on=aA.prototype.H;aA.prototype.once=aA.prototype.M;aA.prototype.un=aA.prototype.K;aA.prototype.unByKey=aA.prototype.N;kA.prototype.setRenderReprojectionEdges=kA.prototype.vb;kA.prototype.setTileGridForProjection=kA.prototype.wb;kA.prototype.getTileLoadFunction=kA.prototype.Xa;kA.prototype.getTileUrlFunction=kA.prototype.Ya;kA.prototype.getUrls=kA.prototype.Za;kA.prototype.setTileLoadFunction=kA.prototype.eb;kA.prototype.setTileUrlFunction=kA.prototype.Ja;kA.prototype.setUrl=kA.prototype.Va;
kA.prototype.setUrls=kA.prototype.Wa;kA.prototype.getTileGrid=kA.prototype.Ha;kA.prototype.getAttributions=kA.prototype.sa;kA.prototype.getLogo=kA.prototype.qa;kA.prototype.getProjection=kA.prototype.ta;kA.prototype.getState=kA.prototype.ua;kA.prototype.setAttributions=kA.prototype.ma;kA.prototype.get=kA.prototype.get;kA.prototype.getKeys=kA.prototype.P;kA.prototype.getProperties=kA.prototype.R;kA.prototype.set=kA.prototype.set;kA.prototype.setProperties=kA.prototype.I;kA.prototype.unset=kA.prototype.S;
kA.prototype.changed=kA.prototype.u;kA.prototype.dispatchEvent=kA.prototype.s;kA.prototype.getRevision=kA.prototype.L;kA.prototype.on=kA.prototype.H;kA.prototype.once=kA.prototype.M;kA.prototype.un=kA.prototype.K;kA.prototype.unByKey=kA.prototype.N;mA.prototype.setRenderReprojectionEdges=mA.prototype.vb;mA.prototype.setTileGridForProjection=mA.prototype.wb;mA.prototype.getTileLoadFunction=mA.prototype.Xa;mA.prototype.getTileUrlFunction=mA.prototype.Ya;mA.prototype.getUrls=mA.prototype.Za;
mA.prototype.setTileLoadFunction=mA.prototype.eb;mA.prototype.setTileUrlFunction=mA.prototype.Ja;mA.prototype.setUrl=mA.prototype.Va;mA.prototype.setUrls=mA.prototype.Wa;mA.prototype.getTileGrid=mA.prototype.Ha;mA.prototype.getAttributions=mA.prototype.sa;mA.prototype.getLogo=mA.prototype.qa;mA.prototype.getProjection=mA.prototype.ta;mA.prototype.getState=mA.prototype.ua;mA.prototype.setAttributions=mA.prototype.ma;mA.prototype.get=mA.prototype.get;mA.prototype.getKeys=mA.prototype.P;
mA.prototype.getProperties=mA.prototype.R;mA.prototype.set=mA.prototype.set;mA.prototype.setProperties=mA.prototype.I;mA.prototype.unset=mA.prototype.S;mA.prototype.changed=mA.prototype.u;mA.prototype.dispatchEvent=mA.prototype.s;mA.prototype.getRevision=mA.prototype.L;mA.prototype.on=mA.prototype.H;mA.prototype.once=mA.prototype.M;mA.prototype.un=mA.prototype.K;mA.prototype.unByKey=mA.prototype.N;oA.prototype.getTileGrid=oA.prototype.Ha;oA.prototype.getAttributions=oA.prototype.sa;
oA.prototype.getLogo=oA.prototype.qa;oA.prototype.getProjection=oA.prototype.ta;oA.prototype.getState=oA.prototype.ua;oA.prototype.setAttributions=oA.prototype.ma;oA.prototype.get=oA.prototype.get;oA.prototype.getKeys=oA.prototype.P;oA.prototype.getProperties=oA.prototype.R;oA.prototype.set=oA.prototype.set;oA.prototype.setProperties=oA.prototype.I;oA.prototype.unset=oA.prototype.S;oA.prototype.changed=oA.prototype.u;oA.prototype.dispatchEvent=oA.prototype.s;oA.prototype.getRevision=oA.prototype.L;
oA.prototype.on=oA.prototype.H;oA.prototype.once=oA.prototype.M;oA.prototype.un=oA.prototype.K;oA.prototype.unByKey=oA.prototype.N;pA.prototype.setRenderReprojectionEdges=pA.prototype.vb;pA.prototype.setTileGridForProjection=pA.prototype.wb;pA.prototype.getTileLoadFunction=pA.prototype.Xa;pA.prototype.getTileUrlFunction=pA.prototype.Ya;pA.prototype.getUrls=pA.prototype.Za;pA.prototype.setTileLoadFunction=pA.prototype.eb;pA.prototype.setTileUrlFunction=pA.prototype.Ja;pA.prototype.setUrl=pA.prototype.Va;
pA.prototype.setUrls=pA.prototype.Wa;pA.prototype.getTileGrid=pA.prototype.Ha;pA.prototype.getAttributions=pA.prototype.sa;pA.prototype.getLogo=pA.prototype.qa;pA.prototype.getProjection=pA.prototype.ta;pA.prototype.getState=pA.prototype.ua;pA.prototype.setAttributions=pA.prototype.ma;pA.prototype.get=pA.prototype.get;pA.prototype.getKeys=pA.prototype.P;pA.prototype.getProperties=pA.prototype.R;pA.prototype.set=pA.prototype.set;pA.prototype.setProperties=pA.prototype.I;pA.prototype.unset=pA.prototype.S;
pA.prototype.changed=pA.prototype.u;pA.prototype.dispatchEvent=pA.prototype.s;pA.prototype.getRevision=pA.prototype.L;pA.prototype.on=pA.prototype.H;pA.prototype.once=pA.prototype.M;pA.prototype.un=pA.prototype.K;pA.prototype.unByKey=pA.prototype.N;qA.prototype.getTileGrid=qA.prototype.Ha;qA.prototype.getAttributions=qA.prototype.sa;qA.prototype.getLogo=qA.prototype.qa;qA.prototype.getProjection=qA.prototype.ta;qA.prototype.getState=qA.prototype.ua;qA.prototype.setAttributions=qA.prototype.ma;
qA.prototype.get=qA.prototype.get;qA.prototype.getKeys=qA.prototype.P;qA.prototype.getProperties=qA.prototype.R;qA.prototype.set=qA.prototype.set;qA.prototype.setProperties=qA.prototype.I;qA.prototype.unset=qA.prototype.S;qA.prototype.changed=qA.prototype.u;qA.prototype.dispatchEvent=qA.prototype.s;qA.prototype.getRevision=qA.prototype.L;qA.prototype.on=qA.prototype.H;qA.prototype.once=qA.prototype.M;qA.prototype.un=qA.prototype.K;qA.prototype.unByKey=qA.prototype.N;
vA.prototype.setRenderReprojectionEdges=vA.prototype.vb;vA.prototype.setTileGridForProjection=vA.prototype.wb;vA.prototype.getTileLoadFunction=vA.prototype.Xa;vA.prototype.getTileUrlFunction=vA.prototype.Ya;vA.prototype.getUrls=vA.prototype.Za;vA.prototype.setTileLoadFunction=vA.prototype.eb;vA.prototype.setTileUrlFunction=vA.prototype.Ja;vA.prototype.setUrl=vA.prototype.Va;vA.prototype.setUrls=vA.prototype.Wa;vA.prototype.getTileGrid=vA.prototype.Ha;vA.prototype.getAttributions=vA.prototype.sa;
vA.prototype.getLogo=vA.prototype.qa;vA.prototype.getProjection=vA.prototype.ta;vA.prototype.getState=vA.prototype.ua;vA.prototype.setAttributions=vA.prototype.ma;vA.prototype.get=vA.prototype.get;vA.prototype.getKeys=vA.prototype.P;vA.prototype.getProperties=vA.prototype.R;vA.prototype.set=vA.prototype.set;vA.prototype.setProperties=vA.prototype.I;vA.prototype.unset=vA.prototype.S;vA.prototype.changed=vA.prototype.u;vA.prototype.dispatchEvent=vA.prototype.s;vA.prototype.getRevision=vA.prototype.L;
vA.prototype.on=vA.prototype.H;vA.prototype.once=vA.prototype.M;vA.prototype.un=vA.prototype.K;vA.prototype.unByKey=vA.prototype.N;Xp.prototype.getTileLoadFunction=Xp.prototype.Xa;Xp.prototype.getTileUrlFunction=Xp.prototype.Ya;Xp.prototype.getUrls=Xp.prototype.Za;Xp.prototype.setTileLoadFunction=Xp.prototype.eb;Xp.prototype.setTileUrlFunction=Xp.prototype.Ja;Xp.prototype.setUrl=Xp.prototype.Va;Xp.prototype.setUrls=Xp.prototype.Wa;Xp.prototype.getTileGrid=Xp.prototype.Ha;
Xp.prototype.getAttributions=Xp.prototype.sa;Xp.prototype.getLogo=Xp.prototype.qa;Xp.prototype.getProjection=Xp.prototype.ta;Xp.prototype.getState=Xp.prototype.ua;Xp.prototype.setAttributions=Xp.prototype.ma;Xp.prototype.get=Xp.prototype.get;Xp.prototype.getKeys=Xp.prototype.P;Xp.prototype.getProperties=Xp.prototype.R;Xp.prototype.set=Xp.prototype.set;Xp.prototype.setProperties=Xp.prototype.I;Xp.prototype.unset=Xp.prototype.S;Xp.prototype.changed=Xp.prototype.u;Xp.prototype.dispatchEvent=Xp.prototype.s;
Xp.prototype.getRevision=Xp.prototype.L;Xp.prototype.on=Xp.prototype.H;Xp.prototype.once=Xp.prototype.M;Xp.prototype.un=Xp.prototype.K;Xp.prototype.unByKey=Xp.prototype.N;Z.prototype.setRenderReprojectionEdges=Z.prototype.vb;Z.prototype.setTileGridForProjection=Z.prototype.wb;Z.prototype.getTileLoadFunction=Z.prototype.Xa;Z.prototype.getTileUrlFunction=Z.prototype.Ya;Z.prototype.getUrls=Z.prototype.Za;Z.prototype.setTileLoadFunction=Z.prototype.eb;Z.prototype.setTileUrlFunction=Z.prototype.Ja;
Z.prototype.setUrl=Z.prototype.Va;Z.prototype.setUrls=Z.prototype.Wa;Z.prototype.getTileGrid=Z.prototype.Ha;Z.prototype.getAttributions=Z.prototype.sa;Z.prototype.getLogo=Z.prototype.qa;Z.prototype.getProjection=Z.prototype.ta;Z.prototype.getState=Z.prototype.ua;Z.prototype.setAttributions=Z.prototype.ma;Z.prototype.get=Z.prototype.get;Z.prototype.getKeys=Z.prototype.P;Z.prototype.getProperties=Z.prototype.R;Z.prototype.set=Z.prototype.set;Z.prototype.setProperties=Z.prototype.I;
Z.prototype.unset=Z.prototype.S;Z.prototype.changed=Z.prototype.u;Z.prototype.dispatchEvent=Z.prototype.s;Z.prototype.getRevision=Z.prototype.L;Z.prototype.on=Z.prototype.H;Z.prototype.once=Z.prototype.M;Z.prototype.un=Z.prototype.K;Z.prototype.unByKey=Z.prototype.N;CA.prototype.setRenderReprojectionEdges=CA.prototype.vb;CA.prototype.setTileGridForProjection=CA.prototype.wb;CA.prototype.getTileLoadFunction=CA.prototype.Xa;CA.prototype.getTileUrlFunction=CA.prototype.Ya;CA.prototype.getUrls=CA.prototype.Za;
CA.prototype.setTileLoadFunction=CA.prototype.eb;CA.prototype.setTileUrlFunction=CA.prototype.Ja;CA.prototype.setUrl=CA.prototype.Va;CA.prototype.setUrls=CA.prototype.Wa;CA.prototype.getTileGrid=CA.prototype.Ha;CA.prototype.getAttributions=CA.prototype.sa;CA.prototype.getLogo=CA.prototype.qa;CA.prototype.getProjection=CA.prototype.ta;CA.prototype.getState=CA.prototype.ua;CA.prototype.setAttributions=CA.prototype.ma;CA.prototype.get=CA.prototype.get;CA.prototype.getKeys=CA.prototype.P;
CA.prototype.getProperties=CA.prototype.R;CA.prototype.set=CA.prototype.set;CA.prototype.setProperties=CA.prototype.I;CA.prototype.unset=CA.prototype.S;CA.prototype.changed=CA.prototype.u;CA.prototype.dispatchEvent=CA.prototype.s;CA.prototype.getRevision=CA.prototype.L;CA.prototype.on=CA.prototype.H;CA.prototype.once=CA.prototype.M;CA.prototype.un=CA.prototype.K;CA.prototype.unByKey=CA.prototype.N;sz.prototype.getTileCoord=sz.prototype.g;jk.prototype.changed=jk.prototype.u;
jk.prototype.dispatchEvent=jk.prototype.s;jk.prototype.getRevision=jk.prototype.L;jk.prototype.on=jk.prototype.H;jk.prototype.once=jk.prototype.M;jk.prototype.un=jk.prototype.K;jk.prototype.unByKey=jk.prototype.N;Tq.prototype.changed=Tq.prototype.u;Tq.prototype.dispatchEvent=Tq.prototype.s;Tq.prototype.getRevision=Tq.prototype.L;Tq.prototype.on=Tq.prototype.H;Tq.prototype.once=Tq.prototype.M;Tq.prototype.un=Tq.prototype.K;Tq.prototype.unByKey=Tq.prototype.N;Wq.prototype.changed=Wq.prototype.u;
Wq.prototype.dispatchEvent=Wq.prototype.s;Wq.prototype.getRevision=Wq.prototype.L;Wq.prototype.on=Wq.prototype.H;Wq.prototype.once=Wq.prototype.M;Wq.prototype.un=Wq.prototype.K;Wq.prototype.unByKey=Wq.prototype.N;br.prototype.changed=br.prototype.u;br.prototype.dispatchEvent=br.prototype.s;br.prototype.getRevision=br.prototype.L;br.prototype.on=br.prototype.H;br.prototype.once=br.prototype.M;br.prototype.un=br.prototype.K;br.prototype.unByKey=br.prototype.N;dr.prototype.changed=dr.prototype.u;
dr.prototype.dispatchEvent=dr.prototype.s;dr.prototype.getRevision=dr.prototype.L;dr.prototype.on=dr.prototype.H;dr.prototype.once=dr.prototype.M;dr.prototype.un=dr.prototype.K;dr.prototype.unByKey=dr.prototype.N;cq.prototype.changed=cq.prototype.u;cq.prototype.dispatchEvent=cq.prototype.s;cq.prototype.getRevision=cq.prototype.L;cq.prototype.on=cq.prototype.H;cq.prototype.once=cq.prototype.M;cq.prototype.un=cq.prototype.K;cq.prototype.unByKey=cq.prototype.N;dq.prototype.changed=dq.prototype.u;
dq.prototype.dispatchEvent=dq.prototype.s;dq.prototype.getRevision=dq.prototype.L;dq.prototype.on=dq.prototype.H;dq.prototype.once=dq.prototype.M;dq.prototype.un=dq.prototype.K;dq.prototype.unByKey=dq.prototype.N;eq.prototype.changed=eq.prototype.u;eq.prototype.dispatchEvent=eq.prototype.s;eq.prototype.getRevision=eq.prototype.L;eq.prototype.on=eq.prototype.H;eq.prototype.once=eq.prototype.M;eq.prototype.un=eq.prototype.K;eq.prototype.unByKey=eq.prototype.N;gq.prototype.changed=gq.prototype.u;
gq.prototype.dispatchEvent=gq.prototype.s;gq.prototype.getRevision=gq.prototype.L;gq.prototype.on=gq.prototype.H;gq.prototype.once=gq.prototype.M;gq.prototype.un=gq.prototype.K;gq.prototype.unByKey=gq.prototype.N;um.prototype.changed=um.prototype.u;um.prototype.dispatchEvent=um.prototype.s;um.prototype.getRevision=um.prototype.L;um.prototype.on=um.prototype.H;um.prototype.once=um.prototype.M;um.prototype.un=um.prototype.K;um.prototype.unByKey=um.prototype.N;Op.prototype.changed=Op.prototype.u;
Op.prototype.dispatchEvent=Op.prototype.s;Op.prototype.getRevision=Op.prototype.L;Op.prototype.on=Op.prototype.H;Op.prototype.once=Op.prototype.M;Op.prototype.un=Op.prototype.K;Op.prototype.unByKey=Op.prototype.N;Pp.prototype.changed=Pp.prototype.u;Pp.prototype.dispatchEvent=Pp.prototype.s;Pp.prototype.getRevision=Pp.prototype.L;Pp.prototype.on=Pp.prototype.H;Pp.prototype.once=Pp.prototype.M;Pp.prototype.un=Pp.prototype.K;Pp.prototype.unByKey=Pp.prototype.N;Qp.prototype.changed=Qp.prototype.u;
Qp.prototype.dispatchEvent=Qp.prototype.s;Qp.prototype.getRevision=Qp.prototype.L;Qp.prototype.on=Qp.prototype.H;Qp.prototype.once=Qp.prototype.M;Qp.prototype.un=Qp.prototype.K;Qp.prototype.unByKey=Qp.prototype.N;Zp.prototype.changed=Zp.prototype.u;Zp.prototype.dispatchEvent=Zp.prototype.s;Zp.prototype.getRevision=Zp.prototype.L;Zp.prototype.on=Zp.prototype.H;Zp.prototype.once=Zp.prototype.M;Zp.prototype.un=Zp.prototype.K;Zp.prototype.unByKey=Zp.prototype.N;Yj.prototype.get=Yj.prototype.get;
Yj.prototype.getKeys=Yj.prototype.P;Yj.prototype.getProperties=Yj.prototype.R;Yj.prototype.set=Yj.prototype.set;Yj.prototype.setProperties=Yj.prototype.I;Yj.prototype.unset=Yj.prototype.S;Yj.prototype.changed=Yj.prototype.u;Yj.prototype.dispatchEvent=Yj.prototype.s;Yj.prototype.getRevision=Yj.prototype.L;Yj.prototype.on=Yj.prototype.H;Yj.prototype.once=Yj.prototype.M;Yj.prototype.un=Yj.prototype.K;Yj.prototype.unByKey=Yj.prototype.N;ck.prototype.getExtent=ck.prototype.J;
ck.prototype.getMaxResolution=ck.prototype.Nb;ck.prototype.getMinResolution=ck.prototype.Ob;ck.prototype.getOpacity=ck.prototype.Rb;ck.prototype.getVisible=ck.prototype.rb;ck.prototype.getZIndex=ck.prototype.Sb;ck.prototype.setExtent=ck.prototype.cc;ck.prototype.setMaxResolution=ck.prototype.kc;ck.prototype.setMinResolution=ck.prototype.lc;ck.prototype.setOpacity=ck.prototype.dc;ck.prototype.setVisible=ck.prototype.ec;ck.prototype.setZIndex=ck.prototype.fc;ck.prototype.get=ck.prototype.get;
ck.prototype.getKeys=ck.prototype.P;ck.prototype.getProperties=ck.prototype.R;ck.prototype.set=ck.prototype.set;ck.prototype.setProperties=ck.prototype.I;ck.prototype.unset=ck.prototype.S;ck.prototype.changed=ck.prototype.u;ck.prototype.dispatchEvent=ck.prototype.s;ck.prototype.getRevision=ck.prototype.L;ck.prototype.on=ck.prototype.H;ck.prototype.once=ck.prototype.M;ck.prototype.un=ck.prototype.K;ck.prototype.unByKey=ck.prototype.N;H.prototype.setMap=H.prototype.setMap;H.prototype.setSource=H.prototype.zc;
H.prototype.getExtent=H.prototype.J;H.prototype.getMaxResolution=H.prototype.Nb;H.prototype.getMinResolution=H.prototype.Ob;H.prototype.getOpacity=H.prototype.Rb;H.prototype.getVisible=H.prototype.rb;H.prototype.getZIndex=H.prototype.Sb;H.prototype.setExtent=H.prototype.cc;H.prototype.setMaxResolution=H.prototype.kc;H.prototype.setMinResolution=H.prototype.lc;H.prototype.setOpacity=H.prototype.dc;H.prototype.setVisible=H.prototype.ec;H.prototype.setZIndex=H.prototype.fc;H.prototype.get=H.prototype.get;
H.prototype.getKeys=H.prototype.P;H.prototype.getProperties=H.prototype.R;H.prototype.set=H.prototype.set;H.prototype.setProperties=H.prototype.I;H.prototype.unset=H.prototype.S;H.prototype.changed=H.prototype.u;H.prototype.dispatchEvent=H.prototype.s;H.prototype.getRevision=H.prototype.L;H.prototype.on=H.prototype.H;H.prototype.once=H.prototype.M;H.prototype.un=H.prototype.K;H.prototype.unByKey=H.prototype.N;X.prototype.getSource=X.prototype.ea;X.prototype.getStyle=X.prototype.C;
X.prototype.getStyleFunction=X.prototype.D;X.prototype.setStyle=X.prototype.c;X.prototype.setMap=X.prototype.setMap;X.prototype.setSource=X.prototype.zc;X.prototype.getExtent=X.prototype.J;X.prototype.getMaxResolution=X.prototype.Nb;X.prototype.getMinResolution=X.prototype.Ob;X.prototype.getOpacity=X.prototype.Rb;X.prototype.getVisible=X.prototype.rb;X.prototype.getZIndex=X.prototype.Sb;X.prototype.setExtent=X.prototype.cc;X.prototype.setMaxResolution=X.prototype.kc;X.prototype.setMinResolution=X.prototype.lc;
X.prototype.setOpacity=X.prototype.dc;X.prototype.setVisible=X.prototype.ec;X.prototype.setZIndex=X.prototype.fc;X.prototype.get=X.prototype.get;X.prototype.getKeys=X.prototype.P;X.prototype.getProperties=X.prototype.R;X.prototype.set=X.prototype.set;X.prototype.setProperties=X.prototype.I;X.prototype.unset=X.prototype.S;X.prototype.changed=X.prototype.u;X.prototype.dispatchEvent=X.prototype.s;X.prototype.getRevision=X.prototype.L;X.prototype.on=X.prototype.H;X.prototype.once=X.prototype.M;
X.prototype.un=X.prototype.K;X.prototype.unByKey=X.prototype.N;Pl.prototype.setMap=Pl.prototype.setMap;Pl.prototype.setSource=Pl.prototype.zc;Pl.prototype.getExtent=Pl.prototype.J;Pl.prototype.getMaxResolution=Pl.prototype.Nb;Pl.prototype.getMinResolution=Pl.prototype.Ob;Pl.prototype.getOpacity=Pl.prototype.Rb;Pl.prototype.getVisible=Pl.prototype.rb;Pl.prototype.getZIndex=Pl.prototype.Sb;Pl.prototype.setExtent=Pl.prototype.cc;Pl.prototype.setMaxResolution=Pl.prototype.kc;
Pl.prototype.setMinResolution=Pl.prototype.lc;Pl.prototype.setOpacity=Pl.prototype.dc;Pl.prototype.setVisible=Pl.prototype.ec;Pl.prototype.setZIndex=Pl.prototype.fc;Pl.prototype.get=Pl.prototype.get;Pl.prototype.getKeys=Pl.prototype.P;Pl.prototype.getProperties=Pl.prototype.R;Pl.prototype.set=Pl.prototype.set;Pl.prototype.setProperties=Pl.prototype.I;Pl.prototype.unset=Pl.prototype.S;Pl.prototype.changed=Pl.prototype.u;Pl.prototype.dispatchEvent=Pl.prototype.s;Pl.prototype.getRevision=Pl.prototype.L;
Pl.prototype.on=Pl.prototype.H;Pl.prototype.once=Pl.prototype.M;Pl.prototype.un=Pl.prototype.K;Pl.prototype.unByKey=Pl.prototype.N;Hl.prototype.getExtent=Hl.prototype.J;Hl.prototype.getMaxResolution=Hl.prototype.Nb;Hl.prototype.getMinResolution=Hl.prototype.Ob;Hl.prototype.getOpacity=Hl.prototype.Rb;Hl.prototype.getVisible=Hl.prototype.rb;Hl.prototype.getZIndex=Hl.prototype.Sb;Hl.prototype.setExtent=Hl.prototype.cc;Hl.prototype.setMaxResolution=Hl.prototype.kc;Hl.prototype.setMinResolution=Hl.prototype.lc;
Hl.prototype.setOpacity=Hl.prototype.dc;Hl.prototype.setVisible=Hl.prototype.ec;Hl.prototype.setZIndex=Hl.prototype.fc;Hl.prototype.get=Hl.prototype.get;Hl.prototype.getKeys=Hl.prototype.P;Hl.prototype.getProperties=Hl.prototype.R;Hl.prototype.set=Hl.prototype.set;Hl.prototype.setProperties=Hl.prototype.I;Hl.prototype.unset=Hl.prototype.S;Hl.prototype.changed=Hl.prototype.u;Hl.prototype.dispatchEvent=Hl.prototype.s;Hl.prototype.getRevision=Hl.prototype.L;Hl.prototype.on=Hl.prototype.H;
Hl.prototype.once=Hl.prototype.M;Hl.prototype.un=Hl.prototype.K;Hl.prototype.unByKey=Hl.prototype.N;G.prototype.setMap=G.prototype.setMap;G.prototype.setSource=G.prototype.zc;G.prototype.getExtent=G.prototype.J;G.prototype.getMaxResolution=G.prototype.Nb;G.prototype.getMinResolution=G.prototype.Ob;G.prototype.getOpacity=G.prototype.Rb;G.prototype.getVisible=G.prototype.rb;G.prototype.getZIndex=G.prototype.Sb;G.prototype.setExtent=G.prototype.cc;G.prototype.setMaxResolution=G.prototype.kc;
G.prototype.setMinResolution=G.prototype.lc;G.prototype.setOpacity=G.prototype.dc;G.prototype.setVisible=G.prototype.ec;G.prototype.setZIndex=G.prototype.fc;G.prototype.get=G.prototype.get;G.prototype.getKeys=G.prototype.P;G.prototype.getProperties=G.prototype.R;G.prototype.set=G.prototype.set;G.prototype.setProperties=G.prototype.I;G.prototype.unset=G.prototype.S;G.prototype.changed=G.prototype.u;G.prototype.dispatchEvent=G.prototype.s;G.prototype.getRevision=G.prototype.L;G.prototype.on=G.prototype.H;
G.prototype.once=G.prototype.M;G.prototype.un=G.prototype.K;G.prototype.unByKey=G.prototype.N;I.prototype.getStyle=I.prototype.C;I.prototype.getStyleFunction=I.prototype.D;I.prototype.setStyle=I.prototype.c;I.prototype.setMap=I.prototype.setMap;I.prototype.setSource=I.prototype.zc;I.prototype.getExtent=I.prototype.J;I.prototype.getMaxResolution=I.prototype.Nb;I.prototype.getMinResolution=I.prototype.Ob;I.prototype.getOpacity=I.prototype.Rb;I.prototype.getVisible=I.prototype.rb;
I.prototype.getZIndex=I.prototype.Sb;I.prototype.setExtent=I.prototype.cc;I.prototype.setMaxResolution=I.prototype.kc;I.prototype.setMinResolution=I.prototype.lc;I.prototype.setOpacity=I.prototype.dc;I.prototype.setVisible=I.prototype.ec;I.prototype.setZIndex=I.prototype.fc;I.prototype.get=I.prototype.get;I.prototype.getKeys=I.prototype.P;I.prototype.getProperties=I.prototype.R;I.prototype.set=I.prototype.set;I.prototype.setProperties=I.prototype.I;I.prototype.unset=I.prototype.S;
I.prototype.changed=I.prototype.u;I.prototype.dispatchEvent=I.prototype.s;I.prototype.getRevision=I.prototype.L;I.prototype.on=I.prototype.H;I.prototype.once=I.prototype.M;I.prototype.un=I.prototype.K;I.prototype.unByKey=I.prototype.N;Lk.prototype.get=Lk.prototype.get;Lk.prototype.getKeys=Lk.prototype.P;Lk.prototype.getProperties=Lk.prototype.R;Lk.prototype.set=Lk.prototype.set;Lk.prototype.setProperties=Lk.prototype.I;Lk.prototype.unset=Lk.prototype.S;Lk.prototype.changed=Lk.prototype.u;
Lk.prototype.dispatchEvent=Lk.prototype.s;Lk.prototype.getRevision=Lk.prototype.L;Lk.prototype.on=Lk.prototype.H;Lk.prototype.once=Lk.prototype.M;Lk.prototype.un=Lk.prototype.K;Lk.prototype.unByKey=Lk.prototype.N;Pk.prototype.getActive=Pk.prototype.b;Pk.prototype.getMap=Pk.prototype.i;Pk.prototype.setActive=Pk.prototype.g;Pk.prototype.get=Pk.prototype.get;Pk.prototype.getKeys=Pk.prototype.P;Pk.prototype.getProperties=Pk.prototype.R;Pk.prototype.set=Pk.prototype.set;Pk.prototype.setProperties=Pk.prototype.I;
Pk.prototype.unset=Pk.prototype.S;Pk.prototype.changed=Pk.prototype.u;Pk.prototype.dispatchEvent=Pk.prototype.s;Pk.prototype.getRevision=Pk.prototype.L;Pk.prototype.on=Pk.prototype.H;Pk.prototype.once=Pk.prototype.M;Pk.prototype.un=Pk.prototype.K;Pk.prototype.unByKey=Pk.prototype.N;qy.prototype.getActive=qy.prototype.b;qy.prototype.getMap=qy.prototype.i;qy.prototype.setActive=qy.prototype.g;qy.prototype.get=qy.prototype.get;qy.prototype.getKeys=qy.prototype.P;qy.prototype.getProperties=qy.prototype.R;
qy.prototype.set=qy.prototype.set;qy.prototype.setProperties=qy.prototype.I;qy.prototype.unset=qy.prototype.S;qy.prototype.changed=qy.prototype.u;qy.prototype.dispatchEvent=qy.prototype.s;qy.prototype.getRevision=qy.prototype.L;qy.prototype.on=qy.prototype.H;qy.prototype.once=qy.prototype.M;qy.prototype.un=qy.prototype.K;qy.prototype.unByKey=qy.prototype.N;Yk.prototype.getActive=Yk.prototype.b;Yk.prototype.getMap=Yk.prototype.i;Yk.prototype.setActive=Yk.prototype.g;Yk.prototype.get=Yk.prototype.get;
Yk.prototype.getKeys=Yk.prototype.P;Yk.prototype.getProperties=Yk.prototype.R;Yk.prototype.set=Yk.prototype.set;Yk.prototype.setProperties=Yk.prototype.I;Yk.prototype.unset=Yk.prototype.S;Yk.prototype.changed=Yk.prototype.u;Yk.prototype.dispatchEvent=Yk.prototype.s;Yk.prototype.getRevision=Yk.prototype.L;Yk.prototype.on=Yk.prototype.H;Yk.prototype.once=Yk.prototype.M;Yk.prototype.un=Yk.prototype.K;Yk.prototype.unByKey=Yk.prototype.N;ml.prototype.getActive=ml.prototype.b;ml.prototype.getMap=ml.prototype.i;
ml.prototype.setActive=ml.prototype.g;ml.prototype.get=ml.prototype.get;ml.prototype.getKeys=ml.prototype.P;ml.prototype.getProperties=ml.prototype.R;ml.prototype.set=ml.prototype.set;ml.prototype.setProperties=ml.prototype.I;ml.prototype.unset=ml.prototype.S;ml.prototype.changed=ml.prototype.u;ml.prototype.dispatchEvent=ml.prototype.s;ml.prototype.getRevision=ml.prototype.L;ml.prototype.on=ml.prototype.H;ml.prototype.once=ml.prototype.M;ml.prototype.un=ml.prototype.K;ml.prototype.unByKey=ml.prototype.N;
al.prototype.getActive=al.prototype.b;al.prototype.getMap=al.prototype.i;al.prototype.setActive=al.prototype.g;al.prototype.get=al.prototype.get;al.prototype.getKeys=al.prototype.P;al.prototype.getProperties=al.prototype.R;al.prototype.set=al.prototype.set;al.prototype.setProperties=al.prototype.I;al.prototype.unset=al.prototype.S;al.prototype.changed=al.prototype.u;al.prototype.dispatchEvent=al.prototype.s;al.prototype.getRevision=al.prototype.L;al.prototype.on=al.prototype.H;al.prototype.once=al.prototype.M;
al.prototype.un=al.prototype.K;al.prototype.unByKey=al.prototype.N;uy.prototype.getActive=uy.prototype.b;uy.prototype.getMap=uy.prototype.i;uy.prototype.setActive=uy.prototype.g;uy.prototype.get=uy.prototype.get;uy.prototype.getKeys=uy.prototype.P;uy.prototype.getProperties=uy.prototype.R;uy.prototype.set=uy.prototype.set;uy.prototype.setProperties=uy.prototype.I;uy.prototype.unset=uy.prototype.S;uy.prototype.changed=uy.prototype.u;uy.prototype.dispatchEvent=uy.prototype.s;
uy.prototype.getRevision=uy.prototype.L;uy.prototype.on=uy.prototype.H;uy.prototype.once=uy.prototype.M;uy.prototype.un=uy.prototype.K;uy.prototype.unByKey=uy.prototype.N;el.prototype.getActive=el.prototype.b;el.prototype.getMap=el.prototype.i;el.prototype.setActive=el.prototype.g;el.prototype.get=el.prototype.get;el.prototype.getKeys=el.prototype.P;el.prototype.getProperties=el.prototype.R;el.prototype.set=el.prototype.set;el.prototype.setProperties=el.prototype.I;el.prototype.unset=el.prototype.S;
el.prototype.changed=el.prototype.u;el.prototype.dispatchEvent=el.prototype.s;el.prototype.getRevision=el.prototype.L;el.prototype.on=el.prototype.H;el.prototype.once=el.prototype.M;el.prototype.un=el.prototype.K;el.prototype.unByKey=el.prototype.N;rl.prototype.getGeometry=rl.prototype.X;rl.prototype.getActive=rl.prototype.b;rl.prototype.getMap=rl.prototype.i;rl.prototype.setActive=rl.prototype.g;rl.prototype.get=rl.prototype.get;rl.prototype.getKeys=rl.prototype.P;rl.prototype.getProperties=rl.prototype.R;
rl.prototype.set=rl.prototype.set;rl.prototype.setProperties=rl.prototype.I;rl.prototype.unset=rl.prototype.S;rl.prototype.changed=rl.prototype.u;rl.prototype.dispatchEvent=rl.prototype.s;rl.prototype.getRevision=rl.prototype.L;rl.prototype.on=rl.prototype.H;rl.prototype.once=rl.prototype.M;rl.prototype.un=rl.prototype.K;rl.prototype.unByKey=rl.prototype.N;zy.prototype.getActive=zy.prototype.b;zy.prototype.getMap=zy.prototype.i;zy.prototype.setActive=zy.prototype.g;zy.prototype.get=zy.prototype.get;
zy.prototype.getKeys=zy.prototype.P;zy.prototype.getProperties=zy.prototype.R;zy.prototype.set=zy.prototype.set;zy.prototype.setProperties=zy.prototype.I;zy.prototype.unset=zy.prototype.S;zy.prototype.changed=zy.prototype.u;zy.prototype.dispatchEvent=zy.prototype.s;zy.prototype.getRevision=zy.prototype.L;zy.prototype.on=zy.prototype.H;zy.prototype.once=zy.prototype.M;zy.prototype.un=zy.prototype.K;zy.prototype.unByKey=zy.prototype.N;sl.prototype.getActive=sl.prototype.b;sl.prototype.getMap=sl.prototype.i;
sl.prototype.setActive=sl.prototype.g;sl.prototype.get=sl.prototype.get;sl.prototype.getKeys=sl.prototype.P;sl.prototype.getProperties=sl.prototype.R;sl.prototype.set=sl.prototype.set;sl.prototype.setProperties=sl.prototype.I;sl.prototype.unset=sl.prototype.S;sl.prototype.changed=sl.prototype.u;sl.prototype.dispatchEvent=sl.prototype.s;sl.prototype.getRevision=sl.prototype.L;sl.prototype.on=sl.prototype.H;sl.prototype.once=sl.prototype.M;sl.prototype.un=sl.prototype.K;sl.prototype.unByKey=sl.prototype.N;
ul.prototype.getActive=ul.prototype.b;ul.prototype.getMap=ul.prototype.i;ul.prototype.setActive=ul.prototype.g;ul.prototype.get=ul.prototype.get;ul.prototype.getKeys=ul.prototype.P;ul.prototype.getProperties=ul.prototype.R;ul.prototype.set=ul.prototype.set;ul.prototype.setProperties=ul.prototype.I;ul.prototype.unset=ul.prototype.S;ul.prototype.changed=ul.prototype.u;ul.prototype.dispatchEvent=ul.prototype.s;ul.prototype.getRevision=ul.prototype.L;ul.prototype.on=ul.prototype.H;ul.prototype.once=ul.prototype.M;
ul.prototype.un=ul.prototype.K;ul.prototype.unByKey=ul.prototype.N;Qy.prototype.getActive=Qy.prototype.b;Qy.prototype.getMap=Qy.prototype.i;Qy.prototype.setActive=Qy.prototype.g;Qy.prototype.get=Qy.prototype.get;Qy.prototype.getKeys=Qy.prototype.P;Qy.prototype.getProperties=Qy.prototype.R;Qy.prototype.set=Qy.prototype.set;Qy.prototype.setProperties=Qy.prototype.I;Qy.prototype.unset=Qy.prototype.S;Qy.prototype.changed=Qy.prototype.u;Qy.prototype.dispatchEvent=Qy.prototype.s;
Qy.prototype.getRevision=Qy.prototype.L;Qy.prototype.on=Qy.prototype.H;Qy.prototype.once=Qy.prototype.M;Qy.prototype.un=Qy.prototype.K;Qy.prototype.unByKey=Qy.prototype.N;wl.prototype.getActive=wl.prototype.b;wl.prototype.getMap=wl.prototype.i;wl.prototype.setActive=wl.prototype.g;wl.prototype.get=wl.prototype.get;wl.prototype.getKeys=wl.prototype.P;wl.prototype.getProperties=wl.prototype.R;wl.prototype.set=wl.prototype.set;wl.prototype.setProperties=wl.prototype.I;wl.prototype.unset=wl.prototype.S;
wl.prototype.changed=wl.prototype.u;wl.prototype.dispatchEvent=wl.prototype.s;wl.prototype.getRevision=wl.prototype.L;wl.prototype.on=wl.prototype.H;wl.prototype.once=wl.prototype.M;wl.prototype.un=wl.prototype.K;wl.prototype.unByKey=wl.prototype.N;yl.prototype.getActive=yl.prototype.b;yl.prototype.getMap=yl.prototype.i;yl.prototype.setActive=yl.prototype.g;yl.prototype.get=yl.prototype.get;yl.prototype.getKeys=yl.prototype.P;yl.prototype.getProperties=yl.prototype.R;yl.prototype.set=yl.prototype.set;
yl.prototype.setProperties=yl.prototype.I;yl.prototype.unset=yl.prototype.S;yl.prototype.changed=yl.prototype.u;yl.prototype.dispatchEvent=yl.prototype.s;yl.prototype.getRevision=yl.prototype.L;yl.prototype.on=yl.prototype.H;yl.prototype.once=yl.prototype.M;yl.prototype.un=yl.prototype.K;yl.prototype.unByKey=yl.prototype.N;Cl.prototype.getActive=Cl.prototype.b;Cl.prototype.getMap=Cl.prototype.i;Cl.prototype.setActive=Cl.prototype.g;Cl.prototype.get=Cl.prototype.get;Cl.prototype.getKeys=Cl.prototype.P;
Cl.prototype.getProperties=Cl.prototype.R;Cl.prototype.set=Cl.prototype.set;Cl.prototype.setProperties=Cl.prototype.I;Cl.prototype.unset=Cl.prototype.S;Cl.prototype.changed=Cl.prototype.u;Cl.prototype.dispatchEvent=Cl.prototype.s;Cl.prototype.getRevision=Cl.prototype.L;Cl.prototype.on=Cl.prototype.H;Cl.prototype.once=Cl.prototype.M;Cl.prototype.un=Cl.prototype.K;Cl.prototype.unByKey=Cl.prototype.N;dz.prototype.getActive=dz.prototype.b;dz.prototype.getMap=dz.prototype.i;dz.prototype.setActive=dz.prototype.g;
dz.prototype.get=dz.prototype.get;dz.prototype.getKeys=dz.prototype.P;dz.prototype.getProperties=dz.prototype.R;dz.prototype.set=dz.prototype.set;dz.prototype.setProperties=dz.prototype.I;dz.prototype.unset=dz.prototype.S;dz.prototype.changed=dz.prototype.u;dz.prototype.dispatchEvent=dz.prototype.s;dz.prototype.getRevision=dz.prototype.L;dz.prototype.on=dz.prototype.H;dz.prototype.once=dz.prototype.M;dz.prototype.un=dz.prototype.K;dz.prototype.unByKey=dz.prototype.N;gz.prototype.getActive=gz.prototype.b;
gz.prototype.getMap=gz.prototype.i;gz.prototype.setActive=gz.prototype.g;gz.prototype.get=gz.prototype.get;gz.prototype.getKeys=gz.prototype.P;gz.prototype.getProperties=gz.prototype.R;gz.prototype.set=gz.prototype.set;gz.prototype.setProperties=gz.prototype.I;gz.prototype.unset=gz.prototype.S;gz.prototype.changed=gz.prototype.u;gz.prototype.dispatchEvent=gz.prototype.s;gz.prototype.getRevision=gz.prototype.L;gz.prototype.on=gz.prototype.H;gz.prototype.once=gz.prototype.M;gz.prototype.un=gz.prototype.K;
gz.prototype.unByKey=gz.prototype.N;lz.prototype.getActive=lz.prototype.b;lz.prototype.getMap=lz.prototype.i;lz.prototype.setActive=lz.prototype.g;lz.prototype.get=lz.prototype.get;lz.prototype.getKeys=lz.prototype.P;lz.prototype.getProperties=lz.prototype.R;lz.prototype.set=lz.prototype.set;lz.prototype.setProperties=lz.prototype.I;lz.prototype.unset=lz.prototype.S;lz.prototype.changed=lz.prototype.u;lz.prototype.dispatchEvent=lz.prototype.s;lz.prototype.getRevision=lz.prototype.L;
lz.prototype.on=lz.prototype.H;lz.prototype.once=lz.prototype.M;lz.prototype.un=lz.prototype.K;lz.prototype.unByKey=lz.prototype.N;$e.prototype.get=$e.prototype.get;$e.prototype.getKeys=$e.prototype.P;$e.prototype.getProperties=$e.prototype.R;$e.prototype.set=$e.prototype.set;$e.prototype.setProperties=$e.prototype.I;$e.prototype.unset=$e.prototype.S;$e.prototype.changed=$e.prototype.u;$e.prototype.dispatchEvent=$e.prototype.s;$e.prototype.getRevision=$e.prototype.L;$e.prototype.on=$e.prototype.H;
$e.prototype.once=$e.prototype.M;$e.prototype.un=$e.prototype.K;$e.prototype.unByKey=$e.prototype.N;bf.prototype.getClosestPoint=bf.prototype.qb;bf.prototype.getExtent=bf.prototype.J;bf.prototype.simplify=bf.prototype.xb;bf.prototype.transform=bf.prototype.lb;bf.prototype.get=bf.prototype.get;bf.prototype.getKeys=bf.prototype.P;bf.prototype.getProperties=bf.prototype.R;bf.prototype.set=bf.prototype.set;bf.prototype.setProperties=bf.prototype.I;bf.prototype.unset=bf.prototype.S;
bf.prototype.changed=bf.prototype.u;bf.prototype.dispatchEvent=bf.prototype.s;bf.prototype.getRevision=bf.prototype.L;bf.prototype.on=bf.prototype.H;bf.prototype.once=bf.prototype.M;bf.prototype.un=bf.prototype.K;bf.prototype.unByKey=bf.prototype.N;Nx.prototype.getFirstCoordinate=Nx.prototype.Kb;Nx.prototype.getLastCoordinate=Nx.prototype.Lb;Nx.prototype.getLayout=Nx.prototype.Mb;Nx.prototype.getClosestPoint=Nx.prototype.qb;Nx.prototype.getExtent=Nx.prototype.J;Nx.prototype.simplify=Nx.prototype.xb;
Nx.prototype.get=Nx.prototype.get;Nx.prototype.getKeys=Nx.prototype.P;Nx.prototype.getProperties=Nx.prototype.R;Nx.prototype.set=Nx.prototype.set;Nx.prototype.setProperties=Nx.prototype.I;Nx.prototype.unset=Nx.prototype.S;Nx.prototype.changed=Nx.prototype.u;Nx.prototype.dispatchEvent=Nx.prototype.s;Nx.prototype.getRevision=Nx.prototype.L;Nx.prototype.on=Nx.prototype.H;Nx.prototype.once=Nx.prototype.M;Nx.prototype.un=Nx.prototype.K;Nx.prototype.unByKey=Nx.prototype.N;gs.prototype.getClosestPoint=gs.prototype.qb;
gs.prototype.getExtent=gs.prototype.J;gs.prototype.simplify=gs.prototype.xb;gs.prototype.transform=gs.prototype.lb;gs.prototype.get=gs.prototype.get;gs.prototype.getKeys=gs.prototype.P;gs.prototype.getProperties=gs.prototype.R;gs.prototype.set=gs.prototype.set;gs.prototype.setProperties=gs.prototype.I;gs.prototype.unset=gs.prototype.S;gs.prototype.changed=gs.prototype.u;gs.prototype.dispatchEvent=gs.prototype.s;gs.prototype.getRevision=gs.prototype.L;gs.prototype.on=gs.prototype.H;
gs.prototype.once=gs.prototype.M;gs.prototype.un=gs.prototype.K;gs.prototype.unByKey=gs.prototype.N;vf.prototype.getFirstCoordinate=vf.prototype.Kb;vf.prototype.getLastCoordinate=vf.prototype.Lb;vf.prototype.getLayout=vf.prototype.Mb;vf.prototype.getClosestPoint=vf.prototype.qb;vf.prototype.getExtent=vf.prototype.J;vf.prototype.simplify=vf.prototype.xb;vf.prototype.transform=vf.prototype.lb;vf.prototype.get=vf.prototype.get;vf.prototype.getKeys=vf.prototype.P;vf.prototype.getProperties=vf.prototype.R;
vf.prototype.set=vf.prototype.set;vf.prototype.setProperties=vf.prototype.I;vf.prototype.unset=vf.prototype.S;vf.prototype.changed=vf.prototype.u;vf.prototype.dispatchEvent=vf.prototype.s;vf.prototype.getRevision=vf.prototype.L;vf.prototype.on=vf.prototype.H;vf.prototype.once=vf.prototype.M;vf.prototype.un=vf.prototype.K;vf.prototype.unByKey=vf.prototype.N;T.prototype.getFirstCoordinate=T.prototype.Kb;T.prototype.getLastCoordinate=T.prototype.Lb;T.prototype.getLayout=T.prototype.Mb;
T.prototype.getClosestPoint=T.prototype.qb;T.prototype.getExtent=T.prototype.J;T.prototype.simplify=T.prototype.xb;T.prototype.transform=T.prototype.lb;T.prototype.get=T.prototype.get;T.prototype.getKeys=T.prototype.P;T.prototype.getProperties=T.prototype.R;T.prototype.set=T.prototype.set;T.prototype.setProperties=T.prototype.I;T.prototype.unset=T.prototype.S;T.prototype.changed=T.prototype.u;T.prototype.dispatchEvent=T.prototype.s;T.prototype.getRevision=T.prototype.L;T.prototype.on=T.prototype.H;
T.prototype.once=T.prototype.M;T.prototype.un=T.prototype.K;T.prototype.unByKey=T.prototype.N;U.prototype.getFirstCoordinate=U.prototype.Kb;U.prototype.getLastCoordinate=U.prototype.Lb;U.prototype.getLayout=U.prototype.Mb;U.prototype.getClosestPoint=U.prototype.qb;U.prototype.getExtent=U.prototype.J;U.prototype.simplify=U.prototype.xb;U.prototype.transform=U.prototype.lb;U.prototype.get=U.prototype.get;U.prototype.getKeys=U.prototype.P;U.prototype.getProperties=U.prototype.R;U.prototype.set=U.prototype.set;
U.prototype.setProperties=U.prototype.I;U.prototype.unset=U.prototype.S;U.prototype.changed=U.prototype.u;U.prototype.dispatchEvent=U.prototype.s;U.prototype.getRevision=U.prototype.L;U.prototype.on=U.prototype.H;U.prototype.once=U.prototype.M;U.prototype.un=U.prototype.K;U.prototype.unByKey=U.prototype.N;Xr.prototype.getFirstCoordinate=Xr.prototype.Kb;Xr.prototype.getLastCoordinate=Xr.prototype.Lb;Xr.prototype.getLayout=Xr.prototype.Mb;Xr.prototype.getClosestPoint=Xr.prototype.qb;
Xr.prototype.getExtent=Xr.prototype.J;Xr.prototype.simplify=Xr.prototype.xb;Xr.prototype.transform=Xr.prototype.lb;Xr.prototype.get=Xr.prototype.get;Xr.prototype.getKeys=Xr.prototype.P;Xr.prototype.getProperties=Xr.prototype.R;Xr.prototype.set=Xr.prototype.set;Xr.prototype.setProperties=Xr.prototype.I;Xr.prototype.unset=Xr.prototype.S;Xr.prototype.changed=Xr.prototype.u;Xr.prototype.dispatchEvent=Xr.prototype.s;Xr.prototype.getRevision=Xr.prototype.L;Xr.prototype.on=Xr.prototype.H;
Xr.prototype.once=Xr.prototype.M;Xr.prototype.un=Xr.prototype.K;Xr.prototype.unByKey=Xr.prototype.N;V.prototype.getFirstCoordinate=V.prototype.Kb;V.prototype.getLastCoordinate=V.prototype.Lb;V.prototype.getLayout=V.prototype.Mb;V.prototype.getClosestPoint=V.prototype.qb;V.prototype.getExtent=V.prototype.J;V.prototype.simplify=V.prototype.xb;V.prototype.transform=V.prototype.lb;V.prototype.get=V.prototype.get;V.prototype.getKeys=V.prototype.P;V.prototype.getProperties=V.prototype.R;
V.prototype.set=V.prototype.set;V.prototype.setProperties=V.prototype.I;V.prototype.unset=V.prototype.S;V.prototype.changed=V.prototype.u;V.prototype.dispatchEvent=V.prototype.s;V.prototype.getRevision=V.prototype.L;V.prototype.on=V.prototype.H;V.prototype.once=V.prototype.M;V.prototype.un=V.prototype.K;V.prototype.unByKey=V.prototype.N;E.prototype.getFirstCoordinate=E.prototype.Kb;E.prototype.getLastCoordinate=E.prototype.Lb;E.prototype.getLayout=E.prototype.Mb;E.prototype.getClosestPoint=E.prototype.qb;
E.prototype.getExtent=E.prototype.J;E.prototype.simplify=E.prototype.xb;E.prototype.transform=E.prototype.lb;E.prototype.get=E.prototype.get;E.prototype.getKeys=E.prototype.P;E.prototype.getProperties=E.prototype.R;E.prototype.set=E.prototype.set;E.prototype.setProperties=E.prototype.I;E.prototype.unset=E.prototype.S;E.prototype.changed=E.prototype.u;E.prototype.dispatchEvent=E.prototype.s;E.prototype.getRevision=E.prototype.L;E.prototype.on=E.prototype.H;E.prototype.once=E.prototype.M;
E.prototype.un=E.prototype.K;E.prototype.unByKey=E.prototype.N;F.prototype.getFirstCoordinate=F.prototype.Kb;F.prototype.getLastCoordinate=F.prototype.Lb;F.prototype.getLayout=F.prototype.Mb;F.prototype.getClosestPoint=F.prototype.qb;F.prototype.getExtent=F.prototype.J;F.prototype.simplify=F.prototype.xb;F.prototype.transform=F.prototype.lb;F.prototype.get=F.prototype.get;F.prototype.getKeys=F.prototype.P;F.prototype.getProperties=F.prototype.R;F.prototype.set=F.prototype.set;
F.prototype.setProperties=F.prototype.I;F.prototype.unset=F.prototype.S;F.prototype.changed=F.prototype.u;F.prototype.dispatchEvent=F.prototype.s;F.prototype.getRevision=F.prototype.L;F.prototype.on=F.prototype.H;F.prototype.once=F.prototype.M;F.prototype.un=F.prototype.K;F.prototype.unByKey=F.prototype.N;Es.prototype.readFeatures=Es.prototype.Ba;Fs.prototype.readFeatures=Fs.prototype.Ba;Fs.prototype.readFeatures=Fs.prototype.Ba;oh.prototype.get=oh.prototype.get;oh.prototype.getKeys=oh.prototype.P;
oh.prototype.getProperties=oh.prototype.R;oh.prototype.set=oh.prototype.set;oh.prototype.setProperties=oh.prototype.I;oh.prototype.unset=oh.prototype.S;oh.prototype.changed=oh.prototype.u;oh.prototype.dispatchEvent=oh.prototype.s;oh.prototype.getRevision=oh.prototype.L;oh.prototype.on=oh.prototype.H;oh.prototype.once=oh.prototype.M;oh.prototype.un=oh.prototype.K;oh.prototype.unByKey=oh.prototype.N;Rh.prototype.getMap=Rh.prototype.g;Rh.prototype.setMap=Rh.prototype.setMap;Rh.prototype.setTarget=Rh.prototype.c;
Rh.prototype.get=Rh.prototype.get;Rh.prototype.getKeys=Rh.prototype.P;Rh.prototype.getProperties=Rh.prototype.R;Rh.prototype.set=Rh.prototype.set;Rh.prototype.setProperties=Rh.prototype.I;Rh.prototype.unset=Rh.prototype.S;Rh.prototype.changed=Rh.prototype.u;Rh.prototype.dispatchEvent=Rh.prototype.s;Rh.prototype.getRevision=Rh.prototype.L;Rh.prototype.on=Rh.prototype.H;Rh.prototype.once=Rh.prototype.M;Rh.prototype.un=Rh.prototype.K;Rh.prototype.unByKey=Rh.prototype.N;bi.prototype.getMap=bi.prototype.g;
bi.prototype.setMap=bi.prototype.setMap;bi.prototype.setTarget=bi.prototype.c;bi.prototype.get=bi.prototype.get;bi.prototype.getKeys=bi.prototype.P;bi.prototype.getProperties=bi.prototype.R;bi.prototype.set=bi.prototype.set;bi.prototype.setProperties=bi.prototype.I;bi.prototype.unset=bi.prototype.S;bi.prototype.changed=bi.prototype.u;bi.prototype.dispatchEvent=bi.prototype.s;bi.prototype.getRevision=bi.prototype.L;bi.prototype.on=bi.prototype.H;bi.prototype.once=bi.prototype.M;bi.prototype.un=bi.prototype.K;
bi.prototype.unByKey=bi.prototype.N;di.prototype.getMap=di.prototype.g;di.prototype.setMap=di.prototype.setMap;di.prototype.setTarget=di.prototype.c;di.prototype.get=di.prototype.get;di.prototype.getKeys=di.prototype.P;di.prototype.getProperties=di.prototype.R;di.prototype.set=di.prototype.set;di.prototype.setProperties=di.prototype.I;di.prototype.unset=di.prototype.S;di.prototype.changed=di.prototype.u;di.prototype.dispatchEvent=di.prototype.s;di.prototype.getRevision=di.prototype.L;
di.prototype.on=di.prototype.H;di.prototype.once=di.prototype.M;di.prototype.un=di.prototype.K;di.prototype.unByKey=di.prototype.N;nr.prototype.getMap=nr.prototype.g;nr.prototype.setMap=nr.prototype.setMap;nr.prototype.setTarget=nr.prototype.c;nr.prototype.get=nr.prototype.get;nr.prototype.getKeys=nr.prototype.P;nr.prototype.getProperties=nr.prototype.R;nr.prototype.set=nr.prototype.set;nr.prototype.setProperties=nr.prototype.I;nr.prototype.unset=nr.prototype.S;nr.prototype.changed=nr.prototype.u;
nr.prototype.dispatchEvent=nr.prototype.s;nr.prototype.getRevision=nr.prototype.L;nr.prototype.on=nr.prototype.H;nr.prototype.once=nr.prototype.M;nr.prototype.un=nr.prototype.K;nr.prototype.unByKey=nr.prototype.N;Uh.prototype.getMap=Uh.prototype.g;Uh.prototype.setMap=Uh.prototype.setMap;Uh.prototype.setTarget=Uh.prototype.c;Uh.prototype.get=Uh.prototype.get;Uh.prototype.getKeys=Uh.prototype.P;Uh.prototype.getProperties=Uh.prototype.R;Uh.prototype.set=Uh.prototype.set;Uh.prototype.setProperties=Uh.prototype.I;
Uh.prototype.unset=Uh.prototype.S;Uh.prototype.changed=Uh.prototype.u;Uh.prototype.dispatchEvent=Uh.prototype.s;Uh.prototype.getRevision=Uh.prototype.L;Uh.prototype.on=Uh.prototype.H;Uh.prototype.once=Uh.prototype.M;Uh.prototype.un=Uh.prototype.K;Uh.prototype.unByKey=Uh.prototype.N;sr.prototype.getMap=sr.prototype.g;sr.prototype.setMap=sr.prototype.setMap;sr.prototype.setTarget=sr.prototype.c;sr.prototype.get=sr.prototype.get;sr.prototype.getKeys=sr.prototype.P;sr.prototype.getProperties=sr.prototype.R;
sr.prototype.set=sr.prototype.set;sr.prototype.setProperties=sr.prototype.I;sr.prototype.unset=sr.prototype.S;sr.prototype.changed=sr.prototype.u;sr.prototype.dispatchEvent=sr.prototype.s;sr.prototype.getRevision=sr.prototype.L;sr.prototype.on=sr.prototype.H;sr.prototype.once=sr.prototype.M;sr.prototype.un=sr.prototype.K;sr.prototype.unByKey=sr.prototype.N;Wh.prototype.getMap=Wh.prototype.g;Wh.prototype.setMap=Wh.prototype.setMap;Wh.prototype.setTarget=Wh.prototype.c;Wh.prototype.get=Wh.prototype.get;
Wh.prototype.getKeys=Wh.prototype.P;Wh.prototype.getProperties=Wh.prototype.R;Wh.prototype.set=Wh.prototype.set;Wh.prototype.setProperties=Wh.prototype.I;Wh.prototype.unset=Wh.prototype.S;Wh.prototype.changed=Wh.prototype.u;Wh.prototype.dispatchEvent=Wh.prototype.s;Wh.prototype.getRevision=Wh.prototype.L;Wh.prototype.on=Wh.prototype.H;Wh.prototype.once=Wh.prototype.M;Wh.prototype.un=Wh.prototype.K;Wh.prototype.unByKey=Wh.prototype.N;Gr.prototype.getMap=Gr.prototype.g;Gr.prototype.setMap=Gr.prototype.setMap;
Gr.prototype.setTarget=Gr.prototype.c;Gr.prototype.get=Gr.prototype.get;Gr.prototype.getKeys=Gr.prototype.P;Gr.prototype.getProperties=Gr.prototype.R;Gr.prototype.set=Gr.prototype.set;Gr.prototype.setProperties=Gr.prototype.I;Gr.prototype.unset=Gr.prototype.S;Gr.prototype.changed=Gr.prototype.u;Gr.prototype.dispatchEvent=Gr.prototype.s;Gr.prototype.getRevision=Gr.prototype.L;Gr.prototype.on=Gr.prototype.H;Gr.prototype.once=Gr.prototype.M;Gr.prototype.un=Gr.prototype.K;Gr.prototype.unByKey=Gr.prototype.N;
Lr.prototype.getMap=Lr.prototype.g;Lr.prototype.setMap=Lr.prototype.setMap;Lr.prototype.setTarget=Lr.prototype.c;Lr.prototype.get=Lr.prototype.get;Lr.prototype.getKeys=Lr.prototype.P;Lr.prototype.getProperties=Lr.prototype.R;Lr.prototype.set=Lr.prototype.set;Lr.prototype.setProperties=Lr.prototype.I;Lr.prototype.unset=Lr.prototype.S;Lr.prototype.changed=Lr.prototype.u;Lr.prototype.dispatchEvent=Lr.prototype.s;Lr.prototype.getRevision=Lr.prototype.L;Lr.prototype.on=Lr.prototype.H;
Lr.prototype.once=Lr.prototype.M;Lr.prototype.un=Lr.prototype.K;Lr.prototype.unByKey=Lr.prototype.N;
  return OPENLAYERS.ol;
}));




window.google = window.google || {};
google.maps = google.maps || {};
(function() {
  
  function getScript(src) {
    document.write('<' + 'script src="' + src + '"><' + '/script>');
  }
  
  var modules = google.maps.modules = {};
  google.maps.__gjsload__ = function(name, text) {
    modules[name] = text;
  };
  
  google.maps.Load = function(apiLoad) {
    delete google.maps.Load;
    apiLoad([0.009999999776482582,[[["http://mt0.googleapis.com/maps/vt?lyrs=m@367000000\u0026src=api\u0026hl=en-US\u0026","http://mt1.googleapis.com/maps/vt?lyrs=m@367000000\u0026src=api\u0026hl=en-US\u0026"],null,null,null,null,"m@367000000",["https://mts0.google.com/maps/vt?lyrs=m@367000000\u0026src=api\u0026hl=en-US\u0026","https://mts1.google.com/maps/vt?lyrs=m@367000000\u0026src=api\u0026hl=en-US\u0026"]],[["http://khm0.googleapis.com/kh?v=703\u0026hl=en-US\u0026","http://khm1.googleapis.com/kh?v=703\u0026hl=en-US\u0026"],null,null,null,1,"703",["https://khms0.google.com/kh?v=703\u0026hl=en-US\u0026","https://khms1.google.com/kh?v=703\u0026hl=en-US\u0026"]],null,[["http://mt0.googleapis.com/maps/vt?lyrs=t@367,r@367000000\u0026src=api\u0026hl=en-US\u0026","http://mt1.googleapis.com/maps/vt?lyrs=t@367,r@367000000\u0026src=api\u0026hl=en-US\u0026"],null,null,null,null,"t@367,r@367000000",["https://mts0.google.com/maps/vt?lyrs=t@367,r@367000000\u0026src=api\u0026hl=en-US\u0026","https://mts1.google.com/maps/vt?lyrs=t@367,r@367000000\u0026src=api\u0026hl=en-US\u0026"]],null,null,[["http://cbk0.googleapis.com/cbk?","http://cbk1.googleapis.com/cbk?"]],[["http://khm0.googleapis.com/kh?v=101\u0026hl=en-US\u0026","http://khm1.googleapis.com/kh?v=101\u0026hl=en-US\u0026"],null,null,null,null,"101",["https://khms0.google.com/kh?v=101\u0026hl=en-US\u0026","https://khms1.google.com/kh?v=101\u0026hl=en-US\u0026"]],[["http://mt0.googleapis.com/mapslt?hl=en-US\u0026","http://mt1.googleapis.com/mapslt?hl=en-US\u0026"]],[["http://mt0.googleapis.com/mapslt/ft?hl=en-US\u0026","http://mt1.googleapis.com/mapslt/ft?hl=en-US\u0026"]],[["http://mt0.googleapis.com/maps/vt?hl=en-US\u0026","http://mt1.googleapis.com/maps/vt?hl=en-US\u0026"]],[["http://mt0.googleapis.com/mapslt/loom?hl=en-US\u0026","http://mt1.googleapis.com/mapslt/loom?hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt?hl=en-US\u0026","https://mts1.googleapis.com/mapslt?hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt/ft?hl=en-US\u0026","https://mts1.googleapis.com/mapslt/ft?hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt/loom?hl=en-US\u0026","https://mts1.googleapis.com/mapslt/loom?hl=en-US\u0026"]]],["en-US","US",null,0,null,null,"http://maps.gstatic.com/mapfiles/","http://csi.gstatic.com","https://maps.googleapis.com","http://maps.googleapis.com",null,"https://maps.google.com","https://gg.google.com","http://maps.gstatic.com/maps-api-v3/api/images/","https://www.google.com/maps",0,"https://www.google.com"],["http://maps.google.com/maps-api-v3/api/js/25/15","3.25.15"],[3358547843],1,null,null,null,null,null,"",null,null,0,"http://khm.googleapis.com/mz?v=703\u0026",null,"https://earthbuilder.googleapis.com","https://earthbuilder.googleapis.com",null,"http://mt.googleapis.com/maps/vt/icon",[["http://maps.google.com/maps/vt"],["https://maps.google.com/maps/vt"],null,null,null,null,null,null,null,null,null,null,["https://www.google.com/maps/vt"],"/maps/vt",367000000,367],2,500,[null,null,null,null,"http://www.google.com/maps/preview/log204","","http://static.panoramio.com.storage.googleapis.com/photos/",["http://geo0.ggpht.com/cbk","http://geo1.ggpht.com/cbk","http://geo2.ggpht.com/cbk","http://geo3.ggpht.com/cbk"],"https://maps.googleapis.com/maps/api/js/GeoPhotoService.GetMetadata","https://maps.googleapis.com/maps/api/js/GeoPhotoService.SingleImageSearch",["http://lh3.ggpht.com/","http://lh4.ggpht.com/","http://lh5.ggpht.com/","http://lh6.ggpht.com/"]],["https://www.google.com/maps/api/js/master?pb=!1m2!1u25!2s15!2sen-US!3sUS!4s25/15","https://www.google.com/maps/api/js/widget?pb=!1m2!1u25!2s15!2sen-US"],null,0,null,"/maps/api/js/ApplicationService.GetEntityDetails",0,null,null,null,null,[],["25.15"]], loadScriptTime);
  };
  var loadScriptTime = (new Date).getTime();
})();
// inlined
(function(_){'use strict';var Fa,Ga,La,gb,mb,nb,ob,pb,tb,ub,xb,Ab,wb,Bb,Hb,Qb,Wb,Xb,$b,cc,dc,fc,hc,jc,ec,gc,lc,oc,pc,tc,Gc,Jc,Oc,Nc,Pc,Qc,Rc,Sc,Tc,Zc,dd,fd,hd,id,qd,sd,rd,wd,xd,Bd,Cd,Hd,Qd,Rd,Sd,ee,ge,ie,le,pe,oe,qe,ve,we,ze,Ce,De,Ee,Ie,Je,Ke,Le,Oe,Qe,Re,Se,Te,Ue,Ve,cf,df,ef,ff,gf,of,pf,qf,tf,wf,Cf,Df,Ff,If,Kf,Vf,Wf,Xf,Yf,Zf,$f,bg,cg,dg,eg,gg,lg,ng,wg,xg,Dg,Bg,Eg,Fg,Jg,Mg,Ng,Rg,Sg,Xg,Yg,Zg,$g,ah,Ca,Da;_.aa="ERROR";_.ba="INVALID_REQUEST";_.ca="MAX_DIMENSIONS_EXCEEDED";_.da="MAX_ELEMENTS_EXCEEDED";_.ea="MAX_WAYPOINTS_EXCEEDED";
_.fa="NOT_FOUND";_.ga="OK";_.ha="OVER_QUERY_LIMIT";_.ia="REQUEST_DENIED";_.ja="UNKNOWN_ERROR";_.la="ZERO_RESULTS";_.ma=function(){return function(a){return a}};_.na=function(){return function(){}};_.oa=function(a){return function(b){this[a]=b}};_.k=function(a){return function(){return this[a]}};_.pa=function(a){return function(){return a}};_.ra=function(a){return function(){return _.qa[a].apply(this,arguments)}};_.r=function(a){return void 0!==a};_.sa=_.na();
_.ta=function(a){a.Tb=function(){return a.cb?a.cb:a.cb=new a}};
_.ua=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};_.wa=function(a){return"array"==_.ua(a)};_.xa=function(a){var b=_.ua(a);return"array"==b||"object"==b&&"number"==typeof a.length};_.ya=function(a){return"string"==typeof a};_.za=function(a){return"number"==typeof a};_.Aa=function(a){return"function"==_.ua(a)};_.Ba=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};_.Ea=function(a){return a[Ca]||(a[Ca]=++Da)};
Fa=function(a,b,c){return a.call.apply(a.bind,arguments)};Ga=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};_.u=function(a,b,c){_.u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Fa:Ga;return _.u.apply(null,arguments)};_.Ha=function(){return+new Date};
_.v=function(a,b){function c(){}c.prototype=b.prototype;a.Kb=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.iq=function(a,c,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[c].apply(a,g)}};_.Ia=function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};_.Ka=function(){return-1!=_.Ja.toLowerCase().indexOf("webkit")};
_.Ma=function(a,b){var c=0;a=_.Ia(String(a)).split(".");b=_.Ia(String(b)).split(".");for(var d=Math.max(a.length,b.length),e=0;0==c&&e<d;e++){var f=a[e]||"",g=b[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;c=La(0==f[1].length?0:(0,window.parseInt)(f[1],10),0==g[1].length?0:(0,window.parseInt)(g[1],10))||La(0==f[2].length,0==g[2].length)||La(f[2],g[2]);f=f[3];g=g[3]}while(0==c)}return c};
La=function(a,b){return a<b?-1:a>b?1:0};_.Na=function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(_.ya(a))return _.ya(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};_.y=function(a,b,c){for(var d=a.length,e=_.ya(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};_.Pa=function(a,b){b=_.Oa(a,b,void 0);return 0>b?null:_.ya(a)?a.charAt(b):a[b]};
_.Oa=function(a,b,c){for(var d=a.length,e=_.ya(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};_.Ra=function(a,b){b=_.Na(a,b);var c;(c=0<=b)&&_.Qa(a,b);return c};_.Qa=function(a,b){Array.prototype.splice.call(a,b,1)};_.Sa=function(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)};_.A=function(a){return a?a.length:0};_.Ua=function(a,b){_.Ta(b,function(c){a[c]=b[c]})};_.Va=function(a){for(var b in a)return!1;return!0};
_.Wa=function(a,b,c){null!=b&&(a=Math.max(a,b));null!=c&&(a=Math.min(a,c));return a};_.Xa=function(a,b,c){c-=b;return((a-b)%c+c)%c+b};_.Ya=function(a,b,c){return Math.abs(a-b)<=(c||1E-9)};_.Za=function(a,b){for(var c=[],d=_.A(a),e=0;e<d;++e)c.push(b(a[e],e));return c};_.ab=function(a,b){for(var c=_.$a(void 0,_.A(b)),d=_.$a(void 0,0);d<c;++d)a.push(b[d])};_.B=function(a){return"number"==typeof a};_.bb=function(a){return"object"==typeof a};_.$a=function(a,b){return null==a?b:a};
_.cb=function(a){return"string"==typeof a};_.db=function(a){return a===!!a};_.Ta=function(a,b){for(var c in a)b(c,a[c])};_.fb=function(a){return function(){var b=this,c=arguments;_.eb(function(){a.apply(b,c)})}};_.eb=function(a){return window.setTimeout(a,0)};gb=function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]};_.hb=function(a){window.console&&window.console.error&&window.console.error(a)};_.kb=function(a){a=a||window.event;_.ib(a);_.jb(a)};
_.ib=function(a){a.cancelBubble=!0;a.stopPropagation&&a.stopPropagation()};_.jb=function(a){a.preventDefault&&_.r(a.defaultPrevented)?a.preventDefault():a.returnValue=!1};_.lb=function(a){a.handled=!0;_.r(a.bubbles)||(a.returnValue="handled")};mb=function(a,b){a.__e3_||(a.__e3_={});a=a.__e3_;a[b]||(a[b]={});return a[b]};nb=function(a,b){a=a.__e3_||{};if(b)b=a[b]||{};else{b={};for(var c in a)_.Ua(b,a[c])}return b};ob=function(a,b){return function(c){return b.call(a,c,this)}};
pb=function(a,b,c){return function(d){var e=[b,a];_.ab(e,arguments);_.C.trigger.apply(this,e);c&&_.lb.apply(null,arguments)}};tb=function(a,b,c,d){this.cb=a;this.f=b;this.b=c;this.j=null;this.l=d;this.id=++qb;mb(a,b)[this.id]=this;rb&&"tagName"in a&&(sb[this.id]=this)};
ub=function(a){return a.j=function(b){b||(b=window.event);if(b&&!b.target)try{b.target=b.srcElement}catch(d){}var c;c=a.b.apply(a.cb,[b]);return b&&"click"==b.type&&(b=b.srcElement)&&"A"==b.tagName&&"javascript:void(0)"==b.href?!1:c}};_.vb=function(a){return""+(_.Ba(a)?_.Ea(a):a)};_.G=_.na();xb=function(a,b){var c=b+"_changed";if(a[c])a[c]();else a.changed(b);var c=wb(a,b),d;for(d in c){var e=c[d];xb(e.Qc,e.vb)}_.C.trigger(a,b.toLowerCase()+"_changed")};
_.zb=function(a){return yb[a]||(yb[a]=a.substr(0,1).toUpperCase()+a.substr(1))};Ab=function(a){a.gm_accessors_||(a.gm_accessors_={});return a.gm_accessors_};wb=function(a,b){a.gm_bindings_||(a.gm_bindings_={});a.gm_bindings_.hasOwnProperty(b)||(a.gm_bindings_[b]={});return a.gm_bindings_[b]};Bb=function(a){this.message=a;this.name="InvalidValueError";this.stack=Error().stack};_.Cb=function(a,b){var c="";if(null!=b){if(!(b instanceof Bb))return b;c=": "+b.message}return new Bb(a+c)};
_.Db=function(a){if(!(a instanceof Bb))throw a;_.hb(a.name+": "+a.message)};_.Eb=function(a,b){return function(c){if(!c||!_.bb(c))throw _.Cb("not an Object");var d={},e;for(e in c)if(d[e]=c[e],!b&&!a[e])throw _.Cb("unknown property "+e);for(e in a)try{var f=a[e](d[e]);if(_.r(f)||Object.prototype.hasOwnProperty.call(c,e))d[e]=a[e](d[e])}catch(g){throw _.Cb("in property "+e,g);}return d}};Hb=function(a){try{return!!a.cloneNode}catch(b){return!1}};
_.Ib=function(a,b,c){return c?function(c){if(c instanceof a)return c;try{return new a(c)}catch(e){throw _.Cb("when calling new "+b,e);}}:function(c){if(c instanceof a)return c;throw _.Cb("not an instance of "+b);}};_.Jb=function(a){return function(b){for(var c in a)if(a[c]==b)return b;throw _.Cb(b);}};_.Kb=function(a){return function(b){if(!_.wa(b))throw _.Cb("not an Array");return _.Za(b,function(b,d){try{return a(b)}catch(e){throw _.Cb("at index "+d,e);}})}};
_.Lb=function(a,b){return function(c){if(a(c))return c;throw _.Cb(b||""+c);}};_.Mb=function(a){return function(b){for(var c=[],d=0,e=a.length;d<e;++d){var f=a[d];try{(f.Fg||f)(b)}catch(g){if(!(g instanceof Bb))throw g;c.push(g.message);continue}return(f.then||f)(b)}throw _.Cb(c.join("; and "));}};_.Nb=function(a,b){return function(c){return b(a(c))}};_.Pb=function(a){return function(b){return null==b?b:a(b)}};
Qb=function(a){return function(b){if(b&&null!=b[a])return b;throw _.Cb("no "+a+" property");}};_.Rb=function(a){return a*Math.PI/180};_.Sb=function(a){return 180*a/Math.PI};_.H=function(a,b,c){if(a&&(void 0!==a.lat||void 0!==a.lng))try{Tb(a),b=a.lng,a=a.lat,c=!1}catch(d){_.Db(d)}a-=0;b-=0;c||(a=_.Wa(a,-90,90),180!=b&&(b=_.Xa(b,-180,180)));this.lat=function(){return a};this.lng=function(){return b}};_.Ub=function(a){return _.Rb(a.lat())};_.Vb=function(a){return _.Rb(a.lng())};
Wb=function(a,b){b=Math.pow(10,b);return Math.round(a*b)/b};Xb=_.na();_.Yb=function(a){try{if(a instanceof _.H)return a;a=Tb(a);return new _.H(a.lat,a.lng)}catch(b){throw _.Cb("not a LatLng or LatLngLiteral",b);}};_.Zb=function(a){this.b=_.Yb(a)};$b=function(a){if(a instanceof Xb)return a;try{return new _.Zb(_.Yb(a))}catch(b){}throw _.Cb("not a Geometry or LatLng or LatLngLiteral object");};_.ac=function(a,b){if(a)return function(){--a||b()};b();return _.sa};
_.bc=function(a,b,c){var d=a.getElementsByTagName("head")[0];a=a.createElement("script");a.type="text/javascript";a.charset="UTF-8";a.src=b;c&&(a.onerror=c);d.appendChild(a);return a};cc=function(a){for(var b="",c=0,d=arguments.length;c<d;++c){var e=arguments[c];e.length&&"/"==e[0]?b=e:(b&&"/"!=b[b.length-1]&&(b+="/"),b+=e)}return b};dc=function(a){this.j=window.document;this.b={};this.f=a};fc=function(){this.l={};this.f={};this.m={};this.b={};this.j=new ec};
hc=function(a,b){a.l[b]||(a.l[b]=!0,gc(a.j,function(c){for(var d=c.ii[b],e=d?d.length:0,f=0;f<e;++f){var g=d[f];a.b[g]||hc(a,g)}c=c.pn;c.b[b]||_.bc(c.j,cc(c.f,b)+".js")}))};jc=function(a,b){var c=ic;this.pn=a;this.ii=c;a={};for(var d in c)for(var e=c[d],f=0,g=e.length;f<g;++f){var h=e[f];a[h]||(a[h]=[]);a[h].push(d)}this.Jo=a;this.Il=b};ec=function(){this.b=[]};gc=function(a,b){a.f?b(a.f):a.b.push(b)};_.J=function(a,b,c){var d=fc.Tb();a=""+a;d.b[a]?b(d.b[a]):((d.f[a]=d.f[a]||[]).push(b),c||hc(d,a))};
_.kc=function(a,b){fc.Tb().b[""+a]=b};lc=function(a,b,c){var d=[],e=_.ac(a.length,function(){b.apply(null,d)});_.y(a,function(a,b){_.J(a,function(a){d[b]=a;e()},c)})};_.mc=function(a){a=a||{};this.j=a.id;this.b=null;try{this.b=a.geometry?$b(a.geometry):null}catch(b){_.Db(b)}this.f=a.properties||{}};_.K=function(a,b){this.x=a;this.y=b};oc=function(a){if(a instanceof _.K)return a;try{_.Eb({x:_.nc,y:_.nc},!0)(a)}catch(b){throw _.Cb("not a Point",b);}return new _.K(a.x,a.y)};
_.M=function(a,b,c,d){this.width=a;this.height=b;this.j=c||"px";this.f=d||"px"};pc=function(a){if(a instanceof _.M)return a;try{_.Eb({height:_.nc,width:_.nc},!0)(a)}catch(b){throw _.Cb("not a Size",b);}return new _.M(a.width,a.height)};_.qc=function(a){return function(){return this.get(a)}};_.rc=function(a,b){return b?function(c){try{this.set(a,b(c))}catch(d){_.Db(_.Cb("set"+_.zb(a),d))}}:function(b){this.set(a,b)}};
_.sc=function(a,b){_.Ta(b,function(b,d){var e=_.qc(b);a["get"+_.zb(b)]=e;d&&(d=_.rc(b,d),a["set"+_.zb(b)]=d)})};_.uc=function(a){this.b=a||[];tc(this)};tc=function(a){a.set("length",a.b.length)};_.vc=function(a){this.j=a||_.vb;this.f={}};_.yc=function(a,b){var c=a.f,d=a.j(b);c[d]||(c[d]=b,_.C.trigger(a,"insert",b),a.b&&a.b(b))};_.zc=_.oa("b");_.Ac=function(a,b,c){this.heading=a;this.pitch=_.Wa(b,-90,90);this.zoom=Math.max(0,c)};_.Bc=function(){this.__gm=new _.G;this.l=null};_.Cc=_.ma();
_.Dc=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};_.Ec=function(a){return-1!=_.Ja.indexOf(a)};_.Fc=function(){return _.Ec("Trident")||_.Ec("MSIE")};Gc=function(){return(_.Ec("Chrome")||_.Ec("CriOS"))&&!_.Ec("Edge")};Jc=function(a){_.Hc.setTimeout(function(){throw a;},0)};Oc=function(){var a=_.Kc.f,a=Lc(a);!_.Aa(_.Hc.setImmediate)||_.Hc.Window&&_.Hc.Window.prototype&&!_.Ec("Edge")&&_.Hc.Window.prototype.setImmediate==_.Hc.setImmediate?(Mc||(Mc=Nc()),Mc(a)):_.Hc.setImmediate(a)};
Nc=function(){var a=_.Hc.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!_.Ec("Presto")&&(a=function(){var a=window.document.createElement("IFRAME");a.style.display="none";a.src="";window.document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=(0,_.u)(function(a){if(("*"==
d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!_.Fc()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(_.r(c.next)){c=c.next;var a=c.yh;c.yh=null;a()}};return function(a){d.next={yh:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof window.document&&"onreadystatechange"in window.document.createElement("SCRIPT")?function(a){var b=window.document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};window.document.documentElement.appendChild(b)}:function(a){_.Hc.setTimeout(a,0)}};Pc=function(a,b,c){this.l=c;this.j=a;this.m=b;this.f=0;this.b=null};Qc=function(){this.f=this.b=null};Rc=function(){this.next=this.b=this.Lc=null};_.Kc=function(a,b){_.Kc.b||_.Kc.m();_.Kc.j||(_.Kc.b(),_.Kc.j=!0);_.Kc.l.add(a,b)};Sc=function(a,b){return function(c){return c.Lc==a&&c.context==(b||null)}};
Tc=function(a){this.S=[];this.b=a&&a.Cd||_.sa;this.f=a&&a.Ed||_.sa};_.Vc=function(a,b,c,d){function e(){_.y(f,function(a){b.call(c||null,function(b){if(a.Fd){if(a.Fd.wh)return;a.Fd.wh=!0;_.Ra(g.S,a);g.S.length||g.b()}a.Lc.call(a.context,b)})})}var f=a.S.slice(0),g=a;d&&d.gp?e():Uc(e)};_.Wc=function(){this.S=new Tc({Cd:(0,_.u)(this.Cd,this),Ed:(0,_.u)(this.Ed,this)})};_.Xc=function(){_.Wc.call(this)};_.Yc=function(a){_.Wc.call(this);this.b=a};Zc=_.na();
dd=function(a){var b=a;if(a instanceof Array)b=Array(a.length),_.cd(b,a);else if(a instanceof Object){var c=b={},d;for(d in a)a.hasOwnProperty(d)&&(c[d]=dd(a[d]))}return b};_.cd=function(a,b){for(var c=0;c<b.length;++c)b.hasOwnProperty(c)&&(a[c]=dd(b[c]))};_.N=function(a,b){a[b]||(a[b]=[]);return a[b]};_.ed=function(a,b){return a[b]?a[b].length:0};
_.gd=function(a,b){if(null==a||null==b)return null==a==(null==b);if(a.constructor!=Array&&a.constructor!=Object)throw Error("Invalid object type passed into JsProto.areObjectsEqual()");if(a===b)return!0;if(a.constructor!=b.constructor)return!1;for(var c in a)if(!(c in b&&fd(a[c],b[c])))return!1;for(var d in b)if(!(d in a))return!1;return!0};
fd=function(a,b){if(a===b||!(!0!==a&&1!==a||!0!==b&&1!==b)||!(!1!==a&&0!==a||!1!==b&&0!==b))return!0;if(a instanceof Object&&b instanceof Object){if(!_.gd(a,b))return!1}else return!1;return!0};hd=function(a,b,c,d){this.type=a;this.label=b;this.Ql=c;this.Ic=d};id=function(a){switch(a){case "d":case "f":case "i":case "j":case "u":case "v":case "x":case "y":case "g":case "h":case "n":case "o":case "e":return 0;case "s":case "z":case "B":return"";case "b":return!1;default:return null}};
_.jd=function(a,b,c){return new hd(a,1,_.r(b)?b:id(a),c)};_.kd=function(a,b,c){return new hd(a,2,_.r(b)?b:id(a),c)};_.ld=function(a,b){return new hd(a,3,void 0,b)};_.md=function(a){return _.jd("i",a)};_.nd=function(a){return _.jd("v",a)};_.od=function(a){return _.jd("b",a)};_.pd=function(a){return _.jd("e",a)};_.O=function(a,b){return _.jd("m",a,b)};qd=_.na();
sd=function(a,b,c){for(var d=1;d<b.A.length;++d){var e=b.A[d],f=a[d+b.F];if(e&&null!=f)if(3==e.label)for(var g=0;g<f.length;++g)rd(f[g],d,e,c);else rd(f,d,e,c)}};rd=function(a,b,c,d){if("m"==c.type){var e=d.length;sd(a,c.Ic,d);d.splice(e,0,[b,"m",d.length-e].join(""))}else"b"==c.type&&(a=a?"1":"0"),d.push([b,c.type,(0,window.encodeURIComponent)(a)].join(""))};_.td=function(){return _.Ec("iPhone")&&!_.Ec("iPod")&&!_.Ec("iPad")};_.ud=function(a){_.ud[" "](a);return a};
wd=function(a,b){var c=vd;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};xd=function(){var a=_.Hc.document;return a?a.documentMode:void 0};_.zd=function(a){return wd(a,function(){return 0<=_.Ma(_.yd,a)})};_.Ad=function(a,b){this.b=a||0;this.f=b||0};Bd=_.na();Cd=function(a,b){-180==a&&180!=b&&(a=180);-180==b&&180!=a&&(b=180);this.b=a;this.f=b};_.Dd=function(a){return a.b>a.f};_.Fd=function(a,b){return 1E-9>=Math.abs(b.b-a.b)%360+Math.abs(_.Ed(b)-_.Ed(a))};
_.Gd=function(a,b){var c=b-a;return 0<=c?c:b+180-(a-180)};_.Ed=function(a){return a.isEmpty()?0:_.Dd(a)?360-(a.b-a.f):a.f-a.b};Hd=function(a,b){this.f=a;this.b=b};_.Id=function(a){return a.isEmpty()?0:a.b-a.f};_.Jd=function(a,b){a=a&&_.Yb(a);b=b&&_.Yb(b);if(a){b=b||a;var c=_.Wa(a.lat(),-90,90),d=_.Wa(b.lat(),-90,90);this.f=new Hd(c,d);a=a.lng();b=b.lng();360<=b-a?this.b=new Cd(-180,180):(a=_.Xa(a,-180,180),b=_.Xa(b,-180,180),this.b=new Cd(a,b))}else this.f=new Hd(1,-1),this.b=new Cd(180,-180)};
_.Kd=function(a,b,c,d){return new _.Jd(new _.H(a,b,!0),new _.H(c,d,!0))};_.Md=function(a){if(a instanceof _.Jd)return a;try{return a=Ld(a),_.Kd(a.south,a.west,a.north,a.east)}catch(b){throw _.Cb("not a LatLngBounds or LatLngBoundsLiteral",b);}};_.Nd=_.oa("__gm");Qd=function(){this.b={};this.j={};this.f={}};Rd=function(){this.b={}};Sd=function(a){this.b=new Rd;var b=this;_.C.addListenerOnce(a,"addfeature",function(){_.J("data",function(c){c.b(b,a,b.b)})})};_.Ud=function(a){this.b=[];try{this.b=Td(a)}catch(b){_.Db(b)}};
_.Wd=function(a){this.b=(0,_.Vd)(a)};_.Yd=function(a){this.b=Xd(a)};_.Zd=function(a){this.b=(0,_.Vd)(a)};_.$d=function(a){this.b=(0,_.Vd)(a)};_.be=function(a){this.b=ae(a)};_.de=function(a){this.b=ce(a)};ee=function(a){a=a||{};a.clickable=_.$a(a.clickable,!0);a.visible=_.$a(a.visible,!0);this.setValues(a);_.J("marker",_.sa)};ge=function(a){var b=_,c=fc.Tb().j;a=c.f=new jc(new dc(a),b);for(var b=0,d=c.b.length;b<d;++b)c.b[b](a);c.b.length=0};
_.he=function(a){this.__gm={set:null,xe:null};ee.call(this,a)};ie=function(a){a=a||{};a.visible=_.$a(a.visible,!0);return a};_.je=function(a){return a&&a.radius||6378137};le=function(a){return a instanceof _.uc?ke(a):new _.uc((0,_.Vd)(a))};pe=function(a){var b;_.wa(a)||a instanceof _.uc?0==_.A(a)?b=!0:(b=a instanceof _.uc?a.getAt(0):a[0],b=_.wa(b)||b instanceof _.uc):b=!1;return b?a instanceof _.uc?oe(ke)(a):new _.uc(_.Kb(le)(a)):new _.uc([le(a)])};
oe=function(a){return function(b){if(!(b instanceof _.uc))throw _.Cb("not an MVCArray");b.forEach(function(b,d){try{a(b)}catch(e){throw _.Cb("at index "+d,e);}});return b}};qe=function(a){this.set("latLngs",new _.uc([new _.uc]));this.setValues(ie(a));_.J("poly",_.sa)};_.re=function(a){qe.call(this,a)};_.se=function(a){qe.call(this,a)};
_.te=function(a,b,c){function d(a){if(!a)throw _.Cb("not a Feature");if("Feature"!=a.type)throw _.Cb('type != "Feature"');var b=a.geometry;try{b=null==b?null:e(b)}catch(d){throw _.Cb('in property "geometry"',d);}var f=a.properties||{};if(!_.bb(f))throw _.Cb("properties is not an Object");var g=c.idPropertyName;a=g?f[g]:a.id;if(null!=a&&!_.B(a)&&!_.cb(a))throw _.Cb((g||"id")+" is not a string or number");return{id:a,geometry:b,properties:f}}function e(a){if(null==a)throw _.Cb("is null");var b=(a.type+
"").toLowerCase(),c=a.coordinates;try{switch(b){case "point":return new _.Zb(h(c));case "multipoint":return new _.Zd(n(c));case "linestring":return g(c);case "multilinestring":return new _.Yd(p(c));case "polygon":return f(c);case "multipolygon":return new _.de(t(c))}}catch(d){throw _.Cb('in property "coordinates"',d);}if("geometrycollection"==b)try{return new _.Ud(w(a.geometries))}catch(d){throw _.Cb('in property "geometries"',d);}throw _.Cb("invalid type");}function f(a){return new _.be(q(a))}function g(a){return new _.Wd(n(a))}
function h(a){a=l(a);return _.Yb({lat:a[1],lng:a[0]})}if(!b)return[];c=c||{};var l=_.Kb(_.nc),n=_.Kb(h),p=_.Kb(g),q=_.Kb(function(a){a=n(a);if(!a.length)throw _.Cb("contains no elements");if(!a[0].b(a[a.length-1]))throw _.Cb("first and last positions are not equal");return new _.$d(a.slice(0,-1))}),t=_.Kb(f),w=_.Kb(e),z=_.Kb(d);if("FeatureCollection"==b.type){b=b.features;try{return _.Za(z(b),function(b){return a.add(b)})}catch(x){throw _.Cb('in property "features"',x);}}if("Feature"==b.type)return[a.add(d(b))];
throw _.Cb("not a Feature or FeatureCollection");};ve=function(a){var b=this;this.setValues(a||{});this.b=new Qd;_.C.forward(this.b,"addfeature",this);_.C.forward(this.b,"removefeature",this);_.C.forward(this.b,"setgeometry",this);_.C.forward(this.b,"setproperty",this);_.C.forward(this.b,"removeproperty",this);this.f=new Sd(this.b);this.f.bindTo("map",this);this.f.bindTo("style",this);_.y(_.ue,function(a){_.C.forward(b.f,a,b)});this.j=!1};we=function(a){a.j||(a.j=!0,_.J("drawing_impl",function(b){b.Jm(a)}))};
_.xe=function(a){this.b=a||[]};_.ye=function(a){this.b=a||[]};ze=function(a){this.b=a||[]};_.Ae=function(a){this.b=a||[]};_.Be=function(a){this.b=a||[]};Ce=function(a){if(!a)return null;var b;_.ya(a)?(b=window.document.createElement("div"),b.style.overflow="auto",b.innerHTML=a):a.nodeType==window.Node.TEXT_NODE?(b=window.document.createElement("div"),b.appendChild(a)):b=a;return b};
De=function(a,b){this.b=a;this.ud=b;a.addListener("map_changed",(0,_.u)(this.Jn,this));this.bindTo("map",a);this.bindTo("disableAutoPan",a);this.bindTo("maxWidth",a);this.bindTo("position",a);this.bindTo("zIndex",a);this.bindTo("internalAnchor",a,"anchor");this.bindTo("internalContent",a,"content");this.bindTo("internalPixelOffset",a,"pixelOffset")};Ee=function(a,b,c,d){c?a.bindTo(b,c,d):(a.unbind(b),a.set(b,void 0))};
_.Fe=function(a){function b(){e||(e=!0,_.J("infowindow",function(a){a.fl(d)}))}window.setTimeout(function(){_.J("infowindow",_.sa)},100);a=a||{};var c=!!a.ud;delete a.ud;var d=new De(this,c),e=!1;_.C.addListenerOnce(this,"anchor_changed",b);_.C.addListenerOnce(this,"map_changed",b);this.setValues(a)};_.He=function(a){_.Ge&&a&&_.Ge.push(a)};Ie=function(a){this.setValues(a)};Je=_.na();Ke=_.na();Le=_.na();_.Me=function(){_.J("geocoder",_.sa)};
_.Ne=function(a,b,c){this.J=null;this.set("url",a);this.set("bounds",_.Pb(_.Md)(b));this.setValues(c)};Oe=function(a,b){_.cb(a)?(this.set("url",a),this.setValues(b)):this.setValues(a)};_.Pe=function(){var a=this;_.J("layers",function(b){b.b(a)})};Qe=function(a){this.setValues(a);var b=this;_.J("layers",function(a){a.f(b)})};Re=function(){var a=this;_.J("layers",function(b){b.j(a)})};Se=function(a){this.b=a||[]};Te=function(a){this.b=a||[]};Ue=function(a){this.b=a||[]};Ve=function(a){this.b=a||[]};
_.We=function(a){this.b=a||[]};_.$e=function(a){this.b=a||[]};_.af=function(a){this.b=a||[]};_.bf=function(a){this.b=a||[]};cf=function(a){this.b=a||[]};df=function(a){this.b=a||[]};ef=function(a){this.b=a||[]};ff=function(a){this.b=a||[]};gf=function(a){this.b=a||[]};_.hf=function(a){this.b=a||[]};_.jf=function(a){this.b=a||[]};_.kf=function(a){a=a.b[0];return null!=a?a:""};_.lf=function(a){a=a.b[1];return null!=a?a:""};_.nf=function(){var a=_.mf(_.P).b[9];return null!=a?a:""};
of=function(){var a=_.mf(_.P).b[7];return null!=a?a:""};pf=function(){var a=_.mf(_.P).b[12];return null!=a?a:""};qf=function(a){a=a.b[0];return null!=a?a:""};_.rf=function(a){a=a.b[1];return null!=a?a:""};tf=function(){var a=_.P.b[4],a=(a?new ef(a):sf).b[0];return null!=a?a:0};_.uf=function(){var a=_.P.b[0];return null!=a?a:1};_.vf=function(a){a=a.b[6];return null!=a?a:""};wf=function(){var a=_.P.b[11];return null!=a?a:""};_.xf=function(){var a=_.P.b[16];return null!=a?a:""};
_.mf=function(a){return(a=a.b[2])?new cf(a):yf};_.Af=function(){var a=_.P.b[3];return a?new df(a):zf};Cf=function(){var a=_.P.b[33];return a?new Se(a):Bf};Df=function(a){return _.N(_.P.b,8)[a]};Ff=function(){var a=_.P.b[36],a=(a?new gf(a):Ef).b[0];return null!=a?a:""};
If=function(a,b){_.Bc.call(this);_.He(a);this.__gm=new _.G;this.j=null;b&&b.client&&(this.j=_.Gf[b.client]||null);var c=this.controls=[];_.Ta(_.Hf,function(a,b){c[b]=new _.uc});this.m=!0;this.f=a;this.setPov(new _.Ac(0,0,1));b&&b.wb&&!_.B(b.wb.zoom)&&(b.wb.zoom=_.B(b.zoom)?b.zoom:1);this.setValues(b);void 0==this.getVisible()&&this.setVisible(!0);this.__gm.Pc=b&&b.Pc||new _.vc;_.C.addListenerOnce(this,"pano_changed",_.fb(function(){_.J("marker",(0,_.u)(function(a){a.b(this.__gm.Pc,this)},this))}))};
_.Jf=function(){this.l=[];this.f=this.b=this.j=null};Kf=function(a,b,c){this.X=b;this.b=new _.Yc(new _.zc([]));this.C=new _.vc;this.K=new _.uc;this.G=new _.vc;this.H=new _.vc;this.l=new _.vc;var d=this.Pc=new _.vc;d.b=function(){delete d.b;_.J("marker",_.fb(function(b){b.b(d,a)}))};this.j=new If(b,{visible:!1,enableCloseButton:!0,Pc:d});this.j.bindTo("reportErrorControl",a);this.j.m=!1;this.f=new _.Jf;this.Y=c};_.Lf=function(){this.S=new Tc};
_.Nf=function(){this.b=new _.K(128,128);this.j=256/360;this.l=256/(2*Math.PI);this.f=!0};_.Of=function(a){this.L=this.M=window.Infinity;this.R=this.O=-window.Infinity;_.y(a||[],this.extend,this)};_.Pf=function(a,b,c,d){var e=new _.Of;e.M=a;e.L=b;e.O=c;e.R=d;return e};_.Qf=function(a,b,c){if(a=a.fromLatLngToPoint(b))c=Math.pow(2,c),a.x*=c,a.y*=c;return a};
_.Rf=function(a,b){var c=a.lat()+_.Sb(b);90<c&&(c=90);var d=a.lat()-_.Sb(b);-90>d&&(d=-90);b=Math.sin(b);var e=Math.cos(_.Rb(a.lat()));if(90==c||-90==d||1E-6>e)return new _.Jd(new _.H(d,-180),new _.H(c,180));b=_.Sb(Math.asin(b/e));return new _.Jd(new _.H(d,a.lng()-b),new _.H(c,a.lng()+b))};_.Sf=function(a){this.Dl=a||0;_.C.bind(this,"forceredraw",this,this.C)};_.Tf=function(a,b){a=a.style;a.width=b.width+b.j;a.height=b.height+b.f};_.Uf=function(a){return new _.M(a.offsetWidth,a.offsetHeight)};
Vf=function(a){this.b=a||[]};Wf=function(a){this.b=a||[]};Xf=function(a){this.b=a||[]};Yf=function(a){this.b=a||[]};Zf=function(a){this.b=a||[]};$f=function(a,b,c,d){_.Sf.call(this);this.m=b;this.l=new _.Nf;this.D=c+"/maps/api/js/StaticMapService.GetMapImage";this.f=this.b=null;this.j=d;this.set("div",a);this.set("loading",!0)};bg=function(a){var b=a.get("tilt")||a.get("mapMaker")||_.A(a.get("styles"));a=a.get("mapTypeId");return b?null:ag[a]};cg=function(a){a.parentNode&&a.parentNode.removeChild(a)};
dg=function(a,b){var c=a.f;c.onload=null;c.onerror=null;b&&(c.parentNode||a.b.appendChild(c),_.Tf(c,a.get("size")),_.C.trigger(a,"staticmaploaded"),a.j.set(_.Ha()));a.set("loading",!1)};eg=function(a,b){var c=a.f;b!=c.src?(cg(c),c.onload=function(){dg(a,!0)},c.onerror=function(){dg(a,!1)},c.src=b):!c.parentNode&&b&&a.b.appendChild(c)};
gg=function(a,b,c,d,e){var f=_.fg[15]?pf():of();this.b=a;this.f=d;this.j=_.r(e)?e:_.Ha();var g=f+"/csi?v=2&s=mapsapi3&v3v="+Ff()+"&action="+a;_.Dc(c,function(a,b){g+="&"+(0,window.encodeURIComponent)(b)+"="+(0,window.encodeURIComponent)(a)});b&&(g+="&e="+b);this.l=g};_.ig=function(a,b){var c={};c[b]=void 0;_.hg(a,c)};
_.hg=function(a,b){var c="";_.Dc(b,function(a,b){var f=(null!=a?a:_.Ha())-this.j;c&&(c+=",");c+=b+"."+Math.round(f);null==a&&window.performance&&window.performance.mark&&window.performance.mark("mapsapi:"+this.b+":"+b)},a);b=a.l+"&rt="+c;a.f.createElement("img").src=b;(a=_.Hc.__gm_captureCSI)&&a(b)};
_.jg=function(a,b){b=b||{};var c=b.ho||{},d=_.N(_.P.b,12).join(",");d&&(c.libraries=d);var d=_.vf(_.P),e=Cf(),f=[];d&&f.push(d);_.y(e.B(),function(a,b){a&&_.y(a,function(a,c){null!=a&&f.push(b+1+"_"+(c+1)+"_"+a)})});b.dm&&(f=f.concat(b.dm));return new gg(a,f.join(","),c,b.document||window.document,b.startTime)};lg=function(){this.f=_.jg("apiboot2",{startTime:_.kg});_.ig(this.f,"main");this.b=!1};ng=function(){var a=mg;a.b||(a.b=!0,_.ig(a.f,"firstmap"))};_.og=_.na();_.pg=function(){this.b=""};
_.qg=function(a){var b=new _.pg;b.b=a;return b};_.sg=function(){this.Tf="";this.uk=_.rg;this.b=null};_.tg=function(a,b){var c=new _.sg;c.Tf=a;c.b=b;return c};_.ug=function(a,b){b.parentNode&&b.parentNode.insertBefore(a,b.nextSibling)};_.vg=function(a){a&&a.parentNode&&a.parentNode.removeChild(a)};wg=function(a,b,c,d,e){this.b=!!b;this.node=null;this.f=0;this.j=!1;this.l=!c;a&&this.setPosition(a,d);this.depth=void 0!=e?e:this.f||0;this.b&&(this.depth*=-1)};
xg=function(a,b,c,d){wg.call(this,a,b,c,null,d)};_.zg=function(a){for(var b;b=a.firstChild;)_.yg(b),a.removeChild(b)};_.yg=function(a){a=new xg(a);try{for(;;)_.C.clearInstanceListeners(a.next())}catch(b){if(b!==_.Ag)throw b;}};
Dg=function(a,b){var c=_.Ha();mg&&ng();var d=new _.Lf;_.Nd.call(this,new Kf(this,a,d));var e=b||{};_.r(e.mapTypeId)||(e.mapTypeId="roadmap");this.setValues(e);this.b=_.fg[15]&&e.noControlsOrLogging;this.mapTypes=new Bd;this.features=new _.G;_.He(a);this.notify("streetView");b=_.Uf(a);e.noClear||_.zg(a);var f=null;_.P&&Bg(e.useStaticMap,b)&&(f=new $f(a,_.Cg,_.nf(),new _.Yc(null)),_.C.forward(f,"staticmaploaded",this),f.set("size",b),f.bindTo("center",this),f.bindTo("zoom",this),f.bindTo("mapTypeId",
this),f.bindTo("styles",this),f.bindTo("mapMaker",this));this.overlayMapTypes=new _.uc;var g=this.controls=[];_.Ta(_.Hf,function(a,b){g[b]=new _.uc});var h=this,l=!0;_.J("map",function(a){a.f(h,e,f,l,c,d)});l=!1;this.data=new ve({map:this})};Bg=function(a,b){if(_.r(a))return!!a;a=b.width;b=b.height;return 384E3>=a*b&&800>=a&&800>=b};Eg=function(){_.J("maxzoom",_.sa)};Fg=function(a,b){!a||_.cb(a)||_.B(a)?(this.set("tableId",a),this.setValues(b)):this.setValues(a)};_.Gg=_.na();
_.Hg=function(a){this.setValues(ie(a));_.J("poly",_.sa)};_.Ig=function(a){this.setValues(ie(a));_.J("poly",_.sa)};Jg=function(){this.b=null};_.Kg=function(){this.b=null};
_.Lg=function(a){this.tileSize=a.tileSize||new _.M(256,256);this.name=a.name;this.alt=a.alt;this.minZoom=a.minZoom;this.maxZoom=a.maxZoom;this.j=(0,_.u)(a.getTileUrl,a);this.b=new _.vc;this.f=null;this.set("opacity",a.opacity);_.Hc.window&&_.C.addDomListener(window,"online",(0,_.u)(this.bo,this));var b=this;_.J("map",function(a){var d=b.f=a.b,e=b.tileSize||new _.M(256,256);b.b.forEach(function(a){var c=a.__gmimt,h=c.ba,l=c.zoom,n=b.j(h,l);c.Lb=d(h,l,e,a,n,function(){_.C.trigger(a,"load")})})})};
Mg=function(a,b){null!=a.style.opacity?a.style.opacity=b:a.style.filter=b&&"alpha(opacity="+Math.round(100*b)+")"};Ng=function(a){a=a.get("opacity");return"number"==typeof a?a:1};_.Og=_.na();_.Pg=function(a,b){this.set("styles",a);a=b||{};this.b=a.baseMapTypeId||"roadmap";this.minZoom=a.minZoom;this.maxZoom=a.maxZoom||20;this.name=a.name;this.alt=a.alt;this.projection=null;this.tileSize=new _.M(256,256)};
_.Qg=function(a,b){_.Lb(Hb,"container is not a Node")(a);this.setValues(b);_.J("controls",(0,_.u)(function(b){b.Cl(this,a)},this))};Rg=_.oa("b");Sg=function(a,b,c){for(var d=Array(b.length),e=0,f=b.length;e<f;++e)d[e]=b.charCodeAt(e);d.unshift(c);a=a.b;c=b=0;for(e=d.length;c<e;++c)b*=1729,b+=d[c],b%=a;return b};
Xg=function(){var a=tf(),b=new Rg(131071),c=(0,window.unescape)("%26%74%6F%6B%65%6E%3D");return function(d){d=d.replace(Vg,"%27");var e=d+c;Wg||(Wg=/(?:https?:\/\/[^/]+)?(.*)/);d=Wg.exec(d);return e+Sg(b,d&&d[1],a)}};Yg=function(){var a=new Rg(2147483647);return function(b){return Sg(a,b,0)}};Zg=function(a){for(var b=a.split("."),c=window,d=window,e=0;e<b.length;e++)if(d=c,c=c[b[e]],!c)throw _.Cb(a+" is not a function");return function(){c.apply(d)}};
$g=function(){for(var a in Object.prototype)window.console&&window.console.error("This site adds property <"+a+"> to Object.prototype. Extending Object.prototype breaks JavaScript for..in loops, which are used heavily in Google Maps API v3.")};ah=function(a){(a="version"in a)&&window.console&&window.console.error("You have included the Google Maps API multiple times on this page. This may cause unexpected errors.");return a};_.qa=[];_.Hc=this;Ca="closure_uid_"+(1E9*Math.random()>>>0);Da=0;var rb,sb;_.C={};rb="undefined"!=typeof window.navigator&&-1!=window.navigator.userAgent.toLowerCase().indexOf("msie");sb={};_.C.addListener=function(a,b,c){return new tb(a,b,c,0)};_.C.hasListeners=function(a,b){b=(a=a.__e3_)&&a[b];return!!b&&!_.Va(b)};_.C.removeListener=function(a){a&&a.remove()};_.C.clearListeners=function(a,b){_.Ta(nb(a,b),function(a,b){b&&b.remove()})};_.C.clearInstanceListeners=function(a){_.Ta(nb(a),function(a,c){c&&c.remove()})};
_.C.trigger=function(a,b,c){if(_.C.hasListeners(a,b)){var d=_.Sa(arguments,2),e=nb(a,b),f;for(f in e){var g=e[f];g&&g.b.apply(g.cb,d)}}};_.C.addDomListener=function(a,b,c,d){if(a.addEventListener){var e=d?4:1;a.addEventListener(b,c,d);c=new tb(a,b,c,e)}else a.attachEvent?(c=new tb(a,b,c,2),a.attachEvent("on"+b,ub(c))):(a["on"+b]=c,c=new tb(a,b,c,3));return c};_.C.addDomListenerOnce=function(a,b,c,d){var e=_.C.addDomListener(a,b,function(){e.remove();return c.apply(this,arguments)},d);return e};
_.C.W=function(a,b,c,d){return _.C.addDomListener(a,b,ob(c,d))};_.C.bind=function(a,b,c,d){return _.C.addListener(a,b,(0,_.u)(d,c))};_.C.addListenerOnce=function(a,b,c){var d=_.C.addListener(a,b,function(){d.remove();return c.apply(this,arguments)});return d};_.C.forward=function(a,b,c){return _.C.addListener(a,b,pb(b,c))};_.C.Ra=function(a,b,c,d){return _.C.addDomListener(a,b,pb(b,c,!d))};_.C.aj=function(){var a=sb,b;for(b in a)a[b].remove();sb={};(a=_.Hc.CollectGarbage)&&a()};
_.C.Ao=function(){rb&&_.C.addDomListener(window,"unload",_.C.aj)};var qb=0;tb.prototype.remove=function(){if(this.cb){switch(this.l){case 1:this.cb.removeEventListener(this.f,this.b,!1);break;case 4:this.cb.removeEventListener(this.f,this.b,!0);break;case 2:this.cb.detachEvent("on"+this.f,this.j);break;case 3:this.cb["on"+this.f]=null}delete mb(this.cb,this.f)[this.id];this.j=this.b=this.cb=null;delete sb[this.id]}};_.m=_.G.prototype;_.m.get=function(a){var b=Ab(this);a+="";b=gb(b,a);if(_.r(b)){if(b){a=b.vb;var b=b.Qc,c="get"+_.zb(a);return b[c]?b[c]():b.get(a)}return this[a]}};_.m.set=function(a,b){var c=Ab(this);a+="";var d=gb(c,a);if(d)if(a=d.vb,d=d.Qc,c="set"+_.zb(a),d[c])d[c](b);else d.set(a,b);else this[a]=b,c[a]=null,xb(this,a)};_.m.notify=function(a){var b=Ab(this);a+="";(b=gb(b,a))?b.Qc.notify(b.vb):xb(this,a)};
_.m.setValues=function(a){for(var b in a){var c=a[b],d="set"+_.zb(b);if(this[d])this[d](c);else this.set(b,c)}};_.m.setOptions=_.G.prototype.setValues;_.m.changed=_.na();var yb={};_.G.prototype.bindTo=function(a,b,c,d){a+="";c=(c||a)+"";this.unbind(a);var e={Qc:this,vb:a},f={Qc:b,vb:c,th:e};Ab(this)[a]=f;wb(b,c)[_.vb(e)]=e;d||xb(this,a)};_.G.prototype.unbind=function(a){var b=Ab(this),c=b[a];c&&(c.th&&delete wb(c.Qc,c.vb)[_.vb(c.th)],this[a]=this.get(a),b[a]=null)};
_.G.prototype.unbindAll=function(){var a=(0,_.u)(this.unbind,this),b=Ab(this),c;for(c in b)a(c)};_.G.prototype.addListener=function(a,b){return _.C.addListener(this,a,b)};_.bh={ROADMAP:"roadmap",SATELLITE:"satellite",HYBRID:"hybrid",TERRAIN:"terrain"};_.Hf={TOP_LEFT:1,TOP_CENTER:2,TOP:2,TOP_RIGHT:3,LEFT_CENTER:4,LEFT_TOP:5,LEFT:5,LEFT_BOTTOM:6,RIGHT_TOP:7,RIGHT:7,RIGHT_CENTER:8,RIGHT_BOTTOM:9,BOTTOM_LEFT:10,BOTTOM_CENTER:11,BOTTOM:11,BOTTOM_RIGHT:12,CENTER:13};var ch={Yp:"Point",Wp:"LineString",POLYGON:"Polygon"};_.v(Bb,Error);var eh;_.nc=_.Lb(_.B,"not a number");_.dh=_.Lb(_.cb,"not a string");eh=_.Lb(_.db,"not a boolean");_.fh=_.Pb(_.nc);_.gh=_.Pb(_.dh);_.hh=_.Pb(eh);var Tb=_.Eb({lat:_.nc,lng:_.nc},!0);_.H.prototype.toString=function(){return"("+this.lat()+", "+this.lng()+")"};_.H.prototype.toJSON=function(){return{lat:this.lat(),lng:this.lng()}};_.H.prototype.b=function(a){return a?_.Ya(this.lat(),a.lat())&&_.Ya(this.lng(),a.lng()):!1};_.H.prototype.equals=_.H.prototype.b;_.H.prototype.toUrlValue=function(a){a=_.r(a)?a:6;return Wb(this.lat(),a)+","+Wb(this.lng(),a)};_.Vd=_.Kb(_.Yb);_.v(_.Zb,Xb);_.Zb.prototype.getType=_.pa("Point");_.Zb.prototype.forEachLatLng=function(a){a(this.b)};_.Zb.prototype.get=_.k("b");var Td=_.Kb($b);_.ta(fc);fc.prototype.Zb=function(a,b){var c=this,d=c.m;gc(c.j,function(e){for(var f=e.ii[a]||[],g=e.Jo[a]||[],h=d[a]=_.ac(f.length,function(){delete d[a];b(e.Il);for(var f=c.f[a],h=f?f.length:0,l=0;l<h;++l)f[l](c.b[a]);delete c.f[a];l=0;for(f=g.length;l<f;++l)h=g[l],d[h]&&d[h]()}),l=0,n=f.length;l<n;++l)c.b[f[l]]&&h()})};_.m=_.mc.prototype;_.m.getId=_.k("j");_.m.getGeometry=_.k("b");_.m.setGeometry=function(a){var b=this.b;try{this.b=a?$b(a):null}catch(c){_.Db(c);return}_.C.trigger(this,"setgeometry",{feature:this,newGeometry:this.b,oldGeometry:b})};_.m.getProperty=function(a){return gb(this.f,a)};_.m.setProperty=function(a,b){if(void 0===b)this.removeProperty(a);else{var c=this.getProperty(a);this.f[a]=b;_.C.trigger(this,"setproperty",{feature:this,name:a,newValue:b,oldValue:c})}};
_.m.removeProperty=function(a){var b=this.getProperty(a);delete this.f[a];_.C.trigger(this,"removeproperty",{feature:this,name:a,oldValue:b})};_.m.forEachProperty=function(a){for(var b in this.f)a(this.getProperty(b),b)};_.m.toGeoJson=function(a){var b=this;_.J("data",function(c){c.f(b,a)})};_.ih=new _.K(0,0);_.K.prototype.toString=function(){return"("+this.x+", "+this.y+")"};_.K.prototype.b=function(a){return a?a.x==this.x&&a.y==this.y:!1};_.K.prototype.equals=_.K.prototype.b;_.K.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y)};_.K.prototype.De=_.ra(0);_.jh=new _.M(0,0);_.M.prototype.toString=function(){return"("+this.width+", "+this.height+")"};_.M.prototype.b=function(a){return a?a.width==this.width&&a.height==this.height:!1};_.M.prototype.equals=_.M.prototype.b;var kh={CIRCLE:0,FORWARD_CLOSED_ARROW:1,FORWARD_OPEN_ARROW:2,BACKWARD_CLOSED_ARROW:3,BACKWARD_OPEN_ARROW:4};_.v(_.uc,_.G);_.m=_.uc.prototype;_.m.getAt=function(a){return this.b[a]};_.m.indexOf=function(a){for(var b=0,c=this.b.length;b<c;++b)if(a===this.b[b])return b;return-1};_.m.forEach=function(a){for(var b=0,c=this.b.length;b<c;++b)a(this.b[b],b)};_.m.setAt=function(a,b){var c=this.b[a],d=this.b.length;if(a<d)this.b[a]=b,_.C.trigger(this,"set_at",a,c),this.l&&this.l(a,c);else{for(c=d;c<a;++c)this.insertAt(c,void 0);this.insertAt(a,b)}};
_.m.insertAt=function(a,b){this.b.splice(a,0,b);tc(this);_.C.trigger(this,"insert_at",a);this.f&&this.f(a)};_.m.removeAt=function(a){var b=this.b[a];this.b.splice(a,1);tc(this);_.C.trigger(this,"remove_at",a,b);this.j&&this.j(a,b);return b};_.m.push=function(a){this.insertAt(this.b.length,a);return this.b.length};_.m.pop=function(){return this.removeAt(this.b.length-1)};_.m.getArray=_.k("b");_.m.clear=function(){for(;this.get("length");)this.pop()};_.sc(_.uc.prototype,{length:null});_.vc.prototype.remove=function(a){var b=this.f,c=this.j(a);b[c]&&(delete b[c],_.C.trigger(this,"remove",a),this.onRemove&&this.onRemove(a))};_.vc.prototype.contains=function(a){return!!this.f[this.j(a)]};_.vc.prototype.forEach=function(a){var b=this.f,c;for(c in b)a.call(this,b[c])};_.zc.prototype.nb=_.ra(1);_.zc.prototype.forEach=function(a,b){_.y(this.b,function(c,d){a.call(b,c,d)})};var lh=_.Eb({zoom:_.fh,heading:_.nc,pitch:_.nc});_.v(_.Bc,_.G);var mh=function(a){return function(){return a}}(null);a:{var nh=_.Hc.navigator;if(nh){var oh=nh.userAgent;if(oh){_.Ja=oh;break a}}_.Ja=""};var Mc,Lc=_.Cc;Pc.prototype.get=function(){var a;0<this.f?(this.f--,a=this.b,this.b=a.next,a.next=null):a=this.j();return a};var ph=new Pc(function(){return new Rc},function(a){a.reset()},100);Qc.prototype.add=function(a,b){var c=ph.get();c.set(a,b);this.f?this.f.next=c:this.b=c;this.f=c};Qc.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};Rc.prototype.set=function(a,b){this.Lc=a;this.b=b;this.next=null};Rc.prototype.reset=function(){this.next=this.b=this.Lc=null};_.Kc.m=function(){if(_.Hc.Promise&&_.Hc.Promise.resolve){var a=_.Hc.Promise.resolve(void 0);_.Kc.b=function(){a.then(_.Kc.f)}}else _.Kc.b=function(){Oc()}};_.Kc.C=function(a){_.Kc.b=function(){Oc();a&&a(_.Kc.f)}};_.Kc.j=!1;_.Kc.l=new Qc;_.Kc.f=function(){for(var a;a=_.Kc.l.remove();){try{a.Lc.call(a.b)}catch(c){Jc(c)}var b=ph;b.m(a);b.f<b.l&&(b.f++,a.next=b.b,b.b=a)}_.Kc.j=!1};Tc.prototype.addListener=function(a,b,c){c=c?{wh:!1}:null;var d=!this.S.length,e=_.Pa(this.S,Sc(a,b));e?e.Fd=e.Fd&&c:this.S.push({Lc:a,context:b||null,Fd:c});d&&this.f();return a};Tc.prototype.addListenerOnce=function(a,b){this.addListener(a,b,!0);return a};Tc.prototype.removeListener=function(a,b){if(this.S.length){var c=this.S;a=_.Oa(c,Sc(a,b),void 0);0<=a&&_.Qa(c,a);this.S.length||this.b()}};var Uc=_.Kc;_.m=_.Wc.prototype;_.m.Ed=_.na();_.m.Cd=_.na();_.m.addListener=function(a,b){return this.S.addListener(a,b)};_.m.addListenerOnce=function(a,b){return this.S.addListenerOnce(a,b)};_.m.removeListener=function(a,b){return this.S.removeListener(a,b)};_.m.notify=function(a){_.Vc(this.S,function(a){a(this.get())},this,a)};_.v(_.Xc,_.Wc);_.Xc.prototype.set=function(a){this.Li(a);this.notify()};_.v(_.Yc,_.Xc);_.Yc.prototype.get=_.k("b");_.Yc.prototype.Li=_.oa("b");_.v(Zc,_.G);_.qh=_.jd("d",void 0);_.rh=_.ld("d");_.sh=_.jd("f",void 0);_.Q=_.md();_.th=_.kd("i",void 0);_.uh=_.ld("i");_.vh=_.ld("j");_.wh=_.jd("u",void 0);_.xh=_.kd("u",void 0);_.yh=_.ld("u");_.zh=_.nd();_.R=_.od();_.S=_.pd();_.Ah=_.ld("e");_.T=_.jd("s",void 0);_.Bh=_.kd("s",void 0);_.Ch=_.ld("s");_.Dh=_.jd("x",void 0);_.Eh=_.kd("x",void 0);_.Fh=_.ld("x");_.Gh=_.ld("y");var Ih;_.Hh=new qd;Ih=/'/g;qd.prototype.b=function(a,b){var c=[];sd(a,b,c);return c.join("&").replace(Ih,"%27")};_.ud[" "]=_.sa;var Vh,vd,Zh;_.Jh=_.Ec("Opera");_.Kh=_.Fc();_.Lh=_.Ec("Edge");_.Mh=_.Ec("Gecko")&&!(_.Ka()&&!_.Ec("Edge"))&&!(_.Ec("Trident")||_.Ec("MSIE"))&&!_.Ec("Edge");_.Nh=_.Ka()&&!_.Ec("Edge");_.Oh=_.Ec("Macintosh");_.Ph=_.Ec("Windows");_.Qh=_.Ec("Linux")||_.Ec("CrOS");_.Rh=_.Ec("Android");_.Sh=_.td();_.Th=_.Ec("iPad");_.Uh=_.Ec("iPod");
a:{var Wh="",Xh=function(){var a=_.Ja;if(_.Mh)return/rv\:([^\);]+)(\)|;)/.exec(a);if(_.Lh)return/Edge\/([\d\.]+)/.exec(a);if(_.Kh)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(_.Nh)return/WebKit\/(\S+)/.exec(a);if(_.Jh)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Xh&&(Wh=Xh?Xh[1]:"");if(_.Kh){var Yh=xd();if(null!=Yh&&Yh>(0,window.parseFloat)(Wh)){Vh=String(Yh);break a}}Vh=Wh}_.yd=Vh;vd={};Zh=_.Hc.document;_.$h=Zh&&_.Kh?xd()||("CSS1Compat"==Zh.compatMode?(0,window.parseInt)(_.yd,10):5):void 0;_.ai=_.Ec("Firefox");_.bi=_.td()||_.Ec("iPod");_.ci=_.Ec("iPad");_.di=_.Ec("Android")&&!(Gc()||_.Ec("Firefox")||_.Ec("Opera")||_.Ec("Silk"));_.ei=Gc();_.fi=_.Ec("Safari")&&!(Gc()||_.Ec("Coast")||_.Ec("Opera")||_.Ec("Edge")||_.Ec("Silk")||_.Ec("Android"))&&!(_.td()||_.Ec("iPad")||_.Ec("iPod"));_.Ad.prototype.heading=_.k("b");_.Ad.prototype.Ta=_.ra(2);_.Ad.prototype.toString=function(){return this.b+","+this.f};_.gi=new _.Ad;_.v(Bd,_.G);Bd.prototype.set=function(a,b){if(null!=b&&!(b&&_.B(b.maxZoom)&&b.tileSize&&b.tileSize.width&&b.tileSize.height&&b.getTile&&b.getTile.apply))throw Error("Expected value implementing google.maps.MapType");return _.G.prototype.set.apply(this,arguments)};_.m=Cd.prototype;_.m.isEmpty=function(){return 360==this.b-this.f};_.m.intersects=function(a){var b=this.b,c=this.f;return this.isEmpty()||a.isEmpty()?!1:_.Dd(this)?_.Dd(a)||a.b<=this.f||a.f>=b:_.Dd(a)?a.b<=c||a.f>=b:a.b<=c&&a.f>=b};_.m.contains=function(a){-180==a&&(a=180);var b=this.b,c=this.f;return _.Dd(this)?(a>=b||a<=c)&&!this.isEmpty():a>=b&&a<=c};_.m.extend=function(a){this.contains(a)||(this.isEmpty()?this.b=this.f=a:_.Gd(a,this.b)<_.Gd(this.f,a)?this.b=a:this.f=a)};
_.m.Rb=function(){var a=(this.b+this.f)/2;_.Dd(this)&&(a=_.Xa(a+180,-180,180));return a};_.m=Hd.prototype;_.m.isEmpty=function(){return this.f>this.b};_.m.intersects=function(a){var b=this.f,c=this.b;return b<=a.f?a.f<=c&&a.f<=a.b:b<=a.b&&b<=c};_.m.contains=function(a){return a>=this.f&&a<=this.b};_.m.extend=function(a){this.isEmpty()?this.b=this.f=a:a<this.f?this.f=a:a>this.b&&(this.b=a)};_.m.Rb=function(){return(this.b+this.f)/2};_.m=_.Jd.prototype;_.m.getCenter=function(){return new _.H(this.f.Rb(),this.b.Rb())};_.m.toString=function(){return"("+this.getSouthWest()+", "+this.getNorthEast()+")"};_.m.toJSON=function(){return{south:this.f.f,west:this.b.b,north:this.f.b,east:this.b.f}};_.m.toUrlValue=function(a){var b=this.getSouthWest(),c=this.getNorthEast();return[b.toUrlValue(a),c.toUrlValue(a)].join()};
_.m.Nj=function(a){if(!a)return!1;a=_.Md(a);var b=this.f,c=a.f;return(b.isEmpty()?c.isEmpty():1E-9>=Math.abs(c.f-b.f)+Math.abs(b.b-c.b))&&_.Fd(this.b,a.b)};_.Jd.prototype.equals=_.Jd.prototype.Nj;_.m=_.Jd.prototype;_.m.contains=function(a){return this.f.contains(a.lat())&&this.b.contains(a.lng())};_.m.intersects=function(a){a=_.Md(a);return this.f.intersects(a.f)&&this.b.intersects(a.b)};_.m.extend=function(a){this.f.extend(a.lat());this.b.extend(a.lng());return this};
_.m.union=function(a){a=_.Md(a);if(!a||a.isEmpty())return this;this.extend(a.getSouthWest());this.extend(a.getNorthEast());return this};_.m.getSouthWest=function(){return new _.H(this.f.f,this.b.b,!0)};_.m.getNorthEast=function(){return new _.H(this.f.b,this.b.f,!0)};_.m.toSpan=function(){return new _.H(_.Id(this.f),_.Ed(this.b),!0)};_.m.isEmpty=function(){return this.f.isEmpty()||this.b.isEmpty()};var Ld=_.Eb({south:_.nc,west:_.nc,north:_.nc,east:_.nc},!1);_.v(_.Nd,_.G);_.m=Qd.prototype;_.m.contains=function(a){return this.b.hasOwnProperty(_.vb(a))};_.m.getFeatureById=function(a){return gb(this.f,a)};
_.m.add=function(a){a=a||{};a=a instanceof _.mc?a:new _.mc(a);if(!this.contains(a)){var b=a.getId();if(b){var c=this.getFeatureById(b);c&&this.remove(c)}c=_.vb(a);this.b[c]=a;b&&(this.f[b]=a);var d=_.C.forward(a,"setgeometry",this),e=_.C.forward(a,"setproperty",this),f=_.C.forward(a,"removeproperty",this);this.j[c]=function(){_.C.removeListener(d);_.C.removeListener(e);_.C.removeListener(f)};_.C.trigger(this,"addfeature",{feature:a})}return a};
_.m.remove=function(a){var b=_.vb(a),c=a.getId();if(this.b[b]){delete this.b[b];c&&delete this.f[c];if(c=this.j[b])delete this.j[b],c();_.C.trigger(this,"removefeature",{feature:a})}};_.m.forEach=function(a){for(var b in this.b)a(this.b[b])};Rd.prototype.get=function(a){return this.b[a]};Rd.prototype.set=function(a,b){var c=this.b;c[a]||(c[a]={});_.Ua(c[a],b);_.C.trigger(this,"changed",a)};Rd.prototype.reset=function(a){delete this.b[a];_.C.trigger(this,"changed",a)};Rd.prototype.forEach=function(a){_.Ta(this.b,a)};_.v(Sd,_.G);Sd.prototype.overrideStyle=function(a,b){this.b.set(_.vb(a),b)};Sd.prototype.revertStyle=function(a){a?this.b.reset(_.vb(a)):this.b.forEach((0,_.u)(this.b.reset,this.b))};_.v(_.Ud,Xb);_.m=_.Ud.prototype;_.m.getType=_.pa("GeometryCollection");_.m.getLength=function(){return this.b.length};_.m.getAt=function(a){return this.b[a]};_.m.getArray=function(){return this.b.slice()};_.m.forEachLatLng=function(a){this.b.forEach(function(b){b.forEachLatLng(a)})};_.v(_.Wd,Xb);_.m=_.Wd.prototype;_.m.getType=_.pa("LineString");_.m.getLength=function(){return this.b.length};_.m.getAt=function(a){return this.b[a]};_.m.getArray=function(){return this.b.slice()};_.m.forEachLatLng=function(a){this.b.forEach(a)};var Xd=_.Kb(_.Ib(_.Wd,"google.maps.Data.LineString",!0));_.v(_.Yd,Xb);_.m=_.Yd.prototype;_.m.getType=_.pa("MultiLineString");_.m.getLength=function(){return this.b.length};_.m.getAt=function(a){return this.b[a]};_.m.getArray=function(){return this.b.slice()};_.m.forEachLatLng=function(a){this.b.forEach(function(b){b.forEachLatLng(a)})};_.v(_.Zd,Xb);_.m=_.Zd.prototype;_.m.getType=_.pa("MultiPoint");_.m.getLength=function(){return this.b.length};_.m.getAt=function(a){return this.b[a]};_.m.getArray=function(){return this.b.slice()};_.m.forEachLatLng=function(a){this.b.forEach(a)};_.v(_.$d,Xb);_.m=_.$d.prototype;_.m.getType=_.pa("LinearRing");_.m.getLength=function(){return this.b.length};_.m.getAt=function(a){return this.b[a]};_.m.getArray=function(){return this.b.slice()};_.m.forEachLatLng=function(a){this.b.forEach(a)};var ae=_.Kb(_.Ib(_.$d,"google.maps.Data.LinearRing",!0));_.v(_.be,Xb);_.m=_.be.prototype;_.m.getType=_.pa("Polygon");_.m.getLength=function(){return this.b.length};_.m.getAt=function(a){return this.b[a]};_.m.getArray=function(){return this.b.slice()};_.m.forEachLatLng=function(a){this.b.forEach(function(b){b.forEachLatLng(a)})};var ce=_.Kb(_.Ib(_.be,"google.maps.Data.Polygon",!0));_.v(_.de,Xb);_.m=_.de.prototype;_.m.getType=_.pa("MultiPolygon");_.m.getLength=function(){return this.b.length};_.m.getAt=function(a){return this.b[a]};_.m.getArray=function(){return this.b.slice()};_.m.forEachLatLng=function(a){this.b.forEach(function(b){b.forEachLatLng(a)})};var hi=_.Eb({source:_.dh,webUrl:_.gh,iosDeepLinkId:_.gh});var ii=_.Nb(_.Eb({placeId:_.gh,query:_.gh,location:_.Yb}),function(a){if(a.placeId&&a.query)throw _.Cb("cannot set both placeId and query");if(!a.placeId&&!a.query)throw _.Cb("must set one of placeId or query");return a});_.v(ee,_.G);
_.sc(ee.prototype,{position:_.Pb(_.Yb),title:_.gh,icon:_.Pb(_.Mb([_.dh,{Fg:Qb("url"),then:_.Eb({url:_.dh,scaledSize:_.Pb(pc),size:_.Pb(pc),origin:_.Pb(oc),anchor:_.Pb(oc),labelOrigin:_.Pb(oc),path:_.Lb(function(a){return null==a})},!0)},{Fg:Qb("path"),then:_.Eb({path:_.Mb([_.dh,_.Jb(kh)]),anchor:_.Pb(oc),labelOrigin:_.Pb(oc),fillColor:_.gh,fillOpacity:_.fh,rotation:_.fh,scale:_.fh,strokeColor:_.gh,strokeOpacity:_.fh,strokeWeight:_.fh,url:_.Lb(function(a){return null==a})},!0)}])),label:_.Pb(_.Mb([_.dh,{Fg:Qb("text"),
then:_.Eb({text:_.dh,fontSize:_.gh,fontWeight:_.gh,fontFamily:_.gh},!0)}])),shadow:_.Cc,shape:_.Cc,cursor:_.gh,clickable:_.hh,animation:_.Cc,draggable:_.hh,visible:_.hh,flat:_.Cc,zIndex:_.fh,opacity:_.fh,place:_.Pb(ii),attribution:_.Pb(hi)});var ic={main:[],common:["main"],util:["common"],adsense:["main"],controls:["util"],data:["util"],directions:["util","geometry"],distance_matrix:["util"],drawing:["main"],drawing_impl:["controls"],elevation:["util","geometry"],geocoder:["util"],geojson:["main"],imagery_viewer:["main"],geometry:["main"],infowindow:["util"],kml:["onion","util","map"],layers:["map"],map:["common"],marker:["util"],maxzoom:["util"],onion:["util","map"],overlay:["common"],panoramio:["main"],places:["main"],places_impl:["controls"],
poly:["util","map","geometry"],search:["main"],search_impl:["onion"],stats:["util"],streetview:["util","geometry"],usage:["util"],visualization:["main"],visualization_impl:["onion"],weather:["main"],zombie:["main"]};var ji=_.Hc.google.maps,ki=fc.Tb(),li=(0,_.u)(ki.Zb,ki);ji.__gjsload__=li;_.Ta(ji.modules,li);delete ji.modules;_.mi=_.Pb(_.Ib(_.Nd,"Map"));var ni=_.Pb(_.Ib(_.Bc,"StreetViewPanorama"));_.v(_.he,ee);_.he.prototype.map_changed=function(){this.__gm.set&&this.__gm.set.remove(this);var a=this.get("map");this.__gm.set=a&&a.__gm.Pc;this.__gm.set&&_.yc(this.__gm.set,this)};_.he.MAX_ZINDEX=1E6;_.sc(_.he.prototype,{map:_.Mb([_.mi,ni])});var ke=oe(_.Ib(_.H,"LatLng"));_.v(qe,_.G);qe.prototype.map_changed=qe.prototype.visible_changed=function(){var a=this;_.J("poly",function(b){b.f(a)})};qe.prototype.getPath=function(){return this.get("latLngs").getAt(0)};qe.prototype.setPath=function(a){try{this.get("latLngs").setAt(0,le(a))}catch(b){_.Db(b)}};_.sc(qe.prototype,{draggable:_.hh,editable:_.hh,map:_.mi,visible:_.hh});_.v(_.re,qe);_.re.prototype.Ha=!0;_.re.prototype.getPaths=function(){return this.get("latLngs")};_.re.prototype.setPaths=function(a){this.set("latLngs",pe(a))};_.v(_.se,qe);_.se.prototype.Ha=!1;_.ue="click dblclick mousedown mousemove mouseout mouseover mouseup rightclick".split(" ");_.v(ve,_.G);_.m=ve.prototype;_.m.contains=function(a){return this.b.contains(a)};_.m.getFeatureById=function(a){return this.b.getFeatureById(a)};_.m.add=function(a){return this.b.add(a)};_.m.remove=function(a){this.b.remove(a)};_.m.forEach=function(a){this.b.forEach(a)};_.m.addGeoJson=function(a,b){return _.te(this.b,a,b)};_.m.loadGeoJson=function(a,b,c){var d=this.b;_.J("data",function(e){e.gm(d,a,b,c)})};_.m.toGeoJson=function(a){var b=this.b;_.J("data",function(c){c.cm(b,a)})};
_.m.overrideStyle=function(a,b){this.f.overrideStyle(a,b)};_.m.revertStyle=function(a){this.f.revertStyle(a)};_.m.controls_changed=function(){this.get("controls")&&we(this)};_.m.drawingMode_changed=function(){this.get("drawingMode")&&we(this)};_.sc(ve.prototype,{map:_.mi,style:_.Cc,controls:_.Pb(_.Kb(_.Jb(ch))),controlPosition:_.Pb(_.Jb(_.Hf)),drawingMode:_.Pb(_.Jb(ch))});_.xe.prototype.B=_.k("b");_.ye.prototype.B=_.k("b");_.oi=new _.xe;_.pi=new _.xe;ze.prototype.B=_.k("b");_.qi=new _.Ae;_.Ae.prototype.B=_.k("b");_.ri=new _.xe;_.si=new ze;_.Be.prototype.B=_.k("b");_.ti=new _.ye;_.ui=new _.Be;_.vi={METRIC:0,IMPERIAL:1};_.wi={DRIVING:"DRIVING",WALKING:"WALKING",BICYCLING:"BICYCLING",TRANSIT:"TRANSIT"};_.xi={BEST_GUESS:"bestguess",OPTIMISTIC:"optimistic",PESSIMISTIC:"pessimistic"};_.yi={BUS:"BUS",RAIL:"RAIL",SUBWAY:"SUBWAY",TRAIN:"TRAIN",TRAM:"TRAM"};_.zi={LESS_WALKING:"LESS_WALKING",FEWER_TRANSFERS:"FEWER_TRANSFERS"};var Ai=_.Eb({routes:_.Kb(_.Lb(_.bb))},!0);_.v(De,_.G);_.m=De.prototype;_.m.internalAnchor_changed=function(){var a=this.get("internalAnchor");Ee(this,"attribution",a);Ee(this,"place",a);Ee(this,"internalAnchorMap",a,"map");Ee(this,"internalAnchorPoint",a,"anchorPoint");a instanceof _.he?Ee(this,"internalAnchorPosition",a,"internalPosition"):Ee(this,"internalAnchorPosition",a,"position")};
_.m.internalAnchorPoint_changed=De.prototype.internalPixelOffset_changed=function(){var a=this.get("internalAnchorPoint")||_.ih,b=this.get("internalPixelOffset")||_.jh;this.set("pixelOffset",new _.M(b.width+Math.round(a.x),b.height+Math.round(a.y)))};_.m.internalAnchorPosition_changed=function(){var a=this.get("internalAnchorPosition");a&&this.set("position",a)};_.m.internalAnchorMap_changed=function(){this.get("internalAnchor")&&this.b.set("map",this.get("internalAnchorMap"))};
_.m.Jn=function(){var a=this.get("internalAnchor");!this.b.get("map")&&a&&a.get("map")&&this.set("internalAnchor",null)};_.m.internalContent_changed=function(){this.set("content",Ce(this.get("internalContent")))};_.m.trigger=function(a){_.C.trigger(this.b,a)};_.m.close=function(){this.b.set("map",null)};_.v(_.Fe,_.G);_.sc(_.Fe.prototype,{content:_.Mb([_.gh,_.Lb(Hb)]),position:_.Pb(_.Yb),size:_.Pb(pc),map:_.Mb([_.mi,ni]),anchor:_.Pb(_.Ib(_.G,"MVCObject")),zIndex:_.fh});_.Fe.prototype.open=function(a,b){this.set("anchor",b);b?!this.get("map")&&a&&this.set("map",a):this.set("map",a)};_.Fe.prototype.close=function(){this.set("map",null)};_.Ge=[];_.v(Ie,_.G);Ie.prototype.changed=function(a){if("map"==a||"panel"==a){var b=this;_.J("directions",function(c){c.Km(b,a)})}"panel"==a&&_.He(this.getPanel())};_.sc(Ie.prototype,{directions:Ai,map:_.mi,panel:_.Pb(_.Lb(Hb)),routeIndex:_.fh});Je.prototype.route=function(a,b){_.J("directions",function(c){c.Ii(a,b,!0)})};Ke.prototype.getDistanceMatrix=function(a,b){_.J("distance_matrix",function(c){c.b(a,b)})};Le.prototype.getElevationAlongPath=function(a,b){_.J("elevation",function(c){c.getElevationAlongPath(a,b)})};Le.prototype.getElevationForLocations=function(a,b){_.J("elevation",function(c){c.getElevationForLocations(a,b)})};_.Bi=_.Ib(_.Jd,"LatLngBounds");_.Me.prototype.geocode=function(a,b){_.J("geocoder",function(c){c.geocode(a,b)})};_.v(_.Ne,_.G);_.Ne.prototype.map_changed=function(){var a=this;_.J("kml",function(b){b.b(a)})};_.sc(_.Ne.prototype,{map:_.mi,url:null,bounds:null,opacity:_.fh});_.Di={UNKNOWN:"UNKNOWN",OK:_.ga,INVALID_REQUEST:_.ba,DOCUMENT_NOT_FOUND:"DOCUMENT_NOT_FOUND",FETCH_ERROR:"FETCH_ERROR",INVALID_DOCUMENT:"INVALID_DOCUMENT",DOCUMENT_TOO_LARGE:"DOCUMENT_TOO_LARGE",LIMITS_EXCEEDED:"LIMITS_EXECEEDED",TIMED_OUT:"TIMED_OUT"};_.v(Oe,_.G);_.m=Oe.prototype;_.m.Ud=function(){var a=this;_.J("kml",function(b){b.f(a)})};_.m.url_changed=Oe.prototype.Ud;_.m.driveFileId_changed=Oe.prototype.Ud;_.m.map_changed=Oe.prototype.Ud;_.m.zIndex_changed=Oe.prototype.Ud;_.sc(Oe.prototype,{map:_.mi,defaultViewport:null,metadata:null,status:null,url:_.gh,screenOverlays:_.hh,zIndex:_.fh});_.v(_.Pe,_.G);_.sc(_.Pe.prototype,{map:_.mi});_.v(Qe,_.G);_.sc(Qe.prototype,{map:_.mi});_.v(Re,_.G);_.sc(Re.prototype,{map:_.mi});_.Gf={japan_prequake:20,japan_postquake2010:24};_.Ei={NEAREST:"nearest",BEST:"best"};_.Fi={DEFAULT:"default",OUTDOOR:"outdoor"};var Gi,Hi,Ii,Ji;Se.prototype.B=_.k("b");var Ki=new Te,Li=new Ue,Mi=new Ve;Te.prototype.B=_.k("b");Ue.prototype.B=_.k("b");Ve.prototype.B=_.k("b");_.We.prototype.B=_.k("b");_.Ni=new _.We;_.Oi=new _.We;var yf,zf,sf,Bf,Ef;_.$e.prototype.B=_.k("b");_.$e.prototype.getUrl=function(a){return _.N(this.b,0)[a]};_.$e.prototype.setUrl=function(a,b){_.N(this.b,0)[a]=b};_.af.prototype.B=_.k("b");_.bf.prototype.B=_.k("b");_.Pi=new _.$e;_.Qi=new _.$e;_.Ri=new _.$e;_.Si=new _.$e;_.Ti=new _.$e;cf.prototype.B=_.k("b");df.prototype.B=_.k("b");ef.prototype.B=_.k("b");ff.prototype.B=_.k("b");_.Ui=new _.bf;_.Vi=new _.af;yf=new cf;zf=new df;sf=new ef;_.Wi=new _.hf;_.Xi=new _.jf;Bf=new Se;Ef=new gf;gf.prototype.B=_.k("b");
_.hf.prototype.B=_.k("b");_.jf.prototype.B=_.k("b");_.v(If,_.Bc);If.prototype.visible_changed=function(){var a=this;!a.C&&a.getVisible()&&(a.C=!0,_.J("streetview",function(b){var c;a.j&&(c=a.j);b.co(a,c)}))};_.sc(If.prototype,{visible:_.hh,pano:_.gh,position:_.Pb(_.Yb),pov:_.Pb(lh),photographerPov:null,location:null,links:_.Kb(_.Lb(_.bb)),status:null,zoom:_.fh,enableCloseButton:_.hh});If.prototype.registerPanoProvider=_.rc("panoProvider");_.m=_.Jf.prototype;_.m.ce=_.ra(3);_.m.Fb=_.ra(4);_.m.Od=_.ra(5);_.m.Nd=_.ra(6);_.m.Md=_.ra(7);_.v(Kf,Zc);_.Lf.prototype.addListener=function(a,b){this.S.addListener(a,b)};_.Lf.prototype.addListenerOnce=function(a,b){this.S.addListenerOnce(a,b)};_.Lf.prototype.removeListener=function(a,b){this.S.removeListener(a,b)};_.Lf.prototype.b=_.ra(8);_.fg={};_.Nf.prototype.fromLatLngToPoint=function(a,b){b=b||new _.K(0,0);var c=this.b;b.x=c.x+a.lng()*this.j;a=_.Wa(Math.sin(_.Rb(a.lat())),-(1-1E-15),1-1E-15);b.y=c.y+.5*Math.log((1+a)/(1-a))*-this.l;return b};_.Nf.prototype.fromPointToLatLng=function(a,b){var c=this.b;return new _.H(_.Sb(2*Math.atan(Math.exp((a.y-c.y)/-this.l))-Math.PI/2),(a.x-c.x)/this.j,b)};_.Of.prototype.isEmpty=function(){return!(this.M<this.O&&this.L<this.R)};_.Of.prototype.extend=function(a){a&&(this.M=Math.min(this.M,a.x),this.O=Math.max(this.O,a.x),this.L=Math.min(this.L,a.y),this.R=Math.max(this.R,a.y))};_.Of.prototype.getCenter=function(){return new _.K((this.M+this.O)/2,(this.L+this.R)/2)};_.Yi=_.Pf(-window.Infinity,-window.Infinity,window.Infinity,window.Infinity);_.Zi=_.Pf(0,0,0,0);_.v(_.Sf,_.G);_.Sf.prototype.N=function(){var a=this;a.G||(a.G=window.setTimeout(function(){a.G=void 0;a.aa()},a.Dl))};_.Sf.prototype.C=function(){this.G&&window.clearTimeout(this.G);this.G=void 0;this.aa()};var $i,aj;Vf.prototype.B=_.k("b");Wf.prototype.B=_.k("b");var ij=new Vf;var jj,kj;Xf.prototype.B=_.k("b");Yf.prototype.B=_.k("b");var lj;Zf.prototype.B=_.k("b");Zf.prototype.getZoom=function(){var a=this.b[2];return null!=a?a:0};Zf.prototype.setZoom=function(a){this.b[2]=a};var mj=new Xf,nj=new Yf,oj=new Wf,pj=new Se;_.v($f,_.Sf);var ag={roadmap:0,satellite:2,hybrid:3,terrain:4},qj={0:1,2:2,3:2,4:2};_.m=$f.prototype;_.m.Nh=_.qc("center");_.m.Ug=_.qc("zoom");_.m.changed=function(){var a=this.Nh(),b=this.Ug(),c=bg(this);if(a&&!a.b(this.I)||this.H!=b||this.K!=c)cg(this.f),this.N(),this.H=b,this.K=c;this.I=a};
_.m.aa=function(){var a="",b=this.Nh(),c=this.Ug(),d=bg(this),e=this.get("size");if(b&&(0,window.isFinite)(b.lat())&&(0,window.isFinite)(b.lng())&&1<c&&null!=d&&e&&e.width&&e.height&&this.b){_.Tf(this.b,e);var f;(b=_.Qf(this.l,b,c))?(f=new _.Of,f.M=Math.round(b.x-e.width/2),f.O=f.M+e.width,f.L=Math.round(b.y-e.height/2),f.R=f.L+e.height):f=null;b=qj[d];if(f){var a=new Zf,g;a.b[0]=a.b[0]||[];g=new Xf(a.b[0]);g.b[0]=f.M;g.b[1]=f.L;a.b[1]=b;a.setZoom(c);a.b[3]=a.b[3]||[];c=new Yf(a.b[3]);c.b[0]=f.O-
f.M;c.b[1]=f.R-f.L;a.b[4]=a.b[4]||[];c=new Wf(a.b[4]);c.b[0]=d;c.b[4]=_.kf(_.mf(_.P));c.b[5]=_.lf(_.mf(_.P)).toLowerCase();c.b[9]=!0;c.b[11]=!0;d=this.D+(0,window.unescape)("%3F");if(!lj){c=lj={F:-1,A:[]};jj||(jj={F:-1,A:[,_.Q,_.Q]});b=_.O(mj,jj);kj||(kj={F:-1,A:[]},kj.A=[,_.wh,_.wh,_.pd(1)]);f=_.O(nj,kj);aj||(g=[],aj={F:-1,A:g},g[1]=_.S,g[2]=_.R,g[3]=_.R,g[5]=_.T,g[6]=_.T,$i||($i={F:-1,A:[,_.Ah,_.R]}),g[9]=_.O(ij,$i),g[10]=_.R,g[11]=_.R,g[12]=_.R,g[100]=_.R);g=_.O(oj,aj);if(!Gi){var h=Gi={F:-1,A:[]};
Hi||(Hi={F:-1,A:[,_.R]});var l=_.O(Ki,Hi);Ji||(Ji={F:-1,A:[,_.R,_.R]});var n=_.O(Mi,Ji);Ii||(Ii={F:-1,A:[,_.R]});h.A=[,l,,,,,,,,,n,,_.O(Li,Ii)]}c.A=[,b,_.S,_.wh,f,g,_.O(pj,Gi)]}a=_.Hh.b(a.b,lj);a=this.m(d+a)}}this.f&&e&&(_.Tf(this.f,e),eg(this,a))};
_.m.div_changed=function(){var a=this.get("div"),b=this.b;if(a)if(b)a.appendChild(b);else{b=this.b=window.document.createElement("div");b.style.overflow="hidden";var c=this.f=window.document.createElement("img");_.C.addDomListener(b,"contextmenu",function(a){_.jb(a);_.lb(a)});c.ontouchstart=c.ontouchmove=c.ontouchend=c.ontouchcancel=function(a){_.kb(a);_.lb(a)};_.Tf(c,_.jh);a.appendChild(b);this.aa()}else b&&(cg(b),this.b=null)};var mg;_.Ag="StopIteration"in _.Hc?_.Hc.StopIteration:{message:"StopIteration",stack:""};_.og.prototype.next=function(){throw _.Ag;};_.og.prototype.rf=function(){return this};_.pg.prototype.Vf=!0;_.pg.prototype.Ub=_.ra(10);_.pg.prototype.$h=!0;_.pg.prototype.se=_.ra(12);_.qg("about:blank");_.sg.prototype.$h=!0;_.sg.prototype.se=_.ra(11);_.sg.prototype.Vf=!0;_.sg.prototype.Ub=_.ra(9);_.rg={};_.tg("<!DOCTYPE html>",0);_.tg("",0);_.tg("<br>",0);!_.Mh&&!_.Kh||_.Kh&&9<=Number(_.$h)||_.Mh&&_.zd("1.9.1");_.Kh&&_.zd("9");_.v(wg,_.og);wg.prototype.setPosition=function(a,b,c){if(this.node=a)this.f=_.za(b)?b:1!=this.node.nodeType?0:this.b?-1:1;_.za(c)&&(this.depth=c)};
wg.prototype.next=function(){var a;if(this.j){if(!this.node||this.l&&0==this.depth)throw _.Ag;a=this.node;var b=this.b?-1:1;if(this.f==b){var c=this.b?a.lastChild:a.firstChild;c?this.setPosition(c):this.setPosition(a,-1*b)}else(c=this.b?a.previousSibling:a.nextSibling)?this.setPosition(c):this.setPosition(a.parentNode,-1*b);this.depth+=this.f*(this.b?-1:1)}else this.j=!0;a=this.node;if(!this.node)throw _.Ag;return a};
wg.prototype.splice=function(a){var b=this.node,c=this.b?1:-1;this.f==c&&(this.f=-1*c,this.depth+=this.f*(this.b?-1:1));this.b=!this.b;wg.prototype.next.call(this);this.b=!this.b;for(var c=_.xa(arguments[0])?arguments[0]:arguments,d=c.length-1;0<=d;d--)_.ug(c[d],b);_.vg(b)};_.v(xg,wg);xg.prototype.next=function(){do xg.Kb.next.call(this);while(-1==this.f);return this.node};_.sj=_.Hc.document&&_.Hc.document.createElement("div");_.v(Dg,_.Nd);_.m=Dg.prototype;_.m.streetView_changed=function(){this.get("streetView")||this.set("streetView",this.__gm.j)};_.m.getDiv=function(){return this.__gm.X};_.m.panBy=function(a,b){var c=this.__gm;_.J("map",function(){_.C.trigger(c,"panby",a,b)})};_.m.panTo=function(a){var b=this.__gm;a=_.Yb(a);_.J("map",function(){_.C.trigger(b,"panto",a)})};_.m.panToBounds=function(a){var b=this.__gm,c=_.Md(a);_.J("map",function(){_.C.trigger(b,"pantolatlngbounds",c)})};
_.m.fitBounds=function(a){var b=this;a=_.Md(a);_.J("map",function(c){c.fitBounds(b,a)})};_.sc(Dg.prototype,{bounds:null,streetView:ni,center:_.Pb(_.Yb),zoom:_.fh,mapTypeId:_.gh,projection:null,heading:_.fh,tilt:_.fh,clickableIcons:eh});Eg.prototype.getMaxZoomAtLatLng=function(a,b){_.J("maxzoom",function(c){c.getMaxZoomAtLatLng(a,b)})};_.v(Fg,_.G);Fg.prototype.changed=function(a){if("suppressInfoWindows"!=a&&"clickable"!=a){var b=this;_.J("onion",function(a){a.b(b)})}};_.sc(Fg.prototype,{map:_.mi,tableId:_.fh,query:_.Pb(_.Mb([_.dh,_.Lb(_.bb,"not an Object")]))});_.v(_.Gg,_.G);_.Gg.prototype.map_changed=function(){var a=this;_.J("overlay",function(b){b.jl(a)})};_.sc(_.Gg.prototype,{panes:null,projection:null,map:_.Mb([_.mi,ni])});_.v(_.Hg,_.G);_.Hg.prototype.map_changed=_.Hg.prototype.visible_changed=function(){var a=this;_.J("poly",function(b){b.b(a)})};_.Hg.prototype.center_changed=function(){_.C.trigger(this,"bounds_changed")};_.Hg.prototype.radius_changed=_.Hg.prototype.center_changed;_.Hg.prototype.getBounds=function(){var a=this.get("radius"),b=this.get("center");if(b&&_.B(a)){var c=this.get("map"),c=c&&c.__gm.get("mapType");return _.Rf(b,a/_.je(c))}return null};
_.sc(_.Hg.prototype,{center:_.Pb(_.Yb),draggable:_.hh,editable:_.hh,map:_.mi,radius:_.fh,visible:_.hh});_.v(_.Ig,_.G);_.Ig.prototype.map_changed=_.Ig.prototype.visible_changed=function(){var a=this;_.J("poly",function(b){b.j(a)})};_.sc(_.Ig.prototype,{draggable:_.hh,editable:_.hh,bounds:_.Pb(_.Md),map:_.mi,visible:_.hh});_.v(Jg,_.G);Jg.prototype.map_changed=function(){var a=this;_.J("streetview",function(b){b.il(a)})};_.sc(Jg.prototype,{map:_.mi});_.Kg.prototype.getPanorama=function(a,b){var c=this.b||void 0;_.J("streetview",function(d){_.J("geometry",function(e){d.nm(a,b,e.computeHeading,e.computeOffset,c)})})};_.Kg.prototype.getPanoramaByLocation=function(a,b,c){this.getPanorama({location:a,radius:b,preference:50>(b||0)?"best":"nearest"},c)};_.Kg.prototype.getPanoramaById=function(a,b){this.getPanorama({pano:a},b)};_.v(_.Lg,_.G);_.m=_.Lg.prototype;_.m.getTile=function(a,b,c){if(!a||!c)return null;var d=c.createElement("div");c={ba:a,zoom:b,Lb:null};d.__gmimt=c;_.yc(this.b,d);var e=Ng(this);1!=e&&Mg(d,e);if(this.f){var e=this.tileSize||new _.M(256,256),f=this.j(a,b);c.Lb=this.f(a,b,e,d,f,function(){_.C.trigger(d,"load")})}return d};_.m.releaseTile=function(a){a&&this.b.contains(a)&&(this.b.remove(a),(a=a.__gmimt.Lb)&&a.release())};_.m.Mf=_.ra(13);_.m.bo=function(){this.f&&this.b.forEach(function(a){a.__gmimt.Lb.ub()})};
_.m.opacity_changed=function(){var a=Ng(this);this.b.forEach(function(b){Mg(b,a)})};_.m.bd=!0;_.sc(_.Lg.prototype,{opacity:_.fh});_.v(_.Og,_.G);_.Og.prototype.getTile=mh;_.Og.prototype.tileSize=new _.M(256,256);_.Og.prototype.bd=!0;_.v(_.Pg,_.Og);_.v(_.Qg,_.G);_.sc(_.Qg.prototype,{attribution:_.Pb(hi),place:_.Pb(ii)});var tj={Animation:{BOUNCE:1,DROP:2,Zp:3,Xp:4},Circle:_.Hg,ControlPosition:_.Hf,Data:ve,GroundOverlay:_.Ne,ImageMapType:_.Lg,InfoWindow:_.Fe,LatLng:_.H,LatLngBounds:_.Jd,MVCArray:_.uc,MVCObject:_.G,Map:Dg,MapTypeControlStyle:{DEFAULT:0,HORIZONTAL_BAR:1,DROPDOWN_MENU:2,INSET:3,INSET_LARGE:4},MapTypeId:_.bh,MapTypeRegistry:Bd,Marker:_.he,MarkerImage:function(a,b,c,d,e){this.url=a;this.size=b||e;this.origin=c;this.anchor=d;this.scaledSize=e;this.labelOrigin=null},NavigationControlStyle:{DEFAULT:0,SMALL:1,
ANDROID:2,ZOOM_PAN:3,$p:4,Qk:5},OverlayView:_.Gg,Point:_.K,Polygon:_.re,Polyline:_.se,Rectangle:_.Ig,ScaleControlStyle:{DEFAULT:0},Size:_.M,StreetViewPreference:_.Ei,StreetViewSource:_.Fi,StrokePosition:{CENTER:0,INSIDE:1,OUTSIDE:2},SymbolPath:kh,ZoomControlStyle:{DEFAULT:0,SMALL:1,LARGE:2,Qk:3},event:_.C};
_.Ua(tj,{BicyclingLayer:_.Pe,DirectionsRenderer:Ie,DirectionsService:Je,DirectionsStatus:{OK:_.ga,UNKNOWN_ERROR:_.ja,OVER_QUERY_LIMIT:_.ha,REQUEST_DENIED:_.ia,INVALID_REQUEST:_.ba,ZERO_RESULTS:_.la,MAX_WAYPOINTS_EXCEEDED:_.ea,NOT_FOUND:_.fa},DirectionsTravelMode:_.wi,DirectionsUnitSystem:_.vi,DistanceMatrixService:Ke,DistanceMatrixStatus:{OK:_.ga,INVALID_REQUEST:_.ba,OVER_QUERY_LIMIT:_.ha,REQUEST_DENIED:_.ia,UNKNOWN_ERROR:_.ja,MAX_ELEMENTS_EXCEEDED:_.da,MAX_DIMENSIONS_EXCEEDED:_.ca},DistanceMatrixElementStatus:{OK:_.ga,
NOT_FOUND:_.fa,ZERO_RESULTS:_.la},ElevationService:Le,ElevationStatus:{OK:_.ga,UNKNOWN_ERROR:_.ja,OVER_QUERY_LIMIT:_.ha,REQUEST_DENIED:_.ia,INVALID_REQUEST:_.ba,Up:"DATA_NOT_AVAILABLE"},FusionTablesLayer:Fg,Geocoder:_.Me,GeocoderLocationType:{ROOFTOP:"ROOFTOP",RANGE_INTERPOLATED:"RANGE_INTERPOLATED",GEOMETRIC_CENTER:"GEOMETRIC_CENTER",APPROXIMATE:"APPROXIMATE"},GeocoderStatus:{OK:_.ga,UNKNOWN_ERROR:_.ja,OVER_QUERY_LIMIT:_.ha,REQUEST_DENIED:_.ia,INVALID_REQUEST:_.ba,ZERO_RESULTS:_.la,ERROR:_.aa},KmlLayer:Oe,
KmlLayerStatus:_.Di,MaxZoomService:Eg,MaxZoomStatus:{OK:_.ga,ERROR:_.aa},SaveWidget:_.Qg,StreetViewCoverageLayer:Jg,StreetViewPanorama:If,StreetViewService:_.Kg,StreetViewStatus:{OK:_.ga,UNKNOWN_ERROR:_.ja,ZERO_RESULTS:_.la},StyledMapType:_.Pg,TrafficLayer:Qe,TrafficModel:_.xi,TransitLayer:Re,TransitMode:_.yi,TransitRoutePreference:_.zi,TravelMode:_.wi,UnitSystem:_.vi});_.Ua(ve,{Feature:_.mc,Geometry:Xb,GeometryCollection:_.Ud,LineString:_.Wd,LinearRing:_.$d,MultiLineString:_.Yd,MultiPoint:_.Zd,MultiPolygon:_.de,Point:_.Zb,Polygon:_.be});var Vg=/'/g,Wg;_.kc("main",{});window.google.maps.Load(function(a,b){var c=window.google.maps;$g();var d=ah(c);_.P=new ff(a);_.uj=Math.random()<_.uf();_.vj=Math.round(1E15*Math.random()).toString(36);_.Cg=Xg();_.Ci=Yg();_.rj=new _.uc;_.kg=b;for(a=0;a<_.ed(_.P.b,8);++a)_.fg[Df(a)]=!0;a=_.Af();ge(qf(a));_.Ta(tj,function(a,b){c[a]=b});c.version=_.rf(a);window.setTimeout(function(){lc(["util","stats"],function(a,b){a.f.b();a.j();d&&b.b.b({ev:"api_alreadyloaded",client:_.vf(_.P),key:_.xf()})})},5E3);_.C.Ao();mg=new lg;(a=wf())&&lc(_.N(_.P.b,
12),Zg(a),!0)});}).call(this,{});


// Ol3-Google-Maps. See https://github.com/mapgears/ol3-google-maps/
// License: https://github.com/mapgears/ol3-google-maps/blob/master/LICENSE
// Version: v0.4

(function (root, factory) {
  if (typeof exports === "object") {
    module.exports = factory(root.ol);
  } else if (typeof define === "function" && define.amd) {
    define(['ol'], factory);
  } else {
    root.olgm = factory(root.ol);
  }
}(this, function (ol) {
  var OL3GOOGLEMAPS = {};
  var g,l=this;
function m(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function n(a,b,c){n=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return n.apply(null,arguments)}function p(a,b){var c=a.split("."),d=OL3GOOGLEMAPS||l;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]?d=d[e]:d=d[e]={}:d[e]=b}
function r(a,b){function c(){}c.prototype=b.prototype;a.j=b.prototype;a.prototype=new c;a.fa=function(a,c,f){return b.prototype[c].apply(a,Array.prototype.slice.call(arguments,2))}};function t(a,b){this.e=a;this.a=b};function u(a,b){return a<b?-1:a>b?1:0};var v=[156543.03390625,78271.516953125,39135.7584765625,19567.87923828125,9783.939619140625,4891.9698095703125,2445.9849047851562,1222.9924523925781,611.4962261962891,305.74811309814453,152.87405654907226,76.43702827453613,38.218514137268066,19.109257068634033,9.554628534317017,4.777314267158508,2.388657133579254,1.194328566789627,.5971642833948135,.298582141697,.14929107084,.07464553542,.03732276771];
function w(a){var b=null;return b=a instanceof ol.geom.Point?a.getCoordinates():a instanceof ol.geom.Polygon?a.getInteriorPoint().getCoordinates():ol.extent.getCenter(a.getExtent())}function x(a){var b="",c=null;"string"===typeof a?0===a.indexOf("rgba")?c=y(a):b=a:Array.isArray(a)&&(c=a);null!==c&&(b=["rgb(",c[0],",",c[1],",",c[2],")"].join(""));return b}
function B(a){var b=null,c=null;"string"===typeof a?0===a.indexOf("rgba")&&(c=y(a)):Array.isArray(a)&&(c=a);c&&void 0!==c[3]&&(b=+c[3]);return b}function C(a){var b=null;a instanceof ol.style.Style?b=a:a instanceof ol.layer.Vector||a instanceof ol.Feature?(b=a.getStyle())&&b instanceof Function&&(b=b()[0]):a instanceof Function&&(b=a()[0]);return b}function y(a){var b=null;(a=a.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/))&&a.length&&(b=[+a[1],+a[2],+a[3],+a[4]]);return b}
function D(a,b){a.forEach(ol.Observable.unByKey);a.length=0;b&&(b.forEach(E),b.length=0)};function F(a){this.set("font","normal 10px sans-serif");this.set("textAlign","center");this.set("textBaseline","middle");this.set("zIndex",1E3);this.setValues(a)}window.google&&window.google.maps&&r(F,google.maps.OverlayView);g=F.prototype;g.J=!1;g.L=0;g.U=0;g.changed=function(a){switch(a){case "fontColor":case "fontFamily":case "fontSize":case "fontWeight":case "strokeColor":case "strokeWeight":case "text":case "textAlign":case "textBaseline":ca(this);break;case "maxZoom":case "minZoom":case "offsetX":case "offsetY":case "position":this.draw()}};
function ca(a){var b=a.a;if(b){var c=b.style,d=a.get("fontColor");if(d&&(c.zIndex=a.get("zIndex"),c=b.getContext("2d"),c.clearRect(0,0,b.width,b.height),c.textBaseline=a.get("textBaseline"),c.strokeStyle=a.get("strokeColor"),c.fillStyle=d,c.font=a.get("font"),c.textAlign=a.get("textAlign"),d=a.get("text"))){var e=b.width/2,b=b.height/2;if(a=Number(a.get("strokeWeight")))c.lineWidth=a,c.strokeText(d,e,b);c.fillText(d,e,b)}}}
g.onAdd=function(){var a=this.a=document.createElement("canvas");a.style.position="absolute";a.getContext("2d").lineJoin="round";ca(this);var b=this.getPanes();b&&b.markerLayer.appendChild(a)};g.draw=function(){if(this.J)da(this);else{var a=this.a;if(a){var a=a.getContext("2d"),b=a.canvas.height;this.U=a.canvas.width;this.L=b;da(this)&&(this.J=!0)}}};
function da(a){var b=a.get("position");if(!b)return!1;var c=a.getProjection();if(!c)return!1;var c=c.fromLatLngToDivPixel(b),d=a.L,e=a.U,f=a.get("offsetX")||0,h=a.get("offsetY")||0,b=a.a.style;b.top=c.y-d/2+h+"px";b.left=c.x-e/2+f+"px";c=a.get("minZoom");d=a.get("maxZoom");void 0===c&&void 0===d?a="":(a=a.getMap())?(a=a.getZoom(),a=a<c||a>d?"hidden":""):a="";b.visibility=a;return!0}g.onRemove=function(){var a=this.a;a&&a.parentNode&&a.parentNode.removeChild(a)};function ea(a,b){var c=null;if(a instanceof ol.geom.Point)c=G(a,b);else if(a instanceof ol.geom.LineString||a instanceof ol.geom.Polygon){var d=void 0!==b?b.getView().getProjection():"EPSG:3857",c=[],e,f;f=a instanceof ol.geom.LineString?a.getCoordinates():a.getCoordinates()[0];for(var h=0,k=f.length;h<k;h++)e=ol.proj.transform(f[h],d,"EPSG:4326"),c.push(new google.maps.LatLng(e[1],e[0]));d=null;a instanceof ol.geom.LineString?d=new google.maps.Data.LineString(c):d=new google.maps.Data.Polygon([c]);
c=d}return c}function G(a,b){var c=void 0!==b?b.getView().getProjection():"EPSG:3857",d;d=a instanceof ol.geom.Point?a.getCoordinates():a;c=ol.proj.transform(d,c,"EPSG:4326");return new google.maps.LatLng(c[1],c[0])}
function fa(a,b){var c=null,d=C(a);if(d){var c={},e=d.getStroke();if(e){var f=e.getColor();f&&(c.strokeColor=x(f),f=B(f),null!==f&&(c.strokeOpacity=f));(e=e.getWidth())&&(c.strokeWeight=e)}if(e=d.getFill())if(e=e.getColor())c.fillColor=x(e),e=B(e),null!==e&&(c.fillOpacity=e);if(f=d.getImage()){d={};e={};if(f instanceof ol.style.Circle){e.path=google.maps.SymbolPath.CIRCLE;var h=f.getStroke();if(h){var k=h.getColor();k&&(e.strokeColor=x(k));e.strokeWeight=h.getWidth()}if(h=f.getFill())if(h=h.getColor())e.fillColor=
x(h),h=B(h),e.fillOpacity=null!==h?h:1;(f=f.getRadius())&&(e.scale=f)}else f instanceof ol.style.Icon&&((h=f.getSrc())&&(e.url=h),h=f.getScale(),(k=f.getAnchor())&&(e.anchor=void 0!==h?new google.maps.Point(k[0]*h,k[1]*h):new google.maps.Point(k[0],k[1])),(k=f.getOrigin())&&(e.origin=new google.maps.Point(k[0],k[1])),f=f.getSize())&&(e.size=new google.maps.Size(f[0],f[1]),void 0!==h&&(e.scaledSize=new google.maps.Size(f[0]*h,f[1]*h)));Object.keys(d).length?c.icon=d:Object.keys(e).length&&(c.icon=
e)}0===Object.keys(c).length?c.visible=!1:void 0!==b&&(c.zIndex=2*b)}return c};function H(a,b){this.h=[];this.M=[];t.call(this,a,b)}r(H,t);H.prototype.g=function(){};H.prototype.f=function(){D(this.h,this.M)};function I(a,b,c,d,e){this.b=c;this.d=d;this.i=e;H.call(this,a,b)}r(I,H);g=I.prototype;g.n=null;g.k=null;
g.g=function(){I.j.g.call(this);var a=this.b.getGeometry(),b=this.b.getGeometry(),b=ea(b,void 0);this.n=new google.maps.Data.Feature({geometry:b});this.d.add(this.n);(b=fa(this.b,this.i))&&this.d.overrideStyle(this.n,b);if(b=C(this.b)){var c=b.getText();if(c){var b={align:"center",position:G(w(a)),zIndex:2*this.i+1},d=c.getText();d&&(b.text=d);(d=c.getFont())&&(b.font=d);(d=c.getFill())&&(d=d.getColor())&&(b.fontColor=d);if(d=c.getStroke()){var e=d.getColor();e&&(b.strokeColor=e);(d=d.getWidth())&&
(b.strokeWeight=d)}(d=c.getOffsetX())&&(b.offsetX=d);(d=c.getOffsetY())&&(b.offsetY=d);(d=c.getTextAlign())&&(b.textAlign=d);(c=c.getTextBaseline())&&(b.textBaseline=c);this.k=new F(b);this.k.setMap(this.a)}}b=this.h;this.c=a.on("change",this.F,this);b.push(this.c);b.push(this.b.on("change:"+this.b.getGeometryName(),this.X,this))};g.f=function(){this.d.remove(this.n);this.n=null;this.k&&(this.k.setMap(null),this.k=null);I.j.f.call(this)};
g.F=function(){var a=this.b.getGeometry();this.n.setGeometry(ea(a));this.k&&(a=G(w(a)),this.k.set("position",a))};g.X=function(){var a=this.h;ol.Observable.unByKey(this.c);a.splice(a.indexOf(this.c),1);this.c=this.b.getGeometry().on("change",this.F,this);a.push(this.c);this.F()};function J(a,b,c,d){this.b=[];this.d=[];this.i=d;this.c=c;H.call(this,a,b)}r(J,H);g=J.prototype;g.g=function(){J.j.g.call(this);this.c.getFeatures().forEach(this.S,this);var a=this.h;a.push(this.c.on("addfeature",this.W,this));a.push(this.c.on("removefeature",this.$,this))};g.f=function(){this.c.getFeatures().forEach(this.Q,this);J.j.f.call(this)};g.W=function(a){this.S(a.feature)};g.$=function(a){this.Q(a.feature)};
g.S=function(a){var b=this.e,c=this.a,d=this.i;this.b.push(a);b=new I(b,c,a,d,this.b.indexOf(a));b.g();this.d.push({feature:a,r:b})};g.Q=function(a){a=this.b.indexOf(a);-1!==a&&(this.b.splice(a,1),this.d[a].r.f(),this.d.splice(a,1))};var K=Array.prototype,ga=K.indexOf?function(a,b,c){return K.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if("string"==typeof a)return"string"==typeof b&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};var L;a:{var ha=l.navigator;if(ha){var ia=ha.userAgent;if(ia){L=ia;break a}}L=""};var ja=-1!=L.indexOf("Opera")||-1!=L.indexOf("OPR"),M=-1!=L.indexOf("Trident")||-1!=L.indexOf("MSIE"),N=-1!=L.indexOf("Gecko")&&-1==L.toLowerCase().indexOf("webkit")&&!(-1!=L.indexOf("Trident")||-1!=L.indexOf("MSIE")),O=-1!=L.toLowerCase().indexOf("webkit");function ka(){var a=l.document;return a?a.documentMode:void 0}
var la=function(){var a="",b;if(ja&&l.opera)return a=l.opera.version,"function"==m(a)?a():a;N?b=/rv\:([^\);]+)(\)|;)/:M?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:O&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(L))?a[1]:"");return M&&(b=ka(),b>parseFloat(a))?String(b):a}(),ma={};
function P(a){var b;if(!(b=ma[a])){b=0;for(var c=String(la).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var h=c[f]||"",k=d[f]||"",z=RegExp("(\\d*)(\\D*)","g"),s=RegExp("(\\d*)(\\D*)","g");do{var q=z.exec(h)||["","",""],A=s.exec(k)||["","",""];if(0==q[0].length&&0==A[0].length)break;b=u(0==q[1].length?0:parseInt(q[1],10),0==A[1].length?0:parseInt(A[1],10))||u(0==q[2].length,0==A[2].length)||
u(q[2],A[2])}while(0==b)}b=ma[a]=0<=b}return b}var na=l.document,oa=na&&M?ka()||("CSS1Compat"==na.compatMode?parseInt(la,10):5):void 0;var Q;(Q=!M)||(Q=M&&9<=oa);var pa=Q,qa=M&&!P("9");!O||P("528");N&&P("1.9b")||M&&P("8")||ja&&P("9.5")||O&&P("528");N&&!P("8")||M&&P("9");function R(a,b){this.type=a;this.a=this.b=b}R.prototype.c=function(){};function S(a){S[" "](a);return a}S[" "]=function(){};function T(a,b){R.call(this,a?a.type:"");this.d=this.a=this.b=null;if(a){this.type=a.type;this.b=a.target||a.srcElement;this.a=b;var c=a.relatedTarget;if(c&&N)try{S(c.nodeName)}catch(d){}this.d=a;a.defaultPrevented&&this.c()}}r(T,R);T.prototype.c=function(){T.j.c.call(this);var a=this.d;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,qa)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var ra="closure_listenable_"+(1E6*Math.random()|0),sa=0;function ta(a,b,c,d,e){this.p=a;this.a=null;this.src=b;this.type=c;this.B=!!d;this.b=e;++sa;this.s=this.A=!1}function ua(a){a.s=!0;a.p=null;a.a=null;a.src=null;a.b=null};function va(a){this.src=a;this.a={};this.b=0};var U="closure_lm_"+(1E6*Math.random()|0),V={},wa=0;
function xa(a,b,c,d,e){if("array"==m(b)){for(var f=0;f<b.length;f++)xa(a,b[f],c,d,e);return null}c=ya(c);if(a&&a[ra])a=a.a(b,c,d,e);else{f=c;if(!b)throw Error("Invalid event type");c=!!d;var h=W(a);h||(a[U]=h=new va(a));var k=h,z=b.toString(),h=k.a[z];h||(h=k.a[z]=[],k.b++);var s;b:{for(s=0;s<h.length;++s){var q=h[s];if(!q.s&&q.p==f&&q.B==!!d&&q.b==e)break b}s=-1}-1<s?(d=h[s],d.A=!1):(d=new ta(f,k.src,z,!!d,e),d.A=!1,h.push(d));d.a||(e=za(),d.a=e,e.src=a,e.p=d,a.addEventListener?a.addEventListener(b.toString(),
e,c):a.attachEvent(Aa(b.toString()),e),wa++);a=d}return a}function za(){var a=Ba,b=pa?function(c){return a.call(b.src,b.p,c)}:function(c){c=a.call(b.src,b.p,c);if(!c)return c};return b}
function E(a){if("number"==typeof a||!a||a.s)return!1;var b=a.src;if(b&&b[ra])return b.ga(a);var c=a.type,d=a.a;b.removeEventListener?b.removeEventListener(c,d,a.B):b.detachEvent&&b.detachEvent(Aa(c),d);wa--;if(c=W(b)){var d=a.type,e;if(e=d in c.a){e=c.a[d];var f=ga(e,a),h;(h=0<=f)&&K.splice.call(e,f,1);e=h}e&&(ua(a),0==c.a[d].length&&(delete c.a[d],c.b--));0==c.b&&(c.src=null,b[U]=null)}else ua(a);return!0}function Aa(a){return a in V?V[a]:V[a]="on"+a}
function Ca(a,b,c,d){var e=1;if(a=W(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.B==c&&!f.s&&(e&=!1!==Da(f,d))}return Boolean(e)}function Da(a,b){var c=a.p,d=a.b||a.src;a.A&&E(a);return c.call(d,b)}
function Ba(a,b){if(a.s)return!0;if(!pa){var c;if(!(c=b))a:{c=["window","event"];for(var d=l,e;e=c.shift();)if(null!=d[e])d=d[e];else{c=null;break a}c=d}e=c;c=new T(e,this);d=!0;if(!(0>e.keyCode||void 0!=e.returnValue)){a:{var f=!1;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(h){f=!0}if(f||void 0==e.returnValue)e.returnValue=!0}e=[];for(f=c.a;f;f=f.parentNode)e.push(f);for(var f=a.type,k=e.length-1;0<=k;k--)c.a=e[k],d&=Ca(e[k],f,!0,c);for(k=0;k<e.length;k++)c.a=e[k],d&=Ca(e[k],f,!1,c)}return d}return Da(a,
new T(b,this))}function W(a){a=a[U];return a instanceof va?a:null}var Ea="__closure_events_fn_"+(1E9*Math.random()>>>0);function ya(a){return"function"==m(a)?a:a[Ea]||(a[Ea]=function(b){return a.handleEvent(b)})};function X(a,b){H.call(this,a,b)}r(X,H);g=X.prototype;g.v=null;g.g=function(){X.j.g.call(this);var a=this.e.getView(),b=this.h;b.push(a.on("change:center",this.u,this));b.push(a.on("change:resolution",this.H,this));this.M.push(xa(window,"resize",this.ba,!1,this));this.u();this.H()};g.f=function(){X.j.f.call(this)};g.u=function(){var a=this.e.getView(),b=a.getProjection(),a=a.getCenter();"array"==m(a)&&(a=ol.proj.transform(a,b,"EPSG:4326"),this.a.setCenter(new google.maps.LatLng(a[1],a[0])))};
g.H=function(){var a=this.e.getView().getResolution();if("number"==typeof a){var b;b=null;for(var a=Math.round(1E3*a)/1E3,c=0,d=v.length;c<d;c++)if(a==Math.round(1E3*v[c])/1E3){b=c;break}null!==b&&this.a.setZoom(b)}};g.ba=function(){null===this.v||l.clearTimeout(this.v);this.v=window.setTimeout(n(this.ea,this),100)};g.ea=function(){this.u();this.v=null};function Y(a){a=void 0!==a?a:{};ol.layer.Group.call(this,a);this.a=void 0!==a.mapTypeId?a.mapTypeId:google.maps.MapTypeId.ROADMAP;this.c=a.styles?a.styles:null}r(Y,ol.layer.Group);Y.prototype.b=function(){return this.a};function Z(a,b,c){this.t=[];this.C=[];this.b=[];this.D=[];this.i=new X(a,b);this.N=c;this.K=b.getDiv();this.c=a.getViewport();this.d=a.getTargetElement();H.call(this,a,b);if(this.e.getView().getCenter())this.e.once("postrender",function(){this.G=!0;this.q()},this);else this.e.getView().once("change:center",function(){this.e.once("postrender",function(){this.G=!0;this.q()},this);this.q()},this)}r(Z,H);g=Z.prototype;g.o=!1;g.G=!1;
g.g=function(){Z.j.g.call(this);var a=this.e.getLayers();a.forEach(this.T,this);var b=this.h;b.push(a.on("add",this.Y,this));b.push(a.on("remove",this.Z,this))};g.f=function(){this.e.getLayers().forEach(this.R,this);Z.j.f.call(this)};g.Y=function(a){this.T(a.element)};g.Z=function(a){this.R(a.element)};
g.T=function(a){if(a instanceof Y)this.t.push(a),this.C.push({layer:a,h:[a.on("change:visible",this.q,this)]}),this.q();else if(a instanceof ol.layer.Vector&&this.N){var b=this.e,c=this.a,d=a.getSource();if(d){this.D.push(a);var e=new google.maps.Data({map:c}),f=fa(a);f&&e.setStyle(f);b=new J(b,c,d,e);c=a.getOpacity();e={data:e,r:b,layer:a,h:[],opacity:c};e.h.push(a.on("change:visible",this.aa.bind(this,e),this));this.w(e);this.b.push(e)}}};
g.R=function(a){if(a instanceof Y)a=this.t.indexOf(a),-1!==a&&(this.t.splice(a,1),D(this.C[a].h),this.C.splice(a,1),this.q());else if(a instanceof ol.layer.Vector&&this.N){var b=this.D.indexOf(a);if(-1!==b){this.D.splice(b,1);var c=this.b[b];D(c.h);c.data.setMap(null);c.r.f();a.setOpacity(c.opacity);this.b.splice(b,1)}}};
function Fa(a){var b=a.e.getView().getCenter();!a.o&&a.G&&b&&(a.d.removeChild(a.c),a.d.appendChild(a.K),a.a.controls[google.maps.ControlPosition.TOP_LEFT].push(a.c),a.i.g(),google.maps.event.trigger(a.a,"resize"),a.i.u(),a.i.H(),a.o=!0,a.b.forEach(a.w,a))}
g.q=function(){var a=null;this.e.getLayers().getArray().slice(0).reverse().every(function(b){return b instanceof Y&&b.getVisible()&&-1!==this.t.indexOf(b)?(a=b,!1):!0},this);if(a){this.a.setMapTypeId(a.a);var b=a.c;b?this.a.setOptions({styles:b}):this.a.setOptions({styles:null});Fa(this)}else this.o&&(this.a.controls[google.maps.ControlPosition.TOP_LEFT].removeAt(0),this.d.removeChild(this.K),this.d.appendChild(this.c),this.i.f(),this.c.style.position="relative",this.b.forEach(this.I,this),this.o=
!1)};g.w=function(a){a.layer.getVisible()&&this.o&&(a.r.g(),a.layer.setOpacity(0))};g.I=function(a){a.r.f();a.layer.setOpacity(a.opacity)};g.aa=function(a){a.layer.getVisible()?this.w(a):this.I(a)};function $(a){this.b=[];var b=document.createElement("div");b.style.height="inherit";b.style.width="inherit";b=new google.maps.Map(b,{disableDefaultUI:!0,disableDoubleClickZoom:!0,draggable:!1,keyboardShortcuts:!1,mapTypeId:google.maps.MapTypeId.ROADMAP,scrollwheel:!1,streetViewControl:!1});t.call(this,a.map,b);this.c=new Z(this.e,this.a,void 0!==a.watchVector?a.watchVector:!0);this.b.push(this.c)}r($,t);g=$.prototype;g.l=!1;
g.O=function(){if(!this.l){for(var a=0,b=this.b.length;a<b;a++)this.b[a].g();this.l=!0}};g.P=function(){if(this.l){for(var a=0,b=this.b.length;a<b;a++)this.b[a].f();this.l=!1}};g.ca=function(){return this.l&&this.c.o};g.V=function(){return this.a};g.da=function(){this.l?this.P():this.O()};p("olgm.OLGoogleMaps",$);$.prototype.activate=$.prototype.O;$.prototype.deactivate=$.prototype.P;$.prototype.getGoogleMapsActive=$.prototype.ca;$.prototype.getGoogleMapsMap=$.prototype.V;$.prototype.toggle=$.prototype.da;p("olgm.layer.Google",Y);Y.prototype.getMapTypeId=Y.prototype.b;p("olgm.interaction.defaults",function(a){a=void 0!==a?a:{};a.altShiftDragRotate=!1;a.dragPan=!1;a.pinchRotate=!1;return ol.interaction.defaults(a).extend([new ol.interaction.DragPan])});p("olgm.gm.MapLabel",F);
F.prototype.changed=F.prototype.changed;F.prototype.onAdd=F.prototype.onAdd;F.prototype.draw=F.prototype.draw;F.prototype.onRemove=F.prototype.onRemove;
  return OL3GOOGLEMAPS.olgm;
}));


/*!
 * Bootstrap-select v1.10.0 (http://silviomoreto.github.io/bootstrap-select)
 *
 * Copyright 2013-2016 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){!function(a){"use strict";function b(b){var c=[{re:/[\xC0-\xC6]/g,ch:"A"},{re:/[\xE0-\xE6]/g,ch:"a"},{re:/[\xC8-\xCB]/g,ch:"E"},{re:/[\xE8-\xEB]/g,ch:"e"},{re:/[\xCC-\xCF]/g,ch:"I"},{re:/[\xEC-\xEF]/g,ch:"i"},{re:/[\xD2-\xD6]/g,ch:"O"},{re:/[\xF2-\xF6]/g,ch:"o"},{re:/[\xD9-\xDC]/g,ch:"U"},{re:/[\xF9-\xFC]/g,ch:"u"},{re:/[\xC7-\xE7]/g,ch:"c"},{re:/[\xD1]/g,ch:"N"},{re:/[\xF1]/g,ch:"n"}];return a.each(c,function(){b=b.replace(this.re,this.ch)}),b}function c(a){var b={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},c="(?:"+Object.keys(b).join("|")+")",d=new RegExp(c),e=new RegExp(c,"g"),f=null==a?"":""+a;return d.test(f)?f.replace(e,function(a){return b[a]}):f}function d(b,c){var d=arguments,f=b,g=c;[].shift.apply(d);var h,i=this.each(function(){var b=a(this);if(b.is("select")){var c=b.data("selectpicker"),i="object"==typeof f&&f;if(c){if(i)for(var j in i)i.hasOwnProperty(j)&&(c.options[j]=i[j])}else{var k=a.extend({},e.DEFAULTS,a.fn.selectpicker.defaults||{},b.data(),i);k.template=a.extend({},e.DEFAULTS.template,a.fn.selectpicker.defaults?a.fn.selectpicker.defaults.template:{},b.data().template,i.template),b.data("selectpicker",c=new e(this,k,g))}"string"==typeof f&&(h=c[f]instanceof Function?c[f].apply(c,d):c.options[f])}});return"undefined"!=typeof h?h:i}String.prototype.includes||!function(){var a={}.toString,b=function(){try{var a={},b=Object.defineProperty,c=b(a,a,a)&&b}catch(d){}return c}(),c="".indexOf,d=function(b){if(null==this)throw new TypeError;var d=String(this);if(b&&"[object RegExp]"==a.call(b))throw new TypeError;var e=d.length,f=String(b),g=f.length,h=arguments.length>1?arguments[1]:void 0,i=h?Number(h):0;i!=i&&(i=0);var j=Math.min(Math.max(i,0),e);return g+j>e?!1:-1!=c.call(d,f,i)};b?b(String.prototype,"includes",{value:d,configurable:!0,writable:!0}):String.prototype.includes=d}(),String.prototype.startsWith||!function(){var a=function(){try{var a={},b=Object.defineProperty,c=b(a,a,a)&&b}catch(d){}return c}(),b={}.toString,c=function(a){if(null==this)throw new TypeError;var c=String(this);if(a&&"[object RegExp]"==b.call(a))throw new TypeError;var d=c.length,e=String(a),f=e.length,g=arguments.length>1?arguments[1]:void 0,h=g?Number(g):0;h!=h&&(h=0);var i=Math.min(Math.max(h,0),d);if(f+i>d)return!1;for(var j=-1;++j<f;)if(c.charCodeAt(i+j)!=e.charCodeAt(j))return!1;return!0};a?a(String.prototype,"startsWith",{value:c,configurable:!0,writable:!0}):String.prototype.startsWith=c}(),Object.keys||(Object.keys=function(a,b,c){c=[];for(b in a)c.hasOwnProperty.call(a,b)&&c.push(b);return c}),a.fn.triggerNative=function(a){var b,c=this[0];c.dispatchEvent?("function"==typeof Event?b=new Event(a,{bubbles:!0}):(b=document.createEvent("Event"),b.initEvent(a,!0,!1)),c.dispatchEvent(b)):(c.fireEvent&&(b=document.createEventObject(),b.eventType=a,c.fireEvent("on"+a,b)),this.trigger(a))},a.expr[":"].icontains=function(b,c,d){var e=a(b),f=(e.data("tokens")||e.text()).toUpperCase();return f.includes(d[3].toUpperCase())},a.expr[":"].ibegins=function(b,c,d){var e=a(b),f=(e.data("tokens")||e.text()).toUpperCase();return f.startsWith(d[3].toUpperCase())},a.expr[":"].aicontains=function(b,c,d){var e=a(b),f=(e.data("tokens")||e.data("normalizedText")||e.text()).toUpperCase();return f.includes(d[3].toUpperCase())},a.expr[":"].aibegins=function(b,c,d){var e=a(b),f=(e.data("tokens")||e.data("normalizedText")||e.text()).toUpperCase();return f.startsWith(d[3].toUpperCase())};var e=function(b,c,d){d&&(d.stopPropagation(),d.preventDefault()),this.$element=a(b),this.$newElement=null,this.$button=null,this.$menu=null,this.$lis=null,this.options=c,null===this.options.title&&(this.options.title=this.$element.attr("title")),this.val=e.prototype.val,this.render=e.prototype.render,this.refresh=e.prototype.refresh,this.setStyle=e.prototype.setStyle,this.selectAll=e.prototype.selectAll,this.deselectAll=e.prototype.deselectAll,this.destroy=e.prototype.destroy,this.remove=e.prototype.remove,this.show=e.prototype.show,this.hide=e.prototype.hide,this.init()};e.VERSION="1.10.0",e.DEFAULTS={noneSelectedText:"Nothing selected",noneResultsText:"No results matched {0}",countSelectedText:function(a,b){return 1==a?"{0} item selected":"{0} items selected"},maxOptionsText:function(a,b){return[1==a?"Limit reached ({n} item max)":"Limit reached ({n} items max)",1==b?"Group limit reached ({n} item max)":"Group limit reached ({n} items max)"]},selectAllText:"Select All",deselectAllText:"Deselect All",doneButton:!1,doneButtonText:"Close",multipleSeparator:", ",styleBase:"btn",style:"btn-default",size:"auto",title:null,selectedTextFormat:"values",width:!1,container:!1,hideDisabled:!1,showSubtext:!1,showIcon:!0,showContent:!0,dropupAuto:!0,header:!1,liveSearch:!1,liveSearchPlaceholder:null,liveSearchNormalize:!1,liveSearchStyle:"contains",actionsBox:!1,iconBase:"glyphicon",tickIcon:"glyphicon-ok",showTick:!1,template:{caret:'<span class="caret"></span>'},maxOptions:!1,mobile:!1,selectOnTab:!1,dropdownAlignRight:!1},e.prototype={constructor:e,init:function(){var b=this,c=this.$element.attr("id");this.$element.addClass("bs-select-hidden"),this.liObj={},this.multiple=this.$element.prop("multiple"),this.autofocus=this.$element.prop("autofocus"),this.$newElement=this.createView(),this.$element.after(this.$newElement).appendTo(this.$newElement),this.$button=this.$newElement.children("button"),this.$menu=this.$newElement.children(".dropdown-menu"),this.$menuInner=this.$menu.children(".inner"),this.$searchbox=this.$menu.find("input"),this.$element.removeClass("bs-select-hidden"),this.options.dropdownAlignRight&&this.$menu.addClass("dropdown-menu-right"),"undefined"!=typeof c&&(this.$button.attr("data-id",c),a('label[for="'+c+'"]').click(function(a){a.preventDefault(),b.$button.focus()})),this.checkDisabled(),this.clickListener(),this.options.liveSearch&&this.liveSearchListener(),this.render(),this.setStyle(),this.setWidth(),this.options.container&&this.selectPosition(),this.$menu.data("this",this),this.$newElement.data("this",this),this.options.mobile&&this.mobile(),this.$newElement.on({"hide.bs.dropdown":function(a){b.$element.trigger("hide.bs.select",a)},"hidden.bs.dropdown":function(a){b.$element.trigger("hidden.bs.select",a)},"show.bs.dropdown":function(a){b.$element.trigger("show.bs.select",a)},"shown.bs.dropdown":function(a){b.$element.trigger("shown.bs.select",a)}}),b.$element[0].hasAttribute("required")&&this.$element.on("invalid",function(){b.$button.addClass("bs-invalid").focus(),b.$element.on({"focus.bs.select":function(){b.$button.focus(),b.$element.off("focus.bs.select")},"shown.bs.select":function(){b.$element.val(b.$element.val()).off("shown.bs.select")},"rendered.bs.select":function(){this.validity.valid&&b.$button.removeClass("bs-invalid"),b.$element.off("rendered.bs.select")}})}),setTimeout(function(){b.$element.trigger("loaded.bs.select")})},createDropdown:function(){var b=this.multiple||this.options.showTick?" show-tick":"",d=this.$element.parent().hasClass("input-group")?" input-group-btn":"",e=this.autofocus?" autofocus":"",f=this.options.header?'<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>'+this.options.header+"</div>":"",g=this.options.liveSearch?'<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"'+(null===this.options.liveSearchPlaceholder?"":' placeholder="'+c(this.options.liveSearchPlaceholder)+'"')+"></div>":"",h=this.multiple&&this.options.actionsBox?'<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">'+this.options.selectAllText+'</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">'+this.options.deselectAllText+"</button></div></div>":"",i=this.multiple&&this.options.doneButton?'<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">'+this.options.doneButtonText+"</button></div></div>":"",j='<div class="btn-group bootstrap-select'+b+d+'"><button type="button" class="'+this.options.styleBase+' dropdown-toggle" data-toggle="dropdown"'+e+'><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">'+this.options.template.caret+'</span></button><div class="dropdown-menu open">'+f+g+h+'<ul class="dropdown-menu inner" role="menu"></ul>'+i+"</div></div>";return a(j)},createView:function(){var a=this.createDropdown(),b=this.createLi();return a.find("ul")[0].innerHTML=b,a},reloadLi:function(){this.destroyLi();var a=this.createLi();this.$menuInner[0].innerHTML=a},destroyLi:function(){this.$menu.find("li").remove()},createLi:function(){var d=this,e=[],f=0,g=document.createElement("option"),h=-1,i=function(a,b,c,d){return"<li"+("undefined"!=typeof c&""!==c?' class="'+c+'"':"")+("undefined"!=typeof b&null!==b?' data-original-index="'+b+'"':"")+("undefined"!=typeof d&null!==d?'data-optgroup="'+d+'"':"")+">"+a+"</li>"},j=function(a,e,f,g){return'<a tabindex="0"'+("undefined"!=typeof e?' class="'+e+'"':"")+("undefined"!=typeof f?' style="'+f+'"':"")+(d.options.liveSearchNormalize?' data-normalized-text="'+b(c(a))+'"':"")+("undefined"!=typeof g||null!==g?' data-tokens="'+g+'"':"")+">"+a+'<span class="'+d.options.iconBase+" "+d.options.tickIcon+' check-mark"></span></a>'};if(this.options.title&&!this.multiple&&(h--,!this.$element.find(".bs-title-option").length)){var k=this.$element[0];g.className="bs-title-option",g.appendChild(document.createTextNode(this.options.title)),g.value="",k.insertBefore(g,k.firstChild),void 0===a(k.options[k.selectedIndex]).attr("selected")&&(g.selected=!0)}return this.$element.find("option").each(function(b){var c=a(this);if(h++,!c.hasClass("bs-title-option")){var g=this.className||"",k=this.style.cssText,l=c.data("content")?c.data("content"):c.html(),m=c.data("tokens")?c.data("tokens"):null,n="undefined"!=typeof c.data("subtext")?'<small class="text-muted">'+c.data("subtext")+"</small>":"",o="undefined"!=typeof c.data("icon")?'<span class="'+d.options.iconBase+" "+c.data("icon")+'"></span> ':"",p="OPTGROUP"===this.parentNode.tagName,q=this.disabled||p&&this.parentNode.disabled;if(""!==o&&q&&(o="<span>"+o+"</span>"),d.options.hideDisabled&&q&&!p)return void h--;if(c.data("content")||(l=o+'<span class="text">'+l+n+"</span>"),p&&c.data("divider")!==!0){var r=" "+this.parentNode.className||"";if(0===c.index()){f+=1;var s=this.parentNode.label,t="undefined"!=typeof c.parent().data("subtext")?'<small class="text-muted">'+c.parent().data("subtext")+"</small>":"",u=c.parent().data("icon")?'<span class="'+d.options.iconBase+" "+c.parent().data("icon")+'"></span> ':"";s=u+'<span class="text">'+s+t+"</span>",0!==b&&e.length>0&&(h++,e.push(i("",null,"divider",f+"div"))),h++,e.push(i(s,null,"dropdown-header"+r,f))}if(d.options.hideDisabled&&q)return void h--;e.push(i(j(l,"opt "+g+r,k,m),b,"",f))}else c.data("divider")===!0?e.push(i("",b,"divider")):c.data("hidden")===!0?e.push(i(j(l,g,k,m),b,"hidden is-hidden")):(this.previousElementSibling&&"OPTGROUP"===this.previousElementSibling.tagName&&(h++,e.push(i("",null,"divider",f+"div"))),e.push(i(j(l,g,k,m),b)));d.liObj[b]=h}}),this.multiple||0!==this.$element.find("option:selected").length||this.options.title||this.$element.find("option").eq(0).prop("selected",!0).attr("selected","selected"),e.join("")},findLis:function(){return null==this.$lis&&(this.$lis=this.$menu.find("li")),this.$lis},render:function(b){var c,d=this;b!==!1&&this.$element.find("option").each(function(a){var b=d.findLis().eq(d.liObj[a]);d.setDisabled(a,this.disabled||"OPTGROUP"===this.parentNode.tagName&&this.parentNode.disabled,b),d.setSelected(a,this.selected,b)}),this.tabIndex();var e=this.$element.find("option").map(function(){if(this.selected){if(d.options.hideDisabled&&(this.disabled||"OPTGROUP"===this.parentNode.tagName&&this.parentNode.disabled))return;var b,c=a(this),e=c.data("icon")&&d.options.showIcon?'<i class="'+d.options.iconBase+" "+c.data("icon")+'"></i> ':"";return b=d.options.showSubtext&&c.data("subtext")&&!d.multiple?' <small class="text-muted">'+c.data("subtext")+"</small>":"","undefined"!=typeof c.attr("title")?c.attr("title"):c.data("content")&&d.options.showContent?c.data("content"):e+c.html()+b}}).toArray(),f=this.multiple?e.join(this.options.multipleSeparator):e[0];if(this.multiple&&this.options.selectedTextFormat.indexOf("count")>-1){var g=this.options.selectedTextFormat.split(">");if(g.length>1&&e.length>g[1]||1==g.length&&e.length>=2){c=this.options.hideDisabled?", [disabled]":"";var h=this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]'+c).length,i="function"==typeof this.options.countSelectedText?this.options.countSelectedText(e.length,h):this.options.countSelectedText;f=i.replace("{0}",e.length.toString()).replace("{1}",h.toString())}}void 0==this.options.title&&(this.options.title=this.$element.attr("title")),"static"==this.options.selectedTextFormat&&(f=this.options.title),f||(f="undefined"!=typeof this.options.title?this.options.title:this.options.noneSelectedText),this.$button.attr("title",a.trim(f.replace(/<[^>]*>?/g,""))),this.$button.children(".filter-option").html(f),this.$element.trigger("rendered.bs.select")},setStyle:function(a,b){this.$element.attr("class")&&this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi,""));var c=a?a:this.options.style;"add"==b?this.$button.addClass(c):"remove"==b?this.$button.removeClass(c):(this.$button.removeClass(this.options.style),this.$button.addClass(c))},liHeight:function(b){if(b||this.options.size!==!1&&!this.sizeInfo){var c=document.createElement("div"),d=document.createElement("div"),e=document.createElement("ul"),f=document.createElement("li"),g=document.createElement("li"),h=document.createElement("a"),i=document.createElement("span"),j=this.options.header&&this.$menu.find(".popover-title").length>0?this.$menu.find(".popover-title")[0].cloneNode(!0):null,k=this.options.liveSearch?document.createElement("div"):null,l=this.options.actionsBox&&this.multiple&&this.$menu.find(".bs-actionsbox").length>0?this.$menu.find(".bs-actionsbox")[0].cloneNode(!0):null,m=this.options.doneButton&&this.multiple&&this.$menu.find(".bs-donebutton").length>0?this.$menu.find(".bs-donebutton")[0].cloneNode(!0):null;if(i.className="text",c.className=this.$menu[0].parentNode.className+" open",d.className="dropdown-menu open",e.className="dropdown-menu inner",f.className="divider",i.appendChild(document.createTextNode("Inner text")),h.appendChild(i),g.appendChild(h),e.appendChild(g),e.appendChild(f),j&&d.appendChild(j),k){var n=document.createElement("span");k.className="bs-searchbox",n.className="form-control",k.appendChild(n),d.appendChild(k)}l&&d.appendChild(l),d.appendChild(e),m&&d.appendChild(m),c.appendChild(d),document.body.appendChild(c);var o=h.offsetHeight,p=j?j.offsetHeight:0,q=k?k.offsetHeight:0,r=l?l.offsetHeight:0,s=m?m.offsetHeight:0,t=a(f).outerHeight(!0),u="function"==typeof getComputedStyle?getComputedStyle(d):!1,v=u?null:a(d),w=parseInt(u?u.paddingTop:v.css("paddingTop"))+parseInt(u?u.paddingBottom:v.css("paddingBottom"))+parseInt(u?u.borderTopWidth:v.css("borderTopWidth"))+parseInt(u?u.borderBottomWidth:v.css("borderBottomWidth")),x=w+parseInt(u?u.marginTop:v.css("marginTop"))+parseInt(u?u.marginBottom:v.css("marginBottom"))+2;document.body.removeChild(c),this.sizeInfo={liHeight:o,headerHeight:p,searchHeight:q,actionsHeight:r,doneButtonHeight:s,dividerHeight:t,menuPadding:w,menuExtras:x}}},setSize:function(){if(this.findLis(),this.liHeight(),this.options.header&&this.$menu.css("padding-top",0),this.options.size!==!1){var b,c,d,e,f=this,g=this.$menu,h=this.$menuInner,i=a(window),j=this.$newElement[0].offsetHeight,k=this.sizeInfo.liHeight,l=this.sizeInfo.headerHeight,m=this.sizeInfo.searchHeight,n=this.sizeInfo.actionsHeight,o=this.sizeInfo.doneButtonHeight,p=this.sizeInfo.dividerHeight,q=this.sizeInfo.menuPadding,r=this.sizeInfo.menuExtras,s=this.options.hideDisabled?".disabled":"",t=function(){d=f.$newElement.offset().top-i.scrollTop(),e=i.height()-d-j};if(t(),"auto"===this.options.size){var u=function(){var i,j=function(b,c){return function(d){return c?d.classList?d.classList.contains(b):a(d).hasClass(b):!(d.classList?d.classList.contains(b):a(d).hasClass(b))}},p=f.$menuInner[0].getElementsByTagName("li"),s=Array.prototype.filter?Array.prototype.filter.call(p,j("hidden",!1)):f.$lis.not(".hidden"),u=Array.prototype.filter?Array.prototype.filter.call(s,j("dropdown-header",!0)):s.filter(".dropdown-header");t(),b=e-r,f.options.container?(g.data("height")||g.data("height",g.height()),c=g.data("height")):c=g.height(),f.options.dropupAuto&&f.$newElement.toggleClass("dropup",d>e&&c>b-r),f.$newElement.hasClass("dropup")&&(b=d-r),i=s.length+u.length>3?3*k+r-2:0,g.css({"max-height":b+"px",overflow:"hidden","min-height":i+l+m+n+o+"px"}),h.css({"max-height":b-l-m-n-o-q+"px","overflow-y":"auto","min-height":Math.max(i-q,0)+"px"})};u(),this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize",u),i.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize",u)}else if(this.options.size&&"auto"!=this.options.size&&this.$lis.not(s).length>this.options.size){var v=this.$lis.not(".divider").not(s).children().slice(0,this.options.size).last().parent().index(),w=this.$lis.slice(0,v+1).filter(".divider").length;b=k*this.options.size+w*p+q,f.options.container?(g.data("height")||g.data("height",g.height()),c=g.data("height")):c=g.height(),f.options.dropupAuto&&this.$newElement.toggleClass("dropup",d>e&&c>b-r),g.css({"max-height":b+l+m+n+o+"px",overflow:"hidden","min-height":""}),h.css({"max-height":b-q+"px","overflow-y":"auto","min-height":""})}}},setWidth:function(){if("auto"===this.options.width){this.$menu.css("min-width","0");var a=this.$menu.parent().clone().appendTo("body"),b=this.options.container?this.$newElement.clone().appendTo("body"):a,c=a.children(".dropdown-menu").outerWidth(),d=b.css("width","auto").children("button").outerWidth();a.remove(),b.remove(),this.$newElement.css("width",Math.max(c,d)+"px")}else"fit"===this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width","").addClass("fit-width")):this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width",this.options.width)):(this.$menu.css("min-width",""),this.$newElement.css("width",""));this.$newElement.hasClass("fit-width")&&"fit"!==this.options.width&&this.$newElement.removeClass("fit-width")},selectPosition:function(){this.$bsContainer=a('<div class="bs-container" />');var b,c,d=this,e=function(a){d.$bsContainer.addClass(a.attr("class").replace(/form-control|fit-width/gi,"")).toggleClass("dropup",a.hasClass("dropup")),b=a.offset(),c=a.hasClass("dropup")?0:a[0].offsetHeight,d.$bsContainer.css({top:b.top+c,left:b.left,width:a[0].offsetWidth})};this.$button.on("click",function(){var b=a(this);d.isDisabled()||(e(d.$newElement),d.$bsContainer.appendTo(d.options.container).toggleClass("open",!b.hasClass("open")).append(d.$menu))}),a(window).on("resize scroll",function(){e(d.$newElement)}),this.$element.on("hide.bs.select",function(){d.$menu.data("height",d.$menu.height()),d.$bsContainer.detach()})},setSelected:function(a,b,c){c||(c=this.findLis().eq(this.liObj[a])),c.toggleClass("selected",b)},setDisabled:function(a,b,c){c||(c=this.findLis().eq(this.liObj[a])),b?c.addClass("disabled").children("a").attr("href","#").attr("tabindex",-1):c.removeClass("disabled").children("a").removeAttr("href").attr("tabindex",0)},isDisabled:function(){return this.$element[0].disabled},checkDisabled:function(){var a=this;this.isDisabled()?(this.$newElement.addClass("disabled"),this.$button.addClass("disabled").attr("tabindex",-1)):(this.$button.hasClass("disabled")&&(this.$newElement.removeClass("disabled"),this.$button.removeClass("disabled")),-1!=this.$button.attr("tabindex")||this.$element.data("tabindex")||this.$button.removeAttr("tabindex")),this.$button.click(function(){return!a.isDisabled()})},tabIndex:function(){this.$element.data("tabindex")!==this.$element.attr("tabindex")&&-98!==this.$element.attr("tabindex")&&"-98"!==this.$element.attr("tabindex")&&(this.$element.data("tabindex",this.$element.attr("tabindex")),this.$button.attr("tabindex",this.$element.data("tabindex"))),this.$element.attr("tabindex",-98)},clickListener:function(){var b=this,c=a(document);this.$newElement.on("touchstart.dropdown",".dropdown-menu",function(a){a.stopPropagation()}),c.data("spaceSelect",!1),this.$button.on("keyup",function(a){/(32)/.test(a.keyCode.toString(10))&&c.data("spaceSelect")&&(a.preventDefault(),c.data("spaceSelect",!1))}),this.$button.on("click",function(){b.setSize()}),this.$element.on("shown.bs.select",function(){if(b.options.liveSearch||b.multiple){if(!b.multiple){var a=b.liObj[b.$element[0].selectedIndex];if("number"!=typeof a||b.options.size===!1)return;var c=b.$lis.eq(a)[0].offsetTop-b.$menuInner[0].offsetTop;c=c-b.$menuInner[0].offsetHeight/2+b.sizeInfo.liHeight/2,b.$menuInner[0].scrollTop=c}}else b.$menuInner.find(".selected a").focus()}),this.$menuInner.on("click","li a",function(c){var d=a(this),e=d.parent().data("originalIndex"),f=b.$element.val(),g=b.$element.prop("selectedIndex");if(b.multiple&&c.stopPropagation(),c.preventDefault(),!b.isDisabled()&&!d.parent().hasClass("disabled")){var h=b.$element.find("option"),i=h.eq(e),j=i.prop("selected"),k=i.parent("optgroup"),l=b.options.maxOptions,m=k.data("maxOptions")||!1;if(b.multiple){if(i.prop("selected",!j),b.setSelected(e,!j),d.blur(),l!==!1||m!==!1){var n=l<h.filter(":selected").length,o=m<k.find("option:selected").length;if(l&&n||m&&o)if(l&&1==l)h.prop("selected",!1),i.prop("selected",!0),b.$menuInner.find(".selected").removeClass("selected"),b.setSelected(e,!0);else if(m&&1==m){k.find("option:selected").prop("selected",!1),i.prop("selected",!0);var p=d.parent().data("optgroup");b.$menuInner.find('[data-optgroup="'+p+'"]').removeClass("selected"),b.setSelected(e,!0)}else{var q="function"==typeof b.options.maxOptionsText?b.options.maxOptionsText(l,m):b.options.maxOptionsText,r=q[0].replace("{n}",l),s=q[1].replace("{n}",m),t=a('<div class="notify"></div>');q[2]&&(r=r.replace("{var}",q[2][l>1?0:1]),s=s.replace("{var}",q[2][m>1?0:1])),i.prop("selected",!1),b.$menu.append(t),l&&n&&(t.append(a("<div>"+r+"</div>")),b.$element.trigger("maxReached.bs.select")),m&&o&&(t.append(a("<div>"+s+"</div>")),b.$element.trigger("maxReachedGrp.bs.select")),setTimeout(function(){b.setSelected(e,!1)},10),t.delay(750).fadeOut(300,function(){a(this).remove()})}}}else h.prop("selected",!1),i.prop("selected",!0),b.$menuInner.find(".selected").removeClass("selected"),b.setSelected(e,!0);b.multiple?b.options.liveSearch&&b.$searchbox.focus():b.$button.focus(),(f!=b.$element.val()&&b.multiple||g!=b.$element.prop("selectedIndex")&&!b.multiple)&&b.$element.trigger("changed.bs.select",[e,i.prop("selected"),j]).triggerNative("change")}}),this.$menu.on("click","li.disabled a, .popover-title, .popover-title :not(.close)",function(c){c.currentTarget==this&&(c.preventDefault(),c.stopPropagation(),b.options.liveSearch&&!a(c.target).hasClass("close")?b.$searchbox.focus():b.$button.focus())}),this.$menuInner.on("click",".divider, .dropdown-header",function(a){a.preventDefault(),a.stopPropagation(),b.options.liveSearch?b.$searchbox.focus():b.$button.focus()}),this.$menu.on("click",".popover-title .close",function(){b.$button.click()}),this.$searchbox.on("click",function(a){a.stopPropagation()}),this.$menu.on("click",".actions-btn",function(c){b.options.liveSearch?b.$searchbox.focus():b.$button.focus(),c.preventDefault(),c.stopPropagation(),a(this).hasClass("bs-select-all")?b.selectAll():b.deselectAll()}),this.$element.change(function(){b.render(!1)})},liveSearchListener:function(){var d=this,e=a('<li class="no-results"></li>');this.$button.on("click.dropdown.data-api touchstart.dropdown.data-api",function(){d.$menuInner.find(".active").removeClass("active"),d.$searchbox.val()&&(d.$searchbox.val(""),d.$lis.not(".is-hidden").removeClass("hidden"),e.parent().length&&e.remove()),d.multiple||d.$menuInner.find(".selected").addClass("active"),setTimeout(function(){d.$searchbox.focus()},10)}),this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api",function(a){a.stopPropagation()}),this.$searchbox.on("input propertychange",function(){if(d.$searchbox.val()){var f=d.$lis.not(".is-hidden").removeClass("hidden").children("a");f=d.options.liveSearchNormalize?f.not(":a"+d._searchStyle()+'("'+b(d.$searchbox.val())+'")'):f.not(":"+d._searchStyle()+'("'+d.$searchbox.val()+'")'),f.parent().addClass("hidden"),d.$lis.filter(".dropdown-header").each(function(){var b=a(this),c=b.data("optgroup");0===d.$lis.filter("[data-optgroup="+c+"]").not(b).not(".hidden").length&&(b.addClass("hidden"),d.$lis.filter("[data-optgroup="+c+"div]").addClass("hidden"))});var g=d.$lis.not(".hidden");g.each(function(b){var c=a(this);c.hasClass("divider")&&(c.index()===g.first().index()||c.index()===g.last().index()||g.eq(b+1).hasClass("divider"))&&c.addClass("hidden")}),d.$lis.not(".hidden, .no-results").length?e.parent().length&&e.remove():(e.parent().length&&e.remove(),e.html(d.options.noneResultsText.replace("{0}",'"'+c(d.$searchbox.val())+'"')).show(),d.$menuInner.append(e))}else d.$lis.not(".is-hidden").removeClass("hidden"),e.parent().length&&e.remove();d.$lis.filter(".active").removeClass("active"),d.$searchbox.val()&&d.$lis.not(".hidden, .divider, .dropdown-header").eq(0).addClass("active").children("a").focus(),a(this).focus()})},_searchStyle:function(){var a={begins:"ibegins",startsWith:"ibegins"};return a[this.options.liveSearchStyle]||"icontains"},val:function(a){return"undefined"!=typeof a?(this.$element.val(a),this.render(),this.$element):this.$element.val()},changeAll:function(b){"undefined"==typeof b&&(b=!0),this.findLis();for(var c=this.$element.find("option"),d=this.$lis.not(".divider, .dropdown-header, .disabled, .hidden").toggleClass("selected",b),e=d.length,f=[],g=0;e>g;g++){var h=d[g].getAttribute("data-original-index");f[f.length]=c.eq(h)[0]}a(f).prop("selected",b),this.render(!1),this.$element.trigger("changed.bs.select").triggerNative("change")},selectAll:function(){return this.changeAll(!0)},deselectAll:function(){return this.changeAll(!1)},toggle:function(a){a=a||window.event,a&&a.stopPropagation(),this.$button.trigger("click")},keydown:function(c){var d,e,f,g,h,i,j,k,l,m=a(this),n=m.is("input")?m.parent().parent():m.parent(),o=n.data("this"),p=":not(.disabled, .hidden, .dropdown-header, .divider)",q={32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"};if(o.options.liveSearch&&(n=m.parent().parent()),o.options.container&&(n=o.$menu),d=a("[role=menu] li",n),l=o.$newElement.hasClass("open"),!l&&(c.keyCode>=48&&c.keyCode<=57||c.keyCode>=96&&c.keyCode<=105||c.keyCode>=65&&c.keyCode<=90)&&(o.options.container?o.$button.trigger("click"):(o.setSize(),o.$menu.parent().addClass("open"),l=!0),o.$searchbox.focus()),o.options.liveSearch&&(/(^9$|27)/.test(c.keyCode.toString(10))&&l&&0===o.$menu.find(".active").length&&(c.preventDefault(),o.$menu.parent().removeClass("open"),o.options.container&&o.$newElement.removeClass("open"),o.$button.focus()),d=a("[role=menu] li"+p,n),m.val()||/(38|40)/.test(c.keyCode.toString(10))||0===d.filter(".active").length&&(d=o.$menuInner.find("li"),d=o.options.liveSearchNormalize?d.filter(":a"+o._searchStyle()+"("+b(q[c.keyCode])+")"):d.filter(":"+o._searchStyle()+"("+q[c.keyCode]+")"))),d.length){if(/(38|40)/.test(c.keyCode.toString(10)))e=d.index(d.find("a").filter(":focus").parent()),g=d.filter(p).first().index(),h=d.filter(p).last().index(),f=d.eq(e).nextAll(p).eq(0).index(),i=d.eq(e).prevAll(p).eq(0).index(),j=d.eq(f).prevAll(p).eq(0).index(),o.options.liveSearch&&(d.each(function(b){a(this).hasClass("disabled")||a(this).data("index",b)}),e=d.index(d.filter(".active")),g=d.first().data("index"),h=d.last().data("index"),f=d.eq(e).nextAll().eq(0).data("index"),i=d.eq(e).prevAll().eq(0).data("index"),j=d.eq(f).prevAll().eq(0).data("index")),k=m.data("prevIndex"),38==c.keyCode?(o.options.liveSearch&&e--,e!=j&&e>i&&(e=i),g>e&&(e=g),e==k&&(e=h)):40==c.keyCode&&(o.options.liveSearch&&e++,-1==e&&(e=0),e!=j&&f>e&&(e=f),e>h&&(e=h),e==k&&(e=g)),m.data("prevIndex",e),o.options.liveSearch?(c.preventDefault(),m.hasClass("dropdown-toggle")||(d.removeClass("active").eq(e).addClass("active").children("a").focus(),m.focus())):d.eq(e).children("a").focus();else if(!m.is("input")){var r,s,t=[];d.each(function(){a(this).hasClass("disabled")||a.trim(a(this).children("a").text().toLowerCase()).substring(0,1)==q[c.keyCode]&&t.push(a(this).index())}),r=a(document).data("keycount"),r++,a(document).data("keycount",r),s=a.trim(a(":focus").text().toLowerCase()).substring(0,1),s!=q[c.keyCode]?(r=1,a(document).data("keycount",r)):r>=t.length&&(a(document).data("keycount",0),r>t.length&&(r=1)),d.eq(t[r-1]).children("a").focus()}if((/(13|32)/.test(c.keyCode.toString(10))||/(^9$)/.test(c.keyCode.toString(10))&&o.options.selectOnTab)&&l){if(/(32)/.test(c.keyCode.toString(10))||c.preventDefault(),o.options.liveSearch)/(32)/.test(c.keyCode.toString(10))||(o.$menuInner.find(".active a").click(),m.focus());else{var u=a(":focus");u.click(),u.focus(),c.preventDefault(),a(document).data("spaceSelect",!0)}a(document).data("keycount",0)}(/(^9$|27)/.test(c.keyCode.toString(10))&&l&&(o.multiple||o.options.liveSearch)||/(27)/.test(c.keyCode.toString(10))&&!l)&&(o.$menu.parent().removeClass("open"),o.options.container&&o.$newElement.removeClass("open"),o.$button.focus())}},mobile:function(){this.$element.addClass("mobile-device")},refresh:function(){this.$lis=null,this.liObj={},this.reloadLi(),this.render(),this.checkDisabled(),this.liHeight(!0),this.setStyle(),this.setWidth(),this.$lis&&this.$searchbox.trigger("propertychange"),this.$element.trigger("refreshed.bs.select")},hide:function(){this.$newElement.hide()},show:function(){this.$newElement.show()},remove:function(){this.$newElement.remove(),this.$element.remove()},destroy:function(){this.$newElement.before(this.$element).remove(),this.$bsContainer?this.$bsContainer.remove():this.$menu.remove(),this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker")}};var f=a.fn.selectpicker;a.fn.selectpicker=d,a.fn.selectpicker.Constructor=e,a.fn.selectpicker.noConflict=function(){return a.fn.selectpicker=f,this},a(document).data("keycount",0).on("keydown.bs.select",'.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input',e.prototype.keydown).on("focusin.modal",'.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input',function(a){a.stopPropagation()}),a(window).on("load.bs.select.data-api",function(){a(".selectpicker").each(function(){var b=a(this);d.call(b,b.data())})})}(a)});
//# sourceMappingURL=bootstrap-select.js.map
var map;

var osmLayer;
var googleLayer;
var art = ['wms1', 'wms2', 'wms3', 'wms4', 'wms5', 'wms6', 'wms7', 'wms8', 'wms9', 'wms10', 'wms11', 'wms12', 'wms13', 'wms14', 'wms15', 'wms16', 'wms17', 'wms19', 'wms20', 'wms21', 'wms22','wms23'];


function showUP(layer, elem) {


    map.getLayers().forEach(function (l, i) {
        if (($.inArray(l.get('name'), art)) > -1) {
            if (l.get('name') === layer) {
                l.setVisible(true);
                // addclass(.on_layer)
                $(elem).addClass('on_layer');
            }
        }
    });
}
function showDOWN(layer) {


    map.getLayers().forEach(function (l, i) {
        if (($.inArray(l.get('name'), art)) > -1) {
            if (l.get('name') === layer) {
                l.setVisible(false);
            }
        }
    });
}

function toggleOL(layer, elem) {

    map.getLayers().forEach(function (l, i) {
        if (($.inArray(l.get('name'), art)) > -1) {
            if (l.get('name') === layer) {
                if (l.getVisible() == true) {
                    l.setVisible(false);
                    // delclass(.on_layer)
                    $(elem).removeClass('on_layer');
                } else {
                    l.setVisible(true);
                }
            }
        }
    });
}

function toggleChevron(e) {
    $(e.target)
        .prev('.panel-heading')
        .find("i.indicator")
        .toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
}

function toggleUP(e) {
    //   var id = $('#accordion .in').parent().attr("id");
    var trg = $(e.target)
        .prev('.panel-heading');
    trg.find("a")
        .addClass('active');
    trg.find("i.indicator")
        .addClass('active');
//    swtch($(e.target).attr('id'));
}

function toggleDOWN(e) {
    var trg = $(e.target)
        .prev('.panel-heading');
    trg.find("a")
        .removeClass('active');
    trg.find("i.indicator")
        .removeClass('active');
}

function layersOff(map){
    $('.mdl-navigation__level2 > .mdl-navigation__link').click(function () {
        if($(this).hasClass('active')){
            $(this).parent('.mdl-navigation__level2').prev().find('.layersOff').show();
            $('.layersOff input[type="checkbox"]').prop('checked',true);

        }else{
            var isActive = false;
            $(this).parent('.mdl-navigation__level2').find('a.mdl-navigation__link').each(function(){
               if($(this).hasClass('active')){
                   isActive = true;
                   return false;
               }
            });

            if(isActive == false){
                $(this).parent('.mdl-navigation__level2').prev().find('.layersOff').hide();
                $('.layersOff input[type="checkbox"]').prop('checked', false);
            }else{
                $('.layersOff input[type="checkbox"]').prop('checked', true);
            }
        }
    });

    $('.mdl-navigation__level1').prepend('<label data-toggle="tooltip" data-placement="bottom" title="Виключити шари"><div class="layersOff"><input id="check" type="checkbox" class=""  value=""><label for="check"></label></div></label>');

    $('.layersOff').on('mousedown',function (event) {
        var layersName = [];
        $(this).parents('.mdl-navigation__level1').next().find('a.mdl-navigation__link').each(function(){
            //console.log(this);
            $(this).next('form').slideUp(500);
            $(this).removeClass('active');
            $(this).find('.arrow_box').removeClass('active').hide();
            $('#legend').hide();
            layersName.push($(this).attr('href').substring(1));
        });

        $('input[name=legend-radio]').prop('checked', false);

        if( $(this).parents('.mdl-navigation__level1').next('.mdl-navigation__level2').css('display') == 'none'){
            $(this).parents('.mdl-navigation__level1').removeClass('active');
        }

        if(layersName.length > 0){
            map.getLayers().forEach(function(layer) {
                if(layer.get('name') != undefined){
                    if((layersName.indexOf(layer.get('name'))) != -1 ){
                        layer.setVisible(false);
                    }
                }
            });
        }

        $(this).prop('checked', false).hide();
        event.stopPropagation();
    });

}



function addLegend(map) {
    var urlGeoServer = '/geoserver';
    var layerOn = '';
    var url = '';

    $('.mdl-navigation__level2 > .mdl-navigation__link').prepend(' <div class="arrow_box" ></div>');
    $('.mdl-navigation__level2 > .mdl-navigation__link').prepend('<input name="legend-radio"  class="legend-radio" data-toggle="tooltip" data-placement="bottom" title="Показати легенду"  type="radio">');
    $('.legend-radio').hide();
    $('.arrow_box').hide();
    $('.mdl-navigation__level2 > .mdl-navigation__link').click(function () {
        if ($(this).hasClass('active')) {
            $(this).find('.legend-radio').show();
            $(this).find('.arrow_box').show();
            $(this).addClass('active').show();
        } else {
            $(this).find('.legend-radio').hide();
            $(this).find('.arrow_box').hide();
        }

    });
    var ifChange = false;
    $('input[name=legend-radio]').mouseup(function (event) {
        if ($(this).prop('checked')) {
            $(this).removeAttr('checked');
            $(this).next().removeClass('active');
            $(this).prop('checked', false)
            ifChange = false;
        } else {
            $(this).next().addClass('active');
            ifChange = true;

        }
    });

    $('input[name=legend-radio]').click(function (event) {
        event.stopPropagation();
    });
    $('input[name=legend-radio]').change(function (event) {

        if (ifChange == false) {
            $('.legend').hide();
            $(this).removeAttr("checked");
            $(this).next().removeClass('active');
        } else {
            $('.arrow_box').removeClass('active');
            $(this).next().addClass('active');
            $('.legend').show();
            layerName = $('input[name=legend-radio]:checked').parent().attr('href');
            layerName = layerName.substring(1);
            map.getLayers().forEach(function (layer) {
                if (layer.get('name') == layerName) {
                    layerOn = layer.getSource().getParams().LAYERS;
                }
            });
            var layerName = $(this).parent().text();
            var reg = /[a-zA-Z0-9._]/gi;
            layerName = layerName.replace(reg, '');
            layerName = layerName.trim();
            url = urlGeoServer + '/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=50&HEIGHT=30&LAYER=' + layerOn;
            $('.legend').html('Умовні знаки (' + layerName + ')<br><img  src="' + url + '">')
        }
    });

}
function checkIp() {
    var idTicketit = $('#id_ticketit').val();
    var checkIp;
    $.ajax({
        url: '/checkIp',
        type: 'POST',
        async: false,
        dataType: "json",
        data: {
            'idTicketit': idTicketit
        },
        success: function (data) {
            checkIp = data.ifIp;
        }
    });
    return checkIp;
}

function votingResult() {
    var voiceResult;
    var idTicketit = $('#id_ticketit').val();
    $.ajax({
        url: '/votingResult',
        type: 'POST',
        async: false,
        dataType: "json",
        data: {
            'idTicketit': idTicketit
        },
        success: function (data) {
            voiceResult = "<h5 style='font-weight: 600'>Результати опитування:</h5>"
            voiceResult += "<h5>Підтримали:<b style='color: green'>" + data.true + "</b></h5>"
            voiceResult += "<h5>Не підтримали:<b style='color: red'>" + data.false + "</b></h5>"
        }

    });
    return voiceResult;
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

$(function () {
    "use strict";
//    $('.carousel').carousel();
    setTimeout(function () {

//        $('.ol-zoom').css({
//        //        position:'absolute',
//        //        left: ($(document).width() - $('.ol-zoom').outerWidth())/2,
//                top: '300 px;'
//        });       

        var windowHeight;
        var windowWidth;
        var contentHeight;
        var contentWidth;
        var isDevice = true;

        // calculations for elements that changes size on window resize
        var windowResizeHandler = function () {
            windowHeight = $(window).height();
            windowWidth = $(window).width();
            contentHeight = windowHeight - $('header').height();
            //contentWidth = windowWidth - $('.demo-drawer').width();
            //$('#leftSide').height(windowHeight);
            //$('#rightSide').height(windowHeight);
            //$('.closeLeftSide').height(contentHeight);
            $('#wrapper').height(contentHeight);

            $('#mapView').height(contentHeight);
            $('#wrapper').width(windowWidth);
            $('#content').height(contentHeight);
            $('#external_control').css({top: windowHeight / 2});
            if ($('.mdl-card__title').is(':visible')) {
                $('.mdl-card__supporting-text').height(windowHeight - $('.mdl-card__title').height() - $('.demo-card__title').height() - $('.mdl-card__actions').height() * 2.6);
            } else {
                $('.mdl-card__supporting-text').height(windowHeight - $('.demo-card__title').height() - $('.mdl-card__actions').height() * 2.1);
            }
            //$(".item").height(windowHeight- $('.mdl-card__actions').height() * 2);
//            
//            $('#carousel-main').height(windowHeight - $('div.mdl-card__title').height() - $('.mdl-card__actions').height() * 2);
//        setTimeout(function () {
//            $('.commentsFormWrapper').width(contentWidth);
//        }, 300);

            if (map) {
//            google.maps.event.trigger(map, 'resize');
                map.updateSize();

            }

            // Add custom scrollbar for left side navigation
           /* if (windowWidth > 767) {
                $('.bigNav').slimScroll({
                    height: contentHeight - $('.leftUserWraper').height()
                });
            } else {
                $('.bigNav').slimScroll({
                    height: contentHeight
                });
            }
            if ($('.bigNav').parent('.slimScrollDiv').size() > 0) {
                $('.bigNav').parent().replaceWith($('.bigNav'));
                if (windowWidth > 767) {
                    $('.bigNav').slimScroll({
                        height: contentHeight - $('.leftUserWraper').height()
                    });
                } else {
                    $('.bigNav').slimScroll({
                        height: contentHeight
                    });
                }
            }*/
        }


        $(window).resize(function () {
            windowResizeHandler();
        });
        var navExpanded = true;

        $('#information').on('click', function (event) {
            if (event.target.classList.contains('voting') == true) {
                var votingRes = event.target.name;
                var idTicketit = $('#id_ticketit').val();
                $.ajax({
                    url: '/voting',
                    type: 'POST',
                    dataType: "json",
                    data: {
                        'votingRes': votingRes,
                        'idTicketit': idTicketit
                    },
                    success: function (data) {
                        $('.votingAll').hide();
                        $('.votingAll').after('<h4  id="votingMessage" >Дякуємо, що прийняли участь в опитуванні.<h4>')
                        $('#votingMessage').after(votingResult());
                    }

                });
            }
        });

        $('.fl1').on('change', function () {
            var filterstr = '';
            $('select.fl1').each(function (i, elem) {
                if (filterstr === '') {
                    if ($(elem).val()) {
                        filterstr = "(" + $(elem).attr('id') + "='" + $(elem).val().toUpperCase() + "')";
                    }
                } else {
                    if ($(elem).val()) {
                        filterstr += " AND (" + $(elem).attr('id') + "='" + $(elem).val().toUpperCase() + "')";
                    }
                }
            });
            $('input[type=text].fl1').each(function (i, elem) {
                var tmp = '';
                if ($.isNumeric($(elem).val()) && ($(elem).val() > 0)) {
                    if ($(elem).attr('id').substr(0, 3) == 'min') {
                        tmp = "(" + $(elem).attr('id').substr(3) + ">'" + $(elem).val() + "')";
                    }
                    if ($(elem).attr('id').substr(0, 3) == 'max') {
                        tmp = "(" + $(elem).attr('id').substr(3) + "<'" + $(elem).val() + "')";
                    }
                    if (filterstr === '') {
                        filterstr = tmp;
                    } else {
                        filterstr += " AND " + tmp;
                    }
                }
            });
            wmsSource.updateParams({
                CQL_FILTER: filterstr
            });
        });

        $('.fl2').on('change', function () {
            var filterstr = '';
            $('select.fl2').each(function (i, elem) {
                if (filterstr === '') {
                    if ($(elem).val()) {
                        filterstr = "(" + $(elem).attr('id') + "='" + $(elem).val().toUpperCase() + "')";
                    }
                } else {
                    if ($(elem).val()) {
                        filterstr += " AND (" + $(elem).attr('id') + "='" + $(elem).val().toUpperCase() + "')";
                    }
                }
            });
            $('input[type=text].fl2').each(function (i, elem) {
                var tmp = '';
                if ($.isNumeric($(elem).val()) && ($(elem).val() > 0)) {
                    if ($(elem).attr('id').substr(0, 3) == 'min') {
                        tmp = "(" + $(elem).attr('id').substr(3) + ">'" + $(elem).val() + "')";
                    }
                    if ($(elem).attr('id').substr(0, 3) == 'max') {
                        tmp = "(" + $(elem).attr('id').substr(3) + "<'" + $(elem).val() + "')";
                    }
                    if (filterstr === '') {
                        filterstr = tmp;
                    } else {
                        filterstr += " AND " + tmp;
                    }
                }
            });

//            console.log(filterstr);
            wmsSource2.updateParams({
                CQL_FILTER: filterstr
            });
        });

        $('.fl3').on('change', function () {
            var filterstr = '';
            $('select.fl3').each(function (i, elem) {
                if (filterstr === '') {
                    if ($(elem).val()) {
                        filterstr = "(" + $(elem).attr('id') + "='" + $(elem).val().toUpperCase() + "')";
                    }
                } else {
                    if ($(elem).val()) {
                        filterstr += " AND (" + $(elem).attr('id') + "='" + $(elem).val().toUpperCase() + "')";
                    }
                }
            });
            $('input[type=text].fl3').each(function (i, elem) {
                var tmp = '';
                if ($.isNumeric($(elem).val()) && ($(elem).val() > 0)) {
                    if ($(elem).attr('id').substr(0, 3) == 'min') {
                        tmp = "(" + $(elem).attr('id').substr(3) + ">'" + $(elem).val() + "')";
                    }
                    if ($(elem).attr('id').substr(0, 3) == 'max') {
                        tmp = "(" + $(elem).attr('id').substr(3) + "<'" + $(elem).val() + "')";
                    }
                    if (filterstr === '') {
                        filterstr = tmp;
                    } else {
                        filterstr += " AND " + tmp;
                    }
                }
            });
            wmsSource3.updateParams({
                CQL_FILTER: filterstr
            });
        });

        $('.fl4').on('change', function () {
            var filterstr = '';
            $('select.fl4').each(function (i, elem) {
                if (filterstr === '') {
                    if ($(elem).val()) {
                        filterstr = "(" + $(elem).attr('id') + "='" + $(elem).val().toUpperCase() + "')";
                    }
                } else {
                    if ($(elem).val()) {
                        filterstr += " AND (" + $(elem).attr('id') + "='" + $(elem).val().toUpperCase() + "')";
                    }
                }
            });
            $('input[type=text].fl4').each(function (i, elem) {
                var tmp = '';
                if ($.isNumeric($(elem).val()) && ($(elem).val() > 0)) {
                    if ($(elem).attr('id').substr(0, 3) == 'min') {
                        tmp = "(" + $(elem).attr('id').substr(3) + ">'" + $(elem).val() + "')";
                    }
                    if ($(elem).attr('id').substr(0, 3) == 'max') {
                        tmp = "(" + $(elem).attr('id').substr(3) + "<'" + $(elem).val() + "')";
                    }
                    if (filterstr === '') {
                        filterstr = tmp;
                    } else {
                        filterstr += " AND " + tmp;
                    }
                }
            });
            wmsSource4.updateParams({
                CQL_FILTER: filterstr
            });
        });

        $('.fl8').on('change', function () {
            var filterstr = '';
            $('select.fl8').each(function (i, elem) {
                if (filterstr === '') {
                    if ($(elem).val()) {
                        filterstr = "(" + $(elem).attr('id') + "='" + $(elem).val() + "')";
                    }
                } else {
                    if ($(elem).val()) {
                        filterstr += " AND (" + $(elem).attr('id') + "='" + $(elem).val() + "')";
                    }
                }
                if ($(elem).val() == "") {
                    filterstr = "notview";
                }
            });
            $('input[type=text].fl8').each(function (i, elem) {
                var tmp = '';
                if ($.isNumeric($(elem).val()) && ($(elem).val() > 0)) {
                    if ($(elem).attr('id').substr(0, 3) == 'min') {
                        tmp = "(" + $(elem).attr('id').substr(3) + ">'" + $(elem).val() + "')";
                    }
                    if ($(elem).attr('id').substr(0, 3) == 'max') {
                        tmp = "(" + $(elem).attr('id').substr(3) + "<'" + $(elem).val() + "')";
                    }
                    if (filterstr === '') {
                        filterstr = tmp;
                    } else {
                        filterstr += " AND " + tmp;
                    }
                }
            });
//            console.log(filterstr);
            if (filterstr == "notview") {
                wmsSource8.updateParams({CQL_FILTER: null});
            } else {
                wmsSource8.updateParams({
                    CQL_FILTER: filterstr
                });
            }
        });

        $('.fl19').on('change', function () {
            var filterstr = '';
            $('select.fl19').each(function (i, elem) {
                if (filterstr === '') {
                    if ($(elem).val()) {
                        filterstr = "(" + $(elem).attr('id') + "='" + $(elem).val() + "')";
                    }
                } else {
                    if ($(elem).val()) {
                        filterstr += " AND (" + $(elem).attr('id') + "='" + $(elem).val() + "')";
                    }
                }
            });
            if (filterstr == "") {
                filterstr = "notview";
            }

            $('input[type=text].fl19').each(function (i, elem) {
                var tmp = '';
                if ($.isNumeric($(elem).val()) && ($(elem).val() > 0)) {
                    if ($(elem).attr('id').substr(0, 3) == 'min') {
                        tmp = "(" + $(elem).attr('id').substr(3) + ">'" + $(elem).val() + "')";
                    }
                    if ($(elem).attr('id').substr(0, 3) == 'max') {
                        tmp = "(" + $(elem).attr('id').substr(3) + "<'" + $(elem).val() + "')";
                    }
                    if (filterstr === '') {
                        filterstr = tmp;
                    } else {
                        filterstr += " AND " + tmp;
                    }
                }
            });
            if (filterstr == "notview") {
                wmsSource19.updateParams({CQL_FILTER: null});
            } else {
                wmsSource19.updateParams({
                    CQL_FILTER: filterstr
                });
            }
        });
//        $('#accordion').on('hidden.bs.collapse', toggleDOWN);
//        $('#accordion').on('shown.bs.collapse', toggleUP);
//        $('a.accordion-toggle').on('click', function () {
        $('a.mdl-navigation__link').on('click', function () {

//            if ($(this).hasClass('active')) {
            toggleOL($(this).attr('href').substr(1), $(this));
//            } else {
//                showUP($(this).attr('href').substr(1), $(this));
//            }
            if ($(this).hasClass('active') == false && $(this).find('.arrow_box').hasClass('active')) {
                $('.legend').hide();
                $(this).find('.legend-radio').hide();
                $(this).find('.legend-radio').removeAttr('checked');
                $(this).find('.arrow_box').removeClass('active');
                $(this).find('.arrow_box').hide();
            }

            if ($(this).next().find('a.mdl-navigation__link').hasClass('active') && $(this).hasClass('active') == false) {
                $(this).addClass('active');
            }
        });



        $('.navHandler, .closeLeftSide').click(function () {
            if (!navExpanded) {
                $('.logo').addClass('expanded');

                $('#leftSide').addClass('expanded');
                if (windowWidth < 768) {
                    $('.closeLeftSide').show();
                }
                $('#bazlayer').addClass('expanded');
                $('#external_control').addClass('expanded');
                $('.hasSub').addClass('hasSubActive');
                $('.leftNav').addClass('bigNav');
                $('#tools').addClass('expanded');
                if (windowWidth > 767) {
                    $('.full').addClass('m-full');
                }
                windowResizeHandler();
                navExpanded = true;
            } else {
                $('.logo').removeClass('expanded');
                $('#leftSide').removeClass('expanded');
                $('.closeLeftSide').hide();
                $('#bazlayer').removeClass('expanded');
                $('#external_control').removeClass('expanded');
                $('.hasSub').removeClass('hasSubActive');
                $('.bigNav').slimScroll({destroy: true});
                $('.leftNav').removeClass('bigNav');
                $('#tools').removeClass('expanded');
                $('.leftNav').css('overflow', 'visible');
                $('.full').removeClass('m-full');
                navExpanded = false;
            }
        });

        var fullm = false;
        $('#fullm').click(function () {
            if (!fullm) {
                $('#content').hide();

                $('#mapView').addClass('expanded');
                $('#mapView').css("width", "100%");
                fullm = true;
                windowResizeHandler();
            } else {
                $('#mapView').removeClass('expanded');
                $('#mapView').css("width", "50%");
                $('#content').show();
                fullm = false;
                windowResizeHandler();
            }
        });

        //windowResizeHandler();

//        $('.selectpicker').selectpicker('refrjesh');

        $("#searchstring").mask("9999999999:99:999:9999");

        $("#searchbutton").on('click',
            function () {
                if ($("#searchstring").val() != '') {

                    $('html, body').css("cursor", "wait");
                    $.ajax({
                        url: '/find-Parcel',
                        type: 'GET',
                        data: {
                            'cadnum': $("#searchstring").val()
                        },
                        success: function (data) {
                            var box = [data.data[0].st_xmin, data.data[0].st_ymin, data.data[0].st_xmax, data.data[0].st_ymax];
                            //                           var areaExtent = ol.extent.applyTransform(box, ol.proj.getTransform('EPSG:4326', 'EPSG:3857'));
                            view.fit(box, map.getSize());
                            view.setZoom(16);
//                            iconFeature.setGeometry(new ol.geom.Point( view.getCenter()) );
//                            gmlSource.addFeature(iconFeature); 
                            var evt = view.getCenter();
                            $('html, body').css("cursor", "wait");
                            $.ajax({
                                type: 'GET',
                                //                url: 'http://portal.dzk.gov.ua/kadastrova-karta/getobjectinfo',
                                url: '/getobjectinfo',
                                data: {
                                    'x': evt[1],
                                    'y': evt[0],
                                    'layer': 'kadastr',
                                    'zoom': 16
                                },
                                success: function (data) {

                                    //                data = $.parseJSON(JSON.stringify(data));
                                    // console.log(data);
                                    if (data.data) {
                                        var goi = $.parseJSON(data.data);

                                        var regex = /[0-9]{10}:[0-9]{2}:[0-9]{3}:[0-9]{4}/g;
                                        var regex2 = /\u0422\u0438\u043f \u0432\u043b\u0430\u0441\u043d\u043e\u0441\u0442\u0456:<\/div>(.*?)<\/li>/;
                                        var regex3 = /<div class=\"label\">\u0426\u0456\u043b\u044c\u043e\u0432\u0435 \u043f\u0440\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f:<\/div>(.*?)<\/li>/
                                        var str;

                                        if (goi.dilanka) {
                                            str = goi.dilanka;
                                        } else if (goi.ikk) {
                                            str = goi.ikk;
                                        } else if (goi.rajonunion) {
                                            str = goi.rajonunion;
                                        } else {
                                            str = goi.obl;
                                        }

                                        if (str) {
                                            var koatuu = regex.exec(str);
                                            var nom = koatuu;
                                            //koatuu = koatuu + ' ' + regex2.exec(str)[1] + ' ' + regex3.exec(str)[1]
                                            if (regex2.exec(str) != null) {
                                                koatuu = koatuu + ' ' + regex2.exec(str)[1];
                                            }
                                            if (regex3.exec(str) != null) {
                                                koatuu = koatuu + ' ' + regex3.exec(str)[1];
                                            }
                                            //                   console.log(regex2.exec(str)[1]);
                                            if (koatuu) {
                                                if (data.username != '') {
                                                    //        $('#alert_placeholder').html('<div class="alert alert-success fade in"><a class="close" data-dismiss="alert">Ã—</a><span>'+ koatuu + '<button>Pay</button></span></div>');
                                                    koatuu = koatuu + '<button type="button" onclick="reque(\'' + nom + '\');">Ð—Ð°Ð¼Ð¾Ð²Ð¸Ñ‚Ð¸, ' + data.username + '</button>';
                                                }
                                                content.innerHTML = ol.coordinate.toStringHDMS(ol.proj.transform(evt, 'EPSG:3857', 'EPSG:4326')) + '  ' + koatuu;
                                                overlay.setPosition(evt);
                                                view.setCenter(evt);
                                            } else {
                                                $('#alert_placeholder').html('');
                                            }
                                        }
                                        //         console.log(data);
                                    }
                                    $('html, body').css("cursor", "auto");
                                },
                                error: function () {
                                    $('html, body').css("cursor", "auto");
                                }

                            });
                            //        content.innerHTML = $("#searchstring").val();
                            //        overlay.setPosition(view.getCenter());
                            $('html, body').css("cursor", "auto");
                        },
                        error: function () {
                            $('html, body').css("cursor", "auto");
                        }
                    });
                }
            }
        );

//        $('body').removeClass('notransition');
//        var satLayer = new ol.layer.Tile({visible: false, source: new ol.source.MapQuest({layer: 'sat'}), name: 'sat'});

        //var satLayer = new ol.layer.Tile({
        //    source: new ol.source.BingMaps({
        //      culture: 'ru',
        //      key: 'Ak-dzM4wZjSqTlzveKz5u0d4IQ4bRzVI309GxmkgSVr1ewS6iPSrOvOKhA-CJlm3',
        //      imagerySet: 'AerialWithLabels',
        //  }),
        //    visible: 0
        //});
        var projection = new ol.proj.Projection({
            code: 'EPSG:900913',
            units: 'm'
        });
        var popup = new ol.Overlay({
            element: document.getElementById('popup')
        })
//var w = $(window).width();
//var h = $(window).height();
        var wmsSource = new ol.source.ImageWMS({
            url: '/kmda/wms',
            //         url: 'http://212.26.144.110/geowebcache/service/wms',
//            url: 'http://212.26.144.107:8092/vector/geoserver/gwc/service/wms',
            //   url: 'http://192.168.33.51/geowebcache/service/wms',
            params: {
                'LAYERS': 'kmda:kmda_l_orenda',
                'VERSION': '1.1.1',
                'TILED': true,
                'WIDTH': 768,
                'HEIGHT': 520,
                'CRS': 'EPSG:900913', //, CQL_FILTER:'koatuu=3520386800'
//            projection: 'EPSG:900913',
                serverType: 'geoserver',
                crossOrigin: '',
                projection: projection,
//            extent: [3365331.64184455,6509557.90965887,3417855.95133155,6545186.44247934],
            }
        });

        var wmsLayer = new ol.layer.Image({
            source: wmsSource,
            visible: 0,
            name: 'wms1',
            //           extent: map.getView().calculateExtent(map.getSize()),
//            imageSize: [192,192]
        });

        var wmsSource2 = new ol.source.ImageWMS({
            url: '/kmda/wms',
            //         url: 'http://212.26.144.110/geowebcache/service/wms',
//            url: 'http://212.26.144.107:8092/vector/geoserver/gwc/service/wms',
            //   url: 'http://192.168.33.51/geowebcache/service/wms',
            params: {
                'LAYERS': 'kmda:kmda_orenda',
                'VERSION': '1.1.1',
                'TILED': 'true',
                'FORMAT': 'image/png8',
                'WIDTH': 703,
                'HEIGHT': 768,
                'CRS': 'EPSG:900913', //, CQL_FILTER:'koatuu=3520386800'
//            projection: 'EPSG:900913',
                serverType: 'geoserver',
                crossOrigin: '',
                projection: projection,
            }
        });

        var wmsLayer2 = new ol.layer.Image({
            source: wmsSource2,
            visible: 0,
            name: 'wms2'

            //           extent: map.getView().calculateExtent(map.getSize()),
//            imageSize: [192,192]
        });

        var wmsSource3 = new ol.source.ImageWMS({
            url: '/kmda/wms',
            //         url: 'http://212.26.144.110/geowebcache/service/wms',
//            url: 'http://212.26.144.107:8092/vector/geoserver/gwc/service/wms',
            //   url: 'http://192.168.33.51/geowebcache/service/wms',
            params: {
                'LAYERS': 'kmda:kmda_l_privat',
                'VERSION': '1.1.1',
                'TILED': 'true',
                'FORMAT': 'image/png8',
                'WIDTH': 768,
                'HEIGHT': 520,
                'CRS': 'EPSG:900913', //, CQL_FILTER:'koatuu=3520386800'
//            projection: 'EPSG:900913',
                serverType: 'geoserver',
                crossOrigin: '',
                projection: projection,
            }
        });

        var wmsLayer3 = new ol.layer.Image({
            source: wmsSource3,
            visible: 0,
            name: 'wms3'

            //           extent: map.getView().calculateExtent(map.getSize()),
//            imageSize: [192,192]
        });

        var wmsSource4 = new ol.source.ImageWMS({
            url: '/kmda/wms',
            //         url: 'http://212.26.144.110/geowebcache/service/wms',
//            url: 'http://212.26.144.107:8092/vector/geoserver/gwc/service/wms',
            //   url: 'http://192.168.33.51/geowebcache/service/wms',
            params: {
                'LAYERS': 'kmda:kmda_l_komunal_org',
                'VERSION': '1.1.1',
                'TILED': 'true',
                'FORMAT': 'image/png8',
                'WIDTH': 768,
                'HEIGHT': 520,
                'CRS': 'EPSG:900913', //, CQL_FILTER:'koatuu=3520386800'
//            projection: 'EPSG:900913',
                serverType: 'geoserver',
                crossOrigin: '',
                projection: projection,
            }
        });

        var wmsLayer4 = new ol.layer.Image({
            source: wmsSource4,
            visible: 0,
            name: 'wms4'

            //           extent: map.getView().calculateExtent(map.getSize()),
//            imageSize: [192,192]
        });

        var wmsSource5 = new ol.source.TileWMS({
            url: '/kmda/wms',
            params: {
                'LAYERS': 'kmda:kmda_l_building',
                'VERSION': '1.1.1',
                'TILED': 'true',
                'FORMAT': 'image/png8',
                'WIDTH': 716,
                'HEIGHT': 768,
                'CRS': 'EPSG:900913', //, CQL_FILTER:'koatuu=3520386800'
                serverType: 'geoserver',
                crossOrigin: '',
                projection: projection,
            }
        });

        var wmsLayer5 = new ol.layer.Tile({
            source: wmsSource5,
            visible: 0,
            name: 'wms5'
        });
        var wmsSource6 = new ol.source.TileWMS({
            url: '/kmda/wms',
            params: {
                'LAYERS': 'kmda:kmda_l_street',
                'VERSION': '1.1.1',
                'TILED': 'true',
                'FORMAT': 'image/png8',
                'WIDTH': 716,
                'HEIGHT': 768,
                'CRS': 'EPSG:900913', //, CQL_FILTER:'koatuu=3520386800'
                serverType: 'geoserver',
                crossOrigin: '',
                projection: projection,
            }
        });

        var wmsLayer6 = new ol.layer.Tile({
            source: wmsSource6,
            visible: 0,
            name: 'wms6'
        });
        var wmsSource7 = new ol.source.ImageWMS({
            url: '/kyiv.recl/wms',
            params: {
                'LAYERS': 'kyiv.recl:reclama',
                'VERSION': '1.1.1',
                'TILED': 'true',
                'FORMAT': 'image/png8',
                'WIDTH': 768,
                'HEIGHT': 758,
                'CRS': 'EPSG:900913', //, CQL_FILTER:'koatuu=3520386800'
                serverType: 'geoserver',
                crossOrigin: '',
                projection: projection,
            }
        });

        var wmsLayer7 = new ol.layer.Image({
            source: wmsSource7,
            visible: 0,
            name: 'wms7'
        });
        var wmsSource8 = new ol.source.TileWMS({
            url: '/kmda/wms',
            params: {
                'LAYERS': 'kmda:kmda_l_function',
                'VERSION': '1.1.1',
                'TILED': 'true',
                'FORMAT': 'image/png8',
                'WIDTH': 765,
                'HEIGHT': 768,
                'CRS': 'EPSG:900913', //, CQL_FILTER:'koatuu=3520386800'
                serverType: 'geoserver',
                crossOrigin: '',
                projection: projection,
            }
        });

        var wmsLayer8 = new ol.layer.Tile({
            source: wmsSource8,
            visible: 0,
            name: 'wms8'
        });
        var wmsSource9 = new ol.source.ImageWMS({
            url: '/kmda/wms',
            params: {
                'LAYERS': 'kmda:kmda_l_land',
                'VERSION': '1.1.1',
                'TILED': 'true',
                'FORMAT': 'image/png8',
                'WIDTH': 768,
                'HEIGHT': 730,
                'CRS': 'EPSG:900913', //, CQL_FILTER:'koatuu=3520386800'
                serverType: 'geoserver',
                crossOrigin: '',
                projection: projection,
            }
        });

        var wmsLayer9 = new ol.layer.Image({
            source: wmsSource9,
            visible: 0,
            name: 'wms9'
        });
        var wmsSource10 = new ol.source.TileWMS({
            url: '/kmda/wms',
            params: {
                'LAYERS': 'kmda:kmda_l_muo',
                'VERSION': '1.1.1',
                'TILED': 'true',
                'FORMAT': 'image/png8',
                'WIDTH': 768,
                'HEIGHT': 727,
                'CRS': 'EPSG:900913', //, CQL_FILTER:'koatuu=3520386800'
                serverType: 'geoserver',
                crossOrigin: '',
                projection: projection,
            }
        });

        var wmsLayer10 = new ol.layer.Tile({
            source: wmsSource10,
            visible: 0,
            name: 'wms10'
        });

        var wmsSource11 = new ol.source.TileWMS({
            url: '/dzk',
            params: {
                'LAYERS': 'kadastr',
                'VERSION': '1.1.1',
                'TILED': 'true',
                'FORMAT': 'image/png',
                'WIDTH': 256,
                'HEIGHT': 256,
                'CRS': 'EPSG:900913', //, CQL_FILTER:'koatuu=3520386800'
                serverType: 'geoserver',
                crossOrigin: '',
                projection: projection,
            }
        });

        var wmsLayer11 = new ol.layer.Tile({
            source: wmsSource11,
            visible: 0,
            name: 'wms11'
        });
        var wmsSource12 = new ol.source.TileWMS({
            url: '/kmda/wms',
            params: {
                'LAYERS': 'kmda:kmda_l_scheme_dpt',
                'VERSION': '1.1.1',
                'TILED': 'true',
                'FORMAT': 'image/png8',
                'WIDTH': 768,
                'HEIGHT': 711,
                'CRS': 'EPSG:900913', //, CQL_FILTER:'koatuu=3520386800'
                serverType: 'geoserver',
                crossOrigin: '',
                projection: projection,
            }
        });

        var wmsLayer12 = new ol.layer.Tile({
            source: wmsSource12,
            visible: 0,
            name: 'wms12'
        });
        var wmsSource13 = new ol.source.TileWMS({
            url: '/kmda/wms',
            params: {
                'LAYERS': 'kmda:kmda_l_function_change',
                'VERSION': '1.1.1',
                'TILED': 'true',
                'FORMAT': 'image/png8',
                'WIDTH': 768,
                'HEIGHT': 752,
                'CRS': 'EPSG:900913', //, CQL_FILTER:'koatuu=3520386800'
                serverType: 'geoserver',
                crossOrigin: '',
                projection: projection,
            }
        });

        var wmsLayer13 = new ol.layer.Tile({
            source: wmsSource13,
            visible: 0,
            name: 'wms13'
        });

        var wmsSource14 = new ol.source.ImageWMS({
            url: '/kmda/wms',
            params: {
                'LAYERS': 'kmda:kmda_r_road',
                'VERSION': '1.1.1',
                'TILED': 'true',
                'FORMAT': 'image/png8',
                'WIDTH': 768,
                'HEIGHT': 557,
                'CRS': 'EPSG:900913', //, CQL_FILTER:'koatuu=3520386800'
                serverType: 'geoserver',
                crossOrigin: '',
                projection: projection,
            }
        });

        var wmsLayer14 = new ol.layer.Image({
            source: wmsSource14,
            visible: 0,
            name: 'wms14'
        });

        var wmsSource15 = new ol.source.TileWMS({
            url: '/kmda/wms',
            params: {
                'LAYERS': 'kmda:kmda_i_street_flash',
                'VERSION': '1.1.1',
                'TILED': 'false',
                'FORMAT': 'image/png8',
                'WIDTH': 716,
                'HEIGHT': 768,
                'CRS': 'EPSG:900913', //, CQL_FILTER:'koatuu=3520386800'
                serverType: 'geoserver',
                crossOrigin: '',
                projection: projection,
            }
        });

        var wmsLayer15 = new ol.layer.Tile({
            source: wmsSource15,
            visible: 0,
            name: 'wms15'
        });

        var wmsSource16 = new ol.source.ImageWMS({
            url: '/kmda/wms',
            params: {
                'LAYERS': 'kmda:kmda_i_pole',
                'VERSION': '1.1.1',
                'TILED': 'true',
                'FORMAT': 'image/png8',
                'WIDTH': 433,
                'HEIGHT': 768,
                'CRS': 'EPSG:900913', //, CQL_FILTER:'koatuu=3520386800'
                serverType: 'geoserver',
                crossOrigin: '',
                projection: projection,
            }
        });

        var wmsLayer16 = new ol.layer.Image({
            source: wmsSource16,
            visible: 0,
            name: 'wms16'
        });

        var wmsSource17 = new ol.source.TileWMS({
            url: '/kmda/wms',
            params: {
                'LAYERS': 'kmda:kmda_t_station',
                'VERSION': '1.1.1',
                'TILED': 'true',
                'FORMAT': 'image/png8',
                'WIDTH': 768,
                'HEIGHT': 757,
                'CRS': 'EPSG:900913', //, CQL_FILTER:'koatuu=3520386800'
                serverType: 'geoserver',
                crossOrigin: '',
                projection: projection,
            }
        });

        var wmsLayer17 = new ol.layer.Tile({
            source: wmsSource17,
            visible: 0,
            name: 'wms17'
        });

        var wmsSource19 = new ol.source.TileWMS({
            url: '/kmda/wms',
            params: {
                'LAYERS': 'kmda:kmda_p_parkservice',
                'VERSION': '1.1.1',
                'TILED': 'true',
                'FORMAT': 'image/png8',
                'WIDTH': 768,
                'HEIGHT': 608,
                'CRS': 'EPSG:900913', //, CQL_FILTER:'koatuu=3520386800'
                serverType: 'geoserver',
                crossOrigin: '',
                projection: projection,
            }
        });

        var wmsLayer19 = new ol.layer.Tile({
            source: wmsSource19,
            visible: 0,
            name: 'wms19'
        });

        var wmsSource20 = new ol.source.TileWMS({
            url: '/kmda/wms',
            params: {
                'LAYERS': 'kmda:kmda_z_zelenbud',
                'VERSION': '1.1.1',
                'TILED': 'true',
                'FORMAT': 'image/png8',
                'WIDTH': 330,
                'HEIGHT': 768,
                'CRS': 'EPSG:900913', //, CQL_FILTER:'koatuu=3520386800'
                serverType: 'geoserver',
                crossOrigin: '',
                projection: projection,
            }
        });

        var wmsLayer20 = new ol.layer.Tile({
            source: wmsSource20,
            visible: 0,
            name: 'wms20'
        });

        var wmsSource21 = new ol.source.TileWMS({
            url: '/kmda/wms',
            params: {
                'LAYERS': 'kmda:kmda_t_station_bus',
                'VERSION': '1.1.1',
                'TILED': 'true',
                'FORMAT': 'image/png8',
                'WIDTH': 768,
                'HEIGHT': 757,
                'CRS': 'EPSG:900913',
                serverType: 'geoserver',
                crossOrigin: '',
                projection: projection,
            }
        });

        var wmsLayer21 = new ol.layer.Tile({
            source: wmsSource21,
            visible: 0,
            name: 'wms21'
        });

        var wmsSource22 = new ol.source.TileWMS({
            url: '/kmda/wms',
            params: {
                'LAYERS': 'kmda:kmda_r_smartroads',
                'VERSION': '1.1.1',
                'TILED': 'true',
                'FORMAT': 'image/png8',
                'WIDTH': 768,
                'HEIGHT': 433,
                'CRS': 'EPSG:900913', //, CQL_FILTER:'koatuu=3520386800'
                serverType: 'geoserver',
                crossOrigin: '',
                projection: projection,
            }
        });


        var wmsLayer22 = new ol.layer.Tile({
            source: wmsSource22,
            visible: 0,
            name: 'wms22'
        });

        var wmsSource23 = new ol.source.TileWMS({
            url: '/kmda/wms',
            params: {
                'LAYERS': 'kmda:kmda_l_monitoring',
                'VERSION': '1.1.1',
                'TILED': 'true',
                'FORMAT': 'image/png8',
//                'WIDTH': 768,
//                'HEIGHT': 433,
                'CRS': 'EPSG:900913', //, CQL_FILTER:'koatuu=3520386800'
                serverType: 'geoserver',
                crossOrigin: '',
                projection: projection,
            }
        });


        var wmsLayer23 = new ol.layer.Tile({
            source: wmsSource23,
            visible: 0,
            name: 'wms23'
        });
        
        osmLayer = new ol.layer.Tile({
            source: new ol.source.OSM(),
            visible: 1,
            name: 'osm',
        });


        var kiev2006Layer = new ol.layer.Tile({
            source: new ol.source.XYZ({
                url: 'http://map.land.gov.ua/map/ortho10k_all/{z}/{x}/{-y}.jpg',
                crossOrigin: 'null'
            }),
            name: 'kiev2006',
            visible: 0,
//            projection: projection,
//            tileUrlFunction: function(tileCoord) {
//                return urlTemplate.replace('{z}', (tileCoord[0] - 1).toString())
//                                  .replace('{x}', tileCoord[1].toString())
//                                  .replace('{y}', (-tileCoord[2] - 1).toString());
//              },
        });
        var kiev2015Layer = new ol.layer.Tile({
            source: new ol.source.XYZ({
//                url: '/ortho2k_2015/{z}/{x}/{-y}.jpg',
                url: 'http://map.land.gov.ua/map/ortho_kiev/{z}/{x}/{-y}.jpg',
                crossOrigin: 'null',
            }),
            name: 'kiev2015',
            visible: 0,
        });
        var kiev2000Layer = new ol.layer.Tile({
            source: new ol.source.XYZ({
                url: '/topo2k_kyiv/{z}/{x}/{-y}.jpg',
                crossOrigin: 'null',
            }),
            name: 'kiev2000',
            visible: 0,
        });
        var view = new ol.View({
            center: [3396647.44192, 6527057.33961],
//            extent: [3365331.64184455, 6509557.90965887, 3417855.95133155, 6545186.44247934],
            extent: [3347533.00, 6463838.00, 3457804.00, 6576380.00],
//            projection: projection,
            zoom: 12,
            minZoom: 2
        });

//        var iconFeature = new ol.Feature();
//        var styleiconFeature =new ol.style.Style({
//                        image: new ol.style.Icon({
//                            opacity: 0.75,
//         //                   src: "data:image/svg+xml;base64," + btoa( svgto ),
//                            src: "/marker-new.png",
//                            size: [48,48],
//                            anchor: [0.5, 24],
//                            anchorXUnits: 'fraction',
//                            anchorYUnits: 'pixel',
//                          
//                        })
//                    });
//        iconFeature.setStyle(styleiconFeature);

//        var gmlSource = new ol.source.Vector();
//        var gmlLayer = new ol.layer.Vector({
//            source: gmlSource,
//            map: map,
//            style: new ol.style.Style({
//              stroke: new ol.style.Stroke({
//                color: '#f00',
//                width: 1
//              }),
//              fill: new ol.style.Fill({
//                color: 'rgba(255,0,0,0.1)'
//              })
//            })
//          });

        /**
         * Create an overlay to anchor the popup to the map.
         */
//        var container = document.getElementById('popup');
//        var content = document.getElementById('popup-content');
//        var closer = document.getElementById('popup-closer');
//
//        closer.onclick = function () {
//            overlay.setPosition(undefined);
//            closer.blur();
//            return false;
//        };

//        var overlay = new ol.Overlay(/** @type {olx.OverlayOptions} */ ({
//            element: container,
//            autoPan: true,
//            autoPanAnimation: {
//                duration: 250
//            }
//        }));

//        var gmap = new google.maps.Map(document.getElementById('gmap'), {
//            disableDefaultUI: true,
//            keyboardShortcuts: false,
//            draggable: false,
//            disableDoubleClickZoom: true,
//            scrollwheel: false,
//            streetViewControl: false
//          });
        googleLayer = new olgm.layer.Google({name: 'google', visible: 0, mapTypeId: google.maps.MapTypeId.SATELLITE});
        var googleHybridLayer = new olgm.layer.Google({
            name: 'googlehybrid',
            visible: 0,
            mapTypeId: google.maps.MapTypeId.HYBRID
        });
//osmLayer.setVisible(false);
//googleLayer.setVisible(false);

        map = new ol.Map({
//            interactions: olgm.interaction.defaults(),
            target: "mapView",
            layers: [
//                   new ol.layer.Tile({ source: new ol.source.MapQuest({layer: 'sat'}) }), 
//                   new ol.layer.Tile({ source: new ol.source.MapQuest({layer: 'hyb'}) }),
                googleLayer,
                googleHybridLayer,
//                satLayer,
                osmLayer,
                kiev2000Layer,
                kiev2006Layer,
                kiev2015Layer,
                wmsLayer5,
                wmsLayer6,
                wmsLayer7,
                wmsLayer8,
                wmsLayer9,
                wmsLayer10,
                wmsLayer11,
                wmsLayer12,
                wmsLayer13,
                wmsLayer14,
                wmsLayer15,
                wmsLayer16,
                wmsLayer17,
                wmsLayer19,
                wmsLayer20,
                wmsLayer21,
                wmsLayer22,
                wmsLayer23,
                wmsLayer,
                wmsLayer2,
                wmsLayer3,
                wmsLayer4,

            ],
            //           overlays: [overlay],
            view: view,
            controls: [],
        });

        map.addOverlay(popup);
//  var zoomslider = new ol.control.ZoomSlider();
//  map.addControl(zoomslider);
        var external_control = new ol.control.Zoom({
            target: document.getElementById('external_control')
        });
        map.addControl(external_control);
        var overview = new ol.control.OverviewMap({
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            target: 'map',
            tipLabel: 'Оглядова карта'
        });

        map.addControl(overview);
        var olGM = new olgm.OLGoogleMaps({map: map}); // map is the ol.Map instance
        olGM.activate();
        $('div.mapPlaceholder').remove();
        windowResizeHandler();
        addLegend(map);
        addMeasure(map);
        layersOff(map);

        //       map.getView().fitExtent(wmsSource.getExtent(), map.getSize());

//         map.getView().fitExtent(wmsLayer.getExtent(), map.getSize());
//var extente = [3365331.64184455,6509557.90965887,3417855.95133155,6545186.44247934];
//map.getView().fitExtent(extente, map.getSize());
        $('#bazlayer select').on('change', function () {
            //     console.log($( "select option:selected" ).val());
            var selected = $(this).find('option:selected').val();
//    alert(selected);
            var artbaz = ['osm', 'google', 'googlehybrid', 'kiev2000', 'kiev2006', 'kiev2015'];
            map.getLayers().forEach(function (l, i) {
                if (($.inArray(l.get('name'), artbaz)) > -1) {
                    if (l.get('name') !== selected) {
                        l.setVisible(false);
                    } else {
                        l.setVisible(true);
                    }
                    //      if(l.get('name')==='google')
                    //        {  l.setVisible(true); }
                }
            });
            //  $('.gm-style').removeClass('gm-style');
        });

        $('#bazlayer select').change();
//        var rightNav = false;


//                map.on('pointermove', function(event) {
//                    var feature = map.forEachFeatureAtPixel(event.pixel, function(feature, layer) {
//                              return feature;
//                            }, null, function(layer) {
//                              return layer === wmsLayer;
//                            });
//                  var target = document.getElementById(map.getTarget());
//                  if (feature) {
//
//                  target.style.cursor = 'pointer';
//
//                  } else { 
//                      target.style.cursor = ''; 
//
//                  }
//                }); 

        map.on('singleclick', function (evt) {

//            $.ajax({
//                url: '/api/streettype.json',
//                type: 'GET',
//                success: function (data) {
//                    console.log(data);
//                },
//                error: function () {
//                    console.log('error');
//                }
//            });
//      document.getElementById('popup').innerHTML = '';
            var viewResolution = (view.getResolution());

//            var infocontainer = document.getElementById('information');
            var infocontainer = document.getElementById('information');
            var url;
            var flah = false;

            var infostr;

            var indic;
            var count = 0;
//            var temp_photo;
            map.getLayers().forEach(function (l, i) {
                if ((($.inArray(l.get('name'), art)) > -1) && (l.getVisible())) {
                    url = l.getSource().getGetFeatureInfoUrl(
                        evt.coordinate, viewResolution, 'EPSG:900913',
                        {'INFO_FORMAT': 'application/json'});
                    //var fitextent  = [3399302.74458409,6523059.490493268,3400267.76206619,6524024.507975368];
                    //map.getView().fit(fitextent, map.getSize());
                    //console.log(l.getSource().getExtent());
                    $.ajax({
                        url: url,
                        dataType: 'json',
//          jsonpCallback: 'parseResponse'
                    }).then(function (response) {
                        //         var result = parser.readFeatures(response);
                        //         console.log(response);
//                        temp_photo = response.features[0].properties.objectid;
                        for (var i = 0; i < response.features.length; i++) {
                            if (!flah) {
//                                infostr = "<div id='carousel-example-generic' class='carousel slide' data-ride='carousel' data-interval='3000' role='listbox'>";
//                                infostr += "<ol class='carousel-indicators'>" +
//                                        "<li data-target='carousel-example-generic' data-slide-to='0' class='active'></li>" +
//                                        "<li data-target='carousel-example-generic' data-slide-to='1'></li>" +
//                                        "</ol>";
//
//                                infostr += "<div class='carousel-inner'><div class='item active'>";
                                infostr = "<div class='item active'>";
                                infostr += "<div class='mdl-card__title mdl-card--expand mdl-color--teal-300'></div>";
                                indic = '<li data-target="#carousel-example-generic" data-slide-to="' + count + '" class="active"></li>';
                                flah = true;
                            } else {
                                infostr += "<div class='item'>";
                                infostr += "<div class='mdl-card__title mdl-card--expand mdl-color--teal-300'></div>";
                                indic += '<li data-target="#carousel-example-generic" data-slide-to="' + count + '"></li>';
                            }
                            count++;

                            var name;
                            if ((name = response.features[i].properties.ObjectName) === undefined) {
                                if ((name = response.features[i].properties.objectname) === undefined) {
                                    if ((name = response.features[i].properties.orgname) === undefined) {
                                        if ((name = response.features[i].properties.function_z) === undefined) {
                                            if ((name = response.features[i].properties.name) === undefined) {
                                                if ((name = response.features[i].properties.obj_name) === undefined) {
                                                    if ((name = response.features[i].properties.name1) === undefined) {
                                                        if ((name = response.features[i].properties.objectname) === undefined) {
                                                            if ((name = response.features[i].properties.sname) === undefined) {
                                                                name = response.features[i].properties.subject;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            if (response.features[i].properties.full_name) {
                                name = response.features[i].properties.full_name;
                            }
                            if (response.features[i].properties.addr_number) {
                                name += ", " + response.features[i].properties.addr_number;
                            }
                            if (!name) {
                                name = '';
                            }

                            //       infostr += "<div class='carousel-caption'>";
                            infostr += "<div class='demo-card__title mdl-card--expand mdl-color--teal-300'><h1>" + name + "</h1>";

                            var districtname;
                            if ((districtname = response.features[i].properties.DistrictName) === undefined) {
                                if ((districtname = response.features[i].properties.district) === undefined) {
                                    if ((districtname = response.features[i].properties.type_str) === undefined) {
                                        districtname = ' ';
                                    }
                                }
                            }
                            var addrstreet;
                            if ((addrstreet = response.features[i].properties.ObjectAddrStreet) === undefined) {
                                if ((addrstreet = response.features[i].properties.street) === undefined) {
                                    if ((addrstreet = response.features[i].properties.adress) === undefined) {
                                        if ((addrstreet = response.features[i].properties.name_str) === undefined) {
                                            if ((addrstreet = response.features[i].properties.street) === undefined) {
                                                addrstreet = response.features[i].properties.long;
                                            }
                                        }
                                    }
                                }
                            }
                            var housenum;
                            if ((housenum = response.features[i].properties.ObjectAddrNumber) === undefined) {
                                if ((housenum = response.features[i].properties.house) === undefined) {
                                    if ((housenum = response.features[i].properties.num_str) === undefined) {
                                        if ((housenum = response.features[i].properties.house) === undefined) {
                                            housenum = response.features[i].properties.lat;
                                        }
                                    }
                                }
                            }

//                            if (districtname) {
//                                infostr += districtname;
//                            }
//                            if (addrstreet) {
//                                infostr += " " + addrstreet;
//                            }
//                            if (housenum) {
//                                infostr += housenum;
//                            }
                            if (districtname && addrstreet && housenum) {
                                infostr += "<h2>" + districtname + " " + addrstreet + " " + housenum + "</h2>";
                            }
                            if (response.features[i].properties.reclAdress !== undefined) {
                                infostr += "<h2>" + response.features[i].properties.reclAdress + "</h2>";
                            }
                            if (response.features[i].properties.code_addro !== undefined) {
                                infostr += "<h2>" + response.features[i].properties.code_addrn + " " + response.features[i].properties.code_addro + "</h2>";
                            }
                            if (response.features[i].properties.address !== undefined) {
                                infostr += "<h2>" + response.features[i].properties.address + "</h2>";
                            }

                            infostr += "</div><div class='mdl-card__supporting-text mdl-color-text--grey-600'>";
                            if (response.features[i].properties.cadnum != undefined) {
                                infostr += "<small>Кадастровий номер</small><h5>" + response.features[i].properties.cadnum + "</h5>";
                            }
                            var ownership;
                            if ((ownership = response.features[i].properties.OrgOwnership) === undefined) {
                                ownership = response.features[i].properties.ownership;
                            }
                            if (ownership) {
                                infostr += "<small>Форма власностi</small><h5>" + ownership + "</h5>";
                            }
                            if (response.features[i].properties.right_type !== undefined) {
                                infostr += "<small>Права власностi</small><h5>" + response.features[i].properties.right_type + "</h5>";
                            }
                            if (response.features[i].properties.type !== undefined) {
                                infostr += "<small>Тип</small><h5>" + response.features[i].properties.type + "</h5>";
                            }
                            if (response.features[i].properties.reclType !== undefined) {
                                infostr += "<small>Тип</small><h5>" + response.features[i].properties.reclType + "</h5>";
                            }
                            if (response.features[i].properties.reclOwner !== undefined) {
                                infostr += "<small>Замовник</small><h5>" + response.features[i].properties.reclOwner + "</h5>";
                            }
                            if (response.features[i].properties.zamovn_b !== undefined) {
                                infostr += "<small>Замовник</small><h5>" + response.features[i].properties.zamovn_b + "</h5>";
                            }

                            if (response.features[i].properties.zamovnyk !== undefined) {
                                infostr += "<small>Замовник</small><h5>" + response.features[i].properties.zamovnyk + "</h5>";
                            }
                            if (response.features[i].properties.rozrobnik_ !== undefined) {
                                infostr += "<small>Розробник</small><h5>" + response.features[i].properties.rozrobnik_ + "</h5>";
                            }
                            var sqrtotal;
                            if ((sqrtotal = response.features[i].properties.SqrTotal) === undefined) {
                                if ((sqrtotal = response.features[i].properties.sqrtotal) === undefined) {
                                    if ((sqrtotal = response.features[i].properties.area) === undefined) {
                                        if ((sqrtotal = response.features[i].properties.arearishkr) === undefined) {
                                            if ((sqrtotal = response.features[i].properties.reclArea) === undefined) {
                                                sqrtotal = response.features[i].properties.aqrtotal;
                                            }
                                        }
                                    }
                                }
                            }
                            if (sqrtotal) {
                                infostr += "<small>Загальна площа (кв. м.)</small><h5>" + sqrtotal + "</h5>";
                            }
                            var costbalance;
                            if ((costbalance = response.features[i].properties.CostBalans) === undefined) {
                                costbalance = response.features[i].properties.costbalans;
                            }
                            if (costbalance) {
                                infostr += "<small>Балансова вартiсть (тис. грн.)</small><h5>" + costbalance + "</h5>";
                            }

                            var busage;
                            if ((busage = response.features[i].properties.BuildingUsage) === undefined) {
                                if ((busage = response.features[i].properties.purpose) === undefined) {
                                    if ((busage = response.features[i].properties.startfunc) === undefined) {
                                        busage = response.features[i].properties.industryname;
                                    }
                                }
                            }
                            if (busage) {
                                infostr += "<small>Призначення</small><h5>" + busage + "</h5>";
                            }
                            var bkind;
                            if ((bkind = response.features[i].properties.BuildingKind) == undefined) {
                                if ((bkind = response.features[i].properties.kind) == undefined) {
                                    bkind = response.features[i].properties.p0003;
                                }
                            }
                            if (bkind) {
                                infostr += "<small>Вид об'єкту</small><h5>" + bkind + "</h5>";
                            }
                            var btype;
                            if ((btype = response.features[i].properties.BuildingType) == undefined) {
                                if ((btype = response.features[i].properties.btype) == undefined) {
                                    if (response.features[i].properties.p0010 !== undefined) {
                                        btype = response.features[i].properties.p0010 + " " + response.features[i].properties.p0013;
                                    }
                                    if (btype === undefined) {
                                        btype = response.features[i].properties.kindname;
                                    }
                                    if (btype === undefined) {
                                        btype = response.features[i].properties.occupationname;
                                    }
                                }
                            }
                            if (btype) {
                                infostr += "<small>Тип об'єкту</small><h5>" + btype + "</h5>";
                            }
                            var btech;
                            if ((btech = response.features[i].properties.BTS_NAME) == undefined) {
                                btech = response.features[i].properties.btechstate;
                            }
                            if (btech) {
                                infostr += "<small>Стан об'єкту</small><h5>" + btech + "</h5>";
                            }
                            if (response.features[i].properties.link != undefined) {
                                if (response.features[i].properties.name_obj != undefined) {
                                    infostr += "<small>Посилання на документ</small>";
                                } else {
                                    infostr += "<small>" + response.features[i].properties.name_obj + "</small>";
                                }
                                infostr += "<h5><a target='_blank' href='/PDF/" + response.features[i].properties.id_region + "/" + response.features[i].properties.link + "'>" + response.features[i].properties.doc_type + "</a></h5>";
                            }
                            if (response.features[i].properties.num_in != undefined) {
                                infostr += "<small>Вхідний номер</small><h5>" + response.features[i].properties.num_in + "</h5>";
                            }
                            if (response.features[i].properties.data_in != undefined) {
                                infostr += "<small>Вхідна дата</small><h5>" + response.features[i].properties.data_in + "</h5>";
                            }
                            if (response.features[i].properties.num_out != undefined) {
                                infostr += "<small>Вихідний номер</small><h5>" + response.features[i].properties.num_out + "</h5>";
                            }
                            if (response.features[i].properties.data_out != undefined) {
                                infostr += "<small>Вихідна дата</small><h5>" + response.features[i].properties.data_out + "</h5>";
                            }
                            if (response.features[i].properties.cad_num_z != undefined) {
                                infostr += "<small>Кадастровий номер</small><h5>" + response.features[i].properties.cad_num_z + "</h5>";
                            }

                            if (response.features[i].properties.chanfunc != undefined) {
                                infostr += "<small>Нова функція території за генеральним планом міста</small><h5>" + response.features[i].properties.chanfunc + "</h5>";
                            }
                            if (response.features[i].properties.code_func1 != undefined) {
                                infostr += "<small>Код нової функції</small><h5>" + response.features[i].properties.code_func1 + "</h5>";
                            }

                            if (response.features[i].properties.nrishkmda != undefined) {
                                infostr += "<small>Номер рішення КМДА</small><h5>" + response.features[i].properties.nrishkmda + "</h5>";
                            }

                            if (response.features[i].properties.n_rish_kmr != undefined) {
                                infostr += "<small>Номер рішення Київради про затвердження</small><h5>" + response.features[i].properties.n_rish_kmr + "</h5>";
                            }
                            if (response.features[i].properties.rayon_b != undefined) {
                                infostr += "<small>Адмінрайон міста</small><h5>" + response.features[i].properties.rayon_b + "</h5>";
                            }
                            if (response.features[i].properties.rozrobnik_doc != undefined) {
                                infostr += "<small>Розробник містобудівної документації</small><h5>" + response.features[i].properties.rozrobnik_doc + "</h5>";
                            }
                            if (response.features[i].properties.reestrazno != undefined) {
                                infostr += "<small>Реєстраціний номер</small><h5>" + response.features[i].properties.reestrazno + "</h5>";
                            }

                            if (response.features[i].properties.stadia_roz != undefined) {
                                infostr += "<small>Стадія розроблення </small><h5>" + response.features[i].properties.stadia_roz + "</h5>";
                            }
                            if (response.features[i].properties.type_b != undefined) {
                                infostr += "<small>Тип містобудівної документації</small><h5>" + response.features[i].properties.type_b + "</h5>";
                            }

                            if (response.features[i].properties.daterihkr != undefined) {
                                infostr += "<small>Дата рішення КМДА</small><h5>" + response.features[i].properties.daterihkr + "</h5>";
                            }
                            if (response.features[i].properties.group_name != null) {
                                infostr += "<small>Назва групи</small><h5>" + response.features[i].properties.group_name + "</h5>";
                            }
                            if (response.features[i].properties.pidstavaza != null) {
                                infostr += "<small>Підстава внесення</small><h5>" + response.features[i].properties.pidstavaza + "</h5>";
                            }
                            if (response.features[i].properties.code != null) {
                                infostr += "<small>Код</small><h5>" + response.features[i].properties.code + "</h5>";
                            }
                            if (response.features[i].properties.status != undefined) {
                                infostr += "<small>Статус</small><h5>" + response.features[i].properties.status + "</h5>";
                            }
                            if (response.features[i].properties.zamovn != undefined) {
                                infostr += "<small>Замовник</small><h5>" + response.features[i].properties.zamovn + "</h5>";
                            }
                            if (response.features[i].properties.p_name != undefined) {
                                infostr += "<small>Місце розташування</small><h5>" + response.features[i].properties.p_name + "</h5>";
                            }
                            if (response.features[i].properties.content != undefined) {
                                infostr += "<small>Опис</small><h5>" + response.features[i].properties.content + "</h5>";
                            }

                            if (response.features[i].properties.inv_number != null) {
                                infostr += "<small>Інвентарний номер</small><h5>" + response.features[i].properties.inv_number + "</h5>";
                            }
                            if (response.features[i].properties.priority_name != undefined) {
                                infostr += "<small>Статус</small><h5>" + response.features[i].properties.priority_name + "</h5>";
                            }
                            /*if (response.features[i].properties.priority_id != undefined) {
                             infostr += "<small> Статус</small>";
                             switch(response.features[i].properties.priority_id) {
                             case 1:
                             infostr += "<h5>Внесено</h5>";
                             break;
                             case 2:
                             infostr += "<h5>Перевірено</h5>";
                             break;
                             default:
                             infostr += "<h5>Не визначено</h5>";
                             }
                             }*/
                            if (response.features[i].properties.p_mode != undefined) {
                                infostr += "<small>Форма паркування</small><h5>" + response.features[i].properties.p_mode + "</h5>";
                            }

                            if (response.features[i].properties.p_zone != undefined) {
                                infostr += "<small>Номер зони</small><h5>" + response.features[i].properties.p_zone + "</h5>";
                            }
                            if (response.features[i].properties.html != undefined) {
//                                var pattern = /<img (.+)>/ig;
//
//                                console.log(pattern.exec(response.features[i].properties.html));
                                infostr += "<div style='display:none;'>" + response.features[i].properties.html + "</div>";
                            }
                            if (response.features[i].properties.area_project != undefined) {
                                infostr += "<small>Проектна площа ремонту (кв. м.)</small><h5>" + response.features[i].properties.area_project + "</h5>";
                            }
                            if (response.features[i].properties.area_fact != undefined) {
                                infostr += "<small>Фактична площа ремонту (кв. м.)</small><h5>" + response.features[i].properties.area_fact + "</h5>";
                            }
                            if (response.features[i].properties.cost_repairs != undefined) {
                                infostr += "<small>Проектна вартість ремонту (тис. грн.)</small><h5>" + response.features[i].properties.cost_repairs + "</h5>";
                            }
                            if (response.features[i].properties.cost_repairs_fact != undefined) {
                                infostr += "<small>Фактична вартість ремонту (тис. грн.)</small><h5>" + response.features[i].properties.cost_repairs_fact + "</h5>";
                            }

                            if (response.features[i].properties.field_1 != undefined) {
                                infostr += "<small>Ідентифікатор об'єкта</small><h5>" + response.features[i].properties.field_1 + "</h5>";
                            }
                            if (response.features[i].properties.field_2 != undefined) {
                                infostr += "<small>Номер ПВ-ВП</small><h5>" + response.features[i].properties.field_2 + "</h5>";
                            }
                            if (response.features[i].properties.field_3 != undefined) {
                                infostr += "<small>Тип опори</small><h5>" + response.features[i].properties.field_3 + "</h5>";
                            }
                            if (response.features[i].properties.field_4 != undefined) {
                                infostr += "<small>Дата установки опори</small><h5>" + response.features[i].properties.field_4 + "</h5>";
                            }
                            if (response.features[i].properties.field_5 != undefined) {
                                infostr += "<small>Кронштейн</small><h5>" + response.features[i].properties.field_5 + "</h5>";
                            }
                            if (response.features[i].properties.field_6 != undefined) {
                                infostr += "<small>Тип світильника</small><h5>" + response.features[i].properties.field_6 + "</h5>";
                            }
                            if (response.features[i].properties.field_7 != undefined) {
                                infostr += "<small>Дата установки світильника</small><h5>" + response.features[i].properties.field_7 + "</h5>";
                            }
                            if (response.features[i].properties.field_8 != undefined) {
                                infostr += "<small>Дата установки ламп</small><h5>" + response.features[i].properties.field_8 + "</h5>";
                            }
                            if (response.features[i].properties.field_9 != undefined) {
                                infostr += "<small>Номер опори</small><h5>" + response.features[i].properties.field_9 + "</h5>";
                            }
                            if (response.features[i].properties.agreement_number) {
                                infostr += "<small>Номер договору</small><h5>" + response.features[i].properties.agreement_number + "</h5>";
                            }
                            if (response.features[i].properties.agreement_date) {
                                infostr += "<small>Дата договору</small><h5>" + response.features[i].properties.agreement_date + "</h5>";
                            }
                            if (response.features[i].properties.sqr_rent) {
                                infostr += "<small>Площа оренди</small><h5>" + response.features[i].properties.sqr_rent + " (кв. м.)</h5>";
                            }
                            if (response.features[i].properties.reason) {
                                infostr += "<small>Підстава</small><h5>" + response.features[i].properties.reason + "</h5>";
                            }

                            if (response.features[i].properties.org_name) {
                                infostr += "<small>Балансоутримувач</small><h5>" + response.features[i].properties.org_name + "</h5>";
                            }
                            if (response.features[i].properties.region) {
                                infostr += "<small>Район</small><h5>" + response.features[i].properties.region + "</h5>";
                            }
                            if (response.features[i].properties.subject) {
                                infostr += "<small>Суб'єкт господарювання</small><h5>" + response.features[i].properties.subject + "</h5>";
                            }
                            if (response.features[i].properties.category_id >= 0) {
                                if (response.features[i].properties.id) {

                                    $('#id_ticketit').remove();
                                    $('#information').after("<input type='hidden' id = 'id_ticketit' name = 'id_ticketit' value='" + response.features[i].properties.id + "'>");
                                }
                                if (checkIp() == true) {
                                    if ($('body').is('#votingMessage')) {
                                        $('#votingMessage').remove();
                                    }
                                    infostr += votingResult();
                                } else {
                                    infostr += '<div class="votingAll btn-group btn-group-justified"><div class="btn-group"><input type="button" name="1" class="voting btn btn-default " value="Підтримую"></div><div class="btn-group"><input type="button" class="voting btn btn-default" value="Не підтримую" name="0"></div></div>';
                                }
                            }

                            if (response.features[i].properties.tech) {
                                infostr += "<small>Тех. облаштування</small><h5>" + response.features[i].properties.tech + "</h5>";
                            }
                            if (response.features[i].properties.type) {
                                infostr += "<small>Тип паркування</small>" + response.features[i].properties.type + "</h5>";
                            }
                            if (response.features[i].properties.zone) {
                                infostr += "<small>Зона</small><h5>" + response.features[i].properties.zone + "</h5>";
                            }
                            if (response.features[i].properties.payment_type) {
                                infostr += "<small>Вид оплати</small><h5>" + response.features[i].properties.payment_type + "</h5>";
                            }
                            if (response.features[i].properties.allsquare) {
                                infostr += "<small>Площа (кв. м.)</small><h5>" + response.features[i].properties.allsquare + "</h5>";
                            }
                            if (response.features[i].properties.cars) {
                                infostr += "<small>Машиномісць</small><h5>" + response.features[i].properties.cars + "</h5>";
                            }
                            if (response.features[i].properties.freesquare) {
                                infostr += "<small>Безоплатне паркування (кв. м.)</small><h5>" + response.features[i].properties.freesquare + "</h5>";
                            }

                            if (response.features[i].properties.mode) {
                                infostr += "<small>Режим роботи</small><h5>" + response.features[i].properties.mode + "</h5>";
                            }
                            if (response.features[i].properties.paysquare) {
                                infostr += "<small>Для паркування (кв. м.)</small><h5>" + response.features[i].properties.paysquare + "</h5>";
                            }
                            if (response.features[i].properties.privilege) {
                                infostr += "<small>Кількість пільгових машиномісць</small><h5>" + response.features[i].properties.privilege + "</h5>";
                            }
                            if (response.features[i].properties.price) {
                                infostr += "<small>Вартість</small><h5>" + response.features[i].properties.price + "</h5>";
                            }

                            if (response.features[i].properties.p_cost || response.features[i].properties.p_cost == 0) {
                                if (response.features[i].properties.p_cost == 0) {
                                    infostr += "<small>Надходження(грн.)</small><h5>Інформація не надана КПТС</h5>";
                                } else {
                                    infostr += "<small>Надходження (грн.)</small><h5>" + response.features[i].properties.p_cost + "</h5>";
                                }
                            }
                            if (response.features[i].properties.objectid) {
                                $("#orendadoc").attr('href', "/orendadoc/" + response.features[i].properties.objectid + "/new");
                            }
                            //       infostr += "<div class='rdown'><a href='javascript:void(0)'>СТВОРИТИ ЗАЯВКУ</a></div></div>";
                            infostr += "</div></div>";
//                             $('<li data-target="#carousel-example-generic" data-slide-to="'+count+'"></li>').appendTo('.carousel-indicators');
//                             count++;
                        }

                    });

                }

            });

            setTimeout(function () {
                if (flah) {
//                    $.ajax({
//                        type: 'get',
//                        url: '/app_dev.php/getphoto/' + temp_photo,
//                    }).then(function(response) {
//                        console.log(response);
//                        $("div.mdl-card__title").css("background-image","data:image/jpeg;base64," + response);
//                    });
//                    console.log(indic);
//$('.carousel-indicators > li').first().addClass('active');
                    $('ol.carousel-indicators').html(indic);
                    infocontainer.innerHTML = infostr;

                    //                $('.mdl-card__actions').html("<a class='mdl-button mdl-js-button mdl-js-ripple-effect' href=/app_dev.php/orendadoc/"+ objectid +"/new>СТВОРИТИ ЗАЯВКУ</a>");
                    //$('.mdl-card__supporting-text').height($(window).height() - $('.mdl-card__title').height() - $('.demo-card__title').height() - $('.mdl-card__actions').height());                    
                    $('.carousel').carousel();
                    $(".carousel").carousel("pause").removeData();
                    $(".carousel").carousel(0);
// $('.mdl-card__supporting-text').height($(window).height() - $('.mdl-card__title').height() - $('.demo-card__title').height() - $('.mdl-card__actions').height());                   
//                    $("<a class='left carousel-control' href='#carousel-example-generic' role='button' data-slide='prev'>" +
//    "<span class='glyphicon glyphicon-chevron-left' aria-hidden='true'></span>" +
//    "<span class='sr-only'>Previous</span>" +
//  "</a>" +
//  "<a class='right carousel-control' href='#carousel-example-generic' role='button' data-slide='next'>" +
//    "<span class='glyphicon glyphicon-chevron-right' aria-hidden='true'></span>" +
//   " <span class='sr-only'>Next</span>").insertAfter(infocontainer);
//                    if (!rightNav) {
//                        $("#rightSide").addClass("expanded");
//                        $("#rightSwitch").addClass("expanded");
//                        $("#rightblur").addClass("expanded")
                    $('.mdl-card__supporting-text img:not(:first)').each(function (i, elem) {
                        $(this).hide().wrap("<a href='" + this.src + "' data-toggle='lightbox' data-gallery='multiimages'></a>");
//                                            $(this).click(function (e) {
//                    e.preventDefault();
//                    $(this).ekkoLightbox();
//                });
                    });

//                    var wrp = "<a href='"+$('.mdl-card__supporting-text img').src+"'></a>";
//                    $('.mdl-card__supporting-text img').wrap(wrp);
                    if ($('.mdl-card__supporting-text img').filter(':first').attr("src") != null) {
                        var srcimg = 'url("' + $('.mdl-card__supporting-text img').filter(':first').attr('src') + '")';
                        $('.mdl-card__title').css("background-image", srcimg).show();

                        $('.mdl-card__title').wrap("<a href='" + $('.mdl-card__supporting-text img').filter(':first').attr('src') + "' data-toggle='lightbox' data-gallery='multiimages'></a>");
                        $('.mdl-card__supporting-text img').filter(':first').hide();
                    }

                    $('.demo-info').show();
                    windowResizeHandler();
                    $('#view-source').hide();
//                        rightNav = true;
//                    }
                } else {
                    //console.log("no" + infostr);
                    infocontainer.innerHTML = '&nbsp;';
//                    if (rightNav) {
//                        $("#rightSide").removeClass("expanded");
//                        $("#rightSwitch").removeClass("expanded");
//                        $("#rightblur").removeClass("expanded");
                    $('.demo-info').hide();
                    $('#view-source').show();
//                        rightNav = false;
//                    }
                }
            }, 300);
        });
//        $("#rightClose").on('click', function () {
//            $("#rightSide").removeClass("expanded");
//            rightNav = false;
//            $("#rightSwitch").removeClass("expanded");
//            $("#rightblur").removeClass("expanded");
//        });
        $('#search').bind("enterKey", function (e) {
            var searchval = $('#search').val();
//    console.log(searchval);
            $.ajax({
                url: '/search',
                type: 'POST',
                data: {searchstring: searchval},
                success: function (data) {
//            console.log(data.names);
                    var fitextent = [data[0], data[1], data[2], data[3]];
                    map.getView().fit(fitextent, map.getSize());

                    wmsSource15.updateParams({
                        CQL_FILTER: "id = " + data[4] // 10143
                    });
                    wmsLayer15.setVisible(true);

//            wmsSource6.updateParams({'LAYERS': 'kmda:kmda_l_street', 'VERSION': '1.1.1', 'TILED': 'true', 'FORMAT': 'image/png8', 'WIDTH': 768, 'HEIGHT': 396, 'CRS': 'EPSG:900913', 'STYLE': 'a_street_flash',//, CQL_FILTER:'koatuu=3520386800'
//                serverType: 'geoserver',
//                crossOrigin: '',
//                projection: projection,
//            });
//            map.render();
                },
                error: function () {
                    wmsLayer15.setVisible(false);
                }
            });
        });
        $('#search').keyup(function (e) {
            if (e.keyCode == 13) {
                $(this).trigger("enterKey");
            }
        });
        $('#search').autocomplete({
            source: '/autocomplete',
            minLength: 3,
            select: function (e, ui) {
                var value = ui.item.value;
                $.ajax({
                    url: '/search',
                    type: 'POST',
                    data: {searchstring: value},
                    success: function (data) {

                        var fitextent = [data[0], data[1], data[2], data[3]];
                        map.getView().fit(fitextent, map.getSize());

                        wmsSource15.updateParams({
                            CQL_FILTER: "id = " + data[4] // 10143
                        });
                        wmsLayer15.setVisible(true);
                    },
                    error: function () {

                    }
                });
            }
        });


    }, 300);
});

/*----Add measure (START)----*/
function addMeasure(map) {

    var source = new ol.source.Vector();
    var style = new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 255, 255, 0.4)',
        }),
        stroke: new ol.style.Stroke({
            color: '#09f',
            width: 3
        }),
        image: new ol.style.Circle({
            radius: 7,
            fill: new ol.style.Fill({
                color: '#ffcc33'
            })
        })
    })
    var vector = new ol.layer.Vector({
        source: source,
        style: style
    });

    /**
     * The measure tooltip element.
     * @type {Element}
     */
    var measureTooltipElement;

    /**
     * Overlay to show the measurement.
     * @type {ol.Overlay}
     */
    var measureTooltip;
    /**
     * Currently drawed feature
     * @type {ol.Feature}
     */

    var sketch;
    /**
     * Element for currently drawed feature
     * @type {Element}
     */
    var sketchElement;
    var typeSelect;
    /**
     * handle pointer move
     * @param {Event} evt
     */
    var wgs84Sphere = new ol.Sphere(6378137);

    map.addLayer(vector);
    $('#erase').on('mousedown', function(){
        $(this).addClass('active');

    });
    $('#erase').on('mouseup', function(){
        $('.measure').removeClass('active');
        $('.tooltip.tooltip-static').remove();
        map.removeInteraction(draw);
        source.clear();
    });

    $('.measure:not(#erase)').on('click', function (e) {

        if($(this).hasClass('active')){
            $(this).removeClass('active')

            $('.tooltip.tooltip-static').remove();
        }else{
            source.clear();
            $('.measure').removeClass('active')
            $('.tooltip.tooltip-static').remove();

            $(this).addClass('active')
            map.removeInteraction(draw);
        }
        if($(this).hasClass('active')){
            typeSelect = $(this).attr('id')

            addInteraction();
        }else{
            map.removeInteraction(draw);
            source.clear();
        }
    });

    createMeasureTooltip();
    var draw; // global so we can remove it later
    function addInteraction() {
        var type = (typeSelect == 'area' ? 'Polygon' : 'LineString');
        draw = new ol.interaction.Draw({
            source: source,
            type: /** @type {ol.geom.GeometryType} */ (type),
            style: new ol.style.Style({
                fill: new ol.style.Fill({
                    color: 'rgba(255, 255, 255, 0.4)'
                }),
                stroke: new ol.style.Stroke({
                    color: 'rgba(0, 0, 0, 0.7)',
                    lineDash: [10, 10],
                    width: 2
                }),
                image: new ol.style.Circle({
                    radius: 5,
                    stroke: new ol.style.Stroke({
                        color: 'rgba(0, 0, 0, 0.8)'
                    }),
                    fill: new ol.style.Fill({
                        color: 'rgba(255, 255, 255, 0.2)'
                    })
                })
            })
        });
        map.addInteraction(draw);
        var listener;
        draw.on('drawstart',
            function (evt) {
                sketch = evt.feature;
                var tooltipCoord = evt.coordinate;
                listener = sketch.getGeometry().on('change', function(evt) {
                    var geom = evt.target;
                    var output;
                    if (geom instanceof ol.geom.Polygon) {
                        output = formatArea(geom);
                        tooltipCoord = geom.getInteriorPoint().getCoordinates();
                    } else if (geom instanceof ol.geom.LineString) {
                        output = formatLength(geom);
                        tooltipCoord = geom.getLastCoordinate();
                    }
                    measureTooltipElement.innerHTML = output;
                    measureTooltip.setPosition(tooltipCoord);
                });
            }, this);
        draw.on('drawend',
            function() {
                measureTooltipElement.className = 'tooltip tooltip-static';
                measureTooltip.setOffset([0, -9]);
                // unset sketch
                sketch = null;
                // unset tooltip so that a new one can be created
                measureTooltipElement = null;
                createMeasureTooltip();
                ol.Observable.unByKey(listener);
            }, this);
    }

    /**
     * format length output
     * @param {ol.geom.LineString} line
     * @return {string}
     */

    var formatLength = function (line) {
        var length;
        var coordinates = line.getCoordinates();
        length = 0;
        var sourceProj = map.getView().getProjection();
        for (var i = 0, ii = coordinates.length - 1; i < ii; ++i) {
            var c1 = ol.proj.transform(coordinates[i], sourceProj, 'EPSG:4326');
            var c2 = ol.proj.transform(coordinates[i + 1], sourceProj, 'EPSG:4326');
            length += wgs84Sphere.haversineDistance(c1, c2);
        }
        var output;
        if (length > 100) {
            output = (Math.round(length / 1000 * 100) / 100) +
                ' ' + 'км';
        } else {
            output = (Math.round(length * 100) / 100) +
                ' ' + 'м';
        }
        return output;
    };

    /**
     * format length output
     * @param {ol.geom.Polygon} polygon
     * @return {string}
     */
    var formatArea = function (polygon) {
        var area;
        var sourceProj = map.getView().getProjection();
        var geom = /** @type {ol.geom.Polygon} */(polygon.clone().transform(
            sourceProj, 'EPSG:4326'));
        var coordinates = geom.getLinearRing(0).getCoordinates();
        area = Math.abs(wgs84Sphere.geodesicArea(coordinates));
        var output;
        if (area > 10000) {
            output = (Math.round(area / 1000000 * 100) / 100) +
                ' ' + 'км<sup>2</sup>';
        } else {
            output = (Math.round(area * 100) / 100) +
                ' ' + 'м<sup>2</sup>';
        }
        return output;
    };

    function createMeasureTooltip() {
        if (measureTooltipElement) {
            measureTooltipElement.parentNode.removeChild(measureTooltipElement);
        }
        measureTooltipElement = document.createElement('div');
        measureTooltipElement.className = 'tooltip tooltip-measure';
        measureTooltip = new ol.Overlay({
            element: measureTooltipElement,
            offset: [0, -15],
            positioning: 'bottom-center'
        });
        map.addOverlay(measureTooltip);
    }

    $('.measure').hover(function(){
       $(this).addClass('is-active');
    });
    $('.measure').mouseleave(function(){
        $(this).removeClass('is-active');
    });

    /*----Add measure (END)----*/

}