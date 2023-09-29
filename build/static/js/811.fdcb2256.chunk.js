"use strict";(self.webpackChunkadmin_dashboard_template_dashwind=self.webpackChunkadmin_dashboard_template_dashwind||[]).push([[811],{2782:function(e,s,a){var i=a(3547),n=a(184);s.Z=function(e){var s=e.title,a=e.children,t=e.topMargin,l=e.TopSideButtons;return(0,n.jsxs)("div",{className:"card w-full p-6 bg-base-100 shadow-xl "+(t||"mt-6"),children:[(0,n.jsxs)(i.Z,{styleClass:l?"inline-block":"",children:[s,l&&(0,n.jsx)("div",{className:"inline-block float-right",children:l})]}),(0,n.jsx)("div",{className:"divider mt-2"}),(0,n.jsx)("div",{className:"h-full w-full pb-6 bg-base-100",children:a})]})}},3547:function(e,s,a){var i=a(184);s.Z=function(e){var s=e.styleClass,a=e.children;return(0,i.jsx)("div",{className:"text-xl font-semibold ".concat(s),children:a})}},7249:function(e,s,a){a(2791);var i=a(9434),n=(a(3547),a(5054)),t=a(184);s.Z=function(){var e=(0,i.I0)();return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("article",{className:"prose",children:[(0,t.jsx)("h1",{className:"",children:"Features"}),(0,t.jsx)("h2",{id:"feature1",children:"Authentication"}),(0,t.jsxs)("p",{children:["JWT based Authentication logic is present in ",(0,t.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"/app/auth.js"}),". In the file you can see we are adding bearer token in header for every request. Every routes under ",(0,t.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"/routes/"})," folder will need authentication. For public routes like login, register you will have to add routes in ",(0,t.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"App.js"})," file and also include the path in PUBLIC_ROUTES variable under ",(0,t.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"/app/auth.js"})," file so that auto redirect to login page is not triggered."]}),(0,t.jsx)("h2",{id:"feature2",children:"Left Sidebar"}),(0,t.jsxs)("p",{children:["This is main internal navigation (for pages that will come after login only), all sidebar menu items with their icons are present in ",(0,t.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"/routes/sidebar.js"}),"  file, while  path and page components mapping are respectively present in ",(0,t.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"/routes/index.js"})," file."]}),(0,t.jsx)("h2",{id:"feature3",children:"Add New Page"}),(0,t.jsxs)("p",{children:["All ",(0,t.jsx)("span",{className:"font-semibold",children:"public routes"})," are present in ",(0,t.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"App.js"})," file. Steps to add new public page -"]}),(0,t.jsxs)("ul",{className:"mt-0",children:[(0,t.jsxs)("li",{children:["Create Page inside ",(0,t.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"/pages"})," folder"]}),(0,t.jsxs)("li",{children:["Go to ",(0,t.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"App.js"})," and import the component and add its path"]}),(0,t.jsxs)("li",{children:["Add your new route path in ",(0,t.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"/app/auth.js"})," file under PUBLIC_ROUTES variable, this will allow the page to open without login."]})]}),(0,t.jsxs)("p",{className:"mt-4",children:["All ",(0,t.jsx)("span",{className:"font-semibold",children:"protected routes"})," are present in ",(0,t.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"/routes/sidebar.js"})," file"]}),(0,t.jsxs)("ul",{className:"mt-0",children:[(0,t.jsxs)("li",{children:["Create your page inside ",(0,t.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"/pages/protected"})," folder"]}),(0,t.jsxs)("li",{children:["Add your new routes in ",(0,t.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"/routes/sidebar.js"}),", this will show your new page in sidebar"]}),(0,t.jsxs)("li",{children:["Import your new routes component and map its path in ",(0,t.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"/routes/index.js"})]})]}),(0,t.jsx)("h2",{id:"feature4",children:"Right Sidebar"}),(0,t.jsxs)("div",{children:["This is used for showing long list contents like notifications, settings etc.. We are using redux to show and hide and it is single component and can be called from any file with dispatch method. To add new content follow following steps:",(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Create new component file containing main body of your content"}),(0,t.jsxs)("li",{children:["Create new variable in ",(0,t.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"/utils/globalConstantUtils.js"})," file under RIGHT_DRAWER_TYPES variable"]}),(0,t.jsxs)("li",{children:["Now include the file mapped with the new variable in ",(0,t.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"/containers/RightSidebar.js"})," file using switch. ",(0,t.jsx)("br",{}),"For ex- If you new component name is ",(0,t.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"TestRightSideBar.js"})," and  variable name is TEST_RIGHT_SIDEBAR, then add following code inside switch code block",(0,t.jsx)("br",{}),(0,t.jsx)("div",{className:"mockup-code mt-4",children:(0,t.jsx)("pre",{className:"my-0 py-0",children:(0,t.jsx)("code",{children:"[RIGHT_DRAWER_TYPES.TEST_RIGHT_SIDEBAR] : \n<TestRightSideBar {...extraObject} closeRightDrawer={close}/>"})})}),(0,t.jsx)("span",{className:"text-sm mt-1 italic",children:"Here extraObject have variables that is passed from parent component while calling openRightDrawer method"})]}),(0,t.jsxs)("li",{children:["Now the last step, call dispatch method as follows",(0,t.jsx)("div",{className:"mockup-code mt-1",children:(0,t.jsx)("pre",{className:"my-0 py-0",children:(0,t.jsx)("code",{children:'import { useDispatch } from "react-redux"\n  const dispatch = useDispatch()\n  dispatch(openRightDrawer({header : "Test Right Drawer", \n  bodyType : RIGHT_DRAWER_TYPES.TEST_RIGHT_SIDEBAR}))'})})})]})]})]}),(0,t.jsx)("h2",{id:"feature5",children:"Themes"}),(0,t.jsxs)("p",{children:["By default we have added light and dark theme and Daisy UI comes with a number of themes, which you can use with no extra effort, you just have to include it in ",(0,t.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"tailwind.config.js"})," file,  you can add themes like cupcake, corporate, reto etc... Also we can configure themes colors in config file, for more documentation on themes checkout ",(0,t.jsx)("a",{href:"https://daisyui.com/docs/themes/",target:"_blank",children:"Daisy UI documentation."})]}),(0,t.jsx)("h2",{id:"feature6",children:"Modal"}),(0,t.jsxs)("div",{children:["With global modal functionality you dont have to create seperate modal for each page. We are using redux to show and hide and it is a single component and can be called from any file with dispatch method. Code for showing modal is present in modalSlice and layout container component. To show modal just call openModal() function of modalSlice using dispatch.",(0,t.jsx)("br",{}),"To add new modal in any page follow following steps:",(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Create new component file containing main body of your modal content"}),(0,t.jsxs)("li",{children:["Create new variable in ",(0,t.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"/utils/globalConstantUtils.js"})," file under MODAL_BODY_TYPES variable"]}),(0,t.jsxs)("li",{children:["Now include the file mapped with the new variable in ",(0,t.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"/containers/ModalLayout.js"})," file using switch. ",(0,t.jsx)("br",{}),"For ex- If you new component name is ",(0,t.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"TestModal.js"})," and  variable name is TEST_MODAL, then add following code inside switch code block",(0,t.jsx)("br",{}),(0,t.jsx)("div",{className:"mockup-code mt-4",children:(0,t.jsx)("pre",{className:"my-0 py-0",children:(0,t.jsx)("code",{children:"[RIGHT_DRAWER_TYPES.TEST_MODAL] : \n<TestModal closeModal={close} extraObject={extraObject}/>"})})}),(0,t.jsx)("span",{className:"text-sm mt-1 italic",children:"Here extraObject have variables that is passed from parent component while calling openModal method"})]}),(0,t.jsxs)("li",{children:["Now the last step, call dispatch method as follows",(0,t.jsx)("div",{className:"mockup-code mt-1",children:(0,t.jsx)("pre",{className:"my-0 py-0",children:(0,t.jsx)("code",{children:'import { useDispatch } from "react-redux"\n  const dispatch = useDispatch()\n   dispatch(openModal({title : "Test Modal Title", \n   bodyType : MODAL_BODY_TYPES.TEST_MODAL}))'})})})]})]})]}),(0,t.jsx)("h2",{id:"feature7",children:"Notification"}),(0,t.jsx)("p",{children:"Many times we have to show notification to user be it on successfull form submission or any api success. And requirement can come to show notification from any page, so global notification handling is needed."}),(0,t.jsxs)("p",{className:"mt-4",children:["Code for showing notification is present in headerSlice and layout container component. To show notification just call ",(0,t.jsx)("span",{className:"badge badge-ghost",children:"showNotification()"})," function of headerSlice using dispatch. To show success message notification pass status as 1 and for showing error message pass status as 0."]}),(0,t.jsx)("div",{className:"mockup-code mb-4",children:(0,t.jsx)("pre",{className:"my-0 py-0",children:(0,t.jsx)("code",{children:'import { useDispatch } from "react-redux"\n  const dispatch = useDispatch()\n  dispatch(showNotification({message : "Message here", status : 1}))'})})}),(0,t.jsx)("p",{children:"Click on this button to check"}),(0,t.jsx)("button",{className:"btn btn-success",onClick:function(){return e((0,n.c0)({message:"Your message has been sent!",status:1}))},children:"Success"}),(0,t.jsx)("button",{className:"btn btn-error ml-4",onClick:function(){return e((0,n.c0)({message:"Something went wrong!",status:0}))},children:"Error"}),(0,t.jsx)("div",{className:"h-24"})]})})}},5597:function(e,s,a){var i=a(1413),n=a(9439),t=a(2791),l=a(184);s.Z=function(e){var s=[{name:"Authentication",isActive:1===e.activeIndex},{name:"Sidebar",isActive:!1},{name:"Add New Page",isActive:!1},{name:"Right sidebar",isActive:!1},{name:"Themes",isActive:!1},{name:"Modal",isActive:!1},{name:"Notification",isActive:!1}],a=(0,t.useState)(s),o=(0,n.Z)(a,2),r=o[0],d=o[1];return(0,l.jsxs)("ul",{className:"menu w-56 mt-10 text-sm",children:[(0,l.jsx)("li",{className:"menu-title",children:(0,l.jsx)("span",{className:"",children:"Features"})}),r.map((function(e,s){return(0,l.jsx)("li",{onClick:function(){return e=s,d(r.map((function(s,a){return a===e?(0,i.Z)((0,i.Z)({},s),{},{isActive:!0}):(0,i.Z)((0,i.Z)({},s),{},{isActive:!1})}))),void document.getElementById("feature"+(e+1)).scrollIntoView({behavior:"smooth"});var e},className:e.isActive?"bordered":"",children:(0,l.jsx)("a",{children:e.name})},s)}))]})}},1536:function(e,s,a){a(2791);var i=a(9434),n=(a(3547),a(5054),a(184));s.Z=function(){return(0,i.I0)(),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("article",{className:"prose",children:[(0,n.jsx)("h1",{className:"",children:"Getting Started"}),(0,n.jsx)("h2",{className:"",id:"getstarted1",children:"Introduction"}),(0,n.jsxs)("p",{children:["A free dashboard template using ",(0,n.jsx)("span",{className:"font-bold",children:"Daisy UI"})," and react js. With the help of Dasisy UI, it comes with ",(0,n.jsx)("span",{className:"font-bold",children:"fully customizable and themable CSS"})," and power of Tailwind CSS utility classes. We have also added ",(0,n.jsx)("span",{className:"font-bold",children:"redux toolkit"}),"  and configured it for API calls and state management."]}),(0,n.jsx)("p",{children:"User authentication has been implemented using JWT token method (ofcourse you need backend API for generating and verifying token). This template can be used to start your next SaaS project or build new internal tools in your company."}),(0,n.jsx)("h4",{children:" Core libraries used - "}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://reactjs.org/",target:"_blank",children:"React JS v18.2.0"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://reactrouter.com/en/main",target:"_blank",children:"React Router v6.4.3"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://tailwindcss.com/",target:"_blank",children:"Tailwind CSS v3.2.4"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://daisyui.com/",target:"_blank",children:"Daisy UI v2.41.0"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://heroicons.com/",target:"_blank",children:"HeroIcons v2.0.13"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://redux-toolkit.js.org/",target:"_blank",children:"Redux toolkit v1.9.0"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://react-chartjs-2.js.org/",target:"_blank",children:"React ChartJS 2 v5.0.1"})})]}),(0,n.jsx)("h4",{children:"Major features - "}),(0,n.jsx)("p",{className:"",children:"Almost all major UI components are available in Daisy UI library. Apart from this logic has been added for following - "}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[" ",(0,n.jsx)("span",{className:"font-bold",children:"Light/dark"})," mode toggle"]}),(0,n.jsx)("li",{children:" Token based user authentication"}),(0,n.jsxs)("li",{children:[" ",(0,n.jsx)("span",{className:"font-bold",children:"Submenu support"})," in sidebar"]}),(0,n.jsxs)("li",{children:[" Store management using ",(0,n.jsx)("span",{className:"font-bold",children:"redux toolkit"})]}),(0,n.jsxs)("li",{children:[" ",(0,n.jsx)("span",{className:"font-bold",children:"Daisy UI"})," components"]}),(0,n.jsxs)("li",{children:[" ",(0,n.jsx)("span",{className:"font-bold",children:"Right and left sidebar"}),", Universal loader, notifications and other components"]}),(0,n.jsxs)("li",{children:[" React ",(0,n.jsx)("span",{className:"font-bold",children:"chart js 2"})," examples"]})]}),(0,n.jsx)("h2",{id:"getstarted2",children:"How to use?"}),(0,n.jsxs)("p",{children:["Just clone the repo from github and then run following command (Make sure you have node js installed )",(0,n.jsx)("br",{}),(0,n.jsx)("a",{href:"https://github.com/srobbin01/daisyui-admin-dashboard-template",className:"text-sm text-blue-500",target:"_blank",children:"Repo Link"}),(0,n.jsx)("br",{}),(0,n.jsx)("code",{children:" npm install "}),(0,n.jsx)("br",{}),(0,n.jsx)("code",{children:"npm start"})]}),(0,n.jsx)("h2",{id:"getstarted3",children:"Tailwind CSS"}),(0,n.jsx)("p",{children:"Tailwind CSS is a utility-first CSS framework with predefined classes that you can use to build and design the UI directly in the JSX. We have also included Daisy UI Component, that is based on tailwind CSS."}),(0,n.jsx)("h2",{id:"getstarted4",children:"Daisy UI"}),(0,n.jsxs)("p",{children:[(0,n.jsx)("a",{href:"https://daisyui.com/",target:"_blank",className:"text-xl btn-link",children:"Daisy UI"}),", a popular free and opensource tailwind component library has been used for this template. It has a rich collection of components, layouts and is fully customizable and themeable."]}),(0,n.jsxs)("p",{children:["Apart from this it also helps in making HTML code more cleaner as we don't have to include all utility classes of tailwind to make the UI. Check components ",(0,n.jsx)("a",{href:"https://daisyui.com/components/button/",target:"_blank",className:"btn-link",children:"documentation here"}),". For Ex- "]}),(0,n.jsx)("div",{className:"text-center",children:(0,n.jsx)("h2",{className:"text-xl font-bold mb-0.5",children:"Creating a button"})}),(0,n.jsxs)("div",{className:"",children:[(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("p",{className:"text-center font-semibold",children:" using only utility classes of tailwind"}),(0,n.jsx)("div",{className:"mockup-code text-justify mb-4",children:(0,n.jsx)("pre",{className:"my-0 py-0",children:(0,n.jsx)("code",{children:'<a className="inline-block px-4 py-3 \n text-sm font-semibold text-center \n text-white uppercase transition duration-200 \n ease-in-out bg-indigo-600 \n rounded-md cursor-pointer \n hover:bg-indigo-700">Button</a>'})})}),(0,n.jsx)("button",{className:"inline-block  px-4 py-3  text-sm font-semibold text-center  text-white uppercase transition duration-200  ease-in-out bg-indigo-600  rounded-md cursor-pointer  hover:bg-indigo-700",children:"Button"})]}),(0,n.jsx)("div",{className:"divider"}),(0,n.jsxs)("div",{className:"grid w-full flex-grow",children:[(0,n.jsx)("p",{className:"text-center font-semibold",children:"using daisyUI component classes"}),(0,n.jsx)("div",{className:"mockup-code mb-4",children:(0,n.jsx)("pre",{className:"my-0 py-0",children:(0,n.jsx)("code",{children:'<a className="btn btn-primary">\nButton</a>'})})}),(0,n.jsx)("button",{className:"btn btn-primary",children:"Button"})]})]}),(0,n.jsx)("h2",{id:"getstarted5",children:"Chart JS"}),(0,n.jsxs)("p",{children:["Chart JS library has rich components of different charts available. It is based on  ",(0,n.jsx)("a",{href:"https://www.chartjs.org/",target:"_blank",alt:"",children:" Chart.js"})," library, the most popular charting library. We have added this library and added couple of examples in seperate page."]}),(0,n.jsx)("h2",{id:"getstarted6",children:"Redux Toolkit"}),(0,n.jsxs)("p",{children:["The Redux Toolkit package helps in writing redux logic easily. It was originally created to help address three common concerns about Redux:",(0,n.jsx)("li",{children:"Configuring a Redux store is too complicated"}),(0,n.jsx)("li",{children:"I have to add a lot of packages to get Redux to do anything useful"}),(0,n.jsx)("li",{children:'Redux requires too much boilerplate code"'}),"This library has been configured and used for showing notifications, modals and loading data from API in leads page."]}),(0,n.jsx)("h2",{id:"getstarted7",children:"Hero Icons"}),(0,n.jsxs)("p",{children:[(0,n.jsx)("a",{href:"https://heroicons.com/",target:"_blank",className:"text-xl btn-link",children:"HeroIcons"})," library has been used for all the icons in this templates. It has a rich collection of SVG icons, and is made by the makers of Tailwind CSS."]}),(0,n.jsxs)("p",{className:"mt-4",children:["Each icon can be imported individually as a React component, check ",(0,n.jsx)("a",{href:"https://github.com/tailwindlabs/heroicons",target:"_blank",className:"btn-link",children:"documentation"})]}),(0,n.jsx)("pre",{children:(0,n.jsx)("code",{children:"import BeakerIcon from '@heroicons/react/24/solid/BeakerIcon'"})}),(0,n.jsx)("p",{children:"Use as follows in your component"}),(0,n.jsx)("pre",{children:(0,n.jsx)("code",{children:"<BeakerIcon className='h-6 w-6'/>"})}),(0,n.jsx)("div",{className:"divider "}),(0,n.jsx)("div",{className:"alert mt-4 alert-warning shadow-lg",children:(0,n.jsx)("div",{children:(0,n.jsx)("span",{children:"Note: Importing all icons in single line will increase your build time"})})}),(0,n.jsx)("p",{children:"Don't import like this (will load all icons and increase build time)"}),(0,n.jsx)("pre",{children:(0,n.jsx)("code",{children:"import {BeakerIcon, BellIcon } from '@heroicons/react/24/solid'"})}),(0,n.jsx)("p",{children:"Instead import as follows"}),(0,n.jsx)("pre",{children:(0,n.jsxs)("code",{children:["import BeakerIcon from '@heroicons/react/24/solid/BeakerIcon'",(0,n.jsx)("br",{}),"import BellIcon from '@heroicons/react/24/solid/BellIcon'"]})}),(0,n.jsx)("div",{className:"badge badge-secondary",children:"This is better way for importing icons"}),(0,n.jsx)("h2",{id:"getstarted8",children:"Project Structure"}),(0,n.jsx)("h4",{children:"Folders - "}),(0,n.jsxs)("ul",{className:"mt-0",children:[(0,n.jsx)("li",{children:"app - store management, auth and libraries settings are present"}),(0,n.jsx)("li",{children:"components - this include all common components to be used in project"}),(0,n.jsx)("li",{children:"containers - components related to layout like sidebar, page layout, header etc.."}),(0,n.jsx)("li",{children:"features - main folder where all page logic resides, there will be folder for each page and additional folder inside that to group different functionalities like components, modals etc... Redux slice file will also present inside page specific folder."}),(0,n.jsx)("li",{children:"pages - this contain one single file related to one page, if you want to divide page into different components file, use features folder and create seperate folder related to that page"}),(0,n.jsx)("li",{children:"routes - all settings related to routes"})]}),(0,n.jsx)("h4",{children:"Files - "}),(0,n.jsxs)("ul",{className:"mt-0",children:[(0,n.jsx)("li",{children:"App.js - Main file containing different routes and components "}),(0,n.jsx)("li",{children:"index.css - Additional global css if required"}),(0,n.jsx)("li",{children:"index.js - Entry point of project"}),(0,n.jsx)("li",{children:"package.json - All dependencies and npm scripts"}),(0,n.jsx)("li",{children:"tailwind.config.js - Tailwind CSS configuration file, add theme customization and new themes in this file"})]}),(0,n.jsx)("div",{className:"h-24"})]})})}}}]);
//# sourceMappingURL=811.fdcb2256.chunk.js.map