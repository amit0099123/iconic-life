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
import Contact from "./pages/Contact";
import ModalContactForm from "./components/ModalContactForm";
import VideoSlider from "./components/VideoSlider";
import SingleProduct from "./pages/SingleProduct";
import BlogDeatils from "./pages/BlogDeatils";
import ProductListing from "./pages/ProductListing";
import PromotionInput from "./pages/PromotionInput";
import OurDivisions from "./pages/OurDivisions";
import CategoryList from "./pages/Products";
import ProductByCategory from "./pages/ProductByCategory";
import Sitemap from "./pages/Sitemap";

const routesConfig = [
  { index: true, element: <Home />, sitemap: true },

  { path: "video", element: <VideoSlider />, sitemap: true },
  { path: "about-us", element: <AboutPage />, sitemap: true },
  { path: "products", element: <Products />, sitemap: true },
  { path: "blogs", element: <BlogPage />, sitemap: true },
  { path: "contact-us", element: <Contact />, sitemap: true },

  { path: "Pharma-franchise", element: <PharmaFranchise />, sitemap: true },
  { path: "PharmaFranchiseCompany", element: <PharmaFranchiseCompany />, sitemap: true },
  { path: "PcdPharmaFranchise", element: <PcdPharmaFranchise />, sitemap: true },
  { path: "PcdPharmaFranchiseCompany", element: <PcdPharmaFranchiseCompany />, sitemap: true },
  { path: "IndianPcdPharamaFranchise", element: <IndianPcdPharamaFranchise />, sitemap: true },
  { path: "VisualAid", element: <VisualAid />, sitemap: true },
  { path: "Product-Listing", element: <ProductListing />, sitemap: true },
  { path: "Promotion-Input", element: <PromotionInput />, sitemap: true },
  { path: "OurDivisions", element: <OurDivisions />, sitemap: true },

  { path: "categories", element: <CategoryList />, sitemap: true },

  // Dynamic routes (not in sitemap)
  { path: "products-single/:category/:product", element: <SingleProduct />, sitemap: false },
  { path: ":blogView", element: <BlogDeatils />, sitemap: false },
  { path: "category/:id", element: <ProductByCategory />, sitemap: false },
  { path: "modal-form", element: <ModalContactForm />, sitemap: false },
  { path: "sitemap", element: <Sitemap />, sitemap: false }
];

export default routesConfig;