import Home from "../frontend/pages/home/home";
import NotFound from "../frontend/pages/notFound/notFound";

const FrontEndRoute = [
  { path: "/", component: Home },
  { path: "/*", component: NotFound },
];

export default FrontEndRoute;
