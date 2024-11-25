import{bn as l}from"./components-q4nWHTTd.js";import"./index-BBkUAzwr.js";import"./index-DfbGmgP0.js";const y={title:"Frisco/NewProductPage/ProductMultipackButton",component:l,tags:["autodocs"],parameters:{docs:{description:{component:"ProductMultipackButton component that renders buttons to switch between singlepack and multipack product pages."}}},argTypes:{product:{control:"object",description:"Product object containing singlepack and multipack information"}},args:{product:{"product/singlepack-id":"123","product/multipack-id":"456","product/multipack-size":6,"product/items-count":6}}},t={args:{product:{"product/singlepack-id":"123","product/multipack-id":"456","product/multipack-size":6}}},o={args:{product:{"product/singlepack-id":"123","product/items-count":1}}},r={args:{product:{"product/multipack-id":"456","product/multipack-size":12}}};t.parameters={docs:{storyDescription:"Przyciski dla produktu dostępnego zarówno w pojedynczym opakowaniu, jak i w wielopaku."}};o.parameters={docs:{storyDescription:"Przyciski dla produktu dostępnego tylko w pojedynczym opakowaniu."}};r.parameters={docs:{storyDescription:"Przyciski dla produktu dostępnego tylko w wielopaku."}};var c,a,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    product: {
      "product/singlepack-id": "123",
      "product/multipack-id": "456",
      "product/multipack-size": 6
    }
  }
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var e,i,s;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    product: {
      "product/singlepack-id": "123",
      "product/items-count": 1
    }
  }
}`,...(s=(i=o.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var n,u,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    product: {
      "product/multipack-id": "456",
      "product/multipack-size": 12
    }
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const w=["BothOptionsAvailable","OnlySinglepackAvailable","OnlyMultipackAvailable"];export{t as BothOptionsAvailable,r as OnlyMultipackAvailable,o as OnlySinglepackAvailable,w as __namedExportsOrder,y as default};
