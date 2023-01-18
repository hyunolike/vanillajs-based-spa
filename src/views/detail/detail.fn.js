async function delDetail() {
    let postId = localStorage.getItem("postId")
    const res = await fetch("http://43.201.103.199/post/" + postId, {
        method: "DELETE",
    })
    location.href = "#/"
}