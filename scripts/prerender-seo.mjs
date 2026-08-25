import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const DIST_DIR = 'dist';
const SITE_URL = 'https://ayrota.com';

const routes = {
  '/alkon': {
    title: 'ALKON | GNSS-Denied IMU Navigation | Ayrota',
    description:
      'ALKON is Ayrota’s IMU-based navigation capability for autonomous platforms operating where GNSS cannot be fully relied upon.',
    image: `${SITE_URL}/products/alkon.png`,
    robots: 'index, follow, max-image-preview:large',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'ALKON',
      brand: { '@type': 'Brand', name: 'Ayrota' },
      category: 'GNSS-denied inertial navigation',
      description:
        'IMU-based navigation capability for autonomous platforms operating where GNSS cannot be fully relied upon.',
      url: `${SITE_URL}/alkon`,
      image: `${SITE_URL}/products/alkon.png`,
    },
  },
  '/yaya': {
    title: 'YAYA | Indoor Pedestrian Movement Intelligence | Ayrota',
    description:
      'YAYA estimates relative pedestrian movement from mobile inertial sensors and turns indoor motion into route, coverage and operational insights.',
    image: `${SITE_URL}/products/yaya.png`,
    robots: 'index, follow, max-image-preview:large',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'YAYA',
      brand: { '@type': 'Brand', name: 'Ayrota' },
      category: 'Indoor pedestrian movement intelligence',
      description:
        'Relative pedestrian movement estimation from mobile inertial sensors for indoor route, coverage and operational insights.',
      url: `${SITE_URL}/yaya`,
      image: `${SITE_URL}/products/yaya.png`,
    },
  },
  '/yoruk': {
    title: 'YÖRÜK | Road & Driving Analytics | Ayrota',
    description:
      'YÖRÜK transforms vehicle movement data into road-condition, maintenance and driving-safety insights for operational decision making.',
    image: `${SITE_URL}/products/yoruk.png`,
    robots: 'index, follow, max-image-preview:large',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'YÖRÜK',
      brand: { '@type': 'Brand', name: 'Ayrota' },
      category: 'Road and driving analytics',
      description:
        'Vehicle movement analytics for road condition, maintenance and driving-safety insights.',
      url: `${SITE_URL}/yoruk`,
      image: `${SITE_URL}/products/yoruk.png`,
    },
  },
  '/privacy': {
    title: 'Privacy Policy | Ayrota',
    description: 'Ayrota privacy policy.',
    image: `${SITE_URL}/hero.png`,
    robots: 'noindex, follow',
  },
};

function replaceMeta(html, selector, value) {
  const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`<meta\\s+${escapedSelector}\\s+content="[^"]*"\\s*/?>`, 'i');
  return html.replace(pattern, `<meta ${selector} content="${value}" />`);
}

function renderRoute(baseHtml, route, config) {
  const canonical = `${SITE_URL}${route}`;
  let html = baseHtml;

  html = html.replace(/<title>[^<]*<\/title>/i, `<title>${config.title}</title>`);
  html = replaceMeta(html, 'name="description"', config.description);
  html = replaceMeta(html, 'name="robots"', config.robots);
  html = replaceMeta(html, 'property="og:title"', config.title);
  html = replaceMeta(html, 'property="og:description"', config.description);
  html = replaceMeta(html, 'property="og:url"', canonical);
  html = replaceMeta(html, 'property="og:image"', config.image);
  html = replaceMeta(html, 'name="twitter:title"', config.title);
  html = replaceMeta(html, 'name="twitter:description"', config.description);
  html = replaceMeta(html, 'name="twitter:image"', config.image);
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
    `<link rel="canonical" href="${canonical}" />`,
  );

  html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/i, '');
  if (config.structuredData) {
    const structuredData = JSON.stringify(config.structuredData).replace(/</g, '\\u003c');
    html = html.replace(
      '</head>',
      `    <script type="application/ld+json" data-ayrota-seo="structured-data">${structuredData}</script>\n  </head>`,
    );
  }

  return html;
}

const baseHtml = await readFile(join(DIST_DIR, 'index.html'), 'utf8');

for (const [route, config] of Object.entries(routes)) {
  const outputPath = join(DIST_DIR, route.slice(1), 'index.html');
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, renderRoute(baseHtml, route, config));
}

console.log(`Generated SEO-ready static entry points for ${Object.keys(routes).length} routes.`);
