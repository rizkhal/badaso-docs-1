"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[883],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),l=p(t),m=a,f=l["".concat(u,".").concat(m)]||l[m]||s[m]||o;return t?r.createElement(f,c(c({ref:n},d),{},{components:t})):r.createElement(f,c({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=l;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},4885:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return l}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),c=["components"],i={docId:"command",sidebar_position:8},u="Command",p={unversionedId:"core-concept/command",id:"core-concept/command",isDocsHomePage:!1,title:"Command",description:"Creating Admin Account",source:"@site/docs/core-concept/command.md",sourceDirName:"core-concept",slug:"/core-concept/command",permalink:"/core-concept/command",editUrl:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/docs/core-concept/command.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{docId:"command",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Multi Language",permalink:"/core-concept/multi-language"},next:{title:"Database Management",permalink:"/core-concept/database-management"}},d=[{value:"Creating Admin Account",id:"creating-admin-account",children:[]},{value:"Backup",id:"backup",children:[]},{value:"Seeder",id:"seeder",children:[]}],s={toc:d};function l(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"command"},"Command"),(0,o.kt)("h2",{id:"creating-admin-account"},"Creating Admin Account"),(0,o.kt)("p",null,"Badaso provides commands to create superadmin accounts to be able to enter the dashboard page."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan badaso:admin your@email.com --create\n")),(0,o.kt)("h2",{id:"backup"},"Backup"),(0,o.kt)("p",null,"Badaso provides commands for running laravel backups. The backup configuration is contained in the file ",(0,o.kt)("inlineCode",{parentName:"p"},".env"),". This configuration includes backup files and backup disks."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan badaso:backup\n")),(0,o.kt)("h2",{id:"seeder"},"Seeder"),(0,o.kt)("p",null,"The following command is used to create seeders based on a table and its data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan badaso:generate-seeder TABLE_NAME\n")))}l.isMDXComponent=!0}}]);