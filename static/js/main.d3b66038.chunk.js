(this.webpackJsonpstorefront=this.webpackJsonpstorefront||[]).push([[0],{37:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(0),o=n.n(c),i=n(11),a=n.n(i),s=n(57),d=n(58),j=n(59),u=n(60),l=n(64);var p=function(e){return Object(r.jsx)(s.a,{className:"AppBar",color:"white",position:"static",children:Object(r.jsx)(d.a,{maxWidth:"md",children:Object(r.jsxs)(j.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",children:[Object(r.jsx)(u.a,{variant:"h1",children:"StoreFrontPorch"}),Object(r.jsx)(u.a,{children:Object(r.jsx)(l.a,{component:"button",variant:"body2",color:"inherit",children:"Cart"})})]})})})};var m=function(e){return Object(r.jsxs)("footer",{className:"footer",children:[Object(r.jsx)("h6",{children:"\xa9 nathanrhead"}),Object(r.jsx)("h6",{children:"mc-store@email.com"})]})},h=n(13),b=n(14),O={categories:[{name:"pickaxes",display:"Pickaxes",description:"Minecraft Pickaxes"},{name:"swords",display:"Swords",description:"Minecraft Swords"},{name:"helmets",display:"Helmets",description:"Minecraft Helmets"}],active:""},x=function(e){return{type:"SELECT-CATEGORY",payload:e}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case"SELECT-CATEGORY":return Object(b.a)(Object(b.a)({},e),{},{active:r});case"RESET":return O;default:return e}},v={categorySelection:x};var f=Object(h.b)((function(e){return{category:e.categories}}),v)((function(e){return console.log("Props on Categories:",e),Object(r.jsxs)(d.a,{maxWidth:"md",children:[Object(r.jsx)(u.a,{variant:"h5",children:"Browse Our Categories"}),Object(r.jsx)(u.a,{variant:"h5",children:e.category.categories.map((function(t,n){return Object(r.jsx)("div",{children:Object(r.jsx)(l.a,{component:"button",variant:"body2",color:"inherit",onClick:function(){return n=t.name,void e.categorySelection(n);var n},children:t.description})},n)}))})]})})),g={products:[{category:"pickaxes",name:"wooden pickax",description:"Minecraft Wooden Pickax",price:"Two Sticks",inventoryCount:5},{category:"pickaxes",name:"stone pickax",description:"Minecraft Stone Pickax",price:"Two Rocks",inventoryCount:3},{category:"pickaxes",name:"diamond pickax",description:"Minecraft Diamond Pickax",price:"One Diamond",inventoryCount:1},{category:"swords",name:"wooden sword",description:"Minecraft Wooden Sword",price:"Two Sticks",inventoryCount:5},{category:"swords",name:"stone sword",description:"Minecraft Stone Sword",price:"Two Rocks",inventoryCount:3},{category:"swords",name:"diamond sword",description:"Minecraft Diamond Sword",price:"One Diamond",inventoryCount:1},{category:"helmets",name:"wooden helmet",description:"Minecraft Wooden Helmet",price:"Two Sticks",inventoryCount:5},{category:"helmets",name:"stone helmet",description:"Minecraft Stone Helmet",price:"Two Rocks",inventoryCount:3},{category:"helmets",name:"diamond helmet",description:"Minecraft Diamond Helmet",price:"One Diamond",inventoryCount:1}]},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case"INCREMENT":var c=e.products.map((function(e){return e.name===r?{name:e.name,inventoryCount:e.inventoryCount+1}:e}));return Object(b.a)(Object(b.a)({},e),{},{products:c});case"RESET":return g;default:return e}},C=n(61),k=n(62),S={increment:function(e){return{type:"INCREMENT",payload:e}},categorySelection:x};var E=Object(h.b)((function(e){return{activeCategory:e.categories.active,products:e.products}}),S)((function(e){return Object(c.useEffect)((function(){return console.log("Props on Products:",e)}),[e]),Object(r.jsx)(d.a,{maxWidth:"md",children:Object(r.jsx)(d.a,{id:"product-selection",children:e.products.products.map((function(t,n){return Object(r.jsx)(r.Fragment,{children:e.activeCategory===t.category?Object(r.jsx)(C.a,{children:Object(r.jsxs)(k.a,{children:[Object(r.jsx)(u.a,{children:t.description}),Object(r.jsxs)(u.a,{children:["Price: ",t.price]}),Object(r.jsxs)(u.a,{children:["Number in Stock: ",t.inventoryCount]}),Object(r.jsx)("button",{onClick:function(){return n=t.name,void e.increment(n);var n},children:"Add to Cart"})]},n)}):""})}))})})}));var M=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(p,{}),Object(r.jsx)(f,{}),Object(r.jsx)(E,{}),Object(r.jsx)(m,{})]})},T=n(12),P=n(23),R=Object(T.combineReducers)({categories:y,products:w}),D=Object(T.createStore)(R,Object(P.composeWithDevTools)()),N=n(63);a.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsxs)(h.a,{store:D,children:[Object(r.jsx)(N.a,{}),Object(r.jsx)(M,{})]})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.d3b66038.chunk.js.map