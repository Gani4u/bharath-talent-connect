import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { seoConfig } from './constants/config'

// Dynamically initialize Google Analytics (GA4) if configured
if (seoConfig.googleAnalyticsId && seoConfig.googleAnalyticsId !== "G-XXXXXXXXXX") {
  const scriptId = "google-analytics";
  if (!document.getElementById(scriptId)) {
    // Inject the main gtag script
    const gtagScript = document.createElement("script");
    gtagScript.id = scriptId;
    gtagScript.async = true;
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${seoConfig.googleAnalyticsId}`;
    document.head.appendChild(gtagScript);

    // Initialize gtag
    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${seoConfig.googleAnalyticsId}');
    `;
    document.head.appendChild(inlineScript);
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
