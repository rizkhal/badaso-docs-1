"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6338],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return a?r.createElement(g,i(i({ref:t},p),{},{components:a})):r.createElement(g,i({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2389:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(7294),n=a(9913);function o(){return(0,r.useContext)(n._)}},2924:function(e,t,a){var r=a(7294).createContext(void 0);t.Z=r},8465:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(7462),n=a(3366),o=a(7294),i=a(6010),l=a(2389),s=a(5350),u={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"},p=["sources","className","alt"],c=function(e){var t=(0,l.Z)(),a=(0,s.Z)().isDarkTheme,c=e.sources,m=e.className,d=e.alt,g=void 0===d?"":d,h=(0,n.Z)(e,p),k=t?a?["dark"]:["light"]:["light","dark"];return o.createElement(o.Fragment,null,k.map((function(e){return o.createElement("img",(0,r.Z)({key:e,src:c[e],alt:g,className:(0,i.Z)(u.themedImage,u["themedImage--"+e],m)},h))})))}},5350:function(e,t,a){var r=a(7294),n=a(2924);t.Z=function(){var e=(0,r.useContext)(n.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},4897:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=a(8465),l=["components"],s={sidebar_position:1,docId:"documentation",slug:"/",custom_edit_url:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/getting-started/documentation.md"},u="Pengenalan",p={unversionedId:"getting-started/documentation",id:"getting-started/documentation",isDocsHomePage:!1,title:"Pengenalan",description:"<ThemedImage",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/getting-started/documentation.md",sourceDirName:"getting-started",slug:"/",permalink:"/id/",editUrl:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/getting-started/documentation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,docId:"documentation",slug:"/",custom_edit_url:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/getting-started/documentation.md"},sidebar:"tutorialSidebar",next:{title:"Persyaratan",permalink:"/id/getting-started/prerequisite"}},c=[{value:"Why badaso ?",id:"why-badaso-",children:[]},{value:"Badaso features",id:"badaso-features",children:[]},{value:"Support Badaso",id:"support-badaso",children:[]},{value:"Community support",id:"community-support",children:[]},{value:"Credits",id:"credits",children:[]}],m={toc:c};function d(e){var t=e.components,s=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pengenalan"},"Pengenalan"),(0,o.kt)(i.Z,{alt:"Docusaurus themed image",sources:{light:"/img/full-logo-badaso.png",dark:"/img/full-logo-badaso-background-black.png"},mdxType:"ThemedImage"}),(0,o.kt)("h3",{align:"center"},"The API & platform builder, build your apps 10x faster, even more."),(0,o.kt)("p",{align:"center"},"It's open source & 100% free !"),(0,o.kt)("p",{align:"center"},(0,o.kt)("a",{href:"https://badaso-demo.uatech.co.id",target:"_blank"},"Try live demo")),(0,o.kt)("p",{align:"center"},(0,o.kt)("a",{href:"https://packagist.org/packages/badaso/core"},(0,o.kt)("img",{src:"https://img.shields.io/packagist/dt/badaso/core",alt:"Total Downloads"})),(0,o.kt)("a",{href:"https://packagist.org/packages/badaso/core"},(0,o.kt)("img",{src:"https://img.shields.io/packagist/v/badaso/core",alt:"Latest Stable Version"}))),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Docusaurus logo",src:a(1639).Z})),(0,o.kt)("h3",{id:"why-badaso-"},"Why badaso ?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"100% FREE")," - No need for extra thinking about finance to adopt badaso"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Modern PWA  Dashboard")," - Fast and SPA based on Vue.js with PWA technology"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Native installation")," - Lazy to open the browser? Install badaso on Windows, Linux, MacOS, Android & iOS "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Working offline")," - No more f*cked with a bad internet connection, badaso can running offline"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Headless")," - Badaso use JWT authentication & authorization as default"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Seamless integration")," - Badaso use Rest API & GraphQL, no need to develop API for your mobile & IoT"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Modern design")," - Keep your system design amazing and up to date"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Secure")," - Build based on laravel make it secure as laravel"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Modular")," - Install custom library in seconds like your other laravel projects"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Scalable")," - Like your other laravel projects "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Easy maintenance")," - Like your other laravel projects "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Long time support")," - Great choice for your long-term project, maintain by ",(0,o.kt)("a",{parentName:"li",href:"https://soft.uatech.co.id"},"uasoft"))),(0,o.kt)("h3",{id:"badaso-features"},"Badaso features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Advanced CRUD generator")," - Build your application faster and be more productive "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"API generator")," - Integrate your application (mobile, desktop, even IoT) through Rest API & GraphQL"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"User management")," - Manage your application user "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Role management")," - Your application user can have a different role"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Permission management")," - Each role has different access permission "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Menu management")," - Manage your application menu so easy and faster "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Database management")," - Handle your database migration via application "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Activity logging")," - Keep your system safe, know who makes the trouble "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Log UI viewer")," - No need to open your server to check the log, just stay focused on your application"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Daily database backup")," - Keep your valuable database safety "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Media manager")," - Manage your local & cloud media via application "),(0,o.kt)("li",{parentName:"ul"},"Many more!")),(0,o.kt)("h2",{id:"support-badaso"},"Support Badaso"),(0,o.kt)("p",null,"To keep badaso up to date and support this awesome long-term project you also can donate to badaso."),(0,o.kt)("p",null,"We appreciate it so much and will keep badaso up to update and support your awesome long-term projects!"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://opencollective.com/badaso"},"Become a backer/sponsors on OpenCollective")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/sponsors/uasoft-indonesia"},"Become a sponsor via github")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://paypal.me/rizkiheryandi"},"One-time donation via Paypal")),(0,o.kt)("li",{parentName:"ul"},"Direct (contact ",(0,o.kt)("a",{parentName:"li",href:"mailto:hello@uatech.co.id"},"hello@uatech.co.id"),")")),(0,o.kt)("p",null,"Good financial support will make badaso keep up to date and keep support your awesome long-term projects!"),(0,o.kt)("p",null,"Thanks to all backers & sponsors!"),(0,o.kt)("h2",{id:"community-support"},"Community support"),(0,o.kt)("p",null,"For general help using badaso, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://badaso-docs.uatech.co.id/docs/"},"official badaso documentation"),". "),(0,o.kt)("p",null,"For additional help, you can use one of these channels to ask a question:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/uasoft-indonesia/badaso/discussions"},"Github discussion")," (Questions and Discussions)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/uasoft-indonesia/badaso/issues"},"Github issues")," (Bug reports, Contributions)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://facebook.com/groups/badaso"},"Facebook groups")," (Discussion for active facebook users)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://t.me/badaso_developers"},"Telegram groups")," (Discussion for active telegram users)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://youtube.com/playlist?list=PLO-UCDr2KEwPZPeQvjLmj-RVfNHycttPl"},"Youtube tutorial")," (For visual learner)")),(0,o.kt)("h2",{id:"credits"},"Credits"),(0,o.kt)("p",null,"Thanks to these awesome projects that make badaso awesome :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/laravel/laravel"},"laravel/laravel")," (Framework)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/vuejs/vue"},"vuejs/vue")," (Javascript framework)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/lusaxweb/vuesax"},"lusaxweb/vuesax")," (Vue component)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/spatie/laravel-backup"},"spatie/laravel-backup")," (automation production database & application backup)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/spatie/laravel-activitylog"},"spatie/laravel-activitylog")," (logging dashboard activity)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/spatie/flysystem-dropbox"},"spatie/flysystem-dropbox")," (dropbox cloud storage integration)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nao-pon/flysystem-google-drive"},"nao-pon/flysystem-google-drive")," (google drive cloud storage integration)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/league/flysystem-aws-s3-v3"},"league/flysystem-aws-s3-v3")," (aws S3 cloud storage integration)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/guzzlehttp/guzzle"},"guzzlehttp/guzzle")," (advanced http request)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/webpatser/laravel-uuid"},"webpatser/laravel-uuid")," (uuid provider)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/lcobucci/jwt"},"lcobucci/jwt")," (JWT provider)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tymon/jwt-auth"},"tymon/jwt-auth")," (JWT auth provider)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/arcanedev/log-viewer%5D"},"arcanedev/log-viewer")," (application logging GUI)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/the-control-group/voyager"},"the-control-group/voyager")," (reference)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/UniSharp/laravel-filemanager"},"UniSharp/laravel-filemanager")," (file manager)"),(0,o.kt)("li",{parentName:"ul"},"Contact us for credit ",(0,o.kt)("a",{parentName:"li",href:"https://t.me/rizkiheryandi"},"here"),".")),(0,o.kt)("p",null,"All financial support that badaso gets will also shared to project above to support the ecosystem and make badaso keep up to date and keep your awesome long-term projects running."))}d.isMDXComponent=!0},6010:function(e,t,a){function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}a.d(t,{Z:function(){return n}})},1639:function(e,t,a){t.Z=a.p+"assets/images/badaso-preview-06980b3d3fe067f6d2a95f5a47ced9e0.png"}}]);