import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
}

export function SEOHead({
  title = 'TrendIT - Tecnología Sustentable | Infraestructura IT, Redes y Soluciones Empresariales',
  description = 'Transformamos desafíos en oportunidades con tecnología. Integramos infraestructura IT, redes, videoseguridad, team collaboration y energía con propósito sostenible.',
  canonical = 'https://www.trendit.com.ar',
  ogType = 'website'
}: SEOHeadProps) {
  
  useEffect(() => {
    // Set document title
    document.title = title;
    
    // Performance: Add preconnect and dns-prefetch for external resources
    const addPreconnect = (href: string, crossorigin?: boolean) => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = href;
        if (crossorigin) link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      }
    };
    
    const addDnsPrefetch = (href: string) => {
      if (!document.querySelector(`link[rel="dns-prefetch"][href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = href;
        document.head.appendChild(link);
      }
    };
    
    // Preconnect to WhatsApp
    addDnsPrefetch('https://wa.me');
    
    // Set or update meta tags
    const setMeta = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };
    
    // Set HTML lang attribute
    document.documentElement.lang = 'es-AR';
    
    // Add generator meta tag
    setMeta('generator', 'Developed by Axonqbit');
    
    // Standard meta tags
    setMeta('description', description);
    setMeta('robots', 'index, follow');
    setMeta('viewport', 'width=device-width, initial-scale=1.0');
    
    // Open Graph
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:type', ogType, true);
    setMeta('og:url', canonical, true);
    setMeta('og:site_name', 'TrendIT', true);
    setMeta('og:locale', 'es_AR', true);
    
    // Twitter Card
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    
    // Canonical link
    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = canonical;
    
    // JSON-LD Structured Data for Organization
    const existingScript = document.getElementById('json-ld-org');
    if (existingScript) {
      existingScript.remove();
    }
    
    const script = document.createElement('script');
    script.id = 'json-ld-org';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'TrendIT',
      'alternateName': 'TrendIT Tecnología Sustentable',
      'url': 'https://www.trendit.com.ar',
      'logo': 'https://www.trendit.com.ar/logo.png',
      'description': 'Empresa especializada en infraestructura IT, redes, videoseguridad, team collaboration y soluciones tecnológicas empresariales con enfoque sustentable.',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Córdoba',
        'addressRegion': 'Córdoba',
        'addressCountry': 'AR'
      },
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+54-351-600-0000',
        'contactType': 'Ventas',
        'availableLanguage': ['es']
      },
      'sameAs': [
        'https://www.linkedin.com/company/trendit',
        'https://www.instagram.com/trendit'
      ]
    });
    document.head.appendChild(script);
    
    // Website structured data
    const websiteScript = document.createElement('script');
    websiteScript.type = 'application/ld+json';
    websiteScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': 'TrendIT',
      'url': 'https://www.trendit.com.ar',
      'potentialAction': {
        '@type': 'SearchAction',
        'target': 'https://www.trendit.com.ar/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    });
    document.head.appendChild(websiteScript);
    
    // LocalBusiness structured data for Argentina
    const localBusinessScript = document.createElement('script');
    localBusinessScript.type = 'application/ld+json';
    localBusinessScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      'name': 'TrendIT',
      'image': 'https://www.trendit.com.ar/logo.png',
      'description': 'Soluciones de infraestructura IT, redes, videoseguridad, team collaboration y energía con enfoque sustentable para empresas en Argentina.',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Av. Rafael Núñez 3594',
        'addressLocality': 'Córdoba',
        'addressRegion': 'Córdoba',
        'postalCode': '5000',
        'addressCountry': 'AR'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '-31.4135',
        'longitude': '-64.1888'
      },
      'url': 'https://www.trendit.com.ar',
      'telephone': '+54-351-600-0000',
      'priceRange': '$$',
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          'opens': '09:00',
          'closes': '18:00'
        }
      ]
    });
    document.head.appendChild(localBusinessScript);
    
  }, [title, description, canonical, ogType]);
  
  return null;
}