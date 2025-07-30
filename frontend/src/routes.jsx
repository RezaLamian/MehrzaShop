import Index from "./Pages/Index";
import Login from "./Pages/Login";
import ProductDetails from "./Pages/ProductDetails";
import Products from "./Pages/Products";
import Register from "./Pages/Register";
import ShoppingCart from "./Pages/ShoppingCart";
import Articles from "./Pages/Articles";
import ArticleDetails from "./Pages/ArticleDetails";
import Search from "./Pages/Search";

import Dashboard from "./Pages/UserPanel/Index";
import DashboardIndex from "./Pages/UserPanel/Index/Index";
import DashboardOrders from "./Pages/UserPanel/Index/Orders";
import DashboardFavs from "./Pages/UserPanel/Index/Favs";
import DashboardRecents from "./Pages/UserPanel/Index/Recents";
import DashboardMessages from "./Pages/UserPanel/Index/Messages";
import DashboardAddresses from "./Pages/UserPanel/Index/Addresses";
import DashboardAccountInfos from "./Pages/UserPanel/Index/AccountInfos";

const routes = [
  { path: "/", element: <Index /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/allproducts", element: <Products /> },
  { path: "/Product-details/:productName", element: <ProductDetails /> },
  { path: "/Shopping-cart", element: <ShoppingCart /> },
  { path: "/allarticles", element: <Articles /> },
  { path: "/article-details/:articleName", element: <ArticleDetails /> },
  { path: "/search/:value", element: <Search /> },

  {
    path: "/dashboard/*",
    element: <Dashboard />,
    children: [
      { path: "", element: <DashboardIndex /> },
      { path: "orders", element: <DashboardOrders /> },
      { path: "favs", element: <DashboardFavs /> },
      { path: "recent-views", element: <DashboardRecents /> },
      { path: "messages", element: <DashboardMessages /> },
      { path: "addresses", element: <DashboardAddresses /> },
      { path: "account-infos", element: <DashboardAccountInfos /> },
    ],
  },
];

export default routes;
