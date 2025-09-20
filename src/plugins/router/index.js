import { createRouter, createWebHistory } from "vue-router";
import { setGuard } from "./guard";

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            component:() => import('@/App.vue'),
            children:[
                {
                    path:'/',
                    redirect:{
                        name:'home'
                    }
                },
                {
                    path:'/',
                    component:() => import('@/layouts/default.vue'),
                    children: [
                        {
                            path:'/dasboard',
                            name:'home',
                            component:() => import('@/pages/index.vue')
                        },
                        // register more route
                    ]
                },
            ]
        },
        {
            path:('/:path(.*)'),
            component:() => import("@/pages/not-auth.vue")
        }
    ]
})

// setGuard(router);

export default router;