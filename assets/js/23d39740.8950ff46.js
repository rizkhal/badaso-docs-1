"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5201],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(a),u=i,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||l;return a?n.createElement(h,r(r({ref:t},d),{},{components:a})):n.createElement(h,r({ref:t},d))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4364:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var n=a(7462),i=a(3366),l=(a(7294),a(3905)),r=["components"],o={docId:"databasemanagement",sidebar_position:9},s="Database Management",p={unversionedId:"core-concept/database-management",id:"core-concept/database-management",isDocsHomePage:!1,title:"Database Management",description:"Badaso provides awesome database management features that can create tables, modify tables, delete tables, migrate tables, and delete migration files. Simply put, Badaso provides database management features without the need to create migration files using artisan laravel.",source:"@site/docs/core-concept/database-management.md",sourceDirName:"core-concept",slug:"/core-concept/database-management",permalink:"/core-concept/database-management",editUrl:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/docs/core-concept/database-management.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{docId:"databasemanagement",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Command",permalink:"/core-concept/command"},next:{title:"Auto Backup",permalink:"/core-concept/auto-backup"}},d=[{value:"Create Table",id:"create-table",children:[]},{value:"Create Relationship Table",id:"create-relationship-table",children:[]},{value:"Alter Table",id:"alter-table",children:[]},{value:"Drop Tables",id:"drop-tables",children:[]},{value:"Rollback Migration",id:"rollback-migration",children:[]},{value:"Rollback Conflict",id:"rollback-conflict",children:[]}],c={toc:d};function m(e){var t=e.components,o=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"database-management"},"Database Management"),(0,l.kt)("p",null,"Badaso provides awesome database management features that can create tables, modify tables, delete tables, migrate tables, and delete migration files. Simply put, Badaso provides database management features without the need to create migration files using artisan laravel."),(0,l.kt)("p",null,"You can visit it in the menu ",(0,l.kt)("inlineCode",{parentName:"p"},"Configuration -> Database Management")," and you will see your current table in the database. You can also click the Add Table button to create a new table in your database."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Docusaurus logo",src:a(7088).Z})),(0,l.kt)("p",null,"On this page you can also perform ",(0,l.kt)("strong",{parentName:"p"},"Rollback Migration"),", ",(0,l.kt)("strong",{parentName:"p"},"Alter Table")," and ",(0,l.kt)("strong",{parentName:"p"},"Drop Table"),"."),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If you use this feature, then you cannot manually change laravel migrations or table properties. If there are changes that are not registered by Badaso, the migration will not sync or will not working properly."))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Any changes made will be automatically generated a migration file."))),(0,l.kt)("h2",{id:"create-table"},"Create Table"),(0,l.kt)("p",null,"On this page you can create a new table. The following is a breakdown of the available fields."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Table Name"),": Input for a table name that only allows alphanumeric and underscore characters."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Timestamp"),": If input is checked, the created table will have created_at and updated_at fields with the data type timestamp on the newly created table."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Field Name"),": Input for the field names in the new table. This input only allows alphanumeric and underscore characters."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Field Type"),": Input for the type of field in the new table."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Length/Value"),": Input for length (varchar, char) or value (set, enum).",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"This field is required if the field type is varchar, char, set or enum."),(0,l.kt)("li",{parentName:"ul"},"If the field type is varchar or char, the input value must be an integer or number."),(0,l.kt)("li",{parentName:"ul"},"If the field type is enum or set, the input value must be an array with a comma separator (no spaces)."),(0,l.kt)("li",{parentName:"ul"},"If the field type is an integer, big integer, float or other then this input can function as a decimal point with a comma separator (without spaces)."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Auto Increment"),": Input for auto increment on the table. Only one auto increment on the table is allowed. If the field type is empty when checking auto increment, then the field type will automatically becomes big integer and the index field becomes primary."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Nullable"),": Input for a nullable field."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Default"),": Input for the default field."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"As Defined"),": Input the value of the default field when selecting As Defined."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Index"),": Input for the index field."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Attribute"),": Input for field attributes.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Docusaurus logo",src:a(4738).Z})),(0,l.kt)("h2",{id:"create-relationship-table"},"Create Relationship Table"),(0,l.kt)("p",null,"On this page you can create a new relationship table. The following is a breakdown of the relation fields."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Field Name"),": Input for the field names in the new relation table. You can give this field name with ",(0,l.kt)("inlineCode",{parentName:"p"},"destination table_id"),". For example, you want to make a relation from ",(0,l.kt)("inlineCode",{parentName:"p"},"book_categories")," table to ",(0,l.kt)("inlineCode",{parentName:"p"},"books")," table. Just named this field with ",(0,l.kt)("inlineCode",{parentName:"p"},"book_category_id")," at ",(0,l.kt)("inlineCode",{parentName:"p"},"books")," table.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Field Type"),": Input for the type of field in the new relation table. Make sure the field type is same like what you made at your destination table. Usually, it setted ",(0,l.kt)("strong",{parentName:"p"},"Big Integer"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Length/Value")," : Just set it blank as default.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Auto Increment"),": Don't check this box.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Nullable"),": Input for a nullable field. If this field allow to send a null data, you can check this box. If this field is restricted with null data, then you don't need to check this box.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Unsigned")," : Check this box.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Index")," : Set it ",(0,l.kt)("strong",{parentName:"p"},"foreign")," then the relation button will show up on the right side of delete button and you can click into it.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Relationship")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"table")," : Select a destination table to make a relation."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"field")," : Select the field that you want to make a relation."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"On Delete")," : Select the delete action that you want after this field is related."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"On Update")," : Select the update action that you want after this field is related.")))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Docusaurus logo",src:a(6529).Z})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Docusaurus logo",src:a(1287).Z})),(0,l.kt)("h2",{id:"alter-table"},"Alter Table"),(0,l.kt)("p",null,"On this page you can make changes to your table such as adding fields, deleting fields, changing field details and changing the table name. The details of the fields are the same as in the Create Table."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"A table's timestamp will be automatically detected if it has a ",(0,l.kt)("inlineCode",{parentName:"p"},"updated_at")," field with the field type",(0,l.kt)("inlineCode",{parentName:"p"}," timestamp")," and a ",(0,l.kt)("inlineCode",{parentName:"p"},"created_at")," field with the",(0,l.kt)("inlineCode",{parentName:"p"}," timestamp")," field type."))),(0,l.kt)("p",null,"This is what the edit field looks like when altering the table."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Docusaurus logo",src:a(4814).Z})),(0,l.kt)("h2",{id:"drop-tables"},"Drop Tables"),(0,l.kt)("p",null,"On this page you can delete a table by pressing the ",(0,l.kt)("strong",{parentName:"p"},"Drop Table")," button."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Docusaurus logo",src:a(7088).Z})),(0,l.kt)("h2",{id:"rollback-migration"},"Rollback Migration"),(0,l.kt)("p",null,"When you want to rollback a migration, check the desired limits and then press the Rollback Migration button. If you want to delete the migration files at once, then tick ",(0,l.kt)("strong",{parentName:"p"},"Delete Migration File"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Docusaurus logo",src:a(174).Z})),(0,l.kt)("h2",{id:"rollback-conflict"},"Rollback Conflict"),(0,l.kt)("p",null,"When the migration on the database does not match the migration files in your project folder, a conflict will appear as shown. To resolve this conflict, you are asked to migrate the migration file that is not synchronized or delete the migration file."),(0,l.kt)("p",null,"warning When a conflict occurs, you cannot do anything to Database Management. You must resolve this conflict first."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Docusaurus logo",src:a(6403).Z})))}m.isMDXComponent=!0},4738:function(e,t,a){t.Z=a.p+"assets/images/add-table-069420330c80cef7c6e6b9f68d2d9490.png"},7088:function(e,t,a){t.Z=a.p+"assets/images/browse-table-39a25f7072d9be5ab5c328c2e9bdeaf3.jpeg"},4814:function(e,t,a){t.Z=a.p+"assets/images/edit-field-844cc5eab07f9cf5668d741b2514209e.png"},6529:function(e,t,a){t.Z=a.p+"assets/images/relation-db-2d78aee1b801431a776902f7f8915371.png"},1287:function(e,t,a){t.Z=a.p+"assets/images/relation-10fcbcb2741c3e6493b0dfe586c98666.png"},6403:function(e,t,a){t.Z=a.p+"assets/images/rollback-conflict-8c720554b449c93f187874d5856e52ab.png"},174:function(e,t,a){t.Z=a.p+"assets/images/rollback-migration-bc0df24c1235291504efd7b1f73d4f97.png"}}]);