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
const NotFoundComponent = resolve => require(['@/components/common/home'], resolve)

Vue.use(Router)
// 3 如何保证在最顶部
// 3.0 路由每次进入详情，默认滚动在最顶部
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
      // cords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.x = 0
      position.y = 0
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    // console.log(position)
    return position
  }
}

export default new Router({
    mode: 'hash',
    scrollBehavior,
    routes: [
        {
        	path: '/',
        	name: 'home',
        	component: home,
        	children: [
              {
                  path: '/',
                  name: 'briefIntroduction',
                  component: briefIntroduction,
                  meta: {
                    scrollToTop: true
                  }
              },
              {
                  path: '/product',
                  name: 'product',
                  component: product,
                  meta: {
                    scrollToTop: true
                  }
              },
              {
                  path: '/about',
                  name: 'about',
                  component: about,
                  children: [
                      {
                          path: '/',
                          name: 'aboutinfo',
                          component: aboutinfo,
                          meta: {
                            scrollToTop: true
                          }
                      },
                      {
                        path:'/join',
                        name:'join',
                        component:join,
                        meta: {
                          scrollToTop: true
                        }
                      },
                      {
                        path: '/contact_mc',
                        name: 'contact_mc',
                        component: contactMc,
                        meta: {
                          scrollToTop: true
                        }
                      },
                      {
                        path: '/friendlink',
                        name: 'friendlink',
                        component: friendlink,
                        meta: {
                          scrollToTop: true
                        }
                      }
                  ]
              },
              {
                  path: '/service',
                  name: 'service',
                  component: service,
                  meta: {
                      scrollToTop: true
                  }
              }
        	]
        },
        { path: '*', component: NotFoundComponent }
   ]
})
