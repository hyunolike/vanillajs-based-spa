import views from '../views/home/home.html';
import Axios from "axios";

export default () => {
    const divElement = document.createElement('div');
    divElement.classList = "home-section";
    divElement.innerHTML = views;

    const API_URL = 'http://43.201.103.199/posts';

    Axios.get(API_URL).then((res) => {
        let posts = res.data.data.posts;
        console.log(posts);

        posts.forEach((post) => {
            let postEl = document.createElement('div')
            postEl.innerHTML = post.title;
            divElement.querySelector("#post-list-section").innerHTML += `<div>${post.title}</div>`
        })
    });

    return divElement;
};