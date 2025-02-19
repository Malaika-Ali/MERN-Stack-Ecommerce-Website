import { createBrowserRouter} from "react-router-dom";
import App from "../App";
import SearchPage from "../pages/search/SearchPage";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Loadable from "../utils/Loadable";
import { lazy } from "react";

const LoginPage=Loadable(lazy(()=>import('../pages/auth/Login')))
const SignupPage=Loadable(lazy(()=>import('../pages/auth/Signup')))
const HomePage=Loadable(lazy(()=>import('../pages/home/Home')))
const ShopPage=Loadable(lazy(()=>import('../pages/shop/ShopPage')))
const ProductDetailsPage=Loadable(lazy(()=>import('../pages/productDetails')))
const ShippingPage=Loadable(lazy(()=>import('../pages/productOrder/shippingInformation')))
const PaymentPage=Loadable(lazy(()=>import('../pages/productOrder/paymentInformation')))




const GoogleAuthWrapper=()=>{
    return  (  
    <GoogleOAuthProvider clientId="1036669708423-b0h6qi86bdf18a8lt2165d6d7kpuq91g.apps.googleusercontent.com"
    useOneTap={true}> 
    <LoginPage/>
    </GoogleOAuthProvider>
)}

const GoogleAuthWrapper2=()=>{
    return  (  
    <GoogleOAuthProvider clientId="1036669708423-b0h6qi86bdf18a8lt2165d6d7kpuq91g.apps.googleusercontent.com"
    useOneTap={true}> 
    <SignupPage/>
    </GoogleOAuthProvider>
)}



const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
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
           },
           {
           path: "/shipping-information",
           element: <ShippingPage/>
          },
          {
            path: "/payment-information",
            element: <PaymentPage/>
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
        element: <GoogleAuthWrapper2/>
    }
]);

export default router;