import views from '../views/post/post.html'

export default () => {
    const divElement = document.createElement('div')
    divElement.innerHTML = views;

    return divElement;
}