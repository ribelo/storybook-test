import{b2 as m}from"./components-q4nWHTTd.js";import"./index-BBkUAzwr.js";import"./index-DfbGmgP0.js";const f={title:"Frisco/Forms/LabeledTextareaController",component:m,tags:["autodocs"],parameters:{docs:{description:{component:"A controller for LabeledTextarea component with form handling capabilities."}}},argTypes:{name:{control:"text",description:"Name of the form field."},rules:{control:"object",description:"Validation rules for the field."},"render-props":{control:"object",description:"Props passed to the LabeledTextarea component."},form:{control:"object",description:"Form configuration and state."}},args:{name:"body",rules:{required:"Description is required"},"render-props":{label:"Opis*","input-props":{rows:4}},form:{errors:{},config:{variant:"float"}}}},e={args:{}},r={args:{"render-props":{label:"Opis*","input-props":{rows:8}}}},o={args:{"render-props":{label:"This is a very long label to test how the component handles it *"}}};e.parameters={docs:{storyDescription:"Default LabeledTextareaController component with customizable properties."}};var s,t,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {}
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};var n,p,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    "render-props": {
      label: "Opis*",
      "input-props": {
        rows: 8
      }
    }
  }
}`,...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var i,c,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    "render-props": {
      label: "This is a very long label to test how the component handles it *"
    }
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const h=["Default","CustomRows","LongLabel"];export{r as CustomRows,e as Default,o as LongLabel,h as __namedExportsOrder,f as default};
