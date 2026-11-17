// Garante que o site sempre abra na home (cabeçalho e banner), mesmo que:
// - o endereço tenha uma seção no final (ex.: .../#categorias), que faria o navegador pular para ela;
// - a pessoa recarregue a página, quando o navegador voltaria para onde ela estava.
// Os links do menu continuam funcionando normalmente depois que a página abre.
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
if (location.hash) history.replaceState(null, '', location.pathname + location.search);
window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
window.addEventListener('load', () => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }));
