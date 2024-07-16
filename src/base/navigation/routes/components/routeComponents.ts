import { Route } from '../../../classes/Route';
import { routeHome } from '../home';

export const routeComponents = new Route({
  path: `omni-ghost`,
  parent: routeHome,
});
