import views from '../views/post/post.html'
import Axios from "axios";

export default () => {
    const divElement = document.createElement('div')
    divElement.classList = "post-section";
    divElement.innerHTML = views;

    return divElement;
}