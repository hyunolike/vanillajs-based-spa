function goDetail(postId) {
    location.href = "#/detail";
    console.log("goDetail()")
    console.log(postId);


    /**
     * localstorage 저장 방식
     * (전제) 페이지 접속 후 postId 값만 먼저 localstorage에 저장! - home.fn.js
     * 1. axios 통해 가져온 json 을 문자 데이터로 변환 - detail.controller.js
     * 2. localstroage 저장
     */

    localStorage.setItem("postId", postId);
}