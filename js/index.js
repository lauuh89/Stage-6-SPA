import { Router } from './router.js'

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/exploring", "/pages/exploring.html")

router.handle()
// // Ajuda a voltar para a página anterior com a seta
window.onpopstate = () => router.handle()
// // Buscou do html a route
window.route = () => router.route()