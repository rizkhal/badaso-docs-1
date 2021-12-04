"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[413],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,g=p["".concat(l,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(g,a(a({ref:t},d),{},{components:n})):r.createElement(g,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1459:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={docId:"customwidget",sidebar_position:6},l="Custom Widget",u={unversionedId:"customization/custom-widget",id:"customization/custom-widget",isDocsHomePage:!1,title:"Custom Widget",description:"Badaso supports creating and displaying widgets on the dashboard page. Badaso also provides default widget (user, role and permission widget). Here's what the widget looks like.",source:"@site/docs/customization/custom-widget.md",sourceDirName:"customization",slug:"/customization/custom-widget",permalink:"/customization/custom-widget",editUrl:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/docs/customization/custom-widget.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{docId:"customwidget",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Custom Page",permalink:"/customization/custom-page"},next:{title:"Custom Language",permalink:"/customization/custom-language"}},d=[{value:"Add Widget",id:"add-widget",children:[]}],c={toc:d};function p(e){var t=e.components,s=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-widget"},"Custom Widget"),(0,o.kt)("p",null,"Badaso supports creating and displaying widgets on the dashboard page. Badaso also provides default widget (user, role and permission widget). Here's what the widget looks like."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Docusaurus logo",src:n(4790).Z})),(0,o.kt)("h2",{id:"add-widget"},"Add Widget"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a php file in the ",(0,o.kt)("inlineCode",{parentName:"li"},"app\\Widgets")," folder (if the folder does not exist, then create a folder first). Then fill in the file with the following template.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\ud83d\udce6Your Project\n\u2523 \ud83d\udcc2app\n\u2503 \u2523 \ud83d\udcc2Widgets /** register your widget here **/\n\u2503 \u2503 \u2517 \ud83d\udcdcExampleWidget.php\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"<?php\n\nnamespace App\\Widgets;\n\nuse Uasoft\\Badaso\\Interfaces\\WidgetInterface;\n\nclass ExampleWidget implements WidgetInterface\n{\n    /**\n     * Set permission for widget\n     * set null to allow all role\n     * multiple permission allowed, separate by comma.\n     */\n    public function getPermissions()\n    {\n        return 'browse_permissions';\n    }\n\n    public function run($params = null)\n    {\n        return [\n            'label' => 'Label', /** Fill in the label as desired **/\n            'value' => 0,       /** Fill in the value as desired **/\n            'icon' => 'lock', /** Fill in the icon as desired from material icon **/\n            'max' => 70, /** Fill in the value as desired (default value is 100) **/\n        ];\n    }\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Then add the file or class you just created to the configuration file ",(0,o.kt)("inlineCode",{parentName:"li"},"config\\badaso.php"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"<?php\n\nreturn [\n    ...\n    'widgets' => [\n        'Uasoft\\\\Badaso\\\\Widgets\\\\UserWidget',\n        'Uasoft\\\\Badaso\\\\Widgets\\\\RoleWidget',\n        'Uasoft\\\\Badaso\\\\Widgets\\\\PermissionWidget',\n        'App\\\\Widgets\\\\ExampleWidget', /** Register the widget here **/\n    ],\n];\n")))}p.isMDXComponent=!0},4790:function(e,t,n){t.Z=n.p+"assets/images/widget-5d444bd5afebdf1455f9599a6b59c0c3.png"}}]);