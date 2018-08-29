// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import HeaderAsideFooterLayout from './layouts/HeaderAsideFooterLayout';
import Home from './pages/Home';
import AbPage from './pages/AbPage';
import NotFound from './pages/NotFound';
import ClientPage from './pages/ClientPage';
import MainPage from './pages/MainPage';

const routerConfig = [
  {
    path: '/',
    layout: HeaderAsideFooterLayout,
    component: MainPage,
  },
  {
    path: '/ABPage',
    layout: HeaderAsideFooterLayout,
    component: AbPage,
  },
  {
    path: '/ClientPage',
    layout: HeaderAsideFooterLayout,
    component: ClientPage,
  },
  // {
  //   path: '*',
  //   layout: HeaderAsideFooterLayout,
  //   component: NotFound,
  // },
];

export default routerConfig;
