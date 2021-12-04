"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7369],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2558:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={docId:"select"},c="Select",s={unversionedId:"components/select",id:"components/select",isDocsHomePage:!1,title:"Select",description:"Badaso provides an input component in the form of a dropdown option, namely BadasoSelect. When generating CRUD, the width of this component can be set in Optional Details with the format shown in the code below. To use radio when creating a CRUD, the items property in Optional Details is required.",source:"@site/docs/components/select.md",sourceDirName:"components",slug:"/components/select",permalink:"/components/select",editUrl:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/docs/components/select.md",tags:[],version:"current",frontMatter:{docId:"select"},sidebar:"tutorialSidebar",previous:{title:"Select Multiple",permalink:"/components/select-multiple"},next:{title:"Slider",permalink:"/components/slider"}},p=[{value:"View: BadasoSelect",id:"view-badasoselect",children:[]},{value:"<code>props</code>",id:"props",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"select"},"Select"),(0,a.kt)("p",null,"Badaso provides an input component in the form of a dropdown option, namely BadasoSelect. When generating CRUD, the width of this component can be set in Optional Details with the format shown in the code below. To use radio when creating a CRUD, the items property in Optional Details is required."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'{\n    "size": "6" // 1-12 default 12\n    "items": [\n        {\n            "label": "This is label",\n            "value": "this_is_value"\n        }\n    ]\n}\n')),(0,a.kt)("h2",{id:"view-badasoselect"},"View: BadasoSelect"),(0,a.kt)("p",null,"The code below is a sample for using BadasoSelect on the Vue Template."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'<badaso-select\n    :label="label"\n    :placeholder="placeholder"\n    v-model="model"\n    size="12"\n    :alert="error"\n    :items="items">\n</badaso-select>\n')),(0,a.kt)("h2",{id:"props"},(0,a.kt)("inlineCode",{parentName:"h2"},"props")),(0,a.kt)("p",null,"Below is a list of props that this component provides."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'size: {\n    type: String,\n    default: "12",\n},\nlabel: {\n    type: String,\n    default: "Select",\n},\nplaceholder: {\n    type: String,\n    default: "Select",\n},\nvalue: {\n    type: String,\n    required: true,\n    default: "",\n},\nitems: {\n    type: Array,\n    required: true,\n},\nadditionalInfo: {\n    type: String,\n    default: "",\n},\nalert: {\n    type: String|Array,\n    default: "",\n},\n')))}d.isMDXComponent=!0}}]);