import{bk as d}from"./components-q4nWHTTd.js";import"./index-BBkUAzwr.js";import"./index-DfbGmgP0.js";const N={title:"Frisco/NewProductPage/NutriScore",component:d,tags:["autodocs"],parameters:{docs:{description:{component:"NutriScore component that displays the Nutri-Score rating of a product from A to E."}}},argTypes:{score:{control:"select",options:["A","B","C","D","E"],description:"The Nutri-Score rating of the product"}},args:{score:"C"}},r={args:{score:"C"}},o={args:{score:"A"}},e={args:{score:"E"}};r.parameters={docs:{storyDescription:"Domyślny widok komponentu NutriScore z oceną C."}};o.parameters={docs:{storyDescription:"NutriScore z najlepszą możliwą oceną A."}};e.parameters={docs:{storyDescription:"NutriScore z najgorszą możliwą oceną E."}};var s,t,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    score: "C"
  }
}`,...(c=(t=r.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var a,n,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    score: "A"
  }
}`,...(i=(n=o.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var p,m,u;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    score: "E"
  }
}`,...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const f=["DefaultNutriScore","BestScore","WorstScore"];export{o as BestScore,r as DefaultNutriScore,e as WorstScore,f as __namedExportsOrder,N as default};
