import { createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Category from "../pages/category/Category";
import SearchPage from "../pages/search/SearchPage";
import ShopPage from "../pages/shop/ShopPage";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import { GoogleOAuthProvider } from '@react-oauth/google';
import ProductDetails from "../pages/productDetails";
import ShippingInformation from "../pages/productOrder/shippingInformation";
import PaymentInformtaion from "../pages/productOrder/paymentInformation";


const GoogleAuthWrapper=()=>{
    return  (  
    <GoogleOAuthProvider clientId="1036669708423-b0h6qi86bdf18a8lt2165d6d7kpuq91g.apps.googleusercontent.com"
    useOneTap={true}> 
    <Login/>
    </GoogleOAuthProvider>
)}

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
            element: <ProductDetails/>
           },
           {
           path: "/shipping-information",
           element: <ShippingInformation/>
          },
          {
            path: "/payment-information",
            element: <PaymentInformtaion/>
           },
           {
            path: "*",
            element: <div>Page Not Found</div>
           }
        ]
    },
  
    {
        path: "/login",
        element: <GoogleAuthWrapper/>
    },
    {
        path: "/signup",
        element: <Signup/>
    }
]);

export default router;