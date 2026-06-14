import{j as e}from"./ui-vendor-CUvJdy9K.js";import{c as t}from"./index-DYWI0e3s.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=t("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=t("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]),f=({url:n,title:a})=>{const r=encodeURIComponent(n),c=encodeURIComponent(a),s=[{Icon:l,label:"Dela på LinkedIn",href:`https://www.linkedin.com/sharing/share-offsite/?url=${r}`},{Icon:d,label:"Dela på Facebook",href:`https://www.facebook.com/sharer/sharer.php?u=${r}&quote=${c}`}];return e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-sm text-muted-foreground",children:"Dela:"}),s.map(({Icon:i,label:o,href:h})=>e.jsx("a",{href:h,target:"_blank",rel:"noopener noreferrer","aria-label":o,className:"w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors",children:e.jsx(i,{size:18})},o))]})};export{f as S};
