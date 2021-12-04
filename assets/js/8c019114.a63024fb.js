"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6452],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1326:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={docId:"routing",sidebar_position:2},c="Routing",u={unversionedId:"core-concept/routing",id:"core-concept/routing",isDocsHomePage:!1,title:"Routing",description:"This page explains the frontend and backend routing for the generated CRUD.",source:"@site/docs/core-concept/routing.md",sourceDirName:"core-concept",slug:"/core-concept/routing",permalink:"/core-concept/routing",editUrl:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/docs/core-concept/routing.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{docId:"routing",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Storage",permalink:"/core-concept/storage"},next:{title:"User, Role And Permission",permalink:"/core-concept/role-and-permission"}},p=[{value:"CRUD Generated Routes",id:"crud-generated-routes",children:[{value:"Backend",id:"backend",children:[]},{value:"Frontend",id:"frontend",children:[]}]}],s={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"routing"},"Routing"),(0,o.kt)("p",null,"This page explains the frontend and backend routing for the generated CRUD."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},".env")," configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md",metastring:'title=".env"',title:'".env"'},"MIX_API_ROUTE_PREFIX=\nMIX_ADMIN_PANEL_ROUTE_PREFIX=\n")),(0,o.kt)("h2",{id:"crud-generated-routes"},"CRUD Generated Routes"),(0,o.kt)("h3",{id:"backend"},"Backend"),(0,o.kt)("p",null,"The following is the type of API URL called for the backend."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Browse/Index (List) : GET")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"BASE_URL/MIX_API_ROUTE_PREFIX/v1/entities/TABLE_SLUG\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add/Create : POST")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"BASE_URL/MIX_API_ROUTE_PREFIX/v1/entities/TABLE_SLUG/add\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Read/Detail : GET")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"BASE_URL/MIX_API_ROUTE_PREFIX/v1/entities/TABLE_SLUG/read\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Edit/Update : PUT")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"BASE_URL/MIX_API_ROUTE_PREFIX/v1/entities/TABLE_SLUG/edit\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Delete/Remove : DELETE")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"BASE_URL/MIX_API_ROUTE_PREFIX/v1/entities/TABLE_SLUG/delete\n")),(0,o.kt)("h3",{id:"frontend"},"Frontend"),(0,o.kt)("p",null,"The following is the type of API URL called for the Frontend."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Browse/Index (List)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"BASE_URL/MIX_ADMIN_PANEL_ROUTE_PREFIX/main/TABLE_SLUG\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add/Create")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"BASE_URL/MIX_ADMIN_PANEL_ROUTE_PREFIX/main/TABLE_SLUG/add\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Read/Detail")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"BASE_URL/MIX_ADMIN_PANEL_ROUTE_PREFIX/main/TABLE_SLUG/ID/detail\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Edit/Update")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"BASE_URL/MIX_ADMIN_PANEL_ROUTE_PREFIX/main/TABLE_SLUG/ID/edit\n")))}d.isMDXComponent=!0}}]);