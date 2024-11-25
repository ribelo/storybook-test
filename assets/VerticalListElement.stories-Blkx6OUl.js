import{br as L}from"./components-q4nWHTTd.js";import"./index-BBkUAzwr.js";import"./index-DfbGmgP0.js";const V={title:"Frisco/NewProductPage/VerticalListElement",component:L,tags:["autodocs"],parameters:{docs:{description:{component:"VerticalListElement component that renders a vertical list item with optional title, icon, content, and action."}}},argTypes:{title:{control:"text",description:"Title of the list element"},icon:{control:"text",description:"Icon name to be displayed"},"icon-color":{control:"select",options:["brand","primary","secondary"],description:"Color of the icon"},content:{control:"text",description:"Main content of the list element"},action:{control:"text",description:"Text for the action link"},href:{control:"text",description:"URL for the action link"},"with-chevron":{control:"boolean",description:"Whether to show a chevron icon next to the action"}},args:{title:"Title",icon:"Check","icon-color":"brand",content:"This is the main content of the list element.",action:"Click me",href:"#","with-chevron":!0}},t={},e={args:{icon:null}},o={args:{action:null}},r={args:{"icon-color":"secondary"}},n={args:{"with-chevron":!1}};t.parameters={docs:{storyDescription:"Default state of the VerticalListElement component with all props."}};e.parameters={docs:{storyDescription:"VerticalListElement without an icon."}};o.parameters={docs:{storyDescription:"VerticalListElement without an action link."}};r.parameters={docs:{storyDescription:"VerticalListElement with a custom icon color."}};n.parameters={docs:{storyDescription:"VerticalListElement with the chevron icon disabled."}};var c,s,i;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var a,l,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    icon: null
  }
}`,...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,d,h;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    action: null
  }
}`,...(h=(d=o.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var u,g,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    "icon-color": "secondary"
  }
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var w,y,E;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    "with-chevron": false
  }
}`,...(E=(y=n.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};const D=["Default","NoIcon","NoAction","CustomIconColor","WithoutChevron"];export{r as CustomIconColor,t as Default,o as NoAction,e as NoIcon,n as WithoutChevron,D as __namedExportsOrder,V as default};
