import{b3 as f}from"./components-q4nWHTTd.js";import"./index-BBkUAzwr.js";import"./index-DfbGmgP0.js";const A={title:"Frisco/Forms/PasswordValidator",component:f,tags:["autodocs"],parameters:{docs:{description:{component:"A password validation component that checks for various criteria and displays the status."}}},argTypes:{errors:{control:"object",description:"An object representing validation errors for different criteria."},value:{control:"text",description:"The current value of the password input."}},args:{errors:{},value:""}},r={},e={args:{errors:{length:!0,uppercase:!0},value:"password"}},a={args:{errors:{},value:"ValidPassword123"}},s={args:{errors:{digit:!0},value:"PartiallyValidPassword"}},o={args:{errors:{length:!0,uppercase:!0,lowercase:!0,digit:!0},value:""}};r.parameters={docs:{storyDescription:"Default PasswordValidator component showing the initial state with no input and no errors."}};var t,n,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,d,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    errors: {
      length: true,
      uppercase: true
    },
    value: "password"
  }
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,u,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    errors: {},
    value: "ValidPassword123"
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,h,w;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    errors: {
      digit: true
    },
    value: "PartiallyValidPassword"
  }
}`,...(w=(h=s.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var v,P,V;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    errors: {
      length: true,
      uppercase: true,
      lowercase: true,
      digit: true
    },
    value: ""
  }
}`,...(V=(P=o.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};const D=["Default","WithErrors","AllValid","PartiallyValid","EmptyWithErrors"];export{a as AllValid,r as Default,o as EmptyWithErrors,s as PartiallyValid,e as WithErrors,D as __namedExportsOrder,A as default};
