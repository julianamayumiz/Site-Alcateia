const CACHE_VERSION = 'alcateia-chefia-v3';
const SHELL_CACHE = `${CACHE_VERSION}-shell`;
const RUNTIME_CACHE = `${CACHE_VERSION}-runtime`;

const APP_SHELL = [
  './chefia.html',
  './chefia-login.html',
  './manifest.json',
  '../styles/chefia.css',
  '../scripts/chefia.js',
  '../scripts/modules/state.js',
  '../scripts/modules/utils.js',
  '../scripts/modules/navigation.js',
  '../scripts/modules/modals.js',
  '../scripts/modules/firebase.js',
  '../scripts/modules/calendario.js',
  '../scripts/modules/presenca.js',
  '../scripts/modules/especialidades.js',
  '../scripts/modules/matilhas.js',
  '../scripts/modules/comunicados.js',
  '../scripts/modules/caixa.js',
  '../scripts/modules/dashboard.js',
  '../scripts/modules/import-export.js',
  '../scripts/firebase-config.js',
  '../images/logo_png.png',
  '../images/logo_jpeg.jpeg'
];

const RUNTIME_ALLOWED_HOSTS = [
  'fonts.googleapis.com',
  'fonts.gstatic.com',
  'cdnjs.cloudflare.com',
  'www.gstatic.com'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((key) => key !== SHELL_CACHE && key !== RUNTIME_CACHE)
          .map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;

  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Nunca interceptar chamadas ao Firebase (REST/WebSocket/longpoll)
  if (
    url.hostname.endsWith('firebaseio.com') ||
    url.hostname.endsWith('googleapis.com') ||
    url.hostname.endsWith('firebaseapp.com')
  ) {
    return;
  }

  // Navegação (usuario abrindo uma página) — network-first, fallback offline
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(SHELL_CACHE).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match('./chefia.html')))
    );
    return;
  }

  // Same-origin (app shell) — cache-first
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(SHELL_CACHE).then((cache) => cache.put(request, copy));
          }
          return response;
        });
      })
    );
    return;
  }

  // CDNs permitidas (fontes, Firebase SDK, SheetJS) — stale-while-revalidate
  if (RUNTIME_ALLOWED_HOSTS.some((host) => url.hostname === host || url.hostname.endsWith('.' + host))) {
    event.respondWith(
      caches.open(RUNTIME_CACHE).then((cache) =>
        cache.match(request).then((cached) => {
          const fetchPromise = fetch(request).then((response) => {
            if (response.ok || response.type === 'opaque') {
              cache.put(request, response.clone());
            }
            return response;
          }).catch(() => cached);
          return cached || fetchPromise;
        })
      )
    );
  }
});

self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});
