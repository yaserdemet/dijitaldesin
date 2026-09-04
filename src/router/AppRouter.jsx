import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import {
  HomePage,
  AboutPage,
  ServicesPage,
  ContactPage,
  ReferancePage,
  ErrorPage,
  KVKKPage,
  SecretPolicyPage,
} from "./element.jsx";
import { PATH_PAGE } from "./path";

const router = createBrowserRouter([
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
        path: PATH_PAGE.kvkk,
        element: <KVKKPage />,
      },
      {
        path: PATH_PAGE.secretPolicy,
        element: <SecretPolicyPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
