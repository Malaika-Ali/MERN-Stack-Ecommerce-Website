import { createBrowserRouter} from "react-router-dom";
import App from "../App";
import SearchPage from "../pages/search/SearchPage";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Loadable from "../utils/Loadable";
import { lazy, Suspense } from "react";
import Error404 from "../utils/Error404";
import CustomErrorBoundary from "../utils/ErrorBoundary";
import FullPageLoader from "../utils/FullPageLoader";
import ComponentLoader from "../utils/ComponentLoader";

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
    <CustomErrorBoundary>
        <Suspense fallback={<FullPageLoader/>}>
    <LoginPage/>
    </Suspense>
    </CustomErrorBoundary>
    </GoogleOAuthProvider>
)}

const GoogleAuthWrapper2=()=>{
    return  (  
    <GoogleOAuthProvider clientId="1036669708423-b0h6qi86bdf18a8lt2165d6d7kpuq91g.apps.googleusercontent.com"
    useOneTap={true}> 
     <CustomErrorBoundary>
     <Suspense fallback={<FullPageLoader/>}>
    <SignupPage/>
    </Suspense>
    </CustomErrorBoundary>
    </GoogleOAuthProvider>
)}



const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error404 />,
        children: [
            {
                path: "",
                element: (
                    <CustomErrorBoundary>
                    <Suspense fallback={<FullPageLoader/>}>
                      <HomePage />
                    </Suspense>
                  </CustomErrorBoundary>
                )
            },
           {
            path: "search",
            element: (
                <CustomErrorBoundary>
                  <Suspense fallback={<FullPageLoader/>}>
                    <SearchPage />
                  </Suspense>
                </CustomErrorBoundary>
              ),
           },
           {
            path: "shop",
            element: (
                <CustomErrorBoundary>
                  <Suspense fallback={<ComponentLoader/>}>
                    <ShopPage />
                  </Suspense>
                </CustomErrorBoundary>
              ),
           },
           {
            path: "product-details/:id",
            element: (
                <CustomErrorBoundary>
                  <Suspense fallback={<FullPageLoader/>}>
                    <ProductDetailsPage />
                  </Suspense>
                </CustomErrorBoundary>
              ),
           },
           {
           path: "shipping-information",
           element:(
            <CustomErrorBoundary>
              <Suspense fallback={<FullPageLoader/>}>
                <ShippingPage />
              </Suspense>
            </CustomErrorBoundary>
          ),
          },
          {
            path: "payment-information",
            element: (
                <CustomErrorBoundary>
                  <Suspense fallback={<FullPageLoader/>}>
                    <PaymentPage />
                  </Suspense>
                </CustomErrorBoundary>
              ),
           },
           {
            path: "*",
            element: <Error404/>
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