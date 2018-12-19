import Home from 'components/Home.vue'
import Portfolio from 'components/portfolio/Portfolio.vue'
import Stocks from 'components/stocks/Stocks'

const routes = [
  { path: '/', component: Home
  },
  {
    path:'/portfolio',component:Portfolio
  },
  {
    path:'/stocks',component:Stocks
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes




