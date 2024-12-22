import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Movies from "./pages/movies";
import TvSeries from "./pages/tv-Series";
import Bookmark from "./pages/bookmark";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound/>
  },
  {
    path: "/movies",
    element: <Movies/>,
    errorElement: <NotFound/>
  },
  {
    path: "/tv-series",
    element: <TvSeries/>,
    errorElement: <NotFound/>
  },
  {
    path: "/bookmark",
    element: <Bookmark/>,
    errorElement: <NotFound/>
  },
]);
export default router;
