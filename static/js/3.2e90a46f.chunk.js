(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{298:function(t,e,s){t.exports={description:"ProfileInfo_description__3gNlz"}},299:function(t,e,s){t.exports={postsBlock:"MyPosts_postsBlock__2MXHX",posts:"MyPosts_posts__22NNX"}},300:function(t,e,s){t.exports={item:"Post_item__2NvAm"}},301:function(t,e,s){"use strict";s.r(e);var o=s(3),i=s(28),r=s(29),n=s(31),c=s(30),a=s(1),u=s(0),p=s.n(u),l=s(12),j=s(40),d=s(298),f=s.n(d),h=(p.a.Component,s(132)),b=function(t){var e=Object(u.useState)(!1),s=Object(h.a)(e,2),o=s[0],i=s[1],r=Object(u.useState)(t.status),n=Object(h.a)(r,2),c=n[0],p=n[1];Object(u.useEffect)((function(){p(t.status)}),[t.status]);return Object(a.jsxs)("div",{children:[!o&&Object(a.jsx)("div",{children:Object(a.jsx)("span",{onDoubleClick:function(){i(!0)},children:t.status||"No Status"})}),o&&Object(a.jsx)("div",{children:Object(a.jsx)("input",{onChange:function(t){p(t.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),t.updateProfileStatus(c)},value:c})})]})},O=s(108),x=function(t){if(null===t.profile)return Object(a.jsx)(j.a,{});return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:f.a.description,children:[t.profile.photos.large||t.profile.photos.small?Object(a.jsx)("img",{src:t.profile.photos.large}):Object(a.jsx)("img",{src:O.a}),Object(a.jsx)("div",{children:t.isOwner&&Object(a.jsx)("input",{onChange:function(e){e.target.files.length&&t.savePhoto(e.target.files[0])},type:"file"})}),Object(a.jsx)("div",{children:t.profile.lookingForAJob?Object(a.jsx)("span",{children:"\u0423\u0436\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u044e:)"}):Object(a.jsx)("span",{children:"\u0418\u0449\u044e \u0420\u0430\u0431\u043e\u0442\u0443!!!!"})}),Object(a.jsx)("span",{children:t.profile.aboutMe}),Object(a.jsx)("div",{children:Object(a.jsx)(b,{status:t.status,updateProfileStatus:t.updateProfileStatus})})]})})},P=s(98),m=s(299),v=s.n(m),g=s(90),S=s(131),k=s(57),y=s(37),_=Object(k.a)(10),D=Object(S.a)({form:"myPostsForm"})((function(t){return Object(a.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(a.jsx)(g.a,{validate:[k.b,_],name:"newPostText",component:y.b,placeholder:"Enter Post"}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{children:"Add Post"})})]})})),w=function(t){return Object(a.jsx)(D,{onSubmit:function(e){t.addPost(e.newPostText)}})},C=s(300),I=s.n(C),N=function(t){return Object(a.jsxs)("div",{className:I.a.item,children:[Object(a.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzaMc-3F_Ey437EAdp97a4dPrHCI9HI33nA&usqp=CAU"}),t.message,Object(a.jsx)("div",{children:Object(a.jsxs)("span",{children:["like ",t.likesCount]})})]})},A=function(t){var e=t.posts.map((function(t){return Object(a.jsx)(N,{message:t.message,likesCount:t.likesCount})}));return console.log("Render YO"),Object(a.jsxs)("div",{className:v.a.postsBlock,children:[Object(a.jsx)("h3",{children:"My Posts"}),Object(a.jsx)("div",{children:Object(a.jsx)("div",{children:Object(a.jsx)(w,{addPost:t.addPost})})}),Object(a.jsx)("div",{className:v.a.posts,children:e})]})},M=Object(l.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(P.a)(e))}}}))(A),U=function(t){return Object(a.jsxs)("div",{children:[Object(a.jsx)(x,{savePhoto:t.savePhoto,isOwner:t.isOwner,profile:t.profile,status:t.status,updateProfileStatus:t.updateProfileStatus}),Object(a.jsx)(M,{})]})},T=s(11),z=s(10),B=function(t){Object(n.a)(s,t);var e=Object(c.a)(s);function s(){return Object(i.a)(this,s),e.apply(this,arguments)}return Object(r.a)(s,[{key:"refreshProfile",value:function(){var t=this.props.match.params.userID;t||(t=this.props.authorizedUserID)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getProfileStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e){this.props.match.params.userID!=t.match.params.userID&&this.refreshProfile()}},{key:"render",value:function(){return Object(a.jsx)(U,Object(o.a)(Object(o.a)({},this.props),{},{savePhoto:this.props.savePhoto,isOwner:!this.props.match.params.userID,profile:this.props.profile,status:this.props.status,updateProfileStatus:this.props.updateProfileStatus}))}}]),s}(p.a.Component);e.default=Object(z.d)(Object(l.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserID:t.auth.userID}}),{getUserProfile:P.d,getProfileStatus:P.c,updateProfileStatus:P.f,savePhoto:P.e}),T.f)(B)}}]);
//# sourceMappingURL=3.2e90a46f.chunk.js.map