import { Suspense, lazy } from "react"
import LoadingPage from "../pages/LoadingPage.jsx"

// Loadable wrapper for lazy loading
const Loadable = (Component) => (props) => (
  <Suspense fallback={<LoadingPage />}>
    <Component {...props} />
  </Suspense>
)

// Lazy loaded pages
export const HomePage = Loadable(lazy(() => import("../pages/Home.jsx")));
export const AboutPage = Loadable(lazy(() => import("../pages/About.jsx")));
export const ServicesPage = Loadable(lazy(() => import("../pages/Services.jsx")));
export const ContactPage = Loadable(lazy(() => import("../pages/Contact.jsx")));
export const ReferancePage = Loadable(lazy(() => import("../pages/Reference.jsx")));
export const ErrorPage = Loadable(lazy(() => import("../pages/Error.jsx")));
export const KVKKPage = Loadable(lazy(() => import("../pages/Kvkk.jsx")));
// export const LoadPage = Loadable(lazy(() => import("../pages/LoadingPage.jsx")));

