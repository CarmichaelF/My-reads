(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(29)},26:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(15),l=a.n(r),c=a(5),s=a(6),i=a(9),u=a(7),h=a(8),d=a(10),p=a(32),f=a(13),m="https://reactnd-books-api.udacity.com",b=localStorage.token;b||(b=localStorage.token=Math.random().toString(36).substr(-8));var k={Accept:"application/json",Authorization:b},v=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"moveTo",value:function(e){var t=this.props;switch(e){case"C":this.props.updateBookShelf(t,"currentlyReading");break;case"W":this.props.updateBookShelf(t,"wantToRead");break;case"R":this.props.updateBookShelf(t,"read");break;case"N":this.props.updateBookShelf(t,"none");break;default:console.log("".concat(e," isn't a valid argument!"))}}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"book"},o.a.createElement("div",null,o.a.createElement("img",{src:this.props.src,className:"card-img-top shadow",alt:"book"}),o.a.createElement("div",{className:"dropdown"},o.a.createElement("button",{className:"btn btn-secondary dropdown-toggle shadow",type:"button",id:"dropdownMenu","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}),o.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenu"},o.a.createElement("button",{onClick:function(){return e.moveTo("C")},className:"dropdown-item",type:"button"},"Currently Reading"),o.a.createElement("button",{onClick:function(){return e.moveTo("W")},className:"dropdown-item",type:"button"},"Want to Read"),o.a.createElement("button",{onClick:function(){return e.moveTo("R")},className:"dropdown-item",type:"button"},"Read"),o.a.createElement("button",{onClick:function(){return e.moveTo("N")},className:"dropdown-item",type:"button"},"None")))),o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title"},this.props.title),o.a.createElement("p",{className:"card-text"},this.props.author),o.a.createElement("p",null,"Shelf: ",this.props.shelf?this.props.shelf:"none")))}}]),t}(n.Component),E=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"treatAuthor",value:function(e){return e&&e.length>1?e.map(function(e){return e+" "}):e}},{key:"render",value:function(){var e=this,t=this.props.books,a=t&&Array.isArray(t)?t.map(function(t){return void 0!==t&&t.imageLinks&&t.authors?o.a.createElement(v,{updateBookShelf:e.props.updateBook,title:t.title,key:t.id,src:t.imageLinks.thumbnail,author:e.treatAuthor(t.authors),id:t.id,shelf:t.shelf}):null}):null;return o.a.createElement("div",{className:"container"},o.a.createElement("div",null,o.a.createElement("h2",{className:"shelf-title pt-4 pb-4"},this.props.title),o.a.createElement("div",{className:"d-flex flex-wrap justify-content-around text-center m-5"},a)))}}]),t}(n.Component),y=a(30);var g=function(e){var t=e.books,a=e.updateBookShelf;return o.a.createElement("div",null,o.a.createElement("header",null,o.a.createElement("h1",null,"Welcome to MyReads!")),o.a.createElement(E,{updateBook:a,title:"Currently Reading",books:t?t.filter(function(e){return"currentlyReading"===e.shelf}):null}),o.a.createElement(E,{updateBook:a,title:"Want to Read",books:t?t.filter(function(e){return"wantToRead"===e.shelf}):null}),o.a.createElement(E,{updateBook:a,title:"Read",books:t?t.filter(function(e){return"read"===e.shelf}):null}),o.a.createElement(y.a,{className:"btn-search",to:"/search"},o.a.createElement("i",{className:"fas fa-search"})))},j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={searchedBooks:null},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"searchBook",value:function(e){var t,a=this;(t=e,fetch("".concat(m,"/search"),{method:"POST",headers:Object(f.a)({},k,{"Content-Type":"application/json"}),body:JSON.stringify({query:t})}).then(function(e){return e.json()}).then(function(e){return e.books})).then(function(e){e&&a.setState({searchedBooks:a.filter(e)})}).catch(function(e){console.log("Error",e)})}},{key:"filter",value:function(e){var t=this.props.books;return e.map(function(e){var a=t.find(function(t){return t.id===e.id});return e.shelf=a?a.shelf:"none",e})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"input-group input-group-lg"},o.a.createElement("div",{className:"input-group-prepend"},o.a.createElement(y.a,{className:"input-group-text",to:"/"},o.a.createElement("i",{className:"fas fa-arrow-left"}))),o.a.createElement("input",{onChange:function(t){return e.searchBook(t.target.value)},placeholder:"Search for a title or an Author...",type:"text",className:"form-control","aria-label":"Search for a title or an Author","aria-describedby":"inputGroup-sizing-lg"})),o.a.createElement(E,{updateBook:this.props.updateBookShelf,title:"Results",books:this.state.searchedBooks}))}}]),t}(n.Component),B=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).updateBookShelf=a.updateBookShelf.bind(Object(d.a)(Object(d.a)(a))),a.state={books:null},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"setShelf",value:function(e,t){null!==e&&(e.shelf=e.filter(function(e){return e.shelf&&e.id!==t})),this.setState({books:e})}},{key:"updateBookShelf",value:function(e,t){var a=this;"none"===t&&this.getAllBooks(e),function(e,t){return fetch("".concat(m,"/books/").concat(e.id),{method:"PUT",headers:Object(f.a)({},k,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})}(e,t).then(function(){a.getAllBooks()}).catch(function(e){console.log("Error",e)})}},{key:"getAllBooks",value:function(e){var t=this;fetch("".concat(m,"/books"),{headers:k}).then(function(e){return e.json()}).then(function(e){return e.books}).then(function(a){return t.setShelf(a,e)}).catch(function(e){console.log("Error",e)})}},{key:"componentDidMount",value:function(){this.getAllBooks()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(p.a,{exact:!0,path:"/",render:function(){return o.a.createElement(g,{updateBookShelf:e.updateBookShelf,books:e.state.books})}}),o.a.createElement(p.a,{path:"/search",render:function(){return o.a.createElement(j,{updateBookShelf:e.updateBookShelf,books:e.state.books})}}))}}]),t}(n.Component),N=a(31);a(26);l.a.render(o.a.createElement(N.a,null,o.a.createElement(B,null)),document.getElementById("root"))}},[[17,2,1]]]);
//# sourceMappingURL=main.82f5fe41.chunk.js.map