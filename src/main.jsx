import { createRoot, hydrateRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './router/AppRouter'

const container = document.getElementById('root')
const app = <RouterProvider router={router} />

// Build'de prerender edilen sayfalar (scripts/prerender.js) hazır HTML'i devralır;
// diğer sayfalar (ve dev ortamı) normal şekilde istemcide render edilir.
const normalizePath = (path) => path.replace(/\/+$/, '') || '/'
const prerenderedPath = container.dataset.prerendered

if (prerenderedPath && normalizePath(prerenderedPath) === normalizePath(window.location.pathname)) {
    hydrateRoot(container, app)
} else {
    container.replaceChildren()
    createRoot(container).render(app)
}
