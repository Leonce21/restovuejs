import HomeItem from './components/HomeItem.vue'
import SignUp from './components/SignUp.vue'
import SignIn from './components/SignIn.vue'
import AppUpdate from './components/AppUpdate.vue'
import AppAdd from './components/AppAdd.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: "HomeItem",
        component: HomeItem,
        path: "/"
    },
    {
        name: "SignUp",
        component: SignUp,
        path: "/signup"
    },
    {
        name: "SignIn",
        component: SignIn,
        path: "/signin"
    },
    {
        name: "AppAdd",
        component: AppAdd,
        path: "/add"
    },
    {
        name: "AppUpdate",
        component: AppUpdate,
        path: "/update/:id"
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;