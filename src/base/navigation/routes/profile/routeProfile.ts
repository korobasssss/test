import { Route } from '../../../classes/Route';
import { routeHome } from '../home/routeHome';

export const routeProfile = new Route({
  path: `profile`,
  parent: routeHome,
});
