import {
  ADMIN_PAGE_ROUTE,
  BASKET_PAGE_ROUTE,
  ITEM_ROUTE,
  LOGIN_PAGE_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_PAGE_ROUTE,
  USER_PAGE_ROUTE,
  RECEIPT_PAGE_ROUTE,
  MAP_PAGE_ROUTE,
  ABOUTUS_PAGE_ROUTE,
  LOCATIONS_PAGE_ROUTE,
  PROMO_PAGE_ROUTE
} from "./utils/consts";

import AdminPage from "./pages/AdminPage";
import BasketPage from "./pages/BasketPage";
import ShopPage from "./pages/ShopPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ItemPage from "./pages/ItemPage";
import UserPage from "./pages/UserPage";
import ReceiptPage from "./pages/ReceiptPage";
import MapPage from "./pages/MapPage"
import AboutUs from "./pages/AboutUs"
import LocationsPage from "./pages/LocationsPage"
import PromoPage from "./pages/PromoPage"

export const authRoutes = [
  {
    path: ADMIN_PAGE_ROUTE,
    Component: AdminPage,
  },
  {
    path: BASKET_PAGE_ROUTE,
    Component: BasketPage,
  },

  {
    path: USER_PAGE_ROUTE,
    Component: UserPage,
  },
];

export const publicRoutes = [
  {
    path: SHOP_PAGE_ROUTE,
    Component: ShopPage,
  },

  {
    path: LOGIN_PAGE_ROUTE,
    Component: LoginPage,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: RegistrationPage,
  },
  {
    path: ITEM_ROUTE + "/:id",
    Component: ItemPage,
  },
  {
    path: RECEIPT_PAGE_ROUTE,
    Component: ReceiptPage,
  }, {
    path: MAP_PAGE_ROUTE,
    Component: MapPage,
  },{
    path: ABOUTUS_PAGE_ROUTE,
    Component: AboutUs,
  },{
    path:LOCATIONS_PAGE_ROUTE,
    Component: LocationsPage,
  },{
    path:PROMO_PAGE_ROUTE,
    Component: PromoPage,
  },
];
