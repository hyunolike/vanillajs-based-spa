import {pages} from '../controllers/index'

let rootContent = document.getElementById('root');

const router = (route) => {
    rootContent.innerHTML = '';
    switch (route) {
        case '#/': {
            return rootContent.appendChild(pages.home());
        }
        case '#/feat':
            return rootContent.appendChild(pages.post());
        case '#/pricing':
            return console.log('pricing!')
        default:
            return rootContent.appendChild(pages.notFound());
    }
    console.log(route)
}

export {router};