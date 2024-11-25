import{bO as c}from"./components-q4nWHTTd.js";import"./index-BBkUAzwr.js";import"./index-DfbGmgP0.js";const m={title:"Frisco/Reservations/ReservationBadge",component:c,tags:["autodocs"],parameters:{docs:{description:{component:"ReservationBadge component displays reservation status information."}}},argTypes:{reservation:{control:"object",description:"Reservation object containing details"}},args:{reservation:{"order-possible-at":new Date(Date.now()+2*60*60*1e3).toISOString(),expiresAt:new Date(Date.now()+24*60*60*1e3).toISOString(),selected:!1}}},r={},e={args:{reservation:{orderPossibleAt:new Date(Date.now()+2*60*60*1e3).toISOString(),selected:!1}}};e.parameters={docs:{storyDescription:"ReservationBadge showing when the reservation becomes available."}};var t,o,a;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var s,n,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    reservation: {
      orderPossibleAt: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
      selected: false
    }
  }
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const g=["Default","AvailableFrom"];export{e as AvailableFrom,r as Default,g as __namedExportsOrder,m as default};
