import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const site = 'https://ayrota.com';
const dist = path.resolve(process.cwd(), 'dist');
const originalHtml = await readFile(path.join(dist, 'index.html'), 'utf8');

const pages = [
  {
    path: '/',
    title: 'Ayrota | Inertial Navigation & Motion Intelligence',
    description: 'Ayrota develops inertial navigation, motion estimation and operational intelligence technologies for autonomous systems, vehicles and indoor environments.',
    image: `${site}/hero.png`,
    heading: 'Inertial Intelligence for Real-World Systems',
    body: 'Inertial navigation, motion estimation and operational intelligence for autonomous systems, vehicles and indoor environments.',
    jsonLd: 'organization',
  },
  {
    path: '/alkon/',
    title: 'ALKON | GNSS-Denied IMU Navigation | Ayrota',
    description: 'ALKON is Ayrota’s IMU-based navigation capability for autonomous platforms operating where GNSS cannot be fully relied upon.',
    image: `${site}/products/alkon.png`,
    heading: 'ALKON — GNSS-Denied Navigation',
    body: 'IMU-based navigation and controlled technical validation for autonomous platforms operating when GNSS cannot be fully relied upon.',
    jsonLd: 'article',
  },
  {
    path: '/yaya/',
    title: 'YAYA | Indoor Pedestrian Movement Intelligence | Ayrota',
    description: 'YAYA estimates relative pedestrian movement from mobile inertial sensors and turns indoor motion into route, coverage and operational insights.',
    image: `${site}/products/yaya.png`,
    heading: 'YAYA — Indoor Movement Intelligence',
    body: 'Mobile inertial sensing for relative pedestrian movement estimation, route analysis, coverage insights and indoor operations.',
    jsonLd: 'article',
  },
  {
    path: '/privacy/',
    title: 'Privacy & Data Notice | Ayrota',
    description: 'Ayrota privacy and data notice.',
    image: `${site}/hero.png`,
    heading: 'Privacy & Data Notice',
    body: 'Read Ayrota’s privacy and data notice.',
    noindex: true,
  },
];

function escapeHtml(value) {
  return value.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function structuredData(page) {
  if (page.noindex) return '';
  const canonical = `${site}${page.path}`;
  const data = page.jsonLd === 'organization'
    ? {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Ayrota',
        url: `${site}/`,
        logo: `${site}/icon.png`,
        description: page.description,
      }
    : {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: page.title,
        description: page.description,
        inLanguage: 'en-US',
        mainEntityOfPage: canonical,
        publisher: { '@type': 'Organization', name: 'Ayrota', url: `${site}/` },
      };

  return `<script type="application/ld+json" data-ayrota-seo="structured-data">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`;
}

function renderPage(page) {
  const canonical = `${site}${page.path}`;
  const tags = [
    `<title>${escapeHtml(page.title)}</title>`,
    `<meta name="description" content="${escapeHtml(page.description)}" />`,
    `<meta name="robots" content="${page.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'}" />`,
    `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:type" content="${page.jsonLd === 'article' ? 'article' : 'website'}" />`,
    '<meta property="og:site_name" content="Ayrota" />',
    '<meta property="og:locale" content="en_US" />',
    `<meta property="og:title" content="${escapeHtml(page.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(page.description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:image" content="${escapeHtml(page.image)}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${escapeHtml(page.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(page.description)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(page.image)}" />`,
    structuredData(page),
  ].join('\n    ');

  const fallback = [
    '<main style="min-height:100vh;padding:100px 6%;background:#09131d;color:#eef3f7;font-family:system-ui,sans-serif">',
    `<h1>${escapeHtml(page.heading)}</h1>`,
    `<p style="max-width:780px;color:#bdc9d5;line-height:1.6">${escapeHtml(page.body)}</p>`,
    '<nav aria-label="Ayrota pages">',
    '<a style="color:#b8dff5;margin-right:24px" href="/">Ayrota</a>',
    '<a style="color:#b8dff5;margin-right:24px" href="/alkon/">ALKON</a>',
    '<a style="color:#b8dff5" href="/yaya/">YAYA</a>',
    '</nav></main>',
  ].join('');

  let html = originalHtml
    .replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi, '')
    .replace(/<meta\b(?=[^>]*\b(?:name|property)\s*=\s*["'](?:description|robots|og:[^"']*|twitter:[^"']*)["'])[^>]*>/gi, '')
    .replace(/<link\b(?=[^>]*\brel\s*=\s*["']canonical["'])[^>]*>/gi, '')
    .replace(/<script\b(?=[^>]*\btype\s*=\s*["']application\/ld\+json["'])[^>]*>[\s\S]*?<\/script>/gi, '');

  html = html.replace(/<html\b([^>]*)>/i, (match, attrs) =>
    `<html${attrs.replace(/\s+lang\s*=\s*["'][^"']*["']/i, '')} lang="en">`);
  if (!/<\/head>/i.test(html)) throw new Error('dist/index.html has no </head>');
  html = html.replace(/<\/head>/i, `    ${tags}\n  </head>`);

  const rootPattern = /<div\s+id\s*=\s*["']root["']\s*>\s*<\/div>/i;
  if (!rootPattern.test(html)) {
    throw new Error('dist/index.html must contain an empty <div id="root"></div>');
  }
  html = html.replace(rootPattern, `<div id="root">${fallback}</div>`);
  if (page.path !== '/') {
    html = html.replace(/((?:src|href)=["'])\.?\/assets\//g, '$1/assets/');
  }
  return html;
}

for (const page of pages) {
  const dir = path.join(dist, page.path.slice(1));
  await mkdir(dir, { recursive: true });
  const html = renderPage(page);
  await writeFile(path.join(dir, 'index.html'), html, 'utf8');
  console.log(`Generated ${page.path}`);
}
