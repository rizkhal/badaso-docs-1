"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5582],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),d=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(t),m=r,f=s["".concat(u,".").concat(m)]||s[m]||c[m]||o;return t?a.createElement(f,i(i({ref:n},p),{},{components:t})):a.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=s;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},814:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return p},default:function(){return s}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],l={docId:"email",custom_edit_url:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/components/email.md"},u="Email",d={unversionedId:"components/email",id:"components/email",isDocsHomePage:!1,title:"Email",description:"Badaso menyediakan sebuah komponen input untuk email, yaitu BadasoEmail. Pada saat generate CRUD, lebar komponen ini dapat diatur pada Optional Details dengan format seperti berikut.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/components/email.md",sourceDirName:"components",slug:"/components/email",permalink:"/id/components/email",editUrl:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/components/email.md",tags:[],version:"current",frontMatter:{docId:"email",custom_edit_url:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/components/email.md"},sidebar:"tutorialSidebar",previous:{title:"Editor",permalink:"/id/components/editor"},next:{title:"Hidden",permalink:"/id/components/hidden"}},p=[{value:"View: BadasoEmail",id:"view-badasoemail",children:[]},{value:"<code>props</code>",id:"props",children:[]}],c={toc:p};function s(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"email"},"Email"),(0,o.kt)("p",null,"Badaso menyediakan sebuah komponen input untuk email, yaitu BadasoEmail. Pada saat generate CRUD, lebar komponen ini dapat diatur pada Optional Details dengan format seperti berikut."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "size": "6" // 1-12 default 12\n}\n')),(0,o.kt)("h2",{id:"view-badasoemail"},"View: BadasoEmail"),(0,o.kt)("p",null,"Kode di bawah merupakan sampel untuk penggunaan BadasoEmail pada Vue Template."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'<badaso-email\n  :label="label"\n  :placeholder="placeholder"\n  v-model="model"\n  size="12"\n  :alert="error"\n>\n</badaso-email>\n')),(0,o.kt)("h2",{id:"props"},(0,o.kt)("inlineCode",{parentName:"h2"},"props")),(0,o.kt)("p",null,"Berikut merupakan daftar props yang disediakan komponen ini."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'size: {\n    type: String,\n    default: "12",\n},\nlabel: {\n    type: String,\n    default: "Email",\n},\nadditionalInfo: {\n    type: String,\n    default: "",\n},\nalert: {\n    type: String|Array,\n    default: "",\n},\nplaceholder: {\n    type: String,\n    default: "Email",\n},\nvalue: {\n    type: String,\n    required: true,\n    default: "",\n},\nreadonly: {\n    type: Boolean,\n    default: false,\n},\ndisabled: {\n    type: Boolean,\n    default: false,\n},\nautofocus: {\n    type: Boolean,\n    default: false,\n},\nrequired: {\n    type: Boolean,\n    default: false,\n},\n')))}s.isMDXComponent=!0}}]);