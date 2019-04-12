import Vue from 'vue'
import Router from 'vue-router'

import Login from '../views/login/login'
/////////////// index ////////////////////
import Index from '../views/index/index'
/////////////// 预约场地 ///////////////////////
import ReserveSite from '../views/reserve-site/index'
import ReserveDetail from '../views/reserve-site/reserveDetail'
/////////////// 移车 ///////////////////////
import MoveCar from '../views/moveCar/moveCar'
/////////////// 发现 ///////////////////////
import Vipcard from '../views/vipcard/index'
import About from '../views/about/about'
import AddressAbout from '../views/about/addressAbout'
/////////////// my ///////////////////////
import My from '../views/my/index'


Vue.use(Router)

export default new Router({
    routes: [
        ///////////////////////////////////////////////
        /////////////// index  s-- ////////////////////
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/',
            name: '/',
            component: Index
        },

        /////////////// ReserveSite  s-- ///////////////////////
        {
            path: '/ReserveSite',
            name: 'ReserveSite',
            component: ReserveSite
        },
        {
            path: '/ReserveDetail',
            name: 'ReserveDetail',
            component: ReserveDetail
        },
        ///////////////////////////////////////////////
        /////////////// 移车  s-- ///////////////////////
        {
            path: '/MoveCar',
            name: 'MoveCar',
            component: MoveCar
        },

        ///////////////////////////////////////////////
        /////////////// Vipcard  s-- ///////////////////////
        {
            path: '/Vipcard',
            name: 'Vipcard',
            component: Vipcard
        },
        {
            path: '/About',
            name: 'about',
            component: About
        },
        {
            path: '/AddressAbout',
            name: 'AddressAbout',
            component: AddressAbout
        },
        ///////////////////////////////////////////////
        /////////////// my  s-- ///////////////////////
        {
            path: '/my',
            name: 'my',
            component: My
        }
        /////////////// my  e-- ///////////////////////
        ///////////////////////////////////////////////
    ]
})