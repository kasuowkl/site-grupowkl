// Confere no site publicado: menu em 1 linha e modais abrindo.
const path = require('path');
const { chromium } = require(path.join(process.env.PW_DIR, 'node_modules', 'playwright'));
(async () => {
  const b = await chromium.launch();
  let falhas = 0;
  for (const pagina of ['', 'desenvolvimento.html']) {
    const p = await b.newPage({ viewport: { width: 1400, height: 900 } });
    const erros = [];
    p.on('pageerror', (e) => erros.push(e.message));
    await p.goto('https://site.grupowkl.com.br/' + pagina + '?x=' + Date.now(), { waitUntil: 'networkidle' });
    const r = await p.evaluate(() => {
      const centros = [...document.querySelectorAll('nav ul li')].map((li) => { const q = li.getBoundingClientRect(); return Math.round((q.top + q.bottom) / 20); });
      return { linhas: new Set(centros).size, comDetalhe: document.querySelectorAll('.card[data-detalhe] .card-mais').length };
    });
    let abriu = null;
    if (r.comDetalhe) {
      const c = p.locator('.card[data-detalhe] p').first();
      await c.scrollIntoViewIfNeeded();
      await c.click();
      await p.waitForTimeout(500);
      abriu = await p.evaluate(() => { const d = document.querySelector('dialog.detalhe'); return d && d.open ? d.querySelector('#detalhe-titulo').textContent : null; });
    }
    const certo = r.linhas === 1 && erros.length === 0 && (pagina === '' || (r.comDetalhe === 13 && abriu));
    if (!certo) falhas++;
    console.log(`${certo ? 'OK   ' : 'FALHA'} /${pagina}: menu ${r.linhas} linha(s), cartões com detalhe ${r.comDetalhe}, modal aberto: ${abriu}, erros ${JSON.stringify(erros)}`);
    await p.close();
  }
  await b.close();
  process.exit(falhas ? 1 : 0);
})();
