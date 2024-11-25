import{bm as P}from"./components-q4nWHTTd.js";import"./index-BBkUAzwr.js";import"./index-DfbGmgP0.js";const w={title:"Frisco/NewProductPage/NutrientGauge",component:P,tags:["autodocs"],parameters:{docs:{description:{component:"NutrientGauge component that displays nutrient information with a circular gauge."}}},argTypes:{in100Gramms:{control:"text",description:"Amount of nutrient per 100 grams"},dailyPercent:{control:"text",description:"Percentage of daily recommended intake"}},args:{in100Gramms:"10",dailyPercent:"20%",name:{pl:"Białko (g)"}}},n={},e={args:{in100Gramms:"30",dailyPercent:"80%",name:{pl:"Tłuszcz (g)"}}},r={args:{in100Gramms:"2",dailyPercent:"5%",name:{pl:"Cukier (g)"}}},a={args:{in100Gramms:"15",dailyPercent:"",name:{pl:"Błonnik (g)"}}};e.parameters={docs:{storyDescription:"NutrientGauge z wysoką zawartością składnika odżywczego."}};r.parameters={docs:{storyDescription:"NutrientGauge z niską zawartością składnika odżywczego."}};a.parameters={docs:{storyDescription:"NutrientGauge bez podanego procentu dziennego zapotrzebowania."}};var t,o,s;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(s=(o=n.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var c,i,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    in100Gramms: "30",
    dailyPercent: "80%",
    name: {
      pl: "Tłuszcz (g)"
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,g,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    in100Gramms: "2",
    dailyPercent: "5%",
    name: {
      pl: "Cukier (g)"
    }
  }
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var d,l,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    in100Gramms: "15",
    dailyPercent: "",
    name: {
      pl: "Błonnik (g)"
    }
  }
}`,...(y=(l=a.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const N=["Default","HighPercentage","LowPercentage","NoPercentage"];export{n as Default,e as HighPercentage,r as LowPercentage,a as NoPercentage,N as __namedExportsOrder,w as default};
