import views from '../views/detail/detail.html'
import Axios from 'axios';

export default () => {
    const divElement = document.createElement('div');
    divElement.classList = "detail-section";
    divElement.innerHTML = views;

    const postId = localStorage.getItem('postId');
    const API_URL = 'http://43.201.103.199/post/' + postId;

    Axios.get(API_URL, {
        headers: {'Content-Security-Policy': 'upgrade-insecure-requests'},
    }).then((res) => {
        console.log(res.data.data)
        let detail = res.data.data;

        divElement.querySelector("#detail-img").innerHTML = `
            <img src=${detail.post.image} style="width: 200px" />
        `
        divElement.querySelector("#detail-title").innerHTML = `
            ${detail.post.title}
        `
        divElement.querySelector("#detail-date").innerHTML = `
            ${detail.post.updatedAt.substr(0,9)}
        `
        divElement.querySelector("#detail-desc").innerHTML = `
            ${detail.post.content}
        `

        detail.comments.forEach((el) => {
            divElement.querySelector("#detail-comment").innerHTML += `
              댓글 :::  ${el.content} <br>
            `
        })


    })

    return divElement;
}