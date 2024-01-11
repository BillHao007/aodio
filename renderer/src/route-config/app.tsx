import type { RouteConfigList } from "./type";
import AoHome from "@/pages/AoHome";

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
    path: '/',
    component: AoHome
  }
];

export default routeConfig;