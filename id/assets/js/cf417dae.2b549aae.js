"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6338],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=s(n),g=r,p=d["".concat(c,".").concat(g)]||d[g]||m[g]||o;return n?a.createElement(p,i(i({ref:t},l),{},{components:n})):a.createElement(p,i({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2389:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(9913);function o(){return(0,a.useContext)(r._)}},2924:function(e,t,n){var a=n(7294).createContext(void 0);t.Z=a},8465:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7462),r=n(3366),o=n(7294),i=n(6010),u=n(2389),c=n(5350),s={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"},l=["sources","className","alt"],m=function(e){var t=(0,u.Z)(),n=(0,c.Z)().isDarkTheme,m=e.sources,d=e.className,g=e.alt,p=void 0===g?"":g,f=(0,r.Z)(e,l),b=t?n?["dark"]:["light"]:["light","dark"];return o.createElement(o.Fragment,null,b.map((function(e){return o.createElement("img",(0,a.Z)({key:e,src:m[e],alt:p,className:(0,i.Z)(s.themedImage,s["themedImage--"+e],d)},f))})))}},5350:function(e,t,n){var a=n(7294),r=n(2924);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},4897:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return m},default:function(){return g}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(8465),u=["components"],c={sidebar_position:1,docId:"documentation",slug:"/",custom_edit_url:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/getting-started/documentation.md"},s="Pengenalan",l={unversionedId:"getting-started/documentation",id:"getting-started/documentation",isDocsHomePage:!1,title:"Pengenalan",description:"<ThemedImage",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/getting-started/documentation.md",sourceDirName:"getting-started",slug:"/",permalink:"/id/",editUrl:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/getting-started/documentation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,docId:"documentation",slug:"/",custom_edit_url:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/getting-started/documentation.md"},sidebar:"tutorialSidebar",next:{title:"Apa itu Badaso",permalink:"/id/getting-started/what-is"}},m=[{value:"Badaso Features",id:"badaso-features",children:[]}],d={toc:m};function g(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pengenalan"},"Pengenalan"),(0,o.kt)(i.Z,{alt:"Docusaurus themed image",sources:{light:"../../../../static/img/full-logo-badaso.png",dark:"../../../../static/img/full-logo-badaso-background-black.png"},mdxType:"ThemedImage"}),(0,o.kt)("p",null,"Selamat datang di dokumentasi badaso. Dokumentasi ini akan mengajari kamu cara menginstal, mengkonfigurasi, dan menggunakan badaso sehingga kamu bisa membuat hal-hal keren! \ud83d\ude0e\ud83d\ude0e\ud83d\ude0e"),(0,o.kt)("h2",{id:"badaso-features"},"Badaso Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Advanced CRUD generator"),(0,o.kt)("li",{parentName:"ul"},"API generator"),(0,o.kt)("li",{parentName:"ul"},"User management"),(0,o.kt)("li",{parentName:"ul"},"Role management"),(0,o.kt)("li",{parentName:"ul"},"Permission management"),(0,o.kt)("li",{parentName:"ul"},"Menu management"),(0,o.kt)("li",{parentName:"ul"},"Database migration management"),(0,o.kt)("li",{parentName:"ul"},"Activity logging"),(0,o.kt)("li",{parentName:"ul"},"Log UI viewer"),(0,o.kt)("li",{parentName:"ul"},"Daily database backup"),(0,o.kt)("li",{parentName:"ul"},"Media manager"),(0,o.kt)("li",{parentName:"ul"},"Masih banyak lagi.")))}g.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);