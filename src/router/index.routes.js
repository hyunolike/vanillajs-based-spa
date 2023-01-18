import {pages} from '../controllers/index'

let rootContent = document.getElementById('root');

const router = (route) => {
    rootContent.innerHTML = '';
    switch (route) {
        case '#/':
            return rootContent.appendChild(pages.home());
        case '#/detail':
            return rootContent.appendChild(pages.detail());
        case '#/post':
            return rootContent.appendChild(pages.post());
        default:
            return rootContent.appendChild(pages.notFound());
    }
}

export {router};