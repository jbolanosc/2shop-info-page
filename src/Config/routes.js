const routes = [
  {
    exact: true,
    path: "/",
    component: Landing,
  },
  {
    exact: true,
    path: "/users",
    component: Users,
  },
  {
    exact: true,
    path: "/sellers",
    component: Sellers,
  },
  {
    component: NotFound,
  },
];

export default routes;
