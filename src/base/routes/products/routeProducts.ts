import { Route } from '../../classes/Route';
import { routeHome } from '../home/routeHome';

export const routeProducts = new Route({
  path: `products`,
  parent: routeHome,
});
