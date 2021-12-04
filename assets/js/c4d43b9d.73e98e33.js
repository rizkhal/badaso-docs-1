"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1978],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,f=u["".concat(l,".").concat(m)]||u[m]||s[m]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5574:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],d={docId:"hidden"},l="Hidden",c={unversionedId:"components/hidden",id:"components/hidden",isDocsHomePage:!1,title:"Hidden",description:"Badaso provides a hidden input component, namely BadasoHidden. When generating CRUD, the width of this component can be set in Optional Details with the following format.",source:"@site/docs/components/hidden.md",sourceDirName:"components",slug:"/components/hidden",permalink:"/components/hidden",editUrl:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/docs/components/hidden.md",tags:[],version:"current",frontMatter:{docId:"hidden"},sidebar:"tutorialSidebar",previous:{title:"Email",permalink:"/components/email"},next:{title:"Number",permalink:"/components/number"}},p=[{value:"View: BadasoHidden",id:"view-badasohidden",children:[]},{value:"<code>props</code>",id:"props",children:[]}],s={toc:p};function u(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hidden"},"Hidden"),(0,a.kt)("p",null,"Badaso provides a hidden input component, namely BadasoHidden. When generating CRUD, the width of this component can be set in Optional Details with the following format."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'{\n    "size": "6" // 1-12 default 12\n    "value": ""\n}\n')),(0,a.kt)("h2",{id:"view-badasohidden"},"View: BadasoHidden"),(0,a.kt)("p",null,"The code below is a sample for using BadasoHidden on the Vue Template."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'<badaso-hidden\n    :label="label"\n    :placeholder="placeholder"\n    v-model="model"\n    :alert="error">\n</badaso-hidden>\n')),(0,a.kt)("h2",{id:"props"},(0,a.kt)("inlineCode",{parentName:"h2"},"props")),(0,a.kt)("p",null,"The following is a list of props provided by BadasoHidden."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'size: {\n    type: String,\n    default: "12",\n},\nlabel: {\n    type: String,\n    default: "Text",\n},\nplaceholder: {\n    type: String,\n    default: "Text",\n},\nvalue: {\n    type: String,\n    required: true,\n    default: "",\n},\nadditionalInfo: {\n    type: String,\n    default: "",\n},\nalert: {\n    type: String|Array,\n    default: "",\n},\n')))}u.isMDXComponent=!0}}]);