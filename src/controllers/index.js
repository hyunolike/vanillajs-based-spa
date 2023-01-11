import Home from './home.controller'
import Post from './post.controller'
import NotFound from './404.controller'

const pages =  {
    home: Home,
    post: Post,
    notFound: NotFound
}

export {pages};