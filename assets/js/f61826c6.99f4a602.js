"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1387],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9122:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={docId:"customizationintro",sidebar_position:2},s="Overriding Controller",c={unversionedId:"customization/overriding-controller",id:"customization/overriding-controller",isDocsHomePage:!1,title:"Overriding Controller",description:"Every CRUD generated through the CRUD generator will use the same controller. there are times when this controller needs adjustments, such as adding logic that is not provided by Badaso.",source:"@site/docs/customization/overriding-controller.md",sourceDirName:"customization",slug:"/customization/overriding-controller",permalink:"/customization/overriding-controller",editUrl:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/docs/customization/overriding-controller.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{docId:"customizationintro",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/customization/customization-intro"},next:{title:"Overriding Page",permalink:"/customization/overriding-page"}},u=[],p={toc:u};function d(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overriding-controller"},"Overriding Controller"),(0,a.kt)("p",null,"Every CRUD generated through the CRUD generator will use the same controller. there are times when this controller needs adjustments, such as adding logic that is not provided by Badaso."),(0,a.kt)("p",null,"To create a new controller and use it in the generated CRUD (overridding), there are several steps that need to be done."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a laravel controller as usual.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan make:controller NewController\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Extends the controller from ",(0,a.kt)("inlineCode",{parentName:"li"},"BadasoBaseController"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="App\\Http\\Controllers\\NewController.php"',title:'"App\\Http\\Controllers\\NewController.php"'},"<?php\n\nnamespace App\\Http\\Controllers;\nuse Uasoft\\Badaso\\Helpers\\ApiResponse;\n\nclass NewController extends Uasoft\\Badaso\\Controllers\\BadasoBaseController\n{\n    //...\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Overrides the ",(0,a.kt)("inlineCode",{parentName:"p"},"BadasoBaseController")," method. The following methods are available for overrides."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"browse"),(0,a.kt)("li",{parentName:"ul"},"read"),(0,a.kt)("li",{parentName:"ul"},"edit"),(0,a.kt)("li",{parentName:"ul"},"add"),(0,a.kt)("li",{parentName:"ul"},"delete"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Edit the new overriden CRUD at ",(0,a.kt)("inlineCode",{parentName:"p"},"CRUD Management"),", add the new controller created.\n",(0,a.kt)("img",{alt:"Docusaurus logo",src:r(4345).Z})))))}d.isMDXComponent=!0},4345:function(e,t,r){t.Z=r.p+"assets/images/override-controller-1141c30b506644cfb2eae1ec0643910e.png"}}]);