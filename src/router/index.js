import Vue from 'vue'
import Router from 'vue-router'

import Login from '../views/login/login'
import Register from '../views/login/register'
import ForgetPsd from '../views/login/forgetPsd'
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
import AboutNews from '../views/about/aboutNews'
/////////////// my ///////////////////////
import My from '../views/my/index'
import Wallet from '../views/my/wallet'
import Recharge from '../views/my/recharge'
import Withdraw from '../views/my/withdraw'
import Change from '../views/my/change'
import SelfInfor from '../views/my/selfInfor'
import BecomeDZ from '../views/my/becomeDZ'


Vue.use(Router)

export default new Router({
    routes: [
        ///////////////////////////////////////////////
        /////////////// index  s-- ////////////////////

        {
            path: '/',
            name: '/',
            component: Index
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/forgetPsd',
            name: 'ForgetPsd',
            component: ForgetPsd
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
        {
            path: '/aboutNews',
            name: 'AboutNews',
            component: AboutNews
        },
        ///////////////////////////////////////////////
        /////////////// my  s-- ///////////////////////
        {
            path: '/my',
            name: 'my',
            component: My
        },
        {
            path: '/wallet',
            name: 'wallet',
            component: Wallet
        },
        {
            path: '/recharge',
            name: 'recharge',
            component: Recharge
        },
        {
            path: '/withdraw',
            name: 'withdraw',
            component: Withdraw
        },
        {
            path: '/change',
            name: 'change',
            component: Change
        },
        {
            path: '/selfInfor/:id',
            name: 'selfInfor',
            component: SelfInfor
        },
        {
            path: '/becomeDZ',
            name: 'becomeDZ',
            component: BecomeDZ
        }
        /////////////// my  e-- ///////////////////////
        ///////////////////////////////////////////////
    ]
})