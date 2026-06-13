declare global {
  interface Window {
    gtag?: (command: string, eventName: string, params?: Record<string, unknown>) => void;
    dataLayer?: unknown[];
  }
}

export const trackCTAClick = (ctaName: string, location: string, pageName?: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "cta_click", {
      cta_name: ctaName,
      cta_location: location,
      page_name: pageName || document.title,
      timestamp: new Date().toISOString(),
    });
  }
};

export const trackFormSubmit = (formName: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "form_submit", {
      form_name: formName,
      timestamp: new Date().toISOString(),
    });
  }
};

export const trackServiceViewed = (serviceName: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "service_viewed", {
      service_name: serviceName,
      timestamp: new Date().toISOString(),
    });
  }
};

export const trackCityPageViewed = (city: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "city_page_viewed", {
      city_name: city,
      timestamp: new Date().toISOString(),
    });
  }
};
