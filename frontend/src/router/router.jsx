import { createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Category from "../pages/category/Category";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/about",
                element: <div>About page it is</div>
            },
           {
            path: "/categories/:categoryName",
            element: <Category/>
           }
        ]
    },
]);

export default router;