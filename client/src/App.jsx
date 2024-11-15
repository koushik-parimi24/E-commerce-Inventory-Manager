import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminLayout from "./components/admin/layout";
import AdminDashboard from "./pages/admin/dashboard";
import AdminProducts from "./pages/admin/products";
import AdminOrders from "./pages/admin/orders";
import AdminFeatures from "./pages/admin/features";
import NotFound from "./pages/notFound/notfound";
import CheckAuth from "./components/common/check-auth";
import UnauthPage from "./pages/unauth/unauthpage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./store/auth-slice";
import { Skeleton } from "@/components/ui/skeleton";
import AdminProductDetails from "./pages/admin/product-details";
import './App.css'

function App() {


const {user,isAuthenticated, isLoading } = useSelector(state => state.auth);
const dispatch = useDispatch();

useEffect(()=>{
  dispatch(checkAuth())
},[dispatch]);

if (isLoading) return  <Skeleton className="w-full h-full bg-black rounded-full" />;

  return (
    <div className="flex flex-col overflow-hidden bg-white"> 
      {/* <h1>Header component</h1> */}
    <Routes>
    <Route path="/" element={
         <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
      }/>
      <Route path="/auth" element={
         <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
      }>
        <Route path="login" element={<AuthLogin/>} />
        <Route path="register" element={<AuthRegister/>}/>
      </Route>
      <Route path="/admin" element={
        <CheckAuth isAuthenticated={isAuthenticated} user={user}>
        <AdminLayout />
      </CheckAuth>
      }>
        <Route path="products" element={<AdminProducts/>}/>
        <Route path="dashboard" element={<AdminDashboard/>}/>
        <Route path="products/:id" element={<AdminProductDetails/>}/>
      </Route>
      <Route path="/unauth-page" element={<UnauthPage />} />
      <Route path="*" element={<NotFound />} ></Route>
    </Routes>  

    </div>
  )
}

export default App;
