import Vue from "vue";
import Router from "vue-router";
import Login from "../pages/login"
import Main from "../pages/main"
import Reg from "../pages/reg"
Vue.use(Router);
const createRouter = ()=>new Router({
    routes:[
        {
            name:"login",
            path:"/",
            component: Login
        }, {
            name: "main",
            path: "/main",
            component: Main
        }, {
            name: "reg",
            path: "/reg",
            component: Reg
        }
    ]
})
const router = createRouter()
export default router