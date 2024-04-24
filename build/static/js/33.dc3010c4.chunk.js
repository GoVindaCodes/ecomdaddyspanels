(this["webpackJsonpdashtar-admin"]=this["webpackJsonpdashtar-admin"]||[]).push([[33],{1205:function(e,s,a){"use strict";a.r(s);var t=a(34),r=a(0),c=a(62),o=a(12),d=a(167),l=a(632),n=a(89),i=a(64),m=a(90),b=a(15),j=a(765),w=a(766),h=a(2);s.default=()=>{const{t:e}=Object(l.a)(),{token:s}=Object(o.i)(),a=Object(r.useRef)(""),[u,f]=Object(r.useState)(!1),{register:x,handleSubmit:g,watch:p,formState:{errors:O}}=Object(d.a)();a.current=p("newPassword");return Object(h.jsx)("div",{className:"flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900",children:Object(h.jsx)("div",{className:"flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800",children:Object(h.jsxs)("div",{className:"flex flex-col overflow-y-auto md:flex-row",children:[Object(h.jsxs)("div",{className:"h-32 md:h-auto md:w-1/2",children:[Object(h.jsx)("img",{"aria-hidden":"true",className:"object-cover w-full h-full dark:hidden",src:j.a,alt:"Office"}),Object(h.jsx)("img",{"aria-hidden":"true",className:"hidden object-cover w-full h-full dark:block",src:w.a,alt:"Office"})]}),Object(h.jsx)("main",{className:"flex items-center justify-center p-6 sm:p-12 md:w-1/2",children:Object(h.jsxs)("div",{className:"w-full",children:[Object(h.jsx)("h1",{className:"mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200",children:e("ResetPassword")}),Object(h.jsxs)("form",{onSubmit:g((e=>{let{newPassword:a}=e;f(!0),m.a.resetPassword({newPassword:a,token:s}).then((e=>{f(!1),Object(b.c)(e.message)})).catch((e=>{f(!1),Object(b.b)(e?e.response.data.message:e.message)}))})),children:[Object(h.jsx)(i.a,{label:"Password"}),Object(h.jsx)(t.Input,{label:"Password",name:"newPassword",type:"password",placeholder:"Password",...x("newPassword",{required:"You must specify a password",minLength:{value:10,message:"Password must have at least 10 characters"}}),className:"border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"}),Object(h.jsx)(n.a,{errorName:O.newPassword}),Object(h.jsx)("div",{className:"mt-6"}),Object(h.jsx)(i.a,{label:"Confirm Password"}),Object(h.jsx)(t.Input,{label:"Confirm Password",name:"confirm_password",type:"password",placeholder:e("ConfirmPassword"),...x("confirm_password",{validate:e=>e===a.current||"The passwords do not match"}),className:"border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"}),Object(h.jsx)(n.a,{errorName:O.confirm_password}),Object(h.jsx)(t.Button,{disabled:u,type:"submit",block:!0,className:"mt-4 h-12",children:e("Reset")})]}),Object(h.jsx)("p",{className:"mt-4",children:Object(h.jsx)(c.b,{className:"text-sm font-medium text-green-500 dark:text-green-400 hover:underline",to:"/login",children:e("AlreadyAccount")})})]})})]})})})}},765:function(e,s,a){"use strict";s.a=a.p+"static/media/forgot-password-office.d1630a33.jpeg"},766:function(e,s,a){"use strict";s.a=a.p+"static/media/forgot-password-office-dark.d1630a33.jpeg"}}]);
//# sourceMappingURL=33.dc3010c4.chunk.js.map