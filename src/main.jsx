import { createRoot, hydrateRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './router/AppRouter'
import posthog from 'posthog-js'

// defaults: history_change sayesinde SPA rota değişimlerinde $pageview otomatik gönderilir.
posthog.init('phc_CqvgbsqAVQQ9EmEXLpsDv5X69AbCpyNPoMfsSdqupS7s', {
    api_host: 'https://eu.i.posthog.com',
    defaults: '2025-05-24',
    person_profiles: 'identified_only',
})

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

// PWA: service worker yalnızca production'da kaydedilir (dev'de HMR'ı etkilemesin).
if (import.meta.env.PROD && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {})
    })
}
