function m(){}function J(t,e){for(const n in e)t[n]=e[n];return t}function P(t){return t()}function M(){return Object.create(null)}function g(t){t.forEach(P)}function K(t){return typeof t=="function"}function Q(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let x;function dt(t,e){return x||(x=document.createElement("a")),x.href=e,t===x.href}function R(t){return Object.keys(t).length===0}function _t(t,e,n,i){if(t){const r=T(t,e,n,i);return t[0](r)}}function T(t,e,n,i){return t[1]&&i?J(n.ctx.slice(),t[1](i(e))):n.ctx}function ht(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],c=Math.max(e.dirty.length,r.length);for(let s=0;s<c;s+=1)u[s]=e.dirty[s]|r[s];return u}return e.dirty|r}return e.dirty}function mt(t,e,n,i,r,u){if(r){const c=T(e,n,i,u);t.p(c,r)}}function pt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let A=!1;function U(){A=!0}function V(){A=!1}function X(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function Y(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let l=0;l<e.length;l++){const a=e[l];a.claim_order!==void 0&&o.push(a)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const l=e[o].claim_order,a=(r>0&&e[n[r]].claim_order<=l?r+1:X(1,r,b=>e[n[b]].claim_order,l))-1;i[o]=n[a]+1;const f=a+1;n[f]=o,r=Math.max(f,r)}const u=[],c=[];let s=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(u.push(e[o-1]);s>=o;s--)c.push(e[s]);s--}for(;s>=0;s--)c.push(e[s]);u.reverse(),c.sort((o,l)=>o.claim_order-l.claim_order);for(let o=0,l=0;o<c.length;o++){for(;l<u.length&&c[o].claim_order>=u[l].claim_order;)l++;const a=l<u.length?u[l]:null;t.insertBefore(c[o],a)}}function Z(t,e){t.appendChild(e)}function tt(t,e){if(A){for(Y(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function yt(t,e,n){A&&!n?tt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function W(t){t.parentNode.removeChild(t)}function gt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function I(t){return document.createElement(t)}function C(t){return document.createTextNode(t)}function bt(){return C(" ")}function xt(){return C("")}function B(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function et(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function wt(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:et(t,e,n)}function nt(t){return Array.from(t.childNodes)}function it(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function D(t,e,n,i,r=!1){it(t);const u=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(e(s)){const o=n(s);return o===void 0?t.splice(c,1):t[c]=o,r||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(e(s)){const o=n(s);return o===void 0?t.splice(c,1):t[c]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function rt(t,e,n,i){return D(t,r=>r.nodeName===e,r=>{const u=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];n[s.name]||u.push(s.name)}u.forEach(c=>r.removeAttribute(c))},()=>i(e))}function $t(t,e,n){return rt(t,e,n,I)}function ot(t,e){return D(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>C(e),!0)}function Et(t){return ot(t," ")}function kt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function At(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let w;function ct(){if(w===void 0){w=!1;try{typeof window!="undefined"&&window.parent&&window.parent.document}catch{w=!0}}return w}function St(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=I("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=ct();let u;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",u=B(window,"message",c=>{c.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{u=B(i.contentWindow,"resize",e)}),Z(t,i),()=>{(r||u&&i.contentWindow)&&u(),W(i)}}function jt(t,e=document.body){return Array.from(e.querySelectorAll(t))}let y;function p(t){y=t}function q(){if(!y)throw new Error("Function called outside component initialization");return y}function Nt(t){q().$$.on_mount.push(t)}function Ct(t){q().$$.after_update.push(t)}function qt(t,e){q().$$.context.set(t,e)}const h=[],L=[],E=[],O=[],F=Promise.resolve();let j=!1;function H(){j||(j=!0,F.then(G))}function zt(){return H(),F}function N(t){E.push(t)}const S=new Set;let $=0;function G(){const t=y;do{for(;$<h.length;){const e=h[$];$++,p(e),st(e.$$)}for(p(null),h.length=0,$=0;L.length;)L.pop()();for(let e=0;e<E.length;e+=1){const n=E[e];S.has(n)||(S.add(n),n())}E.length=0}while(h.length);for(;O.length;)O.pop()();j=!1,S.clear(),p(t)}function st(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}const k=new Set;let d;function vt(){d={r:0,c:[],p:d}}function Mt(){d.r||g(d.c),d=d.p}function lt(t,e){t&&t.i&&(k.delete(t),t.i(e))}function Bt(t,e,n,i){if(t&&t.o){if(k.has(t))return;k.add(t),d.c.push(()=>{k.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}function Lt(t,e){const n={},i={},r={$$scope:1};let u=t.length;for(;u--;){const c=t[u],s=e[u];if(s){for(const o in c)o in s||(i[o]=1);for(const o in s)r[o]||(n[o]=s[o],r[o]=1);t[u]=s}else for(const o in c)r[o]=1}for(const c in i)c in n||(n[c]=void 0);return n}function Ot(t){return typeof t=="object"&&t!==null?t:{}}function Pt(t){t&&t.c()}function Tt(t,e){t&&t.l(e)}function ut(t,e,n,i){const{fragment:r,on_mount:u,on_destroy:c,after_update:s}=t.$$;r&&r.m(e,n),i||N(()=>{const o=u.map(P).filter(K);c?c.push(...o):g(o),t.$$.on_mount=[]}),s.forEach(N)}function ft(t,e){const n=t.$$;n.fragment!==null&&(g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function at(t,e){t.$$.dirty[0]===-1&&(h.push(t),H(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Wt(t,e,n,i,r,u,c,s=[-1]){const o=y;p(t);const l=t.$$={fragment:null,ctx:null,props:u,update:m,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:M(),dirty:s,skip_bound:!1,root:e.target||o.$$.root};c&&c(l.root);let a=!1;if(l.ctx=n?n(t,e.props||{},(f,b,...z)=>{const v=z.length?z[0]:b;return l.ctx&&r(l.ctx[f],l.ctx[f]=v)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](v),a&&at(t,f)),b}):[],l.update(),a=!0,g(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){U();const f=nt(e.target);l.fragment&&l.fragment.l(f),f.forEach(W)}else l.fragment&&l.fragment.c();e.intro&&lt(t.$$.fragment),ut(t,e.target,e.anchor,e.customElement),V(),G()}p(o)}class It{$destroy(){ft(this,1),this.$destroy=m}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!R(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const _=[];function Dt(t,e=m){let n;const i=new Set;function r(s){if(Q(t,s)&&(t=s,n)){const o=!_.length;for(const l of i)l[1](),_.push(l,t);if(o){for(let l=0;l<_.length;l+=2)_[l][0](_[l+1]);_.length=0}}}function u(s){r(s(t))}function c(s,o=m){const l=[s,o];return i.add(l),i.size===1&&(n=e(r)||m),s(t),()=>{i.delete(l),i.size===0&&(n(),n=null)}}return{set:r,update:u,subscribe:c}}export{Ot as A,ft as B,J as C,Dt as D,zt as E,_t as F,mt as G,pt as H,ht as I,tt as J,m as K,wt as L,gt as M,dt as N,N as O,St as P,jt as Q,It as S,nt as a,et as b,$t as c,W as d,I as e,At as f,yt as g,ot as h,Wt as i,kt as j,bt as k,xt as l,Et as m,vt as n,Bt as o,Mt as p,lt as q,qt as r,Q as s,C as t,Ct as u,Nt as v,Pt as w,Tt as x,ut as y,Lt as z};
