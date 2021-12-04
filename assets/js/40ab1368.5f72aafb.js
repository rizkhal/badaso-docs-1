"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4044],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return E}});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=o.createContext({}),u=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return o.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(t),E=i,d=f["".concat(s,".").concat(E)]||f[E]||p[E]||r;return t?o.createElement(d,a(a({ref:n},l),{},{components:t})):o.createElement(d,a({ref:n},l))}));function E(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<r;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9955:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return f}});var o=t(7462),i=t(3366),r=(t(7294),t(3905)),a=["components"],c={docId:"analytics",sidebar_position:14},s="Push Notification",u={unversionedId:"core-concept/push-notification",id:"core-concept/push-notification",isDocsHomePage:!1,title:"Push Notification",description:"Badaso provides firebase cloud messaging for push notifications. You can register the event of each CRUD generated table which is onCreate, onRead, onUpdate, onDelete.",source:"@site/docs/core-concept/push-notification.md",sourceDirName:"core-concept",slug:"/core-concept/push-notification",permalink:"/core-concept/push-notification",editUrl:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/docs/core-concept/push-notification.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{docId:"analytics",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Analytics",permalink:"/core-concept/analytics"},next:{title:"Introduction",permalink:"/customization/customization-intro"}},l=[{value:"Use the <code>FCMNotification</code> class",id:"use-the-fcmnotification-class",children:[]}],p={toc:l};function f(e){var n=e.components,t=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"push-notification"},"Push Notification"),(0,r.kt)("p",null,"Badaso provides firebase cloud messaging for push notifications. You can register the event of each CRUD generated table which is onCreate, onRead, onUpdate, onDelete."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Setup the .env file")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# ADD FIREBASE ENV\n# GET THE VALUE FROM FIREBASE IN PROJECT SETTING > GENERAL\nMIX_FIREBASE_API_KEY=""\nMIX_FIREBASE_AUTH_DOMAIN=""\nMIX_FIREBASE_PROJECT_ID=""\nMIX_FIREBASE_STORAGE_BUCKET=""\nMIX_FIREBASE_MESSAGE_SEENDER=""\nMIX_FIREBASE_APP_ID=""\nMIX_FIREBASE_MEASUREMENT_ID=""\n\n# GET THE VALUE FROM FIREBASE IN PROJECT SETTING > CLOUD MESSAGES \nMIX_FIREBASE_WEB_PUSH_CERTIFICATES=""\n\n# GET THE VALUE FROM FIREBASE IN PROJECT SETTING > CLOUD MESSAGES FROM BOX KEY PAIR > WEB PUSH CERTIFICATE\nMIX_FIREBASE_SERVER_KEY=""\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Call the command php artisan badaso:firebase-sw")),(0,r.kt)("h2",{id:"use-the-fcmnotification-class"},"Use the ",(0,r.kt)("inlineCode",{parentName:"h2"},"FCMNotification")," class"),(0,r.kt)("p",null,"The following is an example of using the FCMNotification class for push notification needs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'// ======== Instantiate the class ========\n\n$notification = new FCMNotification ();\n\n// ======== Sending the notification ========\n\n$notification->send(\n  [tokenClientFirebaseCloudNotification: string] array, \n  title: string, \n  message: string, \n  data: [key => value, ...] array\n);\n\n// ======== Example ========\n// $notification->send(\n//    ["eKk2LSpXVE4hasCAP9t7Vy:APA91bHafroaQcAI3hTdXLYLXCRpaXSgZOqoNWVnNxMut8LlLJJ-LQJVjok2fONRV7c_J_JtymY7Q13F5d0SLxycRCTbv8539uuez2S1aka8yAXHBGg_Kd2xmjwEKTtR3D41cyZc3iSj"], \n//    "Title", \n//    "Message", \n//    ["userId" => 65372]\n// );\n')))}f.isMDXComponent=!0}}]);