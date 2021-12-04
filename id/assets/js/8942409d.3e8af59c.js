"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7651],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),l=u(t),m=o,f=l["".concat(c,".").concat(m)]||l[m]||s[m]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=l;var d={};for(var c in n)hasOwnProperty.call(n,c)&&(d[c]=n[c]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},773:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return l}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],d={docId:"codeeditor",custom_edit_url:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/components/code-editor.md"},c="Code Editor",u={unversionedId:"components/code-editor",id:"components/code-editor",isDocsHomePage:!1,title:"Code Editor",description:"Badaso menyediakan sebuah komponen editor teks untuk input berupa kode. Saat generate CRUD untuk tipe kode, bagian Optional Details dapat diisi dengan JSON yang memiliki properti size untuk mengatur lebar container kode editor teks.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/components/code-editor.md",sourceDirName:"components",slug:"/components/code-editor",permalink:"/id/components/code-editor",editUrl:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/components/code-editor.md",tags:[],version:"current",frontMatter:{docId:"codeeditor",custom_edit_url:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/components/code-editor.md"},sidebar:"tutorialSidebar",previous:{title:"Checkbox",permalink:"/id/components/checkbox"},next:{title:"Color Picker",permalink:"/id/components/color-picker"}},p=[{value:"View: BadasoCode",id:"view-badasocode",children:[]},{value:"<code>props</code>",id:"props",children:[]}],s={toc:p};function l(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"code-editor"},"Code Editor"),(0,a.kt)("p",null,"Badaso menyediakan sebuah komponen editor teks untuk input berupa kode. Saat generate CRUD untuk tipe kode, bagian Optional Details dapat diisi dengan JSON yang memiliki properti ",(0,a.kt)("inlineCode",{parentName:"p"},"size")," untuk mengatur lebar container kode editor teks."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "size": "6" // 1-12 default 12\n}\n')),(0,a.kt)("h2",{id:"view-badasocode"},"View: BadasoCode"),(0,a.kt)("p",null,"Kode di bawah merupakan sampel untuk penggunaan BadasoCodeEditor pada Vue Template."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'<badaso-code-editor\n  :label="label"\n  :placeholder="placeholder"\n  v-model="model"\n  size="12"\n  :alert="error"\n>\n</badaso-code-editor>\n')),(0,a.kt)("h2",{id:"props"},(0,a.kt)("inlineCode",{parentName:"h2"},"props")),(0,a.kt)("p",null,"Berikut merupakan daftar props yang disediakan BadasoCodeEditor."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'value: {\n    type: String,\n    required: true,\n    default: "",\n},\nsize: {\n    type: String,\n    default: "",\n},\nlabel: {\n    type: String,\n    default: "",\n},\nadditionalInfo: {\n    type: String,\n    default: "",\n},\nalert: {\n    type: String | Array,\n    default: "",\n},\n')))}l.isMDXComponent=!0}}]);