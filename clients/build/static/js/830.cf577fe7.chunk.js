"use strict";(self.webpackChunkclients=self.webpackChunkclients||[]).push([[830],{4830:function(e,t,n){n.r(t),n.d(t,{default:function(){return ce}});var i=n(9439),r=n(2791),a=n(7689),o=n(5372),l=n(4373),c=n(4554),d=n(4942),s=n(3366),u=n(7462),h=n(3733),p=n(4419),v=n(2065),f=n(4036),m=n(7630),g=n(5158),x=n(2930),Z=n(2982),b=n(5878),w=n(1217);function S(e){return(0,w.Z)("PrivateSwitchBase",e)}(0,b.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var k=n(184),y=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],j=(0,m.ZP)(Z.Z)((function(e){var t=e.ownerState;return(0,u.Z)({padding:9,borderRadius:"50%"},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})})),C=(0,m.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),R=r.forwardRef((function(e,t){var n=e.autoFocus,r=e.checked,a=e.checkedIcon,o=e.className,l=e.defaultChecked,c=e.disabled,d=e.disableFocusRipple,v=void 0!==d&&d,m=e.edge,Z=void 0!==m&&m,b=e.icon,w=e.id,R=e.inputProps,z=e.inputRef,I=e.name,P=e.onBlur,L=e.onChange,F=e.onFocus,B=e.readOnly,E=e.required,M=void 0!==E&&E,N=e.tabIndex,T=e.type,A=e.value,D=(0,s.Z)(e,y),O=(0,g.Z)({controlled:r,default:Boolean(l),name:"SwitchBase",state:"checked"}),H=(0,i.Z)(O,2),V=H[0],_=H[1],W=(0,x.Z)(),Y=c;W&&"undefined"===typeof Y&&(Y=W.disabled);var q="checkbox"===T||"radio"===T,G=(0,u.Z)({},e,{checked:V,disabled:Y,disableFocusRipple:v,edge:Z}),J=function(e){var t=e.classes,n=e.checked,i=e.disabled,r=e.edge,a={root:["root",n&&"checked",i&&"disabled",r&&"edge".concat((0,f.Z)(r))],input:["input"]};return(0,p.Z)(a,S,t)}(G);return(0,k.jsxs)(j,(0,u.Z)({component:"span",className:(0,h.Z)(J.root,o),centerRipple:!0,focusRipple:!v,disabled:Y,tabIndex:null,role:void 0,onFocus:function(e){F&&F(e),W&&W.onFocus&&W.onFocus(e)},onBlur:function(e){P&&P(e),W&&W.onBlur&&W.onBlur(e)},ownerState:G,ref:t},D,{children:[(0,k.jsx)(C,(0,u.Z)({autoFocus:n,checked:r,defaultChecked:l,className:J.input,disabled:Y,id:q?w:void 0,name:I,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var t=e.target.checked;_(t),L&&L(e,t)}},readOnly:B,ref:z,required:M,ownerState:G,tabIndex:N,type:T},"checkbox"===T&&void 0===A?{}:{value:A},R)),V?a:b]}))})),z=n(9201),I=(0,z.Z)((0,k.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),P=(0,z.Z)((0,k.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),L=(0,z.Z)((0,k.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),F=n(1046);function B(e){return(0,w.Z)("MuiCheckbox",e)}var E=(0,b.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),M=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],N=(0,m.ZP)(R,{shouldForwardProp:function(e){return(0,m.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.indeterminate&&t.indeterminate,"default"!==n.color&&t["color".concat((0,f.Z)(n.color))]]}})((function(e){var t,n=e.theme,i=e.ownerState;return(0,u.Z)({color:(n.vars||n).palette.text.secondary},!i.disableRipple&&{"&:hover":{backgroundColor:n.vars?"rgba(".concat("default"===i.color?n.vars.palette.action.activeChannel:n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,v.Fq)("default"===i.color?n.palette.action.active:n.palette[i.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==i.color&&(t={},(0,d.Z)(t,"&.".concat(E.checked,", &.").concat(E.indeterminate),{color:(n.vars||n).palette[i.color].main}),(0,d.Z)(t,"&.".concat(E.disabled),{color:(n.vars||n).palette.action.disabled}),t))})),T=(0,k.jsx)(P,{}),A=(0,k.jsx)(I,{}),D=(0,k.jsx)(L,{}),O=r.forwardRef((function(e,t){var n,i,a=(0,F.Z)({props:e,name:"MuiCheckbox"}),o=a.checkedIcon,l=void 0===o?T:o,c=a.color,d=void 0===c?"primary":c,v=a.icon,m=void 0===v?A:v,g=a.indeterminate,x=void 0!==g&&g,Z=a.indeterminateIcon,b=void 0===Z?D:Z,w=a.inputProps,S=a.size,y=void 0===S?"medium":S,j=a.className,C=(0,s.Z)(a,M),R=x?b:m,z=x?b:l,I=(0,u.Z)({},a,{color:d,indeterminate:x,size:y}),P=function(e){var t=e.classes,n=e.indeterminate,i=e.color,r=e.size,a={root:["root",n&&"indeterminate","color".concat((0,f.Z)(i)),"size".concat((0,f.Z)(r))]},o=(0,p.Z)(a,B,t);return(0,u.Z)({},t,o)}(I);return(0,k.jsx)(N,(0,u.Z)({type:"checkbox",inputProps:(0,u.Z)({"data-indeterminate":x},w),icon:r.cloneElement(R,{fontSize:null!=(n=R.props.fontSize)?n:y}),checkedIcon:r.cloneElement(z,{fontSize:null!=(i=z.props.fontSize)?i:y}),ownerState:I,ref:t,className:(0,h.Z)(P.root,j)},C,{classes:P}))})),H=n(493),V=n(4220),_=n(3433),W=n(890),Y=(0,z.Z)((0,k.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),q=(0,z.Z)((0,k.jsx)("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder"),G=n(5806),J=(0,m.ZP)(c.Z)({padding:"0 0 0 10px",background:"#f2f6fc",display:"flex",alignItems:"center",cursor:"pointer","& > div":{display:"flex",width:"100%","& > p":{fontSize:14}}}),U=(0,m.ZP)(W.Z)({fontSize:"12px !important",background:"#ddd",color:"#222",borderRadius:4,marginRight:6}),X=(0,m.ZP)(W.Z)({marginLeft:"auto",marginRight:20,fontSize:12,color:"#5F6368"}),K=function(e){var t=e.email,n=e.selectedEmails,i=e.setSelectedEmails,r=e.setRefreshScreen,d=(0,a.s0)(),s=(0,l.Z)(o.Y.toggleStarredMails),u=function(){s.call({id:t._id,value:!t.starred}),r((function(e){return!e}))};return(0,k.jsxs)(J,{children:[(0,k.jsx)(O,{size:"small",checked:n.includes(t._id),onChange:function(){n.includes(t._id)?i((function(e){return e.filter((function(e){return e!==t._id}))})):i((function(e){return[].concat((0,_.Z)(e),[t._id])}))}}),t.starred?(0,k.jsx)(Y,{fontSize:"small",style:{marginRight:10,color:"#FFF200"},onClick:function(){return u()}}):(0,k.jsx)(q,{fontSize:"small",style:{marginRight:10},onClick:function(){return u()}}),(0,k.jsxs)(c.Z,{onClick:function(){return d(G._.view.path,{state:{email:t}})},children:[(0,k.jsx)(W.Z,{style:{width:200,overflow:"hidden"},children:t.name}),(0,k.jsx)(U,{children:"INBOX"}),(0,k.jsxs)(W.Z,{children:[t.subject,t.body&&"-",t.body]}),(0,k.jsxs)(X,{children:[new window.Date(t.date).getDate(),"\xa0",new window.Date(t.date).toLocaleString("default",{month:"long"})]})]})]})};function Q(e){return(0,w.Z)("MuiDivider",e)}(0,b.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var $=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],ee=(0,m.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.absolute&&t.absolute,t[n.variant],n.light&&t.light,"vertical"===n.orientation&&t.vertical,n.flexItem&&t.flexItem,n.children&&t.withChildren,n.children&&"vertical"===n.orientation&&t.withChildrenVertical,"right"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignRight,"left"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignLeft]}})((function(e){var t=e.theme,n=e.ownerState;return(0,u.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},n.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},n.light&&{borderColor:t.vars?"rgba(".concat(t.vars.palette.dividerChannel," / 0.08)"):(0,v.Fq)(t.palette.divider,.08)},"inset"===n.variant&&{marginLeft:72},"middle"===n.variant&&"horizontal"===n.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===n.variant&&"vertical"===n.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===n.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},n.flexItem&&{alignSelf:"stretch",height:"auto"})}),(function(e){var t=e.ownerState;return(0,u.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}})}),(function(e){var t=e.theme,n=e.ownerState;return(0,u.Z)({},n.children&&"vertical"!==n.orientation&&{"&::before, &::after":{width:"100%",borderTop:"thin solid ".concat((t.vars||t).palette.divider)}})}),(function(e){var t=e.theme,n=e.ownerState;return(0,u.Z)({},n.children&&"vertical"===n.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:"thin solid ".concat((t.vars||t).palette.divider)}})}),(function(e){var t=e.ownerState;return(0,u.Z)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),te=(0,m.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:function(e,t){var n=e.ownerState;return[t.wrapper,"vertical"===n.orientation&&t.wrapperVertical]}})((function(e){var t=e.theme,n=e.ownerState;return(0,u.Z)({display:"inline-block",paddingLeft:"calc(".concat(t.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(t.spacing(1)," * 1.2)")},"vertical"===n.orientation&&{paddingTop:"calc(".concat(t.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(t.spacing(1)," * 1.2)")})})),ne=r.forwardRef((function(e,t){var n=(0,F.Z)({props:e,name:"MuiDivider"}),i=n.absolute,r=void 0!==i&&i,a=n.children,o=n.className,l=n.component,c=void 0===l?a?"div":"hr":l,d=n.flexItem,v=void 0!==d&&d,f=n.light,m=void 0!==f&&f,g=n.orientation,x=void 0===g?"horizontal":g,Z=n.role,b=void 0===Z?"hr"!==c?"separator":void 0:Z,w=n.textAlign,S=void 0===w?"center":w,y=n.variant,j=void 0===y?"fullWidth":y,C=(0,s.Z)(n,$),R=(0,u.Z)({},n,{absolute:r,component:c,flexItem:v,light:m,orientation:x,role:b,textAlign:S,variant:j}),z=function(e){var t=e.absolute,n=e.children,i=e.classes,r=e.flexItem,a=e.light,o=e.orientation,l=e.textAlign,c={root:["root",t&&"absolute",e.variant,a&&"light","vertical"===o&&"vertical",r&&"flexItem",n&&"withChildren",n&&"vertical"===o&&"withChildrenVertical","right"===l&&"vertical"!==o&&"textAlignRight","left"===l&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,p.Z)(c,Q,i)}(R);return(0,k.jsx)(ee,(0,u.Z)({as:c,className:(0,h.Z)(z.root,o),role:b,ref:t,ownerState:R},C,{children:a?(0,k.jsx)(te,{className:z.wrapper,ownerState:R,children:a}):null}))}));ne.muiSkipListHighlight=!0;var ie=ne,re=(0,m.ZP)(c.Z)({display:"flex",alignItems:"center",flexDirection:"column",marginTop:50,opacity:".8",width:"100%"}),ae=(0,m.ZP)(ie)({width:"100%",marginTop:10}),oe=function(e){var t=e.message;return(0,k.jsxs)(re,{children:[(0,k.jsxs)(W.Z,{children:[null===t||void 0===t?void 0:t.heading," "]}),(0,k.jsxs)(W.Z,{children:[null===t||void 0===t?void 0:t.subHeading," "]}),(0,k.jsx)(ae,{})]})},le=n(6148),ce=function(){var e,t,n=(0,r.useState)([]),d=(0,i.Z)(n,2),s=d[0],u=d[1],h=(0,r.useState)(!1),p=(0,i.Z)(h,2),v=p[0],f=p[1],m=(0,a.bx)().openDrawer,g=(0,a.UO)().type,x=(0,l.Z)(o.Y.getEmailFromType),Z=(0,l.Z)(o.Y.deleteEmails),b=(0,l.Z)(o.Y.moveEmailsToBin);(0,r.useEffect)((function(){x.call({},g)}),[g,v]);return(0,k.jsxs)(c.Z,{style:m?{marginLeft:250,width:"calc(100%-250px)"}:{width:"100%"},children:[(0,k.jsxs)(c.Z,{style:{padding:"20px 10px 0px 10px",display:"flex",alignItems:"center"},children:[(0,k.jsx)(O,{size:"small",onChange:function(e){return function(e){if(e.target.checked){var t,n=null===x||void 0===x||null===(t=x.response)||void 0===t?void 0:t.map((function(e){return e._id}));u(n)}else u([])}(e)}}),(0,k.jsx)(V.Z,{onClick:function(e){return"bin"===g?Z.call(s):b.call(s),void f((function(e){return!e}))}})]}),(0,k.jsx)(H.Z,{children:null===x||void 0===x||null===(e=x.response)||void 0===e?void 0:e.map((function(e){return(0,k.jsx)(K,{email:e,selectedEmails:s,setSelectedEmails:u,setRefreshScreen:f},e.id)}))}),(0,k.jsx)(H.Z,{children:0===(null===x||void 0===x||null===(t=x.response)||void 0===t?void 0:t.length)&&(0,k.jsx)(oe,{message:le.Fr[g]})})]})}},6148:function(e,t,n){n.d(t,{Fr:function(){return a},Pv:function(){return i},RJ:function(){return r}});var i="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png",r="https://ssl.gstatic.com/ui/v1/icons/mail/profile_mask2.png",a={inbox:{heading:"Your inbox is empty",subHeading:"Mails that don't appear in other tabs will be shown here."},drafts:{heading:"You don't have any saved drafts.",subHeading:"Saving a draft allows you to keep a message you aren't ready to send yet."},starred:{heading:"No starred messages",subHeading:"Stars let you give messages a special status to make them easier to find. To star a message, click on the star outline beside any message or conversation."},sent:{heading:"No sent messages!",subHeading:"Send one now!"},bin:{heading:"No conversations in Bin.",subHeading:""}}},4373:function(e,t,n){n.d(t,{Z:function(){return s}});var i,r=n(4165),a=n(5861),o=n(9439),l=n(2791),c=n(1243),d=function(e,t,n){return(i=i||(0,a.Z)((0,r.Z)().mark((function e(t,n,i){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)({method:t.method,url:"".concat("","/").concat(t.endpoint,"/").concat(i),data:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)},s=function(e){var t,n=(0,l.useState)(null),i=(0,o.Z)(n,2),c=i[0],s=i[1],u=(0,l.useState)(""),h=(0,o.Z)(u,2),p=h[0],v=h[1],f=(0,l.useState)(!1),m=(0,o.Z)(f,2),g=m[0],x=m[1];return{call:function(n){return(t=t||(0,a.Z)((0,r.Z)().mark((function t(n){var i,a,o=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=o.length>1&&void 0!==o[1]?o[1]:"",s(null),x(!0),v(""),t.prev=4,t.next=7,d(e,n,i);case 7:a=t.sent,s(a.data),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(4),v(t.t0.message);case 14:return t.prev=14,x(!1),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[4,11,14,17]])})))).apply(this,arguments)},response:c,error:p,isLoading:g}}},5372:function(e,t,n){n.d(t,{Y:function(){return i}});var i={saveSentEmail:{endpoint:"save",method:"POST"},getEmailFromType:{endpoint:"emails",method:"GET"},saveDraftEmails:{endpoint:"save-draft",method:"POST"},deleteEmails:{endpoint:"delete",method:"DELETE"},toggleStarredMails:{endpoint:"starred",method:"POST"},moveEmailsToBin:{endpoint:"bin",method:"POST"}}}}]);
//# sourceMappingURL=830.cf577fe7.chunk.js.map