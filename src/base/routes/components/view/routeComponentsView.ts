import { Route } from '../../../classes/Route';
import { routeComponents } from '../routeComponents';

interface IParams {
  id: number | string;
}

export const routeComponentsView = new Route<IParams>({
  path: `:id`,
  url: (args) => `${routeComponents.url}/${args.id}`,
  parent: routeComponents,
});
