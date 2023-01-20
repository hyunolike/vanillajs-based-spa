import views from '../views/home/home.html';
import Axios from "axios";

export default () => {
    const divElement = document.createElement('div');
    divElement.classList = "home-section";
    divElement.innerHTML = views;

    const API_URL = 'https://27.96.131.49/posts';

    Axios.get(API_URL, {
        headers: {'Content-Security-Policy': 'upgrade-insecure-requests'},
    }).then((res) => {
        let posts = res.data.data.posts;
        // console.log(posts);

        posts.forEach((post) => {
            divElement.querySelector("#post-list-section").innerHTML += `
             <div class="post" onClick="goDetail(${post.postId})">
                <div class="post-main">
                    <div class="post-img">
                        <img src=${post.image}/ style="width:200px">
                    </div>
                    <div class="post-section">
                        <div class="post-title">
                            ${post.title}
                        </div>
                        <div class="post-detail">
                            ${post.content}
                        </div>  
                    </div>  
                </div>
            </div>

            `
        })
    });

    return divElement;
};