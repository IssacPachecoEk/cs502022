import asyncComponentLoader from '@/utils/loader';

import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

import { Pages, Routes } from './types';

const routes: Routes = {
  [Pages.Home]: {
    component: asyncComponentLoader(() => import('@/pages/Home/Index')),
    path: '/',
    title: 'Home',
    icon: AiOutlineHome,
  },
  [Pages.About]: {
    component: asyncComponentLoader(() => import('@/pages/About/Index')),
    path: '/about',
    title: 'About',
    icon: AiOutlineUser,
  },
  [Pages.Projects]: {
    component: asyncComponentLoader(() => import('@/pages/Projects/Index')),
    path: '/project',
    title: 'Project',
    icon: AiOutlineFundProjectionScreen,
  },
  [Pages.Resume]: {
    component: asyncComponentLoader(() => import('@/pages/Resume/Index')),
    path: '/resume',
    title: 'Resume',
    icon: CgFileDocument,
  },
  [Pages.NotFound]: {
    component: asyncComponentLoader(() => import('@/pages/NotFound')),
    path: '*'
  },
};

export default routes;
