import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import Models from "./views/Models";
import Apis from "./views/Apis";

const routes = [
  {
    path: "/models",
    sidebarName: "Models",
    navbarName: "Models",
    icon: StarIcon,
    component: Models
  },
  {
    path: "/apis",
    sidebarName: "Apis",
    navbarName: "Apis",
    icon: SendIcon,
    component: Apis
  },
  { redirect: true, path: "/", to: "/models", navbarName: "Redirect" }
];

export default routes;