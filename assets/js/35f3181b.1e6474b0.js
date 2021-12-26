"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2934],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,f=c["".concat(p,".").concat(m)]||c[m]||s[m]||l;return n?a.createElement(f,r(r({ref:t},d),{},{components:n})):a.createElement(f,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var u=2;u<l;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},61:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var a=n(7462),o=n(3366),l=(n(7294),n(3905)),r=["components"],i={docId:"uploadfilemultiple"},p="Upload File Multiple",u={unversionedId:"components/upload-file-multiple",id:"components/upload-file-multiple",isDocsHomePage:!1,title:"Upload File Multiple",description:"Badaso provides a component that uploads multiple files at once, namely BadasoUploadFileMultiple. Each uploaded file will be generated as base64 to be sent to the backend. When generating CRUD, the width of this component can be set in Optional Details with the following format.",source:"@site/docs/components/upload-file-multiple.md",sourceDirName:"components",slug:"/components/upload-file-multiple",permalink:"/components/upload-file-multiple",editUrl:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/docs/components/upload-file-multiple.md",tags:[],version:"current",frontMatter:{docId:"uploadfilemultiple"},sidebar:"tutorialSidebar",previous:{title:"Time",permalink:"/components/time"},next:{title:"Upload File",permalink:"/components/upload-file"}},d=[{value:"View: BadasoUploadFileMultiple",id:"view-badasouploadfilemultiple",children:[]},{value:"<code>props</code>",id:"props",children:[]}],s={toc:d};function c(e){var t=e.components,n=(0,o.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"upload-file-multiple"},"Upload File Multiple"),(0,l.kt)("p",null,"Badaso provides a component that uploads multiple files at once, namely BadasoUploadFileMultiple. Each uploaded file will be generated as base64 to be sent to the backend. When generating CRUD, the width of this component can be set in Optional Details with the following format."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'{\n    "size": "6" // 1-12 default 12\n}\n')),(0,l.kt)("h2",{id:"view-badasouploadfilemultiple"},"View: BadasoUploadFileMultiple"),(0,l.kt)("p",null,"The code below is a sample for using BadasoUploadFileMultiple on the Vue Template."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'<badaso-upload-file-multiple\n    :label="label"\n    :placeholder="placeholder"\n    v-model="model"\n    size="12"\n    :alert="error">\n</badaso-upload-file-multiple>\n')),(0,l.kt)("h2",{id:"props"},(0,l.kt)("inlineCode",{parentName:"h2"},"props")),(0,l.kt)("p",null,"Below is a list of props that this component provides."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'size: {\n    type: String,\n    default: "12",\n},\nlabel: {\n    type: String,\n    default: "Upload File Multiple",\n},\nplaceholder: {\n    type: String,\n    default: "Upload File Multiple",\n},\nvalue: {\n    type: Array,\n    default: () => {\n    return [];\n    },\n},\nadditionalInfo: {\n    type: String,\n    default: "",\n},\nalert: {\n    type: String|Array,\n    default: "",\n},\ntype: {\n    type: String,\n},\n')),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"For ",(0,l.kt)("inlineCode",{parentName:"p"},"type")," props, you can choose ",(0,l.kt)("inlineCode",{parentName:"p"},"private-only")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"shares-only"),"."))))}c.isMDXComponent=!0}}]);