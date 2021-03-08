import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import("../views/home/Home")
const Cart = () => import("../views/cart/Cart")
const Profile = () => import("../views/profile/Profile")
const Category = () => import("../views/category/Category")

export default new Router({
  routes: [
    {
      path: "",
      redirect: "/home"
    },
    {
      path: "/home",
      component: Home
    },
    {
      path: "/category",
      component: Category
    },
    {
      path: "/cart",
      component: Cart
    },
    {
      path: "/profile",
      component: Profile
    }
  ],
  mode: "history"
})
