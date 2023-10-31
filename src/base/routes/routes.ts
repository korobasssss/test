export const routes = {
  main: {
    url: '/',
    path: '/'
  },
  product: {
    // id: {
    url: (id: string | number) => `products/${id}`,
    path: 'products/:id',
    edit: {
      url: (id: string | number) => `products/edit/${id}`,
      path: 'products/edit/:id',
    }
    // }
  }
}