import './main.scss'
import './reset.scss'

import './views/home/home.scss'

import {router} from './router/index.routes'

const init = () => {
    router(window.location.hash);

    window.addEventListener("hashchange", () => {
        router(window.location.hash);
    })
}

window.addEventListener("load", init);


