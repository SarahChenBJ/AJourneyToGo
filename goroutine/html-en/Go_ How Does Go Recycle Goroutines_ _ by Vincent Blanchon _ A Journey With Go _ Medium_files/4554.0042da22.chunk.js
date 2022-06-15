(self.webpackChunklite=self.webpackChunklite||[]).push([[4554],{40358:(e,n,i)=>{"use strict";i.d(n,{E:()=>g});var t=i(67294),l=i(25550),a=i(49608),o=i(77355),d=i(5977),r=i(77520),m=i(26350),s=i(47230),u=i(87691),c=i(92661),k="nav_reg",v=function(e){var n,i=e.loading,l=(0,d.TH)(),a=(0,c.$B)(l.pathname),v=null==a||null===(n=a.route)||void 0===n?void 0:n.name;return t.createElement(o.x,{paddingTop:"40px",display:"flex",alignItems:"center"},t.createElement(o.x,{flexGrow:"1",flexShrink:"0",playwrightClassName:"pw-susi-button"},t.createElement(m.R9,{pageSource:(0,r.x)(v,"register"),operation:"register",susiEntry:k},t.createElement(s.z,{size:"REGULAR",buttonStyle:"BRAND",width:"100%",loading:i,"aria-label":"sign up"},"Get started"))),!i&&t.createElement(o.x,{marginLeft:"24px",playwrightClassName:"pw-sign-in-button"},t.createElement(u.F,{scale:"M",color:"ACCENT"},t.createElement(m.R9,{pageSource:(0,r.x)(v,"login"),operation:"login",susiEntry:k},"Sign In"))))},p=i(10974),g=function(){var e=(0,l.r)(),n=e.viewerId,i=e.loading,d=n&&(0,a.Q)(n);return t.createElement(o.x,null,d?t.createElement(p.N,null):t.createElement(v,{loading:i}))}},19512:(e,n,i)=>{"use strict";i.d(n,{d:()=>ee,m:()=>Z});var t,l=i(67294),a=i(937),o=i(20113),d=function(e){var n=e.publisher,i=e.scale,t=void 0===i?"XS":i;return n.name?l.createElement(o.X6,{playwrightClassName:"pw-author-name",scale:t},n.name):null},r=i(41987),m=i(63038),s=i.n(m),u=i(46829),c=i(25468),k=i(65590),v=i(6443),p=i(62685),g=i(77355),S=i(93310),f=i(73917),N=i(87691),F=i(14646),y=i(75221);!function(e){e[e.Initial=0]="Initial",e[e.Secondary=1]="Secondary",e[e.Dismissed=2]="Dismissed",e[e.Navigating=3]="Navigating",e[e.Updated=4]="Updated"}(t||(t={}));var E=function(e){var n=e.children,i=e.user.id,a=(0,F.I)(),o=(0,v.H)().value,d=i===(null==o?void 0:o.id),r=(0,l.useState)(t.Initial),m=s()(r,2),u=m[0],c=m[1],k=d&&u===t.Initial&&!(null!=o&&o.dismissableFlags.includes(y.T3.BLOGROLL_ENABLE)),E=(0,l.useCallback)((function(e){return function(){return l.createElement(g.x,{minWidth:"240px",padding:"16px"},l.createElement(N.F,{scale:"S",color:"WHITE"},"Blogrolls help your readers discover writers you follow. Writers who have published most recently show up at the top."),l.createElement(g.x,{marginTop:"8px"},l.createElement(N.F,{scale:"S",color:"WHITE"},k&&l.createElement(S.r,{onClick:function(){var n,i;n=t.Dismissed,i=p.$.DISMISSED,c(n),e(i)}},l.createElement("span",{className:a(f.u)},"Got it")))))}}),[u]);return l.createElement(p.o,{flag:y.T3.BLOGROLL_ENABLE,isVisible:k,targetDistance:15,renderFn:E},n)},b=i(319),h=i.n(b),C=i(13085),w=i(14337),x=i(54341),I=i(77136),T={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"UserFollowsListItem_followedEntity"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"FollowedEntity"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherAvatar_publisher"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"hasDomain"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserMentionTooltip_user"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionTooltip_collection"}}]}}]}}].concat(h()(w.v.definitions),h()(x.O.definitions),h()(I.g.definitions))},_=([{kind:"FragmentDefinition",name:{kind:"Name",value:"UserFollowsList_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"customStyleSheet"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"blogroll"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"visibility"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherFollowingCount_publisher"}}]}}].concat(h()(C.b.definitions)),{kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"UserFollowsListQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"userId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"userFollows"},arguments:[{kind:"Argument",name:{kind:"Name",value:"userId"},value:{kind:"Variable",name:{kind:"Name",value:"userId"}}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserFollowsListItem_followedEntity"}}]}}]}}].concat(h()(T.definitions))}),D=i(78757),L=i(30826),U=i(75210),A=i(28695),B=i(42130),V=i(68894),R=function(e){return{"& path":{fill:e.baseColor.text.lighter},":hover path":{fill:e.baseColor.fill.darker},":focus path":{fill:e.baseColor.fill.darker},":hover":{background:e.baseColor.background.normal},padding:"4px",borderRadius:"6px"}},P=function(e){var n=e.popoverRenderFn,i=e.ariaId,t=e.role,a=(0,V.O)(!1),o=s()(a,4),d=o[0],r=o[2],m=o[3];return l.createElement(f.J,{ariaId:i,isVisible:d,placement:"top",targetDistance:10,role:t,popoverRenderFn:n,hide:r,hideOnOutsideClick:!0,noPortal:!0},l.createElement(S.r,{onClick:m,rules:R,"aria-controls":i,"aria-expanded":d},l.createElement(B.Z,null)))},O=function(e){return{"& p":{wordBreak:"break-all"},":hover p":{textDecoration:"underline",color:e.baseColor.text.light}}},G=function(e){var n=e.entity,i=(0,D.P)(n),t=(0,l.useCallback)((function(){return"User"===n.__typename?l.createElement(A.K,{user:n}):l.createElement(U.L,{collection:n,buttonSize:"COMPACT",buttonStyleFn:function(e){return e?"OBVIOUS":"STRONG"}})}),[n]);return l.createElement(g.x,{tag:"li",display:"flex",justifyContent:"space-between",alignItems:"center"},l.createElement(S.r,{href:i,rules:O},l.createElement(g.x,{display:"flex",paddingRight:"10px"},l.createElement(g.x,{paddingRight:"12px"},l.createElement(L.G,{publisher:n,scale:"XXXS"})),l.createElement(N.F,{clamp:1,scale:"S",color:"LIGHTER"},n.name))),l.createElement(P,{popoverRenderFn:t,ariaId:"creatorInfoPopover-".concat(n.id),role:"dialog"}))},M=i(18627),H=i(66411),z=i(18122),X=i(97217),W=i(21372),Q=function(e){var n,i=e.user,t=i.id,a=i.customStyleSheet,d=(0,v.H)().value,r=t===(null==d?void 0:d.id),m=(0,M.Av)(),p=(0,z.g)({onPresentedFn:function(){return m.event("sidebar.blogrollViewed",{viewerIsAuthor:r})}}),f=(0,u.useLazyQuery)(_,{ssr:!0,variables:{userId:t,limit:5}}),F=s()(f,2),y=F[0],b=F[1],h=b.called,C=b.loading,w=b.error,x=b.data,I=(x=void 0===x?{userFollows:void 0}:x).userFollows,T=(0,c.g)(i),D=T.isFollowingCountVisible,L=T.followingCount,U=(0,l.useState)(),A=s()(U,2),B=A[0],V=A[1],R=(0,l.useState)(!1),P=s()(R,2),O=P[0],Q=P[1],j=(0,l.useCallback)((function(){return Q(!0)}),[]),q=(0,l.useCallback)((function(){return Q(!1)}),[]);if((null==a||null===(n=a.blogroll)||void 0===n?void 0:n.visibility)===X.n$.BLOGROLL_VISIBILITY_HIDDEN)return null;if(!h)return y(),null;if(C||w||!I||!I.length||L<5)return null;var Y=D?"See all (".concat((0,W.rR)(L),")"):"See all";return l.createElement(H.cW,{source:{name:"blogrolls_sidebar"}},l.createElement(g.x,{ref:p,position:"relative"},l.createElement(E,{user:i},l.createElement(o.X6,{scale:"XS",tag:"span"},"Following"),l.createElement(g.x,{marginTop:"16px",marginBottom:"16px",tag:"ul"},I.map((function(e){return l.createElement(G,{key:null==e?void 0:e.id,entity:e,isTooltipActive:B===e.id,onMouseEnter:function(){return V(e.id)}})}))),l.createElement(N.F,{scale:"S"},l.createElement(S.r,{linkStyle:"SUBTLE",onClick:j},Y)),l.createElement(k.A,{hide:q,publisher:i,followingCount:L,isVisible:O}))))},j=i(84739),q=i(14818),Y=i(24330),$=i(43487),J=i(87498),K=i(50458),Z=88,ee=function(e){var n=e.includeBlogRoll,i=e.user,t=(0,v.H)().value,o=(0,$.v9)((function(e){return e.config.authDomain})),m=t&&t.id===i.id,s=(0,j.B)(i);return l.createElement(l.Fragment,null,l.createElement(S.r,{href:s},l.createElement(q.z,{alt:i.name||"",miroId:i.imageId||J.gG,diameter:Z})),l.createElement(g.x,{marginTop:"16px"}),l.createElement(S.r,{href:s},l.createElement(d,{publisher:i})),l.createElement(g.x,{marginTop:"4px"}),l.createElement(r.e,{publisher:i}),l.createElement(g.x,{marginTop:"12px"}),l.createElement(a.y,{publisher:i}),m&&l.createElement(g.x,{marginTop:"24px",marginBottom:"46px"},l.createElement(N.F,{scale:"S",color:"ACCENT"},l.createElement(S.r,{href:(0,K.McF)(o)},"Edit profile"))),l.createElement(g.x,{marginTop:"24px"}),!m&&l.createElement(H.cW,{source:{name:"publisher_header_actions"},extendSource:!0},l.createElement(g.x,{display:"flex",marginBottom:"40px"},l.createElement(Y.N,{creator:i,followButtonSize:"REGULAR",susiEntry:"follow_profile",showFirstUseToolTip:!0,showMembershipUpsellModal:!0,width:"auto"}))),n&&l.createElement(Q,{user:i}))}},1279:(e,n,i)=>{"use strict";i.d(n,{m:()=>t});var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherDescription_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"description"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"bio"}}]}}]}}]}},937:(e,n,i)=>{"use strict";i.d(n,{y:()=>d});var t=i(67294),l=i(14294),a=i(38882),o=i(87691),d=function(e){var n=e.publisher,i="Collection"===n.__typename?n.description:n.bio;return i?t.createElement(o.F,{scale:"M"},t.createElement(a.c.Provider,{value:!0},t.createElement(l.P,{wrapLinks:!0},i))):null}},13085:(e,n,i)=>{"use strict";i.d(n,{b:()=>t});var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherFollowingCount_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"socialStats"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"followingCount"}},{kind:"Field",name:{kind:"Name",value:"collectionFollowingCount"}}]}},{kind:"Field",name:{kind:"Name",value:"username"}}]}}]}}]}},25468:(e,n,i)=>{"use strict";i.d(n,{g:()=>m,D:()=>s});var t=i(63038),l=i.n(t),a=i(67294),o=i(65590),d=i(93310),r=i(21372),m=function(e){var n,i,t,l,a=0;return"User"===e.__typename&&(a=(null!==(n=null===(i=e.socialStats)||void 0===i?void 0:i.followingCount)&&void 0!==n?n:0)+(null!==(t=null===(l=e.socialStats)||void 0===l?void 0:l.collectionFollowingCount)&&void 0!==t?t:0)),{followingCount:a,isFollowingCountVisible:a>0}},s=function(e){var n=e.publisher,i=e.linkStyle,t=void 0===i?"SUBTLE":i,s=m(n),u=s.followingCount,c=s.isFollowingCountVisible,k=(0,a.useState)(!1),v=l()(k,2),p=v[0],g=v[1];if(!c)return null;var S="".concat((0,r.pY)(u)," Following");return a.createElement(a.Fragment,null,a.createElement(d.r,{linkStyle:t,onClick:function(){return g(!0)}},S),a.createElement(o.A,{hide:function(){return g(!1)},publisher:n,followingCount:u,isVisible:p}))}},65590:(e,n,i)=>{"use strict";i.d(n,{A:()=>v});var t=i(319),l=i.n(t),a=i(82492),o=i.n(a),d=i(46829),r=i(67294),m=i(19262),s=i(69387),u=i(84683),c={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"DialogCollectionEntity_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"slug"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionAvatar_collection"}}]}}].concat(l()(u.d.definitions))},k={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"PublisherFollowingDialogUserQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"pagingInfo"}},type:{kind:"NamedType",name:{kind:"Name",value:"PagingOptions"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"user"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"followingEntityConnection"},arguments:[{kind:"Argument",name:{kind:"Name",value:"paging"},value:{kind:"Variable",name:{kind:"Name",value:"pagingInfo"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"entities"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"DialogUserEntity_user"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"DialogCollectionEntity_collection"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"pagingInfo"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"next"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"to"}},{kind:"Field",name:{kind:"Name",value:"limit"}},{kind:"Field",name:{kind:"Name",value:"from"}}]}}]}}]}}]}}]}}].concat(l()(s.U.definitions),l()(c.definitions))},v=function(e){var n,i,t,a,s,u=e.publisher,c=e.followingCount,v=e.isVisible,p=e.hide,g=(0,d.useQuery)(k,{variables:{id:u.id,pagingInfo:{limit:10}}}),S=g.data,f=g.error,N=g.fetchMore,F=null==S||null===(n=S.user)||void 0===n||null===(i=n.followingEntityConnection)||void 0===i?void 0:i.entities,y=null==S||null===(t=S.user)||void 0===t||null===(a=t.followingEntityConnection)||void 0===a||null===(s=a.pagingInfo)||void 0===s?void 0:s.next;return f||0===c?null:r.createElement(m.L,{hide:p,isVisible:v,heading:"".concat(c," Following"),entities:F,pagingInfoNext:y,handleFetchMore:function(){if(y){var e=y.limit,n=y.to,i=y.from;N({variables:{pagingInfo:{limit:e,to:n,from:i}},updateQuery:function(e,n){var i,t,a,d,r,m,s=n.fetchMoreResult;return o()({},s,{user:{followingEntityConnection:{entities:[].concat(l()(null!==(i=null==e||null===(t=e.user)||void 0===t||null===(a=t.followingEntityConnection)||void 0===a?void 0:a.entities)&&void 0!==i?i:[]),l()(null!==(d=null==s||null===(r=s.user)||void 0===r||null===(m=r.followingEntityConnection)||void 0===m?void 0:m.entities)&&void 0!==d?d:[]))}}})}})}}})}},14337:(e,n,i)=>{"use strict";i.d(n,{v:()=>d});var t=i(319),l=i.n(t),a=i(84683),o=i(27048),d={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherAvatar_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionAvatar_collection"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserAvatar_user"}}]}}]}}].concat(l()(a.d.definitions),l()(o.W.definitions))}},30826:(e,n,i)=>{"use strict";i.d(n,{G:()=>o});var t=i(67294),l=i(71652),a=i(17193),o=function(e){var n=e.link,i=void 0!==n&&n,o=e.scale,d=void 0===o?"M":o,r=e.publisher,m=e.withHalo,s=void 0===m||m;switch(r.__typename){case"User":return t.createElement(a.Yt,{link:i,scale:d,user:r,withHalo:s});case"Collection":return t.createElement(l.v,{link:i,size:a.wC[d],collection:r});default:return null}}},77136:(e,n,i)=>{"use strict";i.d(n,{g:()=>d});var t=i(319),l=i.n(t),a=i(84683),o=i(19308),d={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CollectionTooltip_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"description"}},{kind:"Field",name:{kind:"Name",value:"subscriberCount"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionAvatar_collection"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionFollowButton_collection"}}]}}].concat(l()(a.d.definitions),l()(o.Iq.definitions))}},75210:(e,n,i)=>{"use strict";i.d(n,{L:()=>m});var t=i(67294),l=i(71652),a=i(82405),o=i(77355),d=i(20113),r=i(87691),m=function(e){var n=e.collection,i=e.buttonSize,m=e.buttonStyleFn,s=n.name,u=n.description;return t.createElement(o.x,{padding:"15px",display:"flex",flexDirection:"column",width:"300px"},t.createElement(o.x,{display:"flex",flexDirection:"row",justifyContent:"space-between",whiteSpace:"normal",borderBottom:"BASE_LIGHTER",paddingBottom:"10px",marginBottom:"10px"},t.createElement(o.x,{display:"flex",flexDirection:"column",paddingRight:"5px"},t.createElement(d.X6,{scale:"S"},s),t.createElement(r.F,{scale:"S"},u)),t.createElement(o.x,null,t.createElement(l.v,{collection:n,link:!0}))),t.createElement(o.x,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},t.createElement(r.F,{scale:"M"},"Followed by ",n.subscriberCount," people"),t.createElement(a.Fp,{collection:n,buttonSize:i,buttonStyleFn:m,susiEntry:"follow_card"})))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/4554.0042da22.chunk.js.map