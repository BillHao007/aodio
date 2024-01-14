import type { RouteConfigList } from "./type";
import AoHome from "@/pages/AoHome";
import AoVideoConvert from "@/pages/AoVideoConvert";

const routeConfig: RouteConfigList = [
  // {
  //   name: 'main',
  //   path: '/',
  //   component: AoMain,
  //   props: {
  //     name: 'billhao',
  //     id: 123,
  //   }
  // },
  // {
  //   name: 'audio',
  //   path: '/audio',
  //   component: AoAudio,
  // }
  {
    name: 'home',
    path: '/home',
    component: AoHome
  },
  {
    name: 'videoConvert',
    path: '/',
    component: AoVideoConvert
  }
];

export default routeConfig;