import{bq as d}from"./components-q4nWHTTd.js";import"./index-BBkUAzwr.js";import"./index-DfbGmgP0.js";const I={title:"Frisco/NewProductPage/VerticalList",component:d,tags:["autodocs"],parameters:{docs:{description:{component:"VerticalList component that renders a list of items vertically using VerticalListElement."}}},argTypes:{items:{control:"object",description:"Array of items to be rendered in the list"}}},o=[{title:"Item 1",icon:"Check",content:"This is the content for item 1",action:"Action 1",href:"#1"},{title:"Item 2",icon:"Info",content:"This is the content for item 2",action:"Action 2",href:"#2"},{title:"Item 3",icon:"Star",content:"This is the content for item 3",action:"Action 3",href:"#3"}],t={args:{items:o}},e={args:{items:[o[0]]}},s={args:{items:[...o,{title:"Item 4",icon:"Heart",content:"This is the content for item 4",action:"Action 4",href:"#4"},{title:"Item 5",icon:"Bell",content:"This is the content for item 5",action:"Action 5",href:"#5"}]}};t.parameters={docs:{storyDescription:"Default state of the VerticalList component with a few items."}};e.parameters={docs:{storyDescription:"VerticalList with only one item."}};s.parameters={docs:{storyDescription:"VerticalList with many items to test scrolling and layout."}};var n,i,r;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    items: sampleItems
  }
}`,...(r=(i=t.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};var c,a,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    items: [sampleItems[0]]
  }
}`,...(m=(a=e.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var l,p,h;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    items: [...sampleItems, {
      title: "Item 4",
      icon: "Heart",
      content: "This is the content for item 4",
      action: "Action 4",
      href: "#4"
    }, {
      title: "Item 5",
      icon: "Bell",
      content: "This is the content for item 5",
      action: "Action 5",
      href: "#5"
    }]
  }
}`,...(h=(p=s.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const y=["Default","SingleItem","ManyItems"];export{t as Default,s as ManyItems,e as SingleItem,y as __namedExportsOrder,I as default};
