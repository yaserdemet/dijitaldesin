import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import {
  HomePage,
  AboutPage,
  ServicesPage,
  ContactPage,
  ReferancePage,
  SssPage,
  BlogPage,
  BlogDetailPage,
  ErrorPage,
  KVKKPage,
  SecretPolicyPage,
  EmailRecivedPage,
} from "./element.jsx";
import { PATH_PAGE } from "./path";

// Route dizisi build sırasında prerender (src/entry-server.jsx) için de kullanılır.
export const routes = [
  {
    path: PATH_PAGE.root,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: PATH_PAGE.about,
        element: <AboutPage />,
      },
      {
        path: PATH_PAGE.services,
        element: <ServicesPage />,
      },
      {
        path: PATH_PAGE.contact,
        element: <ContactPage />,
      },
      {
        path: PATH_PAGE.referances,
        element: <ReferancePage />,
      },
      {
        path: PATH_PAGE.sss,
        element: <SssPage />,
      },
      {
        path: PATH_PAGE.blog,
        element: <BlogPage />,
      },
      {
        path: PATH_PAGE.blogDetail,
        element: <BlogDetailPage />,
      },
      {
        path: PATH_PAGE.kvkk,
        element: <KVKKPage />,
      },
      {
        path: PATH_PAGE.secretPolicy,
        element: <SecretPolicyPage />,
      },
      {
        path: PATH_PAGE.thankYou,
        element: <EmailRecivedPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
];

// Build sırasındaki prerender ortamında window yok; tarayıcı router yalnızca istemcide kurulur.
const router =
  typeof window !== "undefined" ? createBrowserRouter(routes) : null;

export default router;
