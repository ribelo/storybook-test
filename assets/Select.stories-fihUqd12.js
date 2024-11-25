import{b4 as W}from"./components-q4nWHTTd.js";import"./index-BBkUAzwr.js";import"./index-DfbGmgP0.js";const j={title:"Frisco/Forms/Select",component:W,tags:["autodocs"],parameters:{docs:{description:{component:"A customizable select component with various display options and mobile support."}}},argTypes:{label:{control:"text",description:"The label for the select input."},options:{control:"object",description:"An array of key-value pairs representing the options."},variant:{control:"select",options:["default","float","notched"],description:"The visual variant of the select input."},search:{control:"object",description:"Configuration for the search functionality."},errors:{control:"object",description:"Error messages associated with the input."},inputProps:{control:"object",description:"Additional props for the input element."}},args:{label:"Wybierz miasto",options:[["Warszawa","Warszawa"],["Wrocław","Wrocław"],["Poznań","Poznań"],["Kraków","Kraków"],["Katowice","Katowice"],["Trójmiasto","Trójmiasto"],["Bydgoszcz","Bydgoszcz"]],variant:"float",search:{placeholder:"Search options"},errors:null,inputProps:{name:"City",value:"Warszawa",ref:{current:{}}}}},r={},e={args:{"input-props":{value:"Wrocław"}}},a={args:{errors:{City:{message:"Proszę wybrać miasto"}}}},o={args:{search:null}},t={args:{variant:"default"}};r.parameters={docs:{storyDescription:"Default Select component with 'float' variant, showing a list of cities. The component includes a search functionality and handles errors."}};var s,n,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,p,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    "input-props": {
      value: "Wrocław"
    }
  }
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,d,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    errors: {
      City: {
        message: "Proszę wybrać miasto"
      }
    }
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var h,g,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    search: null
  }
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var w,y,S;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: "default"
  }
}`,...(S=(y=t.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const D=["Default","WithSelectedValue","WithError","WithoutSearch","DefaultVariant"];export{r as Default,t as DefaultVariant,a as WithError,e as WithSelectedValue,o as WithoutSearch,D as __namedExportsOrder,j as default};
