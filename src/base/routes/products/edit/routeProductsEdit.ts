import { Route } from '../../../classes/Route';
import { routeProducts } from '../routeProducts';

interface IParams {
  id: number | string;
}

export const routeProductsEdit = new Route<IParams>({
  path: `edit/:id`,
  url: (args) => `/edit/${args.id}`,
  parent: routeProducts,
});
