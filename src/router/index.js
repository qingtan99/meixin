import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/common/home'

//1 、组件异步加载，只有在组件被访问的时候才会加载，提高了性能
const briefIntroduction = resolve => require(['@/components/brief_introduction/brief_introduction'], resolve)  //简介
const product = resolve => require(['@/components/product/product'], resolve)     //产品
const about = resolve => require(['@/components/about/about'], resolve)
const aboutinfo = resolve => require(['@/components/aboutinfo/aboutinfo'], resolve)    //关于我们
const service = resolve => require(['@/components/service/service'], resolve)     //服务
const contactMc = resolve => require(['@/components/contact_mc/contact_mc'], resolve)     //联系我们
const join = resolve => require(['@/components/join/join'], resolve)     //加入我们
const friendlink = resolve => require(['@/components/friendlink/friendlink'], resolve)     //友情链接

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
        	path: '/',
        	name: 'home',
        	component: home,
        	children: [
              {
                  path: '/',
                  name: 'briefIntroduction',
                  component: briefIntroduction
              },
              {
                  path: '/product',
                  name: 'product',
                  component: product
              },
              {
                  path: '/about',
                  name: 'about',
                  component: about,
                  children: [
                      {
                          path: '/',
                          name: 'aboutinfo',
                          component: aboutinfo
                      },
                      {
                        path:'/join',
                        name:'join',
                        component:join
                      },
                      {
                        path: '/contact_mc',
                        name: 'contact_mc',
                        component: contactMc
                      },
                      {
                        path: '/friendlink',
                        name: 'friendlink',
                        component: friendlink
                      }
                  ]
              },
              {
                  path: '/service',
                  name: 'service',
                  component: service
              }
        	]
        }
   ]
})
