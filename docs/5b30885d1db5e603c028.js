async function delDetail(){let t=localStorage.getItem("postId");await fetch("http://43.201.103.199/post/"+t,{method:"DELETE"}),location.href="#/"}