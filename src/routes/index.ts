import Following from '@/pages/Following';
import Home from '@/pages/Home';
import { RouteSchema } from '@/schema/routesSchema';

const publicRoutes: RouteSchema[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/following',
    component: Following,
  },
];

const privateRoutes: RouteSchema[] = [];

export { publicRoutes, privateRoutes };
