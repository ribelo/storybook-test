import{a_ as h}from"./components-q4nWHTTd.js";import"./index-BBkUAzwr.js";import"./index-DfbGmgP0.js";const w={title:"Frisco/Forms/CheckboxController",component:h,tags:["autodocs"],parameters:{docs:{description:{component:"A controller for Checkbox component with form handling and validation capabilities."}}},argTypes:{name:{control:"text",description:"Name of the form field."},rules:{control:"object",description:"Validation rules for the checkbox."},"render-props":{control:"object",description:"Props passed to the Checkbox component for rendering."}},args:{name:"acceptRules",rules:{required:"Utworzenie konta wymaga akceptacji regulaminu Frisco"},"render-props":{label:"checkbox"}}},e={},r={args:{form:{formState:{errors:{acceptRules:{message:"Utworzenie konta wymaga akceptacji regulaminu Frisco"}}}}}},o={args:{defaultValue:!0}},a={args:{"render-props":{label:"Akceptuję warunki użytkowania"}}};e.parameters={docs:{storyDescription:"Default CheckboxController component showing the initial state with unchecked checkbox and no errors."}};var t,s,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var c,i,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    form: {
      formState: {
        errors: {
          acceptRules: {
            message: "Utworzenie konta wymaga akceptacji regulaminu Frisco"
          }
        }
      }
    }
  }
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var l,m,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    defaultValue: true
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var d,g,k;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    "render-props": {
      label: "Akceptuję warunki użytkowania"
    }
  }
}`,...(k=(g=a.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};const x=["Default","WithError","Checked","CustomLabel"];export{o as Checked,a as CustomLabel,e as Default,r as WithError,x as __namedExportsOrder,w as default};
