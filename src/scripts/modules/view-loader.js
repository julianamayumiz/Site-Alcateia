// ===================== VIEW LOADER =====================
// Carrega fragments HTML de views sob demanda e os injeta no #view-container.
// Cada view é buscada uma única vez — reusos subsequentes encontram o elemento já no DOM.

const _loadedViews = new Set();

async function loadView(page) {
  if (_loadedViews.has(page)) return;

  const res = await fetch('../views/' + page + '.html');
  if (!res.ok) throw new Error('Erro ao carregar view "' + page + '": HTTP ' + res.status);

  const html = await res.text();

  const div = document.createElement('div');
  div.className = 'page';
  div.id = 'p-' + page;
  div.setAttribute('aria-live', 'polite');
  div.innerHTML = html;

  document.getElementById('view-container').appendChild(div);
  _loadedViews.add(page);
}

window.loadView = loadView;
