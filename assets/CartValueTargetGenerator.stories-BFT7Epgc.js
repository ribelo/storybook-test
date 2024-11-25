import{aO as c}from"./components-q4nWHTTd.js";import"./index-BBkUAzwr.js";import"./index-DfbGmgP0.js";const d={title:"Frisco/CartValueTarget/CartValueTargetGenerator",component:c,tags:["autodocs"],parameters:{docs:{description:{component:"A component for generating cart value targets with dynamic content based on the cart state."}}},argTypes:{"remaining-price":{control:"number"},"is-active":{control:"boolean"},"success-title":{control:"text"},"success-description":{control:"text"},"title-raw":{control:"text"},"description-raw":{control:"text"},reward:{control:"text"},img:{control:"text"},"img-text-top":{control:"text"},"img-text-bottom":{control:"text"}}},e={args:{"remaining-price":50,"is-active":!1,"success-title":"Super! Otrzymujesz nagrodę!","success-description":"Kupon pojawi się na Twoim koncie w dniu dostawy składanego właśnie zamówienia.","title-raw":"Dodaj jeszcze do koszyka produkty na kwotę {{remainingPrice}} a otrzymasz {{reward}}","description-raw":"Kupon pojawi się na Twoim koncie w dniu dostawy składanego właśnie zamówienia.",reward:"Kupon 20 zł na następne zakupy",img:"https://res.cloudinary.com/dj484tw6k/image/upload/v1629204566/Frisco/Animation.gif","img-text-top":"20zł","img-text-bottom":"rabatu!"}};e.parameters={docs:{storyDescription:"Displays the default cart value target generator with a remaining price to reach the reward."}};const t={args:{...e.args,"is-active":!0}};var a,r,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    "remaining-price": 50,
    "is-active": false,
    "success-title": "Super! Otrzymujesz nagrodę!",
    "success-description": "Kupon pojawi się na Twoim koncie w dniu dostawy składanego właśnie zamówienia.",
    "title-raw": "Dodaj jeszcze do koszyka produkty na kwotę {{remainingPrice}} a otrzymasz {{reward}}",
    "description-raw": "Kupon pojawi się na Twoim koncie w dniu dostawy składanego właśnie zamówienia.",
    reward: "Kupon 20 zł na następne zakupy",
    img: "https://res.cloudinary.com/dj484tw6k/image/upload/v1629204566/Frisco/Animation.gif",
    "img-text-top": "20zł",
    "img-text-bottom": "rabatu!"
  }
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var i,n,s;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    "is-active": true
  }
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const g=["Default","ActiveTarget"];export{t as ActiveTarget,e as Default,g as __namedExportsOrder,d as default};
