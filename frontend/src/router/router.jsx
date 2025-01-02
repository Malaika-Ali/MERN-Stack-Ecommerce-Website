import { createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Category from "../pages/category/Category";
import SearchPage from "../pages/search/SearchPage";
import ShopPage from "../pages/shop/ShopPage";
import ProductDetailsPage from "../pages/productDetails/ProductDetailsPage";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";


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
           },
           {
            path: "/search",
            element: <SearchPage/>
           },
           {
            path: "/shop",
            element: <ShopPage/>
           },
           {
            path: "/product-details/:id",
            element: <ProductDetailsPage/>
           }
        ]
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/signup",
        element: <Signup/>
    }
]);

export default router;