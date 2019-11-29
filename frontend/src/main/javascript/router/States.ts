import {ReactStateDeclaration} from "@uirouter/react";
import {LoginView} from "../view/login/LoginView";
import {BaseView} from "../view/base/BaseView";
import {HomeView} from "../view/home/HomeView";

export const states: ReactStateDeclaration[] = [{
    name: 'Login',
    url: '/login',
    component: LoginView
},{
    name: 'Base',
    component: BaseView
},{
    parent: 'Base',
    name: 'Home',
    url: '/',
    component: HomeView
}];
