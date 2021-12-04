"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[582],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(t),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return t?r.createElement(m,c(c({ref:n},p),{},{components:t})):r.createElement(m,c({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9395:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),c=["components"],i={docId:"search"},l="Search",s={unversionedId:"components/search",id:"components/search",isDocsHomePage:!1,title:"Search",description:"Badaso provides an input component for search, namely BadasoSearch. When generating CRUD, the width of this component can be set in Optional Details with the following format.",source:"@site/docs/components/search.md",sourceDirName:"components",slug:"/components/search",permalink:"/components/search",editUrl:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/docs/components/search.md",tags:[],version:"current",frontMatter:{docId:"search"},sidebar:"tutorialSidebar",previous:{title:"Relation",permalink:"/components/relation"},next:{title:"Select Multiple",permalink:"/components/select-multiple"}},p=[{value:"View: BadasoSearch",id:"view-badasosearch",children:[]},{value:"<code>props</code>",id:"props",children:[]}],u={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"search"},"Search"),(0,o.kt)("p",null,"Badaso provides an input component for search, namely BadasoSearch. When generating CRUD, the width of this component can be set in Optional Details with the following format."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "size": "6", // 1-12 default 12\n}\n')),(0,o.kt)("h2",{id:"view-badasosearch"},"View: BadasoSearch"),(0,o.kt)("p",null,"The code below is a sample for using BadasoSearch in the Vue Template."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'<badaso-search\n    :label="label"\n    :placeholder="placeholder"\n    v-model="model"\n    size="12"\n    :alert="error">\n</badaso-search>\n')),(0,o.kt)("h2",{id:"props"},(0,o.kt)("inlineCode",{parentName:"h2"},"props")),(0,o.kt)("p",null,"Below is a list of props that this component provides."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'size: {\n    type: String,\n    default: "12"\n},\nlabel: {\n    type: String,\n    default: "Search"\n},\nplaceholder: {\n    type: String,\n    default: "Search"\n},\nvalue:  {\n    type: String,\n    required: true,\n    default: \'\'\n},\nadditionalInfo: {\n    type: String,\n    default: "",\n},\nalert: {\n    type: String|Array,\n    default: "",\n},\n')))}d.isMDXComponent=!0}}]);