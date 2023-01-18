import Home from './home.controller'
import Post from './post.controller'
import Detail from './detail.controller'
import NotFound from './404.controller'

const pages =  {
    home: Home,
    post: Post,
    detail: Detail,
    notFound: NotFound
}

export {pages};