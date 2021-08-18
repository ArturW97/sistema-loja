import VueRouter from "vue-router";
import Home from "./pages/Home.vue";
import DetalhesProdutos from "./pages/DetalhesProdutos.vue";

const routes = [
    {
        path: "/", component: Home,
    },
    {
        path: "/detalhes", component: DetalhesProdutos, name:"detalhesProdutos"
    },
];

const router = new VueRouter({
    routes, 
    mode: 'history'
})

export default router
