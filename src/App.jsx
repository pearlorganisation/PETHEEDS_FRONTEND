import { useState } from "react";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router";
import Header from "./pages/Components/Header";
import Footer from "./pages/Components/Footer";
import About from "./pages/Components/About/About";
import OurProject from "./pages/Components/OurProduct/OurProject";
import Booknow from "./pages/Components/Booknow";

import Stats from "./pages/Components/Stats/Stats";
import Ourvision from "./pages/Components/Ourvision/Ourvision";
import Ourservice from "./pages/Components/OurService/Ourservice";
import SingleProduct from "./pages/Components/Product/SingleProduct";
import ProductList from "./pages/Components/Product/ProductList";
import { Cart } from "./pages/Components/Product/Cart";
import { SignUp } from "./pages/Components/Auth/SignUp";
import { SignIn } from "./pages/Components/Auth/SignIn";
import { Toaster } from "sonner";
import Reset from "./pages/Components/Auth/Reset";
import Otpvarfication from "./pages/Components/Auth/Otpvarfication";
import Contactus from "./pages/Components/Contact/Contactus";


import BlogDetails from "./pages/Blogs/BlogDetails";
import Blog from "./pages/Blogs/Blog";
import NewAddress from "./pages/Components/Address/NewAddress";
import Billing from "./pages/Components/Payment/Billing";
import { Order } from "./pages/Components/Product/Order";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourProduct" element={<OurProject />} />
        <Route path="/singleproduct/:productId" element={<SingleProduct />} />
        <Route path="booknow" element={<Booknow />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blogDetails" element={<BlogDetails />} />
        <Route path="stats" element={<Stats />} />
        <Route path="ourvision" element={<Ourvision />} />
        <Route path="ourservice" element={<Ourservice />} />
        <Route path="productlist" element={<ProductList />} />
        <Route path="cart" element={<Cart />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<SignIn />} />
        <Route path="reset" element={<Reset />} />
        <Route path="otp" element={<Otpvarfication />} />
        <Route path="contact" element={<Contactus />} />

        <Route path="addnewaddress" element={<NewAddress />} />
        <Route path="billing" element={<Billing />} />
        <Route path="order" element={<Order />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
