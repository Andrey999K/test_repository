"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[600],{2e3:function(e,t,n){n(2791);var s=n(184),c=function(e){var t=e.url,n=e.size;return(0,s.jsx)("div",{className:(n?"w-[".concat(n,"px] h-[").concat(n,"px]"):"w-10 h-10")+" rounded-full overflow-hidden",children:(0,s.jsx)("img",{className:"w-full h-full",src:t,alt:"avatar"})})};c.defaultProps={url:"https://i.pravatar.cc/100"},t.Z=c},6654:function(e,t,n){n(2791);var s=n(7009),c=n(184);t.Z=function(){return(0,c.jsx)("button",{className:"cursor-pointer hover:text-my-green-200 flex items-center justify-center hover:text-my-green-200",children:(0,c.jsx)(s.Z,{name:"heart"})})}},5461:function(e,t,n){n.d(t,{Z:function(){return x}});var s=n(4942),c=n(1413),l=n(885),a=n(2791),r=n(1176),i=n(6457),o=n(7009),d=n(184),u=function(e){var t=e.children,n=e.handleClose,s=(0,a.useRef)(null);return(0,d.jsx)("div",{onClick:function(e){e.target===s.current&&n(!1)},ref:s,className:"fixed top-0 left-0 bottom-0 right-0 w-screen h-screen z-[9999] bg-black/70 flex justify-center items-center",children:(0,d.jsxs)("div",{className:"relative bg-white p-5 rounded-lg w-full max-w-screen-lg h-[700px]",children:[(0,d.jsx)("button",{onClick:function(){return n(!1)},className:"absolute top-5 right-5 z-10",children:(0,d.jsx)(o.Z,{name:"close",className:"w-7 h-7"})}),t]})})},x=function(e){var t=e.postId,n=e.title,o=e.content,x=e.closeEditor,m=e.updatePost,h=(0,a.useState)({title:n,content:o}),f=(0,l.Z)(h,2),g=f[0],j=f[1],p=function(e){j((function(t){return(0,c.Z)((0,c.Z)({},t),{},(0,s.Z)({},e.target.name,e.target.value))}))};return(0,d.jsx)(u,{handleClose:x,children:(0,d.jsx)("div",{className:"flex flex-col h-full",children:(0,d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r.Z.edit((0,c.Z)((0,c.Z)({},g),{},{postId:t})).then((function(e){e.content.content===g.content&&m({title:e.content.title,content:e.content.content})})).catch((function(e){return console.error(e)}))},className:"flex flex-col gap-3 justify-between h-full",children:[(0,d.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,d.jsxs)("label",{className:"flex flex-col gap-2",children:[(0,d.jsx)("span",{children:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043f\u043e\u0441\u0442\u0430"}),(0,d.jsx)("input",{value:g.title,onChange:p,name:"title",type:"text",placeholder:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043f\u043e\u0441\u0442\u0430",className:"p-2 rounded shadow-inner border-black/20 border-[1px]"})]}),(0,d.jsxs)("label",{className:"flex flex-col gap-2",children:[(0,d.jsx)("span",{children:"\u0422\u0435\u043a\u0441\u0442 \u043f\u043e\u0441\u0442\u0430"}),(0,d.jsx)("textarea",{value:g.content,onChange:p,name:"content",placeholder:"\u0422\u0435\u043a\u0441\u0442 \u043f\u043e\u0441\u0442\u0430",className:"p-2 rounded shadow-inner border-black/20 border-[1px]",rows:8,children:g.content})]})]}),(0,d.jsxs)("div",{className:"flex items-center justify-end gap-2",children:[(0,d.jsx)("div",{children:(0,d.jsx)(i.Z,{className:"ml-auto "+(g.title===n&&g.content===o?"!bg-gray-400 !hover:bg-gray-400 !cursor-default":""),children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})}),(0,d.jsx)("div",{children:(0,d.jsx)(i.Z,{onClick:x,className:"ml-auto",children:"\u041e\u0442\u043c\u0435\u043d\u0430"})})]})]})})})}},4461:function(e,t,n){n(2791);var s=n(184);t.Z=function(){return(0,s.jsx)("button",{className:"py-1 px-5 bg-my-green-200 text-white rounded-lg hover:bg-my-green-300 duration-200",children:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"})}},1600:function(e,t,n){n.r(t);var s=n(1413),c=n(885),l=n(2791),a=n(2e3),r=n(4880),i=n(1523),o=n(4461),d=n(7009),u=n(6654),x=n(8071),m=n(1176),h=n(838),f=n(5392),g=n(5461),j=n(9434),p=n(184);t.default=function(){var e=(0,l.useState)(null),t=(0,c.Z)(e,2),n=t[0],v=t[1],N=(0,l.useState)(!1),b=(0,c.Z)(N,2),Z=b[0],w=b[1],y=(0,r.UO)().postId,k=(0,j.v9)((function(e){return e.userReducer})),_=(0,r.k6)();return(0,l.useEffect)((function(){m.Z.get({postId:y}).then((function(e){console.log(e),v(e)})).catch((function(e){return console.log(e)}))}),[]),n?(0,p.jsxs)(p.Fragment,{children:[Z&&(0,p.jsx)(g.Z,{closeEditor:function(){return w(!1)},updatePost:function(e){w(!1),v((function(t){return(0,s.Z)((0,s.Z)({},t),e)}))},postId:n._id,title:n.title,content:n.content}),(0,p.jsxs)("div",{className:"w-full max-w-screen-lg ml-auto my-12",children:[(0,p.jsxs)("div",{className:"bg-white rounded p-5 flex flex-col gap-5",children:[(0,p.jsxs)("div",{className:"flex justify-between",children:[(0,p.jsxs)("div",{className:"flex gap-4 items-center",children:[(0,p.jsxs)(i.rU,{to:"",className:"flex gap-3 items-center",children:[(0,p.jsx)(a.Z,{}),(0,p.jsxs)("div",{className:"flex flex-col",children:[(0,p.jsx)("span",{className:"text-sm font-medium",children:"ru_vds"}),(0,p.jsx)("span",{className:"text-xs text-gray-400",children:"1,3 \u043c\u043b\u043d \u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432"})]})]}),(0,p.jsx)(o.Z,{}),(0,p.jsx)("span",{className:"text-base text-gray-400",children:(0,h.Z)(n.created_at)})]}),k&&k._id===n.userId&&(0,p.jsx)(f.Z,{list:[{text:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c",action:function(){return w(!0)}},{text:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",action:function(){m.Z.delete(y).then((function(e){e.content&&_.replace("/")})).catch((function(e){return console.log(e)}))}}]})]}),(0,p.jsx)("h2",{className:"font-medium text-2xl",children:n.title}),(0,p.jsxs)("div",{className:"flex gap-3 items-center",children:[(0,p.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,p.jsx)(u.Z,{}),(0,p.jsx)("span",{children:"1245"})]}),(0,p.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,p.jsx)("div",{children:(0,p.jsx)(d.Z,{name:"eye"})}),(0,p.jsx)("span",{children:"5456"})]})]}),n.image&&(0,p.jsx)("div",{className:"rounded-lg overflow-hidden w-full",children:(0,p.jsx)("img",{className:"w-full",src:"/images/".concat(n.image),alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"})}),(0,p.jsx)("div",{className:"flex flex-col gap-5",dangerouslySetInnerHTML:{__html:n.content}}),n.tags&&(0,p.jsxs)("div",{className:"flex gap-1",children:[(0,p.jsx)("span",{children:"\u0422\u0435\u0433\u0438:"}),(0,p.jsx)("ul",{className:"flex text-sky-500 gap-1",children:n.tags.map((function(e,t){return(0,p.jsx)("li",{className:"hover:underline cursor-pointer",children:e+(t!==n.tags.length-1?",":"")},"tag_".concat(t))}))})]})]}),n.comments&&(0,p.jsxs)("div",{className:"mt-14 p-5 bg-white rounded flex flex-col gap-4",children:[(0,p.jsxs)("h3",{className:"font-medium",children:["\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438 ",n.comments.length]}),(0,p.jsx)("ul",{className:"flex flex-col gap-4",children:n.comments.map((function(e){var t=e.id,n=e.user,s=e.date,c=e.text;return(0,p.jsxs)("li",{children:[(0,p.jsxs)("div",{className:"flex gap-3 items-center",children:[(0,p.jsxs)(i.rU,{to:"".concat("","/user/").concat(n.id),className:"flex gap-3 items-center",children:[(0,p.jsx)(a.Z,{}),(0,p.jsx)("span",{children:n.username})]}),(0,p.jsx)(i.rU,{to:"".concat("","/user/").concat(n.id),className:"text-sm text-gray-500",children:s})]}),(0,p.jsx)("p",{className:"mt-2",children:c})]},"comment_".concat(t))}))}),(0,p.jsx)("div",{className:"flex justify-center items-center",children:(0,p.jsx)("button",{className:"py-1 px-5 bg-my-green-200 text-white rounded-lg hover:bg-my-green-300 duration-200",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0435\u0449\u0451"})})]})]})]}):(0,p.jsx)(x.Z,{})}},5392:function(e,t,n){var s=n(885),c=n(2791),l=n(7009),a=n(1523),r=n(184),i=function(e){var t=e.list,n=(0,c.useState)(!1),i=(0,s.Z)(n,2),o=i[0],d=i[1];return(0,r.jsxs)("div",{className:"relative flex items-center",children:[(0,r.jsx)("button",{onClick:function(){d((function(e){return!e}))},className:"inline",children:(0,r.jsx)(l.Z,{name:"menu"})}),o&&(0,r.jsx)("ul",{className:"absolute top-6 right-0 p-4 bg-white shadow-lg rounded-lg",children:t.map((function(e,t){return"string"===typeof e.action?(0,r.jsx)("li",{children:(0,r.jsx)(a.rU,{to:e.action,children:e.text})},"action_".concat(t)):(0,r.jsx)("li",{children:(0,r.jsx)("button",{onClick:function(){return t=e.action,d(!1),void t();var t},children:e.text})},"action_".concat(t))}))})]})};i.defaultProps={list:[]},t.Z=i},838:function(e,t){t.Z=function(e){var t=new Date(e),n=t.getDate().toString().padStart(2,"0"),s=(t.getMonth()+1).toString().padStart(2,"0"),c=t.getFullYear().toString();return"".concat(n,".").concat(s,".").concat(c)}}}]);
//# sourceMappingURL=600.2540d3bb.chunk.js.map