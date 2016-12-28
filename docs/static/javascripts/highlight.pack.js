/*! highlight.js v9.9.0 | BSD3 License | git.io/hljslicense */
!function(e){var t="object"==typeof window&&window||"object"==typeof self&&self;"undefined"!=typeof exports?e(exports):t&&(t.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return t.hljs}))}(function(e){function t(e){return e.replace(/[&<>]/gm,function(e){return _[e]})}function n(e){return e.nodeName.toLowerCase()}function r(e,t){var n=e&&e.exec(t);return n&&0===n.index}function a(e){return C.test(e)}function c(e){var t,n,r,c,i=e.className+" ";if(i+=e.parentNode?e.parentNode.className:"",n=k.exec(i))return w(n[1])?n[1]:"no-highlight";for(i=i.split(/\s+/),t=0,r=i.length;r>t;t++)if(c=i[t],a(c)||w(c))return c}function i(e,t){var n,r={};for(n in e)r[n]=e[n];if(t)for(n in t)r[n]=t[n];return r}function s(e){var t=[];return function r(e,a){for(var c=e.firstChild;c;c=c.nextSibling)3===c.nodeType?a+=c.nodeValue.length:1===c.nodeType&&(t.push({event:"start",offset:a,node:c}),a=r(c,a),n(c).match(/br|hr|img|input/)||t.push({event:"stop",offset:a,node:c}));return a}(e,0),t}function o(e,r,a){function c(){return e.length&&r.length?e[0].offset!==r[0].offset?e[0].offset<r[0].offset?e:r:"start"===r[0].event?e:r:e.length?e:r}function i(e){function r(e){return" "+e.nodeName+'="'+t(e.value)+'"'}l+="<"+n(e)+E.map.call(e.attributes,r).join("")+">"}function s(e){l+="</"+n(e)+">"}function o(e){("start"===e.event?i:s)(e.node)}for(var u=0,l="",f=[];e.length||r.length;){var b=c();if(l+=t(a.substring(u,b[0].offset)),u=b[0].offset,b===e){f.reverse().forEach(s);do o(b.splice(0,1)[0]),b=c();while(b===e&&b.length&&b[0].offset===u);f.reverse().forEach(i)}else"start"===b[0].event?f.push(b[0].node):f.pop(),o(b.splice(0,1)[0])}return l+t(a.substr(u))}function u(e){function t(e){return e&&e.source||e}function n(n,r){return new RegExp(t(n),"m"+(e.cI?"i":"")+(r?"g":""))}function r(a,c){if(!a.compiled){if(a.compiled=!0,a.k=a.k||a.bK,a.k){var s={},o=function(t,n){e.cI&&(n=n.toLowerCase()),n.split(" ").forEach(function(e){var n=e.split("|");s[n[0]]=[t,n[1]?Number(n[1]):1]})};"string"==typeof a.k?o("keyword",a.k):R(a.k).forEach(function(e){o(e,a.k[e])}),a.k=s}a.lR=n(a.l||/\w+/,!0),c&&(a.bK&&(a.b="\\b("+a.bK.split(" ").join("|")+")\\b"),a.b||(a.b=/\B|\b/),a.bR=n(a.b),a.e||a.eW||(a.e=/\B|\b/),a.e&&(a.eR=n(a.e)),a.tE=t(a.e)||"",a.eW&&c.tE&&(a.tE+=(a.e?"|":"")+c.tE)),a.i&&(a.iR=n(a.i)),null==a.r&&(a.r=1),a.c||(a.c=[]);var u=[];a.c.forEach(function(e){e.v?e.v.forEach(function(t){u.push(i(e,t))}):u.push("self"===e?a:e)}),a.c=u,a.c.forEach(function(e){r(e,a)}),a.starts&&r(a.starts,c);var l=a.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([a.tE,a.i]).map(t).filter(Boolean);a.t=l.length?n(l.join("|"),!0):{exec:function(){return null}}}}r(e)}function l(e,n,a,c){function i(e,t){var n,a;for(n=0,a=t.c.length;a>n;n++)if(r(t.c[n].bR,e))return t.c[n]}function s(e,t){if(r(e.eR,t)){for(;e.endsParent&&e.parent;)e=e.parent;return e}return e.eW?s(e.parent,t):void 0}function o(e,t){return!a&&r(t.iR,e)}function b(e,t){var n=v.cI?t[0].toLowerCase():t[0];return e.k.hasOwnProperty(n)&&e.k[n]}function g(e,t,n,r){var a=r?"":B.classPrefix,c='<span class="'+a,i=n?"":M;return c+=e+'">',c+t+i}function p(){var e,n,r,a;if(!R.k)return t(k);for(a="",n=0,R.lR.lastIndex=0,r=R.lR.exec(k);r;)a+=t(k.substring(n,r.index)),e=b(R,r),e?(L+=e[1],a+=g(e[0],t(r[0]))):a+=t(r[0]),n=R.lR.lastIndex,r=R.lR.exec(k);return a+t(k.substr(n))}function d(){var e="string"==typeof R.sL;if(e&&!x[R.sL])return t(k);var n=e?l(R.sL,k,!0,y[R.sL]):f(k,R.sL.length?R.sL:void 0);return R.r>0&&(L+=n.r),e&&(y[R.sL]=n.top),g(n.language,n.value,!1,!0)}function h(){C+=null!=R.sL?d():p(),k=""}function m(e){C+=e.cN?g(e.cN,"",!0):"",R=Object.create(e,{parent:{value:R}})}function N(e,t){if(k+=e,null==t)return h(),0;var n=i(t,R);if(n)return n.skip?k+=t:(n.eB&&(k+=t),h(),n.rB||n.eB||(k=t)),m(n,t),n.rB?0:t.length;var r=s(R,t);if(r){var a=R;a.skip?k+=t:(a.rE||a.eE||(k+=t),h(),a.eE&&(k=t));do R.cN&&(C+=M),R.skip||(L+=R.r),R=R.parent;while(R!==r.parent);return r.starts&&m(r.starts,""),a.rE?0:t.length}if(o(t,R))throw new Error('Illegal lexeme "'+t+'" for mode "'+(R.cN||"<unnamed>")+'"');return k+=t,t.length||1}var v=w(e);if(!v)throw new Error('Unknown language: "'+e+'"');u(v);var E,R=c||v,y={},C="";for(E=R;E!==v;E=E.parent)E.cN&&(C=g(E.cN,"",!0)+C);var k="",L=0;try{for(var _,I,T=0;;){if(R.t.lastIndex=T,_=R.t.exec(n),!_)break;I=N(n.substring(T,_.index),_[0]),T=_.index+I}for(N(n.substr(T)),E=R;E.parent;E=E.parent)E.cN&&(C+=M);return{r:L,value:C,language:e,top:R}}catch(z){if(z.message&&-1!==z.message.indexOf("Illegal"))return{r:0,value:t(n)};throw z}}function f(e,n){n=n||B.languages||R(x);var r={r:0,value:t(e)},a=r;return n.filter(w).forEach(function(t){var n=l(t,e,!1);n.language=t,n.r>a.r&&(a=n),n.r>r.r&&(a=r,r=n)}),a.language&&(r.second_best=a),r}function b(e){return B.tabReplace||B.useBR?e.replace(L,function(e,t){return B.useBR&&"\n"===e?"<br>":B.tabReplace?t.replace(/\t/g,B.tabReplace):void 0}):e}function g(e,t,n){var r=t?y[t]:n,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),-1===e.indexOf(r)&&a.push(r),a.join(" ").trim()}function p(e){var t,n,r,i,u,p=c(e);a(p)||(B.useBR?(t=document.createElementNS("http://www.w3.org/1999/xhtml","div"),t.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):t=e,u=t.textContent,r=p?l(p,u,!0):f(u),n=s(t),n.length&&(i=document.createElementNS("http://www.w3.org/1999/xhtml","div"),i.innerHTML=r.value,r.value=o(n,s(i),u)),r.value=b(r.value),e.innerHTML=r.value,e.className=g(e.className,p,r.language),e.result={language:r.language,re:r.r},r.second_best&&(e.second_best={language:r.second_best.language,re:r.second_best.r}))}function d(e){B=i(B,e)}function h(){if(!h.called){h.called=!0;var e=document.querySelectorAll("pre code");E.forEach.call(e,p)}}function m(){addEventListener("DOMContentLoaded",h,!1),addEventListener("load",h,!1)}function N(t,n){var r=x[t]=n(e);r.aliases&&r.aliases.forEach(function(e){y[e]=t})}function v(){return R(x)}function w(e){return e=(e||"").toLowerCase(),x[e]||x[y[e]]}var E=[],R=Object.keys,x={},y={},C=/^(no-?highlight|plain|text)$/i,k=/\blang(?:uage)?-([\w-]+)\b/i,L=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,M="</span>",B={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},_={"&":"&amp;","<":"&lt;",">":"&gt;"};return e.highlight=l,e.highlightAuto=f,e.fixMarkup=b,e.highlightBlock=p,e.configure=d,e.initHighlighting=h,e.initHighlightingOnLoad=m,e.registerLanguage=N,e.listLanguages=v,e.getLanguage=w,e.inherit=i,e.IR="[a-zA-Z]\\w*",e.UIR="[a-zA-Z_]\\w*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/},e.C=function(t,n,r){var a=e.inherit({cN:"comment",b:t,e:n,c:[]},r||{});return a.c.push(e.PWM),a.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",r:0}),a},e.CLCM=e.C("//","$"),e.CBCM=e.C("/\\*","\\*/"),e.HCM=e.C("#","$"),e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e.METHOD_GUARD={b:"\\.\\s*"+e.UIR,r:0},e.registerLanguage("bash",function(e){var t={cN:"variable",v:[{b:/\$[\w\d#@][\w\d_]*/},{b:/\$\{(.*?)}/}]},n={cN:"string",b:/"/,e:/"/,c:[e.BE,t,{cN:"variable",b:/\$\(/,e:/\)/,c:[e.BE]}]},r={cN:"string",b:/'/,e:/'/};return{aliases:["sh","zsh"],l:/-?[a-z\._]+/,k:{keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",_:"-ne -eq -lt -gt -f -d -e -s -l -a"},c:[{cN:"meta",b:/^#![^\n]+sh\s*$/,r:10},{cN:"function",b:/\w[\w\d_]*\s*\(\s*\)\s*\{/,rB:!0,c:[e.inherit(e.TM,{b:/\w[\w\d_]*/})],r:0},e.HCM,n,r,t]}}),e.registerLanguage("go",function(e){var t={keyword:"break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune",literal:"true false iota nil",built_in:"append cap close complex copy imag len make new panic print println real recover delete"};return{aliases:["golang"],k:t,i:"</",c:[e.CLCM,e.CBCM,{cN:"string",v:[e.QSM,{b:"'",e:"[^\\\\]'"},{b:"`",e:"`"}]},{cN:"number",v:[{b:e.CNR+"[dflsi]",r:1},e.CNM]},{b:/:=/},{cN:"function",bK:"func",e:/\s*\{/,eE:!0,c:[e.TM,{cN:"params",b:/\(/,e:/\)/,k:t,i:/["']/}]}]}}),e.registerLanguage("hcl",function(e){return BACKTICK_STRING={cN:"string",b:/[`"]/,e:/[`"]/},KEYWORD={cN:"keyword",b:/[A-Za-z\_\.\-]+\s*/},LITERAL={cN:"literal",b:/(true|false|null)/},SUBST_CONTAINS=[e.CNM,LITERAL,BACKTICK_STRING],{aliases:["tf"],c:[e.CLCM,e.CBCM,e.HCM,e.CNM,KEYWORD,LITERAL,{cN:"string",c:[{cN:"subst",b:/\$\{/,e:/\}/,c:SUBST_CONTAINS},{cN:"subst",b:/\{\{/,e:/\}\}/,c:SUBST_CONTAINS}],v:[{b:/"/,e:/"/},{b:"<<EOF",e:"EOF"}]}]}}),e.registerLanguage("ruby",function(e){var t="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",n={keyword:"and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",literal:"true false nil"},r={cN:"doctag",b:"@[A-Za-z]+"},a={b:"#<",e:">"},c=[e.C("#","$",{c:[r]}),e.C("^\\=begin","^\\=end",{c:[r],r:10}),e.C("^__END__","\\n$")],i={cN:"subst",b:"#\\{",e:"}",k:n},s={cN:"string",c:[e.BE,i],v:[{b:/'/,e:/'/},{b:/"/,e:/"/},{b:/`/,e:/`/},{b:"%[qQwWx]?\\(",e:"\\)"},{b:"%[qQwWx]?\\[",e:"\\]"},{b:"%[qQwWx]?{",e:"}"},{b:"%[qQwWx]?<",e:">"},{b:"%[qQwWx]?/",e:"/"},{b:"%[qQwWx]?%",e:"%"},{b:"%[qQwWx]?-",e:"-"},{b:"%[qQwWx]?\\|",e:"\\|"},{b:/\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/},{b:/<<(-?)\w+$/,e:/^\s*\w+$/}]},o={cN:"params",b:"\\(",e:"\\)",endsParent:!0,k:n},u=[s,a,{cN:"class",bK:"class module",e:"$|;",i:/=/,c:[e.inherit(e.TM,{b:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"}),{b:"<\\s*",c:[{b:"("+e.IR+"::)?"+e.IR}]}].concat(c)},{cN:"function",bK:"def",e:"$|;",c:[e.inherit(e.TM,{b:t}),o].concat(c)},{b:e.IR+"::"},{cN:"symbol",b:e.UIR+"(\\!|\\?)?:",r:0},{cN:"symbol",b:":(?!\\s)",c:[s,{b:t}],r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{b:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{cN:"params",b:/\|/,e:/\|/,k:n},{b:"("+e.RSR+"|unless)\\s*",c:[a,{cN:"regexp",c:[e.BE,i],i:/\n/,v:[{b:"/",e:"/[a-z]*"},{b:"%r{",e:"}[a-z]*"},{b:"%r\\(",e:"\\)[a-z]*"},{b:"%r!",e:"![a-z]*"},{b:"%r\\[",e:"\\][a-z]*"}]}].concat(c),r:0}].concat(c);i.c=u,o.c=u;var l="[>?]>",f="[\\w#]+\\(\\w+\\):\\d+:\\d+>",b="(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>",g=[{b:/^\s*=>/,starts:{e:"$",c:u}},{cN:"meta",b:"^("+l+"|"+f+"|"+b+")",starts:{e:"$",c:u}}];return{aliases:["rb","gemspec","podspec","thor","irb"],k:n,i:/\/\*/,c:c.concat(g).concat(u)}}),e.registerLanguage("yaml",function(e){var t={literal:"{ } true false yes no Yes No True False null"},n="^[ \\-]*",r="[a-zA-Z_][\\w\\-]*",a={cN:"attr",v:[{b:n+r+":"},{b:n+'"'+r+'":'},{b:n+"'"+r+"':"}]},c={cN:"template-variable",v:[{b:"{{",e:"}}"},{b:"%{",e:"}"}]},i={cN:"string",r:0,v:[{b:/'/,e:/'/},{b:/"/,e:/"/}],c:[e.BE,c]};return{cI:!0,aliases:["yml","YAML","yaml"],c:[a,{cN:"meta",b:"^---s*$",r:10},{cN:"string",b:"[\\|>] *$",rE:!0,c:i.c,e:a.v[0].b},{b:"<%[%=-]?",e:"[%-]?%>",sL:"ruby",eB:!0,eE:!0,r:0},{cN:"type",b:"!!"+e.UIR},{cN:"meta",b:"&"+e.UIR+"$"},{cN:"meta",b:"\\*"+e.UIR+"$"},{cN:"bullet",b:"^ *-",r:0},i,e.HCM,e.CNM],k:t}}),e});