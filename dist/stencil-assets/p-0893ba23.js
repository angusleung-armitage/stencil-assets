let t=!1;const e={},n=t=>"object"==(t=typeof t)||"function"===t,l=(t,e,...l)=>{let o=null,i=!1,c=!1;const u=[],a=e=>{for(let l=0;l<e.length;l++)o=e[l],Array.isArray(o)?a(o):null!=o&&"boolean"!=typeof o&&((i="function"!=typeof t&&!n(o))&&(o+=""),i&&c?u[u.length-1].t+=o:u.push(i?s(null,o):o),c=i)};if(a(l),e){const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter((e=>t[e])).join(" "))}if("function"==typeof t)return t(null===e?{}:e,u,r);const f=s(t,null);return f.l=e,u.length>0&&(f.o=u),f},s=(t,e)=>({i:0,u:t,t:e,$:null,o:null,l:null}),o={},r={forEach:(t,e)=>t.map(i).forEach(e),map:(t,e)=>t.map(i).map(e).map(c)},i=t=>({vattrs:t.l,vchildren:t.o,vkey:t.h,vname:t.p,vtag:t.u,vtext:t.t}),c=t=>{if("function"==typeof t.vtag){const e=Object.assign({},t.vattrs);return t.vkey&&(e.key=t.vkey),t.vname&&(e.name=t.vname),l(t.vtag,e,...t.vchildren||[])}const e=s(t.vtag,t.vtext);return e.l=t.vattrs,e.o=t.vchildren,e.h=t.vkey,e.p=t.vname,e},u=new WeakMap,a=t=>"sc-"+t.m,f=(t,e,n,l)=>{if(n!==l){let s=L(t,e),o=e.toLowerCase();if("class"===e){const e=t.classList,s=$(n),o=$(l);e.remove(...s.filter((t=>t&&!o.includes(t)))),e.add(...o.filter((t=>t&&!s.includes(t))))}else if("style"===e){for(const e in n)l&&null!=l[e]||(e.includes("-")?t.style.removeProperty(e):t.style[e]="");for(const e in l)n&&l[e]===n[e]||(e.includes("-")?t.style.setProperty(e,l[e]):t.style[e]=l[e])}else s||"o"!==e[0]||"n"!==e[1]||(e="-"===e[2]?e.slice(3):L(V,o)?o.slice(2):o[2]+e.slice(3),n&&z.rel(t,e,n,!1),l&&z.ael(t,e,l,!1))}},y=/\s/,$=t=>t?t.split(y):[],h=(t,n,l,s)=>{const o=11===n.$.nodeType&&n.$.host?n.$.host:n.$,r=t&&t.l||e,i=n.l||e;for(s in r)s in i||f(o,s,r[s],void 0);for(s in i)f(o,s,r[s],i[s])},p=(t,e,n)=>{const l=e.o[n];let s,o,r=0;if(null!==l.t)s=l.$=_.createTextNode(l.t);else if(s=l.$=_.createElement(l.u),h(null,l),l.o)for(r=0;r<l.o.length;++r)o=p(t,l,r),o&&s.appendChild(o);return s},d=(t,e,n,l,s,o)=>{let r,i=t;for(;s<=o;++s)l[s]&&(r=p(null,n,s),r&&(l[s].$=r,i.insertBefore(r,e)))},m=(t,e,n,l)=>{for(;e<=n;++e)(l=t[e])&&l.$.remove()},b=(t,e)=>t.u===e.u,w=(t,e)=>{const n=e.$=t.$,l=t.o,s=e.o,o=e.t;null===o?(h(t,e),null!==l&&null!==s?((t,e,n,l)=>{let s,o=0,r=0,i=e.length-1,c=e[0],u=e[i],a=l.length-1,f=l[0],y=l[a];for(;o<=i&&r<=a;)null==c?c=e[++o]:null==u?u=e[--i]:null==f?f=l[++r]:null==y?y=l[--a]:b(c,f)?(w(c,f),c=e[++o],f=l[++r]):b(u,y)?(w(u,y),u=e[--i],y=l[--a]):b(c,y)?(w(c,y),t.insertBefore(c.$,u.$.nextSibling),c=e[++o],y=l[--a]):b(u,f)?(w(u,f),t.insertBefore(u.$,c.$),u=e[--i],f=l[++r]):(s=p(e&&e[r],n,r),f=l[++r],s&&c.$.parentNode.insertBefore(s,c.$));o>i?d(t,null==l[a+1]?null:l[a+1].$,n,l,r,a):r>a&&m(e,o,i)})(n,l,e,s):null!==s?(null!==t.t&&(n.textContent=""),d(n,null,e,s,0,s.length-1)):null!==l&&m(l,0,l.length-1)):t.t!==o&&(n.data=o)},v=(t,e)=>{e&&!t.v&&e["s-p"]&&e["s-p"].push(new Promise((e=>t.v=e)))},S=(t,e)=>{if(t.i|=16,!(4&t.i))return v(t,t.S),Y((()=>g(t,e)));t.i|=512},g=(t,e)=>{const n=t.g;return C(void 0,(()=>j(t,n,e)))},j=async(t,e,n)=>{const l=t.j,s=l["s-rc"];n&&(t=>{const e=t.M;((t,e)=>{let n=a(e);const l=q.get(n);if(t=11===t.nodeType?t:_,l)if("string"==typeof l){let e,s=u.get(t=t.head||t);s||u.set(t,s=new Set),s.has(n)||(e=_.createElement("style"),e.innerHTML=l,t.insertBefore(e,t.querySelector("link")),s&&s.add(n))}else t.adoptedStyleSheets.includes(l)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,l])})(t.j.getRootNode(),e)})(t);M(t,e),s&&(s.map((t=>t())),l["s-rc"]=void 0);{const e=l["s-p"],n=()=>k(t);0===e.length?n():(Promise.all(e).then(n),t.i|=4,e.length=0)}},M=(t,e)=>{try{e=e.render(),t.i&=-17,t.i|=2,((t,e)=>{const n=t.j,r=t.k||s(null,null),i=(t=>t&&t.u===o)(e)?e:l(null,null,e);i.u=null,i.i|=4,t.k=i,i.$=r.$=n,w(r,i)})(t,e)}catch(e){R(e,t.j)}return null},k=t=>{const e=t.j,n=t.S;64&t.i||(t.i|=64,x(e),t.O(e),n||O()),t.v&&(t.v(),t.v=void 0),512&t.i&&X((()=>S(t,!1))),t.i&=-517},O=()=>{x(_.documentElement),X((()=>(t=>{const e=z.ce("appload",{detail:{namespace:"stencil-assets"}});return t.dispatchEvent(e),e})(V)))},C=(t,e)=>t&&t.then?t.then(e):e(),x=t=>t.classList.add("hydrated"),E=(t,e,l)=>{if(e.C){const s=Object.entries(e.C),o=t.prototype;if(s.map((([t,[s]])=>{(31&s||2&l&&32&s)&&Object.defineProperty(o,t,{get(){return((t,e)=>A(this).P.get(e))(0,t)},set(l){((t,e,l,s)=>{const o=A(t),r=o.P.get(e),i=o.i,c=o.g;l=((t,e)=>null==t||n(t)?t:4&e?"false"!==t&&(""===t||!!t):1&e?t+"":t)(l,s.C[e][0]),8&i&&void 0!==r||l===r||Number.isNaN(r)&&Number.isNaN(l)||(o.P.set(e,l),c&&2==(18&i)&&S(o,!1))})(this,t,l,e)},configurable:!0,enumerable:!0})})),1&l){const e=new Map;o.attributeChangedCallback=function(t,n,l){z.jmp((()=>{const n=e.get(t);if(this.hasOwnProperty(n))l=this[n],delete this[n];else if(o.hasOwnProperty(n)&&"number"==typeof this[n]&&this[n]==l)return;this[n]=(null!==l||"boolean"!=typeof this[n])&&l}))},t.observedAttributes=s.filter((([t,e])=>15&e[0])).map((([t,n])=>{const l=n[1]||t;return e.set(l,t),l}))}}return t},P=(t,e={})=>{const n=[],l=e.exclude||[],s=V.customElements,o=_.head,r=o.querySelector("meta[charset]"),i=_.createElement("style"),c=[];let u,f=!0;Object.assign(z,e),z.N=new URL(e.resourcesUrl||"./",_.baseURI).href,t.map((t=>{t[1].map((e=>{const o={i:e[0],m:e[1],C:e[2],T:e[3]};o.C=e[2];const r=o.m,i=class extends HTMLElement{constructor(t){super(t),H(t=this,o)}connectedCallback(){u&&(clearTimeout(u),u=null),f?c.push(this):z.jmp((()=>(t=>{if(0==(1&z.i)){const e=A(t),n=e.M,l=()=>{};if(!(1&e.i)){e.i|=1;{let n=t;for(;n=n.parentNode||n.host;)if(n["s-p"]){v(e,e.S=n);break}}n.C&&Object.entries(n.C).map((([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}})),(async(t,e,n,l,s)=>{if(0==(32&e.i)){{if(e.i|=32,(s=W(n)).then){const t=()=>{};s=await s,t()}s.isProxied||(E(s,n,2),s.isProxied=!0);const t=()=>{};e.i|=8;try{new s(e)}catch(t){R(t)}e.i&=-9,t()}if(s.style){let t=s.style;const e=a(n);if(!q.has(e)){const l=()=>{};((t,e,n)=>{let l=q.get(t);D&&n?(l=l||new CSSStyleSheet,"string"==typeof l?l=e:l.replaceSync(e)):l=e,q.set(t,l)})(e,t,!!(1&n.i)),l()}}}const o=e.S,r=()=>S(e,!0);o&&o["s-rc"]?o["s-rc"].push(r):r()})(0,e,n)}l()}})(this)))}disconnectedCallback(){z.jmp((()=>{}))}componentOnReady(){return A(this).A}};o.F=t[0],l.includes(r)||s.get(r)||(n.push(r),s.define(r,E(i,o,1)))}))})),i.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",i.setAttribute("data-styles",""),o.insertBefore(i,r?r.nextSibling:o.firstChild),f=!1,c.length?c.map((t=>t.connectedCallback())):z.jmp((()=>u=setTimeout(O,30)))},N=(t,e)=>e,T=new WeakMap,A=t=>T.get(t),F=(t,e)=>T.set(e.g=t,e),H=(t,e)=>{const n={i:0,j:t,M:e,P:new Map};return n.A=new Promise((t=>n.O=t)),t["s-p"]=[],t["s-rc"]=[],T.set(t,n)},L=(t,e)=>e in t,R=(t,e)=>(0,console.error)(t,e),U=new Map,W=t=>{const e=t.m.replace(/-/g,"_"),n=t.F,l=U.get(n);return l?l[e]:import(`./${n}.entry.js`).then((t=>(U.set(n,t),t[e])),R)
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/},q=new Map,V="undefined"!=typeof window?window:{},_=V.document||{head:{}},z={i:0,N:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l),ce:(t,e)=>new CustomEvent(t,e)},B=t=>Promise.resolve(t),D=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(t){}return!1})(),G=[],I=[],J=(e,n)=>l=>{e.push(l),t||(t=!0,n&&4&z.i?X(Q):z.raf(Q))},K=t=>{for(let e=0;e<t.length;e++)try{t[e](performance.now())}catch(t){R(t)}t.length=0},Q=()=>{K(G),K(I),(t=G.length>0)&&z.raf(Q)},X=t=>B().then(t),Y=J(I,!0);export{N as F,o as H,P as b,l as h,B as p,F as r}