import{b9 as f}from"./components-q4nWHTTd.js";import"./index-BBkUAzwr.js";import"./index-DfbGmgP0.js";const y={title:"Frisco/Header/HeaderUser",component:f,tags:["autodocs"],parameters:{docs:{description:{component:"HeaderUser component displaying user information or login/register buttons in the page header."}}},argTypes:{username:{control:"array",description:"Array containing user name information"},"logged-in?":{control:"boolean",description:"Whether the user is logged in or not"},"menu-expanded?":{control:"boolean",description:"Whether the user menu is expanded or not"},"button-login?":{control:"boolean",description:"Whether to show login/register buttons"},class:{control:"text",description:"Additional CSS class for the component"}},args:{username:["Gal","Anonim"],"logged-in?":!1,"menu-expanded?":!1,"button-login?":!1,class:""}},n={},e={args:{"logged-in?":!1,"button-login?":!0}},o={args:{"logged-in?":!0,username:["Gal","Anonim"]}},r={args:{"logged-in?":!1,username:["John","Doe"],"menu-expanded?":!0}};e.parameters={docs:{storyDescription:"HeaderUser component with button login option enabled."}};o.parameters={docs:{storyDescription:"HeaderUser component when the user is logged in."}};r.parameters={docs:{storyDescription:"HeaderUser component with expanded user menu."}};var s,t,a;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(a=(t=n.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};var i,d,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    "logged-in?": false,
    "button-login?": true
  }
}`,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,g,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    "logged-in?": true,
    username: ["Gal", "Anonim"]
  }
}`,...(u=(g=o.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var m,l,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    "logged-in?": false,
    username: ["John", "Doe"],
    "menu-expanded?": true
  }
}`,...(h=(l=r.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};const D=["Default","WithButtonLogin","LoggedIn","ExpandedMenu"];export{n as Default,r as ExpandedMenu,o as LoggedIn,e as WithButtonLogin,D as __namedExportsOrder,y as default};
