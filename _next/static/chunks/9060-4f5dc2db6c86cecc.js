(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9060],{75964:function(e,t,a){"use strict";a.d(t,{Z:function(){return CodeTabs}});var i=a(85893),n=a(94184),s=a.n(n),r=a(898),o=a.n(r);function CodeTabs(e){let{tabs:t,onChange:a,value:n,className:r}=e,l=t.indexOf(n||t[0]);return(0,i.jsx)("div",{className:s()(o().container,r),children:(0,i.jsxs)("div",{className:o().tabs,children:[t.map((e,n)=>(0,i.jsx)("button",{className:s()(o().tab,l===n&&o().active,l+1===n&&o().afterActive,l-1===n&&o().beforeActive,0===n&&0!==l&&o().firstActive),onClick:()=>a&&a(t[n]),children:e},e)),(0,i.jsx)("div",{className:s()(o().filler,l===t.length-1&&o().fillerAfterActive)})]})})}},91693:function(e,t,a){"use strict";a.d(t,{Z:function(){return Cta}});var i=a(85893),n=a(60777),s=a(77570),r=a.n(s),o=a(61609),l=a(67294),c=a(37519);function Cta(e){let{heading:t,subheading:a,primaryCta:s="API docs",secondaryCta:d="Try for free",hideSecondaryCta:m=!1,maxWidth:u=600}=e,{openSalesForm:_}=(0,l.useContext)(c.G);return(0,i.jsx)("div",{className:r().container,children:(0,i.jsx)("div",{className:r().gradientWrapper,children:(0,i.jsx)("div",{className:r().maxWidthWrapper,children:(0,i.jsxs)("div",{className:r().textWrapper,style:{"--max-width":u},children:[(0,i.jsx)(o.Z,{as:"h2",children:t}),(0,i.jsx)("p",{children:a}),(0,i.jsxs)("div",{children:[(0,i.jsx)(n.Z,{size:"large",onClick:()=>_({context:"CTA — General",title:s}),children:s}),!m&&(0,i.jsx)(n.Z,{type:"transparent",size:"large",href:"https://app.evervault.com/register",as:"a",target:"_blank",children:d})]})]})})})})}},97004:function(e,t,a){"use strict";a.d(t,{Z:function(){return Features}});var i=a(85893),n=a(5152),s=a.n(n),r=a(91452),o=a.n(r),l=a(94184),c=a.n(l),d=a(61609);let m=s()(()=>a.e(3531).then(a.bind(a,3531)),{loadableGenerated:{webpack:()=>[3531]},ssr:!1});function Features(e){let{heading:t,size:a,subheading:n,config:s,className:r}=e;return(0,i.jsx)("div",{className:c()(o().container,r),children:(0,i.jsxs)("div",{className:o().maxWidthWrapper,children:[(0,i.jsxs)("div",{className:o().heading,"data-size":a,children:[(0,i.jsx)(d.Z,{as:"h2",width:"70%",interactive:!0,children:t}),n&&(0,i.jsx)("p",{className:o().subHeading,children:n})]}),(0,i.jsx)("div",{className:o().grid,children:s.map((e,t)=>{let{title:a,features:n}=e;return(0,i.jsxs)("div",{children:[a&&(0,i.jsx)("div",{className:o().titleContainer,children:(0,i.jsx)(m,{children:a})}),(0,i.jsx)("div",{className:o().divider}),(0,i.jsx)("div",{className:o().features,children:n.map(e=>{let{icon:t,title:a,description:n}=e;return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:o().featureTitle,children:[t,(0,i.jsx)("h5",{children:a})]}),(0,i.jsx)("p",{children:n})]},a)})})]},a||t)})})]})})}},61609:function(e,t,a){"use strict";a.d(t,{Z:function(){return GradientText}});var i=a(85893),n=a(67294),s=a(91590),r=a.n(s);function clamp(e,t,a){return Math.min(Math.max(a,e),t)}function GradientText(e){let{as:t,className:a,interactive:s,width:o,...l}=e,c=(0,n.useRef)(),d=t||"span",m=[r().text,a].filter(Boolean).join(" ");return(0,n.useEffect)(()=>{if(!s)return;let handleMouseMove=e=>{let t=c.current,a=t.getBoundingClientRect(),i=e.clientX-a.left,n=e.clientY-a.top,s=clamp(0,100,i/a.width*100),r=clamp(0,100,n/a.height*100);t.style.setProperty("--x","".concat(s,"%")),t.style.setProperty("--y","".concat(r,"%"))};return window.addEventListener("mousemove",handleMouseMove),()=>{window.removeEventListener("mousemove",handleMouseMove)}},[s]),(0,i.jsx)(d,{ref:c,style:{"--width":o},className:m,...l})}},39892:function(e,t,a){"use strict";a.d(t,{Z:function(){return Layout}});var i=a(85893),n=a(9008),s=a.n(n),r=a(4298),o=a.n(r),l=JSON.parse('{"@context":"https://schema.org","@type":"Organization","name":"evervault","legalName":"evervault Inc.","url":"https://evervault.com","logo":{"@context":"http://schema.org","@type":"ImageObject","width":"512","height":"512","url":"https://evervault.com/logo.png"},"sameAs":["https://www.linkedin.com/company/evervault/","https://twitter.com/evervault/","https://github.com/evervault/","https://angel.co/company/evervault"],"address":{"@type":"PostalAddress","addressLocality":"Dublin","addressCountry":"IE"}}'),c=a(12034),d=a.n(c),m=a(41664),u=a.n(m);function Layout(e){let{children:t,preview:a,title:n="evervault — Developer building blocks for data security and compliance",description:r="evervault provides developers with world-class infrastructure to solve complex data security and compliance problems in days, not months.",socialImage:c="https://evervault.com/social/og.jpg",head:m,..._}=e;return(0,i.jsxs)("div",{className:d().layout,..._,children:[(0,i.jsxs)(s(),{children:[(0,i.jsx)("title",{children:n}),(0,i.jsx)("meta",{name:"description",content:r}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, user-scalable=no"}),(0,i.jsx)("meta",{name:"theme-color",content:"#63e"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",href:"/favicon.png"}),(0,i.jsx)("link",{rel:"apple-touch-icon",href:"/logo192.png"}),(0,i.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,i.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,i.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"true"}),(0,i.jsx)("meta",{property:"og:title",content:n}),(0,i.jsx)("meta",{property:"og:description",content:r}),(0,i.jsx)("meta",{property:"og:image",content:c}),(0,i.jsx)("meta",{property:"og:site_name",content:"evervault"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:site",content:"@evervault"}),(0,i.jsx)("meta",{name:"twitter:creator",content:"@evervault"}),(0,i.jsx)("meta",{name:"twitter:title",content:n}),(0,i.jsx)("meta",{name:"twitter:description",content:r}),(0,i.jsx)("meta",{name:"twitter:image",content:c}),(0,i.jsx)("meta",{name:"twitter:image:alt",content:n}),(0,i.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(l)}}),(0,i.jsx)(o(),{src:"https://jobs.ashbyhq.com/evervault/embed"}),m]}),a&&(0,i.jsxs)("div",{className:d().preview,children:[(0,i.jsx)("p",{children:"You are in preview mode"}),(0,i.jsx)(u(),{href:"/api/exit-preview",children:"Exit Preview"})]}),(0,i.jsx)("main",{className:d().main,children:t})]})}},62654:function(e,t,a){"use strict";a.d(t,{Z:function(){return Testimonials}});var i=a(85893),n=a(92520),s=a(13589),r=a(11544),o=a(98814),l=a(64998),c=a(94184),d=a.n(c),m=a(67294),u=a(35182),_=a.n(u);function Testimonials(e){let{testimonailsConfig:t,rotationMap:a,logos:c,onClick:u}=e,[p,h]=(0,m.useState)(0),decrypt=()=>{let e=document.getElementById(t[p].id),a=t[p].quote,i=a.split(""),n=0;!function animate(){setTimeout(()=>{let t=e.children[n];t.style.opacity=1,t.innerHTML=i[n],++n<a.length&&animate()},10)}()};return(0,i.jsx)("div",{className:_().container,children:(0,i.jsxs)("div",{className:_().maxWidthWrapper,children:[(0,i.jsx)("div",{className:_().logosContainer,children:(0,i.jsx)(n.E.img,{initial:!1,animate:{rotate:a[p]},src:c,className:_().logosWheel,transition:{duration:1.5,ease:"anticipate"}})}),(0,i.jsxs)(s.S,{children:[(0,i.jsx)(r.M,{mode:"wait",children:t.map((e,t)=>{let{encryptedQuote:a,id:s}=e;return t!==p?null:(0,i.jsx)(n.E.h3,{className:_().quote,id:s,initial:{opacity:0},whileInView:{opacity:1},exit:{opacity:0},transition:{duration:.5},onAnimationComplete:decrypt,children:a.split("").map((e,t)=>(0,i.jsx)("span",{className:_().character,children:e},t+e))},s)})}),(0,i.jsx)(n.E.div,{className:_().authors,layout:!0,transition:{duration:.25},children:t.map((e,a)=>{let{author:n,title:s}=e;return(0,i.jsxs)("button",{onClick:u||(()=>h(a)),className:d()(_().author,a===p&&_().active,1===t.length&&_().solo),children:[n," ",(0,i.jsx)("span",{className:_().title,children:s})]},n)})}),(0,i.jsxs)(n.E.div,{className:_().authorsMobile,layout:!0,transition:{duration:.25},children:[(0,i.jsx)("button",{className:_().mobileNavButton,onClick:()=>{if(0===p)return h(t.length-1);h(e=>e-1)},"data-solo":1===t.length,children:(0,i.jsx)(o.Z,{})}),(0,i.jsxs)("button",{onClick:()=>h(index),className:_().mobileAuthor,children:[t[p].author," ",(0,i.jsx)("span",{className:_().title,children:t[p].title})]},t[p].author),(0,i.jsx)("button",{className:_().mobileNavButton,onClick:()=>{if(p===t.length-1)return h(0);h(e=>e+1)},"data-solo":1===t.length,children:(0,i.jsx)(l.Z,{})})]})]})]})})}},898:function(e){e.exports={container:"CodeTabs_container___fKbI",tabs:"CodeTabs_tabs__JW7qa",filler:"CodeTabs_filler__Dwp7Z",tab:"CodeTabs_tab__LO7L_",active:"CodeTabs_active__JXkR1",afterActive:"CodeTabs_afterActive__tesWW",beforeActive:"CodeTabs_beforeActive___mviz",fillerAfterActive:"CodeTabs_fillerAfterActive__vFWtt",firstActive:"CodeTabs_firstActive__pEGBw"}},77570:function(e){e.exports={container:"Cta_container__pNx4T",gradientWrapper:"Cta_gradientWrapper__lGHRR",maxWidthWrapper:"Cta_maxWidthWrapper__su_4C",textWrapper:"Cta_textWrapper__d5r6y"}},91452:function(e){e.exports={container:"Features_container__Cb2SR",maxWidthWrapper:"Features_maxWidthWrapper__hDSPE",heading:"Features_heading__0Kk_5",subHeading:"Features_subHeading__N7HnS",title:"Features_title__rPQTe",slide:"Features_slide__2BwyB",divider:"Features_divider__1WGjU",features:"Features_features__aEjtw",featureTitle:"Features_featureTitle__oyjT_",titleContainer:"Features_titleContainer__p9cmI"}},91590:function(e){e.exports={text:"styles_text__Fvsk7"}},12034:function(e){e.exports={layout:"Layout_layout__6J70X",main:"Layout_main__k2ohw",section:"Layout_section__n31V6",card:"Layout_card__4Gxa5 p-24 p-sm-32 py-lg-56 px-lg-64",cardSm:"Layout_cardSm__wzRPG Layout_card__4Gxa5 p-24 p-sm-32 py-lg-56 px-lg-64",containedSection:"Layout_containedSection__F3yCP mx-n24 mx-sm-n48 mx-md-n56 mx-lg-n64 mb-32 p-24 p-sm-48 p-sm-56 p-lg-64",postList:"Layout_postList__ngm8u",teamList:"Layout_teamList__Zp6Sg",glow:"Layout_glow__5fr_J",preview:"Layout_preview__dBvbE"}},35182:function(e){e.exports={container:"Testimonials_container__6YNup",maxWidthWrapper:"Testimonials_maxWidthWrapper__qThI_",logosContainer:"Testimonials_logosContainer__89AxU",logosWheel:"Testimonials_logosWheel__UhyCV",quote:"Testimonials_quote__HOJXC",character:"Testimonials_character__XOkar",authors:"Testimonials_authors__Nm6XL",author:"Testimonials_author__8AteI",title:"Testimonials_title__5O5kn",active:"Testimonials_active__8e8fR",authorsMobile:"Testimonials_authorsMobile__hhKJP",mobileAuthor:"Testimonials_mobileAuthor__gqG_l Testimonials_active__8e8fR Testimonials_author__8AteI",mobileNavButton:"Testimonials_mobileNavButton__XH6Yj"}}}]);