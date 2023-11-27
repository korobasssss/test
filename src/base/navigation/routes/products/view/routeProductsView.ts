import { Route } from '../../../../classes/Route';
import { routeProducts } from '../routeProducts';

interface IParams {
  id: number | string;
}

export const routeProductsView = new Route<IParams>({
  path: `:id`,
  url: (args) => `${routeProducts.url}/${args.id}`,
  parent: routeProducts,
});
