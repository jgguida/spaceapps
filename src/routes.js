
import Dashboard from "views/Dashboard.jsx";
import Notifications from "views/Notifications.jsx";
import Icons from "views/Icons.jsx";
import Typography from "views/Typography.jsx";
import TableList from "views/TableList.jsx";
import Maps from "views/Maps.jsx";
import UserPage from "views/UserPage.jsx";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard,
    layout: "/admin"
  },
    {
    path: "/maps",
    name: "Maps",
    icon: "location_map-big",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "users_single-02",
    component: UserPage,
    layout: "/admin"
  },
  {
    path: "/extended-tables",
    name: "visited places",
    icon: "files_paper",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Contact",
    icon: "design-2_ruler-pencil",
    component: Typography,
    layout: "/admin"
  }
];
export default dashRoutes;
