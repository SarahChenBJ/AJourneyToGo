(self.webpackChunklite=self.webpackChunklite||[]).push([[5281],{29969:(e,n,i)=>{"use strict";i.d(n,{X:()=>y});var t=i(63038),a=i.n(t),l=i(59713),d=i.n(l),o=i(67294),m=i(19616),r=i(83302),s=i(25735),c=i(6443),u=i(67701),k=i(77355),v=i(93310),p=i(20113),N=i(87691),S=i(18627),F=i(66411),g=i(14646),f=i(31889),w=i(34135),E=i(97217),V=i(43487),_=i(97489),T=i(50458),x=function(e,n){var i;return i={borderTop:"3px solid ".concat(e.accentColor.border.normal),padding:"32px 32px 26px 32px",marginTop:"8px",marginBottom:"25px",backgroundColor:e.baseColor.background.light},d()(i,_.sm(e),{padding:"24px 24px 28px 24px"}),d()(i,"minHeight",n),i},C=function(e){var n=e.viewer,i=e.newsletterV3,t=e.newsletterV3LandingUrl,a=e.useCustomDomainLOFlow,l=e.isVertical,d=e.handleClick;return n||a?i&&o.createElement(m.x,{newsletterV3:i,buttonLayout:"COMPACT",helperTextColor:"DARKER",redirectUrl:a?t:void 0}):i&&o.createElement(r.QL,{newsletterV3:i,isVertical:l,handleClick:d})},y=function(e){var n,i,t,l,d,m=e.postId,r=e.publisher,_=e.isVertical,y=void 0!==_&&_,h=o.useRef(null),b=(0,V.v9)((function(e){return e.config.authDomain})),R=(0,S.Av)(),D=(0,g.I)(),L=(0,f.F)(),B=(0,c.H)().value,P=!!(0,s.VB)({name:"enable_newsletter_lo_flow_custom_domains",placeholder:!1}),O=o.useState(!1),U=a()(O,2),I=U[0],A=U[1],M=o.useState("0px"),W=a()(M,2),Y=W[0],H=W[1],G=null==(0,V.v9)((function(e){return e.navigation.currentLocation})).match("http[s]?://[^/]*".concat(b)),K=!B&&G&&P,X=r.newsletterV3,Q=null==X?void 0:X.type,Z=r.username,j=void 0===Z?"":Z,q=(0,T.iBn)(null!==(n=null==X?void 0:X.slug)&&void 0!==n?n:"",b,Q===E.Rr.NEWSLETTER_TYPE_COLLECTION?r:void 0,Q===E.Rr.NEWSLETTER_TYPE_AUTHOR&&j?j:void 0),z="Collection"===r.__typename?r:void 0,J=(0,u.gY)(z).viewerEdge;switch(Q){case E.Rr.NEWSLETTER_TYPE_COLLECTION:i="Sign up for ".concat(null==X?void 0:X.name),t="0px",l="You're an editor of ".concat(null==X?void 0:X.name),d=null==J?void 0:J.isEditor;break;case E.Rr.NEWSLETTER_TYPE_AUTHOR:i=(null==X?void 0:X.promoHeadline)||"Get an email whenever ".concat(r.name," publishes."),t="6px",l="You cannot subscribe to yourself",d=r.viewerIsUser}I&&(i="Check your inbox.");var $=!1,ee=function(){!$&&ne()&&(R.event("newsletterV3.promoViewed",{newsletterV3Id:null==X?void 0:X.id,postId:m}),$=!0)},ne=function(){var e;if(!h.current)return!1;var n=null===(e=h.current)||void 0===e?void 0:e.getBoundingClientRect(),i=n.top+n.height/2;return i>=0&&i<=window.innerHeight};return o.useEffect((function(){return ee(),window&&w.V6.on("scroll",ee),function(){w.V6.off("scroll",ee)}}),[]),o.useEffect((function(){var e;if(h.current){var n=(null===(e=h.current)||void 0===e?void 0:e.getBoundingClientRect()).height;H("".concat(n,"px"))}}),[h]),X&&o.createElement(F.cW,{source:{name:"newsletter_v3_promo",susiEntry:"newsletter_v3_promo"}},o.createElement("div",{ref:h,className:y?void 0:D(x(L,Y))},o.createElement(k.x,{paddingBottom:t},o.createElement(p.X6,{scale:{xs:"S",sm:"S",md:y?"S":"M",lg:y?"S":"M",xl:y?"S":"M"}},i)),Q===E.Rr.NEWSLETTER_TYPE_COLLECTION&&!I&&o.createElement(o.Fragment,null,o.createElement(k.x,{paddingTop:"4px"},o.createElement(N.F,{tag:"h3",scale:"S",color:"DARKER"},"By ".concat(r.name))),o.createElement(k.x,{paddingTop:"8px",paddingBottom:"10px"},o.createElement(N.F,{scale:y?"S":{xs:"M",sm:"M",md:"L",lg:"L",xl:"L"},color:"DARKER"},null==X?void 0:X.description," ",o.createElement(v.r,{inline:!0,linkStyle:"OBVIOUS",href:q},"Take a look.")))),Q===E.Rr.NEWSLETTER_TYPE_AUTHOR&&(null==X?void 0:X.promoBody)&&!I&&o.createElement(o.Fragment,null,o.createElement(k.x,{paddingTop:"8px",paddingBottom:"8px"},o.createElement(N.F,{scale:{xs:"M",sm:"M",md:"L",lg:"L",xl:"L"},color:"DARKER"},null==X?void 0:X.promoBody))),d?o.createElement(k.x,{paddingTop:"10px"},o.createElement(N.F,{scale:"M",color:"DARKER"},l)):o.createElement(k.x,{display:"flex",flexWrap:"wrap"},o.createElement(C,{viewer:B,useCustomDomainLOFlow:K,newsletterV3:X,newsletterV3LandingUrl:q,isVertical:y,handleClick:function(){return A(!0)}}))))}},76705:(e,n,i)=>{"use strict";i.d(n,{Rf:()=>p,kD:()=>v,WZ:()=>k});var t=i(319),a=i.n(t),l=i(95472),d={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"NewsletterV3AmpButton_newsletterV3"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"NewsletterV3"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"collection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"collectionDefaultBackgroundTheme_collection"}}]}}]}}].concat(a()(l.Gi.definitions))},o=i(98007),m=i(31579),r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"NewsletterV3SubscribeButton_newsletterV3"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"NewsletterV3"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"slug"}},{kind:"Field",name:{kind:"Name",value:"type"}},{kind:"Field",name:{kind:"Name",value:"user"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"username"}}]}},{kind:"Field",name:{kind:"Name",value:"collection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"slug"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SusiClickable_collection"}},{kind:"FragmentSpread",name:{kind:"Name",value:"collectionDefaultBackgroundTheme_collection"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"SusiClickable_newsletterV3"}},{kind:"FragmentSpread",name:{kind:"Name",value:"useNewsletterV3Subscription_newsletterV3"}}]}}].concat(a()(o.Os.definitions),a()(l.Gi.definitions),a()(o.GB.definitions),a()(m.DI.definitions))},s=i(68216),c={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"NewsletterV3SubscribeByEmail_newsletterV3"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"NewsletterV3"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"slug"}},{kind:"Field",name:{kind:"Name",value:"type"}},{kind:"Field",name:{kind:"Name",value:"user"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"username"}}]}},{kind:"Field",name:{kind:"Name",value:"collection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"collectionDefaultBackgroundTheme_collection"}},{kind:"FragmentSpread",name:{kind:"Name",value:"collectionUrl_collection"}}]}}]}}].concat(a()(l.Gi.definitions),a()(s.nf.definitions))},u={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"NewsletterV3Promo_newsletterV3"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"NewsletterV3"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"slug"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"description"}},{kind:"Field",name:{kind:"Name",value:"promoHeadline"}},{kind:"Field",name:{kind:"Name",value:"promoBody"}},{kind:"FragmentSpread",name:{kind:"Name",value:"NewsletterV3AmpButton_newsletterV3"}},{kind:"FragmentSpread",name:{kind:"Name",value:"NewsletterV3SubscribeButton_newsletterV3"}},{kind:"FragmentSpread",name:{kind:"Name",value:"NewsletterV3SubscribeByEmail_newsletterV3"}}]}}].concat(a()(d.definitions),a()(r.definitions),a()(c.definitions))},k={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"NewsletterV3Promo_publisher_User"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"viewerIsUser"}},{kind:"Field",name:{kind:"Name",value:"newsletterV3"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"NewsletterV3Promo_newsletterV3"}}]}}]}}].concat(a()(u.definitions))},v={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"NewsletterV3Promo_publisher_Collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"slug"}},{kind:"Field",name:{kind:"Name",value:"domain"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"newsletterV3"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"NewsletterV3Promo_newsletterV3"}}]}}]}}].concat(a()(u.definitions))},p={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"NewsletterV3Promo_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"NewsletterV3Promo_publisher_User"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"NewsletterV3Promo_publisher_Collection"}}]}}]}}].concat(a()(k.definitions),a()(v.definitions))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/5281.652a7988.chunk.js.map