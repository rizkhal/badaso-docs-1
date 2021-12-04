"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5845],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||a;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5363:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],u={docId:"number"},l="Number",p={unversionedId:"components/number",id:"components/number",isDocsHomePage:!1,title:"Number",description:"Badaso provides an input component in the form of numbers, namely BadasoNumber. When generating CRUD, the width of this component can be set in Optional Details with the following format.",source:"@site/docs/components/number.md",sourceDirName:"components",slug:"/components/number",permalink:"/components/number",editUrl:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/docs/components/number.md",tags:[],version:"current",frontMatter:{docId:"number"},sidebar:"tutorialSidebar",previous:{title:"Hidden",permalink:"/components/hidden"},next:{title:"Password",permalink:"/components/password"}},c=[{value:"View: BadasoNumber",id:"view-badasonumber",children:[]},{value:"<code>props</code>",id:"props",children:[]}],s={toc:c};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"number"},"Number"),(0,a.kt)("p",null,"Badaso provides an input component in the form of numbers, namely BadasoNumber. When generating CRUD, the width of this component can be set in Optional Details with the following format."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "size": "6", // 1-12 default 12\n}\n')),(0,a.kt)("h2",{id:"view-badasonumber"},"View: BadasoNumber"),(0,a.kt)("p",null,"The code below is a sample for using BadasoNumber in the Vue Template."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'<badaso-number\n    :label="label"\n    :placeholder="placeholder"\n    v-model="model"\n    size="12"\n    :alert="error">\n</badaso-number>\n')),(0,a.kt)("h2",{id:"props"},(0,a.kt)("inlineCode",{parentName:"h2"},"props")),(0,a.kt)("p",null,"Below is a list of props that this component provides."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'size: {\n    type: String,\n    default: "12"\n},\nlabel: {\n    type: String,\n    default: "Number"\n},\nplaceholder: {\n    type: String,\n    default: "Number"\n},\nvalue:  {\n    type: String,\n    required: true,\n    default: \'\'\n},\nadditionalInfo: {\n    type: String,\n    default: "",\n},\nalert: {\n    type: String|Array,\n    default: "",\n},\n')))}m.isMDXComponent=!0}}]);