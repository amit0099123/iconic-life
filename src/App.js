<<<<<<< HEAD
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import routesConfig from "./routesConfig";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: routesConfig,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
=======
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import Products from "./pages/Products";
import BlogPage from "./pages/Blogs";
import PharmaFranchise from "./pages/Pharma-franchise";
import PharmaFranchiseCompany from "./pages/Pharma-FranchiseCompany";
import IndianPcdPharamaFranchise from "./pages/IndianPcdPharamaFranchise";
import PcdPharmaFranchise from "./pages/PcdPharamFranchise";
import PcdPharmaFranchiseCompany from "./pages/PcdPharamaFranchiseCompany";
import VisualAid from "./pages/Visual";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import ModalContactForm from "./components/ModalContactForm";
import { Modal, Button, Placeholder } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import Root from "./Root";
import HomePage from "./pages/Home";
import VideoSlider from "./components/VideoSlider";
import SingleProduct from "./pages/SingleProduct";
import BlogDeatils from "./pages/BlogDeatils";
import ProductListing from "./pages/ProductListing";
import PromotionInput from "./pages/PromotionInput";
import form from "./components/footerForm";
import OurDivisions from "./pages/OurDivisions";
import CategoryList from "./pages/Products.jsx";
import ProductByCategory from "./pages/ProductByCategory";

function App() {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/video",
          element: <VideoSlider />,
        },
        {
          path: "/about-us",
          element: <AboutPage />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/products-single/:category/:product",
          element: <SingleProduct />,
        },
        {
          path: "/modal-form",
          element: <ModalContactForm />,
        },
        {
          path: "/blogs",
          element: <BlogPage />,
        },
        {
          path: "/:blogView/",
          element: <BlogDeatils />,
        },
        {
          path: "/Pharma-franchise",
          element: <PharmaFranchise />,
        },
        {
          path: "/PharmaFranchiseCompany",
          element: <PharmaFranchiseCompany />,
        },
        {
          path: "/PcdPharmaFranchise",
          element: <PcdPharmaFranchise />,
        },
        {
          path: "/PcdPharmaFranchiseCompany",
          element: <PcdPharmaFranchiseCompany />,
        },
        {
          path: "/IndianPcdPharamaFranchise",
          element: <IndianPcdPharamaFranchise />,
        },
        {
          path: "/VisualAid",
          element: <VisualAid />,
        },
        {
          path: "/contact-us",
          element: <Contact />,
        },

        {
          path: "/Product-Listing",
          element: <ProductListing />,
        },
        {
          path: "/Promotion-Input",
          element: <PromotionInput />,
        },
        {
          path: "/OurDivisions",
          element: <OurDivisions />,
        },
		{ path: "/categories", element: <CategoryList /> },
        { path: "/category/:id", element: <ProductByCategory /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
>>>>>>> f3953e61be428f07f1cc313516974d7806c0271b
