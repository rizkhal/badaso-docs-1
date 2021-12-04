"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2852],{3905:function(a,e,t){t.d(e,{Zo:function(){return p},kt:function(){return m}});var n=t(7294);function r(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function i(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function l(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function s(a,e){if(null==a)return{};var t,n,r=function(a,e){if(null==a)return{};var t,n,r={},i=Object.keys(a);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||(r[t]=a[t]);return r}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(r[t]=a[t])}return r}var o=n.createContext({}),u=function(a){var e=n.useContext(o),t=e;return a&&(t="function"==typeof a?a(e):l(l({},e),a)),t},p=function(a){var e=u(a.components);return n.createElement(o.Provider,{value:e},a.children)},d={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(a,e){var t=a.components,r=a.mdxType,i=a.originalType,o=a.parentName,p=s(a,["components","mdxType","originalType","parentName"]),c=u(t),m=r,k=c["".concat(o,".").concat(m)]||c[m]||d[m]||i;return t?n.createElement(k,l(l({ref:e},p),{},{components:t})):n.createElement(k,l({ref:e},p))}));function m(a,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var i=t.length,l=new Array(i);l[0]=c;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=a,s.mdxType="string"==typeof a?a:r,l[1]=s;for(var u=2;u<i;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4534:function(a,e,t){t.r(e),t.d(e,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var n=t(7462),r=t(3366),i=(t(7294),t(3905)),l=["components"],s={sidebar_position:4,docId:"installation",custom_edit_url:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/getting-started/installation.md"},o="Instalasi",u={unversionedId:"getting-started/installation",id:"getting-started/installation",isDocsHomePage:!1,title:"Instalasi",description:"Pada aplikasi baru",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/id/getting-started/installation",editUrl:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/getting-started/installation.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,docId:"installation",custom_edit_url:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/getting-started/installation.md"},sidebar:"tutorialSidebar",previous:{title:"Persyaratan",permalink:"/id/getting-started/prerequisite"},next:{title:"Perbarui",permalink:"/id/getting-started/upgrading"}},p=[{value:"Pada aplikasi baru",id:"pada-aplikasi-baru",children:[]},{value:"Pada aplikasi yang sudah ada",id:"pada-aplikasi-yang-sudah-ada",children:[]},{value:"Setup selanjutnya (untuk aplikasi baru atau sudah ada)",id:"setup-selanjutnya-untuk-aplikasi-baru-atau-sudah-ada",children:[]}],d={toc:p};function c(a){var e=a.components,t=(0,r.Z)(a,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"instalasi"},"Instalasi"),(0,i.kt)("h2",{id:"pada-aplikasi-baru"},"Pada aplikasi baru"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Buat project laravel yang sudah terinstall badaso menggunakan composer")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"composer create-project badaso/starter your_project_name\n")),(0,i.kt)("h2",{id:"pada-aplikasi-yang-sudah-ada"},"Pada aplikasi yang sudah ada"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Kamu dapat menambahkan badaso pada aplikasi laravel kamu dengan perintah berikut ini.")),(0,i.kt)("p",null,"Badaso ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.x")," For Laravel 8"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"composer require badaso/core\n")),(0,i.kt)("p",null,"Badaso ",(0,i.kt)("inlineCode",{parentName:"p"},"v1.x")," For Laravel 5,6,7"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"composer require badaso/core:^1.0\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Jalankan perintah berikut untuk memperbarui dependensi di package.json, webpack, dan publish vendor provider.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan badaso:setup\n")),(0,i.kt)("h2",{id:"setup-selanjutnya-untuk-aplikasi-baru-atau-sudah-ada"},"Setup selanjutnya (untuk aplikasi baru atau sudah ada)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Jalankan migrasi database.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan migrate\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[opsional]"," Symlink folder storage jika belum")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan storage:link\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Untuk Laravel 8 dan proyek yang sudah ada, ubah filesystem driver menjadi ",(0,i.kt)("inlineCode",{parentName:"li"},"public")," (",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/core-concept/storage"},"readmore for cloud")),")")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"FILESYSTEM_DRIVER=public\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Jalankan composer autoload dan seeder")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"composer dump-autoload\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"v2.x")," Untuk Laravel 8"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'php artisan db:seed --class="Database\\Seeders\\Badaso\\BadasoSeeder"\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"v1.x")," Untuk Laravel 5,6,7"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan db:seed --class=BadasoSeeder\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Buat akun admin dengan cara mengetikan perintah berikut ini.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan badaso:admin your@email.com --create\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install javascript depedency")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn\nyarn dev\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Jalankan project laravel dan akses ",(0,i.kt)("inlineCode",{parentName:"li"},"/badaso-dashboard")," di browser untuk mengakses dashboard.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# via local machine\nphp artisan serve\n\n# or\n\n# via docker (for badaso/starter or you can set your docker on your existing project)\ndocker compose build\ndocker compose up -d\n")))}c.isMDXComponent=!0}}]);