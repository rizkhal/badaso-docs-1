"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8535],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),p=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(t),m=a,f=l["".concat(d,".").concat(m)]||l[m]||c[m]||o;return t?r.createElement(f,s(s({ref:n},u),{},{components:t})):r.createElement(f,s({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=l;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},9779:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return u},default:function(){return l}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),s=["components"],i={docId:"password",custom_edit_url:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/components/password.md"},d="Password",p={unversionedId:"components/password",id:"components/password",isDocsHomePage:!1,title:"Password",description:"Badaso menyediakan sebuah komponen untuk input password, yaitu BadasoPassword. Pada saat generate CRUD, lebar komponen ini dapat diatur pada Optional Details dengan format seperti berikut.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/components/password.md",sourceDirName:"components",slug:"/components/password",permalink:"/id/components/password",editUrl:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/components/password.md",tags:[],version:"current",frontMatter:{docId:"password",custom_edit_url:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/components/password.md"},sidebar:"tutorialSidebar",previous:{title:"Number",permalink:"/id/components/number"},next:{title:"Radio",permalink:"/id/components/radio"}},u=[{value:"View: BadasoPassword",id:"view-badasopassword",children:[]},{value:"<code>props</code>",id:"props",children:[]}],c={toc:u};function l(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"password"},"Password"),(0,o.kt)("p",null,"Badaso menyediakan sebuah komponen untuk input password, yaitu BadasoPassword. Pada saat generate CRUD, lebar komponen ini dapat diatur pada Optional Details dengan format seperti berikut."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "size": "6" // 1-12 default 12\n}\n')),(0,o.kt)("h2",{id:"view-badasopassword"},"View: BadasoPassword"),(0,o.kt)("p",null,"Kode di bawah merupakan sampel untuk penggunaan BadasoPassword pada Vue Template."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'<badaso-password\n  :label="label"\n  :placeholder="placeholder"\n  v-model="model"\n  size="12"\n  :alert="error"\n>\n</badaso-password>\n')),(0,o.kt)("h2",{id:"props"},(0,o.kt)("inlineCode",{parentName:"h2"},"props")),(0,o.kt)("p",null,"Berikut merupakan daftar props yang disediakan komponen ini."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'size: {\n    type: String,\n    default: "12"\n},\nlabel: {\n    type: String,\n    default: "Password"\n},\nplaceholder: {\n    type: String,\n    default: "Password"\n},\nvalue:  {\n    type: String,\n    required: true,\n    default: \'\'\n},\nadditionalInfo: {\n    type: String,\n    default: "",\n},\nalert: {\n    type: String|Array,\n    default: "",\n},\n')))}l.isMDXComponent=!0}}]);