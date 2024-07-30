var Ny=Object.defineProperty;var $c=r=>{throw TypeError(r)};var Ay=(r,n,t)=>n in r?Ny(r,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[n]=t;var Te=(r,n,t)=>Ay(r,typeof n!="symbol"?n+"":n,t),xy=(r,n,t)=>n.has(r)||$c("Cannot "+t);var Mc=(r,n,t)=>n.has(r)?$c("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(r):n.set(r,t);var ui=(r,n,t)=>(xy(r,n,"access private method"),t);import{s as xe,q as sn,l as Ee,d as K,I as Uc,t as $a,j as Ma,o as Ua,n as Ze,a2 as yi,E as nt,v as Ff,e as Re,f as Oe,g as Ve,ad as xs,F as tt,G as rt,H as it,k as Dn,m as Nt,b as qa,c as ja,ah as Fy,ai as Cy,ak as qc,K as Ry}from"./scheduler.Cv5B47c7.js";import{S as Le,i as Be,t as ee,g as At,b as oe,e as xt,c as Yt,a as mr,m as zt,d as Qt}from"./index.vZbmHwdQ.js";import{b as Oy}from"./control.BR53gZF5.js";function ct(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function Cf(r,n){const t={},o={},s={$$scope:1};let a=r.length;for(;a--;){const l=r[a],f=n[a];if(f){for(const p in l)p in f||(o[p]=1);for(const p in f)s[p]||(t[p]=f[p],s[p]=1);r[a]=f}else for(const p in l)s[p]=1}for(const l in o)l in t||(t[l]=void 0);return t}function P_(r){return typeof r=="object"&&r!==null?r:{}}function jc(r){let n,t,o;var s=r[1][r[0].type];function a(l,f){return{props:{token:l[0],options:l[2],renderers:l[1],$$slots:{default:[Ly]},$$scope:{ctx:l}}}}return s&&(n=Uc(s,a(r))),{c(){n&&Yt(n.$$.fragment),t=sn()},l(l){n&&mr(n.$$.fragment,l),t=sn()},m(l,f){n&&zt(n,l,f),Ee(l,t,f),o=!0},p(l,f){if(f&3&&s!==(s=l[1][l[0].type])){if(n){At();const p=n;oe(p.$$.fragment,1,0,()=>{Qt(p,1)}),xt()}s?(n=Uc(s,a(l)),Yt(n.$$.fragment),ee(n.$$.fragment,1),zt(n,t.parentNode,t)):n=null}else if(s){const p={};f&1&&(p.token=l[0]),f&4&&(p.options=l[2]),f&2&&(p.renderers=l[1]),f&15&&(p.$$scope={dirty:f,ctx:l}),n.$set(p)}},i(l){o||(n&&ee(n.$$.fragment,l),o=!0)},o(l){n&&oe(n.$$.fragment,l),o=!1},d(l){l&&K(t),n&&Qt(n,l)}}}function ky(r){let n=r[0].raw+"",t;return{c(){t=$a(n)},l(o){t=Ma(o,n)},m(o,s){Ee(o,t,s)},p(o,s){s&1&&n!==(n=o[0].raw+"")&&Ua(t,n)},i:Ze,o:Ze,d(o){o&&K(t)}}}function Py(r){let n,t;return n=new Us({props:{tokens:r[0].tokens,renderers:r[1],options:r[2]}}),{c(){Yt(n.$$.fragment)},l(o){mr(n.$$.fragment,o)},m(o,s){zt(n,o,s),t=!0},p(o,s){const a={};s&1&&(a.tokens=o[0].tokens),s&2&&(a.renderers=o[1]),s&4&&(a.options=o[2]),n.$set(a)},i(o){t||(ee(n.$$.fragment,o),t=!0)},o(o){oe(n.$$.fragment,o),t=!1},d(o){Qt(n,o)}}}function Ly(r){let n,t,o,s;const a=[Py,ky],l=[];function f(p,m){return"tokens"in p[0]&&p[0].tokens?0:1}return n=f(r),t=l[n]=a[n](r),{c(){t.c(),o=sn()},l(p){t.l(p),o=sn()},m(p,m){l[n].m(p,m),Ee(p,o,m),s=!0},p(p,m){let D=n;n=f(p),n===D?l[n].p(p,m):(At(),oe(l[D],1,1,()=>{l[D]=null}),xt(),t=l[n],t?t.p(p,m):(t=l[n]=a[n](p),t.c()),ee(t,1),t.m(o.parentNode,o))},i(p){s||(ee(t),s=!0)},o(p){oe(t),s=!1},d(p){p&&K(o),l[n].d(p)}}}function By(r){let n,t,o=r[1][r[0].type]&&jc(r);return{c(){o&&o.c(),n=sn()},l(s){o&&o.l(s),n=sn()},m(s,a){o&&o.m(s,a),Ee(s,n,a),t=!0},p(s,[a]){s[1][s[0].type]?o?(o.p(s,a),a&3&&ee(o,1)):(o=jc(s),o.c(),ee(o,1),o.m(n.parentNode,n)):o&&(At(),oe(o,1,1,()=>{o=null}),xt())},i(s){t||(ee(o),t=!0)},o(s){oe(o),t=!1},d(s){s&&K(n),o&&o.d(s)}}}function $y(r,n,t){let{token:o}=n,{renderers:s}=n,{options:a}=n;return r.$$set=l=>{"token"in l&&t(0,o=l.token),"renderers"in l&&t(1,s=l.renderers),"options"in l&&t(2,a=l.options)},[o,s,a]}class Rf extends Le{constructor(n){super(),Be(this,n,$y,By,xe,{token:0,renderers:1,options:2})}}function Gc(r,n,t){const o=r.slice();return o[3]=n[t],o}function Vc(r){let n,t,o=ct(r[0]),s=[];for(let l=0;l<o.length;l+=1)s[l]=Hc(Gc(r,o,l));const a=l=>oe(s[l],1,1,()=>{s[l]=null});return{c(){for(let l=0;l<s.length;l+=1)s[l].c();n=sn()},l(l){for(let f=0;f<s.length;f+=1)s[f].l(l);n=sn()},m(l,f){for(let p=0;p<s.length;p+=1)s[p]&&s[p].m(l,f);Ee(l,n,f),t=!0},p(l,f){if(f&7){o=ct(l[0]);let p;for(p=0;p<o.length;p+=1){const m=Gc(l,o,p);s[p]?(s[p].p(m,f),ee(s[p],1)):(s[p]=Hc(m),s[p].c(),ee(s[p],1),s[p].m(n.parentNode,n))}for(At(),p=o.length;p<s.length;p+=1)a(p);xt()}},i(l){if(!t){for(let f=0;f<o.length;f+=1)ee(s[f]);t=!0}},o(l){s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)oe(s[f]);t=!1},d(l){l&&K(n),yi(s,l)}}}function Hc(r){let n,t;return n=new Rf({props:{token:r[3],renderers:r[1],options:r[2]}}),{c(){Yt(n.$$.fragment)},l(o){mr(n.$$.fragment,o)},m(o,s){zt(n,o,s),t=!0},p(o,s){const a={};s&1&&(a.token=o[3]),s&2&&(a.renderers=o[1]),s&4&&(a.options=o[2]),n.$set(a)},i(o){t||(ee(n.$$.fragment,o),t=!0)},o(o){oe(n.$$.fragment,o),t=!1},d(o){Qt(n,o)}}}function My(r){let n,t,o=r[0]&&Vc(r);return{c(){o&&o.c(),n=sn()},l(s){o&&o.l(s),n=sn()},m(s,a){o&&o.m(s,a),Ee(s,n,a),t=!0},p(s,[a]){s[0]?o?(o.p(s,a),a&1&&ee(o,1)):(o=Vc(s),o.c(),ee(o,1),o.m(n.parentNode,n)):o&&(At(),oe(o,1,1,()=>{o=null}),xt())},i(s){t||(ee(o),t=!0)},o(s){oe(o),t=!1},d(s){s&&K(n),o&&o.d(s)}}}function Uy(r,n,t){let{tokens:o}=n,{renderers:s}=n,{options:a}=n;return r.$$set=l=>{"tokens"in l&&t(0,o=l.tokens),"renderers"in l&&t(1,s=l.renderers),"options"in l&&t(2,a=l.options)},[o,s,a]}class Us extends Le{constructor(n){super(),Be(this,n,Uy,My,xe,{tokens:0,renderers:1,options:2})}}function Ei(...r){return`/${r.flatMap(n=>n.split("/")).filter(n=>!!n).join("/")}`}function bi(r){return r.startsWith("/")||r.startsWith("#")}function Of(r,n){return n.slug(r).replace(/--+/g,"-")}function ya(r){let n,t;const o=r[5].default,s=nt(o,r,r[4],null);let a=[{id:r[1]}],l={};for(let f=0;f<a.length;f+=1)l=Ff(l,a[f]);return{c(){n=Re(`h${r[0].depth}`),s&&s.c(),this.h()},l(f){n=Oe(f,(`h${r[0].depth}`||"null").toUpperCase(),{id:!0});var p=Ve(n);s&&s.l(p),p.forEach(K),this.h()},h(){xs(`h${r[0].depth}`)(n,l)},m(f,p){Ee(f,n,p),s&&s.m(n,null),t=!0},p(f,p){s&&s.p&&(!t||p&16)&&tt(s,o,f,f[4],t?it(o,f[4],p,null):rt(f[4]),null),xs(`h${f[0].depth}`)(n,l=Cf(a,[(!t||p&2)&&{id:f[1]}]))},i(f){t||(ee(s,f),t=!0)},o(f){oe(s,f),t=!1},d(f){f&&K(n),s&&s.d(f)}}}function qy(r){let n=`h${r[0].depth}`,t,o,s=`h${r[0].depth}`&&ya(r);return{c(){s&&s.c(),t=sn()},l(a){s&&s.l(a),t=sn()},m(a,l){s&&s.m(a,l),Ee(a,t,l),o=!0},p(a,[l]){`h${a[0].depth}`?n?xe(n,`h${a[0].depth}`)?(s.d(1),s=ya(a),n=`h${a[0].depth}`,s.c(),s.m(t.parentNode,t)):s.p(a,l):(s=ya(a),n=`h${a[0].depth}`,s.c(),s.m(t.parentNode,t)):n&&(s.d(1),s=null,n=`h${a[0].depth}`)},i(a){o||(ee(s,a),o=!0)},o(a){oe(s,a),o=!1},d(a){a&&K(t),s&&s.d(a)}}}function jy(r,n,t){let{$$slots:o={},$$scope:s}=n,{token:a}=n,{options:l}=n;const f=void 0;let p;return r.$$set=m=>{"token"in m&&t(0,a=m.token),"options"in m&&t(2,l=m.options),"$$scope"in m&&t(4,s=m.$$scope)},r.$$.update=()=>{r.$$.dirty&5&&t(1,p=Of(a.text,l.slugger))},[a,p,l,f,s,o]}class Gy extends Le{constructor(n){super(),Be(this,n,jy,qy,xe,{token:0,options:2,renderers:3})}get renderers(){return this.$$.ctx[3]}}function Vy(r){let n,t;const o=r[4].default,s=nt(o,r,r[3],null);return{c(){n=Re("blockquote"),s&&s.c()},l(a){n=Oe(a,"BLOCKQUOTE",{});var l=Ve(n);s&&s.l(l),l.forEach(K)},m(a,l){Ee(a,n,l),s&&s.m(n,null),t=!0},p(a,[l]){s&&s.p&&(!t||l&8)&&tt(s,o,a,a[3],t?it(o,a[3],l,null):rt(a[3]),null)},i(a){t||(ee(s,a),t=!0)},o(a){oe(s,a),t=!1},d(a){a&&K(n),s&&s.d(a)}}}function Hy(r,n,t){let{$$slots:o={},$$scope:s}=n;const a=void 0,l=void 0,f=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,s=p.$$scope)},[a,l,f,s,o]}class Wy extends Le{constructor(n){super(),Be(this,n,Hy,Vy,xe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Wc(r,n,t){const o=r.slice();return o[4]=n[t],o}function Yc(r){let n,t;return n=new Rf({props:{token:{...r[4]},options:r[1],renderers:r[2]}}),{c(){Yt(n.$$.fragment)},l(o){mr(n.$$.fragment,o)},m(o,s){zt(n,o,s),t=!0},p(o,s){const a={};s&1&&(a.token={...o[4]}),s&2&&(a.options=o[1]),s&4&&(a.renderers=o[2]),n.$set(a)},i(o){t||(ee(n.$$.fragment,o),t=!0)},o(o){oe(n.$$.fragment,o),t=!1},d(o){Qt(n,o)}}}function Ea(r){let n,t,o,s=ct(r[0].items),a=[];for(let m=0;m<s.length;m+=1)a[m]=Yc(Wc(r,s,m));const l=m=>oe(a[m],1,1,()=>{a[m]=null});let f=[{start:t=r[0].start||1}],p={};for(let m=0;m<f.length;m+=1)p=Ff(p,f[m]);return{c(){n=Re(r[3]);for(let m=0;m<a.length;m+=1)a[m].c();this.h()},l(m){n=Oe(m,(r[3]||"null").toUpperCase(),{start:!0});var D=Ve(n);for(let y=0;y<a.length;y+=1)a[y].l(D);D.forEach(K),this.h()},h(){xs(r[3])(n,p)},m(m,D){Ee(m,n,D);for(let y=0;y<a.length;y+=1)a[y]&&a[y].m(n,null);o=!0},p(m,D){if(D&7){s=ct(m[0].items);let y;for(y=0;y<s.length;y+=1){const A=Wc(m,s,y);a[y]?(a[y].p(A,D),ee(a[y],1)):(a[y]=Yc(A),a[y].c(),ee(a[y],1),a[y].m(n,null))}for(At(),y=s.length;y<a.length;y+=1)l(y);xt()}xs(m[3])(n,p=Cf(f,[(!o||D&1&&t!==(t=m[0].start||1))&&{start:t}]))},i(m){if(!o){for(let D=0;D<s.length;D+=1)ee(a[D]);o=!0}},o(m){a=a.filter(Boolean);for(let D=0;D<a.length;D+=1)oe(a[D]);o=!1},d(m){m&&K(n),yi(a,m)}}}function Yy(r){let n=r[3],t,o=r[3]&&Ea(r);return{c(){o&&o.c(),t=sn()},l(s){o&&o.l(s),t=sn()},m(s,a){o&&o.m(s,a),Ee(s,t,a)},p(s,[a]){s[3]?n?xe(n,s[3])?(o.d(1),o=Ea(s),n=s[3],o.c(),o.m(t.parentNode,t)):o.p(s,a):(o=Ea(s),n=s[3],o.c(),o.m(t.parentNode,t)):n&&(o.d(1),o=null,n=s[3])},i:Ze,o(s){oe(o,s)},d(s){s&&K(t),o&&o.d(s)}}}function zy(r,n,t){let{token:o}=n,{options:s}=n,{renderers:a}=n,l;return r.$$set=f=>{"token"in f&&t(0,o=f.token),"options"in f&&t(1,s=f.options),"renderers"in f&&t(2,a=f.renderers)},r.$$.update=()=>{r.$$.dirty&1&&t(3,l=o.ordered?"ol":"ul")},[o,s,a,l]}class Qy extends Le{constructor(n){super(),Be(this,n,zy,Yy,xe,{token:0,options:1,renderers:2})}}function Ky(r){let n,t;const o=r[4].default,s=nt(o,r,r[3],null);return{c(){n=Re("li"),s&&s.c()},l(a){n=Oe(a,"LI",{});var l=Ve(n);s&&s.l(l),l.forEach(K)},m(a,l){Ee(a,n,l),s&&s.m(n,null),t=!0},p(a,[l]){s&&s.p&&(!t||l&8)&&tt(s,o,a,a[3],t?it(o,a[3],l,null):rt(a[3]),null)},i(a){t||(ee(s,a),t=!0)},o(a){oe(s,a),t=!1},d(a){a&&K(n),s&&s.d(a)}}}function Jy(r,n,t){let{$$slots:o={},$$scope:s}=n;const a=void 0,l=void 0,f=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,s=p.$$scope)},[a,l,f,s,o]}class Xy extends Le{constructor(n){super(),Be(this,n,Jy,Ky,xe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Zy(r){let n;return{c(){n=Re("br")},l(t){n=Oe(t,"BR",{})},m(t,o){Ee(t,n,o)},p:Ze,i:Ze,o:Ze,d(t){t&&K(n)}}}function eE(r,n,t){return[void 0,void 0,void 0]}class nE extends Le{constructor(n){super(),Be(this,n,eE,Zy,xe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function tE(r){let n,t,o=r[0].text+"",s,a;return{c(){n=Re("pre"),t=Re("code"),s=$a(o),this.h()},l(l){n=Oe(l,"PRE",{});var f=Ve(n);t=Oe(f,"CODE",{class:!0});var p=Ve(t);s=Ma(p,o),p.forEach(K),f.forEach(K),this.h()},h(){Dn(t,"class",a=`lang-${r[0].lang}`)},m(l,f){Ee(l,n,f),Nt(n,t),Nt(t,s)},p(l,[f]){f&1&&o!==(o=l[0].text+"")&&Ua(s,o),f&1&&a!==(a=`lang-${l[0].lang}`)&&Dn(t,"class",a)},i:Ze,o:Ze,d(l){l&&K(n)}}}function rE(r,n,t){let{token:o}=n;const s=void 0,a=void 0;return r.$$set=l=>{"token"in l&&t(0,o=l.token)},[o,s,a]}class iE extends Le{constructor(n){super(),Be(this,n,rE,tE,xe,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function sE(r){let n,t=r[0].raw.slice(1,r[0].raw.length-1)+"",o;return{c(){n=Re("code"),o=$a(t)},l(s){n=Oe(s,"CODE",{});var a=Ve(n);o=Ma(a,t),a.forEach(K)},m(s,a){Ee(s,n,a),Nt(n,o)},p(s,[a]){a&1&&t!==(t=s[0].raw.slice(1,s[0].raw.length-1)+"")&&Ua(o,t)},i:Ze,o:Ze,d(s){s&&K(n)}}}function oE(r,n,t){let{token:o}=n;const s=void 0,a=void 0;return r.$$set=l=>{"token"in l&&t(0,o=l.token)},[o,s,a]}class aE extends Le{constructor(n){super(),Be(this,n,oE,sE,xe,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function zc(r,n,t){const o=r.slice();return o[3]=n[t],o}function Qc(r,n,t){const o=r.slice();return o[6]=n[t],o}function Kc(r,n,t){const o=r.slice();return o[9]=n[t],o}function Jc(r){let n,t,o,s;return t=new Us({props:{tokens:r[9].tokens,options:r[1],renderers:r[2]}}),{c(){n=Re("th"),Yt(t.$$.fragment),o=qa(),this.h()},l(a){n=Oe(a,"TH",{scope:!0});var l=Ve(n);mr(t.$$.fragment,l),o=ja(l),l.forEach(K),this.h()},h(){Dn(n,"scope","col")},m(a,l){Ee(a,n,l),zt(t,n,null),Nt(n,o),s=!0},p(a,l){const f={};l&1&&(f.tokens=a[9].tokens),l&2&&(f.options=a[1]),l&4&&(f.renderers=a[2]),t.$set(f)},i(a){s||(ee(t.$$.fragment,a),s=!0)},o(a){oe(t.$$.fragment,a),s=!1},d(a){a&&K(n),Qt(t)}}}function Xc(r){let n,t,o;return t=new Us({props:{tokens:r[6].tokens,options:r[1],renderers:r[2]}}),{c(){n=Re("td"),Yt(t.$$.fragment)},l(s){n=Oe(s,"TD",{});var a=Ve(n);mr(t.$$.fragment,a),a.forEach(K)},m(s,a){Ee(s,n,a),zt(t,n,null),o=!0},p(s,a){const l={};a&1&&(l.tokens=s[6].tokens),a&2&&(l.options=s[1]),a&4&&(l.renderers=s[2]),t.$set(l)},i(s){o||(ee(t.$$.fragment,s),o=!0)},o(s){oe(t.$$.fragment,s),o=!1},d(s){s&&K(n),Qt(t)}}}function Zc(r){let n,t,o,s=ct(r[3]),a=[];for(let f=0;f<s.length;f+=1)a[f]=Xc(Qc(r,s,f));const l=f=>oe(a[f],1,1,()=>{a[f]=null});return{c(){n=Re("tr");for(let f=0;f<a.length;f+=1)a[f].c();t=qa()},l(f){n=Oe(f,"TR",{});var p=Ve(n);for(let m=0;m<a.length;m+=1)a[m].l(p);t=ja(p),p.forEach(K)},m(f,p){Ee(f,n,p);for(let m=0;m<a.length;m+=1)a[m]&&a[m].m(n,null);Nt(n,t),o=!0},p(f,p){if(p&7){s=ct(f[3]);let m;for(m=0;m<s.length;m+=1){const D=Qc(f,s,m);a[m]?(a[m].p(D,p),ee(a[m],1)):(a[m]=Xc(D),a[m].c(),ee(a[m],1),a[m].m(n,t))}for(At(),m=s.length;m<a.length;m+=1)l(m);xt()}},i(f){if(!o){for(let p=0;p<s.length;p+=1)ee(a[p]);o=!0}},o(f){a=a.filter(Boolean);for(let p=0;p<a.length;p+=1)oe(a[p]);o=!1},d(f){f&&K(n),yi(a,f)}}}function uE(r){let n,t,o,s,a,l,f=ct(r[0].header),p=[];for(let S=0;S<f.length;S+=1)p[S]=Jc(Kc(r,f,S));const m=S=>oe(p[S],1,1,()=>{p[S]=null});let D=ct(r[0].rows),y=[];for(let S=0;S<D.length;S+=1)y[S]=Zc(zc(r,D,S));const A=S=>oe(y[S],1,1,()=>{y[S]=null});return{c(){n=Re("table"),t=Re("thead"),o=Re("tr");for(let S=0;S<p.length;S+=1)p[S].c();s=qa(),a=Re("tbody");for(let S=0;S<y.length;S+=1)y[S].c()},l(S){n=Oe(S,"TABLE",{});var R=Ve(n);t=Oe(R,"THEAD",{});var L=Ve(t);o=Oe(L,"TR",{});var H=Ve(o);for(let we=0;we<p.length;we+=1)p[we].l(H);H.forEach(K),L.forEach(K),s=ja(R),a=Oe(R,"TBODY",{});var ce=Ve(a);for(let we=0;we<y.length;we+=1)y[we].l(ce);ce.forEach(K),R.forEach(K)},m(S,R){Ee(S,n,R),Nt(n,t),Nt(t,o);for(let L=0;L<p.length;L+=1)p[L]&&p[L].m(o,null);Nt(n,s),Nt(n,a);for(let L=0;L<y.length;L+=1)y[L]&&y[L].m(a,null);l=!0},p(S,[R]){if(R&7){f=ct(S[0].header);let L;for(L=0;L<f.length;L+=1){const H=Kc(S,f,L);p[L]?(p[L].p(H,R),ee(p[L],1)):(p[L]=Jc(H),p[L].c(),ee(p[L],1),p[L].m(o,null))}for(At(),L=f.length;L<p.length;L+=1)m(L);xt()}if(R&7){D=ct(S[0].rows);let L;for(L=0;L<D.length;L+=1){const H=zc(S,D,L);y[L]?(y[L].p(H,R),ee(y[L],1)):(y[L]=Zc(H),y[L].c(),ee(y[L],1),y[L].m(a,null))}for(At(),L=D.length;L<y.length;L+=1)A(L);xt()}},i(S){if(!l){for(let R=0;R<f.length;R+=1)ee(p[R]);for(let R=0;R<D.length;R+=1)ee(y[R]);l=!0}},o(S){p=p.filter(Boolean);for(let R=0;R<p.length;R+=1)oe(p[R]);y=y.filter(Boolean);for(let R=0;R<y.length;R+=1)oe(y[R]);l=!1},d(S){S&&K(n),yi(p,S),yi(y,S)}}}function lE(r,n,t){let{token:o}=n,{options:s}=n,{renderers:a}=n;return r.$$set=l=>{"token"in l&&t(0,o=l.token),"options"in l&&t(1,s=l.options),"renderers"in l&&t(2,a=l.renderers)},[o,s,a]}class cE extends Le{constructor(n){super(),Be(this,n,lE,uE,xe,{token:0,options:1,renderers:2})}}function fE(r){let n,t=r[0].text+"",o;return{c(){n=new Fy(!1),o=sn(),this.h()},l(s){n=Cy(s,!1),o=sn(),this.h()},h(){n.a=o},m(s,a){n.m(t,s,a),Ee(s,o,a)},p(s,[a]){a&1&&t!==(t=s[0].text+"")&&n.p(t)},i:Ze,o:Ze,d(s){s&&(K(o),n.d())}}}function pE(r,n,t){let{token:o}=n;const s=void 0,a=void 0;return r.$$set=l=>{"token"in l&&t(0,o=l.token)},[o,s,a]}class hE extends Le{constructor(n){super(),Be(this,n,pE,fE,xe,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function dE(r){let n,t;const o=r[4].default,s=nt(o,r,r[3],null);return{c(){n=Re("p"),s&&s.c()},l(a){n=Oe(a,"P",{});var l=Ve(n);s&&s.l(l),l.forEach(K)},m(a,l){Ee(a,n,l),s&&s.m(n,null),t=!0},p(a,[l]){s&&s.p&&(!t||l&8)&&tt(s,o,a,a[3],t?it(o,a[3],l,null):rt(a[3]),null)},i(a){t||(ee(s,a),t=!0)},o(a){oe(s,a),t=!1},d(a){a&&K(n),s&&s.d(a)}}}function gE(r,n,t){let{$$slots:o={},$$scope:s}=n;const a=void 0,l=void 0,f=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,s=p.$$scope)},[a,l,f,s,o]}class mE extends Le{constructor(n){super(),Be(this,n,gE,dE,xe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function DE(r){let n,t,o,s;const a=r[4].default,l=nt(a,r,r[3],null);return{c(){n=Re("a"),l&&l.c(),this.h()},l(f){n=Oe(f,"A",{href:!0,title:!0});var p=Ve(n);l&&l.l(p),p.forEach(K),this.h()},h(){Dn(n,"href",t=bi(r[0].href)?Ei(r[1].baseUrl,r[0].href):r[0].href),Dn(n,"title",o=r[0].title)},m(f,p){Ee(f,n,p),l&&l.m(n,null),s=!0},p(f,[p]){l&&l.p&&(!s||p&8)&&tt(l,a,f,f[3],s?it(a,f[3],p,null):rt(f[3]),null),(!s||p&3&&t!==(t=bi(f[0].href)?Ei(f[1].baseUrl,f[0].href):f[0].href))&&Dn(n,"href",t),(!s||p&1&&o!==(o=f[0].title))&&Dn(n,"title",o)},i(f){s||(ee(l,f),s=!0)},o(f){oe(l,f),s=!1},d(f){f&&K(n),l&&l.d(f)}}}function vE(r,n,t){let{$$slots:o={},$$scope:s}=n,{token:a}=n,{options:l}=n;const f=void 0;return r.$$set=p=>{"token"in p&&t(0,a=p.token),"options"in p&&t(1,l=p.options),"$$scope"in p&&t(3,s=p.$$scope)},[a,l,f,s,o]}class yE extends Le{constructor(n){super(),Be(this,n,vE,DE,xe,{token:0,options:1,renderers:2})}get renderers(){return this.$$.ctx[2]}}function EE(r){let n;const t=r[4].default,o=nt(t,r,r[3],null);return{c(){o&&o.c()},l(s){o&&o.l(s)},m(s,a){o&&o.m(s,a),n=!0},p(s,[a]){o&&o.p&&(!n||a&8)&&tt(o,t,s,s[3],n?it(t,s[3],a,null):rt(s[3]),null)},i(s){n||(ee(o,s),n=!0)},o(s){oe(o,s),n=!1},d(s){o&&o.d(s)}}}function bE(r,n,t){let{$$slots:o={},$$scope:s}=n;const a=void 0,l=void 0,f=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,s=p.$$scope)},[a,l,f,s,o]}class TE extends Le{constructor(n){super(),Be(this,n,bE,EE,xe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function IE(r){let n,t;const o=r[4].default,s=nt(o,r,r[3],null);return{c(){n=Re("dfn"),s&&s.c()},l(a){n=Oe(a,"DFN",{});var l=Ve(n);s&&s.l(l),l.forEach(K)},m(a,l){Ee(a,n,l),s&&s.m(n,null),t=!0},p(a,[l]){s&&s.p&&(!t||l&8)&&tt(s,o,a,a[3],t?it(o,a[3],l,null):rt(a[3]),null)},i(a){t||(ee(s,a),t=!0)},o(a){oe(s,a),t=!1},d(a){a&&K(n),s&&s.d(a)}}}function _E(r,n,t){let{$$slots:o={},$$scope:s}=n;const a=void 0,l=void 0,f=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,s=p.$$scope)},[a,l,f,s,o]}class SE extends Le{constructor(n){super(),Be(this,n,_E,IE,xe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function wE(r){let n,t;const o=r[4].default,s=nt(o,r,r[3],null);return{c(){n=Re("del"),s&&s.c()},l(a){n=Oe(a,"DEL",{});var l=Ve(n);s&&s.l(l),l.forEach(K)},m(a,l){Ee(a,n,l),s&&s.m(n,null),t=!0},p(a,[l]){s&&s.p&&(!t||l&8)&&tt(s,o,a,a[3],t?it(o,a[3],l,null):rt(a[3]),null)},i(a){t||(ee(s,a),t=!0)},o(a){oe(s,a),t=!1},d(a){a&&K(n),s&&s.d(a)}}}function NE(r,n,t){let{$$slots:o={},$$scope:s}=n;const a=void 0,l=void 0,f=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,s=p.$$scope)},[a,l,f,s,o]}class AE extends Le{constructor(n){super(),Be(this,n,NE,wE,xe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function xE(r){let n,t;const o=r[4].default,s=nt(o,r,r[3],null);return{c(){n=Re("em"),s&&s.c()},l(a){n=Oe(a,"EM",{});var l=Ve(n);s&&s.l(l),l.forEach(K)},m(a,l){Ee(a,n,l),s&&s.m(n,null),t=!0},p(a,[l]){s&&s.p&&(!t||l&8)&&tt(s,o,a,a[3],t?it(o,a[3],l,null):rt(a[3]),null)},i(a){t||(ee(s,a),t=!0)},o(a){oe(s,a),t=!1},d(a){a&&K(n),s&&s.d(a)}}}function FE(r,n,t){let{$$slots:o={},$$scope:s}=n;const a=void 0,l=void 0,f=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,s=p.$$scope)},[a,l,f,s,o]}class CE extends Le{constructor(n){super(),Be(this,n,FE,xE,xe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function RE(r){let n;return{c(){n=Re("hr")},l(t){n=Oe(t,"HR",{})},m(t,o){Ee(t,n,o)},p:Ze,i:Ze,o:Ze,d(t){t&&K(n)}}}function OE(r,n,t){return[void 0,void 0,void 0]}class kE extends Le{constructor(n){super(),Be(this,n,OE,RE,xe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function PE(r){let n,t;const o=r[4].default,s=nt(o,r,r[3],null);return{c(){n=Re("strong"),s&&s.c()},l(a){n=Oe(a,"STRONG",{});var l=Ve(n);s&&s.l(l),l.forEach(K)},m(a,l){Ee(a,n,l),s&&s.m(n,null),t=!0},p(a,[l]){s&&s.p&&(!t||l&8)&&tt(s,o,a,a[3],t?it(o,a[3],l,null):rt(a[3]),null)},i(a){t||(ee(s,a),t=!0)},o(a){oe(s,a),t=!1},d(a){a&&K(n),s&&s.d(a)}}}function LE(r,n,t){let{$$slots:o={},$$scope:s}=n;const a=void 0,l=void 0,f=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,s=p.$$scope)},[a,l,f,s,o]}class BE extends Le{constructor(n){super(),Be(this,n,LE,PE,xe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function $E(r){let n,t,o,s;return{c(){n=Re("img"),this.h()},l(a){n=Oe(a,"IMG",{src:!0,title:!0,alt:!0,class:!0}),this.h()},h(){qc(n.src,t=bi(r[0].href)?Ei(r[1].baseUrl,r[0].href):r[0].href)||Dn(n,"src",t),Dn(n,"title",o=r[0].title),Dn(n,"alt",s=r[0].text),Dn(n,"class","markdown-image svelte-z38cge")},m(a,l){Ee(a,n,l)},p(a,[l]){l&3&&!qc(n.src,t=bi(a[0].href)?Ei(a[1].baseUrl,a[0].href):a[0].href)&&Dn(n,"src",t),l&1&&o!==(o=a[0].title)&&Dn(n,"title",o),l&1&&s!==(s=a[0].text)&&Dn(n,"alt",s)},i:Ze,o:Ze,d(a){a&&K(n)}}}function ME(r,n,t){let{token:o}=n,{options:s}=n;const a=void 0;return r.$$set=l=>{"token"in l&&t(0,o=l.token),"options"in l&&t(1,s=l.options)},[o,s,a]}class UE extends Le{constructor(n){super(),Be(this,n,ME,$E,xe,{token:0,options:1,renderers:2})}get renderers(){return this.$$.ctx[2]}}function qE(r){let n;const t=r[4].default,o=nt(t,r,r[3],null);return{c(){o&&o.c()},l(s){o&&o.l(s)},m(s,a){o&&o.m(s,a),n=!0},p(s,[a]){o&&o.p&&(!n||a&8)&&tt(o,t,s,s[3],n?it(t,s[3],a,null):rt(s[3]),null)},i(s){n||(ee(o,s),n=!0)},o(s){oe(o,s),n=!1},d(s){o&&o.d(s)}}}function jE(r,n,t){let{$$slots:o={},$$scope:s}=n;const a=void 0,l=void 0,f=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,s=p.$$scope)},[a,l,f,s,o]}class ef extends Le{constructor(n){super(),Be(this,n,jE,qE,xe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}const GE=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,VE=Object.hasOwnProperty;class kf{constructor(){this.occurrences,this.reset()}slug(n,t){const o=this;let s=HE(n,t===!0);const a=s;for(;VE.call(o.occurrences,s);)o.occurrences[a]++,s=a+"-"+o.occurrences[a];return o.occurrences[s]=0,s}reset(){this.occurrences=Object.create(null)}}function HE(r,n){return typeof r!="string"?"":(n||(r=r.toLowerCase()),r.replace(GE,"").replace(/ /g,"-"))}function Ga(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Dr=Ga();function Pf(r){Dr=r}const Lf=/[&<>"']/,WE=new RegExp(Lf.source,"g"),Bf=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,YE=new RegExp(Bf.source,"g"),zE={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},nf=r=>zE[r];function Nn(r,n){if(n){if(Lf.test(r))return r.replace(WE,nf)}else if(Bf.test(r))return r.replace(YE,nf);return r}const QE=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function KE(r){return r.replace(QE,(n,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const JE=/(^|[^\[])\^/g;function ye(r,n){let t=typeof r=="string"?r:r.source;n=n||"";const o={replace:(s,a)=>{let l=typeof a=="string"?a:a.source;return l=l.replace(JE,"$1"),t=t.replace(s,l),o},getRegex:()=>new RegExp(t,n)};return o}function tf(r){try{r=encodeURI(r).replace(/%25/g,"%")}catch{return null}return r}const gi={exec:()=>null};function rf(r,n){const t=r.replace(/\|/g,(a,l,f)=>{let p=!1,m=l;for(;--m>=0&&f[m]==="\\";)p=!p;return p?"|":" |"}),o=t.split(/ \|/);let s=0;if(o[0].trim()||o.shift(),o.length>0&&!o[o.length-1].trim()&&o.pop(),n)if(o.length>n)o.splice(n);else for(;o.length<n;)o.push("");for(;s<o.length;s++)o[s]=o[s].trim().replace(/\\\|/g,"|");return o}function li(r,n,t){const o=r.length;if(o===0)return"";let s=0;for(;s<o;){const a=r.charAt(o-s-1);if(a===n&&!t)s++;else if(a!==n&&t)s++;else break}return r.slice(0,o-s)}function XE(r,n){if(r.indexOf(n[1])===-1)return-1;let t=0;for(let o=0;o<r.length;o++)if(r[o]==="\\")o++;else if(r[o]===n[0])t++;else if(r[o]===n[1]&&(t--,t<0))return o;return-1}function sf(r,n,t,o){const s=n.href,a=n.title?Nn(n.title):null,l=r[1].replace(/\\([\[\]])/g,"$1");if(r[0].charAt(0)!=="!"){o.state.inLink=!0;const f={type:"link",raw:t,href:s,title:a,text:l,tokens:o.inlineTokens(l)};return o.state.inLink=!1,f}return{type:"image",raw:t,href:s,title:a,text:Nn(l)}}function ZE(r,n){const t=r.match(/^(\s+)(?:```)/);if(t===null)return n;const o=t[1];return n.split(`
`).map(s=>{const a=s.match(/^\s+/);if(a===null)return s;const[l]=a;return l.length>=o.length?s.slice(o.length):s}).join(`
`)}class Fs{constructor(n){Te(this,"options");Te(this,"rules");Te(this,"lexer");this.options=n||Dr}space(n){const t=this.rules.block.newline.exec(n);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(n){const t=this.rules.block.code.exec(n);if(t){const o=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?o:li(o,`
`)}}}fences(n){const t=this.rules.block.fences.exec(n);if(t){const o=t[0],s=ZE(o,t[3]||"");return{type:"code",raw:o,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(n){const t=this.rules.block.heading.exec(n);if(t){let o=t[2].trim();if(/#$/.test(o)){const s=li(o,"#");(this.options.pedantic||!s||/ $/.test(s))&&(o=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:o,tokens:this.lexer.inline(o)}}}hr(n){const t=this.rules.block.hr.exec(n);if(t)return{type:"hr",raw:li(t[0],`
`)}}blockquote(n){const t=this.rules.block.blockquote.exec(n);if(t){let o=li(t[0],`
`).split(`
`),s="",a="";const l=[];for(;o.length>0;){let f=!1;const p=[];let m;for(m=0;m<o.length;m++)if(/^ {0,3}>/.test(o[m]))p.push(o[m]),f=!0;else if(!f)p.push(o[m]);else break;o=o.slice(m);const D=p.join(`
`),y=D.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");s=s?`${s}
${D}`:D,a=a?`${a}
${y}`:y;const A=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(y,l,!0),this.lexer.state.top=A,o.length===0)break;const S=l[l.length-1];if((S==null?void 0:S.type)==="code")break;if((S==null?void 0:S.type)==="blockquote"){const R=S,L=R.raw+`
`+o.join(`
`),H=this.blockquote(L);l[l.length-1]=H,s=s.substring(0,s.length-R.raw.length)+H.raw,a=a.substring(0,a.length-R.text.length)+H.text;break}else if((S==null?void 0:S.type)==="list"){const R=S,L=R.raw+`
`+o.join(`
`),H=this.list(L);l[l.length-1]=H,s=s.substring(0,s.length-S.raw.length)+H.raw,a=a.substring(0,a.length-R.raw.length)+H.raw,o=L.substring(l[l.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:l,text:a}}}list(n){let t=this.rules.block.list.exec(n);if(t){let o=t[1].trim();const s=o.length>1,a={type:"list",raw:"",ordered:s,start:s?+o.slice(0,-1):"",loose:!1,items:[]};o=s?`\\d{1,9}\\${o.slice(-1)}`:`\\${o}`,this.options.pedantic&&(o=s?o:"[*+-]");const l=new RegExp(`^( {0,3}${o})((?:[	 ][^\\n]*)?(?:\\n|$))`);let f="",p="",m=!1;for(;n;){let D=!1;if(!(t=l.exec(n))||this.rules.block.hr.test(n))break;f=t[0],n=n.substring(f.length);let y=t[2].split(`
`,1)[0].replace(/^\t+/,ce=>" ".repeat(3*ce.length)),A=n.split(`
`,1)[0],S=0;this.options.pedantic?(S=2,p=y.trimStart()):(S=t[2].search(/[^ ]/),S=S>4?1:S,p=y.slice(S),S+=t[1].length);let R=!1;if(!y&&/^ *$/.test(A)&&(f+=A+`
`,n=n.substring(A.length+1),D=!0),!D){const ce=new RegExp(`^ {0,${Math.min(3,S-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),we=new RegExp(`^ {0,${Math.min(3,S-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),me=new RegExp(`^ {0,${Math.min(3,S-1)}}(?:\`\`\`|~~~)`),Fe=new RegExp(`^ {0,${Math.min(3,S-1)}}#`);for(;n;){const ke=n.split(`
`,1)[0];if(A=ke,this.options.pedantic&&(A=A.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),me.test(A)||Fe.test(A)||ce.test(A)||we.test(n))break;if(A.search(/[^ ]/)>=S||!A.trim())p+=`
`+A.slice(S);else{if(R||y.search(/[^ ]/)>=4||me.test(y)||Fe.test(y)||we.test(y))break;p+=`
`+A}!R&&!A.trim()&&(R=!0),f+=ke+`
`,n=n.substring(ke.length+1),y=A.slice(S)}}a.loose||(m?a.loose=!0:/\n *\n *$/.test(f)&&(m=!0));let L=null,H;this.options.gfm&&(L=/^\[[ xX]\] /.exec(p),L&&(H=L[0]!=="[ ] ",p=p.replace(/^\[[ xX]\] +/,""))),a.items.push({type:"list_item",raw:f,task:!!L,checked:H,loose:!1,text:p,tokens:[]}),a.raw+=f}a.items[a.items.length-1].raw=f.trimEnd(),a.items[a.items.length-1].text=p.trimEnd(),a.raw=a.raw.trimEnd();for(let D=0;D<a.items.length;D++)if(this.lexer.state.top=!1,a.items[D].tokens=this.lexer.blockTokens(a.items[D].text,[]),!a.loose){const y=a.items[D].tokens.filter(S=>S.type==="space"),A=y.length>0&&y.some(S=>/\n.*\n/.test(S.raw));a.loose=A}if(a.loose)for(let D=0;D<a.items.length;D++)a.items[D].loose=!0;return a}}html(n){const t=this.rules.block.html.exec(n);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(n){const t=this.rules.block.def.exec(n);if(t){const o=t[1].toLowerCase().replace(/\s+/g," "),s=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",a=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:o,raw:t[0],href:s,title:a}}}table(n){const t=this.rules.block.table.exec(n);if(!t||!/[:|]/.test(t[2]))return;const o=rf(t[1]),s=t[2].replace(/^\||\| *$/g,"").split("|"),a=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],l={type:"table",raw:t[0],header:[],align:[],rows:[]};if(o.length===s.length){for(const f of s)/^ *-+: *$/.test(f)?l.align.push("right"):/^ *:-+: *$/.test(f)?l.align.push("center"):/^ *:-+ *$/.test(f)?l.align.push("left"):l.align.push(null);for(let f=0;f<o.length;f++)l.header.push({text:o[f],tokens:this.lexer.inline(o[f]),header:!0,align:l.align[f]});for(const f of a)l.rows.push(rf(f,l.header.length).map((p,m)=>({text:p,tokens:this.lexer.inline(p),header:!1,align:l.align[m]})));return l}}lheading(n){const t=this.rules.block.lheading.exec(n);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(n){const t=this.rules.block.paragraph.exec(n);if(t){const o=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:o,tokens:this.lexer.inline(o)}}}text(n){const t=this.rules.block.text.exec(n);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(n){const t=this.rules.inline.escape.exec(n);if(t)return{type:"escape",raw:t[0],text:Nn(t[1])}}tag(n){const t=this.rules.inline.tag.exec(n);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(n){const t=this.rules.inline.link.exec(n);if(t){const o=t[2].trim();if(!this.options.pedantic&&/^</.test(o)){if(!/>$/.test(o))return;const l=li(o.slice(0,-1),"\\");if((o.length-l.length)%2===0)return}else{const l=XE(t[2],"()");if(l>-1){const p=(t[0].indexOf("!")===0?5:4)+t[1].length+l;t[2]=t[2].substring(0,l),t[0]=t[0].substring(0,p).trim(),t[3]=""}}let s=t[2],a="";if(this.options.pedantic){const l=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);l&&(s=l[1],a=l[3])}else a=t[3]?t[3].slice(1,-1):"";return s=s.trim(),/^</.test(s)&&(this.options.pedantic&&!/>$/.test(o)?s=s.slice(1):s=s.slice(1,-1)),sf(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:a&&a.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(n,t){let o;if((o=this.rules.inline.reflink.exec(n))||(o=this.rules.inline.nolink.exec(n))){const s=(o[2]||o[1]).replace(/\s+/g," "),a=t[s.toLowerCase()];if(!a){const l=o[0].charAt(0);return{type:"text",raw:l,text:l}}return sf(o,a,o[0],this.lexer)}}emStrong(n,t,o=""){let s=this.rules.inline.emStrongLDelim.exec(n);if(!s||s[3]&&o.match(/[\p{L}\p{N}]/u))return;if(!(s[1]||s[2]||"")||!o||this.rules.inline.punctuation.exec(o)){const l=[...s[0]].length-1;let f,p,m=l,D=0;const y=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(y.lastIndex=0,t=t.slice(-1*n.length+l);(s=y.exec(t))!=null;){if(f=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!f)continue;if(p=[...f].length,s[3]||s[4]){m+=p;continue}else if((s[5]||s[6])&&l%3&&!((l+p)%3)){D+=p;continue}if(m-=p,m>0)continue;p=Math.min(p,p+m+D);const A=[...s[0]][0].length,S=n.slice(0,l+s.index+A+p);if(Math.min(l,p)%2){const L=S.slice(1,-1);return{type:"em",raw:S,text:L,tokens:this.lexer.inlineTokens(L)}}const R=S.slice(2,-2);return{type:"strong",raw:S,text:R,tokens:this.lexer.inlineTokens(R)}}}}codespan(n){const t=this.rules.inline.code.exec(n);if(t){let o=t[2].replace(/\n/g," ");const s=/[^ ]/.test(o),a=/^ /.test(o)&&/ $/.test(o);return s&&a&&(o=o.substring(1,o.length-1)),o=Nn(o,!0),{type:"codespan",raw:t[0],text:o}}}br(n){const t=this.rules.inline.br.exec(n);if(t)return{type:"br",raw:t[0]}}del(n){const t=this.rules.inline.del.exec(n);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(n){const t=this.rules.inline.autolink.exec(n);if(t){let o,s;return t[2]==="@"?(o=Nn(t[1]),s="mailto:"+o):(o=Nn(t[1]),s=o),{type:"link",raw:t[0],text:o,href:s,tokens:[{type:"text",raw:o,text:o}]}}}url(n){var o;let t;if(t=this.rules.inline.url.exec(n)){let s,a;if(t[2]==="@")s=Nn(t[0]),a="mailto:"+s;else{let l;do l=t[0],t[0]=((o=this.rules.inline._backpedal.exec(t[0]))==null?void 0:o[0])??"";while(l!==t[0]);s=Nn(t[0]),t[1]==="www."?a="http://"+t[0]:a=t[0]}return{type:"link",raw:t[0],text:s,href:a,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(n){const t=this.rules.inline.text.exec(n);if(t){let o;return this.lexer.state.inRawBlock?o=t[0]:o=Nn(t[0]),{type:"text",raw:t[0],text:o}}}}const eb=/^(?: *(?:\n|$))+/,nb=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,tb=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Si=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,rb=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,$f=/(?:[*+-]|\d{1,9}[.)])/,Mf=ye(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,$f).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),Va=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,ib=/^[^\n]+/,Ha=/(?!\s*\])(?:\\.|[^\[\]\\])+/,sb=ye(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",Ha).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),ob=ye(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,$f).getRegex(),qs="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Wa=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,ab=ye("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",Wa).replace("tag",qs).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Uf=ye(Va).replace("hr",Si).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",qs).getRegex(),ub=ye(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Uf).getRegex(),Ya={blockquote:ub,code:nb,def:sb,fences:tb,heading:rb,hr:Si,html:ab,lheading:Mf,list:ob,newline:eb,paragraph:Uf,table:gi,text:ib},of=ye("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Si).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",qs).getRegex(),lb={...Ya,table:of,paragraph:ye(Va).replace("hr",Si).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",of).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",qs).getRegex()},cb={...Ya,html:ye(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Wa).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:gi,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:ye(Va).replace("hr",Si).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Mf).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},qf=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,fb=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,jf=/^( {2,}|\\)\n(?!\s*$)/,pb=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,wi="\\p{P}\\p{S}",hb=ye(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,wi).getRegex(),db=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,gb=ye(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,wi).getRegex(),mb=ye("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,wi).getRegex(),Db=ye("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,wi).getRegex(),vb=ye(/\\([punct])/,"gu").replace(/punct/g,wi).getRegex(),yb=ye(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Eb=ye(Wa).replace("(?:-->|$)","-->").getRegex(),bb=ye("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Eb).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Cs=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Tb=ye(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Cs).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Gf=ye(/^!?\[(label)\]\[(ref)\]/).replace("label",Cs).replace("ref",Ha).getRegex(),Vf=ye(/^!?\[(ref)\](?:\[\])?/).replace("ref",Ha).getRegex(),Ib=ye("reflink|nolink(?!\\()","g").replace("reflink",Gf).replace("nolink",Vf).getRegex(),za={_backpedal:gi,anyPunctuation:vb,autolink:yb,blockSkip:db,br:jf,code:fb,del:gi,emStrongLDelim:gb,emStrongRDelimAst:mb,emStrongRDelimUnd:Db,escape:qf,link:Tb,nolink:Vf,punctuation:hb,reflink:Gf,reflinkSearch:Ib,tag:bb,text:pb,url:gi},_b={...za,link:ye(/^!?\[(label)\]\((.*?)\)/).replace("label",Cs).getRegex(),reflink:ye(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Cs).getRegex()},Na={...za,escape:ye(qf).replace("])","~|])").getRegex(),url:ye(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Sb={...Na,br:ye(jf).replace("{2,}","*").getRegex(),text:ye(Na.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},bs={normal:Ya,gfm:lb,pedantic:cb},ci={normal:za,gfm:Na,breaks:Sb,pedantic:_b};class Jn{constructor(n){Te(this,"tokens");Te(this,"options");Te(this,"state");Te(this,"tokenizer");Te(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=n||Dr,this.options.tokenizer=this.options.tokenizer||new Fs,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:bs.normal,inline:ci.normal};this.options.pedantic?(t.block=bs.pedantic,t.inline=ci.pedantic):this.options.gfm&&(t.block=bs.gfm,this.options.breaks?t.inline=ci.breaks:t.inline=ci.gfm),this.tokenizer.rules=t}static get rules(){return{block:bs,inline:ci}}static lex(n,t){return new Jn(t).lex(n)}static lexInline(n,t){return new Jn(t).inlineTokens(n)}lex(n){n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const o=this.inlineQueue[t];this.inlineTokens(o.src,o.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(n,t=[],o=!1){this.options.pedantic?n=n.replace(/\t/g,"    ").replace(/^ +$/gm,""):n=n.replace(/^( *)(\t+)/gm,(f,p,m)=>p+"    ".repeat(m.length));let s,a,l;for(;n;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(f=>(s=f.call({lexer:this},n,t))?(n=n.substring(s.raw.length),t.push(s),!0):!1))){if(s=this.tokenizer.space(n)){n=n.substring(s.raw.length),s.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(s);continue}if(s=this.tokenizer.code(n)){n=n.substring(s.raw.length),a=t[t.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+s.raw,a.text+=`
`+s.text,this.inlineQueue[this.inlineQueue.length-1].src=a.text):t.push(s);continue}if(s=this.tokenizer.fences(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.heading(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.hr(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.blockquote(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.list(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.html(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.def(n)){n=n.substring(s.raw.length),a=t[t.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+s.raw,a.text+=`
`+s.raw,this.inlineQueue[this.inlineQueue.length-1].src=a.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title});continue}if(s=this.tokenizer.table(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.lheading(n)){n=n.substring(s.raw.length),t.push(s);continue}if(l=n,this.options.extensions&&this.options.extensions.startBlock){let f=1/0;const p=n.slice(1);let m;this.options.extensions.startBlock.forEach(D=>{m=D.call({lexer:this},p),typeof m=="number"&&m>=0&&(f=Math.min(f,m))}),f<1/0&&f>=0&&(l=n.substring(0,f+1))}if(this.state.top&&(s=this.tokenizer.paragraph(l))){a=t[t.length-1],o&&(a==null?void 0:a.type)==="paragraph"?(a.raw+=`
`+s.raw,a.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):t.push(s),o=l.length!==n.length,n=n.substring(s.raw.length);continue}if(s=this.tokenizer.text(n)){n=n.substring(s.raw.length),a=t[t.length-1],a&&a.type==="text"?(a.raw+=`
`+s.raw,a.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):t.push(s);continue}if(n){const f="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(f);break}else throw new Error(f)}}return this.state.top=!0,t}inline(n,t=[]){return this.inlineQueue.push({src:n,tokens:t}),t}inlineTokens(n,t=[]){let o,s,a,l=n,f,p,m;if(this.tokens.links){const D=Object.keys(this.tokens.links);if(D.length>0)for(;(f=this.tokenizer.rules.inline.reflinkSearch.exec(l))!=null;)D.includes(f[0].slice(f[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,f.index)+"["+"a".repeat(f[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(f=this.tokenizer.rules.inline.blockSkip.exec(l))!=null;)l=l.slice(0,f.index)+"["+"a".repeat(f[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(f=this.tokenizer.rules.inline.anyPunctuation.exec(l))!=null;)l=l.slice(0,f.index)+"++"+l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;n;)if(p||(m=""),p=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(D=>(o=D.call({lexer:this},n,t))?(n=n.substring(o.raw.length),t.push(o),!0):!1))){if(o=this.tokenizer.escape(n)){n=n.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.tag(n)){n=n.substring(o.raw.length),s=t[t.length-1],s&&o.type==="text"&&s.type==="text"?(s.raw+=o.raw,s.text+=o.text):t.push(o);continue}if(o=this.tokenizer.link(n)){n=n.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.reflink(n,this.tokens.links)){n=n.substring(o.raw.length),s=t[t.length-1],s&&o.type==="text"&&s.type==="text"?(s.raw+=o.raw,s.text+=o.text):t.push(o);continue}if(o=this.tokenizer.emStrong(n,l,m)){n=n.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.codespan(n)){n=n.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.br(n)){n=n.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.del(n)){n=n.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.autolink(n)){n=n.substring(o.raw.length),t.push(o);continue}if(!this.state.inLink&&(o=this.tokenizer.url(n))){n=n.substring(o.raw.length),t.push(o);continue}if(a=n,this.options.extensions&&this.options.extensions.startInline){let D=1/0;const y=n.slice(1);let A;this.options.extensions.startInline.forEach(S=>{A=S.call({lexer:this},y),typeof A=="number"&&A>=0&&(D=Math.min(D,A))}),D<1/0&&D>=0&&(a=n.substring(0,D+1))}if(o=this.tokenizer.inlineText(a)){n=n.substring(o.raw.length),o.raw.slice(-1)!=="_"&&(m=o.raw.slice(-1)),p=!0,s=t[t.length-1],s&&s.type==="text"?(s.raw+=o.raw,s.text+=o.text):t.push(o);continue}if(n){const D="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(D);break}else throw new Error(D)}}return t}}class Rs{constructor(n){Te(this,"options");Te(this,"parser");this.options=n||Dr}space(n){return""}code({text:n,lang:t,escaped:o}){var l;const s=(l=(t||"").match(/^\S*/))==null?void 0:l[0],a=n.replace(/\n$/,"")+`
`;return s?'<pre><code class="language-'+Nn(s)+'">'+(o?a:Nn(a,!0))+`</code></pre>
`:"<pre><code>"+(o?a:Nn(a,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}heading({tokens:n,depth:t}){return`<h${t}>${this.parser.parseInline(n)}</h${t}>
`}hr(n){return`<hr>
`}list(n){const t=n.ordered,o=n.start;let s="";for(let f=0;f<n.items.length;f++){const p=n.items[f];s+=this.listitem(p)}const a=t?"ol":"ul",l=t&&o!==1?' start="'+o+'"':"";return"<"+a+l+`>
`+s+"</"+a+`>
`}listitem(n){let t="";if(n.task){const o=this.checkbox({checked:!!n.checked});n.loose?n.tokens.length>0&&n.tokens[0].type==="paragraph"?(n.tokens[0].text=o+" "+n.tokens[0].text,n.tokens[0].tokens&&n.tokens[0].tokens.length>0&&n.tokens[0].tokens[0].type==="text"&&(n.tokens[0].tokens[0].text=o+" "+n.tokens[0].tokens[0].text)):n.tokens.unshift({type:"text",raw:o+" ",text:o+" "}):t+=o+" "}return t+=this.parser.parse(n.tokens,!!n.loose),`<li>${t}</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let t="",o="";for(let a=0;a<n.header.length;a++)o+=this.tablecell(n.header[a]);t+=this.tablerow({text:o});let s="";for(let a=0;a<n.rows.length;a++){const l=n.rows[a];o="";for(let f=0;f<l.length;f++)o+=this.tablecell(l[f]);s+=this.tablerow({text:o})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+s+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){const t=this.parser.parseInline(n.tokens),o=n.header?"th":"td";return(n.align?`<${o} align="${n.align}">`:`<${o}>`)+t+`</${o}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${n}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:t,tokens:o}){const s=this.parser.parseInline(o),a=tf(n);if(a===null)return s;n=a;let l='<a href="'+n+'"';return t&&(l+=' title="'+t+'"'),l+=">"+s+"</a>",l}image({href:n,title:t,text:o}){const s=tf(n);if(s===null)return o;n=s;let a=`<img src="${n}" alt="${o}"`;return t&&(a+=` title="${t}"`),a+=">",a}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):n.text}}class Qa{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}}class ft{constructor(n){Te(this,"options");Te(this,"renderer");Te(this,"textRenderer");this.options=n||Dr,this.options.renderer=this.options.renderer||new Rs,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Qa}static parse(n,t){return new ft(t).parse(n)}static parseInline(n,t){return new ft(t).parseInline(n)}parse(n,t=!0){let o="";for(let s=0;s<n.length;s++){const a=n[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]){const f=a,p=this.options.extensions.renderers[f.type].call({parser:this},f);if(p!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(f.type)){o+=p||"";continue}}const l=a;switch(l.type){case"space":{o+=this.renderer.space(l);continue}case"hr":{o+=this.renderer.hr(l);continue}case"heading":{o+=this.renderer.heading(l);continue}case"code":{o+=this.renderer.code(l);continue}case"table":{o+=this.renderer.table(l);continue}case"blockquote":{o+=this.renderer.blockquote(l);continue}case"list":{o+=this.renderer.list(l);continue}case"html":{o+=this.renderer.html(l);continue}case"paragraph":{o+=this.renderer.paragraph(l);continue}case"text":{let f=l,p=this.renderer.text(f);for(;s+1<n.length&&n[s+1].type==="text";)f=n[++s],p+=`
`+this.renderer.text(f);t?o+=this.renderer.paragraph({type:"paragraph",raw:p,text:p,tokens:[{type:"text",raw:p,text:p}]}):o+=p;continue}default:{const f='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(f),"";throw new Error(f)}}}return o}parseInline(n,t){t=t||this.renderer;let o="";for(let s=0;s<n.length;s++){const a=n[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]){const f=this.options.extensions.renderers[a.type].call({parser:this},a);if(f!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){o+=f||"";continue}}const l=a;switch(l.type){case"escape":{o+=t.text(l);break}case"html":{o+=t.html(l);break}case"link":{o+=t.link(l);break}case"image":{o+=t.image(l);break}case"strong":{o+=t.strong(l);break}case"em":{o+=t.em(l);break}case"codespan":{o+=t.codespan(l);break}case"br":{o+=t.br(l);break}case"del":{o+=t.del(l);break}case"text":{o+=t.text(l);break}default:{const f='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(f),"";throw new Error(f)}}}return o}}class mi{constructor(n){Te(this,"options");this.options=n||Dr}preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}}Te(mi,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var kt,Hf,Aa,Wf;class wb{constructor(...n){Mc(this,kt);Te(this,"defaults",Ga());Te(this,"options",this.setOptions);Te(this,"parse",ui(this,kt,Aa).call(this,Jn.lex,ft.parse));Te(this,"parseInline",ui(this,kt,Aa).call(this,Jn.lexInline,ft.parseInline));Te(this,"Parser",ft);Te(this,"Renderer",Rs);Te(this,"TextRenderer",Qa);Te(this,"Lexer",Jn);Te(this,"Tokenizer",Fs);Te(this,"Hooks",mi);this.use(...n)}walkTokens(n,t){var s,a;let o=[];for(const l of n)switch(o=o.concat(t.call(this,l)),l.type){case"table":{const f=l;for(const p of f.header)o=o.concat(this.walkTokens(p.tokens,t));for(const p of f.rows)for(const m of p)o=o.concat(this.walkTokens(m.tokens,t));break}case"list":{const f=l;o=o.concat(this.walkTokens(f.items,t));break}default:{const f=l;(a=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&a[f.type]?this.defaults.extensions.childTokens[f.type].forEach(p=>{const m=f[p].flat(1/0);o=o.concat(this.walkTokens(m,t))}):f.tokens&&(o=o.concat(this.walkTokens(f.tokens,t)))}}return o}use(...n){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(o=>{const s={...o};if(s.async=this.defaults.async||s.async||!1,o.extensions&&(o.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if("renderer"in a){const l=t.renderers[a.name];l?t.renderers[a.name]=function(...f){let p=a.renderer.apply(this,f);return p===!1&&(p=l.apply(this,f)),p}:t.renderers[a.name]=a.renderer}if("tokenizer"in a){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const l=t[a.level];l?l.unshift(a.tokenizer):t[a.level]=[a.tokenizer],a.start&&(a.level==="block"?t.startBlock?t.startBlock.push(a.start):t.startBlock=[a.start]:a.level==="inline"&&(t.startInline?t.startInline.push(a.start):t.startInline=[a.start]))}"childTokens"in a&&a.childTokens&&(t.childTokens[a.name]=a.childTokens)}),s.extensions=t),o.renderer){const a=this.defaults.renderer||new Rs(this.defaults);for(const l in o.renderer){if(!(l in a))throw new Error(`renderer '${l}' does not exist`);if(["options","parser"].includes(l))continue;const f=l;let p=o.renderer[f];const m=a[f];a[f]=(...D)=>{o.useNewRenderer||(p=ui(this,kt,Hf).call(this,p,f,a));let y=p.apply(a,D);return y===!1&&(y=m.apply(a,D)),y||""}}s.renderer=a}if(o.tokenizer){const a=this.defaults.tokenizer||new Fs(this.defaults);for(const l in o.tokenizer){if(!(l in a))throw new Error(`tokenizer '${l}' does not exist`);if(["options","rules","lexer"].includes(l))continue;const f=l,p=o.tokenizer[f],m=a[f];a[f]=(...D)=>{let y=p.apply(a,D);return y===!1&&(y=m.apply(a,D)),y}}s.tokenizer=a}if(o.hooks){const a=this.defaults.hooks||new mi;for(const l in o.hooks){if(!(l in a))throw new Error(`hook '${l}' does not exist`);if(l==="options")continue;const f=l,p=o.hooks[f],m=a[f];mi.passThroughHooks.has(l)?a[f]=D=>{if(this.defaults.async)return Promise.resolve(p.call(a,D)).then(A=>m.call(a,A));const y=p.call(a,D);return m.call(a,y)}:a[f]=(...D)=>{let y=p.apply(a,D);return y===!1&&(y=m.apply(a,D)),y}}s.hooks=a}if(o.walkTokens){const a=this.defaults.walkTokens,l=o.walkTokens;s.walkTokens=function(f){let p=[];return p.push(l.call(this,f)),a&&(p=p.concat(a.call(this,f))),p}}this.defaults={...this.defaults,...s}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,t){return Jn.lex(n,t??this.defaults)}parser(n,t){return ft.parse(n,t??this.defaults)}}kt=new WeakSet,Hf=function(n,t,o){switch(t){case"heading":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,o.parser.parseInline(s.tokens),s.depth,KE(o.parser.parseInline(s.tokens,o.parser.textRenderer)))};case"code":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,s.text,s.lang,!!s.escaped)};case"table":return function(s){if(!s.type||s.type!==t)return n.apply(this,arguments);let a="",l="";for(let p=0;p<s.header.length;p++)l+=this.tablecell({text:s.header[p].text,tokens:s.header[p].tokens,header:!0,align:s.align[p]});a+=this.tablerow({text:l});let f="";for(let p=0;p<s.rows.length;p++){const m=s.rows[p];l="";for(let D=0;D<m.length;D++)l+=this.tablecell({text:m[D].text,tokens:m[D].tokens,header:!1,align:s.align[D]});f+=this.tablerow({text:l})}return n.call(this,a,f)};case"blockquote":return function(s){if(!s.type||s.type!==t)return n.apply(this,arguments);const a=this.parser.parse(s.tokens);return n.call(this,a)};case"list":return function(s){if(!s.type||s.type!==t)return n.apply(this,arguments);const a=s.ordered,l=s.start,f=s.loose;let p="";for(let m=0;m<s.items.length;m++){const D=s.items[m],y=D.checked,A=D.task;let S="";if(D.task){const R=this.checkbox({checked:!!y});f?D.tokens.length>0&&D.tokens[0].type==="paragraph"?(D.tokens[0].text=R+" "+D.tokens[0].text,D.tokens[0].tokens&&D.tokens[0].tokens.length>0&&D.tokens[0].tokens[0].type==="text"&&(D.tokens[0].tokens[0].text=R+" "+D.tokens[0].tokens[0].text)):D.tokens.unshift({type:"text",text:R+" "}):S+=R+" "}S+=this.parser.parse(D.tokens,f),p+=this.listitem({type:"list_item",raw:S,text:S,task:A,checked:!!y,loose:f,tokens:D.tokens})}return n.call(this,p,a,l)};case"html":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,s.text,s.block)};case"paragraph":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,this.parser.parseInline(s.tokens))};case"escape":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,s.text)};case"link":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,s.href,s.title,this.parser.parseInline(s.tokens))};case"image":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,s.href,s.title,s.text)};case"strong":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,this.parser.parseInline(s.tokens))};case"em":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,this.parser.parseInline(s.tokens))};case"codespan":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,s.text)};case"del":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,this.parser.parseInline(s.tokens))};case"text":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,s.text)}}return n},Aa=function(n,t){return(o,s)=>{const a={...s},l={...this.defaults,...a};this.defaults.async===!0&&a.async===!1&&(l.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),l.async=!0);const f=ui(this,kt,Wf).call(this,!!l.silent,!!l.async);if(typeof o>"u"||o===null)return f(new Error("marked(): input parameter is undefined or null"));if(typeof o!="string")return f(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(o)+", string expected"));if(l.hooks&&(l.hooks.options=l),l.async)return Promise.resolve(l.hooks?l.hooks.preprocess(o):o).then(p=>n(p,l)).then(p=>l.hooks?l.hooks.processAllTokens(p):p).then(p=>l.walkTokens?Promise.all(this.walkTokens(p,l.walkTokens)).then(()=>p):p).then(p=>t(p,l)).then(p=>l.hooks?l.hooks.postprocess(p):p).catch(f);try{l.hooks&&(o=l.hooks.preprocess(o));let p=n(o,l);l.hooks&&(p=l.hooks.processAllTokens(p)),l.walkTokens&&this.walkTokens(p,l.walkTokens);let m=t(p,l);return l.hooks&&(m=l.hooks.postprocess(m)),m}catch(p){return f(p)}}},Wf=function(n,t){return o=>{if(o.message+=`
Please report this to https://github.com/markedjs/marked.`,n){const s="<p>An error occurred:</p><pre>"+Nn(o.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(o);throw o}};const pr=new wb;function ve(r,n){return pr.parse(r,n)}ve.options=ve.setOptions=function(r){return pr.setOptions(r),ve.defaults=pr.defaults,Pf(ve.defaults),ve};ve.getDefaults=Ga;ve.defaults=Dr;ve.use=function(...r){return pr.use(...r),ve.defaults=pr.defaults,Pf(ve.defaults),ve};ve.walkTokens=function(r,n){return pr.walkTokens(r,n)};ve.parseInline=pr.parseInline;ve.Parser=ft;ve.parser=ft.parse;ve.Renderer=Rs;ve.TextRenderer=Qa;ve.Lexer=Jn;ve.lexer=Jn.lex;ve.Tokenizer=Fs;ve.Hooks=mi;ve.parse=ve;ve.options;ve.setOptions;ve.use;ve.walkTokens;ve.parseInline;ft.parse;Jn.lex;function Nb(r){return new Jn().lex(r)}const Ab=()=>({heading:Gy,blockquote:Wy,list:Qy,list_item:Xy,br:nE,code:iE,codespan:aE,table:cE,html:hE,paragraph:mE,link:yE,text:TE,def:SE,del:AE,em:CE,hr:kE,strong:BE,image:UE,space:ef,escape:ef}),xb=()=>({baseUrl:"/",slugger:new kf});function Fb(){const r=console.warn;console.warn=n=>{n.includes("unknown prop")||n.includes("unexpected slot")||r(n)},Ry(()=>{console.warn=r})}function Cb(r){let n,t;return n=new Us({props:{tokens:r[0],renderers:r[1],options:r[2]}}),{c(){Yt(n.$$.fragment)},l(o){mr(n.$$.fragment,o)},m(o,s){zt(n,o,s),t=!0},p(o,[s]){const a={};s&1&&(a.tokens=o[0]),s&2&&(a.renderers=o[1]),s&4&&(a.options=o[2]),n.$set(a)},i(o){t||(ee(n.$$.fragment,o),t=!0)},o(o){oe(n.$$.fragment,o),t=!1},d(o){Qt(n,o)}}}function Rb(r,n,t){Fb();let{source:o}=n,{options:s={}}=n,{renderers:a={}}=n,l,f,p;return r.$$set=m=>{"source"in m&&t(3,o=m.source),"options"in m&&t(4,s=m.options),"renderers"in m&&t(5,a=m.renderers)},r.$$.update=()=>{r.$$.dirty&56&&(t(0,l=Nb(o)),t(1,f={...Ab(),...a}),t(2,p={...xb(),...s}))},[l,f,p,o,s,a]}class L_ extends Le{constructor(n){super(),Be(this,n,Rb,Cb,xe,{source:3,options:4,renderers:5})}}const Ni={joinUrlPaths:Ei,isRelative:bi,generatePathSegment:Of};var fi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ob(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Os={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Os.exports;(function(r,n){(function(){var t,o="4.17.21",s=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",f="Invalid `variable` option passed into `_.template`",p="__lodash_hash_undefined__",m=500,D="__lodash_placeholder__",y=1,A=2,S=4,R=1,L=2,H=1,ce=2,we=4,me=8,Fe=16,ke=32,on=64,en=128,gt=256,O=512,J=30,an="...",Pt=800,Xt=16,Fi=1,yr=2,Ci=3,ot=1/0,jn=9007199254740991,Er=17976931348623157e292,Zt=NaN,xn=4294967295,w=xn-1,j=xn>>>1,$=[["ary",en],["bind",H],["bindKey",ce],["curry",me],["curryRight",Fe],["flip",O],["partial",ke],["partialRight",on],["rearg",gt]],U="[object Arguments]",he="[object Array]",$e="[object AsyncFunction]",de="[object Boolean]",Fn="[object Date]",qr="[object DOMException]",Lt="[object Error]",nn="[object Function]",au="[object GeneratorFunction]",Gn="[object Map]",jr="[object Number]",Vp="[object Null]",mt="[object Object]",uu="[object Promise]",Hp="[object Proxy]",Gr="[object RegExp]",Vn="[object Set]",Vr="[object String]",Ri="[object Symbol]",Wp="[object Undefined]",Hr="[object WeakMap]",Yp="[object WeakSet]",Wr="[object ArrayBuffer]",br="[object DataView]",Js="[object Float32Array]",Xs="[object Float64Array]",Zs="[object Int8Array]",eo="[object Int16Array]",no="[object Int32Array]",to="[object Uint8Array]",ro="[object Uint8ClampedArray]",io="[object Uint16Array]",so="[object Uint32Array]",zp=/\b__p \+= '';/g,Qp=/\b(__p \+=) '' \+/g,Kp=/(__e\(.*?\)|\b__t\)) \+\n'';/g,lu=/&(?:amp|lt|gt|quot|#39);/g,cu=/[&<>"']/g,Jp=RegExp(lu.source),Xp=RegExp(cu.source),Zp=/<%-([\s\S]+?)%>/g,eh=/<%([\s\S]+?)%>/g,fu=/<%=([\s\S]+?)%>/g,nh=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,th=/^\w*$/,rh=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,oo=/[\\^$.*+?()[\]{}|]/g,ih=RegExp(oo.source),ao=/^\s+/,sh=/\s/,oh=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ah=/\{\n\/\* \[wrapped with (.+)\] \*/,uh=/,? & /,lh=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,ch=/[()=,{}\[\]\/\s]/,fh=/\\(\\)?/g,ph=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,pu=/\w*$/,hh=/^[-+]0x[0-9a-f]+$/i,dh=/^0b[01]+$/i,gh=/^\[object .+?Constructor\]$/,mh=/^0o[0-7]+$/i,Dh=/^(?:0|[1-9]\d*)$/,vh=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Oi=/($^)/,yh=/['\n\r\u2028\u2029\\]/g,ki="\\ud800-\\udfff",Eh="\\u0300-\\u036f",bh="\\ufe20-\\ufe2f",Th="\\u20d0-\\u20ff",hu=Eh+bh+Th,du="\\u2700-\\u27bf",gu="a-z\\xdf-\\xf6\\xf8-\\xff",Ih="\\xac\\xb1\\xd7\\xf7",_h="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Sh="\\u2000-\\u206f",wh=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",mu="A-Z\\xc0-\\xd6\\xd8-\\xde",Du="\\ufe0e\\ufe0f",vu=Ih+_h+Sh+wh,uo="['’]",Nh="["+ki+"]",yu="["+vu+"]",Pi="["+hu+"]",Eu="\\d+",Ah="["+du+"]",bu="["+gu+"]",Tu="[^"+ki+vu+Eu+du+gu+mu+"]",lo="\\ud83c[\\udffb-\\udfff]",xh="(?:"+Pi+"|"+lo+")",Iu="[^"+ki+"]",co="(?:\\ud83c[\\udde6-\\uddff]){2}",fo="[\\ud800-\\udbff][\\udc00-\\udfff]",Tr="["+mu+"]",_u="\\u200d",Su="(?:"+bu+"|"+Tu+")",Fh="(?:"+Tr+"|"+Tu+")",wu="(?:"+uo+"(?:d|ll|m|re|s|t|ve))?",Nu="(?:"+uo+"(?:D|LL|M|RE|S|T|VE))?",Au=xh+"?",xu="["+Du+"]?",Ch="(?:"+_u+"(?:"+[Iu,co,fo].join("|")+")"+xu+Au+")*",Rh="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Oh="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Fu=xu+Au+Ch,kh="(?:"+[Ah,co,fo].join("|")+")"+Fu,Ph="(?:"+[Iu+Pi+"?",Pi,co,fo,Nh].join("|")+")",Lh=RegExp(uo,"g"),Bh=RegExp(Pi,"g"),po=RegExp(lo+"(?="+lo+")|"+Ph+Fu,"g"),$h=RegExp([Tr+"?"+bu+"+"+wu+"(?="+[yu,Tr,"$"].join("|")+")",Fh+"+"+Nu+"(?="+[yu,Tr+Su,"$"].join("|")+")",Tr+"?"+Su+"+"+wu,Tr+"+"+Nu,Oh,Rh,Eu,kh].join("|"),"g"),Mh=RegExp("["+_u+ki+hu+Du+"]"),Uh=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,qh=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],jh=-1,Ne={};Ne[Js]=Ne[Xs]=Ne[Zs]=Ne[eo]=Ne[no]=Ne[to]=Ne[ro]=Ne[io]=Ne[so]=!0,Ne[U]=Ne[he]=Ne[Wr]=Ne[de]=Ne[br]=Ne[Fn]=Ne[Lt]=Ne[nn]=Ne[Gn]=Ne[jr]=Ne[mt]=Ne[Gr]=Ne[Vn]=Ne[Vr]=Ne[Hr]=!1;var _e={};_e[U]=_e[he]=_e[Wr]=_e[br]=_e[de]=_e[Fn]=_e[Js]=_e[Xs]=_e[Zs]=_e[eo]=_e[no]=_e[Gn]=_e[jr]=_e[mt]=_e[Gr]=_e[Vn]=_e[Vr]=_e[Ri]=_e[to]=_e[ro]=_e[io]=_e[so]=!0,_e[Lt]=_e[nn]=_e[Hr]=!1;var Gh={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Vh={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Hh={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Wh={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Yh=parseFloat,zh=parseInt,Cu=typeof fi=="object"&&fi&&fi.Object===Object&&fi,Qh=typeof self=="object"&&self&&self.Object===Object&&self,Je=Cu||Qh||Function("return this")(),ho=n&&!n.nodeType&&n,er=ho&&!0&&r&&!r.nodeType&&r,Ru=er&&er.exports===ho,go=Ru&&Cu.process,Cn=function(){try{var T=er&&er.require&&er.require("util").types;return T||go&&go.binding&&go.binding("util")}catch{}}(),Ou=Cn&&Cn.isArrayBuffer,ku=Cn&&Cn.isDate,Pu=Cn&&Cn.isMap,Lu=Cn&&Cn.isRegExp,Bu=Cn&&Cn.isSet,$u=Cn&&Cn.isTypedArray;function En(T,N,_){switch(_.length){case 0:return T.call(N);case 1:return T.call(N,_[0]);case 2:return T.call(N,_[0],_[1]);case 3:return T.call(N,_[0],_[1],_[2])}return T.apply(N,_)}function Kh(T,N,_,q){for(var X=-1,pe=T==null?0:T.length;++X<pe;){var We=T[X];N(q,We,_(We),T)}return q}function Rn(T,N){for(var _=-1,q=T==null?0:T.length;++_<q&&N(T[_],_,T)!==!1;);return T}function Jh(T,N){for(var _=T==null?0:T.length;_--&&N(T[_],_,T)!==!1;);return T}function Mu(T,N){for(var _=-1,q=T==null?0:T.length;++_<q;)if(!N(T[_],_,T))return!1;return!0}function Bt(T,N){for(var _=-1,q=T==null?0:T.length,X=0,pe=[];++_<q;){var We=T[_];N(We,_,T)&&(pe[X++]=We)}return pe}function Li(T,N){var _=T==null?0:T.length;return!!_&&Ir(T,N,0)>-1}function mo(T,N,_){for(var q=-1,X=T==null?0:T.length;++q<X;)if(_(N,T[q]))return!0;return!1}function Ae(T,N){for(var _=-1,q=T==null?0:T.length,X=Array(q);++_<q;)X[_]=N(T[_],_,T);return X}function $t(T,N){for(var _=-1,q=N.length,X=T.length;++_<q;)T[X+_]=N[_];return T}function Do(T,N,_,q){var X=-1,pe=T==null?0:T.length;for(q&&pe&&(_=T[++X]);++X<pe;)_=N(_,T[X],X,T);return _}function Xh(T,N,_,q){var X=T==null?0:T.length;for(q&&X&&(_=T[--X]);X--;)_=N(_,T[X],X,T);return _}function vo(T,N){for(var _=-1,q=T==null?0:T.length;++_<q;)if(N(T[_],_,T))return!0;return!1}var Zh=yo("length");function ed(T){return T.split("")}function nd(T){return T.match(lh)||[]}function Uu(T,N,_){var q;return _(T,function(X,pe,We){if(N(X,pe,We))return q=pe,!1}),q}function Bi(T,N,_,q){for(var X=T.length,pe=_+(q?1:-1);q?pe--:++pe<X;)if(N(T[pe],pe,T))return pe;return-1}function Ir(T,N,_){return N===N?hd(T,N,_):Bi(T,qu,_)}function td(T,N,_,q){for(var X=_-1,pe=T.length;++X<pe;)if(q(T[X],N))return X;return-1}function qu(T){return T!==T}function ju(T,N){var _=T==null?0:T.length;return _?bo(T,N)/_:Zt}function yo(T){return function(N){return N==null?t:N[T]}}function Eo(T){return function(N){return T==null?t:T[N]}}function Gu(T,N,_,q,X){return X(T,function(pe,We,be){_=q?(q=!1,pe):N(_,pe,We,be)}),_}function rd(T,N){var _=T.length;for(T.sort(N);_--;)T[_]=T[_].value;return T}function bo(T,N){for(var _,q=-1,X=T.length;++q<X;){var pe=N(T[q]);pe!==t&&(_=_===t?pe:_+pe)}return _}function To(T,N){for(var _=-1,q=Array(T);++_<T;)q[_]=N(_);return q}function id(T,N){return Ae(N,function(_){return[_,T[_]]})}function Vu(T){return T&&T.slice(0,zu(T)+1).replace(ao,"")}function bn(T){return function(N){return T(N)}}function Io(T,N){return Ae(N,function(_){return T[_]})}function Yr(T,N){return T.has(N)}function Hu(T,N){for(var _=-1,q=T.length;++_<q&&Ir(N,T[_],0)>-1;);return _}function Wu(T,N){for(var _=T.length;_--&&Ir(N,T[_],0)>-1;);return _}function sd(T,N){for(var _=T.length,q=0;_--;)T[_]===N&&++q;return q}var od=Eo(Gh),ad=Eo(Vh);function ud(T){return"\\"+Wh[T]}function ld(T,N){return T==null?t:T[N]}function _r(T){return Mh.test(T)}function cd(T){return Uh.test(T)}function fd(T){for(var N,_=[];!(N=T.next()).done;)_.push(N.value);return _}function _o(T){var N=-1,_=Array(T.size);return T.forEach(function(q,X){_[++N]=[X,q]}),_}function Yu(T,N){return function(_){return T(N(_))}}function Mt(T,N){for(var _=-1,q=T.length,X=0,pe=[];++_<q;){var We=T[_];(We===N||We===D)&&(T[_]=D,pe[X++]=_)}return pe}function $i(T){var N=-1,_=Array(T.size);return T.forEach(function(q){_[++N]=q}),_}function pd(T){var N=-1,_=Array(T.size);return T.forEach(function(q){_[++N]=[q,q]}),_}function hd(T,N,_){for(var q=_-1,X=T.length;++q<X;)if(T[q]===N)return q;return-1}function dd(T,N,_){for(var q=_+1;q--;)if(T[q]===N)return q;return q}function Sr(T){return _r(T)?md(T):Zh(T)}function Hn(T){return _r(T)?Dd(T):ed(T)}function zu(T){for(var N=T.length;N--&&sh.test(T.charAt(N)););return N}var gd=Eo(Hh);function md(T){for(var N=po.lastIndex=0;po.test(T);)++N;return N}function Dd(T){return T.match(po)||[]}function vd(T){return T.match($h)||[]}var yd=function T(N){N=N==null?Je:wr.defaults(Je.Object(),N,wr.pick(Je,qh));var _=N.Array,q=N.Date,X=N.Error,pe=N.Function,We=N.Math,be=N.Object,So=N.RegExp,Ed=N.String,On=N.TypeError,Mi=_.prototype,bd=pe.prototype,Nr=be.prototype,Ui=N["__core-js_shared__"],qi=bd.toString,De=Nr.hasOwnProperty,Td=0,Qu=function(){var e=/[^.]+$/.exec(Ui&&Ui.keys&&Ui.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),ji=Nr.toString,Id=qi.call(be),_d=Je._,Sd=So("^"+qi.call(De).replace(oo,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Gi=Ru?N.Buffer:t,Ut=N.Symbol,Vi=N.Uint8Array,Ku=Gi?Gi.allocUnsafe:t,Hi=Yu(be.getPrototypeOf,be),Ju=be.create,Xu=Nr.propertyIsEnumerable,Wi=Mi.splice,Zu=Ut?Ut.isConcatSpreadable:t,zr=Ut?Ut.iterator:t,nr=Ut?Ut.toStringTag:t,Yi=function(){try{var e=or(be,"defineProperty");return e({},"",{}),e}catch{}}(),wd=N.clearTimeout!==Je.clearTimeout&&N.clearTimeout,Nd=q&&q.now!==Je.Date.now&&q.now,Ad=N.setTimeout!==Je.setTimeout&&N.setTimeout,zi=We.ceil,Qi=We.floor,wo=be.getOwnPropertySymbols,xd=Gi?Gi.isBuffer:t,el=N.isFinite,Fd=Mi.join,Cd=Yu(be.keys,be),Ye=We.max,tn=We.min,Rd=q.now,Od=N.parseInt,nl=We.random,kd=Mi.reverse,No=or(N,"DataView"),Qr=or(N,"Map"),Ao=or(N,"Promise"),Ar=or(N,"Set"),Kr=or(N,"WeakMap"),Jr=or(be,"create"),Ki=Kr&&new Kr,xr={},Pd=ar(No),Ld=ar(Qr),Bd=ar(Ao),$d=ar(Ar),Md=ar(Kr),Ji=Ut?Ut.prototype:t,Xr=Ji?Ji.valueOf:t,tl=Ji?Ji.toString:t;function d(e){if(Pe(e)&&!Z(e)&&!(e instanceof ae)){if(e instanceof kn)return e;if(De.call(e,"__wrapped__"))return rc(e)}return new kn(e)}var Fr=function(){function e(){}return function(i){if(!Ce(i))return{};if(Ju)return Ju(i);e.prototype=i;var u=new e;return e.prototype=t,u}}();function Xi(){}function kn(e,i){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!i,this.__index__=0,this.__values__=t}d.templateSettings={escape:Zp,evaluate:eh,interpolate:fu,variable:"",imports:{_:d}},d.prototype=Xi.prototype,d.prototype.constructor=d,kn.prototype=Fr(Xi.prototype),kn.prototype.constructor=kn;function ae(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=xn,this.__views__=[]}function Ud(){var e=new ae(this.__wrapped__);return e.__actions__=hn(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=hn(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=hn(this.__views__),e}function qd(){if(this.__filtered__){var e=new ae(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function jd(){var e=this.__wrapped__.value(),i=this.__dir__,u=Z(e),c=i<0,h=u?e.length:0,g=em(0,h,this.__views__),v=g.start,E=g.end,I=E-v,x=c?E:v-1,F=this.__iteratees__,k=F.length,B=0,V=tn(I,this.__takeCount__);if(!u||!c&&h==I&&V==I)return wl(e,this.__actions__);var z=[];e:for(;I--&&B<V;){x+=i;for(var te=-1,Q=e[x];++te<k;){var se=F[te],le=se.iteratee,_n=se.type,cn=le(Q);if(_n==yr)Q=cn;else if(!cn){if(_n==Fi)continue e;break e}}z[B++]=Q}return z}ae.prototype=Fr(Xi.prototype),ae.prototype.constructor=ae;function tr(e){var i=-1,u=e==null?0:e.length;for(this.clear();++i<u;){var c=e[i];this.set(c[0],c[1])}}function Gd(){this.__data__=Jr?Jr(null):{},this.size=0}function Vd(e){var i=this.has(e)&&delete this.__data__[e];return this.size-=i?1:0,i}function Hd(e){var i=this.__data__;if(Jr){var u=i[e];return u===p?t:u}return De.call(i,e)?i[e]:t}function Wd(e){var i=this.__data__;return Jr?i[e]!==t:De.call(i,e)}function Yd(e,i){var u=this.__data__;return this.size+=this.has(e)?0:1,u[e]=Jr&&i===t?p:i,this}tr.prototype.clear=Gd,tr.prototype.delete=Vd,tr.prototype.get=Hd,tr.prototype.has=Wd,tr.prototype.set=Yd;function Dt(e){var i=-1,u=e==null?0:e.length;for(this.clear();++i<u;){var c=e[i];this.set(c[0],c[1])}}function zd(){this.__data__=[],this.size=0}function Qd(e){var i=this.__data__,u=Zi(i,e);if(u<0)return!1;var c=i.length-1;return u==c?i.pop():Wi.call(i,u,1),--this.size,!0}function Kd(e){var i=this.__data__,u=Zi(i,e);return u<0?t:i[u][1]}function Jd(e){return Zi(this.__data__,e)>-1}function Xd(e,i){var u=this.__data__,c=Zi(u,e);return c<0?(++this.size,u.push([e,i])):u[c][1]=i,this}Dt.prototype.clear=zd,Dt.prototype.delete=Qd,Dt.prototype.get=Kd,Dt.prototype.has=Jd,Dt.prototype.set=Xd;function vt(e){var i=-1,u=e==null?0:e.length;for(this.clear();++i<u;){var c=e[i];this.set(c[0],c[1])}}function Zd(){this.size=0,this.__data__={hash:new tr,map:new(Qr||Dt),string:new tr}}function eg(e){var i=fs(this,e).delete(e);return this.size-=i?1:0,i}function ng(e){return fs(this,e).get(e)}function tg(e){return fs(this,e).has(e)}function rg(e,i){var u=fs(this,e),c=u.size;return u.set(e,i),this.size+=u.size==c?0:1,this}vt.prototype.clear=Zd,vt.prototype.delete=eg,vt.prototype.get=ng,vt.prototype.has=tg,vt.prototype.set=rg;function rr(e){var i=-1,u=e==null?0:e.length;for(this.__data__=new vt;++i<u;)this.add(e[i])}function ig(e){return this.__data__.set(e,p),this}function sg(e){return this.__data__.has(e)}rr.prototype.add=rr.prototype.push=ig,rr.prototype.has=sg;function Wn(e){var i=this.__data__=new Dt(e);this.size=i.size}function og(){this.__data__=new Dt,this.size=0}function ag(e){var i=this.__data__,u=i.delete(e);return this.size=i.size,u}function ug(e){return this.__data__.get(e)}function lg(e){return this.__data__.has(e)}function cg(e,i){var u=this.__data__;if(u instanceof Dt){var c=u.__data__;if(!Qr||c.length<s-1)return c.push([e,i]),this.size=++u.size,this;u=this.__data__=new vt(c)}return u.set(e,i),this.size=u.size,this}Wn.prototype.clear=og,Wn.prototype.delete=ag,Wn.prototype.get=ug,Wn.prototype.has=lg,Wn.prototype.set=cg;function rl(e,i){var u=Z(e),c=!u&&ur(e),h=!u&&!c&&Ht(e),g=!u&&!c&&!h&&kr(e),v=u||c||h||g,E=v?To(e.length,Ed):[],I=E.length;for(var x in e)(i||De.call(e,x))&&!(v&&(x=="length"||h&&(x=="offset"||x=="parent")||g&&(x=="buffer"||x=="byteLength"||x=="byteOffset")||Tt(x,I)))&&E.push(x);return E}function il(e){var i=e.length;return i?e[Mo(0,i-1)]:t}function fg(e,i){return ps(hn(e),ir(i,0,e.length))}function pg(e){return ps(hn(e))}function xo(e,i,u){(u!==t&&!Yn(e[i],u)||u===t&&!(i in e))&&yt(e,i,u)}function Zr(e,i,u){var c=e[i];(!(De.call(e,i)&&Yn(c,u))||u===t&&!(i in e))&&yt(e,i,u)}function Zi(e,i){for(var u=e.length;u--;)if(Yn(e[u][0],i))return u;return-1}function hg(e,i,u,c){return qt(e,function(h,g,v){i(c,h,u(h),v)}),c}function sl(e,i){return e&&ut(i,ze(i),e)}function dg(e,i){return e&&ut(i,gn(i),e)}function yt(e,i,u){i=="__proto__"&&Yi?Yi(e,i,{configurable:!0,enumerable:!0,value:u,writable:!0}):e[i]=u}function Fo(e,i){for(var u=-1,c=i.length,h=_(c),g=e==null;++u<c;)h[u]=g?t:ca(e,i[u]);return h}function ir(e,i,u){return e===e&&(u!==t&&(e=e<=u?e:u),i!==t&&(e=e>=i?e:i)),e}function Pn(e,i,u,c,h,g){var v,E=i&y,I=i&A,x=i&S;if(u&&(v=h?u(e,c,h,g):u(e)),v!==t)return v;if(!Ce(e))return e;var F=Z(e);if(F){if(v=tm(e),!E)return hn(e,v)}else{var k=rn(e),B=k==nn||k==au;if(Ht(e))return xl(e,E);if(k==mt||k==U||B&&!h){if(v=I||B?{}:zl(e),!E)return I?Hg(e,dg(v,e)):Vg(e,sl(v,e))}else{if(!_e[k])return h?e:{};v=rm(e,k,E)}}g||(g=new Wn);var V=g.get(e);if(V)return V;g.set(e,v),Ic(e)?e.forEach(function(Q){v.add(Pn(Q,i,u,Q,e,g))}):bc(e)&&e.forEach(function(Q,se){v.set(se,Pn(Q,i,u,se,e,g))});var z=x?I?Ko:Qo:I?gn:ze,te=F?t:z(e);return Rn(te||e,function(Q,se){te&&(se=Q,Q=e[se]),Zr(v,se,Pn(Q,i,u,se,e,g))}),v}function gg(e){var i=ze(e);return function(u){return ol(u,e,i)}}function ol(e,i,u){var c=u.length;if(e==null)return!c;for(e=be(e);c--;){var h=u[c],g=i[h],v=e[h];if(v===t&&!(h in e)||!g(v))return!1}return!0}function al(e,i,u){if(typeof e!="function")throw new On(l);return oi(function(){e.apply(t,u)},i)}function ei(e,i,u,c){var h=-1,g=Li,v=!0,E=e.length,I=[],x=i.length;if(!E)return I;u&&(i=Ae(i,bn(u))),c?(g=mo,v=!1):i.length>=s&&(g=Yr,v=!1,i=new rr(i));e:for(;++h<E;){var F=e[h],k=u==null?F:u(F);if(F=c||F!==0?F:0,v&&k===k){for(var B=x;B--;)if(i[B]===k)continue e;I.push(F)}else g(i,k,c)||I.push(F)}return I}var qt=kl(at),ul=kl(Ro,!0);function mg(e,i){var u=!0;return qt(e,function(c,h,g){return u=!!i(c,h,g),u}),u}function es(e,i,u){for(var c=-1,h=e.length;++c<h;){var g=e[c],v=i(g);if(v!=null&&(E===t?v===v&&!In(v):u(v,E)))var E=v,I=g}return I}function Dg(e,i,u,c){var h=e.length;for(u=ne(u),u<0&&(u=-u>h?0:h+u),c=c===t||c>h?h:ne(c),c<0&&(c+=h),c=u>c?0:Sc(c);u<c;)e[u++]=i;return e}function ll(e,i){var u=[];return qt(e,function(c,h,g){i(c,h,g)&&u.push(c)}),u}function Xe(e,i,u,c,h){var g=-1,v=e.length;for(u||(u=sm),h||(h=[]);++g<v;){var E=e[g];i>0&&u(E)?i>1?Xe(E,i-1,u,c,h):$t(h,E):c||(h[h.length]=E)}return h}var Co=Pl(),cl=Pl(!0);function at(e,i){return e&&Co(e,i,ze)}function Ro(e,i){return e&&cl(e,i,ze)}function ns(e,i){return Bt(i,function(u){return It(e[u])})}function sr(e,i){i=Gt(i,e);for(var u=0,c=i.length;e!=null&&u<c;)e=e[lt(i[u++])];return u&&u==c?e:t}function fl(e,i,u){var c=i(e);return Z(e)?c:$t(c,u(e))}function un(e){return e==null?e===t?Wp:Vp:nr&&nr in be(e)?Zg(e):pm(e)}function Oo(e,i){return e>i}function vg(e,i){return e!=null&&De.call(e,i)}function yg(e,i){return e!=null&&i in be(e)}function Eg(e,i,u){return e>=tn(i,u)&&e<Ye(i,u)}function ko(e,i,u){for(var c=u?mo:Li,h=e[0].length,g=e.length,v=g,E=_(g),I=1/0,x=[];v--;){var F=e[v];v&&i&&(F=Ae(F,bn(i))),I=tn(F.length,I),E[v]=!u&&(i||h>=120&&F.length>=120)?new rr(v&&F):t}F=e[0];var k=-1,B=E[0];e:for(;++k<h&&x.length<I;){var V=F[k],z=i?i(V):V;if(V=u||V!==0?V:0,!(B?Yr(B,z):c(x,z,u))){for(v=g;--v;){var te=E[v];if(!(te?Yr(te,z):c(e[v],z,u)))continue e}B&&B.push(z),x.push(V)}}return x}function bg(e,i,u,c){return at(e,function(h,g,v){i(c,u(h),g,v)}),c}function ni(e,i,u){i=Gt(i,e),e=Xl(e,i);var c=e==null?e:e[lt(Bn(i))];return c==null?t:En(c,e,u)}function pl(e){return Pe(e)&&un(e)==U}function Tg(e){return Pe(e)&&un(e)==Wr}function Ig(e){return Pe(e)&&un(e)==Fn}function ti(e,i,u,c,h){return e===i?!0:e==null||i==null||!Pe(e)&&!Pe(i)?e!==e&&i!==i:_g(e,i,u,c,ti,h)}function _g(e,i,u,c,h,g){var v=Z(e),E=Z(i),I=v?he:rn(e),x=E?he:rn(i);I=I==U?mt:I,x=x==U?mt:x;var F=I==mt,k=x==mt,B=I==x;if(B&&Ht(e)){if(!Ht(i))return!1;v=!0,F=!1}if(B&&!F)return g||(g=new Wn),v||kr(e)?Hl(e,i,u,c,h,g):Jg(e,i,I,u,c,h,g);if(!(u&R)){var V=F&&De.call(e,"__wrapped__"),z=k&&De.call(i,"__wrapped__");if(V||z){var te=V?e.value():e,Q=z?i.value():i;return g||(g=new Wn),h(te,Q,u,c,g)}}return B?(g||(g=new Wn),Xg(e,i,u,c,h,g)):!1}function Sg(e){return Pe(e)&&rn(e)==Gn}function Po(e,i,u,c){var h=u.length,g=h,v=!c;if(e==null)return!g;for(e=be(e);h--;){var E=u[h];if(v&&E[2]?E[1]!==e[E[0]]:!(E[0]in e))return!1}for(;++h<g;){E=u[h];var I=E[0],x=e[I],F=E[1];if(v&&E[2]){if(x===t&&!(I in e))return!1}else{var k=new Wn;if(c)var B=c(x,F,I,e,i,k);if(!(B===t?ti(F,x,R|L,c,k):B))return!1}}return!0}function hl(e){if(!Ce(e)||am(e))return!1;var i=It(e)?Sd:gh;return i.test(ar(e))}function wg(e){return Pe(e)&&un(e)==Gr}function Ng(e){return Pe(e)&&rn(e)==Vn}function Ag(e){return Pe(e)&&vs(e.length)&&!!Ne[un(e)]}function dl(e){return typeof e=="function"?e:e==null?mn:typeof e=="object"?Z(e)?Dl(e[0],e[1]):ml(e):Lc(e)}function Lo(e){if(!si(e))return Cd(e);var i=[];for(var u in be(e))De.call(e,u)&&u!="constructor"&&i.push(u);return i}function xg(e){if(!Ce(e))return fm(e);var i=si(e),u=[];for(var c in e)c=="constructor"&&(i||!De.call(e,c))||u.push(c);return u}function Bo(e,i){return e<i}function gl(e,i){var u=-1,c=dn(e)?_(e.length):[];return qt(e,function(h,g,v){c[++u]=i(h,g,v)}),c}function ml(e){var i=Xo(e);return i.length==1&&i[0][2]?Kl(i[0][0],i[0][1]):function(u){return u===e||Po(u,e,i)}}function Dl(e,i){return ea(e)&&Ql(i)?Kl(lt(e),i):function(u){var c=ca(u,e);return c===t&&c===i?fa(u,e):ti(i,c,R|L)}}function ts(e,i,u,c,h){e!==i&&Co(i,function(g,v){if(h||(h=new Wn),Ce(g))Fg(e,i,v,u,ts,c,h);else{var E=c?c(ta(e,v),g,v+"",e,i,h):t;E===t&&(E=g),xo(e,v,E)}},gn)}function Fg(e,i,u,c,h,g,v){var E=ta(e,u),I=ta(i,u),x=v.get(I);if(x){xo(e,u,x);return}var F=g?g(E,I,u+"",e,i,v):t,k=F===t;if(k){var B=Z(I),V=!B&&Ht(I),z=!B&&!V&&kr(I);F=I,B||V||z?Z(E)?F=E:Me(E)?F=hn(E):V?(k=!1,F=xl(I,!0)):z?(k=!1,F=Fl(I,!0)):F=[]:ai(I)||ur(I)?(F=E,ur(E)?F=wc(E):(!Ce(E)||It(E))&&(F=zl(I))):k=!1}k&&(v.set(I,F),h(F,I,c,g,v),v.delete(I)),xo(e,u,F)}function vl(e,i){var u=e.length;if(u)return i+=i<0?u:0,Tt(i,u)?e[i]:t}function yl(e,i,u){i.length?i=Ae(i,function(g){return Z(g)?function(v){return sr(v,g.length===1?g[0]:g)}:g}):i=[mn];var c=-1;i=Ae(i,bn(Y()));var h=gl(e,function(g,v,E){var I=Ae(i,function(x){return x(g)});return{criteria:I,index:++c,value:g}});return rd(h,function(g,v){return Gg(g,v,u)})}function Cg(e,i){return El(e,i,function(u,c){return fa(e,c)})}function El(e,i,u){for(var c=-1,h=i.length,g={};++c<h;){var v=i[c],E=sr(e,v);u(E,v)&&ri(g,Gt(v,e),E)}return g}function Rg(e){return function(i){return sr(i,e)}}function $o(e,i,u,c){var h=c?td:Ir,g=-1,v=i.length,E=e;for(e===i&&(i=hn(i)),u&&(E=Ae(e,bn(u)));++g<v;)for(var I=0,x=i[g],F=u?u(x):x;(I=h(E,F,I,c))>-1;)E!==e&&Wi.call(E,I,1),Wi.call(e,I,1);return e}function bl(e,i){for(var u=e?i.length:0,c=u-1;u--;){var h=i[u];if(u==c||h!==g){var g=h;Tt(h)?Wi.call(e,h,1):jo(e,h)}}return e}function Mo(e,i){return e+Qi(nl()*(i-e+1))}function Og(e,i,u,c){for(var h=-1,g=Ye(zi((i-e)/(u||1)),0),v=_(g);g--;)v[c?g:++h]=e,e+=u;return v}function Uo(e,i){var u="";if(!e||i<1||i>jn)return u;do i%2&&(u+=e),i=Qi(i/2),i&&(e+=e);while(i);return u}function re(e,i){return ra(Jl(e,i,mn),e+"")}function kg(e){return il(Pr(e))}function Pg(e,i){var u=Pr(e);return ps(u,ir(i,0,u.length))}function ri(e,i,u,c){if(!Ce(e))return e;i=Gt(i,e);for(var h=-1,g=i.length,v=g-1,E=e;E!=null&&++h<g;){var I=lt(i[h]),x=u;if(I==="__proto__"||I==="constructor"||I==="prototype")return e;if(h!=v){var F=E[I];x=c?c(F,I,E):t,x===t&&(x=Ce(F)?F:Tt(i[h+1])?[]:{})}Zr(E,I,x),E=E[I]}return e}var Tl=Ki?function(e,i){return Ki.set(e,i),e}:mn,Lg=Yi?function(e,i){return Yi(e,"toString",{configurable:!0,enumerable:!1,value:ha(i),writable:!0})}:mn;function Bg(e){return ps(Pr(e))}function Ln(e,i,u){var c=-1,h=e.length;i<0&&(i=-i>h?0:h+i),u=u>h?h:u,u<0&&(u+=h),h=i>u?0:u-i>>>0,i>>>=0;for(var g=_(h);++c<h;)g[c]=e[c+i];return g}function $g(e,i){var u;return qt(e,function(c,h,g){return u=i(c,h,g),!u}),!!u}function rs(e,i,u){var c=0,h=e==null?c:e.length;if(typeof i=="number"&&i===i&&h<=j){for(;c<h;){var g=c+h>>>1,v=e[g];v!==null&&!In(v)&&(u?v<=i:v<i)?c=g+1:h=g}return h}return qo(e,i,mn,u)}function qo(e,i,u,c){var h=0,g=e==null?0:e.length;if(g===0)return 0;i=u(i);for(var v=i!==i,E=i===null,I=In(i),x=i===t;h<g;){var F=Qi((h+g)/2),k=u(e[F]),B=k!==t,V=k===null,z=k===k,te=In(k);if(v)var Q=c||z;else x?Q=z&&(c||B):E?Q=z&&B&&(c||!V):I?Q=z&&B&&!V&&(c||!te):V||te?Q=!1:Q=c?k<=i:k<i;Q?h=F+1:g=F}return tn(g,w)}function Il(e,i){for(var u=-1,c=e.length,h=0,g=[];++u<c;){var v=e[u],E=i?i(v):v;if(!u||!Yn(E,I)){var I=E;g[h++]=v===0?0:v}}return g}function _l(e){return typeof e=="number"?e:In(e)?Zt:+e}function Tn(e){if(typeof e=="string")return e;if(Z(e))return Ae(e,Tn)+"";if(In(e))return tl?tl.call(e):"";var i=e+"";return i=="0"&&1/e==-ot?"-0":i}function jt(e,i,u){var c=-1,h=Li,g=e.length,v=!0,E=[],I=E;if(u)v=!1,h=mo;else if(g>=s){var x=i?null:Qg(e);if(x)return $i(x);v=!1,h=Yr,I=new rr}else I=i?[]:E;e:for(;++c<g;){var F=e[c],k=i?i(F):F;if(F=u||F!==0?F:0,v&&k===k){for(var B=I.length;B--;)if(I[B]===k)continue e;i&&I.push(k),E.push(F)}else h(I,k,u)||(I!==E&&I.push(k),E.push(F))}return E}function jo(e,i){return i=Gt(i,e),e=Xl(e,i),e==null||delete e[lt(Bn(i))]}function Sl(e,i,u,c){return ri(e,i,u(sr(e,i)),c)}function is(e,i,u,c){for(var h=e.length,g=c?h:-1;(c?g--:++g<h)&&i(e[g],g,e););return u?Ln(e,c?0:g,c?g+1:h):Ln(e,c?g+1:0,c?h:g)}function wl(e,i){var u=e;return u instanceof ae&&(u=u.value()),Do(i,function(c,h){return h.func.apply(h.thisArg,$t([c],h.args))},u)}function Go(e,i,u){var c=e.length;if(c<2)return c?jt(e[0]):[];for(var h=-1,g=_(c);++h<c;)for(var v=e[h],E=-1;++E<c;)E!=h&&(g[h]=ei(g[h]||v,e[E],i,u));return jt(Xe(g,1),i,u)}function Nl(e,i,u){for(var c=-1,h=e.length,g=i.length,v={};++c<h;){var E=c<g?i[c]:t;u(v,e[c],E)}return v}function Vo(e){return Me(e)?e:[]}function Ho(e){return typeof e=="function"?e:mn}function Gt(e,i){return Z(e)?e:ea(e,i)?[e]:tc(ge(e))}var Mg=re;function Vt(e,i,u){var c=e.length;return u=u===t?c:u,!i&&u>=c?e:Ln(e,i,u)}var Al=wd||function(e){return Je.clearTimeout(e)};function xl(e,i){if(i)return e.slice();var u=e.length,c=Ku?Ku(u):new e.constructor(u);return e.copy(c),c}function Wo(e){var i=new e.constructor(e.byteLength);return new Vi(i).set(new Vi(e)),i}function Ug(e,i){var u=i?Wo(e.buffer):e.buffer;return new e.constructor(u,e.byteOffset,e.byteLength)}function qg(e){var i=new e.constructor(e.source,pu.exec(e));return i.lastIndex=e.lastIndex,i}function jg(e){return Xr?be(Xr.call(e)):{}}function Fl(e,i){var u=i?Wo(e.buffer):e.buffer;return new e.constructor(u,e.byteOffset,e.length)}function Cl(e,i){if(e!==i){var u=e!==t,c=e===null,h=e===e,g=In(e),v=i!==t,E=i===null,I=i===i,x=In(i);if(!E&&!x&&!g&&e>i||g&&v&&I&&!E&&!x||c&&v&&I||!u&&I||!h)return 1;if(!c&&!g&&!x&&e<i||x&&u&&h&&!c&&!g||E&&u&&h||!v&&h||!I)return-1}return 0}function Gg(e,i,u){for(var c=-1,h=e.criteria,g=i.criteria,v=h.length,E=u.length;++c<v;){var I=Cl(h[c],g[c]);if(I){if(c>=E)return I;var x=u[c];return I*(x=="desc"?-1:1)}}return e.index-i.index}function Rl(e,i,u,c){for(var h=-1,g=e.length,v=u.length,E=-1,I=i.length,x=Ye(g-v,0),F=_(I+x),k=!c;++E<I;)F[E]=i[E];for(;++h<v;)(k||h<g)&&(F[u[h]]=e[h]);for(;x--;)F[E++]=e[h++];return F}function Ol(e,i,u,c){for(var h=-1,g=e.length,v=-1,E=u.length,I=-1,x=i.length,F=Ye(g-E,0),k=_(F+x),B=!c;++h<F;)k[h]=e[h];for(var V=h;++I<x;)k[V+I]=i[I];for(;++v<E;)(B||h<g)&&(k[V+u[v]]=e[h++]);return k}function hn(e,i){var u=-1,c=e.length;for(i||(i=_(c));++u<c;)i[u]=e[u];return i}function ut(e,i,u,c){var h=!u;u||(u={});for(var g=-1,v=i.length;++g<v;){var E=i[g],I=c?c(u[E],e[E],E,u,e):t;I===t&&(I=e[E]),h?yt(u,E,I):Zr(u,E,I)}return u}function Vg(e,i){return ut(e,Zo(e),i)}function Hg(e,i){return ut(e,Wl(e),i)}function ss(e,i){return function(u,c){var h=Z(u)?Kh:hg,g=i?i():{};return h(u,e,Y(c,2),g)}}function Cr(e){return re(function(i,u){var c=-1,h=u.length,g=h>1?u[h-1]:t,v=h>2?u[2]:t;for(g=e.length>3&&typeof g=="function"?(h--,g):t,v&&ln(u[0],u[1],v)&&(g=h<3?t:g,h=1),i=be(i);++c<h;){var E=u[c];E&&e(i,E,c,g)}return i})}function kl(e,i){return function(u,c){if(u==null)return u;if(!dn(u))return e(u,c);for(var h=u.length,g=i?h:-1,v=be(u);(i?g--:++g<h)&&c(v[g],g,v)!==!1;);return u}}function Pl(e){return function(i,u,c){for(var h=-1,g=be(i),v=c(i),E=v.length;E--;){var I=v[e?E:++h];if(u(g[I],I,g)===!1)break}return i}}function Wg(e,i,u){var c=i&H,h=ii(e);function g(){var v=this&&this!==Je&&this instanceof g?h:e;return v.apply(c?u:this,arguments)}return g}function Ll(e){return function(i){i=ge(i);var u=_r(i)?Hn(i):t,c=u?u[0]:i.charAt(0),h=u?Vt(u,1).join(""):i.slice(1);return c[e]()+h}}function Rr(e){return function(i){return Do(kc(Oc(i).replace(Lh,"")),e,"")}}function ii(e){return function(){var i=arguments;switch(i.length){case 0:return new e;case 1:return new e(i[0]);case 2:return new e(i[0],i[1]);case 3:return new e(i[0],i[1],i[2]);case 4:return new e(i[0],i[1],i[2],i[3]);case 5:return new e(i[0],i[1],i[2],i[3],i[4]);case 6:return new e(i[0],i[1],i[2],i[3],i[4],i[5]);case 7:return new e(i[0],i[1],i[2],i[3],i[4],i[5],i[6])}var u=Fr(e.prototype),c=e.apply(u,i);return Ce(c)?c:u}}function Yg(e,i,u){var c=ii(e);function h(){for(var g=arguments.length,v=_(g),E=g,I=Or(h);E--;)v[E]=arguments[E];var x=g<3&&v[0]!==I&&v[g-1]!==I?[]:Mt(v,I);if(g-=x.length,g<u)return ql(e,i,os,h.placeholder,t,v,x,t,t,u-g);var F=this&&this!==Je&&this instanceof h?c:e;return En(F,this,v)}return h}function Bl(e){return function(i,u,c){var h=be(i);if(!dn(i)){var g=Y(u,3);i=ze(i),u=function(E){return g(h[E],E,h)}}var v=e(i,u,c);return v>-1?h[g?i[v]:v]:t}}function $l(e){return bt(function(i){var u=i.length,c=u,h=kn.prototype.thru;for(e&&i.reverse();c--;){var g=i[c];if(typeof g!="function")throw new On(l);if(h&&!v&&cs(g)=="wrapper")var v=new kn([],!0)}for(c=v?c:u;++c<u;){g=i[c];var E=cs(g),I=E=="wrapper"?Jo(g):t;I&&na(I[0])&&I[1]==(en|me|ke|gt)&&!I[4].length&&I[9]==1?v=v[cs(I[0])].apply(v,I[3]):v=g.length==1&&na(g)?v[E]():v.thru(g)}return function(){var x=arguments,F=x[0];if(v&&x.length==1&&Z(F))return v.plant(F).value();for(var k=0,B=u?i[k].apply(this,x):F;++k<u;)B=i[k].call(this,B);return B}})}function os(e,i,u,c,h,g,v,E,I,x){var F=i&en,k=i&H,B=i&ce,V=i&(me|Fe),z=i&O,te=B?t:ii(e);function Q(){for(var se=arguments.length,le=_(se),_n=se;_n--;)le[_n]=arguments[_n];if(V)var cn=Or(Q),Sn=sd(le,cn);if(c&&(le=Rl(le,c,h,V)),g&&(le=Ol(le,g,v,V)),se-=Sn,V&&se<x){var Ue=Mt(le,cn);return ql(e,i,os,Q.placeholder,u,le,Ue,E,I,x-se)}var zn=k?u:this,St=B?zn[e]:e;return se=le.length,E?le=hm(le,E):z&&se>1&&le.reverse(),F&&I<se&&(le.length=I),this&&this!==Je&&this instanceof Q&&(St=te||ii(St)),St.apply(zn,le)}return Q}function Ml(e,i){return function(u,c){return bg(u,e,i(c),{})}}function as(e,i){return function(u,c){var h;if(u===t&&c===t)return i;if(u!==t&&(h=u),c!==t){if(h===t)return c;typeof u=="string"||typeof c=="string"?(u=Tn(u),c=Tn(c)):(u=_l(u),c=_l(c)),h=e(u,c)}return h}}function Yo(e){return bt(function(i){return i=Ae(i,bn(Y())),re(function(u){var c=this;return e(i,function(h){return En(h,c,u)})})})}function us(e,i){i=i===t?" ":Tn(i);var u=i.length;if(u<2)return u?Uo(i,e):i;var c=Uo(i,zi(e/Sr(i)));return _r(i)?Vt(Hn(c),0,e).join(""):c.slice(0,e)}function zg(e,i,u,c){var h=i&H,g=ii(e);function v(){for(var E=-1,I=arguments.length,x=-1,F=c.length,k=_(F+I),B=this&&this!==Je&&this instanceof v?g:e;++x<F;)k[x]=c[x];for(;I--;)k[x++]=arguments[++E];return En(B,h?u:this,k)}return v}function Ul(e){return function(i,u,c){return c&&typeof c!="number"&&ln(i,u,c)&&(u=c=t),i=_t(i),u===t?(u=i,i=0):u=_t(u),c=c===t?i<u?1:-1:_t(c),Og(i,u,c,e)}}function ls(e){return function(i,u){return typeof i=="string"&&typeof u=="string"||(i=$n(i),u=$n(u)),e(i,u)}}function ql(e,i,u,c,h,g,v,E,I,x){var F=i&me,k=F?v:t,B=F?t:v,V=F?g:t,z=F?t:g;i|=F?ke:on,i&=~(F?on:ke),i&we||(i&=~(H|ce));var te=[e,i,h,V,k,z,B,E,I,x],Q=u.apply(t,te);return na(e)&&Zl(Q,te),Q.placeholder=c,ec(Q,e,i)}function zo(e){var i=We[e];return function(u,c){if(u=$n(u),c=c==null?0:tn(ne(c),292),c&&el(u)){var h=(ge(u)+"e").split("e"),g=i(h[0]+"e"+(+h[1]+c));return h=(ge(g)+"e").split("e"),+(h[0]+"e"+(+h[1]-c))}return i(u)}}var Qg=Ar&&1/$i(new Ar([,-0]))[1]==ot?function(e){return new Ar(e)}:ma;function jl(e){return function(i){var u=rn(i);return u==Gn?_o(i):u==Vn?pd(i):id(i,e(i))}}function Et(e,i,u,c,h,g,v,E){var I=i&ce;if(!I&&typeof e!="function")throw new On(l);var x=c?c.length:0;if(x||(i&=~(ke|on),c=h=t),v=v===t?v:Ye(ne(v),0),E=E===t?E:ne(E),x-=h?h.length:0,i&on){var F=c,k=h;c=h=t}var B=I?t:Jo(e),V=[e,i,u,c,h,F,k,g,v,E];if(B&&cm(V,B),e=V[0],i=V[1],u=V[2],c=V[3],h=V[4],E=V[9]=V[9]===t?I?0:e.length:Ye(V[9]-x,0),!E&&i&(me|Fe)&&(i&=~(me|Fe)),!i||i==H)var z=Wg(e,i,u);else i==me||i==Fe?z=Yg(e,i,E):(i==ke||i==(H|ke))&&!h.length?z=zg(e,i,u,c):z=os.apply(t,V);var te=B?Tl:Zl;return ec(te(z,V),e,i)}function Gl(e,i,u,c){return e===t||Yn(e,Nr[u])&&!De.call(c,u)?i:e}function Vl(e,i,u,c,h,g){return Ce(e)&&Ce(i)&&(g.set(i,e),ts(e,i,t,Vl,g),g.delete(i)),e}function Kg(e){return ai(e)?t:e}function Hl(e,i,u,c,h,g){var v=u&R,E=e.length,I=i.length;if(E!=I&&!(v&&I>E))return!1;var x=g.get(e),F=g.get(i);if(x&&F)return x==i&&F==e;var k=-1,B=!0,V=u&L?new rr:t;for(g.set(e,i),g.set(i,e);++k<E;){var z=e[k],te=i[k];if(c)var Q=v?c(te,z,k,i,e,g):c(z,te,k,e,i,g);if(Q!==t){if(Q)continue;B=!1;break}if(V){if(!vo(i,function(se,le){if(!Yr(V,le)&&(z===se||h(z,se,u,c,g)))return V.push(le)})){B=!1;break}}else if(!(z===te||h(z,te,u,c,g))){B=!1;break}}return g.delete(e),g.delete(i),B}function Jg(e,i,u,c,h,g,v){switch(u){case br:if(e.byteLength!=i.byteLength||e.byteOffset!=i.byteOffset)return!1;e=e.buffer,i=i.buffer;case Wr:return!(e.byteLength!=i.byteLength||!g(new Vi(e),new Vi(i)));case de:case Fn:case jr:return Yn(+e,+i);case Lt:return e.name==i.name&&e.message==i.message;case Gr:case Vr:return e==i+"";case Gn:var E=_o;case Vn:var I=c&R;if(E||(E=$i),e.size!=i.size&&!I)return!1;var x=v.get(e);if(x)return x==i;c|=L,v.set(e,i);var F=Hl(E(e),E(i),c,h,g,v);return v.delete(e),F;case Ri:if(Xr)return Xr.call(e)==Xr.call(i)}return!1}function Xg(e,i,u,c,h,g){var v=u&R,E=Qo(e),I=E.length,x=Qo(i),F=x.length;if(I!=F&&!v)return!1;for(var k=I;k--;){var B=E[k];if(!(v?B in i:De.call(i,B)))return!1}var V=g.get(e),z=g.get(i);if(V&&z)return V==i&&z==e;var te=!0;g.set(e,i),g.set(i,e);for(var Q=v;++k<I;){B=E[k];var se=e[B],le=i[B];if(c)var _n=v?c(le,se,B,i,e,g):c(se,le,B,e,i,g);if(!(_n===t?se===le||h(se,le,u,c,g):_n)){te=!1;break}Q||(Q=B=="constructor")}if(te&&!Q){var cn=e.constructor,Sn=i.constructor;cn!=Sn&&"constructor"in e&&"constructor"in i&&!(typeof cn=="function"&&cn instanceof cn&&typeof Sn=="function"&&Sn instanceof Sn)&&(te=!1)}return g.delete(e),g.delete(i),te}function bt(e){return ra(Jl(e,t,oc),e+"")}function Qo(e){return fl(e,ze,Zo)}function Ko(e){return fl(e,gn,Wl)}var Jo=Ki?function(e){return Ki.get(e)}:ma;function cs(e){for(var i=e.name+"",u=xr[i],c=De.call(xr,i)?u.length:0;c--;){var h=u[c],g=h.func;if(g==null||g==e)return h.name}return i}function Or(e){var i=De.call(d,"placeholder")?d:e;return i.placeholder}function Y(){var e=d.iteratee||da;return e=e===da?dl:e,arguments.length?e(arguments[0],arguments[1]):e}function fs(e,i){var u=e.__data__;return om(i)?u[typeof i=="string"?"string":"hash"]:u.map}function Xo(e){for(var i=ze(e),u=i.length;u--;){var c=i[u],h=e[c];i[u]=[c,h,Ql(h)]}return i}function or(e,i){var u=ld(e,i);return hl(u)?u:t}function Zg(e){var i=De.call(e,nr),u=e[nr];try{e[nr]=t;var c=!0}catch{}var h=ji.call(e);return c&&(i?e[nr]=u:delete e[nr]),h}var Zo=wo?function(e){return e==null?[]:(e=be(e),Bt(wo(e),function(i){return Xu.call(e,i)}))}:Da,Wl=wo?function(e){for(var i=[];e;)$t(i,Zo(e)),e=Hi(e);return i}:Da,rn=un;(No&&rn(new No(new ArrayBuffer(1)))!=br||Qr&&rn(new Qr)!=Gn||Ao&&rn(Ao.resolve())!=uu||Ar&&rn(new Ar)!=Vn||Kr&&rn(new Kr)!=Hr)&&(rn=function(e){var i=un(e),u=i==mt?e.constructor:t,c=u?ar(u):"";if(c)switch(c){case Pd:return br;case Ld:return Gn;case Bd:return uu;case $d:return Vn;case Md:return Hr}return i});function em(e,i,u){for(var c=-1,h=u.length;++c<h;){var g=u[c],v=g.size;switch(g.type){case"drop":e+=v;break;case"dropRight":i-=v;break;case"take":i=tn(i,e+v);break;case"takeRight":e=Ye(e,i-v);break}}return{start:e,end:i}}function nm(e){var i=e.match(ah);return i?i[1].split(uh):[]}function Yl(e,i,u){i=Gt(i,e);for(var c=-1,h=i.length,g=!1;++c<h;){var v=lt(i[c]);if(!(g=e!=null&&u(e,v)))break;e=e[v]}return g||++c!=h?g:(h=e==null?0:e.length,!!h&&vs(h)&&Tt(v,h)&&(Z(e)||ur(e)))}function tm(e){var i=e.length,u=new e.constructor(i);return i&&typeof e[0]=="string"&&De.call(e,"index")&&(u.index=e.index,u.input=e.input),u}function zl(e){return typeof e.constructor=="function"&&!si(e)?Fr(Hi(e)):{}}function rm(e,i,u){var c=e.constructor;switch(i){case Wr:return Wo(e);case de:case Fn:return new c(+e);case br:return Ug(e,u);case Js:case Xs:case Zs:case eo:case no:case to:case ro:case io:case so:return Fl(e,u);case Gn:return new c;case jr:case Vr:return new c(e);case Gr:return qg(e);case Vn:return new c;case Ri:return jg(e)}}function im(e,i){var u=i.length;if(!u)return e;var c=u-1;return i[c]=(u>1?"& ":"")+i[c],i=i.join(u>2?", ":" "),e.replace(oh,`{
/* [wrapped with `+i+`] */
`)}function sm(e){return Z(e)||ur(e)||!!(Zu&&e&&e[Zu])}function Tt(e,i){var u=typeof e;return i=i??jn,!!i&&(u=="number"||u!="symbol"&&Dh.test(e))&&e>-1&&e%1==0&&e<i}function ln(e,i,u){if(!Ce(u))return!1;var c=typeof i;return(c=="number"?dn(u)&&Tt(i,u.length):c=="string"&&i in u)?Yn(u[i],e):!1}function ea(e,i){if(Z(e))return!1;var u=typeof e;return u=="number"||u=="symbol"||u=="boolean"||e==null||In(e)?!0:th.test(e)||!nh.test(e)||i!=null&&e in be(i)}function om(e){var i=typeof e;return i=="string"||i=="number"||i=="symbol"||i=="boolean"?e!=="__proto__":e===null}function na(e){var i=cs(e),u=d[i];if(typeof u!="function"||!(i in ae.prototype))return!1;if(e===u)return!0;var c=Jo(u);return!!c&&e===c[0]}function am(e){return!!Qu&&Qu in e}var um=Ui?It:va;function si(e){var i=e&&e.constructor,u=typeof i=="function"&&i.prototype||Nr;return e===u}function Ql(e){return e===e&&!Ce(e)}function Kl(e,i){return function(u){return u==null?!1:u[e]===i&&(i!==t||e in be(u))}}function lm(e){var i=ms(e,function(c){return u.size===m&&u.clear(),c}),u=i.cache;return i}function cm(e,i){var u=e[1],c=i[1],h=u|c,g=h<(H|ce|en),v=c==en&&u==me||c==en&&u==gt&&e[7].length<=i[8]||c==(en|gt)&&i[7].length<=i[8]&&u==me;if(!(g||v))return e;c&H&&(e[2]=i[2],h|=u&H?0:we);var E=i[3];if(E){var I=e[3];e[3]=I?Rl(I,E,i[4]):E,e[4]=I?Mt(e[3],D):i[4]}return E=i[5],E&&(I=e[5],e[5]=I?Ol(I,E,i[6]):E,e[6]=I?Mt(e[5],D):i[6]),E=i[7],E&&(e[7]=E),c&en&&(e[8]=e[8]==null?i[8]:tn(e[8],i[8])),e[9]==null&&(e[9]=i[9]),e[0]=i[0],e[1]=h,e}function fm(e){var i=[];if(e!=null)for(var u in be(e))i.push(u);return i}function pm(e){return ji.call(e)}function Jl(e,i,u){return i=Ye(i===t?e.length-1:i,0),function(){for(var c=arguments,h=-1,g=Ye(c.length-i,0),v=_(g);++h<g;)v[h]=c[i+h];h=-1;for(var E=_(i+1);++h<i;)E[h]=c[h];return E[i]=u(v),En(e,this,E)}}function Xl(e,i){return i.length<2?e:sr(e,Ln(i,0,-1))}function hm(e,i){for(var u=e.length,c=tn(i.length,u),h=hn(e);c--;){var g=i[c];e[c]=Tt(g,u)?h[g]:t}return e}function ta(e,i){if(!(i==="constructor"&&typeof e[i]=="function")&&i!="__proto__")return e[i]}var Zl=nc(Tl),oi=Ad||function(e,i){return Je.setTimeout(e,i)},ra=nc(Lg);function ec(e,i,u){var c=i+"";return ra(e,im(c,dm(nm(c),u)))}function nc(e){var i=0,u=0;return function(){var c=Rd(),h=Xt-(c-u);if(u=c,h>0){if(++i>=Pt)return arguments[0]}else i=0;return e.apply(t,arguments)}}function ps(e,i){var u=-1,c=e.length,h=c-1;for(i=i===t?c:i;++u<i;){var g=Mo(u,h),v=e[g];e[g]=e[u],e[u]=v}return e.length=i,e}var tc=lm(function(e){var i=[];return e.charCodeAt(0)===46&&i.push(""),e.replace(rh,function(u,c,h,g){i.push(h?g.replace(fh,"$1"):c||u)}),i});function lt(e){if(typeof e=="string"||In(e))return e;var i=e+"";return i=="0"&&1/e==-ot?"-0":i}function ar(e){if(e!=null){try{return qi.call(e)}catch{}try{return e+""}catch{}}return""}function dm(e,i){return Rn($,function(u){var c="_."+u[0];i&u[1]&&!Li(e,c)&&e.push(c)}),e.sort()}function rc(e){if(e instanceof ae)return e.clone();var i=new kn(e.__wrapped__,e.__chain__);return i.__actions__=hn(e.__actions__),i.__index__=e.__index__,i.__values__=e.__values__,i}function gm(e,i,u){(u?ln(e,i,u):i===t)?i=1:i=Ye(ne(i),0);var c=e==null?0:e.length;if(!c||i<1)return[];for(var h=0,g=0,v=_(zi(c/i));h<c;)v[g++]=Ln(e,h,h+=i);return v}function mm(e){for(var i=-1,u=e==null?0:e.length,c=0,h=[];++i<u;){var g=e[i];g&&(h[c++]=g)}return h}function Dm(){var e=arguments.length;if(!e)return[];for(var i=_(e-1),u=arguments[0],c=e;c--;)i[c-1]=arguments[c];return $t(Z(u)?hn(u):[u],Xe(i,1))}var vm=re(function(e,i){return Me(e)?ei(e,Xe(i,1,Me,!0)):[]}),ym=re(function(e,i){var u=Bn(i);return Me(u)&&(u=t),Me(e)?ei(e,Xe(i,1,Me,!0),Y(u,2)):[]}),Em=re(function(e,i){var u=Bn(i);return Me(u)&&(u=t),Me(e)?ei(e,Xe(i,1,Me,!0),t,u):[]});function bm(e,i,u){var c=e==null?0:e.length;return c?(i=u||i===t?1:ne(i),Ln(e,i<0?0:i,c)):[]}function Tm(e,i,u){var c=e==null?0:e.length;return c?(i=u||i===t?1:ne(i),i=c-i,Ln(e,0,i<0?0:i)):[]}function Im(e,i){return e&&e.length?is(e,Y(i,3),!0,!0):[]}function _m(e,i){return e&&e.length?is(e,Y(i,3),!0):[]}function Sm(e,i,u,c){var h=e==null?0:e.length;return h?(u&&typeof u!="number"&&ln(e,i,u)&&(u=0,c=h),Dg(e,i,u,c)):[]}function ic(e,i,u){var c=e==null?0:e.length;if(!c)return-1;var h=u==null?0:ne(u);return h<0&&(h=Ye(c+h,0)),Bi(e,Y(i,3),h)}function sc(e,i,u){var c=e==null?0:e.length;if(!c)return-1;var h=c-1;return u!==t&&(h=ne(u),h=u<0?Ye(c+h,0):tn(h,c-1)),Bi(e,Y(i,3),h,!0)}function oc(e){var i=e==null?0:e.length;return i?Xe(e,1):[]}function wm(e){var i=e==null?0:e.length;return i?Xe(e,ot):[]}function Nm(e,i){var u=e==null?0:e.length;return u?(i=i===t?1:ne(i),Xe(e,i)):[]}function Am(e){for(var i=-1,u=e==null?0:e.length,c={};++i<u;){var h=e[i];c[h[0]]=h[1]}return c}function ac(e){return e&&e.length?e[0]:t}function xm(e,i,u){var c=e==null?0:e.length;if(!c)return-1;var h=u==null?0:ne(u);return h<0&&(h=Ye(c+h,0)),Ir(e,i,h)}function Fm(e){var i=e==null?0:e.length;return i?Ln(e,0,-1):[]}var Cm=re(function(e){var i=Ae(e,Vo);return i.length&&i[0]===e[0]?ko(i):[]}),Rm=re(function(e){var i=Bn(e),u=Ae(e,Vo);return i===Bn(u)?i=t:u.pop(),u.length&&u[0]===e[0]?ko(u,Y(i,2)):[]}),Om=re(function(e){var i=Bn(e),u=Ae(e,Vo);return i=typeof i=="function"?i:t,i&&u.pop(),u.length&&u[0]===e[0]?ko(u,t,i):[]});function km(e,i){return e==null?"":Fd.call(e,i)}function Bn(e){var i=e==null?0:e.length;return i?e[i-1]:t}function Pm(e,i,u){var c=e==null?0:e.length;if(!c)return-1;var h=c;return u!==t&&(h=ne(u),h=h<0?Ye(c+h,0):tn(h,c-1)),i===i?dd(e,i,h):Bi(e,qu,h,!0)}function Lm(e,i){return e&&e.length?vl(e,ne(i)):t}var Bm=re(uc);function uc(e,i){return e&&e.length&&i&&i.length?$o(e,i):e}function $m(e,i,u){return e&&e.length&&i&&i.length?$o(e,i,Y(u,2)):e}function Mm(e,i,u){return e&&e.length&&i&&i.length?$o(e,i,t,u):e}var Um=bt(function(e,i){var u=e==null?0:e.length,c=Fo(e,i);return bl(e,Ae(i,function(h){return Tt(h,u)?+h:h}).sort(Cl)),c});function qm(e,i){var u=[];if(!(e&&e.length))return u;var c=-1,h=[],g=e.length;for(i=Y(i,3);++c<g;){var v=e[c];i(v,c,e)&&(u.push(v),h.push(c))}return bl(e,h),u}function ia(e){return e==null?e:kd.call(e)}function jm(e,i,u){var c=e==null?0:e.length;return c?(u&&typeof u!="number"&&ln(e,i,u)?(i=0,u=c):(i=i==null?0:ne(i),u=u===t?c:ne(u)),Ln(e,i,u)):[]}function Gm(e,i){return rs(e,i)}function Vm(e,i,u){return qo(e,i,Y(u,2))}function Hm(e,i){var u=e==null?0:e.length;if(u){var c=rs(e,i);if(c<u&&Yn(e[c],i))return c}return-1}function Wm(e,i){return rs(e,i,!0)}function Ym(e,i,u){return qo(e,i,Y(u,2),!0)}function zm(e,i){var u=e==null?0:e.length;if(u){var c=rs(e,i,!0)-1;if(Yn(e[c],i))return c}return-1}function Qm(e){return e&&e.length?Il(e):[]}function Km(e,i){return e&&e.length?Il(e,Y(i,2)):[]}function Jm(e){var i=e==null?0:e.length;return i?Ln(e,1,i):[]}function Xm(e,i,u){return e&&e.length?(i=u||i===t?1:ne(i),Ln(e,0,i<0?0:i)):[]}function Zm(e,i,u){var c=e==null?0:e.length;return c?(i=u||i===t?1:ne(i),i=c-i,Ln(e,i<0?0:i,c)):[]}function e0(e,i){return e&&e.length?is(e,Y(i,3),!1,!0):[]}function n0(e,i){return e&&e.length?is(e,Y(i,3)):[]}var t0=re(function(e){return jt(Xe(e,1,Me,!0))}),r0=re(function(e){var i=Bn(e);return Me(i)&&(i=t),jt(Xe(e,1,Me,!0),Y(i,2))}),i0=re(function(e){var i=Bn(e);return i=typeof i=="function"?i:t,jt(Xe(e,1,Me,!0),t,i)});function s0(e){return e&&e.length?jt(e):[]}function o0(e,i){return e&&e.length?jt(e,Y(i,2)):[]}function a0(e,i){return i=typeof i=="function"?i:t,e&&e.length?jt(e,t,i):[]}function sa(e){if(!(e&&e.length))return[];var i=0;return e=Bt(e,function(u){if(Me(u))return i=Ye(u.length,i),!0}),To(i,function(u){return Ae(e,yo(u))})}function lc(e,i){if(!(e&&e.length))return[];var u=sa(e);return i==null?u:Ae(u,function(c){return En(i,t,c)})}var u0=re(function(e,i){return Me(e)?ei(e,i):[]}),l0=re(function(e){return Go(Bt(e,Me))}),c0=re(function(e){var i=Bn(e);return Me(i)&&(i=t),Go(Bt(e,Me),Y(i,2))}),f0=re(function(e){var i=Bn(e);return i=typeof i=="function"?i:t,Go(Bt(e,Me),t,i)}),p0=re(sa);function h0(e,i){return Nl(e||[],i||[],Zr)}function d0(e,i){return Nl(e||[],i||[],ri)}var g0=re(function(e){var i=e.length,u=i>1?e[i-1]:t;return u=typeof u=="function"?(e.pop(),u):t,lc(e,u)});function cc(e){var i=d(e);return i.__chain__=!0,i}function m0(e,i){return i(e),e}function hs(e,i){return i(e)}var D0=bt(function(e){var i=e.length,u=i?e[0]:0,c=this.__wrapped__,h=function(g){return Fo(g,e)};return i>1||this.__actions__.length||!(c instanceof ae)||!Tt(u)?this.thru(h):(c=c.slice(u,+u+(i?1:0)),c.__actions__.push({func:hs,args:[h],thisArg:t}),new kn(c,this.__chain__).thru(function(g){return i&&!g.length&&g.push(t),g}))});function v0(){return cc(this)}function y0(){return new kn(this.value(),this.__chain__)}function E0(){this.__values__===t&&(this.__values__=_c(this.value()));var e=this.__index__>=this.__values__.length,i=e?t:this.__values__[this.__index__++];return{done:e,value:i}}function b0(){return this}function T0(e){for(var i,u=this;u instanceof Xi;){var c=rc(u);c.__index__=0,c.__values__=t,i?h.__wrapped__=c:i=c;var h=c;u=u.__wrapped__}return h.__wrapped__=e,i}function I0(){var e=this.__wrapped__;if(e instanceof ae){var i=e;return this.__actions__.length&&(i=new ae(this)),i=i.reverse(),i.__actions__.push({func:hs,args:[ia],thisArg:t}),new kn(i,this.__chain__)}return this.thru(ia)}function _0(){return wl(this.__wrapped__,this.__actions__)}var S0=ss(function(e,i,u){De.call(e,u)?++e[u]:yt(e,u,1)});function w0(e,i,u){var c=Z(e)?Mu:mg;return u&&ln(e,i,u)&&(i=t),c(e,Y(i,3))}function N0(e,i){var u=Z(e)?Bt:ll;return u(e,Y(i,3))}var A0=Bl(ic),x0=Bl(sc);function F0(e,i){return Xe(ds(e,i),1)}function C0(e,i){return Xe(ds(e,i),ot)}function R0(e,i,u){return u=u===t?1:ne(u),Xe(ds(e,i),u)}function fc(e,i){var u=Z(e)?Rn:qt;return u(e,Y(i,3))}function pc(e,i){var u=Z(e)?Jh:ul;return u(e,Y(i,3))}var O0=ss(function(e,i,u){De.call(e,u)?e[u].push(i):yt(e,u,[i])});function k0(e,i,u,c){e=dn(e)?e:Pr(e),u=u&&!c?ne(u):0;var h=e.length;return u<0&&(u=Ye(h+u,0)),ys(e)?u<=h&&e.indexOf(i,u)>-1:!!h&&Ir(e,i,u)>-1}var P0=re(function(e,i,u){var c=-1,h=typeof i=="function",g=dn(e)?_(e.length):[];return qt(e,function(v){g[++c]=h?En(i,v,u):ni(v,i,u)}),g}),L0=ss(function(e,i,u){yt(e,u,i)});function ds(e,i){var u=Z(e)?Ae:gl;return u(e,Y(i,3))}function B0(e,i,u,c){return e==null?[]:(Z(i)||(i=i==null?[]:[i]),u=c?t:u,Z(u)||(u=u==null?[]:[u]),yl(e,i,u))}var $0=ss(function(e,i,u){e[u?0:1].push(i)},function(){return[[],[]]});function M0(e,i,u){var c=Z(e)?Do:Gu,h=arguments.length<3;return c(e,Y(i,4),u,h,qt)}function U0(e,i,u){var c=Z(e)?Xh:Gu,h=arguments.length<3;return c(e,Y(i,4),u,h,ul)}function q0(e,i){var u=Z(e)?Bt:ll;return u(e,Ds(Y(i,3)))}function j0(e){var i=Z(e)?il:kg;return i(e)}function G0(e,i,u){(u?ln(e,i,u):i===t)?i=1:i=ne(i);var c=Z(e)?fg:Pg;return c(e,i)}function V0(e){var i=Z(e)?pg:Bg;return i(e)}function H0(e){if(e==null)return 0;if(dn(e))return ys(e)?Sr(e):e.length;var i=rn(e);return i==Gn||i==Vn?e.size:Lo(e).length}function W0(e,i,u){var c=Z(e)?vo:$g;return u&&ln(e,i,u)&&(i=t),c(e,Y(i,3))}var Y0=re(function(e,i){if(e==null)return[];var u=i.length;return u>1&&ln(e,i[0],i[1])?i=[]:u>2&&ln(i[0],i[1],i[2])&&(i=[i[0]]),yl(e,Xe(i,1),[])}),gs=Nd||function(){return Je.Date.now()};function z0(e,i){if(typeof i!="function")throw new On(l);return e=ne(e),function(){if(--e<1)return i.apply(this,arguments)}}function hc(e,i,u){return i=u?t:i,i=e&&i==null?e.length:i,Et(e,en,t,t,t,t,i)}function dc(e,i){var u;if(typeof i!="function")throw new On(l);return e=ne(e),function(){return--e>0&&(u=i.apply(this,arguments)),e<=1&&(i=t),u}}var oa=re(function(e,i,u){var c=H;if(u.length){var h=Mt(u,Or(oa));c|=ke}return Et(e,c,i,u,h)}),gc=re(function(e,i,u){var c=H|ce;if(u.length){var h=Mt(u,Or(gc));c|=ke}return Et(i,c,e,u,h)});function mc(e,i,u){i=u?t:i;var c=Et(e,me,t,t,t,t,t,i);return c.placeholder=mc.placeholder,c}function Dc(e,i,u){i=u?t:i;var c=Et(e,Fe,t,t,t,t,t,i);return c.placeholder=Dc.placeholder,c}function vc(e,i,u){var c,h,g,v,E,I,x=0,F=!1,k=!1,B=!0;if(typeof e!="function")throw new On(l);i=$n(i)||0,Ce(u)&&(F=!!u.leading,k="maxWait"in u,g=k?Ye($n(u.maxWait)||0,i):g,B="trailing"in u?!!u.trailing:B);function V(Ue){var zn=c,St=h;return c=h=t,x=Ue,v=e.apply(St,zn),v}function z(Ue){return x=Ue,E=oi(se,i),F?V(Ue):v}function te(Ue){var zn=Ue-I,St=Ue-x,Bc=i-zn;return k?tn(Bc,g-St):Bc}function Q(Ue){var zn=Ue-I,St=Ue-x;return I===t||zn>=i||zn<0||k&&St>=g}function se(){var Ue=gs();if(Q(Ue))return le(Ue);E=oi(se,te(Ue))}function le(Ue){return E=t,B&&c?V(Ue):(c=h=t,v)}function _n(){E!==t&&Al(E),x=0,c=I=h=E=t}function cn(){return E===t?v:le(gs())}function Sn(){var Ue=gs(),zn=Q(Ue);if(c=arguments,h=this,I=Ue,zn){if(E===t)return z(I);if(k)return Al(E),E=oi(se,i),V(I)}return E===t&&(E=oi(se,i)),v}return Sn.cancel=_n,Sn.flush=cn,Sn}var Q0=re(function(e,i){return al(e,1,i)}),K0=re(function(e,i,u){return al(e,$n(i)||0,u)});function J0(e){return Et(e,O)}function ms(e,i){if(typeof e!="function"||i!=null&&typeof i!="function")throw new On(l);var u=function(){var c=arguments,h=i?i.apply(this,c):c[0],g=u.cache;if(g.has(h))return g.get(h);var v=e.apply(this,c);return u.cache=g.set(h,v)||g,v};return u.cache=new(ms.Cache||vt),u}ms.Cache=vt;function Ds(e){if(typeof e!="function")throw new On(l);return function(){var i=arguments;switch(i.length){case 0:return!e.call(this);case 1:return!e.call(this,i[0]);case 2:return!e.call(this,i[0],i[1]);case 3:return!e.call(this,i[0],i[1],i[2])}return!e.apply(this,i)}}function X0(e){return dc(2,e)}var Z0=Mg(function(e,i){i=i.length==1&&Z(i[0])?Ae(i[0],bn(Y())):Ae(Xe(i,1),bn(Y()));var u=i.length;return re(function(c){for(var h=-1,g=tn(c.length,u);++h<g;)c[h]=i[h].call(this,c[h]);return En(e,this,c)})}),aa=re(function(e,i){var u=Mt(i,Or(aa));return Et(e,ke,t,i,u)}),yc=re(function(e,i){var u=Mt(i,Or(yc));return Et(e,on,t,i,u)}),eD=bt(function(e,i){return Et(e,gt,t,t,t,i)});function nD(e,i){if(typeof e!="function")throw new On(l);return i=i===t?i:ne(i),re(e,i)}function tD(e,i){if(typeof e!="function")throw new On(l);return i=i==null?0:Ye(ne(i),0),re(function(u){var c=u[i],h=Vt(u,0,i);return c&&$t(h,c),En(e,this,h)})}function rD(e,i,u){var c=!0,h=!0;if(typeof e!="function")throw new On(l);return Ce(u)&&(c="leading"in u?!!u.leading:c,h="trailing"in u?!!u.trailing:h),vc(e,i,{leading:c,maxWait:i,trailing:h})}function iD(e){return hc(e,1)}function sD(e,i){return aa(Ho(i),e)}function oD(){if(!arguments.length)return[];var e=arguments[0];return Z(e)?e:[e]}function aD(e){return Pn(e,S)}function uD(e,i){return i=typeof i=="function"?i:t,Pn(e,S,i)}function lD(e){return Pn(e,y|S)}function cD(e,i){return i=typeof i=="function"?i:t,Pn(e,y|S,i)}function fD(e,i){return i==null||ol(e,i,ze(i))}function Yn(e,i){return e===i||e!==e&&i!==i}var pD=ls(Oo),hD=ls(function(e,i){return e>=i}),ur=pl(function(){return arguments}())?pl:function(e){return Pe(e)&&De.call(e,"callee")&&!Xu.call(e,"callee")},Z=_.isArray,dD=Ou?bn(Ou):Tg;function dn(e){return e!=null&&vs(e.length)&&!It(e)}function Me(e){return Pe(e)&&dn(e)}function gD(e){return e===!0||e===!1||Pe(e)&&un(e)==de}var Ht=xd||va,mD=ku?bn(ku):Ig;function DD(e){return Pe(e)&&e.nodeType===1&&!ai(e)}function vD(e){if(e==null)return!0;if(dn(e)&&(Z(e)||typeof e=="string"||typeof e.splice=="function"||Ht(e)||kr(e)||ur(e)))return!e.length;var i=rn(e);if(i==Gn||i==Vn)return!e.size;if(si(e))return!Lo(e).length;for(var u in e)if(De.call(e,u))return!1;return!0}function yD(e,i){return ti(e,i)}function ED(e,i,u){u=typeof u=="function"?u:t;var c=u?u(e,i):t;return c===t?ti(e,i,t,u):!!c}function ua(e){if(!Pe(e))return!1;var i=un(e);return i==Lt||i==qr||typeof e.message=="string"&&typeof e.name=="string"&&!ai(e)}function bD(e){return typeof e=="number"&&el(e)}function It(e){if(!Ce(e))return!1;var i=un(e);return i==nn||i==au||i==$e||i==Hp}function Ec(e){return typeof e=="number"&&e==ne(e)}function vs(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=jn}function Ce(e){var i=typeof e;return e!=null&&(i=="object"||i=="function")}function Pe(e){return e!=null&&typeof e=="object"}var bc=Pu?bn(Pu):Sg;function TD(e,i){return e===i||Po(e,i,Xo(i))}function ID(e,i,u){return u=typeof u=="function"?u:t,Po(e,i,Xo(i),u)}function _D(e){return Tc(e)&&e!=+e}function SD(e){if(um(e))throw new X(a);return hl(e)}function wD(e){return e===null}function ND(e){return e==null}function Tc(e){return typeof e=="number"||Pe(e)&&un(e)==jr}function ai(e){if(!Pe(e)||un(e)!=mt)return!1;var i=Hi(e);if(i===null)return!0;var u=De.call(i,"constructor")&&i.constructor;return typeof u=="function"&&u instanceof u&&qi.call(u)==Id}var la=Lu?bn(Lu):wg;function AD(e){return Ec(e)&&e>=-jn&&e<=jn}var Ic=Bu?bn(Bu):Ng;function ys(e){return typeof e=="string"||!Z(e)&&Pe(e)&&un(e)==Vr}function In(e){return typeof e=="symbol"||Pe(e)&&un(e)==Ri}var kr=$u?bn($u):Ag;function xD(e){return e===t}function FD(e){return Pe(e)&&rn(e)==Hr}function CD(e){return Pe(e)&&un(e)==Yp}var RD=ls(Bo),OD=ls(function(e,i){return e<=i});function _c(e){if(!e)return[];if(dn(e))return ys(e)?Hn(e):hn(e);if(zr&&e[zr])return fd(e[zr]());var i=rn(e),u=i==Gn?_o:i==Vn?$i:Pr;return u(e)}function _t(e){if(!e)return e===0?e:0;if(e=$n(e),e===ot||e===-ot){var i=e<0?-1:1;return i*Er}return e===e?e:0}function ne(e){var i=_t(e),u=i%1;return i===i?u?i-u:i:0}function Sc(e){return e?ir(ne(e),0,xn):0}function $n(e){if(typeof e=="number")return e;if(In(e))return Zt;if(Ce(e)){var i=typeof e.valueOf=="function"?e.valueOf():e;e=Ce(i)?i+"":i}if(typeof e!="string")return e===0?e:+e;e=Vu(e);var u=dh.test(e);return u||mh.test(e)?zh(e.slice(2),u?2:8):hh.test(e)?Zt:+e}function wc(e){return ut(e,gn(e))}function kD(e){return e?ir(ne(e),-jn,jn):e===0?e:0}function ge(e){return e==null?"":Tn(e)}var PD=Cr(function(e,i){if(si(i)||dn(i)){ut(i,ze(i),e);return}for(var u in i)De.call(i,u)&&Zr(e,u,i[u])}),Nc=Cr(function(e,i){ut(i,gn(i),e)}),Es=Cr(function(e,i,u,c){ut(i,gn(i),e,c)}),LD=Cr(function(e,i,u,c){ut(i,ze(i),e,c)}),BD=bt(Fo);function $D(e,i){var u=Fr(e);return i==null?u:sl(u,i)}var MD=re(function(e,i){e=be(e);var u=-1,c=i.length,h=c>2?i[2]:t;for(h&&ln(i[0],i[1],h)&&(c=1);++u<c;)for(var g=i[u],v=gn(g),E=-1,I=v.length;++E<I;){var x=v[E],F=e[x];(F===t||Yn(F,Nr[x])&&!De.call(e,x))&&(e[x]=g[x])}return e}),UD=re(function(e){return e.push(t,Vl),En(Ac,t,e)});function qD(e,i){return Uu(e,Y(i,3),at)}function jD(e,i){return Uu(e,Y(i,3),Ro)}function GD(e,i){return e==null?e:Co(e,Y(i,3),gn)}function VD(e,i){return e==null?e:cl(e,Y(i,3),gn)}function HD(e,i){return e&&at(e,Y(i,3))}function WD(e,i){return e&&Ro(e,Y(i,3))}function YD(e){return e==null?[]:ns(e,ze(e))}function zD(e){return e==null?[]:ns(e,gn(e))}function ca(e,i,u){var c=e==null?t:sr(e,i);return c===t?u:c}function QD(e,i){return e!=null&&Yl(e,i,vg)}function fa(e,i){return e!=null&&Yl(e,i,yg)}var KD=Ml(function(e,i,u){i!=null&&typeof i.toString!="function"&&(i=ji.call(i)),e[i]=u},ha(mn)),JD=Ml(function(e,i,u){i!=null&&typeof i.toString!="function"&&(i=ji.call(i)),De.call(e,i)?e[i].push(u):e[i]=[u]},Y),XD=re(ni);function ze(e){return dn(e)?rl(e):Lo(e)}function gn(e){return dn(e)?rl(e,!0):xg(e)}function ZD(e,i){var u={};return i=Y(i,3),at(e,function(c,h,g){yt(u,i(c,h,g),c)}),u}function ev(e,i){var u={};return i=Y(i,3),at(e,function(c,h,g){yt(u,h,i(c,h,g))}),u}var nv=Cr(function(e,i,u){ts(e,i,u)}),Ac=Cr(function(e,i,u,c){ts(e,i,u,c)}),tv=bt(function(e,i){var u={};if(e==null)return u;var c=!1;i=Ae(i,function(g){return g=Gt(g,e),c||(c=g.length>1),g}),ut(e,Ko(e),u),c&&(u=Pn(u,y|A|S,Kg));for(var h=i.length;h--;)jo(u,i[h]);return u});function rv(e,i){return xc(e,Ds(Y(i)))}var iv=bt(function(e,i){return e==null?{}:Cg(e,i)});function xc(e,i){if(e==null)return{};var u=Ae(Ko(e),function(c){return[c]});return i=Y(i),El(e,u,function(c,h){return i(c,h[0])})}function sv(e,i,u){i=Gt(i,e);var c=-1,h=i.length;for(h||(h=1,e=t);++c<h;){var g=e==null?t:e[lt(i[c])];g===t&&(c=h,g=u),e=It(g)?g.call(e):g}return e}function ov(e,i,u){return e==null?e:ri(e,i,u)}function av(e,i,u,c){return c=typeof c=="function"?c:t,e==null?e:ri(e,i,u,c)}var Fc=jl(ze),Cc=jl(gn);function uv(e,i,u){var c=Z(e),h=c||Ht(e)||kr(e);if(i=Y(i,4),u==null){var g=e&&e.constructor;h?u=c?new g:[]:Ce(e)?u=It(g)?Fr(Hi(e)):{}:u={}}return(h?Rn:at)(e,function(v,E,I){return i(u,v,E,I)}),u}function lv(e,i){return e==null?!0:jo(e,i)}function cv(e,i,u){return e==null?e:Sl(e,i,Ho(u))}function fv(e,i,u,c){return c=typeof c=="function"?c:t,e==null?e:Sl(e,i,Ho(u),c)}function Pr(e){return e==null?[]:Io(e,ze(e))}function pv(e){return e==null?[]:Io(e,gn(e))}function hv(e,i,u){return u===t&&(u=i,i=t),u!==t&&(u=$n(u),u=u===u?u:0),i!==t&&(i=$n(i),i=i===i?i:0),ir($n(e),i,u)}function dv(e,i,u){return i=_t(i),u===t?(u=i,i=0):u=_t(u),e=$n(e),Eg(e,i,u)}function gv(e,i,u){if(u&&typeof u!="boolean"&&ln(e,i,u)&&(i=u=t),u===t&&(typeof i=="boolean"?(u=i,i=t):typeof e=="boolean"&&(u=e,e=t)),e===t&&i===t?(e=0,i=1):(e=_t(e),i===t?(i=e,e=0):i=_t(i)),e>i){var c=e;e=i,i=c}if(u||e%1||i%1){var h=nl();return tn(e+h*(i-e+Yh("1e-"+((h+"").length-1))),i)}return Mo(e,i)}var mv=Rr(function(e,i,u){return i=i.toLowerCase(),e+(u?Rc(i):i)});function Rc(e){return pa(ge(e).toLowerCase())}function Oc(e){return e=ge(e),e&&e.replace(vh,od).replace(Bh,"")}function Dv(e,i,u){e=ge(e),i=Tn(i);var c=e.length;u=u===t?c:ir(ne(u),0,c);var h=u;return u-=i.length,u>=0&&e.slice(u,h)==i}function vv(e){return e=ge(e),e&&Xp.test(e)?e.replace(cu,ad):e}function yv(e){return e=ge(e),e&&ih.test(e)?e.replace(oo,"\\$&"):e}var Ev=Rr(function(e,i,u){return e+(u?"-":"")+i.toLowerCase()}),bv=Rr(function(e,i,u){return e+(u?" ":"")+i.toLowerCase()}),Tv=Ll("toLowerCase");function Iv(e,i,u){e=ge(e),i=ne(i);var c=i?Sr(e):0;if(!i||c>=i)return e;var h=(i-c)/2;return us(Qi(h),u)+e+us(zi(h),u)}function _v(e,i,u){e=ge(e),i=ne(i);var c=i?Sr(e):0;return i&&c<i?e+us(i-c,u):e}function Sv(e,i,u){e=ge(e),i=ne(i);var c=i?Sr(e):0;return i&&c<i?us(i-c,u)+e:e}function wv(e,i,u){return u||i==null?i=0:i&&(i=+i),Od(ge(e).replace(ao,""),i||0)}function Nv(e,i,u){return(u?ln(e,i,u):i===t)?i=1:i=ne(i),Uo(ge(e),i)}function Av(){var e=arguments,i=ge(e[0]);return e.length<3?i:i.replace(e[1],e[2])}var xv=Rr(function(e,i,u){return e+(u?"_":"")+i.toLowerCase()});function Fv(e,i,u){return u&&typeof u!="number"&&ln(e,i,u)&&(i=u=t),u=u===t?xn:u>>>0,u?(e=ge(e),e&&(typeof i=="string"||i!=null&&!la(i))&&(i=Tn(i),!i&&_r(e))?Vt(Hn(e),0,u):e.split(i,u)):[]}var Cv=Rr(function(e,i,u){return e+(u?" ":"")+pa(i)});function Rv(e,i,u){return e=ge(e),u=u==null?0:ir(ne(u),0,e.length),i=Tn(i),e.slice(u,u+i.length)==i}function Ov(e,i,u){var c=d.templateSettings;u&&ln(e,i,u)&&(i=t),e=ge(e),i=Es({},i,c,Gl);var h=Es({},i.imports,c.imports,Gl),g=ze(h),v=Io(h,g),E,I,x=0,F=i.interpolate||Oi,k="__p += '",B=So((i.escape||Oi).source+"|"+F.source+"|"+(F===fu?ph:Oi).source+"|"+(i.evaluate||Oi).source+"|$","g"),V="//# sourceURL="+(De.call(i,"sourceURL")?(i.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++jh+"]")+`
`;e.replace(B,function(Q,se,le,_n,cn,Sn){return le||(le=_n),k+=e.slice(x,Sn).replace(yh,ud),se&&(E=!0,k+=`' +
__e(`+se+`) +
'`),cn&&(I=!0,k+=`';
`+cn+`;
__p += '`),le&&(k+=`' +
((__t = (`+le+`)) == null ? '' : __t) +
'`),x=Sn+Q.length,Q}),k+=`';
`;var z=De.call(i,"variable")&&i.variable;if(!z)k=`with (obj) {
`+k+`
}
`;else if(ch.test(z))throw new X(f);k=(I?k.replace(zp,""):k).replace(Qp,"$1").replace(Kp,"$1;"),k="function("+(z||"obj")+`) {
`+(z?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(E?", __e = _.escape":"")+(I?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+k+`return __p
}`;var te=Pc(function(){return pe(g,V+"return "+k).apply(t,v)});if(te.source=k,ua(te))throw te;return te}function kv(e){return ge(e).toLowerCase()}function Pv(e){return ge(e).toUpperCase()}function Lv(e,i,u){if(e=ge(e),e&&(u||i===t))return Vu(e);if(!e||!(i=Tn(i)))return e;var c=Hn(e),h=Hn(i),g=Hu(c,h),v=Wu(c,h)+1;return Vt(c,g,v).join("")}function Bv(e,i,u){if(e=ge(e),e&&(u||i===t))return e.slice(0,zu(e)+1);if(!e||!(i=Tn(i)))return e;var c=Hn(e),h=Wu(c,Hn(i))+1;return Vt(c,0,h).join("")}function $v(e,i,u){if(e=ge(e),e&&(u||i===t))return e.replace(ao,"");if(!e||!(i=Tn(i)))return e;var c=Hn(e),h=Hu(c,Hn(i));return Vt(c,h).join("")}function Mv(e,i){var u=J,c=an;if(Ce(i)){var h="separator"in i?i.separator:h;u="length"in i?ne(i.length):u,c="omission"in i?Tn(i.omission):c}e=ge(e);var g=e.length;if(_r(e)){var v=Hn(e);g=v.length}if(u>=g)return e;var E=u-Sr(c);if(E<1)return c;var I=v?Vt(v,0,E).join(""):e.slice(0,E);if(h===t)return I+c;if(v&&(E+=I.length-E),la(h)){if(e.slice(E).search(h)){var x,F=I;for(h.global||(h=So(h.source,ge(pu.exec(h))+"g")),h.lastIndex=0;x=h.exec(F);)var k=x.index;I=I.slice(0,k===t?E:k)}}else if(e.indexOf(Tn(h),E)!=E){var B=I.lastIndexOf(h);B>-1&&(I=I.slice(0,B))}return I+c}function Uv(e){return e=ge(e),e&&Jp.test(e)?e.replace(lu,gd):e}var qv=Rr(function(e,i,u){return e+(u?" ":"")+i.toUpperCase()}),pa=Ll("toUpperCase");function kc(e,i,u){return e=ge(e),i=u?t:i,i===t?cd(e)?vd(e):nd(e):e.match(i)||[]}var Pc=re(function(e,i){try{return En(e,t,i)}catch(u){return ua(u)?u:new X(u)}}),jv=bt(function(e,i){return Rn(i,function(u){u=lt(u),yt(e,u,oa(e[u],e))}),e});function Gv(e){var i=e==null?0:e.length,u=Y();return e=i?Ae(e,function(c){if(typeof c[1]!="function")throw new On(l);return[u(c[0]),c[1]]}):[],re(function(c){for(var h=-1;++h<i;){var g=e[h];if(En(g[0],this,c))return En(g[1],this,c)}})}function Vv(e){return gg(Pn(e,y))}function ha(e){return function(){return e}}function Hv(e,i){return e==null||e!==e?i:e}var Wv=$l(),Yv=$l(!0);function mn(e){return e}function da(e){return dl(typeof e=="function"?e:Pn(e,y))}function zv(e){return ml(Pn(e,y))}function Qv(e,i){return Dl(e,Pn(i,y))}var Kv=re(function(e,i){return function(u){return ni(u,e,i)}}),Jv=re(function(e,i){return function(u){return ni(e,u,i)}});function ga(e,i,u){var c=ze(i),h=ns(i,c);u==null&&!(Ce(i)&&(h.length||!c.length))&&(u=i,i=e,e=this,h=ns(i,ze(i)));var g=!(Ce(u)&&"chain"in u)||!!u.chain,v=It(e);return Rn(h,function(E){var I=i[E];e[E]=I,v&&(e.prototype[E]=function(){var x=this.__chain__;if(g||x){var F=e(this.__wrapped__),k=F.__actions__=hn(this.__actions__);return k.push({func:I,args:arguments,thisArg:e}),F.__chain__=x,F}return I.apply(e,$t([this.value()],arguments))})}),e}function Xv(){return Je._===this&&(Je._=_d),this}function ma(){}function Zv(e){return e=ne(e),re(function(i){return vl(i,e)})}var ey=Yo(Ae),ny=Yo(Mu),ty=Yo(vo);function Lc(e){return ea(e)?yo(lt(e)):Rg(e)}function ry(e){return function(i){return e==null?t:sr(e,i)}}var iy=Ul(),sy=Ul(!0);function Da(){return[]}function va(){return!1}function oy(){return{}}function ay(){return""}function uy(){return!0}function ly(e,i){if(e=ne(e),e<1||e>jn)return[];var u=xn,c=tn(e,xn);i=Y(i),e-=xn;for(var h=To(c,i);++u<e;)i(u);return h}function cy(e){return Z(e)?Ae(e,lt):In(e)?[e]:hn(tc(ge(e)))}function fy(e){var i=++Td;return ge(e)+i}var py=as(function(e,i){return e+i},0),hy=zo("ceil"),dy=as(function(e,i){return e/i},1),gy=zo("floor");function my(e){return e&&e.length?es(e,mn,Oo):t}function Dy(e,i){return e&&e.length?es(e,Y(i,2),Oo):t}function vy(e){return ju(e,mn)}function yy(e,i){return ju(e,Y(i,2))}function Ey(e){return e&&e.length?es(e,mn,Bo):t}function by(e,i){return e&&e.length?es(e,Y(i,2),Bo):t}var Ty=as(function(e,i){return e*i},1),Iy=zo("round"),_y=as(function(e,i){return e-i},0);function Sy(e){return e&&e.length?bo(e,mn):0}function wy(e,i){return e&&e.length?bo(e,Y(i,2)):0}return d.after=z0,d.ary=hc,d.assign=PD,d.assignIn=Nc,d.assignInWith=Es,d.assignWith=LD,d.at=BD,d.before=dc,d.bind=oa,d.bindAll=jv,d.bindKey=gc,d.castArray=oD,d.chain=cc,d.chunk=gm,d.compact=mm,d.concat=Dm,d.cond=Gv,d.conforms=Vv,d.constant=ha,d.countBy=S0,d.create=$D,d.curry=mc,d.curryRight=Dc,d.debounce=vc,d.defaults=MD,d.defaultsDeep=UD,d.defer=Q0,d.delay=K0,d.difference=vm,d.differenceBy=ym,d.differenceWith=Em,d.drop=bm,d.dropRight=Tm,d.dropRightWhile=Im,d.dropWhile=_m,d.fill=Sm,d.filter=N0,d.flatMap=F0,d.flatMapDeep=C0,d.flatMapDepth=R0,d.flatten=oc,d.flattenDeep=wm,d.flattenDepth=Nm,d.flip=J0,d.flow=Wv,d.flowRight=Yv,d.fromPairs=Am,d.functions=YD,d.functionsIn=zD,d.groupBy=O0,d.initial=Fm,d.intersection=Cm,d.intersectionBy=Rm,d.intersectionWith=Om,d.invert=KD,d.invertBy=JD,d.invokeMap=P0,d.iteratee=da,d.keyBy=L0,d.keys=ze,d.keysIn=gn,d.map=ds,d.mapKeys=ZD,d.mapValues=ev,d.matches=zv,d.matchesProperty=Qv,d.memoize=ms,d.merge=nv,d.mergeWith=Ac,d.method=Kv,d.methodOf=Jv,d.mixin=ga,d.negate=Ds,d.nthArg=Zv,d.omit=tv,d.omitBy=rv,d.once=X0,d.orderBy=B0,d.over=ey,d.overArgs=Z0,d.overEvery=ny,d.overSome=ty,d.partial=aa,d.partialRight=yc,d.partition=$0,d.pick=iv,d.pickBy=xc,d.property=Lc,d.propertyOf=ry,d.pull=Bm,d.pullAll=uc,d.pullAllBy=$m,d.pullAllWith=Mm,d.pullAt=Um,d.range=iy,d.rangeRight=sy,d.rearg=eD,d.reject=q0,d.remove=qm,d.rest=nD,d.reverse=ia,d.sampleSize=G0,d.set=ov,d.setWith=av,d.shuffle=V0,d.slice=jm,d.sortBy=Y0,d.sortedUniq=Qm,d.sortedUniqBy=Km,d.split=Fv,d.spread=tD,d.tail=Jm,d.take=Xm,d.takeRight=Zm,d.takeRightWhile=e0,d.takeWhile=n0,d.tap=m0,d.throttle=rD,d.thru=hs,d.toArray=_c,d.toPairs=Fc,d.toPairsIn=Cc,d.toPath=cy,d.toPlainObject=wc,d.transform=uv,d.unary=iD,d.union=t0,d.unionBy=r0,d.unionWith=i0,d.uniq=s0,d.uniqBy=o0,d.uniqWith=a0,d.unset=lv,d.unzip=sa,d.unzipWith=lc,d.update=cv,d.updateWith=fv,d.values=Pr,d.valuesIn=pv,d.without=u0,d.words=kc,d.wrap=sD,d.xor=l0,d.xorBy=c0,d.xorWith=f0,d.zip=p0,d.zipObject=h0,d.zipObjectDeep=d0,d.zipWith=g0,d.entries=Fc,d.entriesIn=Cc,d.extend=Nc,d.extendWith=Es,ga(d,d),d.add=py,d.attempt=Pc,d.camelCase=mv,d.capitalize=Rc,d.ceil=hy,d.clamp=hv,d.clone=aD,d.cloneDeep=lD,d.cloneDeepWith=cD,d.cloneWith=uD,d.conformsTo=fD,d.deburr=Oc,d.defaultTo=Hv,d.divide=dy,d.endsWith=Dv,d.eq=Yn,d.escape=vv,d.escapeRegExp=yv,d.every=w0,d.find=A0,d.findIndex=ic,d.findKey=qD,d.findLast=x0,d.findLastIndex=sc,d.findLastKey=jD,d.floor=gy,d.forEach=fc,d.forEachRight=pc,d.forIn=GD,d.forInRight=VD,d.forOwn=HD,d.forOwnRight=WD,d.get=ca,d.gt=pD,d.gte=hD,d.has=QD,d.hasIn=fa,d.head=ac,d.identity=mn,d.includes=k0,d.indexOf=xm,d.inRange=dv,d.invoke=XD,d.isArguments=ur,d.isArray=Z,d.isArrayBuffer=dD,d.isArrayLike=dn,d.isArrayLikeObject=Me,d.isBoolean=gD,d.isBuffer=Ht,d.isDate=mD,d.isElement=DD,d.isEmpty=vD,d.isEqual=yD,d.isEqualWith=ED,d.isError=ua,d.isFinite=bD,d.isFunction=It,d.isInteger=Ec,d.isLength=vs,d.isMap=bc,d.isMatch=TD,d.isMatchWith=ID,d.isNaN=_D,d.isNative=SD,d.isNil=ND,d.isNull=wD,d.isNumber=Tc,d.isObject=Ce,d.isObjectLike=Pe,d.isPlainObject=ai,d.isRegExp=la,d.isSafeInteger=AD,d.isSet=Ic,d.isString=ys,d.isSymbol=In,d.isTypedArray=kr,d.isUndefined=xD,d.isWeakMap=FD,d.isWeakSet=CD,d.join=km,d.kebabCase=Ev,d.last=Bn,d.lastIndexOf=Pm,d.lowerCase=bv,d.lowerFirst=Tv,d.lt=RD,d.lte=OD,d.max=my,d.maxBy=Dy,d.mean=vy,d.meanBy=yy,d.min=Ey,d.minBy=by,d.stubArray=Da,d.stubFalse=va,d.stubObject=oy,d.stubString=ay,d.stubTrue=uy,d.multiply=Ty,d.nth=Lm,d.noConflict=Xv,d.noop=ma,d.now=gs,d.pad=Iv,d.padEnd=_v,d.padStart=Sv,d.parseInt=wv,d.random=gv,d.reduce=M0,d.reduceRight=U0,d.repeat=Nv,d.replace=Av,d.result=sv,d.round=Iy,d.runInContext=T,d.sample=j0,d.size=H0,d.snakeCase=xv,d.some=W0,d.sortedIndex=Gm,d.sortedIndexBy=Vm,d.sortedIndexOf=Hm,d.sortedLastIndex=Wm,d.sortedLastIndexBy=Ym,d.sortedLastIndexOf=zm,d.startCase=Cv,d.startsWith=Rv,d.subtract=_y,d.sum=Sy,d.sumBy=wy,d.template=Ov,d.times=ly,d.toFinite=_t,d.toInteger=ne,d.toLength=Sc,d.toLower=kv,d.toNumber=$n,d.toSafeInteger=kD,d.toString=ge,d.toUpper=Pv,d.trim=Lv,d.trimEnd=Bv,d.trimStart=$v,d.truncate=Mv,d.unescape=Uv,d.uniqueId=fy,d.upperCase=qv,d.upperFirst=pa,d.each=fc,d.eachRight=pc,d.first=ac,ga(d,function(){var e={};return at(d,function(i,u){De.call(d.prototype,u)||(e[u]=i)}),e}(),{chain:!1}),d.VERSION=o,Rn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){d[e].placeholder=d}),Rn(["drop","take"],function(e,i){ae.prototype[e]=function(u){u=u===t?1:Ye(ne(u),0);var c=this.__filtered__&&!i?new ae(this):this.clone();return c.__filtered__?c.__takeCount__=tn(u,c.__takeCount__):c.__views__.push({size:tn(u,xn),type:e+(c.__dir__<0?"Right":"")}),c},ae.prototype[e+"Right"]=function(u){return this.reverse()[e](u).reverse()}}),Rn(["filter","map","takeWhile"],function(e,i){var u=i+1,c=u==Fi||u==Ci;ae.prototype[e]=function(h){var g=this.clone();return g.__iteratees__.push({iteratee:Y(h,3),type:u}),g.__filtered__=g.__filtered__||c,g}}),Rn(["head","last"],function(e,i){var u="take"+(i?"Right":"");ae.prototype[e]=function(){return this[u](1).value()[0]}}),Rn(["initial","tail"],function(e,i){var u="drop"+(i?"":"Right");ae.prototype[e]=function(){return this.__filtered__?new ae(this):this[u](1)}}),ae.prototype.compact=function(){return this.filter(mn)},ae.prototype.find=function(e){return this.filter(e).head()},ae.prototype.findLast=function(e){return this.reverse().find(e)},ae.prototype.invokeMap=re(function(e,i){return typeof e=="function"?new ae(this):this.map(function(u){return ni(u,e,i)})}),ae.prototype.reject=function(e){return this.filter(Ds(Y(e)))},ae.prototype.slice=function(e,i){e=ne(e);var u=this;return u.__filtered__&&(e>0||i<0)?new ae(u):(e<0?u=u.takeRight(-e):e&&(u=u.drop(e)),i!==t&&(i=ne(i),u=i<0?u.dropRight(-i):u.take(i-e)),u)},ae.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},ae.prototype.toArray=function(){return this.take(xn)},at(ae.prototype,function(e,i){var u=/^(?:filter|find|map|reject)|While$/.test(i),c=/^(?:head|last)$/.test(i),h=d[c?"take"+(i=="last"?"Right":""):i],g=c||/^find/.test(i);h&&(d.prototype[i]=function(){var v=this.__wrapped__,E=c?[1]:arguments,I=v instanceof ae,x=E[0],F=I||Z(v),k=function(se){var le=h.apply(d,$t([se],E));return c&&B?le[0]:le};F&&u&&typeof x=="function"&&x.length!=1&&(I=F=!1);var B=this.__chain__,V=!!this.__actions__.length,z=g&&!B,te=I&&!V;if(!g&&F){v=te?v:new ae(this);var Q=e.apply(v,E);return Q.__actions__.push({func:hs,args:[k],thisArg:t}),new kn(Q,B)}return z&&te?e.apply(this,E):(Q=this.thru(k),z?c?Q.value()[0]:Q.value():Q)})}),Rn(["pop","push","shift","sort","splice","unshift"],function(e){var i=Mi[e],u=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",c=/^(?:pop|shift)$/.test(e);d.prototype[e]=function(){var h=arguments;if(c&&!this.__chain__){var g=this.value();return i.apply(Z(g)?g:[],h)}return this[u](function(v){return i.apply(Z(v)?v:[],h)})}}),at(ae.prototype,function(e,i){var u=d[i];if(u){var c=u.name+"";De.call(xr,c)||(xr[c]=[]),xr[c].push({name:i,func:u})}}),xr[os(t,ce).name]=[{name:"wrapper",func:t}],ae.prototype.clone=Ud,ae.prototype.reverse=qd,ae.prototype.value=jd,d.prototype.at=D0,d.prototype.chain=v0,d.prototype.commit=y0,d.prototype.next=E0,d.prototype.plant=T0,d.prototype.reverse=I0,d.prototype.toJSON=d.prototype.valueOf=d.prototype.value=_0,d.prototype.first=d.prototype.head,zr&&(d.prototype[zr]=b0),d},wr=yd();er?((er.exports=wr)._=wr,ho._=wr):Je._=wr}).call(fi)})(Os,Os.exports);var kb=Os.exports;const Ft=Ob(kb);function Pb(){return{convert:r=>{if(r===null||r===void 0)return null;switch(typeof r){case"boolean":return r;case"string":{const n=r.toLowerCase().trim();return n==="true"||n==="t"||n==="1"}case"number":return r!==0;default:return null}},asString:r=>String(r),type:r=>r.boolean().optional()}}function wn(r,n){const t=o=>n.convert(o[r]);return{name:Lb(r),key:r,asEnv:o=>({[r]:n.asString(o)}),zod:{type:n.type},get:t,getOrDefault:(o,s)=>t(o)??s}}function Lb(r){return r.toLowerCase().replace(/([-_][a-z])/gi,n=>n.toUpperCase().replace("-","").replace("_",""))}wn("MAGIDOC_GENERATE",Pb());function Ts(r){return{convert:n=>{if(Array.isArray(n))return n;if(typeof n=="string"){const t=JSON.parse(n);return Array.isArray(t)?t:null}return null},asString:n=>JSON.stringify(n),type:n=>n.array(r(n)).optional()}}function af(r){return{convert:n=>{if(typeof n=="object")return n;if(typeof n=="string"){const t=JSON.parse(n);return typeof t!="object"?null:t}return null},asString:n=>JSON.stringify(n),type:n=>n.record(r(n).optional()).optional()}}function Is(){return{convert:r=>r==null||r===""?null:String(r),asString:r=>String(r),type:r=>r.string().optional()}}function uf(r){return{convert:n=>n==null||!r.find(t=>t===n)?null:n,asString:n=>String(n),type:n=>n.enum(r).optional()}}var js={APP_LOGO:wn("APP_LOGO",Is()),APP_TITLE:wn("APP_TITLE",Is()),APP_FAVICON:wn("APP_FAVICON",Is()),SITE_ROOT:wn("SITE_ROOT",Is()),SITE_META:wn("SITE_META",af(r=>r.string())),CUSTOM_STYLES:wn("CUSTOM_STYLES",Ts(r=>r.string())),FIELDS_SORTING:wn("FIELDS_SORTING",uf(["default","alphabetical"])),ARGUMENTS_SORTING:wn("ARGUMENTS_SORTING",uf(["default","alphabetical"])),QUERY_GENERATION_FACTORIES:wn("QUERY_GENERATION_FACTORIES",af(r=>r.union([r.string(),r.boolean(),r.number(),r.null(),r.record(r.unknown())]))),PAGES:wn("PAGES",Ts(r=>{const n=r.lazy(()=>r.object({title:r.string().min(1),content:r.union([r.array(n),r.string().min(1)])}));return n})),EXTERNAL_LINKS:wn("EXTERNAL_LINKS",Ts(r=>r.object({label:r.string().min(1),href:r.string().min(1),position:r.union([r.literal("header"),r.literal("navigation")]).optional(),kind:r.string().min(1).optional(),group:r.string().min(1).optional()}))),DIRECTIVES:wn("DIRECTIVES",Ts(r=>r.object({name:r.string().min(1),args:r.array(r.string())})))};const Bb="ChaosCenter API Documentation",$b="https://litmuschaos.github.io/litmus/graphql/logo.png",Mb="https://litmuschaos.github.io/litmus/graphql/logo.png",Ub='{"description":"This is your website description","keywords":"svelte,docs,magidoc,cool"}',qb="default",jb="default",Gb='[{"title":"Introduction","content":"\\n# ChaosCenter API Documentation\\n\\n\\nChaosCenter provides console and UI experience for creating, scheduling, and monitoring chaos workflows. Chaos workflows consist of a sequence of experiments run together to achieve the objective of introducing some kind of fault into an application.\\n"}]',Vb="true",Yf={APP_TITLE:Bb,APP_LOGO:$b,APP_FAVICON:Mb,SITE_META:Ub,FIELDS_SORTING:qb,ARGUMENTS_SORTING:jb,PAGES:Gb,MAGIDOC_GENERATE:Vb};function B_(r){return r.get(Yf)}function Gs(r,n){return r.getOrDefault(Yf,n)}function Vs(){return Gs(js.SITE_ROOT,Oy)}class Hb{constructor(n){Te(this,"mapping");this.mapping=n}getFor(n){return this.mapping.get(n.name)}}var Di;(function(r){r.UNION="union",r.ARGUMENT="argument",r.FIELD="field"})(Di||(Di={}));function fe(r,n){if(!!!r)throw new Error(n)}function Ct(r){return typeof r=="object"&&r!==null}function Zn(r,n){if(!!!r)throw new Error(n??"Unexpected invariant triggered.")}const Wb=/\r\n|[\n\r]/g;function xa(r,n){let t=0,o=1;for(const s of r.body.matchAll(Wb)){if(typeof s.index=="number"||Zn(!1),s.index>=n)break;t=s.index+s[0].length,o+=1}return{line:o,column:n+1-t}}function Yb(r){return zf(r.source,xa(r.source,r.start))}function zf(r,n){const t=r.locationOffset.column-1,o="".padStart(t)+r.body,s=n.line-1,a=r.locationOffset.line-1,l=n.line+a,f=n.line===1?t:0,p=n.column+f,m=`${r.name}:${l}:${p}
`,D=o.split(/\r\n|[\n\r]/g),y=D[s];if(y.length>120){const A=Math.floor(p/80),S=p%80,R=[];for(let L=0;L<y.length;L+=80)R.push(y.slice(L,L+80));return m+lf([[`${l} |`,R[0]],...R.slice(1,A+1).map(L=>["|",L]),["|","^".padStart(S)],["|",R[A+1]]])}return m+lf([[`${l-1} |`,D[s-1]],[`${l} |`,y],["|","^".padStart(p)],[`${l+1} |`,D[s+1]]])}function lf(r){const n=r.filter(([o,s])=>s!==void 0),t=Math.max(...n.map(([o])=>o.length));return n.map(([o,s])=>o.padStart(t)+(s?" "+s:"")).join(`
`)}function zb(r){const n=r[0];return n==null||"kind"in n||"length"in n?{nodes:n,source:r[1],positions:r[2],path:r[3],originalError:r[4],extensions:r[5]}:n}class P extends Error{constructor(n,...t){var o,s,a;const{nodes:l,source:f,positions:p,path:m,originalError:D,extensions:y}=zb(t);super(n),this.name="GraphQLError",this.path=m??void 0,this.originalError=D??void 0,this.nodes=cf(Array.isArray(l)?l:l?[l]:void 0);const A=cf((o=this.nodes)===null||o===void 0?void 0:o.map(R=>R.loc).filter(R=>R!=null));this.source=f??(A==null||(s=A[0])===null||s===void 0?void 0:s.source),this.positions=p??(A==null?void 0:A.map(R=>R.start)),this.locations=p&&f?p.map(R=>xa(f,R)):A==null?void 0:A.map(R=>xa(R.source,R.start));const S=Ct(D==null?void 0:D.extensions)?D==null?void 0:D.extensions:void 0;this.extensions=(a=y??S)!==null&&a!==void 0?a:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),D!=null&&D.stack?Object.defineProperty(this,"stack",{value:D.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,P):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let n=this.message;if(this.nodes)for(const t of this.nodes)t.loc&&(n+=`

`+Yb(t.loc));else if(this.source&&this.locations)for(const t of this.locations)n+=`

`+zf(this.source,t);return n}toJSON(){const n={message:this.message};return this.locations!=null&&(n.locations=this.locations),this.path!=null&&(n.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(n.extensions=this.extensions),n}}function cf(r){return r===void 0||r.length===0?void 0:r}function Qe(r,n,t){return new P(`Syntax Error: ${t}`,{source:r,positions:[n]})}class Qb{constructor(n,t,o){this.start=n.start,this.end=t.end,this.startToken=n,this.endToken=t,this.source=o}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class Qf{constructor(n,t,o,s,a,l){this.kind=n,this.start=t,this.end=o,this.line=s,this.column=a,this.value=l,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const Kf={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},Kb=new Set(Object.keys(Kf));function ff(r){const n=r==null?void 0:r.kind;return typeof n=="string"&&Kb.has(n)}var Mn;(function(r){r.QUERY="query",r.MUTATION="mutation",r.SUBSCRIPTION="subscription"})(Mn||(Mn={}));var W;(function(r){r.QUERY="QUERY",r.MUTATION="MUTATION",r.SUBSCRIPTION="SUBSCRIPTION",r.FIELD="FIELD",r.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",r.FRAGMENT_SPREAD="FRAGMENT_SPREAD",r.INLINE_FRAGMENT="INLINE_FRAGMENT",r.VARIABLE_DEFINITION="VARIABLE_DEFINITION",r.SCHEMA="SCHEMA",r.SCALAR="SCALAR",r.OBJECT="OBJECT",r.FIELD_DEFINITION="FIELD_DEFINITION",r.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",r.INTERFACE="INTERFACE",r.UNION="UNION",r.ENUM="ENUM",r.ENUM_VALUE="ENUM_VALUE",r.INPUT_OBJECT="INPUT_OBJECT",r.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(W||(W={}));var b;(function(r){r.NAME="Name",r.DOCUMENT="Document",r.OPERATION_DEFINITION="OperationDefinition",r.VARIABLE_DEFINITION="VariableDefinition",r.SELECTION_SET="SelectionSet",r.FIELD="Field",r.ARGUMENT="Argument",r.FRAGMENT_SPREAD="FragmentSpread",r.INLINE_FRAGMENT="InlineFragment",r.FRAGMENT_DEFINITION="FragmentDefinition",r.VARIABLE="Variable",r.INT="IntValue",r.FLOAT="FloatValue",r.STRING="StringValue",r.BOOLEAN="BooleanValue",r.NULL="NullValue",r.ENUM="EnumValue",r.LIST="ListValue",r.OBJECT="ObjectValue",r.OBJECT_FIELD="ObjectField",r.DIRECTIVE="Directive",r.NAMED_TYPE="NamedType",r.LIST_TYPE="ListType",r.NON_NULL_TYPE="NonNullType",r.SCHEMA_DEFINITION="SchemaDefinition",r.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",r.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",r.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",r.FIELD_DEFINITION="FieldDefinition",r.INPUT_VALUE_DEFINITION="InputValueDefinition",r.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",r.UNION_TYPE_DEFINITION="UnionTypeDefinition",r.ENUM_TYPE_DEFINITION="EnumTypeDefinition",r.ENUM_VALUE_DEFINITION="EnumValueDefinition",r.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",r.DIRECTIVE_DEFINITION="DirectiveDefinition",r.SCHEMA_EXTENSION="SchemaExtension",r.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",r.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",r.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",r.UNION_TYPE_EXTENSION="UnionTypeExtension",r.ENUM_TYPE_EXTENSION="EnumTypeExtension",r.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(b||(b={}));function Fa(r){return r===9||r===32}function Ti(r){return r>=48&&r<=57}function Jf(r){return r>=97&&r<=122||r>=65&&r<=90}function Ka(r){return Jf(r)||r===95}function Xf(r){return Jf(r)||Ti(r)||r===95}function Jb(r){var n;let t=Number.MAX_SAFE_INTEGER,o=null,s=-1;for(let l=0;l<r.length;++l){var a;const f=r[l],p=Xb(f);p!==f.length&&(o=(a=o)!==null&&a!==void 0?a:l,s=l,l!==0&&p<t&&(t=p))}return r.map((l,f)=>f===0?l:l.slice(t)).slice((n=o)!==null&&n!==void 0?n:0,s+1)}function Xb(r){let n=0;for(;n<r.length&&Fa(r.charCodeAt(n));)++n;return n}function Zb(r,n){const t=r.replace(/"""/g,'\\"""'),o=t.split(/\r\n|[\n\r]/g),s=o.length===1,a=o.length>1&&o.slice(1).every(S=>S.length===0||Fa(S.charCodeAt(0))),l=t.endsWith('\\"""'),f=r.endsWith('"')&&!l,p=r.endsWith("\\"),m=f||p,D=!s||r.length>70||m||a||l;let y="";const A=s&&Fa(r.charCodeAt(0));return(D&&!A||a)&&(y+=`
`),y+=t,(D||m)&&(y+=`
`),'"""'+y+'"""'}var C;(function(r){r.SOF="<SOF>",r.EOF="<EOF>",r.BANG="!",r.DOLLAR="$",r.AMP="&",r.PAREN_L="(",r.PAREN_R=")",r.SPREAD="...",r.COLON=":",r.EQUALS="=",r.AT="@",r.BRACKET_L="[",r.BRACKET_R="]",r.BRACE_L="{",r.PIPE="|",r.BRACE_R="}",r.NAME="Name",r.INT="Int",r.FLOAT="Float",r.STRING="String",r.BLOCK_STRING="BlockString",r.COMMENT="Comment"})(C||(C={}));class eT{constructor(n){const t=new Qf(C.SOF,0,0,0,0);this.source=n,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let n=this.token;if(n.kind!==C.EOF)do if(n.next)n=n.next;else{const t=tT(this,n.end);n.next=t,t.prev=n,n=t}while(n.kind===C.COMMENT);return n}}function nT(r){return r===C.BANG||r===C.DOLLAR||r===C.AMP||r===C.PAREN_L||r===C.PAREN_R||r===C.SPREAD||r===C.COLON||r===C.EQUALS||r===C.AT||r===C.BRACKET_L||r===C.BRACKET_R||r===C.BRACE_L||r===C.PIPE||r===C.BRACE_R}function Mr(r){return r>=0&&r<=55295||r>=57344&&r<=1114111}function Hs(r,n){return Zf(r.charCodeAt(n))&&ep(r.charCodeAt(n+1))}function Zf(r){return r>=55296&&r<=56319}function ep(r){return r>=56320&&r<=57343}function hr(r,n){const t=r.source.body.codePointAt(n);if(t===void 0)return C.EOF;if(t>=32&&t<=126){const o=String.fromCodePoint(t);return o==='"'?`'"'`:`"${o}"`}return"U+"+t.toString(16).toUpperCase().padStart(4,"0")}function Ge(r,n,t,o,s){const a=r.line,l=1+t-r.lineStart;return new Qf(n,t,o,a,l,s)}function tT(r,n){const t=r.source.body,o=t.length;let s=n;for(;s<o;){const a=t.charCodeAt(s);switch(a){case 65279:case 9:case 32:case 44:++s;continue;case 10:++s,++r.line,r.lineStart=s;continue;case 13:t.charCodeAt(s+1)===10?s+=2:++s,++r.line,r.lineStart=s;continue;case 35:return rT(r,s);case 33:return Ge(r,C.BANG,s,s+1);case 36:return Ge(r,C.DOLLAR,s,s+1);case 38:return Ge(r,C.AMP,s,s+1);case 40:return Ge(r,C.PAREN_L,s,s+1);case 41:return Ge(r,C.PAREN_R,s,s+1);case 46:if(t.charCodeAt(s+1)===46&&t.charCodeAt(s+2)===46)return Ge(r,C.SPREAD,s,s+3);break;case 58:return Ge(r,C.COLON,s,s+1);case 61:return Ge(r,C.EQUALS,s,s+1);case 64:return Ge(r,C.AT,s,s+1);case 91:return Ge(r,C.BRACKET_L,s,s+1);case 93:return Ge(r,C.BRACKET_R,s,s+1);case 123:return Ge(r,C.BRACE_L,s,s+1);case 124:return Ge(r,C.PIPE,s,s+1);case 125:return Ge(r,C.BRACE_R,s,s+1);case 34:return t.charCodeAt(s+1)===34&&t.charCodeAt(s+2)===34?lT(r,s):sT(r,s)}if(Ti(a)||a===45)return iT(r,s,a);if(Ka(a))return cT(r,s);throw Qe(r.source,s,a===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:Mr(a)||Hs(t,s)?`Unexpected character: ${hr(r,s)}.`:`Invalid character: ${hr(r,s)}.`)}return Ge(r,C.EOF,o,o)}function rT(r,n){const t=r.source.body,o=t.length;let s=n+1;for(;s<o;){const a=t.charCodeAt(s);if(a===10||a===13)break;if(Mr(a))++s;else if(Hs(t,s))s+=2;else break}return Ge(r,C.COMMENT,n,s,t.slice(n+1,s))}function iT(r,n,t){const o=r.source.body;let s=n,a=t,l=!1;if(a===45&&(a=o.charCodeAt(++s)),a===48){if(a=o.charCodeAt(++s),Ti(a))throw Qe(r.source,s,`Invalid number, unexpected digit after 0: ${hr(r,s)}.`)}else s=ba(r,s,a),a=o.charCodeAt(s);if(a===46&&(l=!0,a=o.charCodeAt(++s),s=ba(r,s,a),a=o.charCodeAt(s)),(a===69||a===101)&&(l=!0,a=o.charCodeAt(++s),(a===43||a===45)&&(a=o.charCodeAt(++s)),s=ba(r,s,a),a=o.charCodeAt(s)),a===46||Ka(a))throw Qe(r.source,s,`Invalid number, expected digit but got: ${hr(r,s)}.`);return Ge(r,l?C.FLOAT:C.INT,n,s,o.slice(n,s))}function ba(r,n,t){if(!Ti(t))throw Qe(r.source,n,`Invalid number, expected digit but got: ${hr(r,n)}.`);const o=r.source.body;let s=n+1;for(;Ti(o.charCodeAt(s));)++s;return s}function sT(r,n){const t=r.source.body,o=t.length;let s=n+1,a=s,l="";for(;s<o;){const f=t.charCodeAt(s);if(f===34)return l+=t.slice(a,s),Ge(r,C.STRING,n,s+1,l);if(f===92){l+=t.slice(a,s);const p=t.charCodeAt(s+1)===117?t.charCodeAt(s+2)===123?oT(r,s):aT(r,s):uT(r,s);l+=p.value,s+=p.size,a=s;continue}if(f===10||f===13)break;if(Mr(f))++s;else if(Hs(t,s))s+=2;else throw Qe(r.source,s,`Invalid character within String: ${hr(r,s)}.`)}throw Qe(r.source,s,"Unterminated string.")}function oT(r,n){const t=r.source.body;let o=0,s=3;for(;s<12;){const a=t.charCodeAt(n+s++);if(a===125){if(s<5||!Mr(o))break;return{value:String.fromCodePoint(o),size:s}}if(o=o<<4|pi(a),o<0)break}throw Qe(r.source,n,`Invalid Unicode escape sequence: "${t.slice(n,n+s)}".`)}function aT(r,n){const t=r.source.body,o=pf(t,n+2);if(Mr(o))return{value:String.fromCodePoint(o),size:6};if(Zf(o)&&t.charCodeAt(n+6)===92&&t.charCodeAt(n+7)===117){const s=pf(t,n+8);if(ep(s))return{value:String.fromCodePoint(o,s),size:12}}throw Qe(r.source,n,`Invalid Unicode escape sequence: "${t.slice(n,n+6)}".`)}function pf(r,n){return pi(r.charCodeAt(n))<<12|pi(r.charCodeAt(n+1))<<8|pi(r.charCodeAt(n+2))<<4|pi(r.charCodeAt(n+3))}function pi(r){return r>=48&&r<=57?r-48:r>=65&&r<=70?r-55:r>=97&&r<=102?r-87:-1}function uT(r,n){const t=r.source.body;switch(t.charCodeAt(n+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw Qe(r.source,n,`Invalid character escape sequence: "${t.slice(n,n+2)}".`)}function lT(r,n){const t=r.source.body,o=t.length;let s=r.lineStart,a=n+3,l=a,f="";const p=[];for(;a<o;){const m=t.charCodeAt(a);if(m===34&&t.charCodeAt(a+1)===34&&t.charCodeAt(a+2)===34){f+=t.slice(l,a),p.push(f);const D=Ge(r,C.BLOCK_STRING,n,a+3,Jb(p).join(`
`));return r.line+=p.length-1,r.lineStart=s,D}if(m===92&&t.charCodeAt(a+1)===34&&t.charCodeAt(a+2)===34&&t.charCodeAt(a+3)===34){f+=t.slice(l,a),l=a+1,a+=4;continue}if(m===10||m===13){f+=t.slice(l,a),p.push(f),m===13&&t.charCodeAt(a+1)===10?a+=2:++a,f="",l=a,s=a;continue}if(Mr(m))++a;else if(Hs(t,a))a+=2;else throw Qe(r.source,a,`Invalid character within String: ${hr(r,a)}.`)}throw Qe(r.source,a,"Unterminated string.")}function cT(r,n){const t=r.source.body,o=t.length;let s=n+1;for(;s<o;){const a=t.charCodeAt(s);if(Xf(a))++s;else break}return Ge(r,C.NAME,n,s,t.slice(n,s))}const fT=10,np=2;function M(r){return Ws(r,[])}function Ws(r,n){switch(typeof r){case"string":return JSON.stringify(r);case"function":return r.name?`[function ${r.name}]`:"[function]";case"object":return pT(r,n);default:return String(r)}}function pT(r,n){if(r===null)return"null";if(n.includes(r))return"[Circular]";const t=[...n,r];if(hT(r)){const o=r.toJSON();if(o!==r)return typeof o=="string"?o:Ws(o,t)}else if(Array.isArray(r))return gT(r,t);return dT(r,t)}function hT(r){return typeof r.toJSON=="function"}function dT(r,n){const t=Object.entries(r);return t.length===0?"{}":n.length>np?"["+mT(r)+"]":"{ "+t.map(([s,a])=>s+": "+Ws(a,n)).join(", ")+" }"}function gT(r,n){if(r.length===0)return"[]";if(n.length>np)return"[Array]";const t=Math.min(fT,r.length),o=r.length-t,s=[];for(let a=0;a<t;++a)s.push(Ws(r[a],n));return o===1?s.push("... 1 more item"):o>1&&s.push(`... ${o} more items`),"["+s.join(", ")+"]"}function mT(r){const n=Object.prototype.toString.call(r).replace(/^\[object /,"").replace(/]$/,"");if(n==="Object"&&typeof r.constructor=="function"){const t=r.constructor.name;if(typeof t=="string"&&t!=="")return t}return n}const DT=globalThis.process&&!0,dt=DT?function(n,t){return n instanceof t}:function(n,t){if(n instanceof t)return!0;if(typeof n=="object"&&n!==null){var o;const s=t.prototype[Symbol.toStringTag],a=Symbol.toStringTag in n?n[Symbol.toStringTag]:(o=n.constructor)===null||o===void 0?void 0:o.name;if(s===a){const l=M(n);throw new Error(`Cannot use ${s} "${l}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};class tp{constructor(n,t="GraphQL request",o={line:1,column:1}){typeof n=="string"||fe(!1,`Body must be a string. Received: ${M(n)}.`),this.body=n,this.name=t,this.locationOffset=o,this.locationOffset.line>0||fe(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||fe(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function vT(r){return dt(r,tp)}function yT(r,n){return new rp(r,n).parseDocument()}function ET(r,n){const t=new rp(r,n);t.expectToken(C.SOF);const o=t.parseValueLiteral(!1);return t.expectToken(C.EOF),o}class rp{constructor(n,t={}){const o=vT(n)?n:new tp(n);this._lexer=new eT(o),this._options=t,this._tokenCounter=0}parseName(){const n=this.expectToken(C.NAME);return this.node(n,{kind:b.NAME,value:n.value})}parseDocument(){return this.node(this._lexer.token,{kind:b.DOCUMENT,definitions:this.many(C.SOF,this.parseDefinition,C.EOF)})}parseDefinition(){if(this.peek(C.BRACE_L))return this.parseOperationDefinition();const n=this.peekDescription(),t=n?this._lexer.lookahead():this._lexer.token;if(t.kind===C.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(n)throw Qe(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}parseOperationDefinition(){const n=this._lexer.token;if(this.peek(C.BRACE_L))return this.node(n,{kind:b.OPERATION_DEFINITION,operation:Mn.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const t=this.parseOperationType();let o;return this.peek(C.NAME)&&(o=this.parseName()),this.node(n,{kind:b.OPERATION_DEFINITION,operation:t,name:o,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const n=this.expectToken(C.NAME);switch(n.value){case"query":return Mn.QUERY;case"mutation":return Mn.MUTATION;case"subscription":return Mn.SUBSCRIPTION}throw this.unexpected(n)}parseVariableDefinitions(){return this.optionalMany(C.PAREN_L,this.parseVariableDefinition,C.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:b.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(C.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(C.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const n=this._lexer.token;return this.expectToken(C.DOLLAR),this.node(n,{kind:b.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:b.SELECTION_SET,selections:this.many(C.BRACE_L,this.parseSelection,C.BRACE_R)})}parseSelection(){return this.peek(C.SPREAD)?this.parseFragment():this.parseField()}parseField(){const n=this._lexer.token,t=this.parseName();let o,s;return this.expectOptionalToken(C.COLON)?(o=t,s=this.parseName()):s=t,this.node(n,{kind:b.FIELD,alias:o,name:s,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(C.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(n){const t=n?this.parseConstArgument:this.parseArgument;return this.optionalMany(C.PAREN_L,t,C.PAREN_R)}parseArgument(n=!1){const t=this._lexer.token,o=this.parseName();return this.expectToken(C.COLON),this.node(t,{kind:b.ARGUMENT,name:o,value:this.parseValueLiteral(n)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const n=this._lexer.token;this.expectToken(C.SPREAD);const t=this.expectOptionalKeyword("on");return!t&&this.peek(C.NAME)?this.node(n,{kind:b.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(n,{kind:b.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const n=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(n,{kind:b.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(n,{kind:b.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(n){const t=this._lexer.token;switch(t.kind){case C.BRACKET_L:return this.parseList(n);case C.BRACE_L:return this.parseObject(n);case C.INT:return this.advanceLexer(),this.node(t,{kind:b.INT,value:t.value});case C.FLOAT:return this.advanceLexer(),this.node(t,{kind:b.FLOAT,value:t.value});case C.STRING:case C.BLOCK_STRING:return this.parseStringLiteral();case C.NAME:switch(this.advanceLexer(),t.value){case"true":return this.node(t,{kind:b.BOOLEAN,value:!0});case"false":return this.node(t,{kind:b.BOOLEAN,value:!1});case"null":return this.node(t,{kind:b.NULL});default:return this.node(t,{kind:b.ENUM,value:t.value})}case C.DOLLAR:if(n)if(this.expectToken(C.DOLLAR),this._lexer.token.kind===C.NAME){const o=this._lexer.token.value;throw Qe(this._lexer.source,t.start,`Unexpected variable "$${o}" in constant value.`)}else throw this.unexpected(t);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const n=this._lexer.token;return this.advanceLexer(),this.node(n,{kind:b.STRING,value:n.value,block:n.kind===C.BLOCK_STRING})}parseList(n){const t=()=>this.parseValueLiteral(n);return this.node(this._lexer.token,{kind:b.LIST,values:this.any(C.BRACKET_L,t,C.BRACKET_R)})}parseObject(n){const t=()=>this.parseObjectField(n);return this.node(this._lexer.token,{kind:b.OBJECT,fields:this.any(C.BRACE_L,t,C.BRACE_R)})}parseObjectField(n){const t=this._lexer.token,o=this.parseName();return this.expectToken(C.COLON),this.node(t,{kind:b.OBJECT_FIELD,name:o,value:this.parseValueLiteral(n)})}parseDirectives(n){const t=[];for(;this.peek(C.AT);)t.push(this.parseDirective(n));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(n){const t=this._lexer.token;return this.expectToken(C.AT),this.node(t,{kind:b.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(n)})}parseTypeReference(){const n=this._lexer.token;let t;if(this.expectOptionalToken(C.BRACKET_L)){const o=this.parseTypeReference();this.expectToken(C.BRACKET_R),t=this.node(n,{kind:b.LIST_TYPE,type:o})}else t=this.parseNamedType();return this.expectOptionalToken(C.BANG)?this.node(n,{kind:b.NON_NULL_TYPE,type:t}):t}parseNamedType(){return this.node(this._lexer.token,{kind:b.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(C.STRING)||this.peek(C.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");const o=this.parseConstDirectives(),s=this.many(C.BRACE_L,this.parseOperationTypeDefinition,C.BRACE_R);return this.node(n,{kind:b.SCHEMA_DEFINITION,description:t,directives:o,operationTypes:s})}parseOperationTypeDefinition(){const n=this._lexer.token,t=this.parseOperationType();this.expectToken(C.COLON);const o=this.parseNamedType();return this.node(n,{kind:b.OPERATION_TYPE_DEFINITION,operation:t,type:o})}parseScalarTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");const o=this.parseName(),s=this.parseConstDirectives();return this.node(n,{kind:b.SCALAR_TYPE_DEFINITION,description:t,name:o,directives:s})}parseObjectTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");const o=this.parseName(),s=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),l=this.parseFieldsDefinition();return this.node(n,{kind:b.OBJECT_TYPE_DEFINITION,description:t,name:o,interfaces:s,directives:a,fields:l})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(C.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(C.BRACE_L,this.parseFieldDefinition,C.BRACE_R)}parseFieldDefinition(){const n=this._lexer.token,t=this.parseDescription(),o=this.parseName(),s=this.parseArgumentDefs();this.expectToken(C.COLON);const a=this.parseTypeReference(),l=this.parseConstDirectives();return this.node(n,{kind:b.FIELD_DEFINITION,description:t,name:o,arguments:s,type:a,directives:l})}parseArgumentDefs(){return this.optionalMany(C.PAREN_L,this.parseInputValueDef,C.PAREN_R)}parseInputValueDef(){const n=this._lexer.token,t=this.parseDescription(),o=this.parseName();this.expectToken(C.COLON);const s=this.parseTypeReference();let a;this.expectOptionalToken(C.EQUALS)&&(a=this.parseConstValueLiteral());const l=this.parseConstDirectives();return this.node(n,{kind:b.INPUT_VALUE_DEFINITION,description:t,name:o,type:s,defaultValue:a,directives:l})}parseInterfaceTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");const o=this.parseName(),s=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),l=this.parseFieldsDefinition();return this.node(n,{kind:b.INTERFACE_TYPE_DEFINITION,description:t,name:o,interfaces:s,directives:a,fields:l})}parseUnionTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");const o=this.parseName(),s=this.parseConstDirectives(),a=this.parseUnionMemberTypes();return this.node(n,{kind:b.UNION_TYPE_DEFINITION,description:t,name:o,directives:s,types:a})}parseUnionMemberTypes(){return this.expectOptionalToken(C.EQUALS)?this.delimitedMany(C.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");const o=this.parseName(),s=this.parseConstDirectives(),a=this.parseEnumValuesDefinition();return this.node(n,{kind:b.ENUM_TYPE_DEFINITION,description:t,name:o,directives:s,values:a})}parseEnumValuesDefinition(){return this.optionalMany(C.BRACE_L,this.parseEnumValueDefinition,C.BRACE_R)}parseEnumValueDefinition(){const n=this._lexer.token,t=this.parseDescription(),o=this.parseEnumValueName(),s=this.parseConstDirectives();return this.node(n,{kind:b.ENUM_VALUE_DEFINITION,description:t,name:o,directives:s})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw Qe(this._lexer.source,this._lexer.token.start,`${_s(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");const o=this.parseName(),s=this.parseConstDirectives(),a=this.parseInputFieldsDefinition();return this.node(n,{kind:b.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:o,directives:s,fields:a})}parseInputFieldsDefinition(){return this.optionalMany(C.BRACE_L,this.parseInputValueDef,C.BRACE_R)}parseTypeSystemExtension(){const n=this._lexer.lookahead();if(n.kind===C.NAME)switch(n.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(n)}parseSchemaExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const t=this.parseConstDirectives(),o=this.optionalMany(C.BRACE_L,this.parseOperationTypeDefinition,C.BRACE_R);if(t.length===0&&o.length===0)throw this.unexpected();return this.node(n,{kind:b.SCHEMA_EXTENSION,directives:t,operationTypes:o})}parseScalarTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const t=this.parseName(),o=this.parseConstDirectives();if(o.length===0)throw this.unexpected();return this.node(n,{kind:b.SCALAR_TYPE_EXTENSION,name:t,directives:o})}parseObjectTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const t=this.parseName(),o=this.parseImplementsInterfaces(),s=this.parseConstDirectives(),a=this.parseFieldsDefinition();if(o.length===0&&s.length===0&&a.length===0)throw this.unexpected();return this.node(n,{kind:b.OBJECT_TYPE_EXTENSION,name:t,interfaces:o,directives:s,fields:a})}parseInterfaceTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const t=this.parseName(),o=this.parseImplementsInterfaces(),s=this.parseConstDirectives(),a=this.parseFieldsDefinition();if(o.length===0&&s.length===0&&a.length===0)throw this.unexpected();return this.node(n,{kind:b.INTERFACE_TYPE_EXTENSION,name:t,interfaces:o,directives:s,fields:a})}parseUnionTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const t=this.parseName(),o=this.parseConstDirectives(),s=this.parseUnionMemberTypes();if(o.length===0&&s.length===0)throw this.unexpected();return this.node(n,{kind:b.UNION_TYPE_EXTENSION,name:t,directives:o,types:s})}parseEnumTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const t=this.parseName(),o=this.parseConstDirectives(),s=this.parseEnumValuesDefinition();if(o.length===0&&s.length===0)throw this.unexpected();return this.node(n,{kind:b.ENUM_TYPE_EXTENSION,name:t,directives:o,values:s})}parseInputObjectTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const t=this.parseName(),o=this.parseConstDirectives(),s=this.parseInputFieldsDefinition();if(o.length===0&&s.length===0)throw this.unexpected();return this.node(n,{kind:b.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:o,fields:s})}parseDirectiveDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(C.AT);const o=this.parseName(),s=this.parseArgumentDefs(),a=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const l=this.parseDirectiveLocations();return this.node(n,{kind:b.DIRECTIVE_DEFINITION,description:t,name:o,arguments:s,repeatable:a,locations:l})}parseDirectiveLocations(){return this.delimitedMany(C.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const n=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(W,t.value))return t;throw this.unexpected(n)}node(n,t){return this._options.noLocation!==!0&&(t.loc=new Qb(n,this._lexer.lastToken,this._lexer.source)),t}peek(n){return this._lexer.token.kind===n}expectToken(n){const t=this._lexer.token;if(t.kind===n)return this.advanceLexer(),t;throw Qe(this._lexer.source,t.start,`Expected ${ip(n)}, found ${_s(t)}.`)}expectOptionalToken(n){return this._lexer.token.kind===n?(this.advanceLexer(),!0):!1}expectKeyword(n){const t=this._lexer.token;if(t.kind===C.NAME&&t.value===n)this.advanceLexer();else throw Qe(this._lexer.source,t.start,`Expected "${n}", found ${_s(t)}.`)}expectOptionalKeyword(n){const t=this._lexer.token;return t.kind===C.NAME&&t.value===n?(this.advanceLexer(),!0):!1}unexpected(n){const t=n??this._lexer.token;return Qe(this._lexer.source,t.start,`Unexpected ${_s(t)}.`)}any(n,t,o){this.expectToken(n);const s=[];for(;!this.expectOptionalToken(o);)s.push(t.call(this));return s}optionalMany(n,t,o){if(this.expectOptionalToken(n)){const s=[];do s.push(t.call(this));while(!this.expectOptionalToken(o));return s}return[]}many(n,t,o){this.expectToken(n);const s=[];do s.push(t.call(this));while(!this.expectOptionalToken(o));return s}delimitedMany(n,t){this.expectOptionalToken(n);const o=[];do o.push(t.call(this));while(this.expectOptionalToken(n));return o}advanceLexer(){const{maxTokens:n}=this._options,t=this._lexer.advance();if(n!==void 0&&t.kind!==C.EOF&&(++this._tokenCounter,this._tokenCounter>n))throw Qe(this._lexer.source,t.start,`Document contains more that ${n} tokens. Parsing aborted.`)}}function _s(r){const n=r.value;return ip(r.kind)+(n!=null?` "${n}"`:"")}function ip(r){return nT(r)?`"${r}"`:r}const bT=5;function Kt(r,n){const[t,o]=n?[r,n]:[void 0,r];let s=" Did you mean ";t&&(s+=t+" ");const a=o.map(p=>`"${p}"`);switch(a.length){case 0:return"";case 1:return s+a[0]+"?";case 2:return s+a[0]+" or "+a[1]+"?"}const l=a.slice(0,bT),f=l.pop();return s+l.join(", ")+", or "+f+"?"}function hf(r){return r}function dr(r,n){const t=Object.create(null);for(const o of r)t[n(o)]=o;return t}function cr(r,n,t){const o=Object.create(null);for(const s of r)o[n(s)]=t(s);return o}function wt(r,n){const t=Object.create(null);for(const o of Object.keys(r))t[o]=n(r[o],o);return t}function Ja(r,n){let t=0,o=0;for(;t<r.length&&o<n.length;){let s=r.charCodeAt(t),a=n.charCodeAt(o);if(Ss(s)&&Ss(a)){let l=0;do++t,l=l*10+s-Ca,s=r.charCodeAt(t);while(Ss(s)&&l>0);let f=0;do++o,f=f*10+a-Ca,a=n.charCodeAt(o);while(Ss(a)&&f>0);if(l<f)return-1;if(l>f)return 1}else{if(s<a)return-1;if(s>a)return 1;++t,++o}}return r.length-n.length}const Ca=48,TT=57;function Ss(r){return!isNaN(r)&&Ca<=r&&r<=TT}function vr(r,n){const t=Object.create(null),o=new IT(r),s=Math.floor(r.length*.4)+1;for(const a of n){const l=o.measure(a,s);l!==void 0&&(t[a]=l)}return Object.keys(t).sort((a,l)=>{const f=t[a]-t[l];return f!==0?f:Ja(a,l)})}class IT{constructor(n){this._input=n,this._inputLowerCase=n.toLowerCase(),this._inputArray=df(this._inputLowerCase),this._rows=[new Array(n.length+1).fill(0),new Array(n.length+1).fill(0),new Array(n.length+1).fill(0)]}measure(n,t){if(this._input===n)return 0;const o=n.toLowerCase();if(this._inputLowerCase===o)return 1;let s=df(o),a=this._inputArray;if(s.length<a.length){const D=s;s=a,a=D}const l=s.length,f=a.length;if(l-f>t)return;const p=this._rows;for(let D=0;D<=f;D++)p[0][D]=D;for(let D=1;D<=l;D++){const y=p[(D-1)%3],A=p[D%3];let S=A[0]=D;for(let R=1;R<=f;R++){const L=s[D-1]===a[R-1]?0:1;let H=Math.min(y[R]+1,A[R-1]+1,y[R-1]+L);if(D>1&&R>1&&s[D-1]===a[R-2]&&s[D-2]===a[R-1]){const ce=p[(D-2)%3][R-2];H=Math.min(H,ce+1)}H<S&&(S=H),A[R]=H}if(S>t)return}const m=p[l%3][f];return m<=t?m:void 0}}function df(r){const n=r.length,t=new Array(n);for(let o=0;o<n;++o)t[o]=r.charCodeAt(o);return t}function qn(r){if(r==null)return Object.create(null);if(Object.getPrototypeOf(r)===null)return r;const n=Object.create(null);for(const[t,o]of Object.entries(r))n[t]=o;return n}function _T(r){return`"${r.replace(ST,wT)}"`}const ST=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function wT(r){return NT[r.charCodeAt(0)]}const NT=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],hi=Object.freeze({});function sp(r,n,t=Kf){const o=new Map;for(const ce of Object.values(b))o.set(ce,op(n,ce));let s,a=Array.isArray(r),l=[r],f=-1,p=[],m=r,D,y;const A=[],S=[];do{f++;const ce=f===l.length,we=ce&&p.length!==0;if(ce){if(D=S.length===0?void 0:A[A.length-1],m=y,y=S.pop(),we)if(a){m=m.slice();let Fe=0;for(const[ke,on]of p){const en=ke-Fe;on===null?(m.splice(en,1),Fe++):m[en]=on}}else{m=Object.defineProperties({},Object.getOwnPropertyDescriptors(m));for(const[Fe,ke]of p)m[Fe]=ke}f=s.index,l=s.keys,p=s.edits,a=s.inArray,s=s.prev}else if(y){if(D=a?f:l[f],m=y[D],m==null)continue;A.push(D)}let me;if(!Array.isArray(m)){var R,L;ff(m)||fe(!1,`Invalid AST Node: ${M(m)}.`);const Fe=ce?(R=o.get(m.kind))===null||R===void 0?void 0:R.leave:(L=o.get(m.kind))===null||L===void 0?void 0:L.enter;if(me=Fe==null?void 0:Fe.call(n,m,D,y,A,S),me===hi)break;if(me===!1){if(!ce){A.pop();continue}}else if(me!==void 0&&(p.push([D,me]),!ce))if(ff(me))m=me;else{A.pop();continue}}if(me===void 0&&we&&p.push([D,m]),ce)A.pop();else{var H;s={inArray:a,index:f,keys:l,edits:p,prev:s},a=Array.isArray(m),l=a?m:(H=t[m.kind])!==null&&H!==void 0?H:[],f=-1,p=[],y&&S.push(y),y=m}}while(s!==void 0);return p.length!==0?p[p.length-1][1]:r}function AT(r){const n=new Array(r.length).fill(null),t=Object.create(null);for(const o of Object.values(b)){let s=!1;const a=new Array(r.length).fill(void 0),l=new Array(r.length).fill(void 0);for(let p=0;p<r.length;++p){const{enter:m,leave:D}=op(r[p],o);s||(s=m!=null||D!=null),a[p]=m,l[p]=D}if(!s)continue;const f={enter(...p){const m=p[0];for(let y=0;y<r.length;y++)if(n[y]===null){var D;const A=(D=a[y])===null||D===void 0?void 0:D.apply(r[y],p);if(A===!1)n[y]=m;else if(A===hi)n[y]=hi;else if(A!==void 0)return A}},leave(...p){const m=p[0];for(let y=0;y<r.length;y++)if(n[y]===null){var D;const A=(D=l[y])===null||D===void 0?void 0:D.apply(r[y],p);if(A===hi)n[y]=hi;else if(A!==void 0&&A!==!1)return A}else n[y]===m&&(n[y]=null)}};t[o]=f}return t}function op(r,n){const t=r[n];return typeof t=="object"?t:typeof t=="function"?{enter:t,leave:void 0}:{enter:r.enter,leave:r.leave}}function Ke(r){return sp(r,FT)}const xT=80,FT={Name:{leave:r=>r.value},Variable:{leave:r=>"$"+r.name},Document:{leave:r=>G(r.definitions,`

`)},OperationDefinition:{leave(r){const n=ue("(",G(r.variableDefinitions,", "),")"),t=G([r.operation,G([r.name,n]),G(r.directives," ")]," ");return(t==="query"?"":t+" ")+r.selectionSet}},VariableDefinition:{leave:({variable:r,type:n,defaultValue:t,directives:o})=>r+": "+n+ue(" = ",t)+ue(" ",G(o," "))},SelectionSet:{leave:({selections:r})=>Qn(r)},Field:{leave({alias:r,name:n,arguments:t,directives:o,selectionSet:s}){const a=ue("",r,": ")+n;let l=a+ue("(",G(t,", "),")");return l.length>xT&&(l=a+ue(`(
`,As(G(t,`
`)),`
)`)),G([l,G(o," "),s]," ")}},Argument:{leave:({name:r,value:n})=>r+": "+n},FragmentSpread:{leave:({name:r,directives:n})=>"..."+r+ue(" ",G(n," "))},InlineFragment:{leave:({typeCondition:r,directives:n,selectionSet:t})=>G(["...",ue("on ",r),G(n," "),t]," ")},FragmentDefinition:{leave:({name:r,typeCondition:n,variableDefinitions:t,directives:o,selectionSet:s})=>`fragment ${r}${ue("(",G(t,", "),")")} on ${n} ${ue("",G(o," ")," ")}`+s},IntValue:{leave:({value:r})=>r},FloatValue:{leave:({value:r})=>r},StringValue:{leave:({value:r,block:n})=>n?Zb(r):_T(r)},BooleanValue:{leave:({value:r})=>r?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:r})=>r},ListValue:{leave:({values:r})=>"["+G(r,", ")+"]"},ObjectValue:{leave:({fields:r})=>"{"+G(r,", ")+"}"},ObjectField:{leave:({name:r,value:n})=>r+": "+n},Directive:{leave:({name:r,arguments:n})=>"@"+r+ue("(",G(n,", "),")")},NamedType:{leave:({name:r})=>r},ListType:{leave:({type:r})=>"["+r+"]"},NonNullType:{leave:({type:r})=>r+"!"},SchemaDefinition:{leave:({description:r,directives:n,operationTypes:t})=>ue("",r,`
`)+G(["schema",G(n," "),Qn(t)]," ")},OperationTypeDefinition:{leave:({operation:r,type:n})=>r+": "+n},ScalarTypeDefinition:{leave:({description:r,name:n,directives:t})=>ue("",r,`
`)+G(["scalar",n,G(t," ")]," ")},ObjectTypeDefinition:{leave:({description:r,name:n,interfaces:t,directives:o,fields:s})=>ue("",r,`
`)+G(["type",n,ue("implements ",G(t," & ")),G(o," "),Qn(s)]," ")},FieldDefinition:{leave:({description:r,name:n,arguments:t,type:o,directives:s})=>ue("",r,`
`)+n+(gf(t)?ue(`(
`,As(G(t,`
`)),`
)`):ue("(",G(t,", "),")"))+": "+o+ue(" ",G(s," "))},InputValueDefinition:{leave:({description:r,name:n,type:t,defaultValue:o,directives:s})=>ue("",r,`
`)+G([n+": "+t,ue("= ",o),G(s," ")]," ")},InterfaceTypeDefinition:{leave:({description:r,name:n,interfaces:t,directives:o,fields:s})=>ue("",r,`
`)+G(["interface",n,ue("implements ",G(t," & ")),G(o," "),Qn(s)]," ")},UnionTypeDefinition:{leave:({description:r,name:n,directives:t,types:o})=>ue("",r,`
`)+G(["union",n,G(t," "),ue("= ",G(o," | "))]," ")},EnumTypeDefinition:{leave:({description:r,name:n,directives:t,values:o})=>ue("",r,`
`)+G(["enum",n,G(t," "),Qn(o)]," ")},EnumValueDefinition:{leave:({description:r,name:n,directives:t})=>ue("",r,`
`)+G([n,G(t," ")]," ")},InputObjectTypeDefinition:{leave:({description:r,name:n,directives:t,fields:o})=>ue("",r,`
`)+G(["input",n,G(t," "),Qn(o)]," ")},DirectiveDefinition:{leave:({description:r,name:n,arguments:t,repeatable:o,locations:s})=>ue("",r,`
`)+"directive @"+n+(gf(t)?ue(`(
`,As(G(t,`
`)),`
)`):ue("(",G(t,", "),")"))+(o?" repeatable":"")+" on "+G(s," | ")},SchemaExtension:{leave:({directives:r,operationTypes:n})=>G(["extend schema",G(r," "),Qn(n)]," ")},ScalarTypeExtension:{leave:({name:r,directives:n})=>G(["extend scalar",r,G(n," ")]," ")},ObjectTypeExtension:{leave:({name:r,interfaces:n,directives:t,fields:o})=>G(["extend type",r,ue("implements ",G(n," & ")),G(t," "),Qn(o)]," ")},InterfaceTypeExtension:{leave:({name:r,interfaces:n,directives:t,fields:o})=>G(["extend interface",r,ue("implements ",G(n," & ")),G(t," "),Qn(o)]," ")},UnionTypeExtension:{leave:({name:r,directives:n,types:t})=>G(["extend union",r,G(n," "),ue("= ",G(t," | "))]," ")},EnumTypeExtension:{leave:({name:r,directives:n,values:t})=>G(["extend enum",r,G(n," "),Qn(t)]," ")},InputObjectTypeExtension:{leave:({name:r,directives:n,fields:t})=>G(["extend input",r,G(n," "),Qn(t)]," ")}};function G(r,n=""){var t;return(t=r==null?void 0:r.filter(o=>o).join(n))!==null&&t!==void 0?t:""}function Qn(r){return ue(`{
`,As(G(r,`
`)),`
}`)}function ue(r,n,t=""){return n!=null&&n!==""?r+n+t:""}function As(r){return ue("  ",r.replace(/\n/g,`
  `))}function gf(r){var n;return(n=r==null?void 0:r.some(t=>t.includes(`
`)))!==null&&n!==void 0?n:!1}function Ra(r,n){switch(r.kind){case b.NULL:return null;case b.INT:return parseInt(r.value,10);case b.FLOAT:return parseFloat(r.value);case b.STRING:case b.ENUM:case b.BOOLEAN:return r.value;case b.LIST:return r.values.map(t=>Ra(t,n));case b.OBJECT:return cr(r.fields,t=>t.name.value,t=>Ra(t.value,n));case b.VARIABLE:return n==null?void 0:n[r.name.value]}}function st(r){if(r!=null||fe(!1,"Must provide name."),typeof r=="string"||fe(!1,"Expected name to be a string."),r.length===0)throw new P("Expected name to be a non-empty string.");for(let n=1;n<r.length;++n)if(!Xf(r.charCodeAt(n)))throw new P(`Names must only contain [_a-zA-Z0-9] but "${r}" does not.`);if(!Ka(r.charCodeAt(0)))throw new P(`Names must start with [_a-zA-Z] but "${r}" does not.`);return r}function CT(r){if(r==="true"||r==="false"||r==="null")throw new P(`Enum values cannot be named: ${r}`);return st(r)}function Xa(r){return Jt(r)||He(r)||je(r)||Un(r)||et(r)||vn(r)||yn(r)||Se(r)}function Jt(r){return dt(r,Rt)}function He(r){return dt(r,pt)}function RT(r){if(!He(r))throw new Error(`Expected ${M(r)} to be a GraphQL Object type.`);return r}function je(r){return dt(r,ks)}function OT(r){if(!je(r))throw new Error(`Expected ${M(r)} to be a GraphQL Interface type.`);return r}function Un(r){return dt(r,Ps)}function et(r){return dt(r,$r)}function vn(r){return dt(r,Ls)}function yn(r){return dt(r,fn)}function Se(r){return dt(r,ie)}function Za(r){return Jt(r)||et(r)||vn(r)||eu(r)&&Za(r.ofType)}function ap(r){return Jt(r)||He(r)||je(r)||Un(r)||et(r)||eu(r)&&ap(r.ofType)}function Br(r){return Jt(r)||et(r)}function Ii(r){return He(r)||je(r)||Un(r)}function fr(r){return je(r)||Un(r)}class fn{constructor(n){Xa(n)||fe(!1,`Expected ${M(n)} to be a GraphQL type.`),this.ofType=n}get[Symbol.toStringTag](){return"GraphQLList"}toString(){return"["+String(this.ofType)+"]"}toJSON(){return this.toString()}}class ie{constructor(n){up(n)||fe(!1,`Expected ${M(n)} to be a GraphQL nullable type.`),this.ofType=n}get[Symbol.toStringTag](){return"GraphQLNonNull"}toString(){return String(this.ofType)+"!"}toJSON(){return this.toString()}}function eu(r){return yn(r)||Se(r)}function up(r){return Xa(r)&&!Se(r)}function kT(r){if(!up(r))throw new Error(`Expected ${M(r)} to be a GraphQL nullable type.`);return r}function PT(r){if(r)return Se(r)?r.ofType:r}function $_(r){return Jt(r)||He(r)||je(r)||Un(r)||et(r)||vn(r)}function gr(r){if(r){let n=r;for(;eu(n);)n=n.ofType;return n}}function lp(r){return typeof r=="function"?r():r}function cp(r){return typeof r=="function"?r():r}class Rt{constructor(n){var t,o,s,a;const l=(t=n.parseValue)!==null&&t!==void 0?t:hf;this.name=st(n.name),this.description=n.description,this.specifiedByURL=n.specifiedByURL,this.serialize=(o=n.serialize)!==null&&o!==void 0?o:hf,this.parseValue=l,this.parseLiteral=(s=n.parseLiteral)!==null&&s!==void 0?s:(f,p)=>l(Ra(f,p)),this.extensions=qn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(a=n.extensionASTNodes)!==null&&a!==void 0?a:[],n.specifiedByURL==null||typeof n.specifiedByURL=="string"||fe(!1,`${this.name} must provide "specifiedByURL" as a string, but got: ${M(n.specifiedByURL)}.`),n.serialize==null||typeof n.serialize=="function"||fe(!1,`${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`),n.parseLiteral&&(typeof n.parseValue=="function"&&typeof n.parseLiteral=="function"||fe(!1,`${this.name} must provide both "parseValue" and "parseLiteral" functions.`))}get[Symbol.toStringTag](){return"GraphQLScalarType"}toConfig(){return{name:this.name,description:this.description,specifiedByURL:this.specifiedByURL,serialize:this.serialize,parseValue:this.parseValue,parseLiteral:this.parseLiteral,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class pt{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.isTypeOf=n.isTypeOf,this.extensions=qn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=()=>pp(n),this._interfaces=()=>fp(n),n.isTypeOf==null||typeof n.isTypeOf=="function"||fe(!1,`${this.name} must provide "isTypeOf" as a function, but got: ${M(n.isTypeOf)}.`)}get[Symbol.toStringTag](){return"GraphQLObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:dp(this.getFields()),isTypeOf:this.isTypeOf,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function fp(r){var n;const t=lp((n=r.interfaces)!==null&&n!==void 0?n:[]);return Array.isArray(t)||fe(!1,`${r.name} interfaces must be an Array or a function which returns an Array.`),t}function pp(r){const n=cp(r.fields);return Lr(n)||fe(!1,`${r.name} fields must be an object with field names as keys or a function which returns such an object.`),wt(n,(t,o)=>{var s;Lr(t)||fe(!1,`${r.name}.${o} field config must be an object.`),t.resolve==null||typeof t.resolve=="function"||fe(!1,`${r.name}.${o} field resolver must be a function if provided, but got: ${M(t.resolve)}.`);const a=(s=t.args)!==null&&s!==void 0?s:{};return Lr(a)||fe(!1,`${r.name}.${o} args must be an object with argument names as keys.`),{name:st(o),description:t.description,type:t.type,args:hp(a),resolve:t.resolve,subscribe:t.subscribe,deprecationReason:t.deprecationReason,extensions:qn(t.extensions),astNode:t.astNode}})}function hp(r){return Object.entries(r).map(([n,t])=>({name:st(n),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:qn(t.extensions),astNode:t.astNode}))}function Lr(r){return Ct(r)&&!Array.isArray(r)}function dp(r){return wt(r,n=>({description:n.description,type:n.type,args:gp(n.args),resolve:n.resolve,subscribe:n.subscribe,deprecationReason:n.deprecationReason,extensions:n.extensions,astNode:n.astNode}))}function gp(r){return cr(r,n=>n.name,n=>({description:n.description,type:n.type,defaultValue:n.defaultValue,deprecationReason:n.deprecationReason,extensions:n.extensions,astNode:n.astNode}))}function mp(r){return Se(r.type)&&r.defaultValue===void 0}class ks{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.resolveType=n.resolveType,this.extensions=qn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=pp.bind(void 0,n),this._interfaces=fp.bind(void 0,n),n.resolveType==null||typeof n.resolveType=="function"||fe(!1,`${this.name} must provide "resolveType" as a function, but got: ${M(n.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLInterfaceType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:dp(this.getFields()),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class Ps{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.resolveType=n.resolveType,this.extensions=qn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._types=LT.bind(void 0,n),n.resolveType==null||typeof n.resolveType=="function"||fe(!1,`${this.name} must provide "resolveType" as a function, but got: ${M(n.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLUnionType"}getTypes(){return typeof this._types=="function"&&(this._types=this._types()),this._types}toConfig(){return{name:this.name,description:this.description,types:this.getTypes(),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function LT(r){const n=lp(r.types);return Array.isArray(n)||fe(!1,`Must provide Array of types or a function which returns such an array for Union ${r.name}.`),n}class $r{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.extensions=qn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._values=typeof n.values=="function"?n.values:mf(this.name,n.values),this._valueLookup=null,this._nameLookup=null}get[Symbol.toStringTag](){return"GraphQLEnumType"}getValues(){return typeof this._values=="function"&&(this._values=mf(this.name,this._values())),this._values}getValue(n){return this._nameLookup===null&&(this._nameLookup=dr(this.getValues(),t=>t.name)),this._nameLookup[n]}serialize(n){this._valueLookup===null&&(this._valueLookup=new Map(this.getValues().map(o=>[o.value,o])));const t=this._valueLookup.get(n);if(t===void 0)throw new P(`Enum "${this.name}" cannot represent value: ${M(n)}`);return t.name}parseValue(n){if(typeof n!="string"){const o=M(n);throw new P(`Enum "${this.name}" cannot represent non-string value: ${o}.`+ws(this,o))}const t=this.getValue(n);if(t==null)throw new P(`Value "${n}" does not exist in "${this.name}" enum.`+ws(this,n));return t.value}parseLiteral(n,t){if(n.kind!==b.ENUM){const s=Ke(n);throw new P(`Enum "${this.name}" cannot represent non-enum value: ${s}.`+ws(this,s),{nodes:n})}const o=this.getValue(n.value);if(o==null){const s=Ke(n);throw new P(`Value "${s}" does not exist in "${this.name}" enum.`+ws(this,s),{nodes:n})}return o.value}toConfig(){const n=cr(this.getValues(),t=>t.name,t=>({description:t.description,value:t.value,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,values:n,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function ws(r,n){const t=r.getValues().map(s=>s.name),o=vr(n,t);return Kt("the enum value",o)}function mf(r,n){return Lr(n)||fe(!1,`${r} values must be an object with value names as keys.`),Object.entries(n).map(([t,o])=>(Lr(o)||fe(!1,`${r}.${t} must refer to an object with a "value" key representing an internal value but got: ${M(o)}.`),{name:CT(t),description:o.description,value:o.value!==void 0?o.value:t,deprecationReason:o.deprecationReason,extensions:qn(o.extensions),astNode:o.astNode}))}class Ls{constructor(n){var t,o;this.name=st(n.name),this.description=n.description,this.extensions=qn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this.isOneOf=(o=n.isOneOf)!==null&&o!==void 0?o:!1,this._fields=BT.bind(void 0,n)}get[Symbol.toStringTag](){return"GraphQLInputObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}toConfig(){const n=wt(this.getFields(),t=>({description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,fields:n,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,isOneOf:this.isOneOf}}toString(){return this.name}toJSON(){return this.toString()}}function BT(r){const n=cp(r.fields);return Lr(n)||fe(!1,`${r.name} fields must be an object with field names as keys or a function which returns such an object.`),wt(n,(t,o)=>(!("resolve"in t)||fe(!1,`${r.name}.${o} field has a resolve property, but Input Types cannot define resolvers.`),{name:st(o),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:qn(t.extensions),astNode:t.astNode}))}function $T(r){return Se(r.type)&&r.defaultValue===void 0}function vi(r,n,t){return n===t?!0:Se(t)?Se(n)?vi(r,n.ofType,t.ofType):!1:Se(n)?vi(r,n.ofType,t):yn(t)?yn(n)?vi(r,n.ofType,t.ofType):!1:yn(n)?!1:fr(t)&&(je(n)||He(n))&&r.isSubType(t,n)}function Df(r,n,t){return n===t?!0:fr(n)?fr(t)?r.getPossibleTypes(n).some(o=>r.isSubType(t,o)):r.isSubType(n,t):fr(t)?r.isSubType(t,n):!1}const Ta=2147483647,Ia=-2147483648,MT=new Rt({name:"Int",description:"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",serialize(r){const n=Ai(r);if(typeof n=="boolean")return n?1:0;let t=n;if(typeof n=="string"&&n!==""&&(t=Number(n)),typeof t!="number"||!Number.isInteger(t))throw new P(`Int cannot represent non-integer value: ${M(n)}`);if(t>Ta||t<Ia)throw new P("Int cannot represent non 32-bit signed integer value: "+M(n));return t},parseValue(r){if(typeof r!="number"||!Number.isInteger(r))throw new P(`Int cannot represent non-integer value: ${M(r)}`);if(r>Ta||r<Ia)throw new P(`Int cannot represent non 32-bit signed integer value: ${r}`);return r},parseLiteral(r){if(r.kind!==b.INT)throw new P(`Int cannot represent non-integer value: ${Ke(r)}`,{nodes:r});const n=parseInt(r.value,10);if(n>Ta||n<Ia)throw new P(`Int cannot represent non 32-bit signed integer value: ${r.value}`,{nodes:r});return n}}),UT=new Rt({name:"Float",description:"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",serialize(r){const n=Ai(r);if(typeof n=="boolean")return n?1:0;let t=n;if(typeof n=="string"&&n!==""&&(t=Number(n)),typeof t!="number"||!Number.isFinite(t))throw new P(`Float cannot represent non numeric value: ${M(n)}`);return t},parseValue(r){if(typeof r!="number"||!Number.isFinite(r))throw new P(`Float cannot represent non numeric value: ${M(r)}`);return r},parseLiteral(r){if(r.kind!==b.FLOAT&&r.kind!==b.INT)throw new P(`Float cannot represent non numeric value: ${Ke(r)}`,r);return parseFloat(r.value)}}),qe=new Rt({name:"String",description:"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",serialize(r){const n=Ai(r);if(typeof n=="string")return n;if(typeof n=="boolean")return n?"true":"false";if(typeof n=="number"&&Number.isFinite(n))return n.toString();throw new P(`String cannot represent value: ${M(r)}`)},parseValue(r){if(typeof r!="string")throw new P(`String cannot represent a non string value: ${M(r)}`);return r},parseLiteral(r){if(r.kind!==b.STRING)throw new P(`String cannot represent a non string value: ${Ke(r)}`,{nodes:r});return r.value}}),An=new Rt({name:"Boolean",description:"The `Boolean` scalar type represents `true` or `false`.",serialize(r){const n=Ai(r);if(typeof n=="boolean")return n;if(Number.isFinite(n))return n!==0;throw new P(`Boolean cannot represent a non boolean value: ${M(n)}`)},parseValue(r){if(typeof r!="boolean")throw new P(`Boolean cannot represent a non boolean value: ${M(r)}`);return r},parseLiteral(r){if(r.kind!==b.BOOLEAN)throw new P(`Boolean cannot represent a non boolean value: ${Ke(r)}`,{nodes:r});return r.value}}),Dp=new Rt({name:"ID",description:'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',serialize(r){const n=Ai(r);if(typeof n=="string")return n;if(Number.isInteger(n))return String(n);throw new P(`ID cannot represent value: ${M(r)}`)},parseValue(r){if(typeof r=="string")return r;if(typeof r=="number"&&Number.isInteger(r))return r.toString();throw new P(`ID cannot represent value: ${M(r)}`)},parseLiteral(r){if(r.kind!==b.STRING&&r.kind!==b.INT)throw new P("ID cannot represent a non-string and non-integer value: "+Ke(r),{nodes:r});return r.value}}),Ys=Object.freeze([qe,MT,UT,An,Dp]);function qT(r){return Ys.some(({name:n})=>r.name===n)}function Ai(r){if(Ct(r)){if(typeof r.valueOf=="function"){const n=r.valueOf();if(!Ct(n))return n}if(typeof r.toJSON=="function")return r.toJSON()}return r}function jT(r){return dt(r,Ot)}class Ot{constructor(n){var t,o;this.name=st(n.name),this.description=n.description,this.locations=n.locations,this.isRepeatable=(t=n.isRepeatable)!==null&&t!==void 0?t:!1,this.extensions=qn(n.extensions),this.astNode=n.astNode,Array.isArray(n.locations)||fe(!1,`@${n.name} locations must be an Array.`);const s=(o=n.args)!==null&&o!==void 0?o:{};Ct(s)&&!Array.isArray(s)||fe(!1,`@${n.name} args must be an object with argument names as keys.`),this.args=hp(s)}get[Symbol.toStringTag](){return"GraphQLDirective"}toConfig(){return{name:this.name,description:this.description,locations:this.locations,args:gp(this.args),isRepeatable:this.isRepeatable,extensions:this.extensions,astNode:this.astNode}}toString(){return"@"+this.name}toJSON(){return this.toString()}}const vp=new Ot({name:"include",description:"Directs the executor to include this field or fragment only when the `if` argument is true.",locations:[W.FIELD,W.FRAGMENT_SPREAD,W.INLINE_FRAGMENT],args:{if:{type:new ie(An),description:"Included when true."}}}),yp=new Ot({name:"skip",description:"Directs the executor to skip this field or fragment when the `if` argument is true.",locations:[W.FIELD,W.FRAGMENT_SPREAD,W.INLINE_FRAGMENT],args:{if:{type:new ie(An),description:"Skipped when true."}}}),GT="No longer supported",Ep=new Ot({name:"deprecated",description:"Marks an element of a GraphQL schema as no longer supported.",locations:[W.FIELD_DEFINITION,W.ARGUMENT_DEFINITION,W.INPUT_FIELD_DEFINITION,W.ENUM_VALUE],args:{reason:{type:qe,description:"Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",defaultValue:GT}}}),bp=new Ot({name:"specifiedBy",description:"Exposes a URL that specifies the behavior of this scalar.",locations:[W.SCALAR],args:{url:{type:new ie(qe),description:"The URL that specifies the behavior of this scalar."}}}),Tp=new Ot({name:"oneOf",description:"Indicates exactly one field must be supplied and this field must not be `null`.",locations:[W.INPUT_OBJECT],args:{}}),Ur=Object.freeze([vp,yp,Ep,bp,Tp]);function VT(r){return typeof r=="object"&&typeof(r==null?void 0:r[Symbol.iterator])=="function"}function di(r,n){if(Se(n)){const t=di(r,n.ofType);return(t==null?void 0:t.kind)===b.NULL?null:t}if(r===null)return{kind:b.NULL};if(r===void 0)return null;if(yn(n)){const t=n.ofType;if(VT(r)){const o=[];for(const s of r){const a=di(s,t);a!=null&&o.push(a)}return{kind:b.LIST,values:o}}return di(r,t)}if(vn(n)){if(!Ct(r))return null;const t=[];for(const o of Object.values(n.getFields())){const s=di(r[o.name],o.type);s&&t.push({kind:b.OBJECT_FIELD,name:{kind:b.NAME,value:o.name},value:s})}return{kind:b.OBJECT,fields:t}}if(Br(n)){const t=n.serialize(r);if(t==null)return null;if(typeof t=="boolean")return{kind:b.BOOLEAN,value:t};if(typeof t=="number"&&Number.isFinite(t)){const o=String(t);return vf.test(o)?{kind:b.INT,value:o}:{kind:b.FLOAT,value:o}}if(typeof t=="string")return et(n)?{kind:b.ENUM,value:t}:n===Dp&&vf.test(t)?{kind:b.INT,value:t}:{kind:b.STRING,value:t};throw new TypeError(`Cannot convert value to AST: ${M(t)}.`)}Zn(!1,"Unexpected input type: "+M(n))}const vf=/^-?(?:0|[1-9][0-9]*)$/,nu=new pt({name:"__Schema",description:"A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",fields:()=>({description:{type:qe,resolve:r=>r.description},types:{description:"A list of all types supported by this server.",type:new ie(new fn(new ie(Xn))),resolve(r){return Object.values(r.getTypeMap())}},queryType:{description:"The type that query operations will be rooted at.",type:new ie(Xn),resolve:r=>r.getQueryType()},mutationType:{description:"If this server supports mutation, the type that mutation operations will be rooted at.",type:Xn,resolve:r=>r.getMutationType()},subscriptionType:{description:"If this server support subscription, the type that subscription operations will be rooted at.",type:Xn,resolve:r=>r.getSubscriptionType()},directives:{description:"A list of all directives supported by this server.",type:new ie(new fn(new ie(Ip))),resolve:r=>r.getDirectives()}})}),Ip=new pt({name:"__Directive",description:`A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.`,fields:()=>({name:{type:new ie(qe),resolve:r=>r.name},description:{type:qe,resolve:r=>r.description},isRepeatable:{type:new ie(An),resolve:r=>r.isRepeatable},locations:{type:new ie(new fn(new ie(_p))),resolve:r=>r.locations},args:{type:new ie(new fn(new ie(zs))),args:{includeDeprecated:{type:An,defaultValue:!1}},resolve(r,{includeDeprecated:n}){return n?r.args:r.args.filter(t=>t.deprecationReason==null)}}})}),_p=new $r({name:"__DirectiveLocation",description:"A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",values:{QUERY:{value:W.QUERY,description:"Location adjacent to a query operation."},MUTATION:{value:W.MUTATION,description:"Location adjacent to a mutation operation."},SUBSCRIPTION:{value:W.SUBSCRIPTION,description:"Location adjacent to a subscription operation."},FIELD:{value:W.FIELD,description:"Location adjacent to a field."},FRAGMENT_DEFINITION:{value:W.FRAGMENT_DEFINITION,description:"Location adjacent to a fragment definition."},FRAGMENT_SPREAD:{value:W.FRAGMENT_SPREAD,description:"Location adjacent to a fragment spread."},INLINE_FRAGMENT:{value:W.INLINE_FRAGMENT,description:"Location adjacent to an inline fragment."},VARIABLE_DEFINITION:{value:W.VARIABLE_DEFINITION,description:"Location adjacent to a variable definition."},SCHEMA:{value:W.SCHEMA,description:"Location adjacent to a schema definition."},SCALAR:{value:W.SCALAR,description:"Location adjacent to a scalar definition."},OBJECT:{value:W.OBJECT,description:"Location adjacent to an object type definition."},FIELD_DEFINITION:{value:W.FIELD_DEFINITION,description:"Location adjacent to a field definition."},ARGUMENT_DEFINITION:{value:W.ARGUMENT_DEFINITION,description:"Location adjacent to an argument definition."},INTERFACE:{value:W.INTERFACE,description:"Location adjacent to an interface definition."},UNION:{value:W.UNION,description:"Location adjacent to a union definition."},ENUM:{value:W.ENUM,description:"Location adjacent to an enum definition."},ENUM_VALUE:{value:W.ENUM_VALUE,description:"Location adjacent to an enum value definition."},INPUT_OBJECT:{value:W.INPUT_OBJECT,description:"Location adjacent to an input object type definition."},INPUT_FIELD_DEFINITION:{value:W.INPUT_FIELD_DEFINITION,description:"Location adjacent to an input object field definition."}}}),Xn=new pt({name:"__Type",description:"The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",fields:()=>({kind:{type:new ie(Np),resolve(r){if(Jt(r))return Ie.SCALAR;if(He(r))return Ie.OBJECT;if(je(r))return Ie.INTERFACE;if(Un(r))return Ie.UNION;if(et(r))return Ie.ENUM;if(vn(r))return Ie.INPUT_OBJECT;if(yn(r))return Ie.LIST;if(Se(r))return Ie.NON_NULL;Zn(!1,`Unexpected type: "${M(r)}".`)}},name:{type:qe,resolve:r=>"name"in r?r.name:void 0},description:{type:qe,resolve:r=>"description"in r?r.description:void 0},specifiedByURL:{type:qe,resolve:r=>"specifiedByURL"in r?r.specifiedByURL:void 0},fields:{type:new fn(new ie(Sp)),args:{includeDeprecated:{type:An,defaultValue:!1}},resolve(r,{includeDeprecated:n}){if(He(r)||je(r)){const t=Object.values(r.getFields());return n?t:t.filter(o=>o.deprecationReason==null)}}},interfaces:{type:new fn(new ie(Xn)),resolve(r){if(He(r)||je(r))return r.getInterfaces()}},possibleTypes:{type:new fn(new ie(Xn)),resolve(r,n,t,{schema:o}){if(fr(r))return o.getPossibleTypes(r)}},enumValues:{type:new fn(new ie(wp)),args:{includeDeprecated:{type:An,defaultValue:!1}},resolve(r,{includeDeprecated:n}){if(et(r)){const t=r.getValues();return n?t:t.filter(o=>o.deprecationReason==null)}}},inputFields:{type:new fn(new ie(zs)),args:{includeDeprecated:{type:An,defaultValue:!1}},resolve(r,{includeDeprecated:n}){if(vn(r)){const t=Object.values(r.getFields());return n?t:t.filter(o=>o.deprecationReason==null)}}},ofType:{type:Xn,resolve:r=>"ofType"in r?r.ofType:void 0},isOneOf:{type:An,resolve:r=>{if(vn(r))return r.isOneOf}}})}),Sp=new pt({name:"__Field",description:"Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",fields:()=>({name:{type:new ie(qe),resolve:r=>r.name},description:{type:qe,resolve:r=>r.description},args:{type:new ie(new fn(new ie(zs))),args:{includeDeprecated:{type:An,defaultValue:!1}},resolve(r,{includeDeprecated:n}){return n?r.args:r.args.filter(t=>t.deprecationReason==null)}},type:{type:new ie(Xn),resolve:r=>r.type},isDeprecated:{type:new ie(An),resolve:r=>r.deprecationReason!=null},deprecationReason:{type:qe,resolve:r=>r.deprecationReason}})}),zs=new pt({name:"__InputValue",description:"Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",fields:()=>({name:{type:new ie(qe),resolve:r=>r.name},description:{type:qe,resolve:r=>r.description},type:{type:new ie(Xn),resolve:r=>r.type},defaultValue:{type:qe,description:"A GraphQL-formatted string representing the default value for this input value.",resolve(r){const{type:n,defaultValue:t}=r,o=di(t,n);return o?Ke(o):null}},isDeprecated:{type:new ie(An),resolve:r=>r.deprecationReason!=null},deprecationReason:{type:qe,resolve:r=>r.deprecationReason}})}),wp=new pt({name:"__EnumValue",description:"One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",fields:()=>({name:{type:new ie(qe),resolve:r=>r.name},description:{type:qe,resolve:r=>r.description},isDeprecated:{type:new ie(An),resolve:r=>r.deprecationReason!=null},deprecationReason:{type:qe,resolve:r=>r.deprecationReason}})});var Ie;(function(r){r.SCALAR="SCALAR",r.OBJECT="OBJECT",r.INTERFACE="INTERFACE",r.UNION="UNION",r.ENUM="ENUM",r.INPUT_OBJECT="INPUT_OBJECT",r.LIST="LIST",r.NON_NULL="NON_NULL"})(Ie||(Ie={}));const Np=new $r({name:"__TypeKind",description:"An enum describing what kind of type a given `__Type` is.",values:{SCALAR:{value:Ie.SCALAR,description:"Indicates this type is a scalar."},OBJECT:{value:Ie.OBJECT,description:"Indicates this type is an object. `fields` and `interfaces` are valid fields."},INTERFACE:{value:Ie.INTERFACE,description:"Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."},UNION:{value:Ie.UNION,description:"Indicates this type is a union. `possibleTypes` is a valid field."},ENUM:{value:Ie.ENUM,description:"Indicates this type is an enum. `enumValues` is a valid field."},INPUT_OBJECT:{value:Ie.INPUT_OBJECT,description:"Indicates this type is an input object. `inputFields` is a valid field."},LIST:{value:Ie.LIST,description:"Indicates this type is a list. `ofType` is a valid field."},NON_NULL:{value:Ie.NON_NULL,description:"Indicates this type is a non-null. `ofType` is a valid field."}}});new ie(nu);new ie(qe);new ie(qe);const Qs=Object.freeze([nu,Ip,_p,Xn,Sp,zs,wp,Np]);function HT(r){return Qs.some(({name:n})=>r.name===n)}class Ap{constructor(n){var t,o;this.__validationErrors=n.assumeValid===!0?[]:void 0,Ct(n)||fe(!1,"Must provide configuration object."),!n.types||Array.isArray(n.types)||fe(!1,`"types" must be Array if provided but got: ${M(n.types)}.`),!n.directives||Array.isArray(n.directives)||fe(!1,`"directives" must be Array if provided but got: ${M(n.directives)}.`),this.description=n.description,this.extensions=qn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._queryType=n.query,this._mutationType=n.mutation,this._subscriptionType=n.subscription,this._directives=(o=n.directives)!==null&&o!==void 0?o:Ur;const s=new Set(n.types);if(n.types!=null)for(const a of n.types)s.delete(a),Kn(a,s);this._queryType!=null&&Kn(this._queryType,s),this._mutationType!=null&&Kn(this._mutationType,s),this._subscriptionType!=null&&Kn(this._subscriptionType,s);for(const a of this._directives)if(jT(a))for(const l of a.args)Kn(l.type,s);Kn(nu,s),this._typeMap=Object.create(null),this._subTypeMap=Object.create(null),this._implementationsMap=Object.create(null);for(const a of s){if(a==null)continue;const l=a.name;if(l||fe(!1,"One of the provided types for building the Schema is missing a name."),this._typeMap[l]!==void 0)throw new Error(`Schema must contain uniquely named types but contains multiple types named "${l}".`);if(this._typeMap[l]=a,je(a)){for(const f of a.getInterfaces())if(je(f)){let p=this._implementationsMap[f.name];p===void 0&&(p=this._implementationsMap[f.name]={objects:[],interfaces:[]}),p.interfaces.push(a)}}else if(He(a)){for(const f of a.getInterfaces())if(je(f)){let p=this._implementationsMap[f.name];p===void 0&&(p=this._implementationsMap[f.name]={objects:[],interfaces:[]}),p.objects.push(a)}}}}get[Symbol.toStringTag](){return"GraphQLSchema"}getQueryType(){return this._queryType}getMutationType(){return this._mutationType}getSubscriptionType(){return this._subscriptionType}getRootType(n){switch(n){case Mn.QUERY:return this.getQueryType();case Mn.MUTATION:return this.getMutationType();case Mn.SUBSCRIPTION:return this.getSubscriptionType()}}getTypeMap(){return this._typeMap}getType(n){return this.getTypeMap()[n]}getPossibleTypes(n){return Un(n)?n.getTypes():this.getImplementations(n).objects}getImplementations(n){const t=this._implementationsMap[n.name];return t??{objects:[],interfaces:[]}}isSubType(n,t){let o=this._subTypeMap[n.name];if(o===void 0){if(o=Object.create(null),Un(n))for(const s of n.getTypes())o[s.name]=!0;else{const s=this.getImplementations(n);for(const a of s.objects)o[a.name]=!0;for(const a of s.interfaces)o[a.name]=!0}this._subTypeMap[n.name]=o}return o[t.name]!==void 0}getDirectives(){return this._directives}getDirective(n){return this.getDirectives().find(t=>t.name===n)}toConfig(){return{description:this.description,query:this.getQueryType(),mutation:this.getMutationType(),subscription:this.getSubscriptionType(),types:Object.values(this.getTypeMap()),directives:this.getDirectives(),extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,assumeValid:this.__validationErrors!==void 0}}}function Kn(r,n){const t=gr(r);if(!n.has(t)){if(n.add(t),Un(t))for(const o of t.getTypes())Kn(o,n);else if(He(t)||je(t)){for(const o of t.getInterfaces())Kn(o,n);for(const o of Object.values(t.getFields())){Kn(o.type,n);for(const s of o.args)Kn(s.type,n)}}else if(vn(t))for(const o of Object.values(t.getFields()))Kn(o.type,n)}return n}function ht(r,n){switch(n.kind){case b.LIST_TYPE:{const t=ht(r,n.type);return t&&new fn(t)}case b.NON_NULL_TYPE:{const t=ht(r,n.type);return t&&new ie(t)}case b.NAMED_TYPE:return r.getType(n.name.value)}}function WT(r){return r.kind===b.OPERATION_DEFINITION||r.kind===b.FRAGMENT_DEFINITION}function YT(r){return r.kind===b.SCHEMA_DEFINITION||xi(r)||r.kind===b.DIRECTIVE_DEFINITION}function xi(r){return r.kind===b.SCALAR_TYPE_DEFINITION||r.kind===b.OBJECT_TYPE_DEFINITION||r.kind===b.INTERFACE_TYPE_DEFINITION||r.kind===b.UNION_TYPE_DEFINITION||r.kind===b.ENUM_TYPE_DEFINITION||r.kind===b.INPUT_OBJECT_TYPE_DEFINITION}function zT(r){return r.kind===b.SCHEMA_EXTENSION||tu(r)}function tu(r){return r.kind===b.SCALAR_TYPE_EXTENSION||r.kind===b.OBJECT_TYPE_EXTENSION||r.kind===b.INTERFACE_TYPE_EXTENSION||r.kind===b.UNION_TYPE_EXTENSION||r.kind===b.ENUM_TYPE_EXTENSION||r.kind===b.INPUT_OBJECT_TYPE_EXTENSION}function QT(r){return{Document(n){for(const t of n.definitions)if(!WT(t)){const o=t.kind===b.SCHEMA_DEFINITION||t.kind===b.SCHEMA_EXTENSION?"schema":'"'+t.name.value+'"';r.reportError(new P(`The ${o} definition is not executable.`,{nodes:t}))}return!1}}}function KT(r){return{Field(n){const t=r.getParentType();if(t&&!r.getFieldDef()){const s=r.getSchema(),a=n.name.value;let l=Kt("to use an inline fragment on",JT(s,t,a));l===""&&(l=Kt(XT(t,a))),r.reportError(new P(`Cannot query field "${a}" on type "${t.name}".`+l,{nodes:n}))}}}}function JT(r,n,t){if(!fr(n))return[];const o=new Set,s=Object.create(null);for(const l of r.getPossibleTypes(n))if(l.getFields()[t]){o.add(l),s[l.name]=1;for(const f of l.getInterfaces()){var a;f.getFields()[t]&&(o.add(f),s[f.name]=((a=s[f.name])!==null&&a!==void 0?a:0)+1)}}return[...o].sort((l,f)=>{const p=s[f.name]-s[l.name];return p!==0?p:je(l)&&r.isSubType(l,f)?-1:je(f)&&r.isSubType(f,l)?1:Ja(l.name,f.name)}).map(l=>l.name)}function XT(r,n){if(He(r)||je(r)){const t=Object.keys(r.getFields());return vr(n,t)}return[]}function ZT(r){return{InlineFragment(n){const t=n.typeCondition;if(t){const o=ht(r.getSchema(),t);if(o&&!Ii(o)){const s=Ke(t);r.reportError(new P(`Fragment cannot condition on non composite type "${s}".`,{nodes:t}))}}},FragmentDefinition(n){const t=ht(r.getSchema(),n.typeCondition);if(t&&!Ii(t)){const o=Ke(n.typeCondition);r.reportError(new P(`Fragment "${n.name.value}" cannot condition on non composite type "${o}".`,{nodes:n.typeCondition}))}}}}function eI(r){return{...xp(r),Argument(n){const t=r.getArgument(),o=r.getFieldDef(),s=r.getParentType();if(!t&&o&&s){const a=n.name.value,l=o.args.map(p=>p.name),f=vr(a,l);r.reportError(new P(`Unknown argument "${a}" on field "${s.name}.${o.name}".`+Kt(f),{nodes:n}))}}}}function xp(r){const n=Object.create(null),t=r.getSchema(),o=t?t.getDirectives():Ur;for(const l of o)n[l.name]=l.args.map(f=>f.name);const s=r.getDocument().definitions;for(const l of s)if(l.kind===b.DIRECTIVE_DEFINITION){var a;const f=(a=l.arguments)!==null&&a!==void 0?a:[];n[l.name.value]=f.map(p=>p.name.value)}return{Directive(l){const f=l.name.value,p=n[f];if(l.arguments&&p)for(const m of l.arguments){const D=m.name.value;if(!p.includes(D)){const y=vr(D,p);r.reportError(new P(`Unknown argument "${D}" on directive "@${f}".`+Kt(y),{nodes:m}))}}return!1}}}function Fp(r){const n=Object.create(null),t=r.getSchema(),o=t?t.getDirectives():Ur;for(const a of o)n[a.name]=a.locations;const s=r.getDocument().definitions;for(const a of s)a.kind===b.DIRECTIVE_DEFINITION&&(n[a.name.value]=a.locations.map(l=>l.value));return{Directive(a,l,f,p,m){const D=a.name.value,y=n[D];if(!y){r.reportError(new P(`Unknown directive "@${D}".`,{nodes:a}));return}const A=nI(m);A&&!y.includes(A)&&r.reportError(new P(`Directive "@${D}" may not be used on ${A}.`,{nodes:a}))}}}function nI(r){const n=r[r.length-1];switch("kind"in n||Zn(!1),n.kind){case b.OPERATION_DEFINITION:return tI(n.operation);case b.FIELD:return W.FIELD;case b.FRAGMENT_SPREAD:return W.FRAGMENT_SPREAD;case b.INLINE_FRAGMENT:return W.INLINE_FRAGMENT;case b.FRAGMENT_DEFINITION:return W.FRAGMENT_DEFINITION;case b.VARIABLE_DEFINITION:return W.VARIABLE_DEFINITION;case b.SCHEMA_DEFINITION:case b.SCHEMA_EXTENSION:return W.SCHEMA;case b.SCALAR_TYPE_DEFINITION:case b.SCALAR_TYPE_EXTENSION:return W.SCALAR;case b.OBJECT_TYPE_DEFINITION:case b.OBJECT_TYPE_EXTENSION:return W.OBJECT;case b.FIELD_DEFINITION:return W.FIELD_DEFINITION;case b.INTERFACE_TYPE_DEFINITION:case b.INTERFACE_TYPE_EXTENSION:return W.INTERFACE;case b.UNION_TYPE_DEFINITION:case b.UNION_TYPE_EXTENSION:return W.UNION;case b.ENUM_TYPE_DEFINITION:case b.ENUM_TYPE_EXTENSION:return W.ENUM;case b.ENUM_VALUE_DEFINITION:return W.ENUM_VALUE;case b.INPUT_OBJECT_TYPE_DEFINITION:case b.INPUT_OBJECT_TYPE_EXTENSION:return W.INPUT_OBJECT;case b.INPUT_VALUE_DEFINITION:{const t=r[r.length-3];return"kind"in t||Zn(!1),t.kind===b.INPUT_OBJECT_TYPE_DEFINITION?W.INPUT_FIELD_DEFINITION:W.ARGUMENT_DEFINITION}default:Zn(!1,"Unexpected kind: "+M(n.kind))}}function tI(r){switch(r){case Mn.QUERY:return W.QUERY;case Mn.MUTATION:return W.MUTATION;case Mn.SUBSCRIPTION:return W.SUBSCRIPTION}}function rI(r){return{FragmentSpread(n){const t=n.name.value;r.getFragment(t)||r.reportError(new P(`Unknown fragment "${t}".`,{nodes:n.name}))}}}function Cp(r){const n=r.getSchema(),t=n?n.getTypeMap():Object.create(null),o=Object.create(null);for(const a of r.getDocument().definitions)xi(a)&&(o[a.name.value]=!0);const s=[...Object.keys(t),...Object.keys(o)];return{NamedType(a,l,f,p,m){const D=a.name.value;if(!t[D]&&!o[D]){var y;const A=(y=m[2])!==null&&y!==void 0?y:f,S=A!=null&&iI(A);if(S&&yf.includes(D))return;const R=vr(D,S?yf.concat(s):s);r.reportError(new P(`Unknown type "${D}".`+Kt(R),{nodes:a}))}}}}const yf=[...Ys,...Qs].map(r=>r.name);function iI(r){return"kind"in r&&(YT(r)||zT(r))}function sI(r){let n=0;return{Document(t){n=t.definitions.filter(o=>o.kind===b.OPERATION_DEFINITION).length},OperationDefinition(t){!t.name&&n>1&&r.reportError(new P("This anonymous operation must be the only defined operation.",{nodes:t}))}}}function oI(r){var n,t,o;const s=r.getSchema(),a=(n=(t=(o=s==null?void 0:s.astNode)!==null&&o!==void 0?o:s==null?void 0:s.getQueryType())!==null&&t!==void 0?t:s==null?void 0:s.getMutationType())!==null&&n!==void 0?n:s==null?void 0:s.getSubscriptionType();let l=0;return{SchemaDefinition(f){if(a){r.reportError(new P("Cannot define a new schema within a schema extension.",{nodes:f}));return}l>0&&r.reportError(new P("Must provide only one schema definition.",{nodes:f})),++l}}}const aI=3;function uI(r){function n(t,o=Object.create(null),s=0){if(t.kind===b.FRAGMENT_SPREAD){const a=t.name.value;if(o[a]===!0)return!1;const l=r.getFragment(a);if(!l)return!1;try{return o[a]=!0,n(l,o,s)}finally{o[a]=void 0}}if(t.kind===b.FIELD&&(t.name.value==="fields"||t.name.value==="interfaces"||t.name.value==="possibleTypes"||t.name.value==="inputFields")&&(s++,s>=aI))return!0;if("selectionSet"in t&&t.selectionSet){for(const a of t.selectionSet.selections)if(n(a,o,s))return!0}return!1}return{Field(t){if((t.name.value==="__schema"||t.name.value==="__type")&&n(t))return r.reportError(new P("Maximum introspection depth exceeded",{nodes:[t]})),!1}}}function lI(r){const n=Object.create(null),t=[],o=Object.create(null);return{OperationDefinition:()=>!1,FragmentDefinition(a){return s(a),!1}};function s(a){if(n[a.name.value])return;const l=a.name.value;n[l]=!0;const f=r.getFragmentSpreads(a.selectionSet);if(f.length!==0){o[l]=t.length;for(const p of f){const m=p.name.value,D=o[m];if(t.push(p),D===void 0){const y=r.getFragment(m);y&&s(y)}else{const y=t.slice(D),A=y.slice(0,-1).map(S=>'"'+S.name.value+'"').join(", ");r.reportError(new P(`Cannot spread fragment "${m}" within itself`+(A!==""?` via ${A}.`:"."),{nodes:y}))}t.pop()}o[l]=void 0}}}function cI(r){let n=Object.create(null);return{OperationDefinition:{enter(){n=Object.create(null)},leave(t){const o=r.getRecursiveVariableUsages(t);for(const{node:s}of o){const a=s.name.value;n[a]!==!0&&r.reportError(new P(t.name?`Variable "$${a}" is not defined by operation "${t.name.value}".`:`Variable "$${a}" is not defined.`,{nodes:[s,t]}))}}},VariableDefinition(t){n[t.variable.name.value]=!0}}}function fI(r){const n=[],t=[];return{OperationDefinition(o){return n.push(o),!1},FragmentDefinition(o){return t.push(o),!1},Document:{leave(){const o=Object.create(null);for(const s of n)for(const a of r.getRecursivelyReferencedFragments(s))o[a.name.value]=!0;for(const s of t){const a=s.name.value;o[a]!==!0&&r.reportError(new P(`Fragment "${a}" is never used.`,{nodes:s}))}}}}}function pI(r){let n=[];return{OperationDefinition:{enter(){n=[]},leave(t){const o=Object.create(null),s=r.getRecursiveVariableUsages(t);for(const{node:a}of s)o[a.name.value]=!0;for(const a of n){const l=a.variable.name.value;o[l]!==!0&&r.reportError(new P(t.name?`Variable "$${l}" is never used in operation "${t.name.value}".`:`Variable "$${l}" is never used.`,{nodes:a}))}}},VariableDefinition(t){n.push(t)}}}function ru(r){switch(r.kind){case b.OBJECT:return{...r,fields:hI(r.fields)};case b.LIST:return{...r,values:r.values.map(ru)};case b.INT:case b.FLOAT:case b.STRING:case b.BOOLEAN:case b.NULL:case b.ENUM:case b.VARIABLE:return r}}function hI(r){return r.map(n=>({...n,value:ru(n.value)})).sort((n,t)=>Ja(n.name.value,t.name.value))}function Rp(r){return Array.isArray(r)?r.map(([n,t])=>`subfields "${n}" conflict because `+Rp(t)).join(" and "):r}function dI(r){const n=new EI,t=new Map;return{SelectionSet(o){const s=gI(r,t,n,r.getParentType(),o);for(const[[a,l],f,p]of s){const m=Rp(l);r.reportError(new P(`Fields "${a}" conflict because ${m}. Use different aliases on the fields to fetch both if this was intentional.`,{nodes:f.concat(p)}))}}}}function gI(r,n,t,o,s){const a=[],[l,f]=Ms(r,n,o,s);if(DI(r,a,n,t,l),f.length!==0)for(let p=0;p<f.length;p++){Bs(r,a,n,t,!1,l,f[p]);for(let m=p+1;m<f.length;m++)$s(r,a,n,t,!1,f[p],f[m])}return a}function Bs(r,n,t,o,s,a,l){const f=r.getFragment(l);if(!f)return;const[p,m]=ka(r,t,f);if(a!==p){iu(r,n,t,o,s,a,p);for(const D of m)o.has(D,l,s)||(o.add(D,l,s),Bs(r,n,t,o,s,a,D))}}function $s(r,n,t,o,s,a,l){if(a===l||o.has(a,l,s))return;o.add(a,l,s);const f=r.getFragment(a),p=r.getFragment(l);if(!f||!p)return;const[m,D]=ka(r,t,f),[y,A]=ka(r,t,p);iu(r,n,t,o,s,m,y);for(const S of A)$s(r,n,t,o,s,a,S);for(const S of D)$s(r,n,t,o,s,S,l)}function mI(r,n,t,o,s,a,l,f){const p=[],[m,D]=Ms(r,n,s,a),[y,A]=Ms(r,n,l,f);iu(r,p,n,t,o,m,y);for(const S of A)Bs(r,p,n,t,o,m,S);for(const S of D)Bs(r,p,n,t,o,y,S);for(const S of D)for(const R of A)$s(r,p,n,t,o,S,R);return p}function DI(r,n,t,o,s){for(const[a,l]of Object.entries(s))if(l.length>1)for(let f=0;f<l.length;f++)for(let p=f+1;p<l.length;p++){const m=Op(r,t,o,!1,a,l[f],l[p]);m&&n.push(m)}}function iu(r,n,t,o,s,a,l){for(const[f,p]of Object.entries(a)){const m=l[f];if(m)for(const D of p)for(const y of m){const A=Op(r,t,o,s,f,D,y);A&&n.push(A)}}}function Op(r,n,t,o,s,a,l){const[f,p,m]=a,[D,y,A]=l,S=o||f!==D&&He(f)&&He(D);if(!S){const we=p.name.value,me=y.name.value;if(we!==me)return[[s,`"${we}" and "${me}" are different fields`],[p],[y]];if(!vI(p,y))return[[s,"they have differing arguments"],[p],[y]]}const R=m==null?void 0:m.type,L=A==null?void 0:A.type;if(R&&L&&Oa(R,L))return[[s,`they return conflicting types "${M(R)}" and "${M(L)}"`],[p],[y]];const H=p.selectionSet,ce=y.selectionSet;if(H&&ce){const we=mI(r,n,t,S,gr(R),H,gr(L),ce);return yI(we,s,p,y)}}function vI(r,n){const t=r.arguments,o=n.arguments;if(t===void 0||t.length===0)return o===void 0||o.length===0;if(o===void 0||o.length===0||t.length!==o.length)return!1;const s=new Map(o.map(({name:a,value:l})=>[a.value,l]));return t.every(a=>{const l=a.value,f=s.get(a.name.value);return f===void 0?!1:Ef(l)===Ef(f)})}function Ef(r){return Ke(ru(r))}function Oa(r,n){return yn(r)?yn(n)?Oa(r.ofType,n.ofType):!0:yn(n)?!0:Se(r)?Se(n)?Oa(r.ofType,n.ofType):!0:Se(n)?!0:Br(r)||Br(n)?r!==n:!1}function Ms(r,n,t,o){const s=n.get(o);if(s)return s;const a=Object.create(null),l=Object.create(null);kp(r,t,o,a,l);const f=[a,Object.keys(l)];return n.set(o,f),f}function ka(r,n,t){const o=n.get(t.selectionSet);if(o)return o;const s=ht(r.getSchema(),t.typeCondition);return Ms(r,n,s,t.selectionSet)}function kp(r,n,t,o,s){for(const a of t.selections)switch(a.kind){case b.FIELD:{const l=a.name.value;let f;(He(n)||je(n))&&(f=n.getFields()[l]);const p=a.alias?a.alias.value:l;o[p]||(o[p]=[]),o[p].push([n,a,f]);break}case b.FRAGMENT_SPREAD:s[a.name.value]=!0;break;case b.INLINE_FRAGMENT:{const l=a.typeCondition,f=l?ht(r.getSchema(),l):n;kp(r,f,a.selectionSet,o,s);break}}}function yI(r,n,t,o){if(r.length>0)return[[n,r.map(([s])=>s)],[t,...r.map(([,s])=>s).flat()],[o,...r.map(([,,s])=>s).flat()]]}class EI{constructor(){this._data=new Map}has(n,t,o){var s;const[a,l]=n<t?[n,t]:[t,n],f=(s=this._data.get(a))===null||s===void 0?void 0:s.get(l);return f===void 0?!1:o?!0:o===f}add(n,t,o){const[s,a]=n<t?[n,t]:[t,n],l=this._data.get(s);l===void 0?this._data.set(s,new Map([[a,o]])):l.set(a,o)}}function bI(r){return{InlineFragment(n){const t=r.getType(),o=r.getParentType();if(Ii(t)&&Ii(o)&&!Df(r.getSchema(),t,o)){const s=M(o),a=M(t);r.reportError(new P(`Fragment cannot be spread here as objects of type "${s}" can never be of type "${a}".`,{nodes:n}))}},FragmentSpread(n){const t=n.name.value,o=TI(r,t),s=r.getParentType();if(o&&s&&!Df(r.getSchema(),o,s)){const a=M(s),l=M(o);r.reportError(new P(`Fragment "${t}" cannot be spread here as objects of type "${a}" can never be of type "${l}".`,{nodes:n}))}}}}function TI(r,n){const t=r.getFragment(n);if(t){const o=ht(r.getSchema(),t.typeCondition);if(Ii(o))return o}}function II(r){const n=r.getSchema(),t=Object.create(null);for(const s of r.getDocument().definitions)xi(s)&&(t[s.name.value]=s);return{ScalarTypeExtension:o,ObjectTypeExtension:o,InterfaceTypeExtension:o,UnionTypeExtension:o,EnumTypeExtension:o,InputObjectTypeExtension:o};function o(s){const a=s.name.value,l=t[a],f=n==null?void 0:n.getType(a);let p;if(l?p=_I[l.kind]:f&&(p=SI(f)),p){if(p!==s.kind){const m=wI(s.kind);r.reportError(new P(`Cannot extend non-${m} type "${a}".`,{nodes:l?[l,s]:s}))}}else{const m=Object.keys({...t,...n==null?void 0:n.getTypeMap()}),D=vr(a,m);r.reportError(new P(`Cannot extend type "${a}" because it is not defined.`+Kt(D),{nodes:s.name}))}}}const _I={[b.SCALAR_TYPE_DEFINITION]:b.SCALAR_TYPE_EXTENSION,[b.OBJECT_TYPE_DEFINITION]:b.OBJECT_TYPE_EXTENSION,[b.INTERFACE_TYPE_DEFINITION]:b.INTERFACE_TYPE_EXTENSION,[b.UNION_TYPE_DEFINITION]:b.UNION_TYPE_EXTENSION,[b.ENUM_TYPE_DEFINITION]:b.ENUM_TYPE_EXTENSION,[b.INPUT_OBJECT_TYPE_DEFINITION]:b.INPUT_OBJECT_TYPE_EXTENSION};function SI(r){if(Jt(r))return b.SCALAR_TYPE_EXTENSION;if(He(r))return b.OBJECT_TYPE_EXTENSION;if(je(r))return b.INTERFACE_TYPE_EXTENSION;if(Un(r))return b.UNION_TYPE_EXTENSION;if(et(r))return b.ENUM_TYPE_EXTENSION;if(vn(r))return b.INPUT_OBJECT_TYPE_EXTENSION;Zn(!1,"Unexpected type: "+M(r))}function wI(r){switch(r){case b.SCALAR_TYPE_EXTENSION:return"scalar";case b.OBJECT_TYPE_EXTENSION:return"object";case b.INTERFACE_TYPE_EXTENSION:return"interface";case b.UNION_TYPE_EXTENSION:return"union";case b.ENUM_TYPE_EXTENSION:return"enum";case b.INPUT_OBJECT_TYPE_EXTENSION:return"input object";default:Zn(!1,"Unexpected kind: "+M(r))}}function NI(r){return{...Pp(r),Field:{leave(n){var t;const o=r.getFieldDef();if(!o)return!1;const s=new Set((t=n.arguments)===null||t===void 0?void 0:t.map(a=>a.name.value));for(const a of o.args)if(!s.has(a.name)&&mp(a)){const l=M(a.type);r.reportError(new P(`Field "${o.name}" argument "${a.name}" of type "${l}" is required, but it was not provided.`,{nodes:n}))}}}}}function Pp(r){var n;const t=Object.create(null),o=r.getSchema(),s=(n=o==null?void 0:o.getDirectives())!==null&&n!==void 0?n:Ur;for(const f of s)t[f.name]=dr(f.args.filter(mp),p=>p.name);const a=r.getDocument().definitions;for(const f of a)if(f.kind===b.DIRECTIVE_DEFINITION){var l;const p=(l=f.arguments)!==null&&l!==void 0?l:[];t[f.name.value]=dr(p.filter(AI),m=>m.name.value)}return{Directive:{leave(f){const p=f.name.value,m=t[p];if(m){var D;const y=(D=f.arguments)!==null&&D!==void 0?D:[],A=new Set(y.map(S=>S.name.value));for(const[S,R]of Object.entries(m))if(!A.has(S)){const L=Xa(R.type)?M(R.type):Ke(R.type);r.reportError(new P(`Directive "@${p}" argument "${S}" of type "${L}" is required, but it was not provided.`,{nodes:f}))}}}}}}function AI(r){return r.type.kind===b.NON_NULL_TYPE&&r.defaultValue==null}function xI(r){return{Field(n){const t=r.getType(),o=n.selectionSet;if(t){if(Br(gr(t))){if(o){const s=n.name.value,a=M(t);r.reportError(new P(`Field "${s}" must not have a selection since type "${a}" has no subfields.`,{nodes:o}))}}else if(!o){const s=n.name.value,a=M(t);r.reportError(new P(`Field "${s}" of type "${a}" must have a selection of subfields. Did you mean "${s} { ... }"?`,{nodes:n}))}}}}}function Wt(r,n,t){if(r){if(r.kind===b.VARIABLE){const o=r.name.value;if(t==null||t[o]===void 0)return;const s=t[o];return s===null&&Se(n)?void 0:s}if(Se(n))return r.kind===b.NULL?void 0:Wt(r,n.ofType,t);if(r.kind===b.NULL)return null;if(yn(n)){const o=n.ofType;if(r.kind===b.LIST){const a=[];for(const l of r.values)if(bf(l,t)){if(Se(o))return;a.push(null)}else{const f=Wt(l,o,t);if(f===void 0)return;a.push(f)}return a}const s=Wt(r,o,t);return s===void 0?void 0:[s]}if(vn(n)){if(r.kind!==b.OBJECT)return;const o=Object.create(null),s=dr(r.fields,a=>a.name.value);for(const a of Object.values(n.getFields())){const l=s[a.name];if(!l||bf(l.value,t)){if(a.defaultValue!==void 0)o[a.name]=a.defaultValue;else if(Se(a.type))return;continue}const f=Wt(l.value,a.type,t);if(f===void 0)return;o[a.name]=f}if(n.isOneOf){const a=Object.keys(o);if(a.length!==1||o[a[0]]===null)return}return o}if(Br(n)){let o;try{o=n.parseLiteral(r,t)}catch{return}return o===void 0?void 0:o}Zn(!1,"Unexpected input type: "+M(n))}}function bf(r,n){return r.kind===b.VARIABLE&&(n==null||n[r.name.value]===void 0)}function FI(r,n,t){var o;const s={},a=(o=n.arguments)!==null&&o!==void 0?o:[],l=dr(a,f=>f.name.value);for(const f of r.args){const p=f.name,m=f.type,D=l[p];if(!D){if(f.defaultValue!==void 0)s[p]=f.defaultValue;else if(Se(m))throw new P(`Argument "${p}" of required type "${M(m)}" was not provided.`,{nodes:n});continue}const y=D.value;let A=y.kind===b.NULL;if(y.kind===b.VARIABLE){const R=y.name.value;if(t==null||!CI(t,R)){if(f.defaultValue!==void 0)s[p]=f.defaultValue;else if(Se(m))throw new P(`Argument "${p}" of required type "${M(m)}" was provided the variable "$${R}" which was not provided a runtime value.`,{nodes:y});continue}A=t[R]==null}if(A&&Se(m))throw new P(`Argument "${p}" of non-null type "${M(m)}" must not be null.`,{nodes:y});const S=Wt(y,m,t);if(S===void 0)throw new P(`Argument "${p}" has invalid value ${Ke(y)}.`,{nodes:y});s[p]=S}return s}function _i(r,n,t){var o;const s=(o=n.directives)===null||o===void 0?void 0:o.find(a=>a.name.value===r.name);if(s)return FI(r,s,t)}function CI(r,n){return Object.prototype.hasOwnProperty.call(r,n)}function RI(r,n,t,o,s){const a=new Map;return Pa(r,n,t,o,s,a,new Set),a}function Pa(r,n,t,o,s,a,l){for(const f of s.selections)switch(f.kind){case b.FIELD:{if(!_a(t,f))continue;const p=OI(f),m=a.get(p);m!==void 0?m.push(f):a.set(p,[f]);break}case b.INLINE_FRAGMENT:{if(!_a(t,f)||!Tf(r,f,o))continue;Pa(r,n,t,o,f.selectionSet,a,l);break}case b.FRAGMENT_SPREAD:{const p=f.name.value;if(l.has(p)||!_a(t,f))continue;l.add(p);const m=n[p];if(!m||!Tf(r,m,o))continue;Pa(r,n,t,o,m.selectionSet,a,l);break}}}function _a(r,n){const t=_i(yp,n,r);if((t==null?void 0:t.if)===!0)return!1;const o=_i(vp,n,r);return(o==null?void 0:o.if)!==!1}function Tf(r,n,t){const o=n.typeCondition;if(!o)return!0;const s=ht(r,o);return s===t?!0:fr(s)?r.isSubType(s,t):!1}function OI(r){return r.alias?r.alias.value:r.name.value}function kI(r){return{OperationDefinition(n){if(n.operation==="subscription"){const t=r.getSchema(),o=t.getSubscriptionType();if(o){const s=n.name?n.name.value:null,a=Object.create(null),l=r.getDocument(),f=Object.create(null);for(const m of l.definitions)m.kind===b.FRAGMENT_DEFINITION&&(f[m.name.value]=m);const p=RI(t,f,a,o,n.selectionSet);if(p.size>1){const y=[...p.values()].slice(1).flat();r.reportError(new P(s!=null?`Subscription "${s}" must select only one top level field.`:"Anonymous Subscription must select only one top level field.",{nodes:y}))}for(const m of p.values())m[0].name.value.startsWith("__")&&r.reportError(new P(s!=null?`Subscription "${s}" must not select an introspection top level field.`:"Anonymous Subscription must not select an introspection top level field.",{nodes:m}))}}}}}function su(r,n){const t=new Map;for(const o of r){const s=n(o),a=t.get(s);a===void 0?t.set(s,[o]):a.push(o)}return t}function PI(r){return{DirectiveDefinition(o){var s;const a=(s=o.arguments)!==null&&s!==void 0?s:[];return t(`@${o.name.value}`,a)},InterfaceTypeDefinition:n,InterfaceTypeExtension:n,ObjectTypeDefinition:n,ObjectTypeExtension:n};function n(o){var s;const a=o.name.value,l=(s=o.fields)!==null&&s!==void 0?s:[];for(const p of l){var f;const m=p.name.value,D=(f=p.arguments)!==null&&f!==void 0?f:[];t(`${a}.${m}`,D)}return!1}function t(o,s){const a=su(s,l=>l.name.value);for(const[l,f]of a)f.length>1&&r.reportError(new P(`Argument "${o}(${l}:)" can only be defined once.`,{nodes:f.map(p=>p.name)}));return!1}}function Lp(r){return{Field:n,Directive:n};function n(t){var o;const s=(o=t.arguments)!==null&&o!==void 0?o:[],a=su(s,l=>l.name.value);for(const[l,f]of a)f.length>1&&r.reportError(new P(`There can be only one argument named "${l}".`,{nodes:f.map(p=>p.name)}))}}function LI(r){const n=Object.create(null),t=r.getSchema();return{DirectiveDefinition(o){const s=o.name.value;if(t!=null&&t.getDirective(s)){r.reportError(new P(`Directive "@${s}" already exists in the schema. It cannot be redefined.`,{nodes:o.name}));return}return n[s]?r.reportError(new P(`There can be only one directive named "@${s}".`,{nodes:[n[s],o.name]})):n[s]=o.name,!1}}}function Bp(r){const n=Object.create(null),t=r.getSchema(),o=t?t.getDirectives():Ur;for(const f of o)n[f.name]=!f.isRepeatable;const s=r.getDocument().definitions;for(const f of s)f.kind===b.DIRECTIVE_DEFINITION&&(n[f.name.value]=!f.repeatable);const a=Object.create(null),l=Object.create(null);return{enter(f){if(!("directives"in f)||!f.directives)return;let p;if(f.kind===b.SCHEMA_DEFINITION||f.kind===b.SCHEMA_EXTENSION)p=a;else if(xi(f)||tu(f)){const m=f.name.value;p=l[m],p===void 0&&(l[m]=p=Object.create(null))}else p=Object.create(null);for(const m of f.directives){const D=m.name.value;n[D]&&(p[D]?r.reportError(new P(`The directive "@${D}" can only be used once at this location.`,{nodes:[p[D],m]})):p[D]=m)}}}}function BI(r){const n=r.getSchema(),t=n?n.getTypeMap():Object.create(null),o=Object.create(null);return{EnumTypeDefinition:s,EnumTypeExtension:s};function s(a){var l;const f=a.name.value;o[f]||(o[f]=Object.create(null));const p=(l=a.values)!==null&&l!==void 0?l:[],m=o[f];for(const D of p){const y=D.name.value,A=t[f];et(A)&&A.getValue(y)?r.reportError(new P(`Enum value "${f}.${y}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:D.name})):m[y]?r.reportError(new P(`Enum value "${f}.${y}" can only be defined once.`,{nodes:[m[y],D.name]})):m[y]=D.name}return!1}}function $I(r){const n=r.getSchema(),t=n?n.getTypeMap():Object.create(null),o=Object.create(null);return{InputObjectTypeDefinition:s,InputObjectTypeExtension:s,InterfaceTypeDefinition:s,InterfaceTypeExtension:s,ObjectTypeDefinition:s,ObjectTypeExtension:s};function s(a){var l;const f=a.name.value;o[f]||(o[f]=Object.create(null));const p=(l=a.fields)!==null&&l!==void 0?l:[],m=o[f];for(const D of p){const y=D.name.value;MI(t[f],y)?r.reportError(new P(`Field "${f}.${y}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:D.name})):m[y]?r.reportError(new P(`Field "${f}.${y}" can only be defined once.`,{nodes:[m[y],D.name]})):m[y]=D.name}return!1}}function MI(r,n){return He(r)||je(r)||vn(r)?r.getFields()[n]!=null:!1}function UI(r){const n=Object.create(null);return{OperationDefinition:()=>!1,FragmentDefinition(t){const o=t.name.value;return n[o]?r.reportError(new P(`There can be only one fragment named "${o}".`,{nodes:[n[o],t.name]})):n[o]=t.name,!1}}}function $p(r){const n=[];let t=Object.create(null);return{ObjectValue:{enter(){n.push(t),t=Object.create(null)},leave(){const o=n.pop();o||Zn(!1),t=o}},ObjectField(o){const s=o.name.value;t[s]?r.reportError(new P(`There can be only one input field named "${s}".`,{nodes:[t[s],o.name]})):t[s]=o.name}}}function qI(r){const n=Object.create(null);return{OperationDefinition(t){const o=t.name;return o&&(n[o.value]?r.reportError(new P(`There can be only one operation named "${o.value}".`,{nodes:[n[o.value],o]})):n[o.value]=o),!1},FragmentDefinition:()=>!1}}function jI(r){const n=r.getSchema(),t=Object.create(null),o=n?{query:n.getQueryType(),mutation:n.getMutationType(),subscription:n.getSubscriptionType()}:{};return{SchemaDefinition:s,SchemaExtension:s};function s(a){var l;const f=(l=a.operationTypes)!==null&&l!==void 0?l:[];for(const p of f){const m=p.operation,D=t[m];o[m]?r.reportError(new P(`Type for ${m} already defined in the schema. It cannot be redefined.`,{nodes:p})):D?r.reportError(new P(`There can be only one ${m} type in schema.`,{nodes:[D,p]})):t[m]=p}return!1}}function GI(r){const n=Object.create(null),t=r.getSchema();return{ScalarTypeDefinition:o,ObjectTypeDefinition:o,InterfaceTypeDefinition:o,UnionTypeDefinition:o,EnumTypeDefinition:o,InputObjectTypeDefinition:o};function o(s){const a=s.name.value;if(t!=null&&t.getType(a)){r.reportError(new P(`Type "${a}" already exists in the schema. It cannot also be defined in this type definition.`,{nodes:s.name}));return}return n[a]?r.reportError(new P(`There can be only one type named "${a}".`,{nodes:[n[a],s.name]})):n[a]=s.name,!1}}function VI(r){return{OperationDefinition(n){var t;const o=(t=n.variableDefinitions)!==null&&t!==void 0?t:[],s=su(o,a=>a.variable.name.value);for(const[a,l]of s)l.length>1&&r.reportError(new P(`There can be only one variable named "$${a}".`,{nodes:l.map(f=>f.variable.name)}))}}}function HI(r){let n={};return{OperationDefinition:{enter(){n={}}},VariableDefinition(t){n[t.variable.name.value]=t},ListValue(t){const o=PT(r.getParentInputType());if(!yn(o))return lr(r,t),!1},ObjectValue(t){const o=gr(r.getInputType());if(!vn(o))return lr(r,t),!1;const s=dr(t.fields,a=>a.name.value);for(const a of Object.values(o.getFields()))if(!s[a.name]&&$T(a)){const f=M(a.type);r.reportError(new P(`Field "${o.name}.${a.name}" of required type "${f}" was not provided.`,{nodes:t}))}o.isOneOf&&WI(r,t,o,s,n)},ObjectField(t){const o=gr(r.getParentInputType());if(!r.getInputType()&&vn(o)){const a=vr(t.name.value,Object.keys(o.getFields()));r.reportError(new P(`Field "${t.name.value}" is not defined by type "${o.name}".`+Kt(a),{nodes:t}))}},NullValue(t){const o=r.getInputType();Se(o)&&r.reportError(new P(`Expected value of type "${M(o)}", found ${Ke(t)}.`,{nodes:t}))},EnumValue:t=>lr(r,t),IntValue:t=>lr(r,t),FloatValue:t=>lr(r,t),StringValue:t=>lr(r,t),BooleanValue:t=>lr(r,t)}}function lr(r,n){const t=r.getInputType();if(!t)return;const o=gr(t);if(!Br(o)){const s=M(t);r.reportError(new P(`Expected value of type "${s}", found ${Ke(n)}.`,{nodes:n}));return}try{if(o.parseLiteral(n,void 0)===void 0){const a=M(t);r.reportError(new P(`Expected value of type "${a}", found ${Ke(n)}.`,{nodes:n}))}}catch(s){const a=M(t);s instanceof P?r.reportError(s):r.reportError(new P(`Expected value of type "${a}", found ${Ke(n)}; `+s.message,{nodes:n,originalError:s}))}}function WI(r,n,t,o,s){var a;const l=Object.keys(o);if(l.length!==1){r.reportError(new P(`OneOf Input Object "${t.name}" must specify exactly one key.`,{nodes:[n]}));return}const p=(a=o[l[0]])===null||a===void 0?void 0:a.value,m=!p||p.kind===b.NULL,D=(p==null?void 0:p.kind)===b.VARIABLE;if(m){r.reportError(new P(`Field "${t.name}.${l[0]}" must be non-null.`,{nodes:[n]}));return}if(D){const y=p.name.value;s[y].type.kind!==b.NON_NULL_TYPE&&r.reportError(new P(`Variable "${y}" must be non-nullable to be used for OneOf Input Object "${t.name}".`,{nodes:[n]}))}}function YI(r){return{VariableDefinition(n){const t=ht(r.getSchema(),n.type);if(t!==void 0&&!Za(t)){const o=n.variable.name.value,s=Ke(n.type);r.reportError(new P(`Variable "$${o}" cannot be non-input type "${s}".`,{nodes:n.type}))}}}}function zI(r){let n=Object.create(null);return{OperationDefinition:{enter(){n=Object.create(null)},leave(t){const o=r.getRecursiveVariableUsages(t);for(const{node:s,type:a,defaultValue:l}of o){const f=s.name.value,p=n[f];if(p&&a){const m=r.getSchema(),D=ht(m,p.type);if(D&&!QI(m,D,p.defaultValue,a,l)){const y=M(D),A=M(a);r.reportError(new P(`Variable "$${f}" of type "${y}" used in position expecting type "${A}".`,{nodes:[p,s]}))}}}}},VariableDefinition(t){n[t.variable.name.value]=t}}}function QI(r,n,t,o,s){if(Se(o)&&!Se(n)){if(!(t!=null&&t.kind!==b.NULL)&&!(s!==void 0))return!1;const f=o.ofType;return vi(r,n,f)}return vi(r,n,o)}const KI=Object.freeze([uI]);Object.freeze([QT,qI,sI,kI,Cp,ZT,YI,xI,KT,UI,rI,fI,bI,lI,VI,cI,pI,Fp,Bp,eI,Lp,HI,NI,zI,dI,$p,...KI]);const JI=Object.freeze([oI,jI,GI,BI,$I,PI,LI,Cp,Fp,Bp,II,xp,Lp,$p,Pp]);class XI{constructor(n,t){this._ast=n,this._fragments=void 0,this._fragmentSpreads=new Map,this._recursivelyReferencedFragments=new Map,this._onError=t}get[Symbol.toStringTag](){return"ASTValidationContext"}reportError(n){this._onError(n)}getDocument(){return this._ast}getFragment(n){let t;if(this._fragments)t=this._fragments;else{t=Object.create(null);for(const o of this.getDocument().definitions)o.kind===b.FRAGMENT_DEFINITION&&(t[o.name.value]=o);this._fragments=t}return t[n]}getFragmentSpreads(n){let t=this._fragmentSpreads.get(n);if(!t){t=[];const o=[n];let s;for(;s=o.pop();)for(const a of s.selections)a.kind===b.FRAGMENT_SPREAD?t.push(a):a.selectionSet&&o.push(a.selectionSet);this._fragmentSpreads.set(n,t)}return t}getRecursivelyReferencedFragments(n){let t=this._recursivelyReferencedFragments.get(n);if(!t){t=[];const o=Object.create(null),s=[n.selectionSet];let a;for(;a=s.pop();)for(const l of this.getFragmentSpreads(a)){const f=l.name.value;if(o[f]!==!0){o[f]=!0;const p=this.getFragment(f);p&&(t.push(p),s.push(p.selectionSet))}}this._recursivelyReferencedFragments.set(n,t)}return t}}class ZI extends XI{constructor(n,t,o){super(n,o),this._schema=t}get[Symbol.toStringTag](){return"SDLValidationContext"}getSchema(){return this._schema}}function e_(r,n,t=JI){const o=[],s=new ZI(r,n,l=>{o.push(l)}),a=t.map(l=>l(s));return sp(r,AT(a)),o}function n_(r){const n=e_(r);if(n.length!==0)throw new Error(n.map(t=>t.message).join(`

`))}function t_(r,n){Ct(r)&&Ct(r.__schema)||fe(!1,`Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${M(r)}.`);const t=r.__schema,o=cr(t.types,O=>O.name,O=>A(O));for(const O of[...Ys,...Qs])o[O.name]&&(o[O.name]=O);const s=t.queryType?D(t.queryType):null,a=t.mutationType?D(t.mutationType):null,l=t.subscriptionType?D(t.subscriptionType):null,f=t.directives?t.directives.map(gt):[];return new Ap({description:t.description,query:s,mutation:a,subscription:l,types:Object.values(o),directives:f,assumeValid:void 0});function p(O){if(O.kind===Ie.LIST){const J=O.ofType;if(!J)throw new Error("Decorated type deeper than introspection query.");return new fn(p(J))}if(O.kind===Ie.NON_NULL){const J=O.ofType;if(!J)throw new Error("Decorated type deeper than introspection query.");const an=p(J);return new ie(kT(an))}return m(O)}function m(O){const J=O.name;if(!J)throw new Error(`Unknown type reference: ${M(O)}.`);const an=o[J];if(!an)throw new Error(`Invalid or incomplete schema, unknown type: ${J}. Ensure that a full introspection query is used in order to build a client schema.`);return an}function D(O){return RT(m(O))}function y(O){return OT(m(O))}function A(O){if(O!=null&&O.name!=null&&O.kind!=null)switch(O.kind){case Ie.SCALAR:return S(O);case Ie.OBJECT:return L(O);case Ie.INTERFACE:return H(O);case Ie.UNION:return ce(O);case Ie.ENUM:return we(O);case Ie.INPUT_OBJECT:return me(O)}const J=M(O);throw new Error(`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${J}.`)}function S(O){return new Rt({name:O.name,description:O.description,specifiedByURL:O.specifiedByURL})}function R(O){if(O.interfaces===null&&O.kind===Ie.INTERFACE)return[];if(!O.interfaces){const J=M(O);throw new Error(`Introspection result missing interfaces: ${J}.`)}return O.interfaces.map(y)}function L(O){return new pt({name:O.name,description:O.description,interfaces:()=>R(O),fields:()=>Fe(O)})}function H(O){return new ks({name:O.name,description:O.description,interfaces:()=>R(O),fields:()=>Fe(O)})}function ce(O){if(!O.possibleTypes){const J=M(O);throw new Error(`Introspection result missing possibleTypes: ${J}.`)}return new Ps({name:O.name,description:O.description,types:()=>O.possibleTypes.map(D)})}function we(O){if(!O.enumValues){const J=M(O);throw new Error(`Introspection result missing enumValues: ${J}.`)}return new $r({name:O.name,description:O.description,values:cr(O.enumValues,J=>J.name,J=>({description:J.description,deprecationReason:J.deprecationReason}))})}function me(O){if(!O.inputFields){const J=M(O);throw new Error(`Introspection result missing inputFields: ${J}.`)}return new Ls({name:O.name,description:O.description,fields:()=>on(O.inputFields),isOneOf:O.isOneOf})}function Fe(O){if(!O.fields)throw new Error(`Introspection result missing fields: ${M(O)}.`);return cr(O.fields,J=>J.name,ke)}function ke(O){const J=p(O.type);if(!ap(J)){const an=M(J);throw new Error(`Introspection must provide output type for fields, but received: ${an}.`)}if(!O.args){const an=M(O);throw new Error(`Introspection result missing field args: ${an}.`)}return{description:O.description,deprecationReason:O.deprecationReason,type:J,args:on(O.args)}}function on(O){return cr(O,J=>J.name,en)}function en(O){const J=p(O.type);if(!Za(J)){const Pt=M(J);throw new Error(`Introspection must provide input type for arguments, but received: ${Pt}.`)}const an=O.defaultValue!=null?Wt(ET(O.defaultValue),J):void 0;return{description:O.description,type:J,defaultValue:an,deprecationReason:O.deprecationReason}}function gt(O){if(!O.args){const J=M(O);throw new Error(`Introspection result missing directive args: ${J}.`)}if(!O.locations){const J=M(O);throw new Error(`Introspection result missing directive locations: ${J}.`)}return new Ot({name:O.name,description:O.description,isRepeatable:O.isRepeatable,locations:O.locations.slice(),args:on(O.args)})}}function r_(r,n,t){var o,s,a,l;const f=[],p=Object.create(null),m=[];let D;const y=[];for(const w of n.definitions)if(w.kind===b.SCHEMA_DEFINITION)D=w;else if(w.kind===b.SCHEMA_EXTENSION)y.push(w);else if(xi(w))f.push(w);else if(tu(w)){const j=w.name.value,$=p[j];p[j]=$?$.concat([w]):[w]}else w.kind===b.DIRECTIVE_DEFINITION&&m.push(w);if(Object.keys(p).length===0&&f.length===0&&m.length===0&&y.length===0&&D==null)return r;const A=Object.create(null);for(const w of r.types)A[w.name]=we(w);for(const w of f){var S;const j=w.name.value;A[j]=(S=If[j])!==null&&S!==void 0?S:xn(w)}const R={query:r.query&&H(r.query),mutation:r.mutation&&H(r.mutation),subscription:r.subscription&&H(r.subscription),...D&&an([D]),...an(y)};return{description:(o=D)===null||o===void 0||(s=o.description)===null||s===void 0?void 0:s.value,...R,types:Object.values(A),directives:[...r.directives.map(ce),...m.map(Fi)],extensions:Object.create(null),astNode:(a=D)!==null&&a!==void 0?a:r.astNode,extensionASTNodes:r.extensionASTNodes.concat(y),assumeValid:(l=t==null?void 0:t.assumeValid)!==null&&l!==void 0?l:!1};function L(w){return yn(w)?new fn(L(w.ofType)):Se(w)?new ie(L(w.ofType)):H(w)}function H(w){return A[w.name]}function ce(w){const j=w.toConfig();return new Ot({...j,args:wt(j.args,J)})}function we(w){if(HT(w)||qT(w))return w;if(Jt(w))return ke(w);if(He(w))return on(w);if(je(w))return en(w);if(Un(w))return gt(w);if(et(w))return Fe(w);if(vn(w))return me(w);Zn(!1,"Unexpected type: "+M(w))}function me(w){var j;const $=w.toConfig(),U=(j=p[$.name])!==null&&j!==void 0?j:[];return new Ls({...$,fields:()=>({...wt($.fields,he=>({...he,type:L(he.type)})),...ot(U)}),extensionASTNodes:$.extensionASTNodes.concat(U)})}function Fe(w){var j;const $=w.toConfig(),U=(j=p[w.name])!==null&&j!==void 0?j:[];return new $r({...$,values:{...$.values,...jn(U)},extensionASTNodes:$.extensionASTNodes.concat(U)})}function ke(w){var j;const $=w.toConfig(),U=(j=p[$.name])!==null&&j!==void 0?j:[];let he=$.specifiedByURL;for(const de of U){var $e;he=($e=_f(de))!==null&&$e!==void 0?$e:he}return new Rt({...$,specifiedByURL:he,extensionASTNodes:$.extensionASTNodes.concat(U)})}function on(w){var j;const $=w.toConfig(),U=(j=p[$.name])!==null&&j!==void 0?j:[];return new pt({...$,interfaces:()=>[...w.getInterfaces().map(H),...Er(U)],fields:()=>({...wt($.fields,O),...yr(U)}),extensionASTNodes:$.extensionASTNodes.concat(U)})}function en(w){var j;const $=w.toConfig(),U=(j=p[$.name])!==null&&j!==void 0?j:[];return new ks({...$,interfaces:()=>[...w.getInterfaces().map(H),...Er(U)],fields:()=>({...wt($.fields,O),...yr(U)}),extensionASTNodes:$.extensionASTNodes.concat(U)})}function gt(w){var j;const $=w.toConfig(),U=(j=p[$.name])!==null&&j!==void 0?j:[];return new Ps({...$,types:()=>[...w.getTypes().map(H),...Zt(U)],extensionASTNodes:$.extensionASTNodes.concat(U)})}function O(w){return{...w,type:L(w.type),args:w.args&&wt(w.args,J)}}function J(w){return{...w,type:L(w.type)}}function an(w){const j={};for(const U of w){var $;const he=($=U.operationTypes)!==null&&$!==void 0?$:[];for(const $e of he)j[$e.operation]=Pt($e.type)}return j}function Pt(w){var j;const $=w.name.value,U=(j=If[$])!==null&&j!==void 0?j:A[$];if(U===void 0)throw new Error(`Unknown type: "${$}".`);return U}function Xt(w){return w.kind===b.LIST_TYPE?new fn(Xt(w.type)):w.kind===b.NON_NULL_TYPE?new ie(Xt(w.type)):Pt(w)}function Fi(w){var j;return new Ot({name:w.name.value,description:(j=w.description)===null||j===void 0?void 0:j.value,locations:w.locations.map(({value:$})=>$),isRepeatable:w.repeatable,args:Ci(w.arguments),astNode:w})}function yr(w){const j=Object.create(null);for(const he of w){var $;const $e=($=he.fields)!==null&&$!==void 0?$:[];for(const de of $e){var U;j[de.name.value]={type:Xt(de.type),description:(U=de.description)===null||U===void 0?void 0:U.value,args:Ci(de.arguments),deprecationReason:Ns(de),astNode:de}}}return j}function Ci(w){const j=w??[],$=Object.create(null);for(const he of j){var U;const $e=Xt(he.type);$[he.name.value]={type:$e,description:(U=he.description)===null||U===void 0?void 0:U.value,defaultValue:Wt(he.defaultValue,$e),deprecationReason:Ns(he),astNode:he}}return $}function ot(w){const j=Object.create(null);for(const he of w){var $;const $e=($=he.fields)!==null&&$!==void 0?$:[];for(const de of $e){var U;const Fn=Xt(de.type);j[de.name.value]={type:Fn,description:(U=de.description)===null||U===void 0?void 0:U.value,defaultValue:Wt(de.defaultValue,Fn),deprecationReason:Ns(de),astNode:de}}}return j}function jn(w){const j=Object.create(null);for(const he of w){var $;const $e=($=he.values)!==null&&$!==void 0?$:[];for(const de of $e){var U;j[de.name.value]={description:(U=de.description)===null||U===void 0?void 0:U.value,deprecationReason:Ns(de),astNode:de}}}return j}function Er(w){return w.flatMap(j=>{var $,U;return($=(U=j.interfaces)===null||U===void 0?void 0:U.map(Pt))!==null&&$!==void 0?$:[]})}function Zt(w){return w.flatMap(j=>{var $,U;return($=(U=j.types)===null||U===void 0?void 0:U.map(Pt))!==null&&$!==void 0?$:[]})}function xn(w){var j;const $=w.name.value,U=(j=p[$])!==null&&j!==void 0?j:[];switch(w.kind){case b.OBJECT_TYPE_DEFINITION:{var he;const nn=[w,...U];return new pt({name:$,description:(he=w.description)===null||he===void 0?void 0:he.value,interfaces:()=>Er(nn),fields:()=>yr(nn),astNode:w,extensionASTNodes:U})}case b.INTERFACE_TYPE_DEFINITION:{var $e;const nn=[w,...U];return new ks({name:$,description:($e=w.description)===null||$e===void 0?void 0:$e.value,interfaces:()=>Er(nn),fields:()=>yr(nn),astNode:w,extensionASTNodes:U})}case b.ENUM_TYPE_DEFINITION:{var de;const nn=[w,...U];return new $r({name:$,description:(de=w.description)===null||de===void 0?void 0:de.value,values:jn(nn),astNode:w,extensionASTNodes:U})}case b.UNION_TYPE_DEFINITION:{var Fn;const nn=[w,...U];return new Ps({name:$,description:(Fn=w.description)===null||Fn===void 0?void 0:Fn.value,types:()=>Zt(nn),astNode:w,extensionASTNodes:U})}case b.SCALAR_TYPE_DEFINITION:{var qr;return new Rt({name:$,description:(qr=w.description)===null||qr===void 0?void 0:qr.value,specifiedByURL:_f(w),astNode:w,extensionASTNodes:U})}case b.INPUT_OBJECT_TYPE_DEFINITION:{var Lt;const nn=[w,...U];return new Ls({name:$,description:(Lt=w.description)===null||Lt===void 0?void 0:Lt.value,fields:()=>ot(nn),astNode:w,extensionASTNodes:U,isOneOf:i_(w)})}}}}const If=dr([...Ys,...Qs],r=>r.name);function Ns(r){const n=_i(Ep,r);return n==null?void 0:n.reason}function _f(r){const n=_i(bp,r);return n==null?void 0:n.url}function i_(r){return!!_i(Tp,r)}function s_(r,n){r!=null&&r.kind===b.DOCUMENT||fe(!1,"Must provide valid Document AST."),(n==null?void 0:n.assumeValid)!==!0&&(n==null?void 0:n.assumeValidSDL)!==!0&&n_(r);const o=r_({description:void 0,types:[],directives:[],extensions:Object.create(null),extensionASTNodes:[],assumeValid:!1},r,n);if(o.astNode==null)for(const a of o.types)switch(a.name){case"Query":o.query=a;break;case"Mutation":o.mutation=a;break;case"Subscription":o.subscription=a;break}const s=[...o.directives,...Ur.filter(a=>o.directives.every(l=>l.name!==a.name))];return new Ap({...o,directives:s})}function o_(r,n){const t=yT(r,{noLocation:void 0,allowLegacyFragmentVariables:void 0});return s_(t,{assumeValidSDL:void 0,assumeValid:void 0})}function a_(r){const n=new Map;return u_(r,t=>{He(t)&&l_(t,o=>{const s=La(o.type);Sa(n,s).references.push({kind:Di.FIELD,parent:t,by:o}),c_(o,l=>{const f=La(l.type);Sa(n,f).references.push({kind:Di.ARGUMENT,field:o,type:t,by:l})})}),Un(t)&&t.getTypes().forEach(o=>{Sa(n,o).references.push({kind:Di.UNION,by:t})})}),new Hb(n)}function u_(r,n){Object.entries(r.getTypeMap()).forEach(([,t])=>{t.name.startsWith("__")||n(t)})}function l_(r,n){Object.entries(r.getFields()).forEach(([,t])=>{n(t)})}function c_(r,n){Object.entries(r.args).forEach(([,t])=>{n(t)})}function Sa(r,n){let t=r.get(n.name);return t||(t={references:[]},r.set(n.name,t)),t}function La(r){return Se(r)||yn(r)?La(r.ofType):r}const Sf=`directive @authorized on FIELD_DEFINITION

"""
The @defer directive may be specified on a fragment spread to imply de-prioritization, that causes the fragment to be omitted in the initial response, and delivered as a subsequent response afterward. A query with @defer directive will cause the request to potentially return multiple responses, where non-deferred data is delivered in the initial response and data deferred delivered in a subsequent response. @include and @skip take precedence over @defer.
"""
directive @defer(if: Boolean = true, label: String) on FRAGMENT_SPREAD | INLINE_FRAGMENT

type ActionPayload {
  requestID: String!
  requestType: String!
  k8sManifest: String!
  namespace: String!
  externalData: String
  username: String
}

type Annotation {
  categories: String!
  vendor: String!
  createdAt: String!
  repository: String!
  support: String!
  chartDescription: String!
}

interface Audit {
  updatedAt: String
  createdAt: String
  updatedBy: UserDetails
  createdBy: UserDetails
}

enum AuthType {
  BASIC
  NONE
  SSH
  TOKEN
}

"""Defines the input for CMD probe properties"""
input CMDProbeRequest {
  """Timeout of the Probe"""
  probeTimeout: String!

  """Interval of the Probe"""
  interval: String!

  """Retry interval of the Probe"""
  retry: Int

  """Attempt contains the total attempt count for the probe"""
  attempt: Int

  """Polling interval of the Probe"""
  probePollingInterval: String

  """Initial delay interval of the Probe in seconds"""
  initialDelay: String

  """EvaluationTimeout is the timeout window in which the SLO metrics"""
  evaluationTimeout: String

  """Is stop on failure enabled in the Probe"""
  stopOnFailure: Boolean

  """Command of the Probe"""
  command: String!

  """Comparator of the Probe"""
  comparator: ComparatorInput!

  """Source of the Probe"""
  source: String
}

"""Defines the details for a chaos experiment"""
input ChaosExperimentRequest {
  """ID of the experiment"""
  experimentID: String

  """
  Boolean check indicating if the created scenario will be executed or not
  """
  runExperiment: Boolean

  """Manifest of the experiment"""
  experimentManifest: String!

  """Type of the experiment"""
  experimentType: ExperimentType

  """Cron syntax of the experiment schedule"""
  cronSyntax: String!

  """Name of the experiment"""
  experimentName: String!

  """Description of the experiment"""
  experimentDescription: String!

  """
  Array containing weightage and name of each chaos experiment in the experiment
  """
  weightages: [WeightagesInput!]!

  """
  Bool value indicating whether the experiment is a custom experiment or not
  """
  isCustomExperiment: Boolean!

  """ID of the target infra in which the experiment will run"""
  infraID: ID!

  """Tags of the infra"""
  tags: [String!]
}

"""
Defines the response received for querying the details of chaos experiment
"""
type ChaosExperimentResponse {
  """ID of the experiment"""
  experimentID: String!
  projectID: ID!

  """Cron syntax of the experiment schedule"""
  cronSyntax: String!

  """Name of the experiment"""
  experimentName: String!

  """Description of the experiment"""
  experimentDescription: String!

  """
  Bool value indicating whether the experiment is a custom experiment or not
  """
  isCustomExperiment: Boolean!

  """Tags of the infra"""
  tags: [String!]
}

type ChaosHub implements ResourceDetails & Audit {
  """ID of the chaos hub"""
  id: ID!

  """URL of the git repository"""
  repoURL: String!

  """Branch of the git repository"""
  repoBranch: String!

  """ID of the project in which the chaos hub is present"""
  projectID: ID!

  """Default Hub Identifier"""
  isDefault: Boolean!

  """Name of the chaos hub"""
  name: String!

  """Tags of the ChaosHub"""
  tags: [String!]

  """User who created the ChaosHub"""
  createdBy: UserDetails

  """User who has updated the ChaosHub"""
  updatedBy: UserDetails

  """Description of ChaosHub"""
  description: String

  """Type of ChaosHub"""
  hubType: HubType!

  """Bool value indicating whether the hub is private or not."""
  isPrivate: Boolean!

  """Type of authentication used: 	BASIC, SSH,	TOKEN"""
  authType: AuthType!

  """Token for authentication of private chaos hub"""
  token: String

  """Git username"""
  userName: String

  """Git password"""
  password: String

  """Private SSH key for authenticating into private chaos hub"""
  sshPrivateKey: String

  """Bool value indicating if the chaos hub is removed"""
  isRemoved: Boolean!

  """Timestamp when the chaos hub was created"""
  createdAt: String!

  """Timestamp when the chaos hub was last updated"""
  updatedAt: String!

  """Timestamp when the chaos hub was last synced"""
  lastSyncedAt: String!
}

"""Defines filter options for ChaosHub"""
input ChaosHubFilterInput {
  """Name of the ChaosHub"""
  chaosHubName: String

  """Tags of a chaos hub"""
  tags: [String!]

  """Description of a chaos hub"""
  description: String
}

type ChaosHubStatus implements ResourceDetails & Audit {
  """ID of the hub"""
  id: ID!

  """URL of the git repository"""
  repoURL: String!

  """Branch of the git repository"""
  repoBranch: String!

  """Bool value indicating whether the hub is available or not."""
  isAvailable: Boolean!

  """Total number of experiments in the hub"""
  totalFaults: String!

  """Total experiments"""
  totalExperiments: String!

  """Name of the chaos hub"""
  name: String!

  """Type of ChaosHub"""
  hubType: HubType!

  """Bool value indicating whether the hub is private or not."""
  isPrivate: Boolean!

  """Type of authentication used: 	BASIC, SSH,	TOKEN"""
  authType: AuthType!

  """Token for authentication of private chaos hub"""
  token: String

  """Git username"""
  userName: String

  """Git password"""
  password: String

  """Bool value indicating whether the hub is private or not."""
  isRemoved: Boolean!

  """Private SSH key for authenticating into private chaos hub"""
  sshPrivateKey: String

  """Public SSH key for authenticating into private chaos hub"""
  sshPublicKey: String

  """Timestamp when the chaos hub was last synced"""
  lastSyncedAt: String!

  """Tags of the ChaosHub"""
  tags: [String!]

  """User who created the ChaosHub"""
  createdBy: UserDetails

  """User who has updated the ChaosHub"""
  updatedBy: UserDetails

  """Created at timestamp"""
  createdAt: String!

  """Updated at timestamp"""
  updatedAt: String!

  """Description of ChaosHub"""
  description: String

  """Default Hub Identifier"""
  isDefault: Boolean!
}

type Chart {
  apiVersion: String!
  kind: String!
  metadata: Metadata!
  spec: Spec!
  packageInfo: PackageInformation!
}

input CloningInput {
  """Name of the chaos hub"""
  name: String!

  """Branch of the git repository"""
  repoBranch: String!

  """URL of the git repository"""
  repoURL: String!

  """Bool value indicating whether the hub is private or not."""
  isPrivate: Boolean!

  """Type of authentication used: 	BASIC, SSH,	TOKEN"""
  authType: AuthType!

  """Token for authentication of private chaos hub"""
  token: String

  """Git username"""
  userName: String

  """Git password"""
  password: String
  sshPrivateKey: String
  isDefault: Boolean!
}

"""Defines the common probe properties shared across different ProbeTypes"""
interface CommonProbeProperties {
  """Timeout of the Probe"""
  probeTimeout: String!

  """Interval of the Probe"""
  interval: String!

  """Retry interval of the Probe"""
  retry: Int

  """Attempt contains the total attempt count for the probe"""
  attempt: Int

  """Polling interval of the Probe"""
  probePollingInterval: String

  """Initial delay interval of the Probe in seconds"""
  initialDelay: String

  """EvaluationTimeout is the timeout window in which the SLO metrics"""
  evaluationTimeout: String

  """Is stop on failure enabled in the Probe"""
  stopOnFailure: Boolean
}

"""Defines the properties of the comparator"""
type Comparator {
  """Type of the Comparator"""
  type: String!

  """Value of the Comparator"""
  value: String!

  """Operator of the Comparator"""
  criteria: String!
}

"""Defines the input properties of the comparator"""
input ComparatorInput {
  """Type of the Comparator"""
  type: String!

  """Value of the Comparator"""
  value: String!

  """Operator of the Comparator"""
  criteria: String!
}

type ConfirmInfraRegistrationResponse {
  isInfraConfirmed: Boolean!
  newAccessKey: String
  infraID: String
}

"""Defines the details required for creating a chaos hub"""
input CreateChaosHubRequest {
  """Name of the chaos hub"""
  name: String!

  """Tags of the ChaosHub"""
  tags: [String!]

  """Description of ChaosHub"""
  description: String

  """URL of the git repository"""
  repoURL: String!

  """Branch of the git repository"""
  repoBranch: String!

  """Bool value indicating whether the hub is private or not."""
  isPrivate: Boolean!

  """Type of authentication used: 	BASIC, SSH,	TOKEN"""
  authType: AuthType!

  """Token for authentication of private chaos hub"""
  token: String

  """Git username"""
  userName: String

  """Git password"""
  password: String

  """Private SSH key for authenticating into private chaos hub"""
  sshPrivateKey: String

  """Public SSH key for authenticating into private chaos hub"""
  sshPublicKey: String
}

input CreateEnvironmentRequest {
  environmentID: String!
  name: String!
  type: EnvironmentType!
  description: String
  tags: [String!]
}

input CreateRemoteChaosHub {
  """Name of the chaos hub"""
  name: String!

  """Tags of the ChaosHub"""
  tags: [String!]

  """Description of ChaosHub"""
  description: String

  """URL of the git repository"""
  repoURL: String!
}

"""Defines the start date and end date for the filtering the data"""
input DateRange {
  """Start date"""
  startDate: String!

  """End date"""
  endDate: String
}

type Environment implements ResourceDetails & Audit {
  projectID: String!
  environmentID: String!
  name: String!
  description: String
  tags: [String!]
  type: EnvironmentType!
  createdAt: String!
  createdBy: UserDetails
  updatedBy: UserDetails
  updatedAt: String!
  isRemoved: Boolean
  infraIDs: [String!]
}

"""Defines filter options for infras"""
input EnvironmentFilterInput {
  """Name of the environment"""
  name: String

  """ID of the environment"""
  description: String

  """Type name of environment"""
  type: EnvironmentType

  """Tags of an environment"""
  tags: [String!]
}

"""Defines sorting options for experiment"""
input EnvironmentSortInput {
  """Field in which sorting will be done"""
  field: EnvironmentSortingField!

  """
  Bool value indicating whether the sorting will be done in ascending order
  """
  ascending: Boolean
}

enum EnvironmentSortingField {
  NAME
  TIME
}

enum EnvironmentType {
  PROD
  NON_PROD
}

"""Defines the Executed by which experiment details for Probes"""
type ExecutedByExperiment {
  """Experiment ID"""
  experimentID: String!

  """Experiment Name"""
  experimentName: String!

  """Timestamp at which the experiment was last updated"""
  updatedAt: Int!

  """User who has updated the experiment"""
  updatedBy: UserDetails
}

"""Defines the Execution History of experiment referenced by the Probe"""
type ExecutionHistory {
  """Probe Mode"""
  mode: Mode!

  """Fault Name"""
  faultName: String!

  """Fault Status"""
  status: Status!

  """Fault executed by which experiment"""
  executedByExperiment: ExecutedByExperiment!
}

"""Defines the details for a experiment"""
type Experiment implements ResourceDetails & Audit {
  projectID: ID!

  """ID of the experiment"""
  experimentID: String!

  """Type of the experiment"""
  experimentType: String

  """Manifest of the experiment"""
  experimentManifest: String!

  """Cron syntax of the experiment schedule"""
  cronSyntax: String!

  """Name of the experiment"""
  name: String!

  """Description of the experiment"""
  description: String!

  """
  Array containing weightage and name of each chaos fault in the experiment
  """
  weightages: [Weightages!]!

  """
  Bool value indicating whether the experiment is a custom experiment or not
  """
  isCustomExperiment: Boolean!

  """Timestamp when the experiment was last updated"""
  updatedAt: String!

  """Timestamp when the experiment was created"""
  createdAt: String!

  """Target infra in which the experiment will run"""
  infra: Infra

  """Bool value indicating if the experiment has removed"""
  isRemoved: Boolean!

  """Tags of the experiment"""
  tags: [String!]

  """User who created the experiment"""
  createdBy: UserDetails

  """Array of object containing details of recent experiment runs"""
  recentExperimentRunDetails: [RecentExperimentRun]

  """Details of the user who updated the experiment"""
  updatedBy: UserDetails
}

type ExperimentDetails {
  """Engine Manifest"""
  engineDetails: String!

  """Experiment Manifest"""
  experimentDetails: String!
}

"""Defines filter options for experiments"""
input ExperimentFilterInput {
  """Name of the experiment"""
  experimentName: String

  """Name of the infra in which the experiment is running"""
  infraName: String

  """ID of the infra in which the experiment is running"""
  infraID: String

  """Bool value indicating if Chaos Infrastructure is active"""
  infraActive: Boolean

  """Scenario type of the experiment i.e. CRON or NON_CRON"""
  scheduleType: ScheduleType

  """Status of the latest experiment run"""
  status: String

  """Date range for filtering purpose"""
  dateRange: DateRange

  """Type of infras"""
  infraTypes: [InfrastructureType]
}

input ExperimentRequest {
  """Name of the chart being used"""
  category: String!

  """Name of the experiment"""
  experimentName: String!

  """ID of the hub"""
  hubID: String!
}

"""Defines the details of a experiment run"""
type ExperimentRun implements Audit {
  projectID: ID!

  """ID of the experiment run which is to be queried"""
  experimentRunID: ID!

  """Type of the experiment"""
  experimentType: String

  """ID of the experiment"""
  experimentID: ID!

  """
  Array containing weightage and name of each chaos fault in the experiment
  """
  weightages: [Weightages!]!

  """Timestamp at which experiment run was last updated"""
  updatedAt: String!

  """Timestamp at which experiment run was created"""
  createdAt: String!

  """Target infra in which the experiment will run"""
  infra: Infra!

  """Name of the experiment"""
  experimentName: String!

  """Manifest of the experiment run"""
  experimentManifest: String!

  """Phase of the experiment run"""
  phase: ExperimentRunStatus!

  """Resiliency score of the experiment"""
  resiliencyScore: Float

  """Number of faults passed"""
  faultsPassed: Int

  """Number of faults failed"""
  faultsFailed: Int

  """Number of faults awaited"""
  faultsAwaited: Int

  """Number of faults stopped"""
  faultsStopped: Int

  """Number of faults which are not available"""
  faultsNa: Int

  """Total number of faults"""
  totalFaults: Int

  """
  Stores all the experiment run details related to the nodes of DAG graph and chaos results of the faults
  """
  executionData: String!

  """Bool value indicating if the experiment run has removed"""
  isRemoved: Boolean

  """User who has updated the experiment"""
  updatedBy: UserDetails

  """User who has created the experiment run"""
  createdBy: UserDetails

  """Notify ID of the experiment run"""
  notifyID: ID

  """runSequence is the sequence number of experiment run"""
  runSequence: Int!
}

"""Defines input type for experiment run filter"""
input ExperimentRunFilterInput {
  """Name of the experiment"""
  experimentName: String

  """Name of the infra infra"""
  infraID: String

  """Type of the experiment"""
  experimentType: ScheduleType

  """Status of the experiment run"""
  experimentStatus: ExperimentRunStatus

  """Date range for filtering purpose"""
  dateRange: DateRange

  """ID of experiment run"""
  experimentRunID: String

  """Array of experiment run status"""
  experimentRunStatus: [String]

  """Type of infras"""
  infraTypes: [InfrastructureType]
}

"""Defines the details for a experiment run"""
input ExperimentRunRequest {
  """ID of the experiment"""
  experimentID: String!

  """notifyID is required to give an ack for non cron experiment execution"""
  notifyID: String

  """ID of the experiment run which is to be queried"""
  experimentRunID: String!

  """Name of the experiment"""
  experimentName: String!

  """
  Stores all the experiment run details related to the nodes of DAG graph and chaos results of the experiments
  """
  executionData: String!

  """ID of the infra infra in which the experiment is running"""
  infraID: InfraIdentity!

  """ID of the revision which consists manifest details"""
  revisionID: String!

  """Bool value indicating if the experiment run has completed"""
  completed: Boolean!

  """Bool value indicating if the experiment run has removed"""
  isRemoved: Boolean

  """User who has updated the experiment"""
  updatedBy: String!
}

"""Defines sorting options for experiment runs"""
input ExperimentRunSortInput {
  """Field in which sorting will be done"""
  field: ExperimentSortingField!

  """
  Bool value indicating whether the sorting will be done in ascending order
  """
  ascending: Boolean
}

enum ExperimentRunStatus {
  All
  Running
  Completed
  Completed_With_Error
  Stopped
  Skipped
  Error
  Timeout
  Terminated
  Queued
  NA
}

"""Defines sorting options for experiment"""
input ExperimentSortInput {
  """Field in which sorting will be done"""
  field: ExperimentSortingField!

  """
  Bool value indicating whether the sorting will be done in ascending order
  """
  ascending: Boolean
}

enum ExperimentSortingField {
  NAME
  TIME
}

enum ExperimentType {
  All
  Experiment
  CronExperiment
  ChaosEngine
  ChaosSchedule
}

type Experiments {
  name: String!
  CSV: String!
  desc: String!
}

"""Fault Detail consists of all the fault related details"""
type FaultDetails {
  """fault consists of fault.yaml"""
  fault: String!

  """engine consists engine.yaml"""
  engine: String!

  """csv consists chartserviceversion.yaml"""
  csv: String!
}

type FaultList {
  name: String!
  displayName: String!
  description: String!
  plan: [String!]
}

enum FileType {
  EXPERIMENT
  ENGINE
  WORKFLOW
  CSV
}

"""Details of GET request"""
type GET {
  """Criteria of the request"""
  criteria: String!

  """Response Code of the request"""
  responseCode: String!
}

"""Details for input of GET request"""
input GETRequest {
  """Criteria of the request"""
  criteria: String!

  """Response Code of the request"""
  responseCode: String!
}

type GetChaosHubStatsResponse {
  """Total number of chaoshubs"""
  totalChaosHubs: Int!
}

"""Defines the details for a given experiment with some additional data"""
type GetExperimentResponse {
  """Details of experiment"""
  experimentDetails: Experiment!

  """Average resiliency score of the experiment"""
  averageResiliencyScore: Float
}

type GetExperimentRunStatsResponse {
  """Total number of experiment runs"""
  totalExperimentRuns: Int!

  """Total number of completed experiments runs"""
  totalCompletedExperimentRuns: Int!

  """Total number of stopped experiment runs"""
  totalTerminatedExperimentRuns: Int!

  """Total number of running experiment runs"""
  totalRunningExperimentRuns: Int!

  """Total number of stopped experiment runs"""
  totalStoppedExperimentRuns: Int!

  """Total number of errored experiment runs"""
  totalErroredExperimentRuns: Int!
}

type GetExperimentStatsResponse {
  """Total number of experiments"""
  totalExperiments: Int!

  """Total number of cron experiments"""
  totalExpCategorizedByResiliencyScore: [ResilienceScoreCategory]!
}

type GetInfraStatsResponse {
  """Total number of infrastructures"""
  totalInfrastructures: Int!

  """Total number of active infrastructures"""
  totalActiveInfrastructure: Int!

  """Total number of inactive infrastructures"""
  totalInactiveInfrastructures: Int!

  """Total number of confirmed infrastructures"""
  totalConfirmedInfrastructure: Int!

  """Total number of non confirmed infrastructures"""
  totalNonConfirmedInfrastructures: Int!
}

"""Defines the response of the Probe reference API"""
type GetProbeReferenceResponse {
  """Harness identifiers"""
  projectID: ID!

  """Name of the Probe"""
  name: String!

  """Total Runs"""
  totalRuns: Int!

  """Recent Executions of the probe"""
  recentExecutions: [RecentExecutions]!
}

"""Defines the input requests for GetProbeYAML query"""
input GetProbeYAMLRequest {
  """Probe name of the probe"""
  probeName: ID!

  """Mode of the Probe (SoT, EoT, Edge, Continuous or OnChaos)"""
  mode: Mode!
}

"""Defines the response for Get Probe In Experiment Run Query"""
type GetProbesInExperimentRunResponse {
  """Probe Object"""
  probe: Probe!

  """Mode of the probe"""
  mode: Mode!

  """Status of the Probe"""
  status: Status!
}

"""Details of setting a Git repository"""
input GitConfig {
  """Git branch where the chaos charts will be pushed and synced"""
  branch: String!

  """URL of the Git repository"""
  repoURL: String!

  """Type of authentication used: 	BASIC, SSH,	TOKEN"""
  authType: AuthType!

  """Token used for private repository"""
  token: String

  """Git username"""
  userName: String

  """Git password"""
  password: String

  """Private SSH key authenticating into git repository"""
  sshPrivateKey: String
}

"""Response received after configuring GitOps"""
type GitConfigResponse {
  """Bool value indicating whether GitOps is enabled or not"""
  enabled: Boolean!

  """ID of the project where GitOps is configured"""
  projectID: String!

  """Git branch where the chaos charts will be pushed and synced"""
  branch: String

  """URL of the Git repository"""
  repoURL: String

  """Type of authentication used: 	BASIC, SSH,	TOKEN"""
  authType: AuthType

  """Token used for private repository"""
  token: String

  """Git username"""
  userName: String

  """Git password"""
  password: String

  """Private SSH key authenticating into git repository"""
  sshPrivateKey: String
}

"""Defines the input for HTTP probe properties"""
input HTTPProbeRequest {
  """Timeout of the Probe"""
  probeTimeout: String!

  """Interval of the Probe"""
  interval: String!

  """Retry interval of the Probe"""
  retry: Int

  """Attempt contains the total attempt count for the probe"""
  attempt: Int

  """Polling interval of the Probe"""
  probePollingInterval: String

  """Initial delay interval of the Probe in seconds"""
  initialDelay: String

  """EvaluationTimeout is the timeout window in which the SLO metrics"""
  evaluationTimeout: String

  """Is stop on failure enabled in the Probe"""
  stopOnFailure: Boolean

  """URL of the Probe"""
  url: String!

  """HTTP method of the Probe"""
  method: MethodRequest!

  """If Insecure HTTP verification should  be skipped"""
  insecureSkipVerify: Boolean
}

enum HubType {
  GIT
  REMOTE
}

enum INFRA_SCOPE {
  namespace
  cluster
}

"""Defines the different types of Image Pull Policy"""
enum ImagePullPolicy {
  IfNotPresent
  Always
  Never
}

"""Defines details for image registry"""
type ImageRegistry {
  """
  Bool value indicating if the image registry is default or not; by default workflow uses LitmusChaos registry
  """
  isDefault: Boolean

  """Name of Image Registry"""
  imageRegistryName: String!

  """Name of image repository"""
  imageRepoName: String!

  """Type of the image registry: public/private"""
  imageRegistryType: String!

  """Secret which is used for private registry"""
  secretName: String

  """Namespace where the secret is available"""
  secretNamespace: String

  """Bool value indicating if image registry is enabled or not"""
  enableRegistry: Boolean
}

"""Defines input data for querying the details of an image registry"""
input ImageRegistryInput {
  """
  Bool value indicating if the image registry is default or not; by default workflow uses LitmusChaos registry
  """
  isDefault: Boolean!

  """Name of Image Registry"""
  imageRegistryName: String!

  """Name of image repository"""
  imageRepoName: String!

  """Type of the image registry: public/private"""
  imageRegistryType: String!

  """Secret which is used for private registry"""
  secretName: String

  """Namespace where the secret is available"""
  secretNamespace: String

  """Bool value indicating if image registry is enabled or not"""
  enableRegistry: Boolean
}

"""Defines response data for image registry"""
type ImageRegistryResponse implements Audit {
  """
  Bool value indicating if the image registry is default or not; by default workflow uses LitmusChaos registry
  """
  isDefault: Boolean!

  """Information Image Registry"""
  imageRegistryInfo: ImageRegistry

  """ID of the image registry"""
  imageRegistryID: String!

  """ID of the project in which image registry is created"""
  projectID: String!

  """Timestamp when the image registry was last updated"""
  updatedAt: String

  """Timestamp when the image registry was created"""
  createdAt: String

  """User who created the infra"""
  createdBy: UserDetails

  """User who has updated the infra"""
  updatedBy: UserDetails

  """Bool value indicating if the image registry has been removed"""
  isRemoved: Boolean
}

"""Defines the details for a infra"""
type Infra implements ResourceDetails & Audit {
  projectID: ID!

  """ID of the infra"""
  infraID: ID!

  """Name of the infra"""
  name: String!

  """Description of the infra"""
  description: String

  """Tags of the infra"""
  tags: [String!]

  """Environment ID for the infra"""
  environmentID: String!

  """Infra Platform Name eg. GKE,AWS, Others"""
  platformName: String!

  """Boolean value indicating if chaos infrastructure is active or not"""
  isActive: Boolean!

  """Boolean value indicating if chaos infrastructure is confirmed or not"""
  isInfraConfirmed: Boolean!

  """Boolean value indicating if chaos infrastructure is removed or not"""
  isRemoved: Boolean!

  """Timestamp when the infra was last updated"""
  updatedAt: String!

  """Timestamp when the infra was created"""
  createdAt: String!

  """Number of schedules created in the infra"""
  noOfExperiments: Int

  """Number of experiments run in the infra"""
  noOfExperimentRuns: Int

  """Token used to verify and retrieve the infra manifest"""
  token: String!

  """Namespace where the infra is being installed"""
  infraNamespace: String

  """Name of service account used by infra"""
  serviceAccount: String

  """Scope of the infra : ns or cluster"""
  infraScope: String!

  """
  Bool value indicating whether infra ns used already exists on infra or not
  """
  infraNsExists: Boolean

  """
  Bool value indicating whether service account used already exists on infra or not
  """
  infraSaExists: Boolean

  """Timestamp of the last experiment run in the infra"""
  lastExperimentTimestamp: String

  """Timestamp when the infra got connected"""
  startTime: String!

  """Version of the infra"""
  version: String!

  """User who created the infra"""
  createdBy: UserDetails

  """User who has updated the infra"""
  updatedBy: UserDetails

  """Type of the infrastructure"""
  infraType: InfrastructureType

  """update status of infra"""
  updateStatus: UpdateStatus!
}

type InfraActionResponse {
  projectID: String!
  action: ActionPayload!
}

type InfraEventResponse {
  eventID: ID!
  eventType: String!
  eventName: String!
  description: String!
  infra: Infra!
}

"""Defines filter options for infras"""
input InfraFilterInput {
  """Name of the infra"""
  name: String

  """ID of the infra"""
  infraID: String

  """ID of the infra"""
  description: String

  """Platform name of infra"""
  platformName: String

  """Scope of infra"""
  infraScope: INFRA_SCOPE

  """Status of infra"""
  isActive: Boolean

  """Tags of an infra"""
  tags: [String]
}

input InfraIdentity {
  infraID: String!
  accessKey: String!
  version: String!
}

"""
InfraVersionDetails returns the details of compatible infra versions and the latest infra version supported
"""
type InfraVersionDetails {
  """Latest infra version supported"""
  latestVersion: String!

  """List of all infra versions supported"""
  compatibleVersions: [String!]!
}

enum InfrastructureType {
  Kubernetes
}

enum Invitation {
  Accepted
  Pending
}

"""Defines the K8S probe properties"""
type K8SProbe implements CommonProbeProperties {
  """Timeout of the Probe"""
  probeTimeout: String!

  """Interval of the Probe"""
  interval: String!

  """Retry interval of the Probe"""
  retry: Int

  """Attempt contains the total attempt count for the probe"""
  attempt: Int

  """Polling interval of the Probe"""
  probePollingInterval: String

  """Initial delay interval of the Probe in seconds"""
  initialDelay: String

  """EvaluationTimeout is the timeout window in which the SLO metrics"""
  evaluationTimeout: String

  """Is stop on failure enabled in the Probe"""
  stopOnFailure: Boolean

  """Group of the Probe"""
  group: String

  """Version of the Probe"""
  version: String!

  """Resource of the Probe"""
  resource: String!

  """Namespace of the Probe"""
  namespace: String

  """Resource Names of the Probe"""
  resourceNames: String

  """Field Selector of the Probe"""
  fieldSelector: String

  """Label Selector of the Probe"""
  labelSelector: String

  """Operation of the Probe"""
  operation: String!
}

"""Defines the input for K8S probe properties"""
input K8SProbeRequest {
  """Timeout of the Probe"""
  probeTimeout: String!

  """Interval of the Probe"""
  interval: String!

  """Retry interval of the Probe"""
  retry: Int

  """Attempt contains the total attempt count for the probe"""
  attempt: Int

  """Polling interval of the Probe"""
  probePollingInterval: String

  """Initial delay interval of the Probe in seconds"""
  initialDelay: String

  """EvaluationTimeout is the timeout window in which the SLO metrics"""
  evaluationTimeout: String

  """Is stop on failure enabled in the Probe"""
  stopOnFailure: Boolean

  """Group of the Probe"""
  group: String

  """Version of the Probe"""
  version: String!

  """Resource of the Probe"""
  resource: String!

  """Namespace of the Probe"""
  namespace: String

  """Resource Names of the Probe"""
  resourceNames: String

  """Field Selector of the Probe"""
  fieldSelector: String

  """Label Selector of the Probe"""
  labelSelector: String

  """Operation of the Probe"""
  operation: String!
}

input KubeGVRRequest {
  group: String!
  version: String!
  resource: String!
}

"""
KubeObject consists of the namespace and the available resources in the same
"""
type KubeObject {
  """Namespace of the resource"""
  namespace: String!

  """Details of the resource"""
  data: [ObjectData]!
}

"""Defines the details of Kubernetes object"""
input KubeObjectData {
  """Unique request ID for fetching Kubernetes object details"""
  requestID: ID!

  """ID of the infra in which the Kubernetes object is present"""
  infraID: InfraIdentity!

  """Type of the Kubernetes object"""
  kubeObj: String!
}

"""Defines details for fetching Kubernetes object data"""
input KubeObjectRequest {
  """ID of the infra in which the Kubernetes object is present"""
  infraID: ID!

  """GVR Request"""
  kubeObjRequest: KubeGVRRequest
  objectType: String!
  workloads: [Workload]
}

"""Response received for querying Kubernetes Object"""
type KubeObjectResponse {
  """ID of the infra in which the Kubernetes object is present"""
  infraID: ID!

  """Type of the Kubernetes object"""
  kubeObj: [KubeObject]!
}

"""Defines the CMD probe properties"""
type KubernetesCMDProbe implements CommonProbeProperties {
  """Timeout of the Probe"""
  probeTimeout: String!

  """Interval of the Probe"""
  interval: String!

  """Retry interval of the Probe"""
  retry: Int

  """Attempt contains the total attempt count for the probe"""
  attempt: Int

  """Polling interval of the Probe"""
  probePollingInterval: String

  """Initial delay interval of the Probe in seconds"""
  initialDelay: String

  """EvaluationTimeout is the timeout window in which the SLO metrics"""
  evaluationTimeout: String

  """Is stop on failure enabled in the Probe"""
  stopOnFailure: Boolean

  """Command of the Probe"""
  command: String!

  """Comparator of the Probe"""
  comparator: Comparator!

  """Source of the Probe"""
  source: String
}

"""Defines the input for Kubernetes CMD probe properties"""
input KubernetesCMDProbeRequest {
  """Timeout of the Probe"""
  probeTimeout: String!

  """Interval of the Probe"""
  interval: String!

  """Retry interval of the Probe"""
  retry: Int

  """Attempt contains the total attempt count for the probe"""
  attempt: Int

  """Polling interval of the Probe"""
  probePollingInterval: String

  """Initial delay interval of the Probe in seconds"""
  initialDelay: String

  """EvaluationTimeout is the timeout window in which the SLO metrics"""
  evaluationTimeout: String

  """Is stop on failure enabled in the Probe"""
  stopOnFailure: Boolean

  """Command of the Probe"""
  command: String!

  """Comparator of the Probe"""
  comparator: ComparatorInput!

  """Source of the Probe"""
  source: String
}

"""Defines the Kubernetes HTTP probe properties"""
type KubernetesHTTPProbe implements CommonProbeProperties {
  """Timeout of the Probe"""
  probeTimeout: String!

  """Interval of the Probe"""
  interval: String!

  """Retry interval of the Probe"""
  retry: Int

  """Attempt contains the total attempt count for the probe"""
  attempt: Int

  """Polling interval of the Probe"""
  probePollingInterval: String

  """Initial delay interval of the Probe in seconds"""
  initialDelay: String

  """EvaluationTimeout is the timeout window in which the SLO metrics"""
  evaluationTimeout: String

  """Is stop on failure enabled in the Probe"""
  stopOnFailure: Boolean

  """URL of the Probe"""
  url: String!

  """HTTP method of the Probe"""
  method: Method!

  """If Insecure HTTP verification should  be skipped"""
  insecureSkipVerify: Boolean
}

"""Defines the input for Kubernetes HTTP probe properties"""
input KubernetesHTTPProbeRequest {
  """Timeout of the Probe"""
  probeTimeout: String!

  """Interval of the Probe"""
  interval: String!

  """Retry interval of the Probe"""
  retry: Int

  """Attempt contains the total attempt count for the probe"""
  attempt: Int

  """Polling interval of the Probe"""
  probePollingInterval: String

  """Initial delay interval of the Probe in seconds"""
  initialDelay: String

  """EvaluationTimeout is the timeout window in which the SLO metrics"""
  evaluationTimeout: String

  """Is stop on failure enabled in the Probe"""
  stopOnFailure: Boolean

  """URL of the Probe"""
  url: String!

  """HTTP method of the Probe"""
  method: MethodRequest!

  """If Insecure HTTP verification should  be skipped"""
  insecureSkipVerify: Boolean
}

type Link {
  name: String!
  url: String!
}

input ListChaosHubRequest {
  """Array of ChaosHub IDs for which details will be fetched"""
  chaosHubIDs: [ID!]

  """Details for fetching filtered data"""
  filter: ChaosHubFilterInput
}

input ListEnvironmentRequest {
  """Environment ID"""
  environmentIDs: [ID!]

  """Details for fetching paginated data"""
  pagination: Pagination

  """Details for fetching filtered data"""
  filter: EnvironmentFilterInput

  """Details for fetching sorted data"""
  sort: EnvironmentSortInput
}

type ListEnvironmentResponse {
  """Total number of environment"""
  totalNoOfEnvironments: Int!
  environments: [Environment]
}

"""Defines the details for a experiment"""
input ListExperimentRequest {
  """Array of experiment IDs for which details will be fetched"""
  experimentIDs: [ID]

  """Details for fetching paginated data"""
  pagination: Pagination

  """Details for fetching sorted data"""
  sort: ExperimentSortInput

  """Details for fetching filtered data"""
  filter: ExperimentFilterInput
}

"""Defines the details for a experiment with total experiment count"""
type ListExperimentResponse {
  """Total number of experiments"""
  totalNoOfExperiments: Int!

  """Details related to the experiments"""
  experiments: [Experiment]!
}

"""Defines the details for experiment runs"""
input ListExperimentRunRequest {
  """Array of experiment run IDs for which details will be fetched"""
  experimentRunIDs: [ID]

  """Array of experiment IDs for which details will be fetched"""
  experimentIDs: [ID]

  """Details for fetching paginated data"""
  pagination: Pagination

  """Details for fetching sorted data"""
  sort: ExperimentRunSortInput

  """Details for fetching filtered data"""
  filter: ExperimentRunFilterInput
}

"""Defines the details of a experiment to sent as response"""
type ListExperimentRunResponse {
  """Total number of experiment runs"""
  totalNoOfExperimentRuns: Int!

  """Defines details of experiment runs"""
  experimentRuns: [ExperimentRun]!
}

"""Defines the details for a infra"""
input ListInfraRequest {
  """Array of infra IDs for which details will be fetched"""
  infraIDs: [ID!]

  """Environment ID"""
  environmentIDs: [ID!]

  """Details for fetching paginated data"""
  pagination: Pagination

  """Details for fetching filtered data"""
  filter: InfraFilterInput
}

"""Defines the details for a infras with total infras count"""
type ListInfraResponse {
  """Total number of infras"""
  totalNoOfInfras: Int!

  """Details related to the infras"""
  infras: [Infra]!
}

"""Defines the details of the maintainer"""
type Maintainer {
  """Name of the maintainer"""
  name: String!

  """Email of the maintainer"""
  email: String!
}

enum MemberRole {
  Owner
  Executor
  Viewer
}

type Metadata {
  name: String!
  version: String!
  annotations: Annotation!
}

"""Defines the methods of the probe properties"""
type Method {
  """A GET request"""
  get: GET

  """A POST request"""
  post: POST
}

"""Defines the input for methods of the probe properties"""
input MethodRequest {
  """A GET request"""
  get: GETRequest

  """A POST request"""
  post: POSTRequest
}

"""Defines the different modes of Probes"""
enum Mode {
  SOT
  EOT
  Edge
  Continuous
  OnChaos
}

type Mutation {
  """Creates a new experiment and applies its manifest"""
  createChaosExperiment(request: ChaosExperimentRequest!, projectID: ID!): ChaosExperimentResponse!

  """Saves a new experiment or updates if already exists"""
  saveChaosExperiment(request: SaveChaosExperimentRequest!, projectID: ID!): String!

  """Updates the experiment"""
  updateChaosExperiment(request: ChaosExperimentRequest!, projectID: ID!): ChaosExperimentResponse!

  """Removes a experiment from infra"""
  deleteChaosExperiment(experimentID: String!, experimentRunID: String, projectID: ID!): Boolean!

  """Enable/Disable cron experiment state"""
  updateCronExperimentState(experimentID: String!, disable: Boolean!, projectID: ID!): Boolean!

  """Creates a new experiment run and sends it to subscriber"""
  chaosExperimentRun(request: ExperimentRunRequest!): String!

  """Run the chaos experiment (used by frontend)"""
  runChaosExperiment(experimentID: String!, projectID: ID!): RunChaosExperimentResponse!

  """
  stopExperiment will halt all the ongoing runs of a particular experiment
  """
  stopExperimentRuns(projectID: ID!, experimentID: String!, experimentRunID: String, notifyID: String): Boolean!

  """Connect a new infra for a user in a specified project"""
  registerInfra(projectID: ID!, request: RegisterInfraRequest!): RegisterInfraResponse!

  """Confirms the subscriber's registration with the control plane"""
  confirmInfraRegistration(request: InfraIdentity!): ConfirmInfraRegistrationResponse!

  """
  Disconnects an infra and deletes its configuration from the control plane
  """
  deleteInfra(projectID: ID!, infraID: String!): String!

  """Fetches manifest details"""
  getManifestWithInfraID(projectID: ID!, infraID: String!, accessKey: String!): String!

  """Receives pod logs for experiments from infra"""
  podLog(request: PodLog!): String!

  """Receives kubernetes object data from subscriber"""
  kubeObj(request: KubeObjectData!): String!

  """Add a ChaosHub (includes the git clone operation)"""
  addChaosHub(projectID: ID!, request: CreateChaosHubRequest!): ChaosHub!

  """Add a ChaosHub (remote hub download)"""
  addRemoteChaosHub(projectID: ID!, request: CreateRemoteChaosHub!): ChaosHub!

  """Save a ChaosHub configuration without cloning it"""
  saveChaosHub(projectID: ID!, request: CreateChaosHubRequest!): ChaosHub!

  """Sync changes from the Git repository of a ChaosHub"""
  syncChaosHub(id: ID!, projectID: ID!): String!

  """Generates Private and Public key for SSH authentication"""
  generateSSHKey: SSHKey!

  """Update the configuration of a ChaosHub"""
  updateChaosHub(projectID: ID!, request: UpdateChaosHubRequest!): ChaosHub!

  """Delete the ChaosHub"""
  deleteChaosHub(projectID: ID!, hubID: ID!): Boolean!
  createEnvironment(projectID: ID!, request: CreateEnvironmentRequest): Environment
  updateEnvironment(projectID: ID!, request: UpdateEnvironmentRequest): String!
  deleteEnvironment(projectID: ID!, environmentID: ID!): String!

  """
  Sends workflow run request(single run workflow only) to agent on gitops notification
  """
  gitopsNotifier(clusterInfo: InfraIdentity!, experimentID: ID!): String!

  """Enables gitops settings in the project"""
  enableGitOps(projectID: ID!, configurations: GitConfig!): Boolean!

  """Disables gitops settings in the project"""
  disableGitOps(projectID: ID!): Boolean!

  """Updates gitops settings in the project"""
  updateGitOps(projectID: ID!, configurations: GitConfig!): Boolean!

  """Create an Image Registry configuration"""
  createImageRegistry(projectID: String!, imageRegistryInfo: ImageRegistryInput!): ImageRegistryResponse!

  """Update the Image Registry configuration"""
  updateImageRegistry(imageRegistryID: String!, projectID: String!, imageRegistryInfo: ImageRegistryInput!): ImageRegistryResponse!

  """Delete the Image Registry"""
  deleteImageRegistry(imageRegistryID: String!, projectID: String!): String!

  """Creates a new Probe"""
  addProbe(request: ProbeRequest!, projectID: ID!): Probe!

  """Update the configuration of a Probe"""
  updateProbe(request: ProbeRequest!, projectID: ID!): String!

  """Delete a Probe"""
  deleteProbe(probeName: ID!, projectID: ID!): Boolean!
}

input NewInfraEventRequest {
  eventName: String!
  description: String!
  infraID: String!
  accessKey: String!
}

type ObjectData {
  """Labels present in the resource"""
  labels: [String!]

  """Name of the resource"""
  name: String!
}

"""Details of POST request"""
type POST {
  """Content Type of the request"""
  contentType: String

  """Body of the request"""
  body: String

  """Body Path of the HTTP body required for the http post request"""
  bodyPath: String

  """Criteria of the request"""
  criteria: String!

  """Response Code of the request"""
  responseCode: String!
}

"""Details for input of the POST request"""
input POSTRequest {
  """Content Type of the request"""
  contentType: String

  """Body of the request"""
  body: String

  """Body Path of the request for Body"""
  bodyPath: String

  """Criteria of the request"""
  criteria: String!

  """Response Code of the request"""
  responseCode: String!
}

"""Defines the PROM probe properties"""
type PROMProbe implements CommonProbeProperties {
  """Timeout of the Probe"""
  probeTimeout: String!

  """Interval of the Probe"""
  interval: String!

  """Retry interval of the Probe"""
  retry: Int

  """Attempt contains the total attempt count for the probe"""
  attempt: Int

  """Polling interval of the Probe"""
  probePollingInterval: String

  """Initial delay interval of the Probe in seconds"""
  initialDelay: String

  """EvaluationTimeout is the timeout window in which the SLO metrics"""
  evaluationTimeout: String

  """Is stop on failure enabled in the Probe"""
  stopOnFailure: Boolean

  """Endpoint of the Probe"""
  endpoint: String!

  """Query of the Probe"""
  query: String

  """Query path of the Probe"""
  queryPath: String

  """Comparator of the Probe"""
  comparator: Comparator!
}

"""Defines the input for PROM probe properties"""
input PROMProbeRequest {
  """Timeout of the Probe"""
  probeTimeout: String!

  """Interval of the Probe"""
  interval: String!

  """Retry interval of the Probe"""
  retry: Int

  """Attempt contains the total attempt count for the probe"""
  attempt: Int

  """Polling interval of the Probe"""
  probePollingInterval: String

  """Initial delay interval of the Probe in seconds"""
  initialDelay: String

  """EvaluationTimeout is the timeout window in which the SLO metrics"""
  evaluationTimeout: String

  """Is stop on failure enabled in the Probe"""
  stopOnFailure: Boolean

  """Endpoint of the Probe"""
  endpoint: String!

  """Query of the Probe"""
  query: String

  """Query path of the Probe"""
  queryPath: String

  """Comparator of the Probe"""
  comparator: ComparatorInput!
}

type PackageInformation {
  packageName: String!
  experiments: [Experiments!]!
}

"""Defines data required to fetch paginated data"""
input Pagination {
  """Page number for which data will be fetched"""
  page: Int!

  """Number of data to be fetched"""
  limit: Int!
}

"""Response received for querying pod logs"""
input PodLog {
  """ID of the cluster"""
  infraID: InfraIdentity!

  """Unique request ID of a particular node which is being queried"""
  requestID: ID!

  """ID of a experiment run"""
  experimentRunID: ID!

  """Name of the pod for which logs are required"""
  podName: String!

  """Type of the pod: chaosengine"""
  podType: String!

  """Logs for the pod"""
  log: String!
}

"""Defines the details for fetching the pod logs"""
input PodLogRequest {
  """ID of the cluster"""
  infraID: ID!

  """ID of a experiment run"""
  experimentRunID: ID!

  """Name of the pod for which logs are required"""
  podName: String!

  """Namespace where the pod is running"""
  podNamespace: String!

  """Type of the pod: chaosEngine or not pod"""
  podType: String!

  """Name of the experiment pod fetched from execution data"""
  expPod: String

  """Name of the runner pod fetched from execution data"""
  runnerPod: String

  """Namespace where the experiment is executing"""
  chaosNamespace: String
}

"""Defines the response received for querying querying the pod logs"""
type PodLogResponse {
  """ID of the experiment run which is to be queried"""
  experimentRunID: ID!

  """Name of the pod for which logs are queried"""
  podName: String!

  """Type of the pod: chaosengine"""
  podType: String!

  """Logs for the pod"""
  log: String!
}

type PredefinedExperimentList {
  """Name of the experiment"""
  experimentName: String!

  """Experiment CSV"""
  experimentCSV: String!

  """Experiment Manifest"""
  experimentManifest: String!
}

"""Defines the details of the Probe entity"""
type Probe implements ResourceDetails & Audit {
  """Harness identifiers"""
  projectID: ID!

  """Name of the Probe"""
  name: String!

  """Description of the Probe"""
  description: String

  """Tags of the Probe"""
  tags: [String!]

  """Type of the Probe [From list of ProbeType enum]"""
  type: ProbeType!

  """Infrastructure type of the Probe"""
  infrastructureType: InfrastructureType!

  """Kubernetes HTTP Properties of the specific type of the Probe"""
  kubernetesHTTPProperties: KubernetesHTTPProbe

  """Kubernetes CMD Properties of the specific type of the Probe"""
  kubernetesCMDProperties: KubernetesCMDProbe

  """K8S Properties of the specific type of the Probe"""
  k8sProperties: K8SProbe

  """PROM Properties of the specific type of the Probe"""
  promProperties: PROMProbe

  """All execution histories of the probe"""
  recentExecutions: [ProbeRecentExecutions!]

  """Referenced by how many faults"""
  referencedBy: Int

  """Timestamp at which the Probe was last updated"""
  updatedAt: String!

  """Timestamp at which the Probe was created"""
  createdAt: String!

  """User who has updated the Probe"""
  updatedBy: UserDetails

  """User who has created the Probe"""
  createdBy: UserDetails
}

"""Defines the input for Probe filter"""
input ProbeFilterInput {
  """Name of the Probe"""
  name: String

  """Date range for filtering purpose"""
  dateRange: DateRange

  """Type of the Probe [From list of ProbeType enum]"""
  type: [ProbeType]
}

"""
Defines the Recent Executions of global probe in ListProbe API with different fault and execution history each time
"""
type ProbeRecentExecutions {
  """Fault name"""
  faultName: String!

  """Fault Status"""
  status: Status!

  """Fault executed by which experiment"""
  executedByExperiment: ExecutedByExperiment!
}

"""Defines the details required for creating a Chaos Probe"""
input ProbeRequest {
  """Name of the Probe"""
  name: ID!

  """Description of the Probe"""
  description: String

  """Tags of the Probe"""
  tags: [String!]

  """Type of the Probe [From list of ProbeType enum]"""
  type: ProbeType!

  """Infrastructure type of the Probe"""
  infrastructureType: InfrastructureType!

  """HTTP Properties of the specific type of the Probe"""
  kubernetesHTTPProperties: KubernetesHTTPProbeRequest

  """CMD Properties of the specific type of the Probe"""
  kubernetesCMDProperties: KubernetesCMDProbeRequest

  """K8S Properties of the specific type of the Probe"""
  k8sProperties: K8SProbeRequest

  """PROM Properties of the specific type of the Probe"""
  promProperties: PROMProbeRequest
}

"""Defines the different statuses of Probes"""
enum ProbeStatus {
  Running
  Completed
  Stopped
  Error
  Queued
  NA
}

"""Defines the different types of Probes"""
enum ProbeType {
  httpProbe
  cmdProbe
  promProbe
  k8sProbe
}

"""Defines the older different statuses of Probes"""
enum ProbeVerdict {
  Passed
  Failed
  NA
  Awaited
}

type Provider {
  name: String!
}

type Query {
  """Returns the experiment based on experiment ID"""
  getExperiment(projectID: ID!, experimentID: String!): GetExperimentResponse!

  """Returns the list of experiments based on various filter parameters"""
  listExperiment(projectID: ID!, request: ListExperimentRequest!): ListExperimentResponse!

  """Query to get experiment stats"""
  getExperimentStats(projectID: ID!): GetExperimentStatsResponse!

  """Returns experiment run based on experiment run ID"""
  getExperimentRun(projectID: ID!, experimentRunID: ID, notifyID: ID): ExperimentRun!

  """Returns the list of experiment run based on various filter parameters"""
  listExperimentRun(projectID: ID!, request: ListExperimentRunRequest!): ListExperimentRunResponse!

  """Query to get experiment run stats"""
  getExperimentRunStats(projectID: ID!): GetExperimentRunStatsResponse!

  """Returns infra with a particular infraID in the project"""
  getInfra(projectID: ID!, infraID: String!): Infra!

  """Returns infras with a particular infra type in the project"""
  listInfras(projectID: ID!, request: ListInfraRequest): ListInfraResponse!

  """Returns infra details based on identifiers"""
  getInfraDetails(infraID: ID!, projectID: ID!): Infra!

  """Returns the manifest for a given infraID"""
  getInfraManifest(infraID: ID!, upgrade: Boolean!, projectID: ID!): String!

  """Query to get experiment stats"""
  getInfraStats(projectID: ID!): GetInfraStatsResponse!

  """Query to get the latest version of infra available"""
  getVersionDetails(projectID: ID!): InfraVersionDetails!

  """Returns version of gql server"""
  getServerVersion: ServerVersionResponse!

  """List the Charts details of a ChaosHub"""
  listChaosFaults(hubID: ID!, projectID: ID!): [Chart!]!

  """Get the fault list from a ChaosHub"""
  getChaosFault(projectID: ID!, request: ExperimentRequest!): FaultDetails!

  """Lists all the connected ChaosHub"""
  listChaosHub(projectID: ID!, request: ListChaosHubRequest): [ChaosHubStatus]!

  """Get the details of a requested ChaosHub"""
  getChaosHub(projectID: ID!, chaosHubID: ID!): ChaosHubStatus!

  """List the PredefinedExperiments present in the hub"""
  listPredefinedExperiments(hubID: ID!, projectID: ID!): [PredefinedExperimentList!]!

  """Returns predefined experiment details of selected experiments"""
  getPredefinedExperiment(hubID: ID!, experimentName: [String!]!, projectID: ID!): [PredefinedExperimentList!]!

  """Query to get experiment stats"""
  getChaosHubStats(projectID: ID!): GetChaosHubStatsResponse!
  getEnvironment(projectID: ID!, environmentID: ID!): Environment
  listEnvironments(projectID: ID!, request: ListEnvironmentRequest): ListEnvironmentResponse

  """Returns the git configuration for gitops"""
  getGitOpsDetails(projectID: ID!): GitConfigResponse!
  listImageRegistry(projectID: String!): [ImageRegistryResponse!]
  getImageRegistry(projectID: String!): ImageRegistryResponse!

  """Returns the list of Probes based on various filter parameters"""
  listProbes(projectID: ID!, infrastructureType: InfrastructureType, probeNames: [ID!], filter: ProbeFilterInput): [Probe]!

  """
  Returns a single Probe based on ProbeName and various filter parameters
  """
  getProbe(projectID: ID!, probeName: ID!): Probe!

  """
  Returns the Probe YAML based on ProbeName which can be used in ChaosEngine manifest
  """
  getProbeYAML(projectID: ID!, request: GetProbeYAMLRequest!): String!

  """Returns all the reference of the Probe based on ProbeName"""
  getProbeReference(projectID: ID!, probeName: ID!): GetProbeReferenceResponse!

  """Returns all the Probes attached to the requested Experiment Run"""
  getProbesInExperimentRun(projectID: ID!, experimentRunID: String!, faultName: String!): [GetProbesInExperimentRunResponse]!

  """Validates if a probe is already present, returns true if unique"""
  validateUniqueProbe(projectID: ID!, probeName: ID!): Boolean!
}

"""Defines the Recent Executions of experiment referenced by the Probe"""
type RecentExecutions {
  """Fault name"""
  faultName: String!

  """Probe mode"""
  mode: Mode!

  """Execution History"""
  executionHistory: [ExecutionHistory!]!
}

type RecentExperimentRun implements Audit {
  """ID of the experiment run which is to be queried"""
  experimentRunID: ID!

  """Phase of the experiment run"""
  phase: String!

  """Resiliency score of the experiment"""
  resiliencyScore: Float

  """Timestamp when the experiment was last updated"""
  updatedAt: String!

  """Timestamp when the experiment was created"""
  createdAt: String!

  """User who created the experiment run"""
  createdBy: UserDetails

  """User who updated the experiment run"""
  updatedBy: UserDetails

  """runSequence is the sequence number of experiment run"""
  runSequence: Int!
}

"""Defines the details for the new infra being connected"""
input RegisterInfraRequest {
  """Name of the infra"""
  name: String!

  """Environment ID for the infra"""
  environmentID: String!

  """Type of Infra : internal/external"""
  infrastructureType: InfrastructureType!

  """Description of the infra"""
  description: String

  """Infra Platform Name eg. GKE,AWS, Others"""
  platformName: String!

  """Namespace where the infra is being installed"""
  infraNamespace: String

  """Name of service account used by infra"""
  serviceAccount: String

  """Scope of the infra : ns or infra"""
  infraScope: String!

  """
  Bool value indicating whether infra ns used already exists on infra or not
  """
  infraNsExists: Boolean

  """
  Bool value indicating whether service account used already exists on infra or not
  """
  infraSaExists: Boolean

  """Bool value indicating whether infra will skip ssl checks or not"""
  skipSsl: Boolean

  """Node selectors used by infra"""
  nodeSelector: String

  """Node tolerations used by infra"""
  tolerations: [Toleration]

  """Tags of the infra"""
  tags: [String!]
}

"""Response received for registering a new infra"""
type RegisterInfraResponse {
  """Token used to verify and retrieve the infra manifest"""
  token: String!

  """Unique ID for the newly registered infra"""
  infraID: String!

  """Infra name as sent in request"""
  name: String!

  """Infra Manifest"""
  manifest: String!
}

type ResilienceScoreCategory {
  """Lower bound of the range(inclusive)"""
  id: Int!

  """
  total experiments with avg resilience score between lower bound and upper bound(exclusive)
  """
  count: Int!
}

interface ResourceDetails {
  name: String!
  description: String
  tags: [String!]
}

type RunChaosExperimentResponse {
  notifyID: ID!
}

"""Defines the SSHKey details"""
type SSHKey {
  """Public SSH key authenticating into git repository"""
  publicKey: String!

  """Private SSH key authenticating into git repository"""
  privateKey: String!
}

"""Defines the details for a chaos experiment"""
input SaveChaosExperimentRequest {
  """ID of the experiment"""
  id: String!

  """Type of the experiment"""
  type: ExperimentType

  """Name of the experiment"""
  name: String!

  """Description of the experiment"""
  description: String!

  """Manifest of the experiment"""
  manifest: String!

  """ID of the target infrastructure in which the experiment will run"""
  infraID: ID!

  """Tags of the infrastructure"""
  tags: [String!]
}

enum ScheduleType {
  CRON
  NON_CRON
  ALL
}

"""Response received for fetching GQL server version"""
type ServerVersionResponse {
  """Returns server version key"""
  key: String!

  """Returns server version value"""
  value: String!
}

type Spec {
  displayName: String!
  categoryDescription: String!
  keywords: [String!]!
  maturity: String!
  maintainers: [Maintainer!]!
  minKubeVersion: String!
  provider: Provider!
  links: [Link!]!
  faults: [FaultList!]!
  experiments: [String!]
  chaosExpCRDLink: String!
  platforms: [String!]!
  chaosType: String
}

"""Status defines whether a probe is pass or fail"""
type Status {
  """Verdict defines the verdict of the probe, range: Passed, Failed, N/A"""
  verdict: ProbeVerdict!

  """Description defines the description of probe status"""
  description: String
}

"""Defines the request for stopping a experiment"""
type StopExperimentRunsRequest {
  projectID: ID!

  """ID of the experiment to be stopped"""
  experimentID: String!

  """ID of the experiment run to be stopped"""
  experimentRunID: String
}

type Subscription {
  """Listens infra events from the graphql server"""
  getInfraEvents(projectID: String!): InfraEventResponse!

  """Listens infra operation request from the graphql server"""
  infraConnect(request: InfraIdentity!): InfraActionResponse!

  """Returns experiment logs from the pods"""
  getPodLog(request: PodLogRequest!): PodLogResponse!

  """Returns a kubernetes object given an input"""
  getKubeObject(request: KubeObjectRequest!): KubeObjectResponse!
}

input Toleration {
  tolerationSeconds: Int
  key: String
  operator: String
  effect: String
  value: String
}

input UpdateChaosHubRequest {
  """ID of the chaos hub"""
  id: String!

  """Name of the chaos hub"""
  name: String!

  """Description of the infra"""
  description: String

  """Tags of the infra"""
  tags: [String!]

  """URL of the git repository"""
  repoURL: String!

  """Branch of the git repository"""
  repoBranch: String!

  """Bool value indicating whether the hub is private or not."""
  isPrivate: Boolean!

  """Type of authentication used: 	BASIC, SSH,	TOKEN"""
  authType: AuthType!

  """Token for authentication of private chaos hub"""
  token: String

  """Git username"""
  userName: String

  """Git password"""
  password: String

  """Private SSH key for authenticating into private chaos hub"""
  sshPrivateKey: String

  """Public SSH key for authenticating into private chaos hub"""
  sshPublicKey: String
}

input UpdateEnvironmentRequest {
  environmentID: String!
  name: String
  description: String
  tags: [String]
  type: EnvironmentType
}

"""UpdateStatus represents if infra needs to be updated"""
enum UpdateStatus {
  AVAILABLE
  MANDATORY
  NOT_REQUIRED
}

type UserDetails {
  userID: String!
  username: String!
  email: String!
}

"""
Defines the details of the weightages of each chaos fault in the experiment
"""
type Weightages {
  """Name of the fault"""
  faultName: String!

  """Weightage of the experiment"""
  weightage: Int!
}

"""
Defines the details of the weightages of each chaos fault in the experiment
"""
input WeightagesInput {
  """Name of the fault"""
  faultName: String!

  """Weightage of the fault"""
  weightage: Int!
}

input Workload {
  name: String!
  kind: String!
  namespace: String!
}`,pn=I_(),Ba=Gs(js.DIRECTIVES,[]);var Nf;const f_=Ks((Nf=pn.getQueryType())==null?void 0:Nf.getFields());var Af;const p_=Ks((Af=pn.getMutationType())==null?void 0:Af.getFields());var xf;const h_=Ks((xf=pn.getSubscriptionType())==null?void 0:xf.getFields()),ou=Ft.keyBy(Up(),r=>r.name.toLocaleLowerCase()),d_=Ft.mapValues(ou,r=>{const n=Ba.find(t=>(t==null?void 0:t.name)===r.name||(t==null?void 0:t.name)==="*");return n?n.args.some(t=>t==="*")?r.args:n.args.map(t=>r.args.find(o=>o.name===t)).filter(t=>!!t):[]}),g_=Ks(pn.getTypeMap()),m_=a_(pn);function Ks(r){return Ft.mapKeys(r||{},(n,t)=>t.toLocaleLowerCase())}function D_(){return Ft.size(pn.getTypeMap())<=10}function v_(){return[wa("Queries",pn.getQueryType()),wa("Mutations",pn.getMutationType()),wa("Subscriptions",pn.getSubscriptionType()),__(),b_()].filter(r=>!!r)}function wa(r,n){return E_(r,y_(n))}function y_(r){return Ft.sortBy((r==null?void 0:r.getFields())||{},n=>n.name)}function E_(r,n){return n.length===0?null:{type:"menu",title:r,children:n.map(t=>({type:"page",title:t.name,section:r,deprecated:!!t.deprecationReason,href:Ni.joinUrlPaths(Vs(),r.toLocaleLowerCase(),t.name)}))}}function b_(){return D_()?null:{type:"menu",title:"Types",children:Ft.sortBy(Ft.map(pn.getTypeMap()),n=>n.name).filter(n=>!n.name.startsWith("__")).map(n=>({type:"page",title:n.name,section:"Types",href:Ni.joinUrlPaths(Vs(),"types",n.name)}))}}function M_(){return!!pn.getQueryType()}function U_(r){return f_[r.toLocaleLowerCase()]}function q_(){return!!pn.getMutationType()}function j_(r){return p_[r.toLocaleLowerCase()]}function G_(){return!!pn.getSubscriptionType()}function V_(r){return h_[r.toLocaleLowerCase()]}function H_(r){return g_[r.toLocaleLowerCase()]}function T_(r){return ou[r.toLocaleLowerCase()]}function W_(r){return T_(r.name)!==void 0}function Y_(){return Ft.size(ou)>0}function z_(r){return d_[r.name.toLocaleLowerCase()]||[]}function Q_(r){if(r)return m_.getFor(r)}function K_(r){return Ft.flatMap(r.getFields(),n=>({field:n,possibleDescriptions:Mp(n,r)}))}function Mp(r,n){return r?r.description?[{description:r.description,from:n}]:He(n)?n.getInterfaces().flatMap(t=>Mp(t.getFields()[r.name],t)):[]:[]}function Up(){return Ba.some(r=>(r==null?void 0:r.name)==="*")?pn.getDirectives().filter(r=>!["include","skip","deprecated","specifiedBy"].includes(r.name)):Ba.filter(r=>!!(r!=null&&r.name)).map(({name:r})=>r?pn.getDirective(r):void 0).filter(r=>!!r)}function I_(){return Sf.trim().length===0?t_(JSON.parse(JSON.stringify({__schema:{types:[]}}))):o_(Sf)}function __(){const r=Up();return r.length===0?null:{type:"menu",title:"Directives",children:r.map(n=>({type:"page",title:n.name,href:Ni.joinUrlPaths(Vs(),"directives",n.name),section:"Directives"}))}}const J_=Gs(js.APP_TITLE,"GraphQL Documentation"),qp=w_().concat(v_());A_(qp);const S_=Object.freeze(qp),X_=N_();function w_(){return Gs(js.PAGES,F_()).filter(n=>!!n).map(n=>Gp([],n))}function N_(){const r=x_();if(r)return r.href;throw new Error("No custom pages or query available to use as the root application URL. You need to provide at least one custom page or your schema should contain at least one query/mutation/subscription.")}function A_(r){function n(o,s){for(const a of o){if(a.type==="page"){s(a);continue}a.type==="menu"&&n(a.children,s)}}let t;n(r,o=>{t&&(t.next={title:o.title,section:o.section,href:o.href},o.previous={title:t.title,section:t.section,href:t.href}),t=o})}function x_(){return jp(()=>!0)}function Z_(r){return jp(n=>n.href.toLocaleLowerCase()===r.toLocaleLowerCase())}function jp(r){function n(t){for(const o of t){if(o.type==="page"&&r(o))return o;if(o.type==="menu"){const s=n(o.children);if(s)return s}}return null}return n(S_)}function Gp(r,n){if(typeof n.content=="string")return{type:"page",title:n.title,content:n.content,href:Ni.joinUrlPaths(Vs(),...r,wf(n.title))};const t=r.concat([wf(n.title)]);return{type:"menu",title:n.title,children:n.content.map(o=>({...Gp(t,o),section:n.title}))}}function wf(r){return Ni.generatePathSegment(r,new kf)}function F_(){return[{title:"Introduction",content:[{title:"Welcome",content:`
        # Welcome 🎉

        [Congratulations!](https://www.youtube.com/watch?v=1Bix44C1EzY) You have successfully created your first Magidoc website.

        Now that you are up and running, you can customize this website even further by providing some configuration inside your [magidoc.mjs ⚙️](https://magidoc.js.org/cli/magidoc-configuration). 
        If you wish to remove or modify this page, have a look at the *customPages* configuration.
        `.split(`
`).map(r=>r.trim()).join(`
`)}]}]}export{Ob as A,D_ as B,H_ as C,Q_ as D,Jt as E,et as F,je as G,Un as H,He as I,vn as J,b as K,K_ as L,gr as M,Br as N,B_ as O,Us as P,Rf as Q,Di as R,L_ as S,kf as T,ve as U,Jn as V,J_ as W,Ft as _,q_ as a,M_ as b,U_ as c,G_ as d,V_ as e,Z_ as f,j_ as g,X_ as h,Cf as i,P_ as j,Y_ as k,T_ as l,z_ as m,Vs as n,W_ as o,S_ as p,ct as q,up as r,pn as s,yn as t,Ni as u,Se as v,$_ as w,Gs as x,js as y,fi as z};
