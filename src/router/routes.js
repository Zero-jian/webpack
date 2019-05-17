import todo from '@/views/todo'
import home from '@/views/home'

const routes = [
    {
        path: '/',
        redirect: '/todo'
    },
    {
        path: '/todo',
        component: todo
    },
    {
        path: '/home',
        component: home
    }
]

export default routes;